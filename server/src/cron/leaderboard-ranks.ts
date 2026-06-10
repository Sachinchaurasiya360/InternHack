import cron from "node-cron";
import { prisma } from "../database/db.js";
import { withAdvisoryLock } from "../utils/cron-lock.js";
import { LeaderboardService } from "../module/opensource/leaderboard.service.js";

let cronJob: cron.ScheduledTask | null = null;
const leaderboardService = new LeaderboardService();

/**
 * Update global, weekly, and monthly ranks for all leaderboard entries
 */
async function updateLeaderboardRanks(): Promise<void> {
  console.log("[Leaderboard] Starting rank update...");
  const start = Date.now();

  try {
    // Update all scores first
    const updatedCount = await leaderboardService.updateAllActiveUsers();
    console.log(`[Leaderboard] Updated scores for ${updatedCount} users`);

    // Calculate global ranks (sorted by totalScore DESC)
    await updateGlobalRanks();

    // Calculate weekly ranks (sorted by weeklyScore DESC)
    await updateWeeklyRanks();

    // Calculate monthly ranks (sorted by monthlyScore DESC)
    await updateMonthlyRanks();

    // Calculate university ranks (grouped by college, sorted by totalScore DESC)
    await updateUniversityRanks();

    // Calculate domain ranks (grouped by domain, sorted by totalScore DESC)
    await updateDomainRanks();

    // Update lastRankUpdate timestamp
    await prisma.opensourceLeaderboard.updateMany({
      data: { lastRankUpdate: new Date() },
    });

    const duration = Date.now() - start;
    console.log(`[Leaderboard] Rank update complete in ${duration}ms`);
  } catch (err) {
    console.error("[Leaderboard] Rank update failed:", err);
    throw err;
  }
}

/**
 * Update global ranks (position 1, 2, 3, ...) based on totalScore DESC
 */
async function updateGlobalRanks(): Promise<void> {
  const entries = await prisma.opensourceLeaderboard.findMany({
    orderBy: { totalScore: "desc" },
    select: { id: true },
  });

  const updates = entries.map((entry, index) =>
    prisma.opensourceLeaderboard.update({
      where: { id: entry.id },
      data: { globalRank: index + 1 },
    }),
  );

  await Promise.all(updates);
  console.log(`[Leaderboard] Updated ${entries.length} global ranks`);
}

/**
 * Update weekly ranks based on weeklyScore DESC
 */
async function updateWeeklyRanks(): Promise<void> {
  const entries = await prisma.opensourceLeaderboard.findMany({
    orderBy: { weeklyScore: "desc" },
    select: { id: true },
  });

  const updates = entries.map((entry, index) =>
    prisma.opensourceLeaderboard.update({
      where: { id: entry.id },
      data: { weeklyRank: index + 1 },
    }),
  );

  await Promise.all(updates);
  console.log(`[Leaderboard] Updated ${entries.length} weekly ranks`);
}

/**
 * Update monthly ranks based on monthlyScore DESC
 */
async function updateMonthlyRanks(): Promise<void> {
  const entries = await prisma.opensourceLeaderboard.findMany({
    orderBy: { monthlyScore: "desc" },
    select: { id: true },
  });

  const updates = entries.map((entry, index) =>
    prisma.opensourceLeaderboard.update({
      where: { id: entry.id },
      data: { monthlyRank: index + 1 },
    }),
  );

  await Promise.all(updates);
  console.log(`[Leaderboard] Updated ${entries.length} monthly ranks`);
}

/**
 * Update university ranks (per-college leaderboard)
 * Each user gets their rank within their university
 */
