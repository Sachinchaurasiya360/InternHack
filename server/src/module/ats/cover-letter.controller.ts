import type { Request, Response, NextFunction } from "express";
import type { CoverLetterService } from "./cover-letter.service.js";
import { generateCoverLetterSchema } from "./cover-letter.validation.js";

export class CoverLetterController {
  constructor(private readonly coverLetterService: CoverLetterService) {}

  async generate(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const result = generateCoverLetterSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const coverLetter = await this.coverLetterService.generate(result.data);
      res.json({ message: "Cover letter generated successfully", coverLetter });
    } catch (err) {
      next(err);
    }
  }
}
