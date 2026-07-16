import React, { useMemo, useState } from "react";
import { Link } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileText,
  MapPin,
  PlugZap,
  Copy,
  Search,
  ShieldCheck,
  UserCircle,
  Wand2,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { CompanyMark } from "../../../components/ui/CompanyMark";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import toast from "@/components/ui/toast";
import type {
  ExternalApplication,
  ExternalJob,
  JobFeedStats,
} from "../../../lib/types";

interface ProfilePayload {
  name?: string | null;
  contactNo?: string | null;
  bio?: string | null;
  college?: string | null;
  graduationYear?: number | null;
  skills?: string[];
  location?: string | null;
  linkedinUrl?: string | null;
  githubUrl?: string | null;
  portfolioUrl?: string | null;
  resumes?: string[];
  projects?: unknown[];
}

interface ApplicationsPayload {
  externalApplications: ExternalApplication[];
}

interface TrackerStats {
  total: number;
  saved: number;
  applied: number;
  interviews: number;
  offers: number;
  rejections: number;
  ghosted: number;
  applicationsThisWeek: number;
  responseRate: number;
  byStatus: Record<string, number>;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.32, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function formatDate(value?: string | null) {
  if (!value) return "No date";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "No date";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function profileScore(profile?: ProfilePayload) {
  if (!profile) return 0;
  const checks = [
    profile.name,
    profile.contactNo,
    profile.bio,
    profile.college,
    profile.graduationYear,
    profile.location,
    profile.linkedinUrl,
    profile.githubUrl,
    profile.portfolioUrl,
    profile.resumes?.length,
    profile.skills?.length,
    profile.projects?.length,
  ];
  const filled = checks.filter(Boolean).length;
  return Math.round((filled / checks.length) * 100);
}

function responseRate(applications: ExternalApplication[]) {
  if (applications.length === 0) return 0;
  return 0;
}

function applicationsThisWeek(applications: ExternalApplication[]) {
  const now = new Date();
  const start = new Date(now);
  start.setDate(now.getDate() - 7);
  return applications.filter((app) => new Date(app.createdAt).getTime() >= start.getTime()).length;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  hint: string;
}) {
  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
            {value}
          </p>
        </div>
        <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-stone-600 dark:text-stone-300" />
        </div>
      </div>
      <p className="mt-3 text-xs text-stone-500 leading-relaxed">{hint}</p>
    </div>
  );
}

