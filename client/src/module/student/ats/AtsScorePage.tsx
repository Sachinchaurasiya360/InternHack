import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  History,
  Sparkles,
  Target,
  X,
  BarChart2,
  Lightbulb,
  Search,
  TrendingUp,
  RefreshCw,
  ScanSearch,
  AlignLeft,
  Loader2,
  Zap,
  PenTool,
  Code2,
  Mail,
  ArrowRight,
  Shield,
  Award,
  ChevronRight,
} from "lucide-react";
import api from "../../../lib/axios";
import { SEO } from "../../../components/SEO";
import type { AtsScore } from "../../../lib/types";

const CATEGORY_LABELS: Record<string, string> = {
  formatting: "Formatting",
  keywords: "Keywords",
  experience: "Experience",
  skills: "Skills",
  education: "Education",
  impact: "Impact",
};

const CATEGORY_ICONS: Record<string, typeof BarChart2> = {
  formatting: AlignLeft,
  keywords: Search,
  experience: Award,
  skills: Zap,
  education: FileText,
  impact: TrendingUp,
};

const CATEGORY_COLORS: Record<
  string,
  { pill: string; bar: string; bg: string; ring: string }
> = {
  formatting: {
    pill: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
    bar: "bg-violet-500",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    ring: "ring-violet-500/20",
  },
  keywords: {
    pill: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    bar: "bg-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    ring: "ring-blue-500/20",
  },
  experience: {
    pill: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    bar: "bg-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    ring: "ring-emerald-500/20",
  },
  skills: {
    pill: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    bar: "bg-amber-500",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    ring: "ring-amber-500/20",
  },
  education: {
    pill: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
    bar: "bg-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    ring: "ring-pink-500/20",
  },
  impact: {
    pill: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    bar: "bg-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    ring: "ring-indigo-500/20",
  },
};

type ResultTab = "breakdown" | "keywords" | "suggestions";

const ANALYSIS_STEPS = [
  { icon: Upload, label: "Uploading resume" },
  { icon: FileText, label: "Parsing document" },
  { icon: Search, label: "Scanning keywords" },
  { icon: AlignLeft, label: "Checking formatting" },
  { icon: ScanSearch, label: "Analyzing impact statements" },
  { icon: Sparkles, label: "Generating ATS score" },
];

