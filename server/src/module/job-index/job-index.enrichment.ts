import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env["GEMINI_API_KEY"]!);

interface EnrichmentResult {
  skills: string[];
  experienceLevel: string | null;
  workMode: string | null;
  domain: string | null;
  salaryMin: number | null;
  salaryMax: number | null;
}

const FALLBACK: EnrichmentResult = {
  skills: [],
  experienceLevel: null,
  workMode: null,
  domain: null,
  salaryMin: null,
  salaryMax: null,
};

export async function enrichJobWithAI(title: string, description: string): Promise<EnrichmentResult> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

  const prompt = `You are a job data extractor. Given a job posting, extract structured data.

<job_posting>
Title: ${title}
Description: ${description.slice(0, 3000)}
</job_posting>

Return ONLY valid JSON, no markdown:
{
  "skills": ["React", "TypeScript"],
  "experienceLevel": "INTERN|ENTRY|MID|SENIOR",
  "workMode": "REMOTE|HYBRID|ONSITE",
  "domain": "frontend|backend|fullstack|devops|data|ml|mobile|other",
  "salaryMin": null,
  "salaryMax": null
}

Rules:
- skills: max 15, only specific technologies/tools/languages
- experienceLevel: INTERN for internships/fresh grads, ENTRY for 0-2y, MID for 2-5y, SENIOR for 5y+
- salaryMin/salaryMax: annual INR. null if not mentioned
- domain: pick the closest one`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const parsed = JSON.parse(cleaned);
    return {
      skills: Array.isArray(parsed.skills) ? parsed.skills.slice(0, 15) : [],
      experienceLevel: parsed.experienceLevel || null,
      workMode: parsed.workMode || null,
      domain: parsed.domain || null,
      salaryMin: typeof parsed.salaryMin === "number" ? parsed.salaryMin : null,
      salaryMax: typeof parsed.salaryMax === "number" ? parsed.salaryMax : null,
    };
  } catch {
    return FALLBACK;
  }
}

export async function generateEmbedding(text: string): Promise<number[]> {
  const model = genAI.getGenerativeModel({ model: "gemini-embedding-001" });
  const result = await model.embedContent({
    content: { role: "user", parts: [{ text }] },
    outputDimensionality: 768,
  } as Parameters<typeof model.embedContent>[0] & { outputDimensionality?: number });
  return result.embedding.values;
}

export function buildJobEmbeddingText(job: {
  title: string;
  skills: string[];
  description: string;
  company: string;
}): string {
  return `${job.title} at ${job.company}. Skills: ${job.skills.join(", ")}. ${job.description.slice(0, 500)}`;
}

export function buildUserEmbeddingText(pref: {
  desiredRoles: string[];
  desiredSkills: string[];
  profileSkills: string[];
  profileSummary: string | null;
}): string {
  const roles = pref.desiredRoles.join(", ");
  const skills = [...new Set([...pref.desiredSkills, ...pref.profileSkills])].join(", ");
  return `Looking for: ${roles || "any role"}. Skills: ${skills}. ${pref.profileSummary || ""}`;
}
