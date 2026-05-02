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
  const now = new Date();
  const tenDaysAgo = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000);
  const elevenDaysAgo = new Date(now.getTime() - 11 * 24 * 60 * 60 * 1000);

  const users = await prisma.user.findMany({
    where: {
      isVerified: true,
      isActive: true,
      createdAt: { gte: elevenDaysAgo, lt: tenDaysAgo },
    },
    select: { id: true, name: true, email: true },
  });

  if (users.length === 0) return;

  console.log(`[FollowUpCron] Sending follow-up emails to ${users.length} user(s)`);

  for (const user of users) {
    sendEmail({
      to: user.email,
      subject: `${user.name.split(" ")[0]}, how's InternHack treating you?`,
      html: followUpEmailHtml(user.name),
    }).catch((err) =>
      console.error(`[FollowUpCron] Failed to send to ${user.email}:`, err)
    );
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
