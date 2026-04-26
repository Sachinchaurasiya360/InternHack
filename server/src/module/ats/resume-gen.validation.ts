import { z } from "zod";

export { type UserProfile } from "./cover-letter.validation.js";

// Hard caps, mirror the client soft limits but enforced authoritatively here.
export const JD_MAX_CHARS = 5000;
export const KEY_SKILLS_MAX_CHARS = 1000;
export const JOB_TITLE_MAX_CHARS = 200;

export const generateResumeSchema = z.object({
  jobTitle: z.string().max(JOB_TITLE_MAX_CHARS, `Job title must be under ${JOB_TITLE_MAX_CHARS} characters`).optional(),
  jobDescription: z
    .string()
    .min(50, "Job description must be at least 50 characters")
    .max(JD_MAX_CHARS, `Job description must be under ${JD_MAX_CHARS} characters`)
    .optional(),
  keySkills: z
    .string()
    .max(KEY_SKILLS_MAX_CHARS, `Key skills must be under ${KEY_SKILLS_MAX_CHARS} characters`)
    .optional(),
  useProfile: z.boolean().optional(),
});

export type GenerateResumeInput = z.infer<typeof generateResumeSchema>;
