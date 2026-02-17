import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Building2 } from "lucide-react";
import api from "../../../lib/axios";
import type { Application } from "../../../lib/types";

export default function MyApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/student/applications").then((res) => {
      setApplications(res.data.applications);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const handleWithdraw = async (id: number) => {
    if (!confirm("Are you sure you want to withdraw this application?")) return;
    try {
      await api.delete(`/student/applications/${id}`);
      setApplications(applications.map((a) => a.id === id ? { ...a, status: "WITHDRAWN" as const } : a));
    } catch {
      alert("Failed to withdraw");
    }
  };

  if (loading) return <div className="flex items-center justify-center h-64 text-gray-500">Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Applications</h1>

      {applications.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
          <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">No applications yet</p>
          <Link to="/jobs" className="inline-block px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors no-underline text-sm font-semibold">
            Browse Jobs
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map((app, i) => (
            <motion.div key={app.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Link to={`/student/applications/${app.id}`} className="no-underline">
                    <h3 className="text-lg font-semibold text-gray-900 hover:underline">{app.job?.title}</h3>
                  </Link>
                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Building2 className="w-4 h-4" />{app.job?.company}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{app.job?.location}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                    <span className="text-xs text-gray-400">
                      Applied {new Date(app.createdAt).toLocaleDateString()}
                    </span>
                    {app.roundSubmissions && (
                      <span className="text-xs text-gray-400">
                        {app.roundSubmissions.filter((s) => s.status === "COMPLETED").length} / {app.roundSubmissions.length} rounds completed
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link to={`/student/applications/${app.id}`}
                    className="text-xs px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600 no-underline">
                    View Progress
                  </Link>
                  {app.status !== "WITHDRAWN" && app.status !== "REJECTED" && app.status !== "HIRED" && (
                    <button onClick={() => handleWithdraw(app.id)}
                      className="text-xs px-3 py-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      Withdraw
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
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
