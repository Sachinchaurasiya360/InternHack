import cron from "node-cron";
import { prisma } from "../database/db.js";
import { sendEmail } from "../utils/email.utils.js";
import { roadmapDay10EmailHtml } from "../utils/email-templates.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";

let cronJob: cron.ScheduledTask | null = null;

const MAX_ATTEMPTS = 5;
const BATCH_SIZE = 50;

interface Day10Payload {
  enrollmentId: number;
  roadmapSlug: string;
  roadmapTitle: string;
}

/**
 * Drain due rows from scheduledEmail. Each kind has its own renderer.
 * Idempotent: a row is considered done once sentAt is set.
 */
async function drainScheduledEmails(): Promise<void> {
  const now = new Date();
  const due = await prisma.scheduledEmail.findMany({
    where: {
      sendAt: { lte: now },
      sentAt: null,
      attempts: { lt: MAX_ATTEMPTS },
    },
    orderBy: { sendAt: "asc" },
    take: BATCH_SIZE,
    include: {
      user: { select: { id: true, name: true, email: true, isActive: true } },
    },
  });

  if (due.length === 0) return;
  console.log(`[ScheduledEmail] Processing ${due.length} due email(s)`);

  for (const row of due) {
    if (!row.user.isActive) {
      // Skip and mark sent so we don't keep retrying
      await prisma.scheduledEmail.update({
        where: { id: row.id },
        data: { sentAt: now, lastError: "user inactive" },
      });
      continue;
    }

    try {
      if (row.kind === "ROADMAP_DAY_10") {
        await sendDay10(row.id, row.user, row.payload as unknown as Day10Payload);
      }
      // Future kinds (ROADMAP_WEEKLY_DIGEST, etc.) plug in here.

      await prisma.scheduledEmail.update({
        where: { id: row.id },
        data: { sentAt: new Date() },
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`[ScheduledEmail] Failed id=${row.id}:`, msg);
      const failureTime = new Date();
      const nextAttempts = row.attempts + 1;
      const isFailedMax = nextAttempts >= MAX_ATTEMPTS;

      try {
        await prisma.scheduledEmail.update({
          where: { id: row.id },
          data: {
            attempts: { increment: 1 },
            lastError: msg.slice(0, 500),
            failedAt: isFailedMax ? failureTime : null,
            // If not failed max, back off retry time; otherwise leave in future
            sendAt: isFailedMax
              ? row.sendAt
              : new Date(failureTime.getTime() + nextAttempts * 5 * 60 * 1000), // linear backoff
          },
        });
      } catch (dbErr) {
        console.error(`[ScheduledEmail] Failed to write error state for id=${row.id}:`, dbErr);
      }
    }
  }
}

async function sendDay10(
  scheduledId: number,
  user: { id: number; name: string; email: string },
  payload: Day10Payload,
): Promise<void> {
  // Re-read enrollment so the email reflects current progress
  const enrollment = await prisma.roadmapEnrollment.findFirst({
    where: { id: payload.enrollmentId, userId: user.id },
    include: {
      roadmap: { select: { slug: true, title: true } },
      topicProgress: true,
    },
  });

  if (!enrollment) {
    throw new Error(`Enrollment ${payload.enrollmentId} missing for scheduled email ${scheduledId}`);
  }

  // Compute progress vs. planned topics for the first 10 days (week 1 + 2)
  const plan = (enrollment.weeklyPlan as unknown as { week: number; topicSlugs: string[] }[]) ?? [];
  const plannedSlugs = new Set([...(plan[0]?.topicSlugs ?? []), ...(plan[1]?.topicSlugs ?? [])]);
  const plannedTopics = plannedSlugs.size;

  const completedTopics = enrollment.topicProgress.filter((p) => p.status === "COMPLETED").length;

  // Pick next topic: first planned slug not yet COMPLETED in topicProgress
  // (we look up topicId-by-slug to compare against progress)
  const topics = await prisma.roadmapTopic.findMany({
    where: { slug: { in: [...plannedSlugs] }, section: { roadmapId: enrollment.roadmapId } },
    select: { id: true, slug: true },
  });
  const completedTopicIds = new Set(
    enrollment.topicProgress.filter((p) => p.status === "COMPLETED").map((p) => p.topicId),
  );
  const nextTopic = topics.find((t) => !completedTopicIds.has(t.id));

  await sendEmail({
    to: user.email,
    subject: `${user.name.split(" ")[0]}, day 10 of your ${enrollment.roadmap.title}`,
    html: roadmapDay10EmailHtml({
      name: user.name,
      roadmapTitle: enrollment.roadmap.title,
      roadmapSlug: enrollment.roadmap.slug,
      completedTopics,
      plannedTopics,
      nextTopicSlug: nextTopic?.slug ?? null,
    }),
  });
}

/** Start the scheduled-email worker. Default cadence: every 5 minutes. */
export function startScheduledEmailWorker(schedule = "*/5 * * * *"): void {
  if (cronJob) return;
  cronJob = cron.schedule(schedule, () => {
    void withAdvisoryLock("scheduled-email-worker", async () => {
      await drainScheduledEmails();
    });
  });
  console.log(`[ScheduledEmail] Worker scheduled with cadence "${schedule}"`);
}

/** Stop the scheduled-email worker (used during graceful shutdown). */
export function stopScheduledEmailWorker(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    console.log("[ScheduledEmail] Worker stopped");
  }
}
