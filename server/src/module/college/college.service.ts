import { prisma } from "../../database/db.js";
import type { Prisma } from "@prisma/client";
import DOMPurify from "isomorphic-dompurify";

const sanitize = (s: string) => DOMPurify.sanitize(s, { ALLOWED_TAGS: [] });

interface ListCollegesParams {
  search?: string;
  state?: string;
  city?: string;
  type?: string;
  naacGrade?: string;
  stream?: string;
  exam?: string;
  degreeLevel?: string;
  minFees?: string;
  maxFees?: string;
  minNirfRank?: string;
  maxNirfRank?: string;
  sortBy?: string;
  sortOrder?: string;
  page?: string;
  limit?: string;
}

interface SubmitReviewInput {
  overallRating: number;
  placementsRating?: number;
  infrastructureRating?: number;
  facultyRating?: number;
  campusLifeRating?: number;
  valueForMoneyRating?: number;
  title: string;
  content: string;
  pros?: string;
  cons?: string;
  courseStudied?: string;
  graduationYear?: number;
}

export class CollegeService {
  async listColleges(params: ListCollegesParams) {
    const page = Math.max(1, parseInt(params.page || "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(params.limit || "12", 10)));
    const skip = (page - 1) * limit;

    const where: Prisma.collegeWhereInput = { isApproved: true };

    if (params.state) {
      where.state = { equals: params.state, mode: "insensitive" };
    }
    if (params.city) {
      where.city = { equals: params.city, mode: "insensitive" };
    }
    if (params.type) {
      where.type = params.type as "GOVERNMENT" | "PRIVATE" | "DEEMED" | "AUTONOMOUS" | "CENTRAL" | "STATE";
    }
    if (params.naacGrade) {
      where.naacGrade = params.naacGrade as "A_PLUS_PLUS" | "A_PLUS" | "A" | "B_PLUS_PLUS" | "B_PLUS" | "B" | "C" | "UNGRADED";
    }
    if (params.stream) {
      where.streams = { has: params.stream };
    }
    if (params.exam) {
      where.acceptedExams = { has: params.exam };
    }
    if (params.minNirfRank || params.maxNirfRank) {
      where.nirfRanking = {};
      if (params.minNirfRank) {
        where.nirfRanking.gte = parseInt(params.minNirfRank, 10);
      }
      if (params.maxNirfRank) {
        where.nirfRanking.lte = parseInt(params.maxNirfRank, 10);
      }
    }
    if (params.minFees || params.maxFees) {
      where.courses = {
        some: {
          ...(params.minFees ? { feesPerYear: { gte: parseInt(params.minFees, 10) } } : {}),
          ...(params.maxFees ? { feesPerYear: { lte: parseInt(params.maxFees, 10) } } : {}),
          ...(params.degreeLevel ? { degreeLevel: params.degreeLevel as "DIPLOMA" | "BACHELOR" | "MASTER" | "DOCTORAL" | "CERTIFICATE" } : {}),
        },
      };
    } else if (params.degreeLevel) {
      where.courses = {
        some: { degreeLevel: params.degreeLevel as "DIPLOMA" | "BACHELOR" | "MASTER" | "DOCTORAL" | "CERTIFICATE" },
      };
    }
    if (params.search) {
      where.OR = [
        { name: { contains: params.search, mode: "insensitive" } },
        { city: { contains: params.search, mode: "insensitive" } },
        { state: { contains: params.search, mode: "insensitive" } },
        { affiliation: { contains: params.search, mode: "insensitive" } },
      ];
    }

    // Build sort
    let orderBy: Prisma.collegeOrderByWithRelationInput = { name: "asc" };
    const dir = (params.sortOrder === "desc" ? "desc" : "asc") as "asc" | "desc";
    switch (params.sortBy) {
      case "nirfRanking":
        orderBy = { nirfRanking: dir };
        break;
      case "avgRating":
        orderBy = { avgRating: dir === "asc" ? "desc" : "asc" }; // higher rating = better
        break;
      case "establishedYear":
        orderBy = { establishedYear: dir };
        break;
      case "reviewCount":
        orderBy = { reviewCount: dir === "asc" ? "desc" : "asc" };
        break;
      default:
        orderBy = { name: "asc" };
    }

    const [colleges, total] = await Promise.all([
      prisma.college.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          slug: true,
          logo: true,
          description: true,
          type: true,
          affiliation: true,
          naacGrade: true,
          nirfRanking: true,
          nirfYear: true,
          state: true,
          city: true,
          acceptedExams: true,
          streams: true,
          avgRating: true,
          reviewCount: true,
          establishedYear: true,
          website: true,
        },
      }),
      prisma.college.count({ where }),
    ]);

