import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Trash2, Users } from "lucide-react";
import api from "../../lib/axios";

interface Subscriber {
  id: number;
  email: string;
  createdAt: string;
}

export default function AdminSubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 50;

  const fetchSubscribers = () => {
    setLoading(true);
    api
      .get(`/newsletter/subscribers?page=${page}&limit=${limit}`)
      .then((res) => {
        setSubscribers(res.data.subscribers);
        setTotal(res.data.total);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchSubscribers();
  }, [page]);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/newsletter/subscribers/${id}`);
      setSubscribers((prev) => prev.filter((s) => s.id !== id));
      setTotal((prev) => prev - 1);
    } catch {
      /* ignore */
    }
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Newsletter Subscribers</h1>
        <div className="flex items-center gap-2 px-4 py-2 bg-indigo-900/40 text-indigo-400 rounded-lg text-sm font-medium">
          <Users className="w-4 h-4" />
          {total} total
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64 text-gray-400">
          Loading subscribers...
        </div>
      ) : subscribers.length === 0 ? (
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-12 text-center">
          <Mail className="w-10 h-10 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">No subscribers yet</p>
        </div>
      ) : (
        <>
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-800 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <div className="col-span-1">#</div>
              <div className="col-span-6">Email</div>
              <div className="col-span-3">Subscribed On</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-800">
              {subscribers.map((sub, i) => (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                  className="grid grid-cols-12 gap-4 px-6 py-3.5 items-center hover:bg-gray-800/50 transition-colors"
                >
                  <div className="col-span-1 text-sm text-gray-500">
                    {(page - 1) * limit + i + 1}
                  </div>
                  <div className="col-span-6 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500 shrink-0" />
                    <span className="text-sm text-white truncate">{sub.email}</span>
                  </div>
                  <div className="col-span-3 text-sm text-gray-400">
                    {new Date(sub.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="col-span-2 text-right">
                    <button
                      onClick={() => handleDelete(sub.id)}
                      className="p-2 rounded-lg text-gray-500 hover:bg-red-900/30 hover:text-red-400 transition-colors"
                      title="Remove subscriber"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-800 text-sm text-gray-300 rounded-lg disabled:opacity-40 hover:bg-gray-700 transition-colors"
              >
                Previous
              </button>
              <span className="text-sm text-gray-400">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-800 text-sm text-gray-300 rounded-lg disabled:opacity-40 hover:bg-gray-700 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
