import type { OpenSourceRepo } from "../../../../lib/types";

interface RecentlyViewedSectionProps {
  repos: OpenSourceRepo[];
  onSelect: (repo: OpenSourceRepo) => void;
  onClear: () => void;
}

export function RecentlyViewedSection({ repos, onSelect, onClear }: RecentlyViewedSectionProps) {
  const hasRepos = repos.length > 0;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-1.5">
          <div className="h-1 w-1 bg-lime-400"></div>
          <h2 className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Recently Viewed ({repos.length})
          </h2>
        </div>
        {hasRepos ? (
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] font-medium text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors"
          >
            Clear history
          </button>
        ) : null}
      </div>

      {hasRepos ? (
        <div className="relative">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-stone-300 dark:scrollbar-thumb-stone-700 scrollbar-track-transparent">
            {repos.map((repo) => (
              <button
                key={repo.id}
                type="button"
                onClick={() => onSelect(repo)}
                className="flex-shrink-0 w-48 text-left p-3 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors"
              >
                <p className="text-xs font-bold text-stone-800 dark:text-stone-200 truncate">
                  {repo.owner}/{repo.name}
                </p>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 truncate">
                  {repo.description}
                </p>
              </button>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-2 w-8 bg-linear-to-l from-stone-50 dark:from-stone-950 to-transparent pointer-events-none" />
        </div>
      ) : (
        <div className="rounded-md border border-dashed border-stone-200 dark:border-white/10 bg-white/60 dark:bg-stone-900/50 px-4 py-3">
          <p className="text-sm font-medium text-stone-700 dark:text-stone-200">
            No repos viewed yet.
          </p>
          <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
            Repos you open will appear here
          </p>
        </div>
      )}
    </div>
  );
}
