import type { Request, Response, NextFunction } from "express";

export function errorMiddleware(err: Error, _req: Request, res: Response, _next: NextFunction): void {
  console.error("Unhandled error:", err.message);

  if (err.message === "File type not allowed") {
    res.status(400).json({ message: err.message });
    return;
  }

  res.status(500).json({ message: "Internal Server Error" });
}
