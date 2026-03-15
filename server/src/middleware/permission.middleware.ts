import type { Request, Response, NextFunction } from "express";
import { prisma } from "../database/db.js";

// In-memory permission cache (userId → permissions[], expires)
const permCache = new Map<number, { permissions: string[]; expiresAt: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

async function getUserPermissions(userId: number): Promise<string[]> {
  const cached = permCache.get(userId);
  if (cached && cached.expiresAt > Date.now()) return cached.permissions;

  const userRoles = await prisma.userCustomRole.findMany({
    where: { userId },
    include: { role: { select: { permissions: true } } },
  });

  const permissions = [...new Set(userRoles.flatMap((ur) => ur.role.permissions))];
  permCache.set(userId, { permissions, expiresAt: Date.now() + CACHE_TTL });
  return permissions;
}

/** Clear cached permissions for a user (call after role assignment changes) */
export function invalidatePermissionCache(userId: number): void {
  permCache.delete(userId);
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
