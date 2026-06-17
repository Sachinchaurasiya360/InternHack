import { prisma } from "../../database/db.js";
import { slugify } from "../../utils/slug.utils.js";
import crypto from "crypto";

const GUIDE_NAMES = [
  "Open Source Guide",
  "Hackathon Guide",
  "GSoC Proposal Guide",
  "Codebase Guide",
  "CI/CD Guide",
  "First PR Guide",
];

export class AmbassadorService {
  // ─── Eligibility Check ─────────────────────────────────────────

  async checkEligibility(userId: number): Promise<{
    eligible: boolean;
    reason?: string;
    details: {
      guidesCompleted: number;
      reposContributed: number;
      accountAgeDays: number;
      leaderboardRank: number | null;
      inTop100: boolean;
    };
  }> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, createdAt: true },
    });
    if (!user) {
      return { eligible: false, reason: "User not found", details: { guidesCompleted: 0, reposContributed: 0, accountAgeDays: 0, leaderboardRank: null, inTop100: false } };
    }

    const accountAgeDays = Math.floor(
      (Date.now() - user.createdAt.getTime()) / (1000 * 60 * 60 * 24),
    );

    const certCount = await prisma.guideCertificate.count({
      where: { userId, guideName: { in: GUIDE_NAMES } },
    });
    const guidesCompleted = certCount;

    const github = await prisma.githubConnection.findUnique({
      where: { userId },
      select: { reposContributed: true },
    });
    const githubRepoCount = github?.reposContributed ?? 0;

    const approvedRepos = await prisma.repoRequest.count({
      where: { userId, status: "APPROVED" },
    });
    const reposContributed = githubRepoCount + approvedRepos;

    // Compute rank in a single SQL statement using ROW_NUMBER() rather than
    // loading all rows into memory (avoids N connections in the cron loop).
    const rankRows = await prisma.$queryRaw<{ rank: bigint }[]>`
      SELECT rank
      FROM (
        SELECT "userId",
               ROW_NUMBER() OVER (ORDER BY "reposContributed" DESC) AS rank
        FROM   "githubConnection"
        WHERE  "reposContributed" > 0
      ) ranked
      WHERE "userId" = ${userId}
    `;
    const leaderboardRank = rankRows.length > 0 ? Number(rankRows[0]!.rank) : null;
    const inTop100 = leaderboardRank !== null && leaderboardRank <= 100;

    const accountAgeOk = accountAgeDays >= 30;

    const eligible =
      guidesCompleted >= 6 &&
      reposContributed >= 3 &&
      accountAgeOk &&
      inTop100;

    return {
      eligible,
      details: {
        guidesCompleted,
        reposContributed,
        accountAgeDays,
        leaderboardRank,
        inTop100,
      },
    };
  }

  // ─── Auto-Enroll & Grant Premium ───────────────────────────────

  async autoEnrollAndGrant(userId: number) {
    const existing = await prisma.ambassador.findUnique({
      where: { userId },
    });
    if (existing) return existing;

    const eligibility = await this.checkEligibility(userId);
    if (!eligibility.eligible) {
      throw new Error("User does not meet ambassador eligibility criteria");
    }

    const ambassador = await prisma.ambassador.create({
      data: {
        userId,
        status: "APPROVED",
        guidesCompleted: eligibility.details.guidesCompleted,
        reposContributed: eligibility.details.reposContributed,
        leaderboardRank: eligibility.details.leaderboardRank,
        accountAgeDays: eligibility.details.accountAgeDays,
        premiumGranted: true,
        premiumGrantedAt: new Date(),
        appliedAt: new Date(),
      },
    });

    await this.grantPremiumSubscription(userId);
    await this.awardAmbassadorBadge(userId);

    await this.generateReferralLink(ambassador.id);

    return ambassador;
  }

  // ─── Premium Grant ─────────────────────────────────────────────

  async grantPremiumSubscription(userId: number) {
    await prisma.user.update({
      where: { id: userId },
      data: {
        subscriptionPlan: "MONTHLY",
        subscriptionStatus: "ACTIVE",
        subscriptionStartDate: new Date(),
        subscriptionEndDate: new Date(
          Date.now() + 365 * 24 * 60 * 60 * 1000,
        ),
      },
    });

    const { invalidateUserTierCache } = await import(
      "../../utils/premium.utils.js"
    );
    await invalidateUserTierCache(userId);
  }

  // ─── Ambassador Badge ──────────────────────────────────────────

  async awardAmbassadorBadge(userId: number) {
    let badge = await prisma.badge.findUnique({
      where: { slug: "oss-ambassador" },
    });

    if (!badge) {
      badge = await prisma.badge.create({
        data: {
          name: "OSS Ambassador",
          slug: "oss-ambassador",
          description:
            "Awarded to students who complete all 6 guides, contribute to 3+ repos, and rank in the top 100.",
          category: "CONTRIBUTION",
          criteria: { type: "ambassador_auto" },
          isActive: true,
        },
      });
    }

    await prisma.studentBadge
      .create({
        data: { studentId: userId, badgeId: badge.id },
      })
      .catch(() => {});
  }

  // ─── Referral Links ────────────────────────────────────────────

  async generateReferralLink(ambassadorId: number, label?: string) {
    const ambassador = await prisma.ambassador.findUnique({
      where: { id: ambassadorId },
      include: { user: { select: { id: true, name: true } } },
    });
    if (!ambassador) throw new Error("Ambassador not found");

    const raw = `${ambassador.user.name}-${ambassador.user.id}-${crypto.randomBytes(4).toString("hex")}`;
    const code = slugify(raw).slice(0, 40) || `amb-${ambassador.user.id}-${Date.now()}`;

    const baseUrl = process.env["CLIENT_URL"] || "http://localhost:5173";
    const url = `${baseUrl}/register?ref=${code}`;

    return prisma.referralLink.create({
      data: {
        ambassadorId,
        code,
        url,
        label: label || null,
      },
    });
  }

  async getAmbassadorReferralLinks(userId: number) {
    const ambassador = await prisma.ambassador.findUnique({
      where: { userId },
      include: {
        referralLinks: {
          include: { _count: { select: { conversions: true } } },
          orderBy: { createdAt: "desc" },
        },
      },
    });
    return ambassador?.referralLinks ?? [];
  }

  async trackReferralClick(code: string) {
    await prisma.referralLink.updateMany({
      where: { code, isActive: true },
      data: { clicks: { increment: 1 } },
    });
  }

  // ─── Referral Conversion (called during signup) ────────────────

  async recordReferralConversion(code: string, referredUserId: number) {
    const link = await prisma.referralLink.findUnique({
      where: { code },
      select: { id: true, ambassadorId: true },
    });
    if (!link) return null;

    // upsert is atomic — concurrent sign-ups won't both pass the existence
    // check and then collide on the unique constraint.
    try {
      await prisma.referralConversion.upsert({
        where: { referredUserId },
        update: {},
        create: { referralLinkId: link.id, referredUserId },
      });
    } catch (err) {
      // Swallow unique-violation races; never surface to the caller
      console.error("[Ambassador] referralConversion upsert race:", err);
      return null;
    }

    return link.ambassadorId;
  }

  // ─── Ambassador CRUD ───────────────────────────────────────────

  async listAmbassadors(query: {
    status?: string;
    search?: string;
    page: number;
    limit: number;
  }) {
    const where: Record<string, unknown> = {};

    if (query.status) where.status = query.status;

    if (query.search) {
      where.user = {
        OR: [
          { name: { contains: query.search, mode: "insensitive" } },
          { email: { contains: query.search, mode: "insensitive" } },
        ],
      };
    }

    const skip = (query.page - 1) * query.limit;

    const [ambassadors, total] = await Promise.all([
      prisma.ambassador.findMany({
        where: where as any,
        skip,
        take: query.limit,
        orderBy: { createdAt: "desc" },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              profilePic: true,
              createdAt: true,
            },
          },
          reviewer: {
            select: { id: true, name: true },
          },
          _count: {
            select: {
              referralLinks: true,
              shares: true,
              spotlights: true,
            },
          },
        },
      }),
      prisma.ambassador.count({ where: where as any }),
    ]);

    return {
      ambassadors,
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  async getAmbassadorDetail(ambassadorId: number) {
    return prisma.ambassador.findUnique({
      where: { id: ambassadorId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            profilePic: true,
            createdAt: true,
          },
        },
        reviewer: { select: { id: true, name: true } },
        referralLinks: {
          include: { _count: { select: { conversions: true } } },
          orderBy: { createdAt: "desc" },
        },
        shares: { orderBy: { createdAt: "desc" } },
        spotlights: { orderBy: { year: "desc", month: "desc" } },
      },
    });
  }

  async reviewAmbassador(
    ambassadorId: number,
    status: "APPROVED" | "REJECTED",
    reviewedBy: number,
    adminNotes?: string,
  ) {
    const data: Record<string, unknown> = {
      status,
      reviewedAt: new Date(),
      reviewedBy,
    };
    if (adminNotes !== undefined) data.adminNotes = adminNotes;

    if (status === "APPROVED") {
      data.premiumGranted = true;
      data.premiumGrantedAt = new Date();
    }

    const ambassador = await prisma.ambassador.update({
      where: { id: ambassadorId },
      data: data as any,
      include: { user: { select: { id: true } } },
    });

    if (status === "APPROVED") {
      await this.grantPremiumSubscription(ambassador.user.id);
      await this.awardAmbassadorBadge(ambassador.user.id);

      const existingLinks = await prisma.referralLink.count({
        where: { ambassadorId },
      });
      if (existingLinks === 0) {
        await this.generateReferralLink(ambassadorId);
      }
    }

    return ambassador;
  }

  // ─── Social Shares ─────────────────────────────────────────────

  async listShares(ambassadorId: number) {
    return prisma.ambassadorShare.findMany({
      where: { ambassadorId },
      orderBy: { createdAt: "desc" },
      include: { reviewer: { select: { id: true, name: true } } },
    });
  }

  async getShareById(shareId: number) {
    return prisma.ambassadorShare.findUnique({ where: { id: shareId } });
  }

  async submitShare(ambassadorId: number, platform: string, url: string, description?: string) {
    return prisma.ambassadorShare.create({
      data: { ambassadorId, platform, url, description },
    });
  }

  async reviewShare(
    shareId: number,
    status: "APPROVED" | "REJECTED",
    reviewedBy: number,
    adminNotes?: string,
  ) {
    return prisma.ambassadorShare.update({
      where: { id: shareId },
      data: {
        status,
        reviewedAt: new Date(),
        reviewedBy,
        ...(adminNotes !== undefined ? { adminNotes } : {}),
      },
    });
  }

  // ─── Spotlight ─────────────────────────────────────────────────

  async listSpotlights(month?: string, year?: number) {
    const where: Record<string, unknown> = {};
    if (month) where.month = month;
    if (year) where.year = year;

    return prisma.ambassadorSpotlight.findMany({
      where: where as any,
      orderBy: [{ year: "desc" }, { month: "desc" }],
      include: {
        ambassador: {
          include: {
            user: {
              select: { id: true, name: true, profilePic: true },
            },
          },
        },
      },
    });
  }

  async createSpotlight(data: {
    ambassadorId: number;
    month: string;
    year: number;
    title?: string;
    description?: string;
    isActive?: boolean;
  }) {
    return prisma.ambassadorSpotlight.create({ data });
  }

  async updateSpotlight(id: number, data: {
    title?: string;
    description?: string;
    isActive?: boolean;
  }) {
    return prisma.ambassadorSpotlight.update({ where: { id }, data });
  }

  async deleteSpotlight(id: number) {
    return prisma.ambassadorSpotlight.delete({ where: { id } });
  }

  // ─── Referrer Leaderboard ──────────────────────────────────────

  async getTopReferrers(month?: string, year?: number) {
    const now = new Date();
    const targetMonth = month ?? String(now.getMonth() + 1).padStart(2, "0");
    const targetYear = year ?? now.getFullYear();

    const startDate = new Date(`${targetYear}-${targetMonth}-01`);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    const conversions = await prisma.referralConversion.findMany({
      where: {
        referredAt: { gte: startDate, lt: endDate },
      },
      include: {
        link: {
          select: {
            ambassador: {
              select: {
                userId: true,
                user: {
                  select: { id: true, name: true, profilePic: true },
                },
              },
            },
          },
        },
      },
    });

    const counts = new Map<number, { name: string; profilePic: string | null; count: number }>();

    for (const c of conversions) {
      const uid = c.link.ambassador.userId;
      const existing = counts.get(uid) ?? {
        name: c.link.ambassador.user.name,
        profilePic: c.link.ambassador.user.profilePic,
        count: 0,
      };
      existing.count += 1;
      counts.set(uid, existing);
    }

    return Array.from(counts.entries())
      .map(([userId, data]) => ({ userId, ...data }))
      .sort((a, b) => b.count - a.count);
  }

  // ─── My Ambassador Status (student self-service) ───────────────

  async getMyAmbassadorStatus(userId: number) {
    let ambassador = await prisma.ambassador.findUnique({
      where: { userId },
      include: {
        referralLinks: {
          include: { _count: { select: { conversions: true } } },
          orderBy: { createdAt: "desc" },
        },
        shares: {
          orderBy: { createdAt: "desc" },
          include: { reviewer: { select: { id: true, name: true } } },
        },
      },
    });

    if (!ambassador) {
      const eligibility = await this.checkEligibility(userId);
      return { ambassador: null, eligibility };
    }

    const totalConversions = ambassador.referralLinks.reduce(
      (sum: number, l: { _count: { conversions: number } }) => sum + l._count.conversions,
      0,
    );

    return {
      ambassador,
      totalConversions,
      referralUrl: ambassador.referralLinks[0]?.url ?? null,
    };
  }

  async applyForAmbassador(userId: number) {
    const eligibility = await this.checkEligibility(userId);
    if (!eligibility.eligible) {
      throw new Error("You do not meet the eligibility criteria yet");
    }

    const existing = await prisma.ambassador.findUnique({
      where: { userId },
    });
    if (existing) throw new Error("Already applied or enrolled");

    return prisma.ambassador.create({
      data: {
        userId,
        status: "PENDING",
        guidesCompleted: eligibility.details.guidesCompleted,
        reposContributed: eligibility.details.reposContributed,
        leaderboardRank: eligibility.details.leaderboardRank,
        accountAgeDays: eligibility.details.accountAgeDays,
        appliedAt: new Date(),
      },
    });
  }
}
