import { z } from "zod";

export const createProfileSchema = z.object({
  preferredRole: z.string().optional().default(''),
  availability: z.string().optional().default(''),
  experienceLevel: z.string().optional().default(''),
  skills: z.array(z.string()).default([]),
  techStack: z.array(z.string()).default([]),
});

export const inviteSchema = z.object({
  hackathonId: z.number().optional(),
  receiverId: z.number(),
});