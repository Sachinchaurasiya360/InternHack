import cron from "node-cron";
import { prisma } from "../database/db.js";
import { sendEmail } from "../utils/email.utils.js";
import { roadmapDay10EmailHtml } from "../utils/email-templates.js";

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
  let claimedRows: Array<any> = [];
  const now = new Date();

  try {
    claimedRows = await prisma.$transaction(async (tx) => {
      // Try to acquire transaction-level advisory lock (ID 4441002)
      const lockAcquired = await tx.$queryRaw<Array<{ pg_try_advisory_xact_lock: boolean }>>`
        SELECT pg_try_advisory_xact_lock(4441002) as pg_try_advisory_xact_lock
      `;

      if (!lockAcquired[0]?.pg_try_advisory_xact_lock) {
        console.log("[ScheduledEmail] Failed to acquire advisory lock. Skipping batch drain.");
        return [];
      }

      const due = await tx.scheduledEmail.findMany({
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

      if (due.length === 0) return [];
      console.log(`[ScheduledEmail] Processing ${due.length} due email(s)`);

      // Claim the rows by incrementing attempts and setting a temporary visibility timeout (future sendAt)
      const visibilityTimeout = new Date(now.getTime() + 10 * 60 * 1000); // 10 minutes in the future
      for (const row of due) {
        await tx.scheduledEmail.update({
          where: { id: row.id },
          data: {
            attempts: { increment: 1 },
            sendAt: visibilityTimeout,
          },
        });
      }

      return due;
    });
  } catch (err) {
    console.error("[ScheduledEmail] Error during transaction claim:", err);
    return;
  }

  if (claimedRows.length === 0) return;

  // Process claimed rows outside transaction to avoid email duplicate risks during database rollbacks
  for (const row of claimedRows) {
    if (!row.user.isActive) {
      try {
        await prisma.scheduledEmail.update({
          where: { id: row.id },
          data: { sentAt: now, lastError: "user inactive" },
        });
      } catch (err) {
        console.error(`[ScheduledEmail] Failed to update inactive state for id=${row.id}:`, err);
      }
      continue;
    }

    try {
      if (row.kind === "ROADMAP_DAY_10") {
        await sendDay10(row.id, row.user, row.payload as unknown as Day10Payload);
      } else {
        throw new Error(`Unsupported scheduled email kind: ${row.kind}`);
      }

      await prisma.scheduledEmail.update({
        where: { id: row.id },
        data: { sentAt: new Date() },
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`[ScheduledEmail] Failed id=${row.id}:`, msg);

      const nextAttempts = row.attempts + 1;
      const isFailedMax = nextAttempts >= MAX_ATTEMPTS;

      try {
        await prisma.scheduledEmail.update({
          where: { id: row.id },
          data: {
            lastError: msg.slice(0, 500),
            failedAt: isFailedMax ? new Date() : null,
            // If not failed max, back off retry time; otherwise leave in future
            sendAt: isFailedMax
              ? row.sendAt
              : new Date(now.getTime() + nextAttempts * 5 * 60 * 1000), // exponential backoff
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
    console.warn(`[ScheduledEmail] Enrollment ${payload.enrollmentId} missing for scheduled ${scheduledId}, skipping`);
    return;
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
    void drainScheduledEmails();
  });
  console.log(`[ScheduledEmail] Worker scheduled with cadence "${schedule}"`);
}
