import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "../../database/db.js";

export class OpensourceService {
  async getRepoInsights(repoId: number, userId: number) {
    const repo = await prisma.opensourceRepo.findUnique({
      where: { id: repoId },
    });
    if (!repo) {
      throw new Error("Repository not found");
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { skills: true },
    });
    const userSkills = user?.skills || [];

    // Fetch good first issues from GitHub
    let issues: any[] = [];
    try {
      const token = process.env["GITHUB_TOKEN"];
      const headers: Record<string, string> = {
        "User-Agent": "InternHack-Insights",
      };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      // Search query: repo:owner/name is:issue is:open label:"good first issue","help wanted"
      const q = `repo:${repo.owner}/${repo.name} is:issue is:open label:"good first issue",label:"help wanted"`;
      
      const res = await axios.get("https://api.github.com/search/issues", {
        params: {
          q,
          sort: "updated",
          order: "desc",
          per_page: 5,
        },
        headers,
      });

      if (res.data && res.data.items) {
        issues = res.data.items.map((item: any) => ({
          title: item.title,
          url: item.html_url,
          number: item.number,
          labels: item.labels.map((l: any) => l.name),
        }));
      }
    } catch (err: any) {
      console.error("[OpensourceService] Error fetching GitHub issues:", err.message);
      // Fallback to empty issues array if GitHub API fails or rate limits
    }

    let recommendation = "";

    try {
      if (process.env.GEMINI_API_KEY) {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

        const prompt = `You are an AI assistant helping a student find a suitable open-source issue to contribute to.

USER PROFILE SKILLS:
${userSkills.length > 0 ? userSkills.join(", ") : "Beginner developer"}

REPOSITORY:
Name: ${repo.owner}/${repo.name}
Tech Stack: ${repo.techStack.join(", ")}
Description: ${repo.description}

OPEN ISSUES (Good First Issues):
${issues.length > 0 ? JSON.stringify(issues, null, 2) : "No specific 'good first issues' found at the moment."}

TASK:
Write a short, encouraging paragraph (2-3 sentences) explaining why this repository is a good match for the user's skills.
Then, if there are open issues provided, recommend one specific issue from the list and briefly explain why they should start with it. If there are no issues, encourage them to look through the codebase or read the contributing guidelines.

Format the response nicely in Markdown.`;

        const result = await model.generateContent(prompt);
        recommendation = result.response.text().trim();
      } else {
        recommendation = "AI recommendation is currently unavailable due to missing API key.";
      }
    } catch (err: any) {
      console.error("[OpensourceService] Error generating AI recommendation:", err.message);
      recommendation = "AI recommendation could not be generated at this time.";
    }

    return {
      issues,
      recommendation,
    };
  }
}
