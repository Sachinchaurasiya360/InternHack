import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import type { NoteContentType, StudyNote } from "../../../lib/types";
import { NOTE_CONTENT_TYPE_LABELS } from "../../../lib/types";

const GROUP_ORDER: NoteContentType[] = [
  "lesson",
  "interview-question",
  "aptitude-question",
  "roadmap-topic",
];

/** Stable grouping of notes by content type, in a fixed display order. */
export function groupNotes(
  notes: StudyNote[],
): Array<{ type: NoteContentType; label: string; notes: StudyNote[] }> {
  return GROUP_ORDER.map((type) => ({
    type,
    label: NOTE_CONTENT_TYPE_LABELS[type],
    notes: notes.filter((n) => n.contentType === type),
  })).filter((group) => group.notes.length > 0);
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString();
}

/** Build a clean Markdown document from the student's notes. */
export function notesToMarkdown(notes: StudyNote[]): string {
  const lines: string[] = ["# My Study Notes", ""];

  if (notes.length === 0) {
    lines.push("_No notes yet._", "");
    return lines.join("\n");
  }

  for (const group of groupNotes(notes)) {
    lines.push(`## ${group.label}`, "");
    for (const note of group.notes) {
      lines.push(`### ${note.contentId}`, "");
      lines.push(`> Last updated: ${formatDate(note.updatedAt)}`, "");
      lines.push(note.note, "");
    }
  }

  return lines.join("\n");
}

/** Trigger a Markdown file download of all notes. */
export function exportNotesMarkdown(notes: StudyNote[]): void {
  const md = notesToMarkdown(notes);
  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
  saveAs(blob, "study-notes.md");
}

/**
 * Render notes into a paginated PDF using jsPDF and trigger a download.
 * Handles long notes with word-wrapping and automatic page breaks.
 */
export function exportNotesPdf(notes: StudyNote[]): void {
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const ensureSpace = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const writeWrapped = (
    text: string,
    fontSize: number,
    fontStyle: "normal" | "bold",
    lineGap = 4,
  ) => {
    doc.setFont("helvetica", fontStyle);
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, contentWidth) as string[];
    const lineHeight = fontSize + lineGap;
    for (const line of lines) {
      ensureSpace(lineHeight);
      doc.text(line, margin, y);
      y += lineHeight;
    }
  };

  // Title
  writeWrapped("My Study Notes", 22, "bold", 6);
  y += 8;

  if (notes.length === 0) {
    writeWrapped("No notes yet.", 12, "normal");
  }

  for (const group of groupNotes(notes)) {
    y += 10;
    ensureSpace(28);
    writeWrapped(group.label, 15, "bold", 5);
    y += 4;

    for (const note of group.notes) {
      y += 6;
      ensureSpace(20);
      writeWrapped(note.contentId, 11, "bold", 4);
      writeWrapped(
        `Last updated: ${formatDate(note.updatedAt)}`,
        8,
        "normal",
        3,
      );
      y += 2;
      writeWrapped(note.note, 11, "normal", 4);
    }
  }

  doc.save("study-notes.pdf");
}
