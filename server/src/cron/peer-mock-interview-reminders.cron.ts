import cron from "node-cron";
import { prisma } from "../database/db.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";
import * as emailUtils from "../utils/email.utils.js";

let reminderCron: cron.ScheduledTask | null = null;

// This job is invoked once daily (see daily-cron.route.ts), so it can't hit
// precise hour-before windows. Instead it buckets by whole days remaining,
// the same approach deadline-alerts.cron.ts uses: each pairing crosses each
// bucket exactly once across daily runs, so this naturally dedupes without a
// "reminder sent" flag on the row.
const REMINDER_DAYS = [1, 0];

function formatUtc(d: Date): string {
  return (
    d.toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "medium",
      timeStyle: "short",
    }) + " UTC"
  );
}

export async function runPeerMockInterviewReminders(): Promise<void> {
  console.log("[cron] Running peer mock interview reminders...");

  const now = new Date();

  const upcomingPairings = await prisma.peerMockInterview.findMany({
    where: {
      status: "SCHEDULED",
      scheduledAt: { gte: now },
    },
    include: {
      studentA: true,
      studentB: true,
    },
  });

  for (const pairing of upcomingPairings) {
    if (!pairing.scheduledAt) continue;

    const diffDays = Math.ceil((pairing.scheduledAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    if (!REMINDER_DAYS.includes(diffDays)) continue;

    const subject = diffDays === 0 ? "Reminder: Mock Interview today!" : "Reminder: Mock Interview tomorrow!";
    const html = `<h3>Mock Interview Reminder</h3>
      <p>Your practice mock interview is scheduled for <strong>${formatUtc(pairing.scheduledAt)}</strong>.</p>
      ${pairing.meetingLink ? `<p>Meeting Link: <a href="${pairing.meetingLink}">${pairing.meetingLink}</a></p>` : "<p>No meeting link was provided. Please coordinate with your partner if you haven't already.</p>"}
      <p>Good luck!</p>`;

    try {
      if (pairing.studentA?.email) await emailUtils.sendEmail({ to: pairing.studentA.email, subject, html });
      if (pairing.studentB?.email) await emailUtils.sendEmail({ to: pairing.studentB.email, subject, html });
    } catch (err) {
      console.error("[cron] Failed to send mock interview reminders:", err);
    }
  }
}

export const startPeerMockInterviewRemindersCron = (schedule = "0 9 * * *"): void => {
  if (reminderCron) return;
  reminderCron = cron.schedule(schedule, () => {
    void withAdvisoryLock("peer-mock-interview-reminders", async () => {
      await runPeerMockInterviewReminders();
    });
  });
  console.log(`[cron] Peer Mock Interview Reminders cron scheduled at "${schedule}"`);
};

export const stopPeerMockInterviewRemindersCron = (): void => {
  if (reminderCron) {
    reminderCron.stop();
    reminderCron = null;
    console.log("[cron] Peer Mock Interview Reminders cron stopped");
  }
};
