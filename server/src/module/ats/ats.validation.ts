import { z } from "zod";

export const scoreResumeSchema = z.object({
  resumeUrl: z
    .string()
    .min(1, "Resume URL is required")
    .refine(
      (url) => url.startsWith("https://") || url.startsWith("/uploads/"),
      "Resume URL must be an S3 URL or local upload path",
    ),
  jobTitle: z.string().max(200).optional(),
  jobDescription: z.string().max(5000).optional(),
});
