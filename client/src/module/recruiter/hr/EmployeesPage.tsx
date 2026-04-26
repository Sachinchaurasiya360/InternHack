import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import NumberFlow from "@number-flow/react";
import {
  Users,
  Plus,
  Search,
  Rows3,
  LayoutGrid,
  X,
  Building2,
  Mail,
  Phone,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import type {
  HREmployee,
  EmploymentStatus,
  EmploymentType,
  HRDepartment,
  HRDashboardData,
} from "./hr-types";
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
const TYPE_OPTIONS: EmploymentType[] = [
  "FULL_TIME",
  "PART_TIME",
  "CONTRACT",
  "INTERN",
  "FREELANCER",
];

type ViewMode = "table" | "grid";

function formatLabel(value: string) {
  return value
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function initials(first: string, last: string) {
  return `${first?.[0] ?? ""}${last?.[0] ?? ""}`.toUpperCase();
}

export default function EmployeesPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [view, setView] = useState<ViewMode>("table");
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({
    employeeCode: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    departmentId: "",
    designation: "",
    employmentType: "FULL_TIME" as EmploymentType,
    joiningDate: "",
  });
  const [saving, setSaving] = useState(false);

  const params: Record<string, unknown> = {
    page,
    search,
    status: statusFilter,
    employmentType: typeFilter,
    departmentId: deptFilter,
  };

  const { data, isLoading } = useQuery({
    queryKey: hrKeys.employees.list(params),
    queryFn: async () => {
      const p = new URLSearchParams({ page: String(page), limit: "20" });
      if (search) p.set("search", search);
      if (statusFilter) p.set("status", statusFilter);
      if (typeFilter) p.set("employmentType", typeFilter);
      if (deptFilter) p.set("departmentId", deptFilter);
      const res = await api.get(`/hr/employees?${p}`);
      return res.data as {
        employees: HREmployee[];
        total: number;
        page: number;
        totalPages: number;
      };
    },
  });

  const { data: departments } = useQuery({
    queryKey: hrKeys.departments.list(),
    queryFn: async () => {
      const res = await api.get("/hr/departments");
      return res.data.departments as HRDepartment[];
    },
  });

  const { data: dashboard } = useQuery({
    queryKey: hrKeys.analytics.dashboard(),
    queryFn: async () => {
      const res = await api.get("/hr/analytics/dashboard");
      return res.data as HRDashboardData;
    },
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/employees", {
        ...form,
        departmentId: Number(form.departmentId),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "employees"] });
      queryClient.invalidateQueries({ queryKey: hrKeys.analytics.dashboard() });
      setShowCreate(false);
      setForm({
        employeeCode: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        departmentId: "",
        designation: "",
        employmentType: "FULL_TIME",
        joiningDate: "",
      });
    },
    onSettled: () => setSaving(false),
  });

  const deptMap = useMemo(() => {
    const m = new Map<string, string>();
    departments?.forEach((d) => m.set(String(d.id), d.name));
    return m;
  }, [departments]);

  const activeChips = useMemo(() => {
    const chips: { key: string; label: string; onRemove: () => void }[] = [];
    if (search)
      chips.push({
        key: "search",
        label: `"${search}"`,
        onRemove: () => {
          setSearch("");
          setPage(1);
        },
      });
    if (typeFilter)
      chips.push({
        key: "type",
        label: formatLabel(typeFilter),
        onRemove: () => {
          setTypeFilter("");
          setPage(1);
        },
      });
    if (deptFilter)
      chips.push({
        key: "dept",
        label: deptMap.get(deptFilter) ?? "Department",
        onRemove: () => {
          setDeptFilter("");
          setPage(1);
        },
      });
    return chips;
  }, [search, typeFilter, deptFilter, deptMap]);

  const clearAll = () => {
    setSearch("");
    setStatusFilter("");
    setTypeFilter("");
    setDeptFilter("");
    setPage(1);
  };

  const total = data?.total ?? 0;
  const stats = [
    { label: "Total", value: dashboard?.totalEmployees ?? total },
    { label: "Active", value: dashboard?.activeEmployees ?? 0 },
    { label: "On Leave", value: dashboard?.onLeaveToday ?? 0 },
    { label: "New (30d)", value: dashboard?.newHiresThisMonth ?? 0 },
  ];

  return (
    <div className="font-sans text-stone-900 dark:text-stone-50 space-y-8">
      <SEO title="Employees" noIndex />

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
              recruiter / hr / employees
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            People &{" "}
            <span className="relative inline-block">
              roster.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
              />
            </span>
          </h1>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
            Search, filter, and manage every person in your organization.
          </p>
        </div>

        <Button variant="primary" size="md" onClick={() => setShowCreate(true)}>
          <Plus className="w-4 h-4" />
          Add employee
        </Button>
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

      {/* Toolbar */}
      <section>
        {/* Status segmented */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => {
              setStatusFilter("");
              setPage(1);
            }}
            className={`shrink-0 px-3.5 py-2 text-xs font-mono uppercase tracking-widest rounded-lg border transition-colors ${
              statusFilter === ""
                ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                : "bg-white dark:bg-stone-900 border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
            }`}
          >
            All
          </button>
          {STATUS_OPTIONS.map((s) => {
            const active = statusFilter === s;
            return (
              <button
                key={s}
                onClick={() => {
                  setStatusFilter(active ? "" : s);
                  setPage(1);
                }}
                className={`shrink-0 px-3.5 py-2 text-xs font-mono uppercase tracking-widest rounded-lg border transition-colors ${
                  active
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                    : "bg-white dark:bg-stone-900 border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                }`}
              >
                {formatLabel(s)}
              </button>
            );
          })}
        </div>

        {/* Filter row */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-52">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search by name, code, or email"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            />
          </div>

          <select
            value={deptFilter}
            onChange={(e) => {
              setDeptFilter(e.target.value);
              setPage(1);
            }}
            className="px-3 py-2.5 text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg text-stone-700 dark:text-stone-300 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
          >
            <option value="">All departments</option>
            {departments?.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>

          <select
            value={typeFilter}
            onChange={(e) => {
              setTypeFilter(e.target.value);
              setPage(1);
            }}
            className="px-3 py-2.5 text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg text-stone-700 dark:text-stone-300 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
          >
            <option value="">All types</option>
            {TYPE_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {formatLabel(t)}
              </option>
            ))}
          </select>

          <div className="inline-flex items-center bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg p-0.5">
            <button
              onClick={() => setView("table")}
              aria-label="Table view"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest transition-colors ${
                view === "table"
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                  : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-50"
              }`}
            >
              <Rows3 className="w-3.5 h-3.5" /> Table
            </button>
            <button
              onClick={() => setView("grid")}
              aria-label="Grid view"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest transition-colors ${
                view === "grid"
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                  : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-50"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Grid
            </button>
          </div>
        </div>

        {/* Active chips */}
        <AnimatePresence>
          {activeChips.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 flex flex-wrap items-center gap-2"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                Filters
              </span>
              {activeChips.map((c) => (
                <span
                  key={c.key}
                  className="inline-flex items-center gap-1.5 pl-2.5 pr-1 py-1 text-xs bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg text-stone-700 dark:text-stone-300"
                >
                  {c.label}
                  <button
                    onClick={c.onRemove}
                    className="p-0.5 rounded-md hover:bg-stone-100 dark:hover:bg-white/5 text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
                    aria-label={`Remove ${c.label}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <button
                onClick={clearAll}
                className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
              >
                Clear all
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result count */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
            {isLoading
              ? "Loading"
              : total === 1
                ? "1 result"
                : `${total.toLocaleString()} results`}
          </div>
        </div>

        {/* Content */}
        <div className="mt-3">
          {isLoading ? (
            <LoadingState view={view} />
          ) : !data?.employees?.length ? (
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl">
              <HREmptyState
                icon={Users}
                title="No employees found"
                description={
                  activeChips.length || statusFilter
                    ? "Try clearing your filters to see more results."
                    : "Add your first employee to get started."
                }
                actionLabel="Add employee"
                onAction={() => setShowCreate(true)}
              />
            </div>
          ) : view === "table" ? (
            <EmployeeTable
              employees={data.employees}
              onRowClick={(e) => navigate(`/recruiters/hr/employees/${e.id}`)}
            />
          ) : (
            <EmployeeGrid
              employees={data.employees}
              onClick={(e) => navigate(`/recruiters/hr/employees/${e.id}`)}
            />
          )}

          {data && data.totalPages > 1 && (
            <PaginationControls
              currentPage={page}
              totalPages={data.totalPages}
              onPageChange={setPage}
              showingInfo={{
                total: data.total,
                limit: Math.max(1, data.employees.length),
              }}
              className="mt-6"
            />
          )}
        </div>
      </section>

      {/* Create Modal */}
      <HRModal
        open={showCreate}
        onClose={() => setShowCreate(false)}
        title="Add employee"
        subtitle="Create a new employee record"
        onSubmit={() => createMutation.mutate()}
        submitLabel="Create"
        loading={saving}
        wide
      >
        <div className="grid grid-cols-2 gap-4">
          <Field
            label="Employee code"
            required
            value={form.employeeCode}
            onChange={(v) => setForm({ ...form, employeeCode: v })}
          />
          <Field
            label="Email"
            required
            type="email"
            value={form.email}
            onChange={(v) => setForm({ ...form, email: v })}
          />
          <Field
            label="First name"
            required
            value={form.firstName}
            onChange={(v) => setForm({ ...form, firstName: v })}
          />
          <Field
            label="Last name"
            required
            value={form.lastName}
            onChange={(v) => setForm({ ...form, lastName: v })}
          />
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Department *
            </label>
            <select
              value={form.departmentId}
              onChange={(e) =>
                setForm({ ...form, departmentId: e.target.value })
              }
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            >
              <option value="">Select department</option>
              {departments?.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
          <Field
            label="Designation"
            required
            value={form.designation}
            onChange={(v) => setForm({ ...form, designation: v })}
          />
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Employment type
            </label>
            <select
              value={form.employmentType}
              onChange={(e) =>
                setForm({
                  ...form,
                  employmentType: e.target.value as EmploymentType,
                })
              }
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            >
              {TYPE_OPTIONS.map((t) => (
                <option key={t} value={t}>
                  {formatLabel(t)}
                </option>
              ))}
            </select>
          </div>
          <Field
            label="Joining date"
            required
            type="date"
            value={form.joiningDate}
            onChange={(v) => setForm({ ...form, joiningDate: v })}
          />
          <Field
            label="Phone"
            value={form.phone}
            onChange={(v) => setForm({ ...form, phone: v })}
          />
        </div>
      </HRModal>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
      />
    </div>
  );
}

