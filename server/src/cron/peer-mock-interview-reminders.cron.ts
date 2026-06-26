import cron from "node-cron";
import { prisma } from "../database/db.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";
import * as emailUtils from "../utils/email.utils.js";

let reminderCron: cron.ScheduledTask | null = null;

const checkAndSendReminders = async () => {
  console.log("[cron] Running peer mock interview reminders...");
  
  const now = new Date();
  const in24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const in1Hour = new Date(now.getTime() + 1 * 60 * 60 * 1000);

  // We look for SCHEDULED meetings that have scheduledAt around our target times
  // We'll give a 30-minute window for matching. The cron runs hourly.
  
  const windowStart24 = new Date(in24Hours.getTime() - 30 * 60 * 1000);
  const windowEnd24 = new Date(in24Hours.getTime() + 30 * 60 * 1000);

  const windowStart1 = new Date(in1Hour.getTime() - 30 * 60 * 1000);
  const windowEnd1 = new Date(in1Hour.getTime() + 30 * 60 * 1000);

  const upcomingPairings = await prisma.peerMockInterview.findMany({
    where: {
      status: "SCHEDULED",
      scheduledAt: { not: null },
      OR: [
        { scheduledAt: { gte: windowStart24, lt: windowEnd24 } },
        { scheduledAt: { gte: windowStart1, lt: windowEnd1 } },
      ]
    },
    include: {
      studentA: true,
      studentB: true,
    }
  });

  for (const pairing of upcomingPairings) {
    if (!pairing.scheduledAt) continue;
    
    // Determine which reminder to send
    const timeDiff = pairing.scheduledAt.getTime() - now.getTime();
    const is1Hour = timeDiff <= 2 * 60 * 60 * 1000; // If less than 2 hours, assume 1 hour reminder
    
    const subject = is1Hour 
      ? `Reminder: Mock Interview in 1 hour!`
      : `Reminder: Mock Interview tomorrow!`;
      
    const html = `<h3>Mock Interview Reminder</h3>
      <p>Your practice mock interview is scheduled for <strong>${pairing.scheduledAt.toLocaleString()}</strong>.</p>
      ${pairing.meetingLink ? `<p>Meeting Link: <a href="${pairing.meetingLink}">${pairing.meetingLink}</a></p>` : "<p>No meeting link was provided. Please coordinate with your partner if you haven't already.</p>"}
      <p>Good luck!</p>`;

    try {
      if (pairing.studentA?.email) await emailUtils.sendEmail({ to: pairing.studentA.email, subject, html });
      if (pairing.studentB?.email) await emailUtils.sendEmail({ to: pairing.studentB.email, subject, html });
    } catch (err) {
      console.error("[cron] Failed to send mock interview reminders:", err);
    }
  }
};

export const startPeerMockInterviewRemindersCron = () => {
  // Run every hour
  reminderCron = cron.schedule("0 * * * *", () => {
    withAdvisoryLock("peer-mock-interview-reminders", async () => {
      await checkAndSendReminders();
    }).catch(console.error);
  });
  console.log("[cron] Peer Mock Interview Reminders cron started (runs every hour)");
};

export const stopPeerMockInterviewRemindersCron = () => {
  if (reminderCron) {
    reminderCron.stop();
    console.log("[cron] Peer Mock Interview Reminders cron stopped");
  }
};
