import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, BookOpen, TrendingUp, Star } from "lucide-react";
import { sections, lessons } from "./data";
import type { FastApiProgress } from "./data/types";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { useAuthStore } from "../../../lib/auth.store";

const FREE_LIMIT = 5;

function getLocalProgress(): FastApiProgress {
  try {
    return JSON.parse(localStorage.getItem("fastapi-progress") || "{}");
  } catch {
    return {};
  }
}

const DIFF_COLOR: Record<string, string> = {
  Beginner: "text-emerald-600 dark:text-emerald-400",
  Intermediate: "text-amber-600 dark:text-amber-400",
  Advanced: "text-rose-600 dark:text-rose-400",
};

export default function FastApiSectionPage() {
  const { sectionSlug } = useParams();
  const basePath = "/learn/fastapi";
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const progress: FastApiProgress = getLocalProgress();

  const section = sections.find((s) => s.id === sectionSlug);
  const sectionIndex = sections.findIndex((s) => s.id === sectionSlug);

  if (sectionIndex >= FREE_LIMIT && !isAuthenticated) {
    return <Navigate to={basePath} replace />;
  }

  const sectionLessons = useMemo(
    () => lessons.filter((l) => l.sectionId === sectionSlug).sort((a, b) => a.orderIndex - b.orderIndex),
    [sectionSlug]
  );

  if (!section) {
    return (
      <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 text-center">
          <p className="text-sm text-stone-500 dark:text-stone-400">Section not found.</p>
          <Link
            to={basePath}
            className="inline-block mt-3 text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 hover:underline"
          >
            / return to curriculum
          </Link>
        </div>
      </div>
    );
  }

  const completedCount = sectionLessons.filter((l) => progress[l.id]?.completed).length;
  const pct = sectionLessons.length > 0 ? Math.round((completedCount / sectionLessons.length) * 100) : 0;
  const sectionNum = sectionIndex >= 0 ? String(sectionIndex + 1).padStart(2, "0") : "00";

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title={`${section.title}, FastAPI Tutorial`}
        description={`Learn ${section.title} in FastAPI. ${section.description}`}
        keywords={`${section.title}, fastapi, tutorial`}
        canonicalUrl={canonicalUrl(`/learn/fastapi/${sectionSlug}`)}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
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
              fastapi / section {sectionNum}
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5">
                {section.title}
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">{section.description}</p>
            </div>
            <div className="flex items-center gap-3 flex-wrap text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              <span>
                <span className="text-stone-900 dark:text-stone-50">{completedCount}</span>
                <span className="text-stone-400 dark:text-stone-600"> / {sectionLessons.length} done</span>
              </span>
              <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
              <span className="text-lime-600 dark:text-lime-400">{pct}% complete</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 w-full h-0.5 bg-stone-200 dark:bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="h-full bg-lime-400"
            />
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10 mb-8"
        >
          {[
            { icon: BookOpen, value: sectionLessons.length, label: "lessons" },
            { icon: TrendingUp, value: completedCount, label: "completed" },
            { icon: CheckCircle2, value: `${pct}%`, label: "overall" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-start gap-3 p-3 sm:p-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10"
            >
              <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <stat.icon className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  / {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Lessons list */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1 w-1 bg-lime-400"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            lessons / {sectionLessons.length}
          </span>
        </div>

        <div className="space-y-2">
          {sectionLessons.map((lesson, i) => {
            const isCompleted = progress[lesson.id]?.completed;
            const lessonNum = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.03 }}
              >
                <Link
                  to={`${basePath}/${sectionSlug}/${lesson.id}`}
                  className="group flex items-center gap-4 bg-white dark:bg-stone-900 px-5 py-4 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors no-underline"
                >
                  {/* Status tile */}
                  <div className="flex flex-col items-center gap-1 shrink-0 w-10">
                    <div
                      className={`w-10 h-10 rounded-md flex items-center justify-center ${
                        isCompleted
                          ? "bg-stone-900 dark:bg-stone-50 text-lime-400"
                          : "bg-stone-100 dark:bg-white/5 text-stone-700 dark:text-stone-300"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <span className="text-xs font-mono font-bold">{lessonNum}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p
                        className={`text-sm font-bold tracking-tight truncate ${
                          isCompleted
                            ? "text-stone-400 dark:text-stone-500 line-through"
                            : "text-stone-900 dark:text-stone-50"
                        }`}
                      >
                        {lesson.title}
                      </p>
                      {lesson.isInterviewQuestion && (
                        <Star className="w-3.5 h-3.5 text-lime-500 fill-lime-400 shrink-0" aria-label="Interview question" />
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {lesson.concepts.slice(0, 4).map((c) => (
                        <span
                          key={c}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono uppercase tracking-widest shrink-0 ${DIFF_COLOR[lesson.difficulty]}`}>
                    / {lesson.difficulty.toLowerCase()}
                  </span>
                  <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
