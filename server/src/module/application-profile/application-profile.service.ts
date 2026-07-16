import { GoogleGenerativeAI } from "@google/generative-ai";
import { Prisma } from "@prisma/client";
import { prisma } from "../../database/db.js";

const ANSWER_MATCH_THRESHOLD = 0.72;

function normalizeQuestion(question: string): string {
  return question
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenSimilarity(a: string, b: string): number {
  const aTokens = new Set(normalizeQuestion(a).split(" ").filter(Boolean));
  const bTokens = new Set(normalizeQuestion(b).split(" ").filter(Boolean));
  if (aTokens.size === 0 || bTokens.size === 0) return 0;
  let overlap = 0;
  for (const token of aTokens) {
    if (bTokens.has(token)) overlap += 1;
  }
  return overlap / Math.max(aTokens.size, bTokens.size);
}

function compactText(value?: string | null, max = 600): string {
  const text = value?.replace(/\s+/g, " ").trim();
  if (!text) return "Not provided";
  return text.length > max ? `${text.slice(0, max).trimEnd()}...` : text;
}

export class ApplicationProfileService {
  async getMergedProfile(userId: number) {
    const [user, applicationProfile, resumes, coverLetters, preferences] = await Promise.all([
      prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          email: true,
          contactNo: true,
          bio: true,
          college: true,
          graduationYear: true,
          skills: true,
          linkedinUrl: true,
          githubUrl: true,
          portfolioUrl: true,
          leetcodeUrl: true,
          location: true,
          projects: true,
          resumes: true,
        },
      }),
      prisma.applicationProfile.findUnique({ where: { userId } }),
      prisma.generatedResume.findMany({
        where: { userId },
        orderBy: { updatedAt: "desc" },
        take: 10,
        select: { id: true, title: true, jobTitle: true, source: true, createdAt: true, updatedAt: true },
      }),
      prisma.generatedCoverLetter.findMany({
        where: { studentId: userId },
        orderBy: { updatedAt: "desc" },
        take: 10,
        select: { id: true, jobTitle: true, companyName: true, tone: true, excerpt: true, createdAt: true, updatedAt: true },
      }),
      prisma.userJobPreference.findUnique({ where: { userId } }),
    ]);

    if (!user) throw new Error("User not found");
    return { user, applicationProfile, resumes, coverLetters, preferences };
  }

  async upsertProfile(userId: number, data: Record<string, unknown>) {
    return prisma.applicationProfile.upsert({
      where: { userId },
      create: { userId, ...data },
      update: data,
    });
  }

  async updateAutofillSettings(
    userId: number,
    data: { autofillSettings: Record<string, unknown>; privacySettings?: Record<string, unknown> },
  ) {
    return prisma.applicationProfile.upsert({
      where: { userId },
      create: {
        userId,
        autofillSettings: data.autofillSettings as Prisma.InputJsonObject,
        privacySettings: (data.privacySettings ?? {}) as Prisma.InputJsonObject,
      },
      update: {
        autofillSettings: data.autofillSettings as Prisma.InputJsonObject,
        ...(data.privacySettings ? { privacySettings: data.privacySettings as Prisma.InputJsonObject } : {}),
      },
    });
  }

  async listQuestionAnswers(userId: number, filters: { search?: string; category?: string }) {
    const search = filters.search?.trim();
    return prisma.applicationQuestionAnswer.findMany({
      where: {
        userId,
        ...(filters.category ? { category: filters.category } : {}),
        ...(search ? {
          OR: [
            { questionText: { contains: search, mode: "insensitive" } },
            { answer: { contains: search, mode: "insensitive" } },
          ],
        } : {}),
      },
      orderBy: [{ lastUsedAt: "desc" }, { updatedAt: "desc" }],
      take: 100,
    });
  }

  async saveQuestionAnswer(
    userId: number,
    data: { questionText: string; answer: string; category?: string | null; source?: string },
  ) {
    const normalizedQuestion = normalizeQuestion(data.questionText);
    return prisma.applicationQuestionAnswer.upsert({
      where: { userId_normalizedQuestion: { userId, normalizedQuestion } },
      create: {
        userId,
        questionText: data.questionText,
        normalizedQuestion,
        answer: data.answer,
        category: data.category ?? null,
        source: data.source ?? "USER",
        lastUsedAt: new Date(),
        useCount: 1,
      },
      update: {
        questionText: data.questionText,
        answer: data.answer,
        category: data.category ?? null,
        source: data.source ?? "USER",
        lastUsedAt: new Date(),
        useCount: { increment: 1 },
      },
    });
  }

  async matchQuestionAnswer(userId: number, questionText: string) {
    const normalizedQuestion = normalizeQuestion(questionText);
    const exact = await prisma.applicationQuestionAnswer.findUnique({
      where: { userId_normalizedQuestion: { userId, normalizedQuestion } },
    });
    if (exact) {
      await prisma.applicationQuestionAnswer.update({
        where: { id: exact.id },
        data: { lastUsedAt: new Date(), useCount: { increment: 1 } },
      });
      return { matchType: "EXACT", confidence: 1, answer: exact };
    }

    const candidates = await prisma.applicationQuestionAnswer.findMany({
      where: { userId },
      orderBy: { updatedAt: "desc" },
      take: 200,
    });

    let best: { score: number; answer: (typeof candidates)[number] | null } = { score: 0, answer: null };
    for (const candidate of candidates) {
      const score = tokenSimilarity(questionText, candidate.questionText);
      if (score > best.score) best = { score, answer: candidate };
    }

    if (best.answer && best.score >= ANSWER_MATCH_THRESHOLD) {
      await prisma.applicationQuestionAnswer.update({
        where: { id: best.answer.id },
        data: { lastUsedAt: new Date(), useCount: { increment: 1 } },
      });
      return { matchType: "SEMANTIC", confidence: Number(best.score.toFixed(2)), answer: best.answer };
    }

    return { matchType: "NONE", confidence: 0, answer: null };
  }

  async generateQuestionAnswer(
    userId: number,
    input: { questionText: string; jobContext?: { title?: string | null; company?: string | null; description?: string | null } },
  ) {
    const profile = await this.getMergedProfile(userId);
    const apiKey = process.env["GEMINI_API_KEY"];
    if (!apiKey) {
      return {
        answer: "I need a bit more context from your profile before I can draft this answer.",
        confidence: 0.2,
        needsUserInput: true,
      };
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
    const user = profile.user;
    const prompt = `Generate a concise internship/job application answer.

Return only valid JSON:
{"answer":"...", "confidence":0.0, "needsUserInput":false}

Rules:
- Do not invent companies, degrees, dates, metrics, awards, or work authorization.
- If the profile lacks required facts, set needsUserInput true and write a cautious editable draft.
- Keep the answer professional, specific, and under 180 words unless the question requires more.

Question: ${input.questionText}

Job:
Title: ${compactText(input.jobContext?.title, 120)}
Company: ${compactText(input.jobContext?.company, 120)}
Description: ${compactText(input.jobContext?.description, 1400)}

Candidate:
Name: ${compactText(user.name, 120)}
College: ${compactText(user.college, 120)}
Graduation year: ${user.graduationYear ?? "Not provided"}
Location: ${compactText(user.location, 120)}
Bio: ${compactText(user.bio, 700)}
Skills: ${user.skills.join(", ") || "Not provided"}
Projects JSON: ${compactText(JSON.stringify(user.projects), 1000)}
Links: LinkedIn ${compactText(user.linkedinUrl, 160)}, GitHub ${compactText(user.githubUrl, 160)}, Portfolio ${compactText(user.portfolioUrl, 160)}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const jsonString = jsonMatch ? jsonMatch[0] : text;
    try {
      const parsed = JSON.parse(jsonString) as { answer?: string; confidence?: number; needsUserInput?: boolean };
      return {
        answer: parsed.answer || "",
        confidence: typeof parsed.confidence === "number" ? parsed.confidence : 0.5,
        needsUserInput: Boolean(parsed.needsUserInput),
      };
    } catch {
      return { answer: text, confidence: 0.4, needsUserInput: true };
    }
  }
}

export const applicationProfileService = new ApplicationProfileService();
