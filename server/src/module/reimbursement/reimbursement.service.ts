import { prisma } from "../../database/db.js";
import type { Prisma, ReimbursementStatus } from "@prisma/client";

interface ReimbursementQuery {
  page: number;
  limit: number;
  status?: ReimbursementStatus | undefined;
  employeeId?: number | undefined;
  category?: string | undefined;
}

export class ReimbursementService {
  async create(data: { employeeId: number; category: string; amount: number; currency: string; description: string; receiptUrls: string[] }) {
    return prisma.reimbursement.create({
      data,
      include: { employee: { select: { id: true, firstName: true, lastName: true, employeeCode: true } } },
    });
  }

  async getAll(query: ReimbursementQuery) {
    const where: Prisma.reimbursementWhereInput = {};
    if (query.status) where.status = query.status;
    if (query.employeeId) where.employeeId = query.employeeId;
    if (query.category) where.category = query.category;

    const [reimbursements, total] = await Promise.all([
      prisma.reimbursement.findMany({
        where,
        include: { employee: { select: { id: true, firstName: true, lastName: true, employeeCode: true, department: { select: { name: true } } } } },
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.reimbursement.count({ where }),
    ]);

    return { reimbursements, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async getById(id: number) {
    const record = await prisma.reimbursement.findUnique({
      where: { id },
      include: { employee: { select: { id: true, firstName: true, lastName: true, employeeCode: true, department: { select: { name: true } } } } },
    });
    if (!record) throw new Error("Reimbursement not found");
    return record;
  }

  async getMyReimbursements(employeeId: number) {
    return prisma.reimbursement.findMany({
      where: { employeeId },
      orderBy: { createdAt: "desc" },
    });
  }

  async update(id: number, data: { category?: string | undefined; amount?: number | undefined; description?: string | undefined; receiptUrls?: string[] | undefined }) {
    const record = await prisma.reimbursement.findUnique({ where: { id } });
    if (!record) throw new Error("Reimbursement not found");
    if (record.status !== "DRAFT") throw new Error("Only draft reimbursements can be updated");

    const updateData: Record<string, unknown> = {};
    if (data.category !== undefined) updateData.category = data.category;
    if (data.amount !== undefined) updateData.amount = data.amount;
    if (data.description !== undefined) updateData.description = data.description;
    if (data.receiptUrls !== undefined) updateData.receiptUrls = data.receiptUrls;
    return prisma.reimbursement.update({ where: { id }, data: updateData });
  }

  async submit(id: number) {
    const record = await prisma.reimbursement.findUnique({ where: { id } });
    if (!record) throw new Error("Reimbursement not found");
    if (record.status !== "DRAFT") throw new Error("Only draft reimbursements can be submitted");

    return prisma.reimbursement.update({ where: { id }, data: { status: "SUBMITTED" } });
  }

  async approve(id: number, approverNote?: string | undefined) {
    const record = await prisma.reimbursement.findUnique({ where: { id } });
    if (!record) throw new Error("Reimbursement not found");
    if (record.status !== "SUBMITTED") throw new Error("Only submitted reimbursements can be approved");

    return prisma.reimbursement.update({ where: { id }, data: { status: "MANAGER_APPROVED", approverNote: approverNote ?? null } });
  }

  async reject(id: number, approverNote?: string | undefined) {
    const record = await prisma.reimbursement.findUnique({ where: { id } });
    if (!record) throw new Error("Reimbursement not found");
    if (record.status !== "SUBMITTED") throw new Error("Only submitted reimbursements can be rejected");

    return prisma.reimbursement.update({ where: { id }, data: { status: "REJECTED", approverNote: approverNote ?? null } });
  }

  async markPaid(ids: number[]) {
    return prisma.reimbursement.updateMany({
      where: { id: { in: ids }, status: "FINANCE_APPROVED" },
      data: { status: "PAID", paidAt: new Date() },
    });
  }
}
