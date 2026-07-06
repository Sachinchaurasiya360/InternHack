import cron from "node-cron";
import { prisma } from "../database/db.js";
import { sendEmail } from "../utils/email.utils.js";
import { buildUnsubscribeUrl } from "../utils/unsubscribe.utils.js";
import { deadlineAlertEmailHtml } from "../utils/email-templates.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";

let cronJob: cron.ScheduledTask | null = null;

const ALERT_DAYS = [30, 7, 3, 1];

export async function runDeadlineAlerts(): Promise<void> {
  const now = new Date();

  const programs = await prisma.ossProgram.findMany({
    where: { active: true, applicationDeadline: { not: null } },
    select: { id: true, name: true, slug: true, applicationDeadline: true },
  });

  if (programs.length === 0) return;

  for (const program of programs) {
    if (!program.applicationDeadline) continue;

    const diffMs = program.applicationDeadline.getTime() - now.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 0) continue;

    if (!ALERT_DAYS.includes(diffDays)) continue;

    const users = await prisma.user.findMany({
      where: {
        isActive: true,
        isVerified: true,
        unsubscribeDigest: false,
        programInterests: {
          some: { program: { slug: program.slug }, active: true },
        },
      },
      select: { id: true, name: true, email: true },
    });

    if (users.length === 0) continue;

    console.log(`[DeadlineAlert] ${program.name}: ${diffDays} day${diffDays > 1 ? "s" : ""} left, ${users.length} user(s) to notify`);

    for (const user of users) {
      sendEmail({
        to: user.email,
        subject: `${program.name} deadline ${diffDays === 0 ? "today" : `in ${diffDays} day${diffDays > 1 ? "s" : ""}`}`,
        html: deadlineAlertEmailHtml(user.name, program.name, diffDays, program.applicationDeadline),
        unsubscribeUrl: buildUnsubscribeUrl(user.id),
      }).catch((err) =>
        console.error(`[DeadlineAlert] Failed to send to ${user.email}:`, err)
      );
    }
  }
}

export function startDeadlineAlertCron(schedule = "0 9 * * *"): void {
  if (cronJob) return;
  cronJob = cron.schedule(schedule, () => {
    void withAdvisoryLock("deadline-alerts", async () => {
      await runDeadlineAlerts();
    });
  });
  console.log(`[DeadlineAlert] Scheduled daily at "${schedule}"`);
}

export function stopDeadlineAlertCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    console.log("[DeadlineAlert] Cron stopped");
  }
}
