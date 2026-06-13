import { prisma } from "../../database/db.js";
import type { RepoDomain, RepoDifficulty } from "@prisma/client";
import { fetchGithubGoodFirstIssues, fetchGithubStats, fetchRepoHealthData } from "../../lib/github.js";
import { sendEmail } from "../../utils/email.utils.js";
import {
  repoRequestSubmittedHtml,
  repoRequestApprovedHtml,
} from "../../utils/email-templates.js";
import { UserService } from "../user/user.service.js";

interface ListReposQuery {
  page: number;
  limit: number;
  search?: string;
  language?: string;
  difficulty?: string;
  domain?: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
  trending?: string;
  hacktoberfest?: string;
  highlyActive?: string;
  ids?: string;
}
interface SubmitRepoRequestData {
  name: string;
  owner: string;
  description: string;
  language: string;
  url: string;
  domain: string;
  difficulty: string;
  techStack: string[];
  tags: string[];
  reason: string;
}
interface ApproveOverrideData {
  adminNote?: string;
  name?: string;
  description?: string;
  domain?: string;
  difficulty?: string;
  tags?: string[];
}
interface GsocOrgsQuery {
  page: number;
  limit: number;
  search?: string;
  category?: string;
  technology?: string;
  year?: number;
}

const userService = new UserService();

