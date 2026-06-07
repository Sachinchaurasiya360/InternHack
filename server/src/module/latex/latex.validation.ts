import { z } from "zod";

const supportingFileSchema = z.object({
  filename: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[\w.-]+\.(cls|sty|bst|bib|tex)$/, "Only .cls, .sty, .bst, .bib, .tex files allowed"),
  content: z.string().min(1).max(200000),
});

export const compileLatexSchema = z.object({
  source: z
    .string()
    .min(10, "LaTeX source too short")
    .max(200000, "LaTeX source too large (200KB max)"),
  supportingFiles: z.array(supportingFileSchema).max(5).optional().default([]),
});

export type CompileLatexInput = z.infer<typeof compileLatexSchema>;
