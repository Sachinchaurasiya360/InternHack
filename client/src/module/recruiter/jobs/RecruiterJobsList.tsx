import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Plus, Users, BarChart3, Edit, Trash2 } from "lucide-react";
import api from "../../../lib/axios";
import type { Job } from "../../../lib/types";

export default function RecruiterJobsList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/jobs/recruiter/my-jobs").then((res) => {
      setJobs(res.data.jobs);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this job?")) return;
    try {
      await api.delete(`/jobs/${id}`);
      setJobs(jobs.filter((j) => j.id !== id));
    } catch {
      alert("Failed to delete job");
    }
  };

  const handleStatusChange = async (id: number, status: string) => {
    try {
      const { data } = await api.patch(`/jobs/${id}/status`, { status });
      setJobs(jobs.map((j) => (j.id === id ? { ...j, status: data.job.status } : j)));
    } catch {
      alert("Failed to update status");
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64 text-gray-500">Loading jobs...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Jobs</h1>
        <Link
          to="/recruiters/jobs/create"
          className="flex items-center gap-2 px-4 py-2.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors no-underline"
        >
          <Plus className="w-4 h-4" />
          Create Job
        </Link>
      </div>

      {jobs.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-500 mb-4">No jobs created yet</p>
          <Link
            to="/recruiters/jobs/create"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors no-underline text-sm font-semibold"
          >
            <Plus className="w-4 h-4" />
            Create Your First Job
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getJobStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{job.company} &middot; {job.location} &middot; {job.salary}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {job._count?.applications || 0} applicants
                    </span>
                    <span>{job._count?.rounds || 0} rounds</span>
                    {job.deadline && (
                      <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={job.status}
                    onChange={(e) => handleStatusChange(job.id, e.target.value)}
                    className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                  >
                    <option value="DRAFT">Draft</option>
                    <option value="PUBLISHED">Published</option>
                    <option value="CLOSED">Closed</option>
                    <option value="ARCHIVED">Archived</option>
                  </select>
                  <Link
                    to={`/recruiters/jobs/${job.id}/edit`}
                    className="p-2 text-gray-400 hover:text-black transition-colors rounded-lg hover:bg-gray-100"
                  >
                    <Edit className="w-4 h-4" />
                  </Link>
                  <Link
                    to={`/recruiters/jobs/${job.id}/applications`}
                    className="p-2 text-gray-400 hover:text-black transition-colors rounded-lg hover:bg-gray-100"
                  >
                    <Users className="w-4 h-4" />
                  </Link>
                  <Link
                    to={`/recruiters/jobs/${job.id}/analytics`}
                    className="p-2 text-gray-400 hover:text-black transition-colors rounded-lg hover:bg-gray-100"
                  >
                    <BarChart3 className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

function getJobStatusColor(status: string) {
  switch (status) {
    case "DRAFT": return "bg-gray-100 text-gray-600";
    case "PUBLISHED": return "bg-green-100 text-green-700";
    case "CLOSED": return "bg-red-100 text-red-700";
    case "ARCHIVED": return "bg-yellow-100 text-yellow-700";
    default: return "bg-gray-100 text-gray-600";
  }
}
