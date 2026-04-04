import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  ShieldCheck,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import api from "../../lib/axios";
import { LoadingScreen } from "../../components/LoadingScreen";
import { SEO } from "../../components/SEO";
import { Button } from "../../components/ui/button";

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
      <div className="text-center text-gray-500 dark:text-gray-500 py-20">
        Failed to load dashboard
      </div>
    );
  }

  const stats = [
    {
      label: "Total Jobs",
      value: data.totalJobs,
      icon: Briefcase,
      color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
    },
    {
      label: "Active Jobs",
      value: data.activeJobs,
      icon: TrendingUp,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      label: "Total Applicants",
      value: data.totalApplications,
      icon: Users,
      color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20",
    },
    {
      label: "Hired",
      value: data.hiredCount,
      icon: Award,
      color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20",
    },
  ];

  return (
    <div className="-m-8">
      <SEO title="Recruiter Dashboard" noIndex />
      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden bg-[#fafafa] dark:bg-gray-950">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full bg-gradient-to-tr from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 opacity-60 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full border border-black/3 dark:border-white/3" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-8 pt-16 pb-14 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-black/10 dark:border-gray-700 shadow-sm rounded-full text-xs font-medium mb-8"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-purple-500" />
            <span className="text-gray-600 dark:text-gray-400">Recruiter Dashboard</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight tracking-tight text-gray-950 dark:text-white"
          >
            Your Hiring{" "}
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Overview
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Track your jobs, monitor applications, and discover top talent, all in one place.
          </motion.p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 shadow-sm hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-950/50 transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-3`}
                >
                  <stat.icon className="w-5 h-5" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white tabular-nums">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 uppercase tracking-wider mb-5">
              Analytics
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white tracking-tight mb-3">
              Pipeline{" "}
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              Application breakdown and top skills across your candidate pool.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Status Breakdown */}
            {Object.keys(data.statusBreakdown).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-950/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-base font-bold text-gray-900 dark:text-white">
                    Application Status
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(data.statusBreakdown).map(([status, count]) => (
                    <div
                      key={status}
                      className="px-4 py-3.5 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800"
                    >
                      <span className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-wider font-medium">
                        {status.replace(/_/g, " ")}
                      </span>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1 tabular-nums">
                        {count}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Top Verified Skills */}
            {data.topVerifiedSkills && data.topVerifiedSkills.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-950/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-base font-bold text-gray-900 dark:text-white">
                    Top Verified Skills
                  </h2>
                </div>
                <div className="space-y-4">
                  {data.topVerifiedSkills.map((skill, i) => (
                    <div key={skill.skillName} className="flex items-center gap-3">
                      <span className="text-xs font-bold text-gray-300 dark:text-gray-600 w-5 tabular-nums">
                        #{i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {skill.skillName}
                          </span>
                          <span className="text-xs text-gray-400 dark:text-gray-500 tabular-nums">
                            {skill.count} verified
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                          <div
                            className="bg-green-500 rounded-full h-1.5 transition-all"
                            style={{
                              width: `${Math.min(100, (skill.count / (data.topVerifiedSkills[0]?.count || 1)) * 100)}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ── Recent Applications ── */}
      <div className="relative bg-[#fafafa] dark:bg-gray-950">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 uppercase tracking-wider mb-5">
              <Users className="w-3 h-3" />
              Applicants
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white tracking-tight mb-3">
              Recent{" "}
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              Latest candidates who applied to your job postings.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-950/50 transition-all"
          >
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                  <Briefcase className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">All Applications</span>
              </div>
              <Link
                to="/recruiters/jobs"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors no-underline px-3 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                View all
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {data.recentApplications.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  No applications yet.
                </p>
                <Button asChild variant="mono" size="md">
                  <Link to="/recruiters/jobs/create" className="no-underline">
                    Create a Job
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {data.recentApplications.map((app, i) => (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.04 }}
                  >
                    <Link
                      to={`/recruiters/applications/${app.id}`}
                      className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors no-underline group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                            {app.student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()
                              .slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                            {app.student.name}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">
                            {app.job.title}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${getStatusColor(app.status)}`}
                        >
                          {app.status.replace(/_/g, " ")}
                        </span>
                        <span className="text-xs text-gray-300 dark:text-gray-600 tabular-nums">
                          {new Date(app.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case "APPLIED":
      return "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "IN_PROGRESS":
      return "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "SHORTLISTED":
      return "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "REJECTED":
      return "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    case "HIRED":
      return "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
    case "WITHDRAWN":
      return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
  }
}
