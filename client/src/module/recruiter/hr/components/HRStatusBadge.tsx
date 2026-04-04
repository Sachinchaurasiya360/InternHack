import React from "react";

const STATUS_COLORS: Record<string, string> = {
  // Employment
  ACTIVE: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  ONBOARDING: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  ON_LEAVE: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  ON_PROBATION: "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  NOTICE_PERIOD: "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  EXITED: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  ALUMNI: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  // Leave
  PENDING: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  APPROVED: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  REJECTED: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  CANCELLED: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  // Attendance
  PRESENT: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  ABSENT: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  HALF_DAY: "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  HOLIDAY: "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  WEEKEND: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  WORK_FROM_HOME: "bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  // Payroll
  DRAFT: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  PROCESSING: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  PAID: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  // Task
  TODO: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  IN_PROGRESS: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  IN_REVIEW: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  DONE: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  // Review
  SELF_REVIEW: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  MANAGER_REVIEW: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  CALIBRATION: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  COMPLETED: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  // Interview
  SCHEDULED: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  CONFIRMED: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  NO_SHOW: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  RESCHEDULED: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  // Reimbursement
  SUBMITTED: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  MANAGER_APPROVED: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  FINANCE_APPROVED: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  // Onboarding
  NOT_STARTED: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  OVERDUE: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  // Priority
  LOW: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  MEDIUM: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  HIGH: "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  URGENT: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  // Workflow
  PAUSED: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
};

const HRStatusBadge = React.memo(function HRStatusBadge({ status }: { status: string }) {
  const cls = STATUS_COLORS[status] || "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
  return (
    <span className={`inline-flex px-2.5 py-0.5 rounded-lg text-[11px] font-semibold tracking-wide ${cls}`}>
      {status.replace(/_/g, " ")}
    </span>
  );
});

export default HRStatusBadge;
