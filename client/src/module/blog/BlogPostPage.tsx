import { useMemo } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  Eye,
  Calendar,
  User,
  Tag,
  BookOpen,
  Share2,
} from "lucide-react";

import api from "../../lib/axios";
import { queryKeys } from "../../lib/query-keys";

import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";
import { LoadingScreen } from "../../components/LoadingScreen";

import { canonicalUrl } from "../../lib/seo.utils";
import {
  blogPostingSchema,
  breadcrumbSchema,
} from "../../lib/structured-data";

import {
  CATEGORY_LABELS,
  CATEGORY_COLORS,
} from "./components/BlogCard";

import BlogSkeleton from "./components/BlogSkeleton";
import ReadingTime from "./components/ReadingTime";
import BookmarkButton from "./components/BookmarkButton";
import ShareButton from "./components/ShareButton";
import RelatedArticles from "./components/RelatedArticles";
import EmptyState from "./components/EmptyState";

import { formatBlogDate } from "./utils/formatBlogDate";
import { calculateReadingTime } from "./utils/calculateReadingTime";

import type { BlogPost } from "../../lib/types";
import { ReadingProgressBar } from "../../components/ReadingProgressBar";

// ─────────────────────────────────────────────────────────────
// HTML Escaping
// ─────────────────────────────────────────────────────────────

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ─────────────────────────────────────────────────────────────
// Markdown → HTML
// ─────────────────────────────────────────────────────────────

