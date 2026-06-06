import type { CoachSuggestInput } from "./coach.validation.js";
import { getProviderForService } from "../../lib/ai-provider-registry.js";
import { logAIRequest } from "../../lib/ai-request-logger.js";
import { prisma } from "../../database/db.js";
import { createLogger } from "../../utils/logger.js";

const logger = createLogger("coach.service");

export class CoachService {
  /**
   * Generate a personalized coaching suggestion via Gemini.
   * Returns the full Markdown text (non-streamed, single response).
   */
  async suggest(input: CoachSuggestInput, userId: number): Promise<string> {
    const prompt = this.buildPrompt(input);
    const provider = getProviderForService("LATEX_CHAT"); // reuse existing AI config, no migration needed
    const response = await provider.generateText(prompt);
    logAIRequest("LATEX_CHAT", response, true, undefined, userId);
    return response.text.trim();
  }

  /**
   * Persist a coach advice for a user so they can reference it later.
   */
  async saveAdvice(
    userId: number,
    content: string,
    trigger: string,
    title?: string,
  ) {
    return prisma.coachAdvice.create({
      data: {
        userId,
        content,
        trigger,
        title: title ?? this.titleFromTrigger(trigger),
      },
    });
  }

  /**
   * Get all saved advice for a user, most recent first.
   */
  async getSavedAdvice(userId: number) {
    return prisma.coachAdvice.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 50,
    });
  }

  /**
   * Delete a single saved advice entry.
   */
  async deleteAdvice(userId: number, adviceId: number) {
    const advice = await prisma.coachAdvice.findUnique({
      where: { id: adviceId },
    });
    if (!advice) throw new Error("Advice not found");
    if (advice.userId !== userId) throw new Error("Not authorized");
    await prisma.coachAdvice.delete({ where: { id: adviceId } });
  }

  // ────────────────────────────────────────────────────────────────
  // Private helpers
  // ────────────────────────────────────────────────────────────────

  private titleFromTrigger(trigger: string): string {
    const titles: Record<string, string> = {
      FIRST_PR_COMPLETE: "After completing First PR Roadmap",
      REPO_BOOKMARKED: "Repo bookmark advice",
      GITHUB_CONNECTED: "GitHub analysis & suggestions",
      INACTIVITY: "Getting back on track",
      MANUAL: "Coach suggestion",
    };
    return titles[trigger] ?? "Coach suggestion";
  }

  private buildPrompt(input: CoachSuggestInput): string {
    const { trigger, context } = input;

    const skillsBlock =
      context.skills.length > 0
        ? `The user's skills: ${context.skills.join(", ")}.`
        : "The user has not listed any skills yet.";

    const guidesBlock =
      context.completedGuides.length > 0
        ? `Completed guides: ${context.completedGuides.join(", ")}.`
        : "";

    const reposBlock =
      context.bookmarkedRepos.length > 0
        ? `Bookmarked repos:\n${context.bookmarkedRepos.map((r) => `- ${r.name} (${r.language ?? "unknown"}, ${r.domain ?? "general"})`).join("\n")}`
        : "";

    const githubBlock = context.githubUsername
      ? `GitHub username: ${context.githubUsername}.`
      : "";

    let scenarioInstruction: string;

    switch (trigger) {
      case "FIRST_PR_COMPLETE":
        scenarioInstruction = `The user just completed the "First Pull Request Roadmap". Congratulate them briefly, then suggest 3 specific beginner-friendly open-source repositories that match their tech stack and skills. For each repo, explain why it's a good fit and give one concrete first step (e.g., "Look at issue #X labeled good-first-issue"). Prioritize repos that are actively maintained and welcoming to new contributors.`;
        break;

      case "REPO_BOOKMARKED":
        scenarioInstruction = `The user bookmarked repositories listed above. For the most recently bookmarked repo, give specific advice on how to approach contributing:
1. Reading the README and CONTRIBUTING.md
2. Understanding the project structure
3. Finding good-first-issues or documentation issues
4. Setting up the development environment
5. How to introduce themselves to the community (if applicable)
Keep it practical and actionable.`;
        break;

      case "GITHUB_CONNECTED":
        scenarioInstruction = `The user just connected their GitHub account. Based on their skills and profile, suggest 3 slightly more advanced "stretch" repositories they could contribute to — projects that would help them grow. Explain what makes each challenging but achievable. Include tips on how to stand out as a contributor.`;
        break;

      case "INACTIVITY":
        scenarioInstruction = `The user has been inactive for ${context.daysSinceLastActivity ?? 7}+ days.${
          context.lastActiveGuide
            ? ` They were last working on: "${context.lastActiveGuide}".`
            : ""
        } Write a friendly, encouraging message that:
1. Reminds them where they left off
2. Gives one small, 15-minute actionable step they can do right now
3. Shares a motivational insight about the value of consistent open-source contribution
Don't be pushy — be warm and supportive.`;
        break;

      default:
        scenarioInstruction = `Give the user personalized next-step guidance for their open-source contribution journey based on their profile and activity.`;
    }

    return `You are the InternHack Contribution Coach — a warm, knowledgeable mentor helping students contribute to open source.

USER PROFILE:
${skillsBlock}
${guidesBlock}
${reposBlock}
${githubBlock}

SCENARIO:
${scenarioInstruction}

FORMATTING RULES:
- Respond in clean Markdown (headings, bullets, bold for emphasis).
- Keep the total response under 600 words.
- Be specific and actionable — no generic platitudes.
- Use a friendly, peer-mentor tone (not corporate).
- Do NOT wrap the response in code fences or JSON.`;
  }
}
