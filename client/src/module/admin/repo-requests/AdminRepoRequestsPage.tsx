import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitPullRequest, Check, X, ExternalLink, Clock, User } from "lucide-react";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import { LoadingScreen } from "../../../components/LoadingScreen";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import type { RepoRequest, Pagination, RepoDomain, RepoDifficulty } from "../../../lib/types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

const DOMAIN_OPTIONS: RepoDomain[] = [
  "AI",
  "WEB",
  "DEVOPS",
  "MOBILE",
  "BLOCKCHAIN",
  "DATA",
  "SECURITY",
  "CLOUD",
  "GAMING",
  "OTHER",
];

const DIFFICULTY_OPTIONS: RepoDifficulty[] = [
  "BEGINNER",
  "INTERMEDIATE",
  "ADVANCED",
];

type RepoRequestFormState = {
  name: string;
  description: string;
  domain: RepoDomain;
  difficulty: RepoDifficulty;
  tags: string[];
};

type ApprovePayload = Partial<RepoRequestFormState> & {
  adminNote?: string;
};

type RepoRequestCardProps = {
  req: RepoRequest;
  index: number;
  onApprove: (id: number, payload: ApprovePayload) => Promise<void>;
  onReject: (id: number) => Promise<void>;
  selectedIds: number[];
  onToggleSelect: (id: number) => void;
  statusFilter: string;
};

const buildFormState = (req: RepoRequest): RepoRequestFormState => ({
  name: req.name,
  description: req.description,
  domain: req.domain,
  difficulty: req.difficulty,
  tags: req.tags ?? [],
});

const parseTags = (value: string) =>
  value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

const statusBadge = (status: string) => {
  const map: Record<string, string> = {
    PENDING: "bg-amber-900/40 text-amber-400",
    APPROVED: "bg-emerald-900/40 text-emerald-400",
    REJECTED: "bg-red-900/40 text-red-400",
  };
  return map[status] || "bg-gray-800 text-gray-400";
};

export default function AdminRepoRequestsPage() {
  const [requests, setRequests] = useState<RepoRequest[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("PENDING");
  const [page, setPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

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

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setPage(1); }, [statusFilter]);
  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
  useEffect(() => { fetchRequests(); }, [statusFilter, page]);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setSelectedIds([]); }, [statusFilter, page]);

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    const pendingOnPage = requests.filter((r) => r.status === "PENDING").map((r) => r.id);
    const allSelected = pendingOnPage.every((id) => selectedIds.includes(id));
    if (allSelected) {
      setSelectedIds((prev) => prev.filter((id) => !pendingOnPage.includes(id)));
    } else {
      setSelectedIds((prev) => Array.from(new Set([...prev, ...pendingOnPage])));
    }
  };

  const handleApprove = async (id: number, payload: ApprovePayload) => {
    try {
      await api.put(`/opensource/requests/${id}/approve`, payload);
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

  const handleBulkApprove = async () => {
    if (selectedIds.length === 0) return;
    try {
      await api.put("/opensource/requests/bulk", { ids: selectedIds, action: "approve" });
      toast.success(`Successfully approved ${selectedIds.length} repositories`);
      setSelectedIds([]);
      fetchRequests();
    } catch {
      toast.error("Failed to approve selected requests");
    }
  };

  const handleBulkReject = async () => {
    if (selectedIds.length === 0) return;
    try {
      await api.put("/opensource/requests/bulk", { ids: selectedIds, action: "reject" });
      toast.success(`Successfully rejected ${selectedIds.length} requests`);
      setSelectedIds([]);
      fetchRequests();
    } catch {
      toast.error("Failed to reject selected requests");
    }
  };

  const statusTabs = ["PENDING", "APPROVED", "REJECTED"];

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

      {statusFilter === "PENDING" && requests.length > 0 && (
        <div className="flex items-center gap-3 mb-6 bg-gray-800/40 border border-gray-700 p-3 rounded-lg w-fit">
          <input
            type="checkbox"
            id="selectAll"
            className="w-4 h-4 rounded-sm border-gray-600 bg-gray-900 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-gray-900 cursor-pointer"
            checked={
              requests.length > 0 &&
              requests.filter((r) => r.status === "PENDING").map((r) => r.id).every((id) => selectedIds.includes(id))
            }
            onChange={handleSelectAll}
          />
          <label htmlFor="selectAll" className="text-sm text-gray-300 font-medium cursor-pointer select-none">
            Select All on this page
          </label>
        </div>
      )}

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
            <RepoRequestCard
              key={req.id}
              req={req}
              index={i}
              onApprove={handleApprove}
              onReject={handleReject}
              selectedIds={selectedIds}
              onToggleSelect={toggleSelect}
              statusFilter={statusFilter}
            />
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

      {/* Bulk Action Toolbar */}
      {selectedIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 border border-gray-700 px-6 py-4 rounded-xl shadow-xl flex items-center gap-4 z-50 animate-in fade-in slide-in-from-bottom-4">
          <span className="text-sm text-gray-300 font-semibold shrink-0 select-none">
            {selectedIds.length} {selectedIds.length === 1 ? "request" : "requests"} selected
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="destructive"
              size="sm"
              className="flex items-center gap-1 shrink-0"
              onClick={handleBulkReject}
            >
              <X className="w-3.5 h-3.5" /> Reject Selected
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="flex items-center gap-1 shrink-0"
              onClick={handleBulkApprove}
            >
              <Check className="w-3.5 h-3.5" /> Approve Selected
            </Button>
          </div>
          <button
            onClick={() => setSelectedIds([])}
            className="text-xs text-gray-400 hover:text-white font-medium transition-colors cursor-pointer shrink-0 select-none"
          >
            Deselect
          </button>
        </div>
      )}
    </div>
  );
}

