import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ShieldCheck, Plus, AlertTriangle, ExternalLink } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type { ComplianceDocument } from "./hr-types";
import { SEO } from "../../../components/SEO";

export default function CompliancePage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<"documents" | "expiring">("documents");
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ name: "", category: "", description: "", documentUrl: "", expiryDate: "", isRequired: true });
  const [saving, setSaving] = useState(false);

  const { data: documents, isLoading } = useQuery({
    queryKey: hrKeys.compliance.list(),
    queryFn: async () => {
      const res = await api.get("/hr/compliance");
      return res.data as ComplianceDocument[];
    },
    enabled: tab === "documents",
  });

  const { data: expiring } = useQuery({
    queryKey: hrKeys.compliance.expiring(30),
    queryFn: async () => {
      const res = await api.get("/hr/compliance/expiring?days=30");
      return res.data as ComplianceDocument[];
    },
    enabled: tab === "expiring",
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/compliance", { ...form, expiryDate: form.expiryDate ? new Date(form.expiryDate).toISOString() : undefined });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "compliance"] });
      setShowCreate(false);
      setForm({ name: "", category: "", description: "", documentUrl: "", expiryDate: "", isRequired: true });
    },
    onSettled: () => setSaving(false),
  });

  const docs = tab === "documents" ? documents : expiring;

  return (
    <div className="space-y-6">
      <SEO title="Compliance" noIndex />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Compliance</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Track policies, documents, and compliance</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          <Plus className="w-4 h-4" /> Add Document
        </button>
      </motion.div>

      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
        {(["documents", "expiring"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors capitalize ${tab === t ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400"}`}>
            {t === "expiring" ? "Expiring Soon" : t}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
        {isLoading ? (
          <div className="space-y-3">{[...Array(5)].map((_, i) => <div key={i} className="h-16 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
        ) : docs?.length ? (
          <div className="space-y-2">
            {docs.map((doc, i) => (
              <motion.div key={doc.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{doc.name}</p>
                    <span className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded-lg">{doc.category}</span>
                    {doc.isRequired && <span className="text-[10px] bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-lg">Required</span>}
                  </div>
                  {doc.description && <p className="text-xs text-gray-500 mt-0.5">{doc.description}</p>}
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    {doc.expiryDate && (
                      <>
                        {tab === "expiring" && <AlertTriangle className="w-3 h-3 text-amber-500 inline mr-1" />}
                        Expires: {new Date(doc.expiryDate).toLocaleDateString()}
                      </>
                    )}
                    {doc.acknowledgedBy?.length > 0 && ` - ${doc.acknowledgedBy.length} acknowledged`}
                  </p>
                </div>
                {doc.documentUrl && (
                  <a href={doc.documentUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <HREmptyState icon={ShieldCheck} title={tab === "expiring" ? "No expiring documents" : "No compliance documents"} actionLabel="Add Document" onAction={() => setShowCreate(true)} />
        )}
      </div>

      <HRModal open={showCreate} onClose={() => setShowCreate(false)} title="Add Compliance Document" onSubmit={() => createMutation.mutate()} loading={saving}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Document Name *</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Category *</label>
            <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="e.g. Legal, Safety, Training" className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={2} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none resize-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Document URL</label>
            <input value={form.documentUrl} onChange={(e) => setForm({ ...form, documentUrl: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Expiry Date</label>
            <input type="date" value={form.expiryDate} onChange={(e) => setForm({ ...form, expiryDate: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={form.isRequired} onChange={(e) => setForm({ ...form, isRequired: e.target.checked })} className="rounded" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Required document</span>
          </label>
        </div>
      </HRModal>
    </div>
  );
}
