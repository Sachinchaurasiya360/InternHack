import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, DollarSign, Clock, Building2, Users, CheckCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "../../../components/Navbar";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { useAuthStore } from "../../../lib/auth.store";
import type { Job } from "../../../lib/types";

export default function JobDetailPage() {
  const { id } = useParams();
  const { isAuthenticated, user } = useAuthStore();

  const { data: job, isLoading } = useQuery({
    queryKey: queryKeys.jobs.detail(id!),
    queryFn: () => api.get(`/jobs/${id}`).then((res) => res.data.job as Job),
    enabled: !!id,
  });

  if (isLoading) return <div className="min-h-screen bg-gray-50"><Navbar /><div className="flex items-center justify-center h-64 pt-24 text-gray-500">Loading...</div></div>;
  if (!job) return <div className="min-h-screen bg-gray-50"><Navbar /><div className="text-center pt-24 text-gray-500">Job not found</div></div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <Link to="/jobs" className="flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-6 no-underline">
          <ArrowLeft className="w-4 h-4" /> Back to Jobs
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Header */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Building2 className="w-4 h-4" />{job.company}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" />{job.salary}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  {job._count && <span><Users className="w-4 h-4 inline mr-1" />{job._count.applications} applicants</span>}
                  {job.deadline && <span><Clock className="w-4 h-4 inline mr-1" />Deadline: {new Date(job.deadline).toLocaleDateString()}</span>}
                </div>
              </div>
              <div>
                {isAuthenticated && user?.role === "STUDENT" ? (
                  <Link to={`/jobs/${job.id}/apply`}
                    className="px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors no-underline text-sm">
                    Apply Now
                  </Link>
                ) : !isAuthenticated ? (
                  <Link to="/login"
                    className="px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors no-underline text-sm">
                    Sign In to Apply
                  </Link>
                ) : null}
              </div>
            </div>

            {job.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">{tag}</span>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Job Description</h2>
            <div className="text-gray-600 whitespace-pre-wrap leading-relaxed">{job.description}</div>
          </div>

          {/* Hiring Process */}
          {job.rounds && job.rounds.length > 0 && (
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Hiring Process</h2>
              <div className="space-y-4">
                {job.rounds.map((round, i) => (
                  <div key={round.id} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</div>
                      {i < job.rounds!.length - 1 && <div className="w-px h-8 bg-gray-200 mt-1" />}
                    </div>
                    <div className="flex-1 pb-2">
                      <h3 className="font-medium text-gray-900">{round.name}</h3>
                      {round.description && <p className="text-sm text-gray-500 mt-1">{round.description}</p>}
                      {round.customFields.length > 0 && (
                        <span className="text-xs text-gray-400 mt-1 block">{round.customFields.length} field(s) to complete</span>
                      )}
                    </div>
                    <CheckCircle className="w-5 h-5 text-gray-300 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recruiter Info */}
          {job.recruiter && (
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Posted By</h2>
              <p className="font-medium text-gray-700">{job.recruiter.name}</p>
              {job.recruiter.company && <p className="text-sm text-gray-500">{job.recruiter.company}</p>}
              {job.recruiter.designation && <p className="text-sm text-gray-400">{job.recruiter.designation}</p>}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
