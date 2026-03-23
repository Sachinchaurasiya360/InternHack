import { prisma } from "../../database/db.js";
import type { Prisma, ApplicationStatus } from "@prisma/client";
import { signUrl, signUrls } from "../../utils/s3.utils.js";

interface TalentSearchFilter {
  page: number;
  limit: number;
  skills?: string;
  verifiedSkills?: string;
  college?: string;
  graduationYearMin?: number;
  graduationYearMax?: number;
  minAtsScore?: number;
  location?: string;
  search?: string;
  jobStatus?: string;
}

interface CreateRoundData {
  name: string;
  description?: string | null | undefined;
  orderIndex: number;
  instructions?: string | null | undefined;
  customFields?: unknown[] | undefined;
  evaluationCriteria?: unknown[] | undefined;
  assessmentQuestions?: unknown[] | undefined;
  timeLimitSecs?: number | null | undefined;
  autoGrade?: boolean | undefined;
  activateAt?: string | null | undefined;
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
        assessmentQuestions: data.assessmentQuestions ? JSON.parse(JSON.stringify(data.assessmentQuestions)) : [],
        timeLimitSecs: data.timeLimitSecs ?? null,
        autoGrade: data.autoGrade ?? false,
        activateAt: data.activateAt ? new Date(data.activateAt) : null,
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
        ...(data.assessmentQuestions !== undefined && { assessmentQuestions: JSON.parse(JSON.stringify(data.assessmentQuestions)) }),
        ...(data.timeLimitSecs !== undefined && { timeLimitSecs: data.timeLimitSecs }),
        ...(data.autoGrade !== undefined && { autoGrade: data.autoGrade }),
        ...(data.activateAt !== undefined && { activateAt: data.activateAt ? new Date(data.activateAt) : null }),
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

    // Sign S3 URLs in a single batch instead of N+1 per application
    const allUrls = new Set<string>();
    for (const app of applications) {
      if (app.resumeUrl) allUrls.add(app.resumeUrl);
      if (app.student) for (const u of app.student.resumes) allUrls.add(u);
    }
    const urlArr = [...allUrls];
    const signedArr = await Promise.all(urlArr.map((u) => signUrl(u)));
    const signedMap = new Map(urlArr.map((u, i) => [u, signedArr[i]!]));

    const signed = applications.map((app) => ({
      ...app,
      resumeUrl: app.resumeUrl ? (signedMap.get(app.resumeUrl) ?? app.resumeUrl) : app.resumeUrl,
      student: app.student
        ? { ...app.student, resumes: app.student.resumes.map((u) => signedMap.get(u) ?? u) }
        : app.student,
    }));

