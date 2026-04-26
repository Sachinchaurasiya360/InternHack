import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Key,
  Plus,
  Trash2,
  Edit2,
  Shield,
  UserPlus,
  Search,
  Lock,
  Users,
} from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRModal from "./components/HRModal";
import type { CustomRole } from "./hr-types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

type Tab = "roles" | "assign";

const ALL_PERMISSIONS = [
  "HR_READ",
  "HR_WRITE",
  "HR_ADMIN",
  "EMPLOYEE_READ",
  "EMPLOYEE_WRITE",
  "LEAVE_APPROVE",
  "LEAVE_ADMIN",
  "PAYROLL_VIEW",
  "PAYROLL_MANAGE",
  "PERFORMANCE_VIEW",
  "PERFORMANCE_MANAGE",
  "ATTENDANCE_VIEW",
  "ATTENDANCE_MANAGE",
  "COMPLIANCE_VIEW",
  "COMPLIANCE_MANAGE",
  "ANALYTICS_VIEW",
  "ANALYTICS_ADMIN",
  "RBAC_MANAGE",
  "TASK_VIEW",
  "TASK_MANAGE",
  "ONBOARDING_MANAGE",
  "REIMBURSEMENT_APPROVE",
  "WORKFLOW_MANAGE",
];

const inputClass =
  "w-full px-3 py-2 rounded-md bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors";

const labelClass =
  "block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5";