function Avatar({ employee, size = "md" }: { employee: HREmployee; size?: "sm" | "md" | "lg" }) {
  const sizeCls =
    size === "lg"
      ? "h-11 w-11 text-sm"
      : size === "sm"
        ? "h-7 w-7 text-[10px]"
        : "h-9 w-9 text-xs";
  return (
    <span
      className={`${sizeCls} rounded-md bg-lime-400/15 border border-lime-400/30 flex items-center justify-center font-bold text-lime-700 dark:text-lime-400 shrink-0`}
    >
      {initials(employee.firstName, employee.lastName)}
    </span>
  );
}

function EmployeeTable({
  employees,
  onRowClick,
}: {
  employees: HREmployee[];
  onRowClick: (e: HREmployee) => void;
}) {
  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-stone-50 dark:bg-white/2">
            <tr className="border-b border-stone-200 dark:border-white/10">
              {["Employee", "Role", "Department", "Type", "Status", "Joined"].map(
                (h) => (
                  <th
                    key={h}
                    className="text-left text-[10px] font-mono uppercase tracking-widest text-stone-500 py-3 px-4"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 dark:divide-white/5">
            {employees.map((row, i) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.02 }}
                onClick={() => onRowClick(row)}
                className="cursor-pointer hover:bg-stone-50 dark:hover:bg-white/2 transition-colors"
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <Avatar employee={row} />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 truncate">
                        {row.firstName} {row.lastName}
                      </p>
                      <p className="text-[11px] font-mono text-stone-500 truncate">
                        {row.employeeCode}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-stone-700 dark:text-stone-300">
                    {row.designation}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-stone-700 dark:text-stone-300">
                    {row.department?.name || "/"}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
                    {formatLabel(row.employmentType)}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <HRStatusBadge status={row.status} />
                </td>
                <td className="py-3 px-4">
                  <span className="text-xs font-mono text-stone-500">
                    {new Date(row.joiningDate).toLocaleDateString(undefined, {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EmployeeGrid({
  employees,
  onClick,
}: {
  employees: HREmployee[];
  onClick: (e: HREmployee) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {employees.map((e, i) => (
        <motion.button
          key={e.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: i * 0.03 }}
          onClick={() => onClick(e)}
          className="group text-left bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-5 hover:border-stone-900 dark:hover:border-stone-50 transition-colors"
        >
          <div className="flex items-start justify-between gap-3">
            <Avatar employee={e} size="lg" />
            <HRStatusBadge status={e.status} />
          </div>
          <div className="mt-4">
            <p className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate">
              {e.firstName} {e.lastName}
            </p>
            <p className="mt-0.5 text-xs font-mono text-stone-500 truncate">
              {e.employeeCode} / {formatLabel(e.employmentType)}
            </p>
          </div>
          <div className="mt-4 space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-stone-700 dark:text-stone-300">
              <Building2 className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span className="truncate">{e.designation}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400">
              <Users className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span className="truncate">{e.department?.name || "No department"}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400">
              <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span className="truncate">{e.email}</span>
            </div>
            {e.phone && (
              <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400">
                <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span className="truncate">{e.phone}</span>
              </div>
            )}
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 dark:border-white/5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-stone-500">
              <CalendarDays className="w-3 h-3" />
              {new Date(e.joiningDate).toLocaleDateString(undefined, {
                month: "short",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-stone-500 group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors">
              View
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

function LoadingState({ view }: { view: ViewMode }) {
  if (view === "grid") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-48 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl animate-pulse"
          />
        ))}
      </div>
    );
  }
  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-3 space-y-2">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-12 bg-stone-100 dark:bg-white/5 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
}
