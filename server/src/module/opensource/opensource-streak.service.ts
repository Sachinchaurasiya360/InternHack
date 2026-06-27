import { prisma } from "../../database/db.js";
import { BadgeService } from "../badge/badge.service.js";

const badgeService = new BadgeService();

export class OpensourceStreakService {
  async getStreak(userId: number) {
    const existing = await prisma.opensourceStreak.findUnique({ where: { userId } });
    if (existing) return existing;
    return prisma.opensourceStreak.create({ data: { userId } });
  }

  async tickStreak(userId: number, action: "guide_step" | "repo_suggestion" | "pr_merged") {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const todayEnd = new Date(todayStart.getTime() + 86400000);

    let actionVerified = false;

    if (action === "guide_step") {
      const recentGuideProgress = await prisma.guideProgress.findFirst({
        where: {
          userId,
          createdAt: { gte: todayStart, lt: todayEnd },
        },
      });
      actionVerified = !!recentGuideProgress;
    } else if (action === "repo_suggestion") {
      const recentSuggestion = await prisma.repoRequest.findFirst({
        where: {
          userId,
          createdAt: { gte: todayStart, lt: todayEnd },
        },
      });
      actionVerified = !!recentSuggestion;
    } else if (action === "pr_merged") {
      const recentPr = await prisma.githubPullRequest.findFirst({
        where: {
          connection: { userId },
          mergedAt: { gte: todayStart, lt: todayEnd },
        },
      });
      actionVerified = !!recentPr;
    }

    if (!actionVerified) {
      throw new Error(`No verified ${action.replace("_", " ")} activity found today. Complete the activity before updating your streak.`);
    }

    const existing = await prisma.opensourceStreak.findUnique({ where: { userId } });
    const streak = existing ?? await prisma.opensourceStreak.create({ data: { userId } });

    const lastActivity = streak?.lastActivityAt;

    let newCurrentStreak = streak?.currentStreak ?? 0;
    let newLongestStreak = streak?.longestStreak ?? 0;
    let newTotalDays = streak?.totalDays ?? 0;

    if (lastActivity) {
      const hoursSinceLastActivity = (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60);

      if (hoursSinceLastActivity >= 48) {
        newCurrentStreak = 0;
      }
    }

    const todayLastActivity = lastActivity && lastActivity >= todayStart && lastActivity < todayEnd;

    if (!todayLastActivity) {
      newCurrentStreak += 1;
      newTotalDays += 1;
      if (newCurrentStreak > newLongestStreak) {
        newLongestStreak = newCurrentStreak;
      }
    }

    const updated = await prisma.opensourceStreak.upsert({
      where: { userId },
      create: {
        userId,
        currentStreak: 1,
        longestStreak: 1,
        totalDays: 1,
        lastActivityAt: now,
      },
      update: {
        currentStreak: newCurrentStreak,
        longestStreak: newLongestStreak,
        totalDays: newTotalDays,
        lastActivityAt: now,
      },
    });

    if (!todayLastActivity) {
      badgeService.checkAndAwardBadges(userId, "oss_streak", {
        streak: newCurrentStreak,
      }).catch((err) => console.error("Badge check failed (oss_streak):", err));
    }

    return updated;
  }
}
