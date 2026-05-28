import { z } from "zod";
import type { Request, Response, NextFunction } from "express";

export const deleteResumeSchema = z.object({
  url: z.string().url("Valid resume URL is required"),
});

export const presignRequestSchema = z.object({
  fileName: z.string().min(1, "fileName is required"),
  fileType: z.string().min(1, "fileType is required"),
  folder: z.enum(["resumes", "profile-pics", "cover-images", "company-logos"], {
    message: "Invalid or unauthorized folder. Allowed: resumes, profile-pics, cover-images, company-logos",
  }),
});

export const validateBody = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error.issues.map((e) => e.message),
      });
    }
    req.body = result.data;
    next();
  };
};
