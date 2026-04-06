import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Track } from "./tracks";
import { getLessonCount } from "./lesson-counts";

interface TrackCardProps {
  track: Track;
  index: number;
}

// Cap the entrance-animation stagger so the 10th+ card isn't delayed forever.
const MAX_STAGGER_INDEX = 8;
const STAGGER_STEP = 0.06;
const BASE_DELAY = 0.15;

export const TrackCard = React.memo(function TrackCard({ track, index }: TrackCardProps) {
  const delay = BASE_DELAY + Math.min(index, MAX_STAGGER_INDEX) * STAGGER_STEP;
  const liveCount = getLessonCount(track.lessonCountKey);
  const statLabel =
    liveCount != null ? `${liveCount} Lessons` : track.stat;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Link
        to={`/learn/${track.path}`}
        className={`group flex items-center gap-3 sm:gap-5 bg-white dark:bg-gray-900 px-4 py-4 sm:px-6 sm:py-6 rounded-2xl border border-gray-100 dark:border-gray-800 ${track.borderHover} hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline`}
      >
        <div
          className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl ${track.bgColor} flex items-center justify-center shrink-0`}
          aria-hidden
        >
          <track.icon className={`w-7 h-7 ${track.color}`} aria-hidden />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-lg font-bold text-gray-950 dark:text-white">{track.title}</h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              {statLabel}
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">{track.description}</p>
        </div>
        <ArrowRight
          className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-1 transition-all shrink-0"
          aria-hidden
        />
      </Link>
    </motion.div>
  );
});
