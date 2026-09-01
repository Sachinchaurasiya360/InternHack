import { z } from "zod";

const MAX_SOURCE_SIZE = 200_000;
const MAX_SUPPORT_FILE_SIZE = 200_000;
const MAX_TOTAL_SUPPORT_SIZE = 500_000;

const RESERVED_FILENAMES = new Set([
  "main.tex",
  "resume.tex",
  "output.pdf",
  "compile.log",
]);


const UNSAFE_COMMANDS =
  /\\(?:write18|immediate|shellescape|openout|openin|write\b|read\b|readline\b|input\b|include\b|includeonly\b|catcode\b|csname\b|newread\b|newwrite\b|loop\b|repeat\b|fileinput\b|verbatiminput\b|CatchFileEdef)/i;

const UNSAFE_PATHS =
  /\\(?:input|include|usepackage|RequirePackage|lstinputlisting)\s*(?:\[[^\]]*])?\s*\{\s*[^}]*?(?:\.\.|\/|\\)[^}]*\}/i;

const isSafeLatex = (value: string) => {
  return (
    !UNSAFE_COMMANDS.test(value) &&
    !UNSAFE_PATHS.test(value) &&
    !value.includes("\0")
  );
};

const filenameSchema = z
  .string()
  .trim()
  .min(1)
  .max(100)
  .regex(
    /^[A-Za-z0-9][A-Za-z0-9_.-]{0,99}\.(cls|sty|bst|bib|tex)$/,
    "Only .cls, .sty, .bst, .bib, .tex files are allowed"
  )
  .refine(
    (name) =>
      !name.includes("..") &&
      !name.includes("/") &&
      !name.includes("\\"),
    "Invalid filename"
  )
  .refine(
    (name) => !RESERVED_FILENAMES.has(name.toLowerCase()),
    "Reserved filename"
  );

const supportingFileSchema = z.object({
  filename: filenameSchema,

  content: z
    .string()
    .min(1)
    .max(
      MAX_SUPPORT_FILE_SIZE,
      `Supporting file exceeds ${MAX_SUPPORT_FILE_SIZE / 1000}KB`
    )
    .refine(isSafeLatex, {
      message: "Supporting file contains unsafe LaTeX content",
    }),
});

export const compileLatexSchema = z
  .object({
    source: z
      .string()
      .min(10, "LaTeX source too short")
      .max(
        MAX_SOURCE_SIZE,
        `LaTeX source exceeds ${MAX_SOURCE_SIZE / 1000}KB`
      )
      .refine(isSafeLatex, {
        message: "LaTeX source contains unsafe commands",
      }),

    supportingFiles: z
      .array(supportingFileSchema)
      .max(5, "Maximum of 5 supporting files allowed")
      .default([]),
  })
  .superRefine((data, ctx) => {
    // Duplicate filename check
    const seen = new Set<string>();

    for (const file of data.supportingFiles) {
      const name = file.filename.toLowerCase();

      if (seen.has(name)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["supportingFiles"],
          message: `Duplicate supporting file: ${file.filename}`,
        });
      }

      seen.add(name);
    }

    // Total upload size check
    const totalSize = data.supportingFiles.reduce(
      (sum, file) => sum + Buffer.byteLength(file.content, "utf8"),
      0
    );

    if (totalSize > MAX_TOTAL_SUPPORT_SIZE) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["supportingFiles"],
        message: `Supporting files exceed total size limit (${MAX_TOTAL_SUPPORT_SIZE / 1000}KB).`,
      });
    }
  });

export type CompileLatexInput = z.infer<typeof compileLatexSchema>;


