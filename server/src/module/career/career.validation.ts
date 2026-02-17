import { z } from "zod";

export const enrollSchema = z.object({
  careerId: z.number().int().positive("Career ID must be a positive integer"),
});

export const toggleSkillSchema = z.object({
  skillId: z.number().int().positive("Skill ID must be a positive integer"),
});
