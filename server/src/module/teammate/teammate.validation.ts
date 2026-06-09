import { z } from "zod";

export const createProfileSchema = z.object({
  preferredRole: z.string().min(1),
  availability: z.string().min(1),
  experienceLevel: z.string().min(1),
  skills: z.array(z.string()).default([]),
  techStack: z.array(z.string()).default([]),
});

export const inviteSchema = z.object({
  hackathonId: z.number(),
  receiverId: z.number(),
});