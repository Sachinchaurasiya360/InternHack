import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PDFParse } from "pdf-parse";
import { prisma } from "../../database/db.js";
import type { AtsScoreResult, ScoreResumeInput, AtsCategoryScores, AtsKeywordAnalysis } from "./ats.types.js";
import type { Prisma } from "@prisma/client";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class AtsService {
  private genAI: GoogleGenerativeAI;

  constructor() {
    const apiKey = process.env["GEMINI_API_KEY"] ?? "";
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async scoreResume(studentId: number, input: ScoreResumeInput) {
    const resumeText = await this.extractPdfText(input.resumeUrl);

    if (!resumeText || resumeText.trim().length < 50) {
      throw new Error("Could not extract sufficient text from the resume PDF. Make sure it is not a scanned image.");
    }

    const result = await this.callGemini(resumeText, input.jobTitle, input.jobDescription);

    const atsScore = await prisma.atsScore.create({
      data: {
        studentId,
        resumeUrl: input.resumeUrl,
        jobTitle: input.jobTitle ?? null,
        jobDescription: input.jobDescription ?? null,
        overallScore: result.overallScore,
        categoryScores: JSON.parse(JSON.stringify(result.categoryScores)) as Prisma.InputJsonValue,
        suggestions: JSON.parse(JSON.stringify(result.suggestions)) as Prisma.InputJsonValue,
        keywordAnalysis: JSON.parse(JSON.stringify(result.keywordAnalysis)) as Prisma.InputJsonValue,
        rawResponse: JSON.parse(JSON.stringify(result)) as Prisma.InputJsonValue,
      },
    });

    return atsScore;
  }

  async getScoreHistory(studentId: number) {
    return prisma.atsScore.findMany({
      where: { studentId },
      orderBy: { createdAt: "desc" },
      take: 20,
    });
  }

  async getScoreById(scoreId: number, studentId: number) {
    const score = await prisma.atsScore.findUnique({ where: { id: scoreId } });
    if (!score) throw new Error("Score not found");
    if (score.studentId !== studentId) throw new Error("Not authorized");
    return score;
  }

  private async extractPdfText(resumeUrl: string): Promise<string> {
    const uploadsDir = path.join(__dirname, "../../../uploads");
    const filename = path.basename(resumeUrl);
    const filePath = path.join(uploadsDir, filename);

    const buffer = await readFile(filePath);
    const parser = new PDFParse({ data: buffer });
    const result = await parser.getText();
    await parser.destroy();
    return result.text;
  }

  private async callGemini(
    resumeText: string,
    jobTitle?: string | undefined,
    jobDescription?: string | undefined,
  ): Promise<AtsScoreResult> {
    const model = this.genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = this.buildPrompt(resumeText, jobTitle, jobDescription);

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return this.parseGeminiResponse(text);
  }

  private buildPrompt(
    resumeText: string,
    jobTitle?: string | undefined,
    jobDescription?: string | undefined,
  ): string {
    const jobContext = jobTitle || jobDescription
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
    "found": ["<keyword1>", "<keyword2>", "...up to 15 found keywords"],
    "missing": ["<missing keyword1>", "<missing keyword2>", "...up to 10 missing keywords"]
  }
}`;
  }

  private parseGeminiResponse(responseText: string): AtsScoreResult {
    let jsonStr = responseText;
    const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch?.[1]) {
      jsonStr = jsonMatch[1].trim();
    }

    const parsed: unknown = JSON.parse(jsonStr);

    if (!parsed || typeof parsed !== "object") {
      throw new Error("Invalid response format from Gemini");
    }

    const obj = parsed as Record<string, unknown>;

    const overallScore = typeof obj["overallScore"] === "number"
      ? Math.max(0, Math.min(100, Math.round(obj["overallScore"])))
      : 50;

    const categoryScores = this.validateCategoryScores(obj["categoryScores"]);
    const suggestions = this.validateSuggestions(obj["suggestions"]);
    const keywordAnalysis = this.validateKeywordAnalysis(obj["keywordAnalysis"]);

    return { overallScore, categoryScores, suggestions, keywordAnalysis };
  }

  private validateCategoryScores(raw: unknown): AtsCategoryScores {
    const defaults: AtsCategoryScores = {
      formatting: 50, keywords: 50, experience: 50,
      skills: 50, education: 50, impact: 50,
    };
    if (!raw || typeof raw !== "object") return defaults;
    const obj = raw as Record<string, unknown>;
    const clamp = (v: unknown) => typeof v === "number" ? Math.max(0, Math.min(100, Math.round(v))) : 50;
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
    return raw.filter((s): s is string => typeof s === "string").slice(0, 10);
  }

  private validateKeywordAnalysis(raw: unknown): AtsKeywordAnalysis {
    const defaults: AtsKeywordAnalysis = { found: [], missing: [] };
    if (!raw || typeof raw !== "object") return defaults;
    const obj = raw as Record<string, unknown>;
    return {
      found: Array.isArray(obj["found"]) ? obj["found"].filter((s): s is string => typeof s === "string") : [],
      missing: Array.isArray(obj["missing"]) ? obj["missing"].filter((s): s is string => typeof s === "string") : [],
    };
  }
}