async function updateUniversityRanks(): Promise<void> {
  // Get all leaderboard entries with user college info
  const entries = await prisma.opensourceLeaderboard.findMany({
    include: {
      user: {
        select: { id: true, college: true },
      },
    },
    orderBy: { totalScore: "desc" },
  });

  // Group by college
  const byCollege = new Map<string, Array<{ id: number; userId: number }>>();
  for (const entry of entries) {
    const college = entry.user.college || "Unknown";
    if (!byCollege.has(college)) {
      byCollege.set(college, []);
    }
    byCollege.get(college)!.push({ id: entry.id, userId: entry.user.id });
  }

  // Calculate ranks per college
  const updates: Promise<any>[] = [];
  for (const [college, users] of byCollege) {
    for (let i = 0; i < users.length; i++) {
      updates.push(
        prisma.opensourceLeaderboard.update({
          where: { id: users[i].id },
          data: { universityRank: i + 1 },
        }),
      );
    }
  }

  await Promise.all(updates);
  console.log(`[Leaderboard] Updated university ranks for ${byCollege.size} colleges`);
}

/**
 * Update domain ranks (per-domain leaderboard based on repo contributions)
 * Stores as JSON: { "WEB": 5, "AI": 12, "MOBILE": 3 }
 */
async function updateDomainRanks(): Promise<void> {
  // Get all leaderboard entries with repo request data
  const entries = await prisma.opensourceLeaderboard.findMany({
    include: {
      user: {
        select: {
          id: true,
          repoRequests: {
            where: { status: "APPROVED" },
            select: { domain: true },
          },
        },
      },
    },
    orderBy: { totalScore: "desc" },
  });

  // Group users by domain participation
  const byDomain = new Map<string, Array<{ id: number; totalScore: number }>>();

  for (const entry of entries) {
    // Get unique domains this user has contributed to
    const userDomains = new Set(entry.user.repoRequests.map((r) => r.domain));

    for (const domain of userDomains) {
      if (!byDomain.has(domain)) {
        byDomain.set(domain, []);
      }
      byDomain.get(domain)!.push({ id: entry.id, totalScore: entry.totalScore });
    }
  }

  // Calculate ranks per domain and build JSON object for each user
  const domainRanksByUser = new Map<number, Record<string, number>>();

  for (const [domain, users] of byDomain) {
    // Sort by total score DESC
    users.sort((a, b) => b.totalScore - a.totalScore);

    for (let i = 0; i < users.length; i++) {
      const leaderboardId = users[i].id;
      if (!domainRanksByUser.has(leaderboardId)) {
        domainRanksByUser.set(leaderboardId, {});
      }
      domainRanksByUser.get(leaderboardId)![domain] = i + 1;
    }
  }

  // Update all entries with their domain ranks
  const updates = Array.from(domainRanksByUser.entries()).map(([id, ranks]) =>
    prisma.opensourceLeaderboard.update({
      where: { id },
      data: { domainRank: ranks },
    }),
  );

  await Promise.all(updates);
  console.log(`[Leaderboard] Updated domain ranks for ${byDomain.size} domains`);
}

/**
 * Start the leaderboard rank update cron
 * Default: Every day at 2 AM UTC (after subscription expiry at midnight)
 */
export function startLeaderboardRanksCron(schedule = "0 2 * * *"): void {
  if (cronJob) return;

  cronJob = cron.schedule(
    schedule,
    () => {
      void withAdvisoryLock("leaderboard-ranks", async () => {
        try {
          await updateLeaderboardRanks();
        } catch (err) {
          console.error("[Leaderboard] Rank update failed:", err);
        }
      });
    },
    { timezone: "Etc/UTC" },
  );

  console.log(`[Leaderboard] Rank update cron scheduled with: "${schedule}"`);
}

/**
 * Stop the leaderboard rank update cron (used during graceful shutdown)
 */
export function stopLeaderboardRanksCron(): void {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    console.log("[Leaderboard] Rank update cron stopped");
  }
}

/**
 * Manual trigger for rank updates (useful for testing or admin actions)
 */
export async function triggerManualRankUpdate(): Promise<void> {
  await withAdvisoryLock("leaderboard-ranks-manual", async () => {
    await updateLeaderboardRanks();
  });
}
