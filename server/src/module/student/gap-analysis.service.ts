// server/src/module/student/gap-analysis.service.ts
import { prisma } from "../../database/db.js";
import { GeminiProvider } from "../../lib/providers/gemini.provider.js";
import { GithubAnalyticsService } from "./github-analytics.service.js";
import { ContributionsService } from "./contributions.service.js";

const provider = new GeminiProvider("gemini-2.5-flash-lite");
const GAP_ANALYSIS_CACHE = new Map<string, { data: any; expiresAt: number }>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export interface TargetRoleMatch {
  roleName: string;
  matchPercentage: number;
  isTarget: boolean;
}

export interface SkillGap {
  skillName: string;
  status: "Missing" | "Weak" | "Strong";
  importance: "High" | "Medium" | "Low";
}

export interface LearningPriority {
  technology: string;
  priority: "High" | "Medium" | "Low";
  timeframe: string;
  reason: string;
}

export interface GapAnalysisResult {
  targetRoles: TargetRoleMatch[];
  skillGaps: SkillGap[];
  missingTechnologies: string[];
  learningPriorities: LearningPriority[];
  careerRecommendations: string[];
  lastUpdated: string;
}

export class GapAnalysisService {
  private githubService = new GithubAnalyticsService();
  private contributionsService = new ContributionsService();

  async getGapAnalysis(userId: number, forceRefresh = false, queryTargetRole?: string): Promise<GapAnalysisResult> {
    const cacheKey = `${userId}_${queryTargetRole || ""}`;
    if (!forceRefresh) {
      const cached = GAP_ANALYSIS_CACHE.get(cacheKey);
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
        githubUrl: true,
      },
    });

    if (!user) {
      throw new Error("Student profile not found.");
    }

    // 2. Fetch Job Preferences (Target Roles)
    const jobPref = await prisma.userJobPreference.findUnique({
      where: { userId },
      select: {
        desiredRoles: true,
      },
    });

    let targetRoles = jobPref?.desiredRoles || [];
    if (queryTargetRole && !targetRoles.includes(queryTargetRole)) {
      targetRoles = [queryTargetRole, ...targetRoles];
    }
    if (targetRoles.length === 0) {
      targetRoles = ["Fullstack Engineer", "Frontend Engineer", "Backend Engineer"];
    }

    // 3. Fetch Latest ATS Score
    const latestAts = await prisma.atsScore.findFirst({
      where: { studentId: userId },
      orderBy: { createdAt: "desc" },
      select: { overallScore: true },
    });

    // 4. Fetch Verified Skills
    const verifiedSkills = await prisma.verifiedSkill.findMany({
      where: { studentId: userId },
      select: {
        skillName: true,
        score: true,
      },
    });

    // 5. Fetch GitHub Analytics (if linked)
    let githubData = null;
    if (user.githubUrl) {
      try {
        githubData = await this.githubService.getAnalytics(userId);
      } catch (err) {
        // Ignore github analytics errors
      }
    }

    // 6. Fetch Open Source Contributions Dashboard Data
    let openSourceData = null;
    try {
      openSourceData = await this.contributionsService.getDashboard(userId);
    } catch (err) {
      // Ignore open source dashboard fetch errors
    }

    // 7. Build evaluation context
    const evaluationContext = {
      studentName: user.name,
      profileSkills: user.skills,
      targetRoles,
      atsResumeScore: latestAts ? latestAts.overallScore : null,
      verifiedSkills: verifiedSkills.map((s) => ({ name: s.skillName, score: s.score })),
      githubAnalytics: githubData,
      openSourceContributions: openSourceData
        ? {
            totalPRs: openSourceData.totalPRs,
            mergedPRs: openSourceData.mergedPRs,
            openPRs: openSourceData.openPRs,
            badgesCount: openSourceData.badges.length,
          }
        : null,
    };

    const prompt = `You are a Principal Software Architect, Senior Tech Recruiter, and Technical Mentor.
Evaluate this student's profile details against their target engineering roles to detect skill gaps, missing technologies, target role match percentages, and learning priorities.

STUDENT PROFILE CONTEXT:
${JSON.stringify(evaluationContext, null, 2)}

Return ONLY a valid JSON object matching the exact format below:
{
  "targetRoles": [
    {
      "roleName": "Frontend Engineer",
      "matchPercentage": 78,
      "isTarget": true // set to true if it matches one of their specified targetRoles
    }
  ],
  "skillGaps": [
    {
      "skillName": "React Server Components",
      "status": "Missing", // "Missing" (completely absent), "Weak" (mentioned but no verified/deep project proof), "Strong" (verified or highly visible in project/PR metrics)
      "importance": "High" // "High", "Medium", "Low" importance for the respective target role
    }
  ],
  "missingTechnologies": ["Docker", "TypeScript", "Redis"],
  "learningPriorities": [
    {
      "technology": "TypeScript",
      "priority": "High", // "High", "Medium", "Low"
      "timeframe": "1-2 weeks", // e.g., "1-2 weeks", "3-4 weeks"
      "reason": "TypeScript is critical for modern frontend development and is strongly expected by recruiters in Frontend/Fullstack roles."
    }
  ],
  "careerRecommendations": [
    "Build a fullstack portfolio project using TypeScript to demonstrate structural type safety.",
    "Attempt the React skill assessment test to get a verified skill badge on your profile."
  ]
}

Guidelines:
1. Focus on the student's targetRoles.
2. Provide a realistic match percentage. If crucial technologies/skills for a role are missing, matchPercentage should reflect that.
3. Keep the skillGaps list focused (10-15 key industry items relevant to the target roles).
4. Do NOT wrap the JSON response in markdown code blocks.`;

    const aiResponse = await provider.generateText(prompt);
    const result = this.parseAIResponse(aiResponse.text.trim());

    const finalResult: GapAnalysisResult = {
      ...result,
      lastUpdated: new Date().toISOString(),
    };

    GAP_ANALYSIS_CACHE.set(cacheKey, { data: finalResult, expiresAt: Date.now() + CACHE_TTL_MS });

    return finalResult;
  }

  private parseAIResponse(text: string): Omit<GapAnalysisResult, "lastUpdated"> {
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
