import type { Request, Response } from "express";
import { describe, expect, it, vi } from "vitest";
import { LeaveController } from "../leave.controller.js";
import type { LeaveService } from "../leave.service.js";

function mockRes(): Response {
  return {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
  } as unknown as Response;
}

describe("LeaveController self-service identity binding", () => {
  it("creates leave requests for the authenticated user and ignores query employeeId", async () => {
    const service = {
      createRequest: vi.fn().mockResolvedValue({ id: 1 }),
    } as unknown as LeaveService;
    const controller = new LeaveController(service);
    const req = {
      user: { id: 42, email: "student@example.com", role: "STUDENT" },
      query: { employeeId: "777" },
      body: {
        leaveType: "CASUAL",
        startDate: "2026-06-08T00:00:00.000Z",
        endDate: "2026-06-09T00:00:00.000Z",
        totalDays: 2,
        reason: "Family event",
      },
    } as unknown as Request;
    const res = mockRes();

    await controller.createRequest(req, res);

    expect(service.createRequest).toHaveBeenCalledWith(42, req.body);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  it("lists only the authenticated user's leave requests and drops query employeeId", async () => {
    const service = {
      getMyRequests: vi.fn().mockResolvedValue({ requests: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } }),
    } as unknown as LeaveService;
    const controller = new LeaveController(service);
    const req = {
      user: { id: 42, email: "student@example.com", role: "STUDENT" },
      query: { employeeId: "777", status: "PENDING" },
    } as unknown as Request;
    const res = mockRes();

    await controller.getMyRequests(req, res);

    expect(service.getMyRequests).toHaveBeenCalledWith(42, {
      page: 1,
      limit: 20,
      status: "PENDING",
    });
  });

  it("reads leave balance for the authenticated user and ignores query employeeId", async () => {
    const service = {
      getBalance: vi.fn().mockResolvedValue([]),
    } as unknown as LeaveService;
    const controller = new LeaveController(service);
    const req = {
      user: { id: 42, email: "student@example.com", role: "STUDENT" },
      query: { employeeId: "777", year: "2026" },
    } as unknown as Request;
    const res = mockRes();

    await controller.getBalance(req, res);

    expect(service.getBalance).toHaveBeenCalledWith(42, 2026);
  });
});
