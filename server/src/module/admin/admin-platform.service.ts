import { prisma } from "../../database/db.js";
import { invalidateVersionCache } from "../../middleware/auth.middleware.js";
import { cacheGet, cacheSet } from "../../utils/cache.js";
import { Prisma } from "@prisma/client";
import type { UserRole } from "@prisma/client";

type PlatformDashboardData = {
  totalStudents: number;
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  recentUsers: { id: number; name: string; email: string; role: UserRole; isActive: boolean; createdAt: Date }[];
  recentJobs: {
    id: number;
    company: string | null;
    role: string | null;
    isActive: boolean;
    expiresAt: Date;
    createdAt: Date;
    _count: { applications: number };
  }[];
};

const DASHBOARD_CACHE_KEY = "admin:platform-dashboard";

export class AdminPlatformService {
  async getPlatformDashboard(): Promise<PlatformDashboardData> {
    const cached = await cacheGet<PlatformDashboardData>(DASHBOARD_CACHE_KEY);
    if (cached) return cached;

    const now = new Date();
    const [totalStudents, totalJobs, activeJobs, totalApplications, recentUsers, recentJobs] =
      await Promise.all([
        prisma.user.count({ where: { role: "STUDENT" } }),
        prisma.adminJob.count(),
        prisma.adminJob.count({ where: { isActive: true, expiresAt: { gt: now } } }),
        prisma.externalJobApplication.count(),
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
        prisma.adminJob.findMany({
          take: 10,
          orderBy: { createdAt: "desc" },
          select: {
            id: true,
            company: true,
            role: true,
            isActive: true,
            expiresAt: true,
            createdAt: true,
            _count: { select: { applications: true } },
          },
        }),
      ]);

    const data: PlatformDashboardData = {
      totalStudents,
      totalJobs,
      activeJobs,
      totalApplications,
      recentUsers,
      recentJobs,
    };
    await cacheSet(DASHBOARD_CACHE_KEY, data, 60);
    return data;
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
        linkedinUrl: true,
        githubUrl: true,
        portfolioUrl: true,
        leetcodeUrl: true,
        projects: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            companyReviews: true,
            contributions: true,
            usageLogs: true,
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
