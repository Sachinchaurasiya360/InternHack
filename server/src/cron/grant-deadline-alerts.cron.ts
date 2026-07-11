import cron from "node-cron";
import { prisma } from "../database/db.js";
import { sendEmail } from "../utils/email.utils.js";
import { buildUnsubscribeUrl } from "../utils/unsubscribe.utils.js";
import { grantDeadlineAlertEmailHtml } from "../utils/email-templates.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";

let cronJob: cron.ScheduledTask | null = null;

const ALERT_DAYS = [30, 7, 3, 1];

export async function runGrantDeadlineAlerts(): Promise<void> {
  const now = new Date();

  const tracked = await prisma.trackedGrant.findMany({
    where: {
      deadline: { not: null },
      status: { notIn: ["ACCEPTED", "REJECTED"] },
    },
    select: {
      grantName: true,
      deadline: true,
      user: {
        select: { id: true, name: true, email: true, isActive: true, isVerified: true, unsubscribeDigest: true },
      },
    },
  });

  if (tracked.length === 0) return;

  for (const grant of tracked) {
    if (!grant.deadline) continue;
    if (!grant.user.isActive || !grant.user.isVerified || grant.user.unsubscribeDigest) continue;

    const diffMs = grant.deadline.getTime() - now.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 0) continue;
    if (!ALERT_DAYS.includes(diffDays)) continue;

    console.log(`[GrantDeadlineAlert] ${grant.grantName}: ${diffDays} day${diffDays === 1 ? "" : "s"} left for user ${grant.user.id}`);

    sendEmail({
      to: grant.user.email,
      subject: `${grant.grantName} deadline ${diffDays === 0 ? "today" : `in ${diffDays} day${diffDays > 1 ? "s" : ""}`}`,
      html: grantDeadlineAlertEmailHtml(grant.user.name, grant.grantName, diffDays, grant.deadline),
      unsubscribeUrl: buildUnsubscribeUrl(grant.user.id),
    }).catch((err) =>
      console.error(`[GrantDeadlineAlert] Failed to send to ${grant.user.email}:`, err)
    );
  }
}

export function startGrantDeadlineAlertCron(schedule = "0 9 * * *"): void {
  if (cronJob) return;
  cronJob = cron.schedule(schedule, () => {
    void withAdvisoryLock("grant-deadline-alerts", async () => {
      await runGrantDeadlineAlerts();
    });
  });
  console.log(`[GrantDeadlineAlert] Scheduled daily at "${schedule}"`);
}

export function stopGrantDeadlineAlertCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    console.log("[GrantDeadlineAlert] Cron stopped");
  }
}
