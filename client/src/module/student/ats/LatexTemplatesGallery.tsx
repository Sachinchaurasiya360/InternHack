import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Code2, FileCode2, Loader2 } from "lucide-react";
import { SEO } from "../../../components/SEO";
import AtsToolsNav from "./AtsToolsNav";
import api from "../../../lib/axios";
import { LATEX_TEMPLATES, type LatexTemplate } from "./latex-templates.data";
import { Button } from "../../../components/ui/button";

const CACHE_VERSION = "v3";
const CACHE_PREFIX = `latex-tpl-pdf-${CACHE_VERSION}-`;

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Professional", value: "professional" },
  { label: "Academic", value: "academic" },
  { label: "Technical", value: "technical" },
  { label: "Creative", value: "creative" },
  { label: "Minimal", value: "minimal" },
  { label: "Executive", value: "executive" },
] as const;

// Convert blob to base64 for localStorage caching
function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function base64ToBlob(base64: string): Blob {
  const [meta, data] = base64.split(",");
  const mime = meta.match(/:(.*?);/)?.[1] ?? "application/pdf";
  const bytes = atob(data);
  const arr = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
  return new Blob([arr], { type: mime });
}

function TemplateCard({ template, index }: { template: LatexTemplate; index: number }) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [compiling, setCompiling] = useState(false);
  const blobUrlRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPreview() {
      // Check localStorage cache first
      try {
        const cached = localStorage.getItem(CACHE_PREFIX + template.id);
        if (cached) {
          const blob = base64ToBlob(cached);
          const url = URL.createObjectURL(blob);
          if (!cancelled) {
            blobUrlRef.current = url;
            setPdfUrl(url);
          }
          return;
        }
      } catch { /* cache miss */ }

      // Compile via API
      setCompiling(true);
      try {
        const res = await api.post(
          "/latex/compile",
          { source: template.source, supportingFiles: template.supportingFiles },
          { responseType: "blob" },
        );
        const blob = res.data as Blob;
        if (cancelled) return;

        const url = URL.createObjectURL(blob);
        blobUrlRef.current = url;
        setPdfUrl(url);

        // Cache to localStorage
        try {
          const b64 = await blobToBase64(blob);
          localStorage.setItem(CACHE_PREFIX + template.id, b64);
        } catch { /* storage full - skip caching */ }
      } catch {
        // Compilation failed - show text fallback
      } finally {
        if (!cancelled) setCompiling(false);
      }
    }

    loadPreview();

    return () => {
      cancelled = true;
      if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    };
  }, [template.id, template.source, template.supportingFiles]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden group hover:shadow-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300"
    >
      {/* PDF Preview */}
      <div className="aspect-[8.5/11] bg-gray-50 dark:bg-gray-800/50 overflow-hidden relative">
        {pdfUrl ? (
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            className="w-full h-full border-0 pointer-events-none"
            title={`${template.name} preview`}
          />
        ) : compiling ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
            <span className="text-xs text-gray-400">Compiling preview...</span>
          </div>
        ) : (
          <div className="p-4 overflow-hidden">
            <div className="font-mono text-[9px] leading-relaxed text-gray-400 dark:text-gray-500 space-y-0.5">
              {template.previewLines.map((line, i) => (
                <div key={i} className={line === "" ? "h-2" : ""}>{line}</div>
              ))}
            </div>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/10 dark:bg-black/30">
          <Button asChild variant="primary" size="md" className="rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-lg">
            <Link
              to={`/student/ats/latex-editor?template=${template.id}`}
              className="no-underline"
            >
              <Code2 className="w-4 h-4" />
              Use Template
            </Link>
          </Button>
        </div>
      </div>

      {/* Card footer */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-1">
          <FileCode2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
          <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">
            {template.name}
          </h3>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2.5">
          {template.description}
        </p>
        <div className="flex items-center gap-1.5 flex-wrap mb-3">
          {template.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button asChild variant="mono" size="md" className="w-full rounded-xl">
          <Link
            to={`/student/ats/latex-editor?template=${template.id}`}
            className="no-underline"
          >
            <Code2 className="w-3.5 h-3.5" />
            Use Template
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

export default function LatexTemplatesGallery() {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? LATEX_TEMPLATES
      : LATEX_TEMPLATES.filter((t) => t.category === category);

  return (
    <div className="relative max-w-360 mx-auto pb-12">
      <SEO title="LaTeX Resume Templates" description="Browse professional LaTeX resume templates and open them in the editor" noIndex />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-8 px-4"
      >
        <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-2 sm:mb-3">
          LaTeX <span className="text-gradient-accent">Resume Templates</span>
        </h1>
        <p className="text-sm sm:text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          Pick a template, open it in the editor, and customize it to your needs
        </p>
      </motion.div>

      <AtsToolsNav />

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="px-4 sm:px-6 mb-6"
      >
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.value}
              variant={category === cat.value ? "mono" : "outline"}
              size="sm"
              onClick={() => setCategory(cat.value)}
              className="shrink-0 rounded-xl"
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Templates Grid - 2 per row */}
      <div className="px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((template, i) => (
            <TemplateCard key={template.id} template={template} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              No templates in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
