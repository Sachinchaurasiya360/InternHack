import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.utils.js";
import { prisma } from "../database/db.js";

// ── In-memory tokenVersion cache (60s TTL, 10 000-entry size cap) ──
// tokenVersion is now only bumped by explicit revocation (password reset, account
// delete, admin ban/delete) — not on every login — so a short TTL keeps those rare
// events propagating quickly without putting a DB read on every request.
const TOKEN_VERSION_TTL_MS = 60 * 1000;
const VERSION_CACHE_MAX_SIZE = 10_000;

// insertion-ordered Map: oldest entries are at the front (Map preserves insertion order)
const versionCache = new Map<number, { version: number; expiresAt: number }>();

// In-flight lookup registry: prevents cache stampede when concurrent requests
// all miss the cache for the same userId.
const inflightLookups = new Map<number, Promise<number | null>>();

// Background sweep: evict expired entries every 5 minutes so stale entries from
// deleted or logged-out users do not accumulate for the process lifetime.
const _versionCacheSweepTimer = setInterval(() => {
  const now = Date.now();
  for (const [uid, entry] of versionCache) {
    if (now > entry.expiresAt) {
      versionCache.delete(uid);
    }
  }
}, TOKEN_VERSION_TTL_MS).unref();

function getCachedVersion(userId: number): number | null {
  const entry = versionCache.get(userId);
  if (!entry || Date.now() > entry.expiresAt) {
    versionCache.delete(userId);
    return null;
  }
  return entry.version;
}

function setCachedVersion(userId: number, version: number): void {
  // LRU-style eviction: if the map is at capacity, remove the oldest entry
  // (the first key in insertion order) before inserting a new one.
  if (!versionCache.has(userId) && versionCache.size >= VERSION_CACHE_MAX_SIZE) {
    const oldestKey = versionCache.keys().next().value;
    if (oldestKey !== undefined) {
      versionCache.delete(oldestKey);
    }
  }
  versionCache.set(userId, { version, expiresAt: Date.now() + TOKEN_VERSION_TTL_MS });
}

/** Look up tokenVersion — from cache if fresh, else from DB with stampede protection. */
async function fetchTokenVersion(userId: number): Promise<number | null> {
  const cached = getCachedVersion(userId);
  if (cached !== null) return cached;

  const existing = inflightLookups.get(userId);
  if (existing) return existing;

  const promise = prisma.user
    .findUnique({ where: { id: userId }, select: { tokenVersion: true } })
    .then((user) => {
      const version = user?.tokenVersion ?? null;
      if (version !== null) setCachedVersion(userId, version);
      return version;
    })
    .finally(() => {
      inflightLookups.delete(userId);
    });

  inflightLookups.set(userId, promise);
  return promise;
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

      const dbVersion = await fetchTokenVersion(decoded.id);
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

  // Forced-revocation check: tokenVersion (cached, with stampede protection)
  const dbVersion = await fetchTokenVersion(decoded.id);

  if (dbVersion === null) {
    res.status(401).json({ message: "Session expired. Please log in again." });
    return;
  }

  if (decoded.tokenVersion !== dbVersion) {
    res.status(401).json({ message: "Session expired. Please log in again." });
    return;
  }

  req.user = { id: decoded.id, email: decoded.email, role: decoded.role };
  next();
}
