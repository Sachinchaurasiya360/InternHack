import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, BookOpen, TrendingUp, Star } from "lucide-react";
import { sections, lessons } from "./data";
import type { NodeProgress } from "./data/types";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { useAuthStore } from "../../../lib/auth.store";

const FREE_LIMIT = 5;

function getLocalProgress(): NodeProgress {
  try {
    return JSON.parse(localStorage.getItem("node-progress") || "{}");
  } catch {
    return {};
  }
}

const DIFF_BADGE: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  Intermediate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  Advanced: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

export default function NodeSectionPage() {
  const { sectionSlug } = useParams();
  const basePath = "/learn/nodejs";
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const progress: NodeProgress = getLocalProgress();

  const section = sections.find((s) => s.id === sectionSlug);
  const sectionIndex = sections.findIndex((s) => s.id === sectionSlug);

  // Redirect to lessons page if this section is locked
  if (sectionIndex >= FREE_LIMIT && !isAuthenticated) {
    return <Navigate to={basePath} replace />;
  }

  const sectionLessons = useMemo(
    () => lessons.filter((l) => l.sectionId === sectionSlug).sort((a, b) => a.orderIndex - b.orderIndex),
    [sectionSlug]
  );

  if (!section) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Section not found</p>
        <Link to={basePath} className="text-blue-500 hover:underline text-sm mt-2 inline-block">
          Back to Node.js & Express Lessons
        </Link>
      </div>
    );
  }

  const completedCount = sectionLessons.filter((l) => progress[l.id]?.completed).length;
  const pct = sectionLessons.length > 0 ? Math.round((completedCount / sectionLessons.length) * 100) : 0;

  return (
    <div className="relative pb-12">
      <SEO
        title={`${section.title} - Node.js Tutorial`}
        description={`Learn ${section.title} in Node.js. ${section.description}`}
        keywords={`${section.title}, nodejs, tutorial`}
        canonicalUrl={canonicalUrl(`/learn/nodejs/${sectionSlug}`)}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
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
        className="text-center mb-8"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          {section.title}
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          {section.description}
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
          { icon: BookOpen, value: sectionLessons.length, label: "Lessons", iconColor: "text-green-500" },
          { icon: TrendingUp, value: completedCount, label: "Completed", iconColor: "text-violet-500" },
          { icon: CheckCircle2, value: `${pct}%`, label: "Complete", iconColor: "text-emerald-500" },
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

      {/* Lesson list */}
      <div className="space-y-3">
        {sectionLessons.map((lesson, i) => {
          const isCompleted = progress[lesson.id]?.completed;
          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.04 }}
            >
              <Link
                to={`${basePath}/${sectionSlug}/${lesson.id}`}
                className="group flex items-center gap-4 bg-white dark:bg-gray-900 px-5 py-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : (
                    <span className="w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 text-sm font-semibold">
                      {i + 1}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className={`text-sm font-semibold ${isCompleted ? "text-gray-400 dark:text-gray-500 line-through" : "text-gray-900 dark:text-white"}`}>
                      {lesson.title}
                    </p>
                    {lesson.isInterviewQuestion && (
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {lesson.concepts.slice(0, 4).map((c) => (
                      <span key={c} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${DIFF_BADGE[lesson.difficulty]}`}>
                  {lesson.difficulty}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
