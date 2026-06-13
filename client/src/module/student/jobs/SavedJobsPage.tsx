import { formatDate } from "../../../lib/date-utils";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Bookmark, MapPin, IndianRupee, Clock, Trash2, ArrowUpRight, Briefcase } from "lucide-react";
import { Link } from "react-router";
import api from "../../../lib/axios";
import { TagList } from "../../../components/ui/TagList";
import { MetaChip } from "../../../components/ui/MetaChip";
import { EmptyState } from "../../../components/ui/EmptyState";
import { queryKeys } from "../../../lib/query-keys";
import type { Job } from "../../../lib/types";
import { useSaveJob } from "../../../hooks/useSaveJob";
import { CARD_BASE } from "../../../lib/card-styles";
export default function SavedJobsPage() {
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.savedJobs.list(),
    queryFn: () => api.get("/student/saved-jobs").then((res) => res.data.jobs as Job[]),
    staleTime: 30_000,
  });

  const { toggleSave: unsave } = useSaveJob({ successToast: "Job removed from saved" });

  const savedJobs = data ?? [];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
      >
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            saved / jobs
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Wishlist</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-md">
            Jobs you've bookmarked for later — apply before they expire.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-stone-500">
          <span className="flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5" />
            <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums">
              {savedJobs.length}
            </span>
          </span>
        </div>
      </motion.div>

      {isLoading ? (
        <div className="py-20 text-center">
          <div className="inline-flex flex-col items-center gap-3">
            <div className="w-6 h-6 border-2 border-stone-300 dark:border-stone-700 border-t-lime-400 rounded-full animate-spin" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              loading saved jobs...
            </span>
          </div>
        </div>
      ) : savedJobs.length === 0 ? (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <EmptyState
            icon={<Bookmark className="w-6 h-6 text-stone-400 dark:text-stone-600" />}
            title="No saved jobs yet"
            description="Browse jobs and tap the bookmark icon to save them for later."
            action={
              <Link
                to="/student/jobs"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-bold bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors no-underline mt-2"
              >
                <Briefcase className="w-3.5 h-3.5" /> Browse jobs
              </Link>
            }
          />
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedJobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="relative"
            >
              <Link to={`/student/jobs/${job.id}`} className={CARD_BASE}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-stone-900 dark:text-stone-50 text-sm font-bold">
                    {job.company?.charAt(0)?.toUpperCase() || "?"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight">
                      {job.title}
                    </h3>
                    <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
                      {job.company}
                    </span>
                  </div>
                </div>
                {job.description && (
                  <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <MetaChip icon={<MapPin className="w-3 h-3 text-stone-400" />}>{job.location}</MetaChip>
                  <MetaChip icon={<IndianRupee className="w-3 h-3 text-stone-400" />}>{job.salary}</MetaChip>
                  {job.deadline && (
                    new Date(job.deadline) < new Date() ? (
                      <MetaChip icon={<Clock className="w-3 h-3" />} className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-900/40">
                        expired
                      </MetaChip>
                    ) : (
                      <MetaChip icon={<Clock className="w-3 h-3 text-stone-400" />}>
                        {formatDate(job.deadline)}
                      </MetaChip>
                    )
                  )}
                </div>
                <TagList tags={job.tags} />
                <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">view role</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); unsave({ jobId: job.id, isSaved: true }); }}
                className="absolute top-3 right-3 p-1.5 rounded-md text-stone-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors border-0 bg-transparent cursor-pointer z-10"
                title="Remove from saved"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
