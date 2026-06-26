import cron from "node-cron";
import { prisma } from "../database/db.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";

let cronJob: cron.ScheduledTask | null = null;

const STALE_DELETE_DAYS = 45;
const LOG_RETAIN_DAYS = 30;

/**
 * Collapse duplicate signals to one row per (company, funding round).
 *
 * News-based sources (Exa, TechCrunch) surface the same raise from many
 * outlets, so one funding event becomes many rows for the same company. This
 * hard-deletes the extras in a single SQL statement, keeping the best row per
 * normalized (companyName, fundingRound): manual entries win, then ACTIVE over
 * STALE over ARCHIVED, then the most recently announced. A null round collapses
 * a company's roundless (e.g. hiring) signals to its latest.
 *
 * Returns the number of rows deleted.
 */
export async function collapseDuplicateSignals(): Promise<number> {
  return prisma.$executeRaw`
    DELETE FROM "fundingSignal" f
    USING (
      SELECT id, row_number() OVER (
        PARTITION BY lower(btrim("companyName")), coalesce(lower(btrim("fundingRound")), '')
        ORDER BY
          (source = 'manual') DESC,
          CASE status WHEN 'ACTIVE' THEN 0 WHEN 'STALE' THEN 1 ELSE 2 END,
          "announcedAt" DESC,
          id DESC
      ) AS rn
      FROM "fundingSignal"
    ) d
    WHERE f.id = d.id AND d.rn > 1;`;
}

export async function runSignalsCleanup(): Promise<void> {
  const now = Date.now();
  const staleDeleteCutoff = new Date(now - STALE_DELETE_DAYS * 24 * 60 * 60 * 1000);
  const logDeleteCutoff = new Date(now - LOG_RETAIN_DAYS * 24 * 60 * 60 * 1000);

  // Collapse duplicates first so the stale sweep does not race the dedup.
  const dupsDeleted = await collapseDuplicateSignals();

  const [staleDeleted, logsDeleted] = await Promise.all([
    prisma.fundingSignal.deleteMany({
      where: { status: "STALE", lastSeenAt: { lt: staleDeleteCutoff } },
    }),
    prisma.fundingSignalLog.deleteMany({
      where: { createdAt: { lt: logDeleteCutoff } },
    }),
  ]);

  console.log(
    `[Cron] Signals cleanup: deleted ${dupsDeleted} duplicate signals, ${staleDeleted.count} stale signals, ${logsDeleted.count} log entries`,
  );
}

export function startSignalsCleanupCron(): void {
  if (cronJob) return;

  // Run weekly on Sunday at 2 AM
  cronJob = cron.schedule("0 2 * * 0", () => {
    void withAdvisoryLock("signals-cleanup", async () => {
      try {
        await runSignalsCleanup();
      } catch (err) {
        console.error("[Cron] Signals cleanup error:", err);
      }
    });
  });

  console.log("[Cron] Signals cleanup cron started (weekly Sunday 2 AM)");
}

export function stopSignalsCleanupCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    console.log("[Cron] Signals cleanup cron stopped");
  }
}
