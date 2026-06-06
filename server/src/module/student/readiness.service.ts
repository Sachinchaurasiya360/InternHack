// server/src/module/student/readiness.service.ts
import { prisma } from "../../database/db.js";
import { GeminiProvider } from "../../lib/providers/gemini.provider.js";
import { GithubAnalyticsService } from "./github-analytics.service.js";
import { ContributionsService } from "./contributions.service.js";

const provider = new GeminiProvider("gemini-2.5-flash-lite");
const READINESS_CACHE = new Map<string, { data: any; expiresAt: number }>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export interface InternshipReadinessResult {
  readinessScore: number;
  readinessRank: string;
  categoryScores: {
    resumeQuality: number;
    githubPresence: number;
    verifiedSkills: number;
    openSourceContributions: number;
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

export class ReadinessService {
  private githubService = new GithubAnalyticsService();
  private contributionsService = new ContributionsService();

  async getReadiness(userId: number, forceRefresh = false): Promise<InternshipReadinessResult> {
    const cacheKey = String(userId);
    if (!forceRefresh) {
      const cached = READINESS_CACHE.get(cacheKey);
      if (cached && cached.expiresAt > Date.now()) {
        return cached.data;
      }
    }

    // 1. Fetch Student/User Profile
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        name: true,
        skills: true,
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

    // 3. Fetch GitHub Analytics (if GitHub is linked)
    let githubData = null;
    let githubError = null;
    if (user.githubUrl) {
      try {
        githubData = await this.githubService.getAnalytics(userId);
      } catch (err: any) {
        githubError = err.message || "Failed to fetch GitHub Analytics";
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

    // 5. Fetch Open Source Contributions Dashboard Data
    let openSourceData = null;
    try {
      openSourceData = await this.contributionsService.getDashboard(userId);
    } catch (err) {
      // Ignore open source dashboard fetch errors
    }

    // 6. Invoke Gemini to evaluate overall readiness
    const evaluationContext = {
      studentName: user.name,
      profileSkills: user.skills,
      githubLinked: !!user.githubUrl,
      githubUrl: user.githubUrl ?? "Not Linked",
      githubAnalytics: githubData,
      githubFetchError: githubError,
      atsResumeScore: latestAtsScore
        ? {
            score: latestAtsScore.overallScore,
            categoryScores: latestAtsScore.categoryScores,
          }
        : null,
      verifiedSkills: verifiedSkills.map((s) => ({ name: s.skillName, score: s.score })),
      openSourceContributions: openSourceData
        ? {
            totalPRs: openSourceData.totalPRs,
            mergedPRs: openSourceData.mergedPRs,
            openPRs: openSourceData.openPRs,
            firstPrProgressStepsCount: openSourceData.firstPrProgress.length,
            earnedBadgesCount: openSourceData.badges.length,
          }
        : null,
    };

    const prompt = `You are a Senior Technical Recruiter and Engineering Manager. Evaluate the following student profile metrics to compute their Software Engineering Internship Readiness Score (0-100), ranking, strengths, weaknesses, and a structured set of actionable recommendations.

STUDENT PROFILE DATA:
${JSON.stringify(evaluationContext, null, 2)}

Return ONLY a valid JSON object matching the exact format below:
{
  "readinessScore": 75, // integer 0-100
  "readinessRank": "Good Progress", // "Needs Work" (score < 40), "Developing" (40-59), "Good Progress" (60-79), "Internship Ready" (80-89), "Exceptional" (>= 90)
  "categoryScores": {
    "resumeQuality": 80, // integer 0-100. If no atsResumeScore exists, this should be 0.
    "githubPresence": 70, // integer 0-100. If no githubLinked exists, this should be 0.
    "verifiedSkills": 65, // integer 0-100. Base this on number of verifiedSkills (e.g. 0 skills = 0, 1 = 50, 2+ = 80+).
    "openSourceContributions": 85 // integer 0-100. Base this on PR stats and badges.
  },
  "strengths": [
    "Strong open-source engagement with multiple merged PRs.",
    "Verified technical competence in React and Node.js."
  ],
  "weaknesses": [
    "Resume score is below target (needs improvement in metric impact).",
    "GitHub repository diversity is narrow."
  ],
  "recommendations": [
    {
      "area": "Resume", // Choose from: Resume, GitHub, Skills, Open Source
      "text": "Upload your resume to the ATS optimizer and add quantitative metrics to your work descriptions.",
      "priority": "High" // Choose from: High, Medium, Low
    },
    {
      "area": "GitHub",
      "text": "Link your GitHub profile and ensure your top repositories have comprehensive READMEs.",
      "priority": "High"
    }
  ]
}

Guidelines for evaluation:
1. If resume, GitHub, or skills are missing/empty, evaluate them as 0 in their respective categories and suggest linking/adding them as HIGH priority recommendations.
2. The overall readinessScore should be a balanced weighted average of the four categories, but capped lower if a crucial asset (like the resume or GitHub) is entirely missing.
3. Keep the recommendations specific, realistic, and highly actionable.
4. Do NOT wrap the response in markdown code blocks.`;

    const aiResponse = await provider.generateText(prompt);
    const result = this.parseAIResponse(aiResponse.text.trim());

    const finalResult: InternshipReadinessResult = {
      ...result,
      lastUpdated: new Date().toISOString(),
    };

    // Cache the result
    READINESS_CACHE.set(cacheKey, { data: finalResult, expiresAt: Date.now() + CACHE_TTL_MS });

    return finalResult;
  }

  private parseAIResponse(text: string): Omit<InternshipReadinessResult, "lastUpdated"> {
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
