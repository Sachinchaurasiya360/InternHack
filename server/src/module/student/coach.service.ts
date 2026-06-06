// server/src/module/student/coach.service.ts
import { prisma } from "../../database/db.js";
import { GeminiProvider } from "../../lib/providers/gemini.provider.js";
import { GithubAnalyticsService } from "./github-analytics.service.js";

const provider = new GeminiProvider("gemini-2.5-flash-lite");
const COACH_CACHE = new Map<string, { data: any; expiresAt: number }>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export interface CoachRecommendation {
  repoId: number;
  name: string;
  owner: string;
  url: string;
  description: string;
  language: string;
  difficulty: string;
  stars: number;
  matchPercentage: number;
  matchReason: string;
  starterIssueAreas: string[];
}

export interface CoachRoadmap {
  repoName: string;
  repoUrl: string;
  steps: { title: string; description: string; resources: string[] }[];
  prChecklist: string[];
}

export interface CoachFeedback {
  strengths: string[];
  issues: string[];
  improvedCode?: string;
  suggestions: string[];
}

export class CoachService {
  private githubService = new GithubAnalyticsService();

  async getRecommendations(userId: number): Promise<CoachRecommendation[]> {
    const cacheKey = `recommendations_${userId}`;
    const cached = COACH_CACHE.get(cacheKey);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.data;
    }

    // 1. Fetch User Skills
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { skills: true },
    });
    const skills = user?.skills || [];

    // 2. Fetch GitHub Analytics (if linked)
    let githubData = null;
    try {
      githubData = await this.githubService.getAnalytics(userId);
    } catch (err) {
      // Ignore github analytics errors
    }

    // 3. Fetch Open Source Repositories from Database
    const dbRepos = await prisma.opensourceRepo.findMany({
      take: 30,
      orderBy: { stars: "desc" },
      select: {
        id: true,
        name: true,
        owner: true,
        description: true,
        language: true,
        stars: true,
        url: true,
      },
    });

    const prompt = `You are an Open Source Maintainer and Developer Coach. Match the following student profile skills and GitHub quality analytics against the available repositories list to suggest the best 3 repositories for the student to contribute to.

STUDENT PROFILE:
Skills: ${JSON.stringify(skills)}
GitHub Analytics: ${JSON.stringify(githubData)}

AVAILABLE REPOSITORIES LIST:
${JSON.stringify(dbRepos, null, 2)}

Return ONLY a valid JSON array matching the exact format below (exactly 3 items):
[
  {
    "repoId": 1, // Must match the "id" from the available repositories list
    "name": "Repo Name",
    "owner": "owner-username",
    "url": "https://github.com/...",
    "description": "Short description",
    "language": "TypeScript",
    "difficulty": "Beginner", // Beginner, Intermediate, Advanced
    "stars": 120,
    "matchPercentage": 92, // integer 0-100
    "matchReason": "This repository matches your skills in React and Node.js perfectly. The codebase is friendly to newcomers.",
    "starterIssueAreas": [
      "Documentation updates in the README.",
      "Fixing simple layout CSS alignment bugs."
    ]
  }
]

Do NOT wrap the response in markdown code blocks.`;

    const aiResponse = await provider.generateText(prompt);
    const result = this.parseAIResponse<CoachRecommendation[]>(aiResponse.text.trim());

    COACH_CACHE.set(cacheKey, { data: result, expiresAt: Date.now() + CACHE_TTL_MS });

    return result;
  }

  async generateRoadmap(userId: number, repoId: number): Promise<CoachRoadmap> {
    const cacheKey = `roadmap_${userId}_${repoId}`;
    const cached = COACH_CACHE.get(cacheKey);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.data;
    }

    const repo = await prisma.opensourceRepo.findUnique({
      where: { id: repoId },
      select: {
        name: true,
        url: true,
        description: true,
        language: true,
      },
    });

    if (!repo) {
      throw new Error("Repository not found.");
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { skills: true },
    });

    const prompt = `You are a Senior Technical Lead. Generate a step-by-step contribution roadmap (4 steps) and a Pull Request Readiness Checklist for a student contributing to the following repository.

REPOSITORY DETAILS:
Name: ${repo.name}
Language: ${repo.language}
URL: ${repo.url}
Description: ${repo.description}

STUDENT SKILLS:
${JSON.stringify(user?.skills || [])}

Return ONLY a valid JSON object matching the exact format below:
{
  "repoName": "${repo.name}",
  "repoUrl": "${repo.url}",
  "steps": [
    {
      "title": "Step 1: Environment Setup",
      "description": "Fork and clone the repository. Install dependencies using npm install/yarn. Launch the project locally.",
      "resources": [
        "https://github.com/...", // Link to repo readme or relevant docs
        "https://git-scm.com/docs"
      ]
    }
  ],
  "prChecklist": [
    "Verify that your branch name matches repository conventions.",
    "Ensure the local unit tests pass before opening the pull request."
  ]
}

Ensure the steps and resources are relevant to the repository's tech stack and language.
Do NOT wrap the response in markdown code blocks.`;

    const aiResponse = await provider.generateText(prompt);
    const result = this.parseAIResponse<CoachRoadmap>(aiResponse.text.trim());

    COACH_CACHE.set(cacheKey, { data: result, expiresAt: Date.now() + CACHE_TTL_MS });

    return result;
  }

  async getFeedback(userId: number, repoId: number, codePatch: string): Promise<CoachFeedback> {
    const repo = await prisma.opensourceRepo.findUnique({
      where: { id: repoId },
      select: { name: true, language: true },
    });

    const prompt = `You are an Open Source Maintainer conducting a Pull Request review. Review the following code diff or snippet that a student is planning to submit to the repository '${repo?.name ?? "Target Repo"}' (${repo?.language ?? "Unknown Language"}).

CODE SNIPPET / DIFF:
${codePatch}

Analyze the changes for bugs, style compliance, security concerns, or architectural improvements.

Return ONLY a valid JSON object matching the exact format below:
{
  "strengths": [
    "Clean variable naming and appropriate modularization."
  ],
  "issues": [
    "Potential memory leak in connection listener.",
    "Lack of input validation for user parameters."
  ],
  "improvedCode": "Code snippet representing the corrected version...", // Optional. Provide if improvements are needed. Keep it as a string.
  "suggestions": [
    "Add error boundary checks around the parser block.",
    "Write a quick unit test representing this feature addition."
  ]
}

Do NOT wrap the response in markdown code blocks.`;

    const aiResponse = await provider.generateText(prompt);
    return this.parseAIResponse<CoachFeedback>(aiResponse.text.trim());
  }

  private parseAIResponse<T>(text: string): T {
    let clean = text.trim();
    if (clean.startsWith("```")) {
      clean = clean.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }
    try {
      return JSON.parse(clean) as T;
    } catch {
      const match = clean.match(/[\{\[][\s\S]*[\}\]]/);
      if (match) {
        return JSON.parse(match[0]) as T;
      }
      throw new Error("Failed to parse AI response as JSON");
    }
  }
}
