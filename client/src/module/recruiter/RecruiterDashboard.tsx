import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  PlusCircle,
} from "lucide-react";
import api from "../../lib/axios";
import { LoadingScreen } from "../../components/LoadingScreen";
import { SEO } from "../../components/SEO";
import { Button } from "../../components/ui/button";
import { useAuthStore } from "../../lib/auth.store";

interface DashboardData {
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  hiredCount: number;
  statusBreakdown: Record<string, number>;
  topVerifiedSkills: { skillName: string; count: number }[];
  recentApplications: {
    id: number;
    status: string;
    createdAt: string;
    student: { id: number; name: string; email: string };
    job: { id: number; title: string };
  }[];
}

export default function RecruiterDashboard() {
  const { user } = useAuthStore();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/recruiter/dashboard")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <LoadingScreen />;

  if (!data) {
    return (
      <div className="text-center text-stone-500 py-20">
        Failed to load dashboard
      </div>
    );
  }

  const stats = [
    { label: "total jobs", value: data.totalJobs, icon: Briefcase },
    { label: "active jobs", value: data.activeJobs, icon: TrendingUp },
    { label: "applicants", value: data.totalApplications, icon: Users },
    { label: "hired", value: data.hiredCount, icon: Award },
  ];

  const firstName = user?.company || user?.name?.split(" ")[0] || "Recruiter";
  const topSkillPeak = data.topVerifiedSkills[0]?.count || 1;

  return (
    <div className="relative text-stone-900 dark:text-stone-50">
      <SEO title="Recruiter Dashboard" noIndex />

      {/* Faint vertical rule pattern, same as student editorial pages */}
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
          className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              recruiter / dashboard
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Hiring{" "}
              <span className="relative inline-block">
                <span className="relative z-10">overview.</span>
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
              Welcome back, {firstName}. Track your open roles, watch your pipeline, and meet the candidates coming in.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant="secondary" size="md">
              <Link to="/recruiters/jobs" className="no-underline">
                My jobs
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
            <Button asChild variant="primary" size="md">
              <Link to="/recruiters/jobs/create" className="no-underline">
                <PlusCircle className="w-4 h-4" />
                Post a job
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 hover:border-stone-300 dark:hover:border-white/20 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  {stat.label}
                </span>
                <stat.icon className="w-4 h-4 text-stone-400" />
              </div>
              <p className="text-3xl font-bold text-stone-900 dark:text-stone-50 tabular-nums leading-none">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pipeline + Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
          {/* Application Status */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500">
                application status
              </h2>
            </div>

            {Object.keys(data.statusBreakdown).length === 0 ? (
              <p className="text-sm text-stone-500">No applications in the pipeline yet.</p>
            ) : (
              <ul className="divide-y divide-stone-200 dark:divide-white/10">
                {Object.entries(data.statusBreakdown).map(([status, count]) => (
                  <li key={status} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`h-1.5 w-1.5 shrink-0 ${getStatusDot(status)}`} />
                      <span className="text-sm text-stone-700 dark:text-stone-300 truncate">
                        {humanizeStatus(status)}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-50 tabular-nums shrink-0 ml-4">
                      {count}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </motion.section>

          {/* Top Verified Skills */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="lg:col-span-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500">
                top verified skills
              </h2>
            </div>

            {!data.topVerifiedSkills || data.topVerifiedSkills.length === 0 ? (
              <div className="flex items-start gap-3 text-sm text-stone-500">
                <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-stone-400" />
                <p>No verified skills in your applicant pool yet. Candidates will show up here as they pass skill tests.</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {data.topVerifiedSkills.map((skill, i) => (
                  <li key={skill.skillName} className="flex items-center gap-3">
                    <span className="text-[10px] font-mono tabular-nums text-stone-400 w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-stone-900 dark:text-stone-50 truncate">
                          {skill.skillName}
                        </span>
                        <span className="text-[11px] font-mono text-stone-500 tabular-nums shrink-0 ml-3">
                          {skill.count} verified
                        </span>
                      </div>
                      <div className="relative h-1 bg-stone-100 dark:bg-stone-800 overflow-hidden rounded-sm">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: "easeOut" }}
                          className="absolute inset-y-0 left-0 bg-lime-400 origin-left rounded-sm"
                          style={{ width: `${Math.min(100, (skill.count / topSkillPeak) * 100)}%` }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </motion.section>
        </div>

        {/* Recent Applications */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-end justify-between border-b border-stone-200 dark:border-white/10 pb-4 mb-0">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
                <span className="h-1.5 w-1.5 bg-lime-400" />
                recent applications
              </div>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                Who just applied
              </h2>
            </div>
            <Link
              to="/recruiters/jobs"
              className="text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 no-underline inline-flex items-center gap-1.5 transition-colors"
            >
              view all
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {data.recentApplications.length === 0 ? (
            <div className="border border-stone-200 dark:border-white/10 border-t-0 rounded-b-md bg-white dark:bg-stone-900 px-6 py-16 text-center">
              <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-4 h-4 text-stone-400" />
              </div>
              <p className="text-sm text-stone-500 mb-5">
                No applications yet. Post a role and candidates will land here.
              </p>
              <Button asChild variant="primary" size="md">
                <Link to="/recruiters/jobs/create" className="no-underline">
                  <PlusCircle className="w-4 h-4" />
                  Post a job
                </Link>
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-stone-200 dark:divide-white/10 border-l border-r border-b border-stone-200 dark:border-white/10 rounded-b-md bg-white dark:bg-stone-900">
              {data.recentApplications.map((app, i) => (
                <motion.li
                  key={app.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 + i * 0.03 }}
                >
                  <Link
                    to={`/recruiters/applications/${app.id}`}
                    className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-stone-50 dark:hover:bg-stone-950/40 transition-colors no-underline group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-stone-600 dark:text-stone-300">
                          {getInitials(app.student.name)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-sm text-stone-900 dark:text-stone-50 group-hover:underline decoration-lime-400 decoration-2 underline-offset-4 truncate">
                          {app.student.name}
                        </p>
                        <p className="text-xs text-stone-500 truncate">
                          {app.job.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400">
                        <span className={`h-1.5 w-1.5 ${getStatusDot(app.status)}`} />
                        {humanizeStatus(app.status)}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400 tabular-nums">
                        {formatDate(app.createdAt)}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors" />
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          )}
        </motion.section>
      </div>
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function humanizeStatus(status: string) {
  return status
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function getStatusDot(status: string) {
  switch (status) {
    case "APPLIED":
      return "bg-blue-500";
    case "IN_PROGRESS":
      return "bg-amber-500";
    case "SHORTLISTED":
      return "bg-lime-400";
    case "HIRED":
      return "bg-emerald-500";
    case "REJECTED":
      return "bg-red-500";
    case "WITHDRAWN":
      return "bg-stone-400";
    default:
      return "bg-stone-400";
  }
}
