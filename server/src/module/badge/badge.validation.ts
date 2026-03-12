import { z } from "zod";

export const createBadgeSchema = z.object({
  name: z.string().min(1).max(100),
  slug: z.string().optional(),
  description: z.string().min(1),
  iconUrl: z.string().url().optional().or(z.literal("")),
  category: z.enum(["CAREER", "QUIZ", "SKILL", "CONTRIBUTION", "MILESTONE"]),
  criteria: z.object({
    type: z.string(),
    params: z.record(z.string(), z.unknown()).optional(),
  }),
  isActive: z.boolean().default(true),
});

export const updateBadgeSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  slug: z.string().optional(),
  description: z.string().min(1).optional(),
  iconUrl: z.string().url().optional().or(z.literal("")),
  category: z.enum(["CAREER", "QUIZ", "SKILL", "CONTRIBUTION", "MILESTONE"]).optional(),
  criteria: z.object({
    type: z.string(),
    params: z.record(z.string(), z.unknown()).optional(),
  }).optional(),
  isActive: z.boolean().optional(),
});

export const badgeQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().optional(),
  category: z.enum(["CAREER", "QUIZ", "SKILL", "CONTRIBUTION", "MILESTONE"]).optional(),
});

export const checkBadgesSchema = z.object({
  trigger: z.string().min(1),
  context: z.record(z.string(), z.unknown()).optional(),
});
