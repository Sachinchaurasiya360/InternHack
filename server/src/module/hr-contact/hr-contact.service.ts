import { prisma } from "../../database/db.js";

interface ListParams {
  page: number;
  limit: number;
  search?: string | undefined;
  company?: string | undefined;
}

const FREE_LIMIT = 100;

export class HrContactService {
  async list(params: ListParams, isPremium: boolean) {
    const { page, limit, search, company } = params;

    const where: Record<string, unknown> = {};
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
        { designation: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }
    if (company) where.company = company;

    const [total, contacts] = await Promise.all([
      prisma.itHrContact.count({ where }),
      prisma.itHrContact.findMany({
        where,
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    const effectiveTotal = isPremium ? total : Math.min(total, FREE_LIMIT);
    const maxPage = Math.ceil(effectiveTotal / limit);

    if (!isPremium && (page - 1) * limit >= FREE_LIMIT) {
      return {
        contacts: [],
        pagination: { page, limit, total: effectiveTotal, totalPages: maxPage },
        premiumRequired: true,
      };
    }

    let results = contacts;
    if (!isPremium) {
      const offset = (page - 1) * limit;
      const remaining = FREE_LIMIT - offset;
      if (remaining < results.length) {
        results = results.slice(0, Math.max(0, remaining));
      }
    }

    return {
      contacts: results,
      pagination: { page, limit, total: effectiveTotal, totalPages: maxPage },
      premiumRequired: !isPremium && total > FREE_LIMIT,
    };
  }

  async stats() {
    const [total, companyGroups] = await Promise.all([
      prisma.itHrContact.count(),
      prisma.itHrContact.groupBy({
        by: ["company"],
        _count: { id: true },
        orderBy: { company: "asc" },
      }),
    ]);

    return {
      total,
      companies: companyGroups
        .filter((g) => g.company)
        .map((g) => ({ name: g.company!, count: g._count.id })),
    };
  }
}
