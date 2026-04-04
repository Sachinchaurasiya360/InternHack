import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Key, Plus, Trash2, Edit2, Shield, UserPlus } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type { CustomRole } from "./hr-types";
import { SEO } from "../../../components/SEO";

const ALL_PERMISSIONS = [
  "HR_READ", "HR_WRITE", "HR_ADMIN",
  "EMPLOYEE_READ", "EMPLOYEE_WRITE",
  "LEAVE_APPROVE", "LEAVE_ADMIN",
  "PAYROLL_VIEW", "PAYROLL_MANAGE",
  "PERFORMANCE_VIEW", "PERFORMANCE_MANAGE",
  "ATTENDANCE_VIEW", "ATTENDANCE_MANAGE",
  "COMPLIANCE_VIEW", "COMPLIANCE_MANAGE",
  "ANALYTICS_VIEW", "ANALYTICS_ADMIN",
  "RBAC_MANAGE", "TASK_VIEW", "TASK_MANAGE",
  "ONBOARDING_MANAGE", "REIMBURSEMENT_APPROVE",
  "WORKFLOW_MANAGE",
];

export default function RolesPage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<"roles" | "assign">("roles");
  const [showCreate, setShowCreate] = useState(false);
  const [editRole, setEditRole] = useState<CustomRole | null>(null);
  const [form, setForm] = useState({ name: "", description: "", permissions: [] as string[] });
  const [saving, setSaving] = useState(false);
  const [assignForm, setAssignForm] = useState({ userId: "", roleId: "" });

  const { data: roles, isLoading } = useQuery({
    queryKey: hrKeys.roles.list(),
    queryFn: async () => {
      const res = await api.get("/hr/rbac/roles");
      return res.data as CustomRole[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      if (editRole) {
        await api.put(`/hr/rbac/roles/${editRole.id}`, form);
      } else {
        await api.post("/hr/rbac/roles", form);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "roles"] });
      setShowCreate(false);
      setEditRole(null);
      setForm({ name: "", description: "", permissions: [] });
    },
    onSettled: () => setSaving(false),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => { await api.delete(`/hr/rbac/roles/${id}`); },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "roles"] }),
  });

  const assignMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/rbac/assign", { userId: Number(assignForm.userId), roleId: Number(assignForm.roleId) });
    },
    onSuccess: () => {
      setAssignForm({ userId: "", roleId: "" });
    },
    onSettled: () => setSaving(false),
  });

  const openEdit = (role: CustomRole) => {
    setEditRole(role);
    setForm({ name: role.name, description: role.description || "", permissions: [...role.permissions] });
    setShowCreate(true);
  };

  const togglePermission = (perm: string) => {
    setForm((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(perm)
        ? prev.permissions.filter((p) => p !== perm)
        : [...prev.permissions, perm],
    }));
  };

  return (
    <div className="space-y-6">
      <SEO title="Roles" noIndex />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Roles & Access</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage roles and permissions</p>
        </div>
        <button onClick={() => { setEditRole(null); setForm({ name: "", description: "", permissions: [] }); setShowCreate(true); }} className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          <Plus className="w-4 h-4" /> New Role
        </button>
      </motion.div>

      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
        {(["roles", "assign"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors capitalize ${tab === t ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400"}`}>
            {t === "assign" ? "Assign Roles" : "Roles"}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
        {tab === "roles" && (
          isLoading ? (
            <div className="space-y-3">{[...Array(3)].map((_, i) => <div key={i} className="h-20 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
          ) : roles?.length ? (
            <div className="space-y-3">
              {roles.map((role, i) => (
                <motion.div key={role.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{role.name}</p>
                        {role.isSystem && <span className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded-lg">System</span>}
                      </div>
                      {role.description && <p className="text-xs text-gray-500 mt-0.5">{role.description}</p>}
                    </div>
                    {!role.isSystem && (
                      <div className="flex items-center gap-1">
                        <button onClick={() => openEdit(role)} className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 transition-colors">
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={() => { if (confirm("Delete this role?")) deleteMutation.mutate(role.id); }} className="p-1.5 rounded-lg text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {role.permissions.map((perm) => (
                      <span key={perm} className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-lg">
                        {perm}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <HREmptyState icon={Key} title="No custom roles" actionLabel="Create Role" onAction={() => setShowCreate(true)} />
          )
        )}

        {tab === "assign" && (
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <UserPlus className="w-5 h-5 text-gray-400" />
              <h2 className="text-sm font-bold text-gray-900 dark:text-white">Assign Role to User</h2>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">User ID</label>
              <input type="number" value={assignForm.userId} onChange={(e) => setAssignForm({ ...assignForm, userId: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Role</label>
              <select value={assignForm.roleId} onChange={(e) => setAssignForm({ ...assignForm, roleId: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none">
                <option value="">Select role</option>
                {roles?.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
              </select>
            </div>
            <button onClick={() => assignMutation.mutate()} disabled={!assignForm.userId || !assignForm.roleId || saving} className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 transition-colors">
              Assign Role
            </button>
          </div>
        )}
      </div>

      {/* Create/Edit Role Modal */}
      <HRModal open={showCreate} onClose={() => { setShowCreate(false); setEditRole(null); }} title={editRole ? "Edit Role" : "New Role"} onSubmit={() => createMutation.mutate()} submitLabel={editRole ? "Update" : "Create"} loading={saving} wide>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Role Name *</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={2} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none resize-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Permissions ({form.permissions.length} selected)</label>
            <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
              {ALL_PERMISSIONS.map((perm) => (
                <label key={perm} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors">
                  <input type="checkbox" checked={form.permissions.includes(perm)} onChange={() => togglePermission(perm)} className="rounded" />
                  <span className="text-xs text-gray-700 dark:text-gray-300">{perm}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </HRModal>
    </div>
  );
}
