import type { Prisma } from "@prisma/client";
import { prisma } from "../../database/db.js";
import type {
  CreateExperienceInput,
  UpdateExperienceInput,
  ListExperiencesQuery,
  ListCompaniesQuery,
} from "./interview-experience.validation.js";

const includeBase = {
  company: { select: { id: true, name: true, slug: true, logo: true, city: true, industry: true } },
  user: { select: { id: true, name: true, profilePic: true, college: true } },
} satisfies Prisma.interviewExperienceInclude;

function maskAnonymous<
  T extends {
    isAnonymous: boolean;
    user: { id: number; name: string; profilePic: string | null; college: string | null } | null;
  },
>(row: T) {
  if (!row.isAnonymous) return row;
  return {
    ...row,
    user: row.user ? { id: 0, name: "Anonymous student", profilePic: null, college: row.user.college } : null,
  };
}

export class InterviewExperienceService {
  async list(query: ListExperiencesQuery, viewerIsAdmin = false) {
    const where: Prisma.interviewExperienceWhereInput = {};

    if (query.status === "ALL") {
      if (!viewerIsAdmin) where.status = "APPROVED";
    } else {
      where.status = query.status;
      if (query.status !== "APPROVED" && !viewerIsAdmin) where.status = "APPROVED";
    }

    if (query.companyId) where.companyId = query.companyId;
    if (query.companySlug) where.company = { slug: query.companySlug };
    if (query.role) where.role = { contains: query.role, mode: "insensitive" };
    if (query.outcome) where.outcome = query.outcome;
    if (query.difficulty) where.difficulty = query.difficulty;
    if (query.year) where.interviewYear = query.year;
    if (query.search) {
      where.OR = [
        { role: { contains: query.search, mode: "insensitive" } },
        { tips: { contains: query.search, mode: "insensitive" } },
        { company: { name: { contains: query.search, mode: "insensitive" } } },
      ];
    }

    const orderBy: Prisma.interviewExperienceOrderByWithRelationInput =
      query.sort === "upvotes" ? { upvotes: "desc" } : { createdAt: "desc" };

    const skip = (query.page - 1) * query.limit;

    const [rows, total] = await Promise.all([
      prisma.interviewExperience.findMany({
        where,
        skip,
        take: query.limit,
        orderBy,
        include: includeBase,
      }),
      prisma.interviewExperience.count({ where }),
    ]);

    return {
      experiences: rows.map(maskAnonymous),
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  async getById(id: number, viewerId?: number, viewerIsAdmin = false) {
    const row = await prisma.interviewExperience.findUnique({
      where: { id },
      include: includeBase,
    });
    if (!row) return null;
    if (row.status !== "APPROVED" && !viewerIsAdmin && row.userId !== viewerId) {
      return null;
    }

    let hasUpvoted = false;
    if (viewerId) {
      const up = await prisma.interviewExperienceUpvote.findUnique({
        where: { experienceId_userId: { experienceId: id, userId: viewerId } },
        select: { id: true },
      });
      hasUpvoted = Boolean(up);
    }

    // Fire-and-forget view increment, skipping self views
    if (viewerId !== row.userId) {
      void prisma.interviewExperience
        .update({ where: { id }, data: { views: { increment: 1 } } })
        .catch(() => {});
    }

    return { ...maskAnonymous(row), hasUpvoted };
  }

  async create(userId: number, input: CreateExperienceInput) {
    const company = await prisma.company.findUnique({
      where: { id: input.companyId },
      select: { id: true },
    });
    if (!company) throw new Error("Company not found");

    const row = await prisma.interviewExperience.create({
      data: {
        companyId: input.companyId,
        userId,
        role: input.role,
        experienceYears: input.experienceYears ?? null,
        interviewYear: input.interviewYear,
        interviewMonth: input.interviewMonth ?? null,
        source: input.source,
        difficulty: input.difficulty,
        outcome: input.outcome,
        offered: input.offered,
        ctcLpa: input.ctcLpa ?? null,
        totalRounds: input.totalRounds,
        overallRating: input.overallRating,
        rounds: input.rounds as Prisma.InputJsonValue,
        tips: input.tips ?? null,
        prepResources: input.prepResources as Prisma.InputJsonValue,
        isAnonymous: input.isAnonymous,
        status: "PENDING",
      },
      include: includeBase,
    });
    return row;
  }

  async update(id: number, input: UpdateExperienceInput, viewerId: number, viewerIsAdmin: boolean) {
    const existing = await prisma.interviewExperience.findUnique({
      where: { id },
      select: { userId: true, status: true },
    });
    if (!existing) throw new Error("Experience not found");
    if (!viewerIsAdmin && existing.userId !== viewerId) throw new Error("Forbidden");

    const data: Prisma.interviewExperienceUpdateInput = {};
    if (input.role !== undefined) data.role = input.role;
    if (input.experienceYears !== undefined) data.experienceYears = input.experienceYears;
    if (input.interviewYear !== undefined) data.interviewYear = input.interviewYear;
    if (input.interviewMonth !== undefined) data.interviewMonth = input.interviewMonth;
    if (input.source !== undefined) data.source = input.source;
    if (input.difficulty !== undefined) data.difficulty = input.difficulty;
    if (input.outcome !== undefined) data.outcome = input.outcome;
    if (input.offered !== undefined) data.offered = input.offered;
    if (input.ctcLpa !== undefined) data.ctcLpa = input.ctcLpa;
    if (input.totalRounds !== undefined) data.totalRounds = input.totalRounds;
    if (input.overallRating !== undefined) data.overallRating = input.overallRating;
    if (input.rounds !== undefined) data.rounds = input.rounds as Prisma.InputJsonValue;
    if (input.tips !== undefined) data.tips = input.tips;
    if (input.prepResources !== undefined) data.prepResources = input.prepResources as Prisma.InputJsonValue;
    if (input.isAnonymous !== undefined) data.isAnonymous = input.isAnonymous;
    if (viewerIsAdmin && input.status !== undefined) data.status = input.status;

    const updated = await prisma.interviewExperience.update({
      where: { id },
      data,
      include: includeBase,
    });

    return {
      experience: updated,
      previousStatus: existing.status,
    };
  }

  async remove(id: number, viewerId: number, viewerIsAdmin: boolean) {
    const existing = await prisma.interviewExperience.findUnique({
      where: { id },
      select: { userId: true },
    });
    if (!existing) throw new Error("Experience not found");
    if (!viewerIsAdmin && existing.userId !== viewerId) throw new Error("Forbidden");
    await prisma.interviewExperience.delete({ where: { id } });
  }

  async toggleUpvote(experienceId: number, userId: number) {
    const existing = await prisma.interviewExperienceUpvote.findUnique({
      where: { experienceId_userId: { experienceId, userId } },
    });

    if (existing) {
      await prisma.$transaction([
        prisma.interviewExperienceUpvote.delete({ where: { id: existing.id } }),
        prisma.interviewExperience.update({
          where: { id: experienceId },
          data: { upvotes: { decrement: 1 } },
        }),
      ]);
      return { upvoted: false };
    }

    await prisma.$transaction([
      prisma.interviewExperienceUpvote.create({ data: { experienceId, userId } }),
      prisma.interviewExperience.update({
        where: { id: experienceId },
        data: { upvotes: { increment: 1 } },
      }),
    ]);
    return { upvoted: true };
  }

  /**
   * List companies that have at least one approved interview experience,
   * with counts + latest submission date. Used on the `/student/interviews` directory page.
   */
  async listCompaniesWithExperiences(query: ListCompaniesQuery) {
    const whereExp: Prisma.interviewExperienceWhereInput = { status: "APPROVED" };
    if (query.search) {
      whereExp.company = { name: { contains: query.search, mode: "insensitive" } };
    }

    const grouped = await prisma.interviewExperience.groupBy({
      by: ["companyId"],
      where: whereExp,
      _count: { _all: true },
      _max: { createdAt: true },
      orderBy: { _count: { companyId: "desc" } },
      skip: (query.page - 1) * query.limit,
      take: query.limit,
    });

    const totalGroups = await prisma.interviewExperience.groupBy({
      by: ["companyId"],
      where: whereExp,
      _count: { _all: true },
    });

    const companyIds = grouped.map((g) => g.companyId);
    const companies = await prisma.company.findMany({
      where: { id: { in: companyIds } },
      select: {
        id: true,
        name: true,
        slug: true,
        logo: true,
        city: true,
        industry: true,
        avgRating: true,
        reviewCount: true,
      },
    });
    const companyMap = new Map(companies.map((c) => [c.id, c]));

    return {
      companies: grouped
        .map((g) => {
          const c = companyMap.get(g.companyId);
          if (!c) return null;
          return {
            ...c,
            experienceCount: g._count._all,
            latestAt: g._max.createdAt,
          };
        })
        .filter((v): v is NonNullable<typeof v> => v !== null),
      pagination: {
        page: query.page,
        limit: query.limit,
        total: totalGroups.length,
        totalPages: Math.ceil(totalGroups.length / query.limit),
      },
    };
  }

  async getCompanySummary(companySlug: string) {
    const company = await prisma.company.findUnique({
      where: { slug: companySlug },
      select: { id: true, name: true, slug: true, logo: true },
    });
    if (!company) return null;

    const [total, byDifficulty, byOutcome, avgRounds] = await Promise.all([
      prisma.interviewExperience.count({
        where: { companyId: company.id, status: "APPROVED" },
      }),
      prisma.interviewExperience.groupBy({
        by: ["difficulty"],
        where: { companyId: company.id, status: "APPROVED" },
        _count: { _all: true },
      }),
      prisma.interviewExperience.groupBy({
        by: ["outcome"],
        where: { companyId: company.id, status: "APPROVED" },
        _count: { _all: true },
      }),
      prisma.interviewExperience.aggregate({
        where: { companyId: company.id, status: "APPROVED" },
        _avg: { totalRounds: true },
      }),
    ]);

    const selectedCount =
      byOutcome.find((o) => o.outcome === "SELECTED")?._count._all ?? 0;
    const totalWithOutcome = byOutcome
      .filter((o) => o.outcome !== "PENDING" && o.outcome !== "GHOSTED")
      .reduce((acc, o) => acc + o._count._all, 0);

    return {
      company,
      total,
      selectionRate: totalWithOutcome > 0 ? selectedCount / totalWithOutcome : null,
      avgRounds: avgRounds._avg.totalRounds ?? null,
      byDifficulty: byDifficulty.map((d) => ({ difficulty: d.difficulty, count: d._count._all })),
      byOutcome: byOutcome.map((o) => ({ outcome: o.outcome, count: o._count._all })),
    };
  }

  /**
   * Aggregate the most-asked questions for a company, flattened across
   * all approved experiences. Used on the company detail page.
   */
  async getTopQuestions(companySlug: string, limit = 20) {
    const company = await prisma.company.findUnique({
      where: { slug: companySlug },
      select: { id: true },
    });
    if (!company) return [];

    const rows = await prisma.interviewExperience.findMany({
      where: { companyId: company.id, status: "APPROVED" },
      select: { rounds: true },
    });

    interface CountEntry {
      count: number;
      topic: string | null;
      difficulty: string | null;
    }
    const counts = new Map<string, CountEntry>();
    for (const row of rows) {
      if (!Array.isArray(row.rounds)) continue;
      for (const round of row.rounds as Array<Record<string, unknown>>) {
        const qs = round["questions"];
        if (!Array.isArray(qs)) continue;
        for (const q of qs as Array<Record<string, unknown>>) {
          const prompt = typeof q["prompt"] === "string" ? q["prompt"].trim() : "";
          if (prompt.length < 10) continue;
          const key = prompt.toLowerCase();
          const entry: CountEntry = counts.get(key) ?? {
            count: 0,
            topic: typeof q["topic"] === "string" ? q["topic"] : null,
            difficulty: typeof q["difficulty"] === "string" ? q["difficulty"] : null,
          };
          entry.count++;
          counts.set(key, entry);
        }
      }
    }

    const promptMap = new Map<string, string>();
    for (const row of rows) {
      if (!Array.isArray(row.rounds)) continue;
      for (const round of row.rounds as Array<Record<string, unknown>>) {
        const qs = round["questions"];
        if (!Array.isArray(qs)) continue;
        for (const q of qs as Array<Record<string, unknown>>) {
          const prompt = typeof q["prompt"] === "string" ? q["prompt"].trim() : "";
          if (!prompt) continue;
          const key = prompt.toLowerCase();
          if (!promptMap.has(key)) promptMap.set(key, prompt);
        }
      }
    }

    return Array.from(counts.entries())
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, limit)
      .map(([key, value]) => ({
        prompt: promptMap.get(key) ?? key,
        count: value.count,
        topic: value.topic,
        difficulty: value.difficulty,
      }));
  }
}
