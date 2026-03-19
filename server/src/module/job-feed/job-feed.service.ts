import { prisma } from "../../database/db.js";
import { jobIndexService } from "../job-index/job-index.service.js";

export class JobFeedService {
  async getFeed(userId: number, page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [matches, total] = await Promise.all([
      prisma.jobMatch.findMany({
        where: { userId, dismissed: false },
        include: { jobIndex: true },
        orderBy: { score: "desc" },
        skip,
        take: limit,
      }),
      prisma.jobMatch.count({ where: { userId, dismissed: false } }),
    ]);

    return {
      matches: matches.map((m: any) => ({
        matchId: m.id,
        score: Math.round(m.score * 100),
        skillMatch: Math.round(m.skillMatch * 100),
        locationMatch: Math.round(m.locationMatch * 100),
        salaryMatch: Math.round(m.salaryMatch * 100),
        saved: m.saved,
        seen: m.seen,
        job: {
          id: m.jobIndex.id,
          title: m.jobIndex.title,
          company: m.jobIndex.company,
          location: m.jobIndex.location,
          salary: m.jobIndex.salary,
          skills: m.jobIndex.skills,
          workMode: m.jobIndex.workMode,
          experienceLevel: m.jobIndex.experienceLevel,
          applicationUrl: m.jobIndex.applicationUrl,
          tags: m.jobIndex.tags,
          domain: m.jobIndex.domain,
          createdAt: m.jobIndex.createdAt,
        },
      })),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async dismiss(userId: number, matchId: number) {
    const match = await prisma.jobMatch.findFirst({ where: { id: matchId, userId } });
    if (!match) return;

    await prisma.jobMatch.update({
      where: { id: matchId },
      data: { dismissed: true },
    });

    await prisma.userJobPreference.update({
      where: { userId },
      data: { dismissedJobIds: { push: match.jobIndexId } },
    }).catch(() => {}); // pref may not exist yet
  }

  async save(userId: number, matchId: number) {
    await prisma.jobMatch.updateMany({
      where: { id: matchId, userId },
      data: { saved: true },
    });
  }

  async markSeen(userId: number, matchId: number) {
    await prisma.jobMatch.updateMany({
      where: { id: matchId, userId },
      data: { seen: true },
    });
  }

  async getSaved(userId: number) {
    const matches = await prisma.jobMatch.findMany({
      where: { userId, saved: true },
      include: { jobIndex: true },
      orderBy: { createdAt: "desc" },
    });

    return matches.map((m: any) => ({
      matchId: m.id,
      score: Math.round(m.score * 100),
      job: {
        id: m.jobIndex.id,
        title: m.jobIndex.title,
        company: m.jobIndex.company,
        location: m.jobIndex.location,
        salary: m.jobIndex.salary,
        skills: m.jobIndex.skills,
        workMode: m.jobIndex.workMode,
        applicationUrl: m.jobIndex.applicationUrl,
        tags: m.jobIndex.tags,
        createdAt: m.jobIndex.createdAt,
      },
    }));
  }

  async getPreferences(userId: number) {
    return prisma.userJobPreference.findUnique({ where: { userId } });
  }

  async updatePreferences(
    userId: number,
    data: {
      desiredRoles?: string[];
      desiredSkills?: string[];
      desiredLocations?: string[];
      minSalary?: number | null;
      workMode?: string[];
      experienceLevel?: string[];
      domains?: string[];
    },
  ) {
    const pref = await prisma.userJobPreference.upsert({
      where: { userId },
      create: { userId, ...data, hasEmbedding: false },
      update: { ...data, hasEmbedding: false },
    });

    // Re-generate embedding asynchronously
    jobIndexService.generateUserEmbedding(userId).catch(() => {});

    return pref;
  }

  async getStats(userId: number) {
    const [total, unseen, saved] = await Promise.all([
      prisma.jobMatch.count({ where: { userId, dismissed: false } }),
      prisma.jobMatch.count({ where: { userId, dismissed: false, seen: false } }),
      prisma.jobMatch.count({ where: { userId, saved: true } }),
    ]);
    return { total, unseen, saved };
  }
}

export const jobFeedService = new JobFeedService();
