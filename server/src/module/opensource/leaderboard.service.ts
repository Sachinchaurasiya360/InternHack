import { prisma } from "../../database/db.js";

// ─── Score Weights ─────────────────────────────────────────────────

const SCORE_WEIGHTS = {
  guideCompleted: 10, // Complete a guide step
  repoSuggestedApproved: 30, // Repo suggestion approved (3x base)
  repoSuggestedPending: 10, // Repo suggestion pending (1x base)
  githubPRMerged: 50, // GitHub PR merged (5x base)
  streakDay: 5, // Each day of current streak
  certificateEarned: 100, // Certificate earned
} as const;

// ─── Types ─────────────────────────────────────────────────────────

interface ScoreUpdate {
  totalScore: number;
  weeklyScore: number;
  monthlyScore: number;
  guidesCompleted: number;
  reposSuggestedApproved: number;
  reposSuggestedPending: number;
  githubPRsMerged: number;
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: Date | null;
  certificatesEarned: number;
}

interface ActivityData {
  guidesCompleted: number;
  reposSuggestedApproved: number;
  reposSuggestedPending: number;
  githubPRsMerged: number;
  certificatesEarned: number;
  lastActivityDate: Date | null;
}

// ─── Leaderboard Service ───────────────────────────────────────────

export class LeaderboardService {
  /**
   * Calculate and update leaderboard scores for a single user
   */
  async updateUserScore(userId: number): Promise<ScoreUpdate> {
    // Fetch user activity data
    const activityData = await this.fetchUserActivityData(userId);

    // Calculate streak
    const streakData = await this.calculateStreak(userId);

    // Calculate scores
    const totalScore = this.calculateTotalScore(activityData, streakData);
    const weeklyScore = await this.calculateWeeklyScore(userId, activityData);
    const monthlyScore = await this.calculateMonthlyScore(userId, activityData);

    // Prepare update data
    const updateData: ScoreUpdate = {
      totalScore,
      weeklyScore,
      monthlyScore,
      guidesCompleted: activityData.guidesCompleted,
      reposSuggestedApproved: activityData.reposSuggestedApproved,
      reposSuggestedPending: activityData.reposSuggestedPending,
      githubPRsMerged: activityData.githubPRsMerged,
      currentStreak: streakData.currentStreak,
      longestStreak: streakData.longestStreak,
      lastActivityDate: activityData.lastActivityDate,
      certificatesEarned: activityData.certificatesEarned,
    };

    // Upsert leaderboard entry
    await prisma.opensourceLeaderboard.upsert({
      where: { userId },
      create: {
        userId,
        ...updateData,
        lastScoreUpdate: new Date(),
      },
      update: {
        ...updateData,
        lastScoreUpdate: new Date(),
      },
    });

    return updateData;
  }

  /**
   * Fetch all activity data for a user from various tables
   */
  private async fetchUserActivityData(userId: number): Promise<ActivityData> {
    // Fetch guide completion count (from userInterviewProgress + firstPrProgress)
    const [interviewProgress, firstPrProgress, repoRequests, user] = await Promise.all([
      prisma.userInterviewProgress.findUnique({
        where: { userId },
        select: { completedIds: true },
      }),
      prisma.studentFirstPrProgress.findUnique({
        where: { userId },
        select: { completedStepIds: true },
      }),
      prisma.repoRequest.findMany({
        where: { userId },
        select: { status: true, createdAt: true },
        orderBy: { createdAt: "desc" },
      }),
      prisma.user.findUnique({
        where: { id: userId },
        select: { githubUrl: true },
      }),
    ]);

    // Count guides completed
    const guidesCompleted =
      (interviewProgress?.completedIds.length ?? 0) + (firstPrProgress?.completedStepIds.length ?? 0);

    // Count repo suggestions
    const reposSuggestedApproved = repoRequests.filter((r) => r.status === "APPROVED").length;
    const reposSuggestedPending = repoRequests.filter((r) => r.status === "PENDING").length;

    // Get last activity date from repo requests
    const lastActivityDate = repoRequests.length > 0 ? repoRequests[0].createdAt : null;

    // TODO: Fetch actual GitHub PR merged count from GitHub API
    // For now, we'll return 0 and implement GitHub integration later
    const githubPRsMerged = 0;

    // TODO: Fetch certificate count from badges or achievements
    // For now, we'll calculate from student badges
    const certificatesEarned = await prisma.studentBadge.count({
      where: { studentId: userId },
    });

    return {
      guidesCompleted,
      reposSuggestedApproved,
      reposSuggestedPending,
      githubPRsMerged,
      certificatesEarned,
      lastActivityDate,
    };
  }

