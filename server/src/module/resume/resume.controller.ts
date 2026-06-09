import type { NextFunction, Request, Response } from "express";
import type { ResumeService } from "./resume.service.js";

export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  async getOssSection(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const section = await this.resumeService.buildOssSection(req.user.id);
      res.json(section);
    } catch (err) {
      next(err);
    }
  }
}
