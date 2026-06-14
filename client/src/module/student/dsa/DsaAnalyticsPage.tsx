import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Target, Hash, Layers } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaAnalytics } from "../../../lib/types";
import { SEO } from "../../../components/SEO";
import { LoadingScreen } from "../../../components/LoadingScreen";

function MiniBar({ value, max, label, color }: { value: number; max: number; label: string; color: string }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-3 text-right font-mono tabular-nums text-stone-500 dark:text-stone-400">{value}</span>
      <div className="flex-1 h-2 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="w-16 text-stone-600 dark:text-stone-400 truncate">{label}</span>
    </div>
  );
}

export default function DsaAnalyticsPage() {
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.dsa.analytics(),
    queryFn: () => api.get<DsaAnalytics>("/dsa/analytics").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  const maxWeekly = Math.max(...(data?.weeklyTrend.map((w) => w.count) ?? [0]), 1);
  const maxMonthly = Math.max(...(data?.monthlyTrend.map((m) => m.count) ?? [0]), 1);

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO title="Analytics" noIndex />

      <div className="max-w-5xl mx-auto px-3 sm:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-1 bg-lime-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              dsa / analytics
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5">
            Your progress, quantified.
          </h1>
          <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
            Track your DSA journey with topic-level accuracy, weekly trends, and difficulty breakdowns.
          </p>
        </motion.div>

        {isLoading ? (
          <LoadingScreen />
        ) : data ? (
          <div className="space-y-8">
            {/* Stats cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="border border-stone-200 dark:border-white/10 rounded-md p-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1.5">
                  <Hash className="w-3 h-3" /> solved
                </div>
                <span className="text-2xl font-bold tabular-nums text-stone-900 dark:text-stone-50">
                  {data.totalSolved}
                </span>
                <span className="text-xs text-stone-400 ml-1">/ {data.totalProblems}</span>
              </div>
              <div className="border border-stone-200 dark:border-white/10 rounded-md p-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1.5">
                  <TrendingUp className="w-3 h-3" /> completion
                </div>
                <span className="text-2xl font-bold tabular-nums text-stone-900 dark:text-stone-50">
                  {data.totalProblems > 0
                    ? Math.round((data.totalSolved / data.totalProblems) * 100)
                    : 0}%
                </span>
              </div>
              <div className="border border-stone-200 dark:border-white/10 rounded-md p-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1.5">
                  <Target className="w-3 h-3" /> easy
                </div>
                <span className="text-2xl font-bold tabular-nums text-green-600 dark:text-green-400">
                  {data.byDifficulty.easy.solved}
                </span>
                <span className="text-xs text-stone-400 ml-1">/ {data.byDifficulty.easy.total}</span>
              </div>
              <div className="border border-stone-200 dark:border-white/10 rounded-md p-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1.5">
                  <Target className="w-3 h-3" /> hard
                </div>
                <span className="text-2xl font-bold tabular-nums text-red-600 dark:text-red-400">
                  {data.byDifficulty.hard.solved}
                </span>
                <span className="text-xs text-stone-400 ml-1">/ {data.byDifficulty.hard.total}</span>
              </div>
            </div>

            {/* Topic accuracy */}
            <div className="border border-stone-200 dark:border-white/10 rounded-md p-4 sm:p-6">
              <div className="flex items-center gap-1.5 mb-4">
                <Layers className="w-4 h-4 text-stone-500" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  topic accuracy
                </span>
              </div>
              <div className="space-y-1.5">
                {data.topicAccuracy.length === 0 && (
                  <p className="text-sm text-stone-400">Solve problems to see topic-level accuracy.</p>
                )}
                {data.topicAccuracy.map((t) => (
                  <MiniBar
                    key={t.topic}
                    value={t.solved}
                    max={t.total}
                    label={`${t.topic} (${t.percentage}%)`}
                    color={
                      t.percentage >= 60
                        ? "bg-green-500"
                        : t.percentage >= 30
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }
                  />
                ))}
              </div>
            </div>

            {/* Weekly trend */}
            <div className="border border-stone-200 dark:border-white/10 rounded-md p-4 sm:p-6">
              <div className="flex items-center gap-1.5 mb-4">
                <BarChart3 className="w-4 h-4 text-stone-500" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  weekly trend (last 12 weeks)
                </span>
              </div>
              <div className="flex items-end gap-1 h-28">
                {data.weeklyTrend.map((w) => {
                  const pct = (w.count / maxWeekly) * 100;
                  return (
                    <div key={w.weekStart} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-[9px] font-mono tabular-nums text-stone-400">
                        {w.count}
                      </span>
                      <div
                        className="w-full bg-lime-500 rounded-t-sm"
                        style={{ height: `${Math.max(pct, 2)}%` }}
                      />
                      <span className="text-[8px] font-mono text-stone-400 dark:text-stone-500 rotate-45 origin-left whitespace-nowrap">
                        {w.weekStart.slice(5)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Monthly trend */}
            <div className="border border-stone-200 dark:border-white/10 rounded-md p-4 sm:p-6">
              <div className="flex items-center gap-1.5 mb-4">
                <TrendingUp className="w-4 h-4 text-stone-500" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  monthly solved (last 6 months)
                </span>
              </div>
              <div className="flex items-end gap-3 h-24">
                {data.monthlyTrend.map((m) => {
                  const pct = (m.count / maxMonthly) * 100;
                  return (
                    <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-[9px] font-mono tabular-nums text-stone-400">
                        {m.count}
                      </span>
                      <div
                        className="w-full bg-blue-500 rounded-t-sm"
                        style={{ height: `${Math.max(pct, 2)}%` }}
                      />
                      <span className="text-[9px] font-mono text-stone-400">{m.month}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
