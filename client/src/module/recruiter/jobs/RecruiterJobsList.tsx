import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  PlusCircle,
  Users,
  BarChart3,
  Edit,
  Trash2,
  Briefcase,
  MapPin,
  Wallet,
  CalendarDays,
  Search as SearchIcon,
} from "lucide-react";
import api from "../../../lib/axios";
import type { Job } from "../../../lib/types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

type StatusFilter = "ALL" | "DRAFT" | "PUBLISHED" | "CLOSED" | "ARCHIVED";

const STATUS_TABS: { key: StatusFilter; label: string }[] = [
  { key: "ALL", label: "all" },
  { key: "PUBLISHED", label: "published" },
  { key: "DRAFT", label: "draft" },
  { key: "CLOSED", label: "closed" },
  { key: "ARCHIVED", label: "archived" },
];

export default function RecruiterJobsList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<StatusFilter>("ALL");
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/jobs/recruiter/my-jobs")
      .then((res) => {
        setJobs(res.data.jobs);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this job? This cannot be undone.")) return;
    try {
      await api.delete(`/jobs/${id}`);
      setJobs((prev) => prev.filter((j) => j.id !== id));
    } catch {
      alert("Failed to delete job");
    }
  };

  const handleStatusChange = async (id: number, status: string) => {
    try {
      const { data } = await api.patch(`/jobs/${id}/status`, { status });
      setJobs((prev) => prev.map((j) => (j.id === id ? { ...j, status: data.job.status } : j)));
    } catch {
      alert("Failed to update status");
    }
  };

  const counts = useMemo(() => {
    const base = { ALL: jobs.length, DRAFT: 0, PUBLISHED: 0, CLOSED: 0, ARCHIVED: 0 } as Record<StatusFilter, number>;
    for (const j of jobs) {
      if (j.status in base) base[j.status as StatusFilter]++;
    }
    return base;
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    const q = search.trim().toLowerCase();
    return jobs.filter((j) => {
      if (tab !== "ALL" && j.status !== tab) return false;
      if (!q) return true;
      return (
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q) ||
        j.tags?.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [jobs, tab, search]);

  const totalApplicants = useMemo(
    () => jobs.reduce((sum, j) => sum + (j._count?.applications ?? 0), 0),
    [jobs],
  );

  return (
    <div className="relative text-stone-900 dark:text-stone-50">
      <SEO title="My Job Listings" noIndex />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05] z-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(120,113,108,0.25) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 mb-8 flex flex-wrap items-end justify-between gap-6 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              recruiter / my jobs
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10">job posts.</span>
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
              Edit postings, move them through draft and published states, and jump into applicants or analytics.
            </p>
          </div>

          <div className="flex items-end gap-6">
            <div className="hidden sm:flex items-center gap-5 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <span>
                posts
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                  {jobs.length}
                </span>
              </span>
              <span>
                applicants
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                  {totalApplicants}
                </span>
              </span>
            </div>
            <Button asChild variant="primary" size="md">
              <Link to="/recruiters/jobs/create" className="no-underline">
                <PlusCircle className="w-4 h-4" />
                Post a job
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Tabs + Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 dark:border-white/10"
        >
          <div className="flex items-center gap-6 overflow-x-auto">
            {STATUS_TABS.map((t) => {
              const active = tab === t.key;
              const count = counts[t.key];
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`relative pb-3 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-0 inline-flex items-center gap-2 ${
                    active
                      ? "text-stone-900 dark:text-stone-50"
                      : "text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
                  }`}
                >
                  {t.label}
                  <span className="text-[10px] text-stone-400 tabular-nums">{count}</span>
                  {active && (
                    <motion.span
                      layoutId="jobs-tab-underline"
                      className="absolute -bottom-px left-0 right-0 h-0.5 bg-lime-400"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="relative pb-3 w-full sm:w-64">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-[calc(50%+6px)] w-3.5 h-3.5 text-stone-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title, company, tag"
              className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 dark:focus:border-white/20 transition-colors"
            />
          </div>
        </motion.div>

        {/* Content */}
        {loading ? (
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 animate-pulse"
              >
                <div className="h-5 w-1/3 bg-stone-200 dark:bg-stone-800 rounded mb-3" />
                <div className="h-3 w-1/2 bg-stone-200 dark:bg-stone-800 rounded mb-5" />
                <div className="flex gap-3">
                  <div className="h-3 w-20 bg-stone-200 dark:bg-stone-800 rounded" />
                  <div className="h-3 w-20 bg-stone-200 dark:bg-stone-800 rounded" />
                  <div className="h-3 w-20 bg-stone-200 dark:bg-stone-800 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : jobs.length === 0 ? (
          <EmptyState
            title="No jobs yet"
            message="Post your first role and start receiving applications."
            cta
          />
        ) : filteredJobs.length === 0 ? (
          <EmptyState
            title="No matches"
            message={
              search
                ? `Nothing matches "${search}" in this view.`
                : `No ${tab.toLowerCase()} jobs right now.`
            }
          />
        ) : (
          <ul className="space-y-3">
            {filteredJobs.map((job, i) => (
              <motion.li
                key={job.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 hover:border-stone-300 dark:hover:border-white/20 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Link
                        to={`/recruiters/jobs/${job.id}/edit`}
                        className="text-lg font-bold text-stone-900 dark:text-stone-50 no-underline hover:underline decoration-lime-400 decoration-2 underline-offset-4 truncate"
                      >
                        {job.title}
                      </Link>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400">
                        <span className={`h-1.5 w-1.5 ${getStatusDot(job.status)}`} />
                        {job.status.toLowerCase()}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-stone-500 mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-stone-400" />
                        {job.company}
                      </span>
                      {job.location && (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-stone-400" />
                          {job.location}
                        </span>
                      )}
                      {job.salary && (
                        <span className="inline-flex items-center gap-1.5">
                          <Wallet className="w-3.5 h-3.5 text-stone-400" />
                          {job.salary}
                        </span>
                      )}
                      {job.deadline && (
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="w-3.5 h-3.5 text-stone-400" />
                          {new Date(job.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono uppercase tracking-widest text-stone-500">
                      <span>
                        applicants
                        <span className="text-stone-900 dark:text-stone-50 font-bold tabular-nums ml-1.5">
                          {job._count?.applications ?? 0}
                        </span>
                      </span>
                      <span>
                        rounds
                        <span className="text-stone-900 dark:text-stone-50 font-bold tabular-nums ml-1.5">
                          {job._count?.rounds ?? 0}
                        </span>
                      </span>
                      {job.tags && job.tags.length > 0 && (
                        <span className="text-stone-600 dark:text-stone-400 normal-case tracking-normal font-sans text-xs">
                          {job.tags.slice(0, 4).join(", ")}
                          {job.tags.length > 4 && ` +${job.tags.length - 4}`}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0 flex-wrap">
                    <select
                      value={job.status}
                      onChange={(e) => handleStatusChange(job.id, e.target.value)}
                      aria-label="Change job status"
                      className="text-xs font-mono uppercase tracking-widest px-2.5 py-1.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-stone-700 dark:text-stone-300 focus:outline-none focus:border-stone-400 dark:focus:border-white/20 cursor-pointer"
                    >
                      <option value="DRAFT">Draft</option>
                      <option value="PUBLISHED">Published</option>
                      <option value="CLOSED">Closed</option>
                      <option value="ARCHIVED">Archived</option>
                    </select>

                    <IconAction
                      to={`/recruiters/jobs/${job.id}/applications`}
                      icon={Users}
                      label="Applications"
                    />
                    <IconAction
                      to={`/recruiters/jobs/${job.id}/analytics`}
                      icon={BarChart3}
                      label="Analytics"
                    />
                    <IconAction
                      to={`/recruiters/jobs/${job.id}/edit`}
                      icon={Edit}
                      label="Edit"
                    />
                    <button
                      onClick={() => handleDelete(job.id)}
                      title="Delete"
                      aria-label="Delete"
                      className="p-2 rounded-md text-stone-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors border-0 bg-transparent cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function IconAction({
  to,
  icon: Icon,
  label,
}: {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <Link
      to={to}
      title={label}
      aria-label={label}
      className="p-2 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors no-underline"
    >
      <Icon className="w-4 h-4" />
    </Link>
  );
}

function EmptyState({
  title,
  message,
  cta = false,
}: {
  title: string;
  message: string;
  cta?: boolean;
}) {
  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-6 py-16 text-center">
      <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center mx-auto mb-4">
        <Briefcase className="w-4 h-4 text-stone-400" />
      </div>
      <h3 className="text-base font-bold text-stone-900 dark:text-stone-50 mb-1">{title}</h3>
      <p className="text-sm text-stone-500 max-w-sm mx-auto mb-5">{message}</p>
      {cta && (
        <Button asChild variant="primary" size="md">
          <Link to="/recruiters/jobs/create" className="no-underline">
            <PlusCircle className="w-4 h-4" />
            Post your first job
          </Link>
        </Button>
      )}
    </div>
  );
}

function getStatusDot(status: string) {
  switch (status) {
    case "PUBLISHED":
      return "bg-lime-400";
    case "DRAFT":
      return "bg-stone-400";
    case "CLOSED":
      return "bg-red-500";
    case "ARCHIVED":
      return "bg-amber-500";
    default:
      return "bg-stone-400";
  }
}