// ── Score Circle ───────────────────────────────────────────────────────────
function ScoreCircle({
  score,
  size = "lg",
}: {
  score: number;
  size?: "lg" | "sm";
}) {
  const isLg = size === "lg";
  const radius = isLg ? 62 : 36;
  const viewBox = isLg ? "0 0 160 160" : "0 0 88 88";
  const cx = isLg ? 80 : 44;
  const sw = isLg ? 10 : 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const strokeColor =
    score >= 70 ? "#22c55e" : score >= 40 ? "#eab308" : "#ef4444";
  const glowColor =
    score >= 70
      ? "rgba(34,197,94,0.15)"
      : score >= 40
        ? "rgba(234,179,8,0.15)"
        : "rgba(239,68,68,0.15)";
  const textColor =
    score >= 70
      ? "text-green-600 dark:text-green-400"
      : score >= 40
        ? "text-yellow-600 dark:text-yellow-400"
        : "text-red-600 dark:text-red-400";
  const badgeCls =
    score >= 70
      ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
      : score >= 40
        ? "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800"
        : "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800";
  const label =
    score >= 70 ? "Excellent" : score >= 40 ? "Needs Work" : "Poor";

  return (
    <div className="flex flex-col items-center shrink-0">
      <div
        className={isLg ? "relative w-40 h-40" : "relative w-20 h-20"}
        style={isLg ? { filter: `drop-shadow(0 0 20px ${glowColor})` } : {}}
      >
        <svg className="w-full h-full -rotate-90" viewBox={viewBox}>
          <circle
            cx={cx}
            cy={cx}
            r={radius}
            fill="none"
            stroke="#f3f4f6"
            strokeWidth={sw}
            className="dark:stroke-gray-800"
          />
          <motion.circle
            cx={cx}
            cy={cx}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            className={`${isLg ? "text-5xl" : "text-xl"} font-extrabold ${textColor} leading-none`}
          >
            {score}
          </motion.span>
          {isLg && (
            <span className="text-gray-400 dark:text-gray-500 text-[10px] mt-1 font-medium tracking-wider">
              / 100
            </span>
          )}
        </div>
      </div>
      {isLg && (
        <span
          className={`mt-3 px-4 py-1 rounded-full text-xs font-bold border ${badgeCls}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function AtsScorePage() {
  const [file, setFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<AtsScore | null>(null);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState<ResultTab>("breakdown");

  const [currentStep, setCurrentStep] = useState(-1);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analyzedFileName, setAnalyzedFileName] = useState("");
  const [analyzedFileSize, setAnalyzedFileSize] = useState(0);

  useEffect(() => {
    if (!loading) {
      if (currentStep >= 0) setAnalysisComplete(true);
      return;
    }
    setAnalysisComplete(false);
    setCurrentStep(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i < ANALYSIS_STEPS.length; i++) {
      timers.push(setTimeout(() => setCurrentStep(i), i * 2200));
    }
    return () => timers.forEach(clearTimeout);
  }, [loading]);

  useEffect(() => {
    if (result && loading === false) {
      setCurrentStep(ANALYSIS_STEPS.length - 1);
      setAnalysisComplete(true);
    }
  }, [result, loading]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setResumeUrl("");
      setResult(null);
      setError("");
      setCurrentStep(-1);
      setAnalysisComplete(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped && dropped.type === "application/pdf") {
      setFile(dropped);
      setResumeUrl("");
      setResult(null);
      setError("");
      setCurrentStep(-1);
      setAnalysisComplete(false);
    }
  };

  const handleAnalyze = async () => {
    setError("");
    setResult(null);
    setLoading(true);
    setActiveTab("breakdown");
    setAnalysisComplete(false);
    setCurrentStep(0);
    if (file) {
      setAnalyzedFileName(file.name);
      setAnalyzedFileSize(file.size);
    }
    try {
      let url = resumeUrl;
      if (file && !resumeUrl) {
        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        const uploadRes = await api.post("/upload/resume", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        url = uploadRes.data.file.url;
        setResumeUrl(url);
        setUploading(false);
      }
      if (!url) {
        setError("Please upload a resume PDF first.");
        setLoading(false);
        return;
      }
      const body: Record<string, string> = { resumeUrl: url };
      if (jobTitle.trim()) body["jobTitle"] = jobTitle.trim();
      if (jobDescription.trim()) body["jobDescription"] = jobDescription.trim();
      const res = await api.post("/ats/score", body);
      setResult(res.data.score);
    } catch (err: unknown) {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message || "Failed to analyze resume. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
      setUploading(false);
    }
  };

  const resetAll = () => {
    setFile(null);
    setResumeUrl("");
    setResult(null);
    setError("");
    setCurrentStep(-1);
    setAnalysisComplete(false);
    setAnalyzedFileName("");
    setAnalyzedFileSize(0);
  };

  const TABS: { id: ResultTab; label: string; icon: React.ReactNode }[] = [
    {
      id: "breakdown",
      label: "Breakdown",
      icon: <BarChart2 className="w-3.5 h-3.5" />,
    },
    {
      id: "keywords",
      label: "Keywords",
      icon: <Search className="w-3.5 h-3.5" />,
    },
    {
      id: "suggestions",
      label: "Suggestions",
      icon: <Lightbulb className="w-3.5 h-3.5" />,
    },
  ];

  const showUploadForm = !result;

  const TOOLS = [
    {
      icon: PenTool,
      title: "Resume Builder",
      desc: "Build with templates",
      to: "/student/ats/templates",
      gradient: "from-blue-500 to-blue-600",
      soft: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    },
    {
      icon: Code2,
      title: "LaTeX Editor",
      desc: "Write in LaTeX",
      to: "/student/ats/latex-editor",
      gradient: "from-emerald-500 to-emerald-600",
      soft: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Mail,
      title: "Cover Letter",
      desc: "AI-generated letters",
      to: "/student/ats/cover-letter",
      gradient: "from-pink-500 to-rose-600",
      soft: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400",
    },
    {
      icon: History,
      title: "Score History",
      desc: "Past analyses",
      to: "/student/ats/history",
      gradient: "from-amber-500 to-orange-600",
      soft: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <SEO
        title="Resume"
        description="Your resume toolkit — ATS scoring, resume builder, LaTeX editor, and cover letter generator."
        noIndex
      />

      {/* ── Hero Header ── */}
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900 via-gray-900 to-violet-950 dark:from-gray-950 dark:via-gray-950 dark:to-violet-950 p-8 mb-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <ScanSearch className="w-4 h-4 text-violet-400" />
            </div>
            <span className="text-xs font-semibold text-violet-400 tracking-wider uppercase">
              Resume Toolkit
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Resume & ATS Score
          </h1>
          <p className="text-sm text-gray-400 max-w-lg">
            Score, build, and optimize your resume for ATS systems. Get
            AI-powered insights to land more interviews.
          </p>
        </div>

        {/* Tool Cards — inline in hero */}
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {TOOLS.map((tool) => (
            <Link
              key={tool.to}
              to={tool.to}
              className="group flex items-center gap-3 p-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all no-underline"
            >
              <div
                className={`w-9 h-9 rounded-lg bg-linear-to-br ${tool.gradient} flex items-center justify-center shrink-0 shadow-lg`}
              >
                <tool.icon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">
                  {tool.title}
                </p>
                <p className="text-[11px] text-gray-400 truncate">
                  {tool.desc}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* ── ATS Analyzer Section ── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-7 h-7 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          </div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            ATS Score Analyzer
          </h2>
          <div className="flex-1" />
          <span className="flex items-center gap-1.5 text-[11px] text-gray-400 dark:text-gray-500 font-medium">
            <Shield className="w-3 h-3" /> AI-powered analysis
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* ── Left Column ── */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="wait">
              {showUploadForm ? (
                <motion.div
                  key="upload-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {/* Upload Card */}
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm p-5">
                    <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Upload className="w-4 h-4 text-violet-500" />
                      Upload Resume
                    </h2>
                    <label
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      className={`relative flex flex-col items-center justify-center gap-3 py-10 px-4 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${
                        isDragging
                          ? "border-violet-400 bg-violet-50 dark:bg-violet-900/20 scale-[1.01]"
                          : file
                            ? "border-green-300 bg-green-50/50 dark:border-green-700 dark:bg-green-900/20"
                            : "border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 hover:border-violet-300 dark:hover:border-violet-700 hover:bg-violet-50/30 dark:hover:bg-violet-900/10"
                      }`}
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                          file
                            ? "bg-green-100 dark:bg-green-900/40"
                            : isDragging
                              ? "bg-violet-100 dark:bg-violet-900/40"
                              : "bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-sm"
                        }`}
                      >
                        {file ? (
                          <FileText className="w-7 h-7 text-green-600 dark:text-green-400" />
                        ) : (
                          <Upload
                            className={`w-7 h-7 ${isDragging ? "text-violet-500" : "text-gray-400 dark:text-gray-500"}`}
                          />
                        )}
                      </div>
                      {file ? (
                        <div className="text-center">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white max-w-45 truncate mx-auto">
                            {file.name}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                            {(file.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {isDragging ? "Drop to upload!" : "Drop PDF here"}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                            or click to browse &middot; Max 10 MB
                          </p>
                        </div>
                      )}
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    {file && (
                      <button
                        onClick={resetAll}
                        className="mt-3 flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <X className="w-3 h-3" /> Remove file
                      </button>
                    )}
                  </div>

                  {/* Job Context */}
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm p-5">
                    <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                      <Target className="w-4 h-4 text-violet-500" />
                      Target Job
                      <span className="ml-auto text-[10px] font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        optional
                      </span>
                    </h2>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
                      Add job details for role-specific keyword scoring
                    </p>
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="e.g. Frontend Developer"
                        className="w-full px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all placeholder-gray-400 dark:placeholder-gray-500 bg-gray-50/50 dark:bg-gray-800/50 dark:text-white"
                      />
                      <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Paste the job description for tailored keyword analysis..."
                        rows={5}
                        className="w-full px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500 bg-gray-50/50 dark:bg-gray-800/50 dark:text-white"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-start gap-2.5 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-xl text-sm border border-red-200 dark:border-red-800">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    onClick={handleAnalyze}
                    disabled={loading || (!file && !resumeUrl)}
                    className="w-full py-3.5 bg-linear-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-violet-500/20 active:scale-[0.99]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" /> Analyze Resume
                      </>
                    )}
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="analyzed-card"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {/* Resume Analyzed */}
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-sm font-bold text-gray-900 dark:text-white">
                          Resume Analyzed
                        </h2>
                        <p className="text-xs text-gray-400 dark:text-gray-500 truncate">
                          {analyzedFileName}
                        </p>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800/80 rounded-xl p-3.5 mb-4 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500 dark:text-gray-500">File size</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {(analyzedFileSize / 1024).toFixed(1)} KB
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500 dark:text-gray-500">Format</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">PDF</span>
                      </div>
                      {jobTitle && (
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500 dark:text-gray-500">Target role</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300 truncate ml-4 max-w-35">
                            {jobTitle}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={resetAll}
                        className="flex-1 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Upload className="w-3.5 h-3.5" /> New Resume
                      </button>
                      <button
                        onClick={handleAnalyze}
                        disabled={loading}
                        className="flex-1 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-xl hover:bg-violet-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5"
                      >
                        <RefreshCw
                          className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`}
                        />{" "}
                        Re-analyze
                      </button>
                    </div>
                  </div>

                  {/* Category Scores Summary */}
                  {result && (
                    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-violet-500" />
                        <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Category Scores
                        </h3>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(result.categoryScores)
                          .slice(0, 6)
                          .map(([key, score]) => {
                            const col = CATEGORY_COLORS[key] ?? {
                              pill: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
                              bg: "bg-gray-50 dark:bg-gray-800",
                            };
                            const scoreColor =
                              score >= 70
                                ? "text-green-600 dark:text-green-400"
                                : score >= 40
                                  ? "text-yellow-600 dark:text-yellow-400"
                                  : "text-red-600 dark:text-red-400";
                            return (
                              <div
                                key={key}
                                className={`text-center p-2.5 rounded-xl ${col.bg} border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors`}
                              >
                                <p className={`text-lg font-bold ${scoreColor}`}>
                                  {score}
                                </p>
                                <p className="text-[10px] text-gray-500 dark:text-gray-500 font-medium mt-0.5">
                                  {CATEGORY_LABELS[key] ?? key}
                                </p>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Right Column: Results ── */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {/* Empty state */}
              {!result && !loading && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-h-105 flex flex-col items-center justify-center text-center p-10 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-violet-50/40 via-transparent to-indigo-50/30 dark:from-violet-900/10 dark:to-indigo-900/10 pointer-events-none" />
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, currentColor 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-linear-to-br from-violet-100 to-indigo-100 dark:from-violet-900/40 dark:to-indigo-900/40 rounded-2xl flex items-center justify-center mb-5 mx-auto">
                      <BarChart2 className="w-9 h-9 text-violet-400" />
                    </div>
                    <h3 className="text-gray-800 dark:text-gray-200 font-bold text-lg mb-2">
                      Your Results Await
                    </h3>
                    <p className="text-gray-400 dark:text-gray-500 text-sm max-w-xs leading-relaxed mx-auto">
                      Upload your resume and click{" "}
                      <span className="font-semibold text-violet-600 dark:text-violet-400">
                        Analyze Resume
                      </span>{" "}
                      to get your ATS score, keyword analysis, and improvement
                      tips
                    </p>
                    <div className="flex items-center justify-center gap-5 mt-6">
                      {[
                        {
                          label: "6 Categories",
                          icon: <BarChart2 className="w-3.5 h-3.5" />,
                        },
                        {
                          label: "AI Powered",
                          icon: <Sparkles className="w-3.5 h-3.5" />,
                        },
                        {
                          label: "Instant",
                          icon: <Zap className="w-3.5 h-3.5" />,
                        },
                      ].map((tag) => (
                        <span
                          key={tag.label}
                          className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium"
                        >
                          {tag.icon} {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── Step-by-step Loading ── */}
              {loading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-h-105 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm p-6 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-violet-50/30 via-transparent to-transparent dark:from-violet-900/10 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="relative w-10 h-10">
                        <div className="absolute inset-0 rounded-full border-3 border-violet-100 dark:border-violet-900/50" />
                        <motion.div
                          className="absolute inset-0 rounded-full border-3 border-violet-500 border-t-transparent"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-violet-500" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                          Analyzing your resume
                        </h3>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                          This usually takes 10-20 seconds
                        </p>
                      </div>
                    </div>

                    <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-6">
                      <motion.div
                        className="h-full bg-linear-to-r from-violet-500 to-indigo-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{
                          width: `${Math.min(((currentStep + 1) / ANALYSIS_STEPS.length) * 100, 100)}%`,
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>

                    <div className="space-y-1">
                      {ANALYSIS_STEPS.map((step, i) => {
                        const Icon = step.icon;
                        const isDone =
                          i < currentStep ||
                          (i === currentStep && analysisComplete);
                        const isCurrent =
                          i === currentStep && !analysisComplete;
                        const isPending = i > currentStep;
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                              isCurrent
                                ? "bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800"
                                : isDone
                                  ? "bg-green-50/50 dark:bg-green-900/10"
                                  : "opacity-50"
                            }`}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isDone ? "bg-green-100 dark:bg-green-900/40" : isCurrent ? "bg-violet-100 dark:bg-violet-900/40" : "bg-gray-100 dark:bg-gray-800"}`}
                            >
                              {isDone ? (
                                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                              ) : isCurrent ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                >
                                  <Icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                                </motion.div>
                              ) : (
                                <Icon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                              )}
                            </div>
                            <span
                              className={`text-sm font-medium flex-1 ${isDone ? "text-green-700 dark:text-green-400" : isCurrent ? "text-violet-700 dark:text-violet-400" : "text-gray-400 dark:text-gray-500"}`}
                            >
                              {step.label}
                            </span>
                            {isDone && (
                              <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded-full"
                              >
                                Done
                              </motion.span>
                            )}
                            {isCurrent && (
                              <div className="flex gap-1">
                                {[0, 0.15, 0.3].map((delay) => (
                                  <motion.div
                                    key={delay}
                                    className="w-1.5 h-1.5 rounded-full bg-violet-400"
                                    animate={{
                                      scale: [1, 1.4, 1],
                                      opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                      duration: 0.8,
                                      repeat: Infinity,
                                      delay,
                                    }}
                                  />
                                ))}
                              </div>
                            )}
                            {isPending && (
                              <span className="text-[10px] text-gray-300 dark:text-gray-600 font-medium">
                                Pending
                              </span>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── Results ── */}
              {result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  {/* Score Header Card */}
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-violet-50/40 via-transparent to-indigo-50/20 dark:from-violet-900/10 dark:to-indigo-900/10 pointer-events-none" />
                    <div className="relative z-10 p-6 flex items-center gap-6">
                      <ScoreCircle score={result.overallScore} />
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                          Overall ATS Score
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                          {result.overallScore >= 70
                            ? "Great job! Your resume is well-optimized for ATS systems."
                            : result.overallScore >= 40
                              ? "Decent start — a few tweaks can push your score much higher."
                              : "Your resume needs significant improvements for ATS compatibility."}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {Object.entries(result.categoryScores)
                            .sort(([, a], [, b]) => b - a)
                            .slice(0, 3)
                            .map(([key, score]) => {
                              const col = CATEGORY_COLORS[key] ?? {
                                pill: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
                              };
                              return (
                                <span
                                  key={key}
                                  className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${col.pill}`}
                                >
                                  {CATEGORY_LABELS[key]}: {score}
                                </span>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tabbed Results */}
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm overflow-hidden">
                    {/* Pill tabs */}
                    <div className="flex gap-1 p-1.5 mx-4 mt-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
                      {TABS.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                            activeTab === tab.id
                              ? "bg-white dark:bg-gray-900 text-violet-700 dark:text-violet-400 shadow-sm"
                              : "text-gray-500 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                          }`}
                        >
                          {tab.icon} {tab.label}
                        </button>
                      ))}
                    </div>

                    <div className="p-5">
                      <AnimatePresence mode="wait">
                        {activeTab === "breakdown" && (
                          <motion.div
                            key="breakdown"
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 8 }}
                            transition={{ duration: 0.18 }}
                            className="space-y-2.5"
                          >
                            {Object.entries(result.categoryScores).map(
                              ([key, score]) => {
                                const col = CATEGORY_COLORS[key] ?? {
                                  pill: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
                                  bar: "bg-gray-400",
                                  bg: "bg-gray-50 dark:bg-gray-800",
                                };
                                const Icon = CATEGORY_ICONS[key] ?? BarChart2;
                                const barColor =
                                  score >= 70
                                    ? "bg-green-500"
                                    : score >= 40
                                      ? "bg-yellow-500"
                                      : "bg-red-500";
                                const scoreText =
                                  score >= 70
                                    ? "text-green-600 dark:text-green-400"
                                    : score >= 40
                                      ? "text-yellow-600 dark:text-yellow-400"
                                      : "text-red-600 dark:text-red-400";
                                return (
                                  <div
                                    key={key}
                                    className="flex items-center gap-3 p-3.5 bg-gray-50/80 dark:bg-gray-800/60 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-700/60 transition-colors"
                                  >
                                    <div
                                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${col.pill}`}
                                    >
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex justify-between items-center mb-1.5">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                          {CATEGORY_LABELS[key] ?? key}
                                        </span>
                                        <span
                                          className={`text-sm font-bold tabular-nums ${scoreText}`}
                                        >
                                          {score}
                                          <span className="text-gray-400 dark:text-gray-600 text-xs font-normal">
                                            /100
                                          </span>
                                        </span>
                                      </div>
                                      <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <motion.div
                                          initial={{ width: 0 }}
                                          animate={{
                                            width: `${String(score)}%`,
                                          }}
                                          transition={{
                                            duration: 0.9,
                                            delay: 0.1,
                                            ease: "easeOut",
                                          }}
                                          className={`h-full rounded-full ${barColor}`}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                );
                              },
                            )}
                          </motion.div>
                        )}

                        {activeTab === "keywords" && (
                          <motion.div
                            key="keywords"
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 8 }}
                            transition={{ duration: 0.18 }}
                            className="space-y-5"
                          >
                            {result.keywordAnalysis.found.length > 0 && (
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                                  </div>
                                  <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">
                                    Found ({result.keywordAnalysis.found.length})
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {result.keywordAnalysis.found.map((kw) => (
                                    <span
                                      key={kw}
                                      className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-xs font-medium border border-green-200 dark:border-green-800"
                                    >
                                      {kw}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                            {result.keywordAnalysis.missing.length > 0 && (
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center">
                                    <AlertCircle className="w-3 h-3 text-orange-500" />
                                  </div>
                                  <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                                    Missing ({result.keywordAnalysis.missing.length})
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {result.keywordAnalysis.missing.map((kw) => (
                                    <span
                                      key={kw}
                                      className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 rounded-lg text-xs font-medium border border-orange-200 dark:border-orange-800 border-dashed"
                                    >
                                      + {kw}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                            {result.keywordAnalysis.found.length === 0 &&
                              result.keywordAnalysis.missing.length === 0 && (
                                <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-8">
                                  No keyword data available for this analysis.
                                </p>
                              )}
                          </motion.div>
                        )}

                        {activeTab === "suggestions" && (
                          <motion.div
                            key="suggestions"
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 8 }}
                            transition={{ duration: 0.18 }}
                            className="space-y-2.5"
                          >
                            {result.suggestions.length > 0 ? (
                              result.suggestions.map((s, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.06 }}
                                  className="flex items-start gap-3 p-4 bg-amber-50/70 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/40"
                                >
                                  <span className="w-6 h-6 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                    {i + 1}
                                  </span>
                                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {s}
                                  </p>
                                </motion.div>
                              ))
                            ) : (
                              <div className="flex flex-col items-center py-8 text-center">
                                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
                                  <CheckCircle className="w-6 h-6 text-green-500" />
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                  No major improvements needed
                                </p>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                  Your resume looks great!
                                </p>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
