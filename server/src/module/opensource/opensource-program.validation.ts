import { z } from "zod";

export const toggleProgramSchema = z.object({
  slug: z.string().min(1),
  tracked: z.boolean(),
});

export const createProgramSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  short: z.string().min(1),
  description: z.string().min(1),
  fullDescription: z.string().optional(),
  eligibility: z.string().optional(),
  eligibilityType: z.string().optional(),
  stipend: z.string().optional(),
  stipendPaid: z.string().optional(),
  stipendRange: z.string().optional(),
  window: z.string().optional(),
  region: z.string().optional(),
  website: z.string().optional(),
  applyUrl: z.string().optional(),
  color: z.string().optional(),
  bgColor: z.string().optional(),
  tags: z.array(z.string()).optional(),
  requirements: z.array(z.string()).optional(),
  timeline: z.any().optional(),
  howToApply: z.string().optional(),
  applicationStart: z.string().datetime().optional(),
  applicationDeadline: z.string().datetime().optional(),
  resultsDate: z.string().datetime().optional(),
  programStart: z.string().datetime().optional(),
  programEnd: z.string().datetime().optional(),
  active: z.boolean().optional(),
});

export const updateProgramSchema = createProgramSchema.partial();
