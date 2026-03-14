import { useState, useEffect, useRef, useCallback } from "react";
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
} from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import AtsToolsNav from "./AtsToolsNav";
import LatexChatPanel from "./LatexChatPanel";
import { javascript } from "@codemirror/lang-javascript";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import { useLatexAutoSave } from "./useLatexAutoSave";

// ── Default LaTeX Template ──

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
// Tool nav handled by shared AtsToolsNav

// ── Component ──

export default function LatexResumeEditor() {
  const { code, setCode, supportingFiles, setSupportingFiles } = useLatexAutoSave(DEFAULT_TEMPLATE);
  const [copied, setCopied] = useState(false);
  const [mobileView, setMobileView] = useState<"editor" | "preview">("editor");
  const [chatOpen, setChatOpen] = useState(false);
  const [filesOpen, setFilesOpen] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [editingFileIdx, setEditingFileIdx] = useState<number | null>(null);
  const [fileListCollapsed, setFileListCollapsed] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const user = useAuthStore((s) => s.user);
  const isPremium =
    (user?.subscriptionPlan === "MONTHLY" || user?.subscriptionPlan === "YEARLY") &&
    user?.subscriptionStatus === "ACTIVE";

  // Undo/redo history
  const historyRef = useRef<string[]>([code]);
  const historyPosRef = useRef(0);
  const skipHistoryRef = useRef(false);

  const pushHistory = useCallback((val: string) => {
    if (skipHistoryRef.current) return;
    const history = historyRef.current;
    const pos = historyPosRef.current;
    // Trim any future entries if we're not at the end
    historyRef.current = history.slice(0, pos + 1);
    historyRef.current.push(val);
    // Keep max 50 entries
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

  // Preview state
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [compiling, setCompiling] = useState(false);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const prevBlobUrl = useRef<string | null>(null);

  // Detect missing file from error (e.g. "File `resume.cls' not found")
  const missingFile = previewError?.match(/File [`']([^'`]+)['`]\s*not found/i)?.[1] ?? null;

  // Cleanup blob URL on unmount
  useEffect(() => {
    return () => {
      if (prevBlobUrl.current) URL.revokeObjectURL(prevBlobUrl.current);
    };
  }, []);

  const handleCopyLatex = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Compile - sends to backend, shows PDF in preview
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

  // Download - compiles and triggers download
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
    <div className="relative max-w-360 mx-auto pb-12">
      <SEO title="LaTeX Resume Editor" />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
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
          LaTeX <span className="text-gradient-accent">Resume Editor</span>
        </h1>
        <p className="text-sm sm:text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          Write LaTeX, compile to PDF, and download your polished resume
        </p>
      </motion.div>

      <AtsToolsNav />

      {/* Toolbar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="px-4 sm:px-6 mb-5"
      >
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-3 sm:p-4">
          {/* Row 1: Mobile view toggle + primary actions */}
          <div className="flex items-center gap-2">
            {/* Mobile toggle */}
            <div className="flex lg:hidden bg-gray-100 dark:bg-gray-800 rounded-xl p-0.5">
              <button
                onClick={() => setMobileView("editor")}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  mobileView === "editor" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400"
                }`}
              >
                <FileCode2 className="w-3.5 h-3.5 inline mr-1" />
                Editor
              </button>
              <button
                onClick={() => setMobileView("preview")}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  mobileView === "preview" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400"
                }`}
              >
                <Eye className="w-3.5 h-3.5 inline mr-1" />
                Preview
              </button>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={handleCompile}
                disabled={compiling}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {compiling ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{compiling ? "Compiling..." : "Compile"}</span>
              </button>

              <button
                onClick={handleDownloadPdf}
                disabled={compiling}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>

          {/* Row 2: Secondary actions */}
          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={handleCopyLatex}
              title="Copy LaTeX"
              className="inline-flex items-center justify-center w-8 h-8 sm:w-auto sm:h-auto sm:gap-1.5 sm:px-3 sm:py-2 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
            </button>

            <button
              onClick={handleUndo}
              disabled={historyPosRef.current <= 0}
              title="Undo"
              className="inline-flex items-center justify-center w-8 h-8 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Undo2 className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleRedo}
              disabled={historyPosRef.current >= historyRef.current.length - 1}
              title="Redo"
              className="inline-flex items-center justify-center w-8 h-8 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Redo2 className="w-3.5 h-3.5" />
            </button>

            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => setFilesOpen(!filesOpen)}
                title="Supporting files"
                className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-xs font-medium rounded-xl border transition-colors ${
                  filesOpen
                    ? "bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-800"
                    : "text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <FileCog className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Files</span>
                {supportingFiles.length > 0 && (
                  <span className="text-[10px] bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400 px-1.5 rounded-md font-semibold">
                    {supportingFiles.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setChatOpen(!chatOpen)}
                title="AI Assistant"
                className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-xs font-medium rounded-xl border transition-colors ${
                  chatOpen
                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800"
                    : "text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">AI Assistant</span>
                {!isPremium && <Lock className="w-3 h-3 text-amber-500" />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Supporting Files Panel */}
      {filesOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="px-4 sm:px-6 mb-4"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-4">
            <div className="flex items-center gap-2 mb-3">
              <FileCog className="w-4 h-4 text-violet-500" />
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Supporting Files
              </h3>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                .cls, .sty, .bst, .bib, .tex
              </span>
            </div>

            {supportingFiles.length > 0 && (
              <div className="mb-3">
                {/* Collapsible header */}
                <button
                  onClick={() => setFileListCollapsed(!fileListCollapsed)}
                  className="flex items-center gap-1.5 mb-2 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
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
                        className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                      >
                        <div className="flex items-center gap-2 px-3 py-2">
                          <FileCode2 className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 flex-1 truncate">
                            {sf.filename}
                          </span>
                          <span className="text-[10px] text-gray-400">
                            {Math.round(sf.content.length / 1024)}KB
                          </span>
                          <button
                            onClick={() => setEditingFileIdx(editingFileIdx === idx ? null : idx)}
                            className="text-xs text-indigo-500 hover:text-indigo-600 font-medium"
                          >
                            {editingFileIdx === idx ? "Close" : "Edit"}
                          </button>
                          <button
                            onClick={() => {
                              setSupportingFiles(supportingFiles.filter((_, i) => i !== idx));
                              if (editingFileIdx === idx) setEditingFileIdx(null);
                            }}
                            className="w-5 h-5 flex items-center justify-center rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                        {editingFileIdx === idx && (
                          <div className="border-t border-gray-100 dark:border-gray-700">
                            <textarea
                              value={sf.content}
                              onChange={(e) => {
                                const updated = [...supportingFiles];
                                updated[idx] = { ...sf, content: e.target.value };
                                setSupportingFiles(updated);
                              }}
                              className="w-full h-48 px-3 py-2 text-xs font-mono bg-transparent text-gray-700 dark:text-gray-300 resize-none focus:outline-none"
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

            {/* Upload or add manually */}
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
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              >
                <Upload className="w-3 h-3" />
                Upload File
              </button>

              <span className="hidden sm:inline text-[11px] text-gray-400 dark:text-gray-500">or</span>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  placeholder="resume.cls"
                  className="flex-1 min-w-0 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 placeholder:text-gray-400 dark:placeholder:text-gray-600 text-gray-700 dark:text-gray-300"
                />
                <button
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
                  className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800/50 rounded-lg hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                >
                  <Plus className="w-3 h-3" />
                  Add
                </button>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-2">
              Upload .cls, .sty, .bst, .bib, or .tex files that your LaTeX template requires (e.g. resume.cls).
            </p>
          </div>
        </motion.div>
      )}

      {/* Split Pane */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="px-4 sm:px-6"
      >
        <div className="flex flex-col lg:flex-row gap-4 h-[70vh] lg:h-[calc(100vh-180px)] min-h-80">
          {/* Editor Panel */}
          <div
            className={`lg:w-1/2 flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden min-h-0 ${
              mobileView === "preview" ? "hidden lg:flex" : "flex"
            }`}
          >
            <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
                <FileCode2 className="w-3.5 h-3.5 text-indigo-500" />
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                LaTeX Source
              </span>
              <span className="ml-auto text-[10px] font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Professional
              </span>
            </div>
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

          {/* Preview Panel */}
          <div
            className={`lg:w-1/2 flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden min-h-0 ${
              mobileView === "editor" ? "hidden lg:flex" : "flex"
            }`}
          >
            <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center">
                <Eye className="w-3.5 h-3.5 text-violet-500" />
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                PDF Preview
              </span>
              {compiling && (
                <Loader2 className="w-3.5 h-3.5 text-indigo-500 animate-spin ml-auto" />
              )}
            </div>
            <div className="flex-1 relative bg-gray-50/50 dark:bg-gray-800/30">
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
                    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-red-200 dark:border-red-800/50 shadow-lg p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                            Compilation Failed
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            Fix the errors below and try again
                          </p>
                        </div>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/50 rounded-xl p-4">
                        <pre className="text-xs text-red-700 dark:text-red-400 whitespace-pre-wrap leading-relaxed max-h-40 overflow-auto">
                          {previewError}
                        </pre>
                      </div>

                      {/* Missing file hint */}
                      {missingFile && (
                        <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4">
                          <p className="text-xs font-semibold text-amber-800 dark:text-amber-300 mb-2">
                            Missing file: {missingFile}
                          </p>
                          <p className="text-xs text-amber-700 dark:text-amber-400 mb-3 leading-relaxed">
                            Your LaTeX template requires <span className="font-mono font-semibold">{missingFile}</span>. Upload it using the <span className="font-semibold">Files</span> button in the toolbar:
                          </p>
                          <ol className="text-xs text-amber-700 dark:text-amber-400 space-y-1 mb-3 list-decimal list-inside">
                            <li>Click the <span className="font-semibold">Files</span> button in the toolbar above</li>
                            <li>Click <span className="font-semibold">Upload File</span> and select your <span className="font-mono">{missingFile}</span></li>
                            <li>Click <span className="font-semibold">Compile</span> again</li>
                          </ol>
                          <button
                            onClick={() => {
                              setFilesOpen(true);
                              setPreviewError(null);
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                          >
                            <Upload className="w-3 h-3" />
                            Open Files & Upload
                          </button>
                        </div>
                      )}

                      <button
                        onClick={() => setPreviewError(null)}
                        className="mt-4 w-full py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {!pdfUrl && !previewError && !compiling && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Play className="w-7 h-7 text-indigo-400" />
                    </div>
                    <h3 className="text-gray-800 dark:text-gray-200 font-bold text-base mb-1.5">
                      Ready to Compile
                    </h3>
                    <p className="text-gray-400 dark:text-gray-500 text-sm max-w-xs mx-auto">
                      Click <span className="font-semibold text-indigo-600 dark:text-indigo-400">Compile</span> to render your LaTeX resume as PDF
                    </p>
                  </div>
                </div>
              )}

              {!pdfUrl && compiling && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className="absolute inset-0 rounded-full border-3 border-indigo-100 dark:border-indigo-900/50" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-3 border-indigo-500 border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-indigo-500" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                      Compiling LaTeX
                    </h3>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      This usually takes a few seconds
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* AI Chat Panel */}
      {chatOpen && (
        <LatexChatPanel
          code={code}
          onApplyCode={handleApplyCode}
          onClose={() => setChatOpen(false)}
        />
      )}
    </div>
  );
}
