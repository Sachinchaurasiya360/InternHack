import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { ArrowLeft, Puzzle, CheckCircle2, ChevronRight } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaPattern, DsaCompanyProblem } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";

const DIFF_BADGE: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  Hard: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

export default function DsaPatternsPage() {
  const { user } = useAuthStore();
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null);

  const { data: patterns, isLoading } = useQuery({
    queryKey: queryKeys.dsa.patterns(),
    queryFn: () => api.get<DsaPattern[]>("/dsa/patterns").then((r) => r.data),
  });

  const { data: problems } = useQuery({
    queryKey: queryKeys.dsa.pattern(selectedPattern!),
    queryFn: () => api.get<DsaCompanyProblem[]>(`/dsa/patterns/${selectedPattern}`).then((r) => r.data),
    enabled: !!selectedPattern,
  });

  const formatLabel = (s: string) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="max-w-5xl mx-auto">
      <SEO title="Pattern-based DSA Problems" noIndex />

      <div className="mb-6">
        <Link to="/student/dsa" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-3">
          <ArrowLeft className="w-4 h-4" />
          Back to DSA
        </Link>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center">
            <Puzzle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pattern-based Practice</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Master common algorithmic patterns</p>
          </div>
        </div>
      </div>

      {!selectedPattern ? (
        isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-20 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {patterns?.map((pattern) => (
              <button
                key={pattern.name}
                onClick={() => setSelectedPattern(pattern.name)}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-sm transition-all text-left group"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {formatLabel(pattern.name)}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {pattern.count} problems
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" />
              </button>
            ))}
          </div>
        )
      ) : (
        <div>
          <button
            onClick={() => setSelectedPattern(null)}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            All Patterns
          </button>

          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            {formatLabel(selectedPattern)} ({problems?.length ?? 0} problems)
          </h2>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
            {problems?.map((p) => (
              <div key={p.id} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                {user && (
                  <div className="shrink-0">
                    {p.solved ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                    )}
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <span className={`text-sm font-medium ${p.solved ? "text-gray-400 dark:text-gray-500 line-through" : "text-gray-900 dark:text-white"}`}>
                    {p.title}
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Link
                      to={`/student/dsa/${p.topicSlug}`}
                      className="text-[11px] text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
                    >
                      {p.topicName}
                    </Link>
                    {p.companies.slice(0, 2).map((c) => (
                      <span key={c} className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 capitalize">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${DIFF_BADGE[p.difficulty] || "bg-gray-100 text-gray-600"}`}>
                  {p.difficulty}
                </span>

                {p.leetcodeUrl && (
                  <a href={p.leetcodeUrl} target="_blank" rel="noopener noreferrer"
                    className="w-7 h-7 rounded-md bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors shrink-0"
                    title="LeetCode"
                  >
                    <span className="text-xs font-bold">LC</span>
                  </a>
                )}
              </div>
            ))}

            {problems?.length === 0 && (
              <div className="text-center py-12 text-gray-400 dark:text-gray-500">
                No problems found for this pattern
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
