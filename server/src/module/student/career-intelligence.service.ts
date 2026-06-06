// server/src/module/student/career-intelligence.service.ts
import fs from "fs/promises";
import path from "path";
import { prisma } from "../../database/db.js";
import { GeminiProvider } from "../../lib/providers/gemini.provider.js";
import { GithubAnalyticsService } from "./github-analytics.service.js";
import { ContributionsService } from "./contributions.service.js";
import { ReadinessService } from "./readiness.service.js";
import { GapAnalysisService } from "./gap-analysis.service.js";

const provider = new GeminiProvider("gemini-2.5-flash-lite");
const INTELLIGENCE_CACHE = new Map<string, { data: any; expiresAt: number }>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

// Storage folder for goals
const GOALS_DIR = path.join(process.cwd(), "storage", "goals");

export interface CareerIntelligenceResult {
  overallScore: number;
  components: {
    atsScore: number;
    githubScore: number;
    openSourceScore: number;
    readinessScore: number;
    gapScore: number;
  };
  healthReport: {
    summary: string;
    strengths: string[];
    weaknesses: string[];
    priorities: {
      action: string;
      impact: "High" | "Medium" | "Low";
      effort: "Low" | "Medium" | "High";
      reason: string;
    }[];
  };
  lastUpdated: string;
}

export interface StudentGoals {
  targetRole: string;
  targetCompany: string;
  targetInternship: string;
  weeklyGoals: { id: string; text: string; completed: boolean }[];
  monthlyGoals: { id: string; text: string; completed: boolean }[];
  milestones: { id: string; title: string; date: string; completed: boolean }[];
}

export class CareerIntelligenceService {
  private githubService = new GithubAnalyticsService();
  private contributionsService = new ContributionsService();
  private readinessService = new ReadinessService();
  private gapService = new GapAnalysisService();

