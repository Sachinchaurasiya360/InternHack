import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import type { Request, Response, NextFunction } from "express";

// ── Mock Prisma before importing the module under test ──────────────
vi.mock("../database/db.js", () => ({
  prisma: {
    errorLog: {
      create: vi.fn().mockResolvedValue({}),
    },
  },
}));

// We need real Prisma error classes, so import them directly
import { Prisma } from "@prisma/client";
import { errorMiddleware } from "../middleware/error.middleware.js";
import { FileUploadError } from "../lib/errors.js";

// ── Helpers ─────────────────────────────────────────────────────────
function mockReq(overrides: Partial<Request> = {}): Request {
  return {
    method: "POST",
    originalUrl: "/api/test",
    url: "/api/test",
    ip: "127.0.0.1",
    headers: { "user-agent": "vitest" },
    body: {},
    ...overrides,
  } as unknown as Request;
}

function mockRes(): Response {
  const res = {
    statusCode: 200,
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
  } as unknown as Response;
  return res;
}

const noop: NextFunction = () => {};

describe("errorMiddleware", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ── Prisma known request errors ───────────────────────────────────
  describe("Prisma known request errors", () => {
    it("should return 409 for P2002 (unique constraint violation)", () => {
      const err = new Prisma.PrismaClientKnownRequestError("Unique constraint failed", {
        code: "P2002",
        clientVersion: "5.0.0",
      });
      const req = mockReq();
      const res = mockRes();

      errorMiddleware(err, req, res, noop);

      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({
        message: "A record with this value already exists",
      });
    });

    it("should return 404 for P2025 (record not found)", () => {
      const err = new Prisma.PrismaClientKnownRequestError("Record not found", {
        code: "P2025",
        clientVersion: "5.0.0",
      });
      const req = mockReq();
      const res = mockRes();

      errorMiddleware(err, req, res, noop);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "Resource not found" });
    });

    it("should return 400 for P2003 (foreign key constraint)", () => {
      const err = new Prisma.PrismaClientKnownRequestError("Foreign key constraint failed", {
        code: "P2003",
        clientVersion: "5.0.0",
      });
      const req = mockReq();
      const res = mockRes();

      errorMiddleware(err, req, res, noop);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Related resource not found" });
    });

    it("should return 500 for unknown Prisma error codes", () => {
      const err = new Prisma.PrismaClientKnownRequestError("Unknown error", {
        code: "P9999",
        clientVersion: "5.0.0",
      });
      const req = mockReq();
      const res = mockRes();

      errorMiddleware(err, req, res, noop);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Database error" });
    });
  });

  // ── Prisma validation errors ──────────────────────────────────────
  describe("Prisma validation errors", () => {
    it("should return 400 for PrismaClientValidationError", () => {
      const err = new Prisma.PrismaClientValidationError("Validation failed", {
        clientVersion: "5.0.0",
      });
      const req = mockReq();
      const res = mockRes();

      errorMiddleware(err, req, res, noop);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Invalid data provided" });
    });
  });

  // ── File upload errors ───────────────────────────────────
  describe("File upload errors", () => {
    it.each([
      "File type not allowed",
      "Only PDF and Word documents are allowed",
      "Only JPEG, PNG, and WebP images are allowed",
    ])('should return 400 for "%s"', (message) => {
      const err = new FileUploadError(message);
      const req = mockReq();
      const res = mockRes();

      errorMiddleware(err, req, res, noop);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message });
    });
  });

  // ── Business-logic client errors ──────────────────────────────────
  describe("business-logic client errors", () => {
    it.each([
      ["Email already registered", 409],
      ["Invalid email or password", 401],
      ["Account is deactivated", 403],
      ["Not authorized", 403],
      ["User not found", 404],
      ["Job not found", 404],
      ["Application not found", 404],
      ["Company not found", 404],
      ["Already applied", 409],
      ["Invalid Google token", 401],
      ["Topic not found", 404],
    ] as const)('should return %i for "%s"', (message, expectedStatus) => {
      const err = new Error(message);
      const req = mockReq();
      const res = mockRes();

      errorMiddleware(err, req, res, noop);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({ message });
    });
  });

  // ── Unknown / unhandled errors ────────────────────────────────────
  describe("unknown errors", () => {
    it("should return 500 with generic message in production", () => {
      const originalEnv = process.env["NODE_ENV"];
      try {
        process.env["NODE_ENV"] = "production";

        const err = new Error("something secret broke");
        const req = mockReq();
        const res = mockRes();

        errorMiddleware(err, req, res, noop);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Internal Server Error" });
      } finally {
        process.env["NODE_ENV"] = originalEnv;
      }
    });

    it("should return 500 with actual message in development", () => {
      const originalEnv = process.env["NODE_ENV"];
      try {
        process.env["NODE_ENV"] = "development";

        const err = new Error("detailed dev error");
        const req = mockReq();
        const res = mockRes();

        errorMiddleware(err, req, res, noop);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "detailed dev error" });
      } finally {
        process.env["NODE_ENV"] = originalEnv;
      }
    });
  });

  // ── Sensitive data sanitization ───────────────────────────────────
  // DB logging only happens in production, so these run with NODE_ENV set.
  describe("sensitive data sanitization", () => {
    let originalEnv: string | undefined;
    beforeEach(() => {
      originalEnv = process.env["NODE_ENV"];
      process.env["NODE_ENV"] = "production";
    });
    afterEach(() => {
      process.env["NODE_ENV"] = originalEnv;
    });

    it("should redact sensitive fields in request body before logging", async () => {
      const { prisma } = await import("../database/db.js");
      const err = new Error("User not found");
      const req = mockReq({
        body: {
          email: "user@test.com",
          password: "secret123",
          token: "jwt-token",
          cvv: "123",
          name: "Test User",
        },
      });
      const res = mockRes();

      errorMiddleware(err, req, res, noop);

      // Give the async create a tick to resolve
      await new Promise((r) => setTimeout(r, 10));

      expect(prisma.errorLog.create).toHaveBeenCalled();
      const callArg = (prisma.errorLog.create as ReturnType<typeof vi.fn>).mock.calls[0]?.[0];
      const body = callArg?.data?.requestBody;
      expect(body).toEqual({
        email: "user@test.com",
        password: "[REDACTED]",
        token: "[REDACTED]",
        cvv: "[REDACTED]",
        name: "Test User",
      });
    });

    it("should redact deeply nested sensitive fields in request body before logging", async () => {
      const { prisma } = await import("../database/db.js");
      const err = new Error("User not found");
      const req = mockReq({
        body: {
          email: "user@test.com",
          data: {
            profile: {
              password: "secret123",
              cvv: "123",
            }
          },
          items: [{ token: "jwt-token" }],
        },
      });
      const res = mockRes();

      errorMiddleware(err, req, res, noop);

      // Give the async create a tick to resolve
      await new Promise((r) => setTimeout(r, 10));

      expect(prisma.errorLog.create).toHaveBeenCalled();
      const callArg = (prisma.errorLog.create as ReturnType<typeof vi.fn>).mock.calls[0]?.[0];
      const body = callArg?.data?.requestBody;
      expect(body).toEqual({
        email: "user@test.com",
        data: {
          profile: {
            password: "[REDACTED]",
            cvv: "[REDACTED]",
          }
        },
        items: [{ token: "[REDACTED]" }],
      });
    });
  });

  // ── Environment-gated logging ─────────────────────────────────────
  describe("environment-gated logging", () => {
    it("should NOT write to the error log DB outside production", async () => {
      const originalEnv = process.env["NODE_ENV"];
      try {
        process.env["NODE_ENV"] = "development";
        const { prisma } = await import("../database/db.js");
        (prisma.errorLog.create as ReturnType<typeof vi.fn>).mockClear();

        errorMiddleware(new Error("something broke"), mockReq(), mockRes(), noop);
        await new Promise((r) => setTimeout(r, 10));

        expect(prisma.errorLog.create).not.toHaveBeenCalled();
      } finally {
        process.env["NODE_ENV"] = originalEnv;
      }
    });
  });
});
