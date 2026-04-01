import { useState, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router";
import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Circle, ExternalLink,
  Bookmark, BookmarkCheck, StickyNote, ChevronDown, ChevronLeft, ChevronRight,
  Lightbulb, BookOpen, TrendingUp, Search,
} from "lucide-react";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaTopicDetail, DsaProblem } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { LoadingScreen } from "../../../components/LoadingScreen";

const DIFF_TEXT: Record<string, string> = {
  Easy: "text-green-600 dark:text-green-400",
  Medium: "text-yellow-600 dark:text-yellow-400",
  Hard: "text-red-600 dark:text-red-400",
};

type DiffFilter = "All" | "Easy" | "Medium" | "Hard";

export default function DsaTopicDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState<DiffFilter>("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [expandedNotes, setExpandedNotes] = useState<Set<number>>(new Set());
  const [noteValues, setNoteValues] = useState<Record<number, string>>({});
  const [savingNotes, setSavingNotes] = useState<Set<number>>(new Set());

  const diffParam = filter === "All" ? undefined : filter;
  const searchParam = search.trim() || undefined;

  const { data: topic, isLoading } = useQuery({
    queryKey: queryKeys.dsa.topic(slug!, page, { difficulty: diffParam, search: searchParam }),
    queryFn: () => {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("limit", "50");
      if (diffParam) params.set("difficulty", diffParam);
      if (searchParam) params.set("search", searchParam);
      return api.get<DsaTopicDetail>(`/dsa/topics/${slug}?${params}`).then((r) => r.data);
    },
    enabled: !!slug,
    placeholderData: keepPreviousData,
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const toggleMutation = useMutation({
    mutationFn: (problemId: number) =>
      api.post<{ problemId: number; solved: boolean }>(`/dsa/problems/${problemId}/toggle`).then((r) => r.data),
    onMutate: async (problemId) => {
      const key = queryKeys.dsa.topic(slug!, page, { difficulty: diffParam, search: searchParam });
      await queryClient.cancelQueries({ queryKey: key });
      const prev = queryClient.getQueryData<DsaTopicDetail>(key);
      if (prev) {
        const updated = {
          ...prev,
          problems: prev.problems.map((p) =>
            p.id === problemId ? { ...p, solved: !p.solved } : p,
          ),
        };
        const delta = updated.problems.find((p) => p.id === problemId)!.solved ? 1 : -1;
        updated.totalSolved = prev.totalSolved + delta;
        queryClient.setQueryData(key, updated);
      }
      return { prev };
    },
    onError: (_err, _problemId, context) => {
      if (context?.prev) queryClient.setQueryData(queryKeys.dsa.topic(slug!, page, { difficulty: diffParam, search: searchParam }), context.prev);
      toast.error("Failed to update progress");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.topics() });
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.progress() });
    },
  });

  const bookmarkMutation = useMutation({
    mutationFn: (problemId: number) =>
      api.post<{ problemId: number; bookmarked: boolean }>(`/dsa/problems/${problemId}/bookmark`).then((r) => r.data),
    onMutate: async (problemId) => {
      const key = queryKeys.dsa.topic(slug!, page, { difficulty: diffParam, search: searchParam });
      await queryClient.cancelQueries({ queryKey: key });
      const prev = queryClient.getQueryData<DsaTopicDetail>(key);
      if (prev) {
        queryClient.setQueryData(key, {
          ...prev,
          problems: prev.problems.map((p) =>
            p.id === problemId ? { ...p, bookmarked: !p.bookmarked } : p,
          ),
        });
      }
      return { prev };
    },
    onError: (_err, _problemId, context) => {
      if (context?.prev) queryClient.setQueryData(queryKeys.dsa.topic(slug!, page, { difficulty: diffParam, search: searchParam }), context.prev);
      toast.error("Failed to update bookmark");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.bookmarks() });
    },
  });

  const saveNotes = useCallback(async (problemId: number, notes: string) => {
    setSavingNotes((prev) => new Set(prev).add(problemId));
    try {
      await api.put(`/dsa/problems/${problemId}/notes`, { notes });
      const key = queryKeys.dsa.topic(slug!, page, { difficulty: diffParam, search: searchParam });
      const prev = queryClient.getQueryData<DsaTopicDetail>(key);
      if (prev) {
        queryClient.setQueryData(key, {
          ...prev,
          problems: prev.problems.map((p) =>
            p.id === problemId ? { ...p, notes: notes.trim() || null } : p,
          ),
        });
      }
    } catch {
      toast.error("Failed to save notes");
    } finally {
      setSavingNotes((prev) => {
        const next = new Set(prev);
        next.delete(problemId);
        return next;
      });
    }
  }, [queryClient, slug, page]);

  const toggleNotes = (problemId: number, currentNotes: string | null | undefined) => {
    setExpandedNotes((prev) => {
      const next = new Set(prev);
      if (next.has(problemId)) {
        next.delete(problemId);
        const val = noteValues[problemId];
        if (val !== undefined && val !== (currentNotes ?? "")) saveNotes(problemId, val);
      } else {
        next.add(problemId);
        setNoteValues((prev) => ({ ...prev, [problemId]: currentNotes ?? "" }));
      }
      return next;
    });
  };

  if (!user && topic && topic.orderIndex >= 5) {
    return <Navigate to="/learn/dsa" replace />;
  }

  if (isLoading) return <LoadingScreen />;

  if (!topic) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 dark:text-gray-400">Topic not found</p>
        <Link to="/learn/dsa" className="text-indigo-600 hover:underline mt-2 inline-block">Back to DSA</Link>
      </div>
    );
  }

  const pct = topic.totalProblems > 0 ? Math.round((topic.totalSolved / topic.totalProblems) * 100) : 0;

  const externalLinks = (p: DsaProblem) => {
    const links: { href: string; label: string }[] = [];
    if (p.leetcodeUrl) links.push({ href: p.leetcodeUrl, label: "LeetCode" });
    if (p.gfgUrl) links.push({ href: p.gfgUrl, label: "GFG" });
    if (p.hackerrankUrl) links.push({ href: p.hackerrankUrl, label: "HackerRank" });
    if (p.codechefUrl) links.push({ href: p.codechefUrl, label: "CodeChef" });
    if (p.articleUrl) links.push({ href: p.articleUrl, label: "Article" });
    if (p.videoUrl) links.push({ href: p.videoUrl, label: "Video" });
    return links;
  };

  return (
    <div className="relative pb-12">
      <SEO
        title={`${topic.name} - DSA Practice`}
        description={`Practice ${topic.name} problems with difficulty tracking, bookmarks, and notes.`}
        keywords={`${topic.name}, DSA, data structures, algorithms, practice problems`}
        canonicalUrl={canonicalUrl(`/learn/dsa/${slug}`)}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-indigo-100 to-cyan-100 dark:from-indigo-900/20 dark:to-cyan-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-violet-100 dark:from-slate-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-10 mt-6"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          {topic.name}
        </h1>
        {topic.description && (
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-md mx-auto">
            {topic.description}
          </p>
        )}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
      >
        {[
          { icon: BookOpen, value: topic.totalProblems, label: "Problems", iconColor: "text-indigo-500" },
          { icon: TrendingUp, value: topic.totalSolved, label: "Solved", iconColor: "text-violet-500" },
          { icon: CheckCircle2, value: `${pct}%`, label: "Complete", iconColor: "text-emerald-500" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
          >
            <stat.icon className={`w-6 h-6 ${stat.iconColor} mx-auto mb-3`} />
            <p className="font-display text-2xl font-bold text-gray-950 dark:text-white">{stat.value}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Overall progress bar */}
      {user && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 mb-8"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Progress</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {topic.totalSolved} / {topic.totalProblems} solved ({pct}%)
            </span>
          </div>
          <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.6 }}
              className={`h-full rounded-full ${pct === 100 ? "bg-green-500" : "bg-indigo-500"}`}
            />
          </div>
        </motion.div>
      )}

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-3 mb-8 flex-wrap"
      >
        <div className="flex items-center gap-1.5 sm:gap-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-1.5 overflow-x-auto">
          {(["All", "Easy", "Medium", "Hard"] as DiffFilter[]).map((d) => (
            <button
              key={d}
              onClick={() => { setFilter(d); setPage(1); }}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium rounded-xl transition-all duration-200 whitespace-nowrap ${
                filter === d
                  ? "bg-gray-950 text-white dark:bg-white dark:text-gray-950 shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="relative flex-1 min-w-0 sm:min-w-48 max-w-full sm:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950/10 dark:focus:ring-white/10 focus:border-gray-300 dark:focus:border-gray-600 transition-all"
          />
        </div>
      </motion.div>

      {/* Problem list */}
      <div className="space-y-2">
        {topic.problems.map((problem, pIdx) => {
          const isExpanded = expandedId === problem.id;
          const links = externalLinks(problem);

          return (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + pIdx * 0.02 }}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300"
            >
              {/* Problem row */}
              <div
                className="flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-5 sm:py-4 cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : problem.id)}
              >
                {/* Checkbox */}
                {user && (
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleMutation.mutate(problem.id); }}
                    className="shrink-0"
                  >
                    {problem.solved ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300 dark:text-gray-600 hover:text-gray-400 dark:hover:text-gray-500 transition-colors" />
                    )}
                  </button>
                )}

                {/* Title */}
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/learn/dsa/problem/${problem.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`text-sm font-medium no-underline hover:underline ${problem.solved ? "text-gray-400 dark:text-gray-500 line-through" : "text-gray-950 dark:text-white"}`}
                  >
                    {problem.title}
                  </Link>
                  <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                    {problem.acceptanceRate && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        {problem.acceptanceRate}
                      </span>
                    )}
                    {problem.companies?.slice(0, 2).map((c) => (
                      <span key={c} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 capitalize">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Difficulty */}
                <span className={`text-xs font-semibold shrink-0 ${DIFF_TEXT[problem.difficulty] || "text-gray-500"}`}>
                  {problem.difficulty}
                </span>

                {/* LeetCode link */}
                {problem.leetcodeUrl && (
                  <a
                    href={problem.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shrink-0 no-underline"
                    title="LeetCode"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {/* Bookmark */}
                {user && (
                  <button
                    onClick={(e) => { e.stopPropagation(); bookmarkMutation.mutate(problem.id); }}
                    className="shrink-0"
                  >
                    {problem.bookmarked ? (
                      <BookmarkCheck className="w-4 h-4 text-amber-500" />
                    ) : (
                      <Bookmark className="w-4 h-4 text-gray-300 dark:text-gray-600 hover:text-gray-400 dark:hover:text-gray-500 transition-colors" />
                    )}
                  </button>
                )}

                <ChevronDown className={`w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
              </div>

              {/* Expanded dropdown */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 space-y-3">
                      {/* Hints */}
                      {problem.hints.length > 0 && (
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                              {problem.hints.length === 1 ? "Hint" : `Hints (${problem.hints.length})`}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {problem.hints.map((hint, i) => (
                              <div key={i} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex gap-1">
                                {problem.hints.length > 1 && <span className="font-medium text-gray-500 dark:text-gray-400 shrink-0">{i + 1}.</span>}
                                <span dangerouslySetInnerHTML={{ __html: cleanHint(hint) }} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* External links */}
                      {links.length > 0 && (
                        <div className="flex items-center gap-2 flex-wrap">
                          {links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors no-underline"
                            >
                              <ExternalLink className="w-3 h-3" />
                              {link.label}
                            </a>
                          ))}
                          <Link
                            to={`/learn/dsa/problem/${problem.slug}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors no-underline"
                          >
                            View Details
                          </Link>
                        </div>
                      )}

                      {/* Notes */}
                      {user && (
                        <div>
                          {expandedNotes.has(problem.id) ? (
                            <div>
                              <textarea
                                value={noteValues[problem.id] ?? ""}
                                onChange={(e) => setNoteValues((prev) => ({ ...prev, [problem.id]: e.target.value }))}
                                onBlur={() => {
                                  const val = noteValues[problem.id];
                                  if (val !== undefined && val !== (problem.notes ?? "")) saveNotes(problem.id, val);
                                }}
                                placeholder="Add your notes here..."
                                rows={3}
                                className="w-full px-4 py-3 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950/10 dark:focus:ring-white/10 focus:border-gray-300 dark:focus:border-gray-600 transition-all resize-none"
                              />
                              <div className="flex items-center justify-between mt-1.5">
                                <span className="text-[11px] text-gray-400 dark:text-gray-500">
                                  {savingNotes.has(problem.id) ? "Saving..." : "Auto-saves on close"}
                                </span>
                                <button
                                  onClick={() => toggleNotes(problem.id, problem.notes)}
                                  className="text-[11px] text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                                >
                                  Close notes
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => toggleNotes(problem.id, problem.notes)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                              <StickyNote className="w-3 h-3" />
                              {problem.notes ? "View notes" : "Add notes"}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {topic.problems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
          >
            <Search className="w-10 h-10 text-gray-400 mx-auto mb-4" />
            <h3 className="font-display text-lg font-bold text-gray-950 dark:text-white mb-2">No problems found</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 max-w-sm mx-auto">
              No problems match your current filters.
            </p>
          </motion.div>
        )}
      </div>

      {/* Pagination */}
      {topic.totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Prev
          </button>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Page {page} of {topic.totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(topic.totalPages, p + 1))}
            disabled={page >= topic.totalPages}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

/** Strip LeetCode wrapper divs and style code tags for our UI */
function cleanHint(html: string): string {
  return html
    .replace(/<div[^>]*>/gi, "")
    .replace(/<\/div>/gi, "")
    .replace(/<code>/gi, "<code class='px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm font-mono'>");
}
