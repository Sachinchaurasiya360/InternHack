import { prisma } from "../../database/db.js";

export class OpensourceService {
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
    const { page, limit, search, language, difficulty, domain, sortBy, sortOrder } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (language) where.language = language;
    if (difficulty) where.difficulty = difficulty;
    if (domain) where.domain = domain;
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { owner: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { tags: { hasSome: [search] } },
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

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
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
}
