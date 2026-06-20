import { prisma } from "../../database/db.js";
import { Prisma } from "@prisma/client";

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

type UpdateJobData = {
  [K in keyof CreateJobData]?: CreateJobData[K] | undefined;
};

export class JobService {
  async createJob(data: CreateJobData) {
    if (data.deadline && new Date(data.deadline) < new Date(new Date().toDateString())) {
      throw new Error("Deadline must be in the future");
    }
    return prisma.job.create({
      data: {
        title: data.title,
        description: data.description,
        location: data.location,
        salary: data.salary,
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
      const tagList = query.tags.split(",").map((t) => t.trim()).filter(Boolean);
      if (tagList.length > 0) {
        where.tags = { hasSome: tagList };
      }
    }

    if (andFilters.length > 0) {
      where.AND = andFilters;
    }

    const skip = (query.page - 1) * query.limit;

    // Salary range filter: `salary` is a free-text String (e.g. "₹10 LPA – ₹15 LPA").
    // Filtering is pushed entirely to PostgreSQL so the database extracts the first
    // integer from the salary string, applies the range comparison, counts, and
    // paginates. Only one page of ids is ever returned to the application, which
    // avoids loading large result sets into memory (the previous in-app approach
    // was a resource exhaustion / DoS risk on large datasets).
    if (query.salaryMin !== undefined || query.salaryMax !== undefined) {
      // Rebuild the active filters as SQL fragments so the salary comparison can be
      // evaluated against the same candidate set inside the database.
      const conditions: Prisma.Sql[] = [];

      const statusValue = (query.status as string | undefined) ?? "PUBLISHED";
      conditions.push(Prisma.sql`"status" = ${statusValue}::"JobStatus"`);

      if (query.search) {
        const like = `%${query.search}%`;
        conditions.push(
          Prisma.sql`("title" ILIKE ${like} OR "description" ILIKE ${like} OR "company" ILIKE ${like})`
        );
      }

      if (!query.includeExpired) {
        conditions.push(Prisma.sql`("deadline" IS NULL OR "deadline" >= NOW())`);
      }

      if (query.location) {
        conditions.push(Prisma.sql`"location" ILIKE ${`%${query.location}%`}`);
      }

      if (query.company) {
        conditions.push(Prisma.sql`"company" ILIKE ${`%${query.company}%`}`);
      }

      if (query.tags) {
        const tagList = query.tags.split(",").map((t) => t.trim()).filter(Boolean);
        if (tagList.length > 0) {
          conditions.push(Prisma.sql`"tags" && ${tagList}::text[]`);
        }
      }

      // Extract the first integer from the free-text salary, defaulting to 0 when the
      // string has no digits (matches the previous parsing behaviour).
      const salaryValue = Prisma.sql`COALESCE(NULLIF(substring("salary" from '\\d+'), '')::int, 0)`;
      if (query.salaryMin !== undefined) {
        conditions.push(Prisma.sql`${salaryValue} >= ${query.salaryMin}`);
      }
      if (query.salaryMax !== undefined) {
        conditions.push(Prisma.sql`${salaryValue} <= ${query.salaryMax}`);
      }

      const whereSql = Prisma.sql`WHERE ${Prisma.join(conditions, " AND ")}`;

      const [pageRows, countRows] = await Promise.all([
        prisma.$queryRaw<Array<{ id: number }>>(
          Prisma.sql`
            SELECT "id" FROM "job"
            ${whereSql}
            ORDER BY "createdAt" DESC
            LIMIT ${query.limit} OFFSET ${skip}
          `
        ),
        prisma.$queryRaw<Array<{ count: bigint }>>(
          Prisma.sql`SELECT COUNT(*)::bigint AS count FROM "job" ${whereSql}`
        ),
      ]);

      const total = Number(countRows[0]?.count ?? 0);
      const pageIds = pageRows.map((row) => row.id);

      const jobs = await prisma.job.findMany({
        where: { id: { in: pageIds } },
        include: {
          recruiter: { select: { id: true, name: true, company: true } },
          _count: { select: { applications: true, rounds: true } },
        },
      });

      // Restore salary-filtered order — IN(...) does not preserve order in PostgreSQL
      const jobMap = new Map(jobs.map((j) => [j.id, j]));
      const orderedJobs = pageIds
        .map((id) => jobMap.get(id))
        .filter((job): job is NonNullable<typeof job> => job !== undefined);

      return {
        jobs: orderedJobs,
        pagination: {
          page: query.page,
          limit: query.limit,
          total,
          totalPages: Math.ceil(total / query.limit),
        },
      };
    }

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

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: "insensitive" } },
        { company: { contains: query.search, mode: "insensitive" } },
      ];
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

    if (data.deadline && new Date(data.deadline) < new Date(new Date().toDateString())) {
      throw new Error("Deadline must be in the future");
    }

    return prisma.job.update({
      where: { id },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.location !== undefined && { location: data.location }),
        ...(data.salary !== undefined && { salary: data.salary }),
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
