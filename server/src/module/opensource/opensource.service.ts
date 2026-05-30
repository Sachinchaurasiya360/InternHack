import { prisma } from "../../database/db.js";

function addMonthsUTC(date: Date, months: number): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + months, 1));
}

function getMonthKeyUTC(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function getMonthLabelUTC(date: Date): string {
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" }).format(date);
}

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

  async getStudentAnalytics(userId: number) {
    const now = new Date();
    const currentMonthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
    const startMonth = addMonthsUTC(currentMonthStart, -5);
    const endMonth = addMonthsUTC(currentMonthStart, 1);

    // 1. Trend Data (Approved requests in last 6 months)
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
      const monthKey = getMonthKeyUTC(request.updatedAt);
      countsByMonth.set(monthKey, (countsByMonth.get(monthKey) ?? 0) + 1);
    }

    const trend = Array.from({ length: 6 }, (_, index) => {
      const monthStart = addMonthsUTC(startMonth, index);
      const monthKey = getMonthKeyUTC(monthStart);
      return {
        month: monthKey,
        label: getMonthLabelUTC(monthStart),
        count: countsByMonth.get(monthKey) ?? 0,
      };
    });

    // 2. Domain Breakdown (All approved requests)
    const allApproved = await prisma.repoRequest.findMany({
      where: { userId, status: "APPROVED" },
      select: { domain: true },
    });

    const domainCounts: Record<string, number> = {};
    allApproved.forEach((r) => {
      if (r.domain) {
        domainCounts[r.domain] = (domainCounts[r.domain] || 0) + 1;
      }
    });

    const domains = Object.entries(domainCounts)
      .map(([domain, count]) => ({ domain, count }))
      .sort((a, b) => b.count - a.count);

    return {
      trend,
      total: approvedRequests.length,
      domains,
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
