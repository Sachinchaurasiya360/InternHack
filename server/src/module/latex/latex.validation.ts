import { z } from "zod";

export const compileLatexSchema = z.object({
  source: z
    .string()
    .min(10, "LaTeX source too short")
    .max(200000, "LaTeX source too large (200KB max)"),
});

export type CompileLatexInput = z.infer<typeof compileLatexSchema>;
