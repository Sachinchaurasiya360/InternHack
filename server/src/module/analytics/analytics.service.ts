import { prisma } from "../../database/db.js";
import { ContentType } from "@prisma/client";

export class AnalyticsService {
  async trackContentView(data: {
    userId?: number;
    contentType: ContentType;
    contentId: string;
    timeSpentMs: number;
    completed: boolean;
  }) {
    return prisma.contentView.create({
      data: {
        userId: data.userId ?? null,
        contentType: data.contentType,
        contentId: data.contentId,
        timeSpentMs: data.timeSpentMs,
        completed: data.completed,
      },
    });
  }

  async getLearnAnalytics() {
    const [lessonStats, dsaStats, interviewStats] = await Promise.all([
      this.getLessonAnalytics(),
      this.getDsaAnalytics(),
      this.getInterviewAnalytics(),
    ]);

    return {
      lessons: lessonStats,
      dsa: dsaStats,
      interviewQuestions: interviewStats,
    };
  }

  private async getLessonAnalytics() {
    const [totalStats, completedStats] = await Promise.all([
      prisma.contentView.groupBy({
        by: ["contentId"],
        where: { contentType: ContentType.LESSON },
        _avg: { timeSpentMs: true },
        _count: { _all: true },
      }),
      prisma.contentView.groupBy({
        by: ["contentId"],
        where: { contentType: ContentType.LESSON, completed: true },
        _count: { _all: true },
      }),
    ]);

    const completedMap = new Map(completedStats.map((s) => [s.contentId, s._count._all]));

    return totalStats.map((s) => {
      const completedCount = completedMap.get(s.contentId) || 0;
      return {
        lessonId: s.contentId,
        avgTimeSpent: s._avg.timeSpentMs ?? 0,
        totalViews: s._count._all,
        completionRate: s._count._all > 0 ? (completedCount / s._count._all) * 100 : 0,
      };
    });
  }

  private async getDsaAnalytics() {
    const [totalStats, completedStats] = await Promise.all([
      prisma.contentView.groupBy({
        by: ["contentId"],
        where: { contentType: ContentType.DSA },
        _avg: { timeSpentMs: true },
        _count: { _all: true },
      }),
      prisma.contentView.groupBy({
        by: ["contentId"],
        where: { contentType: ContentType.DSA, completed: true },
        _count: { _all: true },
      }),
    ]);

    const completedMap = new Map(completedStats.map((s) => [s.contentId, s._count._all]));

    return totalStats.map((s) => {
      const completedCount = completedMap.get(s.contentId) || 0;
      return {
        problemId: s.contentId,
        attemptCount: s._count._all,
        solveRate: s._count._all > 0 ? (completedCount / s._count._all) * 100 : 0,
        avgTimeToSolve: s._avg.timeSpentMs ?? 0,
      };
    });
  }

  private async getInterviewAnalytics() {
    const [totalStats, completedStats] = await Promise.all([
      prisma.contentView.groupBy({
        by: ["contentId"],
        where: { contentType: ContentType.INTERVIEW_QUESTION },
        _count: { _all: true },
      }),
      prisma.contentView.groupBy({
        by: ["contentId"],
        where: { contentType: ContentType.INTERVIEW_QUESTION, completed: true },
        _count: { _all: true },
      }),
    ]);

    const completedMap = new Map(completedStats.map((s) => [s.contentId, s._count._all]));

    return totalStats.map((s) => {
      const completedCount = completedMap.get(s.contentId) || 0;
      return {
        questionId: s.contentId,
        viewCount: s._count._all,
        completionRate: s._count._all > 0 ? (completedCount / s._count._all) * 100 : 0,
      };
    });
  }

  async highlightUnderperformingItems() {
    // Stub for weekly report
    // Example: Find bottom 5 lessons by completion rate
    // This would be called by a cron job
    const analytics = await this.getLearnAnalytics();
    
    const underperformingLessons = analytics.lessons
      .filter(l => l.totalViews > 10) // Minimum sample size
      .sort((a, b) => a.completionRate - b.completionRate)
      .slice(0, 5);

    const underperformingDsa = analytics.dsa
      .filter(p => p.attemptCount > 10)
      .sort((a, b) => a.solveRate - b.solveRate)
      .slice(0, 5);

    return {
      underperformingLessons,
      underperformingDsa,
    };
  }
}
