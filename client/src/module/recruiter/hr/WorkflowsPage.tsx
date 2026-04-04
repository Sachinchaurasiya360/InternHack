import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { GitBranch, Plus, Play, XCircle, ChevronRight } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type { WorkflowDefinition, WorkflowInstance } from "./hr-types";
import { SEO } from "../../../components/SEO";

export default function WorkflowsPage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<"definitions" | "instances">("definitions");
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ name: "", description: "", triggerEvent: "", steps: "Step 1\nStep 2\nStep 3" });
  const [saving, setSaving] = useState(false);

  const { data: definitions, isLoading: loadingDefs } = useQuery({
    queryKey: hrKeys.workflows.definitions(),
    queryFn: async () => {
      const res = await api.get("/hr/workflows/definitions");
      return res.data as WorkflowDefinition[];
    },
    enabled: tab === "definitions",
  });

  const { data: instances, isLoading: loadingInstances } = useQuery({
    queryKey: hrKeys.workflows.instances(),
    queryFn: async () => {
      const res = await api.get("/hr/workflows/instances");
      return res.data as { instances: WorkflowInstance[]; total: number };
    },
    enabled: tab === "instances",
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      const steps = form.steps.split("\n").filter(Boolean).map((name, i) => ({ order: i + 1, name: name.trim(), action: "approve" }));
      await api.post("/hr/workflows/definitions", { ...form, steps });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "workflows"] });
      setShowCreate(false);
    },
    onSettled: () => setSaving(false),
  });

  const advanceMutation = useMutation({
    mutationFn: async (id: number) => { await api.patch(`/hr/workflows/instances/${id}/advance`, { action: "approve" }); },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "workflows"] }),
  });

  const cancelMutation = useMutation({
    mutationFn: async (id: number) => { await api.patch(`/hr/workflows/instances/${id}/cancel`); },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "workflows"] }),
  });

  return (
    <div className="space-y-6">
      <SEO title="Workflows" noIndex />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Workflows</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage approval workflows and automations</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          <Plus className="w-4 h-4" /> New Workflow
        </button>
      </motion.div>

      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
        {(["definitions", "instances"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors capitalize ${tab === t ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400"}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
        {tab === "definitions" && (
          loadingDefs ? (
            <div className="space-y-3">{[...Array(3)].map((_, i) => <div key={i} className="h-16 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
          ) : definitions?.length ? (
            <div className="space-y-2">
              {definitions.map((def, i) => (
                <motion.div key={def.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                    <GitBranch className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{def.name}</p>
                    {def.description && <p className="text-xs text-gray-500 mt-0.5">{def.description}</p>}
                    <p className="text-[10px] text-gray-400 mt-0.5">Trigger: {def.triggerEvent} - {Array.isArray(def.steps) ? (def.steps as unknown[]).length : 0} steps</p>
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-lg ${def.isActive ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-gray-100 text-gray-500"}`}>
                    {def.isActive ? "Active" : "Inactive"}
                  </span>
                </motion.div>
              ))}
            </div>
          ) : (
            <HREmptyState icon={GitBranch} title="No workflows defined" actionLabel="Create Workflow" onAction={() => setShowCreate(true)} />
          )
        )}

        {tab === "instances" && (
          loadingInstances ? (
            <div className="space-y-3">{[...Array(3)].map((_, i) => <div key={i} className="h-16 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
          ) : instances?.instances?.length ? (
            <div className="space-y-2">
              {instances.instances.map((inst, i) => (
                <motion.div key={inst.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{inst.definition?.name || `Workflow #${inst.definitionId}`}</p>
                      <HRStatusBadge status={inst.status} />
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{inst.entityType} #{inst.entityId} - Step {inst.currentStep + 1}</p>
                  </div>
                  {inst.status === "ACTIVE" && (
                    <div className="flex gap-1">
                      <button onClick={() => advanceMutation.mutate(inst.id)} className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-emerald-600 border border-emerald-200 dark:border-emerald-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
                        <ChevronRight className="w-3 h-3" /> Advance
                      </button>
                      <button onClick={() => cancelMutation.mutate(inst.id)} className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <HREmptyState icon={Play} title="No active workflow instances" />
          )
        )}
      </div>

      <HRModal open={showCreate} onClose={() => setShowCreate(false)} title="New Workflow" onSubmit={() => createMutation.mutate()} loading={saving}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={2} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none resize-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Trigger Event *</label>
            <input value={form.triggerEvent} onChange={(e) => setForm({ ...form, triggerEvent: e.target.value })} placeholder="e.g. leave_request_created" className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Steps (one per line)</label>
            <textarea value={form.steps} onChange={(e) => setForm({ ...form, steps: e.target.value })} rows={5} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none resize-none font-mono" />
          </div>
        </div>
      </HRModal>
    </div>
  );
}
