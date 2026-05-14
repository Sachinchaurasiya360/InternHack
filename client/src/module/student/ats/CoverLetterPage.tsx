import CoverLetterHistoryPanel from "./CoverLetterHistoryPanel";
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
  AlignLeft,
  AlertCircle,
  Loader2,
  ArrowRight,
  Zap,
} from "lucide-react";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import { SEO } from "../../../components/SEO";
import { useAuthStore } from "../../../lib/auth.store";
import AtsToolsNav from "./AtsToolsNav";
import { queryKeys } from "../../../lib/query-keys";
import type { CoverLetterTone, UsageStats } from "../../../lib/types";


const TONES: { id: CoverLetterTone; label: string; description: string }[] = [
  {
    id: "professional",
    label: "Professional",
    description: "Formal and confident",
  },
  { id: "friendly", label: "Friendly", description: "Warm and approachable" },
  {
    id: "enthusiastic",
    label: "Enthusiastic",
    description: "Energetic and passionate",
  },
  { id: "technical", label: "Technical", description: "Precise, stack-aware" },
  {
    id: "creative",
    label: "Creative",
    description: "Narrative and expressive",
  },
  { id: "formal", label: "Formal", description: "Executive and measured" },
  { id: "concise", label: "Concise", description: "Short and direct" },
  { id: "startup", label: "Startup", description: "Bold and mission-driven" },
];
const LENGTHS = [
  {
    id: "short",
    label: "Short",
    words: "~150 words",
    description: "Quick intro, best for emails & EasyApply",
  },
  {
    id: "medium",
    label: "Medium",
    words: "~300 words",
    description: "Standard application length",
  },
  {
    id: "long",
    label: "Long",
    words: "~500 words",
    description: "Detailed for academic or executive roles",
  },
];

const GENERATION_STEPS = [
  { icon: FileText, label: "Reading job description" },
  { icon: Search, label: "Analyzing requirements" },
  { icon: Wand2, label: "Crafting your cover letter" },
  { icon: CheckCircle, label: "Finalizing" },
];

const JD_MIN_CHARS = 50;

const STORAGE_KEY = "cover_letter_draft";

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

export default function CoverLetterPage() {
  const queryClient = useQueryClient();
  const [jobDescription, setJobDescription] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [keySkills, setKeySkills] = useState("");
  const [tone, setTone] = useState<CoverLetterTone>("professional");
  const [useProfile, setUseProfile] = useState(false);

const [coverLetter, setCoverLetter] = useState("");
const [originalCoverLetter, setOriginalCoverLetter] = useState("");
const [isModified, setIsModified] = useState(false);

const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState("");
  const [length, setLength] = useState("medium");
const letterRef = useRef<HTMLDivElement>(null);
const [toneManuallySelected, setToneManuallySelected] = useState(false);

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

  // Auto-select tone based on job description keywords
  useEffect(() => {
    if (toneManuallySelected) return;
    if (!jobDescription || jobDescription.length < 30) return;
    const jd = jobDescription.toLowerCase();
    if (
      /\bvp\b|vice president|director|executive|c-suite|cto|ceo|cfo/.test(jd)
    ) {
      setTone("formal");
    } else if (
      /engineer|developer|architect|backend|frontend|fullstack|devops|sre|infrastructure/.test(
        jd,
      )
    ) {
      setTone("technical");
    } else if (
      /designer|creative|brand|content|copywriter|narrative|storytelling/.test(
        jd,
      )
    ) {
      setTone("creative");
    } else if (
      /startup|founder|mission|seed|series\s[a-c]|early.stage/.test(jd)
    ) {
      setTone("startup");
    }
  }, [jobDescription, toneManuallySelected]);
  
 const handleGenerate = async () => {
  if (jobDescription.trim().length < JD_MIN_CHARS) {
    toast.error(`Job description must be at least ${JD_MIN_CHARS} characters`);
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
        length,
        targetWords:
          length=== "short" ? 150 : length === "medium" ? 300 : 500,
        useProfile,
      });
      setCoverLetter(data.coverLetter);
setOriginalCoverLetter(data.coverLetter);
setIsModified(false);

localStorage.setItem(STORAGE_KEY, data.coverLetter);

queryClient.invalidateQueries({
  queryKey: queryKeys.coverLetter.history(),
});

queryClient.invalidateQueries({
  queryKey: queryKeys.ats.usage(),
});
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
  const handleLoadFromHistory = (letter: {
  jobTitle: string;
  companyName: string;
  jobDescription: string;
  content: string;
  tone: string;
  useProfile: boolean;
  keySkills: string;
}) => {
  setJobTitle(letter.jobTitle);
  setCompanyName(letter.companyName);
  setJobDescription(letter.jobDescription);
  setCoverLetter(letter.content);
  setTone(letter.tone as CoverLetterTone);
  setUseProfile(letter.useProfile);
  setKeySkills(letter.keySkills);
  setError("");
};

  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
const downloadMenuRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const savedDraft = localStorage.getItem(STORAGE_KEY);

  if (savedDraft) {
    setCoverLetter(savedDraft);
    setIsModified(true);
  }
}, []);

