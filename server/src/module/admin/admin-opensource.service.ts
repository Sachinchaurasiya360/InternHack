import { prisma } from "../../database/db.js";
import type { Prisma } from "@prisma/client";

export class AdminOpensourceService {
  async listRepos(query: {
    page: number;
    limit: number;
    search?: string | undefined;
    language?: string | undefined;
    difficulty?: string | undefined;
    domain?: string | undefined;
    sortBy: string;
    sortOrder: string;
  }) {
    const where: Prisma.opensourceRepoWhereInput = {};

    if (query.language) {
      where.language = { equals: query.language, mode: "insensitive" };
    }
    if (query.difficulty) {
      where.difficulty = query.difficulty as
        | "BEGINNER"
        | "INTERMEDIATE"
        | "ADVANCED";
    }
    if (query.domain) {
      where.domain = query.domain as
        | "AI"
        | "WEB"
        | "DEVOPS"
        | "MOBILE"
        | "BLOCKCHAIN"
        | "DATA"
        | "SECURITY"
        | "CLOUD"
        | "GAMING"
        | "OTHER";
    }
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: "insensitive" } },
        { owner: { contains: query.search, mode: "insensitive" } },
        { description: { contains: query.search, mode: "insensitive" } },
      ];
    }

    const skip = (query.page - 1) * query.limit;
    const orderBy: Prisma.opensourceRepoOrderByWithRelationInput = {
      [query.sortBy]: query.sortOrder,
    };

    const [repos, total] = await Promise.all([
      prisma.opensourceRepo.findMany({
        where,
        skip,
        take: query.limit,
        orderBy,
      }),
      prisma.opensourceRepo.count({ where }),
    ]);

    return {
      repos,
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  async getRepo(repoId: number) {
    const repo = await prisma.opensourceRepo.findUnique({
      where: { id: repoId },
    });
    if (!repo) throw new Error("Repository not found");
    return repo;
  }

  async createRepo(input: {
    name: string;
    owner: string;
    description: string;
    language: string;
    techStack?: string[];
    difficulty?: string;
    domain?: string;
    issueTypes?: string[];
    stars?: number;
    forks?: number;
    openIssues?: number;
    url: string;
    logo?: string | undefined;
    tags?: string[];
    highlights?: string[];
    trending?: boolean;
    hacktoberfest?: boolean;
  }) {
    return prisma.opensourceRepo.create({
      data: {
        name: input.name,
        owner: input.owner,
        description: input.description,
        language: input.language,
        techStack: input.techStack ?? [],
        difficulty: (input.difficulty ??
          "BEGINNER") as Prisma.EnumRepoDifficultyFieldUpdateOperationsInput["set"] &
          string,
        domain: (input.domain ??
          "WEB") as Prisma.EnumRepoDomainFieldUpdateOperationsInput["set"] &
          string,
        issueTypes: input.issueTypes ?? [],
        stars: input.stars ?? 0,
        forks: input.forks ?? 0,
        openIssues: input.openIssues ?? 0,
        url: input.url,
        logo: input.logo ?? null,
        tags: input.tags ?? [],
        highlights: input.highlights ?? [],
        trending: input.trending ?? false,
        hacktoberfest: input.hacktoberfest ?? false,
      },
    });
  }

  async updateRepo(repoId: number, input: Record<string, unknown>) {
    const repo = await prisma.opensourceRepo.findUnique({
      where: { id: repoId },
    });
    if (!repo) throw new Error("Repository not found");

    const data: Prisma.opensourceRepoUpdateInput = {};
    if (input["name"] !== undefined) data.name = input["name"] as string;
    if (input["owner"] !== undefined) data.owner = input["owner"] as string;
    if (input["description"] !== undefined)
      data.description = input["description"] as string;
    if (input["language"] !== undefined)
      data.language = input["language"] as string;
    if (input["techStack"] !== undefined)
      data.techStack = input["techStack"] as string[];
    if (input["difficulty"] !== undefined)
      data.difficulty = input[
        "difficulty"
      ] as Prisma.EnumRepoDifficultyFieldUpdateOperationsInput["set"] & string;
    if (input["domain"] !== undefined)
      data.domain = input[
        "domain"
      ] as Prisma.EnumRepoDomainFieldUpdateOperationsInput["set"] & string;
    if (input["issueTypes"] !== undefined)
      data.issueTypes = input["issueTypes"] as string[];
    if (input["stars"] !== undefined) data.stars = input["stars"] as number;
    if (input["forks"] !== undefined) data.forks = input["forks"] as number;
    if (input["openIssues"] !== undefined)
      data.openIssues = input["openIssues"] as number;
    if (input["url"] !== undefined) data.url = input["url"] as string;
    if (input["logo"] !== undefined)
      data.logo = (input["logo"] as string) || null;
    if (input["tags"] !== undefined) data.tags = input["tags"] as string[];
    if (input["highlights"] !== undefined)
      data.highlights = input["highlights"] as string[];
    if (input["trending"] !== undefined)
      data.trending = input["trending"] as boolean;
    if (input["hacktoberfest"] !== undefined)
      data.hacktoberfest = input["hacktoberfest"] as boolean;

    return prisma.opensourceRepo.update({ where: { id: repoId }, data });
  }

  async deleteRepo(repoId: number) {
    const repo = await prisma.opensourceRepo.findUnique({
      where: { id: repoId },
    });
    if (!repo) throw new Error("Repository not found");
    return prisma.opensourceRepo.delete({ where: { id: repoId } });
  }

  async getGuideFeedbackAnalytics() {
    const feedback = await prisma.guideFeedback.findMany({
      select: { guideId: true, stepId: true, rating: true, reason: true },
    });

    const totalFeedback = feedback.length;
    const thumbsUp = feedback.filter((f) => f.rating === "up").length;
    const globalSatisfactionRate = totalFeedback > 0 ? (thumbsUp / totalFeedback) * 100 : 0;

    const statsMap = new Map<string, { total: number; up: number; reasons: Record<string, number> }>();

    feedback.forEach((f) => {
      const key = `${f.guideId}:${f.stepId}`;
      if (!statsMap.has(key)) {
        statsMap.set(key, { total: 0, up: 0, reasons: {} });
      }
      const s = statsMap.get(key)!;
      s.total++;
      if (f.rating === "up") s.up++;
      if (f.reason) {
        s.reasons[f.reason] = (s.reasons[f.reason] || 0) + 1;
      }
    });

    const stepStats = Array.from(statsMap.entries()).map(([key, s]) => {
      const [guideId, stepId] = key.split(":");
      return {
        guideId,
        stepId,
        total: s.total,
        up: s.up,
        satisfactionRate: (s.up / s.total) * 100,
        reasons: s.reasons,
      };
    });

    // 3. Bottom 5 Steps (where total responses > 5)
    const bottom5Steps = stepStats
      .filter((s) => s.total > 5)
      .sort((a, b) => a.satisfactionRate - b.satisfactionRate)
      .slice(0, 5);

    // 4. Preset Drop-off Reasons Global Summary
    const reasonSummary: Record<string, number> = {};
    feedback.forEach((f) => {
      if (f.reason) {
        reasonSummary[f.reason] = (reasonSummary[f.reason] || 0) + 1;
      }
    });

    return {
      global: {
        totalFeedback,
        satisfactionRate: globalSatisfactionRate,
      },
      bottom5Steps,
      reasonSummary,
    };
  }
}
