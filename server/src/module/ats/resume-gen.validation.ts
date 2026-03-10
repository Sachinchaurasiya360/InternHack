import { z } from "zod";

export { type UserProfile } from "./cover-letter.validation.js";

export const generateResumeSchema = z.object({
  jobTitle: z.string().optional(),
  jobDescription: z.string().min(50, "Job description must be at least 50 characters").optional(),
  keySkills: z.string().optional(),
  useProfile: z.boolean().optional(),
});

export type GenerateResumeInput = z.infer<typeof generateResumeSchema>;
