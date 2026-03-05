import type { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";

export function errorMiddleware(err: Error, _req: Request, res: Response, _next: NextFunction): void {
  // Prisma known request errors → proper HTTP status codes
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        res.status(409).json({ message: "A record with this value already exists" });
        return;
      case "P2025":
        res.status(404).json({ message: "Resource not found" });
        return;
      case "P2003":
        res.status(400).json({ message: "Related resource not found" });
        return;
      default:
        console.error("Prisma error:", err.code, err.message);
        res.status(500).json({ message: "Database error" });
        return;
    }
  }

  // Prisma validation errors
  if (err instanceof Prisma.PrismaClientValidationError) {
    res.status(400).json({ message: "Invalid data provided" });
    return;
  }

  // Multer / file upload errors
  if (err.message === "File type not allowed" ||
      err.message === "Only PDF and Word documents are allowed" ||
      err.message === "Only JPEG, PNG, and WebP images are allowed") {
    res.status(400).json({ message: err.message });
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
  };

  const status = clientErrors[err.message];
  if (status) {
    res.status(status).json({ message: err.message });
    return;
  }

  // Unknown errors — don't leak details in production
  const isDev = process.env["NODE_ENV"] === "development";
  console.error("Unhandled error:", isDev ? err.stack : err.message);
  res.status(500).json({ message: isDev ? err.message : "Internal Server Error" });
}
