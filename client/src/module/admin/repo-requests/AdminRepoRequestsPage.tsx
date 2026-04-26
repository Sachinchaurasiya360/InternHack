import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitPullRequest, Check, X, ExternalLink, Clock, User } from "lucide-react";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import { LoadingScreen } from "../../../components/LoadingScreen";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import type { RepoRequest, Pagination } from "../../../lib/types";
import { SEO } from "../../../components/SEO";

export default function AdminRepoRequestsPage() {
  const [requests, setRequests] = useState<RepoRequest[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("PENDING");
  const [page, setPage] = useState(1);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await api.get("/opensource/requests/all", {
        params: { status: statusFilter, page, limit: 20 },
      });
      setRequests(res.data.requests);
      setPagination(res.data.pagination);
    } catch {
      toast.error("Failed to load repo requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { setPage(1); }, [statusFilter]);
  useEffect(() => { fetchRequests(); }, [statusFilter, page]);

  const handleApprove = async (id: number) => {
    try {
      await api.put(`/opensource/requests/${id}/approve`);
      toast.success("Request approved, repo added to directory");
      fetchRequests();
    } catch {
      toast.error("Failed to approve request");
    }
  };

  const handleReject = async (id: number) => {
    try {
      await api.put(`/opensource/requests/${id}/reject`);
      toast.success("Request rejected");
      fetchRequests();
    } catch {
      toast.error("Failed to reject request");
    }
  };

  const statusTabs = ["PENDING", "APPROVED", "REJECTED"];

  const statusBadge = (status: string) => {
    const map: Record<string, string> = {
      PENDING: "bg-amber-900/40 text-amber-400",
      APPROVED: "bg-emerald-900/40 text-emerald-400",
      REJECTED: "bg-red-900/40 text-red-400",
    };
    return map[status] || "bg-gray-800 text-gray-400";
  };

  return (
    <div>
      <SEO title="Repo Requests" noIndex />
      <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <GitPullRequest className="w-6 h-6" /> Repo Requests
      </h1>

      {/* Status Tabs */}
      <div className="flex gap-2 mb-6">
        {statusTabs.map((s) => (
          <button key={s} onClick={() => setStatusFilter(s)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              statusFilter === s ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}>
            {s}
            {pagination && statusFilter === s && (
              <span className="ml-1.5 text-xs opacity-70">({pagination.total})</span>
            )}
          </button>
        ))}
      </div>

      {loading ? (
        <LoadingScreen />
      ) : requests.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <Clock className="w-10 h-10 mx-auto mb-3 opacity-40" />
          <p>No {statusFilter.toLowerCase()} requests</p>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((req, i) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-5"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-white truncate">
                      {req.owner}/{req.name}
                    </h3>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase ${statusBadge(req.status)}`}>
                      {req.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2">{req.description}</p>
                </div>
                <a
                  href={req.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-gray-300" />
                </a>
              </div>

              <div className="flex flex-wrap gap-2 mb-3 text-xs">
                <span className="px-2 py-1 rounded-md bg-gray-700 text-gray-300">{req.language}</span>
                <span className="px-2 py-1 rounded-md bg-gray-700 text-gray-300">{req.domain}</span>
                <span className="px-2 py-1 rounded-md bg-gray-700 text-gray-300">{req.difficulty}</span>
                {req.techStack.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md bg-purple-900/30 text-purple-400">{t}</span>
                ))}
              </div>

              <div className="mb-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                <p className="text-xs font-medium text-gray-500 mb-1">Why this repo?</p>
                <p className="text-sm text-gray-300">{req.reason}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <User className="w-3.5 h-3.5" />
                  <span>{req.user?.name || "Unknown"} ({req.user?.email})</span>
                  <span className="mx-1">-</span>
                  <span>{new Date(req.createdAt).toLocaleDateString()}</span>
                </div>

                {req.status === "PENDING" && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleReject(req.id)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-900/30 text-red-400 text-xs font-medium hover:bg-red-900/50 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" /> Reject
                    </button>
                    <button
                      onClick={() => handleApprove(req.id)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-900/30 text-emerald-400 text-xs font-medium hover:bg-emerald-900/50 transition-colors"
                    >
                      <Check className="w-3.5 h-3.5" /> Approve
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {pagination && pagination.totalPages > 1 && (
            <PaginationControls
              currentPage={page}
              totalPages={pagination.totalPages}
              onPageChange={setPage}
            />
          )}
        </div>
      )}
    </div>
  );
}