function ActionCard({
  icon: Icon,
  title,
  body,
  to,
  cta,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  to: string;
  cta: string;
}) {
  return (
    <Link
      to={to}
      className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4 no-underline hover:border-stone-400 dark:hover:border-white/30 transition-colors"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-stone-600 dark:text-stone-300" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50">
            {title}
          </h3>
          <p className="mt-1 text-xs text-stone-500 leading-relaxed">{body}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
            {cta}
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

const RecentApplicationCard = React.memo(function RecentApplicationCard({
  app,
}: {
  app: ExternalApplication;
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-stone-100 dark:border-white/5 last:border-b-0">
      <CompanyMark name={app.adminJob.company || "?"} size="sm" />
      <div className="min-w-0 flex-1">
        <Link
          to={app.adminJob.slug ? `/jobs/ext/${app.adminJob.slug}` : "/student/applications"}
          className="text-sm font-bold text-stone-900 dark:text-stone-50 no-underline hover:text-lime-600 dark:hover:text-lime-400 transition-colors line-clamp-1"
        >
          {app.adminJob.role || "Open role"}
        </Link>
        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-500">
          <span className="inline-flex items-center gap-1 min-w-0">
            <Building2 className="w-3 h-3 shrink-0" />
            <span className="truncate">{app.adminJob.company || "Company"}</span>
          </span>
          {app.adminJob.location && (
            <span className="inline-flex items-center gap-1 min-w-0">
              <MapPin className="w-3 h-3 shrink-0" />
              <span className="truncate">{app.adminJob.location}</span>
            </span>
          )}
        </div>
      </div>
      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 shrink-0">
        {formatDate(app.createdAt)}
      </span>
    </div>
  );
});

const LatestJobCard = React.memo(function LatestJobCard({ job }: { job: ExternalJob }) {
  return (
    <Link
      to={job.slug ? `/jobs/ext/${job.slug}` : "/student/jobs"}
      className="group flex items-start gap-3 py-3 border-b border-stone-100 dark:border-white/5 last:border-b-0 no-underline"
    >
      <CompanyMark name={job.company || "?"} size="sm" />
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 line-clamp-1 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
          {job.role || "Open role"}
        </h3>
        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-500">
          <span className="inline-flex items-center gap-1 min-w-0">
            <Building2 className="w-3 h-3 shrink-0" />
            <span className="truncate">{job.company || "Company"}</span>
          </span>
          {job.location && (
            <span className="inline-flex items-center gap-1 min-w-0">
              <MapPin className="w-3 h-3 shrink-0" />
              <span className="truncate">{job.location}</span>
            </span>
          )}
        </div>
      </div>
      <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 transition-colors shrink-0" />
    </Link>
  );
});

export default function JobHubPage() {
  const [extensionToken, setExtensionToken] = useState<string | null>(null);
  const { data: applicationsData, isLoading: applicationsLoading } = useQuery({
    queryKey: queryKeys.applications.mine(),
    queryFn: () =>
      api.get("/student/applications").then((res) => res.data as ApplicationsPayload),
    staleTime: 2 * 60 * 1000,
  });

  const { data: jobStats } = useQuery({
    queryKey: queryKeys.jobFeed.stats(),
    queryFn: () => api.get("/job-feed/stats").then((res) => res.data as JobFeedStats),
    staleTime: 60 * 1000,
    retry: false,
  });

  const { data: trackerStats } = useQuery({
    queryKey: queryKeys.applicationTracker.stats(),
    queryFn: () => api.get("/application-tracker/stats").then((res) => res.data as TrackerStats),
    staleTime: 60 * 1000,
    retry: false,
  });

  const { data: profile } = useQuery({
    queryKey: queryKeys.profile.me(),
    queryFn: () => api.get("/auth/me").then((res) => res.data.user as ProfilePayload),
    staleTime: 5 * 60 * 1000,
  });

  const { data: latestJobs } = useQuery({
    queryKey: queryKeys.externalJobs.list({ page: 1, limit: 5 }),
    queryFn: async () => {
      const res = await api.get("/external-jobs?page=1&limit=5");
      return (res.data.jobs ?? []) as ExternalJob[];
    },
    staleTime: 60 * 1000,
  });

  const applications = useMemo(
    () => applicationsData?.externalApplications ?? [],
    [applicationsData],
  );
  const recentApplications = applications.slice(0, 5);
  const score = profileScore(profile);
  const weeklyCount = trackerStats?.applicationsThisWeek ?? applicationsThisWeek(applications);
  const rate = trackerStats?.responseRate ?? responseRate(applications);
  const totalApplications = trackerStats?.total ?? applications.length;
  const savedJobs = (trackerStats?.saved ?? 0) + (jobStats?.saved ?? 0);

  const extensionSession = useMutation({
    mutationFn: async () => {
      const res = await api.post("/extension/session");
      return res.data as { token: string; expiresInSeconds: number };
    },
    onSuccess: (data) => {
      setExtensionToken(data.token);
      toast.success("Extension token created");
    },
    onError: () => toast.error("Failed to create extension token"),
  });

  const copyToken = async () => {
    if (!extensionToken) return;
    await navigator.clipboard.writeText(extensionToken);
    toast.success("Token copied");
  };


  return (
    <div className="relative pb-16">
      <SEO title="Job Hub" noIndex />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
      >
        <div>
          <Kicker>work / job hub</Kicker>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Run your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">job search.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-xl leading-relaxed">
            Autofill applications, track your pipeline, and keep every internship
            and job in one place.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button asChild variant="outline" size="md" className="gap-2">
            <Link to="/student/profile">
              <UserCircle className="w-4 h-4" />
              Profile
            </Link>
          </Button>
          <Button asChild variant="mono" size="md" className="gap-2">
            <Link to="/student/ai-agent">
              <Bot className="w-4 h-4" />
              Ask AI
            </Link>
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <motion.div
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            <StatCard
              icon={ClipboardList}
              label="Applications"
              value={totalApplications}
              hint={`${weeklyCount} sent in the last 7 days`}
            />
            <StatCard
              icon={Briefcase}
              label="Saved jobs"
              value={savedJobs}
              hint={`${jobStats?.unseen ?? 0} unseen recommendations`}
            />
            <StatCard
              icon={BarChart3}
              label="Response rate"
              value={`${rate}%`}
              hint="Status tracking unlocks richer analytics"
            />
            <StatCard
              icon={CheckCircle2}
              label="Profile"
              value={`${score}%`}
              hint={score >= 80 ? "Ready for autofill" : "Add details before using autofill"}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                  <PlugZap className="w-4 h-4 text-stone-600 dark:text-stone-300" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50">
                    Autofill extension
                  </h3>
                  <p className="mt-1 text-xs text-stone-500 leading-relaxed">
                    Create a session token, paste it in the extension popup, and use your InternHack profile on application forms.
                  </p>
                  <Button
                    type="button"
                    variant="mono"
                    size="sm"
                    className="mt-3 gap-1.5"
                    onClick={() => extensionSession.mutate()}
                    disabled={extensionSession.isPending}
                  >
                    <PlugZap className="w-3.5 h-3.5" />
                    {extensionSession.isPending ? "Creating..." : "Connect extension"}
                  </Button>
                </div>
              </div>
            </div>
            <ActionCard
              icon={Search}
              title="Find roles"
              body="Browse curated external jobs and internships that already feed the InternHack tracker."
              to="/student/jobs"
              cta="Browse jobs"
            />
            <ActionCard
              icon={Wand2}
              title="AI job agent"
              body="Ask for role recommendations, locations, skills, and opportunities from the live job feed."
              to="/student/ai-agent"
              cta="Open agent"
            />
          </div>

          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <Kicker>pipeline / recent</Kicker>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  Recent applications
                </h2>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link to="/student/applications">View all</Link>
              </Button>
            </div>

            {applicationsLoading ? (
              <div className="py-8 text-center text-xs font-mono uppercase tracking-widest text-stone-500">
                Loading applications...
              </div>
            ) : recentApplications.length > 0 ? (
              <div>
                {recentApplications.map((app) => (
                  <RecentApplicationCard key={app.id} app={app} />
                ))}
              </div>
            ) : (
              <div className="py-10 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
                <FileText className="w-6 h-6 text-stone-400 mx-auto mb-3" />
                <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                  No applications tracked yet.
                </p>
                <p className="mt-1 text-xs text-stone-500">
                  Apply from InternHack jobs now; extension tracking comes next.
                </p>
              </div>
            )}
          </div>
        </motion.div>

        <motion.aside
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="lg:col-span-4 space-y-5"
        >
          <div className="bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-950 border border-stone-900 dark:border-stone-50 rounded-md p-5">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-lime-300 dark:text-lime-700">
              <ShieldCheck className="w-3.5 h-3.5" />
              extension / next
            </div>
            <h2 className="mt-3 text-xl font-bold tracking-tight">
              Build profile once. Fill everywhere.
            </h2>
            <p className="mt-2 text-sm text-stone-300 dark:text-stone-600 leading-relaxed">
              The extension now has a foundation: profile fetch, native adapter detection,
              generic autofill, application tracking, and support requests.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] font-mono uppercase tracking-widest">
              <span className="rounded-md bg-white/10 dark:bg-stone-900/10 px-2 py-2">
                Greenhouse
              </span>
              <span className="rounded-md bg-white/10 dark:bg-stone-900/10 px-2 py-2">
                Lever
              </span>
              <span className="rounded-md bg-white/10 dark:bg-stone-900/10 px-2 py-2">
                Ashby
              </span>
              <span className="rounded-md bg-white/10 dark:bg-stone-900/10 px-2 py-2">
                Workday
              </span>
            </div>
          </div>

          {extensionToken && (
            <div className="bg-white dark:bg-stone-900 border border-lime-300 dark:border-lime-900/60 rounded-md p-5">
              <Kicker>extension / token</Kicker>
              <h2 className="mt-2 text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50">
                Paste this token in the extension popup.
              </h2>
              <textarea
                readOnly
                value={extensionToken}
                className="mt-3 w-full h-28 resize-none rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 p-3 text-xs text-stone-700 dark:text-stone-300 focus:outline-none"
              />
              <Button type="button" variant="mono" size="sm" className="mt-3 gap-1.5" onClick={copyToken}>
                <Copy className="w-3.5 h-3.5" />
                Copy token
              </Button>
            </div>
          )}

          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <Kicker>jobs / latest</Kicker>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  Fresh roles
                </h2>
              </div>
              <Clock className="w-4 h-4 text-stone-400" />
            </div>
            {latestJobs && latestJobs.length > 0 ? (
              <div>
                {latestJobs.map((job) => (
                  <LatestJobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <p className="py-6 text-sm text-stone-500 text-center">
                No fresh roles available right now.
              </p>
            )}
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
