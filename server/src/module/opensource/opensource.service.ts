import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "../../database/db.js";
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
      Date.now() - new Date(repo.githubStatsUpdatedAt).getTime() > SIX_HOURS;

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
    // Re-sync stored ossTier for the contributor (fire-and-forget)
    userService.calculateOssTier(request.userId).catch(() => { });
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
    userService.calculateOssTier(userId).catch(() => { });
    return progress.completedStepIds;
  }

  async getRecommendedRepos(userId: number) {
    // Phase 1: Enhanced Data Collection
    
    // 1. Get student profile with skills, recent applications, and job preferences
    const student = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        skills: true,
        college: true,
        graduationYear: true,
        projects: true,
        achievements: true,
        applications: {
          take: 10,
          orderBy: { createdAt: "desc" },
          select: {
            job: {
              select: {
                tags: true,
                title: true,
              },
            },
          },
        },
      },
    });

    if (!student) {
      // Return trending repos as fallback
      const repos = await prisma.opensourceRepo.findMany({
        where: { trending: true },
        take: 6,
        orderBy: { stars: "desc" },
      });
      
      // Add metadata without AI ranking
      return repos.map(repo => ({
        ...repo,
        matchReason: "Trending repository with high community engagement",
        aiRanked: false,
        matchedSkills: [],
      }));
    }

    // 2. Extract skills and job-related tags
    const skills = student.skills || [];
    const jobTags = new Set<string>();
    
    // Extract tags from recent job applications
    student.applications.forEach((app) => {
      app.job.tags.forEach((tag) => jobTags.add(tag.toLowerCase()));
      
      // Extract keywords from job titles (e.g., "Frontend Developer" → ["frontend", "developer"])
      const titleWords = app.job.title
        .toLowerCase()
        .split(/[\s-_]+/)
        .filter((word) => word.length > 3);
      titleWords.forEach((word) => jobTags.add(word));
    });

    // Combine skills and job tags for matching
    const allKeywords = [...new Set([...skills.map((s) => s.toLowerCase()), ...Array.from(jobTags)])];

    // 3. If no data, return trending repos
    if (allKeywords.length === 0) {
      const repos = await prisma.opensourceRepo.findMany({
        where: { trending: true },
        take: 6,
        orderBy: { stars: "desc" },
      });
      
      return repos.map(repo => ({
        ...repo,
        matchReason: "Trending repository - great for exploration",
        aiRanked: false,
        matchedSkills: [],
      }));
    }

    // 4. Fetch repos with enhanced matching criteria
    const repos = await prisma.opensourceRepo.findMany({
      where: {
        OR: [
          // Match by primary language
          { language: { in: allKeywords, mode: "insensitive" } },
          // Match by tech stack
          {
            techStack: {
              hasSome: allKeywords,
            },
          },
          // Match by tags
          {
            tags: {
              hasSome: allKeywords,
            },
          },
          // Include trending repos for discovery
          { trending: true },
        ],
      },
      take: 20, // Fetch more repos for AI ranking
      orderBy: [
        { trending: "desc" },
        { openIssues: "desc" }, // Prioritize repos with more open issues (more opportunities)
        { stars: "desc" },
      ],
    });

    // 5. Remove duplicates
    const uniqueRepos = Array.from(
      new Map(repos.map((repo) => [repo.id, repo])).values()
    );

    // Phase 2 & 3: AI-Powered Ranking with Match Reasons
    // Use Gemini to rank repos and generate match reasons
    const rankedReposWithReasons = await this.rankReposWithAIAndReasons(student, uniqueRepos, allKeywords);

    return rankedReposWithReasons.slice(0, 8);
  }

  /**
   * Phase 2 & 3: Use Gemini AI to rank repositories and generate match reasons
   */
  private async rankReposWithAIAndReasons(
    student: {
      skills: string[];
      college: string | null;
      graduationYear: number | null;
      projects: any;
      achievements: any;
    },
    repos: any[],
    userKeywords: string[]
  ): Promise<any[]> {
    const apiKey = process.env["GEMINI_API_KEY"];
    
    // Fallback to basic ranking with simple match reasons if no API key
    if (!apiKey || repos.length === 0) {
      return this.addBasicMatchReasons(repos, userKeywords);
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

      // Build prompt for AI ranking with reasons
      const prompt = this.buildRankingPromptWithReasons(student, repos);
      
      const result = await model.generateContent(prompt);
      const text = result.response.text().trim();
      
      // Parse AI response
      const rankingsWithReasons = this.parseRankingResponseWithReasons(text);
      
      if (!rankingsWithReasons || rankingsWithReasons.length === 0) {
        // Fallback to basic match reasons
        return this.addBasicMatchReasons(repos, userKeywords);
      }

      // Reorder repos and add match reasons and metadata
      const rankedRepos = this.applyRankingsWithReasons(repos, rankingsWithReasons, userKeywords);
      return rankedRepos;
      
    } catch (error) {
      console.error("AI ranking with reasons failed:", error);
      // Fallback to basic match reasons
      return this.addBasicMatchReasons(repos, userKeywords);
    }
  }

  /**
   * Add basic match reasons without AI (fallback)
   */
  private addBasicMatchReasons(repos: any[], userKeywords: string[]): any[] {
    return repos.map(repo => {
      const matchedSkills = this.findMatchedSkills(repo, userKeywords);
      const reason = this.generateBasicMatchReason(repo, matchedSkills);
      
      return {
        ...repo,
        matchReason: reason,
        aiRanked: false,
        matchedSkills,
      };
    });
  }

  /**
   * Find which user skills match the repo
   */
  private findMatchedSkills(repo: any, userKeywords: string[]): string[] {
    const matched = new Set<string>();
    
    userKeywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      
      // Check language
      if (repo.language.toLowerCase() === keywordLower) {
        matched.add(repo.language);
      }
      
      // Check tech stack
      repo.techStack.forEach((tech: string) => {
        if (tech.toLowerCase() === keywordLower) {
          matched.add(tech);
        }
      });
      
      // Check tags
      repo.tags.forEach((tag: string) => {
        if (tag.toLowerCase() === keywordLower) {
          matched.add(tag);
        }
      });
    });
    
    return Array.from(matched);
  }

  /**
   * Generate a basic match reason without AI
   */
  private generateBasicMatchReason(repo: any, matchedSkills: string[]): string {
    if (matchedSkills.length > 0) {
      const skillsText = matchedSkills.slice(0, 2).join(", ");
      return `Matches your skills in ${skillsText}${matchedSkills.length > 2 ? " and more" : ""}`;
    }
    
    if (repo.trending) {
      return "Trending repository with active community";
    }
    
    if (repo.difficulty === "BEGINNER") {
      return "Great for beginners with good first issues";
    }
    
    if (repo.openIssues > 50) {
      return "Active project with many contribution opportunities";
    }
    
    return "Recommended repository for your profile";
  }

  /**
   * Build prompt for Gemini AI to rank repositories with match reasons
   */
  private buildRankingPromptWithReasons(
    student: {
      skills: string[];
      college: string | null;
      graduationYear: number | null;
      projects: any;
      achievements: any;
    },
    repos: any[]
  ): string {
    const userProfile = `
User Profile:
- Skills: ${student.skills.join(", ") || "Not specified"}
- College: ${student.college || "Not specified"}
- Graduation Year: ${student.graduationYear || "Not specified"}
- Number of Projects: ${Array.isArray(student.projects) ? student.projects.length : 0}
- Number of Achievements: ${Array.isArray(student.achievements) ? student.achievements.length : 0}
    `.trim();

    const repoList = repos.map((repo, index) => `
[${index}] ${repo.name}
- Owner: ${repo.owner}
- Description: ${repo.description}
- Language: ${repo.language}
- Tech Stack: ${repo.techStack.join(", ")}
- Difficulty: ${repo.difficulty}
- Domain: ${repo.domain}
- Stars: ${repo.stars}
- Open Issues: ${repo.openIssues}
- Tags: ${repo.tags.join(", ")}
- Trending: ${repo.trending}
    `.trim()).join("\n\n");

    return `You are an expert open source advisor helping students find the best repositories to contribute to.

${userProfile}

Available Repositories:
${repoList}

Task: Rank these repositories from MOST to LEAST suitable for this user and provide a brief reason for each match.

Consider:
1. Skill match (languages, tech stack alignment)
2. Difficulty appropriateness (beginner-friendly for new contributors)
3. Activity level (open issues, trending status)
4. Learning potential (exposure to new technologies)
5. Domain relevance (based on user interests)

Return ONLY a valid JSON array with this structure:
[
  {"index": 0, "reason": "Perfect match for your React skills with active beginner issues"},
  {"index": 5, "reason": "Great to learn TypeScript while contributing to trending project"},
  {"index": 2, "reason": "Aligns with your Node.js experience and web domain"}
]

Rules:
- Return ONLY the JSON array, no markdown fences, no extra text
- Use the exact indices from the repository list above
- Include ALL repository indices exactly once
- Each reason should be 8-15 words explaining why it's suitable
- Most suitable repos should come first
- Focus on skills match, learning opportunities, and contribution potential`;
  }

  /**
   * Parse AI ranking response with match reasons
   */
  private parseRankingResponseWithReasons(text: string): Array<{ index: number; reason: string }> | null {
    try {
      // Remove markdown fences if present
      const cleaned = text.replace(/```json\s*|\s*```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      
      if (
        Array.isArray(parsed) &&
        parsed.every((item) => 
          typeof item === "object" && 
          typeof item.index === "number" && 
          typeof item.reason === "string"
        )
      ) {
        return parsed;
      }
      
      return null;
    } catch {
      return null;
    }
  }

  /**
   * Apply AI rankings with reasons to repository list
   */
  private applyRankingsWithReasons(
    repos: any[],
    rankingsWithReasons: Array<{ index: number; reason: string }>,
    userKeywords: string[]
  ): any[] {
    const rankedRepos: any[] = [];
    const usedIndices = new Set<number>();

    // Add repos in ranked order with AI-generated reasons
    for (const { index, reason } of rankingsWithReasons) {
      if (index >= 0 && index < repos.length && !usedIndices.has(index)) {
        const repo = repos[index];
        const matchedSkills = this.findMatchedSkills(repo, userKeywords);
        
        rankedRepos.push({
          ...repo,
          matchReason: reason,
          aiRanked: true,
          matchedSkills,
        });
        usedIndices.add(index);
      }
    }

    // Add any missing repos at the end with basic reasons
    for (let i = 0; i < repos.length; i++) {
      if (!usedIndices.has(i)) {
        const repo = repos[i];
        const matchedSkills = this.findMatchedSkills(repo, userKeywords);
        const reason = this.generateBasicMatchReason(repo, matchedSkills);
        
        rankedRepos.push({
          ...repo,
          matchReason: reason,
          aiRanked: false,
          matchedSkills,
        });
      }
    }

    return rankedRepos;
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


