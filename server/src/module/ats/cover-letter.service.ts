import { GoogleGenerativeAI } from "@google/generative-ai";
import type { GenerateCoverLetterInput } from "./cover-letter.validation.js";

export class CoverLetterService {
  private genAI: GoogleGenerativeAI;

  constructor() {
    const apiKey = process.env["GEMINI_API_KEY"] ?? "";
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async generate(input: GenerateCoverLetterInput): Promise<string> {
    const model = this.genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
    const prompt = this.buildPrompt(input);
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return text.trim();
  }

  private buildPrompt(input: GenerateCoverLetterInput): string {
    const toneInstructions: Record<string, string> = {
      professional: "Use a formal, professional tone. Be confident and direct. Avoid overly casual language.",
      friendly: "Use a warm, approachable tone while staying professional. Show enthusiasm naturally without being overly formal.",
      enthusiastic: "Use an energetic, passionate tone. Express genuine excitement about the role and company. Be dynamic and engaging.",
    };

    const toneGuide = toneInstructions[input.tone] ?? toneInstructions["professional"];

    return `You are an expert career coach and cover letter writer. Generate a polished, compelling cover letter based on the following information.

TONE: ${input.tone}
${toneGuide}

JOB DESCRIPTION:
${input.jobDescription}

${input.jobTitle ? `JOB TITLE: ${input.jobTitle}` : ""}
${input.companyName ? `COMPANY: ${input.companyName}` : ""}
${input.keySkills ? `CANDIDATE'S KEY SKILLS & EXPERIENCE:\n${input.keySkills}` : ""}

INSTRUCTIONS:
- Write a 3-4 paragraph cover letter
- ${input.companyName ? `Address it to the hiring team at ${input.companyName}` : "Address it to 'Dear Hiring Manager'"}
- Open with a strong hook that shows genuine interest in the role
- Highlight relevant skills and experience that match the job requirements
- Include specific examples of achievements when possible
- Close with a clear call to action
- Keep it concise — no more than 400 words
- Do NOT include placeholder brackets like [Your Name] — write it as a complete letter
- Do NOT include any subject line, headers, or metadata — just the letter body
- End with "Sincerely," followed by a blank line (the user will add their name)

Return ONLY the cover letter text. No explanations, no markdown formatting, no code blocks.`;
  }
}
