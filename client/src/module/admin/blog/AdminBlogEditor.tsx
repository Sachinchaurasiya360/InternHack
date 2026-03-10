import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  Save,
  Globe,
  Loader2,
  Eye,
  Pencil,
} from "lucide-react";
import toast from "react-hot-toast";
import { LoadingScreen } from "../../../components/LoadingScreen";
import api from "../../../lib/axios";
import type { BlogPost, BlogCategory } from "../../blog/components/BlogCard";
import { CATEGORY_LABELS } from "../../blog/components/BlogCard";

const CATEGORY_OPTIONS: { value: BlogCategory; label: string }[] = [
  { value: "CAREER_ADVICE", label: "Career Advice" },
  { value: "INTERVIEW_TIPS", label: "Interview Tips" },
  { value: "SALARY_GUIDE", label: "Salary Guide" },
  { value: "INDUSTRY_INSIGHTS", label: "Industry Insights" },
  { value: "RESUME_TIPS", label: "Resume Tips" },
  { value: "TECH_TRENDS", label: "Tech Trends" },
];

// ─── HTML escaping helper ───────────────────────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ─── Simple markdown preview renderer ───────────────────────────
function renderPreview(md: string): string {
  let html = md;

  // Step 1: Extract code blocks into placeholders (so they aren't double-escaped)
  const codeBlocks: string[] = [];
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_m, _lang, code) => {
    const placeholder = `%%CODEBLOCK_${codeBlocks.length}%%`;
    codeBlocks.push(
      `<pre class="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm my-4 text-gray-300"><code>${escapeHtml(code.trim())}</code></pre>`
    );
    return placeholder;
  });

  // Step 2: Escape HTML in the remaining content to prevent XSS
  html = escapeHtml(html);

  // Restore code block placeholders
  codeBlocks.forEach((block, i) => {
    html = html.replace(`%%CODEBLOCK_${i}%%`, block);
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-gray-300">$1</code>');

  // Headings
  html = html.replace(/^#### (.+)$/gm, '<h4 class="text-lg font-semibold text-white mt-6 mb-3">$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-white mt-8 mb-3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-white mt-10 mb-4">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-white mt-10 mb-4">$1</h1>');

  // Bold & italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-lg my-4 max-w-full" />');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 underline">$1</a>');

  // Horizontal rule
  html = html.replace(/^---$/gm, '<hr class="my-8 border-gray-700" />');

  // Unordered lists
  html = html.replace(/^(?:- |\* )(.+)$/gm, '<li class="ml-4 list-disc text-gray-300">$1</li>');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal text-gray-300">$1</li>');

  // Wrap consecutive <li>
  html = html.replace(/((?:<li class="ml-4 list-disc[^"]*">[^<]*<\/li>\n?)+)/g, '<ul class="my-4 space-y-1">$1</ul>');
  html = html.replace(/((?:<li class="ml-4 list-decimal[^"]*">[^<]*<\/li>\n?)+)/g, '<ol class="my-4 space-y-1">$1</ol>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-blue-500 pl-4 py-1 my-4 text-gray-400 italic">$1</blockquote>');

  // Paragraphs
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (/^<[a-z]/.test(trimmed)) return trimmed;
      return `<p class="text-gray-300 leading-relaxed mb-4">${trimmed.replace(/\n/g, "<br />")}</p>`;
    })
    .join("\n");

  return html;
}

interface PostForm {
  title: string;
  content: string;
  excerpt: string;
  category: BlogCategory;
  tags: string;
  featuredImage: string;
}

const emptyForm: PostForm = {
  title: "",
  content: "",
  excerpt: "",
  category: "CAREER_ADVICE",
  tags: "",
  featuredImage: "",
};

export default function AdminBlogEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isEditing = !!id;

  const [form, setForm] = useState<PostForm>(emptyForm);
  const [previewMode, setPreviewMode] = useState(false);

  // Fetch existing post when editing
  const { data: existingPost, isLoading: loadingPost } = useQuery<{ post: BlogPost }>({
    queryKey: ["admin", "blog", "edit", id],
    queryFn: async () => {
      // Use admin endpoint - the public slug endpoint won't have all fields for DRAFT posts
      const res = await api.get("/blog/admin/posts", { params: { page: 1, limit: 1, search: "" } });
      // Fallback: fetch all and find by id. In a real app the admin detail endpoint would be used.
      // Since the spec only gives us list + slug endpoints, fetch via slug or search the list.
      const allRes = await api.get("/blog/admin/posts", { params: { page: 1, limit: 100 } });
      const found = (allRes.data.posts as BlogPost[]).find((p) => p.id === Number(id));
      if (!found) throw new Error("Post not found");
      return { post: found };
    },
    enabled: isEditing,
  });

  useEffect(() => {
    if (existingPost?.post) {
      const p = existingPost.post;
      setForm({
        title: p.title,
        content: p.content,
        excerpt: p.excerpt,
        category: p.category,
        tags: p.tags.join(", "),
        featuredImage: p.featuredImage ?? "",
      });
    }
  }, [existingPost]);

  const previewHtml = useMemo(() => renderPreview(form.content), [form.content]);

  const update = (field: keyof PostForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Save mutation
  const saveMutation = useMutation({
    mutationFn: async (publish: boolean) => {
      const body = {
        title: form.title,
        content: form.content,
        excerpt: form.excerpt,
        category: form.category,
        tags: form.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        featuredImage: form.featuredImage || undefined,
      };

      if (isEditing) {
        await api.put(`/blog/admin/posts/${id}`, body);
        if (publish) {
          await api.patch(`/blog/admin/posts/${id}/publish`);
        }
      } else {
        const res = await api.post("/blog/admin/posts", body);
        const newId = res.data.post?.id;
        if (publish && newId) {
          await api.patch(`/blog/admin/posts/${newId}/publish`);
        }
      }
    },
    onSuccess: (_, publish) => {
      toast.success(publish ? "Post published!" : "Draft saved!");
      queryClient.invalidateQueries({ queryKey: ["blog"] });
      navigate("/admin/blog");
    },
    onError: () => toast.error("Failed to save post"),
  });

  const handleSaveDraft = () => {
    if (!form.title.trim()) {
      toast.error("Title is required");
      return;
    }
    saveMutation.mutate(false);
  };

  const handlePublish = () => {
    if (!form.title.trim()) {
      toast.error("Title is required");
      return;
    }
    if (!form.content.trim()) {
      toast.error("Content is required");
      return;
    }
    saveMutation.mutate(true);
  };

  if (isEditing && loadingPost) {
    return <LoadingScreen compact />;
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/admin/blog")}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold text-white">
            {isEditing ? "Edit Post" : "New Post"}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSaveDraft}
            disabled={saveMutation.isPending}
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-xl border border-gray-700 transition-colors disabled:opacity-50"
          >
            {saveMutation.isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            Save Draft
          </button>
          <button
            onClick={handlePublish}
            disabled={saveMutation.isPending}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors disabled:opacity-50"
          >
            {saveMutation.isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Globe className="w-4 h-4" />
            )}
            Publish
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-5"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="Enter post title..."
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Category + Tags row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Category</label>
            <select
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
            >
              {CATEGORY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Tags (comma-separated)</label>
            <input
              type="text"
              value={form.tags}
              onChange={(e) => update("tags", e.target.value)}
              placeholder="react, typescript, career..."
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Excerpt</label>
          <textarea
            value={form.excerpt}
            onChange={(e) => update("excerpt", e.target.value)}
            placeholder="Brief summary of the post..."
            rows={3}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-none"
          />
        </div>

        {/* Featured image */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Featured Image URL</label>
          <input
            type="text"
            value={form.featuredImage}
            onChange={(e) => update("featuredImage", e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Content: split view */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-gray-300">Content (Markdown)</label>
            <div className="flex items-center bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => setPreviewMode(false)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${
                  !previewMode ? "bg-gray-700 text-white" : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <Pencil className="w-3 h-3" />
                Write
              </button>
              <button
                onClick={() => setPreviewMode(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${
                  previewMode ? "bg-gray-700 text-white" : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <Eye className="w-3 h-3" />
                Preview
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Editor */}
            <div className={previewMode ? "hidden lg:block" : ""}>
              <textarea
                value={form.content}
                onChange={(e) => update("content", e.target.value)}
                placeholder="Write your post in Markdown..."
                rows={24}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-y leading-relaxed"
              />
            </div>

            {/* Preview */}
            <div className={!previewMode ? "hidden lg:block" : ""}>
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 min-h-[576px] overflow-y-auto">
                {form.content.trim() ? (
                  <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
                ) : (
                  <p className="text-gray-500 text-sm italic">
                    Start writing to see a preview...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
