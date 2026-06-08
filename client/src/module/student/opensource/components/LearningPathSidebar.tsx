import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Clock, Route } from "lucide-react";
import { LEARNING_PATHS, type LearningPathId } from "../learning-paths.data";
import { useLearningPath } from "../learning-paths.context";

export function LearningPathSidebar() {
  const { selectedPath, selectedPathId, setSelectedPathId, progress, nextIncompleteItem } = useLearningPath();
  const progressPct =
    progress.totalCount > 0
      ? Math.round((progress.completedCount / progress.totalCount) * 100)
      : 0;

  return (
    <aside className="border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md overflow-hidden">
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-stone-200 dark:border-white/10">
        <div className="w-7 h-7 rounded-md bg-stone-900 dark:bg-stone-50 flex items-center justify-center shrink-0">
          <Route className="w-3.5 h-3.5 text-lime-400 dark:text-stone-900" />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Learning path
          </p>
          <h2 className="text-sm font-bold leading-tight text-stone-900 dark:text-stone-50 truncate">
            {selectedPath.title}
          </h2>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <select
          value={selectedPathId}
          onChange={(e) => setSelectedPathId(e.target.value as LearningPathId)}
          className="w-full h-9 px-3 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 text-sm font-medium text-stone-800 dark:text-stone-100 outline-none focus:border-stone-400 dark:focus:border-white/25 transition-colors"
        >
          {LEARNING_PATHS.map((path) => (
            <option key={path.id} value={path.id}>
              {path.title}
            </option>
          ))}
        </select>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-stone-900 dark:text-stone-50">
              {progress.completedCount} of {progress.totalCount} complete
            </span>
            <span className="text-[10px] font-mono text-stone-500">{progressPct}%</span>
          </div>
          <div className="h-1.5 bg-stone-100 dark:bg-stone-800 overflow-hidden">
            <div
              className="h-full bg-lime-400 transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          <span>{progress.remainingMinutes} min remaining</span>
        </div>

        <div className="space-y-0.5">
          {selectedPath.items.map((item, index) => {
            const complete = progress.completedSlugs.has(item.slug);
            return (
              <Link
                key={item.slug}
                to={item.href}
                className="flex items-center gap-3 px-2 py-1.5 rounded-md text-sm no-underline transition-colors hover:bg-stone-50 dark:hover:bg-stone-800"
              >
                {complete ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-lime-500" />
                ) : (
                  <span className="flex w-4 h-4 shrink-0 items-center justify-center rounded-sm bg-stone-100 dark:bg-stone-800 text-[10px] font-bold font-mono text-stone-500">
                    {index + 1}
                  </span>
                )}
                <span
                  className={
                    complete
                      ? "line-through text-stone-400 text-xs"
                      : "text-stone-700 dark:text-stone-300 text-xs"
                  }
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>

        {nextIncompleteItem && (
          <Link
            to={nextIncompleteItem.href}
            className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-md border border-lime-200 dark:border-lime-400/30 bg-lime-50 dark:bg-lime-400/10 text-xs font-bold text-stone-950 dark:text-lime-200 no-underline hover:bg-lime-100 dark:hover:bg-lime-400/15 transition-colors"
          >
            <span>Next: {nextIncompleteItem.title}</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
        )}
      </div>
    </aside>
  );
}

export function LearningPathCompact() {
  const { selectedPath, progress, nextIncompleteItem } = useLearningPath();
  const progressPct =
    progress.totalCount > 0
      ? Math.round((progress.completedCount / progress.totalCount) * 100)
      : 0;

  return (
    <div className="flex items-center gap-4 px-4 py-2.5 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-2 shrink-0">
        <div className="w-5 h-5 rounded-sm bg-stone-900 dark:bg-stone-50 flex items-center justify-center">
          <Route className="w-2.5 h-2.5 text-lime-400 dark:text-stone-900" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 whitespace-nowrap">
          {selectedPath.title}
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div className="w-20 h-1 bg-stone-200 dark:bg-stone-700">
          <div className="h-full bg-lime-400 transition-all" style={{ width: `${progressPct}%` }} />
        </div>
        <span className="text-[10px] font-mono text-stone-500">{progressPct}%</span>
      </div>

      {nextIncompleteItem && (
        <Link
          to={nextIncompleteItem.href}
          className="flex items-center gap-1.5 shrink-0 text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 no-underline hover:text-lime-500 transition-colors whitespace-nowrap"
        >
          Next: {nextIncompleteItem.title}
          <ArrowRight className="w-3 h-3" />
        </Link>
      )}
    </div>
  );
}
