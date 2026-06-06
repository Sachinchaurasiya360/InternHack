import { z } from "zod";

export const updatePreferencesSchema = z.object({
  desiredRoles: z.array(z.string().min(1).max(100)).max(20).optional(),
  desiredSkills: z.array(z.string().min(1).max(100)).max(20).optional(),
  desiredLocations: z.array(z.string().min(1).max(100)).max(20).optional(),
  minSalary: z.number().int().positive().nullable().optional(),
  workMode: z.array(z.enum(["REMOTE", "HYBRID", "ONSITE"])).max(5).optional(),
  experienceLevel: z.array(z.enum(["INTERN", "ENTRY", "MID", "SENIOR"])).max(4).optional(),
  domains: z.array(z.string().min(1).max(100)).max(20).optional(),
});

export const feedQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(50).default(10),
});
