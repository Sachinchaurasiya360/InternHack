import { z } from "zod";

/**
 * Query params for fetching leaderboard
 */
export const leaderboardQuerySchema = z.object({
  view: z.enum(["global", "weekly", "monthly", "university", "domain"]).default("global"),
  domain: z.string().optional(), // Required when view=domain
  limit: z.coerce.number().int().min(1).max(100).default(100),
  page: z.coerce.number().int().min(1).default(1),
});

/**
 * Update privacy settings
 */
export const updatePrivacySchema = z.object({
  isPublic: z.boolean().optional(),
  showRealName: z.boolean().optional(),
});

export type LeaderboardQuery = z.infer<typeof leaderboardQuerySchema>;
export type UpdatePrivacy = z.infer<typeof updatePrivacySchema>;
