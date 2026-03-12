import { prisma } from "../../database/db.js";
import { Prisma } from "@prisma/client";
import { BadgeService } from "../badge/badge.service.js";

const badgeService = new BadgeService();

interface ApplyData {
  customFieldAnswers: Record<string, unknown>;
  resumeUrl?: string | undefined;
  coverLetter?: string | undefined;
}

interface SubmitRoundData {
  fieldAnswers: Record<string, unknown>;
  attachments: string[];
}

export class StudentService {
  async applyToJob(jobId: number, studentId: number, data: ApplyData) {
    const job = await prisma.job.findUnique({
      where: { id: jobId },
      include: { rounds: { orderBy: { orderIndex: "asc" }, take: 1 } },
    });

    if (!job) throw new Error("Job not found");
    if (job.status !== "PUBLISHED") throw new Error("Job is not accepting applications");
    if (job.deadline && new Date(job.deadline) < new Date()) throw new Error("Application deadline has passed");

    const firstRound = job.rounds[0];

    try {
      const application = await prisma.application.create({
        data: {
          jobId,
          studentId,
          customFieldAnswers: JSON.parse(JSON.stringify(data.customFieldAnswers)),
          resumeUrl: data.resumeUrl ?? null,
          coverLetter: data.coverLetter ?? null,
          currentRoundId: firstRound?.id ?? null,
          status: "APPLIED",
        },
        include: {
          job: { select: { id: true, title: true, company: true } },
        },
      });

      // Create first round submission if rounds exist
      if (firstRound) {
        await prisma.roundSubmission.create({
          data: {
            applicationId: application.id,
            roundId: firstRound.id,
            status: "IN_PROGRESS",
          },
        });
      }

      // Check for first_application badge (fire-and-forget)
      badgeService.checkAndAwardBadges(studentId, "first_application").catch(() => {});

      return application;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
        throw new Error("You have already applied to this job");
      }
      throw err;
    }
  }

  async getMyApplications(studentId: number) {
    return prisma.application.findMany({
      where: { studentId },
      orderBy: { createdAt: "desc" },
      include: {
        job: {
          select: {
            id: true,
            title: true,
            company: true,
            location: true,
            status: true,
          },
        },
        roundSubmissions: {
          include: { round: { select: { id: true, name: true, orderIndex: true } } },
          orderBy: { round: { orderIndex: "asc" } },
        },
        _count: { select: { roundSubmissions: true } },
      },
    });
  }

  async getApplicationDetail(applicationId: number, studentId: number) {
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: {
        job: {
          include: {
            rounds: { orderBy: { orderIndex: "asc" } },
          },
        },
        roundSubmissions: {
          include: { round: true },
          orderBy: { round: { orderIndex: "asc" } },
        },
      },
    });

    if (!application) throw new Error("Application not found");
    if (application.studentId !== studentId) throw new Error("Not authorized");

    return application;
  }

  async withdrawApplication(applicationId: number, studentId: number) {
    const application = await prisma.application.findUnique({ where: { id: applicationId } });
    if (!application) throw new Error("Application not found");
    if (application.studentId !== studentId) throw new Error("Not authorized");
    if (application.status === "WITHDRAWN") throw new Error("Already withdrawn");

    return prisma.application.update({
      where: { id: applicationId },
      data: { status: "WITHDRAWN" },
    });
  }

  async getRoundInfo(applicationId: number, roundId: number, studentId: number) {
    // Fetch application first to auth-check, then round+submission in parallel.
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
    });

    if (!application) throw new Error("Application not found");
    if (application.studentId !== studentId) throw new Error("Not authorized");

    const [round, submission] = await Promise.all([
      prisma.round.findUnique({ where: { id: roundId } }),
      prisma.roundSubmission.findUnique({
        where: { applicationId_roundId: { applicationId, roundId } },
      }),
    ]);

    if (!round || round.jobId !== application.jobId) throw new Error("Round not found");

    return { round, submission };
  }

  async submitRound(applicationId: number, roundId: number, studentId: number, data: SubmitRoundData) {
    // Auth-check the application first, then fetch round in parallel with nothing
    // (cannot parallelize with application since we need studentId check first).
    // But we can parallelize application + round and validate after.
    const [application, round] = await Promise.all([
      prisma.application.findUnique({ where: { id: applicationId } }),
      prisma.round.findUnique({ where: { id: roundId } }),
    ]);
    if (!application) throw new Error("Application not found");
    if (application.studentId !== studentId) throw new Error("Not authorized");
    if (!round || round.jobId !== application.jobId) throw new Error("Round not found");

    const submission = await prisma.roundSubmission.upsert({
      where: { applicationId_roundId: { applicationId, roundId } },
      update: {
        fieldAnswers: JSON.parse(JSON.stringify(data.fieldAnswers)),
        attachments: data.attachments,
        submittedAt: new Date(),
        status: "COMPLETED",
      },
      create: {
        applicationId,
        roundId,
        fieldAnswers: JSON.parse(JSON.stringify(data.fieldAnswers)),
        attachments: data.attachments,
        submittedAt: new Date(),
        status: "COMPLETED",
      },
    });

    // Auto-grade assessment if the round has autoGrade enabled
    if (round.autoGrade) {
      const questions = round.assessmentQuestions as Array<{ correctIndex: number }>;
      if (Array.isArray(questions) && questions.length > 0) {
        const answers = (data.fieldAnswers as Record<string, unknown>).assessmentAnswers as Record<string, number> | undefined;
        let correct = 0;
        const total = questions.length;

        if (answers && typeof answers === "object") {
          for (let i = 0; i < total; i++) {
            const studentAnswer = answers[String(i)];
            if (typeof studentAnswer === "number" && studentAnswer === questions[i]!.correctIndex) {
              correct++;
            }
          }
        }

        const maxScore = total;
        const score = correct;
        const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

        await prisma.roundSubmission.update({
          where: { id: submission.id },
          data: {
            evaluationScores: { auto: { score, maxScore, correct, total, percentage } },
            status: "COMPLETED",
          },
        });

        return prisma.roundSubmission.findUnique({ where: { id: submission.id } });
      }
    }

    return submission;
  }

  // ── Campus Drive Methods ──

  async getEligibleDrives(studentId: number, page: number, limit: number) {
    const student = await prisma.user.findUnique({
      where: { id: studentId },
      select: { college: true, graduationYear: true },
    });

    if (!student) throw new Error("Student not found");

    const where: Prisma.campusDriveWhereInput = {
      status: "OPEN",
      AND: [
        {
          OR: [
            { targetColleges: { isEmpty: true } },
            ...(student.college
              ? [{ targetColleges: { has: student.college } }]
              : []),
          ],
        },
        {
          OR: [
            { eligibleGraduationYears: { isEmpty: true } },
            ...(student.graduationYear
              ? [{ eligibleGraduationYears: { has: student.graduationYear } }]
              : []),
          ],
        },
      ],
    };

    const [drives, total] = await Promise.all([
      prisma.campusDrive.findMany({
        where,
        orderBy: { registrationDeadline: "asc" },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          recruiter: { select: { id: true, name: true, company: true, profilePic: true } },
          _count: { select: { registrations: true } },
        },
      }),
      prisma.campusDrive.count({ where }),
    ]);

    return { drives, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async getCampusDriveDetail(driveId: number) {
    const drive = await prisma.campusDrive.findUnique({
      where: { id: driveId },
      include: {
        recruiter: { select: { id: true, name: true, company: true, profilePic: true } },
        _count: { select: { registrations: true } },
      },
    });

    if (!drive) throw new Error("Drive not found");
    return drive;
  }

  async registerForDrive(driveId: number, studentId: number) {
    const drive = await prisma.campusDrive.findUnique({ where: { id: driveId } });
    if (!drive) throw new Error("Drive not found");
    if (drive.status !== "OPEN") throw new Error("Drive is not open for registration");
    if (new Date(drive.registrationDeadline) < new Date()) throw new Error("Registration deadline has passed");

    // Check eligibility
    const student = await prisma.user.findUnique({
      where: { id: studentId },
      select: { college: true, graduationYear: true },
    });
    if (!student) throw new Error("Student not found");

    if (drive.targetColleges.length > 0) {
      const collegeLower = (student.college || "").toLowerCase();
      const match = drive.targetColleges.some((c) => c.toLowerCase() === collegeLower);
      if (!match) throw new Error("Your college is not eligible for this drive");
    }

    if (drive.eligibleGraduationYears.length > 0) {
      if (!student.graduationYear || !drive.eligibleGraduationYears.includes(student.graduationYear)) {
        throw new Error("Your graduation year is not eligible for this drive");
      }
    }

    // Check duplicate
    const existing = await prisma.campusDriveRegistration.findUnique({
      where: { driveId_studentId: { driveId, studentId } },
    });
    if (existing) throw new Error("Already registered for this drive");

    return prisma.campusDriveRegistration.create({
      data: { driveId, studentId },
      include: {
        drive: { select: { id: true, title: true, company: true } },
      },
    });
  }

  async getMyRegistrations(studentId: number) {
    return prisma.campusDriveRegistration.findMany({
      where: { studentId },
      orderBy: { registeredAt: "desc" },
      include: {
        drive: {
          include: {
            recruiter: { select: { id: true, name: true, company: true, profilePic: true } },
            _count: { select: { registrations: true } },
          },
        },
      },
    });
  }
}
