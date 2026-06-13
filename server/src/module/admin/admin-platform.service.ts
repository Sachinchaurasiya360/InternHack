import { prisma } from "../../database/db.js";
import { invalidateVersionCache } from "../../middleware/auth.middleware.js";
import { Prisma } from "@prisma/client";
import type { UserRole, JobStatus } from "@prisma/client";

export class AdminPlatformService {
  async getPlatformDashboard() {
    const [
      totalStudents,
      totalRecruiters,
      totalJobs,
      activeJobs,
      totalApplications,
      applicationsByStatus,
      recentUsers,
      recentJobs,
    ] = await Promise.all([
      prisma.user.count({ where: { role: "STUDENT" } }),
      prisma.user.count({ where: { role: "RECRUITER" } }),
      prisma.job.count(),
      prisma.job.count({ where: { status: "PUBLISHED" } }),
      prisma.application.count(),
      prisma.application.groupBy({
        by: ["status"],
        _count: { id: true },
      }),
      prisma.user.findMany({
        take: 10,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          isActive: true,
          createdAt: true,
        },
      }),
      prisma.job.findMany({
        take: 10,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          company: true,
          status: true,
          createdAt: true,
          recruiter: { select: { id: true, name: true } },
          _count: { select: { applications: true } },
        },
      }),
    ]);

    const statusBreakdown: Record<string, number> = {};
    for (const s of applicationsByStatus) {
      statusBreakdown[s.status] = s._count.id;
    }

    return {
      totalStudents,
      totalRecruiters,
      totalJobs,
      activeJobs,
      totalApplications,
      hiredCount: statusBreakdown["HIRED"] || 0,
      statusBreakdown,
      recentUsers,
      recentJobs,
    };
  }

  async getUsers(query: {
    page: number;
    limit: number;
    search?: string | undefined;
    role?: string | undefined;
    sortBy: string;
    sortOrder: string;
  }) {
    const where: Prisma.userWhereInput = {};

    if (query.role) {
      where.role = query.role as UserRole;
    }

    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: "insensitive" } },
        { email: { contains: query.search, mode: "insensitive" } },
      ];
    }

    const skip = (query.page - 1) * query.limit;
    const orderBy: Prisma.userOrderByWithRelationInput = {
      [query.sortBy]: query.sortOrder,
    };

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: query.limit,
        orderBy,
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          isActive: true,
          company: true,
          designation: true,
          contactNo: true,
          createdAt: true,
          _count: { select: { applications: true, postedJobs: true } },
        },
      }),
      prisma.user.count({ where }),
    ]);

    return {
      users,
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  async getUserById(userId: number) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        isProfilePublic: true,
        isVerified: true,
        contactNo: true,
        profilePic: true,
        coverImage: true,
        resumes: true,
        company: true,
        designation: true,
        // Subscription
        subscriptionPlan: true,
        subscriptionStatus: true,
        subscriptionStartDate: true,
        subscriptionEndDate: true,
        // Student profile
        bio: true,
        college: true,
        graduationYear: true,
        skills: true,
        location: true,
        jobStatus: true,
        linkedinUrl: true,
        githubUrl: true,
        portfolioUrl: true,
        leetcodeUrl: true,
        projects: true,
        achievements: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            applications: true,
            postedJobs: true,
            atsScores: true,
            companyReviews: true,
            contributions: true,
            usageLogs: true,
            studentBadges: true,
            skillTestAttempts: true,
            verifiedSkills: true,
          },
        },
        adminProfile: { select: { tier: true, isActive: true } },
      },
    });

    if (!user) throw new Error("User not found");
    return user;
  }

  async updateUserStatus(
    userId: number,
    isActive: boolean,
    adminId: number,
    reason?: string,
  ) {
    if (userId === adminId) throw new Error("Cannot modify your own status");

    try {
      return await prisma.user.update({
        where: { id: userId },
        data: { isActive },
        select: { id: true, name: true, email: true, role: true, isActive: true },
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
        throw new Error("User not found");
      }
      throw err;
    }
  }

  async deleteUser(userId: number, adminId: number) {
    if (userId === adminId) throw new Error("Cannot delete yourself");

    // Fetch user + their adminProfile in one round-trip
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { adminProfile: true },
    });
    if (!user) throw new Error("User not found");

    if (user.role === "ADMIN") {
      // Batch: fetch deleter's profile alongside a SUPER_ADMIN count when needed
      const [deleterProfile, superAdminCount] = await Promise.all([
        prisma.adminProfile.findUnique({ where: { userId: adminId } }),
        user.adminProfile?.tier === "SUPER_ADMIN"
          ? prisma.adminProfile.count({ where: { tier: "SUPER_ADMIN", isActive: true } })
          : Promise.resolve(null),
      ]);

      if (!deleterProfile || deleterProfile.tier !== "SUPER_ADMIN")
        throw new Error("Only SUPER_ADMIN can delete admin users");

      if (superAdminCount !== null && superAdminCount <= 1)
        throw new Error("Cannot delete the last SUPER_ADMIN");
    }

    // Invalidate all active sessions before deleting the user
    await prisma.user.update({ where: { id: userId }, data: { tokenVersion: { increment: 1 } } });
    invalidateVersionCache(userId);
    await prisma.user.delete({ where: { id: userId } });
    invalidateVersionCache(userId);
  }

  async getAdminJobs(query: {
    page: number;
    limit: number;
    search?: string | undefined;
    status?: string | undefined;
    recruiterId?: number | undefined;
    sortBy: string;
    sortOrder: string;
  }) {
    const where: Prisma.jobWhereInput = {};

    if (query.status) {
      where.status = query.status as JobStatus;
    }

    if (query.recruiterId) {
      where.recruiterId = query.recruiterId;
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: "insensitive" } },
        { company: { contains: query.search, mode: "insensitive" } },
      ];
    }

    const skip = (query.page - 1) * query.limit;
    const orderBy: Prisma.jobOrderByWithRelationInput = {
      [query.sortBy]: query.sortOrder,
    };

    const [jobs, total] = await Promise.all([
      prisma.job.findMany({
        where,
        skip,
        take: query.limit,
        orderBy,
        select: {
          id: true,
          title: true,
          company: true,
          location: true,
          status: true,
          createdAt: true,
          recruiter: { select: { id: true, name: true, email: true } },
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

  async updateJobStatus(
    jobId: number,
    status: JobStatus,
    adminId: number,
    reason?: string,
  ) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error("Job not found");

    const updated = await prisma.job.update({
      where: { id: jobId },
      data: { status },
    });

    return updated;
  }

  async deleteJob(jobId: number, adminId: number) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error("Job not found");

    await prisma.job.delete({ where: { id: jobId } });
  }

  async getErrorLogs(query: {
    page: number;
    limit: number;
    statusGroup?: "4xx" | "5xx" | undefined;
    method?: string | undefined;
    path?: string | undefined;
  }) {
    const where: Prisma.errorLogWhereInput = {};

    if (query.statusGroup === "4xx") where.statusCode = { gte: 400, lt: 500 };
    else if (query.statusGroup === "5xx") where.statusCode = { gte: 500, lt: 600 };
    if (query.method) where.method = query.method;
    if (query.path) where.path = { contains: query.path, mode: "insensitive" };

    const skip = (query.page - 1) * query.limit;

    const [logs, total] = await Promise.all([
      prisma.errorLog.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.errorLog.count({ where }),
    ]);

    return {
      logs,
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  async getSidebarStats() {
    const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const [pendingContributions, recentErrors] = await Promise.all([
      prisma.companyContribution.count({ where: { status: "PENDING" } }),
      prisma.errorLog.count({ where: { statusCode: { gte: 500 }, createdAt: { gte: since24h } } }),
    ]);
    return { pendingContributions, recentErrors };
  }
}
