import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  FileText,
  Loader2,
  CheckCircle,
  AlertCircle,
  History,
  Sparkles,
  Target,
  ArrowLeft,
  X,
  BarChart2,
  Lightbulb,
  Search,
  TrendingUp,
} from "lucide-react";
import api from "../../../lib/axios";
import type { AtsScore } from "../../../lib/types";

const CATEGORY_LABELS: Record<string, string> = {
  formatting: "Formatting",
  keywords: "Keywords",
  experience: "Experience",
  skills: "Skills",
  education: "Education",
  impact: "Impact",
};

const CATEGORY_COLORS: Record<string, string> = {
  formatting: "bg-violet-50 text-violet-600",
  keywords: "bg-blue-50 text-blue-600",
  experience: "bg-emerald-50 text-emerald-600",
  skills: "bg-amber-50 text-amber-600",
  education: "bg-pink-50 text-pink-600",
  impact: "bg-indigo-50 text-indigo-600",
};

// ── Animated SVG Score Circle ──────────────────────────────────────────────
function ScoreCircle({ score }: { score: number }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const strokeColor =
    score >= 70 ? "#22c55e" : score >= 40 ? "#eab308" : "#ef4444";
  const textColor =
    score >= 70 ? "text-green-600" : score >= 40 ? "text-yellow-600" : "text-red-600";
  const badgeCls =
    score >= 70
      ? "bg-green-50 text-green-700 border-green-200"
      : score >= 40
      ? "bg-yellow-50 text-yellow-700 border-yellow-200"
      : "bg-red-50 text-red-700 border-red-200";
  const label = score >= 70 ? "Excellent" : score >= 40 ? "Needs Work" : "Poor";

  return (
    <div className="flex flex-col items-center py-4">
      <div className="relative w-44 h-44">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 180 180">
          {/* Track */}
          <circle cx="90" cy="90" r={radius} fill="none" stroke="#f3f4f6" strokeWidth="12" />
          {/* Progress */}
          <motion.circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
          />
        </svg>
        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            className={`text-5xl font-extrabold ${textColor} leading-none`}
          >
            {score}
          </motion.span>
          <span className="text-gray-400 text-xs mt-1.5 font-medium">out of 100</span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className={`mt-1 px-4 py-1 rounded-full text-xs font-bold border ${badgeCls}`}
      >
        {label}
      </motion.div>
    </div>
  );
}

