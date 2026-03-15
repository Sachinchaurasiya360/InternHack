import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Wallet, Plus, Play, Check } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type { PayrollRecord, ContractorPayment } from "./hr-types";

export default function PayrollPage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<"records" | "run" | "contractors">("records");
  const [page, setPage] = useState(1);
  const [runMonth, setRunMonth] = useState(new Date().getMonth() + 1);
  const [runYear, setRunYear] = useState(new Date().getFullYear());
  const [running, setRunning] = useState(false);
  const [showContractorModal, setShowContractorModal] = useState(false);
  const [contractorForm, setContractorForm] = useState({ employeeId: "", amount: "", description: "", periodStart: "", periodEnd: "" });
  const [saving, setSaving] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);

  const { data: payrollData, isLoading } = useQuery({
    queryKey: hrKeys.payroll.records({ page }),
    queryFn: async () => {
      const res = await api.get(`/hr/payroll/records?page=${page}&limit=20`);
      return res.data as { records: PayrollRecord[]; total: number; totalPages: number };
    },
    enabled: tab === "records",
  });

  const { data: contractors } = useQuery({
    queryKey: hrKeys.payroll.contractors(),
    queryFn: async () => {
      const res = await api.get("/hr/payroll/contractor-payments");
      return res.data as ContractorPayment[];
    },
    enabled: tab === "contractors",
  });

  const runMutation = useMutation({
    mutationFn: async () => {
      setRunning(true);
      await api.post("/hr/payroll/run", { month: runMonth, year: runYear });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "payroll"] });
      setTab("records");
    },
    onSettled: () => setRunning(false),
  });

  const approveMutation = useMutation({
    mutationFn: async () => {
      await api.patch("/hr/payroll/approve", { ids: selected });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "payroll"] });
      setSelected([]);
    },
  });

  const createContractorMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/payroll/contractor-payments", { ...contractorForm, employeeId: Number(contractorForm.employeeId), amount: Number(contractorForm.amount) });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "payroll"] });
      setShowContractorModal(false);
    },
    onSettled: () => setSaving(false),
  });

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Payroll</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage payroll runs and records</p>
      </motion.div>

      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
        {(["records", "run", "contractors"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors capitalize ${tab === t ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400"}`}>
            {t === "run" ? "Run Payroll" : t}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
        {tab === "records" && (
          <>
            {selected.length > 0 && (
              <div className="flex items-center gap-3 mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                <span className="text-xs text-indigo-700 dark:text-indigo-300">{selected.length} selected</span>
                <button onClick={() => approveMutation.mutate()} className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                  <Check className="w-3 h-3" /> Approve
                </button>
              </div>
            )}
            {isLoading ? (
              <div className="space-y-3">{[...Array(5)].map((_, i) => <div key={i} className="h-14 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
            ) : payrollData?.records?.length ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <th className="py-3 px-4 w-8"><input type="checkbox" onChange={(e) => setSelected(e.target.checked ? payrollData.records.map((r) => r.id) : [])} className="rounded" /></th>
                      <th className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Employee</th>
                      <th className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Period</th>
                      <th className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Gross</th>
                      <th className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Deductions</th>
                      <th className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Net Pay</th>
                      <th className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
                    {payrollData.records.map((rec) => (
                      <tr key={rec.id} className="text-sm">
                        <td className="py-3 px-4"><input type="checkbox" checked={selected.includes(rec.id)} onChange={(e) => setSelected(e.target.checked ? [...selected, rec.id] : selected.filter((id) => id !== rec.id))} className="rounded" /></td>
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{rec.employee?.firstName} {rec.employee?.lastName}</td>
                        <td className="py-3 px-4 text-gray-500">{`${rec.month}/${rec.year}`}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{rec.grossEarnings.toLocaleString()}</td>
                        <td className="py-3 px-4 text-red-600 dark:text-red-400">{rec.totalDeductions.toLocaleString()}</td>
                        <td className="py-3 px-4 font-semibold text-emerald-600 dark:text-emerald-400">{rec.netPay.toLocaleString()}</td>
                        <td className="py-3 px-4"><HRStatusBadge status={rec.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {payrollData.totalPages > 1 && (
                  <div className="flex justify-center gap-2 pt-4">
                    <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="px-3 py-1.5 text-xs border rounded-lg disabled:opacity-30">Prev</button>
                    <span className="text-xs text-gray-500 py-1.5">{page} / {payrollData.totalPages}</span>
                    <button disabled={page >= payrollData.totalPages} onClick={() => setPage((p) => p + 1)} className="px-3 py-1.5 text-xs border rounded-lg disabled:opacity-30">Next</button>
                  </div>
                )}
              </div>
            ) : (
              <HREmptyState icon={Wallet} title="No payroll records" description="Run your first payroll" />
            )}
          </>
        )}

        {tab === "run" && (
          <div className="max-w-md mx-auto text-center space-y-6 py-8">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mx-auto">
              <Play className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Run Payroll</h2>
              <p className="text-sm text-gray-500 mt-1">Generate payroll records for all active employees</p>
            </div>
            <div className="flex justify-center gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Month</label>
                <select value={runMonth} onChange={(e) => setRunMonth(Number(e.target.value))} className="px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                  {Array.from({ length: 12 }, (_, i) => <option key={i + 1} value={i + 1}>{new Date(2000, i).toLocaleString("en", { month: "long" })}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Year</label>
                <input type="number" value={runYear} onChange={(e) => setRunYear(Number(e.target.value))} className="w-24 px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
              </div>
            </div>
            <button onClick={() => runMutation.mutate()} disabled={running} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 transition-colors">
              {running ? "Processing..." : "Run Payroll"}
            </button>
          </div>
        )}

        {tab === "contractors" && (
          <>
            <div className="flex justify-end mb-4">
              <button onClick={() => setShowContractorModal(true)} className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                <Plus className="w-3.5 h-3.5" /> Add Payment
              </button>
            </div>
            {contractors?.length ? (
              <div className="space-y-2">
                {contractors.map((cp) => (
                  <div key={cp.id} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{cp.employee?.firstName} {cp.employee?.lastName}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{cp.description}</p>
                      <p className="text-[10px] text-gray-400">{new Date(cp.periodStart).toLocaleDateString()} - {new Date(cp.periodEnd).toLocaleDateString()}</p>
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{cp.currency} {cp.amount.toLocaleString()}</p>
                    <HRStatusBadge status={cp.status} />
                  </div>
                ))}
              </div>
            ) : (
              <HREmptyState icon={Wallet} title="No contractor payments" actionLabel="Add Payment" onAction={() => setShowContractorModal(true)} />
            )}
          </>
        )}
      </div>

      <HRModal open={showContractorModal} onClose={() => setShowContractorModal(false)} title="Contractor Payment" onSubmit={() => createContractorMutation.mutate()} loading={saving}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Employee ID *</label>
            <input type="number" value={contractorForm.employeeId} onChange={(e) => setContractorForm({ ...contractorForm, employeeId: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Amount *</label>
            <input type="number" value={contractorForm.amount} onChange={(e) => setContractorForm({ ...contractorForm, amount: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Description *</label>
            <textarea value={contractorForm.description} onChange={(e) => setContractorForm({ ...contractorForm, description: e.target.value })} rows={2} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none resize-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Period Start</label>
              <input type="date" value={contractorForm.periodStart} onChange={(e) => setContractorForm({ ...contractorForm, periodStart: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Period End</label>
              <input type="date" value={contractorForm.periodEnd} onChange={(e) => setContractorForm({ ...contractorForm, periodEnd: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
            </div>
          </div>
        </div>
      </HRModal>
    </div>
  );
}
