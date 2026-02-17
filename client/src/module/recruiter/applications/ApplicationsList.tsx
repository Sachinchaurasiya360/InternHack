import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Filter } from "lucide-react";
import api from "../../../lib/axios";
import type { Application, Pagination } from "../../../lib/types";

export default function ApplicationsList() {
  const { id: jobId } = useParams();
  const [applications, setApplications] = useState<Application[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);

  const fetchApplications = () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), limit: "10" });
    if (search) params.set("search", search);
    if (statusFilter) params.set("status", statusFilter);

    api.get(`/recruiter/jobs/${jobId}/applications?${params}`).then((res) => {
      setApplications(res.data.applications);
      setPagination(res.data.pagination);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(() => { fetchApplications(); }, [jobId, page, statusFilter]);

  const handleStatusChange = async (appId: number, status: string) => {
    try {
      await api.patch(`/recruiter/applications/${appId}/status`, { status });
      fetchApplications();
    } catch {
      alert("Failed to update status");
    }
  };

  const handleAdvance = async (appId: number) => {
    try {
      await api.patch(`/recruiter/applications/${appId}/advance`);
      fetchApplications();
    } catch {
      alert("Failed to advance application");
    }
  };

  return (
    <div>
      <Link to="/recruiters/jobs" className="flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-4 no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to Jobs
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Applications</h1>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchApplications()}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 text-sm"
            placeholder="Search by name or email..." />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
            className="px-3 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/20">
            <option value="">All Status</option>
            <option value="APPLIED">Applied</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="SHORTLISTED">Shortlisted</option>
            <option value="REJECTED">Rejected</option>
            <option value="HIRED">Hired</option>
            <option value="WITHDRAWN">Withdrawn</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-500">Loading...</div>
      ) : applications.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100 text-gray-500">No applications found</div>
      ) : (
        <>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Candidate</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Status</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Rounds</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Applied</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {applications.map((app, i) => (
                  <motion.tr key={app.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                    className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <Link to={`/recruiters/applications/${app.id}`} className="no-underline">
                        <p className="font-medium text-gray-900">{app.student?.name}</p>
                        <p className="text-sm text-gray-500">{app.student?.email}</p>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <select value={app.status} onChange={(e) => handleStatusChange(app.id, e.target.value)}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium border-0 ${getStatusColor(app.status)}`}>
                        <option value="APPLIED">Applied</option>
                        <option value="IN_PROGRESS">In Progress</option>
                        <option value="SHORTLISTED">Shortlisted</option>
                        <option value="REJECTED">Rejected</option>
                        <option value="HIRED">Hired</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {app.roundSubmissions?.length || 0} completed
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(app.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleAdvance(app.id)}
                          className="text-xs px-3 py-1.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                          Advance
                        </button>
                        <Link to={`/recruiters/applications/${app.id}`}
                          className="text-xs px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600 no-underline">
                          View
                        </Link>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg disabled:opacity-30">Prev</button>
              <span className="text-sm text-gray-500">Page {page} of {pagination.totalPages}</span>
              <button onClick={() => setPage(Math.min(pagination.totalPages, page + 1))} disabled={page === pagination.totalPages}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg disabled:opacity-30">Next</button>
            </div>
          )}
        </>
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
