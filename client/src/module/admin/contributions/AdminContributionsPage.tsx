import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitPullRequest, Check, X, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import type { CompanyContribution, Pagination } from "../../../lib/types";

const TYPE_LABELS: Record<string, string> = {
  NEW_COMPANY: "New Company",
  EDIT_COMPANY: "Edit Company",
  ADD_CONTACT: "Add Contact",
  ADD_REVIEW: "Add Review",
};

const TYPE_COLORS: Record<string, string> = {
  NEW_COMPANY: "bg-blue-900/50 text-blue-400",
  EDIT_COMPANY: "bg-purple-900/50 text-purple-400",
  ADD_CONTACT: "bg-emerald-900/50 text-emerald-400",
  ADD_REVIEW: "bg-amber-900/50 text-amber-400",
};

export default function AdminContributionsPage() {
  const [contributions, setContributions] = useState<CompanyContribution[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("PENDING");
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const fetchContributions = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/contributions", { params: { status: statusFilter, page, limit: 20 } });
      setContributions(res.data.contributions);
      setPagination(res.data.pagination);
    } catch {
      toast.error("Failed to load contributions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { setPage(1); }, [statusFilter]);
  useEffect(() => { fetchContributions(); }, [statusFilter, page]);

  const handleStatus = async (id: number, status: "APPROVED" | "REJECTED") => {
    try {
      await api.put(`/admin/contributions/${id}/status`, { status });
      toast.success(`Contribution ${status.toLowerCase()}`);
      fetchContributions();
    } catch {
      toast.error("Failed to update contribution");
    }
  };

  const statusTabs = ["PENDING", "APPROVED", "REJECTED"];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <GitPullRequest className="w-6 h-6" /> Contributions
      </h1>

      {/* Status Tabs */}
      <div className="flex gap-2 mb-6">
        {statusTabs.map((s) => (
          <button key={s} onClick={() => setStatusFilter(s)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              statusFilter === s ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}>
            {s}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64 text-gray-400">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      ) : contributions.length === 0 ? (
        <div className="text-center text-gray-500 py-20">No {statusFilter.toLowerCase()} contributions</div>
      ) : (
        <div className="space-y-3">
          {contributions.map((contribution, i) => (
            <motion.div
              key={contribution.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="bg-gray-900 p-5 rounded-xl border border-gray-800"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${TYPE_COLORS[contribution.type] ?? "bg-gray-800 text-gray-400"}`}>
                      {TYPE_LABELS[contribution.type] ?? contribution.type}
                    </span>
                    <p className="text-sm text-gray-400">
                      by {contribution.user?.name ?? "Unknown"} ({contribution.user?.email})
                    </p>
                  </div>
                  <p className="text-xs text-gray-500">
                    {new Date(contribution.createdAt).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
                  </p>

                  {/* Expandable data preview */}
                  <button
                    onClick={() => setExpandedId(expandedId === contribution.id ? null : contribution.id)}
                    className="text-xs text-indigo-400 hover:text-indigo-300 mt-2"
                  >
                    {expandedId === contribution.id ? "Hide details" : "Show details"}
                  </button>

                  {expandedId === contribution.id && (
                    <pre className="mt-2 p-3 bg-gray-800 rounded-lg text-xs text-gray-300 overflow-x-auto max-h-60">
                      {JSON.stringify(contribution.data, null, 2)}
                    </pre>
                  )}
                </div>

                {contribution.status === "PENDING" && (
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    <button onClick={() => handleStatus(contribution.id, "APPROVED")}
                      className="p-2 rounded-lg bg-green-900/30 text-green-400 hover:bg-green-900/50 transition-colors"
                      title="Approve">
                      <Check className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleStatus(contribution.id, "REJECTED")}
                      className="p-2 rounded-lg bg-red-900/30 text-red-400 hover:bg-red-900/50 transition-colors"
                      title="Reject">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((p) => (
            <button key={p} onClick={() => setPage(p)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                p === pagination.page ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}>
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
