import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Radar,
  Plus,
  RefreshCw,
  Trash2,
  Edit3,
  X,
  Zap,
  Brush,
  ExternalLink,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import toast from "../../../components/ui/toast";
import { queryKeys } from "../../../lib/query-keys";
import type { FundingSignal, FundingSignalListResponse } from "../../../lib/types";
import {
  cleanupNoise,
  createSignal,
  deleteSignal,
  getIngestLogs,
  getSignalSources,
  querySignals,
  triggerIngest,
  updateSignal,
  type SignalCreatePayload,
} from "../../student/signals/signals-api";

type FormState = {
  companyName: string;
  sourceUrl: string;
  companyWebsite: string;
  logoUrl: string;
  fundingRound: string;
  fundingAmount: string;
  amountUsd: string;
  announcedAt: string;
  hqLocation: string;
  industry: string;
  description: string;
  investors: string;
  tags: string;
  careersUrl: string;
  hiringSignal: boolean;
};

const emptyForm: FormState = {
  companyName: "",
  sourceUrl: "",
  companyWebsite: "",
  logoUrl: "",
  fundingRound: "",
  fundingAmount: "",
  amountUsd: "",
  announcedAt: "",
  hqLocation: "",
  industry: "",
  description: "",
  investors: "",
  tags: "",
  careersUrl: "",
  hiringSignal: false,
};

function toPayload(s: FormState): SignalCreatePayload {
  const clean = (v: string) => (v.trim() === "" ? null : v.trim());
  const payload: SignalCreatePayload = {
    companyName: s.companyName.trim(),
    sourceUrl: s.sourceUrl.trim(),
    companyWebsite: clean(s.companyWebsite),
    logoUrl: clean(s.logoUrl),
    fundingRound: clean(s.fundingRound),
    fundingAmount: clean(s.fundingAmount),
    amountUsd: clean(s.amountUsd),
    hqLocation: clean(s.hqLocation),
    industry: clean(s.industry),
    description: clean(s.description),
    careersUrl: clean(s.careersUrl),
    hiringSignal: s.hiringSignal,
    investors: s.investors
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean),
    tags: s.tags
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean),
  };
  if (s.announcedAt) payload.announcedAt = new Date(s.announcedAt).toISOString();
  return payload;
}

function signalToForm(sig: FundingSignal): FormState {
  return {
    companyName: sig.companyName,
    sourceUrl: sig.sourceUrl,
    companyWebsite: sig.companyWebsite ?? "",
    logoUrl: sig.logoUrl ?? "",
    fundingRound: sig.fundingRound ?? "",
    fundingAmount: sig.fundingAmount ?? "",
    amountUsd: sig.amountUsd ?? "",
    announcedAt: sig.announcedAt ? sig.announcedAt.slice(0, 10) : "",
    hqLocation: sig.hqLocation ?? "",
    industry: sig.industry ?? "",
    description: sig.description ?? "",
    investors: sig.investors.join(", "),
    tags: sig.tags.join(", "),
    careersUrl: sig.careersUrl ?? "",
    hiringSignal: sig.hiringSignal,
  };
}

