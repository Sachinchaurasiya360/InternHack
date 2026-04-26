import React from "react";
import { motion } from "framer-motion";
import { Star, GitFork, CircleDot, Flame, ArrowRight } from "lucide-react";
import type { OpenSourceRepo } from "../../../lib/types";
import { LANGUAGE_COLORS } from "./reposData";
import { formatCount, difficultyBadge } from "./_shared/repo-utils";

interface RepoCardProps {
  repo: OpenSourceRepo;
  index: number;
  onSelect: (repo: OpenSourceRepo) => void;
}

const MAX_STAGGER_INDEX = 8;

export const RepoCard = React.memo(function RepoCard({ repo, index, onSelect }: RepoCardProps) {
  const badge = difficultyBadge(repo.difficulty);
  const delay = Math.min(index, MAX_STAGGER_INDEX) * 0.04;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <button
        onClick={() => onSelect(repo)}
        className="group relative flex flex-col h-full w-full text-left bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/25 transition-colors cursor-pointer"
      >
        {repo.trending && (
          <div className="absolute -top-2 right-4 inline-flex items-center gap-1 rounded-md bg-stone-900 dark:bg-stone-50 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-lime-400">
            <Flame size={10} aria-hidden />
            trending
          </div>
        )}

        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-sm font-bold text-stone-700 dark:text-stone-200"
                aria-hidden
              >
                {repo.owner[0].toUpperCase()}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <div className="h-1 w-1 bg-lime-400"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 truncate">
                    {repo.owner}
                  </span>
                </div>
              </div>
            </div>
            <span className={`rounded-md px-2 py-0.5 text-[10px] font-medium ring-1 shrink-0 ${badge.cls}`}>
              {badge.label}
            </span>
          </div>

          <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5 leading-snug">
            {repo.name}
          </h3>

          <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed mb-4 flex-1">
            {repo.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-[11px] font-medium text-stone-700 dark:text-stone-300">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: LANGUAGE_COLORS[repo.language] ?? "#888" }}
                aria-hidden
              />
              {repo.language}
            </span>
            {repo.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-[10px] font-mono text-stone-600 dark:text-stone-400"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-stone-200 dark:border-white/10">
            <div className="flex items-center gap-3 text-[11px] font-mono text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-1">
                <Star size={12} className="text-lime-600 dark:text-lime-400" aria-hidden />
                {formatCount(repo.stars)}
              </span>
              <span className="flex items-center gap-1">
                <GitFork size={12} aria-hidden />
                {formatCount(repo.forks)}
              </span>
              <span className="flex items-center gap-1">
                <CircleDot size={12} aria-hidden />
                {formatCount(repo.openIssues)}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
              details
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden />
            </span>
          </div>
        </div>
      </button>
    </motion.div>
  );
});

export const RepoCardSkeleton = React.memo(function RepoCardSkeleton() {
  return (
    <div className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-5 animate-pulse">
      <div className="flex items-start gap-3 mb-3">
        <div className="h-9 w-9 rounded-md bg-stone-100 dark:bg-white/5" />
        <div className="flex-1">
          <div className="h-3 w-1/2 rounded bg-stone-100 dark:bg-white/5 mb-2" />
          <div className="h-4 w-3/4 rounded bg-stone-100 dark:bg-white/5" />
        </div>
      </div>
      <div className="h-3 w-full rounded bg-stone-100 dark:bg-white/5 mb-2" />
      <div className="h-3 w-2/3 rounded bg-stone-100 dark:bg-white/5 mb-4" />
      <div className="flex gap-1.5 mb-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-5 w-14 rounded-md bg-stone-100 dark:bg-white/5" />
        ))}
      </div>
      <div className="flex gap-4 pt-3 border-t border-stone-200 dark:border-white/10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-3 w-10 rounded bg-stone-100 dark:bg-white/5" />
        ))}
      </div>
    </div>
  );
});
