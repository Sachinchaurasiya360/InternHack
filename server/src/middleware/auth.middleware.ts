import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.utils.js";

/** Extract token from httpOnly cookie first, then Authorization header as fallback */
function extractToken(req: Request): string | null {
  // 1. httpOnly cookie (primary)
  const cookieToken = req.cookies?.["token"] as string | undefined;
  if (cookieToken) return cookieToken;

  // 2. Authorization: Bearer <token> (fallback for API clients)
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.split(" ")[1] ?? null;
  }

  return null;
}

export function optionalAuthMiddleware(req: Request, _res: Response, next: NextFunction): void {
  const token = extractToken(req);
  if (token) {
    try {
      const decoded = verifyToken(token);
      req.user = { id: decoded.id, email: decoded.email, role: decoded.role };
    } catch {
      // Token invalid, proceed without user
    }
  }
  next();
}

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const token = extractToken(req);

  if (!token) {
    res.status(401).json({ message: "Authentication required" });
    return;
  }

  try {
    const decoded = verifyToken(token);
    req.user = { id: decoded.id, email: decoded.email, role: decoded.role };
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
