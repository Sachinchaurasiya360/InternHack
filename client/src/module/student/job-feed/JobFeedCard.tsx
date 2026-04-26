import { motion } from "framer-motion";
import { MapPin, IndianRupee, Bookmark, X, ExternalLink, Laptop, Building, Home } from "lucide-react";
import { MatchScoreBadge } from "./MatchScoreBadge";
import type { JobFeedMatch } from "../../../lib/types";
import { Button } from "../../../components/ui/button";

interface Props {
  match: JobFeedMatch;
  onDismiss: (matchId: number) => void;
  onSave: (matchId: number) => void;
  index: number;
}

const WORK_MODE_MAP: Record<string, { label: string; icon: typeof Laptop }> = {
  REMOTE: { label: "Remote", icon: Laptop },
  HYBRID: { label: "Hybrid", icon: Building },
  ONSITE: { label: "On-site", icon: Home },
};

export function JobFeedCard({ match, onDismiss, onSave, index }: Props) {
  const { job, score, saved } = match;
  const wm = job.workMode ? WORK_MODE_MAP[job.workMode] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start flex-1 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0 mr-3 text-white dark:text-gray-950 text-sm font-bold">
            {job.company?.charAt(0) || "?"}
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-1">
              {job.title}
            </h3>
            <span className="text-sm text-gray-500">{job.company}</span>
          </div>
        </div>
        <MatchScoreBadge score={score} />
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-3">
        {job.location && (
          <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
            <MapPin className="w-3 h-3 text-indigo-400" />
            {job.location}
          </span>
        )}
        {job.salary && (
          <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
            <IndianRupee className="w-3 h-3 text-emerald-400" />
            {job.salary}
          </span>
        )}
        {wm && (
          <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
            <wm.icon className="w-3 h-3 text-violet-400" />
            {wm.label}
          </span>
        )}
      </div>

      {/* Skills */}
      {job.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.skills.slice(0, 5).map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="mt-auto flex items-center gap-2 pt-3 border-t border-gray-50 dark:border-gray-800">
        {job.applicationUrl ? (
          <a
            href={job.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
          >
            Apply <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-xs text-gray-400">No apply link</span>
        )}
        <Button
          variant="ghost"
          mode="icon"
          size="sm"
          onClick={() => onSave(match.matchId)}
          className={
            saved
              ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
              : "text-gray-400"
          }
          title={saved ? "Saved" : "Save"}
        >
          <Bookmark className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
        </Button>
        <Button
          variant="ghost"
          mode="icon"
          size="sm"
          onClick={() => onDismiss(match.matchId)}
          className="text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 ml-auto"
          title="Dismiss"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}