    return {
      colleges,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getCollegeBySlug(slug: string) {
    const college = await prisma.college.findUnique({
      where: { slug },
      include: {
        _count: { select: { reviews: { where: { status: "APPROVED" } }, courses: true } },
      },
    });

    if (!college || !college.isApproved) {
      throw new Error("College not found");
    }

    return college;
  }

  async getCollegeCourses(slug: string) {
    const college = await prisma.college.findUnique({
      where: { slug },
      select: { id: true, isApproved: true },
    });
    if (!college || !college.isApproved) throw new Error("College not found");

    return prisma.collegeCourse.findMany({
      where: { collegeId: college.id },
      orderBy: [{ isPopular: "desc" }, { stream: "asc" }, { name: "asc" }],
    });
  }

  async getCollegePlacements(slug: string) {
    const college = await prisma.college.findUnique({
      where: { slug },
      select: { id: true, isApproved: true },
    });
    if (!college || !college.isApproved) throw new Error("College not found");

    return prisma.collegePlacement.findMany({
      where: { collegeId: college.id },
      orderBy: { year: "desc" },
    });
  }

  async getCollegeCutoffs(slug: string, params: { examId?: string; year?: string; category?: string; courseId?: string }) {
    const college = await prisma.college.findUnique({
      where: { slug },
      select: { id: true, isApproved: true },
    });
    if (!college || !college.isApproved) throw new Error("College not found");

    const where: Prisma.collegeCutoffWhereInput = { collegeId: college.id };

    if (params.examId) where.examId = parseInt(params.examId, 10);
    if (params.year) where.year = parseInt(params.year, 10);
    if (params.category) where.category = params.category;
    if (params.courseId) where.courseId = parseInt(params.courseId, 10);

    return prisma.collegeCutoff.findMany({
      where,
      orderBy: [{ year: "desc" }, { category: "asc" }],
      include: {
        exam: { select: { id: true, name: true, slug: true } },
        course: { select: { id: true, name: true, degree: true } },
      },
    });
  }

  async getCollegeReviews(slug: string, sort: string = "latest") {
    const college = await prisma.college.findUnique({
      where: { slug },
      select: { id: true, isApproved: true },
    });
    if (!college || !college.isApproved) throw new Error("College not found");

    const orderBy: Prisma.collegeReviewOrderByWithRelationInput =
      sort === "highest" ? { overallRating: "desc" } :
      sort === "lowest" ? { overallRating: "asc" } :
      { createdAt: "desc" };

    return prisma.collegeReview.findMany({
      where: { collegeId: college.id, status: "APPROVED" },
      orderBy,
      include: {
        user: { select: { id: true, name: true, profilePic: true } },
      },
    });
  }

  async submitReview(slug: string, userId: number, input: SubmitReviewInput) {
    const college = await prisma.college.findUnique({
      where: { slug },
      select: { id: true, isApproved: true },
    });
    if (!college || !college.isApproved) throw new Error("College not found");

    const existing = await prisma.collegeReview.findFirst({
      where: { collegeId: college.id, userId, status: { not: "REJECTED" } },
    });
    if (existing) throw new Error("You have already submitted a review for this college");

    return prisma.collegeReview.create({
      data: {
        collegeId: college.id,
        userId,
        overallRating: input.overallRating,
        placementsRating: input.placementsRating ?? null,
        infrastructureRating: input.infrastructureRating ?? null,
        facultyRating: input.facultyRating ?? null,
        campusLifeRating: input.campusLifeRating ?? null,
        valueForMoneyRating: input.valueForMoneyRating ?? null,
        title: sanitize(input.title),
        content: sanitize(input.content),
        pros: input.pros ? sanitize(input.pros) : null,
        cons: input.cons ? sanitize(input.cons) : null,
        courseStudied: input.courseStudied ?? null,
        graduationYear: input.graduationYear ?? null,
      },
    });
  }

  async compareColleges(idsStr: string) {
    const ids = idsStr.split(",").map((s) => parseInt(s.trim(), 10)).filter((n) => !isNaN(n));
    if (ids.length < 2 || ids.length > 4) throw new Error("Provide 2 to 4 college IDs");

    const colleges = await prisma.college.findMany({
      where: { id: { in: ids }, isApproved: true },
      include: {
        courses: { orderBy: { isPopular: "desc" }, take: 10 },
        placements: { orderBy: { year: "desc" }, take: 1 },
        _count: { select: { reviews: { where: { status: "APPROVED" } }, courses: true } },
      },
    });

    return colleges;
  }

  async getFilterStats() {
    const [states, types, streams, exams, naacGrades, total] = await Promise.all([
      prisma.college.groupBy({
        by: ["state"],
        where: { isApproved: true },
        _count: { state: true },
        orderBy: { _count: { state: "desc" } },
      }),
      prisma.college.groupBy({
        by: ["type"],
        where: { isApproved: true },
        _count: { type: true },
        orderBy: { _count: { type: "desc" } },
      }),
      prisma.$queryRaw<{ stream: string; count: bigint }[]>`
        SELECT unnest(streams) AS stream, COUNT(*) AS count
        FROM college WHERE "isApproved" = true
        GROUP BY stream ORDER BY count DESC
      `,
      prisma.$queryRaw<{ exam: string; count: bigint }[]>`
        SELECT unnest("acceptedExams") AS exam, COUNT(*) AS count
        FROM college WHERE "isApproved" = true
        GROUP BY exam ORDER BY count DESC
      `,
      prisma.college.groupBy({
        by: ["naacGrade"],
        where: { isApproved: true, naacGrade: { not: null } },
        _count: { naacGrade: true },
        orderBy: { _count: { naacGrade: "desc" } },
      }),
      prisma.college.count({ where: { isApproved: true } }),
    ]);

    return {
      total,
      states: states.map((s) => ({ name: s.state, count: s._count.state })),
      types: types.map((t) => ({ name: t.type, count: t._count.type })),
      streams: streams.map((s) => ({ name: s.stream, count: Number(s.count) })),
      exams: exams.map((e) => ({ name: e.exam, count: Number(e.count) })),
      naacGrades: naacGrades.map((n) => ({ name: n.naacGrade!, count: n._count.naacGrade })),
    };
  }

  async getStatesWithCounts() {
    const states = await prisma.college.groupBy({
      by: ["state"],
      where: { isApproved: true },
      _count: { state: true },
      orderBy: { _count: { state: "desc" } },
    });

    return states.map((s) => ({ state: s.state, count: s._count.state }));
  }

  async getCollegesByExam(examSlug: string, params: ListCollegesParams) {
    const exam = await prisma.entranceExam.findUnique({ where: { slug: examSlug } });
    if (!exam) throw new Error("Exam not found");

    // Override exam filter with the exam name
    return this.listColleges({ ...params, exam: exam.name });
  }

  async getExamBySlug(examSlug: string) {
    const exam = await prisma.entranceExam.findUnique({ where: { slug: examSlug } });
    if (!exam) throw new Error("Exam not found");
    return exam;
  }
}
