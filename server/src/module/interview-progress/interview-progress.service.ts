import { prisma } from "../../database/db.js";

type ProgressAction =
  | "complete"
  | "uncomplete"
  | "bookmark"
  | "unbookmark"
  | "visit";

async function aggregateProgress(userId: number) {
  const [states, progress] = await Promise.all([
    prisma.userInterviewQuestionState.findMany({
      where: { userId },
      select: { questionId: true, isCompleted: true, isBookmarked: true },
    }),
    prisma.userInterviewProgress.findUnique({
      where: { userId },
      select: { lastVisitedId: true, lastVisitedAt: true },
    }),
  ]);

  return {
    completedIds: states.filter((s) => s.isCompleted).map((s) => s.questionId),
    bookmarkedIds: states.filter((s) => s.isBookmarked).map((s) => s.questionId),
    lastVisitedId: progress?.lastVisitedId ?? null,
    lastVisitedAt: progress?.lastVisitedAt ?? null,
  };
}

const EMPTY_PROGRESS = {
  completedIds: [] as string[],
  bookmarkedIds: [] as string[],
  lastVisitedId: null as string | null,
  lastVisitedAt: null as Date | null,
};

export class InterviewProgressService {
  async getProgress(userId: number) {
    const result = await aggregateProgress(userId);
    return result.completedIds.length === 0 && result.bookmarkedIds.length === 0 &&
      result.lastVisitedId === null
      ? EMPTY_PROGRESS
      : result;
  }

  async updateProgress(
    userId: number,
    questionId: string,
    action: ProgressAction
  ) {
    if (action === "complete" || action === "uncomplete") {
      await prisma.userInterviewQuestionState.upsert({
        where: { userId_questionId: { userId, questionId } },
        update: { isCompleted: action === "complete" },
        create: { userId, questionId, isCompleted: action === "complete" },
      });
    }

    if (action === "bookmark" || action === "unbookmark") {
      await prisma.userInterviewQuestionState.upsert({
        where: { userId_questionId: { userId, questionId } },
        update: { isBookmarked: action === "bookmark" },
        create: { userId, questionId, isBookmarked: action === "bookmark" },
      });
    }

    if (action === "visit") {
      await prisma.userInterviewProgress.upsert({
        where: { userId },
        update: { lastVisitedId: questionId, lastVisitedAt: new Date() },
        create: { userId, lastVisitedId: questionId, lastVisitedAt: new Date() },
      });
    }

    return aggregateProgress(userId);
  }
}
