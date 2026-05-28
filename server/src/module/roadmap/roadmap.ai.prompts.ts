import type { AiGenerateInput } from "./roadmap.validation.js";

export interface RegenerateSectionPromptInput {
  roadmapTitle: string;
  roadmapDescription: string;
  targetSection: {
    title: string;
    summary: string;
    orderIndex: number;
    topics: { title: string; estimatedHours: number }[];
  };
  neighbourSections: { title: string; orderIndex: number }[];
  instructions?: string;
}

export function buildRoadmapPrompt(input: AiGenerateInput): string {
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

export function buildSectionPrompt(input: RegenerateSectionPromptInput): string {
  const neighbours = input.neighbourSections
    .sort((a, b) => a.orderIndex - b.orderIndex)
    .map((s) => `  - Section ${s.orderIndex + 1}: "${s.title}"`)
    .join("\n");

  const currentTopics = input.targetSection.topics
    .map((t) => `  - ${t.title} (~${t.estimatedHours}h)`)
    .join("\n");

  const instructionLine = input.instructions?.trim()
    ? `\nUSER INSTRUCTIONS\n${input.instructions.trim()}\n`
    : "";

  return `You are a senior software engineer and learning coach. Your task is to rewrite ONE section of an existing learning roadmap.

ROADMAP CONTEXT
- Title: ${input.roadmapTitle}
- Description: ${input.roadmapDescription}

OTHER SECTIONS IN THIS ROADMAP (do NOT change these, just use them for context)
${neighbours || "  (none)"}

SECTION TO REWRITE (Section ${input.targetSection.orderIndex + 1})
- Current title: "${input.targetSection.title}"
- Current summary: "${input.targetSection.summary}"
- Current topics:
${currentTopics}
${instructionLine}
CONSTRAINTS
- Keep the section logically consistent with the surrounding sections listed above.
- Do not repeat topics already covered in neighbouring sections.
- Produce 2 to 8 topics. Each topic must have a real summary, contentMd (2 to 4 short paragraphs, plain text or simple bullets, no markdown headings), realistic estimatedHours, difficulty 1-5, a concrete miniProject, and a self-check question.
- Each topic must have 2 to 5 RESOURCES with REAL, well-known URLs. Prefer official docs (mdn, react.dev, postgresql.org), university sites (MIT, freeCodeCamp), or canonical tutorials (javascript.info). Do not invent URLs.
- Resources must be free.
- Use natural English. Do not use the em dash character.

OUTPUT FORMAT
Return ONLY valid JSON matching this exact shape. No markdown fences, no explanation.

{
  "title": "Section title",
  "summary": "One-sentence summary of the section",
  "topics": [
    {
      "title": "Topic title",
      "summary": "One-sentence summary",
      "contentMd": "Plain text explanation, 2-4 short paragraphs.",
      "estimatedHours": <integer 1-40>,
      "difficulty": <integer 1-5>,
      "prerequisiteSlugs": [],
      "miniProject": "One paragraph describing a small but real project",
      "selfCheck": "One open question to test understanding",
      "resources": [
        {
          "kind": "VIDEO" | "ARTICLE" | "DOCS" | "COURSE" | "BOOK" | "PROJECT" | "OTHER",
          "title": "Resource title",
          "url": "https://...",
          "source": "Site name"
        }
      ]
    }
  ]
}

Respond with ONLY the JSON object.`;
}

export function expLabel(e: AiGenerateInput["experienceLevel"]): string {
  return e === "NEW" ? "brand new (never coded or very little)" :
    e === "SOME" ? "some experience (tutorials, school, side dabbling)" :
    "experienced (comfortable building, wants to formalize)";
}

export function bgLabel(b: AiGenerateInput["background"]): string {
  switch (b) {
    case "CS_STUDENT": return "computer science student";
    case "SELF_TAUGHT": return "self-taught learner";
    case "CAREER_SWITCHER": return "career switcher from another field";
    case "HOBBYIST": return "hobbyist";
    case "WORKING_PRO": return "working professional looking to upskill";
  }
}

export function goalLabel(g: AiGenerateInput["goal"]): string {
  switch (g) {
    case "JOB_READY": return "get a job in the field";
    case "SIDE_PROJECT": return "build a working side project";
    case "SCHOOL": return "supplement school coursework";
    case "CURIOUS": return "satisfy curiosity";
  }
}