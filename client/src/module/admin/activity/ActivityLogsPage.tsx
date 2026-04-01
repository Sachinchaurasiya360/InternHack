import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Search, AlertTriangle } from "lucide-react";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import api from "../../../lib/axios";
import toast from "@/components/ui/toast";
import type { ErrorLog, Pagination } from "../../../lib/types";

export default function ErrorLogsPage() {
  const [logs, setLogs] = useState<ErrorLog[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 20, total: 0, totalPages: 0 });
  const [statusGroup, setStatusGroup] = useState("");
  const [method, setMethod] = useState("");
  const [pathSearch, setPathSearch] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async (page = 1) => {
    setLoading(true);
    try {
      const params: Record<string, string | number> = { page, limit: 20 };
      if (statusGroup) params.statusGroup = statusGroup;
      if (method) params.method = method;
      if (pathSearch) params.path = pathSearch;
      const { data } = await api.get("/admin/error-logs", { params });
      setLogs(data.logs);
      setPagination(data.pagination);
    } catch {
      toast.error("Failed to load error logs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [statusGroup, method]);

  useEffect(() => {
    const timeout = setTimeout(() => fetchLogs(), 400);
    return () => clearTimeout(timeout);
  }, [pathSearch]);

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="w-6 h-6 text-red-400" />
        <h1 className="text-2xl font-bold text-white">Error Logs</h1>
        {pagination.total > 0 && (
          <span className="text-sm text-gray-500">({pagination.total} total)</span>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <select
          value={statusGroup}
          onChange={(e) => setStatusGroup(e.target.value)}
          className="px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        >
          <option value="">All Status Codes</option>
          <option value="4xx">4xx Client Errors</option>
          <option value="5xx">5xx Server Errors</option>
        </select>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        >
          <option value="">All Methods</option>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            value={pathSearch}
            onChange={(e) => setPathSearch(e.target.value)}
            placeholder="Search by path..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-400">Loading error logs...</div>
        ) : logs.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No errors found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Time</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Method</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Path</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Message</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">User</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {logs.map((log, i) => (
                  <ErrorRow
                    key={log.id}
                    log={log}
                    index={i}
                    expanded={expandedId === log.id}
                    onToggle={() => setExpandedId(expandedId === log.id ? null : log.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        <PaginationControls
          currentPage={pagination.page}
          totalPages={pagination.totalPages}
          onPageChange={fetchLogs}
          showingInfo={{ total: pagination.total, limit: pagination.limit }}
        />
      </div>
    </div>
  );
}

function ErrorRow({
  log,
  index,
  expanded,
  onToggle,
}: {
  log: ErrorLog;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <motion.tr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.02 }}
        className="hover:bg-gray-800/50 cursor-pointer"
        onClick={onToggle}
      >
        <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">
          {new Date(log.createdAt).toLocaleString()}
        </td>
        <td className="px-6 py-4">
          <span className={`text-sm font-mono font-medium ${getMethodColor(log.method)}`}>
            {log.method}
          </span>
        </td>
        <td className="px-6 py-4 text-sm text-gray-300 font-mono max-w-xs truncate">
          {log.path}
        </td>
        <td className="px-6 py-4">
          <span className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusBadge(log.statusCode)}`}>
            {log.statusCode}
          </span>
        </td>
        <td className="px-6 py-4 text-sm text-gray-400 max-w-xs truncate">
          {log.message}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500">
          {log.userId ?? "-"}
        </td>
        <td className="px-6 py-4">
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </td>
      </motion.tr>
      <AnimatePresence>
        {expanded && (
          <motion.tr
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <td colSpan={7} className="px-6 py-4 bg-gray-800/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 text-xs mb-1">IP Address</p>
                  <p className="text-gray-300 font-mono">{log.ipAddress || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">User Agent</p>
                  <p className="text-gray-300 text-xs truncate">{log.userAgent || "-"}</p>
                </div>
                {log.rawError && (
                  <div className="md:col-span-2">
                    <p className="text-gray-500 text-xs mb-1">Raw Error</p>
                    <pre className="text-red-300 text-xs bg-red-950/30 border border-red-900/30 rounded-lg p-3 overflow-x-auto max-h-48 whitespace-pre-wrap">
                      {log.rawError}
                    </pre>
                  </div>
                )}
                {log.requestBody && Object.keys(log.requestBody).length > 0 && (
                  <div className="md:col-span-2">
                    <p className="text-gray-500 text-xs mb-1">Request Body</p>
                    <pre className="text-gray-300 text-xs bg-gray-900 rounded-lg p-3 overflow-x-auto max-h-40">
                      {JSON.stringify(log.requestBody, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </td>
          </motion.tr>
        )}
      </AnimatePresence>
    </>
  );
}

function getStatusBadge(code: number) {
  if (code >= 500) return "bg-red-900/50 text-red-400";
  if (code === 429) return "bg-orange-900/50 text-orange-400";
  if (code === 401 || code === 403) return "bg-yellow-900/50 text-yellow-400";
  if (code >= 400) return "bg-amber-900/50 text-amber-400";
  return "bg-gray-800 text-gray-400";
}

function getMethodColor(method: string) {
  const colors: Record<string, string> = {
    GET: "text-green-400",
    POST: "text-blue-400",
    PUT: "text-yellow-400",
    PATCH: "text-purple-400",
    DELETE: "text-red-400",
  };
  return colors[method] || "text-gray-400";
}
