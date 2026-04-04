import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Receipt, Plus, Check, X } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type { Reimbursement } from "./hr-types";
import { SEO } from "../../../components/SEO";

export default function ReimbursementsPage() {
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ employeeId: "", category: "", amount: "", description: "" });
  const [saving, setSaving] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: hrKeys.reimbursements.list({ page, status: statusFilter }),
    queryFn: async () => {
      const p = new URLSearchParams({ page: String(page), limit: "20" });
      if (statusFilter) p.set("status", statusFilter);
      const res = await api.get(`/hr/reimbursements?${p}`);
      return res.data as { reimbursements: Reimbursement[]; total: number; totalPages: number };
    },
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/reimbursements", { ...form, employeeId: Number(form.employeeId), amount: Number(form.amount) });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "reimbursements"] });
      setShowCreate(false);
      setForm({ employeeId: "", category: "", amount: "", description: "" });
    },
    onSettled: () => setSaving(false),
  });

  const approveMutation = useMutation({
    mutationFn: async (id: number) => { await api.patch(`/hr/reimbursements/${id}/approve`); },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "reimbursements"] }),
  });

  const rejectMutation = useMutation({
    mutationFn: async (id: number) => { await api.patch(`/hr/reimbursements/${id}/reject`); },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "reimbursements"] }),
  });

  const STATUSES = ["DRAFT", "SUBMITTED", "MANAGER_APPROVED", "FINANCE_APPROVED", "PAID", "REJECTED"];

  return (
    <div className="space-y-6">
      <SEO title="Reimbursements" noIndex />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reimbursements</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage expense claims and reimbursements</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          <Plus className="w-4 h-4" /> New Claim
        </button>
      </motion.div>

      <div className="flex gap-3">
        <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }} className="px-3 py-2.5 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none text-gray-700 dark:text-gray-300">
          <option value="">All Status</option>
          {STATUSES.map((s) => <option key={s} value={s}>{s.replace(/_/g, " ")}</option>)}
        </select>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
        {isLoading ? (
          <div className="space-y-3">{[...Array(5)].map((_, i) => <div key={i} className="h-16 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
        ) : data?.reimbursements?.length ? (
          <div className="space-y-2">
            {data.reimbursements.map((claim, i) => (
              <motion.div key={claim.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{claim.employee?.firstName} {claim.employee?.lastName}</p>
                    <span className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded-lg">{claim.category}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{claim.description}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{new Date(claim.createdAt).toLocaleDateString()}</p>
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{claim.currency} {claim.amount.toLocaleString()}</p>
                <HRStatusBadge status={claim.status} />
                {(claim.status === "SUBMITTED" || claim.status === "MANAGER_APPROVED") && (
                  <div className="flex gap-1">
                    <button onClick={() => approveMutation.mutate(claim.id)} className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </button>
                    <button onClick={() => rejectMutation.mutate(claim.id)} className="p-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
            {data.totalPages > 1 && (
              <div className="flex justify-center gap-2 pt-4">
                <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="px-3 py-1.5 text-xs border rounded-lg disabled:opacity-30">Prev</button>
                <span className="text-xs text-gray-500 py-1.5">{page} / {data.totalPages}</span>
                <button disabled={page >= data.totalPages} onClick={() => setPage((p) => p + 1)} className="px-3 py-1.5 text-xs border rounded-lg disabled:opacity-30">Next</button>
              </div>
            )}
          </div>
        ) : (
          <HREmptyState icon={Receipt} title="No reimbursements" actionLabel="Submit Claim" onAction={() => setShowCreate(true)} />
        )}
      </div>

      <HRModal open={showCreate} onClose={() => setShowCreate(false)} title="New Reimbursement" onSubmit={() => createMutation.mutate()} loading={saving}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Employee ID *</label>
            <input type="number" value={form.employeeId} onChange={(e) => setForm({ ...form, employeeId: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Category *</label>
            <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="e.g. Travel, Food, Office Supplies" className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Amount *</label>
            <input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Description *</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none resize-none" />
          </div>
        </div>
      </HRModal>
    </div>
  );
}
