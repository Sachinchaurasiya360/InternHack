import { useState, useCallback } from "react";
import { useParams, Link } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft, CheckCircle2, Circle, Play, FileText,
  Bookmark, BookmarkCheck, StickyNote, ChevronDown, Lightbulb,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaTopicDetail } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";

const DIFF_BADGE: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  Hard: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

const SHEET_BADGE: Record<string, string> = {
  blind75: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  neetcode150: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
};

const SHEET_LABEL: Record<string, string> = {
  blind75: "B75",
  neetcode150: "NC150",
};

type DiffFilter = "All" | "Easy" | "Medium" | "Hard";

export default function DsaTopicDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState<DiffFilter>("All");
  const [search, setSearch] = useState("");
  const [expandedNotes, setExpandedNotes] = useState<Set<number>>(new Set());
  const [expandedHints, setExpandedHints] = useState<Set<number>>(new Set());
  const [noteValues, setNoteValues] = useState<Record<number, string>>({});
  const [savingNotes, setSavingNotes] = useState<Set<number>>(new Set());

  const { data: topic, isLoading } = useQuery({
    queryKey: queryKeys.dsa.topic(slug!),
    queryFn: () => api.get<DsaTopicDetail>(`/dsa/topics/${slug}`).then((r) => r.data),
    enabled: !!slug,
  });

  const toggleMutation = useMutation({
    mutationFn: (problemId: number) =>
      api.post<{ problemId: number; solved: boolean }>(`/dsa/problems/${problemId}/toggle`).then((r) => r.data),
    onMutate: async (problemId) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.dsa.topic(slug!) });
      const prev = queryClient.getQueryData<DsaTopicDetail>(queryKeys.dsa.topic(slug!));
      if (prev) {
        const updated = {
          ...prev,
          subTopics: prev.subTopics.map((st) => ({
            ...st,
            problems: st.problems.map((p) =>
              p.id === problemId ? { ...p, solved: !p.solved } : p,
            ),
          })),
        };
        updated.totalSolved = updated.subTopics.reduce(
          (sum, st) => sum + st.problems.filter((p) => p.solved).length,
          0,
        );
        queryClient.setQueryData(queryKeys.dsa.topic(slug!), updated);
      }
      return { prev };
    },
    onError: (_err, _problemId, context) => {
      if (context?.prev) {
        queryClient.setQueryData(queryKeys.dsa.topic(slug!), context.prev);
      }
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
      await queryClient.cancelQueries({ queryKey: queryKeys.dsa.topic(slug!) });
      const prev = queryClient.getQueryData<DsaTopicDetail>(queryKeys.dsa.topic(slug!));
      if (prev) {
        const updated = {
          ...prev,
          subTopics: prev.subTopics.map((st) => ({
            ...st,
            problems: st.problems.map((p) =>
              p.id === problemId ? { ...p, bookmarked: !p.bookmarked } : p,
            ),
          })),
        };
        queryClient.setQueryData(queryKeys.dsa.topic(slug!), updated);
      }
      return { prev };
    },
    onError: (_err, _problemId, context) => {
      if (context?.prev) {
        queryClient.setQueryData(queryKeys.dsa.topic(slug!), context.prev);
      }
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
      // Update cache
      const prev = queryClient.getQueryData<DsaTopicDetail>(queryKeys.dsa.topic(slug!));
      if (prev) {
        const updated = {
          ...prev,
          subTopics: prev.subTopics.map((st) => ({
            ...st,
            problems: st.problems.map((p) =>
              p.id === problemId ? { ...p, notes: notes.trim() || null } : p,
            ),
          })),
        };
        queryClient.setQueryData(queryKeys.dsa.topic(slug!), updated);
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
  }, [queryClient, slug]);

  const toggleNotes = (problemId: number, currentNotes: string | null | undefined) => {
    setExpandedNotes((prev) => {
      const next = new Set(prev);
      if (next.has(problemId)) {
        next.delete(problemId);
        // Save on close
        const val = noteValues[problemId];
        if (val !== undefined && val !== (currentNotes ?? "")) {
          saveNotes(problemId, val);
        }
      } else {
        next.add(problemId);
        setNoteValues((prev) => ({ ...prev, [problemId]: currentNotes ?? "" }));
      }
      return next;
    });
  };

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-6" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-16 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse mb-2" />
        ))}
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="max-w-5xl mx-auto text-center py-20">
        <p className="text-gray-500 dark:text-gray-400">Topic not found</p>
        <Link to="/student/dsa" className="text-indigo-600 hover:underline mt-2 inline-block">
          Back to DSA
        </Link>
      </div>
    );
  }

  const pct = topic.totalProblems > 0 ? Math.round((topic.totalSolved / topic.totalProblems) * 100) : 0;

  const filteredSubTopics = topic.subTopics.map((st) => ({
    ...st,
    problems: st.problems.filter((p) => {
      if (filter !== "All" && p.difficulty !== filter) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    }),
  })).filter((st) => st.problems.length > 0);

  return (
    <div className="max-w-5xl mx-auto">
      <SEO title={`${topic.name} — DSA Practice`} noIndex />

      {/* Header */}
      <div className="mb-6">
        <Link to="/student/dsa" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-3">
          <ArrowLeft className="w-4 h-4" />
          Back to DSA
        </Link>

        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{topic.name}</h1>
            {user && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {topic.totalSolved} / {topic.totalProblems} solved ({pct}%)
              </p>
            )}
          </div>

          {user && (
            <div className="w-32">
              <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5">
          {(["All", "Easy", "Medium", "Hard"] as DiffFilter[]).map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === d
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search problems..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-48"
        />
      </div>

      {/* Sub-topics */}
      <div className="space-y-6">
        {filteredSubTopics.map((st) => {
          const stSolved = st.problems.filter((p) => p.solved).length;
          return (
            <div key={st.id}>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {st.name}
                </h2>
                {user && (
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    ({stSolved}/{st.problems.length})
                  </span>
                )}
              </div>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
                {st.problems.map((problem) => (
                  <div key={problem.id}>
                    <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      {/* Checkbox */}
                      {user && (
                        <button
                          onClick={() => toggleMutation.mutate(problem.id)}
                          className="shrink-0"
                          title={problem.solved ? "Mark unsolved" : "Mark solved"}
                        >
                          {problem.solved ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-300 dark:text-gray-600 hover:text-gray-400 dark:hover:text-gray-500" />
                          )}
                        </button>
                      )}

                      {/* Bookmark */}
                      {user && (
                        <button
                          onClick={() => bookmarkMutation.mutate(problem.id)}
                          className="shrink-0"
                          title={problem.bookmarked ? "Remove bookmark" : "Bookmark"}
                        >
                          {problem.bookmarked ? (
                            <BookmarkCheck className="w-4 h-4 text-amber-500" />
                          ) : (
                            <Bookmark className="w-4 h-4 text-gray-300 dark:text-gray-600 hover:text-gray-400 dark:hover:text-gray-500" />
                          )}
                        </button>
                      )}

                      {/* Title + tags */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-sm font-medium ${
                              problem.solved
                                ? "text-gray-400 dark:text-gray-500 line-through"
                                : "text-gray-900 dark:text-white"
                            }`}
                          >
                            {problem.title}
                          </span>

                          {/* Sheet badges */}
                          {problem.sheets?.filter((s) => s !== "a2z").map((s) => (
                            <span
                              key={s}
                              className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${SHEET_BADGE[s] || "bg-gray-100 text-gray-600"}`}
                            >
                              {SHEET_LABEL[s] || s}
                            </span>
                          ))}
                        </div>

                        {/* Tags + companies */}
                        {(problem.tags?.length > 0 || problem.companies?.length > 0) && (
                          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                            {problem.tags?.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                              >
                                {tag}
                              </span>
                            ))}
                            {problem.companies?.slice(0, 3).map((c) => (
                              <span
                                key={c}
                                className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 capitalize"
                              >
                                {c}
                              </span>
                            ))}
                            {((problem.tags?.length ?? 0) + (problem.companies?.length ?? 0)) > 6 && (
                              <span className="text-[10px] text-gray-400">
                                +{(problem.tags?.length ?? 0) + (problem.companies?.length ?? 0) - 6}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Difficulty badge */}
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${DIFF_BADGE[problem.difficulty] || "bg-gray-100 text-gray-600"}`}>
                        {problem.difficulty}
                      </span>

                      {/* Hint toggle */}
                      {problem.hints && (
                        <button
                          onClick={() => setExpandedHints((prev) => {
                            const next = new Set(prev);
                            next.has(problem.id) ? next.delete(problem.id) : next.add(problem.id);
                            return next;
                          })}
                          className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                            expandedHints.has(problem.id)
                              ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                              : "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500 dark:text-yellow-500 hover:bg-yellow-100 dark:hover:bg-yellow-900/30"
                          }`}
                          title="Show hint"
                        >
                          <Lightbulb className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {/* Notes toggle */}
                      {user && (
                        <button
                          onClick={() => toggleNotes(problem.id, problem.notes)}
                          className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                            problem.notes
                              ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                              : "bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                          title={problem.notes ? "View notes" : "Add notes"}
                        >
                          <StickyNote className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {/* External links */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        {problem.leetcodeUrl && (
                          <a
                            href={problem.leetcodeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-md bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors"
                            title="LeetCode"
                          >
                            <span className="text-xs font-bold">LC</span>
                          </a>
                        )}
                        {problem.gfgUrl && (
                          <a
                            href={problem.gfgUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-md bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                            title="GeeksforGeeks"
                          >
                            <span className="text-xs font-bold">GFG</span>
                          </a>
                        )}
                        {problem.hackerrankUrl && (
                          <a
                            href={problem.hackerrankUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-md bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors"
                            title="HackerRank"
                          >
                            <span className="text-xs font-bold">HR</span>
                          </a>
                        )}
                        {problem.codechefUrl && (
                          <a
                            href={problem.codechefUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-md bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
                            title="CodeChef"
                          >
                            <span className="text-xs font-bold">CC</span>
                          </a>
                        )}
                        {problem.articleUrl && (
                          <a
                            href={problem.articleUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-md bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                            title="Article"
                          >
                            <FileText className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {problem.videoUrl && (
                          <a
                            href={problem.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-md bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                            title="Video"
                          >
                            <Play className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hint expanded */}
                    {expandedHints.has(problem.id) && problem.hints && (
                      <div className="px-4 pb-3 -mt-1">
                        <div className="ml-10 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/40">
                          <div className="flex items-center gap-1.5 mb-1">
                            <Lightbulb className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-400" />
                            <span className="text-xs font-semibold text-yellow-700 dark:text-yellow-400">Hint</span>
                          </div>
                          <p className="text-sm text-yellow-800 dark:text-yellow-300">{problem.hints}</p>
                        </div>
                      </div>
                    )}

                    {/* Notes expanded */}
                    {expandedNotes.has(problem.id) && user && (
                      <div className="px-4 pb-3 -mt-1">
                        <div className="ml-10">
                          <textarea
                            value={noteValues[problem.id] ?? ""}
                            onChange={(e) => setNoteValues((prev) => ({ ...prev, [problem.id]: e.target.value }))}
                            onBlur={() => {
                              const val = noteValues[problem.id];
                              if (val !== undefined && val !== (problem.notes ?? "")) {
                                saveNotes(problem.id, val);
                              }
                            }}
                            placeholder="Add your notes here..."
                            rows={3}
                            className="w-full p-3 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                          />
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-gray-400 dark:text-gray-500">
                              {savingNotes.has(problem.id) ? "Saving..." : "Auto-saves on blur"}
                            </span>
                            <button
                              onClick={() => toggleNotes(problem.id, problem.notes)}
                              className="text-xs text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 flex items-center gap-1"
                            >
                              <ChevronDown className="w-3 h-3 rotate-180" />
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {filteredSubTopics.length === 0 && (
          <div className="text-center py-12 text-gray-400 dark:text-gray-500">
            No problems match your filters
          </div>
        )}
      </div>
    </div>
  );
}
