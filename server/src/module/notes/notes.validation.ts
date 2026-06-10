import { z } from "zod";

/**
 * Content surfaces that can carry a universal study note. Kept as a closed
 * enum so the API rejects unknown discriminators before they reach the DB.
 */
export const NOTE_CONTENT_TYPES = [
  "lesson",
  "interview-question",
  "aptitude-question",
  "roadmap-topic",
] as const;

export const noteContentTypeSchema = z.enum(NOTE_CONTENT_TYPES);

export const upsertNoteSchema = z.object({
  contentType: noteContentTypeSchema,
  contentId: z.string().trim().min(1, "contentId is required").max(255),
  note: z.string().trim().min(1, "note cannot be empty").max(10_000),
});

export const deleteNoteSchema = z.object({
  contentType: noteContentTypeSchema,
  contentId: z.string().trim().min(1, "contentId is required").max(255),
});

export const listNotesQuerySchema = z.object({
  search: z.string().trim().max(255).optional(),
});

export type UpsertNoteInput = z.infer<typeof upsertNoteSchema>;
export type DeleteNoteInput = z.infer<typeof deleteNoteSchema>;
export type ListNotesQuery = z.infer<typeof listNotesQuerySchema>;
export type NoteContentType = z.infer<typeof noteContentTypeSchema>;
