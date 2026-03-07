import { useState, useCallback, useEffect, useRef } from "react";
import {
  Download,
  Copy,
  ChevronDown,
  AlertCircle,
  Check,
  FileCode2,
  Eye,
  Loader2,
} from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";

// ── LaTeX Resume Templates ──

const TEMPLATES: Record<string, { name: string; code: string }> = {
  professional: {
    name: "Professional",
    code: `\\documentclass[11pt,a4paper]{article}
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

\\end{document}`,
  },
  modern: {
    name: "Modern",
    code: `\\documentclass[11pt,a4paper]{article}
\\usepackage[margin=0.7in]{geometry}
\\usepackage{enumitem}
\\usepackage{hyperref}
\\usepackage{titlesec}
\\usepackage{xcolor}

\\definecolor{accent}{HTML}{2563EB}

\\titleformat{\\section}{\\color{accent}\\large\\bfseries}{}{0em}{}[\\titlerule]
\\titlespacing*{\\section}{0pt}{10pt}{4pt}

\\setlength{\\parindent}{0pt}
\\pagestyle{empty}

\\begin{document}

\\begin{center}
  {\\LARGE \\textbf{Jane Smith}} \\\\[4pt]
  jane.smith@email.com \\enspace $\\cdot$ \\enspace +91 98765 43210 \\enspace $\\cdot$ \\enspace Mumbai, India
\\end{center}

\\section*{Profile}
Full-stack developer with expertise in modern web technologies. Strong background in building scalable applications and leading cross-functional teams.

\\section*{Technical Skills}

\\begin{tabular}{@{} l l}
  \\textbf{Frontend:} & React, Vue.js, TailwindCSS, TypeScript \\\\
  \\textbf{Backend:} & Node.js, Python, Go, GraphQL \\\\
  \\textbf{Database:} & PostgreSQL, MongoDB, Redis \\\\
  \\textbf{DevOps:} & Docker, Kubernetes, AWS, CI/CD \\\\
\\end{tabular}

\\section*{Work Experience}

\\textbf{Lead Developer} \\hfill Innovation Labs, Mumbai \\\\
\\textit{2023 -- Present}
\\begin{itemize}[leftmargin=*, nosep]
  \\item Architected microservices platform processing 1M+ transactions daily
  \\item Reduced infrastructure costs by 35\\% through containerization
\\end{itemize}

\\vspace{4pt}
\\textbf{Full Stack Developer} \\hfill Digital Solutions Co., Bangalore \\\\
\\textit{2020 -- 2023}
\\begin{itemize}[leftmargin=*, nosep]
  \\item Developed e-commerce platform with 100K+ active users
  \\item Implemented real-time notification system using WebSockets
\\end{itemize}

\\section*{Education}

\\textbf{B.Tech Computer Engineering} \\hfill IIT Bombay \\\\
\\textit{2016 -- 2020} \\hfill CGPA: 8.9/10

\\section*{Certifications}
\\begin{itemize}[leftmargin=*, nosep]
  \\item AWS Solutions Architect Associate (2023)
  \\item Google Cloud Professional Developer (2022)
\\end{itemize}

\\end{document}`,
  },
  academic: {
    name: "Academic",
    code: `\\documentclass[11pt,a4paper]{article}
\\usepackage[margin=1in]{geometry}
\\usepackage{enumitem}
\\usepackage{hyperref}
\\usepackage{titlesec}

\\titleformat{\\section}{\\large\\bfseries}{}{0em}{}[\\titlerule]
\\titlespacing*{\\section}{0pt}{10pt}{4pt}

\\setlength{\\parindent}{0pt}
\\pagestyle{empty}

\\begin{document}

\\begin{center}
  {\\LARGE \\textbf{Alex Johnson, Ph.D.}} \\\\[4pt]
  alex.johnson@university.edu \\enspace $\\cdot$ \\enspace +1 (555) 987-6543
\\end{center}

\\section*{Research Interests}
Machine Learning, Natural Language Processing, Computer Vision, Deep Learning Optimization

\\section*{Education}

\\textbf{Ph.D. in Computer Science} \\hfill Stanford University \\\\
\\textit{2018 -- 2023} \\\\
Thesis: \\textit{Efficient Transformer Architectures for Low-Resource NLP} \\\\
Advisor: Prof. Jane Smith

\\vspace{4pt}
\\textbf{M.S. in Computer Science} \\hfill MIT \\\\
\\textit{2016 -- 2018} \\hfill GPA: 4.0/4.0

\\vspace{4pt}
\\textbf{B.S. in Mathematics} \\hfill UC Berkeley \\\\
\\textit{2012 -- 2016} \\hfill GPA: 3.9/4.0

\\section*{Publications}
\\begin{enumerate}[leftmargin=*]
  \\item \\textbf{Johnson, A.}, Smith, J. (2023). \\textit{Efficient Attention Mechanisms for Long Documents.} NeurIPS 2023.
  \\item \\textbf{Johnson, A.}, et al. (2022). \\textit{Cross-lingual Transfer Learning with Minimal Data.} ACL 2022.
  \\item \\textbf{Johnson, A.}, Brown, R. (2021). \\textit{Optimization Strategies for Large Language Models.} ICML 2021.
\\end{enumerate}

\\section*{Teaching Experience}

\\textbf{Teaching Assistant -- CS229: Machine Learning} \\\\
\\textit{Stanford University} \\hfill Fall 2020, 2021

\\section*{Awards}
\\begin{itemize}[leftmargin=*, nosep]
  \\item Best Paper Award, NeurIPS 2023
  \\item NSF Graduate Research Fellowship (2018)
\\end{itemize}

\\end{document}`,
  },
};

