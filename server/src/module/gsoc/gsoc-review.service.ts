import { getProviderForService } from "../../lib/ai-provider-registry.js";
import { logAIRequest } from "../../lib/ai-request-logger.js";
import type { GsocReviewInput } from "./gsoc-review.validation.js";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface ScoreDimension {
  score: number; // 0-10
  label: string;
}

export interface ReviewSuggestion {
  category: "Timeline Clarity" | "Deliverables" | "About Me" | "Organization Alignment" | "Structure & Length";
  critique: string;
  fix: string;
}

export interface GsocReviewResult {
  scores: {
    timelineClarity: ScoreDimension;
    deliverables: ScoreDimension;
    aboutMe: ScoreDimension;
    orgAlignment: ScoreDimension;
    structureLength: ScoreDimension;
  };
  overallScore: number;
  suggestions: ReviewSuggestion[];
  benchmark: {
    status: string;
    winningTemplate: string;
  };
  fallbackUsed: boolean;
}

// ── Prompt builder ─────────────────────────────────────────────────────────────

function buildPrompt(input: GsocReviewInput): string {
  const contextBlock =
    input.targetOrg || input.targetStack
      ? `Context:
- Target Organization: ${input.targetOrg ?? "Not specified"}
- Target Tech Stack: ${input.targetStack ?? "Not specified"}
`
      : "";

  return `You are an expert GSoC (Google Summer of Code) proposal reviewer with 10+ years of mentoring experience. You have reviewed hundreds of accepted and rejected proposals.

${contextBlock}
Evaluate the following GSoC proposal draft and return ONLY valid JSON (no markdown fences, no extra text).

DRAFT:
"""
${input.draft}
"""

Score each dimension on a scale of 0-10 and provide specific, actionable feedback.

Scoring criteria:
- Timeline Clarity (0-10): Does it have a week-by-week breakdown? Are mid-term and final deliverables explicitly called out? Is it realistic?
- Deliverables (0-10): Are outcomes measurable? Does every deliverable have a falsifiable acceptance criterion? Is there ambiguity?
- About Me (0-10): Does the applicant prove competence with relevant tech? Are there code links/contributions mentioned? Is there community engagement proof?
- Organization Alignment (0-10): Does it directly address the org's specific tech stack, tools, and project ideas? Are existing codebase patterns referenced?
- Structure & Length (0-10): Is the section long enough? Major sections should have 300+ words. Is the writing clear and professional?

Return ONLY this exact JSON shape:
{
  "scores": {
    "timelineClarity": { "score": 0, "label": "Missing week-by-week breakdown" },
    "deliverables": { "score": 0, "label": "No acceptance criteria" },
    "aboutMe": { "score": 0, "label": "No contributions mentioned" },
    "orgAlignment": { "score": 0, "label": "Tech stack not addressed" },
    "structureLength": { "score": 0, "label": "Too short for major section" }
  },
  "overallScore": 0,
  "suggestions": [
    {
      "category": "Timeline Clarity",
      "critique": "Your timeline has no week-by-week breakdown. A reviewer cannot tell if this is a 2-week or 2-month effort.",
      "fix": "Week 1-2: Study codebase, finalize prompt schema. Week 3-4: Build UI component with mock data. Week 5-6: Implement backend controller..."
    }
  ],
  "benchmark": {
    "status": "Your abstract is X/10: describe current state here",
    "winningTemplate": "Accepted proposals in this category consistently include: (1) a data-backed problem statement, (2) explicit API contracts, (3) week-by-week milestones with buffer weeks, (4) named files from the org's codebase."
  }
}

Rules:
- scores.*.score must be integers 0-10
- overallScore must be the integer average of all 5 dimension scores
- suggestions must have 3-6 items, each targeting a different weakness
- Each suggestion must have category, critique, and fix
- category must be one of: "Timeline Clarity", "Deliverables", "About Me", "Organization Alignment", "Structure & Length"
- benchmark.status must reference the actual score and describe the current quality honestly
- Do NOT wrap JSON in markdown code fences
- Do NOT include any text before or after the JSON`;
}

// ── Parser ────────────────────────────────────────────────────────────────────

function parseReviewResponse(text: string): GsocReviewResult | null {
  let cleaned = text.trim();
  // Strip markdown fences
  if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  }
  // Extract JSON object
  const match = cleaned.match(/\{[\s\S]*\}/);
  if (!match) return null;

  try {
    const raw = JSON.parse(match[0]) as Record<string, unknown>;

    const scores = raw["scores"] as Record<string, { score: unknown; label: unknown }> | undefined;
    if (!scores) return null;

    const clamp = (v: unknown): number => Math.min(10, Math.max(0, Math.round(Number(v) || 0)));
    const label = (v: unknown): string => (typeof v === "string" ? v.trim() : "");

    const parsed: GsocReviewResult["scores"] = {
      timelineClarity: { score: clamp(scores["timelineClarity"]?.score), label: label(scores["timelineClarity"]?.label) },
      deliverables:    { score: clamp(scores["deliverables"]?.score),    label: label(scores["deliverables"]?.label) },
      aboutMe:         { score: clamp(scores["aboutMe"]?.score),         label: label(scores["aboutMe"]?.label) },
      orgAlignment:    { score: clamp(scores["orgAlignment"]?.score),    label: label(scores["orgAlignment"]?.label) },
      structureLength: { score: clamp(scores["structureLength"]?.score), label: label(scores["structureLength"]?.label) },
    };

    const avgScore = Math.round(
      (parsed.timelineClarity.score + parsed.deliverables.score + parsed.aboutMe.score + parsed.orgAlignment.score + parsed.structureLength.score) / 5
    );

    const rawSuggestions = Array.isArray(raw["suggestions"]) ? raw["suggestions"] : [];
    const VALID_CATEGORIES = new Set<string>(["Timeline Clarity", "Deliverables", "About Me", "Organization Alignment", "Structure & Length"]);
    const suggestions: ReviewSuggestion[] = rawSuggestions
      .filter((s): s is Record<string, unknown> => typeof s === "object" && s !== null)
      .map((s) => ({
        category: VALID_CATEGORIES.has(String(s["category"])) ? (s["category"] as ReviewSuggestion["category"]) : "Structure & Length",
        critique: typeof s["critique"] === "string" ? s["critique"].trim() : "",
        fix:      typeof s["fix"]      === "string" ? s["fix"].trim()      : "",
      }))
      .filter((s) => s.critique && s.fix)
      .slice(0, 6);

    const rawBenchmark = raw["benchmark"] as Record<string, unknown> | undefined;

    return {
      scores: parsed,
      overallScore: clamp(raw["overallScore"] ?? avgScore),
      suggestions,
      benchmark: {
        status:          typeof rawBenchmark?.["status"]          === "string" ? rawBenchmark["status"].trim()          : `Overall score: ${avgScore}/10`,
        winningTemplate: typeof rawBenchmark?.["winningTemplate"] === "string" ? rawBenchmark["winningTemplate"].trim() : "Accepted proposals include a data-backed problem statement, week-by-week milestones, and named files from the org's codebase.",
      },
      fallbackUsed: false,
    };
  } catch {
    return null;
  }
}

