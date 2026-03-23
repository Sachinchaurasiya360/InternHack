import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Building2, ArrowRight, Brain, BookOpen, MessageSquare } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AptitudeCategory, AptitudeProgress } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { LoadingScreen } from "../../../components/LoadingScreen";

function CircularProgress({ progress, size = 52 }: { progress: number; size?: number }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg className="-rotate-90" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" className="stroke-gray-100 dark:stroke-gray-800" strokeWidth="4" />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          className={progress === 100 ? "stroke-emerald-500" : "stroke-purple-500"}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700 dark:text-gray-300">
        {progress}%
      </span>
    </div>
  );
}

export default function AptitudeCategoriesPage() {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState<string>("all");

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
  const totalTopics = categories?.reduce((s, c) => s + c.topics.length, 0) ?? 0;

  // Flatten all topics, optionally filtered by active category tab
  const allTopics = categories?.flatMap((cat) =>
    cat.topics.map((t) => ({ ...t, categorySlug: cat.slug, categoryName: cat.name }))
  ) ?? [];
  const filteredTopics = activeTab === "all" ? allTopics : allTopics.filter((t) => t.categorySlug === activeTab);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="relative pb-12">
      <SEO
        title="Aptitude Practice - Quantitative, Logical & Verbal"
        description="Practice aptitude questions for placement exams. Categories include quantitative aptitude, logical reasoning, verbal ability, and data interpretation."
        keywords="aptitude practice, quantitative aptitude, logical reasoning, verbal ability, placement exam preparation"
        canonicalUrl={canonicalUrl("/learn/aptitude")}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-indigo-100 dark:from-slate-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-8 mb-8 mt-2"
      >
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Progress ring */}
          {user && (
            <CircularProgress progress={overallPct} size={80} />
          )}

          <div className="flex-1 text-center sm:text-left">
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-1">
              Aptitude Practice
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {totalQuestions.toLocaleString()} questions across {totalTopics} topics &middot; Quantitative, Logical & Verbal
              {user && totalAnswered > 0 && (
                <span className="text-emerald-600 dark:text-emerald-400 font-medium"> &middot; {totalAnswered} answered</span>
              )}
            </p>
          </div>

          {/* Quick nav */}
          <div className="flex items-center gap-2">
            <Link
              to="/learn/aptitude/companies"
              className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl text-blue-500 bg-blue-50 dark:bg-blue-900/20 hover:opacity-80 transition-opacity no-underline"
            >
              <Building2 className="w-5 h-5" />
              <span className="text-[10px] font-semibold uppercase tracking-wide opacity-70">Companies</span>
            </Link>
          </div>
        </div>

        {/* Category breakdown bar */}
        {user && progress && categories && (
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <div className="grid grid-cols-3 gap-4">
              {categories.map((cat) => {
                const catPct = cat.questionCount > 0 ? Math.round((cat.answeredCount / cat.questionCount) * 100) : 0;
                const iconConfig = cat.slug === "aptitude"
                  ? { icon: Brain, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-500" }
                  : cat.slug === "logical-reasoning"
                  ? { icon: BookOpen, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500" }
                  : { icon: MessageSquare, color: "text-green-600 dark:text-green-400", bg: "bg-green-500" };
                const Icon = iconConfig.icon;
                return (
                  <div key={cat.id} className="text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <Icon className={`w-3.5 h-3.5 ${iconConfig.color}`} />
                      <span className={`text-xs font-bold uppercase tracking-wider ${iconConfig.color}`}>{cat.name}</span>
                    </div>
                    <p className="font-display text-lg font-bold text-gray-950 dark:text-white">
                      {cat.answeredCount}<span className="text-gray-300 dark:text-gray-600 font-normal">/{cat.questionCount}</span>
                    </p>
                    <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 rounded-full mt-2 overflow-hidden">
                      <div className={`h-full rounded-full ${iconConfig.bg}`} style={{ width: `${catPct}%`, transition: "width 0.6s ease" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex items-center gap-1 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-1.5 mb-6"
      >
        {[
          { key: "all", label: "All Topics" },
          ...(categories?.map((c) => ({ key: c.slug, label: c.name })) ?? []),
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-gray-950 text-white dark:bg-white dark:text-gray-950 shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Topic List */}
      <div className="space-y-2.5">
        {filteredTopics.map((topic, idx) => {
          const pct = topic.questionCount > 0
            ? Math.round((topic.answeredCount / topic.questionCount) * 100)
            : 0;
          const isComplete = pct === 100 && topic.questionCount > 0;

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(idx, 10) * 0.03 }}
            >
              <Link
                to={`/learn/aptitude/${topic.slug}`}
                className="group flex items-center gap-4 bg-white dark:bg-gray-900 px-5 py-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg hover:shadow-gray-200/40 dark:hover:shadow-gray-900/40 transition-all duration-300 no-underline"
              >
                {/* Progress or number */}
                {user ? (
                  <CircularProgress progress={pct} size={44} />
                ) : (
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-400 dark:text-gray-500">{idx + 1}</span>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-sm font-semibold text-gray-950 dark:text-white truncate">
                      {topic.name}
                    </h3>
                    {isComplete && user && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    )}
                  </div>

                  {/* Progress bar or question count */}
                  {user ? (
                    <div className="flex items-center gap-3 mt-1.5">
                      <div className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.6, delay: Math.min(idx, 10) * 0.03 }}
                          className={`h-full rounded-full ${
                            isComplete ? "bg-emerald-500" : pct > 0 ? "bg-purple-500" : "bg-transparent"
                          }`}
                        />
                      </div>
                      <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 shrink-0 tabular-nums">
                        {topic.answeredCount}/{topic.questionCount}
                      </span>
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{topic.questionCount} questions</p>
                  )}
                </div>

                <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-400 dark:group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            </motion.div>
          );
        })}

        {filteredTopics.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
          >
            <Brain className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="font-display text-lg font-bold text-gray-950 dark:text-white mb-2">No topics found</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 max-w-sm mx-auto">
              No topics available for this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
