import { describe, it, expect, vi } from "vitest";
import type { Request, Response, NextFunction } from "express";
import type { UserRole } from "@prisma/client";
import { requireRole } from "./role.middleware.js";

// ── Helpers ─────────────────────────────────────────────────────────
function mockReq(user?: { id: number; email: string; role: UserRole }): Request {
  return { user } as unknown as Request;
}

function mockRes(): Response {
  const res = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
  } as unknown as Response;
  return res;
}

describe("requireRole middleware", () => {
  it("should return 401 if no user is attached to request", () => {
    const middleware = requireRole("ADMIN");
    const req = mockReq(); // no user
    const res = mockRes();
    const next = vi.fn();

    middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: "Authentication required" });
    expect(next).not.toHaveBeenCalled();
  });

  it("should return 403 if user role is not in allowed list", () => {
    const middleware = requireRole("ADMIN");
    const req = mockReq({ id: 1, email: "s@t.com", role: "STUDENT" });
    const res = mockRes();
    const next = vi.fn();

    middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: "Insufficient permissions" });
    expect(next).not.toHaveBeenCalled();
  });

  it("should call next() if user role matches a single allowed role", () => {
    const middleware = requireRole("STUDENT");
    const req = mockReq({ id: 1, email: "s@t.com", role: "STUDENT" });
    const res = mockRes();
    const next = vi.fn();

    middleware(req, res, next);

    expect(next).toHaveBeenCalledOnce();
    expect(res.status).not.toHaveBeenCalled();
  });

  it("should call next() if user role matches one of multiple allowed roles", () => {
    const middleware = requireRole("STUDENT", "RECRUITER");
    const req = mockReq({ id: 2, email: "r@t.com", role: "RECRUITER" });
    const res = mockRes();
    const next = vi.fn();

    middleware(req, res, next);

    expect(next).toHaveBeenCalledOnce();
  });

  it("should return 403 when user role is not in a multi-role list", () => {
    const middleware = requireRole("STUDENT", "RECRUITER");
    const req = mockReq({ id: 3, email: "a@t.com", role: "ADMIN" });
    const res = mockRes();
    const next = vi.fn();

    middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: "Insufficient permissions" });
    expect(next).not.toHaveBeenCalled();
  });
});
