import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Check, Trash2, Loader2, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import type { Company, Pagination } from "../../../lib/types";

export default function AdminCompaniesPage() {
  const [companies, setCompanies] = useState<(Company & { createdBy?: { name: string; email: string }; _count?: { reviews: number; contacts: number } })[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/companies", { params: { page, limit: 20 } });
      setCompanies(res.data.companies);
      setPagination(res.data.pagination);
    } catch {
      toast.error("Failed to load companies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCompanies(); }, [page]);

  const handleApprove = async (id: number) => {
    try {
      await api.put(`/admin/companies/${id}/approve`);
      toast.success("Company approved");
      fetchCompanies();
    } catch {
      toast.error("Failed to approve company");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this company?")) return;
    try {
      await api.delete(`/admin/companies/${id}`);
      toast.success("Company deleted");
      fetchCompanies();
    } catch {
      toast.error("Failed to delete company");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Building2 className="w-6 h-6" /> Manage Companies
      </h1>

      {loading ? (
        <div className="flex items-center justify-center h-64 text-gray-400">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      ) : companies.length === 0 ? (
        <div className="text-center text-gray-500 py-20">No companies found</div>
      ) : (
        <div className="space-y-3">
          {companies.map((company, i) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="bg-gray-900 p-5 rounded-xl border border-gray-800 flex items-center justify-between"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                  {company.logo ? (
                    <img src={`http://localhost:3000${company.logo}`} alt="" className="w-12 h-12 rounded-lg object-cover" />
                  ) : (
                    <Building2 className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-white truncate">{company.name}</p>
                    {company.isApproved ? (
                      <span className="px-2 py-0.5 bg-green-900/50 text-green-400 text-xs rounded-full flex items-center gap-1">
                        <Eye className="w-3 h-3" /> Approved
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-yellow-900/50 text-yellow-400 text-xs rounded-full flex items-center gap-1">
                        <EyeOff className="w-3 h-3" /> Pending
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 truncate">
                    {company.city} &middot; {company.industry} &middot; {company._count?.reviews ?? 0} reviews &middot; {company._count?.contacts ?? 0} contacts
                  </p>
                  {company.createdBy && (
                    <p className="text-xs text-gray-500">Added by {company.createdBy.name}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {!company.isApproved && (
                  <button onClick={() => handleApprove(company.id)}
                    className="p-2 rounded-lg bg-green-900/30 text-green-400 hover:bg-green-900/50 transition-colors"
                    title="Approve">
                    <Check className="w-4 h-4" />
                  </button>
                )}
                <button onClick={() => handleDelete(company.id)}
                  className="p-2 rounded-lg bg-red-900/30 text-red-400 hover:bg-red-900/50 transition-colors"
                  title="Delete">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((p) => (
            <button key={p} onClick={() => setPage(p)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                p === pagination.page ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}>
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
