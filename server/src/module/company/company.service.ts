import { prisma } from "../../database/db.js";
import type { Prisma } from "@prisma/client";

interface ListCompaniesParams {
  city?: string | undefined;
  industry?: string | undefined;
  size?: string | undefined;
  hiring?: string | undefined;
  minRating?: string | undefined;
  search?: string | undefined;
  page?: string | undefined;
  limit?: string | undefined;
}

interface SubmitReviewInput {
  rating: number;
  title: string;
  content: string;
  pros?: string | undefined;
  cons?: string | undefined;
  interviewExperience?: string | undefined;
  workCulture?: string | undefined;
  salaryInsights?: string | undefined;
}

interface ContributeCompanyInput {
  name: string;
  description: string;
  mission?: string | undefined;
  industry: string;
  size: "STARTUP" | "SMALL" | "MEDIUM" | "LARGE" | "ENTERPRISE";
  city: string;
  state?: string | undefined;
  address?: string | undefined;
  website?: string | undefined;
  technologies?: string[] | undefined;
  hiringStatus?: boolean | undefined;
  foundedYear?: number | undefined;
  logo?: string | undefined;
}

interface AddContactInput {
  name: string;
  designation: string;
  email?: string | undefined;
  phone?: string | undefined;
  linkedinUrl?: string | undefined;
}

export class CompanyService {
  async listCompanies(params: ListCompaniesParams) {
    const page = Math.max(1, parseInt(params.page || "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(params.limit || "12", 10)));
    const skip = (page - 1) * limit;

    const where: Prisma.companyWhereInput = { isApproved: true };

    if (params.city) {
      where.city = { equals: params.city, mode: "insensitive" };
    }
    if (params.industry) {
      where.industry = { equals: params.industry, mode: "insensitive" };
    }
    if (params.size) {
      where.size = params.size as "STARTUP" | "SMALL" | "MEDIUM" | "LARGE" | "ENTERPRISE";
    }
    if (params.hiring === "true") {
      where.hiringStatus = true;
    }
    if (params.minRating) {
      const rating = parseFloat(params.minRating);
      if (!isNaN(rating)) {
        where.avgRating = { gte: rating };
      }
    }
    if (params.search) {
      where.OR = [
        { name: { contains: params.search, mode: "insensitive" } },
        { industry: { contains: params.search, mode: "insensitive" } },
        { description: { contains: params.search, mode: "insensitive" } },
      ];
    }

    const [companies, total] = await Promise.all([
      prisma.company.findMany({
        where,
        orderBy: { avgRating: "desc" },
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          slug: true,
          logo: true,
          description: true,
          industry: true,
          size: true,
          city: true,
          state: true,
          technologies: true,
          hiringStatus: true,
          avgRating: true,
          reviewCount: true,
        },
      }),
      prisma.company.count({ where }),
    ]);

    return {
      companies,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getCompanyBySlug(slug: string) {
    const company = await prisma.company.findUnique({
      where: { slug },
      include: {
        contacts: {
          where: { isPublic: true },
          orderBy: { createdAt: "asc" },
        },
        _count: { select: { reviews: { where: { status: "APPROVED" } } } },
      },
    });

    if (!company || !company.isApproved) {
      throw new Error("Company not found");
    }

    return company;
  }

  async getCompanyReviews(slug: string, sort: string = "latest") {
    const company = await prisma.company.findUnique({
      where: { slug },
      select: { id: true, isApproved: true },
    });

    if (!company || !company.isApproved) {
      throw new Error("Company not found");
    }

    const orderBy: Prisma.companyReviewOrderByWithRelationInput =
      sort === "highest" ? { rating: "desc" } :
      sort === "lowest" ? { rating: "asc" } :
      { createdAt: "desc" };

    return prisma.companyReview.findMany({
      where: { companyId: company.id, status: "APPROVED" },
      orderBy,
      include: {
        user: { select: { id: true, name: true, profilePic: true } },
      },
    });
  }

  async getCitiesWithCounts() {
    const cities = await prisma.company.groupBy({
      by: ["city"],
      where: { isApproved: true },
      _count: { city: true },
      orderBy: { _count: { city: "desc" } },
    });

    return cities.map((c) => ({ city: c.city, count: c._count.city }));
  }

  async submitReview(slug: string, userId: number, input: SubmitReviewInput) {
    const company = await prisma.company.findUnique({
      where: { slug },
      select: { id: true, isApproved: true },
    });

    if (!company || !company.isApproved) {
      throw new Error("Company not found");
    }

    const existing = await prisma.companyReview.findFirst({
      where: { companyId: company.id, userId, status: { not: "REJECTED" } },
    });

    if (existing) {
      throw new Error("You have already submitted a review for this company");
    }

    return prisma.companyReview.create({
      data: {
        companyId: company.id,
        userId,
        rating: input.rating,
        title: input.title,
        content: input.content,
        pros: input.pros ?? null,
        cons: input.cons ?? null,
        interviewExperience: input.interviewExperience ?? null,
        workCulture: input.workCulture ?? null,
        salaryInsights: input.salaryInsights ?? null,
      },
    });
  }

  async contributeCompany(userId: number, input: ContributeCompanyInput) {
    return prisma.companyContribution.create({
      data: {
        userId,
        type: "NEW_COMPANY",
        data: JSON.parse(JSON.stringify(input)) as Prisma.InputJsonValue,
      },
    });
  }

  async suggestEdit(slug: string, userId: number, changes: Record<string, unknown>, reason: string) {
    const company = await prisma.company.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!company) throw new Error("Company not found");

    return prisma.companyContribution.create({
      data: {
        userId,
        type: "EDIT_COMPANY",
        companyId: company.id,
        data: JSON.parse(JSON.stringify({ changes, reason })) as Prisma.InputJsonValue,
      },
    });
  }

  async addContactContribution(slug: string, userId: number, input: AddContactInput) {
    const company = await prisma.company.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!company) throw new Error("Company not found");

    return prisma.companyContribution.create({
      data: {
        userId,
        type: "ADD_CONTACT",
        companyId: company.id,
        data: JSON.parse(JSON.stringify(input)) as Prisma.InputJsonValue,
      },
    });
  }
}
