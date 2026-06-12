import { prisma } from "../../database/db.js";
import { Prisma } from "@prisma/client";
import {
  generateVerifiedSkillToken,
  verifyVerifiedSkillToken,
} from "../../utils/jwt.utils.js";
import { cacheGet, cacheSet, cacheDel, cacheDelPattern } from "../../utils/cache.js";

const TESTS_LIST_TTL = 600;    // 10 min â€” shared across all students
const VERIFIED_TTL = 3600;   // 1 hour â€” verified skills rarely change
const ATTEMPTS_TTL = 300;    // 5 min  â€” attempts change after each test

const verifiedKey = (id: number) => `skill:verified:${id}`;
const attemptsKey = (id: number) => `skill:attempts:${id}`;

const QUESTIONS_PER_SESSION = 20;

/** Fisher-Yates shuffle (in-place, returns same array) */
function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i]!, arr[j]!] = [arr[j]!, arr[i]!];
  }
  return arr;
}

export class SkillTestService {
  async listTests(skill?: string, difficulty?: string) {
    const cacheKey = `skill:tests:list:${skill ?? ""}:${difficulty ?? ""}`;
    const cached = await cacheGet(cacheKey);
    if (cached) return cached as never;

    const where: Record<string, unknown> = { isActive: true };
    if (skill) where.skillName = skill.toLowerCase().trim();
    if (difficulty) where.difficulty = difficulty;

    const result = await prisma.skillTest.findMany({
      where,
      include: {
        _count: { select: { questions: true, attempts: true } },
      },
      orderBy: { skillName: "asc" },
    });
    await cacheSet(cacheKey, result, TESTS_LIST_TTL);
    return result;
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
      ({ correctIndex, ...rest }) => rest,
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
      totalPool: test.questions.length,
      questionsPerSession: Math.min(
        QUESTIONS_PER_SESSION,
        test.questions.length,
      ),
      existingVerification,
      bestAttempt,
    };
  }

  async startTest(testId: number, studentId: number) {
    const test = await prisma.skillTest.findUnique({
      where: { id: testId },
      include: { questions: true },
    });

    if (!test || !test.isActive) throw new Error("Test not found");

    // Failed attempts must wait 7 days before retaking
    const lastAttempt = await prisma.skillTestAttempt.findFirst({
      where: { testId, studentId, completedAt: { not: null } },
      orderBy: { completedAt: "desc" },
    });

    if (lastAttempt && !lastAttempt.passed && lastAttempt.completedAt) {
      const retryAfter = new Date(
        lastAttempt.completedAt.getTime() + 7 * 24 * 60 * 60 * 1000,
      );
      if (new Date() < retryAfter) {
        throw Object.assign(
          new Error("Retake locked. Please try again later."),
          { status: 429, retryAfter },
        );
      }
    }

    // Shuffle and pick a random subset
    const now = new Date();

    // Check for an existing incomplete session to prevent timer reset on refresh
    const existingSession = await prisma.skillTestAttempt.findFirst({
      where: { testId, studentId, completedAt: null },
      orderBy: { startedAt: "desc" },
    });

    if (existingSession) {
      // Calculate remaining time from server-stored startedAt instead of resetting
      const expiresAt = new Date(
        existingSession.startedAt.getTime() + test.timeLimitSecs * 1000,
      );
      const remainingSecs = Math.max(
        0,
        Math.floor((expiresAt.getTime() - now.getTime()) / 1000),
      );

      if (remainingSecs === 0) {
        // Session expired - mark as auto-terminated
        await prisma.skillTestAttempt.update({
          where: { id: existingSession.id },
          data: { completedAt: now, autoTerminated: true },
        });
        throw new Error("TEST_EXPIRED");
      }

      // Restore the same questions from the stored session
      const storedIds: number[] = (existingSession.answers as any[]).map(
        (a: any) => a.questionId,
      );
      // Restore questions in original session order, not test.questions order
      const questionById = new Map(test.questions.map((q) => [q.id, q]));
      const questions = storedIds
        .map((id) => questionById.get(id))
        .filter((q): q is (typeof test.questions)[number] => Boolean(q))
        .map(({ correctIndex, ...rest }) => rest);

      return {
        sessionId: existingSession.id,
        id: test.id,
        skillName: test.skillName,
        title: test.title,
        timeLimitSecs: test.timeLimitSecs,
        remainingSecs,
        passThreshold: test.passThreshold,
        totalPool: test.questions.length,
        questionsCount: questions.length,
        questions,
        resumed: true,
      };
    }

    // New session â€” shuffle and pick subset
    const pool = shuffle([...test.questions]);
    const selected = pool.slice(
      0,
      Math.min(QUESTIONS_PER_SESSION, pool.length),
    );

    // Persist session immediately so startedAt is recorded server-side
    const session = await prisma.skillTestAttempt.create({
      data: {
        testId,
        studentId,
        score: 0,
        passed: false,
        answers: selected.map((q) => ({ questionId: q.id })),
        startedAt: now,
        completedAt: null,
      },
    });
    // New attempt created â€” bust the student's attempts cache
    await cacheDel(attemptsKey(studentId));

    const sanitizedQuestions = selected.map(
      ({ correctIndex, ...rest }) => rest,
    );

    return {
      sessionId: session.id,
      id: test.id,
      skillName: test.skillName,
      title: test.title,
      timeLimitSecs: test.timeLimitSecs,
      remainingSecs: test.timeLimitSecs,
      passThreshold: test.passThreshold,
      totalPool: test.questions.length,
      questionsCount: selected.length,
      questions: sanitizedQuestions,
      retryAfter: null, // null means no cooldown active
      resumed: false,
    };
  }

  async submitTest(
    testId: number,
    studentId: number,
    answers: { questionId: number; selectedIndex: number }[],
    proctorLog?: Record<string, unknown>,
  ) {
    const test = await prisma.skillTest.findUnique({
      where: { id: testId },
      include: { questions: true },
    });
    if (!test) throw new Error("Test not found");

    // Require an open session â€” prevents bypassing the timer by skipping /start
    const session = await prisma.skillTestAttempt.findFirst({
      where: { testId, studentId, completedAt: null },
      orderBy: { startedAt: "desc" },
    });

    if (!session) {
      throw new Error("NO_OPEN_SESSION");
    }

    const expiresAt = new Date(
      session.startedAt.getTime() + test.timeLimitSecs * 1000,
    );
    if (new Date() > expiresAt) {
      await prisma.skillTestAttempt.update({
        where: { id: session.id },
        data: { completedAt: new Date(), autoTerminated: true },
      });
      throw new Error("TEST_EXPIRED");
    }

    // Grade only questions from the stored session subset
    const servedIds = new Set(
      (session.answers as Array<{ questionId: number }>).map(
        (a) => a.questionId,
      ),
    );
    const questionMap = new Map(
      test.questions.filter((q) => servedIds.has(q.id)).map((q) => [q.id, q]),
    );
    let correctCount = 0;
    const totalQuestions = servedIds.size;

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

    // Calculate proctoring integrity score
    const proctoringScore = this.calculateProctoringScore(proctorLog);
    const autoTerminated = !!(proctorLog && (proctorLog as any).terminated);

    const PROCTOR_MINIMUM = 60;
    const passed = score >= test.passThreshold && proctoringScore >= PROCTOR_MINIMUM;

    // Update the existing session with graded results
    const attempt = await prisma.skillTestAttempt.update({
      where: { id: session.id },
      data: {
        score,
        passed,
        answers: gradedAnswers,
        proctorLog: (proctorLog as Prisma.InputJsonValue | null) ?? Prisma.DbNull,
        proctoringScore,
        autoTerminated,
        completedAt: new Date(),
      },
    });

    let verificationToken: string | null = null;
    if (passed) {
      const verified = await prisma.verifiedSkill.upsert({
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
      verificationToken = generateVerifiedSkillToken({
        vid: verified.id,
        studentId,
        skillName: verified.skillName,
      });
    }

    // Bust per-user caches â€” attempts always change, verified changes on pass
    await Promise.all([
      cacheDel(attemptsKey(studentId)),
      ...(passed ? [cacheDel(verifiedKey(studentId))] : []),
    ]);

    return {
      attempt: { id: attempt.id, score, passed },
      score,
      passed,
      correctCount,
      totalQuestions,
      gradedAnswers,
      token: verificationToken,
    };
  }

  async getMyAttempts(studentId: number) {
    const cached = await cacheGet(attemptsKey(studentId));
    if (cached) return cached as never;

    const result = await prisma.skillTestAttempt.findMany({
      where: { studentId },
      include: {
        test: { select: { title: true, skillName: true } },
      },
      orderBy: { startedAt: "desc" },
    });
    await cacheSet(attemptsKey(studentId), result, ATTEMPTS_TTL);
    return result;
  }

  async getMyVerified(studentId: number) {
    const cached = await cacheGet(verifiedKey(studentId));
    if (cached) return cached as never;

    const result = await prisma.verifiedSkill.findMany({
      where: { studentId },
      orderBy: { verifiedAt: "desc" },
    });
    const mapped = result.map((item) => ({
      ...item,
      token: generateVerifiedSkillToken({
        vid: item.id,
        studentId: item.studentId,
        skillName: item.skillName,
      }),
    }));
    await cacheSet(verifiedKey(studentId), mapped, VERIFIED_TTL);
    return mapped;
  }

  async getStudentVerified(studentId: number) {
    const cached = await cacheGet(verifiedKey(studentId));
    if (cached) return cached as never;

    const result = await prisma.verifiedSkill.findMany({
      where: { studentId },
      orderBy: { verifiedAt: "desc" },
    });
    const mapped = result.map((item) => ({
      ...item,
      token: generateVerifiedSkillToken({
        vid: item.id,
        studentId: item.studentId,
        skillName: item.skillName,
      }),
    }));
    await cacheSet(verifiedKey(studentId), mapped, VERIFIED_TTL);
    return mapped;
  }

  async verifyBadgeToken(token: string) {
    let payload;
    try {
      payload = verifyVerifiedSkillToken(token);
    } catch {
      throw new Error("INVALID_VERIFICATION_TOKEN");
    }

    const verified = await prisma.verifiedSkill.findUnique({
      where: { id: payload.vid },
      include: {
        student: { select: { id: true, name: true, profileSlug: true } },
      },
    });

    if (
      !verified ||
      verified.studentId !== payload.studentId ||
      verified.skillName !== payload.skillName
    ) {
      throw new Error("INVALID_VERIFICATION_TOKEN");
    }

    return {
      student: {
        id: verified.student.id,
        name: verified.student.name,
        profileSlug: verified.student.profileSlug,
      },
      skillName: verified.skillName,
      score: verified.score,
      verifiedAt: verified.verifiedAt,
      token,
      publicUrl: `/verify/${token}`,
    };
  }

  async createTest(
    data: {
      skillName: string;
      title: string;
      description?: string;
      difficulty?: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
      timeLimitSecs?: number;
      passThreshold?: number;
    },
    createdById?: number,
  ) {
    const skillName = data.skillName.toLowerCase().trim();

    const test = await prisma.skillTest.create({
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
    await cacheDelPattern("skill:tests:list:");
    return test;
  }

  private calculateProctoringScore(
    proctorLog?: Record<string, unknown>,
  ): number {
    if (!proctorLog) return 100;
    const log = proctorLog as any;
    let s = 100;
    s -= (log.tabSwitches ?? 0) * 15;
    s -= (log.focusLosses ?? 0) * 5;
    s -= (log.fullscreenExits ?? 0) * 20;
    s -= (log.devtoolsAttempts ?? 0) * 25;
    s -= (log.copyPasteAttempts ?? 0) * 10;
    s -= (log.rightClickAttempts ?? 0) * 3;
    s -=
      (Array.isArray(log.faceViolations) ? log.faceViolations.length : 0) * 10;
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
    }[],
  ) {
    const test = await prisma.skillTest.findUnique({ where: { id: testId } });
    if (!test) throw new Error("Test not found");

    const lastQuestion = await prisma.skillTestQuestion.findFirst({
      where: { testId },
      orderBy: { orderIndex: "desc" },
    });
    const startIndex = lastQuestion ? lastQuestion.orderIndex + 1 : 0;

    const result = await prisma.skillTestQuestion.createMany({
      data: questions.map((q, i) => ({
        testId,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        orderIndex: startIndex + i,
      })),
    });
    // Question count changed â€” bust all test list variants
    await cacheDelPattern("skill:tests:list:");
    return result;
  }
}

