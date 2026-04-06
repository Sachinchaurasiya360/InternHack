import { useState, useRef, useMemo, useEffect } from "react";
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
  Building2,
  Code2,
  MessageSquare,
  ChevronRight,
  Mail,
  User,
  GraduationCap,
  FolderGit2,
  Trophy,
} from "lucide-react";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import { SEO } from "../../../components/SEO";
import { useAuthStore } from "../../../lib/auth.store";
import AtsToolsNav from "./AtsToolsNav";
import { queryKeys } from "../../../lib/query-keys";
import type { CoverLetterTone, UsageStats } from "../../../lib/types";

const TONES: { id: CoverLetterTone; label: string; description: string }[] = [
  { id: "professional", label: "Professional", description: "Formal and confident" },
  { id: "friendly", label: "Friendly", description: "Warm and approachable" },
  { id: "enthusiastic", label: "Enthusiastic", description: "Energetic and passionate" },
];

const GENERATION_STEPS = [
  { icon: FileText, label: "Reading job description" },
  { icon: Search, label: "Analyzing requirements" },
  { icon: Wand2, label: "Crafting your cover letter" },
  { icon: CheckCircle, label: "Finalizing" },
];

const inputCls =
  "w-full px-3.5 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all placeholder-gray-400 dark:placeholder-gray-500 bg-gray-50/50 dark:bg-gray-800/50 dark:text-white";
const labelCls = "block text-xs font-medium text-gray-500 dark:text-gray-500 mb-1.5";

// Tool nav handled by shared AtsToolsNav

