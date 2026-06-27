import { prisma } from "../../database/db.js";
import type { Prisma } from "@prisma/client";

interface ComplianceQuery {
  page: number;
  limit: number;
  category?: string | undefined;
  isRequired?: boolean | undefined;
}

export class ComplianceService {
  async create(data: { name: string; category: string; description?: string | undefined; documentUrl?: string | undefined; expiryDate?: string | undefined; isRequired: boolean; assignedTo: number[] }) {
    return prisma.complianceDocument.create({
      data: {
        name: data.name,
        category: data.category,
        description: data.description ?? null,
        documentUrl: data.documentUrl ?? null,
        expiryDate: data.expiryDate ? new Date(data.expiryDate) : null,
        isRequired: data.isRequired,
        assignedTo: data.assignedTo,
      },
    });
  }

  async getAll(query: ComplianceQuery) {
    const where: Prisma.complianceDocumentWhereInput = {};
    if (query.category) where.category = query.category;
    if (query.isRequired !== undefined) where.isRequired = query.isRequired;

    const [documents, total] = await Promise.all([
      prisma.complianceDocument.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.complianceDocument.count({ where }),
    ]);

    return { documents, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async getById(id: number) {
    const document = await prisma.complianceDocument.findUnique({ where: { id } });
    if (!document) throw new Error("Compliance document not found");
    return document;
  }

  async update(id: number, data: { name?: string | undefined; category?: string | undefined; description?: string | undefined; documentUrl?: string | undefined; expiryDate?: string | null | undefined; isRequired?: boolean | undefined; assignedTo?: number[] | undefined }) {
    const document = await prisma.complianceDocument.findUnique({ where: { id } });
    if (!document) throw new Error("Compliance document not found");

    const updateData: Record<string, unknown> = { ...data };
    if (data.expiryDate !== undefined) {
      updateData.expiryDate = data.expiryDate ? new Date(data.expiryDate) : null;
    }

    return prisma.complianceDocument.update({ where: { id }, data: updateData });
  }

  async delete(id: number) {
    const document = await prisma.complianceDocument.findUnique({ where: { id } });
    if (!document) throw new Error("Compliance document not found");
    return prisma.complianceDocument.delete({ where: { id } });
  }

  async acknowledge(id: number, employeeId: number) {
    const document = await prisma.complianceDocument.findUnique({ where: { id } });
    if (!document) throw new Error("Compliance document not found");

    const acknowledgedBy = document.acknowledgedBy as number[];
    if (acknowledgedBy.includes(employeeId)) throw new Error("Already acknowledged");

    return prisma.complianceDocument.update({
      where: { id },
      data: { acknowledgedBy: [...acknowledgedBy, employeeId] },
    });
  }

  async getExpiring(days: number = 30) {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() + days);

    return prisma.complianceDocument.findMany({
      where: {
        expiryDate: { lte: cutoff, gte: new Date() },
      },
      orderBy: { expiryDate: "asc" },
    });
  }

  async getCategories() {
    const categories = await prisma.complianceDocument.findMany({
      select: { category: true },
      distinct: ["category"],
      orderBy: { category: "asc" },
    });
    return categories.map((c) => c.category);
  }
}
