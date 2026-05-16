import { LATEX_TEMPLATES } from "./latex-templates.data";
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
  ArrowRight,
  AlignLeft,
  Zap,
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

const JD_MIN_CHARS = 50;
const JD_MAX_CHARS = 5000;
const KEY_SKILLS_MAX_CHARS = 1000;

const cardCls =
  "bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md";
const sectionKickerCls =
  "inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500";
const sectionTitleCls = "text-sm font-bold text-stone-900 dark:text-stone-50";
const inputCls =
  "w-full px-4 py-2.5 border border-stone-300 dark:border-white/10 rounded-md text-sm focus:outline-none focus:border-lime-400 transition-colors bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600";
const labelCls =
  "flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2";

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

export default function ResumeGeneratorPage() {
  const queryClient = useQueryClient();

  const [jobDescription, setJobDescription] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [keySkills, setKeySkills] = useState("");
  const [useProfile, setUseProfile] = useState(false);

  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState("");

  const { data: usageData } = useQuery<UsageStats>({
    queryKey: queryKeys.ats.usage(),
    queryFn: () => api.get("/ats/usage").then((r) => r.data),
    staleTime: 60_000,
    refetchOnWindowFocus: true,
  });

  const resumeUsage = usageData?.usage.find(
    (u) => u.action === "GENERATE_RESUME",
  );
  const limitReached = resumeUsage
    ? resumeUsage.used >= resumeUsage.limit
    : false;
  const { data: historyData, refetch: refetchHistory } = useQuery({
    queryKey: ["resume-history"],
    queryFn: () => api.get("/ats/resume-history").then((r) => r.data),
    staleTime: 30_000,
  });

  const [latexCode, setLatexCode] = useState("");
  const [phase, setPhase] = useState<"form" | "editor">("form");
  const [mobileView, setMobileView] = useState<"editor" | "preview">("editor");
  const [copied, setCopied] = useState(false);

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [compiling, setCompiling] = useState(false);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const prevBlobUrl = useRef<string | null>(null);
  const hasAutoCompiled = useRef(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState("professional");
  const [showTemplateSwitch, setShowTemplateSwitch] = useState(false);
  const [templateSwitchError, setTemplateSwitchError] = useState("");
  const [parsedData, setParsedData] = useState<{jobDescription?: string; jobTitle?: string; keySkills?: string; useProfile?: boolean} | null>(null);
  const user = useAuthStore((s) => s.user);

  useEffect(() => {
    return () => {
      if (prevBlobUrl.current) URL.revokeObjectURL(prevBlobUrl.current);
    };
  }, []);

  const profileSummary = useMemo(() => {
    if (!user) return null;
    const parts: string[] = [];
    if (user.skills && user.skills.length > 0)
      parts.push(user.skills.join(", "));
    if (user.college)
      parts.push(
        user.college +
          (user.graduationYear ? ` (${String(user.graduationYear)})` : ""),
      );
    if (user.company)
      parts.push(
        user.company + (user.designation ? ` - ${user.designation}` : ""),
      );
    if (user.projects && user.projects.length > 0)
      parts.push(
        `${String(user.projects.length)} project${user.projects.length > 1 ? "s" : ""}`,
      );
    if (user.achievements && user.achievements.length > 0)
      parts.push(
        `${String(user.achievements.length)} achievement${user.achievements.length > 1 ? "s" : ""}`,
      );
    return parts;
  }, [user]);

  const hasProfileData = profileSummary && profileSummary.length > 0;

  const handleGenerate = async () => {
    const jdLen = jobDescription.trim().length;
    if (jdLen > 0 && jdLen < JD_MIN_CHARS) {
      toast.error(
        `Job description must be at least ${JD_MIN_CHARS} characters`,
      );
      return;
    }
    if (keySkills.length > KEY_SKILLS_MAX_CHARS) {
      toast.error(
        `Key skills must be under ${KEY_SKILLS_MAX_CHARS.toLocaleString()} characters`,
      );
      return;
    }

    setLoading(true);
    setError("");
    setCurrentStep(0);
    hasAutoCompiled.current = false;

    const stepInterval = setInterval(() => {
      setCurrentStep((s) => (s < GENERATION_STEPS.length - 1 ? s + 1 : s));
    }, 1500);

    try {
      const { data } = await api.post("/ats/generate-resume", {
        jobDescription: jobDescription.trim() || undefined,
        jobTitle: jobTitle.trim() || undefined,
        keySkills: keySkills.trim() || undefined,
        useProfile: useProfile && !!hasProfileData,
        templateId: selectedTemplateId,
      });
      
      setLatexCode(data.latex);
      setPhase("editor");
      setPdfUrl(null);
      setParsedData({ jobDescription: jobDescription.trim() || undefined, jobTitle: jobTitle.trim() || undefined, keySkills: keySkills.trim() || undefined, useProfile: useProfile && !!hasProfileData });
      setPreviewError(null);
      queryClient.invalidateQueries({ queryKey: queryKeys.ats.usage() });
      void refetchHistory();
    } catch (err) {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message || "Failed to generate resume. Please try again.";
      setError(msg);
    } finally {
      clearInterval(stepInterval);
      setLoading(false);
    }
  };

  const handleApplyTemplate = async () => {
    if (!parsedData) return;
    setShowTemplateSwitch(false);
    setTemplateSwitchError("");
    setLoading(true);
    setError("");
    setCurrentStep(0);
    hasAutoCompiled.current = false;
    const stepInterval = setInterval(() => {
      setCurrentStep((s) => (s < GENERATION_STEPS.length - 1 ? s + 1 : s));
    }, 1500);
    try {
      const { data } = await api.post("/ats/generate-resume", {
        ...parsedData,
        templateId: selectedTemplateId,
      });
      setLatexCode(data.latex);
      setPdfUrl(null);
      setPreviewError(null);
    } catch (err) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || "Failed to switch template.";
      setTemplateSwitchError(msg);
      setShowTemplateSwitch(true);
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

  const compileLatex = useCallback(async (source: string): Promise<Blob> => {
    try {
      const res = await api.post(
        "/latex/compile",
        { source },
        { responseType: "blob" },
      );
      return res.data as Blob;
    } catch (err: unknown) {
      let msg = "Compilation failed. Please check your LaTeX syntax.";
      let details = "";
      if (err && typeof err === "object" && "response" in err) {
        const resp = err as { response?: { data?: Blob } };
        if (resp.response?.data instanceof Blob) {
          try {
            const parsed = JSON.parse(await resp.response.data.text());
            msg = parsed.message || msg;
            details = parsed.details || "";
          } catch {
            // non-JSON error body, keep default msg
          }
        }
      }
      throw new Error(details ? `${msg}\n\n${details}` : msg);
    }
  }, []);

  const updatePreview = useCallback(
    async (source: string) => {
      setCompiling(true);
      setPreviewError(null);
      try {
        const blob = await compileLatex(source);
        if (prevBlobUrl.current) URL.revokeObjectURL(prevBlobUrl.current);
        const url = URL.createObjectURL(blob);
        prevBlobUrl.current = url;
        setPdfUrl(url);
      } catch (err) {
        setPdfUrl(null);
        setPreviewError(
          err instanceof Error ? err.message : "Compilation failed.",
        );
      } finally {
        setCompiling(false);
      }
    },
    [compileLatex],
  );

  useEffect(() => {
    if (phase !== "editor" || !latexCode || hasAutoCompiled.current) return;
    hasAutoCompiled.current = true;
    void updatePreview(latexCode);
  }, [phase, latexCode, updatePreview]);

  const handleCompile = async () => {
    await updatePreview(latexCode);
  };

  const handleDownloadPdf = async () => {
    setCompiling(true);
    try {
      const blob = await compileLatex(latexCode);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 1000);
    } catch (err) {
      setPreviewError(
        err instanceof Error ? err.message : "Compilation failed.",
      );
    } finally {
      setCompiling(false);
    }
  };

  const handleBackToForm = () => {
    hasAutoCompiled.current = false;
    setPhase("form");
    setPdfUrl(null);
    setPreviewError(null);
  };

  return (
    <div className="relative pb-16">
      <SEO
        title="AI Resume Generator - InternHack"
        description="Generate a professional LaTeX resume with AI"
        noIndex
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
      >
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            resume / ai generator
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Generate your resume.
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-md">
            Describe the role, optionally pull in your profile, and get an
            ATS-optimized LaTeX resume you can edit and export as PDF.
          </p>
        </div>
        {resumeUsage && (
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              daily usage
            </span>
            <span className="text-sm font-bold tabular-nums text-stone-900 dark:text-stone-50">
              {resumeUsage.used}
              <span className="text-stone-400 dark:text-stone-600 font-normal">
                {" "}
                / {resumeUsage.limit}
              </span>
            </span>
          </div>
        )}
      </motion.div>

      <AtsToolsNav />

      <AnimatePresence mode="wait">
        {phase === "form" ? (
          <motion.div
            key="form-phase"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
              <div className="lg:col-span-2 space-y-6">
                <div className={cardCls}>
                  <CardHeader kicker="step 01" title="Resume details" />
                  <div className="p-5 space-y-4">
                    <div>
                      <label className={labelCls}>
                        <Briefcase className="w-3 h-3" /> target role
                      </label>
                      <input
                        className={inputCls}
                        placeholder="e.g. Frontend Engineer"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className={labelCls}>
                        <AlignLeft className="w-3 h-3" /> job description
                      </label>
                      <textarea
                        className={`${inputCls} min-h-35 resize-y`}
                        placeholder={`Paste the job description to tailor your resume (optional, min ${JD_MIN_CHARS} chars)...`}
                        value={jobDescription}
                        maxLength={JD_MAX_CHARS}
                        onChange={(e) => {
                          const next = e.target.value.slice(0, JD_MAX_CHARS);
                          if (e.target.value.length > JD_MAX_CHARS) {
                            toast.error(
                              `Job description capped at ${JD_MAX_CHARS.toLocaleString()} characters.`,
                            );
                          }
                          setJobDescription(next);
                        }}
                        aria-describedby="jd-count"
                      />
                      <div
                        id="jd-count"
                        className="flex items-center justify-between mt-1.5"
                      >
                        <span
                          className={`text-[10px] font-mono uppercase tracking-widest ${jobDescription.length > 0 && jobDescription.length < JD_MIN_CHARS ? "text-amber-600 dark:text-amber-400" : "text-stone-500"}`}
                        >
                          {jobDescription.length > 0 &&
                          jobDescription.length < JD_MIN_CHARS
                            ? `${String(jobDescription.length)} / ${String(JD_MIN_CHARS)} min`
                            : `min ${String(JD_MIN_CHARS)} chars`}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
                          {jobDescription.length.toLocaleString()} /{" "}
                          {JD_MAX_CHARS.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className={labelCls}>
                        <Code2 className="w-3 h-3" /> key skills & experience
                      </label>
                      <textarea
                        className={`${inputCls} min-h-20 resize-y`}
                        placeholder="3 years React/Node.js, built scalable microservices, led team of 4..."
                        value={keySkills}
                        maxLength={KEY_SKILLS_MAX_CHARS}
                        onChange={(e) => {
                          const next = e.target.value.slice(
                            0,
                            KEY_SKILLS_MAX_CHARS,
                          );
                          if (e.target.value.length > KEY_SKILLS_MAX_CHARS) {
                            toast.error(
                              `Key skills capped at ${KEY_SKILLS_MAX_CHARS.toLocaleString()} characters.`,
                            );
                          }
                          setKeySkills(next);
                        }}
                        aria-describedby="skills-count"
                      />
                      <div
                        id="skills-count"
                        className={`mt-1.5 text-right text-[10px] font-mono uppercase tracking-widest tabular-nums ${
                          keySkills.length >= KEY_SKILLS_MAX_CHARS * 0.9
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-stone-500"
                        }`}
                      >
                        {keySkills.length.toLocaleString()} /{" "}
                        {KEY_SKILLS_MAX_CHARS.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cardCls}>
                  <CardHeader
                    kicker="step 02"
                    title="Use my profile"
                    right={
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                        / optional
                      </span>
                    }
                  />
                  <div className="p-5">
                    <button
                      type="button"
                      disabled={!hasProfileData}
                      aria-disabled={!hasProfileData}
                      onClick={() => setUseProfile(!useProfile)}
                      className={`w-full flex items-center gap-3 p-3.5 rounded-md border transition-colors text-left cursor-pointer ${
                        !hasProfileData
                          ? "border-stone-200 dark:border-white/10 opacity-60 cursor-not-allowed"
                          : useProfile
                            ? "border-lime-400 bg-lime-50/60 dark:bg-lime-400/5"
                            : "border-stone-300 dark:border-white/10 bg-stone-50/60 dark:bg-stone-950/40 hover:border-stone-400 dark:hover:border-white/20"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 ${
                          useProfile && hasProfileData
                            ? "bg-lime-400 text-stone-950"
                            : "bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-stone-500"
                        }`}
                      >
                        <User className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                          Pull from profile
                        </p>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-1">
                          {hasProfileData
                            ? "auto-fill skills, projects, achievements"
                            : "profile is empty"}
                        </p>
                      </div>
                      <div
                        className={`w-9 h-5 relative transition-colors shrink-0 rounded-sm ${
                          useProfile && hasProfileData
                            ? "bg-lime-400"
                            : "bg-stone-200 dark:bg-white/10"
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 bg-white dark:bg-stone-50 shadow-sm transition-all rounded-xs ${
                            useProfile && hasProfileData
                              ? "left-4.5"
                              : "left-0.5"
                          }`}
                        />
                      </div>
                    </button>

                    {!hasProfileData && (
                      <Link
                        to="/student/profile"
                        className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-stone-900 dark:text-stone-50 no-underline"
                      >
                        <span className="underline decoration-lime-400 decoration-2 underline-offset-4 hover:decoration-lime-300">
                          Complete your profile
                        </span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    )}

                    <AnimatePresence>
                      {useProfile && hasProfileData && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 p-3.5 bg-stone-50/60 dark:bg-stone-950/40 border border-stone-200 dark:border-white/10 rounded-md">
                            <div className="space-y-2">
                              {user?.skills && user.skills.length > 0 && (
                                <div className="flex items-start gap-2">
                                  <Code2 className="w-3 h-3 text-stone-500 mt-0.5 shrink-0" />
                                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-relaxed">
                                    {user.skills.slice(0, 6).join(", ")}
                                    {user.skills.length > 6
                                      ? ` +${String(user.skills.length - 6)} more`
                                      : ""}
                                  </p>
                                </div>
                              )}
                              {user?.college && (
                                <div className="flex items-start gap-2">
                                  <GraduationCap className="w-3 h-3 text-stone-500 mt-0.5 shrink-0" />
                                  <p className="text-[11px] text-stone-600 dark:text-stone-400">
                                    {user.college}
                                    {user.graduationYear
                                      ? ` (${String(user.graduationYear)})`
                                      : ""}
                                  </p>
                                </div>
                              )}
                              {user?.projects && user.projects.length > 0 && (
                                <div className="flex items-start gap-2">
                                  <FolderGit2 className="w-3 h-3 text-stone-500 mt-0.5 shrink-0" />
                                  <p className="text-[11px] text-stone-600 dark:text-stone-400">
                                    {user.projects
                                      .map((p) => p.title)
                                      .join(", ")}
                                  </p>
                                </div>
                              )}
                              {user?.achievements &&
                                user.achievements.length > 0 && (
                                  <div className="flex items-start gap-2">
                                    <Trophy className="w-3 h-3 text-stone-500 mt-0.5 shrink-0" />
                                    <p className="text-[11px] text-stone-600 dark:text-stone-400">
                                      {user.achievements
                                        .map((a) => a.title)
                                        .join(", ")}
                                    </p>
                                  </div>
                                )}
                            </div>
                            <Link
                              to="/student/profile"
                              className="inline-flex items-center gap-1 mt-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors no-underline"
                            >
                              edit profile{" "}
                              <ChevronRight className="w-2.5 h-2.5" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className={cardCls}>
                  <CardHeader kicker="step 03" title="Choose template" />
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
                      {LATEX_TEMPLATES.map((tpl) => (
                        <button
                          key={tpl.id}
                          type="button"
                          onClick={() => setSelectedTemplateId(tpl.id)}
                          className={`text-left p-3 rounded-md border transition-colors cursor-pointer ${
                            selectedTemplateId === tpl.id
                              ? "border-lime-400 bg-lime-50/60 dark:bg-lime-400/5"
                              : "border-stone-200 dark:border-white/10 hover:border-stone-300 dark:hover:border-white/20"
                          }`}
                        >
                          <p className="text-xs font-bold text-stone-900 dark:text-stone-50">{tpl.name}</p>
                          <p className="text-[10px] text-stone-500 mt-0.5 line-clamp-2">{tpl.description}</p>
                          <span className="inline-block mt-1.5 text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-500">
                            {tpl.category}
                          </span>
                        </button>
                      ))}
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
                  onClick={handleGenerate}
                  disabled={loading || limitReached}
                  className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-lime-400 text-stone-950 rounded-md text-sm font-bold hover:bg-lime-300 transition-colors border-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Generating...
                    </>
                  ) : limitReached ? (
                    "Daily limit reached"
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4" /> Generate resume
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
              </div>

              <div className="lg:col-span-3">
                <AnimatePresence mode="wait">
                  {loading && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`${cardCls} min-h-125`}
                    >
                      <CardHeader
                        kicker="generating"
                        title="Drafting your resume"
                        right={
                          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                            ~15-20s
                          </span>
                        }
                      />
                      <div className="p-6">
                        <div className="w-full h-1.5 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-full overflow-hidden mb-6">
                          <motion.div
                            className="h-full bg-lime-400"
                            initial={{ width: "0%" }}
                            animate={{
                              width: `${Math.min(((currentStep + 1) / GENERATION_STEPS.length) * 100, 100)}%`,
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          />
                        </div>
                        <p className="sr-only" aria-live="polite" aria-atomic="true">
                          {`Step ${String(currentStep + 1)} of ${String(GENERATION_STEPS.length)}: ${GENERATION_STEPS[currentStep]?.label ?? ""}`}
                        </p>
                        <div className="space-y-1" role="list" aria-label="Resume generation progress">
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
                                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                                  isActive
                                    ? "bg-lime-400/10 border border-lime-400/40"
                                    : isDone
                                      ? "bg-stone-50 dark:bg-stone-950/60 border border-transparent"
                                      : "border border-transparent opacity-50"
                                }`}
                              >
                                <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
                                  isDone
                                    ? "bg-lime-400 text-stone-950"
                                    : isActive
                                      ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                                      : "bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-stone-400"
                                }`}>
                                  {isDone ? (
                                    <CheckCircle className="w-3.5 h-3.5" />
                                  ) : isActive ? (
                                    <motion.div
                                      animate={{ rotate: 360 }}
                                      transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                      }}
                                    >
                                      <Icon className="w-3.5 h-3.5" />
                                    </motion.div>
                                  ) : (
                                    <Icon className="w-3.5 h-3.5" />
                                  )}
                                </div>
                                <span className={`text-sm font-medium flex-1 ${
                                  isDone
                                    ? "text-stone-600 dark:text-stone-400"
                                    : isActive
                                      ? "text-stone-900 dark:text-stone-50"
                                      : "text-stone-400 dark:text-stone-600"
                                }`}>
                                  {step.label}
                                </span>
                                {isDone && (
                                  <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">done</span>
                                )}
                                {isActive && (
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
                                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600">pending</span>
                                )}
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {!loading && !error && phase === "form" && (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`${cardCls} min-h-125 flex flex-col items-center justify-center text-center p-10`}
                    >
                      <div className="max-w-xs">
                        <div className="w-16 h-16 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center mb-5 mx-auto relative">
                          <FileText className="w-7 h-7 text-stone-400 dark:text-stone-600" />
                          <span className="absolute -top-1 -right-1 h-2 w-2 bg-lime-400" />
                        </div>
                        <div
                          className={sectionKickerCls + " justify-center mb-2"}
                        >
                          <span className="h-1 w-1 bg-lime-400" />
                          preview panel
                        </div>
                        <h3 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
                          Your resume appears here.
                        </h3>
                        <p className="text-sm text-stone-500 leading-relaxed">
                          Fill in job details, toggle{" "}
                          <span className="font-bold text-stone-900 dark:text-stone-50">Pull from profile</span>
                          , then click Generate to draft a LaTeX resume.
                        </p>
                        <div className="mt-6 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                          {[
                            {
                              label: "ai powered",
                              icon: <Wand2 className="w-3 h-3" />,
                            },
                            {
                              label: "ats ready",
                              icon: <ScanSearch className="w-3 h-3" />,
                            },
                            {
                              label: "editable",
                              icon: <Zap className="w-3 h-3" />,
                            },
                          ].map((tag) => (
                            <div key={tag.label} className="bg-white dark:bg-stone-900 px-2 py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                              {tag.icon}{tag.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {!loading && error && phase === "form" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`${cardCls} border-red-200 dark:border-red-900/40`}
                    >
                      <CardHeader
                        kicker="failed"
                        title="Generation failed"
                        right={
                          <span className="text-[10px] font-mono uppercase tracking-widest text-red-600 dark:text-red-400">
                            / retry available
                          </span>
                        }
                      />
                      <div className="p-6 text-center">
                        <div className="w-14 h-14 rounded-md bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 flex items-center justify-center mx-auto mb-4">
                          <AlertCircle className="w-6 h-6 text-red-500" />
                        </div>
                        <p className="text-sm text-stone-700 dark:text-stone-300 mb-5 max-w-sm mx-auto">
                          {error}
                        </p>
                        <button
                          type="button"
                          onClick={handleGenerate}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-bold bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors border-0 cursor-pointer"
                        >
                          <RefreshCw className="w-3.5 h-3.5" /> Try again
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="editor-phase"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* ─── Toolbar ─── */}
            <div className={`${cardCls} mb-5`}>
              <div className="flex items-center gap-2 flex-wrap p-3">
                <button
                  type="button"
                  onClick={handleBackToForm}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>

                <div className="flex lg:hidden gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileView("editor")}
                    className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest transition-colors cursor-pointer border-0 ${
                      mobileView === "editor"
                        ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                        : "bg-white dark:bg-stone-900 text-stone-500"
                    }`}
                  >
                    <FileCode2 className="w-3 h-3 inline mr-1" /> editor
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileView("preview")}
                    className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest transition-colors cursor-pointer border-0 ${
                      mobileView === "preview"
                        ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                        : "bg-white dark:bg-stone-900 text-stone-500"
                    }`}
                  >
                    <Eye className="w-3 h-3 inline mr-1" /> preview
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleCopyLatex}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-lime-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>

                <button
                  type="button"
                  onClick={handleCompile}
                  disabled={compiling}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-50 dark:text-stone-900 bg-stone-900 dark:bg-stone-50 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors border-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {compiling ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Play className="w-3.5 h-3.5" />
                  )}
                  {compiling ? "Compiling..." : "Compile"}
                </button>

                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  disabled={compiling}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors border-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </button>

                <button
                  type="button"
                  onClick={() => { setShowTemplateSwitch(!showTemplateSwitch); setTemplateSwitchError(""); }}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <FileCode2 className="w-3.5 h-3.5" /> Change Template
                </button>

                <button
                  type="button"
                  onClick={() => { setPhase("form"); setError(""); }}
                  className="ml-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-900 dark:text-stone-50 bg-transparent border border-stone-300 dark:border-white/15 hover:border-lime-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Regenerate
                </button>
              </div>
            </div>

            {showTemplateSwitch && (
              <div className={`${cardCls} mb-5 p-5`}>
                <p className="text-xs font-bold text-stone-900 dark:text-stone-50 mb-3">Switch template (uses cached content, no quota used)</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-1 mb-4">
                  {LATEX_TEMPLATES.map((tpl) => (
                    <button
                      key={tpl.id}
                      type="button"
                      onClick={() => setSelectedTemplateId(tpl.id)}
                      className={`text-left p-3 rounded-md border transition-colors cursor-pointer ${
                        selectedTemplateId === tpl.id
                          ? "border-lime-400 bg-lime-50/60 dark:bg-lime-400/5"
                          : "border-stone-200 dark:border-white/10 hover:border-stone-300 dark:hover:border-white/20"
                      }`}
                    >
                      <p className="text-xs font-bold text-stone-900 dark:text-stone-50">{tpl.name}</p>
                      <p className="text-[10px] text-stone-500 mt-0.5 line-clamp-1">{tpl.description}</p>
                    </button>
                  ))}
                </div>
                {templateSwitchError && (
                  <div className="flex items-start gap-2.5 p-3 mb-3 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 rounded-md text-xs border border-red-200 dark:border-red-900/40">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{templateSwitchError}</span>
                  </div>
                )}
                <button
                  type="button"
                  disabled={loading}
                  onClick={handleApplyTemplate}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors border-0 cursor-pointer disabled:opacity-50"
                >
                  {loading ? <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Applying...</> : <><RefreshCw className="w-3.5 h-3.5" /> Apply Template</>}
                </button>
              </div>
            )}

            {/* ─── Split pane ─── */}
            <div className="flex flex-col lg:flex-row gap-5 min-h-[calc(100vh-220px)]">
              <div className={`lg:w-1/2 ${cardCls} flex-col overflow-hidden ${mobileView === "preview" ? "hidden lg:flex" : "flex"}`}>
                <CardHeader
                  kicker="source"
                  title="LaTeX editor"
                  right={
                    <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">
                      / ai generated
                    </span>
                  }
                />
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

              <div className={`lg:w-1/2 ${cardCls} flex-col overflow-hidden ${mobileView === "editor" ? "hidden lg:flex" : "flex"}`}>
                <CardHeader
                  kicker="output"
                  title="PDF preview"
                  right={
                    compiling ? (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                        <Loader2 className="w-3 h-3 animate-spin" /> compiling
                      </span>
                    ) : pdfUrl ? (
                      <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">
                        / ready
                      </span>
                    ) : null
                  }
                />
                <div className="flex-1 relative bg-stone-50/60 dark:bg-stone-950/40">
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
                        <div
                          className={`${cardCls} border-red-200 dark:border-red-900/40 p-6`}
                        >
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 rounded-md bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 flex items-center justify-center shrink-0">
                              <AlertCircle className="w-5 h-5 text-red-500" />
                            </div>
                            <div>
                              <div className={sectionKickerCls}>
                                <span className="h-1 w-1 bg-red-500" />
                                error
                              </div>
                              <h3 className={sectionTitleCls + " mt-1"}>Compilation failed</h3>
                              <p className="text-xs text-stone-500 mt-0.5">Fix the errors below and try again.</p>
                            </div>
                          </div>
                          <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 rounded-md p-4">
                            <pre className="text-xs text-red-700 dark:text-red-400 whitespace-pre-wrap leading-relaxed max-h-40 overflow-auto font-mono">
                              {previewError}
                            </pre>
                          </div>
                          <button
                            type="button"
                            onClick={() => setPreviewError(null)}
                            className="mt-4 w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {!pdfUrl && !previewError && !compiling && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center max-w-xs">
                        <div className="w-16 h-16 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center mb-5 mx-auto relative">
                          <Play className="w-7 h-7 text-stone-400 dark:text-stone-600" />
                          <span className="absolute -top-1 -right-1 h-2 w-2 bg-lime-400" />
                        </div>
                        <div
                          className={sectionKickerCls + " justify-center mb-2"}
                        >
                          <span className="h-1 w-1 bg-lime-400" />
                          idle
                        </div>
                        <h3 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">Ready to compile.</h3>
                        <p className="text-sm text-stone-500 leading-relaxed">
                          Click <span className="font-bold text-stone-900 dark:text-stone-50">Compile</span> to render your AI-generated LaTeX as a PDF.
                        </p>
                      </div>
                    </div>
                  )}
                  {!pdfUrl && compiling && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="relative w-16 h-16 mx-auto mb-5">
                          <div className="absolute inset-0 rounded-md border border-stone-200 dark:border-white/10" />
                          <motion.div
                            className="absolute inset-0 rounded-md border border-lime-400 border-t-transparent"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Code2 className="w-5 h-5 text-lime-500" />
                          </div>
                        </div>
                        <div
                          className={sectionKickerCls + " justify-center mb-2"}
                        >
                          <span className="h-1 w-1 bg-lime-400" />
                          compiling
                        </div>
                        <h3 className={sectionTitleCls}>Rendering LaTeX</h3>
                        <p className="text-xs text-stone-500 mt-1">This usually takes a few seconds.</p>
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