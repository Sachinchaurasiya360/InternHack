import { z } from "zod";

export const coachSuggestSchema = z.object({
  trigger: z.enum([
    "FIRST_PR_COMPLETE",
    "REPO_BOOKMARKED",
    "GITHUB_CONNECTED",
    "INACTIVITY",
    "MANUAL",
  ]),
  context: z.object({
    completedGuides: z.array(z.string()).optional().default([]),
    skills: z.array(z.string()).optional().default([]),
    bookmarkedRepos: z
      .array(
        z.object({
          name: z.string(),
          language: z.string().optional(),
          domain: z.string().optional(),
        }),
      )
      .optional()
      .default([]),
    githubUsername: z.string().optional(),
    lastActiveGuide: z.string().optional(),
    daysSinceLastActivity: z.number().optional(),
  }),
});

export const coachSaveSchema = z.object({
  content: z.string().min(1).max(20000),
  trigger: z.string().min(1).max(50),
  title: z.string().min(1).max(200).optional(),
});

export type CoachSuggestInput = z.infer<typeof coachSuggestSchema>;
export type CoachSaveInput = z.infer<typeof coachSaveSchema>;
