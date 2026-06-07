import { prisma } from "../../database/db.js";
import { slugify } from "../../utils/slug.utils.js";
import { cacheGet, cacheSet, cacheDel } from "../../utils/cache.js";
import type { Prisma, BadgeCategory, badge } from "@prisma/client";

const BADGES_CACHE_KEY = "badges:active";
const BADGES_TTL = 300; // 5 minutes

interface CreateBadgeInput {
  name: string;
  slug?: string | undefined;
  description: string;
  iconUrl?: string | undefined;
  category: "CAREER" | "QUIZ" | "SKILL" | "CONTRIBUTION" | "MILESTONE";
  criteria: { type: string; params?: Record<string, unknown> | undefined };
  isActive?: boolean | undefined;
}

interface UpdateBadgeInput {
  name?: string | undefined;
  slug?: string | undefined;
  description?: string | undefined;
  iconUrl?: string | undefined;
  category?: "CAREER" | "QUIZ" | "SKILL" | "CONTRIBUTION" | "MILESTONE" | undefined;
  criteria?: { type: string; params?: Record<string, unknown> | undefined } | undefined;
  isActive?: boolean | undefined;
}

export class BadgeService {
  // ==================== PUBLIC ====================

  async listBadges() {
    return prisma.badge.findMany({
      where: { isActive: true },
      orderBy: { name: "asc" },
    });
  }

  // ==================== STUDENT ====================

  async getStudentBadges(studentId: number) {
    return prisma.studentBadge.findMany({
      where: { studentId },
      orderBy: { earnedAt: "desc" },
      include: {
        badge: true,
      },
    });
  }

  // ==================== ADMIN CRUD ====================

  async createBadge(input: CreateBadgeInput) {
    let slug = input.slug || slugify(input.name);
    const existing = await prisma.badge.findUnique({ where: { slug } });
    if (existing) {
      slug = `${slug}-${Date.now()}`;
    }

    const created = await prisma.badge.create({
      data: {
        name: input.name,
        slug,
        description: input.description,
        iconUrl: input.iconUrl || null,
        category: input.category,
        criteria: JSON.parse(JSON.stringify(input.criteria)) as Prisma.InputJsonValue,
        isActive: input.isActive ?? true,
      },
    });
    await cacheDel(BADGES_CACHE_KEY);
    return created;
  }

  async updateBadge(id: number, input: UpdateBadgeInput) {
    const badge = await prisma.badge.findUnique({ where: { id } });
    if (!badge) throw new Error("Badge not found");

    const data: Prisma.badgeUpdateInput = {};
    if (input.name !== undefined) {
      data.name = input.name;
      if (!input.slug) {
        data.slug = slugify(input.name);
      }
    }
    if (input.slug !== undefined) data.slug = input.slug;
    if (input.description !== undefined) data.description = input.description;
    if (input.iconUrl !== undefined) data.iconUrl = input.iconUrl || null;
    if (input.category !== undefined) data.category = input.category;
    if (input.criteria !== undefined) {
      data.criteria = JSON.parse(JSON.stringify(input.criteria)) as Prisma.InputJsonValue;
    }
    if (input.isActive !== undefined) data.isActive = input.isActive;

    const updated = await prisma.badge.update({ where: { id }, data });
    await cacheDel(BADGES_CACHE_KEY);
    return updated;
  }

  async deleteBadge(id: number) {
    const badge = await prisma.badge.findUnique({ where: { id } });
    if (!badge) throw new Error("Badge not found");

    const deleted = await prisma.badge.delete({ where: { id } });
    await cacheDel(BADGES_CACHE_KEY);
    return deleted;
  }

