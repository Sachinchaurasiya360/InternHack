import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wand2,
  FileText,
  Search,
  CheckCircle,
  Copy,
  Download,
  RefreshCw,
  Briefcase,
  Code2,
  MessageSquare,
  ScanSearch,
  ChevronRight,
  User,
  GraduationCap,
  FolderGit2,
  Trophy,
  Play,
  Eye,
  FileCode2,
  Loader2,
  Check,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import { SEO } from "../../../components/SEO";
import { useAuthStore } from "../../../lib/auth.store";
import { queryKeys } from "../../../lib/query-keys";
import type { UsageStats } from "../../../lib/types";
import AtsToolsNav from "./AtsToolsNav";

const GENERATION_STEPS = [
  { icon: FileText, label: "Reading your profile" },
  { icon: Search, label: "Analyzing job requirements" },
  { icon: Wand2, label: "Generating LaTeX resume" },
  { icon: CheckCircle, label: "Finalizing" },
];

const inputCls =
  "w-full px-3.5 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all placeholder-gray-400 dark:placeholder-gray-500 bg-gray-50/50 dark:bg-gray-800/50 dark:text-white";
const labelCls = "block text-xs font-medium text-gray-500 dark:text-gray-500 mb-1.5";

export default function ResumeGeneratorPage() {
  const queryClient = useQueryClient();

  // Form state
  const [jobDescription, setJobDescription] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [keySkills, setKeySkills] = useState("");
  const [useProfile, setUseProfile] = useState(false);

  // Generation state
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState("");

  const { data: usageData } = useQuery<UsageStats>({
    queryKey: queryKeys.ats.usage(),
    queryFn: () => api.get("/ats/usage").then((r) => r.data),
    staleTime: 60_000,
    refetchOnWindowFocus: true,
  });

  const resumeUsage = usageData?.usage.find((u) => u.action === "GENERATE_RESUME");
  const limitReached = resumeUsage ? resumeUsage.used >= resumeUsage.limit : false;

  // Editor state
  const [latexCode, setLatexCode] = useState("");
  const [phase, setPhase] = useState<"form" | "editor">("form");
  const [mobileView, setMobileView] = useState<"editor" | "preview">("editor");
  const [copied, setCopied] = useState(false);

  // PDF preview state
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [compiling, setCompiling] = useState(false);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const prevBlobUrl = useRef<string | null>(null);

  const user = useAuthStore((s) => s.user);

  useEffect(() => {
    return () => {
      if (prevBlobUrl.current) URL.revokeObjectURL(prevBlobUrl.current);
    };
  }, []);

  const profileSummary = useMemo(() => {
    if (!user) return null;
    const parts: string[] = [];
    if (user.skills && user.skills.length > 0) parts.push(user.skills.join(", "));
    if (user.college) parts.push(user.college + (user.graduationYear ? ` (${String(user.graduationYear)})` : ""));
    if (user.company) parts.push(user.company + (user.designation ? ` - ${user.designation}` : ""));
    if (user.projects && user.projects.length > 0) parts.push(`${String(user.projects.length)} project${user.projects.length > 1 ? "s" : ""}`);
    if (user.achievements && user.achievements.length > 0) parts.push(`${String(user.achievements.length)} achievement${user.achievements.length > 1 ? "s" : ""}`);
    return parts;
  }, [user]);

  const hasProfileData = profileSummary && profileSummary.length > 0;

  const handleGenerate = async () => {
    if (jobDescription.trim().length > 0 && jobDescription.trim().length < 50) {
      toast.error("Job description must be at least 50 characters");
      return;
    }

    setLoading(true);
    setError("");
    setCurrentStep(0);

    const stepInterval = setInterval(() => {
      setCurrentStep((s) => (s < GENERATION_STEPS.length - 1 ? s + 1 : s));
    }, 1500);

    try {
      const { data } = await api.post("/ats/generate-resume", {
        jobDescription: jobDescription.trim() || undefined,
        jobTitle: jobTitle.trim() || undefined,
        keySkills: keySkills.trim() || undefined,
        useProfile,
      });
      setLatexCode(data.latex);
      setPhase("editor");
      setPdfUrl(null);
      setPreviewError(null);
      queryClient.invalidateQueries({ queryKey: queryKeys.ats.usage() });
    } catch (err) {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        "Failed to generate resume. Please try again.";
      setError(msg);
      toast.error(msg);
    } finally {
      clearInterval(stepInterval);
      setLoading(false);
    }
  };

  const handleCodeChange = useCallback((val: string) => {
    setLatexCode(val);
  }, []);

  const handleCopyLatex = async () => {
    await navigator.clipboard.writeText(latexCode);
    setCopied(true);
    toast.success("LaTeX copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCompile = async () => {
    setCompiling(true);
    setPreviewError(null);
    try {
      const res = await api.post("/latex/compile", { source: latexCode }, { responseType: "blob" });
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
      const res = await api.post("/latex/compile", { source: latexCode }, { responseType: "blob" });
      const url = URL.createObjectURL(res.data as Blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err: unknown) {
      let msg = "Compilation failed. Please check your LaTeX syntax.";
      if (err && typeof err === "object" && "response" in err) {
        const resp = err as { response?: { data?: Blob; status?: number } };
        if (resp.response?.data instanceof Blob) {
          try {
            const text = await resp.response.data.text();
            const parsed = JSON.parse(text);
            msg = parsed.message || msg;
          } catch {
            // ignore
          }
        }
      }
      setPreviewError(msg);
    } finally {
      setCompiling(false);
    }
  };

  const handleBackToForm = () => {
    setPhase("form");
    setPdfUrl(null);
    setPreviewError(null);
  };

  return (
    <div className="relative max-w-360 mx-auto pb-12 px-4 sm:px-6">
      <SEO title="AI Resume Generator - InternHack" description="Generate a professional LaTeX resume with AI" />

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
        className="text-center mb-8"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          AI <span className="text-gradient-accent">Resume Generator</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          Generate a professional, ATS-optimized resume from your profile in seconds
        </p>
      </motion.div>

      <AtsToolsNav />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {phase === "form" ? (
          <motion.div
            key="form-phase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {/* Left - Input Form */}
              <div className="md:col-span-2 space-y-4">
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm p-5">
                  <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-violet-500" />
                    Resume Details
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className={labelCls}>
                        <Briefcase className="w-3 h-3 inline mr-1" />
                        Target Job Title
                      </label>
                      <input
                        className={inputCls}
                        placeholder="Software Engineer"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className={labelCls}>Job Description</label>
                      <textarea
                        className={`${inputCls} min-h-35 resize-y`}
                        placeholder="Paste the job description to tailor your resume (optional, min 50 chars)..."
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                      {jobDescription.length > 0 && jobDescription.length < 50 && (
                        <p className="text-[10px] text-amber-500 mt-1">
                          {jobDescription.length}/50 characters minimum
                        </p>
                      )}
                    </div>

                    <div>
                      <label className={labelCls}>
                        <Code2 className="w-3 h-3 inline mr-1" />
                        Key Skills & Experience
                      </label>
                      <textarea
                        className={`${inputCls} min-h-20 resize-y`}
                        placeholder="3 years React/Node.js, built scalable microservices, led team of 4..."
                        value={keySkills}
                        onChange={(e) => setKeySkills(e.target.value)}
                      />
                    </div>

                    {/* Use My Profile Toggle */}
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          if (!hasProfileData) {
                            toast.error("Complete your profile first to use this feature");
                            return;
                          }
                          setUseProfile(!useProfile);
                        }}
                        className={`w-full flex items-center gap-3 p-3.5 rounded-xl border-2 transition-all text-left ${
                          useProfile
                            ? "border-violet-500 bg-violet-50/50 dark:bg-violet-900/20"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          useProfile ? "bg-violet-100 dark:bg-violet-900/40" : "bg-gray-100 dark:bg-gray-800"
                        }`}>
                          <User className={`w-4 h-4 ${useProfile ? "text-violet-600 dark:text-violet-400" : "text-gray-400 dark:text-gray-500"}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-semibold ${useProfile ? "text-violet-700 dark:text-violet-400" : "text-gray-700 dark:text-gray-300"}`}>
                            Use My Profile
                          </p>
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
                            {hasProfileData ? "Auto-fill with your skills, projects & achievements" : "Complete your profile to enable this"}
                          </p>
                        </div>
                        <div className={`w-9 h-5 rounded-full relative transition-colors ${
                          useProfile ? "bg-violet-500" : "bg-gray-200 dark:bg-gray-700"
                        }`}>
                          <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${
                            useProfile ? "left-4.5" : "left-0.5"
                          }`} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {useProfile && hasProfileData && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-2 p-3 bg-violet-50/50 dark:bg-violet-900/10 rounded-xl border border-violet-100 dark:border-violet-900/30">
                              <div className="space-y-1.5">
                                {user?.skills && user.skills.length > 0 && (
                                  <div className="flex items-start gap-2">
                                    <Code2 className="w-3 h-3 text-violet-400 mt-0.5 shrink-0" />
                                    <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                                      {user.skills.slice(0, 6).join(", ")}{user.skills.length > 6 ? ` +${String(user.skills.length - 6)} more` : ""}
                                    </p>
                                  </div>
                                )}
                                {user?.college && (
                                  <div className="flex items-start gap-2">
                                    <GraduationCap className="w-3 h-3 text-violet-400 mt-0.5 shrink-0" />
                                    <p className="text-[11px] text-gray-600 dark:text-gray-400">
                                      {user.college}{user.graduationYear ? ` (${String(user.graduationYear)})` : ""}
                                    </p>
                                  </div>
                                )}
                                {user?.projects && user.projects.length > 0 && (
                                  <div className="flex items-start gap-2">
                                    <FolderGit2 className="w-3 h-3 text-violet-400 mt-0.5 shrink-0" />
                                    <p className="text-[11px] text-gray-600 dark:text-gray-400">
                                      {user.projects.map((p) => p.title).join(", ")}
                                    </p>
                                  </div>
                                )}
                                {user?.achievements && user.achievements.length > 0 && (
                                  <div className="flex items-start gap-2">
                                    <Trophy className="w-3 h-3 text-violet-400 mt-0.5 shrink-0" />
                                    <p className="text-[11px] text-gray-600 dark:text-gray-400">
                                      {user.achievements.map((a) => a.title).join(", ")}
                                    </p>
                                  </div>
                                )}
                              </div>
                              <Link
                                to="/student/profile"
                                className="inline-flex items-center gap-1 mt-2 text-[10px] text-violet-600 dark:text-violet-400 font-medium hover:underline no-underline"
                              >
                                Edit profile <ChevronRight className="w-2.5 h-2.5" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {resumeUsage && (
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>{resumeUsage.used}/{resumeUsage.limit} used today</span>
                        {limitReached && (
                          <Link to="/student/pricing" className="text-violet-600 dark:text-violet-400 font-medium no-underline hover:underline">
                            Upgrade
                          </Link>
                        )}
                      </div>
                    )}

                    <button
                      onClick={handleGenerate}
                      disabled={loading || limitReached}
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-gray-950 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all disabled:opacity-40 disabled:cursor-not-allowed dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200 active:scale-[0.99]"
                    >
                      {loading ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Generating...
                        </>
                      ) : limitReached ? (
                        "Daily limit reached"
                      ) : (
                        <>
                          <Wand2 className="w-4 h-4" />
                          Generate Resume
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right - Preview / Loading / Empty */}
              <div className="md:col-span-3">
                <AnimatePresence mode="wait">
                  {loading && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 p-6 shadow-sm"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="relative w-10 h-10">
                          <div className="absolute inset-0 rounded-full border-3 border-violet-100 dark:border-violet-900/50" />
                          <motion.div
                            className="absolute inset-0 rounded-full border-3 border-violet-500 border-t-transparent"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Wand2 className="w-4 h-4 text-violet-500" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white">Generating your resume</h3>
                          <p className="text-xs text-gray-400 dark:text-gray-500">This usually takes 15-20 seconds</p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        {GENERATION_STEPS.map((step, i) => {
                          const Icon = step.icon;
                          const isActive = i === currentStep;
                          const isDone = i < currentStep;
                          const isPending = i > currentStep;
                          return (
                            <motion.div
                              key={step.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.08 }}
                              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                                isActive
                                  ? "bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800"
                                  : isDone
                                    ? "bg-green-50/50 dark:bg-green-900/10"
                                    : "opacity-50"
                              }`}
                            >
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                  isDone ? "bg-green-100 dark:bg-green-900/40" : isActive ? "bg-violet-100 dark:bg-violet-900/40" : "bg-gray-100 dark:bg-gray-800"
                                }`}
                              >
                                {isDone ? (
                                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                                ) : isActive ? (
                                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}>
                                    <Icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                                  </motion.div>
                                ) : (
                                  <Icon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                                )}
                              </div>
                              <span className={`text-sm font-medium flex-1 ${isDone ? "text-green-700 dark:text-green-400" : isActive ? "text-violet-700 dark:text-violet-400" : "text-gray-400 dark:text-gray-500"}`}>
                                {step.label}
                              </span>
                              {isDone && (
                                <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded-full">
                                  Done
                                </motion.span>
                              )}
                              {isActive && (
                                <div className="flex gap-1">
                                  {[0, 0.15, 0.3].map((delay) => (
                                    <motion.div key={delay} className="w-1.5 h-1.5 rounded-full bg-violet-400" animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.8, repeat: Infinity, delay }} />
                                  ))}
                                </div>
                              )}
                              {isPending && (
                                <span className="text-[10px] text-gray-300 dark:text-gray-600 font-medium">Pending</span>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {!loading && !error && phase === "form" && (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="min-h-105 flex flex-col items-center justify-center text-center p-10 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm"
                    >
                      <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-5">
                        <FileText className="w-9 h-9 text-violet-400" />
                      </div>
                      <h3 className="text-gray-800 dark:text-gray-200 font-bold text-lg mb-2">Your Resume Awaits</h3>
                      <p className="text-gray-400 dark:text-gray-500 text-sm max-w-xs leading-relaxed mx-auto">
                        Fill in job details or toggle{" "}
                        <span className="font-semibold text-violet-600 dark:text-violet-400">Use My Profile</span>{" "}
                        and click Generate to create a LaTeX resume
                      </p>
                      <div className="flex items-center justify-center gap-5 mt-6">
                        {[
                          { label: "AI Powered", icon: <Wand2 className="w-3.5 h-3.5" /> },
                          { label: "ATS-Friendly", icon: <ScanSearch className="w-3.5 h-3.5" /> },
                          { label: "Editable", icon: <FileCode2 className="w-3.5 h-3.5" /> },
                        ].map((tag) => (
                          <span key={tag.label} className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium">
                            {tag.icon} {tag.label}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {!loading && error && phase === "form" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white dark:bg-gray-900 rounded-2xl border border-red-200 dark:border-red-800 p-8 shadow-sm text-center"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-6 h-6 text-red-400" />
                      </div>
                      <h3 className="text-sm font-bold text-red-700 dark:text-red-400 mb-1">Generation Failed</h3>
                      <p className="text-xs text-red-400 dark:text-red-500 mb-4">{error}</p>
                      <button
                        onClick={handleGenerate}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium rounded-xl hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors"
                      >
                        <RefreshCw className="w-3 h-3" />
                        Try Again
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="editor-phase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {/* Toolbar */}
            <div className="mb-5">
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={handleBackToForm}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                  </button>

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

                  <button
                    onClick={() => { setPhase("form"); setError(""); }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors ml-auto"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Regenerate
                  </button>
                </div>
              </div>
            </div>

            {/* Split Pane */}
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
                  <span className="ml-auto text-[10px] font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    AI Generated
                  </span>
                </div>
                <div className="flex-1 overflow-auto">
                  <CodeMirror
                    value={latexCode}
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
                          Click <span className="font-semibold text-indigo-600 dark:text-indigo-400">Compile</span> to render your AI-generated resume as PDF
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
        )}
      </AnimatePresence>
    </div>
  );
}
