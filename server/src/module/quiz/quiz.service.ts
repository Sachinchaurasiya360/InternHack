import { prisma } from "../../database/db.js";

export class QuizService {
  async getQuizForSkill(skillId: number) {
    const quiz = await prisma.quiz.findUnique({
      where: { skillId },
      include: {
        questions: {
          orderBy: { orderIndex: "asc" },
        },
      },
    });

    if (!quiz) return null;

    // Strip correctIndex from questions before returning to students
    const sanitizedQuestions = quiz.questions.map(
      ({ correctIndex, ...rest }) => rest
    );

    return { ...quiz, questions: sanitizedQuestions };
  }

  async submitAttempt(
    studentId: number,
    quizId: number,
    answers: { questionId: number; selectedIndex: number }[]
  ) {
    // 1. Find quiz with questions
    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        questions: true,
        skill: {
          include: {
            phase: { select: { careerId: true } },
          },
        },
      },
    });
    if (!quiz) throw new Error("Quiz not found");

    // 2. Verify student is enrolled in the career that owns this skill
    const careerId = quiz.skill.phase.careerId;
    const enrollment = await prisma.studentCareer.findUnique({
      where: { studentId_careerId: { studentId, careerId } },
    });
    if (!enrollment) throw new Error("Not enrolled in this career path");

    // 3. Grade answers
    const questionMap = new Map(quiz.questions.map((q) => [q.id, q]));
    let correctCount = 0;
    const totalQuestions = quiz.questions.length;

    const gradedAnswers = answers.map((ans) => {
      const question = questionMap.get(ans.questionId);
      if (!question) {
        return {
          questionId: ans.questionId,
          selectedIndex: ans.selectedIndex,
          correct: false,
          explanation: null,
        };
      }
      const correct = ans.selectedIndex === question.correctIndex;
      if (correct) correctCount++;
      return {
        questionId: ans.questionId,
        selectedIndex: ans.selectedIndex,
        correct,
        explanation: question.explanation ?? null,
      };
    });

    // 4. Calculate score
    const score = totalQuestions > 0
      ? Math.round((correctCount / totalQuestions) * 100)
      : 0;

    // 5. Determine pass/fail
    const passed = score >= quiz.passThreshold;

    // 6. Create quizAttempt record
    const attempt = await prisma.quizAttempt.create({
      data: {
        quizId,
        studentId,
        score,
        passed,
        answers: gradedAnswers,
      },
    });

    // 7. If passed, upsert studentSkillProgress with verified timestamp
    if (passed) {
      await prisma.studentSkillProgress.upsert({
        where: { studentId_skillId: { studentId, skillId: quiz.skillId } },
        create: {
          studentId,
          skillId: quiz.skillId,
          completed: true,
          verifiedAt: new Date(),
        },
        update: {
          completed: true,
          verifiedAt: new Date(),
        },
      });
    }

    return {
      attempt,
      score,
      passed,
      correctCount,
      totalQuestions,
      gradedAnswers,
    };
  }

  async getMyAttempts(studentId: number) {
    return prisma.quizAttempt.findMany({
      where: { studentId },
      include: {
        quiz: {
          select: {
            title: true,
            skill: { select: { name: true } },
          },
        },
      },
      orderBy: { completedAt: "desc" },
    });
  }

  async createQuiz(data: {
    skillId: number;
    title: string;
    description?: string;
    passThreshold?: number;
    timeLimitSecs?: number;
  }) {
    // Verify skill exists
    const skill = await prisma.careerSkill.findUnique({
      where: { id: data.skillId },
    });
    if (!skill) throw new Error("Skill not found");

    // Verify skill doesn't already have a quiz
    const existing = await prisma.quiz.findUnique({
      where: { skillId: data.skillId },
    });
    if (existing) throw new Error("This skill already has a quiz");

    return prisma.quiz.create({
      data: {
        skillId: data.skillId,
        title: data.title,
        description: data.description,
        passThreshold: data.passThreshold ?? 70,
        timeLimitSecs: data.timeLimitSecs,
      },
    });
  }

  async addQuestions(
    quizId: number,
    questions: {
      question: string;
      options: string[];
      correctIndex: number;
      explanation?: string;
    }[]
  ) {
    // Verify quiz exists
    const quiz = await prisma.quiz.findUnique({ where: { id: quizId } });
    if (!quiz) throw new Error("Quiz not found");

    // Get current max orderIndex
    const lastQuestion = await prisma.quizQuestion.findFirst({
      where: { quizId },
      orderBy: { orderIndex: "desc" },
    });
    const startIndex = lastQuestion ? lastQuestion.orderIndex + 1 : 0;

    const created = await prisma.quizQuestion.createMany({
      data: questions.map((q, i) => ({
        quizId,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        orderIndex: startIndex + i,
      })),
    });

    return created;
  }

  async updateQuestion(
    questionId: number,
    data: {
      question?: string;
      options?: string[];
      correctIndex?: number;
      explanation?: string;
    }
  ) {
    const existing = await prisma.quizQuestion.findUnique({
      where: { id: questionId },
    });
    if (!existing) throw new Error("Question not found");

    return prisma.quizQuestion.update({
      where: { id: questionId },
      data,
    });
  }

  async deleteQuestion(questionId: number) {
    const existing = await prisma.quizQuestion.findUnique({
      where: { id: questionId },
    });
    if (!existing) throw new Error("Question not found");

    await prisma.quizQuestion.delete({ where: { id: questionId } });
    return { message: "Question deleted" };
  }
}
