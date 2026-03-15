import { prisma } from "../../database/db.js";
import type { AttendanceStatus, Prisma } from "@prisma/client";

interface AttendanceQuery {
  page: number;
  limit: number;
  employeeId?: number | undefined;
  startDate?: string | undefined;
  endDate?: string | undefined;
  status?: AttendanceStatus | undefined;
}

export class AttendanceService {
  async checkIn(employeeId: number, notes?: string | undefined) {
    const employee = await prisma.employee.findUnique({ where: { id: employeeId } });
    if (!employee) throw new Error("Employee not found");

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const now = new Date();

    // Check if already checked in today
    const existing = await prisma.attendanceRecord.findUnique({
      where: { employeeId_date: { employeeId, date: today } },
    });

    if (existing?.checkIn) throw new Error("Already checked in today");

    // Determine if late (after 9:30 AM)
    const lateThreshold = new Date(today);
    lateThreshold.setHours(9, 30, 0, 0);
    const isLate = now > lateThreshold;
    const lateMinutes = isLate ? Math.floor((now.getTime() - lateThreshold.getTime()) / 60000) : 0;

    if (existing) {
      return prisma.attendanceRecord.update({
        where: { id: existing.id },
        data: { checkIn: now, isLate, lateMinutes: lateMinutes || null, notes: notes ?? null, status: "PRESENT" },
      });
    }

    return prisma.attendanceRecord.create({
      data: {
        employeeId, date: today, checkIn: now, status: "PRESENT",
        isLate, lateMinutes: lateMinutes || null, notes: notes ?? null,
      },
    });
  }

  async checkOut(employeeId: number, notes?: string | undefined) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const record = await prisma.attendanceRecord.findUnique({
      where: { employeeId_date: { employeeId, date: today } },
    });

    if (!record) throw new Error("No check-in found for today");
    if (!record.checkIn) throw new Error("Must check in before checking out");
    if (record.checkOut) throw new Error("Already checked out today");

    const now = new Date();
    const workHours = (now.getTime() - record.checkIn.getTime()) / 3600000;
    const standardHours = 8;
    const overtime = Math.max(0, workHours - standardHours);
    const status: AttendanceStatus = workHours < 4 ? "HALF_DAY" : "PRESENT";

    return prisma.attendanceRecord.update({
      where: { id: record.id },
      data: {
        checkOut: now, workHours: Math.round(workHours * 100) / 100,
        overtime: overtime > 0 ? Math.round(overtime * 100) / 100 : null,
        status, notes: notes ?? record.notes,
      },
    });
  }

  async getMyAttendance(employeeId: number, query: AttendanceQuery) {
    const where: Prisma.attendanceRecordWhereInput = { employeeId };
    if (query.startDate) where.date = { ...where.date as object, gte: new Date(query.startDate) };
    if (query.endDate) where.date = { ...where.date as object, lte: new Date(query.endDate) };
    if (query.status) where.status = query.status;

    const [records, total] = await Promise.all([
      prisma.attendanceRecord.findMany({
        where,
        orderBy: { date: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.attendanceRecord.count({ where }),
    ]);

    return { records, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async getToday(employeeId: number) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return prisma.attendanceRecord.findUnique({
      where: { employeeId_date: { employeeId, date: today } },
    });
  }

  async getTeamAttendance(managerId: number, date?: string | undefined) {
    const targetDate = date ? new Date(date) : new Date();
    targetDate.setHours(0, 0, 0, 0);

    const directReports = await prisma.employee.findMany({
      where: { reportingManagerId: managerId, status: { not: "EXITED" } },
      select: { id: true, firstName: true, lastName: true, designation: true, profilePic: true },
    });

    const reportIds = directReports.map((r) => r.id);
    const records = await prisma.attendanceRecord.findMany({
      where: { employeeId: { in: reportIds }, date: targetDate },
    });

    const recordMap = new Map(records.map((r) => [r.employeeId, r]));

    return directReports.map((emp) => ({
      ...emp,
      attendance: recordMap.get(emp.id) ?? null,
    }));
  }

  async regularize(data: { employeeId: number; date: string; checkIn: string; checkOut: string; notes: string }) {
    const date = new Date(data.date);
    date.setHours(0, 0, 0, 0);

    const checkIn = new Date(data.checkIn);
    const checkOut = new Date(data.checkOut);
    const workHours = (checkOut.getTime() - checkIn.getTime()) / 3600000;

    return prisma.attendanceRecord.upsert({
      where: { employeeId_date: { employeeId: data.employeeId, date } },
      create: {
        employeeId: data.employeeId, date, checkIn, checkOut,
        workHours: Math.round(workHours * 100) / 100,
        status: workHours < 4 ? "HALF_DAY" : "PRESENT",
        isRegularized: true, notes: data.notes,
      },
      update: {
        checkIn, checkOut,
        workHours: Math.round(workHours * 100) / 100,
        status: workHours < 4 ? "HALF_DAY" : "PRESENT",
        isRegularized: true, notes: data.notes,
      },
    });
  }

  async getReport(query: AttendanceQuery) {
    const where: Prisma.attendanceRecordWhereInput = {};
    if (query.employeeId) where.employeeId = query.employeeId;
    if (query.startDate) where.date = { ...where.date as object, gte: new Date(query.startDate) };
    if (query.endDate) where.date = { ...where.date as object, lte: new Date(query.endDate) };

    const records = await prisma.attendanceRecord.findMany({
      where,
      include: { employee: { select: { id: true, firstName: true, lastName: true, department: { select: { name: true } } } } },
      orderBy: [{ employeeId: "asc" }, { date: "desc" }],
      skip: (query.page - 1) * query.limit,
      take: query.limit,
    });

    const total = await prisma.attendanceRecord.count({ where });
    return { records, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }
}
