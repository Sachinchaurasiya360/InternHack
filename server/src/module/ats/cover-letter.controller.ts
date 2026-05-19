import type { Request, Response, NextFunction } from "express";
import type { CoverLetterService } from "./cover-letter.service.js";
import { generateCoverLetterSchema } from "./cover-letter.validation.js";
import type { UserProfile } from "./cover-letter.validation.js";
import { prisma } from "../../database/db.js";
import type { UsageAction } from "@prisma/client";

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

      let profile: UserProfile | undefined;

      if (result.data.useProfile) {
        const user = await prisma.user.findUnique({
          where: { id: req.user.id },
          select: {
            name: true,
            bio: true,
            college: true,
            graduationYear: true,
            skills: true,
            location: true,
            company: true,
            designation: true,
            projects: true,
            achievements: true,
          },
        });

        if (user) {
          profile = {
            name: user.name,
            bio: user.bio,
            college: user.college,
            graduationYear: user.graduationYear,
            skills: user.skills,
            location: user.location,
            company: user.company,
            designation: user.designation,
            projects: (user.projects as UserProfile["projects"]) ?? [],
            achievements: (user.achievements as UserProfile["achievements"]) ?? [],
          };
        }
      }

      const coverLetter = await this.coverLetterService.generate(result.data, profile, req.user.id);

      // Auto-save — non-fatal, never fail generation if save fails
      await this.coverLetterService.saveGenerated(req.user.id, {
        jobTitle:       result.data.jobTitle,
        companyName:    result.data.companyName,
        jobDescription: result.data.jobDescription,
        content:        coverLetter,
        tone:           result.data.tone ?? "professional",
        useProfile:     result.data.useProfile ?? false,
        keySkills:      result.data.keySkills,
        length:         result.data.length,
        targetWords:    result.data.targetWords ?? 300,
      }).catch(() => {});

      await prisma.usageLog.create({ data: { userId: req.user.id, action: "COVER_LETTER" as UsageAction } });

      const usage = req.usageInfo
        ? { used: req.usageInfo.used + 1, limit: req.usageInfo.limit }
        : undefined;

      res.json({ message: "Cover letter generated successfully", coverLetter, usage });
    } catch (err) {
      next(err);
    }
  }

  async getHistory(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const history = await this.coverLetterService.getHistory(req.user.id);
      res.json({ history });
    } catch (err) {
      next(err);
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      const letter = await this.coverLetterService.getOne(
        Number(req.params["id"]),
        req.user.id
      );
      if (!letter) {
        res.status(404).json({ message: "Not found" });
        return;
      }
      res.json({ letter });
    } catch (err) {
      next(err);
    }
  }

  async deleteOne(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }
      await this.coverLetterService.deleteOne(
        Number(req.params["id"]),
        req.user.id
      );
      res.json({ success: true });
    } catch (err) {
      next(err);
    }
  }
}