useEffect(() => {
  if (coverLetter.trim()) {
    localStorage.setItem(STORAGE_KEY, coverLetter);
  }
}, [coverLetter]);

useEffect(() => {
  if (!showDownloadMenu) return;

  const handleClick = (e: MouseEvent) => {
    if (
      downloadMenuRef.current &&
      !downloadMenuRef.current.contains(e.target as Node)
    ) {
      setShowDownloadMenu(false);
    }
  };

  document.addEventListener("mousedown", handleClick);

  return () => {
    document.removeEventListener("mousedown", handleClick);
  };
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
        }),
    );

    const doc = new Document({
      sections: [{ children: paragraphs }],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "cover-letter.docx");
  };

  return (
    <div className="relative pb-16">
      <SEO
        title="Cover Letter Builder - InternHack"
        description="Generate AI-powered cover letters tailored to any job"
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
            resume / cover letter
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Write your cover letter.
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-md">
            Paste a job description, pick a tone, and get a tailored letter you
            can copy, edit, or export as PDF or DOCX.
          </p>
        </div>
        {clUsage && (
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              daily usage
            </span>
            <span className="text-sm font-bold tabular-nums text-stone-900 dark:text-stone-50">
              {clUsage.used}
              <span className="text-stone-400 dark:text-stone-600 font-normal">
                {" "}
                / {clUsage.limit}
              </span>
            </span>
          </div>
        )}
      </motion.div>

      <AtsToolsNav />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        {/* ─── Left column: form ─── */}
        <div className="lg:col-span-2 space-y-6">
          <div className={cardCls}>
            <CardHeader kicker="step 01" title="Job details" />
            <div className="p-5 space-y-4">
              <div>
                <label className={labelCls}>
                  <AlignLeft className="w-3 h-3" /> job description{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  className={`${inputCls} min-h-35 resize-y`}
                  placeholder="Paste the full job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
                <div className="mt-1.5 flex flex-col gap-1">
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest tabular-nums">
                    <span
                      className={
                        jobDescription.length > 0 &&
                        jobDescription.length < JD_MIN_CHARS
                          ? "text-amber-600 dark:text-amber-400"
                          : "text-emerald-600 dark:text-emerald-400"
                      }
                    >
                      {jobDescription.length === 0
                        ? `${JD_MIN_CHARS} characters minimum`
                        : jobDescription.length < JD_MIN_CHARS
                          ? `${JD_MIN_CHARS - jobDescription.length} more characters needed`
                          : "Ready to generate"}
                    </span>
                    <span className="text-stone-500">
                      {jobDescription.length} / {JD_MIN_CHARS} min
                    </span>
                  </div>
                  {jobDescription.length >= JD_MIN_CHARS &&
                    jobDescription.length < 200 && (
                      <p className="text-xs text-stone-500 mt-0.5 normal-case tracking-normal font-sans">
                        Longer job descriptions produce better-tailored cover
                        letters. Aim for 200+ chars.
                      </p>
                    )}
                  {jobDescription.length > 5000 && (
                    <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-0.5 normal-case tracking-normal font-sans">
                      Very long descriptions may be truncated. Consider keeping
                      it under 5000 chars.
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>
                    <Briefcase className="w-3 h-3" /> job title
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
                    <Building2 className="w-3 h-3" /> company
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
                  <Code2 className="w-3 h-3" /> your key skills & experience
                </label>
                <textarea
                  className={`${inputCls} min-h-20 resize-y`}
                  placeholder="3 years of React/Node.js experience, built scalable microservices, led a team of 4..."
                  value={keySkills}
                  onChange={(e) => setKeySkills(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* ─── Tone card ─── */}
          <div className={cardCls}>
            <CardHeader kicker="step 02" title="Tone" />
            <div className="p-5">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                {TONES.map((t, i) => {
                  const isActive = tone === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        setTone(t.id);
                        setToneManuallySelected(true);
                      }}
                      className={`group relative flex flex-col gap-1.5 p-3.5 text-left transition-colors border-0 cursor-pointer ${
                        isActive
                          ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                          : "bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 hover:bg-stone-50 dark:hover:bg-stone-950/60"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono uppercase tracking-widest ${
                          isActive ? "text-lime-400" : "text-stone-500"
                        }`}
                      >
                        / {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-bold">{t.label}</span>
                      <span
                        className={`text-[11px] ${
                          isActive
                            ? "text-stone-300 dark:text-stone-600"
                            : "text-stone-500"
                        }`}
                      >
                        {t.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ─── Length card ─── */}
          <div className={cardCls}>
  <CardHeader kicker="step 03" title="Length" />
  <div className="p-5">
    <div className="grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10">
      {LENGTHS.map((l, i) => {
        const isActive = length === l.id;
        return (
          <button
            key={l.id}
            type="button"
            onClick={() => setLength(l.id)}
            className={`group relative flex flex-col gap-1.5 p-3.5 text-left transition-colors border-0 cursor-pointer ${
              isActive
                ? "bg-stone-900 text-stone-50 dark:text-stone-50"
                : "bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 hover:bg-stone-50 dark:hover:bg-stone-800"
            }`}
          >
            <span
              className={`text-[10px] font-mono uppercase tracking-widest ${
                isActive ? "text-lime-400" : "text-stone-500"
              }`}
            >
              / {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-bold">{l.label}</span>
            <span
              className={`text-[11px] ${
                isActive ? "text-stone-300 dark:text-stone-600" : "text-stone-500"
              }`}
            >
              {l.words}
            </span>
          </button>
        );
      })}
    </div>
  </div>
</div>

          {/* ─── Profile toggle ─── */}
          <div className={cardCls}>
            <CardHeader
              kicker="step 04"
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
                onClick={() => {
                  if (!hasProfileData) {
                    toast.error(
                      "Complete your profile first to use this feature",
                    );
                    return;
                  }
                  setUseProfile(!useProfile);
                }}
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
                      ? "include skills, projects, achievements"
                      : "complete profile to enable"}
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
                      useProfile && hasProfileData ? "left-4.5" : "left-0.5"
                    }`}
                  />
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
                              {user.projects.map((p) => p.title).join(", ")}
                            </p>
                          </div>
                        )}
                        {user?.achievements && user.achievements.length > 0 && (
                          <div className="flex items-start gap-2">
                            <Trophy className="w-3 h-3 text-stone-500 mt-0.5 shrink-0" />
                            <p className="text-[11px] text-stone-600 dark:text-stone-400">
                              {user.achievements.map((a) => a.title).join(", ")}
                            </p>
                          </div>
                        )}
                      </div>
                      <Link
                        to="/student/profile"
                        className="inline-flex items-center gap-1 mt-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors no-underline"
                      >
                        edit profile <ChevronRight className="w-2.5 h-2.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <CoverLetterHistoryPanel onLoad={handleLoadFromHistory} />

          

          <button
            type="button"
            onClick={handleGenerate}
            disabled={
              loading ||
              jobDescription.trim().length < JD_MIN_CHARS ||
              limitReached
            }
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
                <Wand2 className="w-4 h-4" /> Generate cover letter
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

        {/* ─── Right column: output ─── */}
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
                  title="Drafting your letter"
                  right={
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      ~10-15s
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
                          className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                            isActive
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
                                : isActive
                                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                                  : "bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-stone-400"
                            }`}
                          >
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
                          <span
                            className={`text-sm font-medium flex-1 ${
                              isDone
                                ? "text-stone-600 dark:text-stone-400"
                                : isActive
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

            {!loading && coverLetter && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className={`${cardCls} overflow-hidden`}
              >
                <CardHeader
                  kicker="result"
                  title="Cover letter ready"
                  right={
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={handleGenerate}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[11px] font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" /> Regenerate
                      </button>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[11px] font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <Copy className="w-3 h-3" /> Copy
                      </button>
                      <div className="relative" ref={downloadMenuRef}>
                        <button
                          type="button"
                          onClick={() => setShowDownloadMenu((v) => !v)}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[11px] font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors border-0 cursor-pointer"
                        >
                          <Download className="w-3 h-3" /> Download
                        </button>

                        <button
  type="button"
  onClick={() => {
    setCoverLetter(originalCoverLetter);
    setIsModified(false);
    localStorage.setItem(STORAGE_KEY, originalCoverLetter);
  }}
  disabled={!isModified}
  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[11px] font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
>
  Reset
</button>

                        <AnimatePresence>
                          {showDownloadMenu && (
                            <motion.div
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 4 }}
                              transition={{ duration: 0.15 }}
                              className="absolute right-0 top-full mt-1 w-32 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md shadow-lg overflow-hidden z-20"
                            >
                              <button
                                type="button"
                                onClick={handleDownloadPdf}
                                className="w-full flex items-center gap-2 px-3 py-2.5 text-[11px] font-bold text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-950/60 transition-colors border-0 bg-transparent cursor-pointer"
                              >
                                <FileText className="w-3.5 h-3.5 text-stone-500" />{" "}
                                PDF
                              </button>
                              <button
                                type="button"
                                onClick={handleDownloadDocx}
                                className="w-full flex items-center gap-2 px-3 py-2.5 text-[11px] font-bold text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-950/60 transition-colors border-t border-stone-200 dark:border-white/10 bg-transparent cursor-pointer"
                              >
                                <FileText className="w-3.5 h-3.5 text-stone-500" />{" "}
                                DOCX
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  }
                />
                <div className="p-6">
                  <textarea
                    className="w-full min-h-100 text-sm text-stone-700 dark:text-stone-300 leading-relaxed border-none outline-none resize-y bg-transparent font-serif"
                    value={coverLetter}
                   onChange={(e) => {
  const updatedValue = e.target.value;

  setCoverLetter(updatedValue);
  setIsModified(updatedValue !== originalCoverLetter);
}}
                  />
                </div>
              </motion.div>
            )}

            {!loading && !coverLetter && !error && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${cardCls} min-h-125 flex flex-col items-center justify-center text-center p-10`}
              >
                <div className="max-w-xs">
                  <div className="w-16 h-16 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center mb-5 mx-auto relative">
                    <Mail className="w-7 h-7 text-stone-400 dark:text-stone-600" />
                    <span className="absolute -top-1 -right-1 h-2 w-2 bg-lime-400" />
                  </div>
                  <div className={sectionKickerCls + " justify-center mb-2"}>
                    <span className="h-1 w-1 bg-lime-400" />
                    letter panel
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
                    Your letter appears here.
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    Paste a job description, pick a tone, and click{" "}
                    <span className="font-bold text-stone-900 dark:text-stone-50">
                      Generate cover letter
                    </span>
                    .
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                    {[
                      {
                        label: "ai powered",
                        icon: <Wand2 className="w-3 h-3" />,
                      },
                      {
                        label: "8 tones",
                        icon: <MessageSquare className="w-3 h-3" />,
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

            {!loading && error && !coverLetter && (
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
    </div>
  );
}
