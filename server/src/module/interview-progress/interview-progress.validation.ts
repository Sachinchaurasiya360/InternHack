import { z } from "zod";

export const updateInterviewProgressSchema = z.object({
  questionId: z.string(),
  action: z.enum([
    "complete",
    "uncomplete",
    "bookmark",
    "unbookmark",
    "visit",
  ]),
});