import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Building2,
  Calendar,
  User,
  MapPin,
  Wallet,
  Users,
  Clock,
} from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import type { HREmployee, EmploymentStatus } from "./hr-types";
import HRModal from "./components/HRModal";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

const STATUS_OPTIONS: EmploymentStatus[] = [
  "ONBOARDING",
  "ACTIVE",
  "ON_LEAVE",
  "ON_PROBATION",
  "NOTICE_PERIOD",
  "EXITED",
  "ALUMNI",
];

const STATUS_DOT: Record<EmploymentStatus, string> = {
  ONBOARDING: "bg-blue-500",
  ACTIVE: "bg-lime-400",
  ON_LEAVE: "bg-amber-500",
  ON_PROBATION: "bg-amber-500",
  NOTICE_PERIOD: "bg-red-500",
  EXITED: "bg-stone-400",
  ALUMNI: "bg-stone-300",
};

const inputClass =
  "w-full px-3 py-2 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors";

const labelClass =
  "block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5";

function labelize(value: string): string {
  return value.replace(/_/g, " ").toLowerCase();
}

function formatDate(iso?: string | null): string {
  if (!iso) return "/";
  return new Date(iso).toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function initials(first?: string, last?: string): string {
  return `${first?.[0] ?? ""}${last?.[0] ?? ""}`.toUpperCase();
}

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
      queryClient.invalidateQueries({
        queryKey: hrKeys.employees.detail(Number(id)),
      });
      setShowStatusModal(false);
    },
  });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto">
        <SEO title="Employee" noIndex />
        <div className="mt-6 mb-8 space-y-4 animate-pulse">
          <div className="h-3 w-48 bg-stone-100 dark:bg-stone-900 rounded" />
          <div className="h-10 w-72 bg-stone-100 dark:bg-stone-900 rounded" />
          <div className="h-20 bg-stone-100 dark:bg-stone-900 rounded-md" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-72 bg-stone-100 dark:bg-stone-900 rounded-md animate-pulse" />
          <div className="h-72 bg-stone-100 dark:bg-stone-900 rounded-md animate-pulse" />
        </div>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="max-w-7xl mx-auto">
        <SEO title="Employee not found" noIndex />
        <div className="mt-6 flex flex-col items-center justify-center py-24 text-center border border-dashed border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-950">
          <div className="w-12 h-12 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center mb-4">
            <User className="w-5 h-5 text-stone-400" />
          </div>
          <h3 className="text-base font-semibold text-stone-900 dark:text-stone-50 mb-1">
            Employee not found
          </h3>
          <p className="text-sm text-stone-500 max-w-xs mb-5">
            This record may have been removed or you don't have access to it.
          </p>
          <Button variant="primary" size="sm" asChild>
            <Link to="/recruiters/hr/employees">Back to employees</Link>
          </Button>
        </div>
      </div>
    );
  }

  const addressParts = employee.address
    ? [
        employee.address.line1,
        employee.address.line2,
        employee.address.city,
        employee.address.state,
        employee.address.zip,
        employee.address.country,
      ].filter(Boolean)
    : [];

  const infoItems = [
    { icon: Mail, label: "email", value: employee.email },
    { icon: Phone, label: "phone", value: employee.phone || "/" },
    {
      icon: Building2,
      label: "department",
      value: employee.department?.name || "/",
    },
    {
      icon: User,
      label: "reports to",
      value: employee.reportingManager
        ? `${employee.reportingManager.firstName} ${employee.reportingManager.lastName}`
        : "/",
    },
    { icon: Calendar, label: "joined", value: formatDate(employee.joiningDate) },
    {
      icon: Calendar,
      label: "confirmed",
      value: formatDate(employee.confirmationDate),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <SEO title={`${employee.firstName} ${employee.lastName}`} noIndex />

      <header className="mt-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            recruiter / hr / employees /{" "}
            <span className="text-stone-700 dark:text-stone-300">
              {employee.employeeCode}
            </span>
          </span>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4 min-w-0">
            <span className="shrink-0 h-14 w-14 rounded-md bg-lime-400/15 border border-lime-400/30 flex items-center justify-center text-base font-bold text-lime-700 dark:text-lime-400">
              {initials(employee.firstName, employee.lastName)}
            </span>
            <div className="min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                {employee.firstName}{" "}
                <span className="relative inline-block">
                  {employee.lastName}.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                    className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
                  />
                </span>
              </h1>
              <div className="mt-2 flex items-center gap-3 flex-wrap text-[11px] text-stone-500">
                <span className="inline-flex items-center gap-1">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[employee.status]}`}
                  />
                  <span className="font-mono uppercase tracking-widest">
                    {labelize(employee.status)}
                  </span>
                </span>
                <span className="text-stone-400">·</span>
                <span>{employee.designation}</span>
                <span className="text-stone-400">·</span>
                <span className="font-mono uppercase tracking-widest">
                  {labelize(employee.employmentType)}
                </span>
              </div>
            </div>
          </div>

          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              setNewStatus(employee.status);
              setShowStatusModal(true);
            }}
          >
            Update status
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
          <Stat label="department" value={employee.department?.name || "/"} />
          <Stat label="type" value={labelize(employee.employmentType)} />
          <Stat label="joined" value={formatDate(employee.joiningDate)} />
          <Stat
            label="reports"
            value={employee.directReports?.length ?? 0}
            dotClass="bg-stone-400"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-950 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1 w-1 bg-lime-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              employee details
            </span>
          </div>

          <dl className="space-y-3">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 text-sm"
              >
                <item.icon className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500 w-24 shrink-0">
                  {item.label}
                </dt>
                <dd className="text-stone-900 dark:text-stone-50 truncate">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          {addressParts.length > 0 && (
            <div className="mt-5 pt-4 border-t border-stone-100 dark:border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  address
                </span>
              </div>
              <p className="text-sm text-stone-700 dark:text-stone-300">
                {addressParts.join(", ")}
              </p>
            </div>
          )}

          {employee.currentSalary && (
            <div className="mt-5 pt-4 border-t border-stone-100 dark:border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <Wallet className="w-3.5 h-3.5 text-stone-400" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  salary structure
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {employee.currentSalary.basic != null && (
                  <SalaryRow
                    label="basic"
                    value={employee.currentSalary.basic}
                  />
                )}
                {employee.currentSalary.hra != null && (
                  <SalaryRow label="hra" value={employee.currentSalary.hra} />
                )}
                {employee.currentSalary.gross != null && (
                  <SalaryRow
                    label="gross"
                    value={employee.currentSalary.gross}
                    strong
                  />
                )}
                {employee.currentSalary.net != null && (
                  <SalaryRow
                    label="net"
                    value={employee.currentSalary.net}
                    strong
                    accent
                  />
                )}
              </div>
            </div>
          )}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.08 }}
          className="border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-950 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1 w-1 bg-lime-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              timeline
            </span>
          </div>

          {timeline && timeline.length > 0 ? (
            <ol className="space-y-0">
              {timeline.map((event, i) => (
                <li key={i} className="flex gap-3">
                  <div className="flex flex-col items-center shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400 mt-1.5" />
                    {i < timeline.length - 1 && (
                      <span className="w-px flex-1 bg-stone-200 dark:bg-white/10 mt-1" />
                    )}
                  </div>
                  <div className="pb-5 min-w-0 flex-1">
                    <p className="text-sm font-semibold text-stone-900 dark:text-stone-50">
                      {event.event}
                    </p>
                    <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] text-stone-500">
                      <Clock className="w-3 h-3 text-stone-400" />
                      {formatDate(event.date)}
                    </p>
                    {event.details && (
                      <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
                        {event.details}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-stone-500 py-6 text-center">
              No timeline events yet.
            </p>
          )}

          {employee.directReports && employee.directReports.length > 0 && (
            <div className="mt-5 pt-4 border-t border-stone-100 dark:border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-3.5 h-3.5 text-stone-400" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  direct reports
                </span>
                <span className="text-[10px] font-mono tabular-nums text-stone-400">
                  {employee.directReports.length}
                </span>
              </div>
              <div className="space-y-1">
                {employee.directReports.map((report) => (
                  <Link
                    key={report.id}
                    to={`/recruiters/hr/employees/${report.id}`}
                    className="flex items-center gap-3 px-2 py-1.5 -mx-2 rounded-md no-underline hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors"
                  >
                    <span className="shrink-0 h-7 w-7 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center text-[10px] font-bold text-stone-600 dark:text-stone-300">
                      {initials(report.firstName, report.lastName)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-stone-900 dark:text-stone-50 truncate">
                        {report.firstName} {report.lastName}
                      </p>
                      <p className="text-[11px] text-stone-500 truncate">
                        {report.designation}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.section>
      </div>

      <HRModal
        open={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        title="Update Status"
        onSubmit={() => statusMutation.mutate()}
        submitLabel="Update"
        loading={statusMutation.isPending}
      >
        <div>
          <label className={labelClass}>new status</label>
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value as EmploymentStatus)}
            className={inputClass}
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {labelize(s)}
              </option>
            ))}
          </select>
        </div>
      </HRModal>
    </div>
  );
}

function Stat({
  label,
  value,
  dotClass,
}: {
  label: string;
  value: number | string;
  dotClass?: string;
}) {
  return (
    <div className="bg-white dark:bg-stone-950 px-4 py-3">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
        {dotClass && <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />}
        {label}
      </div>
      <div className="mt-0.5 text-sm sm:text-base font-semibold tabular-nums text-stone-900 dark:text-stone-50 truncate">
        {value}
      </div>
    </div>
  );
}

function SalaryRow({
  label,
  value,
  strong,
  accent,
}: {
  label: string;
  value: number;
  strong?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-sm border border-stone-100 dark:border-white/5">
      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
        {label}
      </span>
      <span
        className={`text-sm tabular-nums ${
          strong
            ? accent
              ? "font-bold text-lime-700 dark:text-lime-400"
              : "font-bold text-stone-900 dark:text-stone-50"
            : "text-stone-900 dark:text-stone-50"
        }`}
      >
        {value.toLocaleString()}
      </span>
    </div>
  );
}
