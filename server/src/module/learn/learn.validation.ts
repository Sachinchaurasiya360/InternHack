import { z, type ZodSchema } from "zod";
import type { Request, Response, NextFunction } from "express";

const questionIdSchema = z.string().trim().min(1).max(160).regex(/^[a-zA-Z0-9-]+$/, "Question ID must be alphanumeric with dashes only");
const idArraySchema = z.array(questionIdSchema).max(1000);

export const interviewProgressActionSchema = z.object({
  action: z.enum(["complete", "uncomplete", "bookmark", "unbookmark", "visit"]),
});

export const bulkInterviewProgressSchema = z.object({
  completedIds: idArraySchema.default([]),
  bookmarkedIds: idArraySchema.default([]),
  lastVisitedId: questionIdSchema.nullish(),
});

export const getReadinessReportSchema = {
  body: z.object({
    targetRole: z.string({
      error: "Target role specification is required",
    }),
    companyTier: z.string({
      error: "Company tier preference is required",
    }),
    availableTime: z.string({
      error: "Available preparation timeline is required",
    }),
  }),
};

export type InterviewProgressAction = z.infer<typeof interviewProgressActionSchema>["action"];
export type BulkInterviewProgressInput = z.infer<typeof bulkInterviewProgressSchema>;

export const validateBody = <T>(schema: ZodSchema<T>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: "Validation failed",
        errors: result.error.flatten(),
      });
      return;
    }
    req.body = result.data;
    next();
  };

