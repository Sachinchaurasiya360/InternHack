import { prisma } from "../../database/db.js";
import type { Prisma, BadgeCategory } from "@prisma/client";

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

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
    let slug = input.slug || generateSlug(input.name);
    const existing = await prisma.badge.findUnique({ where: { slug } });
    if (existing) {
      slug = `${slug}-${Date.now()}`;
    }

    return prisma.badge.create({
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
  }

  async updateBadge(id: number, input: UpdateBadgeInput) {
    const badge = await prisma.badge.findUnique({ where: { id } });
    if (!badge) throw new Error("Badge not found");

    const data: Prisma.badgeUpdateInput = {};
    if (input.name !== undefined) {
      data.name = input.name;
      if (!input.slug) {
        data.slug = generateSlug(input.name);
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

    return prisma.badge.update({ where: { id }, data });
  }

  async deleteBadge(id: number) {
    const badge = await prisma.badge.findUnique({ where: { id } });
    if (!badge) throw new Error("Badge not found");

    return prisma.badge.delete({ where: { id } });
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
    // 1. Get all active badges
    const activeBadges = await prisma.badge.findMany({
      where: { isActive: true },
    });

    // 2. Get student's already-earned badge IDs
    const earnedBadges = await prisma.studentBadge.findMany({
      where: { studentId },
      select: { badgeId: true },
    });
    const earnedIds = new Set(earnedBadges.map((b) => b.badgeId));

    const newlyAwarded: { name: string; slug: string; category: string }[] = [];

    for (const badge of activeBadges) {
      // 3. Skip if already earned
      if (earnedIds.has(badge.id)) continue;

      const criteria = badge.criteria as { type?: string; params?: Record<string, unknown> } | null;
      if (!criteria || !criteria.type) continue;

      // Only process badges whose criteria type matches the trigger
      if (criteria.type !== trigger) continue;

      const params = criteria.params ?? {};

      // 4. Check criteria
      let earned = false;

      switch (trigger) {
        case "skill_test_pass": {
          const requiredCount = (params["count"] as number) || 1;
          const verifiedCount = await prisma.verifiedSkill.count({
            where: { studentId },
          });
          earned = verifiedCount >= requiredCount;
          break;
        }

        case "first_application": {
          const appCount = await prisma.application.count({
            where: { studentId },
          });
          earned = appCount >= 1;
          break;
        }

        case "dsa_solve": {
          const requiredCount = (params["count"] as number) || 1;
          const solvedCount = await prisma.studentDsaProgress.count({
            where: { studentId, solved: true },
          });
          earned = solvedCount >= requiredCount;
          break;
        }

        case "profile_complete": {
          const user = await prisma.user.findUnique({
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
          if (user) {
            earned =
              !!user.name &&
              !!user.bio &&
              !!user.college &&
              user.skills.length > 0 &&
              !!user.linkedinUrl &&
              !!user.githubUrl &&
              !!user.profilePic &&
              !!user.contactNo;
          }
          break;
        }
      }

      // 5. Award if earned
      if (earned) {
        try {
          await prisma.studentBadge.create({
            data: { studentId, badgeId: badge.id },
          });
          newlyAwarded.push({
            name: badge.name,
            slug: badge.slug,
            category: badge.category,
          });
        } catch {
          // Unique constraint violation - already earned (race condition), skip
        }
      }
    }

    return newlyAwarded;
  }
}
