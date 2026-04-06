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

// Cap stagger delay so the Nth card doesn't wait forever on large pages.
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
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <button
        onClick={() => onSelect(repo)}
        className="group relative flex flex-col h-full w-full text-left bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900 transition-all duration-300 cursor-pointer"
      >
        {repo.trending && (
          <div className="absolute -top-2.5 right-4 flex items-center gap-1 rounded-full bg-orange-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
            <Flame size={10} aria-hidden />
            Trending
          </div>
        )}

        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0 text-sm font-bold text-gray-500 dark:text-gray-400"
                aria-hidden
              >
                {repo.owner[0].toUpperCase()}
              </div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-500">{repo.owner}</span>
            </div>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ${badge.cls}`}>
              {badge.label}
            </span>
          </div>

          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            {repo.name}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-2 leading-relaxed mb-4 flex-1">
            {repo.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-50 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400">
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
                className="px-2 py-0.5 rounded-md bg-gray-50 dark:bg-gray-800 text-[10px] text-gray-500 dark:text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Star size={13} className="text-amber-500" aria-hidden />
                {formatCount(repo.stars)}
              </span>
              <span className="flex items-center gap-1">
                <GitFork size={13} className="text-cyan-500" aria-hidden />
                {formatCount(repo.forks)}
              </span>
              <span className="flex items-center gap-1">
                <CircleDot size={13} className="text-emerald-500" aria-hidden />
                {formatCount(repo.openIssues)}
              </span>
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
              Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
            </span>
          </div>
        </div>
      </button>
    </motion.div>
  );
});

export const RepoCardSkeleton = React.memo(function RepoCardSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 animate-pulse">
      <div className="flex items-start gap-3 mb-3">
        <div className="h-10 w-10 rounded-xl bg-gray-100 dark:bg-gray-800" />
        <div className="flex-1">
          <div className="h-4 w-3/4 rounded bg-gray-100 dark:bg-gray-800 mb-2" />
          <div className="h-3 w-1/2 rounded bg-gray-100 dark:bg-gray-800" />
        </div>
      </div>
      <div className="h-3 w-full rounded bg-gray-100 dark:bg-gray-800 mb-2" />
      <div className="h-3 w-2/3 rounded bg-gray-100 dark:bg-gray-800 mb-4" />
      <div className="flex gap-1.5 mb-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-5 w-14 rounded-md bg-gray-100 dark:bg-gray-800" />
        ))}
      </div>
      <div className="flex gap-4 pt-3 border-t border-gray-100 dark:border-gray-800">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-3 w-12 rounded bg-gray-100 dark:bg-gray-800" />
        ))}
      </div>
    </div>
  );
});
