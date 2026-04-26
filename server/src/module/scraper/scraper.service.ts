import cron from "node-cron";
import { prisma } from "../../database/db.js";
import type { BaseScraper } from "./scrapers/base.scraper.js";
import type { ScrapedJobData } from "./scrapers/base.scraper.js";
import { ArbeitnowScraper } from "./scrapers/arbeitnow.scraper.js";
import { AdzunaScraper } from "./scrapers/adzuna.scraper.js";
import { LinkedInScraper } from "./scrapers/linkedin.scraper.js";
import type { Prisma } from "@prisma/client";

interface ScrapedJobQuery {
  page: number;
  limit: number;
  search?: string | undefined;
  location?: string | undefined;
  source?: string | undefined;
  tags?: string | undefined;
}

export class ScraperService {
  private scrapers: BaseScraper[] = [];
  private cronJob: cron.ScheduledTask | null = null;
  private isRunning = false;

  constructor() {
    this.scrapers = [
      new ArbeitnowScraper(),
      new AdzunaScraper(),
      new LinkedInScraper(),
    ];
  }

  /** Start the cron scheduler. Default: every 6 hours */
  startCron(schedule = "0 */6 * * *") {
    if (this.cronJob) {
      this.cronJob.stop();
    }

    this.cronJob = cron.schedule(schedule, () => {
      void this.runAllScrapers();
    });

    console.log(`[Scraper] Cron scheduled: ${schedule}`);
  }

  stopCron() {
    if (this.cronJob) {
      this.cronJob.stop();
      this.cronJob = null;
      console.log("[Scraper] Cron stopped");
    }
  }

  /** Run all scrapers and upsert results */
  async runAllScrapers(): Promise<{
    results: Array<{
      source: string;
      jobsFound: number;
      jobsCreated: number;
      jobsUpdated: number;
      error?: string | undefined;
      duration: number;
    }>;
  }> {
    if (this.isRunning) {
      console.log("[Scraper] Already running, skipping...");
      return { results: [] };
    }

    this.isRunning = true;
    console.log("[Scraper] Starting scrape run...");

    const SCRAPER_TIMEOUT = 5 * 60 * 1000; // 5 minutes per scraper

    const results: Array<{
      source: string;
      jobsFound: number;
      jobsCreated: number;
      jobsUpdated: number;
      error?: string | undefined;
      duration: number;
    }> = [];

    for (const scraper of this.scrapers) {
      const startTime = Date.now();

      try {
        const timeoutPromise = new Promise<never>((_resolve, reject) =>
          setTimeout(() => reject(new Error("Scraper timeout exceeded")), SCRAPER_TIMEOUT),
        );
        const result = await Promise.race([scraper.scrape(), timeoutPromise]);
        const { created, updated } = await this.upsertJobs(result.source, result.jobs);

        const duration = Date.now() - startTime;
        const logEntry = {
          source: result.source,
          jobsFound: result.jobs.length,
          jobsCreated: created,
          jobsUpdated: updated,
          error: result.error,
          duration,
        };

        results.push(logEntry);

        await prisma.scrapeLog.create({
          data: {
            source: result.source,
            status: result.error ? "PARTIAL" : "SUCCESS",
            jobsFound: result.jobs.length,
            jobsCreated: created,
            jobsUpdated: updated,
            error: result.error ?? null,
            duration,
          },
        });

        console.log(
          `[Scraper] ${result.source}: found=${String(result.jobs.length)}, created=${String(created)}, updated=${String(updated)}, duration=${String(duration)}ms`
        );
      } catch (err) {
        const duration = Date.now() - startTime;
        const errorMsg = err instanceof Error ? err.message : "Unknown error";

        results.push({
          source: scraper.source,
          jobsFound: 0,
          jobsCreated: 0,
          jobsUpdated: 0,
          error: errorMsg,
          duration,
        });

        await prisma.scrapeLog.create({
          data: {
            source: scraper.source,
            status: "FAILURE",
            jobsFound: 0,
            jobsCreated: 0,
            jobsUpdated: 0,
            error: errorMsg,
            duration,
          },
        });

        console.error(`[Scraper] ${scraper.source} failed:`, errorMsg);
      }
    }

    try {
      // Mark jobs not seen in this run as potentially expired
      await this.markExpiredJobs();
    } catch (err) {
      console.error("[Scraper] Failed to mark expired jobs:", err);
    } finally {
      this.isRunning = false;
      console.log("[Scraper] Scrape run completed");
    }

    return { results };
  }

