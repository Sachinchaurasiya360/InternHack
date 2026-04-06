import { useParams, Link, useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, IndianRupee, Building2, CalendarDays, Tag, ExternalLink, Check, Loader2 } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Navbar } from "../../../components/Navbar";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { queryKeys } from "../../../lib/query-keys";
import type { ExternalJob } from "../../../lib/types";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

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

  // Check if already applied
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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Job Not Found</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-6">This job may have expired or been removed.</p>
            <Link to="/jobs" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
              Browse all jobs
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
      <SEO title={`${job.role || "Job"} at ${job.company || "Company"}`} description={job.description?.slice(0, 160) || ""} />
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-8 px-4">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          className="max-w-3xl mx-auto">

          <motion.div variants={fadeUp}>
            <Link to="/jobs" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 no-underline">
              <ArrowLeft className="w-4 h-4" /> Back to Jobs
            </Link>
          </motion.div>

          <motion.div variants={fadeUp}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8">

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-lg font-bold text-gray-600 dark:text-gray-300 shrink-0">
                  {(job.company || "?")[0]?.toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{job.role || "Untitled Role"}</h1>
                  {job.company && <p className="text-gray-500 dark:text-gray-400 mt-1">{job.company}</p>}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                {job.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </span>
                )}
                {job.salary && (
                  <span className="flex items-center gap-1.5">
                    <IndianRupee className="w-4 h-4" /> {job.salary}
                  </span>
                )}
                {job.company && (
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" /> {job.company}
                  </span>
                )}
                {daysLeft !== null && (
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="w-4 h-4" />
                    {daysLeft > 0 ? `${daysLeft} days left` : "Expires soon"}
                  </span>
                )}
              </div>
            </div>

            {/* Tags */}
            {job.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {job.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    <Tag className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Description */}
            {job.description && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Description</h2>
                <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-wrap">
                  {job.description}
                </div>
              </div>
            )}

            {/* Apply Button */}
            {job.applyLink && (
              isAuthenticated ? (
                <button
                  onClick={() => handleApply(job)}
                  disabled={applyMutation.isPending}
                  className={`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-colors ${
                    applied
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white"
                  }`}
                >
                  {applyMutation.isPending ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Applying...</>
                  ) : applied ? (
                    <><Check className="w-4 h-4" /> Applied — View Posting <ExternalLink className="w-3.5 h-3.5" /></>
                  ) : (
                    <><ExternalLink className="w-4 h-4" /> Apply Now</>
                  )}
                </button>
              ) : (
                <button
                  onClick={() => navigate(`/login?from=${encodeURIComponent(location.pathname)}`)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
                  <ExternalLink className="w-4 h-4" /> Login to Apply
                </button>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
