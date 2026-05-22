import { prisma } from "../../database/db.js";

type ProgressAction =
  | "complete"
  | "uncomplete"
  | "bookmark"
  | "unbookmark"
  | "visit";

export class InterviewProgressService {
  async getProgress(userId: number) {
    const progress = await prisma.userInterviewProgress.findUnique({
      where: {
        userId,
      },
    });

    if (!progress) {
      return {
        completedIds: [],
        bookmarkedIds: [],
        lastVisitedId: null,
        lastVisitedAt: null,
      };
    }

    return {
      completedIds: progress.completedIds,
      bookmarkedIds: progress.bookmarkedIds,
      lastVisitedId: progress.lastVisitedId,
      lastVisitedAt: progress.lastVisitedAt,
    };
  }

  async updateProgress(
    userId: number,
    questionId: string,
    action: ProgressAction
  ) {
    // Read current state; default to empty arrays if no row exists yet
    const existing = await prisma.userInterviewProgress.findUnique({
      where: { userId },
    });

    let completedIds = [...(existing?.completedIds ?? [])];
    let bookmarkedIds = [...(existing?.bookmarkedIds ?? [])];
    let lastVisitedId = existing?.lastVisitedId ?? null;
    let lastVisitedAt = existing?.lastVisitedAt ?? null;

    if (action === "complete") {
      completedIds = [...new Set([...completedIds, questionId])];
    }

    if (action === "uncomplete") {
      completedIds = completedIds.filter(
        (id) => id !== questionId
      );
    }

    if (action === "bookmark") {
      bookmarkedIds = [...new Set([...bookmarkedIds, questionId])];
    }

    if (action === "unbookmark") {
      bookmarkedIds = bookmarkedIds.filter(
        (id) => id !== questionId
      );
    }

    if (action === "visit") {
      lastVisitedId = questionId;
      lastVisitedAt = new Date();
    }

    // Single atomic upsert — safe under concurrent requests
    return prisma.userInterviewProgress.upsert({
      where: { userId },
      create: {
        userId,
        completedIds,
        bookmarkedIds,
        lastVisitedId,
        lastVisitedAt,
      },
      update: {
        completedIds,
        bookmarkedIds,
        lastVisitedId,
        lastVisitedAt,
      },
    });
  }
}