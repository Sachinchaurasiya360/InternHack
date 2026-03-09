import { prisma } from "../../database/db.js";

export class SkillTestService {
  async listTests(skill?: string, difficulty?: string) {
    const where: Record<string, unknown> = { isActive: true };
    if (skill) where.skillName = skill.toLowerCase().trim();
    if (difficulty) where.difficulty = difficulty;

    return prisma.skillTest.findMany({
      where,
      include: {
        _count: { select: { questions: true, attempts: true } },
      },
      orderBy: { skillName: "asc" },
    });
  }

  async getTestDetail(testId: number, studentId: number) {
    const test = await prisma.skillTest.findUnique({
      where: { id: testId },
      include: {
        questions: { orderBy: { orderIndex: "asc" } },
      },
    });

    if (!test || !test.isActive) return null;

    // Strip correctIndex from questions
    const sanitizedQuestions = test.questions.map(
      ({ correctIndex, ...rest }) => rest
    );

    // Check if student already has this skill verified
    const existingVerification = await prisma.verifiedSkill.findUnique({
      where: {
        studentId_skillName: { studentId, skillName: test.skillName },
      },
    });

    // Get best previous attempt
    const bestAttempt = await prisma.skillTestAttempt.findFirst({
      where: { testId, studentId },
      orderBy: { score: "desc" },
    });

    return {
      ...test,
      questions: sanitizedQuestions,
      existingVerification,
      bestAttempt,
    };
  }

  async startTest(testId: number) {
    const test = await prisma.skillTest.findUnique({
      where: { id: testId },
      include: {
        questions: { orderBy: { orderIndex: "asc" } },
      },
    });

    if (!test || !test.isActive) throw new Error("Test not found");

    const sanitizedQuestions = test.questions.map(
      ({ correctIndex, ...rest }) => rest
    );

    return {
      id: test.id,
      skillName: test.skillName,
      title: test.title,
      timeLimitSecs: test.timeLimitSecs,
      passThreshold: test.passThreshold,
      questions: sanitizedQuestions,
    };
  }

  async submitTest(
    testId: number,
    studentId: number,
    answers: { questionId: number; selectedIndex: number }[],
    proctorLog?: Record<string, unknown>
  ) {
    const test = await prisma.skillTest.findUnique({
      where: { id: testId },
      include: { questions: true },
    });
    if (!test) throw new Error("Test not found");

    // Grade answers
    const questionMap = new Map(test.questions.map((q) => [q.id, q]));
    let correctCount = 0;
    const totalQuestions = test.questions.length;

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

    const score =
      totalQuestions > 0
        ? Math.round((correctCount / totalQuestions) * 100)
        : 0;
    const passed = score >= test.passThreshold;

    // Calculate proctoring integrity score
    const proctoringScore = this.calculateProctoringScore(proctorLog);
    const autoTerminated = !!(proctorLog && (proctorLog as any).terminated);

    // Create attempt
    const attempt = await prisma.skillTestAttempt.create({
      data: {
        testId,
        studentId,
        score,
        passed,
        answers: gradedAnswers,
        proctorLog: proctorLog ?? null,
        proctoringScore,
        autoTerminated,
        completedAt: new Date(),
      },
    });

    // If passed, upsert verifiedSkill
    if (passed) {
      await prisma.verifiedSkill.upsert({
        where: {
          studentId_skillName: {
            studentId,
            skillName: test.skillName,
          },
        },
        create: {
          studentId,
          skillName: test.skillName,
          score,
          attemptId: attempt.id,
          verifiedAt: new Date(),
        },
        update: {
          score,
          attemptId: attempt.id,
          verifiedAt: new Date(),
        },
      });
    }

    return {
      attempt: { id: attempt.id, score, passed },
      score,
      passed,
      correctCount,
      totalQuestions,
      gradedAnswers,
    };
  }

  async getMyAttempts(studentId: number) {
    return prisma.skillTestAttempt.findMany({
      where: { studentId },
      include: {
        test: { select: { title: true, skillName: true } },
      },
      orderBy: { startedAt: "desc" },
    });
  }

  async getMyVerified(studentId: number) {
    return prisma.verifiedSkill.findMany({
      where: { studentId },
      orderBy: { verifiedAt: "desc" },
    });
  }

  async getStudentVerified(studentId: number) {
    return prisma.verifiedSkill.findMany({
      where: { studentId },
      orderBy: { verifiedAt: "desc" },
    });
  }

  async createTest(data: {
    skillName: string;
    title: string;
    description?: string;
    difficulty?: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
    timeLimitSecs?: number;
    passThreshold?: number;
  }, createdById?: number) {
    const skillName = data.skillName.toLowerCase().trim();

    return prisma.skillTest.create({
      data: {
        skillName,
        title: data.title,
        description: data.description,
        difficulty: data.difficulty ?? "INTERMEDIATE",
        timeLimitSecs: data.timeLimitSecs ?? 1800,
        passThreshold: data.passThreshold ?? 70,
        createdById: createdById ?? null,
      },
    });
  }

  private calculateProctoringScore(proctorLog?: Record<string, unknown>): number {
    if (!proctorLog) return 100;
    const log = proctorLog as any;
    let s = 100;
    s -= (log.tabSwitches ?? 0) * 15;
    s -= (log.focusLosses ?? 0) * 5;
    s -= (log.fullscreenExits ?? 0) * 20;
    s -= (log.devtoolsAttempts ?? 0) * 25;
    s -= (log.copyPasteAttempts ?? 0) * 10;
    s -= (log.rightClickAttempts ?? 0) * 3;
    s -= (Array.isArray(log.faceViolations) ? log.faceViolations.length : 0) * 10;
    if (log.terminated) s -= 30;
    if (log.cameraEnabled === false) s -= 20;
    return Math.max(0, s);
  }

  async addQuestions(
    testId: number,
    questions: {
      question: string;
      options: string[];
      correctIndex: number;
      explanation?: string;
    }[]
  ) {
    const test = await prisma.skillTest.findUnique({ where: { id: testId } });
    if (!test) throw new Error("Test not found");

    const lastQuestion = await prisma.skillTestQuestion.findFirst({
      where: { testId },
      orderBy: { orderIndex: "desc" },
    });
    const startIndex = lastQuestion ? lastQuestion.orderIndex + 1 : 0;

    return prisma.skillTestQuestion.createMany({
      data: questions.map((q, i) => ({
        testId,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        orderIndex: startIndex + i,
      })),
    });
  }
}
