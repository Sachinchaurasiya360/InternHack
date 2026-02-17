import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Check, X, Loader2, Star } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import type { CompanyReview, Pagination } from "../../../lib/types";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<CompanyReview[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("PENDING");
  const [page, setPage] = useState(1);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/reviews", { params: { status: statusFilter, page, limit: 20 } });
      setReviews(res.data.reviews);
      setPagination(res.data.pagination);
    } catch {
      toast.error("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { setPage(1); }, [statusFilter]);
  useEffect(() => { fetchReviews(); }, [statusFilter, page]);

  const handleStatus = async (id: number, status: "APPROVED" | "REJECTED") => {
    try {
      await api.put(`/admin/reviews/${id}/status`, { status });
      toast.success(`Review ${status.toLowerCase()}`);
      fetchReviews();
    } catch {
      toast.error("Failed to update review");
    }
  };

  const statusTabs = ["PENDING", "APPROVED", "REJECTED"];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <MessageSquare className="w-6 h-6" /> Moderate Reviews
      </h1>

      {/* Status Tabs */}
      <div className="flex gap-2 mb-6">
        {statusTabs.map((s) => (
          <button key={s} onClick={() => setStatusFilter(s)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              statusFilter === s ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}>
            {s}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64 text-gray-400">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      ) : reviews.length === 0 ? (
        <div className="text-center text-gray-500 py-20">No {statusFilter.toLowerCase()} reviews</div>
      ) : (
        <div className="space-y-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="bg-gray-900 p-5 rounded-xl border border-gray-800"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-white">{review.title}</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className={`w-3.5 h-3.5 ${idx < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">
                    By {review.user?.name ?? "Unknown"} &middot; Company: {review.company?.name ?? "Unknown"}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">{review.content}</p>

                  {(review.pros || review.cons) && (
                    <div className="flex gap-4 mt-2">
                      {review.pros && <p className="text-xs text-green-400">Pros: {review.pros}</p>}
                      {review.cons && <p className="text-xs text-red-400">Cons: {review.cons}</p>}
                    </div>
                  )}
                </div>

                {review.status === "PENDING" && (
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    <button onClick={() => handleStatus(review.id, "APPROVED")}
                      className="p-2 rounded-lg bg-green-900/30 text-green-400 hover:bg-green-900/50 transition-colors"
                      title="Approve">
                      <Check className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleStatus(review.id, "REJECTED")}
                      className="p-2 rounded-lg bg-red-900/30 text-red-400 hover:bg-red-900/50 transition-colors"
                      title="Reject">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

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
