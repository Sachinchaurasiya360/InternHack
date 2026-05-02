import { prisma } from "../database/db.js";
import { getPlanTier, type PlanTier } from "../config/usage-limits.js";

/** Resolve the plan tier for a user. Returns "FREE" if the user is missing. */
export async function getUserTier(userId: number): Promise<PlanTier> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      subscriptionPlan: true,
      subscriptionStatus: true,
      subscriptionEndDate: true,
    },
  });
  if (!user) return "FREE";
  return getPlanTier(
    user.subscriptionPlan,
    user.subscriptionStatus,
    user.subscriptionEndDate,
  );
}

export async function isPremiumUser(userId: number): Promise<boolean> {
  return (await getUserTier(userId)) === "PREMIUM";
}
