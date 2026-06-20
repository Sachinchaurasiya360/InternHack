import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Bookmark, CheckCircle2, Trash2, ExternalLink } from "lucide-react";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaBookmarkItem } from "../../../lib/types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { DIFF_COLOR } from "../../../lib/difficulty-styles";
import { useDsaLabels } from "./components/useDsaLabels";
import { DsaLabelManager } from "./components/DsaLabelManager";
import { DsaLabelFilter } from "./components/DsaLabelFilter";
/**
 * Renders the DSA Bookmarks page displaying the user's saved problems.
 * Includes functionality to view and remove bookmarked problems,
 * and displays an empty state if no bookmarks exist.
 *
 * @returns {JSX.Element} The rendered bookmarks page component.
 */
export default function DsaBookmarksPage() {
  const queryClient = useQueryClient();

  const { data: bookmarks, isLoading } = useQuery({
    queryKey: queryKeys.dsa.bookmarks(),
    queryFn: () =>
      api.get<DsaBookmarkItem[]>("/dsa/bookmarks").then((r) => r.data),
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const removeMutation = useMutation({
    mutationFn: (problemId: number) =>
      api.post(`/dsa/problems/${problemId}/bookmark`),
    onMutate: async (problemId) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.dsa.bookmarks() });
      const prev = queryClient.getQueryData<DsaBookmarkItem[]>(
        queryKeys.dsa.bookmarks(),
      );
      queryClient.setQueryData(
        queryKeys.dsa.bookmarks(),
        prev?.filter((b) => b.problemId !== problemId),
      );
      return { prev };
    },
    onError: (_err, _id, context) => {
      if (context?.prev) {
        queryClient.setQueryData(queryKeys.dsa.bookmarks(), context.prev);
      }
      toast.error("Failed to remove bookmark");
    },
  });

  const { allLabels, getLabels, addLabel, removeLabel } = useDsaLabels();
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const toggleLabelFilter = (label: string) =>
    setSelectedLabels((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );

  // A bookmark matches when it carries at least one selected label (union).
  // Labels live in the shared labels cache, so we read them via getLabels and
  // fall back to any labels embedded in the bookmark payload.
  const visibleBookmarks = useMemo(() => {
    if (!bookmarks) return [];
    if (selectedLabels.length === 0) return bookmarks;
    return bookmarks.filter((b) => {
      const labels = getLabels(b.problemId).length
        ? getLabels(b.problemId)
        : (b.labels ?? []);
      return selectedLabels.some((sel) => labels.includes(sel));
    });
  }, [bookmarks, selectedLabels, getLabels]);

  const total = bookmarks?.length ?? 0;
  const solvedCount = bookmarks?.filter((b) => b.solved).length ?? 0;

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO title="Bookmarked Problems" noIndex />

      <div className="max-w-4xl mx-auto px-3 sm:px-8 py-8">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-1 bg-lime-400"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              dsa / bookmarks
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5">
                Your saved problems.
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                Quick access to problems you bookmarked. Revisit, review, and
                track progress.
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex-wrap">
              <span>
                <span className="text-stone-900 dark:text-stone-50 tabular-nums">
                  {total}
                </span>
                <span className="text-stone-400 dark:text-stone-600">
                  {" "}
                  saved
                </span>
              </span>
              {total > 0 && (
                <>
                  <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                  <span className="text-lime-600 dark:text-lime-400 tabular-nums">
                    {solvedCount} solved
                  </span>
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* Label filter */}
        {allLabels.length > 0 && (
          <div className="mb-5">
            <DsaLabelFilter
              allLabels={allLabels}
              selected={selectedLabels}
              onToggle={toggleLabelFilter}
              onClear={() => setSelectedLabels([])}
            />
          </div>
        )}

        {/* Section header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1 w-1 bg-lime-400"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            bookmarks /{" "}
            {selectedLabels.length > 0
              ? `${visibleBookmarks.length} of ${total}`
              : total}
          </span>
        </div>

        {isLoading ? (
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-16 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md animate-pulse"
              />
            ))}
          </div>
        ) : bookmarks?.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md bg-white dark:bg-stone-900/50">
            <Bookmark className="w-12 h-12 text-stone-400 dark:text-stone-500 mb-4" />
            <h2 className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-2">
              No bookmarks yet
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-6 max-w-sm">
              Save problems from any topic to keep them here and track your
              progress.
            </p>
            <Button asChild>
              <Link to="/student/dsa">Browse Problems</Link>
            </Button>
          </div>
        ) : visibleBookmarks.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
            <p className="text-sm text-stone-600 dark:text-stone-400">
              No bookmarks match the selected labels.
            </p>
            <button
              onClick={() => setSelectedLabels([])}
              className="mt-2 text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 hover:underline cursor-pointer"
            >
              clear label filter
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {visibleBookmarks.map((b, idx) => {
              const num = String(idx + 1).padStart(2, "0");
              const labels = getLabels(b.problemId).length
                ? getLabels(b.problemId)
                : (b.labels ?? []);
              return (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(idx, 10) * 0.02 }}
                  className="flex items-center gap-2 sm:gap-3 bg-white dark:bg-stone-900 px-3 sm:px-5 py-3 sm:py-4 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors"
                >
                  <div className="shrink-0">
                    {b.solved ? (
                      <CheckCircle2 className="w-5 h-5 text-lime-500" />
                    ) : (
                      <div className="w-5 h-5 rounded-md border-2 border-stone-300 dark:border-stone-600 flex items-center justify-center">
                        <span className="text-[9px] font-mono font-bold tabular-nums text-stone-400 dark:text-stone-500">
                          {num}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/learn/dsa/problem/${b.slug}`}
                      className={`text-sm font-bold tracking-tight no-underline hover:underline wrap-break-word ${b.solved ? "text-stone-400 dark:text-stone-500 line-through" : "text-stone-900 dark:text-stone-50"}`}
                    >
                      {b.title}
                    </Link>
                    <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-widest ${DIFF_COLOR[b.difficulty] || "text-stone-500"}`}
                      >
                        / {b.difficulty.toLowerCase()}
                      </span>
                      {b.acceptanceRate && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 tabular-nums">
                          {b.acceptanceRate}
                        </span>
                      )}
                      {b.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2">
                      <DsaLabelManager
                        problemId={b.problemId}
                        labels={labels}
                        onAdd={addLabel}
                        onRemove={removeLabel}
                      />
                    </div>
                  </div>

                  {b.leetcodeUrl && (
                    <a
                      href={b.leetcodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-md bg-stone-100 dark:bg-white/5 hidden sm:flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-200 dark:hover:bg-white/10 transition-colors shrink-0 no-underline"
                      title="LeetCode"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <Button
                    onClick={() => removeMutation.mutate(b.problemId)}
                    variant="ghost"
                    mode="icon"
                    size="sm"
                    className="text-rose-500 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 shrink-0"
                    title="Remove bookmark"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