  /**
   * Calculate total score based on all-time activity
   */
  private calculateTotalScore(
    activityData: ActivityData,
    streakData: { currentStreak: number; longestStreak: number },
  ): number {
    return (
      activityData.guidesCompleted * SCORE_WEIGHTS.guideCompleted +
      activityData.reposSuggestedApproved * SCORE_WEIGHTS.repoSuggestedApproved +
      activityData.reposSuggestedPending * SCORE_WEIGHTS.repoSuggestedPending +
      activityData.githubPRsMerged * SCORE_WEIGHTS.githubPRMerged +
      streakData.currentStreak * SCORE_WEIGHTS.streakDay +
      activityData.certificatesEarned * SCORE_WEIGHTS.certificateEarned
    );
  }

  /**
   * Calculate weekly score (last 7 days)
   */
  private async calculateWeeklyScore(userId: number, activityData: ActivityData): Promise<number> {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    // Count activities from the last 7 days
    const [interviewProgress, firstPrProgress, recentRepoRequests] = await Promise.all([
      prisma.userInterviewProgress.findUnique({
        where: { userId },
        select: { updatedAt: true, completedIds: true },
      }),
      prisma.studentFirstPrProgress.findUnique({
        where: { userId },
        select: { updatedAt: true, completedStepIds: true },
      }),
      prisma.repoRequest.findMany({
        where: {
          userId,
          createdAt: { gte: oneWeekAgo },
        },
        select: { status: true },
      }),
    ]);

    // Approximation: If progress was updated in the last 7 days, count some guides
    // This is a simplified approach; a better solution would track each guide completion date
    const recentGuidesCompleted =
      interviewProgress && interviewProgress.updatedAt >= oneWeekAgo
        ? Math.min(interviewProgress.completedIds.length, 10)
        : 0;

    const recentReposApproved = recentRepoRequests.filter((r) => r.status === "APPROVED").length;
    const recentReposPending = recentRepoRequests.filter((r) => r.status === "PENDING").length;

    // Weekly streak contribution (current streak if active)
    const streakData = await this.calculateStreak(userId);
    const weeklyStreakBonus = streakData.currentStreak > 0 ? Math.min(streakData.currentStreak, 7) : 0;

    return (
      recentGuidesCompleted * SCORE_WEIGHTS.guideCompleted +
      recentReposApproved * SCORE_WEIGHTS.repoSuggestedApproved +
      recentReposPending * SCORE_WEIGHTS.repoSuggestedPending +
      weeklyStreakBonus * SCORE_WEIGHTS.streakDay
      // GitHub PRs and certificates not included in weekly score for simplicity
    );
  }

  /**
   * Calculate monthly score (last 30 days)
   */
  private async calculateMonthlyScore(userId: number, activityData: ActivityData): Promise<number> {
    const oneMonthAgo = new Date();
    oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);

    const [interviewProgress, firstPrProgress, recentRepoRequests, recentBadges] = await Promise.all([
      prisma.userInterviewProgress.findUnique({
        where: { userId },
        select: { updatedAt: true, completedIds: true },
      }),
      prisma.studentFirstPrProgress.findUnique({
        where: { userId },
        select: { updatedAt: true, completedStepIds: true },
      }),
      prisma.repoRequest.findMany({
        where: {
          userId,
          createdAt: { gte: oneMonthAgo },
        },
        select: { status: true },
      }),
      prisma.studentBadge.count({
        where: {
          studentId: userId,
          earnedAt: { gte: oneMonthAgo },
        },
      }),
    ]);

    // Approximation for monthly guides
    const recentGuidesCompleted =
      interviewProgress && interviewProgress.updatedAt >= oneMonthAgo
        ? Math.min(interviewProgress.completedIds.length, 30)
        : 0;

    const recentReposApproved = recentRepoRequests.filter((r) => r.status === "APPROVED").length;
    const recentReposPending = recentRepoRequests.filter((r) => r.status === "PENDING").length;

