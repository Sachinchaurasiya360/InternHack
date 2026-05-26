import { useState, useEffect, useMemo, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useReactToPrint } from "react-to-print";
import toast from "@/components/ui/toast";
import { motion, AnimatePresence } from "framer-motion";
import { uploadDirectToS3 } from "../../../utils/upload";
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
  Wand2,
  Download,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import api from "../../../lib/axios";
import { SEO } from "../../../components/SEO";
import AtsToolsNav from "./AtsToolsNav";
import { queryKeys } from "../../../lib/query-keys";
import { useDebounce } from "../../../hooks/useDebounce";
import type { AtsScore, UsageStats } from "../../../lib/types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

/** Recharts custom tooltip — renders score, date, role, and resume name on dot hover. */
type ScoreTooltipPayload = {
  payload: {
    fullDate: string;
    jobTitle: string;
    resumeName: string;
    score: number;
  };
};

function ScoreTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: ScoreTooltipPayload[];
}) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-stone-900 border border-white/10 rounded-md px-3 py-2 text-[11px] font-mono text-stone-300 shadow-xl">
      <div className="text-stone-500 mb-1">{d.fullDate}</div>
      <div>Role: {d.jobTitle}</div>
      <div className="truncate max-w-[200px]">Resume: {d.resumeName}</div>
      <div className="text-lime-400 font-bold mt-1">Score: {d.score}/100</div>
    </div>
  );
}

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
  SCORE_TIERS.find((t) => score >= t.min) ??
  SCORE_TIERS[SCORE_TIERS.length - 1]!;

const JD_MAX_CHARS = 5000;
const JD_WARN_CHARS = 4500;

type AtsHistoryItem = {
  id: number;
  overallScore: number;
  jobTitle: string | null;
  jobDescription?: string | null;
  resumeUrl: string;
  createdAt: string;
};

function getResumeName(resumeUrl: string) {
  return decodeURIComponent(
    (resumeUrl.split("?")[0] ?? resumeUrl).split("/").pop() ?? "resume.pdf",
  );
}

