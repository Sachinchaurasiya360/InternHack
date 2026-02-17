import { z } from "zod";

export const scoreResumeSchema = z.object({
  resumeUrl: z.string().min(1, "Resume URL is required"),
  jobTitle: z.string().optional(),
  jobDescription: z.string().optional(),
});
