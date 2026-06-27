import { type Request, type Response, type NextFunction } from "express";
import { prisma } from "../../database/db.js";
import { OpensourceService } from "./opensource.service.js";
import {
  opensourceListQuerySchema,
  gsocOrgsQuerySchema,
  submitRepoRequestSchema,
  approveRequestOverrideSchema,
  rejectRequestSchema,
  repoIdSchema,
  repoOwnerNameSchema,
  firstPrProgressUpdateSchema,
  bookmarkBodySchema,
  bulkMigrateBookmarksSchema,
  guideFeedbackSchema,
  guideProgressUpdateSchema,
  issueCertificateSchema,
  contributionTrendQuerySchema,
} from "./opensource.validation.js";
import { parsePagination } from "../../utils/pagination.utils.js";

const service = new OpensourceService();

const escapeXml = (str: string): string => 
  str.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });

const FIRST_PR_ROADMAP_TOTAL_STEPS = 9;

export class OpensourceController {
  async getGlobalStats(req: Request, res: Response, next: NextFunction) {
    try {
      const stats = await service.getGlobalStats();
      res.json(stats);
    } catch (err) {
      next(err);
    }
  }

  async getLanguages(req: Request, res: Response, next: NextFunction) {
    try {
      const languages = await service.getLanguages();

      // cache for 1 hour, allow stale data for 24 hours while revalidating
      res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");

      res.json({ languages });
    } catch (err) {
      next(err);
    }
  }

