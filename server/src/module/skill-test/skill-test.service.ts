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

    // Merge the server-side incremental proctor log (appended during the test via
    // /proctor-logs) into the client-submitted summary. The incremental events are
    // the tamper-resistant record; the client payload can be under-reported, so we
    // must not let submit clobber them.
    const existingEvents = (session.proctorLog as Record<string, unknown> | null)?.[
      "incrementalEvents"
    ];
    const serverEvents = Array.isArray(existingEvents) ? existingEvents : [];
    const mergedProctorLog: Record<string, unknown> | undefined =
      proctorLog || serverEvents.length > 0
        ? { ...(proctorLog ?? {}), incrementalEvents: serverEvents }
        : undefined;

    // Calculate proctoring integrity score from the merged (server-authoritative) log
    const proctoringScore = this.calculateProctoringScore(mergedProctorLog);
    const autoTerminated = !!(mergedProctorLog && (mergedProctorLog as any).terminated);

    const PROCTOR_MINIMUM = 60;
    const passed = score >= test.passThreshold && proctoringScore >= PROCTOR_MINIMUM;

    // Update the existing session with graded results
    const attempt = await prisma.skillTestAttempt.update({
      where: { id: session.id },
      data: {
        score,
        passed,
        answers: gradedAnswers,
        proctorLog: (mergedProctorLog as Prisma.InputJsonValue | null) ?? Prisma.DbNull,
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

  /* ---- Incremental proctor-log flush (issue #2400) ---- */
  async logProctorEvents(
    testId: number,
    studentId: number,
    events: { type: string; timestamp: string; detail?: string }[],
  ) {
    const test = await prisma.skillTest.findUnique({
      where: { id: testId },
      select: { timeLimitSecs: true },
    });
    if (!test) throw new Error("Test not found");

    await prisma.$transaction(async (tx) => {
      // Use raw query to grab a row lock (FOR UPDATE) to prevent concurrent flushes from race conditions.
      // We no longer select proctorLog here to avoid read amplification.
      const sessions = await tx.$queryRaw<
        { id: number; startedAt: Date }[]
      >`
        SELECT id, "startedAt"
        FROM "skillTestAttempt"
        WHERE "testId" = ${testId}
          AND "studentId" = ${studentId}
          AND "completedAt" IS NULL
        ORDER BY "startedAt" DESC
        LIMIT 1
        FOR UPDATE
      `;

      if (!sessions || sessions.length === 0) {
        throw new Error("NO_OPEN_SESSION");
      }

      const session = sessions[0]!;

      const expiresAt = new Date(
        session.startedAt.getTime() + test.timeLimitSecs * 1000,
      );
      if (new Date() > expiresAt) {
        throw new Error("TEST_EXPIRED");
      }

      // Atomic JSONB array append using raw SQL to eliminate write amplification
      await tx.$executeRaw`
        UPDATE "skillTestAttempt"
        SET "proctorLog" = jsonb_set(
          COALESCE("proctorLog", '{}'::jsonb),
          '{incrementalEvents}',
          COALESCE("proctorLog"->'incrementalEvents', '[]'::jsonb) || CAST(${JSON.stringify(events)} AS jsonb)
        )
        WHERE id = ${session.id}
      `;
    });

    return { accepted: events.length };
  }

  private calculateProctoringScore(
    proctorLog?: Record<string, unknown>,
  ): number {
    if (!proctorLog) return 100;
    const log = proctorLog as any;

    // Prefer the server-side, tamper-resistant incremental event log when present;
    // fall back to the client-reported aggregate counts for older/partial sessions
    // (e.g. a client that never flushed any incremental events).
    const events: { type?: string }[] = Array.isArray(log.incrementalEvents)
      ? log.incrementalEvents
      : [];

    let tabSwitches: number;
    let focusLosses: number;
    let fullscreenExits: number;
    let devtoolsAttempts: number;
    let copyPasteAttempts: number;
    let rightClickAttempts: number;
    let faceViolations: number;
    let cameraDropped = log.cameraEnabled === false;

    if (events.length > 0) {
      tabSwitches = focusLosses = fullscreenExits = 0;
      devtoolsAttempts = copyPasteAttempts = rightClickAttempts = faceViolations = 0;
      for (const e of events) {
        switch (e.type) {
          case "tab_switch": tabSwitches++; break;
          case "focus_loss": focusLosses++; break;
          case "fullscreen_exit": fullscreenExits++; break;
          case "devtools": devtoolsAttempts++; break;
          case "copy_paste": copyPasteAttempts++; break;
          case "right_click": rightClickAttempts++; break;
          case "face_violation": faceViolations++; break;
          case "camera_track_ended":
          case "camera_track_muted": cameraDropped = true; break;
        }
      }
    } else {
      tabSwitches = log.tabSwitches ?? 0;
      focusLosses = log.focusLosses ?? 0;
      fullscreenExits = log.fullscreenExits ?? 0;
      devtoolsAttempts = log.devtoolsAttempts ?? 0;
      copyPasteAttempts = log.copyPasteAttempts ?? 0;
      rightClickAttempts = log.rightClickAttempts ?? 0;
      faceViolations = Array.isArray(log.faceViolations)
        ? log.faceViolations.length
        : 0;
    }

    let s = 100;
    s -= tabSwitches * 15;
    s -= focusLosses * 5;
    s -= fullscreenExits * 20;
    s -= devtoolsAttempts * 25;
    s -= copyPasteAttempts * 10;
    s -= rightClickAttempts * 3;
    s -= faceViolations * 10;
    if (log.terminated) s -= 30;
    // Camera dropped mid-test (hardware unplug / permission revoke) or never enabled.
    if (cameraDropped) s -= 20;
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

