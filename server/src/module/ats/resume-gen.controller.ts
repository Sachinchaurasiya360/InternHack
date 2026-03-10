import type { Request, Response, NextFunction } from "express";
import type { ResumeGenService } from "./resume-gen.service.js";
import { generateResumeSchema } from "./resume-gen.validation.js";
import type { UserProfile } from "./resume-gen.validation.js";
import { prisma } from "../../database/db.js";
import type { UsageAction } from "@prisma/client";

export class ResumeGenController {
  constructor(private readonly resumeGenService: ResumeGenService) {}

  async generate(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const result = generateResumeSchema.safeParse(req.body);
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

      const latex = await this.resumeGenService.generate(result.data, profile);

      await prisma.usageLog.create({ data: { userId: req.user.id, action: "GENERATE_RESUME" as UsageAction } });

      const usage = req.usageInfo
        ? { used: req.usageInfo.used + 1, limit: req.usageInfo.limit }
        : undefined;

      res.json({ message: "Resume generated successfully", latex, usage });
    } catch (err) {
      next(err);
    }
  }
}
