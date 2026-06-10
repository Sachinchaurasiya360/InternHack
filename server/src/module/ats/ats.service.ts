import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";
import { prisma } from "../../database/db.js";
import { getBufferFromS3, getS3KeyFromUrl } from "../../utils/s3.utils.js";
import { getProviderForService } from "../../lib/ai-provider-registry.js";
import { logAIRequest } from "../../lib/ai-request-logger.js";
import type {
  AtsScoreResult,
  ScoreResumeInput,
  AtsCategoryScores,
  AtsKeywordAnalysis,
  ApplySuggestionsInput,
} from "./ats.types.js";
import type { Prisma } from "@prisma/client";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// If the same student re-scores the same resume + job context within this
// window, return the prior AtsScore row instead of re-calling Gemini.
const SCORE_CACHE_TTL_MS = 24 * 60 * 60 * 1000;

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

    // Cache hit: identical (resumeUrl, jobTitle, jobDescription) from the same
    // student within the TTL, return the prior row without burning AI quota.
    const cached = await prisma.atsScore.findFirst({
      where: {
        studentId,
        resumeUrl,
        jobTitle: input.jobTitle ?? null,
        jobDescription: input.jobDescription ?? null,
        createdAt: { gte: new Date(Date.now() - SCORE_CACHE_TTL_MS) },
      },
      orderBy: { createdAt: "desc" },
    });
    if (cached) return cached;

    const resumeText = await this.extractPdfText(resumeUrl);

    if (!resumeText || resumeText.trim().length < 50) {
      throw new Error(
        "Could not extract sufficient text from the resume PDF. Make sure it is not a scanned image.",
      );
    }

    const result = await this.callAI(
      resumeText,
      studentId,
      input.jobTitle,
      input.jobDescription,
    );

    const atsScore = await prisma.atsScore.create({
      data: {
        studentId,
        resumeUrl,
        jobTitle: input.jobTitle ?? null,
        jobDescription: input.jobDescription ?? null,
        overallScore: result.overallScore,
        categoryScores: JSON.parse(
          JSON.stringify(result.categoryScores),
        ) as Prisma.InputJsonValue,
        suggestions: JSON.parse(
          JSON.stringify(result.suggestions),
        ) as Prisma.InputJsonValue,
        keywordAnalysis: JSON.parse(
          JSON.stringify(result.keywordAnalysis),
        ) as Prisma.InputJsonValue,
        rawResponse: JSON.parse(
          JSON.stringify(result),
        ) as Prisma.InputJsonValue,
      },
    });

    return atsScore;
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

    const resumeText = await this.extractPdfText(resumeUrl);

    if (!resumeText || resumeText.trim().length < 50) {
      throw new Error(
        "Could not extract sufficient text from the resume PDF. Make sure it is not a scanned image.",
      );
    }

    const provider = getProviderForService("ATS_SCORE");
    const prompt = this.buildApplySuggestionsPrompt(resumeText, input);
    const response = await provider.generateText(prompt);
    logAIRequest("ATS_SCORE", response, true, undefined, studentId);

    return this.parseApplySuggestionsResponse(response.text.trim());
  }

  private buildApplySuggestionsPrompt(resumeText: string, input: ApplySuggestionsInput): string {
    const jobContext =
      input.jobTitle || input.jobDescription
        ? `\nTARGET JOB INFORMATION:\n${input.jobTitle ? `Job Title: ${input.jobTitle}` : ""}\n${input.jobDescription ? `Job Description: ${input.jobDescription}` : ""}\n`
        : "";

    return `You are an expert ATS resume optimizer. Your task is to rewrite a resume by applying specific improvement suggestions, and output the result as a complete, compile-ready LaTeX document.

CURRENT RESUME TEXT:
---
${resumeText}
---${jobContext}
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

  private async extractPdfText(resumeUrl: string): Promise<string> {
    let buffer: Buffer;

    const s3Key = getS3KeyFromUrl(resumeUrl);
    if (s3Key) {
      buffer = await getBufferFromS3(s3Key);
    } else if (resumeUrl.startsWith("/uploads/")) {
      // Local uploads - sanitize to prevent path traversal
      const uploadsDir = path.resolve(__dirname, "../../../uploads");
      const resolved = path.resolve(
        uploadsDir,
        resumeUrl.replace(/^\/uploads\//, ""),
      );
      if (!resolved.startsWith(uploadsDir)) {
        throw new Error("Invalid resume path");
      }
      buffer = await readFile(resolved);
    } else {
      throw new Error("Invalid resume URL format");
    }

    return new Promise<string>((resolve, reject) => {
      // Detect dev (tsx) vs production (compiled JS) to resolve the worker path
      // and register the tsx ESM loader when needed.
      const isDev = import.meta.url.endsWith(".ts");
      const workerFile = isDev
        ? "../../workers/pdf-parse.worker.ts"
        : "../../workers/pdf-parse.worker.js";
      const workerUrl = new URL(workerFile, import.meta.url);
      const execArgv = isDev ? ["--import", "tsx"] : [];

      const worker = new Worker(workerUrl, {
        execArgv,
        workerData: {
          buffer: buffer.buffer as ArrayBuffer,
          byteOffset: buffer.byteOffset,
          byteLength: buffer.byteLength,
        },
        transferList: [buffer.buffer as ArrayBuffer],
      });

      const timeout = setTimeout(() => {
        void worker.terminate();
        reject(new Error("PDF parsing timed out"));
      }, 30_000);

      worker.on("message", (msg: { text?: string; error?: string }) => {
        clearTimeout(timeout);
        if (msg.error) reject(new Error(msg.error));
        else resolve(msg.text ?? "");
      });

      worker.on("error", (err: Error) => {
        clearTimeout(timeout);
        reject(err);
      });

      worker.on("exit", (code: number) => {
        clearTimeout(timeout);
        if (code !== 0) reject(new Error(`PDF worker exited with code ${code}`));
      });
    });
  }

  private async callAI(
    resumeText: string,
    userId: number,
    jobTitle?: string | undefined,
    jobDescription?: string | undefined,
  ): Promise<AtsScoreResult> {
    const provider = getProviderForService("ATS_SCORE");
    const prompt = this.buildPrompt(resumeText, jobTitle, jobDescription);
    const response = await provider.generateText(prompt);
    logAIRequest("ATS_SCORE", response, true, undefined, userId);
    return this.parseAIResponse(response.text);
  }

  private buildPrompt(
    resumeText: string,
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

    return `You are an expert ATS (Applicant Tracking System) resume analyzer. Analyze the following resume text and provide a detailed ATS compatibility score.

${jobContext}

RESUME TEXT:
---
${resumeText}
---

Evaluate the resume across these categories and provide scores from 0-100:

1. **Formatting** (0-100): How well-structured is the resume for ATS parsing? Consider:
   - Clear section headers (Experience, Education, Skills, etc.)
   - Consistent date formats
   - No tables, columns, or graphics that confuse ATS
   - Proper use of bullet points
   - Standard fonts and layout assumptions

2. **Keywords** (0-100): How well does the resume match relevant industry/role keywords?
   - Technical skills mentioned
   - Industry-standard terminology
   - Action verbs
   - Role-relevant buzzwords
   ${jobDescription ? "- Match against the provided job description keywords" : "- General tech industry keyword coverage"}

3. **Experience** (0-100): How effectively is work experience presented?
   - Quantified achievements (numbers, percentages, metrics)
   - Clear job titles and company names
   - Relevant experience duration
   - Progressive responsibility shown

4. **Skills** (0-100): How comprehensive and relevant is the skills section?
   - Technical skills listed
   - Soft skills demonstrated through experience
   - Skills organization and categorization
   - Relevance to target role

5. **Education** (0-100): How well is education presented?
   - Degree and institution clearly stated
   - Relevant coursework or certifications
   - GPA if noteworthy
   - Academic achievements

6. **Impact** (0-100): How well does the resume demonstrate measurable impact?
   - Use of metrics and data
   - Clear outcomes and results
   - STAR method usage (Situation, Task, Action, Result)
   - Leadership and initiative examples

Respond with ONLY valid JSON (no markdown formatting, no code blocks, no explanation) in this exact structure:
{
  "overallScore": <number 0-100, weighted average of categories>,
  "categoryScores": {
    "formatting": <number 0-100>,
    "keywords": <number 0-100>,
    "experience": <number 0-100>,
    "skills": <number 0-100>,
    "education": <number 0-100>,
    "impact": <number 0-100>
  },
  "suggestions": [
    "<specific, actionable suggestion 1>",
    "<specific, actionable suggestion 2>",
    "<specific, actionable suggestion 3>",
    "<up to 8 suggestions total>"
  ],
  "keywordAnalysis": {
    "found": ["<keyword1>", "<keyword2>", "...up to 15 keywords fully present and prominent in the resume"],
    "partial": ["<keyword1>", "<keyword2>", "...up to 8 keywords mentioned only once or under-represented"],
    "missing": ["<missing keyword1>", "<missing keyword2>", "...up to 10 keywords from the JD completely absent from the resume"]
  }
}`;
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

  /** Returns the latest 30 ATS scores for a student, sorted oldest-first for charting. */
  async getScoreHistory(studentId: number) {
    const rows = await prisma.atsScore.findMany({
      where: { studentId },
      select: {
        id: true,
        overallScore: true,
        jobTitle: true,
        jobDescription: true,
        resumeUrl: true,
        createdAt: true,
      },
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      take: 30,
    });
    return rows.reverse();
  }
}
