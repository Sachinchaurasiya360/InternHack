import { prisma } from "../../database/db.js";
import { Prisma } from "@prisma/client";
import { BadgeService } from "../badge/badge.service.js";
import { sendEmail } from "../../utils/email.utils.js";
import { milestoneEmailHtml } from "../../utils/email-templates.js";

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

      // Check application badges (fire-and-forget)
      badgeService.checkAndAwardBadges(studentId, "first_application").catch(() => {});
      badgeService.checkAndAwardBadges(studentId, "job_apply").catch(() => {});
      // Check 10-application milestone (fire-and-forget)
      this.checkApplicationMilestone(studentId).catch(() => {});

      return application;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
        throw new Error("You have already applied to this job");
      }
      throw err;
    }
  }

  async getApplicationStatusByJob(jobId: number, studentId: number) {
    const application = await prisma.application.findFirst({
      where: { jobId, studentId },
      select: { id: true, status: true },
    });
    return application;
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
      const application = await prisma.externalJobApplication.create({
        data: { studentId, adminJobId },
        include: {
          adminJob: {
            select: { id: true, slug: true, company: true, role: true },
          },
        },
      });
      // Check application badges (fire-and-forget)
      badgeService.checkAndAwardBadges(studentId, "first_application").catch(() => {});
      badgeService.checkAndAwardBadges(studentId, "job_apply").catch(() => {});
      // Check 10-application milestone (fire-and-forget)
      this.checkApplicationMilestone(studentId).catch(() => {});
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

  private async checkApplicationMilestone(studentId: number) {
    const [regular, external] = await Promise.all([
      prisma.application.count({ where: { studentId } }),
      prisma.externalJobApplication.count({ where: { studentId } }),
    ]);
    const total = regular + external;
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
        sendEmail({ to: user.email, subject: "You hit 10 applications! Keep it up", html }).catch(() => {});
      }
    }
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

  async getCalendarEventData(applicationId: number, studentId: number, type: "deadline" | "round", roundId?: number) {
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: {
        job: true,
      },
    });

    if (!application) throw new Error("Application not found");
    if (application.studentId !== studentId) throw new Error("Not authorized");

    const description = [
      `Applied via InternHack: https://internhack.xyz/student/applications/${application.id}`,
      `Company: ${application.job.company}`,
      `Role: ${application.job.title}`,
      `Location: ${application.job.location || "Remote"}`,
    ];

    if (type === "deadline") {
      if (!application.job.deadline) {
         throw new Error("Event not found");
      }
      
      const start = new Date(application.job.deadline);
      const end = new Date(start.getTime() + 30 * 60 * 1000); // 30 mins for deadline
      
      return {
        uid: `application-${application.id}-deadline`,
        title: `${application.job.title} @ ${application.job.company} — Application Deadline`,
        description: description.join("\n"),
        start,
        end,
      };
    } else if (type === "round") {
      if (!roundId) throw new Error("Missing roundId");

      const round = await prisma.round.findUnique({
        where: { id: roundId },
      });

      if (!round || round.jobId !== application.jobId) throw new Error("Round not found");
      if (!round.activateAt) throw new Error("Round has no schedule");
      
      const start = new Date(round.activateAt);
      const end = new Date(start.getTime() + 60 * 60 * 1000); // 1 hour for interviews/rounds
      
      return {
        uid: `application-${application.id}-round-${round.id}`,
        title: `${application.job.title} @ ${application.job.company} — ${round.name}`,
        description: [
          ...description,
          `Round: ${round.name}`,
        ].join("\n"),
        start,
        end,
      };
    }
    
    throw new Error("Invalid type");
  }

}
