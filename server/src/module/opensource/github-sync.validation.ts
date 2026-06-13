import { z } from "zod";

export const githubCallbackSchema = z.object({
  code: z.string().min(1, "OAuth code is required"),
  state: z.string().min(1, "OAuth state is required").optional(),
});
