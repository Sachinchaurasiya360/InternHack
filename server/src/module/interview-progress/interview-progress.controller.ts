import type { Request, Response, NextFunction } from "express";

import { InterviewProgressService } from "./interview-progress.service.js";

export class InterviewProgressController {
  constructor(
    private interviewProgressService: InterviewProgressService
  ) {}

  async getProgress(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const studentId = req.user!.id;

      const progress =
        await this.interviewProgressService.getProgress(studentId);

      return res.json(progress);
    } catch (err) {
      next(err);
    }
  }

  async updateProgress(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const studentId = req.user!.id;

      const { questionId, action } = req.body;

      if (!questionId || !action) {
        return res.status(400).json({
          message: "questionId and action are required",
        });
      }

      const updatedProgress =
        await this.interviewProgressService.updateProgress(
          studentId,
          questionId,
          action
        );

      return res.json(updatedProgress);
    } catch (err) {
      next(err);
    }
  }
}