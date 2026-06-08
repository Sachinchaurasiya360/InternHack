import { prisma } from "../../database/prisma/prisma.js";
import { getProviderForService } from "../../lib/ai-provider-registry.js";
import { logAIRequest } from "../../lib/ai-request-logger.js";
import type { ReviewResponse } from "./solution-review.validation.js";
import { reviewResponseSchema } from "./solution-review.validation.js";

export class SolutionReviewService {
  async submitReview(
    userId: number,
    data: { title: string; language: string; code: string; problemContext?: string },
  ): Promise<{ id: number; review: ReviewResponse }> {
    const provider = getProviderForService("SOLUTION_REVIEW");
    const prompt = this.buildReviewPrompt(data);
    const response = await provider.generateText(prompt);

    try {
      const parsed = this.parseReviewResponse(response.text);

      logAIRequest("SOLUTION_REVIEW", response, true, undefined, userId);

      await prisma.usageLog.create({
        data: { userId, action: "SOLUTION_REVIEW" },
      });

      const record = await prisma.solutionReview.create({
        data: {
          userId,
          title: data.title,
          language: data.language,
          code: data.code,
          problemContext: data.problemContext ?? null,
          review: parsed as any,
        },
      });

      return { id: record.id, review: parsed };
    } catch (err) {
      logAIRequest("SOLUTION_REVIEW", response, false, err instanceof Error ? err.message : "Parse failed", userId);
      throw err;
    }
  }

  async getHistory(userId: number): Promise<Array<{ id: number; title: string; language: string; createdAt: Date }>> {
    const records = await prisma.solutionReview.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      select: { id: true, title: true, language: true, createdAt: true },
      take: 50,
    });
    return records;
  }

  async getReviewDetail(id: number, userId: number): Promise<{
    id: number; title: string; language: string; code: string; problemContext: string | null; review: unknown; createdAt: Date;
  } | null> {
    const record = await prisma.solutionReview.findUnique({ where: { id } });
    if (!record || record.userId !== userId) return null;
    return record;
  }

  private buildReviewPrompt(data: { language: string; code: string; problemContext?: string }): string {
    return `You are an expert code reviewer. Analyze the following solution and provide structured feedback.

LANGUAGE: ${data.language}

${data.problemContext ? `PROBLEM CONTEXT:\n${data.problemContext}\n` : ""}

CODE:
\`\`\`${data.language}
${data.code}
\`\`\`

Analyze the code and respond with ONLY valid JSON (no markdown formatting, no code blocks, no explanation) in this exact structure:
{
  "timeComplexity": "<Big-O time complexity with brief justification>",
  "spaceComplexity": "<Big-O space complexity with brief justification>",
  "readability": {
    "score": <number 1-10>,
    "feedback": "<specific readability feedback: variable naming, structure, comments, etc.>"
  },
  "edgeCases": [
    "<edge case the solution might miss or handles well>",
    "<another edge case>"
  ],
  "suggestions": [
    "<specific, actionable improvement suggestion>",
    "<another suggestion>"
  ]
}

Rules:
1. Be specific to THIS code — avoid generic advice
2. Provide 2-4 edge cases and 2-5 suggestions
3. For readability score: 1-3 = poor, 4-6 = decent, 7-8 = good, 9-10 = excellent`;
  }

  private parseReviewResponse(responseText: string): ReviewResponse {
    let jsonStr = responseText.trim();

    const jsonMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch?.[1]) {
      jsonStr = jsonMatch[1].trim();
    }

    jsonStr = jsonStr.replace(/,\s*([\]}])/g, "$1");

    let parsed: unknown;
    try {
      parsed = JSON.parse(jsonStr);
    } catch {
      const objMatch = jsonStr.match(/\{[\s\S]*\}/);
      if (objMatch) {
        const cleaned = objMatch[0].replace(/,\s*([\]}])/g, "$1");
        parsed = JSON.parse(cleaned);
      } else {
        parsed = {};
      }
    }

    const result = reviewResponseSchema.safeParse(parsed);
    if (result.success) {
      return result.data;
    }

    const obj = parsed as Record<string, unknown>;
    return {
      timeComplexity: typeof obj["timeComplexity"] === "string" ? obj["timeComplexity"] : "Unable to determine",
      spaceComplexity: typeof obj["spaceComplexity"] === "string" ? obj["spaceComplexity"] : "Unable to determine",
      readability: {
        score: typeof (obj["readability"] as Record<string, unknown>)?.["score"] === "number"
          ? Math.max(1, Math.min(10, Math.round((obj["readability"] as Record<string, unknown>)["score"] as number)))
          : 5,
        feedback: typeof (obj["readability"] as Record<string, unknown>)?.["feedback"] === "string"
          ? (obj["readability"] as Record<string, unknown>)["feedback"] as string
          : "No feedback available",
      },
      edgeCases: Array.isArray(obj["edgeCases"])
        ? obj["edgeCases"].filter((s): s is string => typeof s === "string")
        : [],
      suggestions: Array.isArray(obj["suggestions"])
        ? obj["suggestions"].filter((s): s is string => typeof s === "string")
        : [],
    };
  }
}
