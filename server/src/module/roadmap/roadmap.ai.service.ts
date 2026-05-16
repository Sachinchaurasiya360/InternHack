import { z } from "zod";
import { GeminiProvider } from "../../lib/providers/gemini.provider.js";
import { logAIRequest } from "../../lib/ai-request-logger.js";
import { slugify } from "../../utils/slug.utils.js";
import type { AiGenerateInput } from "./roadmap.validation.js";

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
  const prompt = buildPrompt(input);
  const response = await provider.generateText(prompt);

  let parsed: unknown;
  try {
    parsed = parseJsonResponse(response.text);
    logAIRequest("AI_ROADMAP_GENERATION", response, true, undefined, userId);
  } catch (err) {
    logAIRequest("AI_ROADMAP_GENERATION", response, false, (err as Error).message, userId);
    throw new Error("AI returned a response we could not parse. Please try again.");
  }

  const result = aiRoadmapSchema.safeParse(parsed);
  if (!result.success) {
    console.error("[AiRoadmap] Validation failed", result.error.flatten());
    throw new Error("AI returned an incomplete roadmap. Please try again.");
  }

  return result.data;
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

// ── Prompt ────────────────────────────────────────────────────────────────
function buildPrompt(input: AiGenerateInput): string {
  const knownSkills = input.knownSkills.length > 0 ? input.knownSkills.join(", ") : "none specified";
  const mustInclude = input.mustInclude.length > 0 ? input.mustInclude.join(", ") : "none specified";
  const avoid = input.avoid.length > 0 ? input.avoid.join(", ") : "none";

  return `You are a senior software engineer and learning coach. Build a personalized career learning roadmap from the user inputs below.

USER INPUTS
- Goal description: ${input.goalDescription}
- Experience level: ${expLabel(input.experienceLevel)}
- Background: ${bgLabel(input.background)}
- Primary goal: ${goalLabel(input.goal)}
- Available time: ${String(input.hoursPerWeek)} hours per week
- Preferred study days: ${input.preferredDays.join(", ")}
- Already comfortable with: ${knownSkills}
- Must include topics: ${mustInclude}
- Avoid: ${avoid}

CONSTRAINTS
- Total estimatedHours must reflect a realistic plan that someone can finish in 8 to 20 weeks at the user's pace.
- Skip any topic the user is already comfortable with. Build on those skills instead of repeating them.
- Honor 'must include' topics by ensuring at least one section or topic explicitly covers them.
- Avoid 'avoid' topics entirely.
- Include 4 to 8 sections; each section has 3 to 6 topics.
- Each topic has a real summary, contentMd (2 to 4 short paragraphs of teaching, plain text or simple bullets, no markdown headings), realistic estimatedHours, difficulty 1-5, a single concrete miniProject, and a self-check question.
- Each topic has 2 to 5 RESOURCES with REAL, well-known URLs. Prefer official docs (mdn, react.dev, postgresql.org), university sites (MIT, freeCodeCamp), or canonical tutorials (javascript.info). Do not invent URLs. If you are unsure of a URL, omit that resource.
- Resources must be free.
- Use natural English. Do not include placeholders, lorem ipsum, or "TBD".
- Use commas, periods, colons, or parentheses for punctuation. Do NOT use the em dash character.

OUTPUT FORMAT
Return ONLY valid JSON, no markdown fences, no explanation, matching this exact shape. Strings are plain text. Numbers are integers unless noted.

{
  "title": "Concise roadmap title under 12 words",
  "shortDescription": "One sentence pitch under 200 characters",
  "description": "Two to four sentences describing what this roadmap covers and who it is for",
  "level": "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "ALL_LEVELS",
  "estimatedHours": <integer 20-800>,
  "outcomes": ["3 to 8 specific learning outcomes the user will achieve"],
  "prerequisites": ["0 to 6 prerequisites if any, else empty array"],
  "tags": ["lowercase", "comma-friendly", "tags"],
  "faqs": [
    { "q": "Question?", "a": "Direct answer." }
  ],
  "sections": [
    {
      "title": "Section title",
      "summary": "One-sentence summary of the section",
      "topics": [
        {
          "title": "Topic title",
          "summary": "One-sentence summary of the topic",
          "contentMd": "Plain text explanation, 2-4 short paragraphs. Use bullet lines starting with '- ' for lists if needed.",
          "estimatedHours": <integer 1-40>,
          "difficulty": <integer 1-5>,
          "prerequisiteSlugs": [],
          "miniProject": "One paragraph describing a small but real project to build",
          "selfCheck": "One open question to test understanding",
          "resources": [
            {
              "kind": "VIDEO" | "ARTICLE" | "DOCS" | "COURSE" | "BOOK" | "PROJECT" | "OTHER",
              "title": "Resource title",
              "url": "https://...",
              "source": "Site name (e.g., MDN, freeCodeCamp)"
            }
          ]
        }
      ]
    }
  ]
}

Respond with ONLY the JSON object. No prose, no code fences, no leading or trailing whitespace.`;
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

function expLabel(e: AiGenerateInput["experienceLevel"]): string {
  return e === "NEW" ? "brand new (never coded or very little)" :
    e === "SOME" ? "some experience (tutorials, school, side dabbling)" :
    "experienced (comfortable building, wants to formalize)";
}

function bgLabel(b: AiGenerateInput["background"]): string {
  switch (b) {
    case "CS_STUDENT": return "computer science student";
    case "SELF_TAUGHT": return "self-taught learner";
    case "CAREER_SWITCHER": return "career switcher from another field";
    case "HOBBYIST": return "hobbyist";
    case "WORKING_PRO": return "working professional looking to upskill";
  }
}

function goalLabel(g: AiGenerateInput["goal"]): string {
  switch (g) {
    case "JOB_READY": return "get a job in the field";
    case "SIDE_PROJECT": return "build a working side project";
    case "SCHOOL": return "supplement school coursework";
    case "CURIOUS": return "satisfy curiosity";
  }
}
