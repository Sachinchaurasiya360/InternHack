import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import api from "../../../lib/axios";
import toast from "react-hot-toast";
import type { ActivityLog, Pagination } from "../../../lib/types";

export default function ActivityLogsPage() {
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 20, total: 0, totalPages: 0 });
  const [actionFilter, setActionFilter] = useState("");
  const [targetFilter, setTargetFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchLogs = async (page = 1) => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (actionFilter) params.action = actionFilter;
      if (targetFilter) params.targetType = targetFilter;
      const { data } = await api.get("/admin/activity-logs", { params });
      setLogs(data.logs);
      setPagination(data.pagination);
    } catch {
      toast.error("Failed to load activity logs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [actionFilter, targetFilter]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Activity Logs</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <select
          value={actionFilter}
          onChange={(e) => setActionFilter(e.target.value)}
          className="px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        >
          <option value="">All Actions</option>
          <option value="USER_ACTIVATED">User Activated</option>
          <option value="USER_DEACTIVATED">User Deactivated</option>
          <option value="USER_DELETED">User Deleted</option>
          <option value="JOB_STATUS_CHANGED">Job Status Changed</option>
          <option value="JOB_DELETED">Job Deleted</option>
          <option value="ADMIN_CREATED">Admin Created</option>
        </select>
        <select
          value={targetFilter}
          onChange={(e) => setTargetFilter(e.target.value)}
          className="px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        >
          <option value="">All Targets</option>
          <option value="user">Users</option>
          <option value="job">Jobs</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-400">Loading logs...</div>
        ) : logs.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No activity logs found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Admin</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Action</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Target</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Details</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {logs.map((log, i) => (
                  <motion.tr
                    key={log.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="hover:bg-gray-800/50"
                  >
                    <td className="px-6 py-4">
                      <p className="font-medium text-white">{log.admin.name}</p>
                      <p className="text-xs text-gray-500">{log.admin.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getActionBadge(log.action)}`}>
                        {log.action.replace(/_/g, " ")}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {log.targetType} #{log.targetId}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400 max-w-xs truncate">
                      {formatDetails(log.details)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {new Date(log.createdAt).toLocaleString()}
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
                onClick={() => fetchLogs(pagination.page - 1)}
                disabled={pagination.page <= 1}
                className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => fetchLogs(pagination.page + 1)}
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

function getActionBadge(action: string) {
  if (action.includes("DELETED")) return "bg-red-900/50 text-red-400";
  if (action.includes("DEACTIVATED") || action.includes("REJECTED")) return "bg-yellow-900/50 text-yellow-400";
  if (action.includes("ACTIVATED") || action.includes("APPROVED") || action.includes("CREATED")) return "bg-green-900/50 text-green-400";
  if (action.includes("CHANGED")) return "bg-blue-900/50 text-blue-400";
  return "bg-gray-800 text-gray-400";
}

function formatDetails(details: Record<string, unknown>): string {
  if (!details || Object.keys(details).length === 0) return "-";
  const parts: string[] = [];
  if (details.reason) parts.push(`Reason: ${details.reason}`);
  if (details.previousStatus) parts.push(`${details.previousStatus} -> ${details.newStatus || "changed"}`);
  if (details.deletedUser) {
    const u = details.deletedUser as Record<string, string>;
    parts.push(`${u.name} (${u.email})`);
  }
  if (details.deletedJob) {
    const j = details.deletedJob as Record<string, string>;
    parts.push(`${j.title} at ${j.company}`);
  }
  if (details.tier) parts.push(`Tier: ${details.tier}`);
  return parts.length > 0 ? parts.join(", ") : JSON.stringify(details);
}
