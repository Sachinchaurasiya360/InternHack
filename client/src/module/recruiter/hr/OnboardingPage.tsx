import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlus,
  Plus,
  CheckCircle2,
  Circle,
  Calendar,
  ChevronDown,
  Search,
} from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRModal from "./components/HRModal";
import type { OnboardingChecklist, OnboardingItemStatus } from "./hr-types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

const STATUS_DOT: Record<OnboardingItemStatus, string> = {
  NOT_STARTED: "bg-stone-400",
  IN_PROGRESS: "bg-blue-500",
  COMPLETED: "bg-lime-400",
  OVERDUE: "bg-red-500",
};

const inputClass =
  "w-full px-3 py-2 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors";

const labelClass =
  "block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5";

function labelize(value: string): string {
  return value.replace(/_/g, " ").toLowerCase();
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function OnboardingPage() {
  const queryClient = useQueryClient();
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({
    employeeId: "",
    targetDate: "",
    items: "IT setup\nID card\nBank details\nWelcome kit\nTeam introduction",
  });
  const [saving, setSaving] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const { data: checklists, isLoading } = useQuery({
    queryKey: hrKeys.onboarding.list(),
    queryFn: async () => {
      const res = await api.get("/hr/onboarding");
      return res.data as OnboardingChecklist[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      const items = form.items
        .split("\n")
        .filter(Boolean)
        .map((title) => ({ title: title.trim(), completed: false }));
      await api.post("/hr/onboarding", {
        employeeId: Number(form.employeeId),
        targetDate: new Date(form.targetDate).toISOString(),
        items,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "onboarding"] });
      setShowCreate(false);
      setForm({
        employeeId: "",
        targetDate: "",
        items: "IT setup\nID card\nBank details\nWelcome kit\nTeam introduction",
      });
    },
    onSettled: () => setSaving(false),
  });

  const toggleItem = useMutation({
    mutationFn: async ({
      employeeId,
      itemIndex,
      completed,
    }: {
      employeeId: number;
      itemIndex: number;
      completed: boolean;
    }) => {
      await api.patch(`/hr/onboarding/${employeeId}/item`, { itemIndex, completed });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "onboarding"] }),
  });

  const all = checklists ?? [];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return all;
    return all.filter((cl) => {
      const name = `${cl.employee?.firstName ?? ""} ${cl.employee?.lastName ?? ""}`.toLowerCase();
      return name.includes(q) || (cl.employee?.designation ?? "").toLowerCase().includes(q);
    });
  }, [all, search]);

  const totals = useMemo(() => {
    const total = all.length;
    const inProgress = all.filter((c) => c.status === "IN_PROGRESS").length;
    const overdue = all.filter((c) => c.status === "OVERDUE").length;
    return { total, inProgress, overdue };
  }, [all]);

  return (
    <div className="max-w-7xl mx-auto">
      <SEO title="Onboarding" noIndex />

      <header className="mt-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            recruiter / hr / onboarding
          </span>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              New hire{" "}
              <span className="relative inline-block">
                runway.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
                />
              </span>
            </h1>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
              Checklist progress for every employee still in their first weeks.
            </p>
          </div>

          <Button variant="primary" size="md" onClick={() => setShowCreate(true)}>
            <Plus className="w-4 h-4" />
            New checklist
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
          <Stat label="total" value={totals.total} />
          <Stat label="in progress" value={totals.inProgress} dotClass="bg-blue-500" />
          <Stat label="overdue" value={totals.overdue} dotClass="bg-red-500" />
        </div>
      </header>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-60 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or role"
            className="w-full pl-9 pr-3 py-2 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="h-1 w-1 bg-lime-400" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          active checklists
        </span>
      </div>

      {isLoading ? (
        <ListSkeleton />
      ) : filtered.length === 0 ? (
        <EmptyState
          title={all.length === 0 ? "No onboarding yet" : "No matching employees"}
          description={
            all.length === 0
              ? "Create a checklist to get a new hire started."
              : "Try a different search term."
          }
          onAction={() => setShowCreate(true)}
        />
      ) : (
        <div className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-stone-950 divide-y divide-stone-100 dark:divide-white/5">
          {filtered.map((cl, i) => {
            const completed = cl.items.filter((item) => item.completed).length;
            const total = cl.items.length;
            const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
            const isOpen = expanded === cl.employeeId;
            return (
              <motion.div
                key={cl.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02, duration: 0.2 }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : cl.employeeId)}
                  className="w-full flex items-center gap-4 px-4 py-3 text-left hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors border-0 bg-transparent cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                    <UserPlus className="w-4 h-4 text-stone-500" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 truncate">
                        {cl.employee?.firstName} {cl.employee?.lastName}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                        <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[cl.status]}`} />
                        {labelize(cl.status)}
                      </span>
                    </div>
                    <div className="mt-0.5 flex items-center gap-3 flex-wrap text-[11px] text-stone-500">
                      {cl.employee?.designation && <span>{cl.employee.designation}</span>}
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-stone-400" />
                        target {formatDate(cl.targetDate)}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <div className="w-28 h-1 bg-stone-100 dark:bg-stone-900 rounded-sm overflow-hidden">
                      <div
                        className="h-full bg-lime-400 rounded-sm transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-mono tabular-nums text-stone-600 dark:text-stone-400 w-10 text-right">
                      {completed}/{total}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-3 bg-stone-50/60 dark:bg-stone-900/40 border-t border-stone-100 dark:border-white/5 py-2 space-y-0.5">
                        {cl.items.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() =>
                              toggleItem.mutate({
                                employeeId: cl.employeeId,
                                itemIndex: idx,
                                completed: !item.completed,
                              })
                            }
                            className="flex items-center gap-3 w-full text-left px-2 py-1.5 rounded-md hover:bg-white dark:hover:bg-stone-900 transition-colors border-0 bg-transparent cursor-pointer"
                          >
                            {item.completed ? (
                              <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 text-stone-300 dark:text-stone-600 shrink-0" />
                            )}
                            <span
                              className={`text-sm ${
                                item.completed
                                  ? "text-stone-400 line-through"
                                  : "text-stone-700 dark:text-stone-300"
                              }`}
                            >
                              {item.title}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}

      <HRModal
        open={showCreate}
        onClose={() => setShowCreate(false)}
        title="New Onboarding Checklist"
        onSubmit={() => createMutation.mutate()}
        loading={saving}
      >
        <div className="space-y-4">
          <div>
            <label className={labelClass}>employee id</label>
            <input
              type="number"
              value={form.employeeId}
              onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
              className={inputClass}
              placeholder="e.g. 42"
            />
          </div>
          <div>
            <label className={labelClass}>target date</label>
            <input
              type="date"
              value={form.targetDate}
              onChange={(e) => setForm({ ...form, targetDate: e.target.value })}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>checklist items, one per line</label>
            <textarea
              value={form.items}
              onChange={(e) => setForm({ ...form, items: e.target.value })}
              rows={6}
              className={`${inputClass} font-mono resize-none`}
            />
          </div>
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
        <div key={i} className="flex items-center gap-4 px-4 py-3 animate-pulse">
          <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-900" />
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-1/3 rounded bg-stone-100 dark:bg-stone-900" />
            <div className="h-2.5 w-1/2 rounded bg-stone-100 dark:bg-stone-900" />
          </div>
          <div className="h-1 w-28 rounded bg-stone-100 dark:bg-stone-900" />
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
        <UserPlus className="w-5 h-5 text-stone-400" />
      </div>
      <h3 className="text-base font-semibold text-stone-900 dark:text-stone-50 mb-1">
        {title}
      </h3>
      <p className="text-sm text-stone-500 max-w-xs mb-5">{description}</p>
      <Button variant="primary" size="sm" onClick={onAction}>
        <Plus className="w-4 h-4" />
        New checklist
      </Button>
    </div>
  );
}
