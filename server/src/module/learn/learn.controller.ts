import type { Request, Response } from "express";
import type { LearnService } from "./learn.service.js";
import { bulkInterviewProgressSchema, interviewProgressActionSchema } from "./learn.validation.js";

export class LearnController {
  constructor(private readonly learnService: LearnService) {}

  async getInterviewProgress(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const progress = await this.learnService.getInterviewProgress(req.user.id);
      return res.json(progress);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateInterviewProgress(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });
      const rawQuestionId = req.params["questionId"];
      const questionId = Array.isArray(rawQuestionId) ? rawQuestionId[0]?.trim() : rawQuestionId?.trim();
      if (!questionId) return res.status(400).json({ message: "Question ID is required" });
      if (questionId.length > 160) return res.status(400).json({ message: "Question ID is too long" });

      const result = interviewProgressActionSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
      }

      const progress = await this.learnService.updateInterviewProgress(
        req.user.id,
        questionId,
        result.data.action,
      );
      return res.json(progress);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async bulkMigrateInterviewProgress(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const result = bulkInterviewProgressSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
      }

      const progress = await this.learnService.bulkMigrateInterviewProgress(req.user.id, result.data);
      return res.json(progress);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async resetInterviewProgress(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const progress = await this.learnService.resetInterviewProgress(req.user.id);
      return res.json(progress);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