export default function AdminSignalsPage() {
  const qc = useQueryClient();
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<"ACTIVE" | "STALE" | "ARCHIVED" | "ALL">(
    "ACTIVE",
  );
  const [sourceFilter, setSourceFilter] = useState("");
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<FundingSignal | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);

  const queryParams = useMemo(
    () => ({
      page,
      limit: 20,
      status: statusFilter,
      source: sourceFilter || undefined,
      search: search || undefined,
    }),
    [page, statusFilter, sourceFilter, search],
  );

  const { data, isLoading } = useQuery<FundingSignalListResponse>({
    queryKey: queryKeys.signals.list({ admin: 1, ...queryParams }),
    queryFn: () =>
      querySignals({
        page: queryParams.page,
        limit: queryParams.limit,
        status: queryParams.status,
        source: queryParams.source,
        search: queryParams.search,
      }),
  });

  const { data: sourcesData } = useQuery({
    queryKey: queryKeys.signals.sources(),
    queryFn: () => getSignalSources(),
    staleTime: 60 * 60 * 1000,
  });

  const { data: logsData, refetch: refetchLogs } = useQuery({
    queryKey: queryKeys.signals.stats(),
    queryFn: () => getIngestLogs(),
  });

  const invalidate = () => {
    qc.invalidateQueries({ queryKey: queryKeys.signals.all });
  };

  const createMutation = useMutation({
    mutationFn: (p: SignalCreatePayload) => createSignal(p),
    onSuccess: () => {
      toast.success("Signal created");
      setModalOpen(false);
      setForm(emptyForm);
      invalidate();
    },
    onError: () => toast.error("Failed to create signal"),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: SignalCreatePayload }) =>
      updateSignal(id, payload),
    onSuccess: () => {
      toast.success("Signal updated");
      setModalOpen(false);
      setEditing(null);
      setForm(emptyForm);
      invalidate();
    },
    onError: () => toast.error("Failed to update signal"),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteSignal(id),
    onSuccess: () => {
      toast.success("Signal deleted");
      invalidate();
    },
    onError: () => toast.error("Failed to delete signal"),
  });

  const triggerMutation = useMutation({
    mutationFn: () => triggerIngest(),
    onSuccess: (res) => {
      toast.success(`Ingest complete: ${String(res.results.length)} sources`);
      invalidate();
      refetchLogs();
    },
    onError: () => toast.error("Ingest failed"),
  });

  const cleanupMutation = useMutation({
    mutationFn: () => cleanupNoise(),
    onSuccess: (res) => {
      toast.success(`Removed ${String(res.removed)} noisy rows`);
      invalidate();
    },
    onError: () => toast.error("Cleanup failed"),
  });

  const archiveMutation = useMutation({
    mutationFn: (id: number) => updateSignal(id, { status: "ARCHIVED" }),
    onSuccess: () => {
      toast.success("Signal archived");
      invalidate();
    },
    onError: () => toast.error("Failed to archive"),
  });

  const openNew = () => {
    setEditing(null);
    setForm(emptyForm);
    setModalOpen(true);
  };
  const openEdit = (sig: FundingSignal) => {
    setEditing(sig);
    setForm(signalToForm(sig));
    setModalOpen(true);
  };

  const submit = () => {
    if (!form.companyName.trim() || !form.sourceUrl.trim()) {
      toast.error("Company name and source URL are required");
      return;
    }
    const payload = toPayload(form);
    if (editing) updateMutation.mutate({ id: editing.id, payload });
    else createMutation.mutate(payload);
  };

  const signals = data?.signals ?? [];
  const totalPages = data?.pagination.totalPages ?? 1;
  const sources = sourcesData?.sources ?? [];
  const logs = logsData?.logs ?? [];

  return (
    <div>
      <SEO title="Funding Signals" noIndex />
      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Radar className="w-6 h-6" /> Funding Signals
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage ingested funding + hiring signals, trigger ingest, and curate manually.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => triggerMutation.mutate()}
            disabled={triggerMutation.isPending}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-800 text-gray-200 hover:bg-gray-700 disabled:opacity-50 transition-colors"
          >
            <Zap className="w-4 h-4" />
            {triggerMutation.isPending ? "Running..." : "Trigger ingest"}
          </button>
          <button
            onClick={() => cleanupMutation.mutate()}
            disabled={cleanupMutation.isPending}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-800 text-gray-200 hover:bg-gray-700 disabled:opacity-50 transition-colors"
          >
            <Brush className="w-4 h-4" />
            Cleanup noise
          </button>
          <button
            onClick={openNew}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New signal
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search company or description..."
          className="flex-1 min-w-[200px] px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500"
        />
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value as typeof statusFilter);
            setPage(1);
          }}
          className="px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500"
        >
          <option value="ACTIVE">Active</option>
          <option value="STALE">Stale</option>
          <option value="ARCHIVED">Archived</option>
          <option value="ALL">All statuses</option>
        </select>
        <select
          value={sourceFilter}
          onChange={(e) => {
            setSourceFilter(e.target.value);
            setPage(1);
          }}
          className="px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500"
        >
          <option value="">All sources</option>
          {sources.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-950 text-gray-400 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Company</th>
                <th className="px-4 py-3 text-left">Source</th>
                <th className="px-4 py-3 text-left">Round / Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Announced</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : signals.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                    No signals match your filters.
                  </td>
                </tr>
              ) : (
                signals.map((s) => (
                  <tr key={s.id} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-medium text-white">{s.companyName}</div>
                      {s.industry ? (
                        <div className="text-xs text-gray-500">{s.industry}</div>
                      ) : null}
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      {sources.find((x) => x.id === s.source)?.name ?? s.source}
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      {s.fundingRound || ","}
                      {s.fundingAmount ? (
                        <span className="ml-1 text-emerald-400">{s.fundingAmount}</span>
                      ) : null}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-medium ${
                          s.status === "ACTIVE"
                            ? "bg-emerald-900/40 text-emerald-400"
                            : s.status === "STALE"
                            ? "bg-amber-900/40 text-amber-400"
                            : "bg-gray-800 text-gray-400"
                        }`}
                      >
                        {s.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400">
                      {new Date(s.announcedAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-1">
                        <a
                          href={s.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
                          title="Open original"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => openEdit(s)}
                          className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        {s.status !== "ARCHIVED" ? (
                          <button
                            onClick={() => archiveMutation.mutate(s.id)}
                            className="p-1.5 text-gray-400 hover:text-amber-400 hover:bg-gray-800 rounded transition-colors"
                            title="Archive"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                        ) : null}
                        <button
                          onClick={() => {
                            if (confirm(`Delete signal for ${s.companyName}?`))
                              deleteMutation.mutate(s.id);
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

      {/* Pagination */}
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

      {/* Ingest logs */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
        <h2 className="text-sm font-semibold text-white mb-3">Recent ingest logs</h2>
        {logs.length === 0 ? (
          <p className="text-xs text-gray-500">No ingest runs yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="text-gray-500 uppercase tracking-wider">
                <tr>
                  <th className="px-2 py-1.5 text-left">When</th>
                  <th className="px-2 py-1.5 text-left">Source</th>
                  <th className="px-2 py-1.5 text-left">Status</th>
                  <th className="px-2 py-1.5 text-right">Found</th>
                  <th className="px-2 py-1.5 text-right">Created</th>
                  <th className="px-2 py-1.5 text-right">Updated</th>
                  <th className="px-2 py-1.5 text-left">Error</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-300">
                {logs.slice(0, 20).map((l) => (
                  <tr key={l.id}>
                    <td className="px-2 py-1.5">
                      {new Date(l.createdAt).toLocaleString()}
                    </td>
                    <td className="px-2 py-1.5">{l.source}</td>
                    <td
                      className={`px-2 py-1.5 ${
                        l.status === "SUCCESS"
                          ? "text-emerald-400"
                          : l.status === "PARTIAL"
                          ? "text-amber-400"
                          : "text-red-400"
                      }`}
                    >
                      {l.status}
                    </td>
                    <td className="px-2 py-1.5 text-right">{l.signalsFound}</td>
                    <td className="px-2 py-1.5 text-right">{l.signalsCreated}</td>
                    <td className="px-2 py-1.5 text-right">{l.signalsUpdated}</td>
                    <td className="px-2 py-1.5 text-red-400 truncate max-w-xs">
                      {l.error ?? ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen ? (
        <SignalModal
          editing={editing}
          form={form}
          setForm={setForm}
          onClose={() => {
            setModalOpen(false);
            setEditing(null);
            setForm(emptyForm);
          }}
          onSubmit={submit}
          submitting={createMutation.isPending || updateMutation.isPending}
        />
      ) : null}
    </div>
  );
}

interface ModalProps {
  editing: FundingSignal | null;
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  onClose: () => void;
  onSubmit: () => void;
  submitting: boolean;
}

function SignalModal({ editing, form, setForm, onClose, onSubmit, submitting }: ModalProps) {
  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-y-auto">
      <div className="bg-gray-900 border border-gray-800 rounded-lg w-full max-w-2xl my-8">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <h2 className="text-lg font-bold text-white">
            {editing ? "Edit signal" : "New funding signal"}
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Company name *">
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => set("companyName", e.target.value)}
                className="admin-input"
              />
            </Field>
            <Field label="Source URL *" hint="Link to the announcement or HN post">
              <input
                type="url"
                value={form.sourceUrl}
                onChange={(e) => set("sourceUrl", e.target.value)}
                className="admin-input"
              />
            </Field>
            <Field label="Company website">
              <input
                type="url"
                value={form.companyWebsite}
                onChange={(e) => set("companyWebsite", e.target.value)}
                className="admin-input"
              />
            </Field>
            <Field label="Logo URL">
              <input
                type="url"
                value={form.logoUrl}
                onChange={(e) => set("logoUrl", e.target.value)}
                className="admin-input"
              />
            </Field>
            <Field label="Funding round" hint="e.g. Seed, Series A">
              <input
                type="text"
                value={form.fundingRound}
                onChange={(e) => set("fundingRound", e.target.value)}
                className="admin-input"
              />
            </Field>
            <Field label="Amount (display)" hint="e.g. $10M">
              <input
                type="text"
                value={form.fundingAmount}
                onChange={(e) => set("fundingAmount", e.target.value)}
                className="admin-input"
              />
            </Field>
            <Field label="Amount USD (numeric)" hint="Integer cents or dollars, used for sort">
              <input
                type="text"
                inputMode="numeric"
                value={form.amountUsd}
                onChange={(e) => set("amountUsd", e.target.value.replace(/[^0-9]/g, ""))}
                className="admin-input"
              />
            </Field>
            <Field label="Announced">
              <input
                type="date"
                value={form.announcedAt}
                onChange={(e) => set("announcedAt", e.target.value)}
                className="admin-input"
              />
            </Field>
            <Field label="HQ location">
              <input
                type="text"
                value={form.hqLocation}
                onChange={(e) => set("hqLocation", e.target.value)}
                className="admin-input"
              />
            </Field>
            <Field label="Industry">
              <input
                type="text"
                value={form.industry}
                onChange={(e) => set("industry", e.target.value)}
                className="admin-input"
              />
            </Field>
            <Field label="Careers URL" hint="Direct link to jobs page">
              <input
                type="url"
                value={form.careersUrl}
                onChange={(e) => set("careersUrl", e.target.value)}
                className="admin-input"
              />
            </Field>
            <Field label="Investors" hint="Comma-separated">
              <input
                type="text"
                value={form.investors}
                onChange={(e) => set("investors", e.target.value)}
                className="admin-input"
              />
            </Field>
            <Field label="Tags" hint="Comma-separated">
              <input
                type="text"
                value={form.tags}
                onChange={(e) => set("tags", e.target.value)}
                className="admin-input"
              />
            </Field>
            <div className="flex items-center gap-2 pt-6">
              <input
                id="hiringSignal"
                type="checkbox"
                checked={form.hiringSignal}
                onChange={(e) => set("hiringSignal", e.target.checked)}
                className="w-4 h-4 rounded bg-gray-800 border-gray-700"
              />
              <label htmlFor="hiringSignal" className="text-sm text-gray-300">
                Likely hiring
              </label>
            </div>
          </div>
          <Field label="Description">
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              rows={4}
              className="admin-input resize-y"
            />
          </Field>
        </div>
        <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-gray-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            disabled={submitting}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50 transition-colors"
          >
            {submitting ? "Saving..." : editing ? "Save changes" : "Create signal"}
          </button>
        </div>
      </div>

      <style>{`
        .admin-input {
          width: 100%;
          padding: 0.5rem 0.75rem;
          background: #030712;
          border: 1px solid #1f2937;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: white;
        }
        .admin-input:focus {
          outline: none;
          border-color: #6366f1;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-400 mb-1.5">{label}</label>
      {children}
      {hint ? <p className="text-[10px] text-gray-500 mt-1">{hint}</p> : null}
    </div>
  );
}
