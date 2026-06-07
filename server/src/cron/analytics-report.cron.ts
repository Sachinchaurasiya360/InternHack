import cron from "node-cron";
import { withAdvisoryLock } from "../utils/cron-lock.js";
import { AnalyticsService } from "../module/analytics/analytics.service.js";
import { createLogger } from "../utils/logger.js";

const logger = createLogger("AnalyticsReportCron");
const analyticsService = new AnalyticsService();
let cronJob: cron.ScheduledTask | null = null;

export async function runWeeklyAnalyticsReport() {
  logger.info("Starting weekly analytics report aggregation...");
  
  const underperforming = await analyticsService.highlightUnderperformingItems();
  
  // Here you would typically send an email to admins or log to a specific audit table
  logger.info("Weekly Underperforming Content Report:", JSON.stringify(underperforming, null, 2));
  
  // Example: notifyAdmin(underperforming);
}

export function startAnalyticsReportCron(schedule = "0 0 * * 0"): void {
  if (cronJob) return;
  
  cronJob = cron.schedule(
    schedule,
    () => {
      withAdvisoryLock("learn-analytics-report", async () => {
        try {
          await runWeeklyAnalyticsReport();
        } catch (err) {
          logger.error("Weekly analytics report aggregation failed:", err);
        }
      }).catch((err) => {
        logger.error("Advisory lock for analytics report failed:", err);
      });
    },
    { timezone: "Etc/UTC" }
  );
  
  logger.info(`Analytics report cron scheduled: ${schedule}`);
}

export function stopAnalyticsReportCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    logger.info("Analytics report cron stopped");
  }
}
