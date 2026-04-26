import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  GitBranch,
  Plus,
  Play,
  XCircle,
  ChevronRight,
  Search,
  List,
  Activity,
  Zap,
  Layers,
} from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRModal from "./components/HRModal";
import type {
  WorkflowDefinition,
  WorkflowInstance,
  WorkflowStatus,
} from "./hr-types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

type Tab = "definitions" | "instances";

const inputClass =
  "w-full px-3 py-2 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors";

const labelClass =
  "block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5";

const STATUS_DOT: Record<WorkflowStatus, string> = {
  ACTIVE: "bg-lime-400",
  PAUSED: "bg-amber-500",
  COMPLETED: "bg-blue-500",
  CANCELLED: "bg-stone-300",
};

const STATUS_TEXT: Record<WorkflowStatus, string> = {
  ACTIVE: "text-stone-700 dark:text-stone-300",
  PAUSED: "text-amber-600 dark:text-amber-400",
  COMPLETED: "text-blue-600 dark:text-blue-400",
  CANCELLED: "text-stone-500",
};

function labelize(value: string): string {
  return value.replace(/_/g, " ").toLowerCase();
}

function stepCount(steps: unknown): number {
  return Array.isArray(steps) ? steps.length : 0;
}

export default function WorkflowsPage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<Tab>("definitions");
  const [showCreate, setShowCreate] = useState(false);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    triggerEvent: "",
    steps: "Step 1\nStep 2\nStep 3",
  });
  const [saving, setSaving] = useState(false);

  const { data: definitions, isLoading: loadingDefs } = useQuery({
    queryKey: hrKeys.workflows.definitions(),
    queryFn: async () => {
      const res = await api.get("/hr/workflows/definitions");
      return res.data as WorkflowDefinition[];
    },
  });

  const { data: instancesData, isLoading: loadingInstances } = useQuery({
    queryKey: hrKeys.workflows.instances(),
    queryFn: async () => {
      const res = await api.get("/hr/workflows/instances");
      return res.data as { instances: WorkflowInstance[]; total: number };
    },
  });

  const instances = instancesData?.instances ?? [];

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      const steps = form.steps
        .split("\n")
        .filter(Boolean)
        .map((name, i) => ({ order: i + 1, name: name.trim(), action: "approve" }));
      await api.post("/hr/workflows/definitions", { ...form, steps });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "workflows"] });
      setShowCreate(false);
      setForm({
        name: "",
        description: "",
        triggerEvent: "",
        steps: "Step 1\nStep 2\nStep 3",
      });
    },
    onSettled: () => setSaving(false),
  });

  const advanceMutation = useMutation({
    mutationFn: async (id: number) => {
      await api.patch(`/hr/workflows/instances/${id}/advance`, { action: "approve" });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "workflows"] }),
  });

  const cancelMutation = useMutation({
    mutationFn: async (id: number) => {
      await api.patch(`/hr/workflows/instances/${id}/cancel`);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "workflows"] }),
  });

  const totals = useMemo(() => {
    const defs = definitions ?? [];
    const active = instances.filter((i) => i.status === "ACTIVE").length;
    return {
      definitions: defs.length,
      active,
      completed: instances.filter((i) => i.status === "COMPLETED").length,
    };
  }, [definitions, instances]);

  const filteredDefinitions = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list = definitions ?? [];
    if (!q) return list;
    return list.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.triggerEvent.toLowerCase().includes(q) ||
        (d.description || "").toLowerCase().includes(q),
    );
  }, [definitions, search]);

  const filteredInstances = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return instances;
    return instances.filter(
      (i) =>
        (i.definition?.name || "").toLowerCase().includes(q) ||
        i.entityType.toLowerCase().includes(q) ||
        i.status.toLowerCase().includes(q),
    );
  }, [instances, search]);

  const isLoading = tab === "definitions" ? loadingDefs : loadingInstances;
  const emptyDefinitions = !loadingDefs && (definitions?.length ?? 0) === 0;
  const emptyInstances = !loadingInstances && instances.length === 0;

  return (
    <div className="max-w-7xl mx-auto">
      <SEO title="Workflows" noIndex />

      <header className="mt-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            recruiter / hr / workflows
          </span>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Approvals &{" "}
              <span className="relative inline-block">
                automations.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
                />
              </span>
            </h1>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
              Define multi-step approvals, wire them to events, and move running instances along.
            </p>
          </div>

          <Button variant="primary" size="md" onClick={() => setShowCreate(true)}>
            <Plus className="w-4 h-4" />
            New workflow
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
          <Stat label="definitions" value={totals.definitions} />
          <Stat label="active" value={totals.active} dotClass="bg-lime-400" />
          <Stat label="completed" value={totals.completed} dotClass="bg-blue-500" />
        </div>
      </header>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-950 p-0.5">
          {(
            [
              { key: "definitions", label: "Definitions", icon: Layers },
              { key: "instances", label: "Instances", icon: Activity },
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
            placeholder={
              tab === "definitions"
                ? "Search name, trigger, description"
                : "Search workflow, entity, status"
            }
            className={`${inputClass} pl-9`}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="h-1 w-1 bg-lime-400" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          {tab === "definitions" ? "workflow definitions" : "running instances"}
        </span>
      </div>

      {isLoading ? (
        <ListSkeleton />
      ) : tab === "definitions" ? (
        emptyDefinitions ? (
          <EmptyState
            icon={GitBranch}
            title="No workflows defined"
            description="Create a workflow to automate approvals when an event fires."
            actionLabel="Create workflow"
            onAction={() => setShowCreate(true)}
          />
        ) : filteredDefinitions.length === 0 ? (
          <EmptyState
            icon={Search}
            title="No matches"
            description="Try a different search term."
          />
        ) : (
          <div className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-stone-950 divide-y divide-stone-100 dark:divide-white/5">
            {filteredDefinitions.map((def, i) => (
              <motion.div
                key={def.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02, duration: 0.2 }}
                className="flex items-start gap-4 px-4 py-3 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors"
              >
                <div className="mt-0.5 w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                  <GitBranch className="w-4 h-4 text-stone-500" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 truncate">
                      {def.name}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest ${
                        def.isActive
                          ? "text-stone-700 dark:text-stone-300"
                          : "text-stone-500"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          def.isActive ? "bg-lime-400" : "bg-stone-300"
                        }`}
                      />
                      {def.isActive ? "active" : "inactive"}
                    </span>
                  </div>
                  {def.description && (
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-1">
                      {def.description}
                    </p>
                  )}
                  <div className="mt-1 flex items-center gap-3 flex-wrap text-[11px] text-stone-500">
                    <span className="inline-flex items-center gap-1">
                      <Zap className="w-3 h-3 text-stone-400" />
                      <span className="font-mono">{def.triggerEvent}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Layers className="w-3 h-3 text-stone-400" />
                      {stepCount(def.steps)} steps
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )
      ) : emptyInstances ? (
        <EmptyState
          icon={Play}
          title="No active workflow instances"
          description="Instances appear here as events trigger your workflows."
        />
      ) : filteredInstances.length === 0 ? (
        <EmptyState
          icon={Search}
          title="No matches"
          description="Try a different search term."
        />
      ) : (
        <div className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-stone-950 divide-y divide-stone-100 dark:divide-white/5">
          {filteredInstances.map((inst, i) => (
            <motion.div
              key={inst.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02, duration: 0.2 }}
              className="flex items-start gap-4 px-4 py-3 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors"
            >
              <div className="mt-0.5 w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-stone-500" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 truncate">
                    {inst.definition?.name || `Workflow #${inst.definitionId}`}
                  </p>
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest ${STATUS_TEXT[inst.status]}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[inst.status]}`} />
                    {labelize(inst.status)}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-3 flex-wrap text-[11px] text-stone-500">
                  <span className="inline-flex items-center gap-1">
                    <Layers className="w-3 h-3 text-stone-400" />
                    <span className="font-mono">
                      {inst.entityType} #{inst.entityId}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-stone-400" />
                    step {inst.currentStep + 1}
                  </span>
                </div>
              </div>

              {inst.status === "ACTIVE" && (
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => advanceMutation.mutate(inst.id)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-white/10 hover:border-stone-900 dark:hover:border-stone-50 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" />
                    Advance
                  </button>
                  <button
                    onClick={() => cancelMutation.mutate(inst.id)}
                    title="Cancel"
                    className="p-1.5 rounded-md text-stone-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      <HRModal
        open={showCreate}
        onClose={() => setShowCreate(false)}
        title="New Workflow"
        onSubmit={() => createMutation.mutate()}
        loading={saving}
      >
        <div className="space-y-4">
          <div>
            <label className={labelClass}>name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              placeholder="Leave request approval"
            />
          </div>
          <div>
            <label className={labelClass}>description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={2}
              className={`${inputClass} resize-none`}
              placeholder="Short note about what this workflow does."
            />
          </div>
          <div>
            <label className={labelClass}>trigger event</label>
            <input
              value={form.triggerEvent}
              onChange={(e) => setForm({ ...form, triggerEvent: e.target.value })}
              className={`${inputClass} font-mono`}
              placeholder="leave_request_created"
            />
          </div>
          <div>
            <label className={labelClass}>steps (one per line)</label>
            <textarea
              value={form.steps}
              onChange={(e) => setForm({ ...form, steps: e.target.value })}
              rows={5}
              className={`${inputClass} resize-none font-mono`}
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
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: {
  icon: typeof List;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-950">
      <div className="w-12 h-12 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-stone-400" />
      </div>
      <h3 className="text-base font-semibold text-stone-900 dark:text-stone-50 mb-1">
        {title}
      </h3>
      <p className="text-sm text-stone-500 max-w-xs mb-5">{description}</p>
      {actionLabel && onAction && (
        <Button variant="primary" size="sm" onClick={onAction}>
          <Plus className="w-4 h-4" />
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
