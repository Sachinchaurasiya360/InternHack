import type { Request, Response, NextFunction } from "express";
import { prisma } from "../../database/db.js";
import type { AdminTier } from "@prisma/client";

export function requireAdminTier(...tiers: AdminTier[]) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.user) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const adminProfile = await prisma.adminProfile.findUnique({
      where: { userId: req.user.id },
    });

    if (!adminProfile || !adminProfile.isActive) {
      res.status(403).json({ message: "Admin account is inactive" });
      return;
    }

    if (!tiers.includes(adminProfile.tier)) {
      res.status(403).json({ message: "Insufficient admin permissions" });
      return;
    }

    next();
  };
}
