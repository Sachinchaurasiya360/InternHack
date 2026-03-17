import { prisma } from "../../database/db.js";
import type { Prisma, OnboardingItemStatus } from "@prisma/client";

interface OnboardingQuery {
  page: number;
  limit: number;
  status?: OnboardingItemStatus | undefined;
}

interface OnboardingItem {
  title: string;
  description?: string | undefined;
  assignedTo?: string | undefined;
  dueDate?: string | undefined;
  completed: boolean;
  completedAt?: string | undefined;
  note?: string | undefined;
}

export class OnboardingService {
  async create(data: { employeeId: number; targetDate: string; items: { title: string; description?: string | undefined; assignedTo?: string | undefined; dueDate?: string | undefined }[] }) {
    const existing = await prisma.onboardingChecklist.findUnique({ where: { employeeId: data.employeeId } });
    if (existing) throw new Error("Onboarding checklist already exists for this employee");

    const items: OnboardingItem[] = data.items.map((item) => ({
      ...item,
      completed: false,
    }));

    return prisma.onboardingChecklist.create({
      data: {
        employeeId: data.employeeId,
        targetDate: new Date(data.targetDate),
        items: JSON.stringify(items),
        status: "IN_PROGRESS",
      },
      include: { employee: { select: { id: true, firstName: true, lastName: true, employeeCode: true } } },
    });
  }

  async getAll(query: OnboardingQuery) {
    const where: Prisma.onboardingChecklistWhereInput = {};
    if (query.status) where.status = query.status;

    const [checklists, total] = await Promise.all([
      prisma.onboardingChecklist.findMany({
        where,
        include: { employee: { select: { id: true, firstName: true, lastName: true, employeeCode: true, department: { select: { name: true } } } } },
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.onboardingChecklist.count({ where }),
    ]);

    return { checklists, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async getByEmployeeId(employeeId: number) {
    const checklist = await prisma.onboardingChecklist.findUnique({
      where: { employeeId },
      include: { employee: { select: { id: true, firstName: true, lastName: true, employeeCode: true } } },
    });
    if (!checklist) throw new Error("Onboarding checklist not found");
    return checklist;
  }

  async updateItem(employeeId: number, itemIndex: number, completed: boolean, note?: string | undefined) {
    const checklist = await prisma.onboardingChecklist.findUnique({ where: { employeeId } });
    if (!checklist) throw new Error("Onboarding checklist not found");

    const items = JSON.parse(checklist.items as string) as OnboardingItem[];
    if (itemIndex >= items.length) throw new Error("Invalid item index");

    items[itemIndex]!.completed = completed;
    items[itemIndex]!.completedAt = completed ? new Date().toISOString() : undefined;
    if (note) items[itemIndex]!.note = note;

    const allCompleted = items.every((item) => item.completed);
    const status = allCompleted ? "COMPLETED" : "IN_PROGRESS";

    return prisma.onboardingChecklist.update({
      where: { employeeId },
      data: {
        items: JSON.stringify(items),
        status,
        completedAt: allCompleted ? new Date() : null,
      },
    });
  }

  async delete(employeeId: number) {
    const checklist = await prisma.onboardingChecklist.findUnique({ where: { employeeId } });
    if (!checklist) throw new Error("Onboarding checklist not found");
    return prisma.onboardingChecklist.delete({ where: { employeeId } });
  }
}
