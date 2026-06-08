import { prisma } from "../../database/db.js";
import { slugify } from "../../utils/slug.utils.js";
import type { Prisma } from "@prisma/client";

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

export class AdminCompanyService {
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
    let slug = slugify(input.name);
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

    return prisma.$transaction(async (tx) => {
      const updated = await tx.companyContribution.update({
        where: { id: contributionId },
        data: { status, adminNotes: adminNotes ?? null, reviewedById: adminId },
      });

      if (status === "APPROVED" && contribution.type === "NEW_COMPANY") {
        const data = contribution.data as Record<string, unknown>;
        let slug = slugify(data["name"] as string);
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
}
