import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Download, FileText, NotebookPen, Pencil, Search } from "lucide-react";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import type { NoteContentType, StudyNote } from "../../../lib/types";
import { NOTE_CONTENT_TYPE_LABELS } from "../../../lib/types";
import { useNotes } from "./useNotes";
import {
  exportNotesMarkdown,
  exportNotesPdf,
  groupNotes,
} from "./notes-export";

/** Best-effort deep link back to the content a note belongs to. */
function noteLink(note: StudyNote): string | null {
  switch (note.contentType) {
    case "lesson":
      // contentId is stored as `<track>/<section>/<lesson>`.
      return `/learn/${note.contentId}`;
    case "roadmap-topic":
      // contentId is stored as `<slug>/<topicSlug>`.
      return `/learn/roadmaps/${note.contentId}`;
    default:
      // interview-question / aptitude-question ids lack section context.
      return null;
  }
}

const TYPE_ACCENT: Record<NoteContentType, string> = {
  lesson:
    "text-lime-700 dark:text-lime-400 border-lime-300 dark:border-lime-900/60",
  "interview-question":
    "text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-900/60",
  "aptitude-question":
    "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-900/60",
  "roadmap-topic":
    "text-violet-700 dark:text-violet-400 border-violet-300 dark:border-violet-900/60",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString();
}

function NoteCard({ note }: { note: StudyNote }) {
  const link = noteLink(note);
  return (
    <div className="flex flex-col gap-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4 hover:border-stone-300 dark:hover:border-white/20 transition-colors">
      <div className="flex items-center justify-between gap-2">
        <span
          className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border rounded-md ${TYPE_ACCENT[note.contentType]}`}
        >
          {NOTE_CONTENT_TYPE_LABELS[note.contentType]}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600 tabular-nums">
          {formatDate(note.updatedAt)}
        </span>
      </div>

      <p className="text-xs font-mono text-stone-500 dark:text-stone-400 break-all line-clamp-1">
        {note.contentId}
      </p>

      <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line line-clamp-6">
        {note.note}
      </p>

      {link && (
        <Link
          to={link}
          className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 hover:text-lime-600 dark:hover:text-lime-400 transition-colors no-underline"
        >
          <Pencil className="w-3 h-3" />
          open & edit
        </Link>
      )}
    </div>
  );
}

export default function NotesDashboardPage() {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce the input before hitting the server-side `?search=` filter.
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchInput.trim()), 300);
    return () => clearTimeout(t);
  }, [searchInput]);

  const { notes, isLoading } = useNotes(debouncedSearch || undefined);

  const groups = useMemo(() => groupNotes(notes), [notes]);
  const hasNotes = notes.length > 0;

  return (
    <div className="relative text-stone-900 dark:text-stone-50 pb-12">
      <SEO
        title="My Study Notes"
        description="All your study notes across lessons, interview questions, aptitude practice, and roadmap topics in one place."
        canonicalUrl={canonicalUrl("/learn/notes")}
        noIndex
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-2 mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-6"
      >
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            learn / notes
          </div>
          <h1 className="mt-3 inline-flex items-center gap-2.5 text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
            <NotebookPen className="w-7 h-7 text-lime-500" />
            My Study Notes
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-xl">
            Everything you&apos;ve jotted down while learning — grouped by where
            you wrote it.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => exportNotesMarkdown(notes)}
            disabled={!hasNotes}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:border-lime-400 hover:text-lime-700 dark:hover:text-lime-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            Markdown
          </button>
          <button
            type="button"
            onClick={() => exportNotesPdf(notes)}
            disabled={!hasNotes}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:border-lime-400 hover:text-lime-700 dark:hover:text-lime-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            PDF
          </button>
        </div>
      </motion.div>

      {/* Search */}
      <div className="relative mb-8 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search your notes…"
          className="w-full pl-9 pr-3 py-2.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:border-lime-500 focus-visible:ring-2 focus-visible:ring-lime-500/40 transition-colors"
        />
      </div>

      {/* Body */}
      {isLoading ? (
        <p className="text-sm text-stone-500">Loading your notes…</p>
      ) : !hasNotes ? (
        <div className="text-center py-20 bg-white dark:bg-stone-900 border border-dashed border-stone-300 dark:border-white/15 rounded-md">
          <NotebookPen className="w-8 h-8 text-stone-400 mx-auto mb-3" />
          <p className="text-sm font-bold text-stone-700 dark:text-stone-300">
            {debouncedSearch ? "No notes match your search." : "No notes yet."}
          </p>
          <p className="mt-1 text-xs text-stone-500 max-w-sm mx-auto">
            {debouncedSearch
              ? "Try a different keyword."
              : "Open any lesson, interview question, aptitude question, or roadmap topic and tap “Add note”."}
          </p>
        </div>
      ) : (
        <div className="space-y-10">
          {groups.map((group) => (
            <section key={group.type}>
              <div className="mb-4 flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border rounded-md ${TYPE_ACCENT[group.type]}`}
                >
                  {group.label}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600 tabular-nums">
                  {group.notes.length}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.notes.map((note) => (
                  <NoteCard key={note.id} note={note} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
