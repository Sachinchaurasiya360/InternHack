import cron from "node-cron";
import { prisma } from "../database/db.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";

let cronJob: cron.ScheduledTask | null = null;

// How long to keep scraped/indexed jobs. Override with JOB_CLEANUP_RETAIN_DAYS.
const RETAIN_DAYS = Number(process.env["JOB_CLEANUP_RETAIN_DAYS"] ?? 30);

/**
 * Prune old job data:
 *  - scrapedJob: rows the scraper hasn't re-seen within the retention window
 *    (lastSeenAt is the freshness signal; a delisted job stops being re-seen).
 *  - jobIndex: expired (deadline passed) or stale (not refreshed within the
 *    window). Deleting a jobIndex row cascades to its jobMatch rows
 *    (onDelete: Cascade in the schema), so no orphan matches are left behind.
 *
 * Both deletes are single bulk statements (deleteMany), run sequentially to
 * keep lock contention and pool usage low.
 */
export async function runJobCleanup(): Promise<void> {
  const cutoff = new Date(Date.now() - RETAIN_DAYS * 24 * 60 * 60 * 1000);
  const now = new Date();

  const scraped = await prisma.scrapedJob.deleteMany({
    where: { lastSeenAt: { lt: cutoff } },
  });

  const indexed = await prisma.jobIndex.deleteMany({
    where: {
      OR: [
        { deadline: { lt: now } },
        { updatedAt: { lt: cutoff } },
      ],
    },
  });

  console.log(
    `[Cron] Job cleanup: deleted ${scraped.count} scraped jobs (not seen in ${RETAIN_DAYS}d) and ${indexed.count} indexed jobs (expired or stale > ${RETAIN_DAYS}d)`,
  );
}

export function startJobCleanupCron(): void {
  if (cronJob) return;

  // Run daily at 3:30 AM
  cronJob = cron.schedule("30 3 * * *", () => {
    void withAdvisoryLock("job-cleanup", async () => {
      try {
        await runJobCleanup();
      } catch (err) {
        console.error("[Cron] Job cleanup error:", err);
      }
    });
  });

  console.log(`[Cron] Job cleanup cron started (daily 3:30 AM, retain ${RETAIN_DAYS}d)`);
}

export function stopJobCleanupCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    console.log("[Cron] Job cleanup cron stopped");
  }
}
