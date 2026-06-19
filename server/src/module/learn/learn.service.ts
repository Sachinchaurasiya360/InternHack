import { Prisma } from "@prisma/client";
import { prisma } from "../../database/db.js";
import type { InterviewProgressAction, BulkInterviewProgressInput } from "./learn.validation.js";
import { GeminiProvider } from "../../lib/providers/gemini.provider.js";

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
  async calculateReadinessReport(data: {
    userId: number | string;
    targetRole: string;
    companyTier: string;
    availableTime: string;
  }) {
    const { targetRole, companyTier, availableTime } = data;
    const userIdNum = typeof data.userId === "string" ? parseInt(data.userId, 10) : data.userId;

    let completedLessonsCount = 0;
    let totalDsaSolved = 0;
    let totalSqlSolved = 0;
    let totalAptitudeSolved = 0;
    let completedLessonIds: string[] = [];

    if (typeof userIdNum === "number" && !isNaN(userIdNum)) {
      const [interviewProgress, dsaSolved, sqlSolved, aptitudeSolved] = await Promise.all([
        prisma.userInterviewProgress.findUnique({
          where: { userId: userIdNum },
          select: { completedIds: true },
        }),
        prisma.studentDsaProgress.count({
          where: { studentId: userIdNum, solved: true },
        }),
        prisma.studentSqlProgress.count({
          where: { studentId: userIdNum, solved: true },
        }),
        prisma.studentAptitudeProgress.count({
          where: { studentId: userIdNum, answered: true, correct: true },
        }),
      ]);

      if (interviewProgress) {
        completedLessonIds = interviewProgress.completedIds;
        completedLessonsCount = interviewProgress.completedIds.length;
      }
      totalDsaSolved = dsaSolved;
      totalSqlSolved = sqlSolved;
      totalAptitudeSolved = aptitudeSolved;
    }

    const provider = new GeminiProvider("gemini-2.5-flash-lite");

    const systemPrompt = `
      You are an expert tech recruiter and coding coach assessing student readiness indicators.
      
      Target Role: ${targetRole}
      Hiring Company Tier: ${companyTier}
      Prep Time: ${availableTime}
      
      Student Learning Progress:
      - Completed Interview Lessons Count: ${completedLessonsCount} (Lesson IDs: ${completedLessonIds.join(", ") || "None"})
      - Solved DSA Problems Count: ${totalDsaSolved}
      - Solved SQL Exercises Count: ${totalSqlSolved}
      - Solved Aptitude Questions Count: ${totalAptitudeSolved}
      
      Analyze this student's readiness based on their progress and target profile.
      - Calculate a realistic overallReadiness score (0 to 100). Consider their role and tier (e.g. FAANG requires higher problem counts and system design knowledge).
      - Estimate timeline to ready (e.g., "3 weeks", "2 months").
      - Provide today's study priority based on what's missing or what's next.
      - List 2-3 strongAreas with scores (0-100).
      - List 2-3 gapAreas with scores (0-100).
      - Suggest a relevant mockInterviewQuestion (containing title and description) tailored to their target role.

      Respond strictly with a single JSON object. Do not include markdown ticks:
      {
        "overallReadiness": 65,
        "estimatedTimeToReady": "3 weeks",
        "todaysPriority": "Solve 2 more Binary Tree problems + complete Node.js authentication lesson",
        "strongAreas": [
          { "topic": "HTML/CSS", "score": 90 },
          { "topic": "React Hooks", "score": 80 }
        ],
        "gapAreas": [
          { "topic": "System Design", "score": 20 },
          { "topic": "TypeScript", "score": 45 }
        ],
        "mockInterviewQuestion": {
          "title": "Implement a Custom useFetch Hook",
          "description": "Create a hook handling network execution state loops cleanly."
        }
      }
    `;

    try {
      const response = await provider.generateText(systemPrompt);
      const text = response.text;
      
      // Clean and parse the JSON response
      let cleanJson = text.trim();
      cleanJson = cleanJson.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "");
      cleanJson = cleanJson.replace(/,\s*([\]}])/g, "$1");

      try {
        return JSON.parse(cleanJson);
      } catch {
        const match = cleanJson.match(/\{[\s\S]*\}/);
        if (!match) throw new Error("No JSON object found in AI response");
        return JSON.parse(match[0].replace(/,\s*([\]}])/g, "$1"));
      }
    } catch (error) {
      console.error("Gemini exception in readiness report, using fallback:", error);
      // Clean safety fallback so the server never crashes even if API keys are missing locally
      return {
        overallReadiness: Math.min(100, Math.max(10, completedLessonsCount * 10 + totalDsaSolved * 5)),
        estimatedTimeToReady: availableTime || "3 weeks",
        todaysPriority: "Practice more coding and system design questions.",
        strongAreas: [
          { topic: "Basic Coding & Topics", score: Math.min(100, 40 + totalDsaSolved * 4) }
        ],
        gapAreas: [
          { topic: "System Design & Architecture", score: 35 }
        ],
        mockInterviewQuestion: {
          title: "Implement a rate limiter",
          description: "Design and implement a rate limiter middleware for an Express application."
        }
      };
    }
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