export default function RolesPage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<Tab>("roles");
  const [showCreate, setShowCreate] = useState(false);
  const [editRole, setEditRole] = useState<CustomRole | null>(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    permissions: [] as string[],
  });
  const [saving, setSaving] = useState(false);
  const [assignForm, setAssignForm] = useState({ userId: "", roleId: "" });
  const [assigned, setAssigned] = useState(false);
  const [search, setSearch] = useState("");

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
    mutationFn: async (id: number) => {
      await api.delete(`/hr/rbac/roles/${id}`);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "roles"] }),
  });

  const assignMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/rbac/assign", {
        userId: Number(assignForm.userId),
        roleId: Number(assignForm.roleId),
      });
    },
    onSuccess: () => {
      setAssignForm({ userId: "", roleId: "" });
      setAssigned(true);
      setTimeout(() => setAssigned(false), 2000);
    },
    onSettled: () => setSaving(false),
  });

  const openEdit = (role: CustomRole) => {
    setEditRole(role);
    setForm({
      name: role.name,
      description: role.description || "",
      permissions: [...role.permissions],
    });
    setShowCreate(true);
  };

  const openCreate = () => {
    setEditRole(null);
    setForm({ name: "", description: "", permissions: [] });
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

  const totals = useMemo(() => {
    const list = roles ?? [];
    return {
      total: list.length,
      custom: list.filter((r) => !r.isSystem).length,
      system: list.filter((r) => r.isSystem).length,
    };
  }, [roles]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list = roles ?? [];
    if (!q) return list;
    return list.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        (r.description || "").toLowerCase().includes(q) ||
        r.permissions.some((p) => p.toLowerCase().includes(q)),
    );
  }, [roles, search]);

  return (
    <div className="max-w-7xl mx-auto">
      <SEO title="Roles & Access" noIndex />

      <header className="mt-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            recruiter / hr / roles
          </span>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Roles &{" "}
              <span className="relative inline-block">
                access.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
                />
              </span>
            </h1>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
              Group permissions into roles, then assign them to the people who need them.
            </p>
          </div>

          <Button variant="primary" size="md" onClick={openCreate}>
            <Plus className="w-4 h-4" />
            New role
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
          <Stat label="total" value={totals.total} />
          <Stat label="custom" value={totals.custom} dotClass="bg-lime-400" />
          <Stat label="system" value={totals.system} dotClass="bg-stone-400" />
        </div>
      </header>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-950 p-0.5">
          {(
            [
              { key: "roles", label: "Roles", icon: Shield },
              { key: "assign", label: "Assign", icon: UserPlus },
            ] as const
          ).map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
                  active
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                }`}
              >
                <t.icon className="w-3.5 h-3.5" />
                {t.label}
              </button>
            );
          })}
        </div>

        {tab === "roles" && (
          <div className="relative flex-1 min-w-60 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search roles, permissions"
              className={`${inputClass} pl-9`}
            />
          </div>
        )}
      </div>

      {tab === "roles" ? (
        <>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1 w-1 bg-lime-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              defined roles
            </span>
          </div>

          {isLoading ? (
            <ListSkeleton />
          ) : filtered.length === 0 ? (
            <EmptyState
              icon={Key}
              title={
                (roles?.length ?? 0) === 0 ? "No custom roles yet" : "No matches"
              }
              description={
                (roles?.length ?? 0) === 0
                  ? "Bundle permissions into a role so you can assign access in one step."
                  : "Try a different search term."
              }
              actionLabel={(roles?.length ?? 0) === 0 ? "Create role" : undefined}
              onAction={(roles?.length ?? 0) === 0 ? openCreate : undefined}
            />
          ) : (
            <div className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-stone-950 divide-y divide-stone-100 dark:divide-white/5">
              {filtered.map((role, i) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02, duration: 0.2 }}
                  className="group px-4 py-3 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                      <Shield className="w-4 h-4 text-stone-500" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 truncate">
                          {role.name}
                        </p>
                        {role.isSystem ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                            <Lock className="w-3 h-3" />
                            system
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                            custom
                          </span>
                        )}
                        {role._count?.userRoles !== undefined && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                            <Users className="w-3 h-3" />
                            {role._count.userRoles} assigned
                          </span>
                        )}
                      </div>
                      {role.description && (
                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-1">
                          {role.description}
                        </p>
                      )}
                      {role.permissions.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {role.permissions.map((perm) => (
                            <span
                              key={perm}
                              className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 rounded-sm px-1.5 py-0.5"
                            >
                              {perm.toLowerCase().replace(/_/g, " ")}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {!role.isSystem && (
                      <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => openEdit(role)}
                          title="Edit role"
                          className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm("Delete this role?")) deleteMutation.mutate(role.id);
                          }}
                          title="Delete role"
                          className="p-1.5 rounded-md text-stone-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1 w-1 bg-lime-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              assign a role
            </span>
          </div>

          <div className="max-w-xl border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-950 p-6">
            <div className="space-y-4">
              <div>
                <label className={labelClass}>user id</label>
                <input
                  type="number"
                  value={assignForm.userId}
                  onChange={(e) =>
                    setAssignForm({ ...assignForm, userId: e.target.value })
                  }
                  className={`${inputClass} font-mono`}
                  placeholder="e.g. 142"
                />
              </div>
              <div>
                <label className={labelClass}>role</label>
                <select
                  value={assignForm.roleId}
                  onChange={(e) =>
                    setAssignForm({ ...assignForm, roleId: e.target.value })
                  }
                  className={inputClass}
                >
                  <option value="">Select role</option>
                  {roles?.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => assignMutation.mutate()}
                  disabled={!assignForm.userId || !assignForm.roleId || saving}
                >
                  <UserPlus className="w-4 h-4" />
                  Assign role
                </Button>
                {assigned && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                    assigned
                  </span>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <HRModal
        open={showCreate}
        onClose={() => {
          setShowCreate(false);
          setEditRole(null);
        }}
        title={editRole ? "Edit Role" : "New Role"}
        onSubmit={() => createMutation.mutate()}
        submitLabel={editRole ? "Update" : "Create"}
        loading={saving}
        wide
      >
        <div className="space-y-4">
          <div>
            <label className={labelClass}>role name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              placeholder="Hiring Manager"
            />
          </div>
          <div>
            <label className={labelClass}>description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={2}
              className={`${inputClass} resize-none`}
              placeholder="Short note about who should have this role."
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={`${labelClass} mb-0`}>permissions</label>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
                {form.permissions.length}/{ALL_PERMISSIONS.length} selected
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto border border-stone-200 dark:border-white/10 rounded-md p-1">
              {ALL_PERMISSIONS.map((perm) => {
                const checked = form.permissions.includes(perm);
                return (
                  <label
                    key={perm}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-sm cursor-pointer transition-colors ${
                      checked
                        ? "bg-stone-100 dark:bg-stone-900"
                        : "hover:bg-stone-50 dark:hover:bg-stone-900/50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => togglePermission(perm)}
                      className="rounded accent-lime-400"
                    />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-700 dark:text-stone-300">
                      {perm.toLowerCase().replace(/_/g, " ")}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
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
      <div className="mt-0.5 text-lg font-bold tabular-nums text-stone-900 dark:text-stone-50">
        {value}
      </div>
    </div>
  );
}

function ListSkeleton() {
  return (
    <div className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-stone-950 divide-y divide-stone-100 dark:divide-white/5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-start gap-4 px-4 py-3 animate-pulse">
          <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-900" />
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-1/3 rounded bg-stone-100 dark:bg-stone-900" />
            <div className="h-2.5 w-2/3 rounded bg-stone-100 dark:bg-stone-900" />
            <div className="h-2.5 w-1/2 rounded bg-stone-100 dark:bg-stone-900" />
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: {
  icon: typeof Key;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-950">
      <div className="w-12 h-12 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-stone-400" />
      </div>
      <h3 className="text-base font-semibold text-stone-900 dark:text-stone-50 mb-1">
        {title}
      </h3>
      <p className="text-sm text-stone-500 max-w-xs mb-5">{description}</p>
      {actionLabel && onAction && (
        <Button variant="primary" size="sm" onClick={onAction}>
          <Plus className="w-4 h-4" />
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
