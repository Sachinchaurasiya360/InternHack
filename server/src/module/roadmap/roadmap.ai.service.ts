import { z } from "zod";
import { GeminiProvider } from "../../lib/providers/gemini.provider.js";
import { logAIRequest } from "../../lib/ai-request-logger.js";
import { slugify } from "../../utils/slug.utils.js";
import type { AiGenerateInput } from "./roadmap.validation.js";
import {
  buildRoadmapPrompt,
  buildSectionPrompt,
  type RegenerateSectionPromptInput,
} from "./roadmap.ai.prompts.js";
import { createLogger } from "../../utils/logger.js";

const logger = createLogger("RoadmapAI");

// ── Retry helper ──────────────────────────────────────────────────────────
const MAX_RETRIES = 2;
const BACKOFF_MS = [1000, 2000];

class NonRetryableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NonRetryableError";
  }
}

function isRetryable(err: unknown): boolean {
  if (err instanceof NonRetryableError) return false;
  return true;
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Output schema (what the AI must return) ────────────────────────────────
const aiResourceSchema = z.object({
  kind: z.enum(["VIDEO", "ARTICLE", "DOCS", "COURSE", "BOOK", "PROJECT", "OTHER"]),
  title: z.string().min(2).max(200),
  url: z.string().url(),
  source: z.string().max(80).nullable().optional(),
});

const aiTopicSchema = z.object({
  title: z.string().min(2).max(120),
  summary: z.string().min(10).max(400),
  contentMd: z.string().min(40).max(4000),
  estimatedHours: z.number().int().min(1).max(40),
  difficulty: z.number().int().min(1).max(5),
  prerequisiteSlugs: z.array(z.string()).default([]),
  miniProject: z.string().min(8).max(800).nullable().optional(),
  selfCheck: z.string().min(8).max(400).nullable().optional(),
  resources: z.array(aiResourceSchema).min(1).max(8),
});

const aiSectionSchema = z.object({
  title: z.string().min(2).max(120),
  summary: z.string().min(10).max(400),
  topics: z.array(aiTopicSchema).min(2).max(8),
});

const aiRoadmapSchema = z.object({
  title: z.string().min(4).max(120),
  shortDescription: z.string().min(20).max(300),
  description: z.string().min(60).max(2000),
  level: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED", "ALL_LEVELS"]),
  estimatedHours: z.number().int().min(20).max(800),
  outcomes: z.array(z.string().max(160)).min(3).max(8),
  prerequisites: z.array(z.string().max(160)).max(6).default([]),
  tags: z.array(z.string().max(40)).max(10).default([]),
  faqs: z.array(z.object({ q: z.string().max(160), a: z.string().max(500) })).max(6).default([]),
  sections: z.array(aiSectionSchema).min(3).max(12),
});

export type GeneratedRoadmap = z.infer<typeof aiRoadmapSchema>;

// ── Slug helpers ───────────────────────────────────────────────────────────
const slugifyPart = (s: string): string => slugify(s, 60);

/**
 * Generate a personalized roadmap using Gemini, then validate the response
 * against our schema. Throws if the AI returns malformed JSON.
 */
export async function generateAiRoadmap(
  input: AiGenerateInput,
  userId: number,
): Promise<GeneratedRoadmap> {
  const provider = new GeminiProvider("gemini-2.5-flash-lite");
  const prompt = buildRoadmapPrompt(input);

  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await provider.generateText(prompt);

      let parsed: unknown;
      try {
        parsed = parseJsonResponse(response.text);
        logAIRequest("AI_ROADMAP_GENERATION", response, true, undefined, userId);
      } catch (err) {
        logAIRequest("AI_ROADMAP_GENERATION", response, false, (err as Error).message, userId);
        throw err; // retryable — will be caught below
      }

      const result = aiRoadmapSchema.safeParse(parsed);
      if (!result.success) {
        logger.error(`Validation failed (attempt ${attempt + 1})`, result.error.flatten());
        throw new Error("AI returned an incomplete roadmap."); // retryable
      }

      return result.data;
    } catch (err) {
      lastError = err as Error;

      if (!isRetryable(err)) {
        throw lastError;
      }

      if (attempt < MAX_RETRIES) {
        logger.warn(`Attempt ${attempt + 1} failed, retrying in ${BACKOFF_MS[attempt]}ms…`, lastError.message);
        await sleep(BACKOFF_MS[attempt]);
      }
    }
  }

  throw new Error(
    `AI roadmap generation failed after ${MAX_RETRIES + 1} attempts. ${lastError?.message ?? "Please try again."}`,
  );
}

