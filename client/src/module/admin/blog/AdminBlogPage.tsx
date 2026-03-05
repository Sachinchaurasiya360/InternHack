import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import {
  FileText,
  Plus,
  Search,
  Loader2,
  Star,
  StarOff,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Globe,
  FilePen,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { Pagination } from "../../../lib/types";
import type { BlogPost, BlogCategory } from "../../blog/components/BlogCard";
import { CATEGORY_LABELS } from "../../blog/components/BlogCard";

type StatusFilter = "ALL" | "DRAFT" | "PUBLISHED";

export default function AdminBlogPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");
  const limit = 10;

  // Debounce search
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (timer) clearTimeout(timer);
    const t = setTimeout(() => {
      setDebouncedSearch(value);
      setPage(1);
    }, 400);
    setTimer(t);
  };

  // Fetch posts
  const { data, isLoading } = useQuery<{ posts: BlogPost[]; pagination: Pagination }>({
    queryKey: queryKeys.blog.admin({ page, limit, status: statusFilter, search: debouncedSearch }),
    queryFn: async () => {
      const params: Record<string, string | number> = { page, limit };
      if (statusFilter !== "ALL") params.status = statusFilter;
      if (debouncedSearch) params.search = debouncedSearch;
      const res = await api.get("/blog/admin/posts", { params });
      return res.data;
    },
    placeholderData: keepPreviousData,
  });

  const posts = data?.posts ?? [];
  const pagination = data?.pagination;

  // Mutations
  const publishMutation = useMutation({
    mutationFn: (id: number) => api.patch(`/blog/admin/posts/${id}/publish`),
    onSuccess: () => {
      toast.success("Status updated");
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
    onError: () => toast.error("Failed to update status"),
  });

  const featureMutation = useMutation({
    mutationFn: (id: number) => api.patch(`/blog/admin/posts/${id}/feature`),
    onSuccess: () => {
      toast.success("Featured status updated");
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
    onError: () => toast.error("Failed to update featured status"),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete(`/blog/admin/posts/${id}`),
    onSuccess: () => {
      toast.success("Post deleted");
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
    onError: () => toast.error("Failed to delete post"),
  });

  const handleDelete = (id: number, title: string) => {
    if (!confirm(`Delete "${title}"? This action cannot be undone.`)) return;
    deleteMutation.mutate(id);
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <FileText className="w-6 h-6" /> Blog Management
        </h1>
        <button
          onClick={() => navigate("/admin/blog/editor")}
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Post
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search posts..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value as StatusFilter);
            setPage(1);
          }}
          className="px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
        >
          <option value="ALL">All Status</option>
          <option value="DRAFT">Draft</option>
          <option value="PUBLISHED">Published</option>
        </select>
      </div>

      {/* Table */}
      {isLoading ? (
        <div className="flex items-center justify-center h-64 text-gray-400">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          <FileText className="w-10 h-10 mx-auto mb-3 text-gray-600" />
          <p>No posts found</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/50">
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Title</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium hidden md:table-cell">Category</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Status</th>
                <th className="text-center px-4 py-3 text-gray-400 font-medium hidden sm:table-cell">Views</th>
                <th className="text-center px-4 py-3 text-gray-400 font-medium hidden sm:table-cell">Featured</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium hidden lg:table-cell">Date</th>
                <th className="text-right px-4 py-3 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, i) => (
                <motion.tr
                  key={post.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors"
                >
                  <td className="px-4 py-3">
                    <p className="text-white font-medium truncate max-w-xs">{post.title}</p>
                    <p className="text-xs text-gray-500 truncate md:hidden mt-0.5">
                      {CATEGORY_LABELS[post.category] ?? post.category}
                    </p>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className="text-gray-400 text-xs">
                      {CATEGORY_LABELS[post.category] ?? post.category}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {post.status === "PUBLISHED" ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-900/50 text-green-400 text-xs rounded-full">
                        <Globe className="w-3 h-3" /> Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-900/50 text-yellow-400 text-xs rounded-full">
                        <FilePen className="w-3 h-3" /> Draft
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center text-gray-400 hidden sm:table-cell">
                    <span className="flex items-center justify-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> {post.viewCount}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center hidden sm:table-cell">
                    <button
                      onClick={() => featureMutation.mutate(post.id)}
                      disabled={featureMutation.isPending}
                      className={`p-1.5 rounded-lg transition-colors ${
                        post.isFeatured
                          ? "text-amber-400 bg-amber-900/30 hover:bg-amber-900/50"
                          : "text-gray-600 hover:text-gray-400 hover:bg-gray-800"
                      }`}
                      title={post.isFeatured ? "Remove from featured" : "Mark as featured"}
                    >
                      {post.isFeatured ? (
                        <Star className="w-4 h-4 fill-amber-400" />
                      ) : (
                        <StarOff className="w-4 h-4" />
                      )}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-gray-400 text-xs hidden lg:table-cell">
                    {formatDate(post.publishedAt ?? post.createdAt)}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => navigate(`/admin/blog/editor/${post.id}`)}
                        className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => publishMutation.mutate(post.id)}
                        disabled={publishMutation.isPending}
                        className={`p-2 rounded-lg transition-colors ${
                          post.status === "PUBLISHED"
                            ? "text-yellow-400 hover:bg-yellow-900/30"
                            : "text-green-400 hover:bg-green-900/30"
                        }`}
                        title={post.status === "PUBLISHED" ? "Unpublish" : "Publish"}
                      >
                        {post.status === "PUBLISHED" ? (
                          <FilePen className="w-4 h-4" />
                        ) : (
                          <Globe className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() => handleDelete(post.id, post.title)}
                        disabled={deleteMutation.isPending}
                        className="p-2 rounded-lg text-red-400 hover:bg-red-900/30 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <span className="text-sm text-gray-500">
            Showing {(pagination.page - 1) * pagination.limit + 1}-
            {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-gray-400 bg-gray-900 border border-gray-700 hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>
            <span className="text-sm text-gray-400 px-2">
              {pagination.page} / {pagination.totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
              disabled={page >= pagination.totalPages}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-gray-400 bg-gray-900 border border-gray-700 hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
