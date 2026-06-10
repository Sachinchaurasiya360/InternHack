import { ProgressBar } from "../../../components/ui/ProgressBar";
import React, { useState, useCallback, useRef } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useParams, Link, Navigate } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Circle, ExternalLink,
  Bookmark, BookmarkCheck, StickyNote,
  Lightbulb, BookOpen, TrendingUp, Search,
} from "lucide-react";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaTopicDetail, DsaProblem, User } from "../../../lib/types";
import type { UseMutationResult } from "@tanstack/react-query";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl, SITE_URL } from "../../../lib/seo.utils";
import { breadcrumbSchema } from "../../../lib/structured-data";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { Button } from "../../../components/ui/button";
import { DIFF_COLOR } from "../../../lib/Difficulty-styles";

type DiffFilter = "All" | "Easy" | "Medium" | "Hard";

export default function DsaTopicDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState<DiffFilter>("All");
  const [search, setSearch] = useState("");
  const [noteOpen, setNoteOpen] = useState<string | null>(null);
  const [noteText, setNoteText] = useState("");
  const parentRef = useRef<HTMLDivElement>(null);

  const { data: topic, isLoading } = useQuery<DsaTopicDetail>({
    queryKey: queryKeys.dsa.topicDetail(slug!),
    queryFn: () => api.get(`/dsa/topics/${slug}`).then((r) => r.data),
    enabled: !!slug,
  });

  const toggleMutation: UseMutationResult<void, Error, string> = useMutation({
    mutationFn: (problemId: string) =>
      api.post(`/dsa/problems/${problemId}/toggle`).then((r) => r.data),
    onMutate: async (problemId) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.dsa.topicDetail(slug!) });
      const prev = queryClient.getQueryData<DsaTopicDetail>(queryKeys.dsa.topicDetail(slug!));
      queryClient.setQueryData<DsaTopicDetail>(queryKeys.dsa.topicDetail(slug!), (old) => {
        if (!old) return old;
        const wasSolved = old.problems.find((p) => p._id === problemId)?.solved ?? false;
        return {
          ...old,
          totalSolved: wasSolved ? old.totalSolved - 1 : old.totalSolved + 1,
          problems: old.problems.map((p) =>
            p._id === problemId ? { ...p, solved: !p.solved } : p
          ),
        };
      });
      return { prev };
    },
    onError: (_err, _id, context: { prev?: DsaTopicDetail } | undefined) => {
      if (context?.prev) {
        queryClient.setQueryData(queryKeys.dsa.topicDetail(slug!), context.prev);
      }
      toast.error("Failed to update. Please try again.");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.topicDetail(slug!) });
    },
  });

  const bookmarkMutation = useMutation({
    mutationFn: (problemId: string) =>
      api.post(`/dsa/problems/${problemId}/bookmark`).then((r) => r.data),
    onMutate: async (problemId) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.dsa.topicDetail(slug!) });
      const prev = queryClient.getQueryData<DsaTopicDetail>(queryKeys.dsa.topicDetail(slug!));
      queryClient.setQueryData<DsaTopicDetail>(queryKeys.dsa.topicDetail(slug!), (old) => {
        if (!old) return old;
        return {
          ...old,
          problems: old.problems.map((p) =>
            p._id === problemId ? { ...p, bookmarked: !p.bookmarked } : p
          ),
        };
      });
      return { prev };
    },
    onError: (_err, _id, context: { prev?: DsaTopicDetail } | undefined) => {
      if (context?.prev) {
        queryClient.setQueryData(queryKeys.dsa.topicDetail(slug!), context.prev);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.topicDetail(slug!) });
    },
  });

  const noteMutation = useMutation({
    mutationFn: ({ problemId, note }: { problemId: string; note: string }) =>
      api.post(`/dsa/problems/${problemId}/note`, { note }).then((r) => r.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.topicDetail(slug!) });
      setNoteOpen(null);
      setNoteText("");
    },
  });

  const filtered = React.useMemo(() => {
    if (!topic) return [];
    return topic.problems.filter((p) => {
      const matchesDiff = filter === "All" || p.difficulty === filter;
      const matchesSearch =
        !search || p.title.toLowerCase().includes(search.toLowerCase());
      return matchesDiff && matchesSearch;
    });
  }, [topic, filter, search]);

  const virtualizer = useWindowVirtualizer({
    count: filtered.length,
    estimateSize: () => 56,
    overscan: 10,
    scrollMargin: parentRef.current?.offsetTop ?? 0,
  });

  const handleToggle = useCallback(
    (problemId: string) => {
      if (!user) return;
      toggleMutation.mutate(problemId);
    },
    [user, toggleMutation]
  );

  const handleBookmark = useCallback(
    (problemId: string) => {
      if (!user) return;
      bookmarkMutation.mutate(problemId);
    },
    [user, bookmarkMutation]
  );

  if (isLoading) return <LoadingScreen />;
  if (!topic) return <Navigate to="/dsa" replace />;

  const pct = topic.totalProblems > 0
    ? Math.round((topic.totalSolved / topic.totalProblems) * 100)
    : 0;

  const jsonLd = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "DSA", url: `${SITE_URL}/dsa` },
    { name: topic.title, url: canonicalUrl(`/dsa/${slug}`) },
  ]);

  return (
    <>
      <SEO
        title={`${topic.title} â€“ DSA Practice | InternHack`}
        description={`Practice ${topic.totalProblems} ${topic.title} problems. Track your progress, bookmark questions, and add notes.`}
        canonical={canonicalUrl(`/dsa/${slug}`)}
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

          {/* Back link */}
          <Link
            to="/dsa"
            className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors mb-8"
          >
            â† all topics
          </Link>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50 mb-1">
                  {topic.title}
                </h1>
                {topic.description && (
                  <p className="text-sm text-stone-500 dark:text-stone-400 max-w-xl">
                    {topic.description}
                  </p>
                )}
              </div>

              {/* Stats badges */}
              <div className="flex items-center gap-2 flex-wrap">
                {(["Easy", "Medium", "Hard"] as const).map((d) => {
                  const count = topic.problems.filter((p) => p.difficulty === d).length;
                  if (!count) return null;
                  return (
                    <span
                      key={d}
                      className={`text-[10px] font-mono uppercase tracking-widest ${DIFF_COLOR[d]}`}
                    >
                      {count} {d}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Progress â€” restored: solved count + percentage + thin bar */}
            {user && (
              <div>
                <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex-wrap mb-2">
                  <span>
                    <span className="text-stone-900 dark:text-stone-50 tabular-nums">{topic.totalSolved}</span>
                    <span className="text-stone-400 dark:text-stone-600"> / {topic.totalProblems} solved</span>
                  </span>
                  <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                  <span className="text-lime-600 dark:text-lime-400 tabular-nums">{pct}% complete</span>
                </div>
                <ProgressBar
                  value={topic.totalSolved}
                  max={topic.totalProblems}
                  height="thin"
                  activeColor={pct === 100 ? "bg-lime-400" : "bg-stone-900 dark:bg-stone-50"}
                />
              </div>
            )}
          </motion.div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { icon: TrendingUp, label: "Total", value: topic.totalProblems },
              { icon: CheckCircle2, label: "Solved", value: topic.totalSolved },
              { icon: Bookmark, label: "Bookmarked", value: topic.problems.filter((p) => p.bookmarked).length },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="px-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-center"
              >
                <Icon className="w-3.5 h-3.5 text-stone-400 mx-auto mb-1" />
                <div className="text-base font-semibold text-stone-900 dark:text-stone-50 tabular-nums">
                  {value}
                </div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-stone-400">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-stone-50 dark:bg-stone-900/50 p-4 rounded-md border border-stone-200 dark:border-white/10">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1.5">
                {(["All", "Easy", "Medium", "Hard"] as const).map((d) => (
                  <Button
                    key={d}
                    variant="ghost"
                    onClick={() => setFilter(d)}
                    className={`px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-md transition-all cursor-pointer ${
                      filter === d
                        ? "bg-stone-900 text-stone-50 dark:bg-stone-50 dark:text-stone-900"
                        : d === "All"
                        ? "text-stone-500 hover:text-stone-900 dark:hover:text-stone-50"
                        : `${DIFF_COLOR[d]} opacity-70 hover:opacity-100`
                    }`}
                  >
                    {d}
                  </Button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-400" />
              <input
                type="text"
                placeholder="Search problemsâ€¦"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-7 pr-3 py-1.5 text-xs font-mono bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 w-48"
              />
            </div>
          </div>

          {/* Problem list */}
          <div ref={parentRef}>
            {filtered.length === 0 ? (
              <div className="py-16 text-center text-[10px] font-mono uppercase tracking-widest text-stone-400">
                No problems match your filters
              </div>
            ) : (
              <div
                style={{
                  height: `${virtualizer.getTotalSize()}px`,
                  position: "relative",
                }}
              >
                {virtualizer.getVirtualItems().map((item) => {
                  const problem = filtered[item.index];
                  return (
                    <div
                      key={problem._id}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        transform: `translateY(${item.start - virtualizer.options.scrollMargin}px)`,
                      }}
                    >
                      <ProblemRow
                        problem={problem}
                        user={user}
                        onToggle={handleToggle}
                        onBookmark={handleBookmark}
                        noteOpen={noteOpen}
                        noteText={noteText}
                        setNoteOpen={setNoteOpen}
                        setNoteText={setNoteText}
                        onSaveNote={(id) =>
                          noteMutation.mutate({ problemId: id, note: noteText })
                        }
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}

// â”€â”€â”€ ProblemRow â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface ProblemRowProps {
  problem: DsaProblem;
  user: User | null;
  onToggle: (id: string) => void;
  onBookmark: (id: string) => void;
  noteOpen: string | null;
  noteText: string;
  setNoteOpen: (id: string | null) => void;
  setNoteText: (text: string) => void;
  onSaveNote: (id: string) => void;
}

function ProblemRow({
  problem,
  user,
  onToggle,
  onBookmark,
  noteOpen,
  noteText,
  setNoteOpen,
  setNoteText,
  onSaveNote,
}: ProblemRowProps) {
  return (
    <div className="mb-1.5">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-md border transition-colors ${
          problem.solved
            ? "bg-lime-50 dark:bg-lime-950/20 border-lime-200 dark:border-lime-800/40"
            : "bg-white dark:bg-stone-900 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/20"
        }`}
      >
        {/* Solved toggle */}
        {user && (
          <button
            onClick={() => onToggle(problem._id)}
            className="shrink-0 text-stone-300 dark:text-stone-600 hover:text-lime-500 dark:hover:text-lime-400 transition-colors"
          >
            {problem.solved ? (
              <CheckCircle2 className="w-4 h-4 text-lime-500 dark:text-lime-400" />
            ) : (
              <Circle className="w-4 h-4" />
            )}
          </button>
        )}

        {/* Title + difficulty */}
        <div className="flex-1 min-w-0 flex items-center gap-3">
          <span
            className={`text-sm text-stone-900 dark:text-stone-50 truncate ${
              problem.solved ? "line-through text-stone-400 dark:text-stone-600" : ""
            }`}
          >
            {problem.title}
          </span>
          <span className={`text-[9px] font-mono uppercase tracking-widest shrink-0 ${DIFF_COLOR[problem.difficulty]}`}>
            {problem.difficulty}
          </span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1 shrink-0">
          {user && (
            <>
              <button
                onClick={() => {
                  if (noteOpen === problem._id) {
                    setNoteOpen(null);
                  } else {
                    setNoteOpen(problem._id);
                    setNoteText(problem.note ?? "");
                  }
                }}
                className={`p-1.5 rounded transition-colors ${
                  problem.note
                    ? "text-amber-500 dark:text-amber-400"
                    : "text-stone-300 dark:text-stone-600 hover:text-stone-500"
                }`}
              >
                <StickyNote className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onBookmark(problem._id)}
                className={`p-1.5 rounded transition-colors ${
                  problem.bookmarked
                    ? "text-stone-900 dark:text-stone-50"
                    : "text-stone-300 dark:text-stone-600 hover:text-stone-500"
                }`}
              >
                {problem.bookmarked ? (
                  <BookmarkCheck className="w-3.5 h-3.5" />
                ) : (
                  <Bookmark className="w-3.5 h-3.5" />
                )}
              </button>
            </>
          )}

          {problem.leetcodeUrl && (
            <a
              href={problem.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-stone-300 dark:text-stone-600 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {problem.hint && (
            <details className="relative">
              <summary className="p-1.5 text-stone-300 dark:text-stone-600 hover:text-amber-500 transition-colors cursor-pointer list-none">
                <Lightbulb className="w-3.5 h-3.5" />
              </summary>
              <div className="absolute right-0 top-7 z-10 w-64 p-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md shadow-lg text-xs text-stone-600 dark:text-stone-400">
                {problem.hint}
              </div>
            </details>
          )}

          {problem.resources && problem.resources.length > 0 && (
            <details className="relative">
              <summary className="p-1.5 text-stone-300 dark:text-stone-600 hover:text-blue-500 transition-colors cursor-pointer list-none">
                <BookOpen className="w-3.5 h-3.5" />
              </summary>
              <div className="absolute right-0 top-7 z-10 w-52 p-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md shadow-lg">
                {problem.resources.map((r, i) => (
                  <a
                    key={i}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-50 dark:hover:bg-stone-800 rounded transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 shrink-0" />
                    <span className="truncate">{r.label}</span>
                  </a>
                ))}
              </div>
            </details>
          )}
        </div>
      </div>

      {/* Note editor */}
      <AnimatePresence>
        {noteOpen === problem._id && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-1 px-4 py-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-md">
              <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
                <StickyNote className="w-3 h-3" />
                Note
              </div>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add a noteâ€¦"
                rows={3}
                className="w-full text-xs bg-transparent text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none resize-none"
              />
              <div className="flex items-center justify-end gap-2 mt-2">
                <button
                  onClick={() => setNoteOpen(null)}
                  className="text-[10px] font-mono uppercase tracking-widest text-stone-400 hover:text-stone-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => onSaveNote(problem._id)}
                  className="text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

