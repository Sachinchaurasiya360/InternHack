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

const DIFF_COLOR: Record<string, string> = {
  Easy: "text-emerald-600 dark:text-emerald-400",
  Medium: "text-amber-600 dark:text-amber-400",
  Hard: "text-rose-600 dark:text-rose-400",
};

export default function DsaBookmarksPage() {
  const queryClient = useQueryClient();

  const { data: bookmarks, isLoading } = useQuery({
    queryKey: queryKeys.dsa.bookmarks(),
    queryFn: () => api.get<DsaBookmarkItem[]>("/dsa/bookmarks").then((r) => r.data),
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const removeMutation = useMutation({
    mutationFn: (problemId: number) =>
      api.post(`/dsa/problems/${problemId}/bookmark`),
    onMutate: async (problemId) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.dsa.bookmarks() });
      const prev = queryClient.getQueryData<DsaBookmarkItem[]>(queryKeys.dsa.bookmarks());
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
                Quick access to problems you bookmarked. Revisit, review, and track progress.
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 flex-wrap">
              <span>
                <span className="text-stone-900 dark:text-stone-50 tabular-nums">{total}</span>
                <span className="text-stone-400 dark:text-stone-600"> saved</span>
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

        {/* Section header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1 w-1 bg-lime-400"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            bookmarks / {total}
          </span>
        </div>

        {isLoading ? (
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-16 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md animate-pulse" />
            ))}
          </div>
        ) : bookmarks?.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
            <Bookmark className="w-8 h-8 text-stone-400 mx-auto mb-3" />
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-1">No bookmarked problems yet.</p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              save problems from any topic to keep them here
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {bookmarks?.map((b, idx) => {
              const num = String(idx + 1).padStart(2, "0");
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
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${DIFF_COLOR[b.difficulty] || "text-stone-500"}`}>
                        / {b.difficulty.toLowerCase()}
                      </span>
                      {b.acceptanceRate && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 tabular-nums">
                          {b.acceptanceRate}
                        </span>
                      )}
                      {b.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400">
                          {tag}
                        </span>
                      ))}
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
