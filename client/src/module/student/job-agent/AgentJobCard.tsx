import React from "react";
import { MapPin, IndianRupee, ArrowRight, Wifi, Building2, Monitor } from "lucide-react";
import type { JobFeedMatch } from "../../../lib/types";

interface Props {
  job: JobFeedMatch["job"];
}

const WORK_MODE_CONFIG: Record<string, { label: string; icon: typeof Wifi }> = {
  REMOTE: { label: "Remote", icon: Wifi },
  HYBRID: { label: "Hybrid", icon: Monitor },
  ONSITE: { label: "On-site", icon: Building2 },
};

export const AgentJobCard = React.memo(function AgentJobCard({ job }: Props) {
  const workMode = job.workMode ? WORK_MODE_CONFIG[job.workMode] : null;

  return (
    <div className="group bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-3.5 flex flex-col hover:border-stone-400 dark:hover:border-white/25 transition-colors">
      {/* Header row */}
      <div className="flex items-start gap-3 mb-2.5">
        <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/10 flex items-center justify-center shrink-0 text-stone-700 dark:text-stone-200 text-sm font-bold">
          {job.company?.charAt(0).toUpperCase() || "?"}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1">
            {job.title}
          </h4>
          <span className="text-xs text-stone-500 dark:text-stone-400">{job.company}</span>
        </div>
      </div>

      {/* Meta row */}
      {(job.location || job.salary) && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-stone-500 dark:text-stone-400 mb-2.5">
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
      )}

      {/* Skills + work mode */}
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        {workMode && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-widest bg-stone-900 dark:bg-stone-50 text-lime-400">
            <workMode.icon className="w-3 h-3" />
            {workMode.label}
          </span>
        )}
        {job.skills.slice(0, 3).map((s) => (
          <span
            key={s}
            className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-300"
          >
            {s}
          </span>
        ))}
        {job.skills.length > 3 && (
          <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500">
            + {job.skills.length - 3}
          </span>
        )}
      </div>

      {/* Apply link */}
      {job.applicationUrl && (
        <a
          href={job.applicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto group/cta inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-md text-xs font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors no-underline"
        >
          View and apply
          <ArrowRight className="w-3 h-3 transition-transform group-hover/cta:translate-x-0.5" />
        </a>
      )}
    </div>
  );
});
