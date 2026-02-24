import { z } from "zod";

export const generateCoverLetterSchema = z.object({
  jobDescription: z.string().min(50, "Job description must be at least 50 characters"),
  jobTitle: z.string().optional(),
  companyName: z.string().optional(),
  keySkills: z.string().optional(),
  tone: z.enum(["professional", "friendly", "enthusiastic"]),
});

export type GenerateCoverLetterInput = z.infer<typeof generateCoverLetterSchema>;
