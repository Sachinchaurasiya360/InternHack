import cron from "node-cron";
import { OpensourceService } from "../module/opensource/opensource.service.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";
import { createLogger } from "../utils/logger.js";

const logger = createLogger("OpensourceRepoStatsCron");
const opensourceService = new OpensourceService();
let cronJob: cron.ScheduledTask | null = null;

export async function runOpensourceRepoStatsRefresh() {
  logger.info("Starting opensource repo stats refresh...");
  const result = await opensourceService.refreshStaleRepoStats();
  logger.info("Opensource repo stats refresh finished:", result);
}

export function startOpensourceRepoStatsCron(schedule = "0 2 * * *"): void {
  if (cronJob) return;

  cronJob = cron.schedule(
    schedule,
    () => {
      withAdvisoryLock("opensource-repo-stats-refresh", async () => {
        try {
          await runOpensourceRepoStatsRefresh();
        } catch (err) {
          logger.error("Opensource repo stats refresh failed:", err);
        }
      }).catch((err) => {
        logger.error("Advisory lock for opensource repo stats refresh failed:", err);
      });
    },
    { timezone: "Etc/UTC" },
  );

  logger.info(`Opensource repo stats cron scheduled: ${schedule}`);
}

export function stopOpensourceRepoStatsCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    logger.info("Opensource repo stats cron stopped");
  }
}
