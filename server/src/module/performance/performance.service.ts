import { prisma } from "../../database/db.js";
import type { ReviewCycle, HRReviewStatus, Prisma } from "@prisma/client";

interface ReviewQuery {
  page: number;
  limit: number;
  cycle?: ReviewCycle | undefined;
  period?: string | undefined;
  status?: HRReviewStatus | undefined;
}

export class PerformanceService {
  async createReview(data: { employeeId: number; reviewerId: number; cycle: ReviewCycle; period: string; goals?: Record<string, unknown>[] | undefined }) {
    return prisma.performanceReview.create({
      data: {
        employeeId: data.employeeId,
        reviewerId: data.reviewerId,
        cycle: data.cycle,
        period: data.period,
        goals: (data.goals ?? []) as Prisma.InputJsonValue,
      },
      include: {
        employee: { select: { id: true, firstName: true, lastName: true, designation: true } },
        reviewer: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  async getMyReviews(employeeId: number, query: ReviewQuery) {
    const where: Prisma.performanceReviewWhereInput = { employeeId };
    if (query.cycle) where.cycle = query.cycle;
    if (query.period) where.period = query.period;
    if (query.status) where.status = query.status;

    const [reviews, total] = await Promise.all([
      prisma.performanceReview.findMany({
        where,
        include: { reviewer: { select: { id: true, firstName: true, lastName: true } } },
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.performanceReview.count({ where }),
    ]);

    return { reviews, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async getTeamReviews(reviewerId: number, query: ReviewQuery) {
    const where: Prisma.performanceReviewWhereInput = { reviewerId };
    if (query.cycle) where.cycle = query.cycle;
    if (query.status) where.status = query.status;

    const [reviews, total] = await Promise.all([
      prisma.performanceReview.findMany({
        where,
        include: {
          employee: { select: { id: true, firstName: true, lastName: true, designation: true, department: { select: { name: true } } } },
        },
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.performanceReview.count({ where }),
    ]);

    return { reviews, pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) } };
  }

  async getById(id: number) {
    const review = await prisma.performanceReview.findUnique({
      where: { id },
      include: {
        employee: { select: { id: true, firstName: true, lastName: true, designation: true, department: { select: { name: true } } } },
        reviewer: { select: { id: true, firstName: true, lastName: true } },
      },
    });
    if (!review) throw new Error("Review not found");
    return review;
  }

  async update(id: number, data: { selfRating?: number | undefined; managerRating?: number | undefined; finalRating?: number | undefined; selfComments?: string | undefined; managerComments?: string | undefined; goals?: Record<string, unknown>[] | undefined; strengths?: string | undefined; improvements?: string | undefined; promotionRecommended?: boolean | undefined }) {
    const review = await prisma.performanceReview.findUnique({ where: { id } });
    if (!review) throw new Error("Review not found");

    const updateData: Prisma.performanceReviewUpdateInput = {};
    if (data.selfRating !== undefined) updateData.selfRating = data.selfRating;
    if (data.managerRating !== undefined) updateData.managerRating = data.managerRating;
    if (data.finalRating !== undefined) updateData.finalRating = data.finalRating;
    if (data.selfComments !== undefined) updateData.selfComments = data.selfComments;
    if (data.managerComments !== undefined) updateData.managerComments = data.managerComments;
    if (data.goals !== undefined) updateData.goals = data.goals as Prisma.InputJsonValue;
    if (data.strengths !== undefined) updateData.strengths = data.strengths;
    if (data.improvements !== undefined) updateData.improvements = data.improvements;
    if (data.promotionRecommended !== undefined) updateData.promotionRecommended = data.promotionRecommended;

    return prisma.performanceReview.update({
      where: { id },
      data: updateData,
      include: {
        employee: { select: { id: true, firstName: true, lastName: true } },
        reviewer: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  async submitReview(id: number, status: HRReviewStatus) {
    const review = await prisma.performanceReview.findUnique({ where: { id } });
    if (!review) throw new Error("Review not found");

    const data: Prisma.performanceReviewUpdateInput = { status };
    if (status === "COMPLETED") data.completedAt = new Date();

    return prisma.performanceReview.update({ where: { id }, data });
  }
}
