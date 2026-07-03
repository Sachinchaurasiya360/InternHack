import type { Request, Response, NextFunction } from "express";
import { prisma } from "../database/db.js";
import { getPlanTier } from "../config/usage-limits.js";

/**
 * Gate a route behind an active Premium subscription.
 *
 * Uses the canonical `getPlanTier` (the same helper the usage-limit middleware
 * uses) so the check honours `subscriptionEndDate` instead of a bespoke
 * plan+status check. Centralising the per-request lookup here removes the
 * duplicated `user.findUnique` that previously sat in every controller method.
 */
export async function requirePremium(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  if (!req.user) {
    res.status(401).json({ message: "Authentication required" });
    return;
  }

  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    select: {
      subscriptionPlan: true,
      subscriptionStatus: true,
      subscriptionEndDate: true,
    },
  });

  if (
    !user ||
    getPlanTier(
      user.subscriptionPlan,
      user.subscriptionStatus,
      user.subscriptionEndDate,
    ) !== "PREMIUM"
  ) {
    res
      .status(403)
      .json({ message: "Premium subscription required for peer mock interviews" });
    return;
  }

  next();
}
