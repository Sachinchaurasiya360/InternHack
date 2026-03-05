import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Check, Trash2, Loader2, Eye, EyeOff, Search } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import type { Pagination } from "../../../lib/types";

interface AdminCollege {
  id: number;
  name: string;
  slug: string;
  type: string;
  state: string;
  city: string;
  isApproved: boolean;
  nirfRanking: number | null;
  naacGrade: string | null;
  avgRating: number;
  reviewCount: number;
  createdAt: string;
  _count?: { courses: number; reviews: number };
}

export default function AdminCollegesPage() {
  const [colleges, setColleges] = useState<AdminCollege[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const fetchColleges = async () => {
    setLoading(true);
    try {
      const params: Record<string, string> = { page: String(page), limit: "20" };
      if (search) params.search = search;
      const res = await api.get("/admin/colleges", { params });
      setColleges(res.data.colleges);
      setPagination(res.data.pagination);
    } catch {
      toast.error("Failed to load colleges");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchColleges(); }, [page, search]);

  const handleApprove = async (id: number) => {
    try {
      await api.put(`/admin/colleges/${id}/approve`);
      toast.success("College approved");
      fetchColleges();
    } catch {
      toast.error("Failed to approve college");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this college?")) return;
    try {
      await api.delete(`/admin/colleges/${id}`);
      toast.success("College deleted");
      fetchColleges();
    } catch {
      toast.error("Failed to delete college");
    }
  };

  const formatNaac = (g: string) => g.replace(/_PLUS_PLUS/g, "++").replace(/_PLUS/g, "+");

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <GraduationCap className="w-6 h-6" /> Manage Colleges
      </h1>

      {/* Search */}
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search colleges..."
          defaultValue={search}
          onKeyDown={(e) => { if (e.key === "Enter") { setSearch((e.target as HTMLInputElement).value); setPage(1); } }}
          className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500"
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64 text-gray-400">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      ) : colleges.length === 0 ? (
        <div className="text-center text-gray-500 py-20">No colleges found</div>
      ) : (
        <div className="space-y-3">
          {colleges.map((college, i) => (
            <motion.div
              key={college.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="bg-gray-900 p-5 rounded-xl border border-gray-800 flex items-center justify-between"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-gray-500" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-white truncate">{college.name}</p>
                    {college.isApproved ? (
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
                    {college.city}, {college.state} &middot; {college.type.charAt(0) + college.type.slice(1).toLowerCase()}
                    {college.nirfRanking ? ` · NIRF #${college.nirfRanking}` : ""}
                    {college.naacGrade && college.naacGrade !== "UNGRADED" ? ` · NAAC ${formatNaac(college.naacGrade)}` : ""}
                    {` · ${college._count?.courses ?? 0} courses · ${college._count?.reviews ?? 0} reviews`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {!college.isApproved && (
                  <button onClick={() => handleApprove(college.id)}
                    className="p-2 rounded-lg bg-green-900/30 text-green-400 hover:bg-green-900/50 transition-colors"
                    title="Approve">
                    <Check className="w-4 h-4" />
                  </button>
                )}
                <button onClick={() => handleDelete(college.id)}
                  className="p-2 rounded-lg bg-red-900/30 text-red-400 hover:bg-red-900/50 transition-colors"
                  title="Delete">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: Math.min(pagination.totalPages, 10) }, (_, i) => i + 1).map((p) => (
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
