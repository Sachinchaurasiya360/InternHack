import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, DollarSign, Clock, Building2, Users, CheckCircle, ArrowRight, Send } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "../../../components/Navbar";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { useAuthStore } from "../../../lib/auth.store";
import type { Job } from "../../../lib/types";

export default function JobDetailPage() {
  const { id } = useParams();
  const { isAuthenticated, user } = useAuthStore();

  const { data: job, isLoading } = useQuery({
    queryKey: queryKeys.jobs.detail(id!),
    queryFn: () => api.get(`/jobs/${id}`).then((res) => res.data.job as Job),
    enabled: !!id,
  });

  if (isLoading) return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
      <Navbar />
      <div className="flex items-center justify-center h-64 pt-24 text-gray-500">Loading...</div>
    </div>
  );
  if (!job) return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
      <Navbar />
      <div className="text-center pt-24 text-gray-500">Job not found</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-slate-100 to-blue-100 dark:from-slate-900/30 dark:to-blue-900/30 opacity-60 blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {job && (
        <SEO
          title={`${job.title} at ${job.company}`}
          description={`${job.title} position at ${job.company} in ${job.location}. ${job.description?.slice(0, 120)}...`}
          keywords={`${job.title}, ${job.company}, ${job.location}, ${job.tags.join(", ")}`}
        />
      )}
      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16">
        <Link to="/jobs" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6 no-underline transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Jobs
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Hero Header Card */}
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg shadow-black/[0.04] mb-6 overflow-hidden">
            {/* Gradient banner */}
            <div className="h-32 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 relative">
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            <div className="px-8 pb-8 -mt-8 relative">
              {/* Company icon */}
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-indigo-500" />
              </div>

              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">{job.title}</h1>
                  <p className="text-base text-gray-500 mb-4">{job.company}</p>

                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="flex items-center gap-1.5 text-sm bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                      <MapPin className="w-4 h-4 text-indigo-400" /><span className="text-gray-600 dark:text-gray-400">{job.location}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-sm bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                      <DollarSign className="w-4 h-4 text-emerald-400" /><span className="text-gray-600 dark:text-gray-400">{job.salary}</span>
                    </span>
                    {job._count && (
                      <span className="flex items-center gap-1.5 text-sm bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                        <Users className="w-4 h-4 text-violet-400" /><span className="text-gray-600 dark:text-gray-400">{job._count.applications} applicants</span>
                      </span>
                    )}
                    {job.deadline && (
                      <span className="flex items-center gap-1.5 text-sm bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                        <Clock className="w-4 h-4 text-amber-400" /><span className="text-gray-600 dark:text-gray-400">Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                      </span>
                    )}
                  </div>

                  {job.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="shrink-0">
                  {isAuthenticated && user?.role === "STUDENT" ? (
                    <Link to={`/jobs/${job.id}/apply`}
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-violet-600 transition-all no-underline text-sm shadow-lg shadow-indigo-500/25">
                      <Send className="w-4 h-4" /> Apply Now
                    </Link>
                  ) : !isAuthenticated ? (
                    <Link to="/login"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-violet-600 transition-all no-underline text-sm shadow-lg shadow-indigo-500/25">
                      <ArrowRight className="w-4 h-4" /> Sign In to Apply
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
              Job Description
            </h2>
            <div className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap leading-relaxed">{job.description}</div>
          </div>

          {/* Hiring Process */}
          {job.rounds && job.rounds.length > 0 && (
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
                Hiring Process
              </h2>
              <div className="space-y-1">
                {job.rounds.map((round, i) => (
                  <div key={round.id} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-md shadow-indigo-500/20">{i + 1}</div>
                      {i < job.rounds!.length - 1 && <div className="w-px h-10 bg-gradient-to-b from-indigo-200 to-transparent dark:from-indigo-800 dark:to-transparent mt-1" />}
                    </div>
                    <div className="flex-1 pb-4 pt-1.5">
                      <h3 className="font-medium text-gray-900 dark:text-white">{round.name}</h3>
                      {round.description && <p className="text-sm text-gray-500 mt-1">{round.description}</p>}
                      {round.customFields.length > 0 && (
                        <span className="text-xs text-indigo-500 dark:text-indigo-400 mt-1 block font-medium">{round.customFields.length} field(s) to complete</span>
                      )}
                    </div>
                    <CheckCircle className="w-5 h-5 text-gray-200 dark:text-gray-700 mt-2.5" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recruiter Info */}
          {job.recruiter && (
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
                Posted By
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white font-bold text-lg">
                  {job.recruiter.name?.charAt(0) || "R"}
                </div>
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">{job.recruiter.name}</p>
                  {job.recruiter.company && <p className="text-sm text-gray-500">{job.recruiter.company}</p>}
                  {job.recruiter.designation && <p className="text-sm text-gray-400 dark:text-gray-500">{job.recruiter.designation}</p>}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
