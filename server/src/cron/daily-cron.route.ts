import { Router, type Request, type Response } from "express";
import { runJobCleanup } from "./job-cleanup.cron.js";
import { runDeadlineAlerts } from "./deadline-alerts.cron.js";
import { runGrantDeadlineAlerts } from "./grant-deadline-alerts.cron.js";
import { runOpensourceRepoStatsRefresh } from "./opensource-repo-stats.cron.js";
import { runAiPipelineDaily } from "./internhack-ai.cron.js";
import { sendWeeklyRoadmapDigests } from "./roadmap-weekly-digest.js";
import { drainScheduledEmails } from "./scheduled-email-worker.js";
import { runFollowUpEmails } from "./scheduled-emails.js";
import { runSignalsCleanup } from "./signals-cleanup.js";
import { runSubscriptionExpiry } from "./subscription-expiry.js";
import { runPeerMockInterviewReminders } from "./peer-mock-interview-reminders.cron.js";
import { scraperController } from "../module/scraper/scraper.routes.js";
import { signalsController } from "../module/signals/signals.routes.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";
import { createLogger } from "../utils/logger.js";

const logger = createLogger("DailyCron");

/**
 * Consolidated cron endpoints for Vercel.
 *
 * Vercel runs request-scoped functions, so node-cron/setInterval never fire.
 * Vercel Cron instead hits these endpoints (see vercel.json) with
 * `Authorization: Bearer $CRON_SECRET`.
 *
 * The jobs are split into two daily groups so neither group risks the Vercel
 * function duration cap (~60s Hobby / ~300s Pro):
 *   - `/api/cron/daily`    fast jobs: bulk-SQL cleanups and fire-and-forget mail.
 *   - `/api/cron/pipeline` slow jobs: scraping, AI enrich/embed/match, and the
 *                          per-user email loops (github sync, weekly digest).
 *
 * Within a group, jobs run sequentially, each under its named advisory lock
 * (so it stays mutually exclusive with the EC2 node-cron path during cutover)
 * and its own try/catch (so one failure does not abort the rest). A soft time
 * budget stops launching new jobs as the function approaches its hard cap, so
 * the run degrades gracefully (remaining jobs are reported "skipped") instead
 * of being killed mid-job. Anything skipped runs on the next day's trigger.
 *
 * Weekly jobs (roadmap digest, signals cleanup) keep their cadence by checking
 * the UTC weekday inside the daily run.
 */
interface CronJob {
  name: string;
  /** Advisory-lock key (must match the key used by the job's node-cron path). */
  lockKey: string;
  /** When set, only run on this UTC weekday (0 = Sunday, 1 = Monday). */
  onlyOnUtcDay?: number;
  run: () => Promise<unknown>;
}

// Fast: single bulk-SQL statements or fire-and-forget mail sends.
const LIGHT_JOBS: CronJob[] = [
  { name: "subscription-expiry", lockKey: "subscription-expiry", run: runSubscriptionExpiry },
  { name: "job-cleanup", lockKey: "job-cleanup", run: runJobCleanup },
  { name: "deadline-alerts", lockKey: "deadline-alerts", run: runDeadlineAlerts },
  { name: "grant-deadline-alerts", lockKey: "grant-deadline-alerts", run: runGrantDeadlineAlerts },
  { name: "peer-mock-interview-reminders", lockKey: "peer-mock-interview-reminders", run: runPeerMockInterviewReminders },
  { name: "follow-up-emails", lockKey: "scheduled-emails-followup", run: runFollowUpEmails },
  { name: "scheduled-email-worker", lockKey: "scheduled-email-worker", run: drainScheduledEmails },
  // Weekly: signals cleanup ran Sundays.
  { name: "signals-cleanup", lockKey: "signals-cleanup", onlyOnUtcDay: 0, run: runSignalsCleanup },
];

// Slow: network-bound scraping, AI embed/match passes, and per-user email loops.
const HEAVY_JOBS: CronJob[] = [
  { name: "scraper", lockKey: "external-job-scraper", run: () => scraperController.getService().runOnce() },
  { name: "signals", lockKey: "signals-ingestion", run: () => signalsController.getService().runOnce() },
  { name: "ai-pipeline", lockKey: "internhack-ai-daily", run: runAiPipelineDaily },
  { name: "opensource-repo-stats", lockKey: "opensource-repo-stats-refresh", run: runOpensourceRepoStatsRefresh },
  // Weekly: roadmap progress digest ran Mondays.
  { name: "roadmap-weekly-digest", lockKey: "roadmap-weekly-digest", onlyOnUtcDay: 1, run: sendWeeklyRoadmapDigests },
];

