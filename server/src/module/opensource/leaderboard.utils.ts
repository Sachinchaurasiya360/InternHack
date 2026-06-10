import { LeaderboardService } from "./leaderboard.service.js";

const leaderboardService = new LeaderboardService();

/**
 * Trigger a leaderboard score update for a user.
 * Call this after any activity that should affect leaderboard scores.
 *
 * This runs asynchronously and won't block the main request.
 */
export function triggerLeaderboardUpdate(userId: number): void {
  // Run async without blocking
  leaderboardService.updateUserScore(userId).catch((err) => {
    console.error(`[Leaderboard] Failed to update score for user ${userId}:`, err);
  });
}

/**
 * Trigger a leaderboard update after a delay (useful for batch operations)
 */
export function triggerLeaderboardUpdateDelayed(userId: number, delayMs: number = 5000): void {
  setTimeout(() => {
    triggerLeaderboardUpdate(userId);
  }, delayMs);
}
