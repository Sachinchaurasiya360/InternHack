import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import api from "../../../lib/axios";

interface AnalyticsData {
  jobId: number;
  jobTitle: string;
  totalApplications: number;
  statusBreakdown: Record<string, number>;
  roundAnalytics: {
    id: number;
    name: string;
    orderIndex: number;
    totalSubmissions: number;
    completed: number;
    inProgress: number;
    pending: number;
  }[];
}

export default function JobAnalyticsPage() {
  const { id: jobId } = useParams();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/recruiter/jobs/${jobId}/analytics`).then((res) => {
      setData(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [jobId]);

  if (loading) return <div className="flex items-center justify-center h-64 text-gray-500">Loading analytics...</div>;
  if (!data) return <div className="text-center text-gray-500">Failed to load analytics</div>;

  const maxSubmissions = Math.max(...data.roundAnalytics.map((r) => r.totalSubmissions), 1);

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/recruiters/jobs" className="flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-4 no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to Jobs
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">{data.jobTitle}</h1>
      <p className="text-gray-500 mb-6">{data.totalApplications} total applications</p>

      {/* Status Breakdown */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-4">Application Status</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {Object.entries(data.statusBreakdown).map(([status, count]) => (
            <div key={status} className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold text-gray-900">{count}</p>
              <p className="text-xs text-gray-500 uppercase">{status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recruitment Funnel */}
      {data.roundAnalytics.length > 0 && (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-4">Recruitment Funnel</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 w-40">Applied</span>
              <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.5 }}
                  className="bg-blue-500 h-full rounded-full flex items-center justify-end pr-3">
                  <span className="text-xs font-bold text-white">{data.totalApplications}</span>
                </motion.div>
              </div>
            </div>

            {data.roundAnalytics.map((round, i) => {
              const pct = (round.totalSubmissions / maxSubmissions) * 100;
              const dropRate = i === 0
                ? data.totalApplications > 0 ? ((data.totalApplications - round.totalSubmissions) / data.totalApplications * 100).toFixed(0) : "0"
                : data.roundAnalytics[i - 1]!.totalSubmissions > 0
                  ? ((data.roundAnalytics[i - 1]!.totalSubmissions - round.totalSubmissions) / data.roundAnalytics[i - 1]!.totalSubmissions * 100).toFixed(0)
                  : "0";

              return (
                <div key={round.id}>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 w-40 truncate">{round.name}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-green-500 h-full rounded-full flex items-center justify-end pr-3 min-w-[40px]">
                        <span className="text-xs font-bold text-white">{round.totalSubmissions}</span>
                      </motion.div>
                    </div>
                    <span className="text-xs text-red-500 flex items-center gap-1 w-16">
                      <TrendingDown className="w-3 h-3" /> {dropRate}%
                    </span>
                  </div>
                  <div className="ml-44 flex gap-4 text-xs text-gray-400 mt-1">
                    <span>{round.completed} completed</span>
                    <span>{round.inProgress} in progress</span>
                    <span>{round.pending} pending</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Conversion Rate */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Key Metrics</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">{data.totalApplications}</p>
            <p className="text-sm text-gray-500">Total Applicants</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">{data.statusBreakdown["HIRED"] || 0}</p>
            <p className="text-sm text-gray-500">Hired</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">
              {data.totalApplications > 0 ? ((data.statusBreakdown["HIRED"] || 0) / data.totalApplications * 100).toFixed(1) : "0"}%
            </p>
            <p className="text-sm text-gray-500">Conversion Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