function getCompanyFromJobDescription(jobDescription?: string | null) {
  if (!jobDescription) return "";

  const firstLines = jobDescription
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 6);
  const text = firstLines.join(" ");
  const patterns = [
    /\bcompany\s*[:|-]\s*([A-Za-z0-9&.,'() -]{2,80})/i,
    /\bat\s+([A-Z][A-Za-z0-9&.,'() -]{2,80})\b/,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern)?.[1]?.trim();
    if (match) return match.replace(/\s{2,}/g, " ");
  }

  return "";
}

// ── Shared UI primitives ─────────────────────────────────────────────────
const cardCls =
  "bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md";
const sectionKickerCls =
  "inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500";
const sectionTitleCls = "text-sm font-bold text-stone-900 dark:text-stone-50";
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
  const printRef = useRef<HTMLDivElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<AtsScore | null>(null);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState<ResultTab>("suggestions");
  const [selectedSuggestions, setSelectedSuggestions] = useState<Set<number>>(new Set());
  const [historySearch, setHistorySearch] = useState("");
  const debouncedHistorySearch = useDebounce(historySearch, 300);
  const navigate = useNavigate();

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `ATS_Report_${new Date().toLocaleDateString("en-IN")}`,
  });

  const { data: usageData } = useQuery<UsageStats>({
    queryKey: queryKeys.ats.usage(),
    queryFn: () => api.get("/ats/usage").then((r) => r.data),
    staleTime: 60_000,
    refetchOnWindowFocus: true,
  });

  const { data: historyData } = useQuery({
    queryKey: queryKeys.ats.history(),
    queryFn: () => api.get("/ats/history").then((r) => r.data.history),
    staleTime: 60_000,
  });

  const scoreHistory = (historyData ?? []) as AtsHistoryItem[];

  const chartData = scoreHistory.map((h) => {
    const resumeName = getResumeName(h.resumeUrl);
    return {
      key: h.createdAt,
      date: new Date(h.createdAt).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
      }),
      fullDate: new Date(h.createdAt).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      score: h.overallScore,
      jobTitle: h.jobTitle ?? "General",
      resumeName,
    };
  });

  const normalizedHistorySearch = debouncedHistorySearch.trim().toLowerCase();
  const filteredHistory = [...scoreHistory]
    .reverse()
    .filter((item) => {
      if (!normalizedHistorySearch) return true;

      const searchableText = [
        item.jobTitle,
        getCompanyFromJobDescription(item.jobDescription),
        getResumeName(item.resumeUrl),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedHistorySearch);
    });

  const atsUsage = usageData?.usage.find((u) => u.action === "ATS_SCORE");
  const limitReached = atsUsage ? atsUsage.used >= atsUsage.limit : false;
  const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

  const [analyzedFileName, setAnalyzedFileName] = useState("");
  const [analyzedFileSize, setAnalyzedFileSize] = useState(0);
  const [emailSent, setEmailSent] = useState(false);

  const analyzeMutation = useMutation({
    mutationFn: async (): Promise<{
      score: AtsScore;
      emailQueued: boolean;
    }> => {
      let url = resumeUrl;
      if (file) {
        const uploadRes = await uploadDirectToS3({
          file,
          folder: "resumes",
          endpoint: "/profile-resume",
        });
        url = uploadRes.file?.url || uploadRes.fileUrl || uploadRes.url || url;
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
      queryClient.invalidateQueries({ queryKey: queryKeys.ats.usage() });
      queryClient.invalidateQueries({ queryKey: queryKeys.ats.history() });
    },
    onError: (err: unknown) => {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message ||
        (err instanceof Error
          ? err.message
          : "Failed to analyze resume. Please try again.");
      setError(msg);
      toast.error(msg);
    },
  });

  const applyMutation = useMutation({
    mutationFn: async () => {
      const suggestionsToApply = result?.suggestions.filter((_, i) => selectedSuggestions.has(i));
      if (!suggestionsToApply?.length) throw new Error("Select at least one suggestion to apply.");
      
      const res = await api.post("/ats/apply-suggestions", {
        resumeUrl,
        jobTitle: jobTitle.trim() || undefined,
        jobDescription: jobDescription.trim() || undefined,
        suggestions: suggestionsToApply,
      });
      return res.data as { reply: string; updatedLatex: string };
    },
    onSuccess: (data) => {
      navigate("/student/ats/latex-editor", {
        state: {
          initialLatex: data.updatedLatex,
          banner: "AI-improved draft based on your ATS analysis. Review carefully before saving."
        }
      });
    },
    onError: (err: unknown) => {
      const errorObj = err as { response?: { status?: number; data?: { message?: string } } };
      
      if (errorObj?.response?.status === 429) {
        toast.error("AI usage limit reached. Please try again later.");
        return;
      }

      const msg = errorObj?.response?.data?.message || "Failed to improve resume";
      toast.error(msg);
    },
  });

  const loading = analyzeMutation.isPending;
  const previewUrl = useMemo(() => {
    if (!file) return "";
    return URL.createObjectURL(file);
  }, [file]);

  useEffect(() => {
    if (!file) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreviewUrl("");
      return;
    }
    const url = URL.createObjectURL(file);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const validateFile = (file: File): string | null => {
    if (file.size > MAX_SIZE) {
      return `File is ${(file.size / 1024 / 1024).toFixed(1)} MB. Max 10 MB.`;
    }
    if (file.type !== "application/pdf") {
      return "Only PDF files are allowed.";
    }
    return null;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      const error = validateFile(selected);
      if (error) {
        toast.error(error);
        e.target.value = "";
        return;
      }
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
    if (!dropped) return;
    const error = validateFile(dropped);
    if (error) {
      toast.error(error);
      return;
    }
    setFile(dropped);
    setResumeUrl("");
    setResult(null);
    setError("");
  };

  const handleAnalyze = () => {
    setError("");
    setResult(null);
    setEmailSent(false);
    setActiveTab("suggestions");
    setSelectedSuggestions(new Set());
    if (file) {
      setAnalyzedFileName(file.name);
      setAnalyzedFileSize(file.size);
    } else if (resumeUrl) {
      const fileName = (resumeUrl.split("?")[0] || resumeUrl).split("/").pop() || "profile-resume.pdf";
      setAnalyzedFileName(fileName);
      setAnalyzedFileSize(0);
    }
    analyzeMutation.mutate();
  };

  const resetAll = () => {
    setFile(null);
    setResumeUrl("");
    setResult(null);
    setError("");
    setAnalyzedFileName("");
    setAnalyzedFileSize(0);
    setEmailSent(false);
  };

  const TABS: { id: ResultTab; label: string; icon: React.ReactNode }[] = [
    {
      id: "suggestions",
      label: "Suggestions",
      icon: <Lightbulb className="w-3.5 h-3.5" />,
    },
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
            Score your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">resume.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-md">
            Upload a PDF, add a target role, and get an ATS score with keyword
            gaps and concrete rewrite suggestions.
          </p>
        </div>
        {atsUsage && (
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              daily usage
            </span>
            <span className="text-sm font-bold tabular-nums text-stone-900 dark:text-stone-50">
              {atsUsage.used}
              <span className="text-stone-400 dark:text-stone-600 font-normal">
                {" "}
                / {atsUsage.limit}
              </span>
            </span>
          </div>
        )}
      </motion.div>

      <AtsToolsNav />

      {/* ─── Score Progression Chart ─── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={`${cardCls} mb-6`}
      >
        <CardHeader
          kicker="progress"
          title="Score over time"
          right={
            chartData.length > 0 ? (
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                {chartData.length}{" "}
                {chartData.length === 1 ? "analysis" : "analyses"}
              </span>
            ) : null
          }
        />
        <div className="p-5">
          {chartData.length <= 1 ? (
            <div className="flex items-center gap-3 py-4 text-sm text-stone-500">
              <TrendingUp className="w-4 h-4 text-lime-500" />
              {chartData.length === 0
                ? "Analyze your first resume to start tracking progress."
                : "Run one more analysis to start tracking your progress."}
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(120,113,108,0.15)"
                  vertical={false}
                />
                <XAxis
                  dataKey="key"
                  tickFormatter={(val: string) =>
                    new Date(val).toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                  tick={{
                    fontSize: 10,
                    fontFamily: "monospace",
                    fill: "#78716c",
                  }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{
                    fontSize: 10,
                    fontFamily: "monospace",
                    fill: "#78716c",
                  }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<ScoreTooltip />} cursor={false} />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#a3e635"
                  strokeWidth={2}
                  dot={{ fill: "#a3e635", strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 7, fill: "#a3e635" }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
          {scoreHistory.length > 0 && (
            <div className="mt-5 border-t border-stone-200 pt-5 dark:border-white/10">
              <div className="relative mb-3">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                <input
                  type="search"
                  value={historySearch}
                  onChange={(e) => setHistorySearch(e.target.value)}
                  placeholder="Search by company, role, or resume"
                  className={`${inputCls} pl-9 pr-10`}
                  aria-label="Search ATS score history"
                />
                {historySearch && (
                  <button
                    type="button"
                    onClick={() => setHistorySearch("")}
                    className="absolute right-2 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md border-0 bg-transparent text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-700 dark:hover:bg-white/10 dark:hover:text-stone-200"
                    aria-label="Clear history search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {filteredHistory.length > 0 ? (
                <div className="divide-y divide-stone-200 overflow-hidden rounded-md border border-stone-200 dark:divide-white/10 dark:border-white/10">
                  {filteredHistory.map((item) => {
                    const company = getCompanyFromJobDescription(
                      item.jobDescription,
                    );
                    const tier = getScoreTier(item.overallScore);

                    return (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 bg-white px-4 py-3 dark:bg-stone-900"
                      >
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-stone-100 text-sm font-bold tabular-nums dark:bg-stone-950 ${tier.text}`}
                        >
                          {item.overallScore}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold text-stone-900 dark:text-stone-50">
                            {item.jobTitle ?? "General ATS analysis"}
                          </p>
                          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                            {company && <span>{company}</span>}
                            <span>{getResumeName(item.resumeUrl)}</span>
                          </div>
                        </div>
                        <span className="shrink-0 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                          {new Date(item.createdAt).toLocaleDateString(
                            "en-IN",
                            { month: "short", day: "numeric" },
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-md border border-dashed border-stone-300 px-4 py-6 text-center text-sm text-stone-500 dark:border-white/15">
                  No ATS history matches that search.
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>

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
                            toast.error(
                              `Job description capped at ${JD_MAX_CHARS.toLocaleString()} characters.`,
                            );
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
                        {jobDescription.length.toLocaleString()} /{" "}
                        {JD_MAX_CHARS.toLocaleString()}
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
                          {analyzedFileSize > 0 ? `${(analyzedFileSize / 1024).toFixed(1)} kb · ` : ""}pdf
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-stone-200 dark:border-white/10 -mx-5 px-5 pt-4 space-y-2.5">
                      {jobTitle && (
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono uppercase tracking-widest text-stone-500">
                            target role
                          </span>
                          <span className="font-bold text-stone-900 dark:text-stone-50 truncate ml-4 max-w-40">
                            {jobTitle}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono uppercase tracking-widest text-stone-500">
                          jd length
                        </span>
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
                        <RefreshCw
                          className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`}
                        />
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
                              <p
                                className={`text-xl font-bold tracking-tight tabular-nums ${tier.text}`}
                              >
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
        <div
          ref={printRef}
          id="ats-print-section"
          className="lg:col-span-3"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
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
                    to get your ATS score, keyword analysis, and rewrite
                    suggestions.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                    {[
                      {
                        label: "6 categories",
                        icon: <BarChart2 className="w-3 h-3" />,
                      },
                      {
                        label: "ai powered",
                        icon: <ScanSearch className="w-3 h-3" />,
                      },
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
                role="status"
                aria-live="polite"
                aria-label="Analyzing your resume"
                className={`${cardCls} min-h-125 flex flex-col items-center justify-center p-10`}
              >
                <div className="max-w-xs w-full text-center space-y-6">
                  <div className="w-14 h-14 rounded-md bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 flex items-center justify-center mx-auto">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <ScanSearch className="w-6 h-6 text-stone-600 dark:text-stone-400" />
                    </motion.div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-1">
                      Analyzing your resume
                    </p>
                    <p className="text-xs text-stone-500 font-mono uppercase tracking-widest">
                      This takes 10–20 seconds
                    </p>
                  </div>
                  {/* Indeterminate progress bar — honest, not fake-stepped */}
                  <div className="w-full h-1.5 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-lime-400 rounded-full"
                      animate={{ x: ["-100%", "250%"] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ width: "40%" }}
                    />
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
                aria-label={`ATS analysis complete. Overall score ${result.overallScore} out of 100.`}
              >
                {/* Score Header */}
                <div className={cardCls}>
                  <CardHeader
                    kicker="result"
                    title="Overall ATS score"
                    right={
                      <span
                        className={`text-[10px] font-mono uppercase tracking-widest ${overallTier.text}`}
                      >
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
                  {/* Tab strip with print button */}
                  <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/10 overflow-x-auto">
                    <div className="flex">
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
                    <button
                      type="button"
                      onClick={() => handlePrint()}
                      className="shrink-0 mr-1 inline-flex items-center gap-2 px-3.5 py-3 text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors border-0 bg-transparent cursor-pointer print:hidden"
                      title="Download or print this ATS report"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Print</span>
                    </button>
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
                                      <span
                                        className={`text-sm font-bold tabular-nums ${tier.text}`}
                                      >
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
                                        transition={{
                                          duration: 0.9,
                                          delay: 0.1,
                                          ease: "easeOut",
                                        }}
                                        className={`h-full rounded-full ${tier.bar}`}
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
                          {/* ── Summary bar ── */}
                          {(() => {
                            const found = result.keywordAnalysis.found.length;
                            const partial = (result.keywordAnalysis.partial ?? []).length;
                            const missing = result.keywordAnalysis.missing.length;
                            const total = found + partial + missing;
                            if (total === 0) return null;
                            const pFound = Math.round((found / total) * 100);
                            const pPartial = Math.round((partial / total) * 100);
                            const pMissing = 100 - pFound - pPartial;
                            return (
                              <div>
                                <div className="flex items-center justify-between mb-1.5">
                                  <span className={sectionKickerCls}>
                                    <span className="h-1 w-1 bg-lime-400" />
                                    {total} keywords analysed
                                  </span>
                                  <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                                    <span className="inline-flex items-center gap-1"><span className="w-2 h-2 bg-lime-400 rounded-sm" />{found} present</span>
                                    <span className="inline-flex items-center gap-1"><span className="w-2 h-2 bg-amber-400 rounded-sm" />{partial} partial</span>
                                    <span className="inline-flex items-center gap-1"><span className="w-2 h-2 bg-red-400 rounded-sm" />{missing} missing</span>
                                  </div>
                                </div>
                                <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
                                  {pFound > 0 && (
                                    <div className="bg-lime-400 rounded-full transition-all" style={{ width: `${String(pFound)}%` }} />
                                  )}
                                  {pPartial > 0 && (
                                    <div className="bg-amber-400 rounded-full transition-all" style={{ width: `${String(pPartial)}%` }} />
                                  )}
                                  {pMissing > 0 && (
                                    <div className="bg-red-400 rounded-full transition-all" style={{ width: `${String(pMissing)}%` }} />
                                  )}
                                </div>
                              </div>
                            );
                          })()}

                          {/* ── Three columns ── */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {/* Present */}
                            <div className="rounded-md border border-lime-200 dark:border-lime-900/50 bg-lime-50 dark:bg-lime-400/5 overflow-hidden">
                              <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-lime-200 dark:border-lime-900/50">
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400">
                                  <CheckCircle2 className="w-3.5 h-3.5" /> Present
                                </span>
                                <span className="text-[10px] font-mono tabular-nums bg-lime-100 dark:bg-lime-400/20 text-lime-700 dark:text-lime-400 px-1.5 py-0.5 rounded-sm">
                                  {result.keywordAnalysis.found.length}
                                </span>
                              </div>
                              <div className="p-3 flex flex-wrap gap-1.5 min-h-14">
                                {result.keywordAnalysis.found.length === 0 ? (
                                  <p className="text-xs text-stone-400 dark:text-stone-600 italic self-center w-full text-center">None detected</p>
                                ) : result.keywordAnalysis.found.map((kw) => (
                                  <span
                                    key={kw}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-lime-50 dark:bg-lime-400/10 text-lime-700 dark:text-lime-400 rounded-md text-xs font-medium border border-lime-200 dark:border-lime-400/30"
                                  >
                                    <span className="text-lime-500 font-bold">✓</span> {kw}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Partial */}
                            <div className="rounded-md border border-dashed border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-400/5 overflow-hidden">
                              <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-amber-200 dark:border-amber-900/50">
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400">
                                  <AlertCircle className="w-3.5 h-3.5" /> Partial
                                </span>
                                <span className="text-[10px] font-mono tabular-nums bg-amber-100 dark:bg-amber-400/20 text-amber-700 dark:text-amber-400 px-1.5 py-0.5 rounded-sm">
                                  {(result.keywordAnalysis.partial ?? []).length}
                                </span>
                              </div>
                              <div className="p-3 flex flex-wrap gap-1.5 min-h-14">
                                {(result.keywordAnalysis.partial ?? []).length === 0 ? (
                                  <p className="text-xs text-stone-400 dark:text-stone-600 italic self-center w-full text-center">No partial keywords detected</p>
                                ) : (result.keywordAnalysis.partial ?? []).map((kw) => (
                                  <span
                                    key={kw}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400 rounded-md text-xs font-medium border border-dashed border-amber-200 dark:border-amber-400/30"
                                  >
                                    <span className="text-amber-500 font-bold">~</span> {kw}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Missing */}
                            <div className="rounded-md border border-dashed border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-400/5 overflow-hidden">
                              <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-red-200 dark:border-red-900/50">
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-red-700 dark:text-red-400">
                                  <XCircle className="w-3.5 h-3.5" /> Missing
                                </span>
                                <span className="text-[10px] font-mono tabular-nums bg-red-100 dark:bg-red-400/20 text-red-700 dark:text-red-400 px-1.5 py-0.5 rounded-sm">
                                  {result.keywordAnalysis.missing.length}
                                </span>
                              </div>
                              <div className="p-3 flex flex-wrap gap-1.5 min-h-14">
                                {result.keywordAnalysis.missing.length === 0 ? (
                                  <p className="text-xs text-stone-400 dark:text-stone-600 italic self-center w-full text-center">None — great coverage!</p>
                                ) : result.keywordAnalysis.missing.map((kw) => (
                                  <span
                                    key={kw}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 dark:bg-red-400/10 text-red-700 dark:text-red-400 rounded-md text-xs font-medium border border-dashed border-red-200 dark:border-red-400/30"
                                  >
                                    <span className="text-red-500 font-bold">+</span> {kw}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {result.keywordAnalysis.found.length === 0 &&
                            (result.keywordAnalysis.partial ?? []).length === 0 &&
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
                            <div className="space-y-4">
                              <div className="flex items-center justify-between px-1">
                                <label className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={selectedSuggestions.size === result.suggestions.length}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setSelectedSuggestions(new Set(result.suggestions.map((_, i) => i)));
                                      } else {
                                        setSelectedSuggestions(new Set());
                                      }
                                    }}
                                    className="w-4 h-4 rounded border-stone-300 text-lime-500 focus:ring-lime-500 cursor-pointer"
                                  />
                                  <span className="font-bold">Select all</span>
                                </label>
                                <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                                  {selectedSuggestions.size} selected
                                </span>
                              </div>
                              <div className="divide-y divide-stone-200 dark:divide-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                                {result.suggestions.map((s, i) => (
                                  <label
                                    key={i}
                                    className="group flex items-start gap-4 px-5 py-4 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-950/60 transition-colors cursor-pointer"
                                  >
                                    <div className="pt-0.5">
                                      <input
                                        type="checkbox"
                                        checked={selectedSuggestions.has(i)}
                                        onChange={(e) => {
                                          const next = new Set(selectedSuggestions);
                                          if (e.target.checked) next.add(i);
                                          else next.delete(i);
                                          setSelectedSuggestions(next);
                                        }}
                                        className="w-4 h-4 rounded border-stone-300 text-lime-500 focus:ring-lime-500 cursor-pointer"
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                                        {s}
                                      </p>
                                    </div>
                                  </label>
                                ))}
                              </div>
                              <Button
                                type="button"
                                variant="primary"
                                size="lg"
                                onClick={() => applyMutation.mutate()}
                                disabled={selectedSuggestions.size === 0 || applyMutation.isPending}
                                className="group w-full font-bold bg-lime-400 text-stone-950 hover:bg-lime-300 border-0"
                              >
                                {applyMutation.isPending ? (
                                  <>
                                    <Loader2 className="w-4 h-4 animate-spin" /> Applying...
                                  </>
                                ) : (
                                  <>
                                    <Wand2 className="w-4 h-4" /> Apply suggestions & improve resume
                                  </>
                                )}
                              </Button>
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
