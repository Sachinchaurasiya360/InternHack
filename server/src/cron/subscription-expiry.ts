import cron from "node-cron";
import { prisma } from "../database/db.js";

let cronJob: cron.ScheduledTask | null = null;

/**
 * Expires subscriptions whose end date has passed.
 * Runs daily at midnight. Sets subscriptionStatus to EXPIRED
 * and subscriptionPlan to FREE for any ACTIVE user past their end date.
 */
async function expireSubscriptions(): Promise<void> {
  const now = new Date();

  const result = await prisma.user.updateMany({
    where: {
      subscriptionStatus: "ACTIVE",
      subscriptionEndDate: { lt: now },
      subscriptionPlan: { in: ["MONTHLY", "YEARLY"] },
    },
    data: {
      subscriptionStatus: "EXPIRED",
      subscriptionPlan: "FREE",
    },
  });

  if (result.count > 0) {
    console.log(`[Cron] Expired ${result.count} subscription(s)`);
  }
}

export function startSubscriptionExpiryCron(): void {
  if (cronJob) return;

  // Run daily at midnight
  cronJob = cron.schedule("0 0 * * *", async () => {
    try {
      await expireSubscriptions();
    } catch (err) {
      console.error("[Cron] Subscription expiry error:", err);
    }
  });

  console.log("[Cron] Subscription expiry cron started (daily at midnight)");
}
