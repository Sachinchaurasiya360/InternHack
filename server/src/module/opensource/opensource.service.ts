import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "../../database/db.js";
import { fetchGithubStats } from "../../lib/github.js";
import { sendEmail } from "../../utils/email.utils.js";
import {
  repoRequestSubmittedHtml,
  repoRequestApprovedHtml,
} from "../../utils/email-templates.js";

const STATS_TTL_MS = 5 * 60 * 1000; // 5 minutes
const RECOMMENDATION_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

let statsCache: {
  data: {
    totalRepos: number;
    totalStars: number;
    trendingCount: number;
    languageCount: number;
    domainBreakdown: { domain: string; count: number }[];
  } | null;
  expiresAt: number;
} = { data: null, expiresAt: 0 };

const recommendationCache = new Map<number, { repos: any[]; expiresAt: number }>();

export class OpensourceService {
  async getGlobalStats() {
    if (statsCache.data && Date.now() < statsCache.expiresAt) {
      return statsCache.data;
    }

    const [totalRepos, trendingCount, starsAgg, languageGroups, domainGroups] = await Promise.all([
      prisma.opensourceRepo.count(),
      prisma.opensourceRepo.count({ where: { trending: true } }),
      prisma.opensourceRepo.aggregate({ _sum: { stars: true } }),
      prisma.opensourceRepo.groupBy({ by: ["language"] }),
      prisma.opensourceRepo.groupBy({
        by: ["domain"],
        _count: { _all: true },
        orderBy: { _count: { domain: "desc" } },
      }),
    ]);

    const data = {
      totalRepos,
      totalStars: starsAgg._sum.stars ?? 0,
      trendingCount,
      languageCount: languageGroups.filter((g) => g.language && g.language.trim() !== "").length,
      domainBreakdown: domainGroups.map((g) => ({
        domain: g.domain || "Other",
        count: g._count._all,
      })),
    };

    statsCache = { data, expiresAt: Date.now() + STATS_TTL_MS };
    return data;
  }

  async getLanguages() {
    const rows = await prisma.opensourceRepo.findMany({
      select: { language: true },
      distinct: ["language"],
    });
    return rows
      .map((r) => r.language)
      .filter((l): l is string => Boolean(l && l.trim() !== ""))
      .sort((a, b) => a.localeCompare(b));
  }

