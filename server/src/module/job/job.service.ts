import { prisma } from "../../database/db.js";
import type { Prisma } from "@prisma/client";

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
}


type UpdateJobData = {
  [K in keyof CreateJobData]?: CreateJobData[K] | undefined;
};
export class JobService {
  async createJob(data: CreateJobData) {
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

    if (query.status) {
      where.status = query.status as "DRAFT" | "PUBLISHED" | "CLOSED" | "ARCHIVED";
    } else {
      where.status = "PUBLISHED";
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: "insensitive" } },
        { description: { contains: query.search, mode: "insensitive" } },
        { company: { contains: query.search, mode: "insensitive" } },
      ];
    }

    if (query.location) {
      where.location = { contains: query.location, mode: "insensitive" };
    }

    if (query.company) {
      where.company = { contains: query.company, mode: "insensitive" };
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
