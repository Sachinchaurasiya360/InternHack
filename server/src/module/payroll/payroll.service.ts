import { prisma } from "../../database/db.js";
import type { PayrollStatus, Prisma } from "@prisma/client";

interface PayrollQuery {
  page: number;
  limit: number;
  month?: number | undefined;
  year?: number | undefined;
  status?: PayrollStatus | undefined;
  employeeId?: number | undefined;
}

export class PayrollService {
  async runPayroll(month: number, year: number, employeeIds?: number[] | undefined) {
    const where: Prisma.employeeWhereInput = { status: "ACTIVE" };
    if (employeeIds?.length) where.id = { in: employeeIds };

    const employees = await prisma.employee.findMany({
      where,
      select: { id: true, currentSalary: true, employmentType: true },
    });

    if (employees.length === 0) throw new Error("No active employees found");

    // Check for existing records
    const existing = await prisma.payrollRecord.findMany({
      where: { month, year, employeeId: { in: employees.map((e) => e.id) } },
      select: { employeeId: true },
    });
    const existingIds = new Set(existing.map((e) => e.employeeId));
    const newEmployees = employees.filter((e) => !existingIds.has(e.id));

    if (newEmployees.length === 0) throw new Error("Payroll already exists for all employees this month");

    const records = newEmployees.map((emp) => {
      const salary = (emp.currentSalary as Record<string, number>) ?? {};
      const basic = salary.basic ?? 0;
      const hra = salary.hra ?? 0;
      const da = salary.da ?? 0;
      const special = salary.special ?? 0;
      const grossEarnings = basic + hra + da + special;

      // Standard deductions
      const pf = Math.round(basic * 0.12);
      const esi = grossEarnings <= 21000 ? Math.round(grossEarnings * 0.0075) : 0;
      const profTax = grossEarnings > 15000 ? 200 : 0;
      const tds = 0; // simplified, real TDS needs annual calculation
      const totalDeductions = pf + esi + profTax + tds;
      const netPay = grossEarnings - totalDeductions;

      return {
        employeeId: emp.id,
        month,
        year,
        basicSalary: basic,
        hra,
        da,
        specialAllow: special,
        bonus: 0,
        otherEarnings: 0,
        grossEarnings,
        pf,
        esi,
        profTax,
        tds,
        loanEmi: 0,
        otherDeduct: 0,
        totalDeductions,
        netPay,
        status: "DRAFT" as PayrollStatus,
      };
    });

    await prisma.payrollRecord.createMany({ data: records });
    return { created: records.length, month, year };
  }

  async getRecords(query: PayrollQuery) {
    const where: Prisma.payrollRecordWhereInput = {};
    if (query.month) where.month = query.month;
    if (query.year) where.year = query.year;
    if (query.status) where.status = query.status;
    if (query.employeeId) where.employeeId = query.employeeId;

    const [records, total] = await Promise.all([
      prisma.payrollRecord.findMany({
        where,
        include: { employee: { select: { id: true, firstName: true, lastName: true, employeeCode: true, department: { select: { name: true } } } } },
        orderBy: [{ year: "desc" }, { month: "desc" }],
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.payrollRecord.count({ where }),
    ]);

    return { records, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async getById(id: number) {
    const record = await prisma.payrollRecord.findUnique({
      where: { id },
      include: { employee: { select: { id: true, firstName: true, lastName: true, employeeCode: true, designation: true, department: { select: { name: true } } } } },
    });
    if (!record) throw new Error("Payroll record not found");
    return record;
  }

  async approveRecords(ids: number[]) {
    return prisma.payrollRecord.updateMany({
      where: { id: { in: ids }, status: "DRAFT" },
      data: { status: "APPROVED" },
    });
  }

  async markAsPaid(ids: number[]) {
    return prisma.payrollRecord.updateMany({
      where: { id: { in: ids }, status: "APPROVED" },
      data: { status: "PAID", paidAt: new Date() },
    });
  }

  async getMyPayslips(employeeId: number) {
    return prisma.payrollRecord.findMany({
      where: { employeeId, status: { in: ["APPROVED", "PAID"] } },
      orderBy: [{ year: "desc" }, { month: "desc" }],
    });
  }

  // ── Contractor Payments ──

  async createContractorPayment(data: { employeeId: number; invoiceNumber?: string | undefined; amount: number; currency?: string | undefined; description: string; periodStart: string; periodEnd: string; invoiceUrl?: string | undefined }) {
    return prisma.contractorPayment.create({
      data: {
        employeeId: data.employeeId,
        invoiceNumber: data.invoiceNumber ?? null,
        amount: data.amount,
        currency: data.currency ?? "INR",
        description: data.description,
        periodStart: new Date(data.periodStart),
        periodEnd: new Date(data.periodEnd),
        invoiceUrl: data.invoiceUrl ?? null,
      },
      include: { employee: { select: { id: true, firstName: true, lastName: true, employeeCode: true } } },
    });
  }

  async getContractorPayments(query: PayrollQuery) {
    const where: Prisma.contractorPaymentWhereInput = {};
    if (query.status) where.status = query.status;
    if (query.employeeId) where.employeeId = query.employeeId;

    const [payments, total] = await Promise.all([
      prisma.contractorPayment.findMany({
        where,
        include: { employee: { select: { id: true, firstName: true, lastName: true, employeeCode: true } } },
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.contractorPayment.count({ where }),
    ]);

    return { payments, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async approveContractorPayment(id: number) {
    const payment = await prisma.contractorPayment.findUnique({ where: { id } });
    if (!payment) throw new Error("Payment not found");
    return prisma.contractorPayment.update({ where: { id }, data: { status: "APPROVED" } });
  }
}
