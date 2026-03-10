import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router";
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
  ScanSearch,
  PenTool,
  Mail,
  History,
  ChevronRight,
  Code2,
  Sparkles,
} from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";

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
const TOOLS = [
  { icon: ScanSearch, title: "ATS Score", desc: "Analyze your resume", to: "/student/ats/score" },
  { icon: Sparkles, title: "AI Resume", desc: "Generate with AI", to: "/student/ats/resume-generator" },
  { icon: Mail, title: "Cover Letter", desc: "AI-generated letters", to: "/student/ats/cover-letter" },
  { icon: History, title: "Score History", desc: "Past analyses", to: "/student/ats/history" },
];

// ── Component ──

export default function LatexResumeEditor() {
  const [code, setCode] = useState(DEFAULT_TEMPLATE);
  const [copied, setCopied] = useState(false);
  const [mobileView, setMobileView] = useState<"editor" | "preview">("editor");

  // Preview state
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [compiling, setCompiling] = useState(false);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const prevBlobUrl = useRef<string | null>(null);

  // Cleanup blob URL on unmount
  useEffect(() => {
    return () => {
      if (prevBlobUrl.current) URL.revokeObjectURL(prevBlobUrl.current);
    };
  }, []);

  const handleCodeChange = useCallback((val: string) => {
    setCode(val);
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
        { source: code },
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
        { source: code },
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
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          LaTeX <span className="text-gradient-accent">Resume Editor</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          Write LaTeX, compile to PDF, and download your polished resume
        </p>
      </motion.div>

      {/* Tool Cards Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8 px-4 sm:px-6"
      >
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool.to}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
          >
            <Link
              to={tool.to}
              className="group flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0">
                <tool.icon className="w-4.5 h-4.5 text-white dark:text-gray-950" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-950 dark:text-white truncate">
                  {tool.title}
                </p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 truncate">
                  {tool.desc}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors shrink-0" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Toolbar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="px-4 sm:px-6 mb-5"
      >
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-4">
          <div className="flex items-center gap-2 flex-wrap">
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

              <button
                onClick={handleCopyLatex}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>

              <button
                onClick={handleCompile}
                disabled={compiling}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {compiling ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                {compiling ? "Compiling..." : "Compile"}
              </button>

              <button
                onClick={handleDownloadPdf}
                disabled={compiling}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </button>
          </div>
        </div>
      </motion.div>

      {/* Split Pane */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="px-4 sm:px-6"
      >
        <div className="flex flex-col lg:flex-row gap-4 min-h-[calc(100vh-220px)]">
          {/* Editor Panel */}
          <div
            className={`lg:w-1/2 flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden ${
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
            className={`lg:w-1/2 flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden ${
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
                <div className="absolute inset-0 flex items-center justify-center p-6">
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
    </div>
  );
}
