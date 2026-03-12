import { useParams, Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, DollarSign, Clock, Users, CheckCircle, ArrowRight, Send, Briefcase, Check, Building2, CalendarDays, Tag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "../../../components/Navbar";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { useAuthStore } from "../../../lib/auth.store";
import type { Job } from "../../../lib/types";
import { LoadingScreen } from "../../../components/LoadingScreen";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.07 } } };

function getDeadlineInfo(deadline: string) {
  const diff = Math.ceil((new Date(deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  if (diff < 0) return { label: "Expired", color: "text-red-500 dark:text-red-400" };
  if (diff <= 3) return { label: `${diff}d left`, color: "text-red-500 dark:text-red-400" };
  if (diff <= 7) return { label: `${diff}d left`, color: "text-amber-500 dark:text-amber-400" };
  return { label: new Date(deadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }), color: "text-gray-500 dark:text-gray-400" };
}

export default function JobDetailPage() {
  const { id } = useParams();
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();
  const inStudentLayout = location.pathname.startsWith("/student/");

  const { data: job, isLoading } = useQuery({
    queryKey: queryKeys.jobs.detail(id!),
    queryFn: () => api.get(`/jobs/${id}`).then((res) => res.data.job as Job),
    enabled: !!id,
  });

  const { data: applicationStatus } = useQuery({
    queryKey: queryKeys.applications.statusByJob(id!),
    queryFn: () => api.get(`/student/jobs/${id}/application-status`).then((res) => res.data as { applied: boolean; application: { id: number; status: string } | null }),
    enabled: !!id && isAuthenticated && user?.role === "STUDENT",
  });

  const { data: relatedJobs = [] } = useQuery({
    queryKey: queryKeys.jobs.list({ related: id!, tags: job?.tags?.join(",") || "" }),
    queryFn: () =>
      api.get("/jobs", { params: { tags: job!.tags.join(","), limit: 4 } })
        .then((res) => (res.data.jobs as Job[]).filter((j) => j.id !== Number(id))),
    enabled: !!job && job.tags.length > 0,
  });

  const backPath = inStudentLayout ? "/student/jobs" : "/jobs";
  const applyPath = inStudentLayout ? `/student/jobs/${id}/apply` : `/jobs/${Number(id)}/apply`;

  if (isLoading) {
    if (inStudentLayout) return <LoadingScreen />;
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Navbar />
        <LoadingScreen />
      </div>
    );
  }

  if (!job) {
    if (inStudentLayout) return <div className="text-center pt-12 text-gray-500">Job not found</div>;
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Navbar />
        <div className="text-center pt-24 text-gray-500">Job not found</div>
      </div>
    );
  }

  const deadlineInfo = job.deadline ? getDeadlineInfo(job.deadline) : null;

  const content = (
    <div className={inStudentLayout ? "pb-12" : "max-w-4xl mx-auto px-6 pt-24 pb-16"}>
      <Link to={backPath} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 no-underline transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Jobs
      </Link>

      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-5">
        {/* Hero Header */}
        <motion.div variants={fadeUp} className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1 bg-gray-900 dark:bg-white" />

          <div className="p-8">
            <div className="flex items-start gap-5">
              {/* Company avatar */}
              <div className="w-14 h-14 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xl font-bold text-gray-700 dark:text-gray-200 shrink-0">
                {job.company?.charAt(0) || "C"}
              </div>

              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{job.title}</h1>
                <p className="text-base text-gray-500 dark:text-gray-400 mt-1">{job.company}</p>
              </div>

              {/* Apply / Applied button */}
              <div className="shrink-0 hidden sm:block">
                {isAuthenticated && user?.role === "STUDENT" ? (
                  applicationStatus?.applied ? (
                    <Link to={`/student/applications/${applicationStatus.application!.id}`}
                      className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all no-underline text-sm shadow-sm">
                      <Check className="w-4 h-4" /> Applied
                    </Link>
                  ) : (
                    <Link to={applyPath}
                      className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-950 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all no-underline text-sm shadow-sm hover:shadow-md">
                      <Send className="w-4 h-4" /> Apply Now
                    </Link>
                  )
                ) : !isAuthenticated ? (
                  <Link to="/login"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-950 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all no-underline text-sm shadow-sm">
                    <ArrowRight className="w-4 h-4" /> Sign In to Apply
                  </Link>
                ) : null}
              </div>
            </div>

            {/* Meta row */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                {job.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <DollarSign className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                {job.salary}
              </div>
              {job._count && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  {job._count.applications} applicant{job._count.applications !== 1 ? "s" : ""}
                </div>
              )}
              {deadlineInfo && (
                <div className={`flex items-center gap-2 text-sm ${deadlineInfo.color}`}>
                  <CalendarDays className="w-4 h-4" />
                  {deadlineInfo.label}
                </div>
              )}
            </div>

            {/* Tags */}
            {job.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-800/70 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium">
                    <Tag className="w-3 h-3" />{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Mobile CTA */}
            <div className="mt-6 sm:hidden">
              {isAuthenticated && user?.role === "STUDENT" ? (
                applicationStatus?.applied ? (
                  <Link to={`/student/applications/${applicationStatus.application!.id}`}
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-green-600 text-white font-semibold rounded-xl no-underline text-sm">
                    <Check className="w-4 h-4" /> Applied
                  </Link>
                ) : (
                  <Link to={applyPath}
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-950 font-semibold rounded-xl no-underline text-sm">
                    <Send className="w-4 h-4" /> Apply Now
                  </Link>
                )
              ) : !isAuthenticated ? (
                <Link to="/login"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-950 font-semibold rounded-xl no-underline text-sm">
                  <ArrowRight className="w-4 h-4" /> Sign In to Apply
                </Link>
              ) : null}
            </div>
          </div>
        </motion.div>

        {/* Two-column layout for sidebar info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-5">
            {/* Description */}
            <motion.div variants={fadeUp} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2.5">
                <div className="w-1 h-5 bg-gray-900 dark:bg-white rounded-full" />
                About the Role
              </h2>
              <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap leading-relaxed">{job.description}</div>
            </motion.div>

            {/* Hiring Process */}
            {job.rounds && job.rounds.length > 0 && (
              <motion.div variants={fadeUp} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2.5">
                  <div className="w-1 h-5 bg-gray-900 dark:bg-white rounded-full" />
                  Hiring Process
                  <span className="ml-auto text-xs font-medium text-gray-400 dark:text-gray-500">{job.rounds.length} round{job.rounds.length !== 1 ? "s" : ""}</span>
                </h2>
                <div className="space-y-0">
                  {job.rounds.map((round, i) => (
                    <div key={round.id} className="flex items-start gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 bg-gray-900 dark:bg-white text-white dark:text-gray-950 rounded-lg flex items-center justify-center text-xs font-bold transition-transform group-hover:scale-110">
                          {i + 1}
                        </div>
                        {i < job.rounds!.length - 1 && <div className="w-px h-full min-h-8 bg-gray-200 dark:bg-gray-700" />}
                      </div>
                      <div className="flex-1 pb-5 pt-1">
                        <h3 className="font-medium text-gray-900 dark:text-white text-sm">{round.name}</h3>
                        {round.description && <p className="text-xs text-gray-500 mt-1 leading-relaxed">{round.description}</p>}
                        {round.customFields.length > 0 && (
                          <span className="inline-flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 mt-2 font-medium">
                            <CheckCircle className="w-3 h-3" /> {round.customFields.length} field{round.customFields.length !== 1 ? "s" : ""} to complete
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Quick Info Card */}
            <motion.div variants={fadeUp} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Job Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Location</p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Compensation</p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{job.salary}</p>
                  </div>
                </div>
                {job._count && (
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                      <Users className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-500">Applicants</p>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{job._count.applications}</p>
                    </div>
                  </div>
                )}
                {deadlineInfo && (
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                      <CalendarDays className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-500">Deadline</p>
                      <p className={`text-sm font-medium ${deadlineInfo.color}`}>{deadlineInfo.label}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Recruiter Info */}
            {job.recruiter && (
              <motion.div variants={fadeUp} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Posted By</h3>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold text-base">
                    {job.recruiter.name?.charAt(0) || "R"}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm text-gray-700 dark:text-gray-300 truncate">{job.recruiter.name}</p>
                    {job.recruiter.company && (
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <Building2 className="w-3 h-3" />{job.recruiter.company}
                      </p>
                    )}
                    {job.recruiter.designation && <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{job.recruiter.designation}</p>}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Related Jobs */}
        {relatedJobs.length > 0 && (
          <motion.div variants={fadeUp}>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2.5">
              <div className="w-1 h-5 bg-gray-900 dark:bg-white rounded-full" />
              Similar Positions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedJobs.slice(0, 4).map((rj) => (
                <Link key={rj.id} to={inStudentLayout ? `/student/jobs/${rj.id}` : `/jobs/${rj.id}`} className="no-underline group">
                  <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5 group-hover:border-gray-300 dark:group-hover:border-gray-600 group-hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 text-sm font-bold text-gray-600 dark:text-gray-300">
                        {rj.company?.charAt(0) || "C"}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-gray-700 dark:group-hover:text-gray-200">{rj.title}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{rj.company}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-gray-400 dark:text-gray-500">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{rj.location}</span>
                          {rj.salary && <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{rj.salary}</span>}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors mt-1 shrink-0" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );

  if (inStudentLayout) return (
    <>
      <SEO title={`${job.title} at ${job.company}`} noIndex />
      {content}
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <SEO
        title={`${job.title} at ${job.company}`}
        description={`${job.title} position at ${job.company} in ${job.location}. ${job.description?.slice(0, 120)}...`}
        keywords={`${job.title}, ${job.company}, ${job.location}, ${job.tags.join(", ")}`}
      />
      <Navbar />
      {content}
    </div>
  );
}
