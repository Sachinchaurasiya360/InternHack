import api from "../../../lib/axios";
import type {
  DeleteNotePayload,
  StudyNote,
  UpsertNotePayload,
} from "../../../lib/types";

interface NotesListResponse {
  notes: StudyNote[];
}

interface NoteResponse {
  note: StudyNote;
}

/** Fetch all of the current student's notes, optionally filtered server-side. */
export async function fetchNotes(search?: string): Promise<StudyNote[]> {
  const { data } = await api.get<NotesListResponse>("/notes", {
    params: search ? { search } : undefined,
  });
  return data.notes;
}

/** Create or update a note keyed by (contentType, contentId). */
export async function upsertNote(
  payload: UpsertNotePayload,
): Promise<StudyNote> {
  const { data } = await api.put<NoteResponse>("/notes", payload);
  return data.note;
}

/** Delete a note for a given content key. */
export async function deleteNote(payload: DeleteNotePayload): Promise<void> {
  await api.delete("/notes", { data: payload });
}
