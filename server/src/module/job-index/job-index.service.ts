import { prisma } from "../../database/db.js";
import type { JobSourceType } from "@prisma/client";
import { normalizeJob, type NormalizedJobInput } from "./job-normalizer.js";
import {
  enrichJobWithAI,
  generateEmbedding,
  buildJobEmbeddingText,
  buildUserEmbeddingText,
} from "./job-index.enrichment.js";

export class JobIndexService {
  // ── Sync a single source record into jobIndex ──
  async syncJob(sourceType: JobSourceType, sourceId: number): Promise<void> {
    const input = await this.fetchSource(sourceType, sourceId);
    if (!input) return;

    const normalized = normalizeJob(input);

    await prisma.jobIndex.upsert({
      where: { sourceType_sourceId: { sourceType, sourceId } },
      create: {
        sourceType,
        sourceId,
        title: normalized.title,
        company: normalized.company,
        location: normalized.location,
        salary: normalized.salary,
        salaryMin: normalized.salaryMin,
        salaryMax: normalized.salaryMax,
        description: normalized.description,
        tags: normalized.tags,
        workMode: normalized.workMode,
        applicationUrl: normalized.applicationUrl,
        deadline: normalized.deadline,
      },
      update: {
        title: normalized.title,
        company: normalized.company,
        location: normalized.location,
        salary: normalized.salary,
        salaryMin: normalized.salaryMin,
        salaryMax: normalized.salaryMax,
        description: normalized.description,
        tags: normalized.tags,
        workMode: normalized.workMode,
        applicationUrl: normalized.applicationUrl,
        deadline: normalized.deadline,
        isActive: true,
      },
    });
  }

  // ── Fetch raw data from a source table ──
  private async fetchSource(
    sourceType: JobSourceType,
    sourceId: number,
  ): Promise<NormalizedJobInput | null> {
    if (sourceType === "INTERNAL") {
      const job = await prisma.job.findUnique({ where: { id: sourceId } });
      if (!job || job.status !== "PUBLISHED") return null;
      return {
        title: job.title,
        company: job.company,
        location: job.location,
        salary: job.salary,
        description: job.description,
        tags: job.tags,
        applicationUrl: `/jobs/${job.id}`,
        deadline: job.deadline,
      };
    }

    if (sourceType === "SCRAPED") {
      const sj = await prisma.scrapedJob.findUnique({ where: { id: sourceId } });
      if (!sj || sj.status !== "ACTIVE") return null;
      return {
        title: sj.title,
        company: sj.company,
        location: sj.location,
        salary: sj.salary,
        description: sj.description,
        tags: sj.tags,
        applicationUrl: sj.applicationUrl,
      };
    }

    if (sourceType === "ADMIN") {
      const aj = await prisma.adminJob.findUnique({ where: { id: sourceId } });
      if (!aj || !aj.isActive) return null;
      return {
        title: aj.role || "Open Role",
        company: aj.company || "Company",
        location: aj.location || "India",
        salary: aj.salary,
        description: aj.description || "",
        tags: aj.tags,
        applicationUrl: aj.applyLink,
      };
    }

    return null;
  }

  // ── Sync all un-synced jobs from every source ──
  async syncAllNewJobs(): Promise<number> {
    let synced = 0;

    // Internal published jobs not yet in index
    const internalJobs = await prisma.$queryRaw<Array<{ id: number }>>`
      SELECT j.id FROM "job" j
      LEFT JOIN "jobIndex" ji ON ji."sourceType" = 'INTERNAL' AND ji."sourceId" = j.id
      WHERE ji.id IS NULL AND j.status = 'PUBLISHED'
    `;
    for (const { id } of internalJobs) {
      await this.syncJob("INTERNAL", id);
      synced++;
    }

    // Active scraped jobs not yet in index
    const scrapedJobs = await prisma.$queryRaw<Array<{ id: number }>>`
      SELECT sj.id FROM "scrapedJob" sj
      LEFT JOIN "jobIndex" ji ON ji."sourceType" = 'SCRAPED' AND ji."sourceId" = sj.id
      WHERE ji.id IS NULL AND sj.status = 'ACTIVE'
    `;
    for (const { id } of scrapedJobs) {
      await this.syncJob("SCRAPED", id);
      synced++;
    }

    // Active admin jobs not yet in index
    const adminJobs = await prisma.$queryRaw<Array<{ id: number }>>`
      SELECT aj.id FROM "adminJob" aj
      LEFT JOIN "jobIndex" ji ON ji."sourceType" = 'ADMIN' AND ji."sourceId" = aj.id
      WHERE ji.id IS NULL AND aj."isActive" = true
    `;
    for (const { id } of adminJobs) {
      await this.syncJob("ADMIN", id);
      synced++;
    }

    return synced;
  }