function markdownToHtml(md: string): string {
  let html = md;

  // Extract code blocks
  const codeBlocks: string[] = [];

  html = html.replace(
    /```(\w*)\n([\s\S]*?)```/g,
    (_m, _lang, code) => {
      const placeholder = `%%CODEBLOCK_${codeBlocks.length}%%`;

      codeBlocks.push(`
        <pre class="bg-stone-100 dark:bg-stone-800 rounded-xl p-4 overflow-x-auto text-sm my-6 border border-stone-200 dark:border-white/10">
          <code>${escapeHtml(code.trim())}</code>
        </pre>
      `);

      return placeholder;
    }
  );

  // Escape remaining content
  html = escapeHtml(html);

  // Restore code blocks
  codeBlocks.forEach((block, i) => {
    html = html.replace(`%%CODEBLOCK_${i}%%`, block);
  });

  // Inline code
  html = html.replace(
    /`([^`]+)`/g,
    `<code class="bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded text-sm font-mono border border-stone-200 dark:border-white/10">$1</code>`
  );

  // Headings
  html = html.replace(
    /^#### (.+)$/gm,
    `<h4 class="text-lg font-semibold text-stone-900 dark:text-stone-50 mt-8 mb-3">$1</h4>`
  );

  html = html.replace(
    /^### (.+)$/gm,
    `<h3 class="text-xl font-bold text-stone-900 dark:text-stone-50 mt-10 mb-4">$1</h3>`
  );

  html = html.replace(
    /^## (.+)$/gm,
    `<h2 class="text-2xl font-bold text-stone-900 dark:text-stone-50 mt-12 mb-5">$1</h2>`
  );

  html = html.replace(
    /^# (.+)$/gm,
    `<h1 class="text-3xl font-bold text-stone-900 dark:text-stone-50 mt-12 mb-5">$1</h1>`
  );

  // Bold + Italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Images
  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    `
      <img
        src="$2"
        alt="$1"
        class="rounded-2xl my-8 w-full border border-stone-200 dark:border-white/10"
      />
    `
  );

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    `
      <a
        href="$2"
        target="_blank"
        rel="noopener noreferrer"
        class="text-lime-700 dark:text-lime-400 underline underline-offset-4 hover:text-lime-900 dark:hover:text-lime-300 transition-colors"
      >
        $1
      </a>
    `
  );

  // Horizontal rule
  html = html.replace(
    /^---$/gm,
    `<hr class="my-10 border-stone-200 dark:border-white/10" />`
  );

  // Lists
  html = html.replace(
    /^(?:- |\* )(.+)$/gm,
    `<li class="ml-5 list-disc text-stone-700 dark:text-stone-300">$1</li>`
  );

  html = html.replace(
    /^\d+\. (.+)$/gm,
    `<li class="ml-5 list-decimal text-stone-700 dark:text-stone-300">$1</li>`
  );

  html = html.replace(
    /((?:<li class="ml-5 list-disc[^"]*">[^<]*<\/li>\n?)+)/g,
    `<ul class="my-5 space-y-2">$1</ul>`
  );

  html = html.replace(
    /((?:<li class="ml-5 list-decimal[^"]*">[^<]*<\/li>\n?)+)/g,
    `<ol class="my-5 space-y-2">$1</ol>`
  );

  // Blockquotes
  html = html.replace(
    /^> (.+)$/gm,
    `
      <blockquote class="border-l-4 border-lime-400 pl-5 py-2 my-6 italic text-stone-600 dark:text-stone-400 bg-lime-50/40 dark:bg-lime-950/20 rounded-r-xl">
        $1
      </blockquote>
    `
  );

  // Paragraphs
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();

      if (!trimmed) return "";

      if (/^<[a-z]/.test(trimmed)) {
        return trimmed;
      }

      return `
        <p class="text-stone-700 dark:text-stone-300 leading-8 mb-5 text-base">
          ${trimmed.replace(/\n/g, "<br />")}
        </p>
      `;
    })
    .join("\n");

  return html;
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  // Blog Post
  const {
    data,
    isLoading,
    isError,
  } = useQuery<{ post: BlogPost }>({
    queryKey: queryKeys.blog.detail(slug!),
    queryFn: async () => {
      const res = await api.get(`/blog/${slug}`);
      return res.data;
    },
    enabled: !!slug,
  });

  const post = data?.post;

  // Related Posts
  const { data: relatedData } = useQuery<{ posts: BlogPost[] }>({
    queryKey: queryKeys.blog.related(slug!),
    queryFn: async () => {
      const res = await api.get(`/blog/${slug}/related`);
      return res.data;
    },
    enabled: !!slug && !!post,
  });

  const relatedPosts = relatedData?.posts ?? [];

  // HTML content
  const renderedContent = useMemo(() => {
    if (!post?.content) return "";
    return markdownToHtml(post?.content ?? "");
  }, [post?.content]);

  // Reading time fallback
  const readingTime = useMemo(() => {
    if (!post) return 0;
    return post.readingTime || calculateReadingTime(post.content);
  }, [post]);

  const categoryStyles = post
    ? CATEGORY_COLORS[post.category]
    : null;

  return (
    <div className="font-sans min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50">
      <ReadingProgressBar />
      {post && (
        <SEO
          title={post.title}
          description={post.excerpt || post.content.slice(0, 160)}
          keywords={post.tags.join(", ")}
          ogImage={post.featuredImage}
          canonicalUrl={canonicalUrl(`/blog/${post.slug}`)}
          ogType="article"
          structuredData={[
            blogPostingSchema({
              title: post.title,
              excerpt: post.excerpt,
              content: post.content,
              slug: post.slug,
              authorName: post.author?.name || "InternHack",
              publishedAt: post.publishedAt,
              updatedAt: post.updatedAt,
              featuredImage: post.featuredImage,
              tags: post.tags,
            }),

            breadcrumbSchema([
              {
                name: "Blog",
                url: canonicalUrl("/blog"),
              },
              {
                name: post.title,
                url: canonicalUrl(`/blog/${post.slug}`),
              },
            ]),
          ]}
        />
      )}

      <Navbar />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
          </motion.div>

          {/* Loading */}
          {isLoading ? (
            <div className="space-y-6">
              <LoadingScreen />
              <BlogSkeleton />
            </div>
          ) : isError || !post ? (
            <EmptyState
              title="Article not found"
              description="The article you're looking for doesn't exist or may have been removed."
              actionLabel="Browse articles"
              onAction={() => { window.location.href = "/blog"; }}
            />
          ) : (
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Featured Image */}
              {post.featuredImage && (
                <div className="overflow-hidden rounded-3xl border border-stone-200 dark:border-white/10 mb-8">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-72 md:h-105 object-cover"
                  />
                </div>
              )}

              {/* Category */}
              {categoryStyles && (
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-xl text-xs font-semibold mb-5 ${categoryStyles.bg} ${categoryStyles.text}`}
                >
                  {CATEGORY_LABELS[post.category]}
                </span>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-stone-950 dark:text-stone-50 mb-5">
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-lg text-stone-500 dark:text-stone-400 leading-8 mb-8">
                  {post.excerpt}
                </p>
              )}

              {/* Meta */}
              <div className="flex flex-wrap items-center justify-between gap-5 border-y border-stone-200 dark:border-white/10 py-5 mb-10">
                <div className="flex flex-wrap items-center gap-5 text-sm text-stone-500 dark:text-stone-400">
                  {/* Author */}
                  <div className="flex items-center gap-2">
                    {post.author.profilePic ? (
                      <img
                        src={post.author.profilePic}
                        alt={post.author.name}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center">
                        <User className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                      </div>
                    )}

                    <span className="font-medium text-stone-700 dark:text-stone-300">
                      {post.author.name}
                    </span>
                  </div>

                  {/* Date */}
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formatBlogDate(
                      post.publishedAt ?? post.createdAt
                    )}
                  </span>

                  {/* Reading */}
                  <ReadingTime minutes={readingTime} />

                  {/* Views */}
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    {post.viewCount.toLocaleString()} views
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <BookmarkButton postId={post.id} />

                  <ShareButton
                    title={post.title}
                    url={window.location.href}
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className="prose-custom max-w-none"
                dangerouslySetInnerHTML={{
                  __html: renderedContent,
                }}
              />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-stone-200 dark:border-white/10">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag className="w-4 h-4 text-stone-400 dark:text-stone-500 mr-1" />

                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-xl text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related */}
              {relatedPosts.length > 0 && (
                <div className="mt-14 pt-10 border-t border-stone-200 dark:border-white/10">
                  <div className="flex items-center gap-2 mb-6">
                    <BookOpen className="w-5 h-5 text-stone-400 dark:text-stone-500" />

                    <h2 className="text-xl font-bold text-stone-900 dark:text-stone-50">
                      Related Articles
                    </h2>
                  </div>

                  <RelatedArticles posts={relatedPosts} />
                </div>
              )}

              {/* Footer CTA */}
              <div className="mt-14 pt-8 border-t border-stone-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all articles
                </Link>

                <div className="flex items-center gap-3">
                  <BookmarkButton postId={post.id} />

                  <button
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 text-sm font-medium text-stone-700 dark:text-stone-300 hover:border-lime-400/50 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Back to top
                  </button>
                </div>
              </div>
            </motion.article>
          )}
        </div>
      </main>
    </div>
  );
}