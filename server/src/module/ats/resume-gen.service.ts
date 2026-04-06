import { createHash } from "crypto";
import type { GenerateResumeInput, UserProfile } from "./resume-gen.validation.js";
import { getProviderForService } from "../../lib/ai-provider-registry.js";
import { logAIRequest } from "../../lib/ai-request-logger.js";

// In-memory LRU-ish cache: identical prompt hash ⇒ reuse prior LaTeX output
// instead of re-billing Gemini. Process-local; fine for a single node.
interface CacheEntry { latex: string; expires: number }
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const CACHE_MAX = 200;
const resumeCache = new Map<string, CacheEntry>();

function cacheGet(key: string): string | null {
  const hit = resumeCache.get(key);
  if (!hit) return null;
  if (hit.expires < Date.now()) { resumeCache.delete(key); return null; }
  // Refresh LRU position
  resumeCache.delete(key);
  resumeCache.set(key, hit);
  return hit.latex;
}
function cacheSet(key: string, latex: string): void {
  if (resumeCache.size >= CACHE_MAX) {
    const oldest = resumeCache.keys().next().value;
    if (oldest) resumeCache.delete(oldest);
  }
  resumeCache.set(key, { latex, expires: Date.now() + CACHE_TTL_MS });
}

export class ResumeGenService {
  async generate(input: GenerateResumeInput, profile?: UserProfile, userId?: number): Promise<string> {
    const provider = getProviderForService("RESUME_GEN");
    const prompt = this.buildPrompt(input, profile);

    // Hash the full prompt so identical (input + profile snapshot) hits cache.
    const cacheKey = createHash("sha256").update(prompt).digest("hex");
    const cached = cacheGet(cacheKey);
    if (cached) return cached;

    const response = await provider.generateText(prompt);
    logAIRequest("RESUME_GEN", response, true, undefined, userId);
    let text = response.text.trim();

    // Strip markdown code fences if AI wraps output
    if (text.startsWith("```")) {
      text = text.replace(/^```(?:latex|tex)?\n?/, "").replace(/\n?```$/, "");
    }

    cacheSet(cacheKey, text);
    return text;
  }

  private buildProfileSection(profile: UserProfile): string {
    const parts: string[] = [];

    parts.push(`Name: ${profile.name}`);
    if (profile.bio) parts.push(`About: ${profile.bio}`);
    if (profile.college) {
      let edu = `Education: ${profile.college}`;
      if (profile.graduationYear) edu += ` (Graduation: ${String(profile.graduationYear)})`;
      parts.push(edu);
    }
    if (profile.company) {
      let work = `Current Company: ${profile.company}`;
      if (profile.designation) work += ` - ${profile.designation}`;
      parts.push(work);
    }
    if (profile.location) parts.push(`Location: ${profile.location}`);
    if (profile.skills.length > 0) parts.push(`Skills: ${profile.skills.join(", ")}`);

    if (profile.projects.length > 0) {
      parts.push("Projects:");
      for (const p of profile.projects) {
        let line = `  - ${p.title}: ${p.description}`;
        if (p.techStack.length > 0) line += ` [Tech: ${p.techStack.join(", ")}]`;
        parts.push(line);
      }
    }

    if (profile.achievements.length > 0) {
      parts.push("Achievements:");
      for (const a of profile.achievements) {
        let line = `  - ${a.title}: ${a.description}`;
        if (a.date) line += ` (${a.date})`;
        parts.push(line);
      }
    }

    return parts.join("\n");
  }

  private buildPrompt(input: GenerateResumeInput, profile?: UserProfile): string {
    const profileBlock = profile
      ? `\nCANDIDATE PROFILE:\n${this.buildProfileSection(profile)}\n`
      : "";

    return `You are an expert resume writer. Generate a professional, ATS-friendly resume in valid, compilable LaTeX.

${input.jobTitle ? `TARGET JOB TITLE: ${input.jobTitle}` : ""}
${input.jobDescription ? `JOB DESCRIPTION:\n${input.jobDescription}` : ""}
${profileBlock}${input.keySkills ? `KEY SKILLS & EXPERIENCE TO HIGHLIGHT:\n${input.keySkills}` : ""}

LATEX REQUIREMENTS:
- Use \\documentclass[11pt,a4paper]{article}
- Use ONLY these packages: geometry (0.75in margins), enumitem, hyperref, titlesec
- Use \\pagestyle{empty} (no page numbers)
- Use \\titleformat and \\titlerule for section headers
- The document MUST compile with standard pdflatex - no exotic packages

RESUME STRUCTURE:
1. Header: centered name (\\LARGE \\textbf), contact info (email, phone, location, LinkedIn, GitHub) on one line with $\\cdot$ separators
2. Summary: 2-3 sentence professional summary tailored to the target job
3. Experience: job titles with company and dates, 2-4 bullet points each using \\begin{itemize}[leftmargin=*, nosep]
4. Education: degree, institution, graduation year, GPA if available
5. Skills: grouped by category (Languages, Frameworks, Tools) using \\textbf labels
6. Projects: 1-3 notable projects with brief descriptions and tech stacks

CONTENT RULES:
- ${profile ? `Use the candidate's actual name "${profile.name}" and real data from the profile` : "Use placeholder name 'Your Name' and placeholder contact info"}
- ${profile ? "Fill all sections with the candidate's real experience, skills, projects, and education" : "Use realistic placeholder content that the user can easily replace"}
- ${input.jobDescription ? "Tailor the summary and skill emphasis to match the job description" : "Write a general tech professional resume"}
- Use strong action verbs (Led, Built, Designed, Implemented, Optimized)
- Quantify achievements where possible (e.g., "improved performance by 40%")
- Keep it to exactly 1 page

Return ONLY the raw LaTeX code. No explanations, no markdown formatting, no code fences, no comments outside the LaTeX document.`;
  }
}
