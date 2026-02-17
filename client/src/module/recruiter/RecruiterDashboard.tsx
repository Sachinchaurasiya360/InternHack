import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp, Award } from "lucide-react";
import api from "../../lib/axios";

interface DashboardData {
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  hiredCount: number;
  statusBreakdown: Record<string, number>;
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
    api.get("/recruiter/dashboard").then((res) => {
      setData(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-64 text-gray-500">Loading dashboard...</div>;
  }

  if (!data) {
    return <div className="text-center text-gray-500">Failed to load dashboard</div>;
  }

  const stats = [
    { label: "Total Jobs", value: data.totalJobs, icon: Briefcase, color: "bg-blue-50 text-blue-600" },
    { label: "Active Jobs", value: data.activeJobs, icon: TrendingUp, color: "bg-green-50 text-green-600" },
    { label: "Total Applicants", value: data.totalApplications, icon: Users, color: "bg-purple-50 text-purple-600" },
    { label: "Hired", value: data.hiredCount, icon: Award, color: "bg-amber-50 text-amber-600" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">{stat.label}</span>
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Status Breakdown */}
      {Object.keys(data.statusBreakdown).length > 0 && (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Application Status Breakdown</h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(data.statusBreakdown).map(([status, count]) => (
              <div key={status} className="px-4 py-2 bg-gray-50 rounded-lg">
                <span className="text-xs text-gray-500 uppercase">{status}</span>
                <p className="text-lg font-bold text-gray-900">{count}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Applications */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
        </div>
        {data.recentApplications.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No applications yet. <Link to="/recruiters/jobs/create" className="text-black font-medium hover:underline">Create a job</Link> to get started.
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {data.recentApplications.map((app) => (
              <Link
                key={app.id}
                to={`/recruiters/applications/${app.id}`}
                className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors no-underline"
              >
                <div>
                  <p className="font-medium text-gray-900">{app.student.name}</p>
                  <p className="text-sm text-gray-500">{app.job.title}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                    {app.status}
                  </span>
                  <p className="text-xs text-gray-400 mt-1">{new Date(app.createdAt).toLocaleDateString()}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case "APPLIED": return "bg-blue-100 text-blue-700";
    case "IN_PROGRESS": return "bg-yellow-100 text-yellow-700";
    case "SHORTLISTED": return "bg-green-100 text-green-700";
    case "REJECTED": return "bg-red-100 text-red-700";
    case "HIRED": return "bg-emerald-100 text-emerald-700";
    case "WITHDRAWN": return "bg-gray-100 text-gray-700";
    default: return "bg-gray-100 text-gray-700";
  }
}
