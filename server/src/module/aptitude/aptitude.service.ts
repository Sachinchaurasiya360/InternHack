import type { AptitudeDifficulty } from "@prisma/client";
import { prisma } from "../../database/db.js";
import { MilestoneService } from "../milestone/milestone.service.js";
import { applyAptitudeDifficultyChange } from "./aptitude.difficulty.js";

const milestoneService = new MilestoneService();

export class AptitudeService {
  private async getTopicDifficulty(
    studentId: number | undefined,
    topicId: number,
  ): Promise<AptitudeDifficulty> {
    if (!studentId) return "MEDIUM";

    const row = await prisma.studentAptitudeTopicProgress.findUnique({
      where: { studentId_topicId: { studentId, topicId } },
      select: { currentDifficulty: true },
    });

    return row?.currentDifficulty ?? "MEDIUM";
  }

  private async fetchQuestionsAtDifficulty(
    topicId: number,
    difficulty: AptitudeDifficulty,
    studentId: number | undefined,
    page: number,
    limit: number,
  ) {
    const offset = (page - 1) * limit;
    const baseWhere = { topicId, difficulty };

    let total = await prisma.aptitudeQuestion.count({ where: baseWhere });
    let effectiveDifficulty = difficulty;

    if (total === 0 && difficulty !== "MEDIUM") {
      effectiveDifficulty = "MEDIUM";
      total = await prisma.aptitudeQuestion.count({
        where: { topicId, difficulty: effectiveDifficulty },
      });
    }

    if (total === 0) {
      total = await prisma.aptitudeQuestion.count({ where: { topicId } });
      const questions = await prisma.aptitudeQuestion.findMany({
        where: { topicId },
        skip: offset,
        take: limit,
        orderBy: { id: "asc" },
      });
      return { questions, total, effectiveDifficulty: "MEDIUM" as AptitudeDifficulty };
    }

    const where = { topicId, difficulty: effectiveDifficulty };
    let questions;

    if (studentId) {
      const unansweredCount = await prisma.aptitudeQuestion.count({
        where: {
          ...where,
          NOT: { progress: { some: { studentId, answered: true } } },
        },
      });

      if (offset < unansweredCount) {
        const unanswered = await prisma.aptitudeQuestion.findMany({
          where: {
            ...where,
            NOT: { progress: { some: { studentId, answered: true } } },
          },
          orderBy: { id: "asc" },
          skip: offset,
          take: limit,
        });
        questions = unanswered;

        if (questions.length < limit) {
          const answered = await prisma.aptitudeQuestion.findMany({
            where: {
              ...where,
              progress: { some: { studentId, answered: true } },
            },
            orderBy: { id: "asc" },
            take: limit - questions.length,
          });
          questions = [...questions, ...answered];
        }
      } else {
        questions = await prisma.aptitudeQuestion.findMany({
          where: {
            ...where,
            progress: { some: { studentId, answered: true } },
          },
          orderBy: { id: "asc" },
          skip: offset - unansweredCount,
          take: limit,
        });
      }
    } else {
      questions = await prisma.aptitudeQuestion.findMany({
        where,
        skip: offset,
        take: limit,
        orderBy: { id: "asc" },
      });
    }

    return { questions, total, effectiveDifficulty };
  }

  async getCategories(studentId?: number) {
    const categories = await prisma.aptitudeCategory.findMany({
      orderBy: { orderIndex: "asc" },
      include: {
        topics: {
          orderBy: { orderIndex: "asc" },
          include: { _count: { select: { questions: true } } },
        },
      },
    });

    let answeredMap: Map<number, { answered: number; correct: number }> | undefined;

    if (studentId) {
      const progress = await prisma.studentAptitudeProgress.findMany({
        where: { studentId },
        select: { question: { select: { topicId: true } }, correct: true },
      });

      answeredMap = new Map();
      for (const p of progress) {
        const topicId = p.question.topicId;
        const existing = answeredMap.get(topicId) || { answered: 0, correct: 0 };
        existing.answered++;
        if (p.correct) existing.correct++;
        answeredMap.set(topicId, existing);
      }
    }

    return categories.map((cat) => {
      const topics = cat.topics.map((t) => {
        const stats = answeredMap?.get(t.id);
        return {
          id: t.id,
          name: t.name,
          slug: t.slug,
          description: t.description,
          questionCount: t._count.questions,
          answeredCount: stats?.answered ?? 0,
          correctCount: stats?.correct ?? 0,
        };
      });

      return {
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        topicCount: topics.length,
        questionCount: topics.reduce((s, t) => s + t.questionCount, 0),
        answeredCount: topics.reduce((s, t) => s + t.answeredCount, 0),
        topics,
      };
    });
  }

