import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "@/components/ui/toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
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
  ArrowRight,
  Award,
  Mail,
} from "lucide-react";
import api from "../../../lib/axios";
import { SEO } from "../../../components/SEO";
import AtsToolsNav from "./AtsToolsNav";
import { queryKeys } from "../../../lib/query-keys";
import type { AtsScore, UsageStats } from "../../../lib/types";

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

type ResultTab = "suggestions" | "breakdown" | "keywords";

// ── Score tiers ──────────────────────────────────────────────────────────
interface ScoreTier {
  min: number;
  label: string;
  stroke: string;
  text: string;
  bar: string;
}
const SCORE_TIERS: ScoreTier[] = [
  {
    min: 70,
    label: "Excellent",
    stroke: "#a3e635", // lime-400
    text: "text-lime-600 dark:text-lime-400",
    bar: "bg-lime-400",
  },
  {
    min: 40,
    label: "Needs Work",
    stroke: "#eab308",
    text: "text-yellow-600 dark:text-yellow-400",
    bar: "bg-yellow-500",
  },
  {
    min: 0,
    label: "Poor",
    stroke: "#ef4444",
    text: "text-red-600 dark:text-red-400",
    bar: "bg-red-500",
  },
];
const getScoreTier = (score: number): ScoreTier =>
  SCORE_TIERS.find((t) => score >= t.min) ?? SCORE_TIERS[SCORE_TIERS.length - 1]!;

const JD_MAX_CHARS = 5000;
const JD_WARN_CHARS = 4500;

const ANALYSIS_STEPS = [
  { icon: Upload, label: "Uploading resume" },
  { icon: FileText, label: "Parsing document" },
  { icon: Search, label: "Scanning keywords" },
  { icon: AlignLeft, label: "Checking formatting" },
  { icon: ScanSearch, label: "Analyzing impact statements" },
  { icon: BarChart2, label: "Generating ATS score" },
];

// ── Shared UI primitives ─────────────────────────────────────────────────
const cardCls =
  "bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md";
const sectionKickerCls =
  "inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500";
const sectionTitleCls =
  "text-sm font-bold text-stone-900 dark:text-stone-50";
const inputCls =
  "w-full px-4 py-2.5 border border-stone-300 dark:border-white/10 rounded-md text-sm focus:outline-none focus:border-lime-400 transition-colors bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600";

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

