import cron from "node-cron";
import { prisma } from "../database/db.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";

let cronJob: cron.ScheduledTask | null = null;

const STALE_DELETE_DAYS = 45;
const LOG_RETAIN_DAYS = 30;

async function cleanupSignals(): Promise<void> {
  const now = Date.now();
  const staleDeleteCutoff = new Date(now - STALE_DELETE_DAYS * 24 * 60 * 60 * 1000);
  const logDeleteCutoff = new Date(now - LOG_RETAIN_DAYS * 24 * 60 * 60 * 1000);

  const [staleDeleted, logsDeleted] = await Promise.all([
    prisma.fundingSignal.deleteMany({
      where: { status: "STALE", lastSeenAt: { lt: staleDeleteCutoff } },
    }),
    prisma.fundingSignalLog.deleteMany({
      where: { createdAt: { lt: logDeleteCutoff } },
    }),
  ]);

  console.log(
    `[Cron] Signals cleanup: deleted ${staleDeleted.count} stale signals, ${logsDeleted.count} log entries`,
  );
}

export function startSignalsCleanupCron(): void {
  if (cronJob) return;

  // Run weekly on Sunday at 2 AM
  cronJob = cron.schedule("0 2 * * 0", () => {
    void withAdvisoryLock("signals-cleanup", async () => {
      try {
        await cleanupSignals();
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
