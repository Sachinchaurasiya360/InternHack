import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, Building2, Calendar, User } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import type { HREmployee, EmploymentStatus } from "./hr-types";
import { useState } from "react";
import HRModal from "./components/HRModal";

const STATUS_OPTIONS: EmploymentStatus[] = ["ONBOARDING", "ACTIVE", "ON_LEAVE", "ON_PROBATION", "NOTICE_PERIOD", "EXITED", "ALUMNI"];

export default function EmployeeDetailPage() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [newStatus, setNewStatus] = useState<EmploymentStatus>("ACTIVE");

  const { data: employee, isLoading } = useQuery({
    queryKey: hrKeys.employees.detail(Number(id)),
    queryFn: async () => {
      const res = await api.get(`/hr/employees/${id}`);
      return res.data as HREmployee;
    },
    enabled: !!id,
  });

  const { data: timeline } = useQuery({
    queryKey: hrKeys.employees.timeline(Number(id)),
    queryFn: async () => {
      const res = await api.get(`/hr/employees/${id}/timeline`);
      return res.data as { event: string; date: string; details?: string }[];
    },
    enabled: !!id,
  });

  const statusMutation = useMutation({
    mutationFn: async () => {
      await api.patch(`/hr/employees/${id}/status`, { status: newStatus });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: hrKeys.employees.detail(Number(id)) });
      setShowStatusModal(false);
    },
  });

  if (isLoading) {
    return <div className="space-y-4">{[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>;
  }

  if (!employee) {
    return <div className="text-center py-16 text-gray-500">Employee not found</div>;
  }

  const infoItems = [
    { icon: Mail, label: "Email", value: employee.email },
    { icon: Phone, label: "Phone", value: employee.phone || "-" },
    { icon: Building2, label: "Department", value: employee.department?.name || "-" },
    { icon: User, label: "Reporting To", value: employee.reportingManager ? `${employee.reportingManager.firstName} ${employee.reportingManager.lastName}` : "-" },
    { icon: Calendar, label: "Joining Date", value: new Date(employee.joiningDate).toLocaleDateString() },
    { icon: Calendar, label: "Confirmation", value: employee.confirmationDate ? new Date(employee.confirmationDate).toLocaleDateString() : "-" },
  ];

  return (
    <div className="space-y-6">
      <Link to="/recruiters/hr/employees" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 no-underline transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Employees
      </Link>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-lg font-bold text-gray-600 dark:text-gray-400">
            {employee.firstName[0]}{employee.lastName[0]}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">{employee.firstName} {employee.lastName}</h1>
              <HRStatusBadge status={employee.status} />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{employee.designation} - {employee.employeeCode}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">{employee.employmentType.replace(/_/g, " ")}</p>
          </div>
          <button onClick={() => { setNewStatus(employee.status); setShowStatusModal(true); }} className="px-4 py-2 text-xs font-semibold border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Update Status
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Info */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Employee Details</h2>
          <div className="space-y-4">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="text-xs text-gray-500 dark:text-gray-400 w-28">{item.label}</span>
                <span className="text-sm text-gray-900 dark:text-white">{item.value}</span>
              </div>
            ))}
          </div>

          {employee.address && (
            <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Address</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {[employee.address.line1, employee.address.line2, employee.address.city, employee.address.state, employee.address.zip, employee.address.country].filter(Boolean).join(", ")}
              </p>
            </div>
          )}

          {employee.currentSalary && (
            <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Salary Structure</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {employee.currentSalary.basic != null && <div><span className="text-gray-500 text-xs">Basic:</span> <span className="text-gray-900 dark:text-white font-medium">{employee.currentSalary.basic.toLocaleString()}</span></div>}
                {employee.currentSalary.hra != null && <div><span className="text-gray-500 text-xs">HRA:</span> <span className="text-gray-900 dark:text-white font-medium">{employee.currentSalary.hra.toLocaleString()}</span></div>}
                {employee.currentSalary.gross != null && <div><span className="text-gray-500 text-xs">Gross:</span> <span className="text-gray-900 dark:text-white font-semibold">{employee.currentSalary.gross.toLocaleString()}</span></div>}
                {employee.currentSalary.net != null && <div><span className="text-gray-500 text-xs">Net:</span> <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{employee.currentSalary.net.toLocaleString()}</span></div>}
              </div>
            </div>
          )}
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Timeline</h2>
          {timeline && timeline.length > 0 ? (
            <div className="space-y-4">
              {timeline.map((event, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-1.5" />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-gray-200 dark:bg-gray-700 mt-1" />}
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{event.event}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{new Date(event.date).toLocaleDateString()}</p>
                    {event.details && <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{event.details}</p>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center py-6">No timeline events</p>
          )}

          {/* Direct Reports */}
          {employee.directReports && employee.directReports.length > 0 && (
            <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3">Direct Reports ({employee.directReports.length})</h3>
              <div className="space-y-2">
                {employee.directReports.map((report) => (
                  <Link key={report.id} to={`/recruiters/hr/employees/${report.id}`} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 no-underline transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-500">{report.firstName[0]}{report.lastName[0]}</div>
                    <div>
                      <p className="text-xs font-medium text-gray-900 dark:text-white">{report.firstName} {report.lastName}</p>
                      <p className="text-[10px] text-gray-500">{report.designation}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Status Modal */}
      <HRModal open={showStatusModal} onClose={() => setShowStatusModal(false)} title="Update Status" onSubmit={() => statusMutation.mutate()} submitLabel="Update" loading={statusMutation.isPending}>
        <div>
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">New Status</label>
          <select value={newStatus} onChange={(e) => setNewStatus(e.target.value as EmploymentStatus)} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900/10">
            {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s.replace(/_/g, " ")}</option>)}
          </select>
        </div>
      </HRModal>
    </div>
  );
}
