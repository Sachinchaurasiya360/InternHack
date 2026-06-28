import type { Request, Response } from "express";
import { describe, expect, it, vi } from "vitest";
import { PayrollController } from "../module/payroll/payroll.controller.js";
import type { PayrollService } from "../module/payroll/payroll.service.js";

function mockRes(): Response {
  return {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
  } as unknown as Response;
}

describe("PayrollController self-service identity binding", () => {
  it("lists payslips for the authenticated user and ignores query employeeId", async () => {
    const service = {
      getMyPayslips: vi.fn().mockResolvedValue([]),
    } as unknown as PayrollService;
    const controller = new PayrollController(service);
    const req = {
      user: { id: 42, email: "student@example.com", role: "STUDENT" },
      query: { employeeId: "777" },
    } as unknown as Request;
    const res = mockRes();

    await controller.getMyPayslips(req, res);

    expect(service.getMyPayslips).toHaveBeenCalledWith(42);
    expect(res.json).toHaveBeenCalledWith({ payslips: [] });
  });
});
