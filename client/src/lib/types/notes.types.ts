// Universal study notes — mirrors the server `studentNote` model.

/** Content surfaces a note can be attached to. */
export type NoteContentType =
  | "lesson"
  | "interview-question"
  | "aptitude-question"
  | "roadmap-topic";

export interface StudyNote {
  id: number;
  contentType: NoteContentType;
  contentId: string;
  note: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpsertNotePayload {
  contentType: NoteContentType;
  contentId: string;
  note: string;
}

export interface DeleteNotePayload {
  contentType: NoteContentType;
  contentId: string;
}

/** Human-readable labels for each content type, used across notes UI. */
export const NOTE_CONTENT_TYPE_LABELS: Record<NoteContentType, string> = {
  lesson: "Lessons",
  "interview-question": "Interview Questions",
  "aptitude-question": "Aptitude Questions",
  "roadmap-topic": "Roadmap Topics",
};
