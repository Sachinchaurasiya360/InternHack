import { prisma } from "../../database/db.js";
import { hashPassword, comparePassword } from "../../utils/password.utils.js";
import { generateToken } from "../../utils/jwt.utils.js";
import { invalidateVersionCache } from "../../middleware/auth.middleware.js";
import { switchServiceProvider } from "../../lib/ai-provider-registry.js";
import type { Prisma, UserRole, JobStatus, AdminTier, AIServiceType, AIProviderType } from "@prisma/client";

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

interface CreateCompanyInput {
  name: string;
  description: string;
  mission?: string | undefined;
  industry: string;
  size: "STARTUP" | "SMALL" | "MEDIUM" | "LARGE" | "ENTERPRISE";
  city: string;
  state?: string | undefined;
  address?: string | undefined;
  website?: string | undefined;
  socialLinks?: Record<string, string> | undefined;
  technologies?: string[] | undefined;
  hiringStatus?: boolean | undefined;
  foundedYear?: number | undefined;
  logo?: string | undefined;
  photos?: string[] | undefined;
}

export class AdminService {
  // ==================== ADMIN AUTH ====================

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("Invalid email or password");
    if (user.role !== "ADMIN") throw new Error("Invalid email or password");
    if (!user.isActive) throw new Error("Account is deactivated");

    const isValid = await comparePassword(password, user.password);
    if (!isValid) throw new Error("Invalid email or password");

    const adminProfile = await prisma.adminProfile.findUnique({
      where: { userId: user.id },
    });
    if (!adminProfile || !adminProfile.isActive)
      throw new Error("Admin account is inactive");

