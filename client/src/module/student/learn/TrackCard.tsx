import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Track } from "./tracks";
import { getLessonCount } from "./lesson-counts";

interface TrackCardProps {
  track: Track;
  index: number;
}

const MAX_STAGGER_INDEX = 8;
const STAGGER_STEP = 0.04;
const BASE_DELAY = 0.05;

export const TrackCard = React.memo(function TrackCard({ track, index }: TrackCardProps) {
  const delay = BASE_DELAY + Math.min(index, MAX_STAGGER_INDEX) * STAGGER_STEP;
  const liveCount = getLessonCount(track.lessonCountKey);
  const statLabel = liveCount != null ? `${liveCount} lessons` : track.stat;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <Link
        to={track.to ?? `/learn/${track.path}`}
        className="group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full no-underline"
      >
        <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
          <span className="h-1 w-1 bg-lime-400" />
          {track.kind}
        </span>

        <div className="flex items-start gap-3 mb-3 pr-16">
          <div
            className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0"
            aria-hidden
          >
            <track.icon className={`w-5 h-5 ${track.color}`} aria-hidden />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
              {track.title}
            </h3>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
              {statLabel}
            </span>
          </div>
        </div>

        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
          {track.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
            open track
          </span>
          <ArrowUpRight
            className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
            aria-hidden
          />
        </div>
      </Link>
    </motion.div>
  );
});
