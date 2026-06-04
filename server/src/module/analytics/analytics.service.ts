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
    // Aggregating lesson data
    const stats = await prisma.contentView.groupBy({
      by: ["contentId"],
      where: { contentType: "LESSON" },
      _avg: { timeSpentMs: true },
      _count: { _all: true, completed: true },
    });

    // Filtering completed counts manually if prisma doesn't support complex groupBy
    // Actually, we can just do another query or map.
    
    // For drop-off steps, we'd need to know the sequence of lessons.
    // This is a simplified version.
    return stats.map(s => ({
      lessonId: s.contentId,
      avgTimeSpent: s._avg.timeSpentMs,
      totalViews: s._count._all,
      completionRate: s._count._all > 0 ? (s._count.completed / s._count._all) * 100 : 0,
    }));
  }

  private async getDsaAnalytics() {
    const stats = await prisma.contentView.groupBy({
      by: ["contentId"],
      where: { contentType: "DSA" },
      _avg: { timeSpentMs: true },
      _count: { _all: true, completed: true },
    });

    return stats.map(s => ({
      problemId: s.contentId,
      attemptCount: s._count._all,
      solveRate: s._count._all > 0 ? (s._count.completed / s._count._all) * 100 : 0,
      avgTimeToSolve: s._avg.timeSpentMs,
    }));
  }

  private async getInterviewAnalytics() {
    const stats = await prisma.contentView.groupBy({
      by: ["contentId"],
      where: { contentType: "INTERVIEW_QUESTION" },
      _count: { _all: true, completed: true },
    });

    return stats.map(s => ({
      questionId: s.contentId,
      viewCount: s._count._all,
      completionRate: s._count._all > 0 ? (s._count.completed / s._count._all) * 100 : 0,
    }));
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
