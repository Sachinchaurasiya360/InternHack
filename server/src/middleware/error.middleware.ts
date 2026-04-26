import type { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { prisma } from "../database/db.js";

const SENSITIVE_KEYS = new Set([
  "password", "newPassword", "confirmPassword", "currentPassword",
  "token", "otp", "secret", "creditCard", "cardNumber", "cvv",
]);

function sanitizeBody(body: unknown): Prisma.InputJsonValue | null {
  if (!body || typeof body !== "object") return null;
  const sanitized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(body as Record<string, unknown>)) {
    sanitized[key] = SENSITIVE_KEYS.has(key) ? "[REDACTED]" : value;
  }
  return sanitized as Prisma.InputJsonValue;
}

function formatRawError(err: Error): string {
  const parts: string[] = [];
  parts.push(`${err.name}: ${err.message}`);

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    parts.push(`Code: ${err.code}`);
    if (err.meta) parts.push(`Meta: ${JSON.stringify(err.meta)}`);
  }

  if (err.stack) {
    const stackLines = err.stack.split("\n").slice(1, 6).map((l) => l.trim());
    parts.push(stackLines.join("\n"));
  }

  return parts.join("\n");
}

function logErrorToDb(req: Request, statusCode: number, message: string, rawErr?: Error): void {
  prisma.errorLog.create({
    data: {
      method: req.method,
      path: req.originalUrl || req.url,
      statusCode,
      message,
      rawError: rawErr ? formatRawError(rawErr) : null,
      userId: (req as unknown as { user?: { id: number } }).user?.id ?? null,
      ipAddress: (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.ip || null,
      userAgent: req.headers["user-agent"] || null,
      requestBody: sanitizeBody(req.body),
    },
  }).catch((dbErr) => {
    console.error("[ErrorLog] Failed to write:", dbErr);
  });
}

function respond(req: Request, res: Response, statusCode: number, message: string, rawErr?: Error): void {
  logErrorToDb(req, statusCode, message, rawErr);
  res.status(statusCode).json({ message });
}

export function errorMiddleware(err: Error, req: Request, res: Response, _next: NextFunction): void {
  // Prisma known request errors → proper HTTP status codes
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002": respond(req, res, 409, "A record with this value already exists", err); return;
      case "P2025": respond(req, res, 404, "Resource not found", err); return;
      case "P2003": respond(req, res, 400, "Related resource not found", err); return;
      default:
        console.error("Prisma error:", err.code, err.message);
        respond(req, res, 500, "Database error", err);
        return;
    }
  }

  // Prisma validation errors
  if (err instanceof Prisma.PrismaClientValidationError) {
    console.error("Prisma validation error:", err.message);
    respond(req, res, 400, "Invalid data provided", err);
    return;
  }

  // Multer / file upload errors
  if (err.message === "File type not allowed" ||
      err.message === "Only PDF and Word documents are allowed" ||
      err.message === "Only JPEG, PNG, and WebP images are allowed") {
    respond(req, res, 400, err.message, err);
    return;
  }

  // Known business logic errors (thrown from services)
  const clientErrors: Record<string, number> = {
    "Email already registered": 409,
    "Invalid email or password": 401,
    "Account is deactivated": 403,
    "Not authorized": 403,
    "User not found": 404,
    "Job not found": 404,
    "Career not found": 404,
    "Application not found": 404,
    "Company not found": 404,
    "College not found": 404,
    "Already applied": 409,
    "Already enrolled in this career path": 409,
    "Invalid Google token": 401,
    "Order not found": 404,
    "Payment already verified": 409,
    "Invalid payment signature": 400,
    "Topic not found": 404,
    "Problem not found": 404,
    "Question not found": 404,
    "Pattern not found": 404,
  };

  const status = clientErrors[err.message];
  if (status) {
    respond(req, res, status, err.message, err);
    return;
  }

  // Unknown errors - don't leak details in production
  const isDev = process.env["NODE_ENV"] === "development";
  console.error("Unhandled error:", isDev ? err.stack : err.message);
  respond(req, res, 500, isDev ? err.message : "Internal Server Error", err);
}
