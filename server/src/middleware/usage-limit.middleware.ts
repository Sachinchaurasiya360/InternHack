import type { Request, Response, NextFunction } from "express";
import { Prisma, type UsageAction } from "@prisma/client";
import { prisma } from "../database/db.js";
import { DAILY_LIMITS, getPlanTier, MONTHLY_LIMITS } from "../config/usage-limits.js";

export function usageLimit(action: UsageAction, window: "daily" | "monthly" = "daily") {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.user) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const userId = req.user.id;
    const startOfWindow = new Date();
    if (window === "monthly") {
      startOfWindow.setUTCDate(1);
      startOfWindow.setUTCHours(0, 0, 0, 0);
    } else {
      startOfWindow.setUTCHours(0, 0, 0, 0);
    }

    try {
      // Serializable transaction prevents TOCTOU race: concurrent requests that
      // race through the count→insert path will cause one to get a P2034
      // serialization failure rather than both slipping past the usage cap.
      type TxResult =
        | { ok: true; used: number; limit: number; tier: string }
        | { ok: false; reason: "user_missing" | "limit_reached"; used: number; limit: number; tier: string };

      const result: TxResult = await prisma.$transaction(
        async (tx: Prisma.TransactionClient) => {
          const [user, used] = await Promise.all([
            tx.user.findUnique({
              where: { id: userId },
              select: { subscriptionPlan: true, subscriptionStatus: true, subscriptionEndDate: true },
            }),
            tx.usageLog.count({
              where: { userId, action, createdAt: { gte: startOfWindow } },
            }),
          ]);

          if (!user) return { ok: false, reason: "user_missing", used: 0, limit: 0, tier: "FREE" } as const;

          const tier = getPlanTier(user.subscriptionPlan, user.subscriptionStatus, user.subscriptionEndDate);
          const limits = window === "monthly"
            ? (MONTHLY_LIMITS[action] ?? DAILY_LIMITS[action])
            : DAILY_LIMITS[action];
          const limit = limits[tier];

          if (used >= limit) return { ok: false, reason: "limit_reached", used, limit, tier } as const;

          await tx.usageLog.create({ data: { userId, action } });
          return { ok: true, used, limit, tier } as const;
        },
        { isolationLevel: Prisma.TransactionIsolationLevel.Serializable },
      );

      if (!result.ok) {
        if (result.reason === "user_missing") {
          res.status(401).json({ message: "User not found" });
          return;
        }
        const windowLabel = window === "monthly" ? "Monthly" : "Daily";
        const resetLabel = window === "monthly" ? "next month" : "tomorrow";
        res.status(429).json({
          message: result.tier === "FREE"
            ? `${windowLabel} limit reached. Upgrade to Premium for higher limits.`
            : `${windowLabel} limit reached. Try again ${resetLabel}.`,
          usage: { used: result.used, limit: result.limit, action, tier: result.tier },
        });
        return;
      }

      (req as any).usageInfo = { used: result.used, limit: result.limit, action, tier: result.tier };
      next();
    } catch (err) {
      // P2034 = Prisma serialization failure — a concurrent request won the race.
      if (
        typeof err === "object" &&
        err !== null &&
        "code" in err &&
        (err as { code: unknown }).code === "P2034"
      ) {
        res.status(429).json({
          message: "Too many concurrent requests. Please try again in a moment.",
          usage: { action },
        });
        return;
      }
      next(err);
    }
  };
}
