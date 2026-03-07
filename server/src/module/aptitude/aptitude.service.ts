import { prisma } from "../../database/db.js";

export class AptitudeService {
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

    const offset = (page - 1) * limit;
    const questions = await prisma.aptitudeQuestion.findMany({
      where: { topicId: topic.id },
      skip: offset,
      take: limit,
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
      id: topic.id,
      name: topic.name,
      slug: topic.slug,
      description: topic.description,
      categoryName: topic.category.name,
      categorySlug: topic.category.slug,
      totalQuestions: topic._count.questions,
      page,
      totalPages: Math.ceil(topic._count.questions / limit),
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
          // Only reveal answer if already answered
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
    });

    if (!question) throw new Error("Question not found");

    const isCorrect = question.correctAnswer === answer;

    await prisma.studentAptitudeProgress.upsert({
      where: { studentId_questionId: { studentId, questionId } },
      create: { studentId, questionId, answered: true, correct: isCorrect },
      update: { answered: true, correct: isCorrect },
    });

    return {
      correct: isCorrect,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
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

  async getProgress(studentId: number) {
    const total = await prisma.aptitudeQuestion.count();
    const progress = await prisma.studentAptitudeProgress.findMany({
      where: { studentId },
      select: { correct: true },
    });

    return {
      totalQuestions: total,
      totalAnswered: progress.length,
      totalCorrect: progress.filter((p) => p.correct).length,
    };
  }
}
