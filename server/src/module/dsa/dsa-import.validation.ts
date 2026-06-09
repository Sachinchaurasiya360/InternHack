import { z } from "zod";

export const leetcodeImportSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .max(50, "Username too long")
    .regex(/^[a-zA-Z0-9_-]+$/, "Invalid username format"),
});

export const csvImportSchema = z.object({
  csvContent: z.string().min(1, "CSV content is required").max(5 * 1024 * 1024, "CSV too large (max 5 MB)"),
});

export const confirmImportSchema = z.object({
  token: z.string().uuid("Invalid import token"),
});

export const bulkVideoImportSchema = z.object({
  entries: z
    .array(
      z.object({
        slug: z.string().min(1, "Slug is required"),
        videoUrl: z.string().url("Must be a valid URL").refine(
          (url) => url.includes("youtube.com") || url.includes("youtu.be"),
          "Must be a YouTube URL",
        ),
      }),
    )
    .min(1, "At least one entry required")
    .max(500, "Max 500 entries per request"),
});
