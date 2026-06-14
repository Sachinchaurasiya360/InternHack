import { z } from "zod";

export const gsocReviewSchema = z.object({
  draft: z
    .string()
    .min(50, "Draft must be at least 50 characters")
    .max(8000, "Draft must not exceed 8000 characters"),
  targetOrg: z.string().max(200).optional(),
  targetStack: z.string().max(200).optional(),
});

export type GsocReviewInput = z.infer<typeof gsocReviewSchema>;
