import { prisma } from "../../database/db.js";
import type { Prisma, ApplicationStatus } from "@prisma/client";

interface CreateRoundData {
  name: string;
  description?: string | null | undefined;
  orderIndex: number;
  instructions?: string | null | undefined;
  customFields?: unknown[] | undefined;
  evaluationCriteria?: unknown[] | undefined;
}

interface ApplicationFilter {
  page: number;
  limit: number;
  status?: string | undefined;
  roundId?: number | undefined;
  search?: string | undefined;
}


type UpdateRoundData = {
  [K in keyof CreateRoundData]?: CreateRoundData[K] | undefined;
};
export class RecruiterService {
  // ==================== ROUND MANAGEMENT ====================

  async createRound(jobId: number, recruiterId: number, data: CreateRoundData) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error("Job not found");
    if (job.recruiterId !== recruiterId) throw new Error("Not authorized");

    return prisma.round.create({
      data: {
        jobId,
        name: data.name,
        description: data.description ?? null,
        orderIndex: data.orderIndex,
        instructions: data.instructions ?? null,
        customFields: data.customFields ? JSON.parse(JSON.stringify(data.customFields)) : [],
        evaluationCriteria: data.evaluationCriteria ? JSON.parse(JSON.stringify(data.evaluationCriteria)) : [],
      },
    });
  }

  async getRounds(jobId: number, recruiterId: number) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error("Job not found");
    if (job.recruiterId !== recruiterId) throw new Error("Not authorized");

    return prisma.round.findMany({
      where: { jobId },
      orderBy: { orderIndex: "asc" },
      include: {
        _count: { select: { roundSubmissions: true } },
      },
    });
  }

  async updateRound(jobId: number, roundId: number, recruiterId: number, data: UpdateRoundData) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error("Job not found");
    if (job.recruiterId !== recruiterId) throw new Error("Not authorized");

    const round = await prisma.round.findUnique({ where: { id: roundId } });
    if (!round || round.jobId !== jobId) throw new Error("Round not found");

    return prisma.round.update({
      where: { id: roundId },
      data: {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.instructions !== undefined && { instructions: data.instructions }),
        ...(data.customFields !== undefined && { customFields: JSON.parse(JSON.stringify(data.customFields)) }),
        ...(data.evaluationCriteria !== undefined && { evaluationCriteria: JSON.parse(JSON.stringify(data.evaluationCriteria)) }),
      },
    });
  }

  async deleteRound(jobId: number, roundId: number, recruiterId: number) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error("Job not found");
    if (job.recruiterId !== recruiterId) throw new Error("Not authorized");

    const round = await prisma.round.findUnique({ where: { id: roundId } });
    if (!round || round.jobId !== jobId) throw new Error("Round not found");

    await prisma.round.delete({ where: { id: roundId } });

    // Re-index remaining rounds
    const remainingRounds = await prisma.round.findMany({
      where: { jobId },
      orderBy: { orderIndex: "asc" },
    });

    for (let i = 0; i < remainingRounds.length; i++) {
      const r = remainingRounds[i]!;
      if (r.orderIndex !== i) {
        await prisma.round.update({
          where: { id: r.id },
          data: { orderIndex: i },
        });
      }
    }
  }

  async reorderRounds(jobId: number, recruiterId: number, rounds: { roundId: number; orderIndex: number }[]) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error("Job not found");
    if (job.recruiterId !== recruiterId) throw new Error("Not authorized");

    // Use a transaction with temporary high indices to avoid unique constraint conflicts
    await prisma.$transaction(async (tx) => {
      // First, set all to temporary high values
      for (const r of rounds) {
        await tx.round.update({
          where: { id: r.roundId },
          data: { orderIndex: r.orderIndex + 10000 },
        });
      }
      // Then set to final values
      for (const r of rounds) {
        await tx.round.update({
          where: { id: r.roundId },
          data: { orderIndex: r.orderIndex },
        });
      }
    });

    return prisma.round.findMany({
      where: { jobId },
      orderBy: { orderIndex: "asc" },
    });
  }

  // ==================== APPLICATION MANAGEMENT ====================

  async getApplications(jobId: number, recruiterId: number, filter: ApplicationFilter) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error("Job not found");
    if (job.recruiterId !== recruiterId) throw new Error("Not authorized");

    const where: Prisma.applicationWhereInput = { jobId };

    if (filter.status) {
      where.status = filter.status as ApplicationStatus;
    }

    if (filter.search) {
      where.student = {
        OR: [
          { name: { contains: filter.search, mode: "insensitive" } },
          { email: { contains: filter.search, mode: "insensitive" } },
        ],
      };
    }

    const skip = (filter.page - 1) * filter.limit;

    const [applications, total] = await Promise.all([
      prisma.application.findMany({
        where,
        skip,
        take: filter.limit,
        orderBy: { createdAt: "desc" },
        include: {
          student: { select: { id: true, name: true, email: true, profilePic: true, resumes: true } },
          roundSubmissions: {
            include: { round: { select: { id: true, name: true, orderIndex: true } } },
            orderBy: { round: { orderIndex: "asc" } },
          },
        },
      }),
      prisma.application.count({ where }),
    ]);

    return {
      applications,
      pagination: {
        page: filter.page,
        limit: filter.limit,
        total,
        totalPages: Math.ceil(total / filter.limit),
      },
    };
  }

  async getApplicationDetail(applicationId: number, recruiterId: number) {
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: {
        job: { select: { id: true, title: true, recruiterId: true, customFields: true } },
        student: { select: { id: true, name: true, email: true, contactNo: true, profilePic: true, resumes: true } },
        roundSubmissions: {
          include: { round: true },
          orderBy: { round: { orderIndex: "asc" } },
        },
      },
    });

    if (!application) throw new Error("Application not found");
    if (application.job.recruiterId !== recruiterId) throw new Error("Not authorized");

    return application;
  }

  async updateApplicationStatus(applicationId: number, recruiterId: number, status: ApplicationStatus) {
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: { job: { select: { recruiterId: true } } },
    });

    if (!application) throw new Error("Application not found");
    if (application.job.recruiterId !== recruiterId) throw new Error("Not authorized");

    return prisma.application.update({
      where: { id: applicationId },
      data: { status },
    });
  }

  async advanceApplication(applicationId: number, recruiterId: number) {
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: {
        job: { select: { id: true, recruiterId: true } },
        roundSubmissions: { include: { round: true } },
      },
    });

    if (!application) throw new Error("Application not found");
    if (application.job.recruiterId !== recruiterId) throw new Error("Not authorized");

    const rounds = await prisma.round.findMany({
      where: { jobId: application.jobId },
      orderBy: { orderIndex: "asc" },
    });

    if (rounds.length === 0) throw new Error("No rounds defined for this job");

    // Find current round index
    let currentIndex = -1;
    if (application.currentRoundId) {
      currentIndex = rounds.findIndex((r) => r.id === application.currentRoundId);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex >= rounds.length) {
      // All rounds completed
      return prisma.application.update({
        where: { id: applicationId },
        data: { status: "SHORTLISTED" },
      });
    }

    const nextRound = rounds[nextIndex]!;

    // Create submission record for next round if not exists
    await prisma.roundSubmission.upsert({
      where: { applicationId_roundId: { applicationId, roundId: nextRound.id } },
      update: { status: "IN_PROGRESS" },
      create: { applicationId, roundId: nextRound.id, status: "IN_PROGRESS" },
    });

    return prisma.application.update({
      where: { id: applicationId },
      data: { currentRoundId: nextRound.id, status: "IN_PROGRESS" },
    });
  }

  // ==================== EVALUATION ====================

  async getSubmission(applicationId: number, roundId: number, recruiterId: number) {
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: { job: { select: { recruiterId: true } } },
    });

    if (!application) throw new Error("Application not found");
    if (application.job.recruiterId !== recruiterId) throw new Error("Not authorized");

    return prisma.roundSubmission.findUnique({
      where: { applicationId_roundId: { applicationId, roundId } },
      include: {
        round: true,
        application: {
          include: { student: { select: { id: true, name: true, email: true } } },
        },
      },
    });
  }

  async evaluateSubmission(
    applicationId: number,
    roundId: number,
    recruiterId: number,
    evaluationScores: Record<string, { score: number; comment?: string | undefined }>,
    recruiterNotes?: string | undefined,
  ) {
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: { job: { select: { recruiterId: true } } },
    });

    if (!application) throw new Error("Application not found");
    if (application.job.recruiterId !== recruiterId) throw new Error("Not authorized");

    return prisma.roundSubmission.update({
      where: { applicationId_roundId: { applicationId, roundId } },
      data: {
        evaluationScores: JSON.parse(JSON.stringify(evaluationScores)),
        recruiterNotes: recruiterNotes ?? null,
        evaluatedAt: new Date(),
        status: "COMPLETED",
      },
    });
  }

  // ==================== DASHBOARD & ANALYTICS ====================

  async getDashboard(recruiterId: number) {
    const [totalJobs, activeJobs, totalApplications, applicationsByStatus] = await Promise.all([
      prisma.job.count({ where: { recruiterId } }),
      prisma.job.count({ where: { recruiterId, status: "PUBLISHED" } }),
      prisma.application.count({ where: { job: { recruiterId } } }),
      prisma.application.groupBy({
        by: ["status"],
        where: { job: { recruiterId } },
        _count: { id: true },
      }),
    ]);

    const recentApplications = await prisma.application.findMany({
      where: { job: { recruiterId } },
      take: 10,
      orderBy: { createdAt: "desc" },
      include: {
        student: { select: { id: true, name: true, email: true } },
        job: { select: { id: true, title: true } },
      },
    });

    const statusCounts: Record<string, number> = {};
    for (const s of applicationsByStatus) {
      statusCounts[s.status] = s._count.id;
    }

    return {
      totalJobs,
      activeJobs,
      totalApplications,
      hiredCount: statusCounts["HIRED"] || 0,
      statusBreakdown: statusCounts,
      recentApplications,
    };
  }

  async getJobAnalytics(jobId: number, recruiterId: number) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error("Job not found");
    if (job.recruiterId !== recruiterId) throw new Error("Not authorized");

    const [totalApplications, applicationsByStatus, rounds] = await Promise.all([
      prisma.application.count({ where: { jobId } }),
      prisma.application.groupBy({
        by: ["status"],
        where: { jobId },
        _count: { id: true },
      }),
      prisma.round.findMany({
        where: { jobId },
        orderBy: { orderIndex: "asc" },
        include: {
          _count: { select: { roundSubmissions: true } },
          roundSubmissions: {
            select: { status: true },
          },
        },
      }),
    ]);

    const statusCounts: Record<string, number> = {};
    for (const s of applicationsByStatus) {
      statusCounts[s.status] = s._count.id;
    }

    const roundAnalytics = rounds.map((round) => {
      const completed = round.roundSubmissions.filter((s) => s.status === "COMPLETED").length;
      const inProgress = round.roundSubmissions.filter((s) => s.status === "IN_PROGRESS").length;
      const pending = round.roundSubmissions.filter((s) => s.status === "PENDING").length;

      return {
        id: round.id,
        name: round.name,
        orderIndex: round.orderIndex,
        totalSubmissions: round._count.roundSubmissions,
        completed,
        inProgress,
        pending,
      };
    });

    return {
      jobId,
      jobTitle: job.title,
      totalApplications,
      statusBreakdown: statusCounts,
      roundAnalytics,
    };
  }
}