    // Monthly streak contribution
    const streakData = await this.calculateStreak(userId);
    const monthlyStreakBonus = streakData.currentStreak > 0 ? Math.min(streakData.currentStreak, 30) : 0;

    return (
      recentGuidesCompleted * SCORE_WEIGHTS.guideCompleted +
      recentReposApproved * SCORE_WEIGHTS.repoSuggestedApproved +
      recentReposPending * SCORE_WEIGHTS.repoSuggestedPending +
      monthlyStreakBonus * SCORE_WEIGHTS.streakDay +
      recentBadges * SCORE_WEIGHTS.certificateEarned
    );
  }

  /**
   * Calculate current and longest streak for a user
   * A streak day is any day with at least one activity (guide completion, repo request, etc.)
   */
  private async calculateStreak(
    userId: number,
  ): Promise<{ currentStreak: number; longestStreak: number }> {
    // Fetch all activity dates from repo requests
    const repoRequests = await prisma.repoRequest.findMany({
      where: { userId },
      select: { createdAt: true },
      orderBy: { createdAt: "desc" },
    });

    // Extract unique dates (YYYY-MM-DD)
    const activityDates = new Set<string>();
    for (const req of repoRequests) {
      const dateStr = req.createdAt.toISOString().split("T")[0];
      activityDates.add(dateStr);
    }

    // Sort dates descending
    const sortedDates = Array.from(activityDates).sort().reverse();

    if (sortedDates.length === 0) {
      return { currentStreak: 0, longestStreak: 0 };
    }

    // Calculate current streak
    let currentStreak = 0;
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    // Check if streak is active (activity today or yesterday)
    if (sortedDates[0] === today || sortedDates[0] === yesterday) {
      currentStreak = 1;
      let lastDate = new Date(sortedDates[0]);

      for (let i = 1; i < sortedDates.length; i++) {
        const currentDate = new Date(sortedDates[i]);
        const diffDays = Math.floor((lastDate.getTime() - currentDate.getTime()) / (24 * 60 * 60 * 1000));

        if (diffDays === 1) {
          currentStreak++;
          lastDate = currentDate;
        } else {
          break;
        }
      }
    }

    // Calculate longest streak
    let longestStreak = 1;
    let tempStreak = 1;
    let lastDate = new Date(sortedDates[0]);

    for (let i = 1; i < sortedDates.length; i++) {
      const currentDate = new Date(sortedDates[i]);
      const diffDays = Math.floor((lastDate.getTime() - currentDate.getTime()) / (24 * 60 * 60 * 1000));

      if (diffDays === 1) {
        tempStreak++;
        longestStreak = Math.max(longestStreak, tempStreak);
      } else {
        tempStreak = 1;
      }
      lastDate = currentDate;
    }

    return { currentStreak, longestStreak };
  }

  /**
   * Bulk update scores for multiple users (used by scheduled jobs).
   * Runs sequentially to stay within the DB connection pool budget.
   */
  async bulkUpdateScores(userIds: number[]): Promise<void> {
    for (const userId of userIds) {
      await this.updateUserScore(userId);
    }
  }

  /**
   * Update scores for all users who have any activity
   */
  async updateAllActiveUsers(): Promise<number> {
    // Find all users with repo requests or progress records
    const [usersWithRepoRequests, usersWithInterviewProgress, usersWithFirstPrProgress] = await Promise.all([
      prisma.repoRequest.findMany({
        select: { userId: true },
        distinct: ["userId"],
      }),
      prisma.userInterviewProgress.findMany({
        select: { userId: true },
      }),
      prisma.studentFirstPrProgress.findMany({
        select: { userId: true },
      }),
    ]);

    // Combine and deduplicate user IDs
    const userIdSet = new Set<number>();
    usersWithRepoRequests.forEach((u) => userIdSet.add(u.userId));
    usersWithInterviewProgress.forEach((u) => userIdSet.add(u.userId));
    usersWithFirstPrProgress.forEach((u) => userIdSet.add(u.userId));

    const userIds = Array.from(userIdSet);

    // Update in batches of 50
    const batchSize = 50;
    for (let i = 0; i < userIds.length; i += batchSize) {
      const batch = userIds.slice(i, i + batchSize);
      await this.bulkUpdateScores(batch);
    }

    return userIds.length;
  }
}
