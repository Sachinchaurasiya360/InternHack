// server/src/module/student/hiring-signal.service.ts
import { prisma } from "../../database/db.js";
import { GeminiProvider } from "../../lib/providers/gemini.provider.js";
import { GithubAnalyticsService } from "./github-analytics.service.js";
import { ContributionsService } from "./contributions.service.js";

const provider = new GeminiProvider("gemini-2.5-flash-lite");
const HIRING_SIGNAL_CACHE = new Map<string, { data: any; expiresAt: number }>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export interface HiringSignalResult {
  hiringScore: number;
  hiringRank: string;
  categoryScores: {
    technicalDepth: number;
    projectPortfolio: number;
    documentationQuality: number;
    contributionActivity: number;
  };
  strengths: string[];
  weaknesses: string[];
  recommendations: {
    area: string;
    text: string;
    priority: "High" | "Medium" | "Low";
  }[];
  lastUpdated: string;
}

export class HiringSignalService {
  private githubService = new GithubAnalyticsService();
  private contributionsService = new ContributionsService();

  async getHiringSignal(userId: number, forceRefresh = false): Promise<HiringSignalResult> {
    const cacheKey = String(userId);
    if (!forceRefresh) {
      const cached = HIRING_SIGNAL_CACHE.get(cacheKey);
      if (cached && cached.expiresAt > Date.now()) {
        return cached.data;
      }
    }

    // 1. Fetch User details
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        name: true,
        skills: true,
        projects: true,
        githubUrl: true,
      },
    });

    if (!user) {
      throw new Error("Student profile not found.");
    }

    // 2. Fetch Latest ATS Score
    const latestAtsScore = await prisma.atsScore.findFirst({
      where: { studentId: userId },
      orderBy: { createdAt: "desc" },
      select: {
        overallScore: true,
        categoryScores: true,
      },
    });

    // 3. Fetch GitHub Analytics (if linked)
    let githubData = null;
    if (user.githubUrl) {
      try {
        githubData = await this.githubService.getAnalytics(userId);
      } catch (err) {
        // Ignore errors fetching github metrics
      }
    }

    // 4. Fetch Verified Skills
    const verifiedSkills = await prisma.verifiedSkill.findMany({
      where: { studentId: userId },
      select: {
        skillName: true,
        score: true,
      },
    });

    // 5. Fetch Open Source Dashboard Data
    let openSourceData = null;
    try {
      openSourceData = await this.contributionsService.getDashboard(userId);
    } catch (err) {
      // Ignore open source errors
    }

    // 6. Aggregate Context
    let projectsList = [];
    try {
      if (user.projects) {
        projectsList = typeof user.projects === "string" ? JSON.parse(user.projects) : user.projects;
      }
    } catch (e) {
      // Ignore JSON parse errors
    }

    const evaluationContext = {
      studentName: user.name,
      skills: user.skills,
      projectsCount: Array.isArray(projectsList) ? projectsList.length : 0,
      projectsList,
      githubUrl: user.githubUrl ?? "Not Linked",
      githubAnalytics: githubData,
      atsScore: latestAtsScore ? latestAtsScore.overallScore : null,
      verifiedSkills: verifiedSkills.map((s) => ({ name: s.skillName, score: s.score })),
      openSource: openSourceData
        ? {
            totalPRs: openSourceData.totalPRs,
            mergedPRs: openSourceData.mergedPRs,
            earnedBadgesCount: openSourceData.badges.length,
          }
        : null,
    };

    const prompt = `You are a Principal Recruiter and Director of Talent Acquisition at a Fortune 500 tech company. Evaluate the following student profile details to determine their Recruiter Attractiveness/Hiring Signal score (0-100), rank, strengths, weaknesses, and optimization advice.

STUDENT PROFILE CONTEXT:
${JSON.stringify(evaluationContext, null, 2)}

Return ONLY a valid JSON object matching the exact format below:
{
  "hiringScore": 82, // integer 0-100
  "hiringRank": "Highly Attractive", // "Needs Work" (<40), "Developing" (40-59), "Good Prospect" (60-74), "Highly Attractive" (75-89), "Top Talent" (>=90)
  "categoryScores": {
    "technicalDepth": 80, // integer 0-100. Based on verified skills and language proficiency.
    "projectPortfolio": 75, // integer 0-100. Based on projectsCount and quality.
    "documentationQuality": 85, // integer 0-100. Based on GitHub repo quality / descriptions.
    "contributionActivity": 70 // integer 0-100. Based on open-source activity and commits.
  },
  "strengths": [
    "Comprehensive project portfolio with React/Node.js experience.",
    "Verified technical competence in backend routing and APIs."
  ],
  "weaknesses": [
    "No verified skill tests for system-level languages (Go/C++).",
    "GitHub activity is inconsistent over the past quarter."
  ],
  "recommendations": [
    {
      "area": "Portfolio", // Choose from: Portfolio, Skills, Resume, GitHub, Contributions
      "text": "Add a production-grade system-level project to demonstrate multithreading or caching.",
      "priority": "High" // Choose from: High, Medium, Low
    },
    {
      "area": "Skills",
      "text": "Complete the SQL or JavaScript skill verification tests to verify core skills.",
      "priority": "Medium"
    }
  ]
}

Guidelines for evaluation:
1. If key data points are missing (no ATS score, no GitHub linked, etc.), score those sub-categories low and prioritize recommendations to fix them.
2. The recommendations must be highly concrete and focused on what hiring managers value.
3. Do NOT wrap the JSON response in markdown code blocks.`;

    const aiResponse = await provider.generateText(prompt);
    const result = this.parseAIResponse(aiResponse.text.trim());

    const finalResult: HiringSignalResult = {
      ...result,
      lastUpdated: new Date().toISOString(),
    };

    HIRING_SIGNAL_CACHE.set(cacheKey, { data: finalResult, expiresAt: Date.now() + CACHE_TTL_MS });

    return finalResult;
  }

  private parseAIResponse(text: string): Omit<HiringSignalResult, "lastUpdated"> {
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