// ── Score Circle ─────────────────────────────────────────────────────────
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

  const tier = getScoreTier(score);
  const { stroke: strokeColor, text: textColor } = tier;

  return (
    <div className="flex items-center shrink-0">
      <div className={isLg ? "relative w-40 h-40" : "relative w-20 h-20"}>
        <svg className="w-full h-full -rotate-90" viewBox={viewBox}>
          <circle
            cx={cx}
            cy={cx}
            r={radius}
            fill="none"
            stroke="#e7e5e4"
            strokeWidth={sw}
            className="dark:stroke-white/10"
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
            className={`${isLg ? "text-5xl" : "text-xl"} font-bold tracking-tight ${textColor} leading-none tabular-nums`}
          >
            {score}
          </motion.span>
          {isLg && (
            <span className="text-stone-400 dark:text-stone-600 text-[10px] mt-1 font-mono uppercase tracking-widest">
              / 100
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────
export default function AtsScorePage() {
  const queryClient = useQueryClient();
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<AtsScore | null>(null);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState<ResultTab>("suggestions");

  const { data: usageData } = useQuery<UsageStats>({
    queryKey: queryKeys.ats.usage(),
    queryFn: () => api.get("/ats/usage").then((r) => r.data),
    staleTime: 60_000,
    refetchOnWindowFocus: true,
  });

  const atsUsage = usageData?.usage.find((u) => u.action === "ATS_SCORE");
  const limitReached = atsUsage ? atsUsage.used >= atsUsage.limit : false;

  const [currentStep, setCurrentStep] = useState(-1);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analyzedFileName, setAnalyzedFileName] = useState("");
  const [analyzedFileSize, setAnalyzedFileSize] = useState(0);
  const [emailSent, setEmailSent] = useState(false);

  const analyzeMutation = useMutation({
    mutationFn: async (): Promise<{ score: AtsScore; emailQueued: boolean }> => {
      let url = resumeUrl;
      if (file && !resumeUrl) {
        const formData = new FormData();
        formData.append("file", file);
        const uploadRes = await api.post("/upload/profile-resume", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        url = uploadRes.data.file.url;
        setResumeUrl(url);
      }
      if (!url) throw new Error("Please upload a resume PDF first.");
      const body: Record<string, string> = { resumeUrl: url };
      if (jobTitle.trim()) body["jobTitle"] = jobTitle.trim();
      if (jobDescription.trim()) body["jobDescription"] = jobDescription.trim();
      const res = await api.post("/ats/score", body);
      return {
        score: res.data.score as AtsScore,
        emailQueued: Boolean(res.data.emailQueued),
      };
    },
    onSuccess: ({ score, emailQueued }) => {
      setResult(score);
      setEmailSent(emailQueued);
      setCurrentStep(ANALYSIS_STEPS.length - 1);
      setAnalysisComplete(true);
      queryClient.invalidateQueries({ queryKey: queryKeys.ats.usage() });
    },
    onError: (err: unknown) => {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        (err instanceof Error ? err.message : "Failed to analyze resume. Please try again.");
      setError(msg);
      toast.error(msg);
    },
  });

  const loading = analyzeMutation.isPending;

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
    if (!file) {
      setPreviewUrl("");
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

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
    if (!dropped) return;
    if (dropped.type !== "application/pdf") {
      const msg = "Only PDF files are supported. Please drop a .pdf resume.";
      setError(msg);
      toast.error(msg);
      return;
    }
    setFile(dropped);
    setResumeUrl("");
    setResult(null);
    setError("");
    setCurrentStep(-1);
    setAnalysisComplete(false);
  };

  const handleAnalyze = () => {
    setError("");
    setResult(null);
    setEmailSent(false);
    setActiveTab("suggestions");
    setAnalysisComplete(false);
    setCurrentStep(0);
    if (file) {
      setAnalyzedFileName(file.name);
      setAnalyzedFileSize(file.size);
    }
    analyzeMutation.mutate();
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
    setEmailSent(false);
  };

  const TABS: { id: ResultTab; label: string; icon: React.ReactNode }[] = [
    { id: "suggestions", label: "Suggestions", icon: <Lightbulb className="w-3.5 h-3.5" /> },
    { id: "breakdown", label: "Breakdown", icon: <BarChart2 className="w-3.5 h-3.5" /> },
    { id: "keywords", label: "Keywords", icon: <Search className="w-3.5 h-3.5" /> },
  ];

  const showUploadForm = !result;
  const overallTier = result ? getScoreTier(result.overallScore) : null;

  return (
    <div className="relative pb-16">
      <SEO
        title="Resume"
        description="Your resume toolkit - ATS scoring, resume builder, LaTeX editor, and cover letter generator."
        noIndex
      />

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
            resume / ats score
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Score your resume.
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-md">
            Upload a PDF, add a target role, and get an ATS score with keyword gaps and concrete rewrite suggestions.
          </p>
        </div>
        {atsUsage && (
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              daily usage
            </span>
            <span className="text-sm font-bold tabular-nums text-stone-900 dark:text-stone-50">
              {atsUsage.used}
              <span className="text-stone-400 dark:text-stone-600 font-normal"> / {atsUsage.limit}</span>
            </span>
          </div>
        )}
      </motion.div>

      <AtsToolsNav />

      {/* ─── Main grid ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        {/* ─── Left column ─── */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="wait">
            {showUploadForm ? (
              <motion.div
                key="upload-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Upload Card */}
                <div className={cardCls}>
                  <CardHeader kicker="step 01" title="Upload resume" />
                  <div className="p-5">
                    <label
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      className={`relative flex flex-col items-center justify-center gap-3 py-10 px-4 border border-dashed rounded-md cursor-pointer transition-colors ${
                        isDragging
                          ? "border-lime-400 bg-lime-50/60 dark:bg-lime-400/5"
                          : file
                            ? "border-lime-400 bg-lime-50/40 dark:bg-lime-400/5"
                            : "border-stone-300 dark:border-white/10 bg-stone-50/60 dark:bg-stone-950/40 hover:border-stone-400 dark:hover:border-white/20"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-md flex items-center justify-center transition-colors ${
                          file
                            ? "bg-lime-400 text-stone-950"
                            : "bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-stone-500"
                        }`}
                      >
                        {file ? (
                          <FileText className="w-6 h-6" />
                        ) : (
                          <Upload className="w-6 h-6" />
                        )}
                      </div>
                      {file ? (
                        <div className="text-center space-y-3">
                          <p className="text-sm font-bold text-stone-900 dark:text-stone-50 max-w-60 truncate mx-auto">
                            {file.name}
                          </p>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-1">
                            {(file.size / 1024).toFixed(1)} kb · pdf
                          </p>
                          {previewUrl && (
                            <div className="w-full max-w-xs mx-auto border border-stone-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-stone-950">
                              <div className="aspect-[3/4] w-full">
                                <iframe
                                  src={`${previewUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                                  title="Resume preview"
                                  className="w-full h-full"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-center">
                          <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                            {isDragging ? "Drop to upload" : "Drop PDF here"}
                          </p>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-1">
                            or click to browse · max 10 mb
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
                        type="button"
                        onClick={resetAll}
                        className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                      >
                        <X className="w-3 h-3" /> remove file
                      </button>
                    )}
                  </div>
                </div>

                {/* Target Job */}
                <div className={cardCls}>
                  <CardHeader
                    kicker="step 02"
                    title="Target job"
                    right={
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                        / optional
                      </span>
                    }
                  />
                  <div className="p-5 space-y-3">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                        <Target className="w-3 h-3" /> role title
                      </label>
                      <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="e.g. Frontend Developer"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                        <AlignLeft className="w-3 h-3" /> job description
                      </label>
                      <textarea
                        value={jobDescription}
                        onChange={(e) => {
                          const next = e.target.value.slice(0, JD_MAX_CHARS);
                          if (e.target.value.length > JD_MAX_CHARS) {
                            toast.error(`Job description capped at ${JD_MAX_CHARS.toLocaleString()} characters.`);
                          }
                          setJobDescription(next);
                        }}
                        maxLength={JD_MAX_CHARS}
                        placeholder="Paste the job description for tailored keyword analysis..."
                        rows={5}
                        className={`${inputCls} resize-none`}
                        aria-describedby="jd-char-count"
                      />
                      <div
                        id="jd-char-count"
                        className={`mt-1.5 text-right text-[10px] font-mono uppercase tracking-widest tabular-nums ${
                          jobDescription.length >= JD_WARN_CHARS
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-stone-500"
                        }`}
                      >
                        {jobDescription.length.toLocaleString()} / {JD_MAX_CHARS.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="flex items-start gap-2.5 p-4 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 rounded-md text-sm border border-red-200 dark:border-red-900/40">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleAnalyze}
                  disabled={loading || (!file && !resumeUrl) || limitReached}
                  className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-lime-400 text-stone-950 rounded-md text-sm font-bold hover:bg-lime-300 transition-colors border-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Analyzing...
                    </>
                  ) : limitReached ? (
                    "Daily limit reached"
                  ) : (
                    <>
                      <ScanSearch className="w-4 h-4" /> Analyze resume
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
                {limitReached && (
                  <p className="text-center text-xs text-stone-500">
                    You've hit today's free limit.{" "}
                    <Link
                      to="/student/checkout"
                      className="font-bold text-stone-900 dark:text-stone-50 underline decoration-lime-400 decoration-2 underline-offset-4 hover:decoration-lime-300"
                    >
                      Upgrade for more
                    </Link>
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="analyzed-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Resume Analyzed */}
                <div className={cardCls}>
                  <CardHeader
                    kicker="input"
                    title="Resume analyzed"
                    right={
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">
                        <CheckCircle className="w-3 h-3" />
                        done
                      </span>
                    }
                  />
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 bg-lime-400 rounded-md flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-stone-950" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                          {analyzedFileName}
                        </p>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-0.5">
                          {(analyzedFileSize / 1024).toFixed(1)} kb · pdf
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-stone-200 dark:border-white/10 -mx-5 px-5 pt-4 space-y-2.5">
                      {jobTitle && (
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono uppercase tracking-widest text-stone-500">target role</span>
                          <span className="font-bold text-stone-900 dark:text-stone-50 truncate ml-4 max-w-40">
                            {jobTitle}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono uppercase tracking-widest text-stone-500">jd length</span>
                        <span className="font-bold text-stone-900 dark:text-stone-50 tabular-nums">
                          {jobDescription.length.toLocaleString()} chars
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <button
                        type="button"
                        onClick={resetAll}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md text-xs font-bold text-stone-900 dark:text-stone-50 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <Upload className="w-3.5 h-3.5" /> New resume
                      </button>
                      <button
                        type="button"
                        onClick={handleAnalyze}
                        disabled={loading}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md text-xs font-bold bg-lime-400 text-stone-950 hover:bg-lime-300 transition-colors border-0 cursor-pointer disabled:opacity-50"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                        Re-analyze
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category Scores Summary */}
                {result && (
                  <div className={cardCls}>
                    <CardHeader kicker="breakdown" title="Category scores" />
                    <div className="p-5 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                      {Object.entries(result.categoryScores)
                        .slice(0, 6)
                        .map(([key, score]) => {
                          const tier = getScoreTier(score);
                          return (
                            <div
                              key={key}
                              className="bg-white dark:bg-stone-900 p-3 text-left"
                            >
                              <p className={`text-xl font-bold tracking-tight tabular-nums ${tier.text}`}>
                                {score}
                              </p>
                              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-1">
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

        {/* ─── Right column: Results ─── */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {/* Empty state */}
            {!result && !loading && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${cardCls} min-h-125 flex flex-col items-center justify-center text-center p-10`}
              >
                <div className="max-w-xs">
                  <div className="w-16 h-16 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center mb-5 mx-auto relative">
                    <BarChart2 className="w-7 h-7 text-stone-400 dark:text-stone-600" />
                    <span className="absolute -top-1 -right-1 h-2 w-2 bg-lime-400" />
                  </div>
                  <div className={sectionKickerCls + " justify-center mb-2"}>
                    <span className="h-1 w-1 bg-lime-400" />
                    results panel
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
                    Your results appear here.
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    Upload your resume and click{" "}
                    <span className="font-bold text-stone-900 dark:text-stone-50">
                      Analyze resume
                    </span>{" "}
                    to get your ATS score, keyword analysis, and rewrite suggestions.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                    {[
                      { label: "6 categories", icon: <BarChart2 className="w-3 h-3" /> },
                      { label: "ai powered", icon: <ScanSearch className="w-3 h-3" /> },
                      { label: "instant", icon: <Zap className="w-3 h-3" /> },
                    ].map((tag) => (
                      <div
                        key={tag.label}
                        className="bg-white dark:bg-stone-900 px-2 py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500"
                      >
                        {tag.icon}
                        {tag.label}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Loading state */}
            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${cardCls} min-h-125`}
              >
                <CardHeader
                  kicker="analyzing"
                  title="Scanning your resume"
                  right={
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      ~10-20s
                    </span>
                  }
                />
                <div className="p-6">
                  <div className="w-full h-1.5 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-full overflow-hidden mb-6">
                    <motion.div
                      className="h-full bg-lime-400"
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
                        i < currentStep || (i === currentStep && analysisComplete);
                      const isCurrent = i === currentStep && !analysisComplete;
                      const isPending = i > currentStep;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                            isCurrent
                              ? "bg-lime-400/10 border border-lime-400/40"
                              : isDone
                                ? "bg-stone-50 dark:bg-stone-950/60 border border-transparent"
                                : "border border-transparent opacity-50"
                          }`}
                        >
                          <div
                            className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
                              isDone
                                ? "bg-lime-400 text-stone-950"
                                : isCurrent
                                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                                  : "bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-stone-400"
                            }`}
                          >
                            {isDone ? (
                              <CheckCircle className="w-3.5 h-3.5" />
                            ) : isCurrent ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                              >
                                <Icon className="w-3.5 h-3.5" />
                              </motion.div>
                            ) : (
                              <Icon className="w-3.5 h-3.5" />
                            )}
                          </div>
                          <span
                            className={`text-sm font-medium flex-1 ${
                              isDone
                                ? "text-stone-600 dark:text-stone-400"
                                : isCurrent
                                  ? "text-stone-900 dark:text-stone-50"
                                  : "text-stone-400 dark:text-stone-600"
                            }`}
                          >
                            {step.label}
                          </span>
                          {isDone && (
                            <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">
                              done
                            </span>
                          )}
                          {isCurrent && (
                            <div className="flex gap-1">
                              {[0, 0.15, 0.3].map((delay) => (
                                <motion.div
                                  key={delay}
                                  className="w-1.5 h-1.5 rounded-full bg-lime-400"
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
                            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600">
                              pending
                            </span>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Results */}
            {result && overallTier && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
                role="region"
                aria-live="polite"
                aria-label={`ATS analysis complete. Overall score ${result.overallScore} out of 100.`}
              >
                {/* Score Header */}
                <div className={cardCls}>
                  <CardHeader
                    kicker="result"
                    title="Overall ATS score"
                    right={
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${overallTier.text}`}>
                        / {overallTier.label.toLowerCase()}
                      </span>
                    }
                  />
                  <div className="p-6 flex items-center gap-6">
                    <ScoreCircle score={result.overallScore} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                        {result.overallScore >= 70
                          ? "Great job. Your resume is well-optimized for ATS systems."
                          : result.overallScore >= 40
                            ? "Decent start. A few tweaks can push your score much higher."
                            : "Your resume needs significant improvements for ATS compatibility."}
                      </p>
                      {emailSent && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-md bg-lime-50 dark:bg-lime-400/10 border border-lime-200 dark:border-lime-400/30"
                        >
                          <Mail className="w-3 h-3 text-lime-600 dark:text-lime-400" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400">
                            report emailed to your inbox
                          </span>
                        </motion.div>
                      )}
                      <div className="flex flex-wrap gap-1.5">
                        {Object.entries(result.categoryScores)
                          .sort(([, a], [, b]) => b - a)
                          .slice(0, 3)
                          .map(([key, score]) => (
                            <span
                              key={key}
                              className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 tabular-nums"
                            >
                              {CATEGORY_LABELS[key]} · {score}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tabbed Results */}
                <div className={cardCls}>
                  {/* Tab strip */}
                  <div className="flex border-b border-stone-200 dark:border-white/10 overflow-x-auto">
                    {TABS.map((tab) => {
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveTab(tab.id)}
                          className={`relative flex items-center gap-2 px-5 py-3.5 text-xs font-mono uppercase tracking-widest transition-colors border-0 bg-transparent cursor-pointer ${
                            isActive
                              ? "text-stone-900 dark:text-stone-50"
                              : "text-stone-500 hover:text-stone-800 dark:hover:text-stone-300"
                          }`}
                        >
                          {tab.icon}
                          {tab.label}
                          {isActive && (
                            <motion.span
                              layoutId="ats-tab-underline"
                              className="absolute left-0 right-0 -bottom-px h-0.5 bg-lime-400"
                            />
                          )}
                        </button>
                      );
                    })}
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
                          {Object.entries(result.categoryScores).map(([key, score]) => {
                            const Icon = CATEGORY_ICONS[key] ?? BarChart2;
                            const tier = getScoreTier(score);
                            return (
                              <div
                                key={key}
                                className="flex items-center gap-3 p-3.5 bg-stone-50/60 dark:bg-stone-950/40 border border-stone-200 dark:border-white/10 rounded-md"
                              >
                                <div className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10">
                                  <Icon className="w-4 h-4 text-stone-600 dark:text-stone-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex justify-between items-center mb-1.5">
                                    <span className="text-sm font-bold text-stone-900 dark:text-stone-50">
                                      {CATEGORY_LABELS[key] ?? key}
                                    </span>
                                    <span className={`text-sm font-bold tabular-nums ${tier.text}`}>
                                      {score}
                                      <span className="text-stone-400 dark:text-stone-600 text-xs font-normal">
                                        /100
                                      </span>
                                    </span>
                                  </div>
                                  <div className="h-1.5 bg-stone-200 dark:bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${String(score)}%` }}
                                      transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
                                      className={`h-full rounded-full ${tier.bar}`}
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
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
                              <div className={sectionKickerCls + " mb-3"}>
                                <span className="h-1 w-1 bg-lime-400" />
                                found · {result.keywordAnalysis.found.length}
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {result.keywordAnalysis.found.map((kw) => (
                                  <span
                                    key={kw}
                                    className="px-2.5 py-1 bg-lime-50 dark:bg-lime-400/10 text-lime-700 dark:text-lime-400 rounded-md text-xs font-medium border border-lime-200 dark:border-lime-400/30"
                                  >
                                    {kw}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {result.keywordAnalysis.missing.length > 0 && (
                            <div>
                              <div className={sectionKickerCls + " mb-3"}>
                                <span className="h-1 w-1 bg-orange-500" />
                                missing · {result.keywordAnalysis.missing.length}
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {result.keywordAnalysis.missing.map((kw) => (
                                  <span
                                    key={kw}
                                    className="px-2.5 py-1 bg-orange-50 dark:bg-orange-950/20 text-orange-700 dark:text-orange-400 rounded-md text-xs font-medium border border-dashed border-orange-200 dark:border-orange-900/50"
                                  >
                                    + {kw}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {result.keywordAnalysis.found.length === 0 &&
                            result.keywordAnalysis.missing.length === 0 && (
                              <p className="text-sm text-stone-500 text-center py-8">
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
                        >
                          {result.suggestions.length > 0 ? (
                            <div className="divide-y divide-stone-200 dark:divide-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                              {result.suggestions.map((s, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="group flex items-start gap-4 px-5 py-4 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-950/60 transition-colors"
                                >
                                  <div className="w-8 h-8 rounded-md bg-stone-900 dark:bg-stone-50 flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                                    <span className="text-[11px] font-bold text-stone-50 dark:text-stone-900">
                                      {String(i + 1).padStart(2, "0")}
                                    </span>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                                      {s}
                                    </p>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-stone-300 dark:text-white/20 shrink-0 mt-1 group-hover:text-lime-500 group-hover:translate-x-0.5 transition-all" />
                                </motion.div>
                              ))}
                            </div>
                          ) : (
                            <div className="flex flex-col items-center py-10 text-center">
                              <div className="w-12 h-12 rounded-md bg-lime-400 flex items-center justify-center mb-4">
                                <CheckCircle className="w-6 h-6 text-stone-950" />
                              </div>
                              <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                                No improvements needed
                              </p>
                              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-2">
                                resume is ats-ready
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
  );
}
