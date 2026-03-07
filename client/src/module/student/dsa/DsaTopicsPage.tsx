import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { Code2, CheckCircle2, ChevronRight, Building2, Puzzle, Bookmark, BookOpen } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaTopic, DsaProgress, DsaSheetStats } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";

const DIFFICULTY_COLORS: Record<string, string> = {
  easy: "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30",
  medium: "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/30",
  hard: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30",
};

type SheetTab = "all" | "a2z" | "blind75" | "neetcode150";

const SHEET_TABS: { key: SheetTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "a2z", label: "A2Z Sheet" },
  { key: "blind75", label: "Blind 75" },
  { key: "neetcode150", label: "NeetCode 150" },
];

export default function DsaTopicsPage() {
  const { user } = useAuthStore();
  const [activeSheet, setActiveSheet] = useState<SheetTab>("all");

  const sheetParam = activeSheet === "all" ? undefined : activeSheet;

  const { data: topics, isLoading } = useQuery({
    queryKey: queryKeys.dsa.topics(sheetParam),
    queryFn: () => {
      const params = sheetParam ? `?sheet=${sheetParam}` : "";
      return api.get<DsaTopic[]>(`/dsa/topics${params}`).then((r) => r.data);
    },
  });

  const { data: progress } = useQuery({
    queryKey: queryKeys.dsa.progress(),
    queryFn: () => api.get<DsaProgress>("/dsa/my-progress").then((r) => r.data),
    enabled: !!user,
  });

  const { data: sheetStats } = useQuery({
    queryKey: queryKeys.dsa.sheets(),
    queryFn: () => api.get<DsaSheetStats[]>("/dsa/sheets").then((r) => r.data),
    enabled: !!user,
  });

  const totalProblems = topics?.reduce((s, t) => s + t.problemCount, 0) ?? 0;
  const totalSolved = topics?.reduce((s, t) => s + t.solvedCount, 0) ?? 0;
  const overallPct = totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;

  const activeSheetStats = sheetStats?.find((s) => s.name === sheetParam);

  return (
    <div className="max-w-5xl mx-auto">
      <SEO title="DSA Practice" noIndex />

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">DSA Practice</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Master Data Structures & Algorithms</p>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          <Link
            to="/student/dsa/companies"
            className="flex items-center gap-2.5 p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Companies</span>
          </Link>
          <Link
            to="/student/dsa/patterns"
            className="flex items-center gap-2.5 p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-sm transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center">
              <Puzzle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Patterns</span>
          </Link>
          {user && (
            <Link
              to="/student/dsa/bookmarks"
              className="flex items-center gap-2.5 p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-sm transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center">
                <Bookmark className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Bookmarks</span>
            </Link>
          )}
          <div className="flex items-center gap-2.5 p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{totalProblems}</span>
              <span className="text-xs text-gray-400 dark:text-gray-500 ml-1">problems</span>
            </div>
          </div>
        </div>

        {/* Overall Progress Bar */}
        {user && (
          <div className="mt-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {activeSheetStats ? `${SHEET_TABS.find((t) => t.key === activeSheet)?.label} Progress` : "Overall Progress"}
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {activeSheetStats
                  ? `${activeSheetStats.solved} / ${activeSheetStats.total} solved (${activeSheetStats.total > 0 ? Math.round((activeSheetStats.solved / activeSheetStats.total) * 100) : 0}%)`
                  : `${totalSolved} / ${totalProblems} solved (${overallPct}%)`}
              </span>
            </div>
            <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-500"
                style={{
                  width: `${
                    activeSheetStats
                      ? activeSheetStats.total > 0
                        ? Math.round((activeSheetStats.solved / activeSheetStats.total) * 100)
                        : 0
                      : overallPct
                  }%`,
                }}
              />
            </div>

            {/* Difficulty breakdown */}
            {progress && !activeSheetStats && (
              <div className="grid grid-cols-3 gap-3 mt-4">
                {(["easy", "medium", "hard"] as const).map((d) => (
                  <div key={d} className={`rounded-lg px-3 py-2 ${DIFFICULTY_COLORS[d]}`}>
                    <div className="text-xs font-medium capitalize">{d}</div>
                    <div className="text-lg font-bold">
                      {progress.byDifficulty[d].solved}/{progress.byDifficulty[d].total}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Sheet Tabs */}
      <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5 mb-6 overflow-x-auto">
        {SHEET_TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveSheet(tab.key)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeSheet === tab.key
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            {tab.label}
            {user && sheetStats && tab.key !== "all" && (
              <span className="ml-1.5 text-xs opacity-60">
                ({sheetStats.find((s) => s.name === tab.key)?.total ?? 0})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Topic List */}
      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-20 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {topics?.map((topic, idx) => {
            const pct = topic.problemCount > 0
              ? Math.round((topic.solvedCount / topic.problemCount) * 100)
              : 0;

            return (
              <Link
                key={topic.id}
                to={`/student/dsa/${topic.slug}`}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all group"
              >
                {/* Step number */}
                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-400 shrink-0">
                  {idx + 1}
                </div>

                {/* Title & progress */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                    {topic.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {topic.problemCount} problems
                    </span>
                    {user && topic.solvedCount > 0 && (
                      <span className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {topic.solvedCount} solved
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                {user && (
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-24 hidden sm:block">
                      <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 w-8 text-right">
                      {pct}%
                    </span>
                  </div>
                )}

                <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600 shrink-0" />
              </Link>
            );
          })}

          {topics?.length === 0 && (
            <div className="text-center py-12 text-gray-400 dark:text-gray-500">
              No topics found for this sheet
            </div>
          )}
        </div>
      )}
    </div>
  );
}
