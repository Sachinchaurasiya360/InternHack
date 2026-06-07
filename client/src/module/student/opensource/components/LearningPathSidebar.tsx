import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Clock, Route } from "lucide-react";
import { LEARNING_PATHS, type LearningPathId } from "../learning-paths.data";
import { useLearningPath } from "../learning-paths.context";

export function LearningPathSidebar() {
  const { selectedPath, selectedPathId, setSelectedPathId, progress, nextIncompleteItem } = useLearningPath();
  const progressPct = progress.totalCount > 0 ? Math.round((progress.completedCount / progress.totalCount) * 100) : 0;

  return (
    <aside className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-stone-900">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-stone-900 text-lime-300 dark:bg-stone-50 dark:text-stone-950">
          <Route className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-mono uppercase tracking-widest text-stone-500">Learning path</p>
          <h2 className="mt-1 text-sm font-bold leading-tight text-stone-950 dark:text-stone-50">
            {selectedPath.title}
          </h2>
        </div>
      </div>

      <select
        value={selectedPathId}
        onChange={(event) => setSelectedPathId(event.target.value as LearningPathId)}
        className="mb-4 h-10 w-full rounded-xl border border-stone-200 bg-stone-50 px-3 text-sm font-medium text-stone-800 outline-none transition-colors focus:border-stone-500 dark:border-white/10 dark:bg-stone-950 dark:text-stone-100"
      >
        {LEARNING_PATHS.map((path) => (
          <option key={path.id} value={path.id}>
            {path.title}
          </option>
        ))}
      </select>

      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-sm font-bold text-stone-900 dark:text-stone-50">
            Path {progress.completedCount} of {progress.totalCount} complete
          </span>
          <span className="text-xs font-mono text-stone-500">{progressPct}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded bg-stone-100 dark:bg-stone-800">
          <div className="h-full bg-lime-400 transition-all duration-500" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <div className="mb-4 flex items-center gap-2 rounded-xl bg-stone-50 px-3 py-2.5 text-sm text-stone-600 dark:bg-stone-950 dark:text-stone-300">
        <Clock className="h-4 w-4 text-stone-400" />
        <span>{progress.remainingMinutes} min estimated time left</span>
      </div>

      <div className="space-y-2">
        {selectedPath.items.map((item, index) => {
          const complete = progress.completedSlugs.has(item.slug);
          return (
            <Link
              key={item.slug}
              to={item.href}
              className="flex items-center gap-3 rounded-xl px-2 py-2 text-sm no-underline transition-colors hover:bg-stone-50 dark:hover:bg-stone-950"
            >
              {complete ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
              ) : (
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-stone-100 text-xs font-bold text-stone-500 dark:bg-stone-800">
                  {index + 1}
                </span>
              )}
              <span className={complete ? "line-through text-stone-400" : "text-stone-700 dark:text-stone-300"}>
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>

      {nextIncompleteItem && (
        <Link
          to={nextIncompleteItem.href}
          className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-lime-200 bg-lime-50 px-3 py-3 text-sm font-bold text-stone-950 no-underline transition-colors hover:bg-lime-100 dark:border-lime-400/30 dark:bg-lime-400/10 dark:text-lime-200"
        >
          <span>Next: {nextIncompleteItem.title}</span>
          <ArrowRight className="h-4 w-4 shrink-0" />
        </Link>
      )}
    </aside>
  );
}