  async listAllBadges(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [badges, total] = await Promise.all([
      prisma.badge.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
        include: {
          _count: { select: { studentBadges: true } },
        },
      }),
      prisma.badge.count(),
    ]);

    return {
      badges,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  // ==================== BADGE CHECK & AWARD LOGIC ====================

  async checkAndAwardBadges(
    studentId: number,
    trigger: string,
    context?: Record<string, unknown>,
  ): Promise<{ name: string; slug: string; category: string }[]> {
    // 1. Load active badges from cache (populated once, invalidated on admin CRUD)
    let activeBadges = await cacheGet<badge[]>(BADGES_CACHE_KEY);
    if (!activeBadges) {
      activeBadges = await prisma.badge.findMany({ where: { isActive: true } });
      await cacheSet(BADGES_CACHE_KEY, activeBadges, BADGES_TTL);
    }

    // 2. Load earned badge IDs for this student
    const earnedBadges = await prisma.studentBadge.findMany({
      where: { studentId },
      select: { badgeId: true },
    });
    const earnedIds = new Set(earnedBadges.map((b) => b.badgeId));

    // 3. Filter to only uneearned badges for this trigger — no DB work if none match
    const relevant = activeBadges.filter((b) => {
      if (earnedIds.has(b.id)) return false;
      const c = b.criteria as { type?: string } | null;
      return c?.type === trigger;
    });
    if (relevant.length === 0) return [];

    // 4. Pre-hoist all counts needed for this trigger (at most 2 queries, regardless of badge count)
    type CriteriaCtx = {
      verified?: number;
      appCount?: number;
      total?: number;
      shareCount?: number;
      solved?: number;
      profileUser?: {
        name: string | null;
        bio: string | null;
        college: string | null;
        skills: string[];
        linkedinUrl: string | null;
        githubUrl: string | null;
        profilePic: string | null;
        contactNo: string | null;
      } | null;
    };
    const ctx: CriteriaCtx = {};

    switch (trigger) {
      case "skill_test_pass":
        ctx.verified = await prisma.verifiedSkill.count({ where: { studentId } });
        break;
      case "first_application":
        ctx.appCount = await prisma.application.count({ where: { studentId } });
        break;
      case "job_apply": {
        const [internal, external] = await Promise.all([
          prisma.application.count({ where: { studentId } }),
          prisma.externalJobApplication.count({ where: { studentId } }),
        ]);
        ctx.total = internal + external;
        break;
      }
      case "interview_share":
        ctx.shareCount = await prisma.interviewExperience.count({ where: { userId: studentId } });
        break;
      case "dsa_solve":
        ctx.solved = await prisma.studentDsaProgress.count({ where: { studentId, solved: true } });
        break;
      case "profile_complete":
        ctx.profileUser = await prisma.user.findUnique({
          where: { id: studentId },
          select: {
            name: true,
            bio: true,
            college: true,
            skills: true,
            linkedinUrl: true,
            githubUrl: true,
            profilePic: true,
            contactNo: true,
          },
        });
        break;
    }

    // 5. Evaluate each badge using pre-fetched data — zero additional DB queries
    const toAward: number[] = [];
    const newlyAwarded: { name: string; slug: string; category: string }[] = [];

    for (const b of relevant) {
      const criteria = b.criteria as { type?: string; params?: Record<string, unknown> } | null;
      const params = criteria?.params ?? {};
      let earned = false;

      switch (trigger) {
        case "skill_test_pass":
          earned = (ctx.verified ?? 0) >= ((params["count"] as number) || 1);
          break;
        case "first_application":
          earned = (ctx.appCount ?? 0) >= 1;
          break;
        case "job_apply":
          earned = (ctx.total ?? 0) >= ((params["count"] as number) || 1);
          break;
        case "interview_share":
          earned = (ctx.shareCount ?? 0) >= ((params["count"] as number) || 1);
          break;
        case "dsa_solve":
          earned = (ctx.solved ?? 0) >= ((params["count"] as number) || 1);
          break;
        case "profile_complete": {
          const u = ctx.profileUser;
          if (u) {
            earned =
              !!u.name &&
              !!u.bio &&
              !!u.college &&
              u.skills.length > 0 &&
              !!u.linkedinUrl &&
              !!u.githubUrl &&
              !!u.profilePic &&
              !!u.contactNo;
          }
          break;
        }
      }

      if (earned) {
        toAward.push(b.id);
        newlyAwarded.push({ name: b.name, slug: b.slug, category: b.category });
      }
    }

    // 6. Batch-award all earned badges in a single query, skipping any race-condition duplicates
    if (toAward.length > 0) {
      await prisma.studentBadge.createMany({
        data: toAward.map((badgeId) => ({ studentId, badgeId })),
        skipDuplicates: true,
      });
    }

    return newlyAwarded;
  }
}
