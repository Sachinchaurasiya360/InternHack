import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Building2, Plus, Users, Trash2, Edit2, ChevronRight } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRModal from "./components/HRModal";
import HREmptyState from "./components/HREmptyState";
import type { HRDepartment } from "./hr-types";

export default function DepartmentsPage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<"list" | "org">("list");
  const [showCreate, setShowCreate] = useState(false);
  const [editDept, setEditDept] = useState<HRDepartment | null>(null);
  const [form, setForm] = useState({ name: "", description: "", parentId: "" });
  const [saving, setSaving] = useState(false);

  const { data: departments, isLoading } = useQuery({
    queryKey: hrKeys.departments.list(),
    queryFn: async () => {
      const res = await api.get("/hr/departments?includeInactive=true");
      return res.data.departments as HRDepartment[];
    },
  });

  const { data: orgChart } = useQuery({
    queryKey: hrKeys.departments.orgChart(),
    queryFn: async () => {
      const res = await api.get("/hr/departments/org-chart");
      return res.data.orgChart as HRDepartment[];
    },
    enabled: tab === "org",
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      const body = { name: form.name, description: form.description || undefined, parentId: form.parentId ? Number(form.parentId) : undefined };
      if (editDept) {
        await api.put(`/hr/departments/${editDept.id}`, body);
      } else {
        await api.post("/hr/departments", body);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "departments"] });
      setShowCreate(false);
      setEditDept(null);
      setForm({ name: "", description: "", parentId: "" });
    },
    onSettled: () => setSaving(false),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => { await api.delete(`/hr/departments/${id}`); },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "departments"] }),
  });

  const openEdit = (dept: HRDepartment) => {
    setEditDept(dept);
    setForm({ name: dept.name, description: dept.description || "", parentId: dept.parentId ? String(dept.parentId) : "" });
    setShowCreate(true);
  };

  function OrgNode({ dept, depth = 0 }: { dept: HRDepartment; depth?: number }) {
    return (
      <div style={{ marginLeft: depth * 24 }}>
        <div className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          {depth > 0 && <ChevronRight className="w-3 h-3 text-gray-400" />}
          <Building2 className="w-4 h-4 text-gray-400 shrink-0" />
          <span className="text-sm font-medium text-gray-900 dark:text-white">{dept.name}</span>
          {dept._count && <span className="text-[10px] text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-lg">{dept._count.employees} employees</span>}
        </div>
        {dept.children?.map((child) => <OrgNode key={child.id} dept={child} depth={depth + 1} />)}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Departments</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{departments?.length ?? 0} departments</p>
        </div>
        <button onClick={() => { setEditDept(null); setForm({ name: "", description: "", parentId: "" }); setShowCreate(true); }} className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          <Plus className="w-4 h-4" /> Add Department
        </button>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
        {(["list", "org"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors ${tab === t ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700"}`}>
            {t === "list" ? "List View" : "Org Chart"}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
        {tab === "list" ? (
          isLoading ? (
            <div className="space-y-3">{[...Array(5)].map((_, i) => <div key={i} className="h-14 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
          ) : departments?.length ? (
            <div className="space-y-2">
              {departments.map((dept, i) => (
                <motion.div key={dept.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{dept.name}</p>
                    {dept.description && <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{dept.description}</p>}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Users className="w-3.5 h-3.5" />
                    <span>{dept._count?.employees ?? 0}</span>
                  </div>
                  {dept.parent && <span className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded-lg">Parent: {dept.parent.name}</span>}
                  <div className="flex items-center gap-1">
                    <button onClick={() => openEdit(dept)} className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => { if (confirm("Delete this department?")) deleteMutation.mutate(dept.id); }} className="p-1.5 rounded-lg text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <HREmptyState icon={Building2} title="No departments" description="Create your first department" actionLabel="Add Department" onAction={() => setShowCreate(true)} />
          )
        ) : (
          orgChart?.length ? (
            <div>{orgChart.map((dept) => <OrgNode key={dept.id} dept={dept} />)}</div>
          ) : (
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center py-6">No org chart data</p>
          )
        )}
      </div>

      <HRModal open={showCreate} onClose={() => { setShowCreate(false); setEditDept(null); }} title={editDept ? "Edit Department" : "Add Department"} onSubmit={() => createMutation.mutate()} submitLabel={editDept ? "Update" : "Create"} loading={saving}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900/10 resize-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Parent Department</label>
            <select value={form.parentId} onChange={(e) => setForm({ ...form, parentId: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900/10">
              <option value="">None (Top-level)</option>
              {departments?.filter((d) => d.id !== editDept?.id).map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </div>
        </div>
      </HRModal>
    </div>
  );
}
