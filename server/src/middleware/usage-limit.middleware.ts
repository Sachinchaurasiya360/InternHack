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

      // Atomically check the limit AND create the usage log inside a
      // single transaction so concurrent requests cannot both pass.
      const result = await prisma.$transaction(async (tx) => {
        // Lock the user row so concurrent requests for the same user
        // are serialised (prevents the race where two requests both
        // read the same count before either writes).
        const rows = await tx.$queryRawUnsafe<
          { id: string; subscriptionPlan: string; subscriptionStatus: string | null; subscriptionEndDate: Date | null }[]
        >(
          `SELECT id, "subscriptionPlan", "subscriptionStatus", "subscriptionEndDate" FROM "User" WHERE id = $1 FOR UPDATE`,
          req.user.id,
        );
        const user = rows?.[0];

        if (!user) {
          return { kind: "no-user" as const };
        }

        const used = await tx.usageLog.count({
          where: {
            userId: req.user.id,
            action,
            createdAt: { gte: startOfDay },
          },
        });

        const tier = getPlanTier(user.subscriptionPlan, user.subscriptionStatus, user.subscriptionEndDate);
        const limit = DAILY_LIMITS[action][tier];

        if (used >= limit) {
          return { kind: "over-limit" as const, used, limit, action, tier };
        }

        // Pre-reserve the slot inside the same transaction — the
        // controller will skip its own create call when it sees this flag.
        await tx.usageLog.create({ data: { userId: req.user.id, action } });

        return { kind: "ok" as const, used: used + 1, limit, action, tier };
      });

      switch (result.kind) {
        case "no-user":
          res.status(401).json({ message: "User not found" });
          return;
        case "over-limit":
          res.status(429).json({
            message: result.tier === "FREE"
              ? "Daily limit reached. Upgrade to Premium for higher limits."
              : "Daily limit reached. Try again tomorrow.",
            usage: { used: result.used, limit: result.limit, action: result.action, tier: result.tier },
          });
          return;
        case "ok":
          (req as any).usageInfo = { used: result.used, limit: result.limit, action: result.action, tier: result.tier };
          (req as any).usageLogCreated = true;
          next();
      }
    } catch (err) {
      next(err);
    }
  };
}
