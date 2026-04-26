import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useSearchParams, useNavigate } from "react-router";
import toast from "@/components/ui/toast";
import { motion } from "framer-motion";
import {
  Download,
  Copy,
  AlertCircle,
  Check,
  FileCode2,
  Eye,
  Loader2,
  Play,
  Code2,
  MessageSquare,
  Lock,
  Plus,
  X,
  FileCog,
  Upload,
  ChevronDown,
  Undo2,
  Redo2,
  LayoutGrid,
} from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import AtsToolsNav from "./AtsToolsNav";
import LatexChatPanel from "./LatexChatPanel";
import { javascript } from "@codemirror/lang-javascript";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import { useLatexAutoSave } from "./useLatexAutoSave";
import { getLatexTemplate } from "./latex-templates.data";

const DEFAULT_TEMPLATE = `\\documentclass[11pt,a4paper]{article}
\\usepackage[margin=0.75in]{geometry}
\\usepackage{enumitem}
\\usepackage{hyperref}
\\usepackage{titlesec}

\\titleformat{\\section}{\\large\\bfseries}{}{0em}{}[\\titlerule]
\\titlespacing*{\\section}{0pt}{8pt}{4pt}

\\setlength{\\parindent}{0pt}
\\pagestyle{empty}

\\begin{document}

\\begin{center}
  {\\LARGE \\textbf{John Doe}} \\\\[4pt]
  john.doe@email.com \\enspace $\\cdot$ \\enspace +1 (555) 123-4567 \\enspace $\\cdot$ \\enspace San Francisco, CA \\\\
  \\href{https://linkedin.com/in/johndoe}{linkedin.com/in/johndoe} \\enspace $\\cdot$ \\enspace \\href{https://github.com/johndoe}{github.com/johndoe}
\\end{center}

\\section*{Summary}
Experienced software engineer with 5+ years building scalable web applications. Proficient in React, Node.js, and cloud infrastructure. Passionate about clean code and user-centric design.

\\section*{Experience}

\\textbf{Senior Software Engineer} \\hfill TechCorp Inc., San Francisco, CA \\\\
\\textit{Jan 2022 -- Present}
\\begin{itemize}[leftmargin=*, nosep]
  \\item Led development of a real-time analytics dashboard serving 50K+ daily users
  \\item Reduced API response times by 40\\% through query optimization and caching
  \\item Mentored 3 junior developers and conducted code reviews
\\end{itemize}

\\vspace{4pt}
\\textbf{Software Engineer} \\hfill StartupXYZ, Remote \\\\
\\textit{Jun 2019 -- Dec 2021}
\\begin{itemize}[leftmargin=*, nosep]
  \\item Built React component library used across 4 product teams
  \\item Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes
  \\item Designed RESTful APIs handling 10M+ requests per day
\\end{itemize}

\\section*{Education}

\\textbf{B.S. Computer Science} \\hfill University of California, Berkeley \\\\
\\textit{2015 -- 2019} \\hfill GPA: 3.8/4.0

\\section*{Skills}

\\textbf{Languages:} JavaScript, TypeScript, Python, SQL \\\\
\\textbf{Frameworks:} React, Node.js, Express, Next.js \\\\
\\textbf{Tools:} Git, Docker, AWS, PostgreSQL, Redis

\\section*{Projects}

\\textbf{Open Source CLI Tool} -- A command-line tool for automating code reviews. 500+ GitHub stars. Built with Node.js and TypeScript.

\\end{document}`;

const cardCls =
  "bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md";
const sectionKickerCls =
  "inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500";
const sectionTitleCls =
  "text-sm font-bold text-stone-900 dark:text-stone-50";

