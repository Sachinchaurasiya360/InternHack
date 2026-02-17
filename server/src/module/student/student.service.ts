import { prisma } from "../../database/db.js";

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

    const existing = await prisma.application.findUnique({
      where: { jobId_studentId: { jobId, studentId } },
    });
    if (existing) throw new Error("Already applied to this job");

    const firstRound = job.rounds[0];

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
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
    });

    if (!application) throw new Error("Application not found");
    if (application.studentId !== studentId) throw new Error("Not authorized");

    const round = await prisma.round.findUnique({ where: { id: roundId } });
    if (!round || round.jobId !== application.jobId) throw new Error("Round not found");

    const submission = await prisma.roundSubmission.findUnique({
      where: { applicationId_roundId: { applicationId, roundId } },
    });

    return { round, submission };
  }

  async submitRound(applicationId: number, roundId: number, studentId: number, data: SubmitRoundData) {
    const application = await prisma.application.findUnique({ where: { id: applicationId } });
    if (!application) throw new Error("Application not found");
    if (application.studentId !== studentId) throw new Error("Not authorized");

    const round = await prisma.round.findUnique({ where: { id: roundId } });
    if (!round || round.jobId !== application.jobId) throw new Error("Round not found");

    return prisma.roundSubmission.upsert({
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
  }
}
