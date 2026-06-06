// server/src/module/student/github-analytics.service.ts
import { prisma } from "../../database/db.js";
import { GeminiProvider } from "../../lib/providers/gemini.provider.js";

const provider = new GeminiProvider("gemini-2.5-flash-lite");
const ANALYTICS_CACHE = new Map<string, { data: any; expiresAt: number }>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export interface GitHubAnalyticsResult {
  developerScore: number;
  developerRank: string;
  projectDiversityScore: number;
  documentationQualityScore: number;
  repositoryActivityScore: number;
  techStackBreakdown: { name: string; percentage: number }[];
  recommendations: string[];
  totalStars: number;
  totalForks: number;
  publicRepos: number;
}

export class GithubAnalyticsService {
  async getAnalytics(userId: number): Promise<GitHubAnalyticsResult> {
    // 1. Get user and their githubUrl
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { githubUrl: true },
    });

    if (!user || !user.githubUrl) {
      throw new Error("GitHub account not linked. Please update your profile.");
    }

    const username = this.parseGitHubUsername(user.githubUrl);
    if (!username) {
      throw new Error("Invalid GitHub URL format.");
    }

    // 2. Check cache
    const cacheKey = username.toLowerCase();
    const cached = ANALYTICS_CACHE.get(cacheKey);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.data;
    }

    // 3. Fetch from GitHub API
    const headers = { "User-Agent": "InternHack-App", Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) {
      (headers as any)["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, { headers }),
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&type=owner&sort=updated`, { headers }),
    ]);

    if (!userRes.ok) {
      if (userRes.status === 404) throw new Error("GitHub user not found");
      throw new Error(`GitHub API error: ${userRes.status}`);
    }

    const profile = await userRes.json() as any;
    const repos = reposRes.ok ? (await reposRes.ok ? await reposRes.json() : []) as any[] : [];

    const ownRepos = repos.filter((r: any) => !r.fork);
    let totalStars = 0;
    let totalForks = 0;
    const repoListForAI: any[] = [];

    for (const repo of ownRepos) {
      totalStars += repo.stargazers_count ?? 0;
      totalForks += repo.forks_count ?? 0;
      repoListForAI.push({
        name: repo.name,
        description: repo.description ?? "",
        language: repo.language ?? "Unknown",
        stars: repo.stargazers_count ?? 0,
        forks: repo.forks_count ?? 0,
        hasReadme: !!repo.has_pages || true, // fallback metadata check
        updatedAt: repo.updated_at,
      });
    }

    // 4. Call Gemini to perform detailed quality and diversity evaluation
    const prompt = `You are an expert technical interviewer and software architect. Evaluate the following GitHub profile repositories to determine a Developer Career Score (0-100), technology stack breakdown, project diversity, and documentation quality.

GITHUB PROFILE:
Username: ${profile.login}
Public Repositories: ${profile.public_repos}
Total Stars (excluding forks): ${totalStars}
Total Forks (excluding forks): ${totalForks}

REPOSITORIES LIST:
${JSON.stringify(repoListForAI.slice(0, 30), null, 2)}

Return ONLY a valid JSON object matching the exact format below:
{
  "developerScore": 84, // integer 0-100
  "developerRank": "Rising Contributor", // e.g. Beginner, Novice, Rising Contributor, Advanced Developer, Staff Engineer
  "projectDiversityScore": 75, // integer 0-100
  "documentationQualityScore": 80, // integer 0-100
  "repositoryActivityScore": 85, // integer 0-100
  "techStackBreakdown": [
    { "name": "TypeScript", "percentage": 60 },
    { "name": "Python", "percentage": 30 },
    { "name": "Go", "percentage": 10 }
  ],
  "recommendations": [
    "Write comprehensive README files for key repositories.",
    "Add unit tests to your projects to demonstrate code reliability."
  ]
}

Ensure:
- techStackBreakdown sum equals roughly 100.
- recommendations are highly specific, constructive, and actionable.
- Do not wrap in markdown code blocks.`;

    const aiResponse = await provider.generateText(prompt);
    const result = this.parseAIResponse(aiResponse.text.trim());

    const finalResult: GitHubAnalyticsResult = {
      ...result,
      totalStars,
      totalForks,
      publicRepos: profile.public_repos ?? ownRepos.length,
    };

    // 5. Cache result
    ANALYTICS_CACHE.set(cacheKey, { data: finalResult, expiresAt: Date.now() + CACHE_TTL_MS });

    return finalResult;
  }

  private parseGitHubUsername(url: string): string | null {
    const match = url.match(/github\.com\/([^\/\s\?#]+)/);
    return match ? match[1]! : null;
  }

  private parseAIResponse(text: string): Omit<GitHubAnalyticsResult, "totalStars" | "totalForks" | "publicRepos"> {
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
