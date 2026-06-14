import { z } from "zod";
import { NoteContentType } from "@prisma/client";

export const noteParamSchema = z.object({
  contentType: z.nativeEnum(NoteContentType),
  contentId: z.string().min(1),
});

export const saveNoteSchema = z.object({
  note: z.string().max(4000),
});

export const notesQuerySchema = z.object({
  contentType: z.nativeEnum(NoteContentType).optional(),
  search: z.string().optional(),
});
