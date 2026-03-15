import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { UserPlus, Plus, CheckCircle2, Circle } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type { OnboardingChecklist } from "./hr-types";

export default function OnboardingPage() {
  const queryClient = useQueryClient();
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ employeeId: "", targetDate: "", items: "IT setup\nID card\nBank details\nWelcome kit\nTeam introduction" });
  const [saving, setSaving] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

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
      const items = form.items.split("\n").filter(Boolean).map((title) => ({ title: title.trim(), completed: false }));
      await api.post("/hr/onboarding", { employeeId: Number(form.employeeId), targetDate: new Date(form.targetDate).toISOString(), items });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "onboarding"] });
      setShowCreate(false);
    },
    onSettled: () => setSaving(false),
  });

  const toggleItem = useMutation({
    mutationFn: async ({ employeeId, itemIndex, completed }: { employeeId: number; itemIndex: number; completed: boolean }) => {
      await api.patch(`/hr/onboarding/${employeeId}/item`, { itemIndex, completed });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "onboarding"] }),
  });

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Onboarding</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Track new employee onboarding checklists</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          <Plus className="w-4 h-4" /> New Checklist
        </button>
      </motion.div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
        {isLoading ? (
          <div className="space-y-3">{[...Array(3)].map((_, i) => <div key={i} className="h-20 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
        ) : checklists?.length ? (
          <div className="space-y-3">
            {checklists.map((cl, i) => {
              const completed = cl.items.filter((item) => item.completed).length;
              const total = cl.items.length;
              const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
              return (
                <motion.div key={cl.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                    onClick={() => setExpanded(expanded === cl.employeeId ? null : cl.employeeId)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {cl.employee?.firstName} {cl.employee?.lastName}
                        </p>
                        <HRStatusBadge status={cl.status} />
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">Target: {new Date(cl.targetDate).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{completed}/{total}</span>
                    </div>
                  </div>
                  {expanded === cl.employeeId && (
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/30 rounded-b-xl border-x border-b border-gray-100 dark:border-gray-800 space-y-2">
                      {cl.items.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => toggleItem.mutate({ employeeId: cl.employeeId, itemIndex: idx, completed: !item.completed })}
                          className="flex items-center gap-3 w-full text-left p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                        >
                          {item.completed ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-gray-300 dark:text-gray-600 shrink-0" />
                          )}
                          <span className={`text-sm ${item.completed ? "text-gray-400 line-through" : "text-gray-700 dark:text-gray-300"}`}>
                            {item.title}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        ) : (
          <HREmptyState icon={UserPlus} title="No onboarding checklists" description="Create a checklist for new employees" actionLabel="New Checklist" onAction={() => setShowCreate(true)} />
        )}
      </div>

      <HRModal open={showCreate} onClose={() => setShowCreate(false)} title="New Onboarding Checklist" onSubmit={() => createMutation.mutate()} loading={saving}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Employee ID *</label>
            <input type="number" value={form.employeeId} onChange={(e) => setForm({ ...form, employeeId: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Target Date *</label>
            <input type="date" value={form.targetDate} onChange={(e) => setForm({ ...form, targetDate: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Checklist Items (one per line)</label>
            <textarea value={form.items} onChange={(e) => setForm({ ...form, items: e.target.value })} rows={6} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none resize-none font-mono" />
          </div>
        </div>
      </HRModal>
    </div>
  );
}
