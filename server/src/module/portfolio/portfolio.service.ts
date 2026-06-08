import { prisma } from "../../database/db.js";
import { cacheGet, cacheSet } from "../../utils/cache.js";

const PORTFOLIO_TTL = 300;

export class PortfolioService {
  async getPortfolio(slug: string) {
    const cacheKey = `portfolio:${slug}`;
    const cached = await cacheGet(cacheKey);
    if (cached) return cached;

    let user: any;
    user = await prisma.user.findUnique({
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

    if (!user && /^\d+$/.test(slug)) {
      user = await prisma.user.findUnique({
        where: { id: Number(slug) },
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
    }

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

    const result = {
      ...user,
      memberSinceMonths: memberSince,
      badgeCount: badges.length,
    };

    await cacheSet(cacheKey, result, PORTFOLIO_TTL);
    return result;
  }
}
