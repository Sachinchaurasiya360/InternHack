import { prisma } from "../../database/db.js";
import type { Prisma, ApplicationStatus } from "@prisma/client";
import { signUrl, signUrls } from "../../utils/s3.utils.js";
import { sendEmail } from "../../utils/email.utils.js";
import {
  applicationStatusEmailHtml,
  applicationStatusSubject,
  isEmailableStatus,
} from "../../utils/email-templates.js";
import { createLogger } from "../../utils/logger.js";
import { cacheGet, cacheSet } from "../../utils/cache.js";

const S3_BUCKET = process.env["AWS_S3_BUCKET"] || "";

// isArchived and ossTier exist in the Prisma schema but the IDE's @prisma/client typegen
// may be stale until TS server restarts. Cast narrowly to bypass IDE errors.
 
const anyRound = prisma.round as any;
function isValidS3Url(url: string) {
  try {
    const parsed = new URL(url);

    if (!S3_BUCKET || parsed.protocol !== "https:") return false;

    return (
      parsed.hostname === `${S3_BUCKET}.s3.amazonaws.com` ||
      (parsed.hostname.startsWith(`${S3_BUCKET}.s3.`) &&
        parsed.hostname.endsWith(".amazonaws.com"))
    );
  } catch {
    return false;
  }
}

const logger = createLogger("recruiter.service");

/** Legal manual status transitions for recruiter PATCH /applications/:id/status */
const ALLOWED_TRANSITIONS: Record<ApplicationStatus, ApplicationStatus[]> = {
  APPLIED: ["IN_PROGRESS", "REJECTED"],
  IN_PROGRESS: ["SHORTLISTED", "REJECTED", "HIRED"],
  SHORTLISTED: ["REJECTED", "HIRED"],
  REJECTED: [],
  HIRED: [],
  WITHDRAWN: [],
};

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
  ossTier?: string;
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

interface EvaluationCriterion {
  id: string;
  maxScore: number;
}

function getEvaluationCriteriaById(criteria: unknown): Map<string, EvaluationCriterion> {
  if (!Array.isArray(criteria)) return new Map();

  const criteriaById = new Map<string, EvaluationCriterion>();
  for (const criterion of criteria) {
    if (
      typeof criterion === "object" &&
      criterion !== null &&
      "id" in criterion &&
      "maxScore" in criterion &&
      typeof criterion.id === "string" &&
      typeof criterion.maxScore === "number"
    ) {
      criteriaById.set(criterion.id, { id: criterion.id, maxScore: criterion.maxScore });
    }
  }

  return criteriaById;
}

