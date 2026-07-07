import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { prisma } from "../../database/db.js";
import { getBufferFromS3, getS3KeyFromUrl } from "../../utils/s3.utils.js";
import { guestResumeKeyPrefix } from "../../utils/guest-ip.utils.js";
import { getProviderForService } from "../../lib/ai-provider-registry.js";
import { logAIRequest } from "../../lib/ai-request-logger.js";
import type {
  AtsScoreResult,
  ScoreResumeInput,
  AtsCategoryScores,
  AtsKeywordAnalysis,
  ApplySuggestionsInput,
} from "./ats.types.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class AtsService {
  private normalizeResumeUrl(resumeUrl: string): string {
    return resumeUrl.split("?")[0] ?? resumeUrl;
  }

  async scoreResume(studentId: number, input: ScoreResumeInput) {
    const resumeUrl = this.normalizeResumeUrl(input.resumeUrl);

    // IDOR check: verify the resume belongs to this student
    const user = await prisma.user.findUnique({
      where: { id: studentId },
      select: { resumes: true },
    });
    if (!user) throw new Error("User not found");

    const isOwned = user.resumes.includes(resumeUrl);
    if (!isOwned) {
      throw new Error("Resume does not belong to this user");
    }

    const pdfBuffer = await this.getResumeBuffer(resumeUrl);

    const result = await this.callAIWithPdf(
      pdfBuffer,
      studentId,
      input.jobTitle,
      input.jobDescription,
    );

    // Scoring is stateless: results are returned but not persisted.
    return {
      resumeUrl,
      jobTitle: input.jobTitle ?? null,
      jobDescription: input.jobDescription ?? null,
      overallScore: result.overallScore,
      categoryScores: result.categoryScores,
      suggestions: result.suggestions,
      keywordAnalysis: result.keywordAnalysis,
    };
  }

  async scoreResumeGuest(ipHash: string, input: ScoreResumeInput) {
    const resumeUrl = this.normalizeResumeUrl(input.resumeUrl);
    const expectedPrefix = guestResumeKeyPrefix(ipHash);
    const s3Key = getS3KeyFromUrl(resumeUrl);

    if (!s3Key?.startsWith(expectedPrefix)) {
      throw new Error("Invalid resume URL for guest scoring");
    }

    const pdfBuffer = await this.getResumeBuffer(resumeUrl);

    const result = await this.callAIWithPdf(pdfBuffer, 0, input.jobTitle, input.jobDescription);
    const now = new Date();

    return {
      id: 0,
      studentId: 0,
      resumeUrl,
      jobTitle: input.jobTitle ?? null,
      jobDescription: input.jobDescription ?? null,
      overallScore: result.overallScore,
      categoryScores: result.categoryScores,
      suggestions: result.suggestions,
      keywordAnalysis: result.keywordAnalysis,
      rawResponse: result,
      createdAt: now,
      updatedAt: now,
    };
  }

  async applySuggestions(studentId: number, input: ApplySuggestionsInput) {
    const resumeUrl = this.normalizeResumeUrl(input.resumeUrl);

    const user = await prisma.user.findUnique({
      where: { id: studentId },
      select: { resumes: true },
    });
    if (!user) throw new Error("User not found");

    const isOwned = user.resumes.includes(resumeUrl);
    if (!isOwned) {
      throw new Error("Resume does not belong to this user");
    }

    const pdfBuffer = await this.getResumeBuffer(resumeUrl);

    const provider = getProviderForService("ATS_SCORE");
    const prompt = this.buildApplySuggestionsPrompt(input);
    const pdfBase64 = pdfBuffer.toString("base64");
    const response = await provider.generateWithInlinePdf!(pdfBase64, prompt);
    logAIRequest("ATS_SCORE", response, true, undefined, studentId);

    return this.parseApplySuggestionsResponse(response.text.trim());
  }

  private buildApplySuggestionsPrompt(input: ApplySuggestionsInput): string {
    const jobContext =
      input.jobTitle || input.jobDescription
        ? `\nTARGET JOB INFORMATION:\n${input.jobTitle ? `Job Title: ${input.jobTitle}` : ""}\n${input.jobDescription ? `Job Description: ${input.jobDescription}` : ""}\n`
        : "";

    return `You are an expert ATS resume optimizer. Your task is to rewrite the attached resume PDF by applying specific improvement suggestions, and output the result as a complete, compile-ready LaTeX document.

The resume to optimize is provided as an attached PDF document.${jobContext}
SUGGESTIONS TO APPLY:
${input.suggestions.map((s, i) => `${i + 1}. ${s}`).join("\n")}

OPTIMIZATION INSTRUCTIONS:
1. Rewrite the resume content to incorporate the suggestions listed above.
2. If job information is provided, ensure the resume is tailored towards it.
3. Keep all factual content accurate, do not fabricate experience or qualifications.
4. Output a professional, clean LaTeX document using the 'article' class.
5. The document MUST compile with standard pdflatex using only standard packages: geometry, enumitem, hyperref, titlesec.
6. Keep it to exactly 1 page.

Respond using the EXACT tag format below. No markdown fences outside the tags.

RESPONSE FORMAT:
<reply>brief summary of how you applied the suggestions</reply>
<latex>the full rewritten LaTeX code</latex>`;
  }

  private parseApplySuggestionsResponse(text: string) {
    const replyMatch = text.match(/<reply>([\s\S]*?)<\/reply>/);
    let latexMatch = text.match(/<latex>([\s\S]*)<\/latex>/);

    if (!latexMatch && text.includes("<latex>")) {
      const idx = text.indexOf("<latex>") + "<latex>".length;
      const raw = text.slice(idx).trim();
      if (raw.length > 20) {
        latexMatch = [raw, raw] as unknown as RegExpMatchArray;
      }
    }

    let latexCode = latexMatch ? latexMatch[1].trim() : undefined;
    if (latexCode?.startsWith("\`\`\`")) {
      latexCode = latexCode.replace(/^\`\`\`(?:latex)?\n?/, "").replace(/\n?\`\`\`$/, "");
    }

    return {
      reply: replyMatch ? replyMatch[1].trim() : "Successfully applied suggestions.",
      updatedLatex: latexCode || text,
    };
  }

  private async getResumeBuffer(resumeUrl: string): Promise<Buffer> {
    const s3Key = getS3KeyFromUrl(resumeUrl);
    if (s3Key) {
      return getBufferFromS3(s3Key);
    } else if (resumeUrl.startsWith("/uploads/")) {
      // Local uploads (dev only) — sanitize to prevent path traversal
      const uploadsDir = path.resolve(__dirname, "../../../uploads");
      const resolved = path.resolve(
        uploadsDir,
        resumeUrl.replace(/^\/uploads\//, ""),
      );
      if (!resolved.startsWith(uploadsDir)) {
        throw new Error("Invalid resume path");
      }
      return readFile(resolved);
    } else {
      throw new Error("Invalid resume URL format");
    }
  }

  private async callAIWithPdf(
    pdfBuffer: Buffer,
    userId: number,
    jobTitle?: string | undefined,
    jobDescription?: string | undefined,
  ): Promise<AtsScoreResult> {
    const provider = getProviderForService("ATS_SCORE");
    const prompt = this.buildPrompt(jobTitle, jobDescription);
    const pdfBase64 = pdfBuffer.toString("base64");
    const response = await provider.generateWithInlinePdf!(pdfBase64, prompt);
    logAIRequest("ATS_SCORE", response, true, undefined, userId);
    return this.parseAIResponse(response.text);
  }

  private buildPrompt(
    jobTitle?: string | undefined,
    jobDescription?: string | undefined,
  ): string {
    const jobContext =
      jobTitle || jobDescription
        ? `
TARGET JOB INFORMATION:
${jobTitle ? `Job Title: ${jobTitle}` : ""}
${jobDescription ? `Job Description: ${jobDescription}` : ""}

When scoring keywords and skills, evaluate specifically against this job posting.
When listing missing keywords, focus on terms from this job description that are absent from the resume.
`
        : `
No specific job description provided. Evaluate the resume for general ATS compatibility
using common industry standards for software/tech roles.
`;

    return `You are a ruthless, senior technical recruiter and ATS (Applicant Tracking System) auditor. You have screened 10,000+ resumes and reject roughly 90% of them at first pass. You are deliberately HARSH and evidence-based. Your scores are used to push candidates to improve, so grade inflation is a failure on your part.

${jobContext}

The resume to evaluate is provided as an attached PDF document.

SCORING DISCIPLINE (read carefully, this is the most important part):
- Scores are 0-100. Be strict. The MEDIAN real resume scores 45-60. Scores of 85+ are reserved for the top ~5% of resumes you have ever seen and must be EARNED with concrete, verifiable evidence on every dimension. Do NOT give 85+ unless the resume is genuinely outstanding.
- Default to a LOW score and add points only when the resume proves merit. Do not award points for merely having a section or for generic, unquantified content.
- Score what is actually written. Never give benefit of the doubt, never assume unstated skills, never reward intent or potential.
- Be decisive and use the full range. A weak resume should score in the 20s-40s. Do not cluster everything in the 70s-80s.

SCORE BANDS (apply to overallScore AND every category):
- 90-100: Exceptional. Top 5%. Quantified impact in nearly every bullet, dense role-relevant keywords, flawless ATS formatting, clear senior-level signal. Almost no resume reaches this.
- 75-89: Strong. Mostly quantified, well targeted, only minor gaps.
- 60-74: Average / acceptable. Several real gaps (some unquantified bullets, thin keyword coverage, generic phrasing).
- 40-59: Below average. Significant weaknesses (little quantification, weak targeting, vague responsibilities).
- 20-39: Poor. Mostly duties not achievements, missing key sections, no metrics, poor keyword match.
- 0-19: Unusable for ATS.

HARD CAPS (enforce these, they prevent inflation):
- If the resume contains NO quantified metrics (numbers, %, $, scale), cap BOTH "experience" and "impact" at 45.
- If bullets describe duties/responsibilities rather than achievements with outcomes, cap "impact" at 40.
- If the skills section is a generic dump with no context or no evidence of use in experience, cap "skills" at 60.
- If a target job description is provided and fewer than half its key skills/keywords appear in the resume, cap "keywords" at 50.
- If there is no clear, parseable section structure, cap "formatting" at 55.
- A resume that is fewer than ~150 words or clearly incomplete cannot score above 50 overall.

Evaluate these six categories. For each, START at 40 and adjust up only with concrete evidence, down for each weakness:

1. **Formatting** (0-100): ATS parse-ability. Clear standard section headers, consistent date formats, no tables/columns/graphics/images, proper bullet usage, standard single-column layout. Penalize anything that confuses a parser.
2. **Keywords** (0-100): ${jobDescription ? "Match against the PROVIDED job description. Count how many of the JD's actual required skills/tools/terms appear verbatim. Score the coverage ratio, not vague relevance." : "Coverage of concrete, industry-standard technical terms for the target role. Penalize buzzwords with no substance."}
3. **Experience** (0-100): Achievements over duties. Reward quantified outcomes, clear titles/companies/dates, progression. Penalize vague responsibility lists and gaps.
4. **Skills** (0-100): Relevant, specific, and corroborated by the experience section. Penalize laundry lists, soft-skill filler, and skills never demonstrated.
5. **Education** (0-100): Degree, institution, dates clearly stated; relevant coursework/certs; notable GPA/achievements. A bare degree line is average, not high.
6. **Impact** (0-100): Measurable results (metrics, %, $, scale), STAR structure, ownership and leadership. No metrics = low score, no exceptions.

Then provide 5-8 SPECIFIC, actionable suggestions. Each must name the exact weakness and how to fix it (e.g. "Quantify the StartupCo bullet: state users served, latency reduced, or revenue impacted"). No generic advice like "add more keywords".

Respond with ONLY valid JSON (no markdown formatting, no code blocks, no explanation) in this exact structure:
{
  "overallScore": <integer 0-100. Compute as the weighted average: keywords 25%, experience 25%, impact 20%, skills 15%, formatting 10%, education 5%. Round to the nearest integer. This MUST equal the weighted math of your category scores, never higher.>,
  "categoryScores": {
    "formatting": <integer 0-100>,
    "keywords": <integer 0-100>,
    "experience": <integer 0-100>,
    "skills": <integer 0-100>,
    "education": <integer 0-100>,
    "impact": <integer 0-100>
  },
  "suggestions": [
    "<specific, actionable suggestion 1>",
    "<specific, actionable suggestion 2>",
    "<up to 8 total, most impactful first>"
  ],
  "keywordAnalysis": {
    "found": ["<keyword>", "...up to 15 keywords fully present and prominent in the resume"],
    "partial": ["<keyword>", "...up to 8 keywords mentioned only once or under-represented"],
    "missing": ["<keyword>", "...up to 10 important keywords${jobDescription ? " from the job description" : " for this role"} completely absent from the resume"]
  }
}

Final check before you answer: if your overallScore is above 75, re-read the resume and confirm it truly earns that against the bands above. If in doubt, lower it.`;
  }

  private parseAIResponse(responseText: string): AtsScoreResult {
    let jsonStr = responseText;
    const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch?.[1]) {
      jsonStr = jsonMatch[1].trim();
    }

    // Strip trailing commas before ] or } (common AI quirk)
    jsonStr = jsonStr.replace(/,\s*([\]}])/g, "$1");

    let parsed: unknown;
    try {
      parsed = JSON.parse(jsonStr);
    } catch {
      // Try to extract just the JSON object if there's surrounding text
      const objMatch = jsonStr.match(/\{[\s\S]*\}/);
      if (objMatch) {
        const cleaned = objMatch[0].replace(/,\s*([\]}])/g, "$1");
        parsed = JSON.parse(cleaned);
      } else {
        throw new Error("Could not parse AI response as JSON");
      }
    }

    if (!parsed || typeof parsed !== "object") {
      throw new Error("Invalid response format from AI");
    }

    const obj = parsed as Record<string, unknown>;

    const overallScore =
      typeof obj["overallScore"] === "number"
        ? Math.max(0, Math.min(100, Math.round(obj["overallScore"])))
        : 50;

    const categoryScores = this.validateCategoryScores(obj["categoryScores"]);
    const suggestions = this.validateSuggestions(obj["suggestions"]);
    const keywordAnalysis = this.validateKeywordAnalysis(
      obj["keywordAnalysis"],
    );

    return { overallScore, categoryScores, suggestions, keywordAnalysis };
  }

  private validateCategoryScores(raw: unknown): AtsCategoryScores {
    const defaults: AtsCategoryScores = {
      formatting: 50,
      keywords: 50,
      experience: 50,
      skills: 50,
      education: 50,
      impact: 50,
    };
    if (!raw || typeof raw !== "object") return defaults;
    const obj = raw as Record<string, unknown>;
    const clamp = (v: unknown) =>
      typeof v === "number" ? Math.max(0, Math.min(100, Math.round(v))) : 50;
    return {
      formatting: clamp(obj["formatting"]),
      keywords: clamp(obj["keywords"]),
      experience: clamp(obj["experience"]),
      skills: clamp(obj["skills"]),
      education: clamp(obj["education"]),
      impact: clamp(obj["impact"]),
    };
  }

  private validateSuggestions(raw: unknown): string[] {
    if (!Array.isArray(raw)) return ["No specific suggestions available."];
    return raw
      .map((s) => {
        if (typeof s === "string") return s;
        if (s && typeof s === "object" && "suggestion" in s && typeof (s as Record<string, unknown>).suggestion === "string")
          return (s as Record<string, string>).suggestion;
        return null;
      })
      .filter((s): s is string => s !== null)
      .slice(0, 10);
  }

  private validateKeywordAnalysis(raw: unknown): AtsKeywordAnalysis {
    const defaults: AtsKeywordAnalysis = { found: [], partial: [], missing: [] };
    if (!raw || typeof raw !== "object") return defaults;
    const obj = raw as Record<string, unknown>;
    return {
      found: Array.isArray(obj["found"])
        ? obj["found"].filter((s): s is string => typeof s === "string")
        : [],
      partial: Array.isArray(obj["partial"])
        ? obj["partial"].filter((s): s is string => typeof s === "string")
        : [],
      missing: Array.isArray(obj["missing"])
        ? obj["missing"].filter((s): s is string => typeof s === "string")
        : [],
    };
  }
}
