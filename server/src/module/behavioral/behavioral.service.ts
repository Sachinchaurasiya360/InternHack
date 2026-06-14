import { GoogleGenerativeAI } from "@google/generative-ai";
import type { EvaluateStarInput, StarEvaluationResult, SectionEvaluation } from "./behavioral.validation.js";

function buildPrompt(input: EvaluateStarInput): string {
  return `You are an expert behavioral interview coach specializing in the STAR (Situation, Task, Action, Result) method. Evaluate the following STAR response and return ONLY valid JSON (no markdown fences, no extra text).

QUESTION: "${input.question}"

STAR RESPONSE:
Situation: "${input.situation}"
Task: "${input.task}"
Action: "${input.action}"
Result: "${input.result}"

Evaluate each STAR section on these criteria:
1. **addressed** (boolean): Does the section adequately answer its purpose?
2. **specificity** (string): Is it specific enough? Mention good points like quantification ("20% improvement") or flag vagueness ("too general").
3. **feedback** (string): A short actionable sentence.

Then estimate speaking time based on total word count (~150 words/min), and provide a model answer that demonstrates the ideal STAR structure for this question.

Return ONLY this exact JSON shape:
{
  "situation": { "addressed": true, "specificity": "...", "feedback": "..." },
  "task": { "addressed": true, "specificity": "...", "feedback": "..." },
  "action": { "addressed": true, "specificity": "...", "feedback": "..." },
  "result": { "addressed": true, "specificity": "...", "feedback": "..." },
  "overallScore": 7,
  "estimatedSpeakingTime": "2 minutes 30 seconds",
  "modelAnswer": "A complete model STAR answer in first person...",
  "overallFeedback": "Overall strengths and areas to improve..."
}

Rules:
- overallScore must be an integer 0-10
- estimatedSpeakingTime should compare to a target of ~2 minutes (e.g., "2 minutes 30 seconds: aim for under 2 minutes" or "1 minute 45 seconds: good length")
- modelAnswer should be a complete, polished STAR response written in first person
- Do NOT wrap JSON in markdown code fences
- Do NOT include any text before or after the JSON`;
}

function parseEvaluationResponse(text: string): StarEvaluationResult | null {
  let cleaned = text.trim();
  if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  }
  const match = cleaned.match(/\{[\s\S]*\}/);
  if (!match) return null;

  try {
    const raw = JSON.parse(match[0]) as Record<string, unknown>;

    const parseSection = (s: unknown): SectionEvaluation => {
      const obj = (s ?? {}) as Record<string, unknown>;
      return {
        addressed: Boolean(obj["addressed"]),
        specificity: typeof obj["specificity"] === "string" ? obj["specificity"].trim() : "",
        feedback: typeof obj["feedback"] === "string" ? obj["feedback"].trim() : "",
      };
    };

    return {
      situation: parseSection(raw["situation"]),
      task: parseSection(raw["task"]),
      action: parseSection(raw["action"]),
      result: parseSection(raw["result"]),
      overallScore: Math.min(10, Math.max(0, Math.round(Number(raw["overallScore"]) || 0))),
      estimatedSpeakingTime: typeof raw["estimatedSpeakingTime"] === "string" ? raw["estimatedSpeakingTime"].trim() : "",
      modelAnswer: typeof raw["modelAnswer"] === "string" ? raw["modelAnswer"].trim() : "",
      overallFeedback: typeof raw["overallFeedback"] === "string" ? raw["overallFeedback"].trim() : "",
    };
  } catch {
    return null;
  }
}

function buildFallback(input: EvaluateStarInput): StarEvaluationResult {
  const wordCount =
    input.situation.split(/\s+/).length +
    input.task.split(/\s+/).length +
    input.action.split(/\s+/).length +
    input.result.split(/\s+/).length;

  const totalSeconds = Math.max(1, Math.ceil((wordCount / 150) * 60));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const minPart = `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  const secPart = seconds > 0 ? ` ${seconds} second${seconds !== 1 ? "s" : ""}` : "";
  const speakingTime = `${minPart}${secPart}`;

  return {
    situation: {
      addressed: input.situation.length >= 60,
      specificity: input.situation.length >= 60 ? "Adequate context provided" : "Too brief: add more context",
      feedback: input.situation.length >= 60
        ? "Good context, consider adding a specific time frame."
        : "Expand with when and where this took place.",
    },
    task: {
      addressed: input.task.length >= 30,
      specificity: input.task.length >= 30 ? "Clear responsibility stated" : "Unclear what your role was",
      feedback: input.task.length >= 30
        ? "Good ownership statement."
        : "Be explicit about what you were responsible for.",
    },
    action: {
      addressed: input.action.length >= 100,
      specificity: input.action.length >= 100 ? "Detailed steps described" : "Too vague: list specific actions",
      feedback: input.action.length >= 100
        ? "Good detail, try to order steps chronologically."
        : "Break down what YOU specifically did into 2-3 concrete steps.",
    },
    result: {
      addressed: input.result.length >= 30,
      specificity: input.result.length >= 30 ? "Outcome mentioned" : "No measurable outcome",
      feedback: input.result.length >= 30
        ? "Good, try to quantify the impact with numbers."
        : "Add a concrete outcome with metrics if possible.",
    },
    overallScore: Math.min(10, Math.max(1, Math.round(wordCount / 50))),
    estimatedSpeakingTime: `${speakingTime}: aim for under 2 minutes`,
    modelAnswer: `When I worked at [Company], our team faced [specific challenge]. As the [role], I was responsible for [key task]. I took the following steps: [action 1], [action 2], [action 3]. As a result, [quantified outcome]. This experience taught me [lesson].`,
    overallFeedback: "Your response covers the STAR structure. Focus on adding specific metrics and concrete details to make your answer more impactful.",
  };
}

export class BehavioralService {
  async evaluate(input: EvaluateStarInput): Promise<StarEvaluationResult> {
    const apiKey = process.env["GEMINI_API_KEY"];
    if (!apiKey) {
      return buildFallback(input);
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
      const prompt = buildPrompt(input);
      const result = await model.generateContent(prompt);
      const text = result.response.text().trim();
      const parsed = parseEvaluationResponse(text);

      if (!parsed) {
        return buildFallback(input);
      }

      return parsed;
    } catch {
      return buildFallback(input);
    }
  }
}
