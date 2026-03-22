import { z } from "zod";

export const executeCodeSchema = z.object({
  language: z.enum(["python", "cpp", "java"]),
  code: z.string().min(1, "Code is required").max(50000, "Code too long"),
});
