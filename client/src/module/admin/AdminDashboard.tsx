import { Link } from "react-router";
import { SEO } from "../../components/SEO";
import { LoadingScreen } from "../../components/LoadingScreen";
import { motion } from "framer-motion";
import { Users, Building2, Briefcase, TrendingUp, FileText, Award } from "lucide-react";
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
    return <div className="text-center text-gray-400">Failed to load dashboard</div>;
  }

  const stats = [
    { label: "Total Students", value: data.totalStudents, icon: Users, color: "bg-blue-900/50 text-blue-400" },
    { label: "Total Recruiters", value: data.totalRecruiters, icon: Building2, color: "bg-purple-900/50 text-purple-400" },
    { label: "Total Jobs", value: data.totalJobs, icon: Briefcase, color: "bg-green-900/50 text-green-400" },
    { label: "Active Jobs", value: data.activeJobs, icon: TrendingUp, color: "bg-emerald-900/50 text-emerald-400" },
    { label: "Applications", value: data.totalApplications, icon: FileText, color: "bg-amber-900/50 text-amber-400" },
    { label: "Hired", value: data.hiredCount, icon: Award, color: "bg-rose-900/50 text-rose-400" },
  ];

  return (
    <div>
      <SEO title="Admin Dashboard" noIndex />
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-6">Platform Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-800"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs sm:text-sm text-gray-400">{stat.label}</span>
              <div className={`p-1.5 sm:p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Status Breakdown */}
      {Object.keys(data.statusBreakdown).length > 0 && (
        <div className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-800 mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-white mb-4">Application Status Breakdown</h2>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
            {Object.entries(data.statusBreakdown).map(([status, count]) => (
              <div key={status} className="px-3 sm:px-4 py-2 bg-gray-800 rounded-lg">
                <span className="text-xs text-gray-400 uppercase">{status}</span>
                <p className="text-lg font-bold text-white">{count}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <div className="bg-gray-900 rounded-xl border border-gray-800">
          <div className="p-4 sm:p-6 border-b border-gray-800 flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-semibold text-white">Recent Users</h2>
            <Link to="/admin/users" className="text-sm text-indigo-400 hover:text-indigo-300">View all</Link>
          </div>
          {data.recentUsers.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No users yet</div>
          ) : (
            <div className="divide-y divide-gray-800">
              {data.recentUsers.map((user) => (
                <Link
                  key={user.id}
                  to={`/admin/users/${user.id}`}
                  className="flex items-center justify-between px-4 sm:px-6 py-3 hover:bg-gray-800/50 transition-colors no-underline"
                >
                  <div className="min-w-0 flex-1 mr-3">
                    <p className="font-medium text-white text-sm sm:text-base truncate">{user.name}</p>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">{user.email}</p>
                  </div>
                  <span className={`inline-block px-2 sm:px-2.5 py-1 rounded-full text-xs font-medium shrink-0 ${getRoleBadge(user.role)}`}>
                    {user.role}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Recent Jobs */}
        <div className="bg-gray-900 rounded-xl border border-gray-800">
          <div className="p-4 sm:p-6 border-b border-gray-800 flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-semibold text-white">Recent Jobs</h2>
            <Link to="/admin/jobs" className="text-sm text-indigo-400 hover:text-indigo-300">View all</Link>
          </div>
          {data.recentJobs.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No jobs yet</div>
          ) : (
            <div className="divide-y divide-gray-800">
              {data.recentJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between px-4 sm:px-6 py-3">
                  <div className="min-w-0 flex-1 mr-3">
                    <p className="font-medium text-white text-sm sm:text-base truncate">{job.title}</p>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">{job.company} - {job.recruiter.name}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`inline-block px-2 sm:px-2.5 py-1 rounded-full text-xs font-medium ${getJobStatusBadge(job.status)}`}>
                      {job.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{job._count.applications} apps</p>
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

function getRoleBadge(role: string) {
  switch (role) {
    case "STUDENT": return "bg-blue-900/50 text-blue-400";
    case "RECRUITER": return "bg-purple-900/50 text-purple-400";
    case "ADMIN": return "bg-red-900/50 text-red-400";
    default: return "bg-gray-800 text-gray-400";
  }
}

function getJobStatusBadge(status: string) {
  switch (status) {
    case "DRAFT": return "bg-gray-800 text-gray-400";
    case "PUBLISHED": return "bg-green-900/50 text-green-400";
    case "CLOSED": return "bg-red-900/50 text-red-400";
    case "ARCHIVED": return "bg-yellow-900/50 text-yellow-400";
    default: return "bg-gray-800 text-gray-400";
  }
}
