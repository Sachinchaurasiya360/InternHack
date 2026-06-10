import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.utils.js";
import { prisma } from "../database/db.js";

type TokenVersionLookupResult = {
  tokenVersion: number;
} | null;

// ── In-memory tokenVersion cache (5-minute TTL, 10 000-entry size cap) ──
const TOKEN_VERSION_TTL_MS = 5 * 60 * 1000;
const VERSION_CACHE_MAX_SIZE = 10_000;

// insertion-ordered Map: oldest entries are at the front (Map preserves insertion order)
const versionCache = new Map<number, { version: number; expiresAt: number }>();

// Stores in-flight tokenVersion lookups by user ID.
const pendingVersionLookups = new Map<number, Promise<TokenVersionLookupResult>>();

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

/** Invalidate cache for a user (call on login to force immediate propagation) and pending in-flight lookup. */
export function invalidateVersionCache(userId: number): void {
  versionCache.delete(userId);
  pendingVersionLookups.delete(userId);
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

// Returns user's tokenVersion from cache or a shared in-flight DB query.
async function getTokenVersion(userId: number): Promise<number | null> {

  let dbVersion = getCachedVersion(userId);

  if (dbVersion !== null) {
    return dbVersion;
  }

  const pendingLookup = pendingVersionLookups.get(userId);

  // Reuse an existing in-flight lookup.
  if (pendingLookup !== undefined) {
    const user = await pendingLookup;
    return user ? user.tokenVersion : null;
  }

  const dbQuery: Promise<TokenVersionLookupResult> = prisma.user.findUnique({
    where: { id: userId },
    select: { tokenVersion: true },
  });

  try {
    // Register the database query before awaiting it
    // so that concurrent requests can reuse it.
    pendingVersionLookups.set(userId, dbQuery);

    const user = await dbQuery;

    //Only cache if the query is still active for this user.
    if (user && pendingVersionLookups.get(userId) === dbQuery) {
      setCachedVersion(userId, user.tokenVersion);
      dbVersion = user.tokenVersion;
    }
  } 
  finally {
    // Remove the in-flight lookup regardless of success or failure.
    // Only remove the query if it is still active for this user.
    if (pendingVersionLookups.get(userId) === dbQuery) {
      pendingVersionLookups.delete(userId);
    }
  } 

  return dbVersion;
}

export async function optionalAuthMiddleware(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const token = extractToken(req);
  if (token) {
    try {
      const decoded = verifyToken(token);

      // Verify tokenVersion, silently discard revoked tokens
      const dbVersion = await getTokenVersion(decoded.id);

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

  // Single-device enforcement: resolve current tokenVersion.
  const dbVersion = await getTokenVersion(decoded.id);

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
