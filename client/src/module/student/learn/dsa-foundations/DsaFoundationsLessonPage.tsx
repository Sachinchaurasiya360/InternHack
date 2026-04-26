import { Suspense, useCallback } from "react";
import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SEO } from "../../../../components/SEO";
import { canonicalUrl } from "../../../../lib/seo.utils";
import { LoadingScreen } from "../../../../components/LoadingScreen";
import { findLesson, getNeighbours } from "./curriculum";
import { markLessonComplete } from "./progress";

export default function DsaFoundationsLessonPage() {
  const { levelId = "", lessonSlug = "" } = useParams<{
    levelId: string;
    lessonSlug: string;
  }>();

  const found = findLesson(levelId, lessonSlug);
  const handleQuizComplete = useCallback(
    (score: number) => {
      if (!found) return;
      markLessonComplete(found.level.id, found.lesson.slug, score);
    },
    [found],
  );

  if (!found) return <Navigate to={`/learn/dsa-foundations/${levelId}`} replace />;

  const { level, lesson } = found;
  const { prev, next } = getNeighbours(level.id, lesson.slug);
  const LessonComponent = lesson.load as unknown as React.ComponentType<{
    onQuizComplete?: (score: number) => void;
  }>;

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title={`${lesson.title} - DSA Foundations Level ${level.number}`}
        description={lesson.summary}
        canonicalUrl={canonicalUrl(`/learn/dsa-foundations/${level.id}/${lesson.slug}`)}
      />

      <div className="max-w-5xl mx-auto px-3 sm:px-8 py-8">
        <Suspense fallback={<LoadingScreen />}>
          <LessonComponent onQuizComplete={handleQuizComplete} />
        </Suspense>

        {/* Sequential prev/next footer */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {prev ? (
            <Link
              to={`/learn/dsa-foundations/${prev.levelId}/${prev.slug}`}
              className="group flex items-center gap-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-4 py-3 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
            >
              <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:-translate-x-0.5 transition-all" />
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  / previous lesson
                </div>
                <div className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                  {prev.title}
                </div>
              </div>
            </Link>
          ) : (
            <Link
              to={`/learn/dsa-foundations/${level.id}`}
              className="group flex items-center gap-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-4 py-3 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
            >
              <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:-translate-x-0.5 transition-all" />
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  / back to
                </div>
                <div className="text-sm font-bold text-stone-900 dark:text-stone-50">
                  Level {level.number} lessons
                </div>
              </div>
            </Link>
          )}
          {next ? (
            <Link
              to={`/learn/dsa-foundations/${next.levelId}/${next.slug}`}
              className="group flex items-center gap-3 justify-end text-right bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-4 py-3 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
            >
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  / next lesson
                </div>
                <div className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                  {next.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ) : (
            <div className="border border-dashed border-stone-300 dark:border-white/10 rounded-md px-4 py-3 text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                more lessons coming soon
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