  async getTopicQuestions(slug: string, page: number = 1, limit: number = 10, studentId?: number) {
    const topic = await prisma.aptitudeTopic.findUnique({
      where: { slug },
      include: {
        category: { select: { name: true, slug: true } },
        _count: { select: { questions: true } },
      },
    });

    if (!topic) return null;

    const currentDifficulty = await this.getTopicDifficulty(studentId, topic.id);
    const { questions, total, effectiveDifficulty } = await this.fetchQuestionsAtDifficulty(
      topic.id,
      currentDifficulty,
      studentId,
      page,
      limit,
    );

    let progressMap: Map<number, { answered: boolean; correct: boolean }> | undefined;

    if (studentId && questions.length > 0) {
      const progress = await prisma.studentAptitudeProgress.findMany({
        where: {
          studentId,
          questionId: { in: questions.map((q) => q.id) },
        },
      });
      progressMap = new Map(progress.map((p) => [p.questionId, { answered: p.answered, correct: p.correct }]));
    }

    return {
      id: topic.id,
      name: topic.name,
      slug: topic.slug,
      description: topic.description,
      categoryName: topic.category.name,
      categorySlug: topic.category.slug,
      totalQuestions: topic._count.questions,
      currentDifficulty: effectiveDifficulty,
      page,
      totalPages: Math.max(1, Math.ceil(total / limit)),
      questions: questions.map((q) => {
        const prog = progressMap?.get(q.id);
        return {
          id: q.id,
          question: q.question,
          optionA: q.optionA,
          optionB: q.optionB,
          optionC: q.optionC,
          optionD: q.optionD,
          optionE: q.optionE,
          difficulty: q.difficulty,
          companies: q.companies,
          correctAnswer: prog?.answered ? q.correctAnswer : undefined,
          explanation: prog?.answered ? q.explanation : undefined,
          answered: prog?.answered ?? false,
          correct: prog?.correct ?? false,
        };
      }),
    };
  }

  async submitAnswer(studentId: number, questionId: number, answer: string) {
    const question = await prisma.aptitudeQuestion.findUnique({
      where: { id: questionId },
      select: {
        id: true,
        topicId: true,
        correctAnswer: true,
        explanation: true,
      },
    });

    if (!question) throw new Error("Question not found");

    const isCorrect = question.correctAnswer === answer;

    await prisma.studentAptitudeProgress.upsert({
      where: { studentId_questionId: { studentId, questionId } },
      create: { studentId, questionId, answered: true, correct: isCorrect, lastPracticedAt: new Date() },
      update: { answered: true, correct: isCorrect, lastPracticedAt: new Date() },
    });

    const topicState = await prisma.studentAptitudeTopicProgress.findUnique({
      where: { studentId_topicId: { studentId, topicId: question.topicId } },
      select: { currentDifficulty: true },
    });
    const previousDifficulty = topicState?.currentDifficulty ?? "MEDIUM";
    const { next, difficultyChange } = applyAptitudeDifficultyChange(previousDifficulty, isCorrect);

    await prisma.studentAptitudeTopicProgress.upsert({
      where: { studentId_topicId: { studentId, topicId: question.topicId } },
      create: { studentId, topicId: question.topicId, currentDifficulty: next },
      update: { currentDifficulty: next },
    });

    const totalAnswered = await prisma.studentAptitudeProgress.count({
      where: { studentId },
    });
    const totalQuestions = await prisma.aptitudeQuestion.count();
    milestoneService
      .checkAptitudeMilestone(studentId, totalAnswered, totalQuestions)
      .catch((err) => console.error("Failed to check aptitude milestone:", err));

    return {
      correct: isCorrect,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      currentDifficulty: next,
      previousDifficulty,
      difficultyChange,
    };
  }

  async getCompanies() {
    const questions = await prisma.aptitudeQuestion.findMany({
      select: { companies: true },
    });

    const companyCount: Record<string, number> = {};
    for (const q of questions) {
      for (const c of q.companies) {
        companyCount[c] = (companyCount[c] || 0) + 1;
      }
    }

    return Object.entries(companyCount)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }

