import { type Request, type Response, type NextFunction } from "express";
import { OpensourceService } from "./opensource.service.js";
import {
  opensourceListQuerySchema,
  gsocOrgsQuerySchema,
  submitRepoRequestSchema,
  approveRequestOverrideSchema,
  repoIdSchema,
  firstPrProgressUpdateSchema,
} from "./opensource.validation.js";
import { parsePagination } from "../../utils/pagination.utils.js";

const service = new OpensourceService();

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
      res.setHeader( "Cache-Control", "public, max-age=3600, stale-while-revalidate=86400" );

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

      const request = await service.submitRepoRequest(
        req.user!.id,
        parsed.data,
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

      await service.rejectRepoRequest(id, req.body.adminNote);
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
      const result = await service.getStudentContributionTrend(req.user!.id);
      res.json(result);
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
}
