import type {
  GenerateCoverLetterInput,
  UserProfile,
} from "./cover-letter.validation.js";
import { getProviderForService } from "../../lib/ai-provider-registry.js";
import { logAIRequest } from "../../lib/ai-request-logger.js";
import { prisma } from "../../database/db.js";

export class CoverLetterService {
  async generate(
    input: GenerateCoverLetterInput,
    profile?: UserProfile,
    userId?: number,
  ): Promise<string> {
    const provider = getProviderForService("COVER_LETTER");
    const prompt = this.buildPrompt(input, profile);
    const response = await provider.generateText(prompt);
    logAIRequest("COVER_LETTER", response, true, undefined, userId);
    return response.text.trim();
  }

  async saveGenerated(
    studentId: number,
    data: {
      jobTitle?: string;
      companyName?: string;
      jobDescription: string;
      content: string;
      tone: string;
      useProfile: boolean;
      keySkills?: string;
    }
  ) {
    const excerpt = data.content.slice(0, 120).replace(/\n/g, " ").trim();
    return prisma.generatedCoverLetter.create({
      data: {
        studentId,
        jobTitle:       data.jobTitle       ?? null,
        companyName:    data.companyName    ?? null,
        jobDescription: data.jobDescription,
        content:        data.content,
        tone:           data.tone,
        useProfile:     data.useProfile,
        keySkills:      data.keySkills      ?? null,
        excerpt,
      },
    });
  }

  async getHistory(studentId: number) {
    return prisma.generatedCoverLetter.findMany({
      where:   { studentId },
      orderBy: { createdAt: "desc" },
      take:    20,
      select: {
        id:          true,
        jobTitle:    true,
        companyName: true,
        tone:        true,
        excerpt:     true,
        createdAt:   true,
      },
    });
  }

  async getOne(id: number, studentId: number) {
    return prisma.generatedCoverLetter.findFirst({
      where: { id, studentId },
    });
  }

  async deleteOne(id: number, studentId: number) {
    return prisma.generatedCoverLetter.deleteMany({
      where: { id, studentId },
    });
  }

  private buildProfileSection(profile: UserProfile): string {
    const parts: string[] = [];

    parts.push(`Name: ${profile.name}`);
    if (profile.bio) parts.push(`About: ${profile.bio}`);
    if (profile.college) {
      let edu = `Education: ${profile.college}`;
      if (profile.graduationYear)
        edu += ` (Graduation: ${String(profile.graduationYear)})`;
      parts.push(edu);
    }
    if (profile.company) {
      let work = `Current Company: ${profile.company}`;
      if (profile.designation) work += ` - ${profile.designation}`;
      parts.push(work);
    }
    if (profile.location) parts.push(`Location: ${profile.location}`);
    if (profile.skills.length > 0)
      parts.push(`Skills: ${profile.skills.join(", ")}`);

    if (profile.projects.length > 0) {
      parts.push("Projects:");
      for (const p of profile.projects) {
        let line = `  - ${p.title}: ${p.description}`;
        if (p.techStack.length > 0)
          line += ` [Tech: ${p.techStack.join(", ")}]`;
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

  private buildPrompt(
    input: GenerateCoverLetterInput,
    profile?: UserProfile,
  ): string {
    const toneInstructions: Record<string, string> = {
      professional:
        "Use a formal, professional tone. Be confident and direct. Avoid overly casual language.",
      friendly:
        "Use a warm, approachable tone while staying professional. Show enthusiasm naturally without being overly formal.",
      enthusiastic:
        "Use an energetic, passionate tone. Express genuine excitement about the role and company. Be dynamic and engaging.",
      technical:
        "Use precise technical language. Name specific tools, frameworks, and methodologies where relevant. Assume the reader is an engineer or technical hiring manager, not HR. Demonstrate depth of knowledge.",
      creative:
        "Use a distinctive, expressive voice. Lead with a hook or narrative. Show personality through word choice. Avoid corporate clichés. Make the letter memorable.",
      formal:
        "Use measured, precise language. Prefer structured paragraphs with clear logical progression. Avoid casual contractions. Match the tone of executive or senior-track communication.",
      concise:
        "Be extremely brief and direct. Use short sentences. Cut all filler. Write 1-2 short paragraphs maximum, targeting 150-200 words. Ignore the default paragraph count and word limit — brevity is the priority. Every sentence must earn its place.",
      startup:
        "Use bold, mission-driven language. Show that you understand the startup's vision and want to help build something meaningful. Be direct, energetic, and avoid corporate speak.",
    };
    

    const toneGuide =
      toneInstructions[input.tone] ?? toneInstructions["professional"];

    const lengthInstructions: Record<string,string> ={
      short:"Keep the cover letter concise and impactful. Target approximately 150 words. Prioritize brevity and clarity.",
      medium: "Write a balanced cover letter of approximately 300 words. Maintain good detail while staying concise.",
       long:
    "Write a detailed and comprehensive cover letter of approximately 500 words with richer examples and explanations.",
    }  ;
    const lengthGuide = lengthInstructions[input.length]??lengthInstructions["medium"];

    const profileBlock = profile
      ? `\nCANDIDATE PROFILE:\n${this.buildProfileSection(profile)}\n`
      : "";

    return `You are an expert career coach and cover letter writer. Generate a polished, compelling cover letter based on the following information.

TONE: ${input.tone}
${toneGuide}

LENGTH:${input.length}
${lengthGuide}

JOB DESCRIPTION:
${input.jobDescription}

${input.jobTitle ? `JOB TITLE: ${input.jobTitle}` : ""}
${input.companyName ? `COMPANY: ${input.companyName}` : ""}
${profileBlock}${input.keySkills ? `CANDIDATE'S KEY SKILLS & EXPERIENCE:\n${input.keySkills}` : ""}

INSTRUCTIONS:
- Write a 3-4 paragraph cover letter
- ${profile ? `Use the candidate's name "${profile.name}" to sign the letter` : 'End with "Sincerely," followed by a blank line (the user will add their name)'}
- ${input.companyName ? `Address it to the hiring team at ${input.companyName}` : "Address it to 'Dear Hiring Manager'"}
- Open with a strong hook that shows genuine interest in the role
- Highlight relevant skills and experience that match the job requirements
- Include specific examples from the candidate's projects and achievements when available
- Reference the candidate's education and technical skills where relevant
- Close with a clear call to action
- Keep it concise
- target approximately ${input.targetWords ?? 300} words 
- Do NOT include placeholder brackets like [Your Name] - write it as a complete letter
- Do NOT include any subject line, headers, or metadata - just the letter body

Return ONLY the cover letter text. No explanations, no markdown formatting, no code blocks.`;
  }
}