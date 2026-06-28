import { prisma } from "../../database/db.js";

export class HRAnalyticsService {
  async getDashboard() {
    const [
      totalEmployees,
      activeEmployees,
      departmentCount,
      pendingLeaves,
      todayAttendance,
      pendingReimbursements,
      activeWorkflows,
    ] = await Promise.all([
      prisma.employee.count(),
      prisma.employee.count({ where: { status: "ACTIVE" } }),
      prisma.department.count(),
      prisma.leaveRequest.count({ where: { status: "PENDING" } }),
      prisma.attendanceRecord.count({ where: { date: { gte: new Date(new Date().setHours(0, 0, 0, 0)) } } }),
      prisma.reimbursement.count({ where: { status: "SUBMITTED" } }),
      prisma.workflowInstance.count({ where: { status: "ACTIVE" } }),
    ]);

    return {
      totalEmployees,
      activeEmployees,
      inactiveEmployees: totalEmployees - activeEmployees,
      departmentCount,
      pendingLeaves,
      todayAttendance,
      pendingReimbursements,
      activeWorkflows,
    };
  }

  async getHeadcountByDepartment() {
    const departments = await prisma.department.findMany({
      select: {
        id: true,
        name: true,
        _count: { select: { employees: true } },
      },
      orderBy: { name: "asc" },
    });

    return departments.map((d) => ({
      departmentId: d.id,
      department: d.name,
      headcount: d._count.employees,
    }));
  }

  async getHeadcountByType() {
    const employees = await prisma.employee.groupBy({
      by: ["employmentType"],
      _count: true,
      where: { status: "ACTIVE" },
    });

    return employees.map((e) => ({
      type: e.employmentType,
      count: e._count,
    }));
  }

  async getAttritionRate(months: number = 12) {
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - months);

    const [terminated, avgHeadcount] = await Promise.all([
      prisma.employee.count({
        where: {
          status: { in: ["EXITED", "ALUMNI"] },
          updatedAt: { gte: cutoff },
        },
      }),
      prisma.employee.count(),
    ]);

    const rate = avgHeadcount > 0 ? (terminated / avgHeadcount) * 100 : 0;
    return { terminated, avgHeadcount, attritionRate: Math.round(rate * 100) / 100, periodMonths: months };
  }

  async getLeaveAnalytics(year: number) {
    const leaveRequests = await prisma.leaveRequest.findMany({
      where: {
        startDate: { gte: new Date(`${year}-01-01`) },
        endDate: { lte: new Date(`${year}-12-31`) },
      },
      select: { leaveType: true, status: true, totalDays: true },
    });

    const byType: Record<string, { total: number; approved: number; rejected: number; pending: number; totalDays: number }> = {};
    for (const lr of leaveRequests) {
      if (!byType[lr.leaveType]) byType[lr.leaveType] = { total: 0, approved: 0, rejected: 0, pending: 0, totalDays: 0 };
      const entry = byType[lr.leaveType]!;
      entry.total++;
      if (lr.status === "APPROVED") { entry.approved++; entry.totalDays += lr.totalDays; }
      else if (lr.status === "REJECTED") entry.rejected++;
      else if (lr.status === "PENDING") entry.pending++;
    }

    return { year, breakdown: byType, totalRequests: leaveRequests.length };
  }

  async getAttendanceAnalytics(month: number, year: number) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    const records = await prisma.attendanceRecord.findMany({
      where: { date: { gte: startDate, lte: endDate } },
      select: { status: true, isLate: true },
    });

    const summary = {
      total: records.length,
      present: records.filter((r) => r.status === "PRESENT").length,
      absent: records.filter((r) => r.status === "ABSENT").length,
      halfDay: records.filter((r) => r.status === "HALF_DAY").length,
      onLeave: records.filter((r) => r.status === "ON_LEAVE").length,
      lateArrivals: records.filter((r) => r.isLate).length,
    };

    return { month, year, ...summary };
  }

  async getPayrollSummary(month: number, year: number) {
    const records = await prisma.payrollRecord.findMany({
      where: { month, year },
      select: { grossEarnings: true, totalDeductions: true, netPay: true, status: true },
    });

    const totals = records.reduce(
      (acc, r) => ({
        grossEarnings: acc.grossEarnings + r.grossEarnings,
        totalDeductions: acc.totalDeductions + r.totalDeductions,
        netPay: acc.netPay + r.netPay,
      }),
      { grossEarnings: 0, totalDeductions: 0, netPay: 0 },
    );

    const byStatus: Record<string, number> = {};
    for (const r of records) {
      byStatus[r.status] = (byStatus[r.status] ?? 0) + 1;
    }

    return { month, year, employeeCount: records.length, ...totals, byStatus };
  }

  async getReimbursementSummary() {
    const records = await prisma.reimbursement.groupBy({
      by: ["status"],
      _count: true,
      _sum: { amount: true },
    });

    return records.map((r) => ({
      status: r.status,
      count: r._count,
      totalAmount: r._sum.amount ?? 0,
    }));
  }
}
