import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Users, Plus, Search } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import HRDataTable, { type Column } from "./components/HRDataTable";
import type { HREmployee, EmploymentStatus, EmploymentType, HRDepartment } from "./hr-types";

const STATUS_OPTIONS: EmploymentStatus[] = ["ONBOARDING", "ACTIVE", "ON_LEAVE", "ON_PROBATION", "NOTICE_PERIOD", "EXITED", "ALUMNI"];
const TYPE_OPTIONS: EmploymentType[] = ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERN", "FREELANCER"];

export default function EmployeesPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ employeeCode: "", firstName: "", lastName: "", email: "", phone: "", departmentId: "", designation: "", employmentType: "FULL_TIME" as EmploymentType, joiningDate: "" });
  const [saving, setSaving] = useState(false);

  const params: Record<string, unknown> = { page, search, status: statusFilter, employmentType: typeFilter, departmentId: deptFilter };

  const { data, isLoading } = useQuery({
    queryKey: hrKeys.employees.list(params),
    queryFn: async () => {
      const p = new URLSearchParams({ page: String(page), limit: "20" });
      if (search) p.set("search", search);
      if (statusFilter) p.set("status", statusFilter);
      if (typeFilter) p.set("employmentType", typeFilter);
      if (deptFilter) p.set("departmentId", deptFilter);
      const res = await api.get(`/hr/employees?${p}`);
      return res.data as { employees: HREmployee[]; total: number; page: number; totalPages: number };
    },
  });

  const { data: departments } = useQuery({
    queryKey: hrKeys.departments.list(),
    queryFn: async () => {
      const res = await api.get("/hr/departments");
      return res.data.departments as HRDepartment[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/employees", { ...form, departmentId: Number(form.departmentId) });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "employees"] });
      setShowCreate(false);
      setForm({ employeeCode: "", firstName: "", lastName: "", email: "", phone: "", departmentId: "", designation: "", employmentType: "FULL_TIME", joiningDate: "" });
    },
    onSettled: () => setSaving(false),
  });

  const columns: Column<HREmployee>[] = [
    {
      header: "Employee",
      accessor: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-400">
            {row.firstName[0]}{row.lastName[0]}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">{row.firstName} {row.lastName}</p>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">{row.employeeCode}</p>
          </div>
        </div>
      ),
    },
    { header: "Designation", accessor: (row) => <span className="text-sm">{row.designation}</span> },
    { header: "Department", accessor: (row) => <span className="text-sm">{row.department?.name || "-"}</span> },
    { header: "Type", accessor: (row) => <span className="text-xs text-gray-500">{row.employmentType.replace(/_/g, " ")}</span> },
    { header: "Status", accessor: (row) => <HRStatusBadge status={row.status} /> },
    { header: "Joined", accessor: (row) => <span className="text-xs text-gray-500">{new Date(row.joiningDate).toLocaleDateString()}</span> },
  ];

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Employees</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{data?.total ?? 0} total employees</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          <Plus className="w-4 h-4" /> Add Employee
        </button>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search employees..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full pl-9 pr-4 py-2.5 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10"
          />
        </div>
        <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }} className="px-3 py-2.5 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none text-gray-700 dark:text-gray-300">
          <option value="">All Status</option>
          {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s.replace(/_/g, " ")}</option>)}
        </select>
        <select value={typeFilter} onChange={(e) => { setTypeFilter(e.target.value); setPage(1); }} className="px-3 py-2.5 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none text-gray-700 dark:text-gray-300">
          <option value="">All Types</option>
          {TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t.replace(/_/g, " ")}</option>)}
        </select>
        <select value={deptFilter} onChange={(e) => { setDeptFilter(e.target.value); setPage(1); }} className="px-3 py-2.5 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none text-gray-700 dark:text-gray-300">
          <option value="">All Departments</option>
          {departments?.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
        {data?.employees?.length ? (
          <HRDataTable<HREmployee>
            columns={columns}
            data={data.employees}
            keyField="id"
            page={page}
            totalPages={data.totalPages}
            total={data.total}
            onPageChange={setPage}
            onRowClick={(row) => navigate(`/recruiters/hr/employees/${row.id}`)}
            loading={isLoading}
          />
        ) : isLoading ? (
          <HRDataTable columns={columns} data={[]} keyField={"id" as never} loading />
        ) : (
          <HREmptyState icon={Users} title="No employees found" description="Add your first employee to get started" actionLabel="Add Employee" onAction={() => setShowCreate(true)} />
        )}
      </div>

      {/* Create Modal */}
      <HRModal open={showCreate} onClose={() => setShowCreate(false)} title="Add Employee" onSubmit={() => createMutation.mutate()} submitLabel="Create" loading={saving} wide>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Employee Code *</label>
            <input value={form.employeeCode} onChange={(e) => setForm({ ...form, employeeCode: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">First Name *</label>
            <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name *</label>
            <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Department *</label>
            <select value={form.departmentId} onChange={(e) => setForm({ ...form, departmentId: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900/10">
              <option value="">Select department</option>
              {departments?.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Designation *</label>
            <input value={form.designation} onChange={(e) => setForm({ ...form, designation: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Employment Type</label>
            <select value={form.employmentType} onChange={(e) => setForm({ ...form, employmentType: e.target.value as EmploymentType })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900/10">
              {TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t.replace(/_/g, " ")}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Joining Date *</label>
            <input type="date" value={form.joiningDate} onChange={(e) => setForm({ ...form, joiningDate: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          </div>
        </div>
      </HRModal>
    </div>
  );
}
