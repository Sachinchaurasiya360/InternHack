import cron from "node-cron";
import { prisma } from "../database/db.js";
import { sendEmail } from "../utils/email.utils.js";
import { followUpEmailHtml } from "../utils/email-templates.js";

let cronJob: cron.ScheduledTask | null = null;

/**
 * Sends a 10-day follow-up email to verified users who signed up
 * between 10 and 11 days ago. The 24-hour window ensures each user
 * is picked up exactly once when the cron runs daily.
 */
async function sendFollowUpEmails(): Promise<void> {
  try {
    await prisma.$transaction(async (tx) => {
      // Try to acquire transaction-level advisory lock (ID 4441001)
      const lockAcquired = await tx.$queryRaw<Array<{ pg_try_advisory_xact_lock: boolean }>>`
        SELECT pg_try_advisory_xact_lock(4441001) as pg_try_advisory_xact_lock
      `;

      if (!lockAcquired[0]?.pg_try_advisory_xact_lock) {
        console.log("[FollowUpCron] Failed to acquire advisory lock. Skipping duplicate execution.");
        return;
      }

      const now = new Date();
      const tenDaysAgo = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000);
      const elevenDaysAgo = new Date(now.getTime() - 11 * 24 * 60 * 60 * 1000);

      const users = await tx.user.findMany({
        where: {
          isVerified: true,
          isActive: true,
          createdAt: { gte: elevenDaysAgo, lt: tenDaysAgo },
        },
        select: { id: true, name: true, email: true },
      });

      if (users.length === 0) return;

      console.log(`[FollowUpCron] Sending follow-up emails to ${users.length} user(s)`);

      const CONCURRENCY = 20;
      for (let i = 0; i < users.length; i += CONCURRENCY) {
        const chunk = users.slice(i, i + CONCURRENCY);
        await Promise.allSettled(
          chunk.map((user) =>
            sendEmail({
              to: user.email,
              subject: `${user.name.split(" ")[0]}, how's InternHack treating you?`,
              html: followUpEmailHtml(user.name),
            }).catch((err) => {
              console.error(`[FollowUpCron] Failed to send to ${user.email}:`, err);
            }),
          ),
        );
      }
    });
  } catch (err) {
    console.error("[FollowUpCron] Error during cron execution:", err);
  }
}

/** Start the daily follow-up email cron (default: 9 AM every day). */
export function startFollowUpCron(schedule = "0 9 * * *"): void {
  if (cronJob) return;
  cronJob = cron.schedule(schedule, () => {
    void sendFollowUpEmails();
  });
  console.log(`[FollowUpCron] Scheduled daily at "${schedule}"`);
}
