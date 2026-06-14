import { z } from "zod";

export const studyBuddyParams = z.object({
  roadmapId: z.coerce.number().int().positive(),
});

export const studyBuddyOptInSchema = z.object({
  preferSameCollege: z.boolean().default(false),
});

export type StudyBuddyOptInInput = z.infer<typeof studyBuddyOptInSchema>;
