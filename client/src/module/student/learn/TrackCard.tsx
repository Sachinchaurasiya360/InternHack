import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, IndianRupee } from "lucide-react";
import type { Track } from "./tracks";
import { TRACKS } from "./tracks";
import { getLessonCount } from "./lesson-counts";
import type { TrackProgress } from "./useTrackProgress";

interface TrackCardProps {
  track: Track;
  index: number;
  completedTrackIds?: string[];
  progress?: TrackProgress | null;
}

const MAX_STAGGER_INDEX = 8;
const STAGGER_STEP = 0.04;
const BASE_DELAY = 0.05;

export const TrackCard = React.memo(function TrackCard({
  track,
  index,
  completedTrackIds = [],
  progress,
}: TrackCardProps) {
  const delay = BASE_DELAY + Math.min(index, MAX_STAGGER_INDEX) * STAGGER_STEP;
  const liveCount = getLessonCount(track.lessonCountKey);
  const statLabel = liveCount != null ? `${liveCount} lessons` : track.stat;
  const pct = progress && progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : null;
  const isComplete = pct !== null && pct >= 100;

  const prereqs = (track.prerequisites ?? []).map((id) => ({
    id,
    title: TRACKS.find((t) => t.id === id)?.title ?? id,
    done: completedTrackIds.includes(id),
  }));
  const hasUnmet = prereqs.some((p) => !p.done);
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
            {track.salary && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-lime-700 dark:text-lime-400 mt-1 bg-lime-50 dark:bg-lime-900/30 px-1.5 py-0.5 rounded-sm">
                <IndianRupee className="w-3 h-3" />
                {track.salary}
              </span>
            )}
          </div>
        </div>

        {progress && (
          <div className="mb-3">
            {isComplete ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Completed
              </span>
            ) : (
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-mono">{progress.completed}/{progress.total} {progress.label}</span>
                  <span className="text-stone-500 font-mono">{pct}%</span>
                </div>
                <div className="w-full h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-lime-500 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
          {track.description}
        </p>

        {prereqs.length > 0 && (
          <div className={`mb-4 px-3 py-2.5 rounded-md border text-xs ${
            hasUnmet
              ? "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800"
              : "bg-lime-50 dark:bg-lime-900/20 border-lime-200 dark:border-lime-800"
          }`}>
            <p className="font-mono uppercase tracking-widest text-xs text-stone-500 mb-1.5">
              prerequisites
            </p>
            <div className="flex items-center gap-1.5 flex-wrap">
              {prereqs.map((p) => (
                <span
                  key={p.id}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-xs font-mono ${
                    p.done
                      ? "text-lime-700 dark:text-lime-400 border-lime-300 dark:border-lime-800 bg-lime-50 dark:bg-lime-900/30"
                      : "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/30"
                  }`}
                >
                  {p.done ? "✓" : "✗"} {p.title}
                </span>
              ))}
            </div>
            {hasUnmet && track.prerequisiteText && (
              <p className="mt-1.5 text-xs text-amber-700 dark:text-amber-400">
                {track.prerequisiteText}
              </p>
            )}
          </div>
        )}

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