  // ── Deactivate index entries whose source expired ──
  async deactivateExpired(): Promise<void> {
    await prisma.$executeRaw`
      UPDATE "jobIndex" SET "isActive" = false
      WHERE "sourceType" = 'SCRAPED' AND "sourceId" IN (
        SELECT id FROM "scrapedJob" WHERE status != 'ACTIVE'
      ) AND "isActive" = true
    `;
    await prisma.$executeRaw`
      UPDATE "jobIndex" SET "isActive" = false
      WHERE "sourceType" = 'INTERNAL' AND "sourceId" IN (
        SELECT id FROM "job" WHERE status != 'PUBLISHED'
      ) AND "isActive" = true
    `;
    await prisma.$executeRaw`
      UPDATE "jobIndex" SET "isActive" = false
      WHERE "sourceType" = 'ADMIN' AND "sourceId" IN (
        SELECT id FROM "adminJob" WHERE "isActive" = false
      ) AND "isActive" = true
    `;
  }

  // ── Enrich unenriched jobs with AI ──
  async enrichUnenrichedJobs(batchSize = 20): Promise<number> {
    const jobs = await prisma.jobIndex.findMany({
      where: { isEnriched: false, isActive: true },
      take: batchSize,
      orderBy: { createdAt: "desc" },
    });

    let enriched = 0;
    for (const job of jobs) {
      try {
        const data = await enrichJobWithAI(job.title, job.description);
        await prisma.jobIndex.update({
          where: { id: job.id },
          data: {
            skills: data.skills,
            experienceLevel: data.experienceLevel || job.experienceLevel,
            workMode: data.workMode || job.workMode,
            domain: data.domain,
            salaryMin: data.salaryMin || job.salaryMin,
            salaryMax: data.salaryMax || job.salaryMax,
            isEnriched: true,
            lastEnrichedAt: new Date(),
          },
        });
        enriched++;
      } catch (err) {
        console.error(`[JobIndex] Failed to enrich job ${job.id}:`, err);
      }
      await new Promise((r) => setTimeout(r, 100));
    }
    return enriched;
  }

  // ── Generate embeddings for enriched jobs ──
  async generateJobEmbeddings(batchSize = 50): Promise<number> {
    const jobs = await prisma.jobIndex.findMany({
      where: { hasEmbedding: false, isEnriched: true, isActive: true },
      take: batchSize,
    });

    let embedded = 0;
    for (const job of jobs) {
      try {
        const text = buildJobEmbeddingText(job);
        const vector = await generateEmbedding(text);
        const vectorStr = `[${vector.join(",")}]`;
        await prisma.$executeRawUnsafe(
          `UPDATE "jobIndex" SET embedding = $1::vector, "hasEmbedding" = true WHERE id = $2`,
          vectorStr,
          job.id,
        );
        embedded++;
      } catch (err) {
        console.error(`[JobIndex] Failed to embed job ${job.id}:`, err);
      }
      await new Promise((r) => setTimeout(r, 50));
    }
    return embedded;
  }

  // ── Generate embedding for a single user ──
  async generateUserEmbedding(userId: number): Promise<void> {
    const pref = await prisma.userJobPreference.findUnique({ where: { userId } });
    if (!pref) return;

    const text = buildUserEmbeddingText(pref);
    const vector = await generateEmbedding(text);
    const vectorStr = `[${vector.join(",")}]`;

    await prisma.$executeRawUnsafe(
      `UPDATE "userJobPreference" SET embedding = $1::vector, "hasEmbedding" = true WHERE "userId" = $2`,
      vectorStr,
      userId,
    );
  }

  // ── Batch generate user embeddings ──
  async generateAllUserEmbeddings(): Promise<number> {
    const prefs = await prisma.userJobPreference.findMany({
      where: { hasEmbedding: false },
      take: 100,
    });

    let count = 0;
    for (const pref of prefs) {
      try {
        await this.generateUserEmbedding(pref.userId);
        count++;
      } catch (err) {
        console.error(`[JobIndex] Failed to embed user ${pref.userId}:`, err);
      }
      await new Promise((r) => setTimeout(r, 50));
    }
    return count;
  }

