import type { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { prisma } from "../database/db.js";
import { sendEmail } from "../utils/email.utils.js";
import { FileUploadError } from "../lib/errors.js";

const ADMIN_ALERT_EMAIL = "mrsachinchaurasiya@gmail.com";

const SENSITIVE_KEYS = new Set([
  "password", "newPassword", "confirmPassword", "currentPassword",
  "token", "otp", "secret", "creditCard", "cardNumber", "cvv",
]);

function sanitizeBody(body: unknown): Prisma.InputJsonValue | null {
  if (body === undefined) return null;
  if (body === null || typeof body !== "object") return body as Prisma.InputJsonValue | null;
  if (Array.isArray(body)) return body.map(sanitizeBody) as Prisma.InputJsonValue;
  
  const sanitized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(body as Record<string, unknown>)) {
    if (SENSITIVE_KEYS.has(key)) {
      sanitized[key] = "[REDACTED]";
    } else if (typeof value === "object" && value !== null) {
      sanitized[key] = sanitizeBody(value);
    } else {
      sanitized[key] = value;
    }
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
  const path = req.originalUrl || req.url;

  prisma.errorLog.create({
    data: {
      method: req.method,
      path,
      statusCode,
      message,
      rawError: rawErr ? formatRawError(rawErr) : null,
      userId: (req as unknown as { user?: { id: number } }).user?.id ?? null,
      ipAddress: (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.ip || null,
      userAgent: req.headers["user-agent"] || null,
      requestBody: sanitizeBody(req.body) ?? Prisma.DbNull,
    },
    }).catch((dbErr) => {
    console.error("[ErrorLog] Failed to write:", dbErr);
  });

  if (statusCode >= 500) {
    const rawDetails = rawErr ? formatRawError(rawErr) : "No stack trace";
    sendEmail({
      to: ADMIN_ALERT_EMAIL,
      subject: `[InternHack] Server Error ${statusCode} - ${req.method} ${path}`,
      html: `
        <h2 style="color:#dc2626">Server Error Alert</h2>
        <table style="border-collapse:collapse;width:100%;font-family:monospace;font-size:14px">
          <tr><td style="padding:6px 12px;font-weight:bold;background:#f3f4f6">Status</td><td style="padding:6px 12px">${statusCode}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold;background:#f3f4f6">Method</td><td style="padding:6px 12px">${req.method}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold;background:#f3f4f6">Path</td><td style="padding:6px 12px">${path}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold;background:#f3f4f6">Message</td><td style="padding:6px 12px">${message}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold;background:#f3f4f6">Time</td><td style="padding:6px 12px">${new Date().toISOString()}</td></tr>
        </table>
        <pre style="margin-top:16px;padding:12px;background:#1f2937;color:#f9fafb;border-radius:6px;overflow:auto;font-size:12px">${rawDetails}</pre>
      `,
      text: `Server Error ${statusCode}\n${req.method} ${path}\n${message}\n\n${rawDetails}`,
    }).catch((e) => console.error("[ErrorLog] Admin alert email failed:", e));
  }
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

  // File upload errors
  if (err instanceof FileUploadError) {
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
    "Upgrade to Premium to book mock interviews.": 403,
    "Monthly mock interview limit reached.": 429,
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