/** Slugify section + topic titles, ensuring uniqueness within their parent. */
export function slugifyRoadmap(generated: GeneratedRoadmap): {
  sections: (Omit<GeneratedRoadmap["sections"][number], "topics"> & {
    slug: string;
    topics: (GeneratedRoadmap["sections"][number]["topics"][number] & { slug: string })[];
  })[];
} {
  const usedSectionSlugs = new Set<string>();
  const sections = generated.sections.map((section, sIdx) => {
    let slug = slugifyPart(section.title) || `section-${sIdx + 1}`;
    let n = 1;
    while (usedSectionSlugs.has(slug)) {
      slug = `${slugifyPart(section.title) || "section"}-${++n}`;
    }
    usedSectionSlugs.add(slug);

    const usedTopicSlugs = new Set<string>();
    const topics = section.topics.map((topic, tIdx) => {
      let tslug = slugifyPart(topic.title) || `topic-${tIdx + 1}`;
      let m = 1;
      while (usedTopicSlugs.has(tslug)) {
        tslug = `${slugifyPart(topic.title) || "topic"}-${++m}`;
      }
      usedTopicSlugs.add(tslug);
      return { ...topic, slug: tslug };
    });

    return { ...section, slug, topics };
  });

  return { sections };
}

export function buildRoadmapSlug(userId: number, title: string): string {
  const base = slugifyPart(title) || "roadmap";
  const stamp = Date.now().toString(36);
  return `ai-${userId}-${base}-${stamp}`.slice(0, 100);
}

function parseJsonResponse(raw: string): unknown {
  let s = raw.trim();
  // Strip code fences if the model added them
  s = s.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "");
  // Strip trailing commas (common AI quirk)
  s = s.replace(/,\s*([\]}])/g, "$1");
  try {
    return JSON.parse(s);
  } catch {
    // Try to extract the first {...} block
    const match = s.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("No JSON object found in AI response");
    return JSON.parse(match[0].replace(/,\s*([\]}])/g, "$1"));
  }
}

// ── Section-level regeneration ────────────────────────────────────────────

/** Shape of a single section as returned by the section-regeneration AI call. */
const aiSectionRegenerateSchema = z.object({
  title: z.string().min(2).max(120),
  summary: z.string().min(10).max(400),
  topics: z.array(aiTopicSchema).min(2).max(8),
});

export type RegeneratedSection = z.infer<typeof aiSectionRegenerateSchema>;

/**
 * Ask Gemini to regenerate a single roadmap section while keeping the
 * surrounding roadmap context intact.
 */
export async function regenerateSection(
  input: RegenerateSectionPromptInput,
  userId: number,
): Promise<RegeneratedSection> {
  const provider = new GeminiProvider("gemini-2.5-flash-lite");
  const prompt = buildSectionPrompt(input);

  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await provider.generateText(prompt);

      let parsed: unknown;
      try {
        parsed = parseJsonResponse(response.text);
        logAIRequest("AI_ROADMAP_GENERATION", response, true, undefined, userId);
      } catch (err) {
        logAIRequest("AI_ROADMAP_GENERATION", response, false, (err as Error).message, userId);
        throw err;
      }

      const result = aiSectionRegenerateSchema.safeParse(parsed);
      if (!result.success) {
        logger.error(`Section regeneration validation failed (attempt ${attempt + 1})`, result.error.flatten());
        throw new Error("AI returned an incomplete section.");
      }

      return result.data;
    } catch (err) {
      lastError = err as Error;

      if (!isRetryable(err)) {
        throw lastError;
      }

      if (attempt < MAX_RETRIES) {
        logger.warn(`Section attempt ${attempt + 1} failed, retrying in ${BACKOFF_MS[attempt]}ms…`, lastError.message);
        await sleep(BACKOFF_MS[attempt]);
      }
    }
  }

  throw new Error(
    `Section regeneration failed after ${MAX_RETRIES + 1} attempts. ${lastError?.message ?? "Please try again."}`,
  );
}
