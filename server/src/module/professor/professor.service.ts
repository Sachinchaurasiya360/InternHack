import { prisma } from "../../database/db.js";
import { cacheGet, cacheSet, cacheDelPattern } from "../../utils/cache.js";
import type { CreateProfessorInput, UpdateProfessorInput } from "./professor.validation.js";

const PROF_TTL = 3600;

function stableKey(obj: Record<string, unknown>): string {
  return JSON.stringify(Object.fromEntries(Object.entries(obj).sort(([a], [b]) => a.localeCompare(b))));
}

interface ListParams {
  page: number;
  limit: number;
  search?: string | undefined;
  college?: string | undefined;
  department?: string | undefined;
}

const FREE_LIMIT = 100;

export class ProfessorService {
  async list(params: ListParams, isPremium: boolean) {
    const tier = isPremium ? "p" : "f";
    const cacheKey = `professors:list:${tier}:${stableKey(params as unknown as Record<string, unknown>)}`;
    const cached = await cacheGet(cacheKey);
    if (cached) return cached as never;

    const { page, limit, search, college, department } = params;

    const where: Record<string, unknown> = {};
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { areaOfInterest: { contains: search, mode: "insensitive" } },
        { department: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }
    if (college) where.collegeName = college;
    if (department) where.department = department;

    const [total, professors] = await Promise.all([
      prisma.iitProfessor.count({ where }),
      prisma.iitProfessor.findMany({
        where,
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    // Premium gating: free users see first 100 records only
    const effectiveTotal = isPremium ? total : Math.min(total, FREE_LIMIT);
    const maxPage = Math.ceil(effectiveTotal / limit);

    if (!isPremium && (page - 1) * limit >= FREE_LIMIT) {
      return {
        professors: [],
        pagination: { page, limit, total: effectiveTotal, totalPages: maxPage },
        premiumRequired: true,
      };
    }

    // For free users, trim results if they'd exceed the 100 mark
    let results = professors;
    if (!isPremium) {
      const offset = (page - 1) * limit;
      const remaining = FREE_LIMIT - offset;
      if (remaining < results.length) {
        results = results.slice(0, Math.max(0, remaining));
      }
    }

    const result = {
      professors: results,
      pagination: { page, limit, total: effectiveTotal, totalPages: maxPage },
      premiumRequired: !isPremium && total > FREE_LIMIT,
    };
    await cacheSet(cacheKey, result, PROF_TTL);
    return result;
  }

  async stats() {
    const cacheKey = "professors:stats";
    const cached = await cacheGet(cacheKey);
    if (cached) return cached as never;

    const [total, collegeGroups, departmentGroups] = await Promise.all([
      prisma.iitProfessor.count(),
      prisma.iitProfessor.groupBy({
        by: ["collegeName"],
        _count: { id: true },
        orderBy: { collegeName: "asc" },
      }),
      prisma.iitProfessor.groupBy({
        by: ["department"],
        _count: { id: true },
        orderBy: { department: "asc" },
      }),
    ]);

    const result = {
      total,
      colleges: collegeGroups.map((g) => ({ name: g.collegeName, count: g._count.id })),
      departments: departmentGroups.map((g) => ({ name: g.department, count: g._count.id })),
    };
    await cacheSet(cacheKey, result, PROF_TTL);
    return result;
  }

  async create(data: CreateProfessorInput) {
    const record = await prisma.iitProfessor.create({ data });
    await cacheDelPattern("professors:");
    return record;
  }

  async update(id: number, data: UpdateProfessorInput) {
    const record = await prisma.iitProfessor.update({ where: { id }, data });
    await cacheDelPattern("professors:");
    return record;
  }

  async delete(id: number) {
    const record = await prisma.iitProfessor.delete({ where: { id } });
    await cacheDelPattern("professors:");
    return record;
  }
}

