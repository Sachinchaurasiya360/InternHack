import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Download,
  Trash2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Loader2,
  StickyNote,
  AlertCircle,
} from "lucide-react";

import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { NotesPanel } from "../../../components/learning/NotesPanel";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import toast from "@/components/ui/toast";
import { GridBackground } from "../../../components/ui/GridBackground";

interface Note {
  id: number;
  userId: number;
  contentType: "DSA_PROBLEM" | "ROADMAP_TOPIC" | "INTERVIEW_QUESTION" | "APTITUDE_QUESTION";
  contentId: string;
  note: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  url: string;
}

const CONTENT_TYPE_LABELS = {
  DSA_PROBLEM: "DSA Problem",
  ROADMAP_TOPIC: "Roadmap Topic",
  INTERVIEW_QUESTION: "Interview Question",
  APTITUDE_QUESTION: "Aptitude Question",
};

const CONTENT_TYPE_BADGES = {
  DSA_PROBLEM: "bg-lime-50 text-lime-700 dark:bg-lime-950/30 dark:text-lime-400 border-lime-200 dark:border-lime-900/50",
  ROADMAP_TOPIC: "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 border-blue-200 dark:border-blue-900/50",
  INTERVIEW_QUESTION: "bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400 border-purple-200 dark:border-purple-900/50",
  APTITUDE_QUESTION: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border-amber-200 dark:border-amber-900/50",
};

interface NoteCardProps {
  note: Note;
  isExpanded: boolean;
  isConfirmingDelete: boolean;
  badgeClass: string;
  onDelete: (note: Note) => void;
  onCancelDelete: () => void;
  onConfirmDeleteId: (id: number) => void;
  onToggleExpand: (note: Note) => void;
}

