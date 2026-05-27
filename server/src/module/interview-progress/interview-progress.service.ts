import { Prisma } from "@prisma/client";
import { prisma } from "../../database/db.js";

type ProgressAction =
  | "complete"
  | "uncomplete"
  | "bookmark"
  | "unbookmark"
  | "visit";

export class InterviewProgressService {
  private serializeProgress(progress: {
    completedIds: string[];
    bookmarkedIds: string[];
    lastVisitedId: string | null;
    lastVisitedAt: Date | null;
  }) {
    return {
      completedIds: progress.completedIds,
      bookmarkedIds: progress.bookmarkedIds,
      lastVisitedId: progress.lastVisitedId,
      lastVisitedAt: progress.lastVisitedAt,
    };
  }

  private async runSerializable<T>(
    operation: (tx: Prisma.TransactionClient) => Promise<T>
  ): Promise<T> {
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      try {
        return await prisma.$transaction(operation, {
          isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
        });
      } catch (error) {
        const canRetry =
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2034" &&
          attempt < maxAttempts;

        if (!canRetry) throw error;
      }
    }

    throw new Error("Could not save interview progress");
  }

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

    return this.serializeProgress(progress);
  }

  async updateProgress(
    userId: number,
    questionId: string,
    action: ProgressAction
  ) {
    const progress = await this.runSerializable(async (tx) => {
      const existing = await tx.userInterviewProgress.findUnique({
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
        completedIds = completedIds.filter((id) => id !== questionId);
      }

      if (action === "bookmark") {
        bookmarkedIds = [...new Set([...bookmarkedIds, questionId])];
      }

      if (action === "unbookmark") {
        bookmarkedIds = bookmarkedIds.filter((id) => id !== questionId);
      }

      if (action === "visit") {
        lastVisitedId = questionId;
        lastVisitedAt = new Date();
      }

      return tx.userInterviewProgress.upsert({
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
    });

    return this.serializeProgress(progress);
  }
}
