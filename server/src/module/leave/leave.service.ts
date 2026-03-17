import { prisma } from "../../database/db.js";
import type { LeaveType, LeaveRequestStatus, Prisma } from "@prisma/client";

interface LeaveQuery {
  page: number;
  limit: number;
  status?: LeaveRequestStatus | undefined;
  leaveType?: LeaveType | undefined;
  employeeId?: number | undefined;
}

export class LeaveService {
  // ── Leave Requests ──

  async createRequest(employeeId: number, data: { leaveType: LeaveType; startDate: string; endDate: string; totalDays: number; reason: string }) {
    const employee = await prisma.employee.findUnique({ where: { id: employeeId } });
    if (!employee) throw new Error("Employee not found");

    // Check balance
    const year = new Date(data.startDate).getFullYear();
    const balance = await prisma.leaveBalance.findUnique({
      where: { employeeId_leaveType_year: { employeeId, leaveType: data.leaveType, year } },
    });

    const available = balance ? balance.allocated + balance.carryForward - balance.used - balance.pending : 0;
    if (data.leaveType !== "UNPAID" && available < data.totalDays) {
      throw new Error(`Insufficient leave balance. Available: ${available}, Requested: ${data.totalDays}`);
    }

    const request = await prisma.$transaction(async (tx) => {
      const req = await tx.leaveRequest.create({
        data: {
          employeeId,
          leaveType: data.leaveType,
          startDate: new Date(data.startDate),
          endDate: new Date(data.endDate),
          totalDays: data.totalDays,
          reason: data.reason,
        },
        include: { employee: { select: { firstName: true, lastName: true } } },
      });

      // Increment pending balance
      if (balance && data.leaveType !== "UNPAID") {
        await tx.leaveBalance.update({
          where: { id: balance.id },
          data: { pending: { increment: data.totalDays } },
        });
      }

      return req;
    });

    return request;
  }