export const NoteCard = React.memo(function NoteCard({
  note,
  isExpanded,
  isConfirmingDelete,
  badgeClass,
  onDelete,
  onCancelDelete,
  onConfirmDeleteId,
  onToggleExpand,
}: NoteCardProps) {
  return (
    <motion.div
      layout="position"
      className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg p-5 hover:shadow-xs transition-shadow flex flex-col"
    >
      {/* Card Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`px-2 py-0.5 border text-xs font-mono uppercase tracking-wider rounded-sm ${badgeClass}`}>
            {CONTENT_TYPE_LABELS[note.contentType]}
          </span>
          <span className="text-xs font-mono text-stone-400 dark:text-stone-500 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(note.updatedAt).toLocaleDateString()}
          </span>
        </div>

        <div className="flex items-center gap-1">
          {note.url && (
            <Link
              to={note.url}
              title="Open original resource"
              className="p-1.5 rounded-md hover:bg-stone-100 dark:hover:bg-white/5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}

          {isConfirmingDelete ? (
            <div className="flex items-center gap-1 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-md p-0.5">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDelete(note)}
                className="px-2 py-0.5 text-xs font-mono uppercase font-bold text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xs h-auto min-h-0"
              >
                Yes
              </Button>
              <span className="text-xs text-stone-400 font-mono">|</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={onCancelDelete}
                className="px-2 py-0.5 text-xs font-mono uppercase text-stone-500 hover:bg-stone-100 dark:hover:bg-white/5 rounded-xs h-auto min-h-0"
              >
                No
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onConfirmDeleteId(note.id)}
              title="Delete note"
              className="p-1.5 rounded-md hover:bg-red-50 dark:hover:bg-red-950/15 text-stone-400 hover:text-red-500 dark:text-stone-500 dark:hover:text-red-400 transition-colors h-auto min-h-0"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-base font-bold text-stone-900 dark:text-stone-50">
        {note.url ? (
          <Link to={note.url} className="hover:underline">
            {note.title}
          </Link>
        ) : (
          note.title
        )}
      </h3>

      {/* Note Content Preview / Editor */}
      <div className="mt-3 flex-1">
        {!isExpanded ? (
          <p className="text-sm text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed whitespace-pre-wrap">
            {note.note}
          </p>
        ) : (
          <div className="mt-2">
            <NotesPanel contentType={note.contentType} contentId={note.contentId} />
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <div className="mt-4 pt-3 border-t border-stone-100 dark:border-white/5 flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onToggleExpand(note)}
          className="text-xs font-mono uppercase tracking-wider flex items-center gap-1 h-8 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" /> Close Editor
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" /> Read &amp; Edit Note
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
});

export default function NotesDashboardPage() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("recent");
  const [expandedNoteId, setExpandedNoteId] = useState<number | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  // Fetch all notes (we will perform high-performance client-side filtering and search for instant UI updates)
  const { data, isLoading, isError } = useQuery<{ notes: Note[] }>({
    queryKey: queryKeys.notes.list(),
    queryFn: () => api.get<{ notes: Note[] }>("/notes").then((res) => res.data),
    staleTime: 2 * 60 * 1000, // 2 minutes stale time
  });

  const notesList = useMemo(() => data?.notes ?? [], [data?.notes]);

  const deleteMutation = useMutation({
    mutationFn: ({ contentType, contentId }: { contentType: string; contentId: string }) =>
      api.delete(`/notes/${contentType}/${contentId}`).then((r) => r.data),
    onSuccess: () => {
      toast.success("Note deleted successfully");
      setConfirmDeleteId(null);
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.list() });
    },
    onError: () => {
      toast.error("Failed to delete note");
    },
  });

  const handleDelete = useCallback((note: Note) => {
    deleteMutation.mutate({
      contentType: note.contentType,
      contentId: note.contentId,
    });
  }, [deleteMutation]);

  const toggleExpand = useCallback((note: Note) => {
    if (expandedNoteId === note.id) {
      // Refresh notes list on close to update the truncated preview text
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.list() });
      setExpandedNoteId(null);
    } else {
      setExpandedNoteId(note.id);
    }
  }, [expandedNoteId, queryClient]);

  const handleCancelDelete = useCallback(() => {
    setConfirmDeleteId(null);
  }, []);

  const handleConfirmDeleteId = useCallback((id: number) => {
    setConfirmDeleteId(id);
  }, []);

  // Perform filtering, searching and sorting client-side
  const filteredAndSortedNotes = useMemo(() => {
    let result = [...notesList];

    // Filter by type
    if (activeTab !== "All") {
      result = result.filter((n) => n.contentType === activeTab);
    }

    // Filter by search query
    const needle = search.trim().toLowerCase();
    if (needle) {
      result = result.filter(
        (n) =>
          n.note.toLowerCase().includes(needle) ||
          n.title.toLowerCase().includes(needle) ||
          CONTENT_TYPE_LABELS[n.contentType].toLowerCase().includes(needle)
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === "oldest") {
        return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
      } else if (sortBy === "created") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else if (sortBy === "length_long") {
        return b.note.length - a.note.length;
      } else if (sortBy === "length_short") {
        return a.note.length - b.note.length;
      } else {
        // default: recent
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }
    });

    return result;
  }, [notesList, activeTab, search, sortBy]);

  // Export filtered notes to Markdown (.md) file
  const handleExportMarkdown = () => {
    if (filteredAndSortedNotes.length === 0) {
      toast.error("No notes to export");
      return;
    }

    let mdContent = `# My Study Notes - InternHack\n`;
    mdContent += `Exported on: ${new Date().toLocaleDateString()}\n\n`;
    mdContent += `Total Notes: ${filteredAndSortedNotes.length}\n\n`;
    mdContent += `---\n\n`;

    filteredAndSortedNotes.forEach((n) => {
      const typeLabel = CONTENT_TYPE_LABELS[n.contentType];
      const dateStr = new Date(n.updatedAt).toLocaleString();
      const originUrl = n.url ? `${window.location.origin}${n.url}` : "";

      mdContent += `## [${typeLabel}] ${n.title}\n`;
      mdContent += `* **Last Updated:** ${dateStr}\n`;
      if (originUrl) {
        mdContent += `* **Original Content:** [Link to resource](${originUrl})\n`;
      }
      mdContent += `\n`;
      mdContent += `${n.note}\n\n`;
      mdContent += `---\n\n`;
    });

    const blob = new Blob([mdContent], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `InternHack_Study_Notes_${new Date().toISOString().slice(0, 10)}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("Notes exported to Markdown!");
  };

  const tabs = ["All", "DSA_PROBLEM", "ROADMAP_TOPIC", "INTERVIEW_QUESTION", "APTITUDE_QUESTION"] as const;

  return (
    <div className="relative text-stone-900 dark:text-stone-50 pb-16">
      <SEO title="My Notes - InternHack" noIndex />
      <GridBackground />

      <div className="relative max-w-6xl mx-auto">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-2 mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-6"
        >
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              learn / notes
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              My Study{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Notes.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  aria-hidden
                  className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
                />
              </span>
            </h1>
            <p className="mt-3 text-sm text-stone-500 max-w-xl">
              Your personal study workspace. Access, modify, search, and export notes you took across
              all practice problems, topics, and interview questions.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportMarkdown}
              disabled={filteredAndSortedNotes.length === 0}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Export Notes (.md)
            </Button>
          </div>
        </motion.div>

        {/* Filter controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8 space-y-4"
        >
          {/* Search box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" aria-hidden />
            <input
              type="text"
              placeholder="Search note text, titles, or categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
            />
          </div>

          {/* Filtering bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-1 bg-stone-100 dark:bg-stone-800 p-1 rounded-md max-w-full overflow-x-auto">
              {tabs.map((tab) => (
                <Button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all ${
                    activeTab === tab
                      ? "bg-white dark:bg-stone-700 shadow-xs text-stone-900 dark:text-white"
                      : "bg-transparent border-transparent text-stone-500 hover:bg-transparent hover:text-stone-700 dark:hover:text-stone-300"
                  }`}
                >
                  {tab === "All" ? "All Notes" : CONTENT_TYPE_LABELS[tab]}
                </Button>
              ))}
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">Sort By</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md px-3 py-1.5 focus:outline-none focus:border-lime-400 cursor-pointer"
              >
                <option value="recent">Recently Updated</option>
                <option value="oldest">Oldest Updated</option>
                <option value="created">Created Date</option>
                <option value="length_long">Note Length (Longest)</option>
                <option value="length_short">Note Length (Shortest)</option>
              </select>
            </div>
          </div>

          {/* Results count label */}
          {(search || activeTab !== "All") && (
            <p className="mt-2 text-xs font-mono uppercase tracking-widest text-stone-500">
              {filteredAndSortedNotes.length} matching note{filteredAndSortedNotes.length === 1 ? "" : "s"}
            </p>
          )}
        </motion.div>

        {/* Notes list */}
        {isLoading ? (
          <div className="py-24 text-center">
            <Loader2 className="w-8 h-8 text-stone-400 animate-spin mx-auto mb-3" />
            <span className="text-sm text-stone-500 font-mono">Loading notes workspace...</span>
          </div>
        ) : isError ? (
          <div className="py-16 text-center border border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10 rounded-lg">
            <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <p className="text-sm font-semibold text-red-700 dark:text-red-400">Failed to load study notes</p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Please try refreshing the page.</p>
          </div>
        ) : filteredAndSortedNotes.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-lg bg-white/50 dark:bg-stone-900/20">
            <StickyNote className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <p className="text-sm font-semibold text-stone-600 dark:text-stone-400">No notes found</p>
            <p className="text-xs text-stone-500 mt-1.5">
              {search || activeTab !== "All"
                ? "Try a different search query or tab filter."
                : "Start adding personal notes on DSA problems, roadmaps, or interview prep pages to build your workspace!"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filteredAndSortedNotes.map((note) => {
              const isExpanded = expandedNoteId === note.id;
              const isConfirmingDelete = confirmDeleteId === note.id;
              const badgeClass = CONTENT_TYPE_BADGES[note.contentType] || "";

              return (
                <NoteCard
                  key={note.id}
                  note={note}
                  isExpanded={isExpanded}
                  isConfirmingDelete={isConfirmingDelete}
                  badgeClass={badgeClass}
                  onDelete={handleDelete}
                  onCancelDelete={handleCancelDelete}
                  onConfirmDeleteId={handleConfirmDeleteId}
                  onToggleExpand={toggleExpand}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
