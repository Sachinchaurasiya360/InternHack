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

      const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        select: { subscriptionPlan: true, subscriptionStatus: true, subscriptionEndDate: true },
      });

      if (!user) {
        res.status(401).json({ message: "User not found" });
        return;
      }

      const tier = getPlanTier(user.subscriptionPlan, user.subscriptionStatus, user.subscriptionEndDate);
      const limit = DAILY_LIMITS[action][tier];

      await prisma.$transaction(async (tx: typeof prisma) => {
        const used = await tx.usageLog.count({
          where: {
            userId: req.user!.id,
            action,
            createdAt: { gte: startOfDay },
          },
        });

        if (used >= limit) {
          const error = new Error("USAGE_LIMIT_EXCEEDED");
          (error as any).used = used;
          (error as any).limit = limit;
          (error as any).tier = tier;
          throw error;
        }

        await tx.usageLog.create({
          data: { userId: req.user!.id, action },
        });

        (req as any).usageInfo = { used, limit, action, tier };
      });

      next();
    } catch (err) {
      if (err instanceof Error && err.message === "USAGE_LIMIT_EXCEEDED") {
        const { used, limit, tier } = err as any;
        res.status(429).json({
          message: tier === "FREE"
            ? "Daily limit reached. Upgrade to Premium for higher limits."
            : "Daily limit reached. Try again tomorrow.",
          usage: { used, limit, action, tier },
        });
        return;
      }

      next(err);
    }
  };
}
