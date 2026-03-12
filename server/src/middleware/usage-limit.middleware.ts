import type { Request, Response, NextFunction } from "express";
import type { UsageAction } from "@prisma/client";
import { prisma } from "../database/db.js";
import { DAILY_LIMITS, getPlanTier } from "../config/usage-limits.js";

export function usageLimit(action: UsageAction) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.user) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    try {
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);

      // Run both DB calls in parallel — they are fully independent.
      const [user, used] = await Promise.all([
        prisma.user.findUnique({
          where: { id: req.user.id },
          select: { subscriptionPlan: true, subscriptionStatus: true },
        }),
        prisma.usageLog.count({
          where: {
            userId: req.user.id,
            action,
            createdAt: { gte: startOfDay },
          },
        }),
      ]);

      if (!user) {
        res.status(401).json({ message: "User not found" });
        return;
      }

      const tier = getPlanTier(user.subscriptionPlan, user.subscriptionStatus);
      const limit = DAILY_LIMITS[action][tier];

      if (used >= limit) {
        res.status(429).json({
          message: tier === "FREE"
            ? "Daily limit reached. Upgrade to Premium for higher limits."
            : "Daily limit reached. Try again tomorrow.",
          usage: { used, limit, action, tier },
        });
        return;
      }

      (req as any).usageInfo = { used, limit, action, tier };
      next();
    } catch (err) {
      next(err);
    }
  };
}
