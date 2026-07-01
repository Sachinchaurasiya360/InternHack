import { prisma } from "../../database/db.js";
import { Prisma } from "@prisma/client";
import { sendEmail } from "../../utils/email.utils.js";
import { milestoneEmailHtml } from "../../utils/email-templates.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface MockInterviewTranscriptEntry {
  question: string;
  answer: string;
}

interface MockInterviewFeedback {
  communication: string;
  technicalAccuracy: string;
  areasToImprove: string[];
  strengths: string[];
  overallRating: number;
}

interface MockInterviewFeedbackResult {
  feedback: MockInterviewFeedback;
  fallbackUsed: boolean;
}

export class StudentService {
  async generateMockInterviewFeedback(topic: string, transcript: MockInterviewTranscriptEntry[]): Promise<MockInterviewFeedbackResult> {
    const fallbackFeedback = this.createMockInterviewFallbackFeedback(topic);
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return { feedback: fallbackFeedback, fallbackUsed: true };
    }

    try {
      const prompt = this.buildMockInterviewFeedbackPrompt(topic, transcript);
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
      const result = await model.generateContent(prompt);
      const text = result.response.text().trim();
      const parsed = this.parseMockInterviewFeedbackResponse(text);

      if (!parsed) {
        return { feedback: fallbackFeedback, fallbackUsed: true };
      }

      return { feedback: parsed, fallbackUsed: false };
    } catch {
      return { feedback: fallbackFeedback, fallbackUsed: true };
    }
  }

  private buildMockInterviewFeedbackPrompt(topic: string, transcript: MockInterviewTranscriptEntry[]): string {
    const transcriptText = transcript
      .map((entry, index) => `Question ${index + 1}: ${entry.question}\nAnswer ${index + 1}: ${entry.answer}`)
      .join("\n\n");

    return `You are an expert mock interview coach.

Evaluate the candidate's performance for the topic: ${topic}.

Transcript:
${transcriptText}

Return ONLY valid JSON with this exact shape:
{
  "communication": "1-2 sentences on clarity, structure, and communication",
  "technicalAccuracy": "1-2 sentences on correctness and depth of answers",
  "areasToImprove": ["specific suggestion 1", "specific suggestion 2", "specific suggestion 3"],
  "strengths": ["specific strength 1", "specific strength 2"],
  "overallRating": 1
}

Rules:
- areasToImprove must contain 2 to 3 specific, actionable suggestions.
- strengths must contain 1 to 2 concise strengths.
- overallRating must be an integer from 1 to 5.
- Do not wrap the JSON in markdown fences.
- Do not include any extra text outside the JSON object.`;
  }

  private parseMockInterviewFeedbackResponse(text: string): MockInterviewFeedback | null {
    let cleaned = text.trim();

    if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }

    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return null;

    try {
      const parsed = JSON.parse(jsonMatch[0]) as Record<string, unknown>;
      const communication = typeof parsed.communication === "string" ? parsed.communication.trim() : "";
      const technicalAccuracy = typeof parsed.technicalAccuracy === "string" ? parsed.technicalAccuracy.trim() : "";
      const areasToImprove = Array.isArray(parsed.areasToImprove)
        ? parsed.areasToImprove.map((item) => String(item).trim()).filter(Boolean).slice(0, 3)
        : [];
      const strengths = Array.isArray(parsed.strengths)
        ? parsed.strengths.map((item) => String(item).trim()).filter(Boolean).slice(0, 2)
        : [];
      const overallRating = Number(parsed.overallRating);

      if (!communication || !technicalAccuracy || areasToImprove.length < 2 || strengths.length < 1 || !Number.isFinite(overallRating)) {
        return null;
      }

      return {
        communication,
        technicalAccuracy,
        areasToImprove,
        strengths,
        overallRating: Math.min(5, Math.max(1, Math.round(overallRating))),
      };
    } catch {
      return null;
    }
  }

  private createMockInterviewFallbackFeedback(topic: string): MockInterviewFeedback {
    return {
      communication:
        `Your answers were understandable, but you can improve clarity by leading with a direct answer, then adding one short explanation and a closing sentence.`,
      technicalAccuracy:
        `You showed a basic grasp of ${topic.toLowerCase()}, but the strongest answers would be more precise with clearer terminology and a few concrete examples.`,
      areasToImprove: [
        "Use a tighter answer structure: answer first, then explain the reasoning.",
        "Add one concrete example, trade-off, or metric to support each response.",
        "Pause briefly before answering so you can organize your thoughts.",
      ],
      strengths: [
        "You stayed engaged throughout the session.",
        "You were able to connect your answers back to practical situations.",
      ],
      overallRating: 3,
    };
  }

  async getMyExternalApplications(studentId: number) {
    return prisma.externalJobApplication.findMany({
      where: { studentId },
      orderBy: { createdAt: "desc" },
      include: {
        adminJob: {
          select: {
            id: true, slug: true, company: true, role: true,
            location: true, salary: true, tags: true, applyLink: true,
          },
        },
      },
    });
  }

  async applyToExternalJob(studentId: number, adminJobId: number) {
    const job = await prisma.adminJob.findUnique({ where: { id: adminJobId } });
    if (!job) throw new Error("External job not found");
    if (!job.isActive || job.expiresAt < new Date()) throw new Error("This job has expired");

    try {
      const application = await prisma.$transaction(async (tx) => {
        const createdApplication = await tx.externalJobApplication.create({
          data: { studentId, adminJobId },
          include: {
            adminJob: {
              select: { id: true, slug: true, company: true, role: true },
            },
          },
        });
        return createdApplication;
      });

      // Check 10-application milestone (fire-and-forget)
      this.checkApplicationMilestone(studentId).catch((err) => console.error("Failed to check application milestone:", err));
      return application;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
        throw new Error("Already applied to this job");
      }
      throw e;
    }
  }

  async getExternalApplicationStatus(studentId: number, adminJobId: number) {
    return prisma.externalJobApplication.findUnique({
      where: { studentId_adminJobId: { studentId, adminJobId } },
      select: { id: true, createdAt: true },
    });
  }

  async deleteExternalApplication(applicationId: number, studentId: number) {
    const application = await prisma.externalJobApplication.findUnique({
      where: { id: applicationId },
    });
    if (!application) throw new Error("External application not found");
    if (application.studentId !== studentId) throw new Error("Not authorized");

    await prisma.externalJobApplication.delete({ where: { id: applicationId } });
    return { success: true };
  }

  async updateExternalApplicationNotes(applicationId: number, studentId: number, notes: string) {
    const application = await prisma.externalJobApplication.findUnique({
      where: { id: applicationId },
      select: { id: true, studentId: true },
    });
    if (!application || application.studentId !== studentId) throw new Error("External application not found");

    return prisma.externalJobApplication.update({
      where: { id: applicationId },
      data: { studentNotes: notes },
      select: { studentNotes: true, updatedAt: true },
    });
  }

  private async checkApplicationMilestone(studentId: number) {
    const total = await prisma.externalJobApplication.count({ where: { studentId } });
    if (total === 10) {
      const user = await prisma.user.findUnique({
        where: { id: studentId },
        select: { name: true, email: true },
      });
      if (user) {
        const html = milestoneEmailHtml(
          user.name,
          "10 Applications Sent!",
          "You've applied to 10 jobs on InternHack, that's serious commitment. " +
          "Consistency is the #1 predictor of landing an offer. Keep the momentum going, " +
          "explore new roles, and don't forget to sharpen your resume with our AI ATS scorer.",
          "Browse More Jobs",
          "https://www.internhack.xyz/jobs",
        );
        sendEmail({ to: user.email, subject: "You hit 10 applications! Keep it up", html }).catch((err) => console.error("Failed to send milestone email:", err));
      }
    }
  }
}