  /** Upsert scraped jobs with batch deduplication */
  private async upsertJobs(
    source: string,
    jobs: ScrapedJobData[]
  ): Promise<{ created: number; updated: number }> {
    if (jobs.length === 0) return { created: 0, updated: 0 };

    // Dedupe within this scrape run: scrapers occasionally emit the same sourceId
    // twice, which would collide on the (source, sourceId) unique constraint.
    // Keep the last occurrence so freshest payload wins.
    const dedupedMap = new Map<string, ScrapedJobData>();
    for (const job of jobs) dedupedMap.set(job.sourceId, job);
    const uniqueJobs = Array.from(dedupedMap.values());

    // Batch-fetch all existing jobs for this source in one query
    const sourceIds = uniqueJobs.map((j) => j.sourceId);
    const existing = await prisma.scrapedJob.findMany({
      where: { source, sourceId: { in: sourceIds } },
      select: { id: true, sourceId: true },
    });
    const existingMap = new Map(existing.map((e) => [e.sourceId, e.id]));

    let created = 0;
    let updated = 0;

    // Process in parallel batches, no transaction needed since ops are independent upserts
    const BATCH_SIZE = 15;
    for (let i = 0; i < uniqueJobs.length; i += BATCH_SIZE) {
      const batch = uniqueJobs.slice(i, i + BATCH_SIZE);
      const ops: Promise<unknown>[] = [];

      for (const job of batch) {
        const existingId = existingMap.get(job.sourceId);
        if (existingId) {
          ops.push(
            prisma.scrapedJob.update({
              where: { id: existingId },
              data: {
                title: job.title,
                description: job.description,
                company: job.company,
                location: job.location,
                salary: job.salary ?? null,
                tags: job.tags,
                applicationUrl: job.applicationUrl,
                sourceUrl: job.sourceUrl ?? null,
                status: "ACTIVE",
                lastSeenAt: new Date(),
                metadata: (job.metadata as Prisma.InputJsonValue) ?? {},
              },
            })
          );
          updated++;
        } else {
          ops.push(
            prisma.scrapedJob.create({
              data: {
                title: job.title,
                description: job.description,
                company: job.company,
                location: job.location,
                salary: job.salary ?? null,
                tags: job.tags,
                applicationUrl: job.applicationUrl,
                source,
                sourceId: job.sourceId,
                sourceUrl: job.sourceUrl ?? null,
                status: "ACTIVE",
                metadata: (job.metadata as Prisma.InputJsonValue) ?? {},
              },
            })
          );
          created++;
        }
      }

      await Promise.all(ops);
    }

    return { created, updated };
  }

  /** Mark jobs not seen in the last 48 hours as expired */
  private async markExpiredJobs() {
    const cutoff = new Date(Date.now() - 48 * 60 * 60 * 1000);
    await prisma.scrapedJob.updateMany({
      where: {
        lastSeenAt: { lt: cutoff },
        status: "ACTIVE",
      },
      data: { status: "EXPIRED" },
    });
  }

  /** Get scraped jobs with pagination and filters */
  async getScrapedJobs(query: ScrapedJobQuery) {
    const where: Prisma.scrapedJobWhereInput = { status: "ACTIVE" };

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: "insensitive" } },
        { description: { contains: query.search, mode: "insensitive" } },
        { company: { contains: query.search, mode: "insensitive" } },
      ];
    }

    if (query.location) {
      where.location = { contains: query.location, mode: "insensitive" };
    }

    if (query.source) {
      where.source = query.source;
    }

    if (query.tags) {
      const tagList = query.tags.split(",").map((t) => t.trim()).filter(Boolean);
      if (tagList.length > 0) {
        where.tags = { hasSome: tagList };
      }
    }

    const skip = (query.page - 1) * query.limit;

    const [jobs, total] = await Promise.all([
      prisma.scrapedJob.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: { scrapedAt: "desc" },
      }),
      prisma.scrapedJob.count({ where }),
    ]);

    return {
      jobs,
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  /** Get a single scraped job by ID */
  async getScrapedJobById(id: number) {
    return prisma.scrapedJob.findUnique({ where: { id } });
  }

  /** Get scraping statistics */
  async getStats() {
    const [totalActive, totalExpired, bySource, recentLogs] = await Promise.all([
      prisma.scrapedJob.count({ where: { status: "ACTIVE" } }),
      prisma.scrapedJob.count({ where: { status: "EXPIRED" } }),
      prisma.scrapedJob.groupBy({
        by: ["source"],
        where: { status: "ACTIVE" },
        _count: true,
      }),
      prisma.scrapeLog.findMany({
        orderBy: { createdAt: "desc" },
        take: 20,
      }),
    ]);

    return {
      totalActive,
      totalExpired,
      bySource: bySource.map((s) => ({ source: s.source, count: s._count })),
      recentLogs,
    };
  }

  /** Get available sources */
  getSources() {
    return this.scrapers.map((s) => ({
      id: s.source,
      name: s.displayName,
    }));
  }
}
