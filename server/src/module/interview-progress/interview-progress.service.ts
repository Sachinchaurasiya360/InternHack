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
    const existingProgress =
      await prisma.userInterviewProgress.findUnique({
        where: {
          userId,
        },
      });

    const progress =
      existingProgress ??
      (await prisma.userInterviewProgress.create({
        data: {
          userId,
          completedIds: [],
          bookmarkedIds: [],
        },
      }));

    let completedIds = [...progress.completedIds];
    let bookmarkedIds = [...progress.bookmarkedIds];

    let lastVisitedId = progress.lastVisitedId;
    let lastVisitedAt = progress.lastVisitedAt;

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

    return prisma.userInterviewProgress.update({
      where: {
        userId,
      },
      data: {
        completedIds,
        bookmarkedIds,
        lastVisitedId,
        lastVisitedAt,
      },
    });
  }
}