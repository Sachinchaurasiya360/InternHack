import { Link } from "react-router";
import { SEO } from "../../components/SEO";
import { LoadingScreen } from "../../components/LoadingScreen";
import { motion } from "framer-motion";
import { Users, Briefcase, TrendingUp, FileText } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import api from "../../lib/axios";
import { queryKeys } from "../../lib/query-keys";
import type { AdminDashboardData } from "../../lib/types";

export default function AdminDashboard() {
  const { data, isLoading: loading } = useQuery({
    queryKey: queryKeys.admin.dashboard(),
    queryFn: () => api.get("/admin/platform-dashboard").then((res) => res.data as AdminDashboardData),
  });

  if (loading) return <LoadingScreen />;

  if (!data) {
    return <div className="text-center text-stone-400">Failed to load dashboard</div>;
  }

  const stats = [
    { label: "Total Students", value: data.totalStudents, icon: Users },
    { label: "Total Jobs", value: data.totalJobs, icon: Briefcase },
    { label: "Active Jobs", value: data.activeJobs, icon: TrendingUp },
    { label: "Applications", value: data.totalApplications, icon: FileText },
  ];

  return (
    <div>
      <SEO title="Admin Dashboard" noIndex />
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-6">Platform Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-stone-900 p-4 sm:p-6 rounded-xl border border-stone-800"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs sm:text-sm text-stone-400">{stat.label}</span>
              <div className="p-1.5 sm:p-2 rounded-lg bg-stone-800 text-lime-400">
                <stat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <div className="bg-stone-900 rounded-xl border border-stone-800">
          <div className="p-4 sm:p-6 border-b border-stone-800 flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-semibold text-white">Recent Users</h2>
            <Link to="/admin/users" className="text-sm text-lime-400 hover:text-lime-300">View all</Link>
          </div>
          {data.recentUsers.length === 0 ? (
            <div className="p-8 text-center text-stone-500">No users yet</div>
          ) : (
            <div className="divide-y divide-stone-800">
              {data.recentUsers.map((user) => (
                <Link
                  key={user.id}
                  to={`/admin/users/${user.id}`}
                  className="flex items-center justify-between px-4 sm:px-6 py-3 hover:bg-stone-800/50 transition-colors no-underline"
                >
                  <div className="min-w-0 flex-1 mr-3">
                    <p className="font-medium text-white text-sm sm:text-base truncate">{user.name}</p>
                    <p className="text-xs sm:text-sm text-stone-400 truncate">{user.email}</p>
                  </div>
                  <span className={`text-xs font-medium uppercase shrink-0 ${user.role === "ADMIN" ? "text-lime-400" : "text-stone-400"}`}>
                    {user.role}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Recent Jobs */}
        <div className="bg-stone-900 rounded-xl border border-stone-800">
          <div className="p-4 sm:p-6 border-b border-stone-800 flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-semibold text-white">Recent Jobs</h2>
            <Link to="/admin/external-jobs" className="text-sm text-lime-400 hover:text-lime-300">View all</Link>
          </div>
          {data.recentJobs.length === 0 ? (
            <div className="p-8 text-center text-stone-500">No jobs yet</div>
          ) : (
            <div className="divide-y divide-stone-800">
              {data.recentJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between px-4 sm:px-6 py-3">
                  <div className="min-w-0 flex-1 mr-3">
                    <p className="font-medium text-white text-sm sm:text-base truncate">{job.role || "Untitled role"}</p>
                    <p className="text-xs sm:text-sm text-stone-400 truncate">{job.company || "Unknown company"}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`text-xs font-medium uppercase ${getJobStatus(job).className}`}>
                      {getJobStatus(job).label}
                    </span>
                    <p className="text-xs text-stone-500 mt-1">{job._count.applications} apps</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getJobStatus(job: { isActive: boolean; expiresAt: string }) {
  if (!job.isActive) return { label: "Inactive", className: "text-stone-500" };
  if (new Date(job.expiresAt) <= new Date()) return { label: "Expired", className: "text-stone-500" };
  return { label: "Active", className: "text-lime-400" };
}
