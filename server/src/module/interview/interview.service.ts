import { prisma } from "../../database/db.js";
import type { InterviewType, InterviewStatus, Prisma } from "@prisma/client";

interface CreateInterviewData {
  applicationId: number;
  type?: InterviewType | undefined;
  scheduledAt: string;
  durationMinutes?: number | undefined;
  meetingLink?: string | undefined;
  location?: string | undefined;
  interviewerIds?: number[] | undefined;
  candidateNotes?: string | undefined;
}

interface InterviewQuery {
  page: number;
  limit: number;
  status?: InterviewStatus | undefined;
  startDate?: string | undefined;
  endDate?: string | undefined;
}

export class InterviewService {
  async create(recruiterId: number, data: CreateInterviewData) {
    // Verify the application belongs to a job owned by this recruiter
    const application = await prisma.application.findUnique({
      where: { id: data.applicationId },
      include: { job: { select: { recruiterId: true } } },
    });
    if (!application) throw new Error("Application not found");
    if (application.job.recruiterId !== recruiterId) throw new Error("Not authorized");

    return prisma.interview.create({
      data: {
        applicationId: data.applicationId,
        type: data.type ?? "VIDEO",
        scheduledAt: new Date(data.scheduledAt),
        durationMinutes: data.durationMinutes ?? 60,
        meetingLink: data.meetingLink ?? null,
        location: data.location ?? null,
        interviewerIds: data.interviewerIds ?? [],
        candidateNotes: data.candidateNotes ?? null,
      },
      include: {
        application: {
          select: { id: true, student: { select: { id: true, name: true, email: true } }, job: { select: { id: true, title: true } } },
        },
      },
    });
  }

  async getAll(recruiterId: number, query: InterviewQuery) {
    const where: Prisma.interviewWhereInput = {
      application: { job: { recruiterId } },
    };
    if (query.status) where.status = query.status;
    if (query.startDate || query.endDate) {
      where.scheduledAt = {};
      if (query.startDate) where.scheduledAt.gte = new Date(query.startDate);
      if (query.endDate) where.scheduledAt.lte = new Date(query.endDate);
    }

    const [interviews, total] = await Promise.all([
      prisma.interview.findMany({
        where,
        include: {
          application: {
            select: { id: true, status: true, student: { select: { id: true, name: true, email: true, profilePic: true } }, job: { select: { id: true, title: true, company: true } } },
          },
        },
        orderBy: { scheduledAt: "asc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.interview.count({ where }),
    ]);

    return { interviews, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async getById(recruiterId: number, id: number) {
    const interview = await prisma.interview.findUnique({
      where: { id },
      include: {
        application: {
          select: {
            id: true, status: true, resumeUrl: true, coverLetter: true,
            student: { select: { id: true, name: true, email: true, profilePic: true, skills: true, college: true } },
            job: { select: { id: true, title: true, company: true, recruiterId: true } },
          },
        },
      },
    });
    if (!interview) throw new Error("Interview not found");
    if (interview.application.job.recruiterId !== recruiterId) throw new Error("Not authorized");
    return interview;
  }

  async update(recruiterId: number, id: number, data: { scheduledAt?: string | undefined; durationMinutes?: number | undefined; meetingLink?: string | undefined; location?: string | undefined; status?: InterviewStatus | undefined; interviewerIds?: number[] | undefined; candidateNotes?: string | undefined; cancelReason?: string | undefined }) {
    const interview = await this.getById(recruiterId, id);

    const updateData: Record<string, unknown> = { ...data };
    if (data.scheduledAt) updateData["scheduledAt"] = new Date(data.scheduledAt);

    return prisma.interview.update({ where: { id: interview.id }, data: updateData });
  }

  async delete(recruiterId: number, id: number) {
    const interview = await this.getById(recruiterId, id);
    await prisma.interview.delete({ where: { id: interview.id } });
  }

  async addFeedback(recruiterId: number, id: number, feedback: { interviewerId: number; rating: number; strengths?: string | undefined; weaknesses?: string | undefined; notes?: string | undefined; recommendation: string }) {
    const interview = await this.getById(recruiterId, id);

    const existingFeedback = (interview.feedback as Record<string, unknown>[]) ?? [];
    // Replace existing feedback from same interviewer or append
    const filtered = existingFeedback.filter((f) => (f as { interviewerId?: number }).interviewerId !== feedback.interviewerId);
    filtered.push({ ...feedback, submittedAt: new Date().toISOString() });

    return prisma.interview.update({
      where: { id: interview.id },
      data: { feedback: filtered as Prisma.InputJsonValue, status: "COMPLETED" },
    });
  }

  async getForApplication(recruiterId: number, applicationId: number) {
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: { job: { select: { recruiterId: true } } },
    });
    if (!application) throw new Error("Application not found");
    if (application.job.recruiterId !== recruiterId) throw new Error("Not authorized");

    return prisma.interview.findMany({
      where: { applicationId },
      orderBy: { scheduledAt: "asc" },
    });
  }

  async getCalendar(recruiterId: number, startDate: string, endDate: string) {
    return prisma.interview.findMany({
      where: {
        application: { job: { recruiterId } },
        scheduledAt: { gte: new Date(startDate), lte: new Date(endDate) },
        status: { in: ["SCHEDULED", "CONFIRMED"] },
      },
      include: {
        application: {
          select: { student: { select: { name: true } }, job: { select: { title: true } } },
        },
      },
      orderBy: { scheduledAt: "asc" },
    });
  }
}