const STATS_TTL_MS = 5 * 60 * 1000; // 5 minutes
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
      .filter((l: string | null): l is string => Boolean(l && l.trim() !== ""))
      .sort((a: string, b: string) => a.localeCompare(b));
  }

  async listRepos(query: ListReposQuery) {
    const {
      page,
      limit,
      search,
      language,
      difficulty,
      domain,
      sortBy,
      sortOrder,
      trending,
      hacktoberfest,
      ids,
    } = query;
    const skip = (page - 1) * limit;
    const where: Record<string, unknown> = {};
    if (language) where.language = { equals: language, mode: "insensitive" };
    if (difficulty) where["difficulty"] = difficulty;
    if (domain) where["domain"] = domain;
    if (trending === "true") where["trending"] = true;
    if (hacktoberfest === "true") where["hacktoberfest"] = true;
    if (query.highlyActive === "true") {
      where["healthScore"] = { gte: 75 };
    }
    if (ids) {
      const idList = ids
        .split(",")
        .map((id: string) => Number(id))
        .filter((id: number) => !Number.isNaN(id));
      if (idList.length > 0) where["id"] = { in: idList };
    }
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
    const repo = await prisma.opensourceRepo.findUnique({
      where: { id },
    });
    if (!repo) return null;

    const SIX_HOURS = 6 * 60 * 60 * 1000;
    const neverFetched = !repo.githubStatsUpdatedAt;
    const isStale =
      neverFetched ||
      Date.now() - new Date(repo.githubStatsUpdatedAt!).getTime() > SIX_HOURS;

    if (isStale && repo.url?.includes("github.com")) {
      if (neverFetched) {
        // First-ever fetch: await so the caller gets live stats, not 0s
        await this.updateGithubStats(repo.id, repo.url, repo.name).catch((err) =>
          console.error(`[github] initial stats fetch failed for ${id}:`, err),
        );
        return await prisma.opensourceRepo.findUnique({ where: { id } });
      }
      // Stale but previously fetched: update in background, return cached
      this.updateGithubStats(repo.id, repo.url, repo.name).catch((err) =>
        console.error(`[github] background update failed for ${id}:`, err),
      );
    }
    return repo;
  }

  async getRepoByOwnerAndName(owner: string, name: string) {
    const repo = await prisma.opensourceRepo.findFirst({
      where: {
        owner: { equals: owner, mode: "insensitive" },
        name: { equals: name, mode: "insensitive" },
      },
    });
    if (!repo) return null;

    const SIX_HOURS = 6 * 60 * 60 * 1000;
    const isStale =
      !repo.githubStatsUpdatedAt ||
      Date.now() - new Date(repo.githubStatsUpdatedAt).getTime() > SIX_HOURS;

    if (isStale && repo.url?.includes("github.com")) {
      this.updateGithubStats(repo.id, repo.url, repo.name).catch((err) =>
        console.error(`[github] background update failed for ${repo.id}:`, err),
      );
    }
    return repo;
  }

  async getGoodFirstIssues(owner: string, name: string) {
    const repo = await this.getRepoByOwnerAndName(owner, name);
    if (!repo) return null;
    const issues = await fetchGithubGoodFirstIssues(owner, name);
    return { repo, issues };
  }

  private async updateGithubStats(id: number, url: string, name: string) {
    const [stats, health] = await Promise.all([
      fetchGithubStats(url),
      this.getRepoOwnerAndNameFromUrl(url).then(parsed =>
        parsed ? fetchRepoHealthData(parsed.owner, parsed.name) : null
      )
    ]);

    if (!stats) return;

    let healthScore = 0;
    if (health) {
      if (health.hasContributing) healthScore += 15;
      if (health.hasCodeOfConduct) healthScore += 10;
      if (health.hasIssueTemplate) healthScore += 10;
      if (health.fastResponse) healthScore += 20;
      if (health.hasRecentCommits) healthScore += 15;
      if (health.hasGoodFirstIssues) healthScore += 20;
      if (health.mergeRate > 30) healthScore += 10;
    }

    await prisma.opensourceRepo.update({
      where: { id },
      data: {
        stars: stats.stars,
        forks: stats.forks,
        openIssues: stats.openIssues,
        githubStatsUpdatedAt: new Date(),
        healthScore,
        ...(stats.language && { language: stats.language }),
      },
    });
    console.info(`[github] updated stats & health score for ${name}: ${healthScore}`);
  }

  private async getRepoOwnerAndNameFromUrl(url: string) {
    const match = url.match(/github\.com\/([^\/]+)\/([^\/\s\.]+)/);
    if (!match) return null;
    return { owner: match[1], name: match[2].replace(".git", "") };
  }

  async getGsocOrgs(query: GsocOrgsQuery & { tech?: string }) {
    const { page, limit, search, category, tech, year } = query;
    const skip = (page - 1) * limit;
    const where: Record<string, unknown> = {};

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

  private FREE_MONTHLY_REPO_SUGGESTIONS = 3;

  async submitRepoRequest(userId: number, data: SubmitRepoRequestData) {
    const existing = await prisma.repoRequest.findFirst({
      where: { url: data.url, status: { in: ["PENDING", "APPROVED"] } },
    });
    if (existing) {
      throw new Error("This repository has already been submitted");
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { subscriptionPlan: true, subscriptionStatus: true, subscriptionEndDate: true },
    });

    if (user) {
      const isPremium =
        (user.subscriptionPlan === "MONTHLY" || user.subscriptionPlan === "YEARLY") &&
        user.subscriptionStatus === "ACTIVE" &&
        (!user.subscriptionEndDate || user.subscriptionEndDate > new Date());

      if (!isPremium) {
        const startOfMonth = new Date();
        startOfMonth.setDate(1);
        startOfMonth.setHours(0, 0, 0, 0);

        const monthlyCount = await prisma.repoRequest.count({
          where: {
            userId,
            createdAt: { gte: startOfMonth },
          },
        });

        if (monthlyCount >= this.FREE_MONTHLY_REPO_SUGGESTIONS) {
          throw new Error(
            "You've used all your free repo suggestions this month. Upgrade to Pro for unlimited suggestions.",
          );
        }
      }
    }
    const request = await prisma.repoRequest.create({
      data: {
        ...data,
        userId,
        domain: data.domain as RepoDomain,
        difficulty: data.difficulty as RepoDifficulty,
      },
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
    const where: Record<string, unknown> = {};
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

  async approveRepoRequest(id: number, overrides: ApproveOverrideData) {
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
        domain: (overrides.domain ?? request.domain) as RepoDomain,
        difficulty: (overrides.difficulty ?? request.difficulty) as RepoDifficulty,
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
    // Re-sync stored ossTier for the contributor (fire-and-forget)
    userService.calculateOssTier(request.userId).catch((err) => console.error("Failed to calculate OSS tier:", err));
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

  private static readonly HACKTOBERFEST_GOAL = 4;
  private static readonly FIRST_PR_TOTAL_STEPS = 7;

  async getHacktoberfestProgress(userId: number) {
    const octStart = new Date(Date.UTC(2026, 9, 1));
    const novStart = new Date(Date.UTC(2026, 10, 1));

    const [approvedInOctober, repoSuggestionsInOctober, firstPrProgress] =
      await Promise.all([
        prisma.repoRequest.count({
          where: {
            userId,
            status: "APPROVED",
            createdAt: { gte: octStart, lt: novStart },
          },
        }),
        prisma.repoRequest.count({
          where: {
            userId,
            createdAt: { gte: octStart, lt: novStart },
          },
        }),
        prisma.studentFirstPrProgress.findUnique({
          where: { userId },
          select: { completedStepIds: true },
        }),
      ]);

    const completedSteps = firstPrProgress?.completedStepIds.length ?? 0;
    const completed = Math.min(
      OpensourceService.HACKTOBERFEST_GOAL,
      approvedInOctober,
    );
    const goal = OpensourceService.HACKTOBERFEST_GOAL;

    const nodeDefs = [
      { id: 1, label: "1st PR", description: "First approved contribution" },
      { id: 2, label: "2nd PR", description: "Second approved contribution" },
      { id: 3, label: "3rd PR", description: "Third approved contribution" },
      {
        id: 4,
        label: "Complete",
        description: "Hacktoberfest goal reached",
      },
    ];

    return {
      completed,
      goal,
      percent: Math.round((completed / goal) * 100),
      nodes: nodeDefs.map((node) => ({
        ...node,
        completed: approvedInOctober >= node.id,
      })),
      stats: {
        approvedContributions: approvedInOctober,
        repoSuggestions: repoSuggestionsInOctober,
        firstPrStepsCompleted: completedSteps,
        firstPrTotalSteps: OpensourceService.FIRST_PR_TOTAL_STEPS,
      },
    };
  }

  async getStudentContributionTrend(userId: number, startDate?: string, endDate?: string) {
    const now = new Date();
    const currentMonthStart = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1),
    );
    const startMonth = startDate ? new Date(startDate) : this.addMonthsUTC(currentMonthStart, -5);
    const endMonth = endDate ? new Date(endDate) : this.addMonthsUTC(currentMonthStart, 1);
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

    const monthDiff = (endMonth.getUTCFullYear() - startMonth.getUTCFullYear()) * 12
      + (endMonth.getUTCMonth() - startMonth.getUTCMonth());
    const numMonths = Math.max(monthDiff, 1);
    const trend = Array.from({ length: numMonths }, (_, index) => {
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
    // Re-sync stored ossTier when First PR roadmap progress changes (fire-and-forget)
    userService.calculateOssTier(userId).catch((err) => console.error("Failed to calculate OSS tier:", err));
    return progress.completedStepIds;
  }

  async getRecommendedRepos(userId: number) {
    // 1. Get student profile with skills
    const student = await prisma.user.findUnique({
      where: { id: userId },
      select: { skills: true },
    });

    const skills = student?.skills || [];
    if (skills.length === 0) {
      // Return trending repos as default fallback
      return prisma.opensourceRepo.findMany({
        where: { trending: true },
        take: 6,
        orderBy: { stars: "desc" },
      });
    }

    // 2. Fetch repos matching skills (language or techStack subset)
    // We search for repos where the primary language is in the student's skills
    const repos = await prisma.opensourceRepo.findMany({
      where: {
        OR: [
          { language: { in: skills, mode: "insensitive" } },
          { trending: true },
        ],
      },
      take: 8,
      orderBy: [{ trending: "desc" }, { stars: "desc" }],
    });

    return repos;
  }

  async getCertificate(token: string) {
    return prisma.guideCertificate.findUnique({
      where: { token },
    });
  }

  async issueCertificate(userId: number, guideName: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true },
    });
    if (!user) throw new Error("User not found");

    return prisma.guideCertificate.upsert({
      where: { userId_guideName: { userId, guideName } },
      update: {},
      create: { userId, guideName, studentName: user.name },
    });
  }

  async submitGuideFeedback(
    userId: number,
    data: {
      guideId: string;
      stepId: string;
      rating: string;
      reason?: string;
    },
  ) {
    return prisma.guideFeedback.upsert({
      where: {
        userId_guideId_stepId: {
          userId,
          guideId: data.guideId,
          stepId: data.stepId,
        },
      },
      update: {
        rating: data.rating,
        reason: data.reason,
      },
      create: {
        userId,
        guideId: data.guideId,
        stepId: data.stepId,
        rating: data.rating,
        reason: data.reason,
      },
    });
  }
  // ─── Bookmarks ────────────────────────────────────────────────

  async getBookmarkedRepoIds(userId: number): Promise<number[]> {
    const bookmarks = await prisma.opensourceBookmark.findMany({
      where: { userId },
      select: { repoId: true },
      orderBy: { createdAt: "desc" },
    });
    return bookmarks.map((b) => b.repoId);
  }

  async addBookmark(
    userId: number,
    repoId: number,
  ): Promise<{ repoId: number }> {
    const repo = await prisma.opensourceRepo.findUnique({
      where: { id: repoId },
      select: { id: true },
    });
    if (!repo) throw new Error("Repository not found");

    await prisma.opensourceBookmark.upsert({
      where: { userId_repoId: { userId, repoId } },
      create: { userId, repoId },
      update: {}, // no-op if already bookmarked
    });
    return { repoId };
  }

  async removeBookmark(userId: number, repoId: number): Promise<void> {
    await prisma.opensourceBookmark.deleteMany({
      where: { userId, repoId },
    });
  }

  async bulkMigrateBookmarks(
    userId: number,
    repoIds: number[],
  ): Promise<number[]> {
    // Resolve only IDs that actually exist in the DB
    const validRepos = await prisma.opensourceRepo.findMany({
      where: { id: { in: repoIds } },
      select: { id: true },
    });
    const validIds = validRepos.map((r) => r.id);
    if (validIds.length === 0) return this.getBookmarkedRepoIds(userId);

    await prisma.$transaction(
      validIds.map((repoId: number) =>
        prisma.opensourceBookmark.upsert({
          where: { userId_repoId: { userId, repoId } },
          create: { userId, repoId },
          update: {},
        }),
      ),
    );

    return this.getBookmarkedRepoIds(userId);
  }

}


