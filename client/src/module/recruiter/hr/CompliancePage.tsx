import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Plus,
  AlertTriangle,
  ExternalLink,
  Search,
  FileText,
  List,
  Clock,
} from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRModal from "./components/HRModal";
import type { ComplianceDocument } from "./hr-types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

type Tab = "documents" | "expiring";

const inputClass =
  "w-full px-3 py-2 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors";

const labelClass =
  "block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function daysUntil(iso: string): number {
  const diff = new Date(iso).getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function CompliancePage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<Tab>("documents");
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    documentUrl: "",
    expiryDate: "",
    isRequired: true,
  });
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  const { data: documents, isLoading: loadingDocs } = useQuery({
    queryKey: hrKeys.compliance.list(),
    queryFn: async () => {
      const res = await api.get("/hr/compliance");
      return res.data as ComplianceDocument[];
    },
  });

  const { data: expiring, isLoading: loadingExpiring } = useQuery({
    queryKey: hrKeys.compliance.expiring(30),
    queryFn: async () => {
      const res = await api.get("/hr/compliance/expiring?days=30");
      return res.data as ComplianceDocument[];
    },
    enabled: tab === "expiring",
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/compliance", {
        ...form,
        expiryDate: form.expiryDate ? new Date(form.expiryDate).toISOString() : undefined,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "compliance"] });
      setShowCreate(false);
      setForm({
        name: "",
        category: "",
        description: "",
        documentUrl: "",
        expiryDate: "",
        isRequired: true,
      });
    },
    onSettled: () => setSaving(false),
  });

  const baseList = tab === "documents" ? documents ?? [] : expiring ?? [];
  const isLoading = tab === "documents" ? loadingDocs : loadingExpiring;

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return baseList;
    return baseList.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        (d.description || "").toLowerCase().includes(q),
    );
  }, [baseList, search]);

  const totals = useMemo(() => {
    const list = documents ?? [];
    const total = list.length;
    const required = list.filter((d) => d.isRequired).length;
    const expiringSoon =
      expiring?.length ??
      list.filter(
        (d) => d.expiryDate && daysUntil(d.expiryDate) <= 30 && daysUntil(d.expiryDate) >= 0,
      ).length;
    return { total, required, expiringSoon };
  }, [documents, expiring]);

  return (
    <div className="max-w-7xl mx-auto">
      <SEO title="Compliance" noIndex />

      <header className="mt-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            recruiter / hr / compliance
          </span>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Policies &{" "}
              <span className="relative inline-block">
                documents.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
                />
              </span>
            </h1>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
              Everything the team needs to sign, renew, or keep on file. Expiring items bubble up first.
            </p>
          </div>

          <Button variant="primary" size="md" onClick={() => setShowCreate(true)}>
            <Plus className="w-4 h-4" />
            Add document
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
          <Stat label="total" value={totals.total} />
          <Stat label="required" value={totals.required} dotClass="bg-red-500" />
          <Stat
            label="expiring 30d"
            value={totals.expiringSoon}
            dotClass="bg-amber-500"
          />
        </div>
      </header>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-950 p-0.5">
          {(
            [
              { key: "documents", label: "All documents", icon: List },
              { key: "expiring", label: "Expiring soon", icon: Clock },
            ] as const
          ).map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
                  active
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                }`}
              >
                <t.icon className="w-3.5 h-3.5" />
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="relative flex-1 min-w-60 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, category, description"
            className="w-full pl-9 pr-3 py-2 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="h-1 w-1 bg-lime-400" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          {tab === "documents" ? "documents on file" : "expiring within 30 days"}
        </span>
      </div>

      {isLoading ? (
        <ListSkeleton />
      ) : filtered.length === 0 ? (
        <EmptyState
          title={
            tab === "expiring"
              ? "Nothing expiring soon"
              : baseList.length === 0
                ? "No compliance documents"
                : "No matches"
          }
          description={
            tab === "expiring"
              ? "You're clear for the next 30 days."
              : baseList.length === 0
                ? "Add policies, training records, or safety docs to start tracking."
                : "Try a different search term."
          }
          onAction={() => setShowCreate(true)}
        />
      ) : (
        <div className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-stone-950 divide-y divide-stone-100 dark:divide-white/5">
          {filtered.map((doc, i) => {
            const days = doc.expiryDate ? daysUntil(doc.expiryDate) : null;
            const expiringSoon = days !== null && days <= 30 && days >= 0;
            const expired = days !== null && days < 0;
            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02, duration: 0.2 }}
                className="flex items-start gap-4 px-4 py-3 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors"
              >
                <div className="mt-0.5 w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-stone-500" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 truncate">
                      {doc.name}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      <span className="h-1 w-1 bg-stone-400" />
                      {doc.category}
                    </span>
                    {doc.isRequired && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-red-600 dark:text-red-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        required
                      </span>
                    )}
                    {expired && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-red-600 dark:text-red-400">
                        <AlertTriangle className="w-3 h-3" />
                        expired
                      </span>
                    )}
                    {!expired && expiringSoon && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400">
                        <AlertTriangle className="w-3 h-3" />
                        {days === 0 ? "due today" : `${days}d left`}
                      </span>
                    )}
                  </div>
                  {doc.description && (
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-1">
                      {doc.description}
                    </p>
                  )}
                  <div className="mt-1 flex items-center gap-3 flex-wrap text-[11px] text-stone-500">
                    {doc.expiryDate && (
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3 text-stone-400" />
                        expires {formatDate(doc.expiryDate)}
                      </span>
                    )}
                    {doc.acknowledgedBy?.length > 0 && (
                      <span className="inline-flex items-center gap-1">
                        <FileText className="w-3 h-3 text-stone-400" />
                        {doc.acknowledgedBy.length} acknowledged
                      </span>
                    )}
                  </div>
                </div>

                {doc.documentUrl && (
                  <a
                    href={doc.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open document"
                    className="shrink-0 p-1.5 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors no-underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      )}

      <HRModal
        open={showCreate}
        onClose={() => setShowCreate(false)}
        title="Add Compliance Document"
        onSubmit={() => createMutation.mutate()}
        loading={saving}
      >
        <div className="space-y-4">
          <div>
            <label className={labelClass}>document name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              placeholder="Anti-harassment policy"
            />
          </div>
          <div>
            <label className={labelClass}>category</label>
            <input
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className={inputClass}
              placeholder="Legal, Safety, Training"
            />
          </div>
          <div>
            <label className={labelClass}>description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={2}
              className={`${inputClass} resize-none`}
              placeholder="Short note about what this covers."
            />
          </div>
          <div>
            <label className={labelClass}>document url</label>
            <input
              value={form.documentUrl}
              onChange={(e) => setForm({ ...form, documentUrl: e.target.value })}
              className={inputClass}
              placeholder="https://..."
            />
          </div>
          <div>
            <label className={labelClass}>expiry date</label>
            <input
              type="date"
              value={form.expiryDate}
              onChange={(e) => setForm({ ...form, expiryDate: e.target.value })}
              className={inputClass}
            />
          </div>
          <label className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              checked={form.isRequired}
              onChange={(e) => setForm({ ...form, isRequired: e.target.checked })}
              className="rounded accent-lime-400"
            />
            <span className="text-sm text-stone-700 dark:text-stone-300">
              Required for all employees
            </span>
          </label>
        </div>
      </HRModal>
    </div>
  );
}

function Stat({
  label,
  value,
  dotClass,
}: {
  label: string;
  value: number | string;
  dotClass?: string;
}) {
  return (
    <div className="bg-white dark:bg-stone-950 px-4 py-3">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
        {dotClass && <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />}
        {label}
      </div>
      <div className="mt-0.5 text-lg font-bold tabular-nums text-stone-900 dark:text-stone-50">
        {value}
      </div>
    </div>
  );
}

function ListSkeleton() {
  return (
    <div className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-stone-950 divide-y divide-stone-100 dark:divide-white/5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-start gap-4 px-4 py-3 animate-pulse">
          <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-900" />
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-1/3 rounded bg-stone-100 dark:bg-stone-900" />
            <div className="h-2.5 w-2/3 rounded bg-stone-100 dark:bg-stone-900" />
            <div className="h-2.5 w-1/2 rounded bg-stone-100 dark:bg-stone-900" />
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState({
  title,
  description,
  onAction,
}: {
  title: string;
  description: string;
  onAction: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-950">
      <div className="w-12 h-12 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center mb-4">
        <ShieldCheck className="w-5 h-5 text-stone-400" />
      </div>
      <h3 className="text-base font-semibold text-stone-900 dark:text-stone-50 mb-1">
        {title}
      </h3>
      <p className="text-sm text-stone-500 max-w-xs mb-5">{description}</p>
      <Button variant="primary" size="sm" onClick={onAction}>
        <Plus className="w-4 h-4" />
        Add document
      </Button>
    </div>
  );
}