// ── Component ──

export default function LatexResumeEditor() {
  const [selectedTemplate, setSelectedTemplate] = useState("professional");
  const [code, setCode] = useState(TEMPLATES.professional.code);
  const [copied, setCopied] = useState(false);
  const [showTemplateMenu, setShowTemplateMenu] = useState(false);
  const [mobileView, setMobileView] = useState<"editor" | "preview">("editor");

  // Preview state
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();
  const prevBlobUrl = useRef<string | null>(null);

  // Download state
  const [compiling, setCompiling] = useState(false);

  // Compile preview via server (debounced)
  const compilePreview = useCallback(async (source: string) => {
    setPreviewLoading(true);
    setPreviewError(null);
    try {
      const res = await api.post(
        "/latex/compile",
        { source },
        { responseType: "blob" },
      );
      // Revoke previous blob URL to avoid memory leaks
      if (prevBlobUrl.current) URL.revokeObjectURL(prevBlobUrl.current);
      const url = URL.createObjectURL(res.data as Blob);
      prevBlobUrl.current = url;
      setPdfUrl(url);
    } catch (err: unknown) {
      let msg = "Compilation failed";
      if (err && typeof err === "object" && "response" in err) {
        const resp = err as { response?: { data?: Blob; status?: number } };
        if (resp.response?.data instanceof Blob) {
          try {
            const text = await resp.response.data.text();
            const parsed = JSON.parse(text);
            msg = parsed.message || msg;
          } catch {
            // ignore parse error
          }
        }
        if (resp.response?.status === 503) {
          msg =
            "pdflatex not found. Install MiKTeX (miktex.org/download) or TeX Live, then restart the server.";
        }
      }
      setPreviewError(msg);
    } finally {
      setPreviewLoading(false);
    }
  }, []);

  // Debounce code changes — compile after 1s of inactivity
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => compilePreview(code), 1000);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [code, compilePreview]);

  // Cleanup blob URL on unmount
  useEffect(() => {
    return () => {
      if (prevBlobUrl.current) URL.revokeObjectURL(prevBlobUrl.current);
    };
  }, []);

  const handleCodeChange = useCallback((val: string) => {
    setCode(val);
  }, []);

  const handleTemplateSelect = (key: string) => {
    setSelectedTemplate(key);
    setCode(TEMPLATES[key].code);
    setShowTemplateMenu(false);
  };

  const handleCopyLatex = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      const msg =
        err && typeof err === "object" && "response" in err
          ? (
              (err as { response: { data: { message?: string } } }).response
                ?.data?.message ?? "Compilation failed"
            )
          : "Server unavailable. Install MiKTeX (miktex.org/download) and restart the server.";
      alert(msg);
    } finally {
      setCompiling(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <SEO title="LaTeX Resume Editor" />
      <Navbar />

      <div className="pt-24 pb-8 px-4 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              LaTeX Resume Editor
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Write LaTeX on the left, see the compiled PDF on the right.
              Full LaTeX support via pdflatex.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Template Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowTemplateMenu(!showTemplateMenu)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
              >
                {TEMPLATES[selectedTemplate]?.name || "Template"}
                <ChevronDown className="w-4 h-4" />
              </button>
              {showTemplateMenu && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20">
                  {Object.entries(TEMPLATES).map(([key, tpl]) => (
                    <button
                      key={key}
                      onClick={() => handleTemplateSelect(key)}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        selectedTemplate === key
                          ? "text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-50 dark:bg-indigo-900/20"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {tpl.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Copy LaTeX */}
            <button
              onClick={handleCopyLatex}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copied" : "Copy LaTeX"}
            </button>

            {/* Download PDF */}
            <button
              onClick={handleDownloadPdf}
              disabled={compiling}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              {compiling ? "Compiling..." : "Download PDF"}
            </button>
          </div>
        </div>

        {/* Mobile View Toggle */}
        <div className="flex lg:hidden mb-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setMobileView("editor")}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              mobileView === "editor"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <FileCode2 className="w-4 h-4" /> Editor
          </button>
          <button
            onClick={() => setMobileView("preview")}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              mobileView === "preview"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <Eye className="w-4 h-4" /> Preview
          </button>
        </div>

        {/* Split Pane */}
        <div className="flex flex-col lg:flex-row gap-4 min-h-[calc(100vh-220px)]">
          {/* Editor Panel */}
          <div
            className={`lg:w-1/2 flex flex-col bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden ${
              mobileView === "preview" ? "hidden lg:flex" : "flex"
            }`}
          >
            <div className="px-4 py-2.5 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                LaTeX Source
              </span>
            </div>
            <div className="flex-1 overflow-auto">
              <CodeMirror
                value={code}
                onChange={handleCodeChange}
                extensions={[javascript()]}
                theme="dark"
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
            className={`lg:w-1/2 flex flex-col bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden ${
              mobileView === "editor" ? "hidden lg:flex" : "flex"
            }`}
          >
            <div className="px-4 py-2.5 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2">
              <Eye className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                PDF Preview
              </span>
              {previewLoading && (
                <Loader2 className="w-3.5 h-3.5 text-violet-500 animate-spin ml-auto" />
              )}
            </div>
            <div className="flex-1 relative bg-gray-100 dark:bg-gray-800">
              {pdfUrl && !previewError && (
                <iframe
                  src={pdfUrl}
                  className="w-full h-full border-0"
                  title="PDF Preview"
                />
              )}

              {previewError && (
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="max-w-md text-center">
                    <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Compilation Error
                    </p>
                    <pre className="text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-left whitespace-pre-wrap max-h-60 overflow-auto">
                      {previewError}
                    </pre>
                  </div>
                </div>
              )}

              {!pdfUrl && !previewError && !previewLoading && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <div className="text-center">
                    <Eye className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Compiling preview...</p>
                  </div>
                </div>
              )}

              {!pdfUrl && previewLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Loader2 className="w-8 h-8 text-violet-500 animate-spin mx-auto mb-2" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Compiling LaTeX...
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
