import { useParams, Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, IndianRupee, Users, CheckCircle, ArrowRight, Send, Check, Building2, CalendarDays, Tag, Clock, Briefcase, BookOpen } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "../../../components/Navbar";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { jobPostingSchema, breadcrumbSchema } from "../../../lib/structured-data";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { useAuthStore } from "../../../lib/auth.store";
import type { Job } from "../../../lib/types";
import { LoadingScreen } from "../../../components/LoadingScreen";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.07 } } };

function getDeadlineInfo(deadline: string) {
  const diff = Math.ceil((new Date(deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  if (diff < 0) return { label: "Expired", color: "text-red-500 dark:text-red-400", chipCls: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400" };
  if (diff <= 3) return { label: `${diff}d left`, color: "text-red-500 dark:text-red-400", chipCls: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400" };
  if (diff <= 7) return { label: `${diff}d left`, color: "text-amber-500 dark:text-amber-400", chipCls: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400" };
  return {
    label: new Date(deadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    color: "text-gray-500 dark:text-gray-400",
    chipCls: "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
  };
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

  const { data: relatedPosts = [] } = useQuery({
    queryKey: queryKeys.blog.byTags(job?.tags?.join(",") || ""),
    queryFn: () =>
      api.get("/blog/by-tags", { params: { tags: job!.tags.join(",") } })
        .then((res) => res.data.posts as { id: number; title: string; slug: string; excerpt: string; readingTime: number; featuredImage?: string }[]),
    enabled: !!job && job.tags.length > 0,
  });

  const backPath = inStudentLayout ? "/student/jobs" : "/jobs";
  const applyPath = inStudentLayout ? `/student/jobs/${id}/apply` : `/jobs/${Number(id)}/apply`;

  if (isLoading) {
    if (inStudentLayout) return <LoadingScreen />;
    return (
      <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
        <Navbar />
        <LoadingScreen />
      </div>
    );
  }

  if (!job) {
    if (inStudentLayout) return <div className="text-center pt-12 text-gray-500">Job not found</div>;
    return (
      <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
        <Navbar />
        <div className="text-center pt-24 text-gray-500">Job not found</div>
      </div>
    );
  }

  const deadlineInfo = job.deadline ? getDeadlineInfo(job.deadline) : null;

  const ctaButton = isAuthenticated && user?.role === "STUDENT" ? (
    applicationStatus?.applied ? (
      <Link to={`/student/applications/${applicationStatus.application!.id}`}
        className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all no-underline text-sm shadow-sm">
        <Check className="w-4 h-4" /> Applied
      </Link>
    ) : (
      <Link to={applyPath}
        className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all no-underline text-sm shadow-lg shadow-gray-950/10 dark:shadow-white/10">
        <Send className="w-4 h-4" /> Apply Now
      </Link>
    )
  ) : !isAuthenticated ? (
    <Link to="/login"
      className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all no-underline text-sm shadow-lg shadow-gray-950/10 dark:shadow-white/10">
      <ArrowRight className="w-4 h-4" /> Sign In to Apply
    </Link>
  ) : null;

  const page = (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/30 dark:to-blue-900/30 opacity-60 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-200 h-200 rounded-full border border-black/3 dark:border-white/3" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className={`relative z-10 max-w-5xl mx-auto ${inStudentLayout ? "px-6 pt-8 pb-16" : "px-6 pt-24 pb-16"}`}>
        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link to={backPath} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 no-underline transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Jobs
          </Link>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">
          {/* Hero Header */}
          <motion.div variants={fadeUp} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="flex items-start gap-5">
                {/* Company avatar */}
                <div className="w-14 h-14 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center text-xl font-bold text-white dark:text-gray-950 shrink-0">
                  {job.company?.charAt(0) || "C"}
                </div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
                    {job.title}
                  </h1>
                  <p className="text-base text-gray-500 dark:text-gray-400 mt-1">{job.company}</p>
                </div>

                {/* Desktop CTA */}
                <div className="shrink-0 hidden sm:block">
                  {ctaButton}
                </div>
              </div>

              {/* Meta chips */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg text-gray-600 dark:text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg text-gray-600 dark:text-gray-400">
                  <IndianRupee className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  {job.salary}
                </span>
                {job._count && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg text-gray-600 dark:text-gray-400">
                    <Users className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400" />
                    {job._count.applications} applicant{job._count.applications !== 1 ? "s" : ""}
                  </span>
                )}
                {deadlineInfo && (
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg ${deadlineInfo.chipCls}`}>
                    <Clock className="w-3.5 h-3.5" />
                    {deadlineInfo.label}
                  </span>
                )}
              </div>

              {/* Tags */}
              {job.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-medium">
                      <Tag className="w-3 h-3" />{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Mobile CTA */}
              <div className="mt-6 sm:hidden">
                {ctaButton && (
                  <div className="[&>a]:flex [&>a]:w-full [&>a]:justify-center">
                    {ctaButton}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <motion.div variants={fadeUp} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                    <Briefcase className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white">About the Role</h2>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap leading-relaxed">{job.description}</div>
              </motion.div>

              {/* Hiring Process */}
              {job.rounds && job.rounds.length > 0 && (
                <motion.div variants={fadeUp} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center">
                      <CheckCircle className="w-4.5 h-4.5 text-violet-600 dark:text-violet-400" />
                    </div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-white">Hiring Process</h2>
                    <span className="ml-auto text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">{job.rounds.length} round{job.rounds.length !== 1 ? "s" : ""}</span>
                  </div>
                  <div className="space-y-0">
                    {job.rounds.map((round, i) => (
                      <div key={round.id} className="flex items-start gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className="w-9 h-9 bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-lg flex items-center justify-center text-xs font-bold transition-transform group-hover:scale-110">
                            {i + 1}
                          </div>
                          {i < job.rounds!.length - 1 && <div className="w-px h-full min-h-8 bg-gray-200 dark:bg-gray-700" />}
                        </div>
                        <div className="flex-1 pb-5 pt-1">
                          <h3 className="font-medium text-gray-900 dark:text-white text-sm">{round.name}</h3>
                          {round.description && <p className="text-xs text-gray-500 mt-1 leading-relaxed">{round.description}</p>}
                          {round.customFields.length > 0 && (
                            <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mt-2 font-medium bg-gray-50 dark:bg-gray-800 px-2 py-0.5 rounded-md">
                              <CheckCircle className="w-3 h-3 text-emerald-500 dark:text-emerald-400" /> {round.customFields.length} field{round.customFields.length !== 1 ? "s" : ""} to complete
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
            <div className="space-y-6">
              {/* Quick Info Card */}
              <motion.div variants={fadeUp} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-5">Job Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-500">Location</p>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                      <IndianRupee className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-500">Compensation</p>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{job.salary}</p>
                    </div>
                  </div>
                  {job._count && (
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center">
                        <Users className="w-4 h-4 text-violet-500 dark:text-violet-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 dark:text-gray-500">Applicants</p>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{job._count.applications}</p>
                      </div>
                    </div>
                  )}
                  {deadlineInfo && (
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
                        <CalendarDays className="w-4 h-4 text-amber-500 dark:text-amber-400" />
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
                <motion.div variants={fadeUp} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-5">Posted By</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center text-white dark:text-gray-950 font-bold text-base">
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
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
                  <Briefcase className="w-4.5 h-4.5 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">Similar Positions</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedJobs.slice(0, 4).map((rj) => (
                  <Link key={rj.id} to={inStudentLayout ? `/student/jobs/${rj.id}` : `/jobs/${rj.id}`} className="no-underline group">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0 text-sm font-bold text-white dark:text-gray-950">
                          {rj.company?.charAt(0) || "C"}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{rj.title}</h3>
                          <p className="text-xs text-gray-500 mt-0.5">{rj.company}</p>
                          <div className="flex items-center gap-3 mt-2.5">
                            <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 dark:bg-gray-800 px-2 py-0.5 rounded-md">
                              <MapPin className="w-3 h-3 text-indigo-400" />{rj.location}
                            </span>
                            {rj.salary && (
                              <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 dark:bg-gray-800 px-2 py-0.5 rounded-md">
                                <IndianRupee className="w-3 h-3 text-emerald-400" />{rj.salary}
                              </span>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors mt-1 shrink-0" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Related Blog Posts */}
          {relatedPosts.length > 0 && (
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <BookOpen className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">Related Articles</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPosts.slice(0, 3).map((rp) => (
                  <Link key={rp.id} to={`/blog/${rp.slug}`} className="no-underline group">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 hover:shadow-md transition-shadow h-full">
                      {rp.featuredImage && (
                        <img src={rp.featuredImage} alt={rp.title} className="w-full h-28 object-cover rounded-xl mb-3" />
                      )}
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{rp.title}</h3>
                      <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">{rp.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-xs text-gray-400 mt-2">
                        <Clock className="w-3 h-3" />{rp.readingTime} min read
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );

  if (inStudentLayout) return (
    <>
      <SEO title={`${job.title} at ${job.company}`} noIndex />
      {page}
    </>
  );

  return (
    <>
      <SEO
        title={`${job.title} at ${job.company}`}
        description={`${job.title} position at ${job.company} in ${job.location}. ${job.description?.slice(0, 120)}...`}
        keywords={`${job.title}, ${job.company}, ${job.location}, ${job.tags.join(", ")}`}
        canonicalUrl={canonicalUrl(`/jobs/${id}`)}
        structuredData={[
          jobPostingSchema({
            title: job.title,
            description: job.description,
            company: job.company,
            location: job.location,
            salary: job.salary,
            deadline: job.deadline,
            createdAt: job.createdAt,
            id: job.id,
          }),
          breadcrumbSchema([
            { name: "Jobs", url: canonicalUrl("/jobs") },
            { name: job.title, url: canonicalUrl(`/jobs/${id}`) },
          ]),
        ]}
      />
      <Navbar />
      {page}
    </>
  );
}