  async listRepos(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = opensourceListQuerySchema.safeParse(req.query);
      if (!parsed.success) {
        res.status(400).json({
          message: "Invalid query parameters",
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }

      const result = await service.listRepos(parsed.data);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getRepoById(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = repoIdSchema.safeParse(req.params);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid repo ID" });
        return;
      }
      const repo = await service.getRepoById(parsed.data.id);
      if (!repo) {
        res.status(404).json({ message: "Repository not found" });
        return;
      }
      res.json({ repo });
    } catch (err) {
      next(err);
    }
  }

  async getRepoByOwnerAndName(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = repoOwnerNameSchema.safeParse(req.params);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid owner/name parameters" });
        return;
      }
      const { owner, name } = parsed.data;
      const repo = await service.getRepoByOwnerAndName(owner, name);
      if (!repo) {
        res.status(404).json({ message: "Repository not found" });
        return;
      }
      res.setHeader("Cache-Control", "public, max-age=300, stale-while-revalidate=3600");
      res.json({ repo });
    } catch (err) {
      next(err);
    }
  }

  async getRepoGoodFirstIssues(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = repoOwnerNameSchema.safeParse(req.params);
      if (!parsed.success) {
        res.status(400).json({ message: "Invalid owner/name parameters" });
        return;
      }
      const { owner, name } = parsed.data;
      const result = await service.getGoodFirstIssues(owner, name);
      if (!result) {
        res.status(404).json({ message: "Repository not found" });
        return;
      }
      res.setHeader("Cache-Control", "public, max-age=300, stale-while-revalidate=1800");
      res.json({ issues: result.issues });
    } catch (err) {
      next(err);
    }
  }

  async getGsocOrgs(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = gsocOrgsQuerySchema.safeParse(req.query);
      if (!parsed.success) {
        res.status(400).json({
          message: "Invalid query parameters",
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }

      const result = await service.getGsocOrgs(parsed.data);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async submitRepoRequest(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = submitRepoRequestSchema.safeParse(req.body);
      if (!parsed.success) {
        res
          .status(400)
          .json({
            message: "Validation failed",
            errors: parsed.error.flatten().fieldErrors,
          });
        return;
      }

      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const requestCount = await prisma.repoRequest.count({
        where: {
          userId: req.user!.id,
          createdAt: { gte: twentyFourHoursAgo },
        },
      });

      if (requestCount >= 5) {
        res.setHeader("X-RateLimit-Remaining", "0");
        res.setHeader(
          "X-RateLimit-Reset",
          new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        );
        res.status(429).json({ message: "You have reached the limit of 5 suggestions per 24 hours. Please try again later." });
        return;
      }

      const request = await service.submitRepoRequest(
        req.user!.id,
        parsed.data,
      );

      res.setHeader("X-RateLimit-Remaining", String(4 - requestCount));
      res.setHeader(
        "X-RateLimit-Reset",
        new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      );

      res
        .status(201)
        .json({
          message: "Repository request submitted successfully",
          request,
        });
    } catch (err: any) {
      if (err.message === "This repository has already been submitted") {
        res.status(409).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async getMyRepoRequests(req: Request, res: Response, next: NextFunction) {
    try {
      const requests = await service.getMyRepoRequests(req.user!.id);
      res.json({ requests });
    } catch (err) {
      next(err);
    }
  }

  async getAllRepoRequests(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, limit, skip } = parsePagination(req);
      const status = req.query.status as string | undefined;

      const result = await service.getAllRepoRequests({
        status,
        page,
        limit,
        skip,
      });
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async approveRepoRequest(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid request ID" });
        return;
      }

      const overridesParsed = approveRequestOverrideSchema.safeParse(req.body);
      if (!overridesParsed.success) {
        res
          .status(400)
          .json({
            message: "Validation failed",
            errors: overridesParsed.error.flatten().fieldErrors,
          });
        return;
      }

      const repo = await service.approveRepoRequest(id, overridesParsed.data);
      res.json({ message: "Request approved and repository added", repo });
    } catch (err: any) {
      if (err.message === "Request not found") {
        res.status(404).json({ message: err.message });
      } else if (err.message === "Request is not pending") {
        res.status(400).json({ message: err.message });
      } else {
        next(err);
      }
    }
  }

  async rejectRepoRequest(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid request ID" });
        return;
      }

      const body = rejectRequestSchema.safeParse(req.body);
      if (!body.success) {
        res.status(400).json({
          message: "Validation failed",
          errors: body.error.flatten()
        });
        return;
      }
      await service.rejectRepoRequest(id, body.data.adminNote);
      res.json({ message: "Request rejected" });
    } catch (err: any) {
      if (err.message === "Request not found") {
        res.status(404).json({ message: err.message });
      } else if (err.message === "Request is not pending") {
        res.status(400).json({ message: err.message });
      } else {
        next(err);
      }
    }
  }

  async getStudentContributionTrend(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const parsed = contributionTrendQuerySchema.safeParse(req.query);
      if (!parsed.success) {
        res.status(400).json({
          message: "Invalid query parameters",
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }
      const { startDate, endDate } = parsed.data;
      const result = await service.getStudentContributionTrend(req.user!.id, startDate, endDate);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  getHacktoberfestProgress = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      if (!req.user?.id) {
        res.status(401).json({ message: "Unauthorized access" });
        return;
      }

      const result = await service.getHacktoberfestProgress(req.user.id);

      res.json({
        success: true,
        data: result
      });
    } catch (err) {
      next(err);
    }
  };

  async getActivityHeatmap(req: Request, res: Response, next: NextFunction) {
    try {
      const queryStudentId = req.query.studentId as string | undefined;
      const parsedId = queryStudentId ? parseInt(queryStudentId, 10) : req.user!.id;

      if (queryStudentId && isNaN(parsedId)) {
        res.status(400).json({ success: false, error: "Invalid studentId parameter" });
        return;
      }

      const userId = parsedId;

      if (queryStudentId && req.user!.role === "STUDENT" && userId !== req.user!.id) {
        res.status(403).json({ success: false, error: "Cannot view other student's activity" });
        return;
      }

      const result = await service.getActivityHeatmap(userId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getGuideProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const guideSlug = req.params.guideSlug as string;
      const completedStepIds = await service.getGuideProgress(req.user!.id, guideSlug);
      res.json({ completedStepIds });
    } catch (err) {
      next(err);
    }
  }

  async patchGuideProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const guideSlug = req.params.guideSlug as string;
      const parsed = guideProgressUpdateSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }

      const completedStepIds = await service.patchGuideProgress(
        req.user!.id,
        guideSlug,
        parsed.data.completedStepIds,
      );

      res.json({ completedStepIds });
    } catch (err) {
      next(err);
    }
  }

  async getFirstPrProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const completedStepIds = await service.getFirstPrProgress(req.user!.id);
      res.json({ completedStepIds });
    } catch (err) {
      next(err);
    }
  }

  async patchFirstPrProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = firstPrProgressUpdateSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }

      const { stepId, completed } = parsed.data;
      const completedStepIds = await service.patchFirstPrProgress(
        req.user!.id,
        stepId,
        completed,
      );

      // Check for completion to auto-issue certificate
      // Total steps in first-pr roadmap is 9
      if (completedStepIds.length >= FIRST_PR_ROADMAP_TOTAL_STEPS) {
        try {
          await service.issueCertificate(req.user!.id, "First Pull Request Roadmap");
        } catch (err) {
          console.error("Failed to auto-issue certificate:", err);
        }
      }

      res.json({ completedStepIds });
    } catch (err) {
      next(err);
    }
  }

  async getRecommendedRepos(req: Request, res: Response, next: NextFunction) {
    try {
      const repos = await service.getRecommendedRepos(req.user!.id);
      res.json({ repos });
    } catch (err) {
      next(err);
    }
  }

  async issueCertificate(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = issueCertificateSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }
      const { guideName } = parsed.data;
      const certificate = await service.issueCertificate(req.user!.id, guideName);
      res.status(201).json({ certificate });
    } catch (err) {
      next(err);
    }
  }

  // ─── Bookmarks ─────────────────────────────────────────────────

  async getBookmarks(req: Request, res: Response, next: NextFunction) {
    try {
      const repoIds = await service.getBookmarkedRepoIds(req.user!.id);
      res.json({ repoIds });
    } catch (err) {
      next(err);
    }
  }

  async addBookmark(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = bookmarkBodySchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }
      const result = await service.addBookmark(req.user!.id, parsed.data.repoId);
      res.status(201).json({ message: "Bookmark added", ...result });
    } catch (err: any) {
      if (err.message === "Repository not found") {
        res.status(404).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async getCertificate(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.params.token as string;
      const certificate = await service.getCertificate(token);
      if (!certificate) {
        res.status(404).json({ message: "Certificate not found" });
        return;
      }
      res.json({ certificate });
    } catch (err) {
      next(err);
    }
  }

  async removeBookmark(req: Request, res: Response, next: NextFunction) {
    try {
      const repoId = Number(req.params.repoId);
      if (isNaN(repoId) || repoId <= 0) {
        res.status(400).json({ message: "Invalid repoId" });
        return;
      }
      await service.removeBookmark(req.user!.id, repoId);
      res.json({ message: "Bookmark removed" });
    } catch (err) {
      next(err);
    }
  }

  async bulkMigrateBookmarks(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = bulkMigrateBookmarksSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }
      const repoIds = await service.bulkMigrateBookmarks(
        req.user!.id,
        parsed.data.repoIds,
      );
      res.json({ message: "Bookmarks migrated", repoIds });
    } catch (err) {
      next(err);
    }
  }

  async submitGuideFeedback(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = guideFeedbackSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }

      await service.submitGuideFeedback(req.user!.id, parsed.data);
      res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (err) {
      next(err);
    }
  }

  async getCertificateOgImage(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.params.token as string;
      const certificate = await service.getCertificate(token);
      if (!certificate) {
        res.status(404).json({ message: "Certificate not found" });
        return;
      }

      const date = new Date(certificate.issuedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      const escapedStudentName = escapeXml(certificate.studentName);
      const escapedGuideName = escapeXml(certificate.guideName);
      const escapedToken = escapeXml(token);

      // SVG Template for the certificate
      const svg = `
        <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4f46e5;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="1200" height="630" fill="#0f172a" />
          <rect x="20" y="20" width="1160" height="590" rx="20" fill="none" stroke="url(#grad)" stroke-width="4" />
          
          <text x="600" y="150" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#94a3b8" text-anchor="middle" letter-spacing="4">CERTIFICATE OF COMPLETION</text>
          
          <text x="600" y="250" font-family="Arial, sans-serif" font-size="32" fill="#e2e8f0" text-anchor="middle">This is to certify that</text>
          
          <text x="600" y="340" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">${escapedStudentName}</text>
          
          <text x="600" y="420" font-family="Arial, sans-serif" font-size="32" fill="#e2e8f0" text-anchor="middle">has successfully completed the</text>
          
          <text x="600" y="500" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#4f46e5" text-anchor="middle">${escapedGuideName}</text>
          
          <text x="600" y="570" font-family="Arial, sans-serif" font-size="20" fill="#94a3b8" text-anchor="middle">Issued on ${date} • Verify at internhack.xyz/certificate/${escapedToken}</text>
        </svg>
      `;

      res.setHeader("Content-Type", "image/svg+xml");
      res.setHeader("Cache-Control", "public, max-age=604800, immutable");
      res.send(svg);
    } catch (err) {
      next(err);
    }
  }
}


