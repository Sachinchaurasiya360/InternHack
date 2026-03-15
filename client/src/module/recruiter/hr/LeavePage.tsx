import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { CalendarDays, Plus, Check, X } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type { LeaveRequest, LeavePolicy, Holiday, LeaveType, LeaveBalance } from "./hr-types";

const LEAVE_TYPES: LeaveType[] = ["CASUAL", "SICK", "EARNED", "MATERNITY", "PATERNITY", "COMPENSATORY", "UNPAID", "BEREAVEMENT"];

export default function LeavePage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<"requests" | "balance" | "policies" | "holidays">("requests");
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [showHolidayModal, setShowHolidayModal] = useState(false);
  const [policyForm, setPolicyForm] = useState({ leaveType: "CASUAL" as LeaveType, name: "", annualAllocation: 12, maxCarryForward: 0, requiresApproval: true });
  const [holidayForm, setHolidayForm] = useState({ name: "", date: "", isOptional: false, year: new Date().getFullYear() });
  const [saving, setSaving] = useState(false);

  const { data: requests, isLoading: loadingRequests } = useQuery({
    queryKey: hrKeys.leave.all(),
    queryFn: async () => {
      const res = await api.get("/hr/leave/all");
      return res.data as { leaveRequests: LeaveRequest[]; total: number };
    },
    enabled: tab === "requests",
  });

  const { data: balances } = useQuery({
    queryKey: hrKeys.leave.balance(),
    queryFn: async () => {
      const res = await api.get("/hr/leave/balance");
      return res.data as LeaveBalance[];
    },
    enabled: tab === "balance",
  });

  const { data: policies } = useQuery({
    queryKey: hrKeys.leave.policies(),
    queryFn: async () => {
      const res = await api.get("/hr/leave/policies");
      return res.data as LeavePolicy[];
    },
    enabled: tab === "policies",
  });

  const { data: holidays } = useQuery({
    queryKey: hrKeys.leave.holidays(),
    queryFn: async () => {
      const res = await api.get("/hr/leave/holidays");
      return res.data as Holiday[];
    },
    enabled: tab === "holidays",
  });

  const approveMutation = useMutation({
    mutationFn: async (id: number) => { await api.patch(`/hr/leave/${id}/approve`); },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "leave"] }),
  });

  const rejectMutation = useMutation({
    mutationFn: async (id: number) => { await api.patch(`/hr/leave/${id}/reject`); },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "leave"] }),
  });

  const createPolicyMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/leave/policies", policyForm);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "leave", "policies"] });
      setShowPolicyModal(false);
    },
    onSettled: () => setSaving(false),
  });

  const createHolidayMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/leave/holidays", holidayForm);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "leave", "holidays"] });
      setShowHolidayModal(false);
    },
    onSettled: () => setSaving(false),
  });

  const tabs = [
    { key: "requests", label: "Requests" },
    { key: "balance", label: "Balances" },
    { key: "policies", label: "Policies" },
    { key: "holidays", label: "Holidays" },
  ] as const;

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Leave Management</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage leave requests, balances, and policies</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
        {tabs.map((t) => (
          <button key={t.key} onClick={() => setTab(t.key)} className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors ${tab === t.key ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700"}`}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
        {/* Requests Tab */}
        {tab === "requests" && (
          loadingRequests ? (
            <div className="space-y-3">{[...Array(5)].map((_, i) => <div key={i} className="h-16 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
          ) : requests?.leaveRequests?.length ? (
            <div className="space-y-3">
              {requests.leaveRequests.map((req, i) => (
                <motion.div key={req.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {req.employee?.firstName} {req.employee?.lastName}
                      </p>
                      <HRStatusBadge status={req.status} />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {req.leaveType} - {req.totalDays} day(s) - {new Date(req.startDate).toLocaleDateString()} to {new Date(req.endDate).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{req.reason}</p>
                  </div>
                  {req.status === "PENDING" && (
                    <div className="flex items-center gap-1">
                      <button onClick={() => approveMutation.mutate(req.id)} className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors" title="Approve">
                        <Check className="w-4 h-4" />
                      </button>
                      <button onClick={() => rejectMutation.mutate(req.id)} className="p-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Reject">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <HREmptyState icon={CalendarDays} title="No leave requests" description="No leave requests found" />
          )
        )}

        {/* Balance Tab */}
        {tab === "balance" && (
          balances?.length ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {balances.map((b) => (
                <div key={b.id} className="p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">{b.leaveType}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{b.allocated - b.used - b.pending}</p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    {b.allocated} allocated - {b.used} used - {b.pending} pending
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <HREmptyState icon={CalendarDays} title="No balance data" description="Leave balances will appear here once allocated" />
          )
        )}

        {/* Policies Tab */}
        {tab === "policies" && (
          <>
            <div className="flex justify-end mb-4">
              <button onClick={() => setShowPolicyModal(true)} className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                <Plus className="w-3.5 h-3.5" /> Add Policy
              </button>
            </div>
            {policies?.length ? (
              <div className="space-y-2">
                {policies.map((policy) => (
                  <div key={policy.id} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{policy.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{policy.leaveType} - {policy.annualAllocation} days/year, carry-forward: {policy.maxCarryForward}</p>
                    </div>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-lg ${policy.isActive ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-gray-100 text-gray-500"}`}>
                      {policy.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <HREmptyState icon={CalendarDays} title="No policies" actionLabel="Add Policy" onAction={() => setShowPolicyModal(true)} />
            )}
          </>
        )}

        {/* Holidays Tab */}
        {tab === "holidays" && (
          <>
            <div className="flex justify-end mb-4">
              <button onClick={() => setShowHolidayModal(true)} className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                <Plus className="w-3.5 h-3.5" /> Add Holiday
              </button>
            </div>
            {holidays?.length ? (
              <div className="space-y-2">
                {holidays.map((h) => (
                  <div key={h.id} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                    <div className="w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-900/20 flex flex-col items-center justify-center">
                      <span className="text-[10px] font-semibold text-violet-600 dark:text-violet-400">{new Date(h.date).toLocaleDateString("en", { month: "short" })}</span>
                      <span className="text-sm font-bold text-violet-700 dark:text-violet-300">{new Date(h.date).getDate()}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{h.name}</p>
                      {h.location && <p className="text-xs text-gray-500">{h.location}</p>}
                    </div>
                    {h.isOptional && <span className="text-[10px] bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-lg">Optional</span>}
                  </div>
                ))}
              </div>
            ) : (
              <HREmptyState icon={CalendarDays} title="No holidays" actionLabel="Add Holiday" onAction={() => setShowHolidayModal(true)} />
            )}
          </>
        )}
      </div>

      {/* Policy Modal */}
      <HRModal open={showPolicyModal} onClose={() => setShowPolicyModal(false)} title="Add Leave Policy" onSubmit={() => createPolicyMutation.mutate()} loading={saving}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Leave Type</label>
            <select value={policyForm.leaveType} onChange={(e) => setPolicyForm({ ...policyForm, leaveType: e.target.value as LeaveType })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none">
              {LEAVE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Policy Name</label>
            <input value={policyForm.name} onChange={(e) => setPolicyForm({ ...policyForm, name: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Annual Allocation</label>
              <input type="number" value={policyForm.annualAllocation} onChange={(e) => setPolicyForm({ ...policyForm, annualAllocation: Number(e.target.value) })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Max Carry Forward</label>
              <input type="number" value={policyForm.maxCarryForward} onChange={(e) => setPolicyForm({ ...policyForm, maxCarryForward: Number(e.target.value) })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
            </div>
          </div>
        </div>
      </HRModal>

      {/* Holiday Modal */}
      <HRModal open={showHolidayModal} onClose={() => setShowHolidayModal(false)} title="Add Holiday" onSubmit={() => createHolidayMutation.mutate()} loading={saving}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Holiday Name</label>
            <input value={holidayForm.name} onChange={(e) => setHolidayForm({ ...holidayForm, name: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
            <input type="date" value={holidayForm.date} onChange={(e) => setHolidayForm({ ...holidayForm, date: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={holidayForm.isOptional} onChange={(e) => setHolidayForm({ ...holidayForm, isOptional: e.target.checked })} className="rounded" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Optional holiday</span>
          </label>
        </div>
      </HRModal>
    </div>
  );
}
