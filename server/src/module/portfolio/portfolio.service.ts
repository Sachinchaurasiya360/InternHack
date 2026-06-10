import { prisma } from "../../database/db.js";
import { cacheGet, cacheSet } from "../../utils/cache.js";

interface PortfolioResult {
  id: number;
  name: string;
  profileSlug: string | null;
  profilePic: string | null;
  coverImage: string | null;
  bio: string | null;
  college: string | null;
  graduationYear: number | null;
  skills: string[];
  location: string | null;
  linkedinUrl: string | null;
  githubUrl: string | null;
  portfolioUrl: string | null;
  leetcodeUrl: string | null;
  jobStatus: string | null;
  isProfilePublic: boolean;
  projects: unknown;
  achievements: unknown;
  company: string | null;
  designation: string | null;
  createdAt: Date;
  memberSinceMonths: number;
  badgeCount: number;
}

const PORTFOLIO_TTL = 300;

export class PortfolioService {
  async getPortfolio(slug: string): Promise<PortfolioResult | null> {
    const cacheKey = `portfolio:${slug}`;
    const cached = await cacheGet(cacheKey);
    if (cached) return cached as PortfolioResult;

    const user = await prisma.user.findUnique({
      where: { profileSlug: slug },
      select: {
        id: true,
        name: true,
        profileSlug: true,
        profilePic: true,
        coverImage: true,
        bio: true,
        college: true,
        graduationYear: true,
        skills: true,
        location: true,
        linkedinUrl: true,
        githubUrl: true,
        portfolioUrl: true,
        leetcodeUrl: true,
        jobStatus: true,
        isProfilePublic: true,
        projects: true,
        achievements: true,
        company: true,
        designation: true,
        createdAt: true,
      },
    });

    if (!user || !user.isProfilePublic) return null;

    const now = new Date();
    const memberSince = Math.floor((now.getTime() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24 * 30));

    const badges = await prisma.studentBadge.findMany({
      where: { studentId: user.id },
      select: {
        badge: { select: { id: true, name: true, iconUrl: true, description: true, category: true } },
        earnedAt: true,
      },
      orderBy: { earnedAt: "desc" },
    });

    const result: PortfolioResult = {
      ...user,
      memberSinceMonths: memberSince,
      badgeCount: badges.length,
    };

    await cacheSet(cacheKey, result, PORTFOLIO_TTL);
    return result;
  }
}
