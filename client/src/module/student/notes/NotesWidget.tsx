import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, NotebookPen, Save, Trash2, X } from "lucide-react";
import toast from "../../../components/ui/toast";
import { useContentNote } from "./useNotes";
import type { NoteContentType } from "../../../lib/types";

interface NotesWidgetProps {
  contentType: NoteContentType;
  /** Stable identifier for the piece of content this note is attached to. */
  contentId: string;
  /** Human-readable title shown in the editor header (e.g. lesson title). */
  title: string;
  /** Optional className override for the floating trigger button. */
  className?: string;
}

const MAX_LENGTH = 10_000;

/**
 * Universal, self-contained study-notes control. Renders a floating trigger
 * that opens a slide-in editor panel. Persists a single note per
 * (contentType, contentId) for the signed-in student. Renders nothing for
 * guests, so it is safe to drop onto any content page unconditionally.
 */
export function NotesWidget({
  contentType,
  contentId,
  title,
  className,
}: NotesWidgetProps) {
  const { note, isStudent, save, remove, isSaving, isDeleting } =
    useContentNote(contentType, contentId);

  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Sync the editor draft with the persisted note whenever the panel opens or
  // the underlying note changes (e.g. after a save elsewhere).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (open) setDraft(note?.note ?? "");
  }, [open, note]);

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => textareaRef.current?.focus(), 120);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!isStudent) return null;

  const hasNote = !!note;
  const trimmedDraft = draft.trim();
  const dirty = trimmedDraft !== (note?.note ?? "");

  const handleSave = async () => {
    if (!trimmedDraft) {
      toast.error("Note cannot be empty");
      return;
    }
    try {
      await save(trimmedDraft);
      toast.success("Note saved");
      setOpen(false);
    } catch {
      toast.error("Could not save note");
    }
  };

  const handleDelete = async () => {
    try {
      await remove();
      toast.success("Note deleted");
      setDraft("");
      setOpen(false);
    } catch {
      toast.error("Could not delete note");
    }
  };

  const panel = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-60 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Notes for ${title}`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 flex h-full w-full max-w-md flex-col bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-white/10 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-stone-200 dark:border-white/10">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  <NotebookPen className="w-3 h-3" />
                  my note
                </div>
                <h2 className="mt-1 text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50 wrap-break-word">
                  {title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close notes"
                className="shrink-0 p-1.5 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              <textarea
                ref={textareaRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value.slice(0, MAX_LENGTH))}
                placeholder="Write anything you want to remember about this…"
                className="w-full h-full min-h-[14rem] resize-none rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/40 p-4 text-sm text-stone-800 dark:text-stone-200 leading-relaxed focus:outline-none focus:border-lime-500 focus-visible:ring-2 focus-visible:ring-lime-500/40 transition-colors"
              />
              <p className="mt-2 text-right text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600 tabular-nums">
                {draft.length} / {MAX_LENGTH}
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 px-5 py-4 border-t border-stone-200 dark:border-white/10">
              {hasNote ? (
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-red-700 dark:text-red-400 border border-red-300 dark:border-red-900/60 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {isDeleting ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Trash2 className="w-3.5 h-3.5" />
                  )}
                  delete
                </button>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={handleSave}
                disabled={isSaving || !dirty || !trimmedDraft}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold tracking-tight rounded-md bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-lime-400 hover:text-stone-900 dark:hover:bg-lime-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSaving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                {hasNote ? "Update note" : "Save note"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        title={hasNote ? "Edit your note" : "Add a note"}
        className={
          className ??
          "fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full shadow-lg bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-lime-400 hover:text-stone-900 dark:hover:bg-lime-400 transition-colors cursor-pointer"
        }
      >
        <NotebookPen className="w-4 h-4" />
        <span className="text-xs font-bold tracking-tight">
          {hasNote ? "Note" : "Add note"}
        </span>
        {hasNote && (
          <span
            className="ml-0.5 h-2 w-2 rounded-full bg-lime-400 dark:bg-lime-500"
            aria-hidden
          />
        )}
      </button>
      {typeof document !== "undefined" && createPortal(panel, document.body)}
    </>
  );
}

export default NotesWidget;
