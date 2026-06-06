// server/src/module/student/project-recommendations.service.ts
import { prisma } from "../../database/db.js";
import { GeminiProvider } from "../../lib/providers/gemini.provider.js";
import { GithubAnalyticsService } from "./github-analytics.service.js";

const provider = new GeminiProvider("gemini-2.5-flash-lite");
const RECOMMENDATION_CACHE = new Map<string, { data: any; expiresAt: number }>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export interface ProjectRecommendation {
  title: string;
  description: string;
  targetRole: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  portfolioImpact: number;
  resumeImpact: number;
  skills: string[];
  milestones: { title: string; description: string }[];
}

export class ProjectRecommendationService {
  private githubService = new GithubAnalyticsService();

  async getRecommendations(userId: number, forceRefresh = false): Promise<ProjectRecommendation[]> {
    const cacheKey = String(userId);
    if (!forceRefresh) {
      const cached = RECOMMENDATION_CACHE.get(cacheKey);
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
      },
    });

    if (!user) {
      throw new Error("Student profile not found.");
    }

    // 2. Fetch Latest ATS Score
    const latestAts = await prisma.atsScore.findFirst({
      where: { studentId: userId },
      orderBy: { createdAt: "desc" },
      select: { overallScore: true },
    });

    // 3. Fetch GitHub Analytics (if linked)
    let githubData = null;
    try {
      githubData = await this.githubService.getAnalytics(userId);
    } catch (err) {
      // Ignore github analytics errors
    }

    // 4. Build context
    const evaluationContext = {
      studentName: user.name,
      skills: user.skills,
      atsResumeScore: latestAts ? latestAts.overallScore : null,
      githubAnalytics: githubData,
    };

    const prompt = `You are a Senior Software Architect and Technical Mentor. Recommend exactly 3 portfolio-enhancing projects tailored to this student's skills, experience, and career trajectory.

STUDENT PROFILE CONTEXT:
${JSON.stringify(evaluationContext, null, 2)}

Return ONLY a valid JSON array matching the exact format below (exactly 3 items):
[
  {
    "title": "Real-time Chat with Collaborative Canvas",
    "description": "Build a real-time messaging application featuring collaborative whiteboards, utilizing WebSocket protocols and vector rendering.",
    "targetRole": "Fullstack Engineer", // Frontend Engineer, Backend Engineer, Fullstack Engineer, DevOps, Systems Engineer, Data Engineer
    "difficulty": "Intermediate", // Beginner, Intermediate, Advanced
    "duration": "2-3 weeks",
    "portfolioImpact": 88, // integer 0-100 representing how impressive this is in a portfolio
    "resumeImpact": 85, // integer 0-100 representing resume keyword match potential
    "skills": ["TypeScript", "React", "Socket.io", "Node.js", "Redis"],
    "milestones": [
      {
        "title": "Milestone 1: Backend WebSocket Server Setup",
        "description": "Establish a Node.js server with Socket.io configuration and configure Redis pub/sub for scaling chat channels."
      },
      {
        "title": "Milestone 2: Collaborative Canvas Sync",
        "description": "Develop a React drawing canvas and sync vector coordinates in real-time across connected users."
      }
    ]
  }
]

Guidelines:
1. Recommend projects that directly match or slightly extend the student's skills, filling gap areas.
2. Provide 3-4 realistic milestones for each project.
3. Do NOT wrap the JSON response in markdown code blocks.`;

    const aiResponse = await provider.generateText(prompt);
    const result = this.parseAIResponse(aiResponse.text.trim());

    RECOMMENDATION_CACHE.set(cacheKey, { data: result, expiresAt: Date.now() + CACHE_TTL_MS });

    return result;
  }

  private parseAIResponse(text: string): ProjectRecommendation[] {
    let clean = text.trim();
    if (clean.startsWith("```")) {
      clean = clean.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }
    try {
      return JSON.parse(clean);
    } catch {
      const match = clean.match(/\[[\s\S]*\]/);
      if (match) {
        return JSON.parse(match[0]);
      }
      throw new Error("Failed to parse AI response as JSON");
    }
  }
}
