import { z } from "zod";

export const deleteResumeSchema = z.object({
  url: z.string().url("Valid resume URL is required"),
});
