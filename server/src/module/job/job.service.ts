import { prisma } from "../../database/db.js";
import type { Prisma } from "@prisma/client";
import { parseSalary } from "../job-index/job-normalizer.js";

interface CreateJobData {
  title: string;
  description: string;
  location: string;
  salary: string;
  company: string;
  status?: "DRAFT" | "PUBLISHED" | "CLOSED" | "ARCHIVED" | undefined;
  customFields?: unknown[] | undefined;
  deadline?: string | null | undefined;
  tags?: string[] | undefined;
  recruiterId: number;
}

interface JobQuery {
  page: number;
  limit: number;
  search?: string | undefined;
  location?: string | undefined;
  company?: string | undefined;
  status?: string | undefined;
  tags?: string | undefined;
  includeExpired?: boolean | undefined;
  salaryMin?: number | undefined;
  salaryMax?: number | undefined;
}


/**
 * Turns the stored human-readable salary string into nullable annual INR bounds
 * (`salaryAnnualMin` / `salaryAnnualMax`) using the same rules as job-index ingestion.
 */
function salaryBoundsFromString(salary: string): {
  salaryAnnualMin: number | null;
  salaryAnnualMax: number | null;
} {
  const { min, max } = parseSalary(salary);
  return {
    salaryAnnualMin: min,
    salaryAnnualMax: max,
  };
}

/**
 * Restricts listings to jobs whose stored range overlaps the optional query range.
 * Jobs without both parsed bounds are excluded whenever any salary filter is active.
 */
function appendSalaryOverlapFilter(andFilters: Prisma.jobWhereInput[], query: JobQuery) {
  if (query.salaryMin === undefined && query.salaryMax === undefined) return;

  const conditions: Prisma.jobWhereInput[] = [
    { salaryAnnualMin: { not: null } },
    { salaryAnnualMax: { not: null } },
  ];

  if (query.salaryMin !== undefined) {
    conditions.push({ salaryAnnualMax: { gte: query.salaryMin } });
  }
  if (query.salaryMax !== undefined) {
    conditions.push({ salaryAnnualMin: { lte: query.salaryMax } });
  }

  andFilters.push({ AND: conditions });
}


type UpdateJobData = {
  [K in keyof CreateJobData]?: CreateJobData[K] | undefined;
};

/** Persists recruiter job posts and resolves listing queries including optional salary overlap. */
export class JobService {
  async createJob(data: CreateJobData) {
    const { salaryAnnualMin, salaryAnnualMax } = salaryBoundsFromString(data.salary);

    return prisma.job.create({
      data: {
        title: data.title,
        description: data.description,
        location: data.location,
        salary: data.salary,
        salaryAnnualMin,
        salaryAnnualMax,
        company: data.company,
        status: data.status || "DRAFT",
        customFields: data.customFields ? JSON.parse(JSON.stringify(data.customFields)) : [],
        deadline: data.deadline ? new Date(data.deadline) : null,
        tags: data.tags || [],
        recruiterId: data.recruiterId,
      },
    });
  }

