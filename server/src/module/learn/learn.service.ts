import { Prisma } from "@prisma/client";
import { prisma } from "../../database/db.js";
import type { InterviewProgressAction, BulkInterviewProgressInput } from "./learn.validation.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

export interface InterviewProgressDto {
  completedIds: string[];
  bookmarkedIds: string[];
  lastVisitedId: string | null;
  lastVisitedAt: Date | null;
}

const EMPTY_PROGRESS: InterviewProgressDto = {
  completedIds: [],
  bookmarkedIds: [],
  lastVisitedId: null,
  lastVisitedAt: null,
};

function uniqueIds(ids: string[]) {
  return Array.from(new Set(ids.map((id) => id.trim()).filter(Boolean))).slice(0, 1000);
}

function serializeProgress(progress: {
  completedIds: string[];
  bookmarkedIds: string[];
  lastVisitedId: string | null;
  lastVisitedAt: Date | null;
}): InterviewProgressDto {
  return {
    completedIds: progress.completedIds,
    bookmarkedIds: progress.bookmarkedIds,
    lastVisitedId: progress.lastVisitedId,
    lastVisitedAt: progress.lastVisitedAt,
  };
}

async function runRepeatableRead<T>(operation: (tx: Prisma.TransactionClient) => Promise<T>): Promise<T> {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await prisma.$transaction(operation, {
        isolationLevel: Prisma.TransactionIsolationLevel.RepeatableRead,
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

export class LearnService {
  async calculateReadinessReport(_input: {
    userId: number | string;
    targetRole: string;
    companyTier: string;
    availableTime: string;
  }) {
    // TODO(#1943): This feature (AI interview readiness report) was merged but its
    // implementation referenced Prisma models that do not exist
    // (prisma.interviewProgress, prisma.userLesson) and an unwired `geminiProvider`.
    // Stubbed to keep the build green. Reimplement against `userInterviewProgress`
    // and a real Gemini provider (see lib/providers/gemini.provider.ts) before exposing.
    throw new Error("Interview readiness report is not yet available.");
  }
  async getInterviewProgress(userId: number): Promise<InterviewProgressDto> {
    const progress = await prisma.userInterviewProgress.findUnique({
      where: { userId },
      select: {
        completedIds: true,
        bookmarkedIds: true,
        lastVisitedId: true,
        lastVisitedAt: true,
      },
    });

    return progress ? serializeProgress(progress) : EMPTY_PROGRESS;
  }

  async updateInterviewProgress(
    userId: number,
    questionId: string,
    action: InterviewProgressAction,
  ): Promise<InterviewProgressDto> {
    const progress = await runRepeatableRead(async (tx) => {
      const existing = await tx.userInterviewProgress.findUnique({ where: { userId } });
      const completedIds = new Set(existing?.completedIds ?? []);
      const bookmarkedIds = new Set(existing?.bookmarkedIds ?? []);
      let lastVisitedId = existing?.lastVisitedId ?? null;
      let lastVisitedAt = existing?.lastVisitedAt ?? null;

      if (action === "complete") completedIds.add(questionId);
      if (action === "uncomplete") completedIds.delete(questionId);
      if (action === "bookmark") bookmarkedIds.add(questionId);
      if (action === "unbookmark") bookmarkedIds.delete(questionId);
      if (action === "visit") {
        lastVisitedId = questionId;
        lastVisitedAt = new Date();
      }

      return tx.userInterviewProgress.upsert({
        where: { userId },
        update: {
          completedIds: Array.from(completedIds),
          bookmarkedIds: Array.from(bookmarkedIds),
          lastVisitedId,
          lastVisitedAt,
        },
        create: {
          userId,
          completedIds: Array.from(completedIds),
          bookmarkedIds: Array.from(bookmarkedIds),
          lastVisitedId,
          lastVisitedAt,
        },
        select: {
          completedIds: true,
          bookmarkedIds: true,
          lastVisitedId: true,
          lastVisitedAt: true,
        },
      });
    });

    return serializeProgress(progress);
  }

  async bulkMigrateInterviewProgress(
    userId: number,
    input: BulkInterviewProgressInput,
  ): Promise<InterviewProgressDto> {
    const progress = await runRepeatableRead(async (tx) => {
      const existing = await tx.userInterviewProgress.findUnique({ where: { userId } });
      const completedIds = uniqueIds([...(existing?.completedIds ?? []), ...input.completedIds]);
      const bookmarkedIds = uniqueIds([...(existing?.bookmarkedIds ?? []), ...input.bookmarkedIds]);
      const lastVisitedId = existing?.lastVisitedId ?? input.lastVisitedId ?? null;
      const lastVisitedAt = existing?.lastVisitedAt ?? (lastVisitedId ? new Date() : null);

      return tx.userInterviewProgress.upsert({
        where: { userId },
        update: {
          completedIds,
          bookmarkedIds,
          lastVisitedId,
          lastVisitedAt,
        },
        create: {
          userId,
          completedIds,
          bookmarkedIds,
          lastVisitedId,
          lastVisitedAt,
        },
        select: {
          completedIds: true,
          bookmarkedIds: true,
          lastVisitedId: true,
          lastVisitedAt: true,
        },
      });
    });

    return serializeProgress(progress);
  }

  async resetInterviewProgress(userId: number): Promise<InterviewProgressDto> {
    await prisma.userInterviewProgress.deleteMany({ where: { userId } });
    return EMPTY_PROGRESS;
  }
}
