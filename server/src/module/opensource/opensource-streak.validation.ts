import { z } from "zod";

export const tickStreakSchema = z.object({
  action: z.enum(["guide_step", "repo_suggestion", "pr_merged"]),
});

export type TickStreakInput = z.infer<typeof tickStreakSchema>;