const RepoRequestCard = React.memo(function RepoRequestCard({
  req,
  index,
  onApprove,
  onReject,
  selectedIds,
  onToggleSelect,
  statusFilter,
}: RepoRequestCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formState, setFormState] = useState<RepoRequestFormState>(() => buildFormState(req));
  const [adminNote, setAdminNote] = useState(req.adminNote ?? "");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormState(buildFormState(req));
    setAdminNote(req.adminNote ?? "");
    setIsEditing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [req.id, req.updatedAt]);

  const handleApproveClick = () => {
    const payload: ApprovePayload = {};
    const trimmedNote = adminNote.trim();
    if (trimmedNote) {
      payload.adminNote = trimmedNote;
    }

    if (isEditing) {
      payload.name = formState.name.trim();
      payload.description = formState.description.trim();
      payload.domain = formState.domain;
      payload.difficulty = formState.difficulty;
      payload.tags = formState.tags;
    }

    void onApprove(req.id, payload);
  };

  const tagsValue = formState.tags.join(", ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 flex gap-4"
    >
      {statusFilter === "PENDING" && (
        <div className="pt-1.5 select-none shrink-0">
          <input
            type="checkbox"
            checked={selectedIds.includes(req.id)}
            onChange={() => onToggleSelect(req.id)}
            className="w-4 h-4 rounded-sm border-gray-600 bg-gray-900 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-gray-900 cursor-pointer"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base font-bold text-white truncate">
              {req.owner}/{isEditing ? formState.name : req.name}
            </h3>
            <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase ${statusBadge(req.status)}`}>
              {req.status}
            </span>
          </div>
          {!isEditing && (
            <p className="text-sm text-gray-400 line-clamp-2">{req.description}</p>
          )}
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

      {isEditing && (
        <div className="mb-4 grid gap-3">
          <div className="grid gap-1">
            <label className="text-xs font-medium text-gray-500">Repository name</label>
            <input
              value={formState.name}
              onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
              className="w-full rounded-lg border border-gray-700 bg-gray-900/60 px-3 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              placeholder="Repository name"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-xs font-medium text-gray-500">Description</label>
            <textarea
              value={formState.description}
              onChange={(event) => setFormState((prev) => ({ ...prev, description: event.target.value }))}
              className="w-full rounded-lg border border-gray-700 bg-gray-900/60 px-3 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              rows={3}
              placeholder="Short description"
            />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="grid gap-1">
              <label className="text-xs font-medium text-gray-500">Domain</label>
              <select
                value={formState.domain}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, domain: event.target.value as RepoDomain }))
                }
                className="w-full rounded-lg border border-gray-700 bg-gray-900/60 px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              >
                {DOMAIN_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-1">
              <label className="text-xs font-medium text-gray-500">Difficulty</label>
              <select
                value={formState.difficulty}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, difficulty: event.target.value as RepoDifficulty }))
                }
                className="w-full rounded-lg border border-gray-700 bg-gray-900/60 px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              >
                {DIFFICULTY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid gap-1">
            <label className="text-xs font-medium text-gray-500">Tags</label>
            <input
              value={tagsValue}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, tags: parseTags(event.target.value) }))
              }
              className="w-full rounded-lg border border-gray-700 bg-gray-900/60 px-3 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              placeholder="Beginner friendly, hacktoberfest"
            />
            <p className="text-xs text-gray-500">Separate tags with commas.</p>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-3 text-xs">
        <span className="px-2 py-1 rounded-md bg-gray-700 text-gray-300">{req.language}</span>
        <span className="px-2 py-1 rounded-md bg-gray-700 text-gray-300">
          {isEditing ? formState.domain : req.domain}
        </span>
        <span className="px-2 py-1 rounded-md bg-gray-700 text-gray-300">
          {isEditing ? formState.difficulty : req.difficulty}
        </span>
        {req.techStack.map((t) => (
          <span key={t} className="px-2 py-1 rounded-md bg-purple-900/30 text-purple-400">{t}</span>
        ))}
      </div>

      <div className="mb-3 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
        <p className="text-xs font-medium text-gray-500 mb-1">Why this repo?</p>
        <p className="text-sm text-gray-300">{req.reason}</p>
      </div>

      {req.status === "PENDING" && (
        <div className="mb-3 grid gap-1">
          <label className="text-xs font-medium text-gray-500">Admin note (optional)</label>
          <textarea
            value={adminNote}
            onChange={(event) => setAdminNote(event.target.value)}
            rows={2}
            className="w-full rounded-lg border border-gray-700 bg-gray-900/60 px-3 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            placeholder="Add a note for the student"
          />
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <User className="w-3.5 h-3.5" />
          <span>{req.user?.name || "Unknown"} ({req.user?.email})</span>
          <span className="mx-1">-</span>
          <span>{new Date(req.createdAt).toLocaleDateString()}</span>
        </div>

        {req.status === "PENDING" && (
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setIsEditing((prev) => !prev)}
              variant="secondary"
              size="sm"
            >
              {isEditing ? "Cancel editing" : "Edit before approving"}
            </Button>
            <button
              onClick={() => void onReject(req.id)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-900/30 text-red-400 text-xs font-medium hover:bg-red-900/50 transition-colors"
            >
              <X className="w-3.5 h-3.5" /> Reject
            </button>
            <button
              onClick={handleApproveClick}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-900/30 text-emerald-400 text-xs font-medium hover:bg-emerald-900/50 transition-colors"
            >
              <Check className="w-3.5 h-3.5" /> Approve
            </button>
          </div>
        )}
      </div>
      </div>
    </motion.div>
  );
});
