import { Link } from "react-router";
import { ArrowRight, Clock } from "lucide-react";
import { type LearningPathItemSlug } from "../learning-paths.data";
import { useLearningPath } from "../learning-paths.context";

type Props = {
  currentSlug: LearningPathItemSlug;
  completed: boolean;
  className?: string;
};

export function NextInPathCard({ currentSlug, completed, className = "" }: Props) {
  const { selectedPath, getNextItemAfter } = useLearningPath();
  const nextItem = getNextItemAfter(currentSlug);

  if (!completed || !nextItem) return null;

  return (
    <section className={`mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-white/10 dark:bg-stone-900 ${className}`}>
      <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_30%]">
        <div className="p-5">
          <p className="mb-2 text-xs font-mono uppercase tracking-widest text-stone-500">
            Next in your path
          </p>
          <h2 className="text-xl font-bold text-stone-950 dark:text-stone-50">
            {nextItem.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
            {nextItem.description}
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-stone-500">
            <span>{selectedPath.title}</span>
            <span className="h-1 w-1 bg-lime-400" />
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {nextItem.estimatedMinutes} min
            </span>
          </div>
        </div>
        <Link
          to={nextItem.href}
          className="group flex min-h-40 flex-col justify-between bg-stone-950 p-5 text-stone-50 no-underline transition-colors hover:bg-stone-900 dark:bg-stone-50 dark:text-stone-950 dark:hover:bg-stone-200"
        >
          <span className="text-xs font-mono uppercase tracking-widest opacity-70">
            Preview
          </span>
          <span className="line-clamp-3 text-sm leading-relaxed opacity-80">
            {nextItem.description}
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-bold">
            Continue
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </section>
  );
}
