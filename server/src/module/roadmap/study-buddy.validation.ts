import { z, type ZodSchema } from "zod";
import type { Request, Response, NextFunction } from "express";

export const studyBuddyParams = z.object({
  roadmapId: z.coerce.number().int().positive(),
});

export const studyBuddyOptInSchema = z.object({
  preferSameCollege: z.boolean().default(false),
});

export type StudyBuddyOptInInput = z.infer<typeof studyBuddyOptInSchema>;

export const validateParams = (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.params);
    if (!result.success) {
      res.status(400).json({ message: "Validation failed", errors: result.error.flatten().fieldErrors });
      return;
    }
    for (const key of Object.keys(req.params)) {
      delete req.params[key];
    }
    Object.assign(req.params, result.data);
    next();
  };

export const validateBody = (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ message: "Validation failed", errors: result.error.flatten().fieldErrors });
      return;
    }
    req.body = result.data as any;
    next();
  };
