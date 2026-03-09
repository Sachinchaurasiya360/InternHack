import { useParams, Link } from "react-router";
import { LoadingScreen } from "../../components/LoadingScreen";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  Clock,
  Eye,
  Calendar,
  User,
  Tag,
  FileText,
} from "lucide-react";
import api from "../../lib/axios";
import { queryKeys } from "../../lib/query-keys";
import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "./components/BlogCard";
import type { BlogPost } from "./components/BlogCard";

// ─── HTML escaping helper ───────────────────────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ─── Simple markdown-to-HTML converter ──────────────────────────
function markdownToHtml(md: string): string {
  let html = md;

  // Step 1: Extract code blocks into placeholders (so they aren't double-escaped)
  const codeBlocks: string[] = [];
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_m, _lang, code) => {
    const placeholder = `%%CODEBLOCK_${codeBlocks.length}%%`;
    codeBlocks.push(
      `<pre class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm my-4"><code>${escapeHtml(code.trim())}</code></pre>`
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
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');

  // Headings
  html = html.replace(/^#### (.+)$/gm, '<h4 class="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3">$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-4">$1</h1>');

  // Bold & italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-lg my-4 max-w-full" />');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">$1</a>');

  // Horizontal rule
  html = html.replace(/^---$/gm, '<hr class="my-8 border-gray-200 dark:border-gray-700" />');

  // Unordered lists
  html = html.replace(/^(?:- |\* )(.+)$/gm, '<li class="ml-4 list-disc text-gray-700 dark:text-gray-300">$1</li>');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal text-gray-700 dark:text-gray-300">$1</li>');

  // Wrap consecutive <li> in <ul>/<ol>
  html = html.replace(/((?:<li class="ml-4 list-disc[^"]*">[^<]*<\/li>\n?)+)/g, '<ul class="my-4 space-y-1">$1</ul>');
  html = html.replace(/((?:<li class="ml-4 list-decimal[^"]*">[^<]*<\/li>\n?)+)/g, '<ol class="my-4 space-y-1">$1</ol>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-blue-400 dark:border-blue-500 pl-4 py-1 my-4 text-gray-600 dark:text-gray-400 italic">$1</blockquote>');

  // Paragraphs: wrap remaining bare text lines
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      // Already wrapped in an HTML tag
      if (/^<[a-z]/.test(trimmed)) return trimmed;
      return `<p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">${trimmed.replace(/\n/g, "<br />")}</p>`;
    })
    .join("\n");

  return html;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data, isLoading, isError } = useQuery<{ post: BlogPost }>({
    queryKey: queryKeys.blog.detail(slug!),
    queryFn: async () => {
      const res = await api.get(`/blog/${slug}`);
      return res.data;
    },
    enabled: !!slug,
  });

  const post = data?.post;
  const catColor = post ? CATEGORY_COLORS[post.category] : null;

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
      {post && (
        <SEO
          title={post.title}
          description={post.excerpt || post.content.slice(0, 160)}
          keywords={post.tags.join(", ")}
          ogImage={post.featuredImage}
        />
      )}
      <Navbar />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors no-underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
          </motion.div>

          {isLoading ? (
            <LoadingScreen />
          ) : isError || !post ? (
            <div className="text-center py-32">
              <FileText className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Article not found
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                The article you're looking for doesn't exist or has been removed.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Browse articles
              </Link>
            </div>
          ) : (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Featured image */}
              {post.featuredImage && (
                <div className="rounded-2xl overflow-hidden mb-8 border border-gray-200 dark:border-gray-800">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  />
                </div>
              )}

              {/* Category badge */}
              {catColor && (
                <span
                  className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-4 ${catColor.bg} ${catColor.text}`}
                >
                  {CATEGORY_LABELS[post.category] ?? post.category}
                </span>
              )}

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white leading-tight mb-5">
                {post.title}
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  {post.author.profilePic ? (
                    <img
                      src={post.author.profilePic}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                  )}
                  <span className="font-medium text-gray-700 dark:text-gray-300">{post.author.name}</span>
                </div>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.publishedAt ?? post.createdAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} min read
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  {post.viewCount.toLocaleString()} views
                </span>
              </div>

              {/* Content */}
              <div
                className="prose-custom max-w-none"
                dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
              />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to blog */}
              <div className="mt-10">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors no-underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all articles
                </Link>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </div>
  );
}
