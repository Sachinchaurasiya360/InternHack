import cron from "node-cron";
import { withAdvisoryLock } from "../utils/cron-lock.js";
import { PeerMockInterviewService } from "../module/peer-mock-interview/peer-mock-interview.service.js";

let cronJob: cron.ScheduledTask | null = null;
const service = new PeerMockInterviewService();

export async function runPeerMockInterviewMatching(): Promise<void> {
  console.log("[PeerMockInterviewMatch] Running matching job...");
  try {
    const matches = await service.runMatchingJob();
    console.log(`[PeerMockInterviewMatch] Created ${matches.length} matches.`);
  } catch (err) {
    console.error("[PeerMockInterviewMatch] Match job failed:", err);
    throw err;
  }
}

export function startPeerMockInterviewMatchCron(schedule = "0 0 * * 0"): void {
  if (cronJob) return;
  cronJob = cron.schedule(
    schedule,
    () => {
      void withAdvisoryLock("peer-mock-interview-match", async () => {
        await runPeerMockInterviewMatching();
      });
    },
    { timezone: "Etc/UTC" }
  );
  console.log(`[PeerMockInterviewMatch] Scheduled weekly match job at "${schedule}"`);
}

export function stopPeerMockInterviewMatchCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    console.log("[PeerMockInterviewMatch] Cron stopped");
  }
}
