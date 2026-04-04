import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Clock, LogIn, LogOut } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type { AttendanceRecord, AttendanceStatus } from "./hr-types";
import { SEO } from "../../../components/SEO";

const STATUS_OPTIONS: AttendanceStatus[] = ["PRESENT", "ABSENT", "HALF_DAY", "ON_LEAVE", "HOLIDAY", "WEEKEND", "WORK_FROM_HOME"];

export default function AttendancePage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<"today" | "report" | "regularize">("today");
  const [reportPage, setReportPage] = useState(1);
  const [showRegularize, setShowRegularize] = useState(false);
  const [regForm, setRegForm] = useState({ employeeId: "", date: "", status: "PRESENT" as AttendanceStatus, notes: "" });
  const [saving, setSaving] = useState(false);
  const today = new Date().toISOString().split("T")[0];

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
      const res = await api.get(`/hr/attendance/report?page=${reportPage}&limit=20`);
      return res.data as { records: AttendanceRecord[]; total: number; totalPages: number };
    },
    enabled: tab === "report",
  });

  const checkInMutation = useMutation({
    mutationFn: async (employeeId: number) => { await api.post("/hr/attendance/check-in", { employeeId }); },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "attendance"] }),
  });

  const checkOutMutation = useMutation({
    mutationFn: async (employeeId: number) => { await api.post("/hr/attendance/check-out", { employeeId }); },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "attendance"] }),
  });

  const regularizeMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/attendance/regularize", { ...regForm, employeeId: Number(regForm.employeeId) });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "attendance"] });
      setShowRegularize(false);
    },
    onSettled: () => setSaving(false),
  });

  return (
    <div className="space-y-6">
      <SEO title="Attendance" noIndex />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Attendance</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Track and manage employee attendance</p>
      </motion.div>

      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
        {(["today", "report", "regularize"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors capitalize ${tab === t ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400"}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
        {tab === "today" && (
          loadingTeam ? (
            <div className="space-y-3">{[...Array(5)].map((_, i) => <div key={i} className="h-14 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
          ) : teamData?.length ? (
            <div className="space-y-2">
              {teamData.map((rec, i) => (
                <motion.div key={rec.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-500">
                    {rec.employee?.firstName?.[0]}{rec.employee?.lastName?.[0]}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{rec.employee?.firstName} {rec.employee?.lastName}</p>
                    <p className="text-[10px] text-gray-500">
                      {rec.checkIn ? `In: ${new Date(rec.checkIn).toLocaleTimeString()}` : "Not checked in"}
                      {rec.checkOut ? ` - Out: ${new Date(rec.checkOut).toLocaleTimeString()}` : ""}
                      {rec.workHours ? ` (${rec.workHours.toFixed(1)}h)` : ""}
                    </p>
                  </div>
                  <HRStatusBadge status={rec.status} />
                  <div className="flex gap-1">
                    {!rec.checkIn && (
                      <button onClick={() => checkInMutation.mutate(rec.employeeId)} className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors" title="Check In">
                        <LogIn className="w-4 h-4" />
                      </button>
                    )}
                    {rec.checkIn && !rec.checkOut && (
                      <button onClick={() => checkOutMutation.mutate(rec.employeeId)} className="p-2 rounded-lg text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors" title="Check Out">
                        <LogOut className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <HREmptyState icon={Clock} title="No attendance records today" />
          )
        )}

        {tab === "report" && (
          loadingReport ? (
            <div className="space-y-3">{[...Array(5)].map((_, i) => <div key={i} className="h-14 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
          ) : reportData?.records?.length ? (
            <div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <th className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Employee</th>
                      <th className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Date</th>
                      <th className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Status</th>
                      <th className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Check In</th>
                      <th className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Check Out</th>
                      <th className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Hours</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
                    {reportData.records.map((rec) => (
                      <tr key={rec.id} className="text-sm">
                        <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">{rec.employee?.firstName} {rec.employee?.lastName}</td>
                        <td className="py-3 px-4 text-gray-500">{new Date(rec.date).toLocaleDateString()}</td>
                        <td className="py-3 px-4"><HRStatusBadge status={rec.status} /></td>
                        <td className="py-3 px-4 text-gray-500">{rec.checkIn ? new Date(rec.checkIn).toLocaleTimeString() : "-"}</td>
                        <td className="py-3 px-4 text-gray-500">{rec.checkOut ? new Date(rec.checkOut).toLocaleTimeString() : "-"}</td>
                        <td className="py-3 px-4 text-gray-500">{rec.workHours?.toFixed(1) ?? "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {reportData.totalPages > 1 && (
                <div className="flex justify-center gap-2 pt-4">
                  <button disabled={reportPage <= 1} onClick={() => setReportPage((p) => p - 1)} className="px-3 py-1.5 text-xs border rounded-lg disabled:opacity-30">Prev</button>
                  <span className="text-xs text-gray-500 py-1.5">{reportPage} / {reportData.totalPages}</span>
                  <button disabled={reportPage >= reportData.totalPages} onClick={() => setReportPage((p) => p + 1)} className="px-3 py-1.5 text-xs border rounded-lg disabled:opacity-30">Next</button>
                </div>
              )}
            </div>
          ) : (
            <HREmptyState icon={Clock} title="No attendance records" />
          )
        )}

        {tab === "regularize" && (
          <div className="max-w-md mx-auto">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manually regularize an attendance record</p>
            <button onClick={() => setShowRegularize(true)} className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Regularize Attendance
            </button>
          </div>
        )}
      </div>

      <HRModal open={showRegularize} onClose={() => setShowRegularize(false)} title="Regularize Attendance" onSubmit={() => regularizeMutation.mutate()} loading={saving}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Employee ID</label>
            <input type="number" value={regForm.employeeId} onChange={(e) => setRegForm({ ...regForm, employeeId: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
            <input type="date" value={regForm.date} onChange={(e) => setRegForm({ ...regForm, date: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
            <select value={regForm.status} onChange={(e) => setRegForm({ ...regForm, status: e.target.value as AttendanceStatus })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none">
              {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s.replace(/_/g, " ")}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Notes</label>
            <textarea value={regForm.notes} onChange={(e) => setRegForm({ ...regForm, notes: e.target.value })} rows={2} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none resize-none" />
          </div>
        </div>
      </HRModal>
    </div>
  );
}
