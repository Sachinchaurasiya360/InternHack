import { prisma } from "../../database/db.js";
import type { InterviewProgressAction, BulkInterviewProgressInput } from "./learn.validation.js";
import { getProviderForService } from "../../lib/ai-provider-registry.js";
import { logAIRequest } from "../../lib/ai-request-logger.js";

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

async function aggregateProgress(userId: number): Promise<InterviewProgressDto> {
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
      const [completedStates, dsaSolved, sqlSolved, aptitudeSolved] = await Promise.all([
        prisma.userInterviewQuestionState.findMany({
          where: { userId: userIdNum, isCompleted: true },
          select: { questionId: true },
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

      completedLessonIds = completedStates.map((s) => s.questionId);
      completedLessonsCount = completedStates.length;
      totalDsaSolved = dsaSolved;
      totalSqlSolved = sqlSolved;
      totalAptitudeSolved = aptitudeSolved;
    }

    const provider = getProviderForService("LEARN_READINESS");

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
        const parsed = JSON.parse(cleanJson);
        logAIRequest("LEARN_READINESS", response, true, undefined, typeof userIdNum === "number" && !isNaN(userIdNum) ? userIdNum : undefined);
        return parsed;
      } catch {
        const match = cleanJson.match(/\{[\s\S]*\}/);
        if (!match) {
          logAIRequest("LEARN_READINESS", response, false, "No JSON object found in AI response");
          throw new Error("No JSON object found in AI response");
        }
        const parsed = JSON.parse(match[0].replace(/,\s*([\]}])/g, "$1"));
        logAIRequest("LEARN_READINESS", response, true, undefined, typeof userIdNum === "number" && !isNaN(userIdNum) ? userIdNum : undefined);
        return parsed;
      }
    } catch (error) {
      console.error("Gemini exception in readiness report, using fallback:", error);
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
    const result = await aggregateProgress(userId);
    return result.completedIds.length === 0 && result.bookmarkedIds.length === 0 &&
      result.lastVisitedId === null
      ? EMPTY_PROGRESS
      : result;
  }

  async updateInterviewProgress(
    userId: number,
    questionId: string,
    action: InterviewProgressAction,
  ): Promise<InterviewProgressDto> {
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

  async bulkMigrateInterviewProgress(
    userId: number,
    input: BulkInterviewProgressInput,
  ): Promise<InterviewProgressDto> {
    const { completedIds, bookmarkedIds, lastVisitedId: incomingLastVisited } = input;

    if (completedIds.length > 0) {
      await prisma.userInterviewQuestionState.createMany({
        data: completedIds.map((qId) => ({ userId, questionId: qId, isCompleted: true })),
        skipDuplicates: true,
      });
      await prisma.userInterviewQuestionState.updateMany({
        where: { userId, questionId: { in: completedIds }, isCompleted: false },
        data: { isCompleted: true },
      });
    }

    if (bookmarkedIds.length > 0) {
      await prisma.userInterviewQuestionState.createMany({
        data: bookmarkedIds.map((qId) => ({ userId, questionId: qId, isBookmarked: true })),
        skipDuplicates: true,
      });
      await prisma.userInterviewQuestionState.updateMany({
        where: { userId, questionId: { in: bookmarkedIds } },
        data: { isBookmarked: true },
      });
    }

    if (incomingLastVisited) {
      await prisma.userInterviewProgress.upsert({
        where: { userId },
        update: { lastVisitedId: incomingLastVisited, lastVisitedAt: new Date() },
        create: { userId, lastVisitedId: incomingLastVisited, lastVisitedAt: new Date() },
      });
    }

    return aggregateProgress(userId);
  }

  async resetInterviewProgress(userId: number): Promise<InterviewProgressDto> {
    const [_, __] = await Promise.all([
      prisma.userInterviewQuestionState.deleteMany({ where: { userId } }),
      prisma.userInterviewProgress.deleteMany({ where: { userId } }),
    ]);
    return EMPTY_PROGRESS;
  }
}