  async getJobs(query: JobQuery) {
    const where: Prisma.jobWhereInput = {};
    const andFilters: Prisma.jobWhereInput[] = [];

    if (query.status) {
      where.status = query.status as "DRAFT" | "PUBLISHED" | "CLOSED" | "ARCHIVED";
    } else {
      where.status = "PUBLISHED";
    }

    if (query.search) {
      andFilters.push({
        OR: [
          { title: { contains: query.search, mode: "insensitive" } },
          { description: { contains: query.search, mode: "insensitive" } },
          { company: { contains: query.search, mode: "insensitive" } },
        ],
      });
    }

    if (!query.includeExpired) {
      andFilters.push({
        OR: [{ deadline: null }, { deadline: { gte: new Date() } }],
      });
    }

    if (query.location) {
      where.location = { contains: query.location, mode: "insensitive" };
    }

    if (query.company) {
      where.company = { contains: query.company, mode: "insensitive" };
    }

    if (query.tags) {
      where.tags = { hasSome: query.tags.split(",").map((t) => t.trim()) };
    }

    appendSalaryOverlapFilter(andFilters, query);

    if (andFilters.length > 0) {
      where.AND = andFilters;
    }

    const skip = (query.page - 1) * query.limit;

    const [jobs, total] = await Promise.all([
      prisma.job.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: { createdAt: "desc" },
        include: {
          recruiter: { select: { id: true, name: true, company: true } },
          _count: { select: { applications: true, rounds: true } },
        },
      }),
      prisma.job.count({ where }),
    ]);

    return {
      jobs,
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  /**
   * Programmatic SEO: parse a slug like "frontend-remote" into tag + location
   * and return matching jobs with auto-generated SEO meta.
   */
  async getLandingPageData(slug: string) {
    // Split slug: last segment may be a known location, rest is the tag
    const parts = slug.split("-");
    const LOCATIONS = ["remote", "bangalore", "mumbai", "delhi", "hyderabad", "pune", "chennai", "kolkata", "india", "usa"];

    let tag = slug;
    let location: string | undefined;

    // Check if the last part is a location
    const lastPart = parts[parts.length - 1]!.toLowerCase();
    if (LOCATIONS.includes(lastPart) && parts.length > 1) {
      location = lastPart;
      tag = parts.slice(0, -1).join("-");
    }

    const where: Prisma.jobWhereInput = {
      status: "PUBLISHED",
      OR: [
        { tags: { hasSome: [tag, tag.replace(/-/g, " ")] } },
        { title: { contains: tag.replace(/-/g, " "), mode: "insensitive" } },
      ],
    };

    if (location && location !== "remote") {
      where.location = { contains: location, mode: "insensitive" };
    } else if (location === "remote") {
      where.location = { contains: "remote", mode: "insensitive" };
    }

    const [jobs, total] = await Promise.all([
      prisma.job.findMany({
        where,
        take: 20,
        orderBy: { createdAt: "desc" },
        include: {
          recruiter: { select: { id: true, name: true, company: true } },
          _count: { select: { applications: true } },
        },
      }),
      prisma.job.count({ where }),
    ]);

    const displayTag = tag.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const displayLocation = location
      ? location.replace(/\b\w/g, (c) => c.toUpperCase())
      : undefined;

    const title = displayLocation
      ? `${displayTag} ${displayLocation} Jobs`
      : `${displayTag} Jobs`;

    return {
      jobs,
      meta: {
        title: `${title} - InternHack`,
        description: `Browse ${total} ${displayTag.toLowerCase()} job${total !== 1 ? "s" : ""}${displayLocation ? ` in ${displayLocation}` : ""}. Apply directly on InternHack.`,
        totalJobs: total,
        tag: displayTag,
        location: displayLocation,
        slug,
      },
    };
  }

  async getJobById(id: number) {
    return prisma.job.findUnique({
      where: { id },
      include: {
        recruiter: { select: { id: true, name: true, company: true, designation: true } },
        rounds: { orderBy: { orderIndex: "asc" } },
        _count: { select: { applications: true } },
      },
    });
  }

  async getRelatedJobs(jobId: number, limit = 4) {
    const job = await prisma.job.findUnique({
      where: { id: jobId },
      select: { id: true, title: true, tags: true },
    });
    if (!job) return null;

    const titleKeywords = job.title
      .split(/[^a-zA-Z0-9+#.]+/)
      .map((word) => word.trim())
      .filter((word) => word.length >= 3)
      .slice(0, 5);

    const matchFilters: Prisma.jobWhereInput[] = [
      ...(job.tags.length > 0 ? [{ tags: { hasSome: job.tags } }] : []),
      ...titleKeywords.map((keyword) => ({
        title: { contains: keyword, mode: "insensitive" as const },
      })),
    ];

    if (matchFilters.length === 0) return [];

    return prisma.job.findMany({
      where: {
        id: { not: job.id },
        status: "PUBLISHED",
        OR: matchFilters,
        AND: [{ OR: [{ deadline: null }, { deadline: { gte: new Date() } }] }],
      },
      take: Math.min(Math.max(limit, 1), 8),
      orderBy: { createdAt: "desc" },
      include: {
        recruiter: { select: { id: true, name: true, company: true } },
        _count: { select: { applications: true, rounds: true } },
      },
    });
  }

  async getRecruiterJobs(recruiterId: number, query: JobQuery) {
    const where: Prisma.jobWhereInput = { recruiterId };

    if (query.status) {
      where.status = query.status as "DRAFT" | "PUBLISHED" | "CLOSED" | "ARCHIVED";
    }

    const andParts: Prisma.jobWhereInput[] = [];

    if (query.search) {
      andParts.push({
        OR: [
          { title: { contains: query.search, mode: "insensitive" } },
          { company: { contains: query.search, mode: "insensitive" } },
        ],
      });
    }

    appendSalaryOverlapFilter(andParts, query);

    if (andParts.length > 0) {
      where.AND = andParts;
    }

    const skip = (query.page - 1) * query.limit;

    const [jobs, total] = await Promise.all([
      prisma.job.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: { createdAt: "desc" },
        include: {
          _count: { select: { applications: true, rounds: true } },
        },
      }),
      prisma.job.count({ where }),
    ]);

    return {
      jobs,
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  async updateJob(id: number, recruiterId: number, data: UpdateJobData) {
    const job = await prisma.job.findUnique({ where: { id } });
    if (!job) throw new Error("Job not found");
    if (job.recruiterId !== recruiterId) throw new Error("Not authorized");

    const salaryBounds =
      data.salary !== undefined ? salaryBoundsFromString(data.salary) : null;

    return prisma.job.update({
      where: { id },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.location !== undefined && { location: data.location }),
        ...(data.salary !== undefined && {
          salary: data.salary,
          salaryAnnualMin: salaryBounds!.salaryAnnualMin,
          salaryAnnualMax: salaryBounds!.salaryAnnualMax,
        }),
        ...(data.company !== undefined && { company: data.company }),
        ...(data.customFields !== undefined && { customFields: JSON.parse(JSON.stringify(data.customFields)) }),
        ...(data.deadline !== undefined && { deadline: data.deadline ? new Date(data.deadline) : null }),
        ...(data.tags !== undefined && { tags: data.tags }),
      },
    });
  }

  async updateJobStatus(id: number, recruiterId: number, status: "DRAFT" | "PUBLISHED" | "CLOSED" | "ARCHIVED") {
    const job = await prisma.job.findUnique({ where: { id } });
    if (!job) throw new Error("Job not found");
    if (job.recruiterId !== recruiterId) throw new Error("Not authorized");

    return prisma.job.update({
      where: { id },
      data: { status },
    });
  }

  async deleteJob(id: number, recruiterId: number) {
    const job = await prisma.job.findUnique({ where: { id } });
    if (!job) throw new Error("Job not found");
    if (job.recruiterId !== recruiterId) throw new Error("Not authorized");

    return prisma.job.delete({ where: { id } });
  }
}