  async getCompanyQuestions(company: string, page: number = 1, limit: number = 10, studentId?: number) {
    const where = { companies: { has: company } };
    const total = await prisma.aptitudeQuestion.count({ where });
    const offset = (page - 1) * limit;

    const questions = await prisma.aptitudeQuestion.findMany({
      where,
      skip: offset,
      take: limit,
      include: { topic: { select: { name: true, slug: true } } },
      orderBy: { id: "asc" },
    });

    let progressMap: Map<number, { answered: boolean; correct: boolean }> | undefined;

    if (studentId) {
      const progress = await prisma.studentAptitudeProgress.findMany({
        where: {
          studentId,
          questionId: { in: questions.map((q) => q.id) },
        },
      });
      progressMap = new Map(progress.map((p) => [p.questionId, { answered: p.answered, correct: p.correct }]));
    }

    return {
      company,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      questions: questions.map((q) => {
        const prog = progressMap?.get(q.id);
        return {
          id: q.id,
          question: q.question,
          optionA: q.optionA,
          optionB: q.optionB,
          optionC: q.optionC,
          optionD: q.optionD,
          optionE: q.optionE,
          difficulty: q.difficulty,
          companies: q.companies,
          topicName: q.topic.name,
          topicSlug: q.topic.slug,
          correctAnswer: prog?.answered ? q.correctAnswer : undefined,
          explanation: prog?.answered ? q.explanation : undefined,
          answered: prog?.answered ?? false,
          correct: prog?.correct ?? false,
        };
      }),
    };
  }

  async resetTopicProgress(studentId: number, slug: string) {
    const topic = await prisma.aptitudeTopic.findUnique({
      where: { slug },
      select: { id: true },
    });
    if (!topic) throw new Error("Topic not found");

    const questionIds = await prisma.aptitudeQuestion.findMany({
      where: { topicId: topic.id },
      select: { id: true },
    });

    await prisma.$transaction([
      prisma.studentAptitudeProgress.deleteMany({
        where: {
          studentId,
          questionId: { in: questionIds.map((q) => q.id) },
        },
      }),
      prisma.studentAptitudeTopicProgress.deleteMany({
        where: { studentId, topicId: topic.id },
      }),
    ]);

    return { success: true };
  }

  async getProgress(studentId: number) {
    const total = await prisma.aptitudeQuestion.count();
    const progress = await prisma.studentAptitudeProgress.findMany({
      where: { studentId },
      select: { correct: true, lastPracticedAt: true },
    });

    const todayUTC = new Date();
    todayUTC.setUTCHours(0, 0, 0, 0);
    const yesterdayUTC = todayUTC.getTime() - 86400000;

    const dates = [
      ...new Set(
        progress.map((p) => {
          const d = new Date(p.lastPracticedAt);
          d.setUTCHours(0, 0, 0, 0);
          return d.getTime();
        }),
      ),
    ].sort((a, b) => b - a);

    let currentStreak = 0;
    let expected = dates[0] === todayUTC.getTime() ? todayUTC.getTime() : yesterdayUTC;

    for (const dateMs of dates) {
      if (dateMs === expected) {
        currentStreak++;
        expected -= 86400000;
      } else if (dateMs < expected) {
        break;
      }
    }

    return {
      totalQuestions: total,
      totalAnswered: progress.length,
      totalCorrect: progress.filter((p) => p.correct).length,
      currentStreak,
    };
  }

  async getWeakAreas(studentId: number) {
    const progress = await prisma.studentAptitudeProgress.findMany({
      where: { studentId, answered: true },
      select: {
        correct: true,
        question: {
          select: {
            topic: {
              select: {
                id: true,
                name: true,
                slug: true,
                category: { select: { name: true, slug: true } },
              },
            },
          },
        },
      },
    });

    const byTopic = new Map<
      number,
      {
        topicId: number;
        topicName: string;
        topicSlug: string;
        categoryName: string;
        categorySlug: string;
        answered: number;
        correct: number;
      }
    >();

    for (const row of progress) {
      const topic = row.question.topic;
      const stats = byTopic.get(topic.id) ?? {
        topicId: topic.id,
        topicName: topic.name,
        topicSlug: topic.slug,
        categoryName: topic.category.name,
        categorySlug: topic.category.slug,
        answered: 0,
        correct: 0,
      };

      stats.answered++;
      if (row.correct) stats.correct++;
      byTopic.set(topic.id, stats);
    }

    const topics = Array.from(byTopic.values())
      .map((topic) => ({
        ...topic,
        accuracy: Math.round((topic.correct / topic.answered) * 100),
        isWeak: topic.correct / topic.answered < 0.6,
      }))
      .sort((a, b) => a.accuracy - b.accuracy || b.answered - a.answered);

    return {
      totalAnswered: progress.length,
      minimumAnswered: 20,
      isReady: progress.length >= 20,
      topics,
      focusRecommendations: topics.filter((topic) => topic.isWeak).slice(0, 3),
    };
  }
}
