import { LoadingScreen } from "../../../components/LoadingScreen";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Building2, ArrowUpRight, Brain, BookOpen, MessageSquare, Search, X, AlertTriangle, Target } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AptitudeCategory, AptitudeProgress, AptitudeWeakAreas } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { Button } from "../../../components/ui/button";
import { CircularProgress } from "../../../components/ui/CircularProgress";
import { GridBackground } from "../../../components/ui/GridBackground";


// — Streak Banner ———————————————————————————————————————————
type StreakBannerProps = { streak: number };

function StreakBanner({ streak }: StreakBannerProps) {
  if (streak > 0) {
    return (
      <div className="flex items-center gap-2 px-4 py-3 mb-6 rounded-lg bg-yellow-950 border border-yellow-700 text-yellow-200 text-sm">
        <span role="img" aria-label="flame" className="text-xl">🔥</span>
        <span>
          <strong>{streak}-day streak</strong> — Keep it up! Practice today to continue your streak.
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-4 py-3 mb-6 rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-sm">
      <span role="img" aria-label="target" className="text-xl">🎯</span>
      <span>
        <strong>Start your aptitude streak today!</strong> Practice now and build your daily habit.
      </span>
    </div>
  );
}

function WeakAreaDashboard({ weakAreas }: { weakAreas?: AptitudeWeakAreas }) {
  if (!weakAreas) return null;

  const topics = weakAreas.topics.slice(0, 8);
  const focusTopics = weakAreas.focusRecommendations;

  if (!weakAreas.isReady) {
    return (
      <div className="mb-8 rounded-md border border-stone-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-stone-900">
        <div className="flex items-start gap-3">
          <Target className="mt-0.5 h-4 w-4 shrink-0 text-lime-600 dark:text-lime-400" />
          <div>
            <p className="text-sm font-bold text-stone-900 dark:text-stone-50">Weak area analysis unlocks at 20 answers</p>
            <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
              Answer {Math.max(weakAreas.minimumAnswered - weakAreas.totalAnswered, 0)} more question{weakAreas.minimumAnswered - weakAreas.totalAnswered === 1 ? "" : "s"} to get topic-level recommendations.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8 rounded-md border border-stone-200 bg-white px-5 py-5 dark:border-white/10 dark:bg-stone-900">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            diagnosis / weak areas
          </span>
          <h2 className="mt-1 text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Your accuracy by topic
          </h2>
        </div>
        <span className="rounded-md border border-stone-200 px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:border-white/10">
          {weakAreas.totalAnswered} answered
        </span>
      </div>

      {focusTopics.length > 0 && (
        <div className="mb-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 dark:border-red-900/70 dark:bg-red-950/30">
          <div className="mb-2 flex items-center gap-2 text-sm font-bold text-red-800 dark:text-red-300">
            <AlertTriangle className="h-4 w-4" />
            Focus on these 3 topics
          </div>
          <div className="flex flex-wrap gap-2">
            {focusTopics.map((topic) => (
              <Link
                key={topic.topicId}
                to={`/learn/aptitude/${topic.topicSlug}`}
                className="rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-red-700 no-underline transition-colors hover:bg-red-100 dark:bg-red-950 dark:text-red-200 dark:hover:bg-red-900"
              >
                {topic.topicName} · {topic.accuracy}%
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3">
        {topics.map((topic) => (
          <Link
            key={topic.topicId}
            to={`/learn/aptitude/${topic.topicSlug}`}
            className="block no-underline"
          >
            <div className="flex items-center justify-between gap-3 text-xs">
              <div className="min-w-0">
                <span className="font-semibold text-stone-800 dark:text-stone-100">{topic.topicName}</span>
                <span className="ml-2 text-[10px] font-mono uppercase tracking-widest text-stone-400">
                  {topic.answered} answered
                </span>
              </div>
              <span className={`font-mono font-bold tabular-nums ${topic.isWeak ? "text-red-600 dark:text-red-400" : "text-lime-700 dark:text-lime-400"}`}>
                {topic.accuracy}%
              </span>
            </div>
            <div className="mt-1 h-2 overflow-hidden rounded-sm bg-stone-100 dark:bg-stone-800">
              <div
                className={`h-full ${topic.isWeak ? "bg-red-500" : "bg-lime-500"}`}
                style={{ width: `${topic.accuracy}%` }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function AptitudeCategoriesPage() {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [topicSearch, setTopicSearch] = useState("");

  const { data: categories, isLoading } = useQuery({
    queryKey: queryKeys.aptitude.categories(),
    queryFn: () => api.get<AptitudeCategory[]>("/aptitude/categories").then((r) => r.data),
    staleTime: 30 * 60 * 1000,
  });

  const { data: progress, isSuccess } = useQuery({
    queryKey: queryKeys.aptitude.progress(),
    queryFn: () => api.get<AptitudeProgress>("/aptitude/progress").then((r) => r.data),
    enabled: !!user,
    staleTime: 2 * 60 * 1000,
    refetchOnWindowFocus: true,
  });
  const { data: weakAreas } = useQuery({
    queryKey: queryKeys.aptitude.weakAreas(),
    queryFn: () => api.get<AptitudeWeakAreas>("/aptitude/weak-areas").then((r) => r.data),
    enabled: !!user,
    staleTime: 2 * 60 * 1000,
    refetchOnWindowFocus: true,
  });
const clearFilters = () => {
    setTopicSearch("");
    setActiveTab("all");
  };

  const hasFilters = topicSearch.trim() !== "" || activeTab !== "all";
  const totalQuestions = categories?.reduce((s, c) => s + c.questionCount, 0) ?? 0;
  const totalAnswered = categories?.reduce((s, c) => s + c.answeredCount, 0) ?? 0;
  const overallPct = totalQuestions > 0 ? Math.round((totalAnswered / totalQuestions) * 100) : 0;
  const totalTopics = categories?.reduce((s, c) => s + c.topics.length, 0) ?? 0;

  const allTopics =
    categories?.flatMap((cat) =>
      cat.topics.map((t) => ({ ...t, categorySlug: cat.slug, categoryName: cat.name })),
    ) ?? [];
  const filteredTopics = (activeTab === "all" ? allTopics : allTopics.filter((t) => t.categorySlug === activeTab)).filter(
    (t) => !topicSearch || t.name.toLowerCase().includes(topicSearch.toLowerCase()),
  );

  if (isLoading) return <LoadingScreen />;

  const CAT_ICON: Record<string, { icon: typeof Brain; color: string; fill: string }> = {
    aptitude: { icon: Brain, color: "text-orange-600 dark:text-orange-400", fill: "bg-orange-500" },
    "logical-reasoning": { icon: BookOpen, color: "text-blue-600 dark:text-blue-400", fill: "bg-blue-500" },
  };
  const defaultCat = { icon: MessageSquare, color: "text-green-600 dark:text-green-400", fill: "bg-green-500" };

  return (
    <div className="relative text-stone-900 dark:text-stone-50 pb-12">
      <SEO
        title="Aptitude Practice - Quantitative, Logical & Verbal"
        description="Practice aptitude questions for placement exams. Categories include quantitative aptitude, logical reasoning, verbal ability, and data interpretation."
        keywords="aptitude practice, quantitative aptitude, logical reasoning, verbal ability, placement exam preparation"
        canonicalUrl={canonicalUrl("/learn/aptitude")}
      />
            {user && isSuccess && <StreakBanner streak={progress.currentStreak} />}

      <GridBackground />

      <div className="relative max-w-6xl mx-auto">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-2 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              learn / aptitude
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Crack the{" "}
              <span className="relative inline-block">
                <span className="relative z-10">round.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  aria-hidden
                  className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
                />
              </span>
            </h1>
            <p className="mt-3 text-sm text-stone-500 max-w-md">
              Quantitative aptitude, logical reasoning, and verbal ability, practiced in the exact shapes placement papers throw at you.
            </p>
          </div>
          <div className="flex items-center gap-x-4 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 flex-wrap">
            <span>
              questions
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {totalQuestions.toLocaleString()}
              </span>
            </span>
            <span>
              topics
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {totalTopics}
              </span>
            </span>
            {user && (
              <span>
                answered
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                  {totalAnswered}
                </span>
              </span>
            )}
          </div>
        </motion.div>

        {/* Companies strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-6"
        >
          <Link
            to="/learn/aptitude/companies"
            className="group flex items-center gap-4 px-5 py-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
          >
            <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4 text-stone-600 dark:text-stone-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-stone-900 dark:text-stone-50">Company-wise question banks</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-0.5">
                tcs / infy / wipro / accenture / cognizant
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        </motion.div>

        {/* Overall progress + category breakdown */}
        {user && progress && categories && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mb-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-5 py-5"
          >
            <div className="flex items-center gap-5">
              <CircularProgress
                progress={overallPct}
                size={64}
                strokeWidth={4}
                progressClassName="stroke-lime-500"
                trackClassName="stroke-stone-100 dark:stroke-stone-800"
                labelClassName="text-[11px] font-mono font-bold tabular-nums text-stone-900 dark:text-stone-50"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  overall progress
                </span>
                <p className="mt-1 text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
                  {totalAnswered.toLocaleString()} / {totalQuestions.toLocaleString()}
                </p>
                <div className="w-full h-1 bg-stone-100 dark:bg-stone-800 overflow-hidden rounded-sm mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${overallPct}%` }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="h-full bg-lime-400"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {user && <WeakAreaDashboard weakAreas={weakAreas} />}

        {/* Tabs + Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search topics..."
              value={topicSearch}
              onChange={(e) => setTopicSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mr-1">
              category /
            </span>
            {[{ key: "all", label: "All" }, ...(categories?.map((c) => ({ key: c.slug, label: c.name })) ?? [])].map(
              (tab, i) => {
                const active = activeTab === tab.key;
                return (
                  <motion.button
                    key={tab.key}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02, duration: 0.2 }}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                      active
                        ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                        : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
                    }`}
                  >
                    {tab.label}
                  </motion.button>
                );
              },
            )}
            {hasFilters && (
              <Button onClick={clearFilters} variant="ghost" size="sm">
                <X className="w-3 h-3" /> clear
              </Button>
            )}
          </div>
        </motion.div>

        {/* Section header */}
        <div className="flex items-end justify-between gap-4 mb-6 flex-wrap">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1 w-1 bg-lime-400" />
              topics / {activeTab === "all" ? "all" : activeTab}
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Practice topics
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hidden sm:block">
            {filteredTopics.length} topic{filteredTopics.length === 1 ? "" : "s"}
          </span>
        </div>

        {/* Topic list */}
        {filteredTopics.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
            <Brain className="w-8 h-8 text-stone-400 mx-auto mb-3" />
            <p className="text-sm text-stone-600 dark:text-stone-400">No topics found.</p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-2">
              try a different keyword or category
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredTopics.map((topic, idx) => {
              const pct = topic.questionCount > 0 ? Math.round((topic.answeredCount / topic.questionCount) * 100) : 0;
              const isComplete = pct === 100 && topic.questionCount > 0;
              const cfg = CAT_ICON[topic.categorySlug] ?? defaultCat;

              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(idx, 10) * 0.03 }}
                >
                  <Link
                    to={`/learn/aptitude/${topic.slug}`}
                    className="group relative flex items-center gap-4 bg-white dark:bg-stone-900 px-5 py-4 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
                  >
                    {user ? (
                      <CircularProgress
                        progress={pct}
                        size={44}
                        strokeWidth={3}
                        progressClassName={isComplete ? "stroke-lime-500" : "stroke-stone-900 dark:stroke-stone-50"}
                        trackClassName="stroke-stone-100 dark:stroke-stone-800"
                        labelClassName="text-[10px] font-mono font-bold tabular-nums text-stone-900 dark:text-stone-50"
                      />
                    ) : (
                      <div className="w-11 h-11 shrink-0 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center">
                        <span className="text-[11px] font-mono font-bold tabular-nums text-stone-500">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                          {topic.name}
                        </h3>
                        {isComplete && user && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-lime-500 shrink-0" />
                        )}
                      </div>

                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className={`text-[10px] font-mono uppercase tracking-widest ${cfg.color}`}>
                          {topic.categoryName}
                        </span>
                        <span className="text-[10px] font-mono text-stone-400">·</span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
                          {user ? `${topic.answeredCount} / ${topic.questionCount}` : `${topic.questionCount} Qs`}
                        </span>
                      </div>

                      {user && (
                        <div className="w-full h-1 bg-stone-100 dark:bg-stone-800 overflow-hidden rounded-sm mt-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.6, delay: Math.min(idx, 10) * 0.03 }}
                            className={`h-full ${isComplete ? "bg-lime-400" : pct > 0 ? "bg-stone-900 dark:bg-stone-50" : "bg-transparent"}`}
                          />
                        </div>
                      )}
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
