import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { Brain, CheckCircle2, ChevronRight, Building2, ChevronDown } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AptitudeCategory, AptitudeProgress } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";

export default function AptitudeCategoriesPage() {
  const { user } = useAuthStore();
  const [expandedCat, setExpandedCat] = useState<string | null>(null);

  const { data: categories, isLoading } = useQuery({
    queryKey: queryKeys.aptitude.categories(),
    queryFn: () => api.get<AptitudeCategory[]>("/aptitude/categories").then((r) => r.data),
  });

  const { data: progress } = useQuery({
    queryKey: queryKeys.aptitude.progress(),
    queryFn: () => api.get<AptitudeProgress>("/aptitude/progress").then((r) => r.data),
    enabled: !!user,
  });

  const totalQuestions = categories?.reduce((s, c) => s + c.questionCount, 0) ?? 0;
  const totalAnswered = categories?.reduce((s, c) => s + c.answeredCount, 0) ?? 0;
  const overallPct = totalQuestions > 0 ? Math.round((totalAnswered / totalQuestions) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center">
            <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Aptitude Practice</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Master quantitative, logical & verbal skills</p>
          </div>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
          <Link
            to={user ? "/student/aptitude/companies" : "/aptitude/companies"}
            className="flex items-center gap-2.5 p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Company Wise</span>
          </Link>
        </div>
      </div>

      {/* Progress Overview */}
      {user && progress && (
        <div className="mb-6 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Overall Progress
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {progress.totalAnswered}/{progress.totalQuestions} answered
              {progress.totalCorrect > 0 && ` (${progress.totalCorrect} correct)`}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-500 rounded-full transition-all"
              style={{ width: `${overallPct}%` }}
            />
          </div>
        </div>
      )}

      {/* Categories */}
      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {categories?.map((cat) => {
            const isExpanded = expandedCat === cat.slug;
            const catPct = cat.questionCount > 0 ? Math.round((cat.answeredCount / cat.questionCount) * 100) : 0;

            return (
              <div key={cat.id} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCat(isExpanded ? null : cat.slug)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      cat.slug === "aptitude" ? "bg-orange-100 dark:bg-orange-900/40" :
                      cat.slug === "logical-reasoning" ? "bg-blue-100 dark:bg-blue-900/40" :
                      "bg-green-100 dark:bg-green-900/40"
                    }`}>
                      <Brain className={`w-5 h-5 ${
                        cat.slug === "aptitude" ? "text-orange-600 dark:text-orange-400" :
                        cat.slug === "logical-reasoning" ? "text-blue-600 dark:text-blue-400" :
                        "text-green-600 dark:text-green-400"
                      }`} />
                    </div>
                    <div className="text-left">
                      <h2 className="font-semibold text-gray-900 dark:text-white">{cat.name}</h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {cat.topicCount} topics &middot; {cat.questionCount} questions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {user && catPct > 0 && (
                      <span className="text-xs font-medium text-purple-600 dark:text-purple-400">{catPct}%</span>
                    )}
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {/* Topics List */}
                {isExpanded && (
                  <div className="border-t border-gray-100 dark:border-gray-800">
                    {cat.topics.map((topic) => {
                      const topicPct = topic.questionCount > 0
                        ? Math.round((topic.answeredCount / topic.questionCount) * 100) : 0;
                      const basePath = user ? "/student/aptitude" : "/aptitude";

                      return (
                        <Link
                          key={topic.id}
                          to={`${basePath}/${topic.slug}`}
                          className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-b border-gray-50 dark:border-gray-800/50 last:border-b-0"
                        >
                          <div className="flex items-center gap-3">
                            {topic.answeredCount > 0 && topic.answeredCount === topic.questionCount ? (
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                            ) : (
                              <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                            )}
                            <div>
                              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{topic.name}</span>
                              {topic.description && (
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{topic.description}</p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {topic.answeredCount}/{topic.questionCount}
                              </span>
                              {user && topicPct > 0 && (
                                <div className="w-16 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mt-1">
                                  <div
                                    className="h-full bg-purple-500 rounded-full"
                                    style={{ width: `${topicPct}%` }}
                                  />
                                </div>
                              )}
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
