import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import api from "../../../lib/axios";
import toast from "react-hot-toast";
import type { Pagination, JobStatus } from "../../../lib/types";

interface AdminJob {
  id: number;
  title: string;
  company: string;
  location: string;
  status: JobStatus;
  createdAt: string;
  recruiter: { id: number; name: string; email: string };
  _count: { applications: number; rounds: number };
}

export default function AdminJobsListPage() {
  const [jobs, setJobs] = useState<AdminJob[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 20, total: 0, totalPages: 0 });
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchJobs = async (page = 1) => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (search) params.search = search;
      if (statusFilter) params.status = statusFilter;
      const { data } = await api.get("/admin/jobs", { params });
      setJobs(data.jobs);
      setPagination(data.pagination);
    } catch {
      toast.error("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [statusFilter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchJobs(1);
  };

  const updateJobStatus = async (jobId: number, status: JobStatus) => {
    try {
      await api.patch(`/admin/jobs/${jobId}/status`, { status });
      toast.success("Job status updated");
      fetchJobs(pagination.page);
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      toast.error(error.response?.data?.message || "Failed to update job");
    }
  };

  const deleteJob = async (jobId: number, jobTitle: string) => {
    if (!confirm(`Delete "${jobTitle}"? This will also delete all applications.`)) return;
    try {
      await api.delete(`/admin/jobs/${jobId}`);
      toast.success("Job deleted");
      fetchJobs(pagination.page);
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      toast.error(error.response?.data?.message || "Failed to delete job");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Job Management</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <form onSubmit={handleSearch} className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or company..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500"
          />
        </form>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        >
          <option value="">All Statuses</option>
          <option value="DRAFT">Draft</option>
          <option value="PUBLISHED">Published</option>
          <option value="CLOSED">Closed</option>
          <option value="ARCHIVED">Archived</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-400">Loading jobs...</div>
        ) : jobs.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No jobs found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Job</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Recruiter</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Apps</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Created</th>
                  <th className="text-right px-6 py-3 text-xs font-medium text-gray-400 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {jobs.map((job, i) => (
                  <motion.tr
                    key={job.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="hover:bg-gray-800/50"
                  >
                    <td className="px-6 py-4">
                      <p className="font-medium text-white">{job.title}</p>
                      <p className="text-sm text-gray-400">{job.company} - {job.location}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">{job.recruiter.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getJobStatusBadge(job.status)}`}>
                        {job.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">{job._count.applications}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">{new Date(job.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <select
                          value={job.status}
                          onChange={(e) => updateJobStatus(job.id, e.target.value as JobStatus)}
                          className="px-2 py-1 text-xs bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none"
                        >
                          <option value="DRAFT">Draft</option>
                          <option value="PUBLISHED">Published</option>
                          <option value="CLOSED">Closed</option>
                          <option value="ARCHIVED">Archived</option>
                        </select>
                        <button
                          onClick={() => deleteJob(job.id, job.title)}
                          className="px-3 py-1 text-xs font-medium rounded-lg bg-red-900/30 text-red-400 hover:bg-red-900/50 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-800">
            <span className="text-sm text-gray-400">
              Showing {(pagination.page - 1) * pagination.limit + 1}-{Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => fetchJobs(pagination.page - 1)}
                disabled={pagination.page <= 1}
                className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => fetchJobs(pagination.page + 1)}
                disabled={pagination.page >= pagination.totalPages}
                className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
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