// ── Category Progress Bar ──────────────────────────────────────────────────
function CategoryBar({ label, score, colorCls }: { label: string; score: number; colorCls: string }) {
  const barColor =
    score >= 70 ? "bg-green-500" : score >= 40 ? "bg-yellow-500" : "bg-red-500";
  const scoreColor =
    score >= 70 ? "text-green-600" : score >= 40 ? "text-yellow-600" : "text-red-600";

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
      <div className={`w-8 h-8 rounded-lg ${colorCls} flex items-center justify-center shrink-0 text-xs font-bold`}>
        {score}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className={`text-xs font-semibold ${scoreColor}`}>{score}/100</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${String(score)}%` }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className={`h-full rounded-full ${barColor}`}
          />
        </div>
      </div>
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setResumeUrl("");
      setResult(null);
      setError("");
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
    }
  };

  const handleAnalyze = async () => {
    setError("");
    setResult(null);
    setLoading(true);

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
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        "Failed to analyze resume. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
      setUploading(false);
    }
  };

  const clearFile = () => {
    setFile(null);
    setResumeUrl("");
    setResult(null);
    setError("");
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-7">
        <div className="flex items-center gap-3">
          <Link
            to="/student/ats"
            className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-all no-underline"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-violet-600" />
              ATS Resume Analyzer
            </h1>
            <p className="text-sm text-gray-400 mt-0.5">
              Upload your resume for AI-powered ATS scoring and feedback
            </p>
          </div>
        </div>
        <Link
          to="/student/ats/history"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors no-underline border border-gray-200 px-3.5 py-2 rounded-xl hover:border-gray-300 hover:bg-gray-50"
        >
          <History className="w-4 h-4" />
          History
        </Link>
      </div>

      {/* ── Two-Column Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        {/* Left: Form */}
        <div className="lg:col-span-2 space-y-4">
          {/* Upload Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Upload className="w-4 h-4 text-gray-500" />
              Upload Resume
            </h2>

            <label
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`flex flex-col items-center justify-center gap-3 py-8 px-4 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${
                isDragging
                  ? "border-violet-400 bg-violet-50"
                  : file
                  ? "border-green-300 bg-green-50"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                  file ? "bg-green-100" : "bg-white border border-gray-200"
                }`}
              >
                {file ? (
                  <FileText className="w-7 h-7 text-green-600" />
                ) : (
                  <Upload className="w-7 h-7 text-gray-400" />
                )}
              </div>

              {file ? (
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900 max-w-45 truncate">{file.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {(file.size / 1024).toFixed(1)} KB · PDF
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-700">Drop PDF here</p>
                  <p className="text-xs text-gray-400 mt-0.5">or click to browse · Max 10 MB</p>
                </div>
              )}
              <input type="file" accept=".pdf" onChange={handleFileChange} className="hidden" />
            </label>

            {file && (
              <button
                onClick={clearFile}
                className="mt-3 flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="w-3 h-3" />
                Remove file
              </button>
            )}
          </div>

          {/* Job Context Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <Target className="w-4 h-4 text-gray-500" />
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

          {/* Error */}
          {error && (
            <div className="flex items-start gap-2.5 p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={loading || (!file && !resumeUrl)}
            className="w-full py-3.5 bg-linear-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-violet-700 hover:to-indigo-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {uploading ? "Uploading resume…" : "Analyzing resume…"}
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Analyze Resume
              </>
            )}
          </button>
        </div>

        {/* Right: Results Panel */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {/* Empty state */}
            {!result && !loading && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full min-h-105 flex flex-col items-center justify-center text-center p-10 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200"
              >
                <div className="w-20 h-20 bg-white rounded-2xl border border-gray-200 flex items-center justify-center mb-5 shadow-sm">
                  <BarChart2 className="w-9 h-9 text-gray-300" />
                </div>
                <h3 className="text-gray-700 font-semibold mb-2">Results will appear here</h3>
                <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                  Upload your resume and click <span className="font-medium text-gray-600">Analyze Resume</span> to
                  see your ATS score, keyword analysis, and improvement tips
                </p>
              </motion.div>
            )}

            {/* Loading state */}
            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-105 flex flex-col items-center justify-center text-center p-10 bg-gray-50 rounded-2xl"
              >
                <div className="w-20 h-20 bg-white rounded-2xl border border-gray-200 flex items-center justify-center mb-5 shadow-sm">
                  <Loader2 className="w-9 h-9 text-violet-500 animate-spin" />
                </div>
                <h3 className="text-gray-700 font-semibold mb-2">
                  {uploading ? "Uploading your resume…" : "AI is analyzing your resume…"}
                </h3>
                <p className="text-gray-400 text-sm">This usually takes 10–20 seconds</p>
                <div className="mt-6 flex gap-1.5">
                  {[0, 0.15, 0.3].map((delay) => (
                    <motion.div
                      key={delay}
                      className="w-2 h-2 rounded-full bg-violet-400"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity, delay }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Results */}
            {result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {/* Score Overview */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                    Overall ATS Score
                  </h2>
                  <p className="text-xs text-gray-400 mb-2">
                    {result.overallScore >= 70
                      ? "Great job! Your resume is well-optimized for ATS systems."
                      : result.overallScore >= 40
                      ? "Decent start — a few tweaks can push you much higher."
                      : "Your resume needs significant improvements for ATS compatibility."}
                  </p>
                  <ScoreCircle score={result.overallScore} />
                </div>

                {/* Category Breakdown */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-gray-500" />
                    Category Breakdown
                  </h2>
                  <div className="space-y-2.5">
                    {Object.entries(result.categoryScores).map(([key, score]) => (
                      <CategoryBar
                        key={key}
                        label={CATEGORY_LABELS[key] ?? key}
                        score={score}
                        colorCls={CATEGORY_COLORS[key] ?? "bg-gray-100 text-gray-600"}
                      />
                    ))}
                  </div>
                </div>

                {/* Suggestions */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    Improvement Suggestions
                  </h2>
                  <div className="space-y-2.5">
                    {result.suggestions.map((s, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-start gap-3 p-3.5 bg-amber-50 rounded-xl border border-amber-100"
                      >
                        <span className="w-6 h-6 bg-amber-200 text-amber-800 rounded-full text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-sm text-gray-700 leading-relaxed">{s}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Keyword Analysis */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Search className="w-4 h-4 text-gray-500" />
                    Keyword Analysis
                  </h2>

                  {result.keywordAnalysis.found.length > 0 && (
                    <div className="mb-5">
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                          Found ({result.keywordAnalysis.found.length})
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {result.keywordAnalysis.found.map((kw) => (
                          <span
                            key={kw}
                            className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {result.keywordAnalysis.missing.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <AlertCircle className="w-3.5 h-3.5 text-orange-500" />
                        <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">
                          Missing ({result.keywordAnalysis.missing.length})
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {result.keywordAnalysis.missing.map((kw) => (
                          <span
                            key={kw}
                            className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium border border-orange-200"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
