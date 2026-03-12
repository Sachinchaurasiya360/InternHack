import type { LatexChatInput } from "./latex-chat.validation.js";
import { getProviderForService } from "../../lib/ai-provider-registry.js";
import { logAIRequest } from "../../lib/ai-request-logger.js";

interface ChatResponse {
  reply: string;
  updatedLatex?: string;
}

export class LatexChatService {
  async chat(input: LatexChatInput, userId?: number): Promise<ChatResponse> {
    const provider = getProviderForService("LATEX_CHAT");
    const prompt = this.buildChatPrompt(input);
    const response = await provider.generateText(prompt);
    logAIRequest("LATEX_CHAT", response, true, undefined, userId);
    return this.parseResponse(response.text.trim());
  }

  async optimizeForJD(latexCode: string, jobDescription: string, userId?: number): Promise<ChatResponse> {
    const provider = getProviderForService("LATEX_CHAT");
    const prompt = this.buildJDPrompt(latexCode, jobDescription);
    const response = await provider.generateText(prompt);
    logAIRequest("LATEX_CHAT", response, true, undefined, userId);
    return this.parseResponse(response.text.trim());
  }

  private buildChatPrompt(input: LatexChatInput): string {
    const historyBlock =
      input.history.length > 0
        ? input.history
            .slice(-10)
            .map((m) => `${m.role === "user" ? "USER" : "ASSISTANT"}: ${m.content}`)
            .join("\n")
        : "";

    return `You are an expert LaTeX resume assistant. You help users improve their resumes by editing LaTeX code.

CURRENT LATEX RESUME:
\`\`\`latex
${input.latexCode}
\`\`\`

${historyBlock ? `CONVERSATION HISTORY:\n${historyBlock}\n` : ""}
USER MESSAGE: ${input.message}

INSTRUCTIONS:
- If the user asks a question or wants advice, respond with helpful text in "reply".
- If the user asks for a change to the resume (add a section, modify skills, reword experience, etc.), make the change and include the FULL modified LaTeX code in "updatedLatex".
- The updated LaTeX MUST compile with standard pdflatex. Only use packages: geometry, enumitem, hyperref, titlesec.
- Keep the resume to exactly 1 page.
- Use strong action verbs and quantify achievements where possible.
- Respond using the EXACT tag format below. No markdown fences, no JSON, no extra text outside the tags.

RESPONSE FORMAT:
<reply>your explanation here</reply>
<latex>full modified LaTeX code here — ONLY include this tag if a code change was requested, omit entirely if no change</latex>`;
  }

  private buildJDPrompt(latexCode: string, jobDescription: string): string {
    return `You are an expert ATS resume optimizer. Your task is to rewrite a LaTeX resume to maximize its ATS compatibility score for a specific job description.

CURRENT LATEX RESUME:
\`\`\`latex
${latexCode}
\`\`\`

TARGET JOB DESCRIPTION:
${jobDescription}

OPTIMIZATION INSTRUCTIONS:
1. Analyze the job description for key skills, technologies, and requirements
2. Rewrite the Summary section to align with the job requirements
3. Reorder and rephrase Experience bullet points to emphasize relevant skills
4. Add missing keywords from the job description naturally into the content
5. Adjust the Skills section to prioritize technologies mentioned in the JD
6. Keep all factual content accurate — do not fabricate experience or qualifications
7. Maintain the exact same LaTeX structure and formatting
8. The document MUST compile with standard pdflatex using only: geometry, enumitem, hyperref, titlesec
9. Keep it to exactly 1 page

Respond using the EXACT tag format below. No markdown fences, no JSON.

RESPONSE FORMAT:
<reply>brief summary of changes made to optimize for this role</reply>
<latex>the full rewritten LaTeX code</latex>`;
  }

  private parseResponse(text: string): ChatResponse {
    console.log("[LatexChat] Raw AI length:", text.length, "| has <reply>:", text.includes("<reply>"), "| has <latex>:", text.includes("<latex>"), "| has </latex>:", text.includes("</latex>"));

    // Primary: extract from XML-style tags (robust with LaTeX backslashes)
    const replyMatch = text.match(/<reply>([\s\S]*?)<\/reply>/);
    // Use greedy match for <latex> — it's always the last/largest block
    let latexMatch = text.match(/<latex>([\s\S]*)<\/latex>/);

    // Fallback: if <latex> exists but no closing tag (model truncated), take everything after it
    if (!latexMatch && text.includes("<latex>")) {
      const idx = text.indexOf("<latex>") + "<latex>".length;
      const raw = text.slice(idx).trim();
      if (raw.length > 20) {
        latexMatch = [raw, raw] as unknown as RegExpMatchArray;
      }
    }

    // Also handle ```latex fences inside <latex> tag
    let latexCode = latexMatch ? latexMatch[1].trim() : undefined;
    if (latexCode?.startsWith("```")) {
      latexCode = latexCode.replace(/^```(?:latex)?\n?/, "").replace(/\n?```$/, "");
    }

    if (replyMatch) {
      console.log("[LatexChat] Parsed reply:", replyMatch[1].trim().slice(0, 80), "| latex:", latexCode ? `${latexCode.length} chars` : "none");
      return {
        reply: replyMatch[1].trim(),
        updatedLatex: latexCode || undefined,
      };
    }

    // Fallback: try JSON (for backward compat)
    let cleaned = text;
    if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }
    cleaned = cleaned.replace(/,(\s*[}\]])/g, "$1");

    try {
      const parsed = JSON.parse(cleaned);
      return {
        reply: typeof parsed.reply === "string" ? parsed.reply : "I could not process that request.",
        updatedLatex: typeof parsed.updatedLatex === "string" ? parsed.updatedLatex : undefined,
      };
    } catch {
      const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          const parsed = JSON.parse(jsonMatch[0].replace(/,(\s*[}\]])/g, "$1"));
          return {
            reply: typeof parsed.reply === "string" ? parsed.reply : cleaned,
            updatedLatex: typeof parsed.updatedLatex === "string" ? parsed.updatedLatex : undefined,
          };
        } catch {
          // fall through
        }
      }
      return { reply: cleaned };
    }
  }
}