function validateEvaluationScores(
  evaluationScores: Record<string, { score: number; comment?: string | undefined }>,
  evaluationCriteria: unknown,
) {
  const criteriaById = getEvaluationCriteriaById(evaluationCriteria);

  for (const [criterionId, evaluation] of Object.entries(evaluationScores)) {
    const criterion = criteriaById.get(criterionId);
    if (criterion && evaluation.score > criterion.maxScore) {
      throw new Error(`Evaluation score for ${criterionId} cannot exceed maxScore ${criterion.maxScore}`);
    }
  }
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

    const existing = await prisma.round.findFirst({
      where: { jobId, name: data.name },
    });
    if (existing) {
      throw Object.assign(new Error(`A round named "${data.name}" already exists for this job`), { statusCode: 409 });
    }

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

    return anyRound.findMany({
      where: { jobId, isArchived: false },
      orderBy: { orderIndex: "asc" },
      include: {
        _count: { select: { roundSubmissions: true } },
      },
    }) as ReturnType<typeof prisma.round.findMany>;
  }

  async updateRound(jobId: number, roundId: number, recruiterId: number, data: UpdateRoundData) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error("Job not found");
    if (job.recruiterId !== recruiterId) throw new Error("Not authorized");

    const round = await prisma.round.findUnique({ where: { id: roundId } });
    if (!round || round.jobId !== jobId) throw new Error("Round not found");

    if (data.name !== undefined && data.name !== round.name) {
      const existing = await prisma.round.findFirst({
        where: { jobId, name: data.name, id: { not: roundId } },
      });
      if (existing) {
        throw Object.assign(new Error(`A round named "${data.name}" already exists for this job`), { statusCode: 409 });
      }
    }

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

    await prisma.$transaction(async (tx) => {
       
      const txRound = tx.round as any;

      // Archive the round and then re-index the remaining active rounds atomically.
      await txRound.update({
        where: { id: roundId },
        data: { isArchived: true },
      });

      // Fix for #1306: Nullify currentRoundId for applications currently in the deleted round
      await tx.application.updateMany({
        where: { currentRoundId: roundId },
        data: { currentRoundId: null },
      });

      const remainingRounds = await (txRound.findMany({
        where: { jobId, isArchived: false },
        orderBy: { orderIndex: "asc" },
        select: { id: true, orderIndex: true },
      })) as { id: number; orderIndex: number }[];

      for (let i = 0; i < remainingRounds.length; i++) {
        const r = remainingRounds[i]!;
        if (r.orderIndex !== i) {
          await tx.round.update({
            where: { id: r.id },
            data: { orderIndex: i },
          });
        }
      }
    });
  }

  async reorderRounds(jobId: number, recruiterId: number, rounds: { roundId: number; orderIndex: number }[]) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error("Job not found");
    if (job.recruiterId !== recruiterId) throw new Error("Not authorized");

    const existingRounds = await (anyRound.findMany({
      where: {
        id: { in: rounds.map((r) => r.roundId) },
        jobId,
        isArchived: false,
      },
      select: { id: true },
    })) as { id: number }[];

    if (existingRounds.length !== rounds.length) {
      throw new Error("Invalid round IDs");
    }

    // Use a transaction with temporary high indices to avoid unique constraint conflicts
    await prisma.$transaction(async (tx) => {
      // First, set all to temporary high values (unique(jobId, orderIndex) safe)
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

    return anyRound.findMany({
      where: { jobId, isArchived: false },
      orderBy: { orderIndex: "asc" },
    }) as ReturnType<typeof prisma.round.findMany>;
  }

  // ==================== APPLICATION MANAGEMENT ====================

  async getApplications(jobId: number, recruiterId: number, filter: ApplicationFilter) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error("Job not found");
    if (job.recruiterId !== recruiterId) throw new Error("Not authorized");

    const where: Prisma.applicationWhereInput = { 
      jobId,
      student: { isActive: true }
    };

    if (filter.status) {
      where.status = filter.status as ApplicationStatus;
    } else {
      where.status = { not: "WITHDRAWN" };
    }

    if (filter.search) {
      where.student = {
        ...((where.student as Prisma.userWhereInput) || {}),
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
            orderBy: { createdAt: "desc" },
            take: 5,
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
    const signedArr = await Promise.all(urlArr.map((u) => (isValidS3Url(u) ? signUrl(u) : Promise.resolve(u))),);
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
      resumeUrl: application.resumeUrl && isValidS3Url(application.resumeUrl) ? await signUrl(application.resumeUrl) : application.resumeUrl,
      student: application.student ? {
        ...application.student, resumes: await Promise.all(
          application.student.resumes.map((u) =>
            isValidS3Url(u) ? signUrl(u) : Promise.resolve(u),
          ),
        ),
      }
        : application.student,
    };
  }

  async updateApplicationStatus(applicationId: number, recruiterId: number, status: ApplicationStatus) {
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: {
        job: { select: { recruiterId: true, title: true, company: true } },
        student: { select: { name: true, email: true } },
      },
    });

    if (!application) throw new Error("Application not found");
    if (application.job.recruiterId !== recruiterId) throw new Error("Not authorized");

    // Fix for #1111: Prevent duplicate status updates and emails
    if (application.status === status) {
      const { job: _job, student: _student, ...current } = application;
      return current;
    }

    const allowedNext = ALLOWED_TRANSITIONS[application.status];
    if (!allowedNext.includes(status)) {
      throw Object.assign(
        new Error(`Cannot transition application status from ${application.status} to ${status}`),
        { statusCode: 409 },
      );
    }

    const updated = await prisma.$transaction(async (tx) => {
      return this._updateApplicationStatus(tx, applicationId, status, recruiterId);
    });

    if (isEmailableStatus(status) && application.student.email) {
      const clientUrl = process.env["CLIENT_URL"] || "https://www.internhack.xyz";
      const html = applicationStatusEmailHtml({
        studentName: application.student.name,
        jobTitle: application.job.title,
        company: application.job.company,
        status,
        applicationUrl: `${clientUrl}/student/applications`,
      });
      sendEmail({
        to: application.student.email,
        subject: applicationStatusSubject(status, application.job.title),
        html,
      }).catch((err) => {
        logger.error("Failed to send application status email", err, { applicationId, status });
      });
    }

    return updated;
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

      if (application.status === "WITHDRAWN") {
        throw new Error(
          "Withdrawn applications cannot participate in the hiring process"
        );
      }

       
      const txRound = tx.round as any;
      const rounds = (await txRound.findMany({
          where: { jobId: application.jobId, isArchived: false },
        orderBy: { orderIndex: "asc" },
      })) as Awaited<ReturnType<typeof prisma.round.findMany>>;

      if (rounds.length === 0) throw new Error("No rounds are configured for this job. Please add at least one round before advancing applicants.");

      // Find current round index
      let currentIndex = -1;
      if (application.currentRoundId) {
        currentIndex = rounds.findIndex((r) => r.id === application.currentRoundId);
      }

      const nextIndex = currentIndex + 1;
      if (nextIndex >= rounds.length) {
        // All rounds completed
        return this._updateApplicationStatus(tx, applicationId, "SHORTLISTED", recruiterId);
      }

      const nextRound = rounds[nextIndex];
      if (!nextRound) throw new Error("Round not found");

      // Create submission record for next round if not exists
      await tx.roundSubmission.upsert({
        where: { applicationId_roundId: { applicationId, roundId: nextRound.id } },
        update: { status: "IN_PROGRESS" },
        create: { applicationId, roundId: nextRound.id, status: "IN_PROGRESS" },
      });

      return this._updateApplicationStatus(tx, applicationId, "IN_PROGRESS", recruiterId, {
        currentRoundId: nextRound.id,
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

// Fix for #1116: Gracefully catch malformed JSON data during evaluation
    let parsedScores;
    try {
      parsedScores = JSON.parse(JSON.stringify(evaluationScores));
    } catch (error) {
      const err = new Error("Invalid JSON format in evaluation data");
      (err as any).status = 422;
      throw err;
    }

    if (application.status === "WITHDRAWN") {
      throw new Error(
        "Withdrawn applications cannot participate in the hiring process"
      );
    }
    
    // checking round ownership
    const round = await prisma.round.findUnique({
      where: { id: roundId },
      select: { jobId: true, evaluationCriteria: true },
    });

    if (!round || round.jobId !== application.jobId) throw new Error("Round not found");
    validateEvaluationScores(parsedScores, round.evaluationCriteria);
    return prisma.roundSubmission.update({
      where: { applicationId_roundId: { applicationId, roundId } },
      data: {
        evaluationScores: parsedScores,
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
      prisma.application.count({ where: { job: { recruiterId }, student: { isActive: true } } }),
      prisma.application.groupBy({
        by: ["status"],
        where: { job: { recruiterId }, student: { isActive: true } },
        _count: { id: true },
      }),
    ]);

    const recentApplications = await prisma.application.findMany({
      where: { job: { recruiterId }, student: { isActive: true } },
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
    let topVerifiedSkills: { skillName: string; _count: { id: number } }[] | null = null;
    const CACHE_KEY = `dashboard:topVerifiedSkills:${recruiterId}`;

    try {
      topVerifiedSkills = await cacheGet<{ skillName: string; _count: { id: number } }[]>(CACHE_KEY);
    } catch (error) {
      logger.error(`Cache read failed for key ${CACHE_KEY}`, error);
    }

    if (!topVerifiedSkills) {
      topVerifiedSkills = await prisma.verifiedSkill.groupBy({
        by: ["skillName"],
        where: {
          student: { applications: { some: { job: { recruiterId } } } },
        },
        _count: { id: true },
        orderBy: { _count: { id: "desc" } },
        take: 5,
      });

      try {
        await cacheSet(CACHE_KEY, topVerifiedSkills, 300);
      } catch (error) {
        logger.error(`Cache write failed for key ${CACHE_KEY}`, error);
      }
    }

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

    const [totalApplications, applicationsByStatus, rounds, submissionsByRoundAndStatus] =
      await Promise.all([
        prisma.application.count({ where: { jobId } }),
        prisma.application.groupBy({
          by: ["status"],
          where: { jobId },
          _count: true,
        }),
        (anyRound.findMany({
          where: { jobId, isArchived: false },
          orderBy: { orderIndex: "asc" },
          include: {
            _count: { select: { roundSubmissions: true } },
          },
        }) as Awaited<ReturnType<typeof prisma.round.findMany>>),
        prisma.roundSubmission.groupBy({
          by: ["roundId", "status"],
          where: { round: { jobId } } as Prisma.roundSubmissionWhereInput,
          _count: true,
        }),
      ]);

    const statusCounts: Record<string, number> = {};
    for (const s of applicationsByStatus) {
      statusCounts[s.status] = (s._count as unknown as { _all: number })._all;
    }

    const submissionLookup = new Map(
      submissionsByRoundAndStatus.map((s) => [
        `${s.roundId}:${s.status}`,
        (s._count as unknown as { _all: number })._all,
      ]),
    );

    const roundAnalytics = rounds.map((round) => {
      const lookup = (status: string) =>
        submissionLookup.get(`${round.id}:${status}`) ?? 0;

      return {
        id: round.id,
        name: round.name,
        orderIndex: round.orderIndex,
        totalSubmissions: (round as unknown as { _count?: { roundSubmissions: number } })._count?.roundSubmissions ?? 0,
        completed: lookup("COMPLETED"),
        inProgress: lookup("IN_PROGRESS"),
        pending: lookup("PENDING"),
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
      const baseSkills = filter.skills.split(",").map((s) => s.trim()).filter(Boolean);
      if (baseSkills.length > 0) {
        const expandedSkills = baseSkills.flatMap((s) => {
          const lower = s.toLowerCase();
          const upper = s.toUpperCase();
          const title = lower.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          return [s, lower, upper, title];
        });
        where.skills = { hasSome: Array.from(new Set(expandedSkills)) };
      }
    }
    if (filter.verifiedSkills) {
      const baseVs = filter.verifiedSkills.split(",").map((s) => s.trim()).filter(Boolean);
      if (baseVs.length > 0) {
        where.verifiedSkills = {
          some: {
            OR: baseVs.map((s) => ({ skillName: { equals: s, mode: "insensitive" } })),
          },
        };
      }
    }
    if (filter.minAtsScore) {
      where.atsScores = { some: { overallScore: { gte: filter.minAtsScore } } };
    }
    if (filter.jobStatus) {
      where.jobStatus = filter.jobStatus;
    }
    if (filter.ossTier) {
      (where as Record<string, unknown>).ossTier = { equals: filter.ossTier, mode: "insensitive" };
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
    const signedResumeArr = await Promise.all(resumeUrlArr.map((u) => (isValidS3Url(u) ? signUrl(u) : Promise.resolve(u))),);
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

  // ==================== SAVED CANDIDATES ====================

  async getSavedCandidates(recruiterId: number) {
    const saved = await prisma.savedCandidate.findMany({
      where: { recruiterId, student: { isActive: true } },
      orderBy: { createdAt: "desc" },
      include: {
        student: {
          select: {
            id: true,
            name: true,
            email: true,
            college: true,
            graduationYear: true,
            location: true,
            skills: true,
            profilePic: true,
            bio: true,
            linkedinUrl: true,
            githubUrl: true,
            portfolioUrl: true,
          },
        },
      },
    });
    return saved;
  }

  async getSavedIds(recruiterId: number) {
    const rows = await prisma.savedCandidate.findMany({
      where: { recruiterId },
      select: { studentId: true },
    });
    return rows.map((r) => r.studentId);
  }

  async saveCandidate(recruiterId: number, studentId: number, notes?: string) {
    const student = await prisma.user.findUnique({ where: { id: studentId } });
    if (!student || student.role !== "STUDENT") throw new Error("Student not found");

    if (notes) {
      const existing = await prisma.savedCandidate.findUnique({
        where: { recruiterId_studentId: { recruiterId, studentId } },
        select: { notes: true },
      });

      if (existing?.notes) {
        const timestamp = new Date().toISOString();
        notes = `${existing.notes}\n--- ${timestamp} ---\n${notes}`;
      }
    }

    return prisma.savedCandidate.upsert({
      where: { recruiterId_studentId: { recruiterId, studentId } },
      update: { notes: notes ?? null },
      create: { recruiterId, studentId, notes: notes ?? null },
    });
  }

  async unsaveCandidate(recruiterId: number, studentId: number) {
    const { count } = await prisma.savedCandidate.deleteMany({
      where: { recruiterId, studentId },
    });
    return count;
  }
  private async _updateApplicationStatus(
    tx: Prisma.TransactionClient,
    applicationId: number,
    newStatus: ApplicationStatus,
    recruiterId: number,
    additionalData: Prisma.applicationUpdateInput = {}
  ) {
    const current = await tx.application.findUnique({
      where: { id: applicationId },
      select: { status: true },
    });

    if (!current) throw new Error("Application not found");

    if (current.status !== newStatus) {
      await tx.applicationStatusHistory.create({
        data: {
          applicationId,
          fromStatus: current.status,
          toStatus: newStatus,
          changedBy: recruiterId,
        },
      });
    }

    return tx.application.update({
      where: { id: applicationId },
      data: { ...additionalData, status: newStatus },
    });
  }
}