  async listRepos(query: any) {
    const {
      page,
      limit,
      search,
      language,
      difficulty,
      domain,
      sortBy,
      sortOrder,
    } = query;
    const skip = (page - 1) * limit;
    const where: Record<string, any> = {};
    if (language) where["language"] = { equals: language, mode: "insensitive" };
    if (difficulty) where["difficulty"] = difficulty;
    if (domain) where["domain"] = domain;
const trimmedSearch = search?.trim();

if (trimmedSearch) {
  // Prisma's scalar-list filters can't do case-insensitive substring match
  // on array elements, so resolve tag matches via a raw ILIKE-on-unnest
  // subquery and merge the matching ids into the OR clause.
      const tagMatches = await prisma.$queryRaw<Array<{ id: number }>>`
        SELECT id FROM "opensourceRepo"
        WHERE EXISTS (
          SELECT 1 FROM unnest(tags) AS t WHERE t ILIKE ${`%${trimmedSearch}%`}
        )
      `;
    
      const tagMatchIds = tagMatches.map((r) => r.id);
where["OR"] = [
  { name: { contains: trimmedSearch, mode: "insensitive" } },
  { owner: { contains: trimmedSearch, mode: "insensitive" } },
  { description: { contains: trimmedSearch, mode: "insensitive" } },
  { language: { contains: trimmedSearch, mode: "insensitive" } },
        ...(tagMatchIds.length > 0 ? [{ id: { in: tagMatchIds } }] : []),
      ];
    }

    const [repos, total] = await Promise.all([
      prisma.opensourceRepo.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
      }),
      prisma.opensourceRepo.count({ where }),
    ]);

    return {
      repos,
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async getRepoById(id: number) {
    const repo = (await prisma.opensourceRepo.findUnique({
      where: { id },
    })) as any;
    if (!repo) return null;

    const SIX_HOURS = 6 * 60 * 60 * 1000;
    const isStale =
      !repo.githubStatsUpdatedAt ||
      Date.now() - new Date(repo.githubStatsUpdatedAt).getTime() > SIX_HOURS;

    if (isStale && repo.url?.includes("github.com")) {
      this.updateGithubStats(repo.id, repo.url, repo.name).catch((err) =>
        console.error(`[github] background update failed for ${id}:`, err),
      );
    }
    return repo;
  }

  private async updateGithubStats(id: number, url: string, name: string) {
    const stats = await fetchGithubStats(url);
    if (!stats) return;
    await prisma.opensourceRepo.update({
      where: { id },
      data: {
        stars: stats.stars,
        forks: stats.forks,
        openIssues: stats.openIssues,
        githubStatsUpdatedAt: new Date(),
        ...(stats.language && { language: stats.language }),
      } as any,
    });
    console.info(`[github] updated stats for ${name}`);
  }

  async getGsocOrgs(query: {
    page: number;
    limit: number;
    search?: string;
    category?: string;
    tech?: string;
    year?: number;
  }) {
    const { page, limit, search, category, tech, year } = query;
    const skip = (page - 1) * limit;
    const where: any = {};

    const trimmedSearch = search?.trim();

      if (trimmedSearch) {
      where.OR = [
        { name: { contains: trimmedSearch, mode: "insensitive" } },
        { description: { contains: trimmedSearch, mode: "insensitive" } },
      ];
    }
    if (category) {
      where.category = { contains: category, mode: "insensitive" };
    }
    if (tech) {
      where.technologies = { has: tech };
    }
    if (year) {
      where.yearsParticipated = { has: year };
    }

    const [orgs, total] = await prisma.$transaction([
      prisma.gsocOrganization.findMany({
        where,
        skip,
        take: limit,
        orderBy: { name: "asc" },
      }),
      prisma.gsocOrganization.count({ where }),
    ]);

    return {
      orgs,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  async submitRepoRequest(userId: number, data: any) {
    const existing = await prisma.repoRequest.findFirst({
      where: { url: data.url, status: { in: ["PENDING", "APPROVED"] } },
    });
    if (existing) {
      throw new Error("This repository has already been submitted");
    }
    const request = await prisma.repoRequest.create({
      data: { ...data, userId },
      include: { user: { select: { name: true, email: true } } },
    });

    try {
      await sendEmail({
        to: request.user.email,
        subject: "Repo Request Received, InternHack",
        html: repoRequestSubmittedHtml(
          request.user.name,
          request.name,
          request.owner,
        ),
      });
    } catch {
      /* email failure is non-blocking */
    }
    return request;
  }

  async getMyRepoRequests(userId: number) {
    return prisma.repoRequest.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }

  async getAllRepoRequests(query: {
    status?: string;
    page: number;
    limit: number;
    skip: number;
  }) {
    const { status, page, limit, skip } = query;
    const where: Record<string, any> = {};
    if (status && ["PENDING", "APPROVED", "REJECTED"].includes(status)) {
      where.status = status;
    }
    const [requests, total] = await Promise.all([
      prisma.repoRequest.findMany({
        where,
        include: {
          user: {
            select: { id: true, name: true, email: true, profilePic: true },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.repoRequest.count({ where }),
    ]);
    return {
      requests,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async approveRepoRequest(id: number, overrides: any) {
    const request = await prisma.repoRequest.findUnique({
      where: { id },
      include: { user: { select: { name: true, email: true } } },
    });
    if (!request) throw new Error("Request not found");
    if (request.status !== "PENDING") throw new Error("Request is not pending");

    const repo = await prisma.opensourceRepo.create({
      data: {
        name: overrides.name ?? request.name,
        owner: request.owner,
        description: overrides.description ?? request.description,
        language: request.language,
        url: request.url,
        domain: overrides.domain ?? request.domain,
        difficulty: overrides.difficulty ?? request.difficulty,
        techStack: request.techStack,
        tags: overrides.tags ?? request.tags,
      },
    });

    await prisma.repoRequest.update({
      where: { id },
      data: { status: "APPROVED", adminNote: overrides.adminNote ?? null },
    });

    try {
      await sendEmail({
        to: request.user.email,
        subject: "Your Repo Has Been Approved, InternHack",
        html: repoRequestApprovedHtml(
          request.user.name,
          overrides.name ?? request.name,
          request.owner,
        ),
      });
    } catch {
      /* email failure is non-blocking */
    }

    this.updateGithubStats(repo.id, repo.url, repo.name).catch((err) =>
      console.error("[github] approval stats fetch failed:", err),
    );
    return repo;
  }

  async rejectRepoRequest(id: number, adminNote?: string) {
    const request = await prisma.repoRequest.findUnique({ where: { id } });
    if (!request) throw new Error("Request not found");
    if (request.status !== "PENDING") throw new Error("Request is not pending");
    return prisma.repoRequest.update({
      where: { id },
      data: { status: "REJECTED", adminNote: adminNote || null },
    });
  }

  async getStudentContributionTrend(userId: number) {
    const now = new Date();
    const currentMonthStart = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1),
    );
    const startMonth = this.addMonthsUTC(currentMonthStart, -5);
    const endMonth = this.addMonthsUTC(currentMonthStart, 1);
    const approvedRequests = await prisma.repoRequest.findMany({
      where: {
        userId,
        status: "APPROVED",
        updatedAt: { gte: startMonth, lt: endMonth },
      },
      select: { updatedAt: true },
    });

    const countsByMonth = new Map<string, number>();
    for (const request of approvedRequests) {
      const monthKey = this.getMonthKeyUTC(request.updatedAt);
      countsByMonth.set(monthKey, (countsByMonth.get(monthKey) ?? 0) + 1);
    }

    const trend = Array.from({ length: 6 }, (_, index) => {
      const monthStart = this.addMonthsUTC(startMonth, index);
      const monthKey = this.getMonthKeyUTC(monthStart);
      return {
        month: monthKey,
        label: this.getMonthLabelUTC(monthStart),
        count: countsByMonth.get(monthKey) ?? 0,
      };
    });
    return { trend, total: approvedRequests.length };
  }

  private addMonthsUTC(date: Date, months: number): Date {
    return new Date(
      Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + months, 1),
    );
  }

  private getMonthKeyUTC(date: Date): string {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    return `${year}-${month}`;
  }

  private getMonthLabelUTC(date: Date): string {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(date);
  }

  async getFirstPrProgress(userId: number): Promise<string[]> {
    const progress = await prisma.studentFirstPrProgress.findUnique({
      where: { userId },
      select: { completedStepIds: true },
    });
    return progress?.completedStepIds ?? [];
  }

  async patchFirstPrProgress(
    userId: number,
    stepId: string,
    completed: boolean,
  ): Promise<string[]> {
    const existing = await prisma.studentFirstPrProgress.findUnique({
      where: { userId },
      select: { completedStepIds: true },
    });
    const completedStepIds = new Set(existing?.completedStepIds ?? []);
    if (completed) {
      completedStepIds.add(stepId);
    } else {
      completedStepIds.delete(stepId);
    }
    const progress = await prisma.studentFirstPrProgress.upsert({
      where: { userId },
      create: {
        userId,
        completedStepIds: Array.from(completedStepIds),
      },
      update: {
        completedStepIds: Array.from(completedStepIds),
      },
      select: { completedStepIds: true },
    });
    return progress.completedStepIds;
  }

  async getRecommendedRepos(userId: number, viewedIds: number[] = [], forceRefresh = false) {
    const now = Date.now();

    if (!forceRefresh) {
      const cached = recommendationCache.get(userId);
      if (cached && cached.expiresAt > now) {
        return cached.repos.filter((repo) => !viewedIds.includes(repo.id));
      }
    }

    const student = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        skills: true,
        projects: true,
        atsScores: {
          orderBy: { createdAt: "desc" },
          take: 1,
          select: { keywordAnalysis: true },
        },
      },
    });

    if (!student) {
      throw new Error("User not found");
    }

    const skills = Array.isArray(student.skills) ? student.skills.join(", ") : "";
    const projects = student.projects ? JSON.stringify(student.projects) : "";
    const atsKeywords = student.atsScores[0]?.keywordAnalysis
      ? JSON.stringify(student.atsScores[0].keywordAnalysis)
      : "";

    if (!skills && !projects && !atsKeywords) {
      return [];
    }

    const candidateRepos = await prisma.opensourceRepo.findMany({
      where: viewedIds.length > 0 ? { id: { notIn: viewedIds } } : undefined,
      orderBy: [{ trending: "desc" }, { stars: "desc" }],
      take: 40,
    });

    if (candidateRepos.length === 0) {
      return [];
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return [];
    }

    const prompt = `
You are an expert open source matchmaker. Recommend 5 open source repositories for a student to contribute to based on their profile.

Student Profile:
Skills: ${skills}
Projects: ${projects}
ATS Keywords: ${atsKeywords}

Candidate Repositories:
${JSON.stringify(
  candidateRepos.map((repo) => ({
    id: repo.id,
    name: repo.name,
    language: repo.language,
    techStack: repo.techStack,
    domain: repo.domain,
    trending: repo.trending,
    issueTypes: repo.issueTypes,
  })),
)}

Select the top 5 most relevant repositories. Boost repos that are trending or have good first issue opportunities.
Return only a JSON array with objects in this shape:
[
  { "id": 1, "matchReason": "Matches your React skills" }
]
Keep matchReason concise, max 8 words.
`;

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
      const matches = JSON.parse(cleanText) as { id: number; matchReason: string }[];

      const recommended = matches
        .map((match) => {
          const repo = candidateRepos.find((candidate) => candidate.id === match.id);
          return repo ? { ...repo, matchReason: match.matchReason } : null;
        })
        .filter((repo): repo is NonNullable<typeof repo> => Boolean(repo));

      recommendationCache.set(userId, {
        repos: recommended,
        expiresAt: now + RECOMMENDATION_TTL_MS,
      });

      return recommended;
    } catch (error) {
      console.error("Gemini recommendation error:", error);
      return [];
    }
  }
}
