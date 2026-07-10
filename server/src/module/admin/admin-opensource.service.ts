import { prisma } from "../../database/db.js";
import { cacheDel } from "../../utils/cache.js";
import { LANGUAGES_CACHE_KEY } from "../opensource/opensource.service.js";
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
    const repo = await prisma.opensourceRepo.create({
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
    cacheDel(LANGUAGES_CACHE_KEY).catch(() => {});
    return repo;
  }

  async updateRepo(repoId: number, input: Record<string, unknown>) {
    const repo = await prisma.opensourceRepo.findUnique({
      where: { id: repoId },
    });
    if (!repo) throw new Error("Repository not found");

    const data: Prisma.opensourceRepoUpdateInput = {};
    let languageChanged = false;
    if (input["name"] !== undefined) data.name = input["name"] as string;
    if (input["owner"] !== undefined) data.owner = input["owner"] as string;
    if (input["description"] !== undefined)
      data.description = input["description"] as string;
    if (input["language"] !== undefined) {
      data.language = input["language"] as string;
      languageChanged = true;
    }
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

    const updated = await prisma.opensourceRepo.update({ where: { id: repoId }, data });
    if (languageChanged) cacheDel(LANGUAGES_CACHE_KEY).catch(() => {});
    return updated;
  }

  async deleteRepo(repoId: number) {
    const repo = await prisma.opensourceRepo.findUnique({
      where: { id: repoId },
    });
    if (!repo) throw new Error("Repository not found");
    const result = await prisma.opensourceRepo.delete({ where: { id: repoId } });
    cacheDel(LANGUAGES_CACHE_KEY).catch(() => {});
    return result;
  }

}
