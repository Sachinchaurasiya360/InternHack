import { prisma } from "../../database/db.js";
import { Prisma } from "@prisma/client";
import type { EmploymentStatus, EmploymentType } from "@prisma/client";

interface CreateEmployeeData {
  userId?: number | null | undefined;
  employeeCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | undefined;
  dateOfBirth?: string | undefined;
  gender?: string | undefined;
  bloodGroup?: string | undefined;
  departmentId: number;
  designation: string;
  employmentType?: EmploymentType | undefined;
  joiningDate: string;
  reportingManagerId?: number | null | undefined;
  address?: Record<string, unknown> | undefined;
  emergencyContact?: Record<string, unknown> | undefined;
  bankDetails?: Record<string, unknown> | undefined;
  currentSalary?: Record<string, unknown> | undefined;
}

interface EmployeeQuery {
  page: number;
  limit: number;
  search?: string | undefined;
  departmentId?: number | undefined;
  status?: EmploymentStatus | undefined;
  employmentType?: EmploymentType | undefined;
}

export class EmployeeService {
  async create(data: CreateEmployeeData) {
    const dept = await prisma.department.findUnique({ where: { id: data.departmentId } });
    if (!dept) throw new Error("Department not found");

    return prisma.employee.create({
      data: {
        userId: data.userId ?? null,
        employeeCode: data.employeeCode,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone ?? null,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
        gender: data.gender ?? null,
        bloodGroup: data.bloodGroup ?? null,
        departmentId: data.departmentId,
        designation: data.designation,
        employmentType: data.employmentType ?? "FULL_TIME",
        joiningDate: new Date(data.joiningDate),
        reportingManagerId: data.reportingManagerId ?? null,
        address: data.address ? (data.address as Prisma.InputJsonValue) : Prisma.DbNull,
        emergencyContact: data.emergencyContact ? (data.emergencyContact as Prisma.InputJsonValue) : Prisma.DbNull,
        bankDetails: data.bankDetails ? (data.bankDetails as Prisma.InputJsonValue) : Prisma.DbNull,
        currentSalary: data.currentSalary ? (data.currentSalary as Prisma.InputJsonValue) : Prisma.DbNull,
        documents: [],
      },
      include: { department: { select: { id: true, name: true } } },
    });
  }

  async getAll(query: EmployeeQuery) {
    const { page, limit, search, departmentId, status, employmentType } = query;
    const where: Prisma.employeeWhereInput = {};

    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { employeeCode: { contains: search, mode: "insensitive" } },
      ];
    }
    if (departmentId) where.departmentId = departmentId;
    if (status) where.status = status;
    if (employmentType) where.employmentType = employmentType;

    const [employees, total] = await Promise.all([
      prisma.employee.findMany({
        where,
        include: {
          department: { select: { id: true, name: true } },
          reportingManager: { select: { id: true, firstName: true, lastName: true } },
        },
        // Don't return sensitive fields in list
        omit: { bankDetails: true, currentSalary: true },
        orderBy: { firstName: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.employee.count({ where }),
    ]);

    return {
      employees,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async getById(id: number, includeSensitive = false) {
    const employee = await prisma.employee.findUnique({
      where: { id },
      include: {
        department: { select: { id: true, name: true } },
        reportingManager: { select: { id: true, firstName: true, lastName: true, designation: true } },
        directReports: {
          select: { id: true, firstName: true, lastName: true, designation: true, profilePic: true },
          where: { status: { not: "EXITED" } },
        },
      },
      ...(includeSensitive ? {} : { omit: { bankDetails: true as const } }),
    });
    if (!employee) throw new Error("Employee not found");
    return employee;
  }

  async update(id: number, data: { userId?: number | null | undefined; employeeCode?: string | undefined; firstName?: string | undefined; lastName?: string | undefined; email?: string | undefined; phone?: string | undefined; dateOfBirth?: string | undefined; gender?: string | undefined; bloodGroup?: string | undefined; departmentId?: number | undefined; designation?: string | undefined; employmentType?: EmploymentType | undefined; joiningDate?: string | undefined; reportingManagerId?: number | null | undefined; address?: Record<string, unknown> | undefined; emergencyContact?: Record<string, unknown> | undefined; bankDetails?: Record<string, unknown> | undefined; currentSalary?: Record<string, unknown> | undefined }) {
    const employee = await prisma.employee.findUnique({ where: { id } });
    if (!employee) throw new Error("Employee not found");

    const updateData: Record<string, unknown> = { ...data };
    if (data.joiningDate) updateData["joiningDate"] = new Date(data.joiningDate);
    if (data.dateOfBirth) updateData["dateOfBirth"] = new Date(data.dateOfBirth);

    return prisma.employee.update({
      where: { id },
      data: updateData,
      include: { department: { select: { id: true, name: true } } },
    });
  }

  async updateStatus(id: number, status: EmploymentStatus, extra?: { exitDate?: string | undefined; confirmationDate?: string | undefined } | undefined) {
    const employee = await prisma.employee.findUnique({ where: { id } });
    if (!employee) throw new Error("Employee not found");

    const updateData: Prisma.employeeUpdateInput = { status };
    if (extra?.exitDate) updateData.exitDate = new Date(extra.exitDate);
    if (extra?.confirmationDate) updateData.confirmationDate = new Date(extra.confirmationDate);

    return prisma.employee.update({
      where: { id },
      data: updateData,
      include: { department: { select: { id: true, name: true } } },
    });
  }

  async getTimeline(id: number) {
    const employee = await prisma.employee.findUnique({ where: { id } });
    if (!employee) throw new Error("Employee not found");

    // Build timeline from employee data
    const events: { date: string; event: string; details?: string }[] = [];

    events.push({ date: employee.joiningDate.toISOString(), event: "Joined", details: `Joined as ${employee.designation}` });
    if (employee.confirmationDate) {
      events.push({ date: employee.confirmationDate.toISOString(), event: "Confirmed", details: "Probation completed" });
    }
    if (employee.exitDate) {
      events.push({ date: employee.exitDate.toISOString(), event: "Exited" });
    }

    // Add performance reviews
    const reviews = await prisma.performanceReview.findMany({
      where: { employeeId: id, status: "COMPLETED" },
      select: { completedAt: true, cycle: true, period: true, finalRating: true },
      orderBy: { completedAt: "desc" },
    });
    for (const review of reviews) {
      if (review.completedAt) {
        events.push({
          date: review.completedAt.toISOString(),
          event: "Performance Review",
          details: `${review.cycle} - ${review.period}: Rating ${review.finalRating ?? "N/A"}`,
        });
      }
    }

    return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
}
