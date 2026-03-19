import { z } from "zod";

export const updatePreferencesSchema = z.object({
  desiredRoles: z.array(z.string()).optional(),
  desiredSkills: z.array(z.string()).optional(),
  desiredLocations: z.array(z.string()).optional(),
  minSalary: z.number().int().positive().nullable().optional(),
  workMode: z.array(z.enum(["REMOTE", "HYBRID", "ONSITE"])).optional(),
  experienceLevel: z.array(z.enum(["INTERN", "ENTRY", "MID", "SENIOR"])).optional(),
  domains: z.array(z.string()).optional(),
});

export const feedQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(50).default(10),
});
