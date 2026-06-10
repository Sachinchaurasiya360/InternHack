import type { Request, Response, NextFunction } from "express";
import { LeaderboardService } from "./leaderboard.service.js";
import { prisma } from "../../database/db.js";
import {
  leaderboardQuerySchema,
  updatePrivacySchema,
  type LeaderboardQuery,
} from "./leaderboard.validation.js";

const leaderboardService = new LeaderboardService();

export class LeaderboardController {
  /**
   * GET /api/opensource/leaderboard
   * Fetch leaderboard entries with pagination and filters
   */
  async getLeaderboard(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = leaderboardQuerySchema.safeParse(req.query);

      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          error: "Invalid query parameters",
          details: parsed.error.issues,
        });
      }

      const query: LeaderboardQuery = parsed.data;
      const { view, domain, limit, page } = query;
      const skip = (page - 1) * limit;

      // Validate domain is provided when view=domain
      if (view === "domain" && !domain) {
        return res.status(400).json({
          success: false,
          error: "Domain is required when view=domain",
        });
      }

      // Build the query based on view type
      let orderBy: any;
      let where: any = { isPublic: true };

      switch (view) {
        case "weekly":
          orderBy = { weeklyScore: "desc" };
          break;
        case "monthly":
          orderBy = { monthlyScore: "desc" };
          break;
        case "global":
        default:
          orderBy = { totalScore: "desc" };
          break;
      }

      // For university and domain views, we'll fetch all and filter in memory
      // This is because university/domain rankings are more complex
      let entries;
      let total;

      if (view === "university") {
        // Get current user's university
        const currentUser = await prisma.user.findUnique({
          where: { id: req.user!.id },
          select: { college: true },
        });

        if (!currentUser?.college) {
          return res.json({
            success: true,
            entries: [],
            pagination: { page, limit, total: 0, totalPages: 0 },
            view,
          });
        }

        // Fetch leaderboard with user's college filter
        const allEntries = await prisma.opensourceLeaderboard.findMany({
          where: {
            isPublic: true,
            user: { college: currentUser.college },
          },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                profilePic: true,
                college: true,
                profileSlug: true,
              },
            },
          },
          orderBy,
        });

        total = allEntries.length;
        entries = allEntries.slice(skip, skip + limit);
      } else if (view === "domain") {
        // Domain view: filter users who have contributions in the specified domain
        const allEntries = await prisma.opensourceLeaderboard.findMany({
          where,
          include: {
            user: {
              select: {
                id: true,
                name: true,
                profilePic: true,
                college: true,
                profileSlug: true,
                repoRequests: {
                  where: {
                    status: "APPROVED",
                    domain: domain as any,
                  },
                  select: { id: true },
                },
              },
            },
          },
          orderBy,
        });

        // Filter to only users with contributions in this domain
        const filteredEntries = allEntries.filter((e) => e.user.repoRequests.length > 0);
        total = filteredEntries.length;
        entries = filteredEntries.slice(skip, skip + limit);
      } else {
        // Global, weekly, or monthly view
        [entries, total] = await Promise.all([
          prisma.opensourceLeaderboard.findMany({
            where,
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                  profilePic: true,
                  college: true,
                  profileSlug: true,
                },
              },
            },
            orderBy,
            skip,
            take: limit,
          }),
          prisma.opensourceLeaderboard.count({ where }),
        ]);
      }

      // Format the response
      const formattedEntries = entries.map((entry, index) => {
        const displayName = entry.showRealName ? entry.user.name : `User${entry.userId}`;
        
        // Calculate rank based on view
        let rank: number;
        if (view === "weekly") {
          rank = entry.weeklyRank ?? skip + index + 1;
        } else if (view === "monthly") {
          rank = entry.monthlyRank ?? skip + index + 1;
        } else if (view === "university") {
          rank = entry.universityRank ?? skip + index + 1;
        } else if (view === "domain" && domain) {
          const domainRanks = entry.domainRank as Record<string, number>;
          rank = domainRanks[domain] ?? skip + index + 1;
        } else {
          rank = entry.globalRank ?? skip + index + 1;
        }

        return {
          rank,
          userId: entry.userId,
          name: displayName,
          profilePic: entry.user.profilePic,
          profileSlug: entry.user.profileSlug,
          college: entry.user.college,
          score:
            view === "weekly"
              ? entry.weeklyScore
              : view === "monthly"
                ? entry.monthlyScore
                : entry.totalScore,
          metrics: {
            guidesCompleted: entry.guidesCompleted,
            reposSuggestedApproved: entry.reposSuggestedApproved,
            githubPRsMerged: entry.githubPRsMerged,
            currentStreak: entry.currentStreak,
            certificatesEarned: entry.certificatesEarned,
          },
          isCurrentUser: entry.userId === req.user!.id,
        };
      });

      res.json({
        success: true,
        entries: formattedEntries,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
        view,
        domain: domain || null,
      });
    } catch (err) {
      next(err);
    }
  }

  /**
   * GET /api/opensource/leaderboard/my-rank
   * Get current user's rank across all views
   */
  async getMyRank(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;

      // Get or create leaderboard entry
      let entry = await prisma.opensourceLeaderboard.findUnique({
        where: { userId },
        include: {
          user: {
            select: {
              name: true,
              profilePic: true,
              college: true,
              profileSlug: true,
            },
          },
        },
      });

      // If no entry exists, create one
      if (!entry) {
        await leaderboardService.updateUserScore(userId);
        entry = await prisma.opensourceLeaderboard.findUnique({
          where: { userId },
          include: {
            user: {
              select: {
                name: true,
                profilePic: true,
                college: true,
                profileSlug: true,
              },
            },
          },
        });
      }

      if (!entry) {
        return res.status(404).json({
          success: false,
          error: "Leaderboard entry not found",
        });
      }

      res.json({
        success: true,
        rank: {
          global: entry.globalRank,
          weekly: entry.weeklyRank,
          monthly: entry.monthlyRank,
          university: entry.universityRank,
          domain: entry.domainRank,
        },
        scores: {
          total: entry.totalScore,
          weekly: entry.weeklyScore,
          monthly: entry.monthlyScore,
        },
        metrics: {
          guidesCompleted: entry.guidesCompleted,
          reposSuggestedApproved: entry.reposSuggestedApproved,
          reposSuggestedPending: entry.reposSuggestedPending,
          githubPRsMerged: entry.githubPRsMerged,
          currentStreak: entry.currentStreak,
          longestStreak: entry.longestStreak,
          certificatesEarned: entry.certificatesEarned,
          lastActivityDate: entry.lastActivityDate,
        },
        privacy: {
          isPublic: entry.isPublic,
          showRealName: entry.showRealName,
        },
        user: {
          name: entry.user.name,
          profilePic: entry.user.profilePic,
          college: entry.user.college,
          profileSlug: entry.user.profileSlug,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  /**
   * PATCH /api/opensource/leaderboard/privacy
   * Update privacy settings for current user
   */
  async updatePrivacy(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = updatePrivacySchema.safeParse(req.body);

      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          error: "Invalid request body",
          details: parsed.error.issues,
        });
      }

      const userId = req.user!.id;
      const updates = parsed.data;

      // Get or create leaderboard entry
      let entry = await prisma.opensourceLeaderboard.findUnique({
        where: { userId },
      });

      if (!entry) {
        // Create entry first
        await leaderboardService.updateUserScore(userId);
      }

      // Update privacy settings
      const updated = await prisma.opensourceLeaderboard.update({
        where: { userId },
        data: updates,
      });

      res.json({
        success: true,
        message: "Privacy settings updated",
        privacy: {
          isPublic: updated.isPublic,
          showRealName: updated.showRealName,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  /**
   * GET /api/opensource/leaderboard/stats
   * Get global leaderboard statistics
   */
  async getStats(req: Request, res: Response, next: NextFunction) {
    try {
      const [totalParticipants, topScore, avgScore, activeThisWeek] = await Promise.all([
        prisma.opensourceLeaderboard.count(),
        prisma.opensourceLeaderboard.findFirst({
          orderBy: { totalScore: "desc" },
          select: { totalScore: true },
        }),
        prisma.opensourceLeaderboard.aggregate({
          _avg: { totalScore: true },
        }),
        prisma.opensourceLeaderboard.count({
          where: {
            weeklyScore: { gt: 0 },
          },
        }),
      ]);

      res.json({
        success: true,
        stats: {
          totalParticipants,
          topScore: topScore?.totalScore ?? 0,
          averageScore: Math.round(avgScore._avg.totalScore ?? 0),
          activeThisWeek,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  /**
   * POST /api/opensource/leaderboard/refresh
   * Manually trigger score refresh for current user
   */
  async refreshMyScore(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;

      const updatedScore = await leaderboardService.updateUserScore(userId);

      res.json({
        success: true,
        message: "Score refreshed successfully",
        scores: {
          total: updatedScore.totalScore,
          weekly: updatedScore.weeklyScore,
          monthly: updatedScore.monthlyScore,
        },
      });
    } catch (err) {
      next(err);
    }
  }
}
