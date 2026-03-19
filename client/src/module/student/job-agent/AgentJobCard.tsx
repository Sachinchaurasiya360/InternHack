import { MapPin, IndianRupee, ExternalLink, Wifi, Building2, Monitor } from "lucide-react";
import type { JobFeedMatch } from "../../../lib/types";

interface Props {
  job: JobFeedMatch["job"];
}

const WORK_MODE_CONFIG: Record<string, { label: string; icon: typeof Wifi; color: string }> = {
  REMOTE: { label: "Remote", icon: Wifi, color: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/20" },
  HYBRID: { label: "Hybrid", icon: Monitor, color: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20" },
  ONSITE: { label: "On-site", icon: Building2, color: "text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-900/20" },
};

export function AgentJobCard({ job }: Props) {
  const workMode = job.workMode ? WORK_MODE_CONFIG[job.workMode] : null;

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-3.5 flex flex-col hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-sm transition-all">
      {/* Header row */}
      <div className="flex items-start gap-3 mb-2.5">
        <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 text-gray-700 dark:text-gray-300 text-sm font-bold">
          {job.company?.charAt(0) || "?"}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {job.title}
          </h4>
          <span className="text-xs text-gray-500 dark:text-gray-400">{job.company}</span>
        </div>
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400 mb-2.5">
        {job.location && (
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span className="line-clamp-1">{job.location}</span>
          </span>
        )}
        {job.salary && (
          <span className="flex items-center gap-1">
            <IndianRupee className="w-3 h-3" />
            {job.salary}
          </span>
        )}
      </div>

      {/* Skills + work mode */}
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        {workMode && (
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium ${workMode.color}`}>
            <workMode.icon className="w-3 h-3" />
            {workMode.label}
          </span>
        )}
        {job.skills.slice(0, 3).map((s) => (
          <span
            key={s}
            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-[11px] font-medium"
          >
            {s}
          </span>
        ))}
        {job.skills.length > 3 && (
          <span className="text-[11px] text-gray-400 dark:text-gray-500">
            +{job.skills.length - 3}
          </span>
        )}
      </div>

      {/* Apply link */}
      {job.applicationUrl && (
        <a
          href={job.applicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/15 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors no-underline"
        >
          View & Apply <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
}
