import { prisma } from "../../database/db.js";

interface ListParams {
  page: number;
  limit: number;
  search?: string | undefined;
  category?: string | undefined;
}

export class InternshipService {
  async list(params: ListParams) {
    const { page, limit, search, category } = params;

    const where: Record<string, unknown> = {};
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { domain: { contains: search, mode: "insensitive" } },
        { organizer: { contains: search, mode: "insensitive" } },
        { eligibility: { contains: search, mode: "insensitive" } },
      ];
    }
    if (category) where.category = category;

    const [total, internships] = await Promise.all([
      prisma.govInternship.count({ where }),
      prisma.govInternship.findMany({
        where,
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    return {
      internships,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async stats() {
    const [total, categoryGroups] = await Promise.all([
      prisma.govInternship.count(),
      prisma.govInternship.groupBy({
        by: ["category"],
        _count: { id: true },
        orderBy: { category: "asc" },
      }),
    ]);

    return {
      total,
      categories: categoryGroups.map((g) => ({ name: g.category, count: g._count.id })),
    };
  }
}
