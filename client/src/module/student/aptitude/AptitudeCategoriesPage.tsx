import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Brain, CheckCircle2, ChevronRight, Building2, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AptitudeCategory, AptitudeProgress } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { LoadingScreen } from "../../../components/LoadingScreen";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; icon: string }> = {
  aptitude:           { bg: "bg-orange-50 dark:bg-orange-900/20", text: "text-orange-600 dark:text-orange-400", icon: "text-orange-500" },
  "logical-reasoning": { bg: "bg-blue-50 dark:bg-blue-900/20",   text: "text-blue-600 dark:text-blue-400",     icon: "text-blue-500" },
  verbal:             { bg: "bg-green-50 dark:bg-green-900/20",   text: "text-green-600 dark:text-green-400",   icon: "text-green-500" },
};

function getColors(slug: string) {
  return CATEGORY_COLORS[slug] ?? { bg: "bg-purple-50 dark:bg-purple-900/20", text: "text-purple-600 dark:text-purple-400", icon: "text-purple-500" };
}

function CircularProgress({ progress, size = 56 }: { progress: number; size?: number }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg className="-rotate-90" style={{ width: size, height: size }} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#f3f4f6" className="dark:stroke-gray-700" strokeWidth="4" />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          className="stroke-purple-500"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-800 dark:text-gray-200">
        {progress}%
      </span>
    </div>
  );
}

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

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="relative pb-12">
      <SEO title="Aptitude Practice" noIndex />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-indigo-100 dark:from-slate-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-40" />
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
          Aptitude <span className="text-gradient-accent">Practice</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-md mx-auto">
          Master quantitative, logical & verbal skills
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        {[
          { icon: BookOpen, value: totalQuestions, label: "Questions", iconColor: "text-purple-500" },
          { icon: TrendingUp, value: totalAnswered, label: "Answered", iconColor: "text-violet-500" },
          { icon: CheckCircle2, value: `${overallPct}%`, label: "Complete", iconColor: "text-emerald-500" },
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

      {/* Quick Access */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex items-center gap-3 mb-8 flex-wrap"
      >
        <Link
          to={user ? "/student/aptitude/companies" : "/aptitude/companies"}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline"
        >
          <Building2 className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Company Wise</span>
        </Link>
      </motion.div>

      {/* Overall Progress */}
      {user && progress && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 mb-8"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Overall Progress</span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tabular-nums">
              {progress.totalAnswered}/{progress.totalQuestions} answered
              {progress.totalCorrect > 0 && ` (${progress.totalCorrect} correct)`}
            </span>
          </div>
          <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallPct}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`h-full rounded-full ${overallPct === 100 ? "bg-green-500" : "bg-purple-500"}`}
            />
          </div>
        </motion.div>
      )}

      {/* Categories */}
      <div className="space-y-3">
        {categories?.map((cat, idx) => {
          const isExpanded = expandedCat === cat.slug;
          const catPct = cat.questionCount > 0 ? Math.round((cat.answeredCount / cat.questionCount) * 100) : 0;
          const colors = getColors(cat.slug);

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + idx * 0.06 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => setExpandedCat(isExpanded ? null : cat.slug)}
                className="w-full flex items-center gap-5 px-6 py-5 text-left"
              >
                {user ? (
                  <CircularProgress progress={catPct} />
                ) : (
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center shrink-0`}>
                    <Brain className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="text-base font-semibold text-gray-950 dark:text-white truncate">
                      {cat.name}
                    </h2>
                    {catPct === 100 && user && cat.questionCount > 0 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400 shrink-0">
                        Complete
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-2.5">
                    {cat.topicCount} topics &middot; {cat.questionCount} questions
                    {user && cat.answeredCount > 0 && ` \u00B7 ${cat.answeredCount} answered`}
                  </p>

                  {/* Progress bar */}
                  {user && (
                    <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${catPct}%` }}
                        transition={{ duration: 0.6, delay: 0.25 + idx * 0.06 }}
                        className={`h-full rounded-full ${
                          catPct === 100 ? "bg-green-500" : catPct > 0 ? "bg-gray-950 dark:bg-white" : "bg-gray-200 dark:bg-gray-700"
                        }`}
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-3 mt-2.5 text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">
                      {cat.topicCount} topics
                    </span>
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">
                      {cat.questionCount} questions
                    </span>
                  </div>
                </div>

                <ChevronRight className={`w-5 h-5 text-gray-300 dark:text-gray-600 shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`} />
              </button>

              {/* Topics List */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-gray-100 dark:border-gray-800"
                >
                  {cat.topics.map((topic, tidx) => {
                    const topicPct = topic.questionCount > 0
                      ? Math.round((topic.answeredCount / topic.questionCount) * 100) : 0;
                    const basePath = user ? "/student/aptitude" : "/aptitude";
                    const isComplete = topicPct === 100 && topic.questionCount > 0;

                    return (
                      <Link
                        key={topic.id}
                        to={`${basePath}/${topic.slug}`}
                        className="group flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-b border-gray-50 dark:border-gray-800/50 last:border-b-0 no-underline"
                      >
                        {isComplete ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-200 dark:border-gray-700 shrink-0 flex items-center justify-center">
                            <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500">{tidx + 1}</span>
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-gray-950 dark:group-hover:text-white transition-colors truncate">
                              {topic.name}
                            </span>
                            {isComplete && (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400 shrink-0">
                                Done
                              </span>
                            )}
                          </div>
                          {topic.description && (
                            <p className="text-[11px] text-gray-400 dark:text-gray-500 truncate">{topic.description}</p>
                          )}
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <div className="text-right">
                            <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 tabular-nums">
                              {topic.answeredCount}/{topic.questionCount}
                            </span>
                            {user && topicPct > 0 && (
                              <div className="w-16 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mt-1 overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all ${isComplete ? "bg-green-500" : "bg-purple-500"}`}
                                  style={{ width: `${topicPct}%` }}
                                />
                              </div>
                            )}
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
