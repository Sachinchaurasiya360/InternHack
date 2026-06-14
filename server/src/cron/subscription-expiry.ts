import cron from "node-cron";
import { prisma } from "../database/db.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";

let cronJob: cron.ScheduledTask | null = null;

/**
 * Expires subscriptions whose end date has passed.
 * Runs daily at midnight. Sets subscriptionStatus to EXPIRED
 * and subscriptionPlan to FREE for any ACTIVE user past their end date.
 */
async function expireSubscriptions(): Promise<void> {
  const now = new Date();

  // Find users whose subscriptions are expiring
  const expiringUsers = await prisma.user.findMany({
    where: {
      subscriptionStatus: "ACTIVE",
      subscriptionEndDate: { lt: now },
      subscriptionPlan: { in: ["MONTHLY", "YEARLY"] },
    },
    select: { id: true },
  });

  if (expiringUsers.length === 0) return;

  const userIds = expiringUsers.map((u) => u.id);

  // Update them in bulk
  await prisma.user.updateMany({
    where: { id: { in: userIds } },
    data: {
      subscriptionStatus: "EXPIRED",
      subscriptionPlan: "FREE",
    },
  });

  // Invalidate cache for each user
  const { cacheDel } = await import("../utils/cache.js");
  for (const userId of userIds) {
    await cacheDel(`profile:me:${userId}`).catch((err) => console.error("Failed to invalidate profile cache:", err));
    await cacheDel(`profile:public:${userId}`).catch((err) => console.error("Failed to invalidate profile cache:", err));
  }

  console.log(`[Cron] Expired ${userIds.length} subscription(s) and cleared profile cache.`);
}

export function startSubscriptionExpiryCron(): void {
  if (cronJob) return;

  // Run daily at midnight
  cronJob = cron.schedule("0 0 * * *", () => {
    void withAdvisoryLock("subscription-expiry", async () => {
      try {
        await expireSubscriptions();
      } catch (err) {
        console.error("[Cron] Subscription expiry error:", err);
      }
    });
  });

  console.log("[Cron] Subscription expiry cron started (daily at midnight)");
}

/** Stop the subscription expiry cron (used during graceful shutdown). */
export function stopSubscriptionExpiryCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    console.log("[Cron] Subscription expiry cron stopped");
  }
}
