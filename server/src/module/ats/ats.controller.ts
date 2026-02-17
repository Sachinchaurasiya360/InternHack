import type { Request, Response, NextFunction } from "express";
import type { AtsService } from "./ats.service.js";
import { scoreResumeSchema } from "./ats.validation.js";

export class AtsController {
  constructor(private readonly atsService: AtsService) {}

  async scoreResume(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const result = scoreResumeSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const score = await this.atsService.scoreResume(req.user.id, result.data);
      res.json({ message: "Resume scored successfully", score });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes("Could not extract")) {
          res.status(400).json({ message: err.message });
          return;
        }
        if (err.message.includes("ENOENT")) {
          res.status(404).json({ message: "Resume file not found. Please upload again." });
          return;
        }
      }
      next(err);
    }
  }

  async getScoreHistory(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const scores = await this.atsService.getScoreHistory(req.user.id);
      res.json({ scores });
    } catch (err) {
      next(err);
    }
  }

  async getScoreById(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const scoreId = parseInt(String(req.params["scoreId"]), 10);
      if (isNaN(scoreId)) {
        res.status(400).json({ message: "Invalid score ID" });
        return;
      }

      const score = await this.atsService.getScoreById(scoreId, req.user.id);
      res.json({ score });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Score not found") {
          res.status(404).json({ message: err.message });
          return;
        }
        if (err.message === "Not authorized") {
          res.status(403).json({ message: err.message });
          return;
        }
      }
      next(err);
    }
  }
}
