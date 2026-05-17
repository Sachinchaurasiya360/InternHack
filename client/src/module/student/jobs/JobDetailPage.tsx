import { useParams, Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, IndianRupee, Users, Send, Check, Building2, Clock, ArrowUpRight, Share2 } from "lucide-react";
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
import { Button } from "../../../components/ui/button";
import toast from "../../../components/ui/toast";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.07 } } };

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

function getDeadlineInfo(deadline: string) {
  const diff = Math.ceil((new Date(deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  if (diff < 0) return { label: "Expired", urgent: true };
  if (diff <= 7) return { label: `${diff}d left`, urgent: diff <= 3 };
  return {
    label: new Date(deadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    urgent: false,
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
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <Navbar />
        <LoadingScreen />
      </div>
    );
  }

  if (!job) {
    const notFound = (
      <div className="max-w-6xl mx-auto px-6 pt-24 text-center">
        <Kicker>error / 404</Kicker>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">Job not found.</h1>
        <Link to={backPath} className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 no-underline">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to jobs
        </Link>
      </div>
    );
    if (inStudentLayout) return notFound;
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <Navbar />
        {notFound}
      </div>
    );
  }

  const deadlineInfo = job.deadline ? getDeadlineInfo(job.deadline) : null;
  const shareUrl = canonicalUrl(`/jobs/${id}`);

  const copyJobLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success("Link copied!");
    } catch {
      toast.error("Failed to copy link");
    }
  };

  const handleShareJob = async () => {
    const canShare = typeof navigator !== "undefined" && typeof navigator.share === "function";
    if (canShare) {
      try {
        await navigator.share({
          title: `${job.title} at ${job.company}`,
          text: `Check out this role: ${job.title} at ${job.company}`,
          url: shareUrl,
        });
      } catch (e) {
        if (
          (e instanceof DOMException || e instanceof Error) &&
          e.name === "AbortError"
        ) {
          return;
        }
        await copyJobLink();
      }
      return;
    }
    await copyJobLink();
  };

  const ctaButton = isAuthenticated && user?.role === "STUDENT" ? (
    applicationStatus?.applied ? (
      <Link
        to={`/student/applications/${applicationStatus.application!.id}`}
        className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 font-semibold rounded-md hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors no-underline text-sm"
      >
        <Check className="w-4 h-4" /> Applied
      </Link>
    ) : (
      <Link
        to={applyPath}
        className="inline-flex items-center gap-2 px-6 py-3 bg-lime-400 text-stone-900 font-semibold rounded-md hover:bg-lime-500 transition-colors no-underline text-sm"
      >
        <Send className="w-4 h-4" /> Apply now
      </Link>
    )
  ) : !isAuthenticated ? (
    <Link
      to="/login"
      className="inline-flex items-center gap-2 px-6 py-3 bg-lime-400 text-stone-900 font-semibold rounded-md hover:bg-lime-500 transition-colors no-underline text-sm"
    >
      Sign in to apply <ArrowUpRight className="w-4 h-4" />
    </Link>
  ) : null;

  const page = (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className={`max-w-6xl mx-auto px-6 pb-16 ${inStudentLayout ? "" : "pt-24"}`}>
        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            to={backPath}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 mb-8 no-underline transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to jobs
          </Link>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-10">
          {/* Header */}
          <motion.div variants={fadeUp}>
            <Kicker>internal / posting</Kicker>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-start gap-5">
              <CompanyMark label={job.company || "?"} size="lg" />
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                  {job.title}
                </h1>
                <p className="mt-2 text-sm text-stone-500">{job.company}</p>
              </div>
              <div className="shrink-0 flex flex-wrap items-center gap-2 sm:justify-end">
                <Button
                  type="button"
                  variant="outline"
                  mode="icon"
                  size="lg"
                  aria-label="Share job"
                  onClick={() => void handleShareJob()}
                >
                  <Share2 />
                </Button>
                {ctaButton}
              </div>
            </div>

            {/* Meta row */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-stone-600 dark:text-stone-400">
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
              {job._count && (
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-stone-400" />
                  {job._count.applications} applicant{job._count.applications !== 1 ? "s" : ""}
                </span>
              )}
              {deadlineInfo && (
                <span className={`flex items-center gap-1.5 ${deadlineInfo.urgent ? "text-red-600 dark:text-red-400" : ""}`}>
                  <Clock className={`w-3.5 h-3.5 ${deadlineInfo.urgent ? "text-red-500" : "text-stone-400"}`} />
                  {deadlineInfo.label}
                </span>
              )}
            </div>

            {/* Tags */}
            {job.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Two column */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div variants={fadeUp} className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-8">
                <Kicker>about / role</Kicker>
                <div className="mt-3 text-sm text-stone-700 dark:text-stone-300 whitespace-pre-wrap leading-relaxed">
                  {job.description}
                </div>
              </motion.div>

              {job.rounds && job.rounds.length > 0 && (
                <motion.div variants={fadeUp} className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-8">
                  <div className="flex items-center justify-between mb-5">
                    <Kicker>hiring / process</Kicker>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      {job.rounds.length} round{job.rounds.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="space-y-0">
                    {job.rounds.map((round, i) => (
                      <div key={round.id} className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-md flex items-center justify-center text-xs font-mono font-bold">
                            {String(i + 1).padStart(2, "0")}
                          </div>
                          {i < job.rounds!.length - 1 && (
                            <div className="w-px h-full min-h-8 bg-stone-200 dark:bg-white/10" />
                          )}
                        </div>
                        <div className="flex-1 pb-5 pt-1">
                          <h3 className="font-bold text-stone-900 dark:text-stone-50 text-sm">{round.name}</h3>
                          {round.description && (
                            <p className="text-xs text-stone-500 mt-1 leading-relaxed">{round.description}</p>
                          )}
                          {round.customFields.length > 0 && (
                            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-2">
                              {round.customFields.length} field{round.customFields.length !== 1 ? "s" : ""} to complete
                            </p>
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
              <motion.div variants={fadeUp} className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-6">
                <Kicker>job / details</Kicker>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">Location</dt>
                    <dd className="text-stone-900 dark:text-stone-50 text-right truncate">{job.location}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">Salary</dt>
                    <dd className="text-stone-900 dark:text-stone-50 text-right truncate">{job.salary}</dd>
                  </div>
                  {job._count && (
                    <div className="flex items-start justify-between gap-3">
                      <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">Applicants</dt>
                      <dd className="text-stone-900 dark:text-stone-50 text-right">{job._count.applications}</dd>
                    </div>
                  )}
                  {deadlineInfo && (
                    <div className="flex items-start justify-between gap-3">
                      <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">Deadline</dt>
                      <dd className={`text-right ${deadlineInfo.urgent ? "text-red-600 dark:text-red-400" : "text-stone-900 dark:text-stone-50"}`}>
                        {deadlineInfo.label}
                      </dd>
                    </div>
                  )}
                </dl>
              </motion.div>

              {job.recruiter && (
                <motion.div variants={fadeUp} className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-6">
                  <Kicker>posted / by</Kicker>
                  <div className="mt-4 flex items-center gap-3">
                    <CompanyMark label={job.recruiter.name || "?"} />
                    <div className="min-w-0">
                      <p className="font-bold text-sm text-stone-900 dark:text-stone-50 truncate">
                        {job.recruiter.name}
                      </p>
                      {job.recruiter.company && (
                        <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                          <Building2 className="w-3 h-3" /> {job.recruiter.company}
                        </p>
                      )}
                      {job.recruiter.designation && (
                        <p className="text-xs text-stone-500 mt-0.5">{job.recruiter.designation}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Related jobs */}
          {relatedJobs.length > 0 && (
            <motion.div variants={fadeUp}>
              <Kicker>related / similar roles</Kicker>
              <h2 className="mt-3 text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-5">
                Similar positions.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedJobs.slice(0, 4).map((rj) => (
                  <Link
                    key={rj.id}
                    to={inStudentLayout ? `/student/jobs/${rj.id}` : `/jobs/${rj.id}`}
                    className="group no-underline block bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-5 hover:border-stone-400 dark:hover:border-white/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-3 min-w-0">
                        <CompanyMark label={rj.company || "?"} />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate leading-tight">
                            {rj.title}
                          </h3>
                          <p className="text-xs text-stone-500 mt-0.5 truncate">{rj.company}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 shrink-0 text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500">
                      {rj.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {rj.location}
                        </span>
                      )}
                      {rj.salary && (
                        <span className="flex items-center gap-1">
                          <IndianRupee className="w-3 h-3" /> {rj.salary}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <motion.div variants={fadeUp}>
              <Kicker>related / articles</Kicker>
              <h2 className="mt-3 text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-5">
                From the blog.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPosts.slice(0, 3).map((rp) => (
                  <Link
                    key={rp.id}
                    to={`/blog/${rp.slug}`}
                    className="group no-underline block bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-5 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full"
                  >
                    {rp.featuredImage && (
                      <img
                        src={rp.featuredImage}
                        alt={rp.title}
                        className="w-full h-28 object-cover rounded-md mb-3 border border-stone-200 dark:border-white/10"
                      />
                    )}
                    <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 line-clamp-2 leading-tight">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1.5 line-clamp-2">{rp.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-3">
                      <Clock className="w-3 h-3" /> {rp.readingTime} min read
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );

  if (inStudentLayout)
    return (
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
