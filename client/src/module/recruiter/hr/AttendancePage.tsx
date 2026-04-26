import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import NumberFlow from "@number-flow/react";
import {
  Clock,
  LogIn,
  LogOut,
  ArrowRight,
  CalendarDays,
  FileBarChart,
  Wrench,
  Timer,
  CircleCheck,
} from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import type {
  AttendanceRecord,
  AttendanceStatus,
  HRDashboardData,
  HREmployee,
} from "./hr-types";
import { SEO } from "../../../components/SEO";

const STATUS_OPTIONS: AttendanceStatus[] = [
  "PRESENT",
  "ABSENT",
  "HALF_DAY",
  "ON_LEAVE",
  "HOLIDAY",
  "WEEKEND",
  "WORK_FROM_HOME",
];

type TabKey = "today" | "report" | "regularize";

function formatLabel(value: string) {
  return value
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function initials(first?: string, last?: string) {
  return `${first?.[0] ?? ""}${last?.[0] ?? ""}`.toUpperCase() || "?";
}

function formatTime(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AttendancePage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<TabKey>("today");
  const [reportPage, setReportPage] = useState(1);
  const [showRegularize, setShowRegularize] = useState(false);
  const [regForm, setRegForm] = useState({
    employeeId: "",
    date: new Date().toISOString().split("T")[0],
    status: "PRESENT" as AttendanceStatus,
    notes: "",
  });
  const [saving, setSaving] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const { data: dashboard } = useQuery({
    queryKey: hrKeys.analytics.dashboard(),
    queryFn: async () => {
      const res = await api.get("/hr/analytics/dashboard");
      return res.data as HRDashboardData;
    },
  });

  const { data: teamData, isLoading: loadingTeam } = useQuery({
    queryKey: hrKeys.attendance.team(today),
    queryFn: async () => {
      const res = await api.get(`/hr/attendance/team?date=${today}`);
      return res.data as AttendanceRecord[];
    },
    enabled: tab === "today",
  });

  const { data: reportData, isLoading: loadingReport } = useQuery({
    queryKey: hrKeys.attendance.report({ page: reportPage }),
    queryFn: async () => {
      const res = await api.get(
        `/hr/attendance/report?page=${reportPage}&limit=20`,
      );
      return res.data as {
        records: AttendanceRecord[];
        total: number;
        totalPages: number;
      };
    },
    enabled: tab === "report",
  });

  const { data: employees } = useQuery({
    queryKey: ["hr", "employees", "all", "regularize"],
    queryFn: async () => {
      const res = await api.get(`/hr/employees?limit=200`);
      return res.data.employees as HREmployee[];
    },
    enabled: tab === "regularize" || showRegularize,
  });

  const checkInMutation = useMutation({
    mutationFn: async (employeeId: number) => {
      await api.post("/hr/attendance/check-in", { employeeId });
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["hr", "attendance"] }),
  });

  const checkOutMutation = useMutation({
    mutationFn: async (employeeId: number) => {
      await api.post("/hr/attendance/check-out", { employeeId });
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["hr", "attendance"] }),
  });

  const regularizeMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/attendance/regularize", {
        ...regForm,
        employeeId: Number(regForm.employeeId),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "attendance"] });
      setShowRegularize(false);
      setRegForm({
        employeeId: "",
        date: new Date().toISOString().split("T")[0],
        status: "PRESENT",
        notes: "",
      });
    },
    onSettled: () => setSaving(false),
  });

  const tabs: { key: TabKey; label: string; icon: typeof Clock }[] = [
    { key: "today", label: "Today", icon: Clock },
    { key: "report", label: "Report", icon: FileBarChart },
    { key: "regularize", label: "Regularize", icon: Wrench },
  ];

  const todayStats = useMemo(() => {
    const list = teamData ?? [];
    const present = list.filter(
      (r) => r.status === "PRESENT" || r.status === "WORK_FROM_HOME",
    ).length;
    const onLeave = list.filter((r) => r.status === "ON_LEAVE").length;
    const late = list.filter((r) => r.isLate).length;
    const notCheckedIn = list.filter((r) => !r.checkIn).length;
    return { present, onLeave, late, notCheckedIn };
  }, [teamData]);

  const stats = [
    { label: "Present Today", value: todayStats.present },
    { label: "On Leave", value: todayStats.onLeave || (dashboard?.onLeaveToday ?? 0) },
    { label: "Late", value: todayStats.late },
    { label: "Not Checked In", value: todayStats.notCheckedIn },
  ];

  return (
    <div className="font-sans text-stone-900 dark:text-stone-50 space-y-8">
      <SEO title="Attendance" noIndex />

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
              recruiter / hr / attendance
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Time &{" "}
            <span className="relative inline-block">
              presence.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
              />
            </span>
          </h1>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
            Track check-ins, review daily status, and fix missed entries.
          </p>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-stone-500 self-start sm:self-auto">
          <CalendarDays className="w-3.5 h-3.5" />
          {new Date().toLocaleDateString(undefined, {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </div>
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
              onClick={() => setTab(t.key)}
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
          {tab === "today" && (
            <>
              {loadingTeam ? (
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-20 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl animate-pulse"
                    />
                  ))}
                </div>
              ) : teamData?.length ? (
                <div className="space-y-2">
                  {teamData.map((rec, i) => (
                    <motion.div
                      key={rec.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.02 }}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl hover:border-stone-300 dark:hover:border-white/20 transition-colors"
                    >
                      <span className="h-10 w-10 rounded-md bg-lime-400/15 border border-lime-400/30 flex items-center justify-center text-xs font-bold text-lime-700 dark:text-lime-400 shrink-0">
                        {initials(
                          rec.employee?.firstName,
                          rec.employee?.lastName,
                        )}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                            {rec.employee?.firstName} {rec.employee?.lastName}
                          </p>
                          <HRStatusBadge status={rec.status} />
                          {rec.isLate && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900/40">
                              <Timer className="w-3 h-3" />
                              Late {rec.lateMinutes ? `${rec.lateMinutes}m` : ""}
                            </span>
                          )}
                        </div>
                        {rec.employee?.designation && (
                          <p className="mt-0.5 text-[11px] font-mono text-stone-500 truncate">
                            {rec.employee.designation}
                          </p>
                        )}
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 text-[11px] font-mono text-stone-500">
                          <span className="inline-flex items-center gap-1.5">
                            <LogIn className="w-3 h-3 text-lime-600 dark:text-lime-400" />
                            {rec.checkIn ? formatTime(rec.checkIn) : "--:--"}
                          </span>
                          <span className="text-stone-300 dark:text-stone-700">
                            /
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <LogOut className="w-3 h-3 text-stone-400" />
                            {rec.checkOut ? formatTime(rec.checkOut) : "--:--"}
                          </span>
                          {rec.workHours ? (
                            <>
                              <span className="text-stone-300 dark:text-stone-700">
                                /
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <Clock className="w-3 h-3" />
                                {rec.workHours.toFixed(1)}h
                              </span>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex gap-1.5 shrink-0">
                        {!rec.checkIn && (
                          <button
                            onClick={() =>
                              checkInMutation.mutate(rec.employeeId)
                            }
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400 hover:bg-lime-400/25 transition-colors text-xs font-semibold"
                          >
                            <LogIn className="w-3.5 h-3.5" />
                            Check in
                          </button>
                        )}
                        {rec.checkIn && !rec.checkOut && (
                          <button
                            onClick={() =>
                              checkOutMutation.mutate(rec.employeeId)
                            }
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:border-stone-300 dark:hover:border-white/20 transition-colors text-xs font-semibold"
                          >
                            <LogOut className="w-3.5 h-3.5" />
                            Check out
                          </button>
                        )}
                        {rec.checkIn && rec.checkOut && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 text-stone-500 text-xs font-mono uppercase tracking-widest">
                            <CircleCheck className="w-3.5 h-3.5 text-lime-500" />
                            Done
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl">
                  <HREmptyState
                    icon={Clock}
                    title="No attendance records today"
                    description="Attendance entries will appear as your team checks in."
                  />
                </div>
              )}
            </>
          )}

          {tab === "report" && (
            <>
              {loadingReport ? (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-3 space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="h-12 bg-stone-100 dark:bg-white/5 rounded-lg animate-pulse"
                    />
                  ))}
                </div>
              ) : reportData?.records?.length ? (
                <div>
                  <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-stone-50 dark:bg-white/2">
                          <tr className="border-b border-stone-200 dark:border-white/10">
                            {[
                              "Employee",
                              "Date",
                              "Status",
                              "Check In",
                              "Check Out",
                              "Hours",
                            ].map((h) => (
                              <th
                                key={h}
                                className="text-left text-[10px] font-mono uppercase tracking-widest text-stone-500 py-3 px-4"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 dark:divide-white/5">
                          {reportData.records.map((rec, i) => (
                            <motion.tr
                              key={rec.id}
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2, delay: i * 0.02 }}
                              className="hover:bg-stone-50 dark:hover:bg-white/2 transition-colors"
                            >
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2.5">
                                  <span className="h-7 w-7 rounded-md bg-lime-400/15 border border-lime-400/30 flex items-center justify-center text-[10px] font-bold text-lime-700 dark:text-lime-400 shrink-0">
                                    {initials(
                                      rec.employee?.firstName,
                                      rec.employee?.lastName,
                                    )}
                                  </span>
                                  <span className="text-sm font-semibold text-stone-900 dark:text-stone-50">
                                    {rec.employee?.firstName}{" "}
                                    {rec.employee?.lastName}
                                  </span>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-xs font-mono text-stone-500">
                                {new Date(rec.date).toLocaleDateString(
                                  undefined,
                                  {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                  },
                                )}
                              </td>
                              <td className="py-3 px-4">
                                <HRStatusBadge status={rec.status} />
                              </td>
                              <td className="py-3 px-4 text-xs font-mono text-stone-600 dark:text-stone-400">
                                {rec.checkIn ? formatTime(rec.checkIn) : "/"}
                              </td>
                              <td className="py-3 px-4 text-xs font-mono text-stone-600 dark:text-stone-400">
                                {rec.checkOut ? formatTime(rec.checkOut) : "/"}
                              </td>
                              <td className="py-3 px-4 text-xs font-mono text-stone-700 dark:text-stone-300">
                                {rec.workHours
                                  ? `${rec.workHours.toFixed(1)}h`
                                  : "/"}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {reportData.totalPages > 1 && (
                    <PaginationControls
                      currentPage={reportPage}
                      totalPages={reportData.totalPages}
                      onPageChange={setReportPage}
                      showingInfo={{
                        total: reportData.total,
                        limit: Math.max(1, reportData.records.length),
                      }}
                      className="mt-6"
                    />
                  )}
                </div>
              ) : (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl">
                  <HREmptyState
                    icon={FileBarChart}
                    title="No attendance records"
                    description="Historical attendance will show here once entries are logged."
                  />
                </div>
              )}
            </>
          )}

          {tab === "regularize" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-6">
                <div className="inline-flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-lime-600 dark:text-lime-400" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    Manual adjustment
                  </span>
                </div>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  Regularize an attendance record
                </h2>
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                  Use this when an employee forgot to check in or out, or a
                  record needs correction. Every regularization is logged for
                  audit.
                </p>
                <button
                  onClick={() => setShowRegularize(true)}
                  className="mt-5 group inline-flex items-center gap-2 px-5 py-2.5 bg-lime-400 text-stone-950 rounded-lg text-sm font-bold hover:bg-lime-300 transition-colors border-0"
                >
                  <Wrench className="w-4 h-4" />
                  Regularize record
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  Quick tips
                </span>
                <ul className="mt-3 space-y-2.5 text-sm text-stone-600 dark:text-stone-400">
                  <li className="flex gap-2">
                    <span className="text-lime-500 shrink-0">/</span>
                    Set the correct date, not today, if the fix is backdated.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lime-500 shrink-0">/</span>
                    Add a short note so the reason is clear in audits.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lime-500 shrink-0">/</span>
                    Use "Work from home" instead of "Present" for remote days.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Regularize Modal */}
      <HRModal
        open={showRegularize}
        onClose={() => setShowRegularize(false)}
        title="Regularize attendance"
        subtitle="Correct or add a missed entry"
        onSubmit={() => regularizeMutation.mutate()}
        loading={saving}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Employee *
            </label>
            <select
              value={regForm.employeeId}
              onChange={(e) =>
                setRegForm({ ...regForm, employeeId: e.target.value })
              }
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            >
              <option value="">Select employee</option>
              {employees?.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.firstName} {e.lastName} ({e.employeeCode})
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
                Date *
              </label>
              <input
                type="date"
                value={regForm.date}
                onChange={(e) =>
                  setRegForm({ ...regForm, date: e.target.value })
                }
                className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
                Status *
              </label>
              <select
                value={regForm.status}
                onChange={(e) =>
                  setRegForm({
                    ...regForm,
                    status: e.target.value as AttendanceStatus,
                  })
                }
                className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {formatLabel(s)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Notes
            </label>
            <textarea
              value={regForm.notes}
              onChange={(e) =>
                setRegForm({ ...regForm, notes: e.target.value })
              }
              rows={3}
              placeholder="Reason for regularization"
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors resize-none"
            />
          </div>
        </div>
      </HRModal>
    </div>
  );
}