  async getCareerIntelligence(userId: number, forceRefresh = false): Promise<CareerIntelligenceResult> {
    const cacheKey = String(userId);
    if (!forceRefresh) {
      const cached = INTELLIGENCE_CACHE.get(cacheKey);
      if (cached && cached.expiresAt > Date.now()) {
        return cached.data;
      }
    }

    // 1. Fetch User
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, skills: true, githubUrl: true },
    });

    if (!user) {
      throw new Error("Student profile not found.");
    }

    // 2. Fetch component scores
    // a. ATS Score
    const latestAts = await prisma.atsScore.findFirst({
      where: { studentId: userId },
      orderBy: { createdAt: "desc" },
      select: { overallScore: true },
    });
    const atsScore = latestAts ? latestAts.overallScore : 0;

    // b. GitHub Analytics Score
    let githubScore = 0;
    let githubData = null;
    if (user.githubUrl) {
      try {
        githubData = await this.githubService.getAnalytics(userId);
        githubScore = githubData.developerScore;
      } catch (err) {
        // Ignore
      }
    }

    // c. Open Source Contributions Score
    let openSourceScore = 0;
    let openSourceData = null;
    try {
      openSourceData = await this.contributionsService.getDashboard(userId);
      openSourceScore = Math.min(
        100,
        openSourceData.totalPRs * 15 +
          openSourceData.badges.length * 10 +
          openSourceData.firstPrProgress.length * 15
      );
    } catch (err) {
      // Ignore
    }

    // d. Internship Readiness Score
    let readinessScore = 0;
    try {
      const readiness = await this.readinessService.getReadiness(userId, false);
      readinessScore = readiness.readinessScore;
    } catch (err) {
      // Ignore
    }

    // e. Career Gap Match Score
    let gapScore = 0;
    let gapData = null;
    try {
      gapData = await this.gapService.getGapAnalysis(userId, false);
      const primaryRole = gapData.targetRoles.find((r) => r.isTarget) || gapData.targetRoles[0];
      gapScore = primaryRole ? primaryRole.matchPercentage : 0;
    } catch (err) {
      // Ignore
    }

    // 3. Compute Composite Overall Score (Weighted)
    // ATS: 25%, GitHub: 20%, OS: 15%, Readiness: 20%, Gap Match: 20%
    const overallScore = Math.round(
      atsScore * 0.25 +
        githubScore * 0.20 +
        openSourceScore * 0.15 +
        readinessScore * 0.20 +
        gapScore * 0.20
    );

    // 4. Call Gemini to generate comprehensive health report
    const evaluationContext = {
      studentName: user.name,
      skills: user.skills,
      overallScore,
      components: {
        atsScore,
        githubScore,
        openSourceScore,
        readinessScore,
        gapScore,
      },
      githubAnalytics: githubData,
      openSourceDashboard: openSourceData
        ? {
            totalPRs: openSourceData.totalPRs,
            repositoriesContributed: openSourceData.repositoriesContributed.map((r) => r.name),
            badgesCount: openSourceData.badges.length,
          }
        : null,
      gapAnalysis: gapData
        ? {
            skillGaps: gapData.skillGaps,
            missingTechnologies: gapData.missingTechnologies,
          }
        : null,
    };

    const prompt = `You are a Principal Software Architect, Technical Career Director, and Senior Mentor.
Analyze this student's composite Career Intelligence Score and the underlying metrics to generate a Career Health Report (overall evaluation summary, key strengths, key weaknesses, and high-impact priorities).

STUDENT METRICS:
${JSON.stringify(evaluationContext, null, 2)}

Return ONLY a valid JSON object matching the exact format below:
{
  "summary": "You have a solid foundation in coding but require optimization in open-source engagement and resume formatting.",
  "strengths": [
    "Strong local project diversity with multi-framework application."
  ],
  "weaknesses": [
    "Lacks verified backend skill badges on the platform."
  ],
  "priorities": [
    {
      "action": "Complete a Node.js skill assessment test to verify backend skills.",
      "impact": "High", // "High", "Medium", "Low"
      "effort": "Low", // "Low", "Medium", "High"
      "reason": "Verified badges directly improve the platform score and attract recruiters."
    }
  ]
}

Guidelines:
1. Ensure recommendations are specific, realistic, and directly map to the component weaknesses.
2. Do NOT wrap the JSON response in markdown code blocks.`;

    const aiResponse = await provider.generateText(prompt);
    const healthResult = this.parseAIResponse(aiResponse.text.trim());

    const finalResult: CareerIntelligenceResult = {
      overallScore,
      components: {
        atsScore,
        githubScore,
        openSourceScore,
        readinessScore,
        gapScore,
      },
      healthReport: healthResult,
      lastUpdated: new Date().toISOString(),
    };

    INTELLIGENCE_CACHE.set(cacheKey, { data: finalResult, expiresAt: Date.now() + CACHE_TTL_MS });

    return finalResult;
  }

  // --- GOALS AND MILESTONES SYSTEM ---

  async getGoals(userId: number): Promise<StudentGoals> {
    const filePath = path.join(GOALS_DIR, `${userId}.json`);
    try {
      const content = await fs.readFile(filePath, "utf8");
      return JSON.parse(content);
    } catch (err: any) {
      // If file doesn't exist, return default empty goals object
      return {
        targetRole: "",
        targetCompany: "",
        targetInternship: "",
        weeklyGoals: [],
        monthlyGoals: [],
        milestones: [],
      };
    }
  }

  async saveGoals(userId: number, goals: StudentGoals): Promise<StudentGoals> {
    // Ensure goals folder exists
    await fs.mkdir(GOALS_DIR, { recursive: true });

    // Validate structure (sanitize)
    const sanitized: StudentGoals = {
      targetRole: String(goals.targetRole || ""),
      targetCompany: String(goals.targetCompany || ""),
      targetInternship: String(goals.targetInternship || ""),
      weeklyGoals: Array.isArray(goals.weeklyGoals)
        ? goals.weeklyGoals.map((g) => ({
            id: String(g.id || Math.random().toString(36).substring(7)),
            text: String(g.text || ""),
            completed: Boolean(g.completed),
          }))
        : [],
      monthlyGoals: Array.isArray(goals.monthlyGoals)
        ? goals.monthlyGoals.map((g) => ({
            id: String(g.id || Math.random().toString(36).substring(7)),
            text: String(g.text || ""),
            completed: Boolean(g.completed),
          }))
        : [],
      milestones: Array.isArray(goals.milestones)
        ? goals.milestones.map((m) => ({
            id: String(m.id || Math.random().toString(36).substring(7)),
            title: String(m.title || ""),
            date: String(m.date || ""),
            completed: Boolean(m.completed),
          }))
        : [],
    };

    const filePath = path.join(GOALS_DIR, `${userId}.json`);
    await fs.writeFile(filePath, JSON.stringify(sanitized, null, 2), "utf8");
    return sanitized;
  }

  private parseAIResponse(text: string): CareerIntelligenceResult["healthReport"] {
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