function CardHeader({
  kicker,
  title,
  right,
}: {
  kicker: string;
  title: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-stone-200 dark:border-white/10">
      <div className="flex flex-col gap-1 min-w-0">
        <span className={sectionKickerCls}>
          <span className="h-1 w-1 bg-lime-400" />
          {kicker}
        </span>
        <span className={sectionTitleCls}>{title}</span>
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}

const ghostBtnCls =
  "inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
const limeBtnCls =
  "inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors border-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
const darkBtnCls =
  "inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-50 dark:text-stone-900 bg-stone-900 dark:bg-stone-50 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors border-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

export default function LatexResumeEditor() {
  const [searchParams, setSearchParams] = useSearchParams();
  const templateId = searchParams.get("template");

  const templateOverride = useMemo(() => {
    if (!templateId) return null;
    const tmpl = getLatexTemplate(templateId);
    if (!tmpl) return null;
    return { code: tmpl.source, files: tmpl.supportingFiles };
  }, [templateId]);

  const { code, setCode, supportingFiles, setSupportingFiles } = useLatexAutoSave(
    DEFAULT_TEMPLATE,
    templateOverride,
  );

  useEffect(() => {
    if (templateId) setSearchParams({}, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [copied, setCopied] = useState(false);
  const [mobileView, setMobileView] = useState<"editor" | "preview">("editor");
  const [chatOpen, setChatOpen] = useState(false);
  const [filesOpen, setFilesOpen] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [editingFileIdx, setEditingFileIdx] = useState<number | null>(null);
  const [fileListCollapsed, setFileListCollapsed] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const user = useAuthStore((s) => s.user);
  const navigate = useNavigate();
  const isPremium =
    (user?.subscriptionPlan === "MONTHLY" || user?.subscriptionPlan === "YEARLY") &&
    user?.subscriptionStatus === "ACTIVE";

  const historyRef = useRef<string[]>([code]);
  const historyPosRef = useRef(0);
  const skipHistoryRef = useRef(false);

  const pushHistory = useCallback((val: string) => {
    if (skipHistoryRef.current) return;
    const history = historyRef.current;
    const pos = historyPosRef.current;
    historyRef.current = history.slice(0, pos + 1);
    historyRef.current.push(val);
    if (historyRef.current.length > 50) historyRef.current.shift();
    historyPosRef.current = historyRef.current.length - 1;
  }, []);

  const handleCodeChange = useCallback((val: string) => {
    setCode(val);
    pushHistory(val);
  }, [setCode, pushHistory]);

  const handleUndo = useCallback(() => {
    if (historyPosRef.current <= 0) return;
    historyPosRef.current -= 1;
    skipHistoryRef.current = true;
    setCode(historyRef.current[historyPosRef.current]);
    skipHistoryRef.current = false;
  }, [setCode]);

  const handleRedo = useCallback(() => {
    if (historyPosRef.current >= historyRef.current.length - 1) return;
    historyPosRef.current += 1;
    skipHistoryRef.current = true;
    setCode(historyRef.current[historyPosRef.current]);
    skipHistoryRef.current = false;
  }, [setCode]);

  const handleApplyCode = useCallback((newCode: string) => {
    setCode(newCode);
    pushHistory(newCode);
  }, [setCode, pushHistory]);

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [compiling, setCompiling] = useState(false);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const prevBlobUrl = useRef<string | null>(null);

  const missingFile = previewError?.match(/File [`']([^'`]+)['`]\s*not found/i)?.[1] ?? null;

  useEffect(() => {
    return () => {
      if (prevBlobUrl.current) URL.revokeObjectURL(prevBlobUrl.current);
    };
  }, []);

  const hasAutoCompiled = useRef(false);
  useEffect(() => {
    if (hasAutoCompiled.current || !code) return;
    hasAutoCompiled.current = true;
    setCompiling(true);
    setPreviewError(null);
    api
      .post("/latex/compile", { source: code, supportingFiles }, { responseType: "blob" })
      .then((res) => {
        if (prevBlobUrl.current) URL.revokeObjectURL(prevBlobUrl.current);
        const url = URL.createObjectURL(res.data as Blob);
        prevBlobUrl.current = url;
        setPdfUrl(url);
      })
      .catch(() => {
        // Silent fail on auto-compile, user can manually retry
      })
      .finally(() => setCompiling(false));
  }, [code, supportingFiles]);

  const handleCopyLatex = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCompile = async () => {
    setCompiling(true);
    setPreviewError(null);
    try {
      const res = await api.post(
        "/latex/compile",
        { source: code, supportingFiles },
        { responseType: "blob" },
      );
      if (prevBlobUrl.current) URL.revokeObjectURL(prevBlobUrl.current);
      const url = URL.createObjectURL(res.data as Blob);
      prevBlobUrl.current = url;
      setPdfUrl(url);
    } catch (err: unknown) {
      let msg = "Compilation failed. Please check your LaTeX syntax.";
      let details = "";
      if (err && typeof err === "object" && "response" in err) {
        const resp = err as { response?: { data?: Blob; status?: number } };
        if (resp.response?.data instanceof Blob) {
          try {
            const text = await resp.response.data.text();
            const parsed = JSON.parse(text);
            msg = parsed.message || msg;
            details = parsed.details || "";
          } catch {
            // ignore parse error
          }
        }
      }
      setPreviewError(details ? `${msg}\n\n${details}` : msg);
    } finally {
      setCompiling(false);
    }
  };

  const handleDownloadPdf = async () => {
    setCompiling(true);
    try {
      const res = await api.post(
        "/latex/compile",
        { source: code, supportingFiles },
        { responseType: "blob" },
      );
      const url = URL.createObjectURL(res.data as Blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err: unknown) {
      let msg = "Compilation failed. Please check your LaTeX syntax.";
      if (err && typeof err === "object" && "response" in err) {
        const resp = err as { response?: { data?: { message?: string } } };
        msg = resp.response?.data?.message ?? msg;
      }
      setPreviewError(msg);
    } finally {
      setCompiling(false);
    }
  };

  return (
    <div className="relative pb-16">
      <SEO title="LaTeX Resume Editor" noIndex />

      {/* ─── Editorial header ─── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
      >
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            resume / latex editor
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Write LaTeX.
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-md">
            Write LaTeX on the left, see the PDF on the right. Upload supporting files or chat with AI to refine your resume.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCompile}
            disabled={compiling}
            className={darkBtnCls}
          >
            {compiling ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
            {compiling ? "Compiling..." : "Compile"}
          </button>
          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={compiling}
            className={limeBtnCls}
          >
            <Download className="w-3.5 h-3.5" /> Download PDF
          </button>
        </div>
      </motion.div>

      <AtsToolsNav />

      {/* ─── Secondary toolbar ─── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className={`${cardCls} mb-5`}
      >
        <div className="flex items-center gap-2 flex-wrap p-3">
          {/* Mobile panel toggle */}
          <div className="flex lg:hidden gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileView("editor")}
              className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest transition-colors cursor-pointer border-0 ${
                mobileView === "editor"
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                  : "bg-white dark:bg-stone-900 text-stone-500"
              }`}
            >
              <FileCode2 className="w-3 h-3 inline mr-1" /> editor
            </button>
            <button
              type="button"
              onClick={() => setMobileView("preview")}
              className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest transition-colors cursor-pointer border-0 ${
                mobileView === "preview"
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                  : "bg-white dark:bg-stone-900 text-stone-500"
              }`}
            >
              <Eye className="w-3 h-3 inline mr-1" /> preview
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopyLatex}
            className={ghostBtnCls}
            title="Copy LaTeX"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-lime-500" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>

          <button
            type="button"
            onClick={handleUndo}
            disabled={historyPosRef.current <= 0}
            className={ghostBtnCls}
            title="Undo"
          >
            <Undo2 className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleRedo}
            disabled={historyPosRef.current >= historyRef.current.length - 1}
            className={ghostBtnCls}
            title="Redo"
          >
            <Redo2 className="w-3.5 h-3.5" />
          </button>

          <div className="ml-auto flex items-center gap-2 flex-wrap">
            <Link
              to="/student/ats/latex-templates"
              className={`${ghostBtnCls} no-underline`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Templates</span>
            </Link>

            <button
              type="button"
              onClick={() => setFilesOpen(!filesOpen)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold transition-colors cursor-pointer border ${
                filesOpen
                  ? "bg-lime-50 dark:bg-lime-400/10 text-lime-700 dark:text-lime-400 border-lime-200 dark:border-lime-400/30"
                  : "bg-transparent text-stone-700 dark:text-stone-300 border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5"
              }`}
              title="Supporting files"
            >
              <FileCog className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Files</span>
              {supportingFiles.length > 0 && (
                <span className="text-[10px] font-mono bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 px-1.5 rounded">
                  {supportingFiles.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                if (!isPremium) {
                  toast.error("AI Assistant is a Premium feature. Upgrade to unlock.");
                  navigate("/student/checkout");
                  return;
                }
                setChatOpen(!chatOpen);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold transition-colors cursor-pointer border ${
                chatOpen
                  ? "bg-lime-50 dark:bg-lime-400/10 text-lime-700 dark:text-lime-400 border-lime-200 dark:border-lime-400/30"
                  : "bg-transparent text-stone-700 dark:text-stone-300 border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5"
              }`}
              title={isPremium ? "AI Assistant" : "AI Assistant, Premium only"}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">AI Assistant</span>
              {!isPremium && <Lock className="w-3 h-3 text-amber-500" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* ─── Supporting files panel ─── */}
      {filesOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className={`${cardCls} mb-5 overflow-hidden`}
        >
          <CardHeader
            kicker="assets"
            title="Supporting files"
            right={
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                .cls .sty .bst .bib .tex
              </span>
            }
          />

          <div className="p-5">
            {supportingFiles.length > 0 && (
              <div className="mb-4">
                <button
                  type="button"
                  onClick={() => setFileListCollapsed(!fileListCollapsed)}
                  className="inline-flex items-center gap-1.5 mb-2 text-[11px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors border-0 bg-transparent cursor-pointer"
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${fileListCollapsed ? "-rotate-90" : ""}`}
                  />
                  {supportingFiles.length} file{supportingFiles.length > 1 ? "s" : ""} added
                </button>

                {!fileListCollapsed && (
                  <div className="space-y-2">
                    {supportingFiles.map((sf, idx) => (
                      <div
                        key={idx}
                        className="bg-stone-50 dark:bg-stone-950/60 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
                      >
                        <div className="flex items-center gap-2 px-3 py-2">
                          <FileCode2 className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                          <span className="text-xs font-medium text-stone-700 dark:text-stone-300 flex-1 truncate font-mono">
                            {sf.filename}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
                            {Math.round(sf.content.length / 1024)}kb
                          </span>
                          <button
                            type="button"
                            onClick={() => setEditingFileIdx(editingFileIdx === idx ? null : idx)}
                            className="text-[10px] font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300 hover:text-lime-600 dark:hover:text-lime-400 transition-colors border-0 bg-transparent cursor-pointer"
                          >
                            {editingFileIdx === idx ? "close" : "edit"}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setSupportingFiles(supportingFiles.filter((_, i) => i !== idx));
                              if (editingFileIdx === idx) setEditingFileIdx(null);
                            }}
                            className="w-5 h-5 flex items-center justify-center rounded hover:bg-red-50 dark:hover:bg-red-950/30 text-stone-400 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                        {editingFileIdx === idx && (
                          <div className="border-t border-stone-200 dark:border-white/10">
                            <textarea
                              value={sf.content}
                              onChange={(e) => {
                                const updated = [...supportingFiles];
                                updated[idx] = { ...sf, content: e.target.value };
                                setSupportingFiles(updated);
                              }}
                              className="w-full h-48 px-3 py-2 text-xs font-mono bg-transparent text-stone-700 dark:text-stone-300 resize-none focus:outline-none"
                              spellCheck={false}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept=".cls,.sty,.bst,.bib,.tex"
              multiple
              className="hidden"
              onChange={(e) => {
                const files = e.target.files;
                if (!files) return;
                Array.from(files).forEach((file) => {
                  if (!/\.(cls|sty|bst|bib|tex)$/.test(file.name)) return;
                  if (supportingFiles.some((f) => f.filename === file.name)) return;
                  const reader = new FileReader();
                  reader.onload = () => {
                    const content = reader.result as string;
                    setSupportingFiles((prev) => [...prev, { filename: file.name, content }]);
                  };
                  reader.readAsText(file);
                });
                e.target.value = "";
              }}
            />

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className={limeBtnCls}
              >
                <Upload className="w-3 h-3" /> Upload file
              </button>

              <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600">
                or
              </span>

              <div className="flex items-center gap-2 flex-1">
                <input
                  type="text"
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  placeholder="resume.cls"
                  className="flex-1 min-w-0 text-xs font-mono px-3 py-2 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
                />
                <button
                  type="button"
                  onClick={() => {
                    const name = newFileName.trim();
                    if (!name || !/\.(cls|sty|bst|bib|tex)$/.test(name)) return;
                    if (supportingFiles.some((f) => f.filename === name)) return;
                    const updated = [...supportingFiles, { filename: name, content: "" }];
                    setSupportingFiles(updated);
                    setEditingFileIdx(updated.length - 1);
                    setNewFileName("");
                  }}
                  disabled={!newFileName.trim() || !/\.(cls|sty|bst|bib|tex)$/.test(newFileName.trim())}
                  className={`${ghostBtnCls} shrink-0`}
                >
                  <Plus className="w-3 h-3" /> Add
                </button>
              </div>
            </div>

            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-3">
              upload .cls, .sty, .bst, .bib, or .tex files your template requires (e.g. resume.cls).
            </p>
          </div>
        </motion.div>
      )}

      {/* ─── Split pane ─── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <div className="flex flex-col lg:flex-row gap-5 h-[85vh] lg:h-[calc(100vh-80px)] min-h-120">
          {/* Editor */}
          <div
            className={`lg:w-1/2 ${cardCls} flex-col overflow-hidden min-h-0 ${
              mobileView === "preview" ? "hidden lg:flex" : "flex"
            }`}
          >
            <CardHeader
              kicker="source"
              title="LaTeX editor"
              right={
                <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">
                  / professional
                </span>
              }
            />
            <div className="flex-1 overflow-auto">
              <CodeMirror
                value={code}
                onChange={handleCodeChange}
                extensions={[javascript()]}
                theme="light"
                basicSetup={{
                  lineNumbers: true,
                  foldGutter: true,
                  bracketMatching: true,
                  highlightActiveLine: true,
                  autocompletion: false,
                }}
                style={{ height: "100%", fontSize: "14px" }}
              />
            </div>
          </div>

          {/* Preview */}
          <div
            className={`lg:w-1/2 ${cardCls} flex-col overflow-hidden min-h-0 ${
              mobileView === "editor" ? "hidden lg:flex" : "flex"
            }`}
          >
            <CardHeader
              kicker="output"
              title="PDF preview"
              right={
                compiling ? (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    <Loader2 className="w-3 h-3 animate-spin" /> compiling
                  </span>
                ) : pdfUrl ? (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">
                    / ready
                  </span>
                ) : null
              }
            />
            <div className="flex-1 relative bg-stone-50/60 dark:bg-stone-950/40">
              {pdfUrl && !previewError && (
                <iframe
                  src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="w-full h-full border-0"
                  title="PDF Preview"
                />
              )}

              {previewError && (
                <div className="absolute inset-0 flex items-start justify-center p-6 overflow-y-auto">
                  <div className="max-w-md w-full">
                    <div className={`${cardCls} border-red-200 dark:border-red-900/40 p-6`}>
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-md bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 flex items-center justify-center shrink-0">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <div className={sectionKickerCls}>
                            <span className="h-1 w-1 bg-red-500" />
                            error
                          </div>
                          <h3 className={sectionTitleCls + " mt-1"}>Compilation failed</h3>
                          <p className="text-xs text-stone-500 mt-0.5">
                            Fix the errors below and try again.
                          </p>
                        </div>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 rounded-md p-4">
                        <pre className="text-xs text-red-700 dark:text-red-400 whitespace-pre-wrap leading-relaxed max-h-40 overflow-auto font-mono">
                          {previewError}
                        </pre>
                      </div>

                      {missingFile && (
                        <div className="mt-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-md p-4">
                          <div className={sectionKickerCls}>
                            <span className="h-1 w-1 bg-amber-500" />
                            missing file
                          </div>
                          <p className="text-xs font-bold text-amber-800 dark:text-amber-300 mt-1 mb-2 font-mono">
                            {missingFile}
                          </p>
                          <p className="text-xs text-amber-700 dark:text-amber-400 mb-3 leading-relaxed">
                            Your template requires <span className="font-mono font-bold">{missingFile}</span>. Upload it using the Files button in the toolbar:
                          </p>
                          <ol className="text-xs text-amber-700 dark:text-amber-400 space-y-1 mb-3 list-decimal list-inside">
                            <li>Click the <span className="font-bold">Files</span> button above</li>
                            <li>Click <span className="font-bold">Upload file</span> and select <span className="font-mono">{missingFile}</span></li>
                            <li>Click <span className="font-bold">Compile</span> again</li>
                          </ol>
                          <button
                            type="button"
                            onClick={() => {
                              setFilesOpen(true);
                              setPreviewError(null);
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-amber-50 bg-amber-600 hover:bg-amber-700 transition-colors border-0 cursor-pointer"
                          >
                            <Upload className="w-3 h-3" /> Open files
                          </button>
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => setPreviewError(null)}
                        className={`mt-4 w-full justify-center ${ghostBtnCls}`}
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {!pdfUrl && !previewError && !compiling && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center max-w-xs">
                    <div className="w-16 h-16 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center mb-5 mx-auto relative">
                      <Play className="w-7 h-7 text-stone-400 dark:text-stone-600" />
                      <span className="absolute -top-1 -right-1 h-2 w-2 bg-lime-400" />
                    </div>
                    <div className={sectionKickerCls + " justify-center mb-2"}>
                      <span className="h-1 w-1 bg-lime-400" />
                      idle
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
                      Ready to compile.
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      Click{" "}
                      <span className="font-bold text-stone-900 dark:text-stone-50">
                        Compile
                      </span>{" "}
                      to render your LaTeX source as a PDF.
                    </p>
                  </div>
                </div>
              )}

              {!pdfUrl && compiling && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-5">
                      <div className="absolute inset-0 rounded-md border border-stone-200 dark:border-white/10" />
                      <motion.div
                        className="absolute inset-0 rounded-md border border-lime-400 border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-lime-500" />
                      </div>
                    </div>
                    <div className={sectionKickerCls + " justify-center mb-2"}>
                      <span className="h-1 w-1 bg-lime-400" />
                      compiling
                    </div>
                    <h3 className={sectionTitleCls}>Rendering LaTeX</h3>
                    <p className="text-xs text-stone-500 mt-1">
                      This usually takes a few seconds.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {chatOpen && isPremium && (
        <LatexChatPanel
          code={code}
          onApplyCode={handleApplyCode}
          onClose={() => setChatOpen(false)}
        />
      )}
    </div>
  );
}
