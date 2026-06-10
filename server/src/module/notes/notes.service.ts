import { prisma } from "../../database/db.js";
import type {
  DeleteNoteInput,
  ListNotesQuery,
  UpsertNoteInput,
} from "./notes.validation.js";

/** Serialized shape returned to clients (dates as ISO strings). */
export interface SerializedNote {
  id: number;
  contentType: string;
  contentId: string;
  note: string;
  createdAt: string;
  updatedAt: string;
}

interface NoteRecord {
  id: number;
  contentType: string;
  contentId: string;
  note: string;
  createdAt: Date;
  updatedAt: Date;
}

export class NotesService {
  private serialize(note: NoteRecord): SerializedNote {
    return {
      id: note.id,
      contentType: note.contentType,
      contentId: note.contentId,
      note: note.note,
      createdAt: note.createdAt.toISOString(),
      updatedAt: note.updatedAt.toISOString(),
    };
  }

  /**
   * Fetch every note for a student, newest first. When `search` is provided the
   * filtering happens server-side against the note body (case-insensitive).
   */
  async listNotes(
    userId: number,
    query: ListNotesQuery,
  ): Promise<SerializedNote[]> {
    const search = query.search;

    const notes = await prisma.studentNote.findMany({
      where: {
        userId,
        ...(search ? { note: { contains: search, mode: "insensitive" } } : {}),
      },
      orderBy: { updatedAt: "desc" },
    });

    return notes.map((note) => this.serialize(note));
  }

  /**
   * Create or update a note keyed by the (userId, contentType, contentId)
   * composite. Returns the persisted note.
   */
  async upsertNote(
    userId: number,
    input: UpsertNoteInput,
  ): Promise<SerializedNote> {
    const note = await prisma.studentNote.upsert({
      where: {
        userId_contentType_contentId: {
          userId,
          contentType: input.contentType,
          contentId: input.contentId,
        },
      },
      create: {
        userId,
        contentType: input.contentType,
        contentId: input.contentId,
        note: input.note,
      },
      update: {
        note: input.note,
      },
    });

    return this.serialize(note);
  }

  /**
   * Remove a note for the given content key. Returns true when a row was
   * deleted, false when nothing matched (idempotent for the caller).
   */
  async deleteNote(userId: number, input: DeleteNoteInput): Promise<boolean> {
    const result = await prisma.studentNote.deleteMany({
      where: {
        userId,
        contentType: input.contentType,
        contentId: input.contentId,
      },
    });

    return result.count > 0;
  }
}
