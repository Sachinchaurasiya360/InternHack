import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import { ArrowLeft, Bookmark, CheckCircle2, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaBookmarkItem } from "../../../lib/types";
import { SEO } from "../../../components/SEO";

const DIFF_BADGE: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  Hard: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

export default function DsaBookmarksPage() {
  const queryClient = useQueryClient();

  const { data: bookmarks, isLoading } = useQuery({
    queryKey: queryKeys.dsa.bookmarks(),
    queryFn: () => api.get<DsaBookmarkItem[]>("/dsa/bookmarks").then((r) => r.data),
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

  // Group by topic
  const grouped = bookmarks?.reduce<Record<string, DsaBookmarkItem[]>>((acc, b) => {
    const key = b.topicName;
    if (!acc[key]) acc[key] = [];
    acc[key].push(b);
    return acc;
  }, {});

  return (
    <div className="max-w-5xl mx-auto">
      <SEO title="Bookmarked Problems" noIndex />

      <div className="mb-6">
        <Link to="/learn/dsa" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-3">
          <ArrowLeft className="w-4 h-4" />
          Back to DSA
        </Link>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
            <Bookmark className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Bookmarked Problems</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {bookmarks?.length ?? 0} bookmarked problems
            </p>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-16 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : bookmarks?.length === 0 ? (
        <div className="text-center py-20">
          <Bookmark className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400 mb-2">No bookmarked problems yet</p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Bookmark problems from any topic to save them here for quick access
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {grouped && Object.entries(grouped).map(([topicName, items]) => (
            <div key={topicName}>
              <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {topicName} ({items.length})
              </h2>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
                {items.map((b) => (
                  <div key={b.id} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <div className="shrink-0">
                      {b.solved ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className={`text-sm font-medium ${b.solved ? "text-gray-400 dark:text-gray-500 line-through" : "text-gray-900 dark:text-white"}`}>
                        {b.title}
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Link
                          to={`/learn/dsa/${b.topicSlug}`}
                          className="text-[11px] text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
                        >
                          {b.topicName}
                        </Link>
                        {b.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${DIFF_BADGE[b.difficulty] || "bg-gray-100 text-gray-600"}`}>
                      {b.difficulty}
                    </span>

                    {b.leetcodeUrl && (
                      <a href={b.leetcodeUrl} target="_blank" rel="noopener noreferrer"
                        className="w-7 h-7 rounded-md bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors shrink-0"
                        title="LeetCode"
                      >
                        <span className="text-xs font-bold">LC</span>
                      </a>
                    )}

                    <button
                      onClick={() => removeMutation.mutate(b.problemId)}
                      className="w-7 h-7 rounded-md bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors shrink-0"
                      title="Remove bookmark"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
