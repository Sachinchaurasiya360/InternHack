import { prisma } from "../../database/db.js";
import { hashPassword, comparePassword } from "../../utils/password.utils.js";
import { generateToken } from "../../utils/jwt.utils.js";
import type { Prisma, UserRole, JobStatus, AdminTier } from "@prisma/client";

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

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
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

    const updated = await prisma.companyContribution.update({
      where: { id: contributionId },
      data: { status, adminNotes: adminNotes ?? null, reviewedById: adminId },
    });

    // If approved and it's a new company contribution, create the company
    if (status === "APPROVED" && contribution.type === "NEW_COMPANY") {
      const data = contribution.data as Record<string, unknown>;
      await this.createCompany(adminId, {
        name: data["name"] as string,
        description: data["description"] as string,
        mission: data["mission"] as string | undefined,
        industry: data["industry"] as string,
        size: data["size"] as CreateCompanyInput["size"],
        city: data["city"] as string,
        state: data["state"] as string | undefined,
        address: data["address"] as string | undefined,
        website: data["website"] as string | undefined,
        technologies: data["technologies"] as string[] | undefined,
        hiringStatus: data["hiringStatus"] as boolean | undefined,
        foundedYear: data["foundedYear"] as number | undefined,
        logo: data["logo"] as string | undefined,
      });
    }

    // If approved and it's an add contact contribution, create the contact
    if (
      status === "APPROVED" &&
      contribution.type === "ADD_CONTACT" &&
      contribution.companyId
    ) {
      const data = contribution.data as Record<string, unknown>;
      await prisma.companyContact.create({
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

  // ==================== CAREER MANAGEMENT ====================

  async listAdminCareers() {
    return prisma.career.findMany({
      orderBy: { title: "asc" },
      include: {
        _count: { select: { phases: true, enrollments: true } },
      },
    });
  }

  async getAdminCareer(careerId: number) {
    const career = await prisma.career.findUnique({
      where: { id: careerId },
      include: {
        phases: {
          orderBy: { orderIndex: "asc" },
          include: {
            skills: true,
            resources: true,
            tools: true,
          },
        },
        _count: { select: { enrollments: true } },
      },
    });
    if (!career) throw new Error("Career not found");
    return career;
  }

  async createCareer(input: {
    title: string;
    description: string;
    category: string;
    difficulty: string;
    avgSalary?: string | undefined;
    demandLevel?: string | undefined;
    phases?: Array<{
      title: string;
      description?: string | undefined;
      orderIndex: number;
      durationWeeks?: number | undefined;
      skills?: Array<{ name: string; level?: string | undefined }>;
      resources?: Array<{
        title: string;
        url: string;
        type?: string | undefined;
        free?: boolean | undefined;
      }>;
      tools?: Array<{
        name: string;
        url?: string | undefined;
        category?: string | undefined;
      }>;
    }>;
  }) {
    let slug = generateSlug(input.title);
    const existing = await prisma.career.findUnique({ where: { slug } });
    if (existing) slug = `${slug}-${Date.now()}`;

    return prisma.career.create({
      data: {
        title: input.title,
        slug,
        description: input.description,
        category:
          input.category as Prisma.EnumCareerCategoryFieldUpdateOperationsInput["set"] &
            string,
        difficulty:
          input.difficulty as Prisma.EnumCareerDifficultyFieldUpdateOperationsInput["set"] &
            string,
        avgSalary: input.avgSalary ?? null,
        demandLevel: input.demandLevel ?? null,
        phases: {
          create: (input.phases ?? []).map((phase) => ({
            title: phase.title,
            description: phase.description ?? null,
            orderIndex: phase.orderIndex,
            durationWeeks: phase.durationWeeks ?? null,
            skills: {
              create: (phase.skills ?? []).map((s) => ({
                name: s.name,
                level: (s.level ??
                  "BEGINNER") as Prisma.EnumSkillLevelFieldUpdateOperationsInput["set"] &
                  string,
              })),
            },
            resources: {
              create: (phase.resources ?? []).map((r) => ({
                title: r.title,
                url: r.url,
                type: (r.type ??
                  "ARTICLE") as Prisma.EnumResourceTypeFieldUpdateOperationsInput["set"] &
                  string,
                free: r.free ?? true,
              })),
            },
            tools: {
              create: (phase.tools ?? []).map((t) => ({
                name: t.name,
                url: t.url || null,
                category: t.category ?? null,
              })),
            },
          })),
        },
      },
      include: {
        phases: {
          include: { skills: true, resources: true, tools: true },
        },
      },
    });
  }

  async updateCareer(
    careerId: number,
    input: {
      title?: string | undefined;
      description?: string | undefined;
      category?: string | undefined;
      difficulty?: string | undefined;
      avgSalary?: string | undefined;
      demandLevel?: string | undefined;
      phases?: Array<{
        title: string;
        description?: string | undefined;
        orderIndex: number;
        durationWeeks?: number | undefined;
        skills?: Array<{ name: string; level?: string | undefined }>;
        resources?: Array<{
          title: string;
          url: string;
          type?: string | undefined;
          free?: boolean | undefined;
        }>;
        tools?: Array<{
          name: string;
          url?: string | undefined;
          category?: string | undefined;
        }>;
      }>;
    },
  ) {
    const career = await prisma.career.findUnique({ where: { id: careerId } });
    if (!career) throw new Error("Career not found");

    const data: Prisma.careerUpdateInput = {};
    if (input.title !== undefined) {
      data.title = input.title;
      data.slug = generateSlug(input.title);
    }
    if (input.description !== undefined) data.description = input.description;
    if (input.category !== undefined)
      data.category =
        input.category as Prisma.EnumCareerCategoryFieldUpdateOperationsInput["set"] &
          string;
    if (input.difficulty !== undefined)
      data.difficulty =
        input.difficulty as Prisma.EnumCareerDifficultyFieldUpdateOperationsInput["set"] &
          string;
    if (input.avgSalary !== undefined) data.avgSalary = input.avgSalary || null;
    if (input.demandLevel !== undefined)
      data.demandLevel = input.demandLevel || null;

    // If phases are provided, replace all phases (transaction)
    if (input.phases !== undefined) {
      return prisma.$transaction(async (tx) => {
        // Get existing skill IDs for this career
        const existingPhases = await tx.careerPhase.findMany({
          where: { careerId },
          include: { skills: { select: { id: true } } },
        });
        const existingSkillIds = existingPhases.flatMap((p) =>
          p.skills.map((s) => s.id),
        );

        // Delete student progress for these skills
        if (existingSkillIds.length > 0) {
          await tx.studentSkillProgress.deleteMany({
            where: { skillId: { in: existingSkillIds } },
          });
        }

        // Delete existing phases (cascade to skills, resources, tools)
        await tx.careerPhase.deleteMany({ where: { careerId } });

        // Update career metadata + create new phases
        return tx.career.update({
          where: { id: careerId },
          data: {
            ...data,
            phases: {
              create: input.phases!.map((phase) => ({
                title: phase.title,
                description: phase.description ?? null,
                orderIndex: phase.orderIndex,
                durationWeeks: phase.durationWeeks ?? null,
                skills: {
                  create: (phase.skills ?? []).map((s) => ({
                    name: s.name,
                    level: (s.level ??
                      "BEGINNER") as Prisma.EnumSkillLevelFieldUpdateOperationsInput["set"] &
                      string,
                  })),
                },
                resources: {
                  create: (phase.resources ?? []).map((r) => ({
                    title: r.title,
                    url: r.url,
                    type: (r.type ??
                      "ARTICLE") as Prisma.EnumResourceTypeFieldUpdateOperationsInput["set"] &
                      string,
                    free: r.free ?? true,
                  })),
                },
                tools: {
                  create: (phase.tools ?? []).map((t) => ({
                    name: t.name,
                    url: t.url || null,
                    category: t.category ?? null,
                  })),
                },
              })),
            },
          },
          include: {
            phases: {
              orderBy: { orderIndex: "asc" },
              include: { skills: true, resources: true, tools: true },
            },
          },
        });
      });
    }

    // No phases change, just update metadata
    return prisma.career.update({
      where: { id: careerId },
      data,
      include: {
        phases: {
          orderBy: { orderIndex: "asc" },
          include: { skills: true, resources: true, tools: true },
        },
      },
    });
  }

  async deleteCareer(careerId: number) {
    const career = await prisma.career.findUnique({
      where: { id: careerId },
      include: { phases: { include: { skills: { select: { id: true } } } } },
    });
    if (!career) throw new Error("Career not found");

    return prisma.$transaction(async (tx) => {
      const skillIds = career.phases.flatMap((p) => p.skills.map((s) => s.id));

      // Delete student progress
      if (skillIds.length > 0) {
        await tx.studentSkillProgress.deleteMany({
          where: { skillId: { in: skillIds } },
        });
      }

      // Delete enrollments
      await tx.studentCareer.deleteMany({ where: { careerId } });

      // Delete career (cascades to phases -> skills/resources/tools)
      await tx.career.delete({ where: { id: careerId } });
    });
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
}
