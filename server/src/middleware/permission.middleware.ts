import type { Request, Response, NextFunction } from "express";
import { prisma } from "../database/db.js";
import { redis } from "../../config/redis.js"; // Ensure this path correctly points to the Redis config

const PERMISSION_CACHE_TTL = 5 * 60; // 5 minutes in seconds

/**
 * Fetches user permissions using Redis as a distributed cache layer
 */
async function getUserPermissions(userId: number): Promise<string[]> {
  const cacheKey = `perms:${userId}`;
  
  try {
    // 1. Try Redis cache first
    const cached = await redis.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (error) {
    console.error('Redis error while fetching permissions:', error);
    // Fallback gracefully to DB if Redis is down
  }
  
  // 2. Fetch from database if cache miss or Redis fails
  const userRoles = await prisma.userCustomRole.findMany({
    where: { userId },
    include: { role: { select: { permissions: true } } },
  });
  
  const permissions = [...new Set(userRoles.flatMap((ur) => ur.role.permissions))];
  
  try {
    // 3. Store in Redis for future requests
    await redis.setex(
      cacheKey,
      PERMISSION_CACHE_TTL,
      JSON.stringify(permissions)
    );
  } catch (error) {
    console.error('Redis error while setting permissions cache:', error);
  }
  
  return permissions;
}

/** * Clear cached permissions for a user (call after role assignment changes)
 * Keeps synchronous signature to maintain backward compatibility across the app
 */
export function invalidatePermissionCache(userId: number): void {
  const cacheKey = `perms:${userId}`;
  redis.del(cacheKey).catch((error) => {
    console.error('Failed to invalidate Redis permission cache:', error);
  });
}

/**
 * Middleware that checks if the authenticated user has at least one of the
 * required permissions via their custom RBAC roles.
 * ADMIN users bypass all permission checks.
 */
export function requirePermission(...requiredPermissions: string[]) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.user) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    // ADMIN always passes permission checks
    if (req.user.role === "ADMIN") {
      next();
      return;
    }

    try {
      const userPerms = await getUserPermissions(req.user.id);
      const hasPermission = requiredPermissions.some((p) => userPerms.includes(p));

      if (!hasPermission) {
        res.status(403).json({ message: "Insufficient permissions" });
        return;
      }

      next();
    } catch {
      res.status(500).json({ message: "Permission check failed" });
    }
  };
}