import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import NumberFlow from "@number-flow/react";
import {
  CalendarDays,
  Plus,
  Check,
  X,
  FileText,
  Wallet,
  Palmtree,
  ScrollText,
} from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type {
  LeaveRequest,
  LeavePolicy,
  Holiday,
  LeaveType,
  LeaveBalance,
  LeaveRequestStatus,
  HRDashboardData,
} from "./hr-types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

const LEAVE_TYPES: LeaveType[] = [
  "CASUAL",
  "SICK",
  "EARNED",
  "MATERNITY",
  "PATERNITY",
  "COMPENSATORY",
  "UNPAID",
  "BEREAVEMENT",
];

const REQUEST_STATUSES: LeaveRequestStatus[] = [
  "PENDING",
  "APPROVED",
  "REJECTED",
  "CANCELLED",
];

type TabKey = "requests" | "balance" | "policies" | "holidays";

function formatLabel(value: string) {
  return value
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function initials(first?: string, last?: string) {
  return `${first?.[0] ?? ""}${last?.[0] ?? ""}`.toUpperCase() || "?";
}

export default function LeavePage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<TabKey>("requests");
  const [reqStatus, setReqStatus] = useState<LeaveRequestStatus | "">("");
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [showHolidayModal, setShowHolidayModal] = useState(false);
  const [policyForm, setPolicyForm] = useState({
    leaveType: "CASUAL" as LeaveType,
    name: "",
    annualAllocation: 12,
    maxCarryForward: 0,
    requiresApproval: true,
  });
  const [holidayForm, setHolidayForm] = useState({
    name: "",
    date: "",
    isOptional: false,
    year: new Date().getFullYear(),
  });
  const [saving, setSaving] = useState(false);

  const { data: dashboard } = useQuery({
    queryKey: hrKeys.analytics.dashboard(),
    queryFn: async () => {
      const res = await api.get("/hr/analytics/dashboard");
      return res.data as HRDashboardData;
    },
  });

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
    mutationFn: async (id: number) => {
      await api.patch(`/hr/leave/${id}/approve`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "leave"] });
      queryClient.invalidateQueries({ queryKey: hrKeys.analytics.dashboard() });
    },
  });

  const rejectMutation = useMutation({
    mutationFn: async (id: number) => {
      await api.patch(`/hr/leave/${id}/reject`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "leave"] });
      queryClient.invalidateQueries({ queryKey: hrKeys.analytics.dashboard() });
    },
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

  const tabs: { key: TabKey; label: string; icon: typeof FileText }[] = [
    { key: "requests", label: "Requests", icon: FileText },
    { key: "balance", label: "Balances", icon: Wallet },
    { key: "policies", label: "Policies", icon: ScrollText },
    { key: "holidays", label: "Holidays", icon: Palmtree },
  ];

  const filteredRequests = useMemo(() => {
    if (!requests?.leaveRequests) return [];
    if (!reqStatus) return requests.leaveRequests;
    return requests.leaveRequests.filter((r) => r.status === reqStatus);
  }, [requests, reqStatus]);

  const requestCounts = useMemo(() => {
    const list = requests?.leaveRequests ?? [];
    return {
      ALL: list.length,
      PENDING: list.filter((r) => r.status === "PENDING").length,
      APPROVED: list.filter((r) => r.status === "APPROVED").length,
      REJECTED: list.filter((r) => r.status === "REJECTED").length,
      CANCELLED: list.filter((r) => r.status === "CANCELLED").length,
    };
  }, [requests]);

  const stats = [
    { label: "Pending", value: dashboard?.pendingLeaveRequests ?? 0 },
    { label: "On Leave Today", value: dashboard?.onLeaveToday ?? 0 },
    { label: "Active Team", value: dashboard?.activeEmployees ?? 0 },
    { label: "Holidays", value: holidays?.length ?? 0 },
  ];

  const primaryAction = tab === "policies"
    ? { label: "Add policy", onClick: () => setShowPolicyModal(true) }
    : tab === "holidays"
      ? { label: "Add holiday", onClick: () => setShowHolidayModal(true) }
      : null;

  return (
    <div className="font-sans text-stone-900 dark:text-stone-50 space-y-8">
      <SEO title="Leave Management" noIndex />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
      >
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1 w-1 bg-lime-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              recruiter / hr / leave
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Time off &{" "}
            <span className="relative inline-block">
              balances.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
              />
            </span>
          </h1>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
            Approve requests, track balances, manage policies, and maintain the
            holiday calendar.
          </p>
        </div>

        {primaryAction && (
          <Button variant="primary" size="md" onClick={primaryAction.onClick}>
            <Plus className="w-4 h-4" />
            {primaryAction.label}
          </Button>
        )}
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white dark:bg-stone-900 p-4 sm:p-5"
          >
            <div className="text-2xl sm:text-3xl font-bold tracking-tight tabular-nums text-stone-900 dark:text-stone-50">
              <NumberFlow value={Number(s.value) || 0} />
            </div>
            <div className="mt-1 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-stone-500">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {tabs.map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => {
                setTab(t.key);
                setReqStatus("");
              }}
              className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono uppercase tracking-widest rounded-lg border transition-colors ${
                active
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                  : "bg-white dark:bg-stone-900 border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
              }`}
            >
              <t.icon className="w-3.5 h-3.5" />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
        >
          {tab === "requests" && (
            <div className="space-y-4">
              {/* Sub-filter */}
              <div className="flex items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => setReqStatus("")}
                  className={`shrink-0 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest rounded-md border transition-colors ${
                    reqStatus === ""
                      ? "bg-stone-100 dark:bg-white/5 border-stone-300 dark:border-white/20 text-stone-900 dark:text-stone-50"
                      : "bg-transparent border-stone-200 dark:border-white/10 text-stone-500 hover:text-stone-900 dark:hover:text-stone-50"
                  }`}
                >
                  All
                  <span className="ml-1.5 text-stone-400">
                    {requestCounts.ALL}
                  </span>
                </button>
                {REQUEST_STATUSES.map((s) => {
                  const active = reqStatus === s;
                  const count = requestCounts[s];
                  return (
                    <button
                      key={s}
                      onClick={() => setReqStatus(active ? "" : s)}
                      className={`shrink-0 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest rounded-md border transition-colors ${
                        active
                          ? "bg-stone-100 dark:bg-white/5 border-stone-300 dark:border-white/20 text-stone-900 dark:text-stone-50"
                          : "bg-transparent border-stone-200 dark:border-white/10 text-stone-500 hover:text-stone-900 dark:hover:text-stone-50"
                      }`}
                    >
                      {formatLabel(s)}
                      <span className="ml-1.5 text-stone-400">{count}</span>
                    </button>
                  );
                })}
              </div>

              {loadingRequests ? (
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-20 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl animate-pulse"
                    />
                  ))}
                </div>
              ) : filteredRequests.length ? (
                <div className="space-y-2">
                  {filteredRequests.map((req, i) => (
                    <motion.div
                      key={req.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.02 }}
                      className="group flex items-start sm:items-center gap-4 p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl hover:border-stone-300 dark:hover:border-white/20 transition-colors"
                    >
                      <span className="h-10 w-10 rounded-md bg-lime-400/15 border border-lime-400/30 flex items-center justify-center text-xs font-bold text-lime-700 dark:text-lime-400 shrink-0">
                        {initials(
                          req.employee?.firstName,
                          req.employee?.lastName,
                        )}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                            {req.employee?.firstName} {req.employee?.lastName}
                          </p>
                          <HRStatusBadge status={req.status} />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                            {formatLabel(req.leaveType)}
                          </span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="w-3 h-3" />
                            {new Date(req.startDate).toLocaleDateString(
                              undefined,
                              { day: "2-digit", month: "short" },
                            )}
                            {" to "}
                            {new Date(req.endDate).toLocaleDateString(
                              undefined,
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              },
                            )}
                          </span>
                          <span className="text-stone-300 dark:text-stone-700">
                            /
                          </span>
                          <span className="font-mono">
                            {req.totalDays} day
                            {req.totalDays === 1 ? "" : "s"}
                          </span>
                        </div>
                        {req.reason && (
                          <p className="mt-1.5 text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
                            {req.reason}
                          </p>
                        )}
                      </div>
                      {req.status === "PENDING" && (
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => approveMutation.mutate(req.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400 hover:bg-lime-400/25 transition-colors text-xs font-semibold"
                            title="Approve"
                          >
                            <Check className="w-3.5 h-3.5" />
                            Approve
                          </button>
                          <button
                            onClick={() => rejectMutation.mutate(req.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:border-red-300 hover:text-red-600 dark:hover:text-red-400 dark:hover:border-red-900/50 transition-colors text-xs font-semibold"
                            title="Reject"
                          >
                            <X className="w-3.5 h-3.5" />
                            Reject
                          </button>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl">
                  <HREmptyState
                    icon={CalendarDays}
                    title="No leave requests"
                    description={
                      reqStatus
                        ? `No ${formatLabel(reqStatus).toLowerCase()} requests found.`
                        : "Leave requests will appear here as they come in."
                    }
                  />
                </div>
              )}
            </div>
          )}

          {tab === "balance" && (
            <>
              {balances?.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {balances.map((b, i) => {
                    const available = b.allocated - b.used - b.pending;
                    const pct = b.allocated
                      ? Math.max(
                          0,
                          Math.min(100, (available / b.allocated) * 100),
                        )
                      : 0;
                    return (
                      <motion.div
                        key={b.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.03 }}
                        className="p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                            {formatLabel(b.leaveType)}
                          </span>
                          <span className="text-[10px] font-mono text-stone-400">
                            {b.year}
                          </span>
                        </div>
                        <div className="mt-3 flex items-baseline gap-1.5">
                          <span className="text-3xl font-bold tracking-tight tabular-nums text-stone-900 dark:text-stone-50">
                            {available}
                          </span>
                          <span className="text-xs font-mono text-stone-500">
                            / {b.allocated} days
                          </span>
                        </div>
                        <div className="mt-3 h-1.5 bg-stone-100 dark:bg-white/5 rounded-md overflow-hidden">
                          <div
                            className="h-full bg-lime-400 rounded-md transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-stone-500">
                          <span>{b.used} used</span>
                          <span className="text-stone-300 dark:text-stone-700">
                            /
                          </span>
                          <span>{b.pending} pending</span>
                          <span className="text-stone-300 dark:text-stone-700">
                            /
                          </span>
                          <span>{b.carryForward} carry</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl">
                  <HREmptyState
                    icon={Wallet}
                    title="No balance data"
                    description="Leave balances will appear here once allocated."
                  />
                </div>
              )}
            </>
          )}

          {tab === "policies" && (
            <>
              {policies?.length ? (
                <div className="space-y-2">
                  {policies.map((policy, i) => (
                    <motion.div
                      key={policy.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.02 }}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl"
                    >
                      <span className="h-10 w-10 rounded-md bg-lime-400/15 border border-lime-400/30 flex items-center justify-center text-lime-700 dark:text-lime-400 shrink-0">
                        <ScrollText className="w-4 h-4" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                            {policy.name}
                          </p>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                            {formatLabel(policy.leaveType)}
                          </span>
                        </div>
                        <div className="mt-0.5 flex flex-wrap items-center gap-x-3 text-xs font-mono text-stone-500">
                          <span>{policy.annualAllocation} days/year</span>
                          <span className="text-stone-300 dark:text-stone-700">
                            /
                          </span>
                          <span>carry {policy.maxCarryForward}</span>
                          {policy.requiresApproval && (
                            <>
                              <span className="text-stone-300 dark:text-stone-700">
                                /
                              </span>
                              <span>requires approval</span>
                            </>
                          )}
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest ${
                          policy.isActive
                            ? "bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400"
                            : "bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-stone-500"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-md ${policy.isActive ? "bg-lime-400" : "bg-stone-400"}`}
                        />
                        {policy.isActive ? "Active" : "Inactive"}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl">
                  <HREmptyState
                    icon={ScrollText}
                    title="No policies"
                    description="Create policies to set annual allocations and carry-forward rules."
                    actionLabel="Add policy"
                    onAction={() => setShowPolicyModal(true)}
                  />
                </div>
              )}
            </>
          )}

          {tab === "holidays" && (
            <>
              {holidays?.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {holidays.map((h, i) => (
                    <motion.div
                      key={h.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.02 }}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl"
                    >
                      <div className="w-14 h-14 rounded-lg bg-lime-400/15 border border-lime-400/30 flex flex-col items-center justify-center shrink-0">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400">
                          {new Date(h.date).toLocaleDateString("en", {
                            month: "short",
                          })}
                        </span>
                        <span className="text-lg font-bold tabular-nums text-stone-900 dark:text-stone-50 leading-tight">
                          {new Date(h.date).getDate()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                          {h.name}
                        </p>
                        <div className="mt-0.5 flex items-center gap-2 text-[11px] font-mono text-stone-500">
                          <span>
                            {new Date(h.date).toLocaleDateString(undefined, {
                              weekday: "short",
                              year: "numeric",
                            })}
                          </span>
                          {h.location && (
                            <>
                              <span className="text-stone-300 dark:text-stone-700">
                                /
                              </span>
                              <span className="truncate">{h.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                      {h.isOptional && (
                        <span className="shrink-0 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900/40">
                          Optional
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl">
                  <HREmptyState
                    icon={Palmtree}
                    title="No holidays"
                    description="Add company-wide holidays and location-specific observances."
                    actionLabel="Add holiday"
                    onAction={() => setShowHolidayModal(true)}
                  />
                </div>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Policy Modal */}
      <HRModal
        open={showPolicyModal}
        onClose={() => setShowPolicyModal(false)}
        title="Add leave policy"
        subtitle="Define an annual allocation rule"
        onSubmit={() => createPolicyMutation.mutate()}
        loading={saving}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Leave type
            </label>
            <select
              value={policyForm.leaveType}
              onChange={(e) =>
                setPolicyForm({
                  ...policyForm,
                  leaveType: e.target.value as LeaveType,
                })
              }
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            >
              {LEAVE_TYPES.map((t) => (
                <option key={t} value={t}>
                  {formatLabel(t)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Policy name
            </label>
            <input
              value={policyForm.name}
              onChange={(e) =>
                setPolicyForm({ ...policyForm, name: e.target.value })
              }
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
                Annual allocation
              </label>
              <input
                type="number"
                value={policyForm.annualAllocation}
                onChange={(e) =>
                  setPolicyForm({
                    ...policyForm,
                    annualAllocation: Number(e.target.value),
                  })
                }
                className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
                Max carry forward
              </label>
              <input
                type="number"
                value={policyForm.maxCarryForward}
                onChange={(e) =>
                  setPolicyForm({
                    ...policyForm,
                    maxCarryForward: Number(e.target.value),
                  })
                }
                className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
              />
            </div>
          </div>
          <label className="flex items-center gap-2.5 pt-1">
            <input
              type="checkbox"
              checked={policyForm.requiresApproval}
              onChange={(e) =>
                setPolicyForm({
                  ...policyForm,
                  requiresApproval: e.target.checked,
                })
              }
              className="rounded accent-lime-500"
            />
            <span className="text-sm text-stone-700 dark:text-stone-300">
              Requires manager approval
            </span>
          </label>
        </div>
      </HRModal>

      {/* Holiday Modal */}
      <HRModal
        open={showHolidayModal}
        onClose={() => setShowHolidayModal(false)}
        title="Add holiday"
        subtitle="Add to the company calendar"
        onSubmit={() => createHolidayMutation.mutate()}
        loading={saving}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Holiday name
            </label>
            <input
              value={holidayForm.name}
              onChange={(e) =>
                setHolidayForm({ ...holidayForm, name: e.target.value })
              }
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Date
            </label>
            <input
              type="date"
              value={holidayForm.date}
              onChange={(e) =>
                setHolidayForm({ ...holidayForm, date: e.target.value })
              }
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            />
          </div>
          <label className="flex items-center gap-2.5 pt-1">
            <input
              type="checkbox"
              checked={holidayForm.isOptional}
              onChange={(e) =>
                setHolidayForm({ ...holidayForm, isOptional: e.target.checked })
              }
              className="rounded accent-lime-500"
            />
            <span className="text-sm text-stone-700 dark:text-stone-300">
              Optional holiday
            </span>
          </label>
        </div>
      </HRModal>
    </div>
  );
}