  // ── Search jobs with optional vector similarity ──
  async searchJobs(params: {
    query?: string | null;
    skills?: string[] | null;
    location?: string | null;
    workMode?: string | null;
    experienceLevel?: string | null;
    domain?: string | null;
    salaryMin?: number | null;
    limit?: number;
    offset?: number;
  }): Promise<{ jobs: any[]; total: number }> {
    const limit = params.limit || 10;
    const offset = params.offset || 0;

    // Build Prisma WHERE conditions — use AND for hard filters, be lenient on others
    const where: any = { isActive: true };

    // Soft filters applied via AND array (each is optional)
    const andConditions: any[] = [];

    if (params.domain) andConditions.push({ domain: params.domain });
    if (params.workMode) andConditions.push({ workMode: params.workMode });
    if (params.experienceLevel) andConditions.push({ experienceLevel: params.experienceLevel });
    if (params.salaryMin) {
      // Handle both raw numbers and LPA values the AI may send
      const salary = params.salaryMin < 1000 ? params.salaryMin * 100000 : params.salaryMin;
      andConditions.push({ salaryMax: { gte: salary } });
    }
    if (params.skills && params.skills.length > 0) {
      andConditions.push({ skills: { hasSome: params.skills } });
    }
    // Split comma-separated locations into OR conditions
    if (params.location) {
      const locs = params.location.split(/[,;]+/).map((l: string) => l.trim()).filter(Boolean);
      if (locs.length > 0) {
        andConditions.push({
          OR: locs.map((loc: string) => ({ location: { contains: loc, mode: "insensitive" } })),
        });
      }
    }

    // Text search via query
    if (params.query) {
      andConditions.push({
        OR: [
          { title: { contains: params.query, mode: "insensitive" } },
          { company: { contains: params.query, mode: "insensitive" } },
          { description: { contains: params.query, mode: "insensitive" } },
        ],
      });
    }

    // Try strict search first (all filters)
    if (andConditions.length > 0) where.AND = andConditions;

    let [jobs, total] = await Promise.all([
      prisma.jobIndex.findMany({ where, orderBy: { createdAt: "desc" }, take: limit, skip: offset }),
      prisma.jobIndex.count({ where }),
    ]);

    // If strict search returns nothing, progressively relax filters
    if (jobs.length === 0 && andConditions.length > 1) {
      // Try with just skills + domain (drop location, salary, workMode, query)
      const relaxed: any = { isActive: true, AND: [] as any[] };
      if (params.skills && params.skills.length > 0) {
        relaxed.AND.push({ skills: { hasSome: params.skills } });
      }
      if (params.domain) {
        relaxed.AND.push({ domain: params.domain });
      }
      if (relaxed.AND.length === 0) delete relaxed.AND;

      [jobs, total] = await Promise.all([
        prisma.jobIndex.findMany({ where: relaxed, orderBy: { createdAt: "desc" }, take: limit, skip: offset }),
        prisma.jobIndex.count({ where: relaxed }),
      ]);
    }

    // Last resort: just return latest active jobs
    if (jobs.length === 0) {
      [jobs, total] = await Promise.all([
        prisma.jobIndex.findMany({ where: { isActive: true }, orderBy: { createdAt: "desc" }, take: limit, skip: offset }),
        prisma.jobIndex.count({ where: { isActive: true } }),
      ]);
    }

    return { jobs, total };
  }

  // ── Semantic search using vector similarity ──
  async semanticSearch(queryText: string, limit = 10): Promise<any[]> {
    try {
      const queryVector = await generateEmbedding(queryText);
      const vectorStr = `[${queryVector.join(",")}]`;

      const jobs = await prisma.$queryRawUnsafe<any[]>(
        `SELECT id, title, company, location, salary, "salaryMin", "salaryMax",
                description, tags, skills, "experienceLevel", "workMode", domain,
                "applicationUrl", deadline, "sourceType", "sourceId",
                1 - (embedding <=> $1::vector) AS similarity
         FROM "jobIndex"
         WHERE "isActive" = true AND "hasEmbedding" = true
         ORDER BY embedding <=> $1::vector
         LIMIT $2`,
        vectorStr,
        limit,
      );
      return jobs;
    } catch (err) {
      console.error("[JobIndex] Semantic search failed, falling back:", err);
      return [];
    }
  }
}

export const jobIndexService = new JobIndexService();
