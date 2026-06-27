import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  Users,
  UserPlus,
  CalendarDays,
  Clock,
  CheckSquare,
  Wallet,
  ArrowRight,
  Briefcase,
  Receipt,
  ShieldCheck,
} from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import type { HRDashboardData } from "./hr-types";
import { SEO } from "../../../components/SEO";

type StatItem = {
  label: string;
  value: number;
  hint?: string;
  accent?: "default" | "warn" | "success" | "danger";
};

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

  const stats: StatItem[] = [
    { label: "total employees", value: data?.totalEmployees ?? 0 },
    { label: "active today", value: data?.activeEmployees ?? 0, accent: "success" },
    { label: "on leave", value: data?.onLeaveToday ?? 0, accent: "warn" },
    { label: "pending leave", value: data?.pendingLeaveRequests ?? 0, accent: "warn" },
    { label: "open tasks", value: data?.openTasks ?? 0 },
    { label: "new hires", value: data?.newHiresThisMonth ?? 0, hint: "this month" },
    { label: "upcoming interviews", value: data?.upcomingInterviews ?? 0 },
    { label: "pending reimbursements", value: data?.pendingReimbursements ?? 0, accent: "danger" },
  ];

  const quickActions = [
    { to: "/recruiters/hr/employees", label: "Employees", icon: Users },
    { to: "/recruiters/hr/leave", label: "Leave requests", icon: CalendarDays },
    { to: "/recruiters/hr/attendance", label: "Attendance", icon: Clock },
    { to: "/recruiters/hr/payroll", label: "Run payroll", icon: Wallet },
    { to: "/recruiters/hr/tasks", label: "HR tasks", icon: CheckSquare },
    { to: "/recruiters/hr/onboarding", label: "Onboarding", icon: UserPlus },
    { to: "/recruiters/hr/interviews", label: "Interviews", icon: Briefcase },
    { to: "/recruiters/hr/reimbursements", label: "Reimbursements", icon: Receipt },
    { to: "/recruiters/hr/compliance", label: "Compliance", icon: ShieldCheck },
  ];

  const maxDeptCount = deptData ? Math.max(...deptData.map((d) => d.count), 1) : 1;

  return (
    <div className="max-w-7xl mx-auto">
      <SEO title="HR Dashboard" noIndex />

      {/* Editorial header */}
      <header className="mt-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            recruiter / hr
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          People{" "}
          <span className="relative inline-block">
            overview.
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
              className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
            />
          </span>
        </h1>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
          Headcount, leave, tasks, and payroll at a glance.
        </p>
      </header>

      {/* Stat tiles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden mb-8">
        {stats.map((s, i) =>
          isLoading ? (
            <div
              key={i}
              className="bg-white dark:bg-stone-950 px-4 py-5 animate-pulse"
            >
              <div className="h-2 w-20 bg-stone-100 dark:bg-stone-900 rounded mb-3" />
              <div className="h-6 w-10 bg-stone-100 dark:bg-stone-900 rounded" />
            </div>
          ) : (
            <StatTile key={s.label} {...s} />
          )
        )}
      </div>

      {/* Two-column content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Quick actions */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="lg:col-span-2 bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1 w-1 bg-lime-400" />
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              quick actions
            </h2>
          </div>
          <ul className="space-y-0.5">
            {quickActions.map((action) => (
              <li key={action.to}>
                <Link
                  to={action.to}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors no-underline"
                >
                  <action.icon className="w-4 h-4 shrink-0 text-stone-500 group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors" />
                  <span className="flex-1 text-sm font-medium text-stone-800 dark:text-stone-200">
                    {action.label}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-300 dark:text-stone-700 group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Department headcount */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="lg:col-span-3 bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1 w-1 bg-lime-400" />
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              department headcount
            </h2>
          </div>
          {!deptData ? (
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3 animate-pulse">
                  <div className="w-28 h-3 bg-stone-100 dark:bg-stone-900 rounded" />
                  <div className="flex-1 h-3 bg-stone-100 dark:bg-stone-900 rounded" />
                  <div className="w-6 h-3 bg-stone-100 dark:bg-stone-900 rounded" />
                </div>
              ))}
            </div>
          ) : deptData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-stone-400" />
              </div>
              <p className="text-sm text-stone-500">No department data yet.</p>
              <Link
                to="/recruiters/hr/departments"
                className="mt-2 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-stone-900 dark:text-stone-50 hover:text-lime-500 no-underline"
              >
                Add department
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {deptData.map((dept, i) => (
                <li key={dept.department} className="flex items-center gap-3">
                  <span className="w-32 truncate text-xs text-stone-600 dark:text-stone-400">
                    {dept.department}
                  </span>
                  <div className="flex-1 h-2 bg-stone-100 dark:bg-stone-900 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(dept.count / maxDeptCount) * 100}%` }}
                      transition={{ duration: 0.5, delay: 0.05 * i, ease: "easeOut" }}
                      className="h-full bg-lime-400"
                    />
                  </div>
                  <span className="w-8 text-right text-xs font-mono tabular-nums text-stone-900 dark:text-stone-50">
                    {dept.count}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </motion.section>
      </div>
    </div>
  );
}

function StatTile({ label, value, hint, accent = "default" }: StatItem) {
  const dot =
    accent === "warn"
      ? "bg-amber-500"
      : accent === "danger"
        ? "bg-red-500"
        : accent === "success"
          ? "bg-lime-400"
          : "bg-stone-400";
  return (
    <div className="bg-white dark:bg-stone-950 px-4 py-5">
      <div className="flex items-center gap-1.5 mb-1">
        <span className={`h-1 w-1 ${dot}`} />
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          {label}
        </span>
      </div>
      <div className="text-2xl font-bold tabular-nums text-stone-900 dark:text-stone-50">
        {value}
      </div>
      {hint && (
        <div className="mt-0.5 text-[10px] font-mono uppercase tracking-widest text-stone-400">
          {hint}
        </div>
      )}
    </div>
  );
}
