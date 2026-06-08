import { prisma } from "../database/db.js";
import { getPlanTier, type PlanTier } from "../config/usage-limits.js";
import { cacheGet, cacheSet, cacheDel } from "./cache.js";

const TIER_TTL = 300; // 5 minutes

function tierKey(userId: number) {
  return `user:tier:${userId}`;
}

export async function getUserTier(userId: number): Promise<PlanTier> {
  const cached = await cacheGet<PlanTier>(tierKey(userId));
  if (cached) return cached;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      subscriptionPlan: true,
      subscriptionStatus: true,
      subscriptionEndDate: true,
    },
  });
  if (!user) return "FREE";

  const tier = getPlanTier(user.subscriptionPlan, user.subscriptionStatus, user.subscriptionEndDate);
  await cacheSet(tierKey(userId), tier, TIER_TTL);
  return tier;
}

export async function isPremiumUser(userId: number): Promise<boolean> {
  return (await getUserTier(userId)) === "PREMIUM";
}

export async function invalidateUserTierCache(userId: number): Promise<void> {
  await cacheDel(tierKey(userId));
}