// Stop launching new jobs once this much wall-clock has elapsed, leaving headroom
// under the Vercel hard cap (maxDuration in vercel.json). Bump this and maxDuration
// together when moving to Pro.
const SOFT_BUDGET_MS = Number(process.env["CRON_SOFT_BUDGET_MS"] ?? 55_000);

type JobStatus = "ok" | "error" | "skipped";

interface JobResult {
  name: string;
  status: JobStatus;
  ms: number;
  reason?: string;
  error?: string;
}

async function runOneJob(job: CronJob): Promise<JobResult> {
  const start = Date.now();
  let error: string | undefined;

  // withAdvisoryLock swallows errors internally (logs them), so capture the
  // failure in a closure variable to surface it in the per-job status.
  await withAdvisoryLock(job.lockKey, async () => {
    try {
      await job.run();
    } catch (err) {
      error = err instanceof Error ? err.message : String(err);
      throw err;
    }
  });

  return {
    name: job.name,
    status: error ? "error" : "ok",
    ms: Date.now() - start,
    ...(error ? { error } : {}),
  };
}

async function runGroup(
  jobs: CronJob[],
  utcDay: number,
  opts: { only?: Set<string> } = {},
): Promise<JobResult[]> {
  const groupStart = Date.now();
  const results: JobResult[] = [];
  // An explicit ?jobs= list is an operator override: run exactly those, in
  // order, ignoring the day-of-week gate (but still honoring the time budget).
  const selected = opts.only ? jobs.filter((j) => opts.only?.has(j.name)) : jobs;

  for (const job of selected) {
    if (!opts.only && job.onlyOnUtcDay !== undefined && job.onlyOnUtcDay !== utcDay) {
      results.push({ name: job.name, status: "skipped", ms: 0, reason: "not scheduled today" });
      continue;
    }

    if (Date.now() - groupStart > SOFT_BUDGET_MS) {
      results.push({ name: job.name, status: "skipped", ms: 0, reason: "time budget exhausted" });
      logger.warn(`Skipping "${job.name}": time budget exhausted, will retry next trigger`);
      continue;
    }

    const result = await runOneJob(job);
    results.push(result);
    if (result.status === "error") {
      logger.error(`Job "${job.name}" failed after ${result.ms}ms: ${result.error}`);
    } else {
      logger.info(`Job "${job.name}" ${result.status} in ${result.ms}ms`);
    }
  }

  return results;
}

function makeCronHandler(label: string, jobs: CronJob[]) {
  return async (req: Request, res: Response): Promise<void> => {
    const secret = process.env["CRON_SECRET"];
    if (!secret) {
      logger.error(`CRON_SECRET is not set; refusing to run the ${label} cron.`);
      res.status(500).json({ message: "CRON_SECRET not configured" });
      return;
    }

    if (req.headers.authorization !== `Bearer ${secret}`) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const startedAt = new Date();
    const utcDay = startedAt.getUTCDay();
    const onlyParam = req.query["jobs"];
    const only =
      typeof onlyParam === "string" && onlyParam.trim()
        ? new Set(onlyParam.split(",").map((s) => s.trim()).filter(Boolean))
        : undefined;
    logger.info(`Cron "${label}" started (UTC day ${utcDay}${only ? `, jobs=${[...only].join(",")}` : ""})`);

    const jobResults = await runGroup(jobs, utcDay, { only });

    const failed = jobResults.filter((r) => r.status === "error").length;
    res.status(failed > 0 ? 207 : 200).json({
      group: label,
      startedAt: startedAt.toISOString(),
      durationMs: Date.now() - startedAt.getTime(),
      failed,
      jobs: jobResults,
    });
  };
}

export const cronRouter = Router();
cronRouter.get("/daily", (req, res) => {
  void makeCronHandler("daily", LIGHT_JOBS)(req, res);
});
cronRouter.get("/pipeline", (req, res) => {
  void makeCronHandler("pipeline", HEAVY_JOBS)(req, res);
});
