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

const CATEGORY_COLORS: Record<
  string,
  { pill: string; bar: string; icon: string }
> = {
  formatting: {
    pill: "bg-violet-100 text-violet-700",
    bar: "bg-violet-500",
    icon: "text-violet-500",
  },
  keywords: {
    pill: "bg-blue-100 text-blue-700",
    bar: "bg-blue-500",
    icon: "text-blue-500",
  },
  experience: {
    pill: "bg-emerald-100 text-emerald-700",
    bar: "bg-emerald-500",
    icon: "text-emerald-500",
  },
  skills: {
    pill: "bg-amber-100 text-amber-700",
    bar: "bg-amber-500",
    icon: "text-amber-500",
  },
  education: {
    pill: "bg-pink-100 text-pink-700",
    bar: "bg-pink-500",
    icon: "text-pink-500",
  },
  impact: {
    pill: "bg-indigo-100 text-indigo-700",
    bar: "bg-indigo-500",
    icon: "text-indigo-500",
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
  const sw = isLg ? 13 : 7;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const strokeColor =
    score >= 70 ? "#22c55e" : score >= 40 ? "#eab308" : "#ef4444";
  const textColor =
    score >= 70
      ? "text-green-600"
      : score >= 40
        ? "text-yellow-600"
        : "text-red-600";
  const badgeCls =
    score >= 70
      ? "bg-green-50 text-green-700 border-green-200"
      : score >= 40
        ? "bg-yellow-50 text-yellow-700 border-yellow-200"
        : "bg-red-50 text-red-700 border-red-200";
  const label = score >= 70 ? "Excellent" : score >= 40 ? "Needs Work" : "Poor";

  return (
    <div className="flex flex-col items-center shrink-0">
      <div className={isLg ? "relative w-40 h-40" : "relative w-20 h-20"}>
        <svg className="w-full h-full -rotate-90" viewBox={viewBox}>
          <circle
            cx={cx}
            cy={cx}
            r={radius}
            fill="none"
            stroke="#f3f4f6"
            strokeWidth={sw}
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
            <span className="text-gray-400 text-[10px] mt-1 font-medium">
              / 100
            </span>
          )}
        </div>
      </div>
      {isLg && (
        <span
          className={`mt-2.5 px-3 py-0.5 rounded-full text-xs font-bold border ${badgeCls}`}
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

  return (
    <div className="-m-8">
      <SEO
        title="ATS Resume Analyzer"
        description="Upload your resume and get an AI-powered ATS score with detailed category breakdown, keyword analysis, and improvement suggestions."
        noIndex
      />

      {/* ── Top Bar ── */}
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-2 flex items-center justify-end">
        <Link
          to="/student/ats/history"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline bg-gray-100 hover:bg-gray-200 px-3.5 py-2 rounded-xl font-medium"
        >
          <History className="w-4 h-4" /> History
        </Link>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-5xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start pt-8">
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
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <h2 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
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
                      className={`flex flex-col items-center justify-center gap-3 py-9 px-4 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${
                        isDragging
                          ? "border-violet-400 bg-violet-50 scale-[1.01]"
                          : file
                            ? "border-green-300 bg-green-50"
                            : "border-gray-200 bg-gray-50 hover:border-violet-300 hover:bg-violet-50/30"
                      }`}
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors shadow-sm ${
                          file
                            ? "bg-green-100"
                            : isDragging
                              ? "bg-violet-100"
                              : "bg-white border border-gray-200"
                        }`}
                      >
                        {file ? (
                          <FileText className="w-7 h-7 text-green-600" />
                        ) : (
                          <Upload
                            className={`w-7 h-7 ${isDragging ? "text-violet-500" : "text-gray-400"}`}
                          />
                        )}
                      </div>
                      {file ? (
                        <div className="text-center">
                          <p className="text-sm font-semibold text-gray-900 max-w-45 truncate mx-auto">
                            {file.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {(file.size / 1024).toFixed(1)} KB · PDF
                          </p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <p className="text-sm font-semibold text-gray-700">
                            {isDragging ? "Drop to upload!" : "Drop PDF here"}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            or click to browse · Max 10 MB
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
                        className="mt-3 flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-3 h-3" /> Remove file
                      </button>
                    )}
                  </div>

                  {/* Job Context */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <h2 className="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      <Target className="w-4 h-4 text-violet-500" />
                      Target Job
                      <span className="ml-auto text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        optional
                      </span>
                    </h2>
                    <p className="text-xs text-gray-400 mb-4">
                      Add job details for role-specific keyword scoring
                    </p>
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="e.g. Frontend Developer"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-300 transition-all placeholder-gray-400"
                      />
                      <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Paste the job description for tailored keyword analysis..."
                        rows={5}
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-300 transition-all resize-none placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-start gap-2.5 p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    onClick={handleAnalyze}
                    disabled={loading || (!file && !resumeUrl)}
                    className="w-full py-3.5 bg-linear-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-violet-700 hover:to-indigo-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />{" "}
                        Analyzing...
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
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-sm font-bold text-gray-900">
                          Resume Analyzed
                        </h2>
                        <p className="text-xs text-gray-400 truncate">
                          {analyzedFileName}
                        </p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3 mb-4 space-y-1.5">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>File size</span>
                        <span className="font-medium text-gray-700">
                          {(analyzedFileSize / 1024).toFixed(1)} KB
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Format</span>
                        <span className="font-medium text-gray-700">PDF</span>
                      </div>
                      {jobTitle && (
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Target role</span>
                          <span className="font-medium text-gray-700 truncate ml-4 max-w-35">
                            {jobTitle}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={resetAll}
                        className="flex-1 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Upload className="w-3.5 h-3.5" /> Change Resume
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

                  {/* Score Quick Summary */}
                  {result && (
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-violet-500" />
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Category Scores
                        </h3>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(result.categoryScores)
                          .slice(0, 6)
                          .map(([key, score]) => {
                            const col = CATEGORY_COLORS[key] ?? {
                              pill: "bg-gray-100 text-gray-600",
                              bar: "bg-gray-400",
                              icon: "text-gray-500",
                            };
                            return (
                              <div
                                key={key}
                                className={`text-center p-2.5 rounded-xl ${col.pill.split(" ")[0]} border border-transparent hover:border-gray-200 transition-colors`}
                              >
                                <p
                                  className={`text-lg font-bold ${col.pill.split(" ")[1]}`}
                                >
                                  {score}
                                </p>
                                <p className="text-[10px] text-gray-500 font-medium mt-0.5">
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
                  className="min-h-105 flex flex-col items-center justify-center text-center p-10 bg-white rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden"
                >
                  {/* Subtle gradient bg */}
                  <div className="absolute inset-0 bg-linear-to-br from-violet-50/40 via-transparent to-indigo-50/30 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-linear-to-br from-violet-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-sm">
                      <BarChart2 className="w-9 h-9 text-violet-400" />
                    </div>
                    <h3 className="text-gray-800 font-bold text-lg mb-2">
                      Your Results Await
                    </h3>
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed mx-auto">
                      Upload your resume and click{" "}
                      <span className="font-semibold text-violet-600">
                        Analyze Resume
                      </span>{" "}
                      to get your ATS score, keyword analysis, and improvement
                      tips
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-6">
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
                          className="flex items-center gap-1.5 text-xs text-gray-400 font-medium"
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
                  className="min-h-105 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-violet-50/30 via-transparent to-transparent pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="relative w-10 h-10">
                        <div className="absolute inset-0 rounded-full border-3 border-violet-100" />
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
                        <h3 className="text-sm font-bold text-gray-900">
                          Analyzing your resume
                        </h3>
                        <p className="text-xs text-gray-400">
                          This usually takes 10–20 seconds
                        </p>
                      </div>
                    </div>

                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-6">
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
                                ? "bg-violet-50 border border-violet-200"
                                : isDone
                                  ? "bg-green-50/50"
                                  : "opacity-50"
                            }`}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isDone ? "bg-green-100" : isCurrent ? "bg-violet-100" : "bg-gray-100"}`}
                            >
                              {isDone ? (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              ) : isCurrent ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                >
                                  <Icon className="w-4 h-4 text-violet-600" />
                                </motion.div>
                              ) : (
                                <Icon className="w-4 h-4 text-gray-400" />
                              )}
                            </div>
                            <span
                              className={`text-sm font-medium flex-1 ${isDone ? "text-green-700" : isCurrent ? "text-violet-700" : "text-gray-400"}`}
                            >
                              {step.label}
                            </span>
                            {isDone && (
                              <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full"
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
                              <span className="text-[10px] text-gray-300 font-medium">
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
                  {/* Score Header */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-violet-50/30 via-transparent to-indigo-50/20 pointer-events-none" />
                    <div className="relative z-10 flex items-center gap-6">
                      <ScoreCircle score={result.overallScore} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-violet-500" />
                          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                            Overall ATS Score
                          </h2>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-3">
                          {result.overallScore >= 70
                            ? "Great job! Your resume is well-optimized for ATS systems."
                            : result.overallScore >= 40
                              ? "Decent start — a few tweaks can push your score much higher."
                              : "Your resume needs significant improvements for ATS compatibility."}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {Object.entries(result.categoryScores)
                            .slice(0, 3)
                            .map(([key, score]) => {
                              const col = CATEGORY_COLORS[key] ?? {
                                pill: "bg-gray-100 text-gray-600",
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
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="flex border-b border-gray-100">
                      {TABS.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex-1 flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium transition-all ${
                            activeTab === tab.id
                              ? "text-violet-700 border-b-2 border-violet-600 bg-violet-50/40"
                              : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
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
                                  pill: "bg-gray-100 text-gray-600",
                                  bar: "bg-gray-400",
                                  icon: "text-gray-500",
                                };
                                const barColor =
                                  score >= 70
                                    ? "bg-green-500"
                                    : score >= 40
                                      ? "bg-yellow-500"
                                      : "bg-red-500";
                                const scoreText =
                                  score >= 70
                                    ? "text-green-600"
                                    : score >= 40
                                      ? "text-yellow-600"
                                      : "text-red-600";
                                return (
                                  <div
                                    key={key}
                                    className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl hover:bg-gray-100/80 transition-colors"
                                  >
                                    <div
                                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${col.pill}`}
                                    >
                                      {score}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex justify-between items-center mb-1.5">
                                        <span className="text-sm font-medium text-gray-700">
                                          {CATEGORY_LABELS[key] ?? key}
                                        </span>
                                        <span
                                          className={`text-xs font-semibold ${scoreText}`}
                                        >
                                          {score}/100
                                        </span>
                                      </div>
                                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
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
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  <span className="text-xs font-bold text-green-700 uppercase tracking-wider">
                                    Found ({result.keywordAnalysis.found.length}
                                    )
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {result.keywordAnalysis.found.map((kw) => (
                                    <span
                                      key={kw}
                                      className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200"
                                    >
                                      ✓ {kw}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                            {result.keywordAnalysis.missing.length > 0 && (
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <AlertCircle className="w-4 h-4 text-orange-500" />
                                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                                    Missing (
                                    {result.keywordAnalysis.missing.length})
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {result.keywordAnalysis.missing.map((kw) => (
                                    <span
                                      key={kw}
                                      className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium border border-orange-200"
                                    >
                                      + {kw}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                            {result.keywordAnalysis.found.length === 0 &&
                              result.keywordAnalysis.missing.length === 0 && (
                                <p className="text-sm text-gray-400 text-center py-8">
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
                                  className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100"
                                >
                                  <span className="w-6 h-6 bg-amber-200 text-amber-800 rounded-full text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                    {i + 1}
                                  </span>
                                  <p className="text-sm text-gray-700 leading-relaxed">
                                    {s}
                                  </p>
                                </motion.div>
                              ))
                            ) : (
                              <div className="flex flex-col items-center py-8 text-center">
                                <CheckCircle className="w-10 h-10 text-green-500 mb-3" />
                                <p className="text-sm text-gray-500">
                                  No major improvements needed. Your resume
                                  looks great!
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
