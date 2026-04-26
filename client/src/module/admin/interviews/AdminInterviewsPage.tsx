import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  MessageCircle,
  Check,
  X,
  Trash2,
  ExternalLink,
  RefreshCw,
  ArrowUp,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import toast from "../../../components/ui/toast";
import { queryKeys } from "../../../lib/query-keys";
import type { InterviewExperience, InterviewListResponse } from "../../../lib/types";
import {
  deleteExperience,
  listExperiences,
  updateExperience,
} from "../../student/interviews/interviews-api";

const TABS: Array<{ id: "PENDING" | "APPROVED" | "REJECTED"; label: string }> = [
  { id: "PENDING", label: "Pending" },
  { id: "APPROVED", label: "Approved" },
  { id: "REJECTED", label: "Rejected" },
];

export default function AdminInterviewsPage() {
  const qc = useQueryClient();
  const [status, setStatus] = useState<"PENDING" | "APPROVED" | "REJECTED">("PENDING");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [preview, setPreview] = useState<InterviewExperience | null>(null);

  const queryParams = useMemo(
    () => ({
      page,
      limit: 20,
      status,
      search: search || undefined,
      sort: "recent" as const,
    }),
    [page, status, search],
  );

  const { data, isLoading } = useQuery<InterviewListResponse>({
    queryKey: queryKeys.interviews.list({ admin: 1, status, page, search }),
    queryFn: () => listExperiences(queryParams),
  });

  const invalidate = () => {
    qc.invalidateQueries({ queryKey: queryKeys.interviews.all });
  };

  const approveMutation = useMutation({
    mutationFn: (id: number) => updateExperience(id, { status: "APPROVED" }),
    onSuccess: () => {
      toast.success("Approved");
      invalidate();
    },
    onError: () => toast.error("Failed to approve"),
  });

  const rejectMutation = useMutation({
    mutationFn: (id: number) => updateExperience(id, { status: "REJECTED" }),
    onSuccess: () => {
      toast.success("Rejected");
      invalidate();
    },
    onError: () => toast.error("Failed to reject"),
  });

  const resetMutation = useMutation({
    mutationFn: (id: number) => updateExperience(id, { status: "PENDING" }),
    onSuccess: () => {
      toast.success("Moved back to pending");
      invalidate();
    },
    onError: () => toast.error("Failed"),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteExperience(id),
    onSuccess: () => {
      toast.success("Deleted");
      invalidate();
    },
    onError: () => toast.error("Failed to delete"),
  });

  const experiences = data?.experiences ?? [];
  const totalPages = data?.pagination.totalPages ?? 1;

  return (
    <div>
      <SEO title="Interview Experiences" noIndex />

      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <MessageCircle className="w-6 h-6" /> Interview Experiences
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Moderate student-submitted interview experiences. Approve to publish.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              setStatus(t.id);
              setPage(1);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              status === t.id
                ? "bg-indigo-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search role, company, tips..."
          className="w-full max-w-md px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500"
        />
      </div>

      {/* Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-950 text-gray-400 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Company · Role</th>
                <th className="px-4 py-3 text-left">Author</th>
                <th className="px-4 py-3 text-left">Outcome</th>
                <th className="px-4 py-3 text-left">Difficulty</th>
                <th className="px-4 py-3 text-left">Rounds</th>
                <th className="px-4 py-3 text-left">Submitted</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : experiences.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                    Nothing in {status.toLowerCase()}.
                  </td>
                </tr>
              ) : (
                experiences.map((e) => (
                  <tr key={e.id} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-medium text-white">{e.company.name}</div>
                      <div className="text-xs text-gray-500">{e.role}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      {e.isAnonymous ? (
                        <span className="text-gray-500 italic">Anonymous</span>
                      ) : (
                        e.user?.name ?? "-"
                      )}
                      {e.user?.college ? (
                        <div className="text-[10px] text-gray-500">{e.user.college}</div>
                      ) : null}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-medium ${
                          e.outcome === "SELECTED"
                            ? "bg-emerald-900/40 text-emerald-400"
                            : e.outcome === "REJECTED"
                            ? "bg-red-900/40 text-red-400"
                            : "bg-gray-800 text-gray-400"
                        }`}
                      >
                        {e.outcome}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-300">{e.difficulty}</td>
                    <td className="px-4 py-3 text-gray-300">{e.totalRounds}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">
                      {new Date(e.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-1">
                        <button
                          onClick={() => setPreview(e)}
                          className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
                          title="Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        {e.status !== "APPROVED" ? (
                          <button
                            onClick={() => approveMutation.mutate(e.id)}
                            className="p-1.5 text-gray-400 hover:text-emerald-400 hover:bg-gray-800 rounded transition-colors"
                            title="Approve"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        ) : null}
                        {e.status !== "REJECTED" ? (
                          <button
                            onClick={() => rejectMutation.mutate(e.id)}
                            className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-gray-800 rounded transition-colors"
                            title="Reject"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        ) : null}
                        {e.status !== "PENDING" ? (
                          <button
                            onClick={() => resetMutation.mutate(e.id)}
                            className="p-1.5 text-gray-400 hover:text-amber-400 hover:bg-gray-800 rounded transition-colors"
                            title="Move back to pending"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                        ) : null}
                        <button
                          onClick={() => {
                            if (confirm("Delete this experience permanently?"))
                              deleteMutation.mutate(e.id);
                          }}
                          className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-gray-800 rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 ? (
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1.5 rounded text-sm text-gray-300 bg-gray-800 disabled:opacity-40 hover:bg-gray-700 transition-colors"
          >
            Prev
          </button>
          <span className="text-sm text-gray-400">
            {page} / {totalPages}
          </span>
          <button
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1.5 rounded text-sm text-gray-300 bg-gray-800 disabled:opacity-40 hover:bg-gray-700 transition-colors"
          >
            Next
          </button>
        </div>
      ) : null}

      {preview ? (
        <PreviewModal
          experience={preview}
          onClose={() => setPreview(null)}
          onApprove={() => {
            approveMutation.mutate(preview.id);
            setPreview(null);
          }}
          onReject={() => {
            rejectMutation.mutate(preview.id);
            setPreview(null);
          }}
        />
      ) : null}
    </div>
  );
}

function PreviewModal({
  experience,
  onClose,
  onApprove,
  onReject,
}: {
  experience: InterviewExperience;
  onClose: () => void;
  onApprove: () => void;
  onReject: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-y-auto">
      <div className="bg-gray-900 border border-gray-800 rounded-lg w-full max-w-3xl my-8">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div>
            <h2 className="text-lg font-bold text-white">
              {experience.company.name} · {experience.role}
            </h2>
            <div className="text-xs text-gray-500 mt-0.5">
              {experience.interviewYear} · {experience.difficulty} · {experience.outcome}
              {experience.isAnonymous ? " · Anonymous" : ""}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-5">
          {experience.rounds.map((r, i) => (
            <div key={i} className="border border-gray-800 rounded-lg p-4">
              <div className="text-sm font-semibold text-white mb-2">
                {r.name}{" "}
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 ml-2">
                  {r.type}
                  {r.durationMins ? ` · ${String(r.durationMins)}m` : ""}
                </span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300">
                {r.questions.map((q, j) => (
                  <li key={j} className="pl-1 leading-relaxed">
                    {q.prompt}
                    {q.topic ? (
                      <span className="ml-2 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                        {q.topic}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
              {r.notes ? (
                <p className="mt-3 text-xs text-gray-400 whitespace-pre-wrap">{r.notes}</p>
              ) : null}
            </div>
          ))}
          {experience.tips ? (
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1">
                Tips
              </div>
              <p className="text-sm text-gray-300 whitespace-pre-wrap">{experience.tips}</p>
            </div>
          ) : null}
          <div className="flex items-center gap-4 pt-3 border-t border-gray-800 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1">
              <ArrowUp className="w-3 h-3" /> {experience.upvotes}
            </span>
            <span>{experience.views} views</span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-gray-800">
          <button
            onClick={onReject}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-red-900/40 text-red-400 hover:bg-red-900/60 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={onApprove}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}
