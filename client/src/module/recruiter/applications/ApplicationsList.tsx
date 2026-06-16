import { useState, useEffect } from "react";
import toast from "../../../components/ui/toast";
import { getStatusColor } from "../../../lib/application-colors";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Filter, Loader2, Upload } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../../lib/axios";
import type { Application, Pagination } from "../../../lib/types";
import { SEO } from "../../../components/SEO";
import { useDebounce } from "../../../hooks/useDebounce";
import { ConfirmDialog } from "../../../components/ui/ConfirmDialog";

export default function ApplicationsList() {
  const { id: jobId } = useParams();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [advancingIds, setAdvancingIds] = useState<Set<number>>(() => new Set());
  const [pendingAdvanceApp, setPendingAdvanceApp] = useState<Application | null>(null);
  const [announcement, setAnnouncement] = useState("");

  // Reset to page 1 when search or filter changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1);
  }, [debouncedSearch, statusFilter]);

  const { data, isLoading } = useQuery({
    queryKey: ["applications", jobId, page, statusFilter, debouncedSearch],
    queryFn: async () => {
      const params = new URLSearchParams({ page: String(page), limit: "10" });
      if (debouncedSearch.trim()) params.set("search", debouncedSearch.trim());
      if (statusFilter) params.set("status", statusFilter);
      const res = await api.get(`/recruiter/jobs/${jobId}/applications?${params}`);
      return {
        applications: res.data.applications as Application[],
        pagination: res.data.pagination as Pagination,
      };
    },
  });

  const applications = data?.applications ?? [];
  const pagination = data?.pagination ?? null;

  const handleStatusChange = async (appId: number, status: string) => {
    if (updatingId === appId) return;
    setUpdatingId(appId);
    setAnnouncement("");
    try {
      await api.patch(`/recruiter/applications/${appId}/status`, { status });
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      toast.success("Status updated");
      setAnnouncement(`Application status successfully updated to ${status.replace("_", " ").toLowerCase()}.`);
    } catch {
      toast.error("Failed to update status");
      setAnnouncement("Failed to update application status.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleAdvance = async (appId: number) => {
    if (advancingIds.has(appId)) return;
    setAdvancingIds((current) => new Set(current).add(appId));
    setAnnouncement("");
    try {
      await api.patch(`/recruiter/applications/${appId}/advance`);
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      toast.success("Application advanced");
      setAnnouncement("Application successfully advanced.");
      setPendingAdvanceApp(null);
    } catch {
      toast.error("Failed to advance application");
      setAnnouncement("Failed to advance application.");
    } finally {
      setAdvancingIds((current) => {
        const next = new Set(current);
        next.delete(appId);
        return next;
      });
    }
  };

  return (
    <div>
      <SEO title="Applications" noIndex />
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
      <ConfirmDialog
        open={pendingAdvanceApp !== null}
        title="Advance Candidate?"
        confirmLabel="Confirm Advance"
        cancelLabel="Cancel"
        confirmVariant="primary"
        loading={pendingAdvanceApp ? advancingIds.has(pendingAdvanceApp.id) : false}
        onCancel={() => setPendingAdvanceApp(null)}
        onConfirm={() => {
          if (pendingAdvanceApp && !advancingIds.has(pendingAdvanceApp.id)) {
            handleAdvance(pendingAdvanceApp.id);
          }
        }}
      >
        {pendingAdvanceApp && (
          <div className="space-y-4">
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Are you sure you want to advance <strong className="font-semibold text-stone-900 dark:text-white">{pendingAdvanceApp.student?.name}</strong> to the next hiring stage?
            </p>
            <p className="text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 p-2.5 rounded-lg border border-amber-200/30 dark:border-amber-900/30 leading-normal">
              Warning: Advancing this candidate will update their hiring stage and create a new round submission.
            </p>
          </div>
        )}
      </ConfirmDialog>
      <Link to="/recruiters/jobs" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white mb-4 no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to Jobs
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-between gap-4">
        Applications
        <Link
          to={`/recruiters/jobs/${jobId}/import-candidates`}
          className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 bg-black dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
        >
          <Upload className="w-4 h-4" /> Import Candidates
        </Link>
      </h1>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search applicants"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 text-sm dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            placeholder="Search by name or email..."
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
            className="px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white">
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

      {isLoading ? (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="animate-pulse">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800"
              >
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-3 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="flex gap-2">
                  <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                  <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : applications.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-500">No applications found</div>
      ) : (
        <>
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th scope="col" className="text-left text-xs font-medium text-gray-500 dark:text-gray-500 uppercase px-6 py-3">Candidate</th>
                  <th scope="col" className="text-left text-xs font-medium text-gray-500 dark:text-gray-500 uppercase px-6 py-3">Status</th>
                  <th scope="col" className="text-left text-xs font-medium text-gray-500 dark:text-gray-500 uppercase px-6 py-3">Rounds</th>
                  <th scope="col" className="text-left text-xs font-medium text-gray-500 dark:text-gray-500 uppercase px-6 py-3">Applied</th>
                  <th scope="col" className="text-left text-xs font-medium text-gray-500 dark:text-gray-500 uppercase px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {applications.map((app, i) => {
                  const isAdvancing = advancingIds.has(app.id);
                  return (
                    <motion.tr key={app.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-6 py-4">
                        <Link to={`/recruiters/applications/${app.id}`} className="no-underline">
                        <p
                          className="font-medium text-gray-900 dark:text-white block max-w-[200px] truncate"
                          title={app.student?.name}
                        >
                          {app.student?.name}
                        </p>

                        <p
                          className="text-sm text-gray-500 dark:text-gray-500 block max-w-[200px] truncate"
                          title={app.student?.email}
                        >
                          {app.student?.email}
                        </p>
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <div className="relative inline-flex items-center">
                          <select
                            value={app.status}
                            disabled={updatingId === app.id}
                            onChange={(e) => handleStatusChange(app.id, e.target.value)}
                            className={`text-xs px-2.5 py-1 rounded-full font-medium border-0 ${getStatusColor(app.status)} ${updatingId === app.id ? "opacity-50 cursor-not-allowed" : ""}`}>
                            <option value="APPLIED">Applied</option>
                            <option value="IN_PROGRESS">In Progress</option>
                            <option value="SHORTLISTED">Shortlisted</option>
                            <option value="REJECTED">Rejected</option>
                            <option value="HIRED">Hired</option>
                            <option value="WITHDRAWN">Withdrawn</option>
                          </select>
                          {updatingId === app.id && (
                            <svg className="animate-spin ml-1.5 h-3 w-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 12 0 12 12H4z" />
                            </svg>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-500">
                        {app.roundSubmissions?.length || 0} completed
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-500">
                        {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(app.createdAt))}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button onClick={() => setPendingAdvanceApp(app)}
                            disabled={isAdvancing}
                            className={`inline-flex min-w-21.5 items-center justify-center gap-1.5 text-xs px-3 py-1.5 bg-black dark:bg-white text-white dark:text-gray-950 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors ${isAdvancing ? "cursor-not-allowed opacity-70" : ""}`}>
                            {isAdvancing && <Loader2 className="h-3 w-3 animate-spin" />}
                            {isAdvancing ? "Advancing" : "Advance"}
                          </button>
                          <Link to={`/recruiters/applications/${app.id}`}
                            className="text-xs px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 no-underline">
                            View
                          </Link>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}
                aria-label="Go to previous page"
                className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-30 dark:text-gray-300">Prev</button>
              <span className="text-sm text-gray-500 dark:text-gray-500">Page {page} of {pagination.totalPages}</span>
              <button onClick={() => setPage(Math.min(pagination.totalPages, page + 1))} disabled={page === pagination.totalPages}
                aria-label={`Go to next page, page ${page + 1}`}
                className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-30 dark:text-gray-300">Next</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}