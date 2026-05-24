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
    const claimedUsers = await prisma.$transaction(async (tx) => {
      // Try to acquire transaction-level advisory lock (ID 4441001)
      const lockAcquired = await tx.$queryRaw<Array<{ pg_try_advisory_xact_lock: boolean }>>`
        SELECT pg_try_advisory_xact_lock(4441001) as pg_try_advisory_xact_lock
      `;

      if (!lockAcquired[0]?.pg_try_advisory_xact_lock) {
        console.log("[FollowUpCron] Failed to acquire advisory lock. Skipping duplicate execution.");
        return [];
      }

      const now = new Date();
      const tenDaysAgo = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000);
      const elevenDaysAgo = new Date(now.getTime() - 11 * 24 * 60 * 60 * 1000);

      const users = await tx.user.findMany({
        where: {
          isVerified: true,
          isActive: true,
          createdAt: { gte: elevenDaysAgo, lt: tenDaysAgo },
          milestoneEmails: {
            none: {
              milestoneKey: "DAY_10",
              milestoneType: { in: ["FOLLOW_UP_CLAIMED", "FOLLOW_UP_SENT"] },
            },
          },
        },
        select: { id: true, name: true, email: true },
      });

      if (users.length === 0) return [];

      // Claim these users by creating a milestoneEmail record
      await tx.milestoneEmail.createMany({
        data: users.map((u) => ({
          studentId: u.id,
          milestoneType: "FOLLOW_UP_CLAIMED",
          milestoneKey: "DAY_10",
          sentAt: new Date(),
        })),
        skipDuplicates: true,
      });

      return users;
    });

    if (!claimedUsers || claimedUsers.length === 0) return;

    console.log(`[FollowUpCron] Sending follow-up emails to ${claimedUsers.length} user(s)`);

    const CONCURRENCY = 20;
    for (let i = 0; i < claimedUsers.length; i += CONCURRENCY) {
      const chunk = claimedUsers.slice(i, i + CONCURRENCY);
      await Promise.allSettled(
        chunk.map(async (user) => {
          try {
            await sendEmail({
              to: user.email,
              subject: `${user.name.split(" ")[0]}, how's InternHack treating you?`,
              html: followUpEmailHtml(user.name),
            });

            // Mark as sent
            await prisma.milestoneEmail.updateMany({
              where: {
                studentId: user.id,
                milestoneType: "FOLLOW_UP_CLAIMED",
                milestoneKey: "DAY_10",
              },
              data: {
                milestoneType: "FOLLOW_UP_SENT",
                sentAt: new Date(),
              },
            });
          } catch (err) {
            console.error(`[FollowUpCron] Failed to send to ${user.email}:`, err);
            // Revert claim on failure to allow retry
            await prisma.milestoneEmail.deleteMany({
              where: {
                studentId: user.id,
                milestoneType: "FOLLOW_UP_CLAIMED",
                milestoneKey: "DAY_10",
              },
            }).catch(e => console.error(`[FollowUpCron] Failed to delete claim for ${user.email}:`, e));
          }
        })
      );
    }
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
