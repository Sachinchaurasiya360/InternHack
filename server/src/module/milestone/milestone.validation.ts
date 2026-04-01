import { z } from "zod";

export const reportMilestoneSchema = z.object({
  body: z.object({
    type: z.enum(["INTERVIEW_SECTION_COMPLETE", "COURSE_COMPLETE"]),
    key: z.string().min(1).max(100),
  }),
});
