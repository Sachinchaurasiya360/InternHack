import { prisma } from "../../database/db.js";
import type { TaskPriority, TaskStatus, Prisma } from "@prisma/client";

interface CreateTaskData {
  title: string;
  description?: string | undefined;
  assigneeId: number;
  priority?: TaskPriority | undefined;
  dueDate?: string | null | undefined;
  labels?: string[] | undefined;
  parentTaskId?: number | null | undefined;
}

interface TaskQuery {
  page: number;
  limit: number;
  assigneeId?: number | undefined;
  creatorId?: number | undefined;
  status?: TaskStatus | undefined;
  priority?: TaskPriority | undefined;
}

export class HRTaskService {
  async create(creatorId: number, data: CreateTaskData) {
    return prisma.hrTask.create({
      data: {
        title: data.title,
        description: data.description ?? null,
        assigneeId: data.assigneeId,
        creatorId,
        priority: data.priority ?? "MEDIUM",
        dueDate: data.dueDate ? new Date(data.dueDate) : null,
        labels: data.labels ?? [],
        parentTaskId: data.parentTaskId ?? null,
      },
      include: {
        assignee: { select: { id: true, firstName: true, lastName: true } },
        creator: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  async getMyTasks(employeeId: number, query: TaskQuery) {
    const where: Prisma.hrTaskWhereInput = { assigneeId: employeeId };
    if (query.status) where.status = query.status;
    if (query.priority) where.priority = query.priority;

    const [tasks, total] = await Promise.all([
      prisma.hrTask.findMany({
        where,
        include: {
          creator: { select: { id: true, firstName: true, lastName: true } },
          _count: { select: { subTasks: true } },
        },
        orderBy: [{ priority: "desc" }, { dueDate: "asc" }],
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.hrTask.count({ where }),
    ]);

    return { tasks, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async getTeamTasks(managerId: number, query: TaskQuery) {
    const directReports = await prisma.employee.findMany({
      where: { reportingManagerId: managerId },
      select: { id: true },
    });
    const reportIds = [managerId, ...directReports.map((r) => r.id)];

    const where: Prisma.hrTaskWhereInput = {
      OR: [{ assigneeId: { in: reportIds } }, { creatorId: managerId }],
    };
    if (query.status) where.status = query.status;
    if (query.priority) where.priority = query.priority;

    const [tasks, total] = await Promise.all([
      prisma.hrTask.findMany({
        where,
        include: {
          assignee: { select: { id: true, firstName: true, lastName: true } },
          creator: { select: { id: true, firstName: true, lastName: true } },
          _count: { select: { subTasks: true } },
        },
        orderBy: [{ priority: "desc" }, { dueDate: "asc" }],
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.hrTask.count({ where }),
    ]);

    return { tasks, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async getById(id: number) {
    const task = await prisma.hrTask.findUnique({
      where: { id },
      include: {
        assignee: { select: { id: true, firstName: true, lastName: true, profilePic: true } },
        creator: { select: { id: true, firstName: true, lastName: true } },
        subTasks: {
          select: { id: true, title: true, status: true, priority: true, assigneeId: true },
          orderBy: { createdAt: "asc" },
        },
        parentTask: { select: { id: true, title: true } },
      },
    });
    if (!task) throw new Error("Task not found");
    return task;
  }

  async update(id: number, data: { title?: string | undefined; description?: string | undefined; assigneeId?: number | undefined; priority?: TaskPriority | undefined; dueDate?: string | null | undefined; labels?: string[] | undefined; parentTaskId?: number | null | undefined }) {
    const task = await prisma.hrTask.findUnique({ where: { id } });
    if (!task) throw new Error("Task not found");

    const updateData: Record<string, unknown> = { ...data };
    if (data.dueDate) updateData["dueDate"] = new Date(data.dueDate);
    if (data.dueDate === null) updateData["dueDate"] = null;

    return prisma.hrTask.update({
      where: { id },
      data: updateData,
      include: { assignee: { select: { id: true, firstName: true, lastName: true } } },
    });
  }

  async updateStatus(id: number, status: TaskStatus) {
    const task = await prisma.hrTask.findUnique({ where: { id } });
    if (!task) throw new Error("Task not found");

    const data: Prisma.hrTaskUpdateInput = { status };
    if (status === "DONE") data.completedAt = new Date();

    return prisma.hrTask.update({ where: { id }, data });
  }

  async addComment(id: number, comment: { userId: number; text: string }) {
    const task = await prisma.hrTask.findUnique({ where: { id } });
    if (!task) throw new Error("Task not found");

    const comments = (task.comments as Record<string, unknown>[]) ?? [];
    comments.push({ ...comment, createdAt: new Date().toISOString() });

    return prisma.hrTask.update({ where: { id }, data: { comments: comments as Prisma.InputJsonValue } });
  }
}