// ── Fallback ──────────────────────────────────────────────────────────────────

function buildFallback(input: GsocReviewInput): GsocReviewResult {
  const wordCount = input.draft.split(/\s+/).length;
  const hasTimeline = /week\s*\d|week\s+[1-9]|w\d\s*[-:]/i.test(input.draft);
  const hasDeliverables = /deliver|acceptance\s*criteria|measurable|milestone/i.test(input.draft);
  const hasAboutMe = /github\.com|pr\s*#|pull\s*request|contribution|commit/i.test(input.draft);
  const hasOrgAlign = input.targetStack
    ? new RegExp(input.targetStack.split(/[\s,]+/)[0] ?? "", "i").test(input.draft)
    : /tech\s*stack|framework|library/i.test(input.draft);

  return {
    scores: {
      timelineClarity: { score: hasTimeline ? 5 : 2, label: hasTimeline ? "Partial timeline found" : "No week-by-week breakdown detected" },
      deliverables:    { score: hasDeliverables ? 5 : 2, label: hasDeliverables ? "Some deliverables mentioned" : "No acceptance criteria found" },
      aboutMe:         { score: hasAboutMe ? 5 : 1, label: hasAboutMe ? "Some contribution links found" : "No GitHub links or PR references found" },
      orgAlignment:    { score: hasOrgAlign ? 5 : 2, label: hasOrgAlign ? "Some stack alignment found" : "Target tech stack not mentioned" },
      structureLength: { score: wordCount > 300 ? 6 : wordCount > 150 ? 4 : 2, label: `~${wordCount} words, ${wordCount > 300 ? "adequate" : "too short"}` },
    },
    overallScore: 3,
    suggestions: [
      {
        category: "Timeline Clarity",
        critique: "Add a week-by-week breakdown with explicit mid-term and final evaluation deliverables.",
        fix: "Week 1-2 (Community Bonding): Study codebase, finalize approach. Week 3-4: Build UI component. Week 5-6: Implement backend. Week 7: Add usage limits. Week 8: Polish, tests. Week 9-10: Docs, final PR.",
      },
      {
        category: "Deliverables",
        critique: "Each deliverable needs a falsifiable acceptance criterion. 'Implement controller' is not a deliverable.",
        fix: "Deliverable 1: AI Review Endpoint. POST /api/gsoc/review returns { scores, suggestions } in < 4s. Returns 429 when free-tier user exceeds 3/month. Validated with Zod. Tested with Jest.",
      },
      {
        category: "About Me",
        critique: "No GitHub profile, PR links, or community engagement evidence found.",
        fix: "Add: 'I've contributed to [Org] since [date]. Relevant work: PR #XX (feature), PR #YY (bugfix). GitHub: github.com/yourname. I've already posted on the org's mailing list on [date].'",
      },
      {
        category: "Organization Alignment",
        critique: "The proposal doesn't reference the org's specific codebase patterns, tools, or existing code.",
        fix: "Name specific files, patterns, or APIs: 'Following the module pattern in ats.controller.ts, I'll extend gsoc.routes.ts with a new /proposal-review endpoint using the existing usageLimit middleware.'",
      },
    ],
    benchmark: {
      status: "Draft needs significant work, currently missing key winning-proposal signals.",
      winningTemplate: "Accepted proposals include: (1) Data-backed problem statement with acceptance rate stats, (2) explicit week-by-week timeline with buffer weeks, (3) falsifiable acceptance criteria table, (4) named files/patterns from the org's codebase, (5) community engagement evidence.",
    },
    fallbackUsed: true,
  };
}

// ── Service ───────────────────────────────────────────────────────────────────

export class GsocReviewService {
  async review(input: GsocReviewInput): Promise<GsocReviewResult> {
    try {
      const provider = getProviderForService("GSOC_REVIEW");
      const prompt = buildPrompt(input);
      const response = await provider.generateText(prompt);
      const text = response.text.trim();
      const parsed = parseReviewResponse(text);

      if (!parsed) {
        logAIRequest("GSOC_REVIEW", response, false, "Failed to parse review response");
        return buildFallback(input);
      }

      logAIRequest("GSOC_REVIEW", response, true);
      return parsed;
    } catch {
      return buildFallback(input);
    }
  }
}