export default function CoverLetterPage() {
  const queryClient = useQueryClient();
  const [jobDescription, setJobDescription] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [keySkills, setKeySkills] = useState("");
  const [tone, setTone] = useState<CoverLetterTone>("professional");
  const [useProfile, setUseProfile] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState("");
  const letterRef = useRef<HTMLDivElement>(null);

  const user = useAuthStore((s) => s.user);

  const { data: usageData } = useQuery<UsageStats>({
    queryKey: queryKeys.ats.usage(),
    queryFn: () => api.get("/ats/usage").then((r) => r.data),
    staleTime: 60_000,
    refetchOnWindowFocus: true,
  });

  const clUsage = usageData?.usage.find((u) => u.action === "COVER_LETTER");
  const limitReached = clUsage ? clUsage.used >= clUsage.limit : false;

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
    if (jobDescription.trim().length < 50) {
      toast.error("Job description must be at least 50 characters");
      return;
    }

    setLoading(true);
    setError("");
    setCoverLetter("");
    setCurrentStep(0);

    const stepInterval = setInterval(() => {
      setCurrentStep((s) => {
        if (s < GENERATION_STEPS.length - 1) return s + 1;
        return s;
      });
    }, 1500);

    try {
      const { data } = await api.post("/ats/cover-letter", {
        jobDescription: jobDescription.trim(),
        jobTitle: jobTitle.trim() || undefined,
        companyName: companyName.trim() || undefined,
        keySkills: keySkills.trim() || undefined,
        tone,
        useProfile,
      });
      setCoverLetter(data.coverLetter);
      queryClient.invalidateQueries({ queryKey: queryKeys.ats.usage() });
    } catch (err) {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message || "Failed to generate cover letter. Please try again.";
      setError(msg);
    } finally {
      clearInterval(stepInterval);
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coverLetter);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy");
    }
  };

  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const downloadMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showDownloadMenu) return;
    const handleClick = (e: MouseEvent) => {
      if (downloadMenuRef.current && !downloadMenuRef.current.contains(e.target as Node)) {
        setShowDownloadMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showDownloadMenu]);

  const handleDownloadPdf = async () => {
    if (!coverLetter) return;
    setShowDownloadMenu(false);
    const html2pdf = (await import("html2pdf.js")).default;
    const container = document.createElement("div");
    container.style.cssText =
      "font-family:Georgia,serif;max-width:700px;padding:40px;line-height:1.7;color:#1a1a1a;font-size:14px;white-space:pre-wrap;";
    container.innerText = coverLetter;
    document.body.appendChild(container);
    await html2pdf()
      .set({
        margin: 20,
        filename: "cover-letter.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(container)
      .save();
    document.body.removeChild(container);
  };

  const handleDownloadDocx = async () => {
    if (!coverLetter) return;
    setShowDownloadMenu(false);
    const { Document, Paragraph, TextRun, Packer } = await import("docx");
    const { saveAs } = await import("file-saver");

    const paragraphs = coverLetter.split("\n").map(
      (line) =>
        new Paragraph({
          children: [new TextRun({ text: line, font: "Georgia", size: 24 })],
          spacing: { after: 120 },
        })
    );

    const doc = new Document({
      sections: [{ children: paragraphs }],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "cover-letter.docx");
  };

  return (
    <div className="relative max-w-6xl mx-auto pb-12">
      <SEO title="Cover Letter Builder - InternHack" description="Generate AI-powered cover letters tailored to any job" noIndex />

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
          Personalize <span className="text-gradient-accent">Cover Letter</span> Builder
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          Generate tailored, professional cover letters in seconds
        </p>
      </motion.div>

      <AtsToolsNav />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid md:grid-cols-5 gap-6">
          {/* Left - Input Form */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm p-5">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-violet-500" />
                Job Details
              </h2>

              <div className="space-y-4">
                <div>
                  <label className={labelCls}>Job Description *</label>
                  <textarea
                    className={`${inputCls} min-h-35 resize-y`}
                    placeholder="Paste the full job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">
                    {jobDescription.length}/50 characters minimum
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelCls}>
                      <Briefcase className="w-3 h-3 inline mr-1" />
                      Job Title
                    </label>
                    <input
                      className={inputCls}
                      placeholder="Software Engineer"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>
                      <Building2 className="w-3 h-3 inline mr-1" />
                      Company Name
                    </label>
                    <input
                      className={inputCls}
                      placeholder="Google"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>
                    <Code2 className="w-3 h-3 inline mr-1" />
                    Your Key Skills & Experience
                  </label>
                  <textarea
                    className={`${inputCls} min-h-20 resize-y`}
                    placeholder="3 years of React/Node.js experience, built scalable microservices, led a team of 4..."
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
                        {hasProfileData ? "Send your skills, projects & achievements to AI" : "Complete your profile to enable this"}
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

                  {/* Profile data preview */}
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

                {/* Tone Selector */}
                <div>
                  <label className={labelCls}>Tone</label>
                  <div className="flex gap-2">
                    {TONES.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTone(t.id)}
                        className={`flex-1 px-3 py-2.5 rounded-xl border-2 text-xs font-medium transition-all ${
                          tone === t.id
                            ? "border-violet-500 bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400"
                            : "border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                      >
                        <div>{t.label}</div>
                        <div className="text-[10px] font-normal mt-0.5 opacity-70">
                          {t.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {clUsage && (
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{clUsage.used}/{clUsage.limit} used today</span>
                    {limitReached && (
                      <Link to="/student/pricing" className="text-violet-600 dark:text-violet-400 font-medium no-underline hover:underline">
                        Upgrade
                      </Link>
                    )}
                  </div>
                )}

                <button
                  onClick={handleGenerate}
                  disabled={loading || jobDescription.trim().length < 50 || limitReached}
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
                      Generate Cover Letter
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right - Output */}
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
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">Generating your cover letter</h3>
                      <p className="text-xs text-gray-400 dark:text-gray-500">This usually takes 10-15 seconds</p>
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

              {!loading && coverLetter && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm overflow-hidden"
                >
                  {/* Actions bar */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                      Generated successfully
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handleGenerate}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <RefreshCw className="w-3 h-3" />
                        Regenerate
                      </button>
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                      <div className="relative" ref={downloadMenuRef}>
                        <button
                          onClick={() => setShowDownloadMenu((v) => !v)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-gray-950 hover:bg-gray-800 rounded-lg transition-colors dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
                        >
                          <Download className="w-3 h-3" />
                          Download
                        </button>
                        <AnimatePresence>
                          {showDownloadMenu && (
                            <motion.div
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 4 }}
                              transition={{ duration: 0.15 }}
                              className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden z-20"
                            >
                              <button
                                onClick={handleDownloadPdf}
                                className="w-full flex items-center gap-2 px-3 py-2.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                              >
                                <FileText className="w-3.5 h-3.5 text-red-500" />
                                PDF
                              </button>
                              <button
                                onClick={handleDownloadDocx}
                                className="w-full flex items-center gap-2 px-3 py-2.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                              >
                                <FileText className="w-3.5 h-3.5 text-blue-500" />
                                DOCX
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  {/* Letter content */}
                  <div className="p-6" ref={letterRef}>
                    <textarea
                      className="w-full min-h-100 text-sm text-gray-700 dark:text-gray-300 leading-relaxed border-none outline-none resize-y bg-transparent font-serif"
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                    />
                  </div>
                </motion.div>
              )}

              {!loading && !coverLetter && !error && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="min-h-105 flex flex-col items-center justify-center text-center p-10 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm"
                >
                  <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-5">
                    <Mail className="w-9 h-9 text-violet-400" />
                  </div>
                  <h3 className="text-gray-800 dark:text-gray-200 font-bold text-lg mb-2">Your Cover Letter Awaits</h3>
                  <p className="text-gray-400 dark:text-gray-500 text-sm max-w-xs leading-relaxed mx-auto">
                    Fill in the job details and click{" "}
                    <span className="font-semibold text-violet-600 dark:text-violet-400">Generate Cover Letter</span>{" "}
                    to create a tailored letter
                  </p>
                  <div className="flex items-center justify-center gap-5 mt-6">
                    {[
                      { label: "AI Powered", icon: <Wand2 className="w-3.5 h-3.5" /> },
                      { label: "3 Tones", icon: <MessageSquare className="w-3.5 h-3.5" /> },
                      { label: "Instant", icon: <RefreshCw className="w-3.5 h-3.5" /> },
                    ].map((tag) => (
                      <span key={tag.label} className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium">
                        {tag.icon} {tag.label}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {!loading && error && !coverLetter && (
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
    </div>
  );
}
