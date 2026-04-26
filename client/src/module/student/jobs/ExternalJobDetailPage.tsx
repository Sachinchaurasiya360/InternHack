import { useParams, Link, useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, IndianRupee, CalendarDays, ExternalLink, Check, Loader2, ArrowUpRight } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Navbar } from "../../../components/Navbar";
import { SEO } from "../../../components/SEO";
import { canonicalUrl, SITE_URL } from "../../../lib/seo.utils";
import { jobPostingSchema, breadcrumbSchema } from "../../../lib/structured-data";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { queryKeys } from "../../../lib/query-keys";
import type { ExternalJob } from "../../../lib/types";
import { Button } from "../../../components/ui/button";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

function CompanyMark({ label, size = "md" }: { label: string; size?: "md" | "lg" }) {
  const dims = size === "lg" ? "w-14 h-14 text-xl" : "w-10 h-10 text-sm";
  return (
    <div className={`${dims} rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-stone-900 dark:text-stone-50 font-bold`}>
      {label?.charAt(0)?.toUpperCase() || "?"}
    </div>
  );
}

export default function ExternalJobDetailPage() {
  const { slug } = useParams();
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const queryClient = useQueryClient();
  const [applied, setApplied] = useState(false);

  const { data: job, isLoading, error } = useQuery({
    queryKey: ["external-job", slug],
    queryFn: async () => {
      const res = await api.get(`/external-jobs/${slug}`);
      return res.data.job as ExternalJob;
    },
    enabled: !!slug,
    retry: false,
  });

  const { data: similarJobs = [] } = useQuery({
    queryKey: ["external-job-similar", job?.id],
    queryFn: async () => {
      const res = await api.get(`/external-jobs`, { params: { limit: 20 } });
      const all = (res.data.jobs || []) as ExternalJob[];
      const currentTags = new Set((job!.tags || []).map((t) => t.toLowerCase()));
      return all
        .filter((j) => j.id !== job!.id)
        .map((j) => {
          const shared = (j.tags || []).filter((t) => currentTags.has(t.toLowerCase())).length;
          const sameCompany = j.company && job!.company && j.company.toLowerCase() === job!.company.toLowerCase() ? 1 : 0;
          return { job: j, score: shared * 2 + sameCompany };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 4)
        .map((x) => x.job);
    },
    enabled: !!job,
  });

  useQuery({
    queryKey: ["external-job-status", job?.id],
    queryFn: async () => {
      const res = await api.get(`/student/external-jobs/${job!.id}/status`);
      if (res.data.applied) setApplied(true);
      return res.data;
    },
    enabled: !!job && isAuthenticated,
  });

  const applyMutation = useMutation({
    mutationFn: async (jobId: number) => {
      await api.post(`/student/external-jobs/${jobId}/apply`);
    },
    onSuccess: () => {
      setApplied(true);
      queryClient.invalidateQueries({ queryKey: queryKeys.applications.mine() });
    },
  });

  const handleApply = (jobData: ExternalJob) => {
    if (!applied) {
      applyMutation.mutate(jobData.id);
    }
    if (jobData.applyLink) {
      window.open(jobData.applyLink, "_blank", "noopener,noreferrer");
    }
  };

  if (isLoading) return <LoadingScreen />;

  if (error || !job) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center px-4">
          <div className="text-center">
            <Kicker>error / 404</Kicker>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">Job not found.</h1>
            <p className="mt-3 text-sm text-stone-500 mb-6">This posting may have expired or been removed.</p>
            <Link to="/jobs" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 hover:text-lime-500 no-underline">
              Browse all jobs <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </>
    );
  }

  const daysLeft = job.expiresAt
    ? Math.ceil((new Date(job.expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : null;

  return (
    <>
      <SEO
        title={`${job.role || "Job"} at ${job.company || "Company"}`}
        description={job.description?.slice(0, 160) || ""}
        canonicalUrl={canonicalUrl(`/jobs/${job.slug || job.id}`)}
        structuredData={[
          jobPostingSchema({
            title: job.role || "Job",
            description: job.description || "",
            company: job.company || "Company",
            location: job.location || "Remote",
            salary: job.salary || undefined,
            deadline: job.expiresAt || null,
            createdAt: job.createdAt,
            id: job.id,
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Jobs", url: `${SITE_URL}/jobs` },
            { name: job.role || "Job", url: `${SITE_URL}/jobs/${job.slug || job.id}` },
          ]),
        ]}
      />
      <Navbar />
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 pt-24 pb-16 px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp}>
            <Link
              to="/jobs"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 mb-8 no-underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to jobs
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div variants={fadeUp} className="mb-8">
            <Kicker>external / posting</Kicker>
            <div className="mt-4 flex items-start gap-4">
              <CompanyMark label={job.company || "?"} size="lg" />
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                  {job.role || "Untitled Role"}
                </h1>
                {job.company && (
                  <p className="mt-2 text-sm text-stone-500">{job.company}</p>
                )}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-stone-600 dark:text-stone-400">
              {job.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" /> {job.location}
                </span>
              )}
              {job.salary && (
                <span className="flex items-center gap-1.5">
                  <IndianRupee className="w-3.5 h-3.5 text-stone-400" /> {job.salary}
                </span>
              )}
              {daysLeft !== null && (
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-stone-400" />
                  {daysLeft > 0 ? `${daysLeft} days left` : "Expires soon"}
                </span>
              )}
            </div>
          </motion.div>

          {/* Body card */}
          <motion.div
            variants={fadeUp}
            className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-8"
          >
            {/* Tags */}
            {job.tags.length > 0 && (
              <div className="mb-6">
                <Kicker>tags</Kicker>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {job.description && (
              <div className="mb-8">
                <Kicker>description</Kicker>
                <div className="mt-3 text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-wrap">
                  {job.description}
                </div>
              </div>
            )}

            {/* Apply */}
            {job.applyLink && (
              <div className="pt-2">
                {isAuthenticated ? (
                  <Button
                    size="lg"
                    onClick={() => handleApply(job)}
                    disabled={applyMutation.isPending}
                    className={`rounded-md ${
                      applied
                        ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200"
                        : "bg-lime-400 hover:bg-lime-500 text-stone-900"
                    }`}
                  >
                    {applyMutation.isPending ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Applying...</>
                    ) : applied ? (
                      <><Check className="w-4 h-4" /> Applied, view posting <ExternalLink className="w-3.5 h-3.5" /></>
                    ) : (
                      <><ExternalLink className="w-4 h-4" /> Apply now</>
                    )}
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    onClick={() => navigate(`/login?from=${encodeURIComponent(location.pathname)}`)}
                    className="rounded-md bg-lime-400 hover:bg-lime-500 text-stone-900"
                  >
                    <ExternalLink className="w-4 h-4" /> Login to apply
                  </Button>
                )}
              </div>
            )}
          </motion.div>

          {/* Similar jobs */}
          {similarJobs.length > 0 && (
            <motion.div variants={fadeUp} className="mt-12">
              <Kicker>related / similar roles</Kicker>
              <h2 className="mt-3 text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-5">
                Similar jobs.
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {similarJobs.map((s) => (
                  <Link
                    key={s.id}
                    to={`/jobs/ext/${s.slug}`}
                    className="group block bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-5 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-3 min-w-0">
                        <CompanyMark label={s.company || "?"} />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate leading-tight">
                            {s.role || "Untitled Role"}
                          </h3>
                          {s.company && (
                            <p className="text-xs text-stone-500 mt-0.5 truncate">{s.company}</p>
                          )}
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 shrink-0 text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500">
                      {s.location && (
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {s.location}</span>
                      )}
                      {s.salary && (
                        <span className="flex items-center gap-1"><IndianRupee className="w-3 h-3" /> {s.salary}</span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}