  async getMyRequests(employeeId: number, query: LeaveQuery) {
    const where: Prisma.leaveRequestWhereInput = { employeeId };
    if (query.status) where.status = query.status;
    if (query.leaveType) where.leaveType = query.leaveType;

    const [requests, total] = await Promise.all([
      prisma.leaveRequest.findMany({
        where,
        include: { approver: { select: { id: true, firstName: true, lastName: true } } },
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.leaveRequest.count({ where }),
    ]);

    return { requests, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async getTeamRequests(managerId: number, query: LeaveQuery) {
    const directReports = await prisma.employee.findMany({
      where: { reportingManagerId: managerId },
      select: { id: true },
    });
    const reportIds = directReports.map((r) => r.id);

    const where: Prisma.leaveRequestWhereInput = { employeeId: { in: reportIds } };
    if (query.status) where.status = query.status;

    const [requests, total] = await Promise.all([
      prisma.leaveRequest.findMany({
        where,
        include: {
          employee: { select: { id: true, firstName: true, lastName: true, designation: true, profilePic: true } },
        },
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.leaveRequest.count({ where }),
    ]);

    return { requests, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async getAllRequests(query: LeaveQuery) {
    const where: Prisma.leaveRequestWhereInput = {};
    if (query.status) where.status = query.status;
    if (query.leaveType) where.leaveType = query.leaveType;
    if (query.employeeId) where.employeeId = query.employeeId;

    const [requests, total] = await Promise.all([
      prisma.leaveRequest.findMany({
        where,
        include: {
          employee: { select: { id: true, firstName: true, lastName: true, designation: true, department: { select: { name: true } } } },
          approver: { select: { id: true, firstName: true, lastName: true } },
        },
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.leaveRequest.count({ where }),
    ]);

    return { requests, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async approve(requestId: number, approverId: number, note?: string | undefined) {
    const request = await prisma.leaveRequest.findUnique({ where: { id: requestId } });
    if (!request) throw new Error("Leave request not found");
    if (request.status !== "PENDING") throw new Error("Request is not pending");

    return prisma.$transaction(async (tx) => {
      const updated = await tx.leaveRequest.update({
        where: { id: requestId },
        data: { status: "APPROVED", approverId, approverNote: note ?? null, approvedAt: new Date() },
      });

      // Move from pending to used
      const year = request.startDate.getFullYear();
      if (request.leaveType !== "UNPAID") {
        await tx.leaveBalance.updateMany({
          where: { employeeId: request.employeeId, leaveType: request.leaveType, year },
          data: { pending: { decrement: request.totalDays }, used: { increment: request.totalDays } },
        });
      }

      return updated;
    });
  }

  async reject(requestId: number, approverId: number, note: string) {
    const request = await prisma.leaveRequest.findUnique({ where: { id: requestId } });
    if (!request) throw new Error("Leave request not found");
    if (request.status !== "PENDING") throw new Error("Request is not pending");

    return prisma.$transaction(async (tx) => {
      const updated = await tx.leaveRequest.update({
        where: { id: requestId },
        data: { status: "REJECTED", approverId, approverNote: note },
      });

      // Release pending balance
      const year = request.startDate.getFullYear();
      if (request.leaveType !== "UNPAID") {
        await tx.leaveBalance.updateMany({
          where: { employeeId: request.employeeId, leaveType: request.leaveType, year },
          data: { pending: { decrement: request.totalDays } },
        });
      }

      return updated;
    });
  }

  // ── Leave Balance ──

  async getBalance(employeeId: number, year?: number | undefined) {
    const y = year ?? new Date().getFullYear();
    return prisma.leaveBalance.findMany({
      where: { employeeId, year: y },
      orderBy: { leaveType: "asc" },
    });
  }

  async allocateBalances(data: { employeeIds: number[]; leaveType: LeaveType; year: number; allocated: number }) {
    const operations = data.employeeIds.map((employeeId) =>
      prisma.leaveBalance.upsert({
        where: { employeeId_leaveType_year: { employeeId, leaveType: data.leaveType, year: data.year } },
        create: { employeeId, leaveType: data.leaveType, year: data.year, allocated: data.allocated },
        update: { allocated: data.allocated },
      }),
    );
    return prisma.$transaction(operations);
  }

  // ── Leave Calendar ──

  async getCalendar(startDate: string, endDate: string, departmentId?: number | undefined) {
    const where: Prisma.leaveRequestWhereInput = {
      status: "APPROVED",
      startDate: { lte: new Date(endDate) },
      endDate: { gte: new Date(startDate) },
    };
    if (departmentId) {
      where.employee = { departmentId };
    }

    return prisma.leaveRequest.findMany({
      where,
      include: {
        employee: { select: { id: true, firstName: true, lastName: true, profilePic: true, department: { select: { name: true } } } },
      },
      orderBy: { startDate: "asc" },
    });
  }

  // ── Leave Policies ──

  async getPolicies() {
    return prisma.leavePolicy.findMany({ orderBy: { name: "asc" } });
  }

  async createPolicy(data: { leaveType: LeaveType; name: string; annualAllocation: number; maxCarryForward?: number | undefined; minConsecutiveDays?: number | undefined; maxConsecutiveDays?: number | null | undefined; requiresApproval?: boolean | undefined }) {
    return prisma.leavePolicy.create({
      data: {
        leaveType: data.leaveType,
        name: data.name,
        annualAllocation: data.annualAllocation,
        maxCarryForward: data.maxCarryForward ?? 0,
        minConsecutiveDays: data.minConsecutiveDays ?? 1,
        maxConsecutiveDays: data.maxConsecutiveDays ?? null,
        requiresApproval: data.requiresApproval ?? true,
      },
    });
  }

  async updatePolicy(id: number, data: { name?: string | undefined; annualAllocation?: number | undefined; maxCarryForward?: number | undefined; minConsecutiveDays?: number | undefined; maxConsecutiveDays?: number | null | undefined; requiresApproval?: boolean | undefined }) {
    const policy = await prisma.leavePolicy.findUnique({ where: { id } });
    if (!policy) throw new Error("Leave policy not found");
    const updateData: Record<string, unknown> = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.annualAllocation !== undefined) updateData.annualAllocation = data.annualAllocation;
    if (data.maxCarryForward !== undefined) updateData.maxCarryForward = data.maxCarryForward;
    if (data.minConsecutiveDays !== undefined) updateData.minConsecutiveDays = data.minConsecutiveDays;
    if (data.maxConsecutiveDays !== undefined) updateData.maxConsecutiveDays = data.maxConsecutiveDays;
    if (data.requiresApproval !== undefined) updateData.requiresApproval = data.requiresApproval;
    return prisma.leavePolicy.update({ where: { id }, data: updateData });
  }

  // ── Holidays ──

  async getHolidays(year?: number | undefined) {
    const y = year ?? new Date().getFullYear();
    return prisma.holiday.findMany({ where: { year: y }, orderBy: { date: "asc" } });
  }

  async createHoliday(data: { name: string; date: string; isOptional?: boolean | undefined; location?: string | null | undefined; year: number }) {
    return prisma.holiday.create({
      data: {
        name: data.name,
        date: new Date(data.date),
        isOptional: data.isOptional ?? false,
        location: data.location ?? null,
        year: data.year,
      },
    });
  }
}
