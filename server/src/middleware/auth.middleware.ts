import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.utils.js";
import { prisma } from "../database/db.js";

// ── In-memory tokenVersion cache (2-minute TTL) ──
const TOKEN_VERSION_TTL_MS = 2 * 60 * 1000;
const versionCache = new Map<number, { version: number; expiresAt: number }>();

function getCachedVersion(userId: number): number | null {
  const entry = versionCache.get(userId);
  if (!entry || Date.now() > entry.expiresAt) {
    versionCache.delete(userId);
    return null;
  }
  return entry.version;
}

function setCachedVersion(userId: number, version: number): void {
  versionCache.set(userId, { version, expiresAt: Date.now() + TOKEN_VERSION_TTL_MS });
}

/** Invalidate cache for a user (call on login to force immediate propagation) */
export function invalidateVersionCache(userId: number): void {
  versionCache.delete(userId);
}

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

export async function optionalAuthMiddleware(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const token = extractToken(req);
  if (token) {
    try {
      const decoded = verifyToken(token);

      // Verify tokenVersion (cached) — silently discard revoked tokens
      let dbVersion = getCachedVersion(decoded.id);
      if (dbVersion === null) {
        const user = await prisma.user.findUnique({
          where: { id: decoded.id },
          select: { tokenVersion: true },
        });
        if (user) {
          dbVersion = user.tokenVersion;
          setCachedVersion(decoded.id, dbVersion);
        }
      }

      if (dbVersion !== null && decoded.tokenVersion === dbVersion) {
        req.user = { id: decoded.id, email: decoded.email, role: decoded.role };
      }
    } catch {
      // Token invalid, proceed without user
    }
  }
  next();
}

export async function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  const token = extractToken(req);

  if (!token) {
    res.status(401).json({ message: "Authentication required" });
    return;
  }

  let decoded;
  try {
    decoded = verifyToken(token);
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
    return;
  }

  // Single-device enforcement: check tokenVersion (cached, 2-min TTL)
  let dbVersion = getCachedVersion(decoded.id);

  if (dbVersion === null) {
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { tokenVersion: true },
    });

    if (!user) {
      res.status(401).json({ message: "Session expired. Please log in again." });
      return;
    }

    dbVersion = user.tokenVersion;
    setCachedVersion(decoded.id, dbVersion);
  }

  if (decoded.tokenVersion !== dbVersion) {
    res.status(401).json({ message: "Session expired. Please log in again." });
    return;
  }

  req.user = { id: decoded.id, email: decoded.email, role: decoded.role };
  next();
}
