import { z, type ZodSchema } from "zod";
import type { Request, Response, NextFunction } from "express";

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

export const createReferralLinkSchema = z.object({
  label: z.string().max(100).optional(),
});

export const submitShareSchema = z.object({
  platform: z.string().min(1).max(50),
  url: z.string().url(),
  description: z.string().max(500).optional(),
});

export const reviewAmbassadorSchema = z.object({
  status: z.enum(["APPROVED", "REJECTED"]),
  adminNotes: z.string().max(1000).optional(),
});

export const reviewShareSchema = z.object({
  status: z.enum(["APPROVED", "REJECTED"]),
  adminNotes: z.string().max(1000).optional(),
});

export const createSpotlightSchema = z.object({
  ambassadorId: z.number().int().positive(),
  month: z.string().min(1).max(2),
  year: z.number().int().min(2020).max(2100),
  title: z.string().max(200).optional(),
  description: z.string().max(1000).optional(),
  isActive: z.boolean().default(true),
});

export const updateSpotlightSchema = z.object({
  title: z.string().max(200).optional(),
  description: z.string().max(1000).optional(),
  isActive: z.boolean().optional(),
});

export const ambassadorQuerySchema = z.object({
  status: z.enum(["PENDING", "APPROVED", "REJECTED"]).optional(),
  search: z.string().max(100).optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
});