    // Increment tokenVersion to invalidate all previous sessions (single-device enforcement)
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { tokenVersion: { increment: 1 } },
      select: { tokenVersion: true },
    });
    invalidateVersionCache(user.id);

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
      tokenVersion: updatedUser.tokenVersion,
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isVerified: true,
        company: user.company,
        designation: user.designation,
      },
      adminProfile: { tier: adminProfile.tier },
      token,
    };
  }

  async createAdmin(
    data: { name: string; email: string; password: string; tier: AdminTier },
    creatorId: number,
  ) {
    const creatorProfile = await prisma.adminProfile.findUnique({
      where: { userId: creatorId },
    });
    if (!creatorProfile || creatorProfile.tier !== "SUPER_ADMIN")
      throw new Error("Only SUPER_ADMIN can create admins");

    const existing = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existing) throw new Error("Email already registered");

    const hashedPassword = await hashPassword(data.password);

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    const adminProfile = await prisma.adminProfile.create({
      data: { userId: user.id, tier: data.tier },
    });

    await this.logActivity(creatorId, "ADMIN_CREATED", "user", user.id, {
      tier: data.tier,
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      adminProfile: { tier: adminProfile.tier },
    };
  }

  // ==================== PLATFORM DASHBOARD ====================

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

  // ==================== USER MANAGEMENT ====================

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
        contactNo: true,
        profilePic: true,
        resumes: true,
        company: true,
        designation: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: { applications: true, postedJobs: true, atsScores: true },
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
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error("User not found");
    if (userId === adminId) throw new Error("Cannot modify your own status");

    const updated = await prisma.user.update({
      where: { id: userId },
      data: { isActive },
      select: { id: true, name: true, email: true, role: true, isActive: true },
    });

    await this.logActivity(
      adminId,
      isActive ? "USER_ACTIVATED" : "USER_DEACTIVATED",
      "user",
      userId,
      { previousStatus: user.isActive, reason },
    );

    return updated;
  }

  async deleteUser(userId: number, adminId: number) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error("User not found");
    if (userId === adminId) throw new Error("Cannot delete yourself");

    if (user.role === "ADMIN") {
      const adminProfile = await prisma.adminProfile.findUnique({
        where: { userId: adminId },
      });
      if (!adminProfile || adminProfile.tier !== "SUPER_ADMIN")
        throw new Error("Only SUPER_ADMIN can delete admin users");

      // Prevent deleting the last SUPER_ADMIN
      const targetProfile = await prisma.adminProfile.findUnique({
        where: { userId },
      });
      if (targetProfile?.tier === "SUPER_ADMIN") {
        const superAdminCount = await prisma.adminProfile.count({
          where: { tier: "SUPER_ADMIN", isActive: true },
        });
        if (superAdminCount <= 1)
          throw new Error("Cannot delete the last SUPER_ADMIN");
      }
    }

    await prisma.user.delete({ where: { id: userId } });
    await this.logActivity(adminId, "USER_DELETED", "user", userId, {
      deletedUser: { name: user.name, email: user.email, role: user.role },
    });
  }

  // ==================== JOB MANAGEMENT ====================

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

    await this.logActivity(adminId, "JOB_STATUS_CHANGED", "job", jobId, {
      previousStatus: job.status,
      newStatus: status,
      reason,
    });

    return updated;
  }

  async deleteJob(jobId: number, adminId: number) {
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error("Job not found");

    await prisma.job.delete({ where: { id: jobId } });
    await this.logActivity(adminId, "JOB_DELETED", "job", jobId, {
      deletedJob: { title: job.title, company: job.company },
    });
  }

  // ==================== ACTIVITY LOGS ====================

  async logActivity(
    adminId: number,
    action: string,
    targetType: string,
    targetId: number,
    details: object = {},
    ipAddress?: string,
  ) {
    await prisma.adminActivityLog.create({
      data: {
        adminId,
        action,
        targetType,
        targetId,
        details: JSON.parse(JSON.stringify(details)),
        ipAddress: ipAddress ?? null,
      },
    });
  }

  async getActivityLogs(query: {
    page: number;
    limit: number;
    adminId?: number | undefined;
    action?: string | undefined;
    targetType?: string | undefined;
  }) {
    const where: Prisma.adminActivityLogWhereInput = {};

    if (query.adminId) where.adminId = query.adminId;
    if (query.action)
      where.action = { contains: query.action, mode: "insensitive" };
    if (query.targetType) where.targetType = query.targetType;

    const skip = (query.page - 1) * query.limit;

    const [logs, total] = await Promise.all([
      prisma.adminActivityLog.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: { createdAt: "desc" },
        include: {
          admin: { select: { id: true, name: true, email: true } },
        },
      }),
      prisma.adminActivityLog.count({ where }),
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

  // ==================== COMPANY DASHBOARD (existing) ====================

  async getDashboardStats() {
    const [
      totalCompanies,
      pendingCompanies,
      totalReviews,
      pendingReviews,
      totalContributions,
      pendingContributions,
      topRated,
      cityStats,
    ] = await Promise.all([
      prisma.company.count({ where: { isApproved: true } }),
      prisma.company.count({ where: { isApproved: false } }),
      prisma.companyReview.count({ where: { status: "APPROVED" } }),
      prisma.companyReview.count({ where: { status: "PENDING" } }),
      prisma.companyContribution.count(),
      prisma.companyContribution.count({ where: { status: "PENDING" } }),
      prisma.company.findMany({
        where: { isApproved: true, reviewCount: { gt: 0 } },
        orderBy: { avgRating: "desc" },
        take: 5,
        select: {
          id: true,
          name: true,
          slug: true,
          avgRating: true,
          reviewCount: true,
          city: true,
        },
      }),
      prisma.company.groupBy({
        by: ["city"],
        where: { isApproved: true },
        _count: { city: true },
        orderBy: { _count: { city: "desc" } },
        take: 10,
      }),
    ]);

    return {
      totalCompanies,
      pendingCompanies,
      totalReviews,
      pendingReviews,
      totalContributions,
      pendingContributions,
      topRated,
      cityStats: cityStats.map((c) => ({ city: c.city, count: c._count.city })),
    };
  }

  async listAllCompanies(page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;
    const [companies, total] = await Promise.all([
      prisma.company.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
        include: {
          _count: { select: { reviews: true, contacts: true } },
          createdBy: { select: { id: true, name: true, email: true } },
        },
      }),
      prisma.company.count(),
    ]);

    return {
      companies,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async createCompany(adminId: number, input: CreateCompanyInput) {
    let slug = generateSlug(input.name);
    const existing = await prisma.company.findUnique({ where: { slug } });
    if (existing) {
      slug = `${slug}-${Date.now()}`;
    }

    return prisma.company.create({
      data: {
        name: input.name,
        slug,
        description: input.description,
        mission: input.mission ?? null,
        industry: input.industry,
        size: input.size,
        city: input.city,
        state: input.state ?? null,
        address: input.address ?? null,
        website: input.website || null,
        socialLinks: (input.socialLinks
          ? JSON.parse(JSON.stringify(input.socialLinks))
          : {}) as Prisma.InputJsonValue,
        technologies: input.technologies ?? [],
        hiringStatus: input.hiringStatus ?? false,
        foundedYear: input.foundedYear ?? null,
        logo: input.logo ?? null,
        photos: input.photos ?? [],
        isApproved: true,
        createdById: adminId,
      },
    });
  }

  async updateCompany(
    companyId: number,
    input: {
      [K in keyof CreateCompanyInput]?: CreateCompanyInput[K] | undefined;
    },
  ) {
    const company = await prisma.company.findUnique({
      where: { id: companyId },
    });
    if (!company) throw new Error("Company not found");

    const data: Prisma.companyUpdateInput = {};
    if (input.name !== undefined) data.name = input.name;
    if (input.description !== undefined) data.description = input.description;
    if (input.mission !== undefined) data.mission = input.mission || null;
    if (input.industry !== undefined) data.industry = input.industry;
    if (input.size !== undefined) data.size = input.size;
    if (input.city !== undefined) data.city = input.city;
    if (input.state !== undefined) data.state = input.state || null;
    if (input.address !== undefined) data.address = input.address || null;
    if (input.website !== undefined) data.website = input.website || null;
    if (input.socialLinks !== undefined)
      data.socialLinks = JSON.parse(
        JSON.stringify(input.socialLinks),
      ) as Prisma.InputJsonValue;
    if (input.technologies !== undefined)
      data.technologies = input.technologies;
    if (input.hiringStatus !== undefined)
      data.hiringStatus = input.hiringStatus;
    if (input.foundedYear !== undefined) data.foundedYear = input.foundedYear;
    if (input.logo !== undefined) data.logo = input.logo || null;
    if (input.photos !== undefined) data.photos = input.photos;

    return prisma.company.update({ where: { id: companyId }, data });
  }

  async approveCompany(companyId: number) {
    const company = await prisma.company.findUnique({
      where: { id: companyId },
    });
    if (!company) throw new Error("Company not found");

    return prisma.company.update({
      where: { id: companyId },
      data: { isApproved: true },
    });
  }

  async deleteCompany(companyId: number) {
    const company = await prisma.company.findUnique({
      where: { id: companyId },
    });
    if (!company) throw new Error("Company not found");

    return prisma.company.delete({ where: { id: companyId } });
  }

  // Reviews management
  async listAllReviews(
    status?: string | undefined,
    page: number = 1,
    limit: number = 20,
  ) {
    const skip = (page - 1) * limit;
    const where: Prisma.companyReviewWhereInput = {};
    if (status && ["PENDING", "APPROVED", "REJECTED"].includes(status)) {
      where.status = status as NonNullable<
        Prisma.EnumReviewStatusFilter["equals"]
      >;
    }

    const [reviews, total] = await Promise.all([
      prisma.companyReview.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
        include: {
          user: { select: { id: true, name: true, email: true } },
          company: { select: { id: true, name: true, slug: true } },
        },
      }),
      prisma.companyReview.count({ where }),
    ]);

    return {
      reviews,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async updateReviewStatus(reviewId: number, status: "APPROVED" | "REJECTED") {
    const review = await prisma.companyReview.findUnique({
      where: { id: reviewId },
    });
    if (!review) throw new Error("Review not found");

    const updated = await prisma.companyReview.update({
      where: { id: reviewId },
      data: { status },
    });

    // Recalculate company avgRating
    await this.recalculateCompanyRating(review.companyId);

    return updated;
  }

  private async recalculateCompanyRating(companyId: number) {
    const result = await prisma.companyReview.aggregate({
      where: { companyId, status: "APPROVED" },
      _avg: { rating: true },
      _count: { rating: true },
    });

    await prisma.company.update({
      where: { id: companyId },
      data: {
        avgRating: Math.round((result._avg.rating ?? 0) * 10) / 10,
        reviewCount: result._count.rating,
      },
    });
  }

  // Contributions management
  async listContributions(
    status?: string | undefined,
    page: number = 1,
    limit: number = 20,
  ) {
    const skip = (page - 1) * limit;
    const where: Prisma.companyContributionWhereInput = {};
    if (status && ["PENDING", "APPROVED", "REJECTED"].includes(status)) {
      where.status = status as NonNullable<
        Prisma.EnumContributionStatusFilter["equals"]
      >;
    }

    const [contributions, total] = await Promise.all([
      prisma.companyContribution.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
        include: {
          user: { select: { id: true, name: true, email: true } },
        },
      }),
      prisma.companyContribution.count({ where }),
    ]);

    return {
      contributions,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async updateContributionStatus(
    contributionId: number,
    adminId: number,
    status: "APPROVED" | "REJECTED",
    adminNotes?: string,
  ) {
    const contribution = await prisma.companyContribution.findUnique({
      where: { id: contributionId },
    });
    if (!contribution) throw new Error("Contribution not found");

    // Wrap approval + side-effects in a transaction for atomicity
    return prisma.$transaction(async (tx) => {
      const updated = await tx.companyContribution.update({
        where: { id: contributionId },
        data: { status, adminNotes: adminNotes ?? null, reviewedById: adminId },
      });

      if (status === "APPROVED" && contribution.type === "NEW_COMPANY") {
        const data = contribution.data as Record<string, unknown>;
        let slug = generateSlug(data["name"] as string);
        const existing = await tx.company.findUnique({ where: { slug } });
        if (existing) slug = `${slug}-${Date.now()}`;

        await tx.company.create({
          data: {
            name: data["name"] as string,
            slug,
            description: data["description"] as string,
            mission: (data["mission"] as string) ?? null,
            industry: data["industry"] as string,
            size: data["size"] as CreateCompanyInput["size"],
            city: data["city"] as string,
            state: (data["state"] as string) ?? null,
            address: (data["address"] as string) ?? null,
            website: (data["website"] as string) || null,
            technologies: (data["technologies"] as string[]) ?? [],
            hiringStatus: (data["hiringStatus"] as boolean) ?? false,
            foundedYear: (data["foundedYear"] as number) ?? null,
            logo: (data["logo"] as string) ?? null,
            photos: [],
            isApproved: true,
            createdById: adminId,
          },
        });
      }

      if (
        status === "APPROVED" &&
        contribution.type === "ADD_CONTACT" &&
        contribution.companyId
      ) {
        const data = contribution.data as Record<string, unknown>;
        await tx.companyContact.create({
          data: {
            companyId: contribution.companyId,
            name: data["name"] as string,
            designation: data["designation"] as string,
            email: (data["email"] as string) || null,
            phone: (data["phone"] as string) || null,
            linkedinUrl: (data["linkedinUrl"] as string) || null,
            addedById: contribution.userId,
          },
        });
      }

      return updated;
    });
  }

  // Direct contact management
  async addContact(
    companyId: number,
    adminId: number,
    input: {
      name: string;
      designation: string;
      email?: string | undefined;
      phone?: string | undefined;
      linkedinUrl?: string | undefined;
      isPublic?: boolean | undefined;
    },
  ) {
    const company = await prisma.company.findUnique({
      where: { id: companyId },
    });
    if (!company) throw new Error("Company not found");

    return prisma.companyContact.create({
      data: {
        companyId,
        name: input.name,
        designation: input.designation,
        email: input.email || null,
        phone: input.phone || null,
        linkedinUrl: input.linkedinUrl || null,
        isPublic: input.isPublic ?? true,
        addedById: adminId,
      },
    });
  }

  async updateContact(
    contactId: number,
    input: Partial<{
      name: string | undefined;
      designation: string | undefined;
      email: string | undefined;
      phone: string | undefined;
      linkedinUrl: string | undefined;
      isPublic: boolean | undefined;
    }>,
  ) {
    const contact = await prisma.companyContact.findUnique({
      where: { id: contactId },
    });
    if (!contact) throw new Error("Contact not found");

    const data: Prisma.companyContactUpdateInput = {};
    if (input.name !== undefined) data.name = input.name;
    if (input.designation !== undefined) data.designation = input.designation;
    if (input.email !== undefined) data.email = input.email;
    if (input.phone !== undefined) data.phone = input.phone;
    if (input.linkedinUrl !== undefined) data.linkedinUrl = input.linkedinUrl;
    if (input.isPublic !== undefined) data.isPublic = input.isPublic;

    return prisma.companyContact.update({ where: { id: contactId }, data });
  }

  async deleteContact(contactId: number) {
    const contact = await prisma.companyContact.findUnique({
      where: { id: contactId },
    });
    if (!contact) throw new Error("Contact not found");

    return prisma.companyContact.delete({ where: { id: contactId } });
  }

  // ==================== OPEN SOURCE REPO MANAGEMENT ====================

  async listRepos(query: {
    page: number;
    limit: number;
    search?: string | undefined;
    language?: string | undefined;
    difficulty?: string | undefined;
    domain?: string | undefined;
    sortBy: string;
    sortOrder: string;
  }) {
    const where: Prisma.opensourceRepoWhereInput = {};

    if (query.language) {
      where.language = { equals: query.language, mode: "insensitive" };
    }
    if (query.difficulty) {
      where.difficulty = query.difficulty as
        | "BEGINNER"
        | "INTERMEDIATE"
        | "ADVANCED";
    }
    if (query.domain) {
      where.domain = query.domain as
        | "AI"
        | "WEB"
        | "DEVOPS"
        | "MOBILE"
        | "BLOCKCHAIN"
        | "DATA"
        | "SECURITY"
        | "CLOUD"
        | "GAMING"
        | "OTHER";
    }
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: "insensitive" } },
        { owner: { contains: query.search, mode: "insensitive" } },
        { description: { contains: query.search, mode: "insensitive" } },
      ];
    }

    const skip = (query.page - 1) * query.limit;
    const orderBy: Prisma.opensourceRepoOrderByWithRelationInput = {
      [query.sortBy]: query.sortOrder,
    };

    const [repos, total] = await Promise.all([
      prisma.opensourceRepo.findMany({
        where,
        skip,
        take: query.limit,
        orderBy,
      }),
      prisma.opensourceRepo.count({ where }),
    ]);

    return {
      repos,
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  async getRepo(repoId: number) {
    const repo = await prisma.opensourceRepo.findUnique({
      where: { id: repoId },
    });
    if (!repo) throw new Error("Repository not found");
    return repo;
  }

  async createRepo(input: {
    name: string;
    owner: string;
    description: string;
    language: string;
    techStack?: string[];
    difficulty?: string;
    domain?: string;
    issueTypes?: string[];
    stars?: number;
    forks?: number;
    openIssues?: number;
    url: string;
    logo?: string | undefined;
    tags?: string[];
    highlights?: string[];
    trending?: boolean;
  }) {
    return prisma.opensourceRepo.create({
      data: {
        name: input.name,
        owner: input.owner,
        description: input.description,
        language: input.language,
        techStack: input.techStack ?? [],
        difficulty: (input.difficulty ??
          "BEGINNER") as Prisma.EnumRepoDifficultyFieldUpdateOperationsInput["set"] &
          string,
        domain: (input.domain ??
          "WEB") as Prisma.EnumRepoDomainFieldUpdateOperationsInput["set"] &
          string,
        issueTypes: input.issueTypes ?? [],
        stars: input.stars ?? 0,
        forks: input.forks ?? 0,
        openIssues: input.openIssues ?? 0,
        url: input.url,
        logo: input.logo ?? null,
        tags: input.tags ?? [],
        highlights: input.highlights ?? [],
        trending: input.trending ?? false,
      },
    });
  }

  async updateRepo(repoId: number, input: Record<string, unknown>) {
    const repo = await prisma.opensourceRepo.findUnique({
      where: { id: repoId },
    });
    if (!repo) throw new Error("Repository not found");

    const data: Prisma.opensourceRepoUpdateInput = {};
    if (input["name"] !== undefined) data.name = input["name"] as string;
    if (input["owner"] !== undefined) data.owner = input["owner"] as string;
    if (input["description"] !== undefined)
      data.description = input["description"] as string;
    if (input["language"] !== undefined)
      data.language = input["language"] as string;
    if (input["techStack"] !== undefined)
      data.techStack = input["techStack"] as string[];
    if (input["difficulty"] !== undefined)
      data.difficulty = input[
        "difficulty"
      ] as Prisma.EnumRepoDifficultyFieldUpdateOperationsInput["set"] & string;
    if (input["domain"] !== undefined)
      data.domain = input[
        "domain"
      ] as Prisma.EnumRepoDomainFieldUpdateOperationsInput["set"] & string;
    if (input["issueTypes"] !== undefined)
      data.issueTypes = input["issueTypes"] as string[];
    if (input["stars"] !== undefined) data.stars = input["stars"] as number;
    if (input["forks"] !== undefined) data.forks = input["forks"] as number;
    if (input["openIssues"] !== undefined)
      data.openIssues = input["openIssues"] as number;
    if (input["url"] !== undefined) data.url = input["url"] as string;
    if (input["logo"] !== undefined)
      data.logo = (input["logo"] as string) || null;
    if (input["tags"] !== undefined) data.tags = input["tags"] as string[];
    if (input["highlights"] !== undefined)
      data.highlights = input["highlights"] as string[];
    if (input["trending"] !== undefined)
      data.trending = input["trending"] as boolean;

    return prisma.opensourceRepo.update({ where: { id: repoId }, data });
  }

  async deleteRepo(repoId: number) {
    const repo = await prisma.opensourceRepo.findUnique({
      where: { id: repoId },
    });
    if (!repo) throw new Error("Repository not found");
    return prisma.opensourceRepo.delete({ where: { id: repoId } });
  }

  // ==================== DSA MANAGEMENT ====================

  async listDsaTopics(query: { page: number; limit: number; search?: string | undefined }) {
    const where: Prisma.dsaTopicWhereInput = {};
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: "insensitive" } },
        { description: { contains: query.search, mode: "insensitive" } },
      ];
    }
    const skip = (query.page - 1) * query.limit;
    const [topics, total] = await Promise.all([
      prisma.dsaTopic.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: { orderIndex: "asc" },
        include: {
          subTopics: {
            orderBy: { orderIndex: "asc" },
            include: { _count: { select: { problems: true } } },
          },
        },
      }),
      prisma.dsaTopic.count({ where }),
    ]);
    return {
      topics,
      pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) },
    };
  }

  async getDsaTopic(topicId: number) {
    const topic = await prisma.dsaTopic.findUnique({
      where: { id: topicId },
      include: {
        subTopics: {
          orderBy: { orderIndex: "asc" },
          include: { problems: { orderBy: { orderIndex: "asc" } } },
        },
      },
    });
    if (!topic) throw new Error("DSA topic not found");
    return topic;
  }

  async createDsaTopic(input: {
    name: string;
    description?: string | undefined;
    orderIndex: number;
    subTopics?: Array<{
      name: string;
      orderIndex: number;
      problems?: Array<{
        title: string; difficulty?: string | undefined; leetcodeUrl?: string | undefined; gfgUrl?: string | undefined;
        articleUrl?: string | undefined; videoUrl?: string | undefined; hackerrankUrl?: string | undefined; codechefUrl?: string | undefined;
        tags?: string[]; companies?: string[]; hints?: string | undefined; sheets?: string[]; orderIndex: number;
      }> | undefined;
    }> | undefined;
  }) {
    const slug = generateSlug(input.name);
    return prisma.dsaTopic.create({
      data: {
        name: input.name,
        slug,
        description: input.description ?? null,
        orderIndex: input.orderIndex,
        subTopics: {
          create: (input.subTopics ?? []).map((st) => ({
            name: st.name,
            orderIndex: st.orderIndex,
            problems: {
              create: (st.problems ?? []).map((p) => ({
                title: p.title,
                difficulty: p.difficulty ?? "Easy",
                leetcodeUrl: p.leetcodeUrl || null,
                gfgUrl: p.gfgUrl || null,
                articleUrl: p.articleUrl || null,
                videoUrl: p.videoUrl || null,
                hackerrankUrl: p.hackerrankUrl || null,
                codechefUrl: p.codechefUrl || null,
                tags: p.tags ?? [],
                companies: p.companies ?? [],
                hints: p.hints ?? null,
                sheets: p.sheets ?? [],
                orderIndex: p.orderIndex,
              })),
            },
          })),
        },
      },
      include: {
        subTopics: { include: { problems: true } },
      },
    });
  }

  async updateDsaTopic(topicId: number, input: {
    name?: string | undefined; description?: string | undefined; orderIndex?: number | undefined;
    subTopics?: Array<{
      name: string; orderIndex: number;
      problems?: Array<{
        title: string; difficulty?: string | undefined; leetcodeUrl?: string | undefined; gfgUrl?: string | undefined;
        articleUrl?: string | undefined; videoUrl?: string | undefined; hackerrankUrl?: string | undefined; codechefUrl?: string | undefined;
        tags?: string[]; companies?: string[]; hints?: string | undefined; sheets?: string[]; orderIndex: number;
      }> | undefined;
    }> | undefined;
  }) {
    const topic = await prisma.dsaTopic.findUnique({ where: { id: topicId } });
    if (!topic) throw new Error("DSA topic not found");

    if (input.subTopics !== undefined) {
      return prisma.$transaction(async (tx) => {
        await tx.dsaSubTopic.deleteMany({ where: { topicId } });
        return tx.dsaTopic.update({
          where: { id: topicId },
          data: {
            name: input.name ?? topic.name,
            slug: input.name ? generateSlug(input.name) : topic.slug,
            description: input.description !== undefined ? (input.description ?? null) : topic.description,
            orderIndex: input.orderIndex ?? topic.orderIndex,
            subTopics: {
              create: input.subTopics!.map((st) => ({
                name: st.name,
                orderIndex: st.orderIndex,
                problems: {
                  create: (st.problems ?? []).map((p) => ({
                    title: p.title,
                    difficulty: p.difficulty ?? "Easy",
                    leetcodeUrl: p.leetcodeUrl || null,
                    gfgUrl: p.gfgUrl || null,
                    articleUrl: p.articleUrl || null,
                    videoUrl: p.videoUrl || null,
                    hackerrankUrl: p.hackerrankUrl || null,
                    codechefUrl: p.codechefUrl || null,
                    tags: p.tags ?? [],
                    companies: p.companies ?? [],
                    hints: p.hints ?? null,
                    sheets: p.sheets ?? [],
                    orderIndex: p.orderIndex,
                  })),
                },
              })),
            },
          },
          include: { subTopics: { include: { problems: true } } },
        });
      });
    }

    const data: Prisma.dsaTopicUpdateInput = {};
    if (input.name !== undefined) { data.name = input.name; data.slug = generateSlug(input.name); }
    if (input.description !== undefined) data.description = input.description ?? null;
    if (input.orderIndex !== undefined) data.orderIndex = input.orderIndex;
    return prisma.dsaTopic.update({ where: { id: topicId }, data, include: { subTopics: { include: { problems: true } } } });
  }

  async deleteDsaTopic(topicId: number) {
    const topic = await prisma.dsaTopic.findUnique({ where: { id: topicId } });
    if (!topic) throw new Error("DSA topic not found");
    return prisma.dsaTopic.delete({ where: { id: topicId } });
  }

  async createDsaProblem(input: {
    title: string; difficulty?: string | undefined; subTopicId: number; orderIndex: number;
    leetcodeUrl?: string | undefined; gfgUrl?: string | undefined; articleUrl?: string | undefined; videoUrl?: string | undefined;
    hackerrankUrl?: string | undefined; codechefUrl?: string | undefined; tags?: string[]; companies?: string[];
    hints?: string | undefined; sheets?: string[];
  }) {
    return prisma.dsaProblem.create({
      data: {
        title: input.title,
        difficulty: input.difficulty ?? "Easy",
        subTopicId: input.subTopicId,
        orderIndex: input.orderIndex,
        leetcodeUrl: input.leetcodeUrl || null,
        gfgUrl: input.gfgUrl || null,
        articleUrl: input.articleUrl || null,
        videoUrl: input.videoUrl || null,
        hackerrankUrl: input.hackerrankUrl || null,
        codechefUrl: input.codechefUrl || null,
        tags: input.tags ?? [],
        companies: input.companies ?? [],
        hints: input.hints ?? null,
        sheets: input.sheets ?? [],
      },
    });
  }

  async updateDsaProblem(problemId: number, input: Record<string, unknown>) {
    const problem = await prisma.dsaProblem.findUnique({ where: { id: problemId } });
    if (!problem) throw new Error("DSA problem not found");
    const data: Prisma.dsaProblemUpdateInput = {};
    if (input["title"] !== undefined) data.title = input["title"] as string;
    if (input["difficulty"] !== undefined) data.difficulty = input["difficulty"] as string;
    if (input["orderIndex"] !== undefined) data.orderIndex = input["orderIndex"] as number;
    if (input["leetcodeUrl"] !== undefined) data.leetcodeUrl = (input["leetcodeUrl"] as string) || null;
    if (input["gfgUrl"] !== undefined) data.gfgUrl = (input["gfgUrl"] as string) || null;
    if (input["articleUrl"] !== undefined) data.articleUrl = (input["articleUrl"] as string) || null;
    if (input["videoUrl"] !== undefined) data.videoUrl = (input["videoUrl"] as string) || null;
    if (input["hackerrankUrl"] !== undefined) data.hackerrankUrl = (input["hackerrankUrl"] as string) || null;
    if (input["codechefUrl"] !== undefined) data.codechefUrl = (input["codechefUrl"] as string) || null;
    if (input["tags"] !== undefined) data.tags = input["tags"] as string[];
    if (input["companies"] !== undefined) data.companies = input["companies"] as string[];
    if (input["hints"] !== undefined) data.hints = (input["hints"] as string) || null;
    if (input["sheets"] !== undefined) data.sheets = input["sheets"] as string[];
    return prisma.dsaProblem.update({ where: { id: problemId }, data });
  }

  async deleteDsaProblem(problemId: number) {
    const problem = await prisma.dsaProblem.findUnique({ where: { id: problemId } });
    if (!problem) throw new Error("DSA problem not found");
    return prisma.dsaProblem.delete({ where: { id: problemId } });
  }

  // ==================== APTITUDE MANAGEMENT ====================

  async listAptitudeCategories(query: { page: number; limit: number; search?: string | undefined }) {
    const where: Prisma.aptitudeCategoryWhereInput = {};
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: "insensitive" } },
        { description: { contains: query.search, mode: "insensitive" } },
      ];
    }
    const skip = (query.page - 1) * query.limit;
    const [categories, total] = await Promise.all([
      prisma.aptitudeCategory.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: { orderIndex: "asc" },
        include: {
          topics: {
            orderBy: { orderIndex: "asc" },
            include: { _count: { select: { questions: true } } },
          },
        },
      }),
      prisma.aptitudeCategory.count({ where }),
    ]);
    return {
      categories,
      pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) },
    };
  }

  async getAptitudeCategory(categoryId: number) {
    const category = await prisma.aptitudeCategory.findUnique({
      where: { id: categoryId },
      include: {
        topics: {
          orderBy: { orderIndex: "asc" },
          include: {
            questions: { orderBy: { id: "asc" } },
            _count: { select: { questions: true } },
          },
        },
      },
    });
    if (!category) throw new Error("Aptitude category not found");
    return category;
  }

  async createAptitudeCategory(input: { name: string; description?: string | undefined; orderIndex?: number | undefined }) {
    const slug = generateSlug(input.name);
    return prisma.aptitudeCategory.create({
      data: {
        name: input.name,
        slug,
        description: input.description ?? null,
        orderIndex: input.orderIndex ?? 0,
      },
    });
  }

  async updateAptitudeCategory(categoryId: number, input: { name?: string | undefined; description?: string | undefined; orderIndex?: number | undefined }) {
    const category = await prisma.aptitudeCategory.findUnique({ where: { id: categoryId } });
    if (!category) throw new Error("Aptitude category not found");
    const data: Prisma.aptitudeCategoryUpdateInput = {};
    if (input.name !== undefined) { data.name = input.name; data.slug = generateSlug(input.name); }
    if (input.description !== undefined) data.description = input.description ?? null;
    if (input.orderIndex !== undefined) data.orderIndex = input.orderIndex;
    return prisma.aptitudeCategory.update({ where: { id: categoryId }, data });
  }

  async deleteAptitudeCategory(categoryId: number) {
    const category = await prisma.aptitudeCategory.findUnique({ where: { id: categoryId } });
    if (!category) throw new Error("Aptitude category not found");
    return prisma.aptitudeCategory.delete({ where: { id: categoryId } });
  }

  async createAptitudeTopic(input: { name: string; description?: string | undefined; orderIndex?: number | undefined; sourceUrl?: string | undefined; categoryId: number }) {
    const slug = generateSlug(input.name);
    return prisma.aptitudeTopic.create({
      data: {
        name: input.name,
        slug,
        description: input.description ?? null,
        orderIndex: input.orderIndex ?? 0,
        sourceUrl: input.sourceUrl || null,
        categoryId: input.categoryId,
      },
    });
  }

  async updateAptitudeTopic(topicId: number, input: { name?: string | undefined; description?: string | undefined; orderIndex?: number | undefined; sourceUrl?: string | undefined; categoryId?: number | undefined }) {
    const topic = await prisma.aptitudeTopic.findUnique({ where: { id: topicId } });
    if (!topic) throw new Error("Aptitude topic not found");
    const data: Prisma.aptitudeTopicUpdateInput = {};
    if (input.name !== undefined) { data.name = input.name; data.slug = generateSlug(input.name); }
    if (input.description !== undefined) data.description = input.description ?? null;
    if (input.orderIndex !== undefined) data.orderIndex = input.orderIndex;
    if (input.sourceUrl !== undefined) data.sourceUrl = input.sourceUrl || null;
    if (input.categoryId !== undefined) data.category = { connect: { id: input.categoryId } };
    return prisma.aptitudeTopic.update({ where: { id: topicId }, data });
  }

  async deleteAptitudeTopic(topicId: number) {
    const topic = await prisma.aptitudeTopic.findUnique({ where: { id: topicId } });
    if (!topic) throw new Error("Aptitude topic not found");
    return prisma.aptitudeTopic.delete({ where: { id: topicId } });
  }

  async listAptitudeQuestions(query: { page: number; limit: number; topicId?: number | undefined; difficulty?: string | undefined; search?: string | undefined }) {
    const where: Prisma.aptitudeQuestionWhereInput = {};
    if (query.topicId) where.topicId = query.topicId;
    if (query.difficulty) where.difficulty = query.difficulty;
    if (query.search) {
      where.question = { contains: query.search, mode: "insensitive" };
    }
    const skip = (query.page - 1) * query.limit;
    const [questions, total] = await Promise.all([
      prisma.aptitudeQuestion.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: { id: "asc" },
        include: { topic: { select: { name: true, slug: true } } },
      }),
      prisma.aptitudeQuestion.count({ where }),
    ]);
    return {
      questions,
      pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) },
    };
  }

  async createAptitudeQuestion(input: {
    question: string; optionA: string; optionB: string; optionC: string; optionD: string;
    optionE?: string | undefined; correctAnswer: string; explanation?: string | undefined; difficulty?: string | undefined;
    companies?: string[]; sourceUrl?: string | undefined; topicId: number;
  }) {
    return prisma.aptitudeQuestion.create({
      data: {
        question: input.question,
        optionA: input.optionA,
        optionB: input.optionB,
        optionC: input.optionC,
        optionD: input.optionD,
        optionE: input.optionE ?? null,
        correctAnswer: input.correctAnswer,
        explanation: input.explanation ?? null,
        difficulty: input.difficulty ?? "MEDIUM",
        companies: input.companies ?? [],
        sourceUrl: input.sourceUrl || null,
        topicId: input.topicId,
      },
    });
  }

  async updateAptitudeQuestion(questionId: number, input: Record<string, unknown>) {
    const question = await prisma.aptitudeQuestion.findUnique({ where: { id: questionId } });
    if (!question) throw new Error("Aptitude question not found");
    const data: Prisma.aptitudeQuestionUpdateInput = {};
    if (input["question"] !== undefined) data.question = input["question"] as string;
    if (input["optionA"] !== undefined) data.optionA = input["optionA"] as string;
    if (input["optionB"] !== undefined) data.optionB = input["optionB"] as string;
    if (input["optionC"] !== undefined) data.optionC = input["optionC"] as string;
    if (input["optionD"] !== undefined) data.optionD = input["optionD"] as string;
    if (input["optionE"] !== undefined) data.optionE = (input["optionE"] as string) || null;
    if (input["correctAnswer"] !== undefined) data.correctAnswer = input["correctAnswer"] as string;
    if (input["explanation"] !== undefined) data.explanation = (input["explanation"] as string) || null;
    if (input["difficulty"] !== undefined) data.difficulty = input["difficulty"] as string;
    if (input["companies"] !== undefined) data.companies = input["companies"] as string[];
    if (input["sourceUrl"] !== undefined) data.sourceUrl = (input["sourceUrl"] as string) || null;
    if (input["topicId"] !== undefined) data.topic = { connect: { id: input["topicId"] as number } };
    return prisma.aptitudeQuestion.update({ where: { id: questionId }, data });
  }

  async deleteAptitudeQuestion(questionId: number) {
    const question = await prisma.aptitudeQuestion.findUnique({ where: { id: questionId } });
    if (!question) throw new Error("Aptitude question not found");
    return prisma.aptitudeQuestion.delete({ where: { id: questionId } });
  }

  // ==================== SKILL TEST MANAGEMENT ====================

  async listAdminSkillTests(query: { page: number; limit: number; search?: string | undefined; difficulty?: string | undefined; isActive?: string | undefined }) {
    const where: Prisma.skillTestWhereInput = {};
    if (query.search) {
      where.OR = [
        { skillName: { contains: query.search, mode: "insensitive" } },
        { title: { contains: query.search, mode: "insensitive" } },
      ];
    }
    if (query.difficulty) where.difficulty = query.difficulty as "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
    if (query.isActive !== undefined) where.isActive = query.isActive === "true";
    const skip = (query.page - 1) * query.limit;
    const [tests, total] = await Promise.all([
      prisma.skillTest.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: { createdAt: "desc" },
        include: { _count: { select: { questions: true, attempts: true } } },
      }),
      prisma.skillTest.count({ where }),
    ]);
    return {
      tests,
      pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) },
    };
  }

  async getAdminSkillTest(testId: number) {
    const test = await prisma.skillTest.findUnique({
      where: { id: testId },
      include: {
        questions: { orderBy: { orderIndex: "asc" } },
        _count: { select: { attempts: true } },
      },
    });
    if (!test) throw new Error("Skill test not found");
    return test;
  }

  async createAdminSkillTest(input: {
    skillName: string; title: string; description?: string | undefined;
    difficulty?: string | undefined; timeLimitSecs?: number | undefined; passThreshold?: number | undefined; isActive?: boolean | undefined;
    questions?: Array<{ question: string; options: string[]; correctIndex: number; explanation?: string | undefined; orderIndex: number }> | undefined;
  }, adminId: number) {
    return prisma.skillTest.create({
      data: {
        skillName: input.skillName,
        title: input.title,
        description: input.description ?? null,
        difficulty: (input.difficulty ?? "INTERMEDIATE") as "BEGINNER" | "INTERMEDIATE" | "ADVANCED",
        timeLimitSecs: input.timeLimitSecs ?? 1800,
        passThreshold: input.passThreshold ?? 70,
        isActive: input.isActive ?? true,
        createdById: adminId,
        questions: {
          create: (input.questions ?? []).map((q) => ({
            question: q.question,
            options: q.options,
            correctIndex: q.correctIndex,
            explanation: q.explanation ?? null,
            orderIndex: q.orderIndex,
          })),
        },
      },
      include: { questions: true },
    });
  }

  async updateAdminSkillTest(testId: number, input: {
    skillName?: string | undefined; title?: string | undefined; description?: string | undefined;
    difficulty?: string | undefined; timeLimitSecs?: number | undefined; passThreshold?: number | undefined; isActive?: boolean | undefined;
    questions?: Array<{ question: string; options: string[]; correctIndex: number; explanation?: string | undefined; orderIndex: number }> | undefined;
  }) {
    const test = await prisma.skillTest.findUnique({ where: { id: testId } });
    if (!test) throw new Error("Skill test not found");

    if (input.questions !== undefined) {
      return prisma.$transaction(async (tx) => {
        await tx.skillTestQuestion.deleteMany({ where: { testId } });
        return tx.skillTest.update({
          where: { id: testId },
          data: {
            skillName: input.skillName ?? test.skillName,
            title: input.title ?? test.title,
            description: input.description !== undefined ? (input.description ?? null) : test.description,
            difficulty: input.difficulty ? (input.difficulty as "BEGINNER" | "INTERMEDIATE" | "ADVANCED") : test.difficulty,
            timeLimitSecs: input.timeLimitSecs ?? test.timeLimitSecs,
            passThreshold: input.passThreshold ?? test.passThreshold,
            isActive: input.isActive ?? test.isActive,
            questions: {
              create: input.questions!.map((q) => ({
                question: q.question,
                options: q.options,
                correctIndex: q.correctIndex,
                explanation: q.explanation ?? null,
                orderIndex: q.orderIndex,
              })),
            },
          },
          include: { questions: true },
        });
      });
    }

    const data: Prisma.skillTestUpdateInput = {};
    if (input.skillName !== undefined) data.skillName = input.skillName;
    if (input.title !== undefined) data.title = input.title;
    if (input.description !== undefined) data.description = input.description ?? null;
    if (input.difficulty !== undefined) data.difficulty = input.difficulty as "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
    if (input.timeLimitSecs !== undefined) data.timeLimitSecs = input.timeLimitSecs;
    if (input.passThreshold !== undefined) data.passThreshold = input.passThreshold;
    if (input.isActive !== undefined) data.isActive = input.isActive;
    return prisma.skillTest.update({ where: { id: testId }, data, include: { questions: true } });
  }

  async deleteAdminSkillTest(testId: number) {
    const test = await prisma.skillTest.findUnique({ where: { id: testId } });
    if (!test) throw new Error("Skill test not found");
    return prisma.skillTest.delete({ where: { id: testId } });
  }

  async toggleSkillTestActive(testId: number, isActive: boolean) {
    const test = await prisma.skillTest.findUnique({ where: { id: testId } });
    if (!test) throw new Error("Skill test not found");
    return prisma.skillTest.update({ where: { id: testId }, data: { isActive } });
  }

  // ==================== HACKATHON MANAGEMENT ====================

  async listHackathons(query: {
    page: number; limit: number; search?: string;
    status?: string; locationType?: string;
    sortBy: string; sortOrder: string;
  }) {
    const where: Prisma.hackathonWhereInput = {};
    if (query.status) where.status = query.status;
    if (query.locationType) where.locationType = query.locationType;
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: "insensitive" } },
        { organizer: { contains: query.search, mode: "insensitive" } },
        { ecosystem: { contains: query.search, mode: "insensitive" } },
      ];
    }
    const skip = (query.page - 1) * query.limit;
    const orderBy: Prisma.hackathonOrderByWithRelationInput = { [query.sortBy]: query.sortOrder };
    const [hackathons, total] = await Promise.all([
      prisma.hackathon.findMany({ where, skip, take: query.limit, orderBy }),
      prisma.hackathon.count({ where }),
    ]);
    return {
      hackathons,
      pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) },
    };
  }

  async getHackathon(id: number) {
    const hackathon = await prisma.hackathon.findUnique({ where: { id } });
    if (!hackathon) throw new Error("Hackathon not found");
    return hackathon;
  }

  async createHackathon(input: {
    name: string; organizer: string; logo?: string; description: string;
    prizePool: string; startDate: string; endDate: string; location: string;
    locationType: string; website?: string; tags: string[]; tracks: string[];
    eligibility?: string; status: string; ecosystem: string; highlights: string[];
  }) {
    return prisma.hackathon.create({ data: input });
  }

  async updateHackathon(id: number, input: Record<string, unknown>) {
    const hackathon = await prisma.hackathon.findUnique({ where: { id } });
    if (!hackathon) throw new Error("Hackathon not found");
    const data: Prisma.hackathonUpdateInput = {};
    if (input["name"] !== undefined) data.name = input["name"] as string;
    if (input["organizer"] !== undefined) data.organizer = input["organizer"] as string;
    if (input["logo"] !== undefined) data.logo = (input["logo"] as string) || null;
    if (input["description"] !== undefined) data.description = input["description"] as string;
    if (input["prizePool"] !== undefined) data.prizePool = input["prizePool"] as string;
    if (input["startDate"] !== undefined) data.startDate = input["startDate"] as string;
    if (input["endDate"] !== undefined) data.endDate = input["endDate"] as string;
    if (input["location"] !== undefined) data.location = input["location"] as string;
    if (input["locationType"] !== undefined) data.locationType = input["locationType"] as string;
    if (input["website"] !== undefined) data.website = (input["website"] as string) || null;
    if (input["tags"] !== undefined) data.tags = input["tags"] as string[];
    if (input["tracks"] !== undefined) data.tracks = input["tracks"] as string[];
    if (input["eligibility"] !== undefined) data.eligibility = (input["eligibility"] as string) || null;
    if (input["status"] !== undefined) data.status = input["status"] as string;
    if (input["ecosystem"] !== undefined) data.ecosystem = input["ecosystem"] as string;
    if (input["highlights"] !== undefined) data.highlights = input["highlights"] as string[];
    return prisma.hackathon.update({ where: { id }, data });
  }

  async deleteHackathon(id: number) {
    const hackathon = await prisma.hackathon.findUnique({ where: { id } });
    if (!hackathon) throw new Error("Hackathon not found");
    return prisma.hackathon.delete({ where: { id } });
  }

  // ==================== AI PROVIDER MANAGEMENT ====================

  async getAIServiceConfigs() {
    const configs = await prisma.aiServiceConfig.findMany({
      orderBy: { service: "asc" },
    });

    const envStatus: Record<string, boolean> = {
      GEMINI: !!process.env["GEMINI_API_KEY"],
      GROQ: !!process.env["GROQ_API_KEY"],
      OPENROUTER: !!process.env["OPENROUTER_API_KEY"],
      CODESTRAL: !!process.env["CODESTRAL_API_KEY"],
    };

    return { configs, envStatus };
  }

  async switchAIServiceProvider(
    service: AIServiceType,
    provider: AIProviderType,
    modelName: string,
    adminId: number,
  ) {
    await switchServiceProvider(service, provider, modelName);

    await this.logActivity(adminId, "AI_PROVIDER_SWITCHED", "ai_config", 0, {
      service,
      provider,
      modelName,
    });

    return prisma.aiServiceConfig.findUnique({ where: { service } });
  }

  async getAIRequestStats(range: "day" | "week" | "month") {
    const since = new Date();
    if (range === "day") since.setDate(since.getDate() - 1);
    else if (range === "week") since.setDate(since.getDate() - 7);
    else since.setMonth(since.getMonth() - 1);

    const [byProvider, byService, totalRequests, avgLatency, errorCount] =
      await Promise.all([
        prisma.aiRequestLog.groupBy({
          by: ["providerName"],
          where: { createdAt: { gte: since } },
          _count: { id: true },
          _avg: { latencyMs: true },
        }),
        prisma.aiRequestLog.groupBy({
          by: ["service"],
          where: { createdAt: { gte: since } },
          _count: { id: true },
        }),
        prisma.aiRequestLog.count({ where: { createdAt: { gte: since } } }),
        prisma.aiRequestLog.aggregate({
          where: { createdAt: { gte: since } },
          _avg: { latencyMs: true },
        }),
        prisma.aiRequestLog.count({
          where: { createdAt: { gte: since }, success: false },
        }),
      ]);

    return {
      byProvider: byProvider.map((p) => ({
        provider: p.providerName,
        count: p._count.id,
        avgLatencyMs: Math.round(p._avg.latencyMs ?? 0),
      })),
      byService: byService.map((s) => ({
        service: s.service,
        count: s._count.id,
      })),
      totalRequests,
      avgLatencyMs: Math.round(avgLatency._avg.latencyMs ?? 0),
      errorCount,
      errorRate: totalRequests > 0 ? Math.round((errorCount / totalRequests) * 100) : 0,
    };
  }

  // ==================== ADMIN EXTERNAL JOBS ====================

  private generateSlug(company?: string, role?: string): string {
    const base = [company, role].filter(Boolean).join(" ") || "job";
    const slug = base.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const suffix = Math.random().toString(36).slice(2, 6);
    return `${slug}-${suffix}`;
  }

  async createExternalJob(data: {
    company?: string; role?: string; description?: string;
    salary?: string; location?: string; applyLink?: string; tags?: string[];
  }) {
    const expiresAt = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000); // 10 days
    const slug = this.generateSlug(data.company, data.role);
    return prisma.adminJob.create({
      data: {
        slug,
        company: data.company || null,
        role: data.role || null,
        description: data.description || null,
        salary: data.salary || null,
        location: data.location || null,
        applyLink: data.applyLink || null,
        tags: data.tags ?? [],
        expiresAt,
      },
    });
  }

  async listExternalJobs(query: { page: number; limit: number; search?: string }) {
    const where: Record<string, unknown> = {};
    if (query.search) {
      where.OR = [
        { company: { contains: query.search, mode: "insensitive" } },
        { role: { contains: query.search, mode: "insensitive" } },
      ];
    }
    const [jobs, total] = await Promise.all([
      prisma.adminJob.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.adminJob.count({ where }),
    ]);
    return { jobs, total, totalPages: Math.ceil(total / query.limit), page: query.page };
  }

  async updateExternalJob(id: number, data: Record<string, unknown>) {
    const job = await prisma.adminJob.findUnique({ where: { id } });
    if (!job) throw new Error("Job not found");
    return prisma.adminJob.update({ where: { id }, data });
  }

  async deleteExternalJob(id: number) {
    const job = await prisma.adminJob.findUnique({ where: { id } });
    if (!job) throw new Error("Job not found");
    return prisma.adminJob.delete({ where: { id } });
  }

  async getPublicExternalJobs(query: { page: number; limit: number; search?: string }) {
    const now = new Date();
    const where: Record<string, unknown> = {
      isActive: true,
      expiresAt: { gt: now },
    };
    if (query.search) {
      where.OR = [
        { company: { contains: query.search, mode: "insensitive" } },
        { role: { contains: query.search, mode: "insensitive" } },
      ];
    }
    const [jobs, total] = await Promise.all([
      prisma.adminJob.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
        select: {
          id: true, slug: true, company: true, role: true, description: true,
          salary: true, location: true, applyLink: true, tags: true,
          expiresAt: true, createdAt: true,
        },
      }),
      prisma.adminJob.count({ where }),
    ]);
    return { jobs, total, totalPages: Math.ceil(total / query.limit), page: query.page };
  }

  async getPublicExternalJobBySlug(slug: string) {
    const now = new Date();
    return prisma.adminJob.findFirst({
      where: { slug, isActive: true, expiresAt: { gt: now } },
      select: {
        id: true, slug: true, company: true, role: true, description: true,
        salary: true, location: true, applyLink: true, tags: true,
        expiresAt: true, createdAt: true,
      },
    });
  }
}
