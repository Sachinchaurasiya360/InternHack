import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Users, UserPlus, CalendarDays, Clock, CheckSquare, Wallet, ArrowRight, Briefcase } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatsCard from "./components/HRStatsCard";
import type { HRDashboardData } from "./hr-types";

export default function HRDashboardPage() {
  const { data, isLoading } = useQuery({
    queryKey: hrKeys.analytics.dashboard(),
    queryFn: async () => {
      const res = await api.get("/hr/analytics/dashboard");
      return res.data as HRDashboardData;
    },
  });

  const { data: deptData } = useQuery({
    queryKey: hrKeys.analytics.headcountDept(),
    queryFn: async () => {
      const res = await api.get("/hr/analytics/headcount/department");
      return res.data as { department: string; count: number }[];
    },
  });

  const stats = [
    { icon: Users, label: "Total Employees", value: data?.totalEmployees ?? 0, color: "text-indigo-600 dark:text-indigo-400" },
    { icon: Users, label: "Active Today", value: data?.activeEmployees ?? 0, color: "text-emerald-600 dark:text-emerald-400" },
    { icon: CalendarDays, label: "On Leave Today", value: data?.onLeaveToday ?? 0, color: "text-amber-600 dark:text-amber-400" },
    { icon: CalendarDays, label: "Pending Leave", value: data?.pendingLeaveRequests ?? 0, color: "text-orange-600 dark:text-orange-400" },
    { icon: CheckSquare, label: "Open Tasks", value: data?.openTasks ?? 0, color: "text-blue-600 dark:text-blue-400" },
    { icon: UserPlus, label: "New Hires (Month)", value: data?.newHiresThisMonth ?? 0, color: "text-purple-600 dark:text-purple-400" },
    { icon: Briefcase, label: "Upcoming Interviews", value: data?.upcomingInterviews ?? 0, color: "text-sky-600 dark:text-sky-400" },
    { icon: Wallet, label: "Pending Reimbursements", value: data?.pendingReimbursements ?? 0, color: "text-rose-600 dark:text-rose-400" },
  ];

  const quickActions = [
    { to: "/recruiters/hr/employees", label: "Manage Employees", icon: Users },
    { to: "/recruiters/hr/leave", label: "Leave Requests", icon: CalendarDays },
    { to: "/recruiters/hr/attendance", label: "Attendance", icon: Clock },
    { to: "/recruiters/hr/payroll", label: "Run Payroll", icon: Wallet },
    { to: "/recruiters/hr/tasks", label: "HR Tasks", icon: CheckSquare },
    { to: "/recruiters/hr/onboarding", label: "Onboarding", icon: UserPlus },
  ];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  const maxDeptCount = deptData ? Math.max(...deptData.map((d) => d.count), 1) : 1;

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HR Dashboard</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Overview of your organization's HR metrics</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <HRStatsCard key={s.label} icon={s.icon} label={s.label} value={s.value} color={s.color} index={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5"
        >
          <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action) => (
              <Link
                key={action.to}
                to={action.to}
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors no-underline group"
              >
                <action.icon className="w-4 h-4 text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 flex-1">{action.label}</span>
                <ArrowRight className="w-3 h-3 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 transition-colors" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Department Headcount */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5"
        >
          <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Department Headcount</h2>
          {deptData && deptData.length > 0 ? (
            <div className="space-y-3">
              {deptData.map((dept) => (
                <div key={dept.department} className="flex items-center gap-3">
                  <span className="text-xs text-gray-600 dark:text-gray-400 w-28 truncate">{dept.department}</span>
                  <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 dark:bg-indigo-400 rounded-lg transition-all duration-500"
                      style={{ width: `${(dept.count / maxDeptCount) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 w-8 text-right">{dept.count}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center py-6">No department data available</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
