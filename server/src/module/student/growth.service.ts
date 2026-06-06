// server/src/module/student/growth.service.ts
import { prisma } from "../../database/db.js";
import { GeminiProvider } from "../../lib/providers/gemini.provider.js";
import { ContributionsService } from "./contributions.service.js";

const provider = new GeminiProvider("gemini-2.5-flash-lite");
const GROWTH_CACHE = new Map<string, { data: any; expiresAt: number }>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export interface DeveloperGrowthResult {
  growthScore: number;
  growthRank: string;
  trend: { month: string; score: number }[];
  milestones: { title: string; date: string; category: string; description: string }[];
  monthlyReport: {
    summary: string;
    achievements: string[];
    focusAreas: string[];
  };
  lastUpdated: string;
}

export class GrowthService {
  private contributionsService = new ContributionsService();

  async getGrowth(userId: number, forceRefresh = false): Promise<DeveloperGrowthResult> {
    const cacheKey = String(userId);
    if (!forceRefresh) {
      const cached = GROWTH_CACHE.get(cacheKey);
      if (cached && cached.expiresAt > Date.now()) {
        return cached.data;
      }
    }

    // 1. Fetch User profile
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        name: true,
        skills: true,
      },
    });

    if (!user) {
      throw new Error("Student profile not found.");
    }

    // 2. Fetch DSA, SQL, and Aptitude Progress
    const [solvedDsaCount, solvedSqlCount, aptitudeCount, skillAttempts] = await Promise.all([
      prisma.studentDsaProgress.count({ where: { studentId: userId, solved: true } }),
      prisma.studentSqlProgress.count({ where: { studentId: userId, solved: true } }),
      prisma.studentAptitudeProgress.count({ where: { studentId: userId } }),
      prisma.skillTestAttempt.findMany({
        where: { studentId: userId },
        orderBy: { score: "desc" },
        select: { score: true, test: { select: { skillName: true } } },
      }),
    ]);

    // 3. Fetch latest ATS Resume Score
    const latestAts = await prisma.atsScore.findFirst({
      where: { studentId: userId },
      orderBy: { createdAt: "desc" },
      select: { overallScore: true },
    });

    // 4. Fetch Open Source Contributions
    let openSourceData = null;
    try {
      openSourceData = await this.contributionsService.getDashboard(userId);
    } catch (err) {
      // Ignore open source errors
    }

    // 5. Build context for AI evaluation
    const evaluationContext = {
      studentName: user.name,
      skills: user.skills,
      dsaProblemsSolved: solvedDsaCount,
      sqlExercisesSolved: solvedSqlCount,
      aptitudeTestsCompleted: aptitudeCount,
      skillTestAssessments: skillAttempts.map((s) => ({
        skill: s.test?.skillName ?? "Technical Test",
        score: s.score,
      })),
      atsResumeScore: latestAts ? latestAts.overallScore : null,
      openSource: openSourceData
        ? {
            totalPRs: openSourceData.totalPRs,
            mergedPRs: openSourceData.mergedPRs,
            firstPrCompletedSteps: openSourceData.firstPrProgress.length,
            earnedBadgesCount: openSourceData.badges.length,
          }
        : null,
    };

    // Helper to compute dynamic default trend months
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentMonth = new Date().getMonth();
    const trendMonths = [];
    for (let i = 5; i >= 0; i--) {
      const idx = (currentMonth - i + 12) % 12;
      trendMonths.push(monthNames[idx]!);
    }

    const prompt = `You are a career development coach and technical evaluator. Evaluate the student's learning and skill progress data across DSA, SQL, skill assessments, resume quality, and open source to formulate an overall Developer Growth analysis.

STUDENT PROGRESS DATA:
${JSON.stringify(evaluationContext, null, 2)}

Return ONLY a valid JSON object matching the exact format below:
{
  "growthScore": 76, // integer 0-100 representing overall ecosystem progression
  "growthRank": "Rising Star", // e.g. Beginner, Explorer, Rising Star, Expert, Master
  "trend": [
    { "month": "${trendMonths[0]}", "score": 30 },
    { "month": "${trendMonths[1]}", "score": 42 },
    { "month": "${trendMonths[2]}", "score": 50 },
    { "month": "${trendMonths[3]}", "score": 62 },
    { "month": "${trendMonths[4]}", "score": 70 },
    { "month": "${trendMonths[5]}", "score": 76 }
  ],
  "milestones": [
    {
      "title": "First Step in DSA",
      "date": "2 months ago",
      "category": "DSA", // DSA, SQL, Skill Assessment, Open Source, Resume
      "description": "Solved your first DSA problems on the InternHack module."
    },
    {
      "title": "Resume Assessment Completed",
      "date": "1 month ago",
      "category": "Resume",
      "description": "Optimized your resume format and received an ATS score."
    }
  ],
  "monthlyReport": {
    "summary": "This month showed stable growth in problem solving (DSA) and open-source setup. Focus on verifying skill assessments next.",
    "achievements": [
      "Completed 1st PR Roadmap guide steps.",
      "Solved multiple programming challenges."
    ],
    "focusAreas": [
      "Increase SQL exercise count.",
      "Attempt more skill verification tests to verify React/Node knowledge."
    ]
  }
}

Guidelines:
1. Make the month-over-month trend scores progress realistically towards the final growthScore.
2. Build 2-5 milestones based on actual data presence (e.g. if solvedDsaCount > 0, include a DSA milestone; if mergedPRs > 0, include an Open Source milestone). If no data exists, suggest initial onboarding milestones.
3. Keep the report advice highly encouraging and structured.
4. Do NOT wrap the response in markdown code blocks.`;

    const aiResponse = await provider.generateText(prompt);
    const result = this.parseAIResponse(aiResponse.text.trim());

    const finalResult: DeveloperGrowthResult = {
      ...result,
      lastUpdated: new Date().toISOString(),
    };

    GROWTH_CACHE.set(cacheKey, { data: finalResult, expiresAt: Date.now() + CACHE_TTL_MS });

    return finalResult;
  }

  private parseAIResponse(text: string): Omit<DeveloperGrowthResult, "lastUpdated"> {
    let clean = text.trim();
    if (clean.startsWith("```")) {
      clean = clean.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }
    try {
      return JSON.parse(clean);
    } catch {
      const match = clean.match(/\{[\s\S]*\}/);
      if (match) {
        return JSON.parse(match[0]);
      }
      throw new Error("Failed to parse AI response as JSON");
    }
  }
}