    return {
      applications: signed,
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
        job: { select: { id: true, title: true, recruiterId: true, customFields: true, tags: true } },
        student: { select: { id: true, name: true, email: true, contactNo: true, profilePic: true, resumes: true } },
        roundSubmissions: {
          include: { round: true },
          orderBy: { round: { orderIndex: "asc" } },
        },
      },
    });

    if (!application) throw new Error("Application not found");
    if (application.job.recruiterId !== recruiterId) throw new Error("Not authorized");

    return {
      ...application,
      resumeUrl: application.resumeUrl ? await signUrl(application.resumeUrl) : application.resumeUrl,
      student: application.student
        ? { ...application.student, resumes: await signUrls(application.student.resumes) }
        : application.student,
    };
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
    return prisma.$transaction(async (tx) => {
      const application = await tx.application.findUnique({
        where: { id: applicationId },
        include: {
          job: { select: { id: true, recruiterId: true } },
          roundSubmissions: { include: { round: true } },
        },
      });

      if (!application) throw new Error("Application not found");
      if (application.job.recruiterId !== recruiterId) throw new Error("Not authorized");

      const rounds = await tx.round.findMany({
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
        return tx.application.update({
          where: { id: applicationId },
          data: { status: "SHORTLISTED" },
        });
      }

      const nextRound = rounds[nextIndex]!;

      // Create submission record for next round if not exists
      await tx.roundSubmission.upsert({
        where: { applicationId_roundId: { applicationId, roundId: nextRound.id } },
        update: { status: "IN_PROGRESS" },
        create: { applicationId, roundId: nextRound.id, status: "IN_PROGRESS" },
      });

      return tx.application.update({
        where: { id: applicationId },
        data: { currentRoundId: nextRound.id, status: "IN_PROGRESS" },
      });
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

    // Top verified skills among applicants
    const topVerifiedSkills = await prisma.verifiedSkill.groupBy({
      by: ["skillName"],
      where: {
        student: { applications: { some: { job: { recruiterId } } } },
      },
      _count: { id: true },
      orderBy: { _count: { id: "desc" } },
      take: 5,
    });

    return {
      totalJobs,
      activeJobs,
      totalApplications,
      hiredCount: statusCounts["HIRED"] || 0,
      statusBreakdown: statusCounts,
      recentApplications,
      topVerifiedSkills: topVerifiedSkills.map((s) => ({
        skillName: s.skillName,
        count: s._count.id,
      })),
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

  // ==================== TALENT SEARCH ====================

  async searchTalent(filter: TalentSearchFilter) {
    const where: Prisma.userWhereInput = {
      role: "STUDENT",
      isActive: true,
      isProfilePublic: true,
    };

    if (filter.search) {
      where.OR = [
        { name: { contains: filter.search, mode: "insensitive" } },
        { email: { contains: filter.search, mode: "insensitive" } },
      ];
    }
    if (filter.college) {
      where.college = { contains: filter.college, mode: "insensitive" };
    }
    if (filter.location) {
      where.location = { contains: filter.location, mode: "insensitive" };
    }
    if (filter.graduationYearMin || filter.graduationYearMax) {
      where.graduationYear = {};
      if (filter.graduationYearMin) where.graduationYear.gte = filter.graduationYearMin;
      if (filter.graduationYearMax) where.graduationYear.lte = filter.graduationYearMax;
    }
    if (filter.skills) {
      const skillList = filter.skills.split(",").map((s) => s.trim()).filter(Boolean);
      if (skillList.length > 0) {
        where.skills = { hasSome: skillList };
      }
    }
    if (filter.verifiedSkills) {
      const vsList = filter.verifiedSkills.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
      if (vsList.length > 0) {
        where.verifiedSkills = { some: { skillName: { in: vsList } } };
      }
    }
    if (filter.minAtsScore) {
      where.atsScores = { some: { overallScore: { gte: filter.minAtsScore } } };
    }
    if (filter.jobStatus) {
      where.jobStatus = filter.jobStatus;
    }

    const skip = (filter.page - 1) * filter.limit;

    const [students, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: filter.limit,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          email: true,
          profilePic: true,
          bio: true,
          college: true,
          graduationYear: true,
          skills: true,
          location: true,
          linkedinUrl: true,
          githubUrl: true,
          portfolioUrl: true,
          resumes: true,
          jobStatus: true,
          atsScores: {
            select: { overallScore: true },
            orderBy: { overallScore: "desc" },
            take: 1,
          },
          verifiedSkills: {
            select: { skillName: true, score: true, verifiedAt: true },
            orderBy: { verifiedAt: "desc" as const },
            take: 10,
          },
        },
      }),
      prisma.user.count({ where }),
    ]);

    // Batch-sign all resume URLs at once
    const allResumeUrls = new Set<string>();
    for (const s of students) for (const u of s.resumes) allResumeUrls.add(u);
    const resumeUrlArr = [...allResumeUrls];
    const signedResumeArr = await Promise.all(resumeUrlArr.map((u) => signUrl(u)));
    const resumeSignedMap = new Map(resumeUrlArr.map((u, i) => [u, signedResumeArr[i]!]));

    const results = students.map((s) => ({
      id: s.id,
      name: s.name,
      email: s.email,
      profilePic: s.profilePic,
      bio: s.bio,
      college: s.college,
      graduationYear: s.graduationYear,
      skills: s.skills,
      location: s.location,
      linkedinUrl: s.linkedinUrl,
      githubUrl: s.githubUrl,
      portfolioUrl: s.portfolioUrl,
      resumes: s.resumes.map((u) => resumeSignedMap.get(u) ?? u),
      jobStatus: s.jobStatus,
      bestAtsScore: s.atsScores[0]?.overallScore ?? null,
      verifiedSkillCount: s.verifiedSkills.length,
      verifiedSkills: s.verifiedSkills.map((vs) => vs.skillName),
      standaloneVerifiedSkills: s.verifiedSkills,
    }));

    return {
      students: results,
      pagination: {
        page: filter.page,
        limit: filter.limit,
        total,
        totalPages: Math.ceil(total / filter.limit),
      },
    };
  }

  // ==================== TALENT POOLS ====================

  async createTalentPool(recruiterId: number, data: { name: string; description?: string }) {
    return prisma.talentPool.create({
      data: {
        recruiterId,
        name: data.name,
        description: data.description ?? null,
      },
    });
  }

  async getTalentPools(recruiterId: number) {
    return prisma.talentPool.findMany({
      where: { recruiterId },
      orderBy: { createdAt: "desc" },
      include: {
        _count: { select: { members: true } },
      },
    });
  }

  async getTalentPoolById(poolId: number, recruiterId: number) {
    const pool = await prisma.talentPool.findUnique({
      where: { id: poolId },
      include: {
        members: {
          include: {
            student: {
              select: {
                id: true,
                name: true,
                email: true,
                college: true,
                skills: true,
                profilePic: true,
              },
            },
          },
          orderBy: { addedAt: "desc" },
        },
      },
    });

    if (!pool) throw new Error("Talent pool not found");
    if (pool.recruiterId !== recruiterId) throw new Error("Not authorized");

    return pool;
  }

  async updateTalentPool(poolId: number, recruiterId: number, data: { name?: string; description?: string }) {
    const pool = await prisma.talentPool.findUnique({ where: { id: poolId } });
    if (!pool) throw new Error("Talent pool not found");
    if (pool.recruiterId !== recruiterId) throw new Error("Not authorized");

    return prisma.talentPool.update({
      where: { id: poolId },
      data: {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.description !== undefined && { description: data.description }),
      },
    });
  }

  async deleteTalentPool(poolId: number, recruiterId: number) {
    const pool = await prisma.talentPool.findUnique({ where: { id: poolId } });
    if (!pool) throw new Error("Talent pool not found");
    if (pool.recruiterId !== recruiterId) throw new Error("Not authorized");

    await prisma.talentPool.delete({ where: { id: poolId } });
  }

  async addPoolMember(poolId: number, recruiterId: number, studentId: number, notes?: string) {
    const pool = await prisma.talentPool.findUnique({ where: { id: poolId } });
    if (!pool) throw new Error("Talent pool not found");
    if (pool.recruiterId !== recruiterId) throw new Error("Not authorized");

    const student = await prisma.user.findUnique({ where: { id: studentId } });
    if (!student || student.role !== "STUDENT") throw new Error("Student not found");

    return prisma.talentPoolMember.create({
      data: {
        poolId,
        studentId,
        notes: notes ?? null,
      },
      include: {
        student: {
          select: {
            id: true,
            name: true,
            email: true,
            college: true,
            skills: true,
            profilePic: true,
          },
        },
      },
    });
  }

  async removePoolMember(poolId: number, recruiterId: number, studentId: number) {
    const pool = await prisma.talentPool.findUnique({ where: { id: poolId } });
    if (!pool) throw new Error("Talent pool not found");
    if (pool.recruiterId !== recruiterId) throw new Error("Not authorized");

    const member = await prisma.talentPoolMember.findUnique({
      where: { poolId_studentId: { poolId, studentId } },
    });
    if (!member) throw new Error("Member not found in pool");

    await prisma.talentPoolMember.delete({
      where: { poolId_studentId: { poolId, studentId } },
    });
  }
}
