import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  User, Mail, Phone, Building2, Briefcase, FileText, Save, Loader2,
  CheckCircle, Upload, Trash2, Camera, ExternalLink, MapPin, GraduationCap,
  Linkedin, Github, Globe, X, Plus, AlignLeft, Calendar, Crown,
  ChevronDown, ShieldCheck, Trophy, Pencil, Search as SearchIcon, Copy, Check,
} from "lucide-react";
import { Link } from "react-router";
import type { VerifiedSkill, ProjectItem, AchievementItem } from "../../../lib/types";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { LoadingScreen } from "../../../components/LoadingScreen";
import toast from "@/components/ui/toast";
import ImageCropModal from "../../../components/ImageCropModal";
import GitHubImportModal from "./GitHubImportModal";
import { BadgesSection } from "../badges/BadgesSection";
import ContributionGraphs from "../../../components/ContributionGraphs";

interface ProfileData {
  name: string;
  email: string;
  contactNo: string;
  company: string;
  designation: string;
  resumes: string[];
  profilePic: string;
  coverImage: string;
  bio: string;
  college: string;
  graduationYear: number | null;
  skills: string[];
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  portfolioUrl: string;
  leetcodeUrl: string;
  jobStatus: string | null;
  isProfilePublic: boolean;
  projects: ProjectItem[];
  achievements: AchievementItem[];
}

const JOB_STATUS_OPTIONS = [
  { value: "", label: "Not specified" },
  { value: "NO_OFFER", label: "No offer" },
  { value: "LOOKING", label: "Looking for job" },
  { value: "OPEN_TO_OFFER", label: "Open to offer" },
] as const;

const VERIFIABLE_SKILLS = [
  "JavaScript", "Python", "React", "Node.js", "SQL", "Java", "TypeScript",
  "HTML/CSS", "Git", "Data Structures", "Express.js", "MongoDB", "Docker",
  "Redis", "WebSocket", "GraphQL", "Next.js", "AWS", "REST API", "Linux",
  "C++", "Go", "Rust", "Kubernetes", "System Design", "Cybersecurity",
  "Machine Learning", "DevOps", "Tailwind CSS", "Vue.js",
];

interface CollegeSuggestion {
  name: string;
  country: string;
  stateProvince: string | null;
}

function getFileNameFromUrl(url: string): string {
  try {
    const pathname = new URL(url).pathname;
    const parts = pathname.split("/");
    const full = decodeURIComponent(parts[parts.length - 1] ?? "resume.pdf");
    const match = full.match(/^(.+)-\d+-\d+(\.\w+)$/);
    return match ? `${match[1]}${match[2]}` : full;
  } catch {
    return "resume.pdf";
  }
}

const MAX_RESUMES = 2;

const inputClass =
  "w-full px-4 py-2.5 border border-stone-300 dark:border-white/10 rounded-md text-sm focus:outline-none focus:border-lime-400 transition-colors bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600";
const inputErrorClass =
  "w-full px-4 py-2.5 border border-red-400 dark:border-red-600 rounded-md text-sm focus:outline-none focus:border-red-500 transition-colors bg-red-50/40 dark:bg-red-900/10 text-stone-900 dark:text-stone-50";
const labelClass =
  "flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-2";
const sectionHeaderBtn =
  "w-full flex items-center justify-between px-5 py-4 text-left bg-transparent border-0 cursor-pointer hover:bg-stone-100/60 dark:hover:bg-stone-900/60 transition-colors";
const sectionTitleCls =
  "inline-flex items-center gap-2.5 text-sm font-bold text-stone-900 dark:text-stone-50";
const sectionKickerCls =
  "inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500";
const cardCls =
  "bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden";

function SectionHeader({
  kicker,
  title,
  open,
  onToggle,
  meta,
  right,
}: {
  kicker: string;
  title: string;
  open: boolean;
  onToggle: () => void;
  meta?: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-center border-b border-stone-200 dark:border-white/10">
      <button type="button" onClick={onToggle} className={`${sectionHeaderBtn} flex-1`}>
        <div className="flex flex-col gap-1 min-w-0">
          <span className={sectionKickerCls}>
            <span className="h-1 w-1 bg-lime-400" />
            {kicker}
          </span>
          <span className={sectionTitleCls}>
            {title}
            {meta && (
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 font-medium">
                {meta}
              </span>
            )}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      {right && <div className="pr-4 shrink-0">{right}</div>}
    </div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function StudentProfilePage() {
  const { user, setUser } = useAuthStore();
  const [form, setForm] = useState<ProfileData>({
    name: "", email: "", contactNo: "", company: "", designation: "",
    resumes: [], profilePic: "", coverImage: "", bio: "", college: "",
    graduationYear: null, skills: [], location: "",
    linkedinUrl: "", githubUrl: "", portfolioUrl: "", leetcodeUrl: "",
    jobStatus: null, isProfilePublic: false, projects: [], achievements: [],
  });
  const [memberSince, setMemberSince] = useState<string | null>(null);
  const [skillInput, setSkillInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingPic, setUploadingPic] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingResume, setUploadingResume] = useState(false);
  const [deletingResume, setDeletingResume] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    basic: true, education: true, skills: true, jobPrefs: false, projects: true, achievements: true, links: false, resumes: true,
  });
  const [jobPrefRoles, setJobPrefRoles] = useState("");
  const [jobPrefSkills, setJobPrefSkills] = useState("");
  const [jobPrefLocations, setJobPrefLocations] = useState("");
  const [jobPrefSalary, setJobPrefSalary] = useState("");
  const [jobPrefWorkMode, setJobPrefWorkMode] = useState<string[]>([]);
  const [jobPrefExpLevel, setJobPrefExpLevel] = useState<string[]>([]);
  const [jobPrefDomains, setJobPrefDomains] = useState<string[]>([]);
  const [savingJobPrefs, setSavingJobPrefs] = useState(false);
  const [cropSrc, setCropSrc] = useState<string | null>(null);
  const [cropType, setCropType] = useState<"profile" | "cover" | null>(null);
  const [showGitHubImport, setShowGitHubImport] = useState(false);
  const picInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const resumeInputRef = useRef<HTMLInputElement>(null);

  const [verifiedSkills, setVerifiedSkills] = useState<VerifiedSkill[]>([]);
  const verifiedMap = new Map(verifiedSkills.map((v) => [v.skillName.toLowerCase(), v]));

  const [collegeSuggestions, setCollegeSuggestions] = useState<CollegeSuggestion[]>([]);
  const [collegeLoading, setCollegeLoading] = useState(false);
  const [showCollegeSuggestions, setShowCollegeSuggestions] = useState(false);
  const collegeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const collegeInputRef = useRef<HTMLInputElement>(null);
  const collegeDropdownRef = useRef<HTMLDivElement>(null);

  const [showSkillSuggestions, setShowSkillSuggestions] = useState(false);
  const skillInputRef = useRef<HTMLInputElement>(null);
  const skillDropdownRef = useRef<HTMLDivElement>(null);

  const filteredSkillSuggestions = skillInput.trim().length > 0
    ? VERIFIABLE_SKILLS.filter((s) => {
        const q = skillInput.trim().toLowerCase();
        const alreadyAdded = form.skills.some((fs) => fs.toLowerCase() === s.toLowerCase());
        return !alreadyAdded && s.toLowerCase().includes(q);
      })
    : [];

  useEffect(() => {
    api.get("/auth/me")
      .then((res) => {
        const u = res.data.user;
        setForm({
          name: u.name ?? "", email: u.email ?? "", contactNo: u.contactNo ?? "",
          company: u.company ?? "", designation: u.designation ?? "",
          resumes: u.resumes ?? [], profilePic: u.profilePic ?? "",
          coverImage: u.coverImage ?? "", bio: u.bio ?? "", college: u.college ?? "",
          graduationYear: u.graduationYear ?? null, skills: u.skills ?? [],
          location: u.location ?? "", linkedinUrl: u.linkedinUrl ?? "",
          githubUrl: u.githubUrl ?? "", portfolioUrl: u.portfolioUrl ?? "",
          leetcodeUrl: u.leetcodeUrl ?? "",
          jobStatus: u.jobStatus ?? null, isProfilePublic: u.isProfilePublic ?? false,
          projects: u.projects ?? [], achievements: u.achievements ?? [],
        });
        setMemberSince(u.createdAt ?? null);
      })
      .catch(() => toast.error("Failed to load profile"))
      .finally(() => setLoading(false));

    api.get("/skill-tests/my-verified")
      .then((res) => setVerifiedSkills(res.data.verified ?? []))
      .catch((err) => console.error("Failed to fetch verified skills:", err));

    api.get("/job-feed/preferences")
      .then((res) => {
        if (res.data) {
          const p = res.data;
          setJobPrefRoles(p.desiredRoles?.join(", ") || "");
          setJobPrefSkills(p.desiredSkills?.join(", ") || "");
          setJobPrefLocations(p.desiredLocations?.join(", ") || "");
          setJobPrefSalary(p.minSalary ? String(p.minSalary / 100000) : "");
          setJobPrefWorkMode(p.workMode || []);
          setJobPrefExpLevel(p.experienceLevel || []);
          setJobPrefDomains(p.domains || []);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        collegeInputRef.current && !collegeInputRef.current.contains(e.target as Node) &&
        collegeDropdownRef.current && !collegeDropdownRef.current.contains(e.target as Node)
      ) {
        setShowCollegeSuggestions(false);
      }
      if (
        skillInputRef.current && !skillInputRef.current.contains(e.target as Node) &&
        skillDropdownRef.current && !skillDropdownRef.current.contains(e.target as Node)
      ) {
        setShowSkillSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchColleges = useCallback((query: string) => {
    if (collegeTimerRef.current) clearTimeout(collegeTimerRef.current);
    if (query.length < 2) { setCollegeSuggestions([]); setShowCollegeSuggestions(false); return; }
    collegeTimerRef.current = setTimeout(async () => {
      setCollegeLoading(true);
      try {
        const res = await api.get<Array<{ name: string; country: string; "state-province": string | null }>>(`/universities/search`, { params: { name: query } });
        const data = res.data;
        const seen = new Set<string>();
        const suggestions: CollegeSuggestion[] = [];
        for (const u of data) {
          const key = u.name.toLowerCase();
          if (seen.has(key)) continue;
          seen.add(key);
          suggestions.push({ name: u.name, country: u.country, stateProvince: u["state-province"] });
          if (suggestions.length >= 8) break;
        }
        setCollegeSuggestions(suggestions);
        setShowCollegeSuggestions(true);
      } catch {
        setCollegeSuggestions([]);
      } finally {
        setCollegeLoading(false);
      }
    }, 300);
  }, []);

  useEffect(() => {
    return () => {
      if (collegeTimerRef.current) clearTimeout(collegeTimerRef.current);
    };
  }, []);

  const handleChange = (field: keyof ProfileData, value: string | number | null) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) setFieldErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
  };

  const handleCollegeChange = (value: string) => {
    handleChange("college", value);
    searchColleges(value);
  };

  const selectCollege = (name: string) => {
    handleChange("college", name);
    setShowCollegeSuggestions(false);
    setCollegeSuggestions([]);
  };

  const syncUser = (updated: ProfileData) => {
    setUser({
      ...user!, name: updated.name, contactNo: updated.contactNo,
      company: updated.company, designation: updated.designation,
      resumes: updated.resumes, profilePic: updated.profilePic, coverImage: updated.coverImage,
      bio: updated.bio, college: updated.college,
      graduationYear: updated.graduationYear ?? undefined, skills: updated.skills,
      location: updated.location, linkedinUrl: updated.linkedinUrl,
      githubUrl: updated.githubUrl, portfolioUrl: updated.portfolioUrl,
      leetcodeUrl: updated.leetcodeUrl,
      jobStatus: updated.jobStatus as "NO_OFFER" | "LOOKING" | "OPEN_TO_OFFER" | null,
      isProfilePublic: updated.isProfilePublic,
      projects: updated.projects, achievements: updated.achievements,
    });
  };

  const handleAddSkill = (skillName?: string) => {
    const skill = (skillName ?? skillInput).trim();
    if (!skill) return;
    if (form.skills.length >= 20) { toast.error("Maximum 20 skills"); return; }
    if (form.skills.some((s) => s.toLowerCase() === skill.toLowerCase())) { toast.error("Skill already added"); return; }
    setForm((prev) => ({ ...prev, skills: [...prev.skills, skill] }));
    setSkillInput("");
    setShowSkillSuggestions(false);
  };

  const handleRemoveSkill = (index: number) => {
    setForm((prev) => ({ ...prev, skills: prev.skills.filter((_, i) => i !== index) }));
  };

  const handleSave = async () => {
    if (!form.name.trim() || form.name.trim().length < 2) {
      toast.error("Name must be at least 2 characters"); return;
    }
    setFieldErrors({});
    setSaving(true);
    try {
      const res = await api.put("/auth/me", {
        name: form.name.trim(), contactNo: form.contactNo.trim(),
        company: form.company.trim(), designation: form.designation.trim(),
        bio: form.bio.trim(), college: form.college.trim(),
        graduationYear: form.graduationYear || null, skills: form.skills,
        location: form.location.trim(), linkedinUrl: form.linkedinUrl.trim(),
        githubUrl: form.githubUrl.trim(), portfolioUrl: form.portfolioUrl.trim(),
        leetcodeUrl: form.leetcodeUrl.trim(),
        jobStatus: form.jobStatus || null, isProfilePublic: form.isProfilePublic,
        projects: form.projects, achievements: form.achievements,
      });
      const u = res.data.user;
      const updated: ProfileData = {
        ...form, name: u.name, contactNo: u.contactNo ?? "",
        company: u.company ?? "", designation: u.designation ?? "",
        bio: u.bio ?? "", college: u.college ?? "",
        graduationYear: u.graduationYear ?? null, skills: u.skills ?? [],
        location: u.location ?? "", linkedinUrl: u.linkedinUrl ?? "",
        githubUrl: u.githubUrl ?? "", portfolioUrl: u.portfolioUrl ?? "",
        leetcodeUrl: u.leetcodeUrl ?? "",
        jobStatus: u.jobStatus ?? null, isProfilePublic: u.isProfilePublic ?? false,
        projects: u.projects ?? [], achievements: u.achievements ?? [],
      };
      setForm(updated);
      syncUser(updated);
      toast.success("Profile updated!");
    } catch (err: unknown) {
      const errData = (err as { response?: { data?: { errors?: { fieldErrors?: Record<string, string[]> } } } })?.response?.data;
      if (errData?.errors?.fieldErrors) {
        const fe = errData.errors.fieldErrors;
        setFieldErrors(fe);
        const sectionMap: Record<string, string> = {
          name: "basic", contactNo: "basic", bio: "basic", location: "basic", jobStatus: "basic",
          college: "education", graduationYear: "education", company: "education", designation: "education",
          skills: "skills",
          linkedinUrl: "links", githubUrl: "links", portfolioUrl: "links",
          projects: "projects", achievements: "achievements",
        };
        setOpenSections((prev) => {
          const next = { ...prev };
          for (const key of Object.keys(fe)) {
            const sec = sectionMap[key];
            if (sec) next[sec] = true;
          }
          return next;
        });
        const count = Object.values(fe).flat().length;
        toast.error(`${count} validation error${count > 1 ? "s" : ""} - check highlighted fields`);
      } else {
        toast.error("Failed to update profile");
      }
    } finally {
      setSaving(false);
    }
  };

  const MAX_IMAGE_SIZE = 2 * 1024 * 1024;

  const handleProfilePicSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // 1. Size Check
    if (file.size > MAX_IMAGE_SIZE) { toast.error("Image must be under 2 MB"); if (picInputRef.current) picInputRef.current.value = ""; return; }
    
    // 2. Strict Format Check
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.type)) { toast.error("Only JPG and PNG formats are allowed"); if (picInputRef.current) picInputRef.current.value = ""; return; }

    const reader = new FileReader();
    reader.onload = () => {
      setCropSrc(reader.result as string);
      setCropType("profile");
    };
    reader.readAsDataURL(file);
    if (picInputRef.current) picInputRef.current.value = "";
  };

  const handleCoverImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // 1. Size Check
    if (file.size > MAX_IMAGE_SIZE) { toast.error("Image must be under 2 MB"); if (coverInputRef.current) coverInputRef.current.value = ""; return; }
    
    // 2. Strict Format Check
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.type)) { toast.error("Only JPG and PNG formats are allowed"); if (coverInputRef.current) coverInputRef.current.value = ""; return; }

    const reader = new FileReader();
    reader.onload = () => {
      setCropSrc(reader.result as string);
      setCropType("cover");
    };
    reader.readAsDataURL(file);
    if (coverInputRef.current) coverInputRef.current.value = "";
  };

  const handleCropComplete = async (blob: Blob) => {
    const isProfile = cropType === "profile";
    const setUploading = isProfile ? setUploadingPic : setUploadingCover;
    const endpoint = isProfile ? "/upload/profile-pic" : "/upload/cover-image";
    const field = isProfile ? "profilePic" : "coverImage";

    setCropSrc(null);
    setCropType(null);
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", blob, "cropped.jpg");
      const res = await api.post(endpoint, fd, { headers: { "Content-Type": "multipart/form-data" } });
      
      // Extract the updated user or look for a direct secure_url/filePath returned by your API
      const u = res.data.user || res.data;
      
      // Get the image path. If the backend returns a relative path, we map it to the backend server URL
      let imagePath = u[field] ?? "";
      if (imagePath && !imagePath.startsWith("http")) {
        // Fallback for local backend uploads: prepend server address if not an external cloud URL (like Cloudinary)
        imagePath = `${api.defaults.baseURL?.replace("/api", "") || "http://localhost:3000"}/${imagePath.replace(/^\//, "")}`;
      }

      setForm((prev) => ({ ...prev, [field]: imagePath }));
      syncUser({ ...form, [field]: imagePath });
      
      toast.success(isProfile ? "Profile picture updated!" : "Cover image updated!");
    } catch (error) {
      console.error("Upload rendering error:", error);
      toast.error(isProfile ? "Failed to upload profile picture" : "Failed to upload cover image");
    } finally {
      setUploading(false);
    }
  };

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingResume(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await api.post("/upload/profile-resume", fd, { headers: { "Content-Type": "multipart/form-data" } });
      const u = res.data.user;
      setForm((prev) => ({ ...prev, resumes: u.resumes ?? [] }));
      syncUser({ ...form, resumes: u.resumes ?? [] });
      toast.success("Resume uploaded!");
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || "Failed to upload resume";
      toast.error(msg);
    } finally {
      setUploadingResume(false);
      if (resumeInputRef.current) resumeInputRef.current.value = "";
    }
  };

  const handleResumeDelete = async (url: string) => {
    setDeletingResume(url);
    try {
      const res = await api.delete("/upload/profile-resume", { data: { url } });
      const u = res.data.user;
      setForm((prev) => ({ ...prev, resumes: u.resumes ?? [] }));
      syncUser({ ...form, resumes: u.resumes ?? [] });
      toast.success("Resume deleted");
    } catch {
      toast.error("Failed to delete resume");
    } finally {
      setDeletingResume(null);
    }
  };

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const FieldError = ({ field }: { field: string }) => {
    const errs = fieldErrors[field];
    if (!errs?.length) return null;
    return <p className="text-xs text-red-500 dark:text-red-400 mt-1.5 font-mono">{errs[0]}</p>;
  };

  const [profileUrlCopied, setProfileUrlCopied] = useState(false);

  const handleCopyProfileUrl = async () => {
    const url = `${window.location.origin}/student/profile/public/${user?.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setProfileUrlCopied(true);
      toast.success("Profile URL copied!");
      setTimeout(() => setProfileUrlCopied(false), 2000);
    } catch {
      toast.error("Failed to copy URL");
    }
  };

  const displayDate = memberSince || user?.createdAt;
  const isPremium = user?.subscriptionStatus === "ACTIVE" && user.subscriptionPlan !== "FREE";

  const profileCompletion = (() => {
    const fields = [form.name, form.bio, form.contactNo, form.location, form.college, form.company, form.linkedinUrl, form.githubUrl];
    const filled = fields.filter(Boolean).length;
    const hasSkills = form.skills.length > 0 ? 1 : 0;
    const hasResume = form.resumes.length > 0 ? 1 : 0;
    return Math.round(((filled + hasSkills + hasResume) / (fields.length + 2)) * 100);
  })();

  if (loading) return <LoadingScreen />;

  return (
    <div className="relative pb-16">
      <SEO title="My Profile" description="Update your InternHack student profile details." noIndex />

      {/* Editorial header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
      >
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            account / profile
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            My profile.
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-md">
            A complete profile helps recruiters surface you in talent search and improves AI job matching.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            strength / {profileCompletion}%
          </span>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-lime-400 text-stone-950 rounded-md text-sm font-bold hover:bg-lime-300 transition-colors border-0 cursor-pointer disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? "Saving..." : "Save changes"}
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ─── Left: Identity sidebar ─── */}
        <aside className="lg:col-span-4 xl:col-span-3 space-y-4 lg:sticky lg:top-24 lg:self-start">
          {/* Identity card */}
          <motion.div custom={0} variants={fadeInUp} initial="hidden" animate="visible" className={cardCls}>
            {/* Cover band */}
            <div className="h-24 bg-stone-900 dark:bg-stone-950 relative group/banner overflow-hidden">
              {form.coverImage ? (
                <img src={form.coverImage} alt="Cover" className="w-full h-full object-cover" />
              ) : (
                <>
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none opacity-[0.1]"
                    style={{
                      backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "18px 18px",
                    }}
                  />
                  <span className="absolute top-3 right-3 h-1.5 w-1.5 bg-lime-400" />
                </>
              )}
              <button
                type="button"
                onClick={() => coverInputRef.current?.click()}
                disabled={uploadingCover}
                className="absolute inset-0 bg-stone-950/50 hover:bg-stone-950/60 text-stone-50 flex items-center justify-center opacity-0 group-hover/banner:opacity-100 transition-opacity border-0 cursor-pointer"
              >
                {uploadingCover ? <Loader2 className="w-5 h-5 animate-spin" /> : <Camera className="w-5 h-5" />}
              </button>
              <input ref={coverInputRef} type="file" accept=".jpg, .jpeg, .png" onChange={handleCoverImageSelect} className="hidden" />
            </div>

            <div className="px-5 pb-5 -mt-10 relative">
              {/* Avatar */}
              <div className="relative group mb-3 w-20">
                <div className="w-20 h-20 rounded-md bg-white dark:bg-stone-900 border-2 border-white dark:border-stone-900 shadow overflow-hidden">
                  {form.profilePic ? (
                    <img src={form.profilePic} alt={form.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                  ) : (
                    <div className="w-full h-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                      <User className="w-8 h-8 text-stone-400" />
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => picInputRef.current?.click()}
                  disabled={uploadingPic}
                  className="absolute inset-0 w-20 h-20 bg-stone-950/60 text-stone-50 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border-0 cursor-pointer"
                >
                  {uploadingPic ? <Loader2 className="w-4 h-4 animate-spin" /> : <Camera className="w-4 h-4" />}
                </button>
                <input ref={picInputRef} type="file" accept=".jpg, .jpeg, .png" onChange={handleProfilePicSelect} className="hidden" />
              </div>

              <h2 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate leading-tight">
                {form.name || "Your name"}
              </h2>
              <p className="text-xs font-mono text-stone-500 truncate mt-0.5">{form.email}</p>

              {(form.designation || form.company) && (
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-2 truncate">
                  {form.designation}
                  {form.designation && form.company ? " at " : ""}
                  <span className="text-stone-900 dark:text-stone-50 font-medium">{form.company}</span>
                </p>
              )}

              {/* Meta rows */}
              {(form.college || form.location) && (
                <div className="mt-3 space-y-1.5 text-xs text-stone-600 dark:text-stone-400">
                  {form.college && (
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 shrink-0 text-stone-500" />
                      <span className="truncate">{form.college}</span>
                    </div>
                  )}
                  {form.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-stone-500" />
                      <span className="truncate">{form.location}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Social */}
              {(form.linkedinUrl || form.githubUrl || form.portfolioUrl) && (
                <div className="flex gap-1 mt-4 pt-4 border-t border-stone-200 dark:border-white/10">
                  {form.linkedinUrl && (
                    <a href={form.linkedinUrl} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 rounded-md border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-400 dark:hover:border-white/30 transition-colors">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {form.githubUrl && (
                    <a href={form.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 rounded-md border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-400 dark:hover:border-white/30 transition-colors">
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {form.portfolioUrl && (
                    <a href={form.portfolioUrl} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 rounded-md border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-400 dark:hover:border-white/30 transition-colors">
                      <Globe className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}

              {/* Share Profile URL */}
              {form.isProfilePublic && (
                <div className="flex items-center justify-between gap-3 mt-4 pt-4 border-t border-stone-200 dark:border-white/10">
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      shareable profile
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 leading-snug truncate">
                      {`${window.location.origin}/student/profile/public/${user?.id}`}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyProfileUrl}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[11px] font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer shrink-0"
                  >
                    {profileUrlCopied ? <Check className="w-3 h-3 text-lime-500" /> : <Copy className="w-3 h-3" />}
                    {profileUrlCopied ? "Copied!" : "Copy URL"}
                  </button>
                </div>
              )}
              {/* Visibility */}
              <div className="flex items-start justify-between gap-3 mt-4 pt-4 border-t border-stone-200 dark:border-white/10">
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    recruiter visibility
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 leading-snug">
                    {form.isProfilePublic ? "Visible in talent search" : "Hidden from recruiters"}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Toggle recruiter visibility"
                  onClick={() => setForm((prev) => ({ ...prev, isProfilePublic: !prev.isProfilePublic }))}
                  className={`relative w-10 h-5 rounded-full transition-colors shrink-0 border-0 cursor-pointer ${
                    form.isProfilePublic ? "bg-lime-400" : "bg-stone-300 dark:bg-stone-700"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white dark:bg-stone-950 rounded-full transition-transform ${
                      form.isProfilePublic ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Strength + meta */}
          <motion.div custom={1} variants={fadeInUp} initial="hidden" animate="visible" className={`${cardCls} p-5`}>
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                <span className="h-1 w-1 bg-lime-400" />
                profile strength
              </span>
              <span className="text-sm font-bold text-stone-900 dark:text-stone-50 tabular-nums">
                {profileCompletion}%
              </span>
            </div>
            <div className="w-full h-1 bg-stone-200 dark:bg-white/10 overflow-hidden rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${profileCompletion}%` }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                className="h-full bg-lime-400"
              />
            </div>
            <p className="text-xs text-stone-500 mt-3 leading-snug">
              {profileCompletion >= 80
                ? "Looking great. Your profile is well filled."
                : profileCompletion >= 50
                ? "Good start. Add more details to stand out."
                : "Fill your profile to attract recruiters."}
            </p>

            <div className="mt-5 pt-5 border-t border-stone-200 dark:border-white/10 space-y-2.5">
              <MetaRow
                icon={<Calendar className="w-3.5 h-3.5" />}
                label="joined"
                value={
                  displayDate
                    ? new Date(displayDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })
                    : "---"
                }
              />
              <MetaRow
                icon={<FileText className="w-3.5 h-3.5" />}
                label="resumes"
                value={`${form.resumes.length}/${MAX_RESUMES}`}
              />
              <MetaRow
                icon={<Crown className={`w-3.5 h-3.5 ${isPremium ? "text-lime-500" : ""}`} />}
                label="plan"
                value={
                  isPremium ? (
                    <span className="text-lime-600 dark:text-lime-400 font-bold">Pro</span>
                  ) : (
                    <span>Free</span>
                  )
                }
              />
            </div>
          </motion.div>

          {/* Badges */}
          {user?.id && (
            <motion.div custom={2} variants={fadeInUp} initial="hidden" animate="visible">
              <BadgesSection studentId={user.id} />
            </motion.div>
          )}
        </aside>

        {/* ─── Right: Editable sections ─── */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-4">
          {/* Basic */}
          <motion.div custom={0} variants={fadeInUp} initial="hidden" animate="visible" className={cardCls}>
            <SectionHeader
              kicker="section / 01"
              title="Basic information"
              open={openSections.basic}
              onToggle={() => toggleSection("basic")}
            />
            {openSections.basic && (
              <div className="px-5 py-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}><User className="w-3.5 h-3.5" /> Full name</label>
                    <input type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={fieldErrors.name ? inputErrorClass : inputClass} placeholder="Your full name" />
                    <FieldError field="name" />
                  </div>
                  <div>
                    <label className={labelClass}><Mail className="w-3.5 h-3.5" /> Email</label>
                    <input type="email" value={form.email} disabled className={`${inputClass} bg-stone-100 dark:bg-stone-950 text-stone-500 cursor-not-allowed`} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}><AlignLeft className="w-3.5 h-3.5" /> Bio</label>
                  <textarea value={form.bio} onChange={(e) => handleChange("bio", e.target.value)} rows={3} maxLength={500}
                    className={`${fieldErrors.bio ? inputErrorClass : inputClass} resize-none`} placeholder="A brief introduction about yourself..." />
                  <div className="flex justify-between mt-1.5">
                    <FieldError field="bio" />
                    <p className="text-[10px] font-mono text-stone-500 ml-auto">{form.bio.length}/500</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}><Phone className="w-3.5 h-3.5" /> Phone</label>
                    <input type="tel" value={form.contactNo} onChange={(e) => handleChange("contactNo", e.target.value)} className={inputClass} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className={labelClass}><MapPin className="w-3.5 h-3.5" /> Location</label>
                    <input type="text" value={form.location} onChange={(e) => handleChange("location", e.target.value)} className={inputClass} placeholder="e.g. Mumbai, India" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}><SearchIcon className="w-3.5 h-3.5" /> Job status</label>
                  <select
                    value={form.jobStatus ?? ""}
                    onChange={(e) => handleChange("jobStatus", e.target.value || null)}
                    className={inputClass}
                  >
                    {JOB_STATUS_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </motion.div>

          {/* Education & Work */}
          <motion.div custom={1} variants={fadeInUp} initial="hidden" animate="visible" className={cardCls}>
            <SectionHeader
              kicker="section / 02"
              title="Education & work"
              open={openSections.education}
              onToggle={() => toggleSection("education")}
            />
            {openSections.education && (
              <div className="px-5 py-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className={labelClass}><GraduationCap className="w-3.5 h-3.5" /> College</label>
                    <input
                      ref={collegeInputRef} type="text" value={form.college}
                      onChange={(e) => handleCollegeChange(e.target.value)}
                      onFocus={() => { if (collegeSuggestions.length > 0) setShowCollegeSuggestions(true); }}
                      className={inputClass} placeholder="Start typing college name..." autoComplete="off"
                    />
                    {collegeLoading && <Loader2 className="absolute right-3 top-10 w-4 h-4 text-stone-400 animate-spin" />}
                    {showCollegeSuggestions && collegeSuggestions.length > 0 && (
                      <div ref={collegeDropdownRef}
                        className="absolute z-50 left-0 right-0 top-full mt-1 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md shadow-lg max-h-56 overflow-y-auto">
                        {collegeSuggestions.map((c, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => selectCollege(c.name)}
                            className="w-full flex items-start text-left px-4 py-2.5 hover:bg-stone-100 dark:hover:bg-stone-800 border-0 bg-transparent cursor-pointer border-b border-stone-100 dark:border-white/5 last:border-b-0"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-stone-900 dark:text-stone-50 truncate">{c.name}</p>
                              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-0.5">{c.stateProvince ? `${c.stateProvince}, ` : ""}{c.country}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}><Calendar className="w-3.5 h-3.5" /> Graduation year</label>
                    <input type="number" value={form.graduationYear ?? ""} onChange={(e) => handleChange("graduationYear", e.target.value ? Number(e.target.value) : null)}
                      className={fieldErrors.graduationYear ? inputErrorClass : inputClass} placeholder="e.g. 2026" min={1990} max={2040} />
                    <FieldError field="graduationYear" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}><Building2 className="w-3.5 h-3.5" /> Company</label>
                    <input type="text" value={form.company} onChange={(e) => handleChange("company", e.target.value)} className={inputClass} placeholder="e.g. Google" />
                  </div>
                  <div>
                    <label className={labelClass}><Briefcase className="w-3.5 h-3.5" /> Role</label>
                    <input type="text" value={form.designation} onChange={(e) => handleChange("designation", e.target.value)} className={inputClass} placeholder="e.g. CS Student" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Skills */}
          <motion.div custom={2} variants={fadeInUp} initial="hidden" animate="visible" className={cardCls}>
            <SectionHeader
              kicker="section / 03"
              title="Skills"
              meta={`${form.skills.length}/20`}
              open={openSections.skills}
              onToggle={() => toggleSection("skills")}
            />
            {openSections.skills && (
              <div className="px-5 py-5 space-y-4">
                {form.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {form.skills.map((skill, i) => {
                      const v = verifiedMap.get(skill.toLowerCase());
                      return (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md border ${
                            v
                              ? "bg-lime-50 dark:bg-lime-900/10 text-lime-700 dark:text-lime-400 border-lime-200 dark:border-lime-800/40"
                              : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-white/10"
                          }`}
                        >
                          {v && <ShieldCheck className="w-3 h-3" />}
                          <span className="font-medium">{skill}</span>
                          {v && <span className="text-[9px] font-mono opacity-70">{v.score}%</span>}
                          <button
                            type="button"
                            onClick={() => handleRemoveSkill(i)}
                            aria-label={`Remove ${skill}`}
                            className="opacity-60 hover:opacity-100 bg-transparent border-0 cursor-pointer p-0"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      );
                    })}
                  </div>
                )}
                <div className="relative">
                  <div className="flex gap-2">
                    <input
                      ref={skillInputRef} type="text" value={skillInput}
                      onChange={(e) => { setSkillInput(e.target.value); setShowSkillSuggestions(e.target.value.trim().length > 0); }}
                      onFocus={() => { if (skillInput.trim().length > 0) setShowSkillSuggestions(true); }}
                      onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddSkill(); } }}
                      className={`${inputClass} flex-1`} placeholder="Type a skill and press Enter" autoComplete="off"
                    />
                    <button
                      type="button"
                      onClick={() => handleAddSkill()}
                      className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 border border-stone-300 dark:border-white/10 rounded-md text-sm font-bold text-stone-900 dark:text-stone-50 hover:border-stone-900 dark:hover:border-stone-50 transition-colors bg-transparent cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add
                    </button>
                  </div>
                  {showSkillSuggestions && filteredSkillSuggestions.length > 0 && (
                    <div ref={skillDropdownRef}
                      className="absolute z-50 left-0 right-16 top-full mt-1 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md shadow-lg max-h-52 overflow-y-auto">
                      <p className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950">
                        verifiable skills
                      </p>
                      {filteredSkillSuggestions.map((skill) => (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => handleAddSkill(skill)}
                          className="w-full flex items-center gap-2 text-left px-3 py-2 hover:bg-stone-100 dark:hover:bg-stone-800 border-0 bg-transparent cursor-pointer border-b border-stone-100 dark:border-white/5 last:border-b-0"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-lime-500 shrink-0" />
                          <span className="text-sm font-medium text-stone-900 dark:text-stone-50">{skill}</span>
                          <span className="text-[9px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 ml-auto shrink-0">can verify</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {form.skills.length > 0 && (
                  <Link to="/student/skill-verification" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 no-underline transition-colors">
                    <ShieldCheck className="w-3.5 h-3.5" /> verify skills with proctored tests
                  </Link>
                )}
              </div>
            )}
          </motion.div>

          {/* Job Preferences */}
          <motion.div custom={3} variants={fadeInUp} initial="hidden" animate="visible" className={cardCls}>
            <SectionHeader
              kicker="section / 04"
              title="Job preferences"
              meta="ai matching"
              open={openSections.jobPrefs}
              onToggle={() => toggleSection("jobPrefs")}
            />
            {openSections.jobPrefs && (
              <div className="px-5 py-5 space-y-4">
                <p className="text-xs text-stone-500 leading-relaxed">
                  These preferences help InternHack AI find the best jobs for you.
                </p>
                <div>
                  <label className={labelClass}><Briefcase className="w-3.5 h-3.5" /> Desired roles</label>
                  <input type="text" value={jobPrefRoles} onChange={(e) => setJobPrefRoles(e.target.value)}
                    className={inputClass} placeholder="e.g. Frontend Developer, React Engineer" />
                  <p className="text-[10px] font-mono text-stone-500 mt-1.5">separate with commas</p>
                </div>
                <div>
                  <label className={labelClass}><CheckCircle className="w-3.5 h-3.5" /> Preferred skills</label>
                  <input type="text" value={jobPrefSkills} onChange={(e) => setJobPrefSkills(e.target.value)}
                    className={inputClass} placeholder="e.g. React, TypeScript, Node.js" />
                  <p className="text-[10px] font-mono text-stone-500 mt-1.5">separate with commas</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}><MapPin className="w-3.5 h-3.5" /> Preferred locations</label>
                    <input type="text" value={jobPrefLocations} onChange={(e) => setJobPrefLocations(e.target.value)}
                      className={inputClass} placeholder="e.g. Bangalore, Remote" />
                  </div>
                  <div>
                    <label className={labelClass}>Min salary (LPA)</label>
                    <input type="number" value={jobPrefSalary} onChange={(e) => setJobPrefSalary(e.target.value)}
                      className={inputClass} placeholder="e.g. 6" />
                  </div>
                </div>
                <TogglePills
                  label="Work mode"
                  options={["REMOTE", "HYBRID", "ONSITE"]}
                  selected={jobPrefWorkMode}
                  onChange={setJobPrefWorkMode}
                  format={(m) => m.charAt(0) + m.slice(1).toLowerCase()}
                />
                <TogglePills
                  label="Experience level"
                  options={["INTERN", "ENTRY", "MID", "SENIOR"]}
                  selected={jobPrefExpLevel}
                  onChange={setJobPrefExpLevel}
                  format={(l) => l.charAt(0) + l.slice(1).toLowerCase()}
                />
                <TogglePills
                  label="Domain"
                  options={["frontend", "backend", "fullstack", "devops", "data", "ml", "mobile"]}
                  selected={jobPrefDomains}
                  onChange={setJobPrefDomains}
                  format={(d) => d.charAt(0).toUpperCase() + d.slice(1)}
                />
                <button
                  type="button"
                  disabled={savingJobPrefs}
                  onClick={async () => {
                    const split = (s: string) => s.split(",").map((v) => v.trim()).filter(Boolean);
                    setSavingJobPrefs(true);
                    try {
                      await api.put("/job-feed/preferences", {
                        desiredRoles: split(jobPrefRoles),
                        desiredSkills: split(jobPrefSkills),
                        desiredLocations: split(jobPrefLocations),
                        minSalary: jobPrefSalary ? Number(jobPrefSalary) * 100000 : null,
                        workMode: jobPrefWorkMode,
                        experienceLevel: jobPrefExpLevel,
                        domains: jobPrefDomains,
                      });
                      toast.success("Job preferences saved!");
                    } catch {
                      toast.error("Failed to save preferences");
                    } finally {
                      setSavingJobPrefs(false);
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-md text-sm font-bold hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors border-0 cursor-pointer disabled:opacity-50"
                >
                  {savingJobPrefs ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : "Save preferences"}
                </button>
              </div>
            )}
          </motion.div>

          {/* Projects */}
          <motion.div custom={4} variants={fadeInUp} initial="hidden" animate="visible" className={cardCls}>
            <SectionHeader
              kicker="section / 05"
              title="Projects"
              meta={`${form.projects.length}/10`}
              open={openSections.projects}
              onToggle={() => toggleSection("projects")}
              right={
                <button
                  type="button"
                  onClick={() => setShowGitHubImport(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-stone-300 dark:border-white/10 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-400 dark:hover:border-white/30 transition-colors bg-transparent cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" /> import
                </button>
              }
            />
            {openSections.projects && (
              <ProjectsSection
                projects={form.projects}
                onChange={(projects) => {
                  setForm((prev) => ({ ...prev, projects }));
                  if (fieldErrors.projects) setFieldErrors((prev) => { const next = { ...prev }; delete next.projects; return next; });
                }}
                errors={fieldErrors.projects}
              />
            )}
          </motion.div>

          {/* Achievements */}
          <motion.div custom={5} variants={fadeInUp} initial="hidden" animate="visible" className={cardCls}>
            <SectionHeader
              kicker="section / 06"
              title="Achievements & leadership"
              meta={`${form.achievements.length}/10`}
              open={openSections.achievements}
              onToggle={() => toggleSection("achievements")}
            />
            {openSections.achievements && (
              <AchievementsSection
                achievements={form.achievements}
                onChange={(achievements) => {
                  setForm((prev) => ({ ...prev, achievements }));
                  if (fieldErrors.achievements) setFieldErrors((prev) => { const next = { ...prev }; delete next.achievements; return next; });
                }}
                errors={fieldErrors.achievements}
              />
            )}
          </motion.div>

          {/* Social links */}
          <motion.div custom={6} variants={fadeInUp} initial="hidden" animate="visible" className={cardCls}>
            <SectionHeader
              kicker="section / 07"
              title="Social links"
              meta={
                [form.linkedinUrl, form.githubUrl, form.portfolioUrl, form.leetcodeUrl].filter(Boolean).length > 0
                  ? `${[form.linkedinUrl, form.githubUrl, form.portfolioUrl, form.leetcodeUrl].filter(Boolean).length} added`
                  : undefined
              }
              open={openSections.links}
              onToggle={() => toggleSection("links")}
            />
            {openSections.links && (
              <div className="px-5 py-5 space-y-4">
                <div>
                  <label className={labelClass}><Linkedin className="w-3.5 h-3.5" /> LinkedIn</label>
                  <input type="url" value={form.linkedinUrl} onChange={(e) => handleChange("linkedinUrl", e.target.value)} className={fieldErrors.linkedinUrl ? inputErrorClass : inputClass} placeholder="https://linkedin.com/in/yourname" />
                  <FieldError field="linkedinUrl" />
                </div>
                <div>
                  <label className={labelClass}><Github className="w-3.5 h-3.5" /> GitHub</label>
                  <input type="url" value={form.githubUrl} onChange={(e) => handleChange("githubUrl", e.target.value)} className={fieldErrors.githubUrl ? inputErrorClass : inputClass} placeholder="https://github.com/yourname" />
                  <FieldError field="githubUrl" />
                </div>
                <div>
                  <label className={labelClass}><Globe className="w-3.5 h-3.5" /> Portfolio</label>
                  <input type="url" value={form.portfolioUrl} onChange={(e) => handleChange("portfolioUrl", e.target.value)} className={fieldErrors.portfolioUrl ? inputErrorClass : inputClass} placeholder="https://yourportfolio.com" />
                  <FieldError field="portfolioUrl" />
                </div>
                <div>
                  <label className={labelClass}><ExternalLink className="w-3.5 h-3.5" /> LeetCode</label>
                  <input type="url" value={form.leetcodeUrl} onChange={(e) => handleChange("leetcodeUrl", e.target.value)} className={inputClass} placeholder="https://leetcode.com/yourname" />
                </div>
              </div>
            )}
          </motion.div>

          {/* Resumes */}
          <motion.div custom={7} variants={fadeInUp} initial="hidden" animate="visible" className={cardCls}>
            <SectionHeader
              kicker="section / 08"
              title="Resumes"
              meta={`${form.resumes.length}/${MAX_RESUMES}`}
              open={openSections.resumes}
              onToggle={() => toggleSection("resumes")}
            />
            {openSections.resumes && (
              <div className="px-5 py-5 space-y-3">
                {form.resumes.length > 0 && (
                  <div className="space-y-2">
                    {form.resumes.map((url) => (
                      <div key={url} className="flex items-center gap-3 px-4 py-3 border border-stone-200 dark:border-white/10 rounded-md">
                        <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
                          <FileText className="w-4 h-4 text-stone-500" />
                        </div>
                        <span className="text-sm text-stone-700 dark:text-stone-300 truncate flex-1">{getFileNameFromUrl(url)}</span>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors shrink-0">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                          type="button"
                          onClick={() => handleResumeDelete(url)}
                          disabled={deletingResume === url}
                          aria-label="Delete resume"
                          className="text-stone-400 hover:text-red-500 dark:hover:text-red-400 transition-colors shrink-0 bg-transparent border-0 cursor-pointer p-1"
                        >
                          {deletingResume === url ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => resumeInputRef.current?.click()}
                  disabled={uploadingResume}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-stone-300 dark:border-white/15 rounded-md text-sm text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 transition-colors bg-transparent cursor-pointer disabled:opacity-50"
                >
                  {uploadingResume ? <><Loader2 className="w-4 h-4 animate-spin" /> Uploading...</> : <><Upload className="w-4 h-4" /> Upload resume (PDF)</>}
                </button>
                <input ref={resumeInputRef} type="file" accept=".pdf" onChange={handleResumeUpload} className="hidden" />
                <p className="text-[10px] font-mono text-stone-500">PDF only, max 10 MB each.</p>
              </div>
            )}
          </motion.div>

          {/* Coding activity */}
          <motion.div custom={9} variants={fadeInUp} initial="hidden" animate="visible">
            <ContributionGraphs
              githubUsername={form.githubUrl ? form.githubUrl.split("github.com/").pop()?.replace(/\/$/, "") : undefined}
              leetcodeUsername={form.leetcodeUrl ? form.leetcodeUrl.split("leetcode.com/").pop()?.replace(/^\/?u\//, "").replace(/\/$/, "") : undefined}
              showPrompts
            />
          </motion.div>

          {/* Save (bottom) */}
          <motion.div custom={10} variants={fadeInUp} initial="hidden" animate="visible" className="pt-2">
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-lime-400 text-stone-950 rounded-md text-sm font-bold hover:bg-lime-300 transition-colors border-0 cursor-pointer disabled:opacity-50"
            >
              {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : <><Save className="w-4 h-4" /> Save all changes</>}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Image Crop Modal */}
      {cropSrc && cropType && (
        <ImageCropModal
          imageSrc={cropSrc}
          aspect={cropType === "profile" ? 1 : 16 / 5}
          onCrop={handleCropComplete}
          onClose={() => { setCropSrc(null); setCropType(null); }}
        />
      )}

      {/* GitHub Import Modal */}
      <GitHubImportModal
        open={showGitHubImport}
        onClose={() => setShowGitHubImport(false)}
        currentSkills={form.skills}
        currentProjects={form.projects}
        onImport={(data) => {
          setForm((prev) => ({
            ...prev,
            skills: data.skills,
            projects: data.projects,
            ...(data.bio ? { bio: data.bio } : {}),
            ...(data.location ? { location: data.location } : {}),
            ...(data.githubUrl ? { githubUrl: data.githubUrl } : {}),
          }));
        }}
      />
    </div>
  );
}

function MetaRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500">
        <span className="text-stone-400">{icon}</span>
        {label}
      </span>
      <span className="text-xs font-medium text-stone-700 dark:text-stone-300">{value}</span>
    </div>
  );
}

function TogglePills({
  label,
  options,
  selected,
  onChange,
  format,
}: {
  label: string;
  options: string[];
  selected: string[];
  onChange: (next: string[]) => void;
  format: (o: string) => string;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = selected.includes(o);
          return (
            <button
              key={o}
              type="button"
              onClick={() =>
                onChange(active ? selected.filter((v) => v !== o) : [...selected, o])
              }
              className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                active
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                  : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
              }`}
            >
              {format(o)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Projects Sub-Component ──────────────────────────── */
function ProjectsSection({ projects, onChange, errors }: {
  projects: ProjectItem[];
  onChange: (p: ProjectItem[]) => void;
  errors?: string[];
}) {
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState<ProjectItem>({ id: "", title: "", description: "", techStack: [], liveUrl: "", repoUrl: "" });
  const [techInput, setTechInput] = useState("");

  const startAdd = () => {
    if (projects.length >= 10) return;
    const id = crypto.randomUUID();
    setDraft({ id, title: "", description: "", techStack: [], liveUrl: "", repoUrl: "" });
    setEditing(id);
  };

  const startEdit = (p: ProjectItem) => {
    setDraft({ ...p });
    setEditing(p.id);
    setTechInput("");
  };

  const save = () => {
    if (!draft.title.trim()) return;
    const exists = projects.find((p) => p.id === draft.id);
    if (exists) {
      onChange(projects.map((p) => (p.id === draft.id ? draft : p)));
    } else {
      onChange([...projects, draft]);
    }
    setEditing(null);
  };

  const remove = (id: string) => {
    onChange(projects.filter((p) => p.id !== id));
    if (editing === id) setEditing(null);
  };

  const addTech = () => {
    const t = techInput.trim();
    if (!t || draft.techStack.length >= 10) return;
    if (!draft.techStack.includes(t)) setDraft((d) => ({ ...d, techStack: [...d.techStack, t] }));
    setTechInput("");
  };

  return (
    <div className="px-5 py-5 space-y-3">
      {errors && errors.length > 0 && (
        <p className="text-xs text-red-500 dark:text-red-400 px-1 font-mono">Project URLs must be valid (e.g. https://...)</p>
      )}
      {projects.filter((p) => p.id !== editing).map((p) => (
        <div key={p.id} className="flex items-start gap-3 px-4 py-3 border border-stone-200 dark:border-white/10 rounded-md">
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">{p.title}</h4>
            <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">{p.description}</p>
            {p.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {p.techStack.map((t, i) => (
                  <span key={i} className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-md border border-stone-200 dark:border-white/10">{t}</span>
                ))}
              </div>
            )}
            {(p.liveUrl || p.repoUrl) && (
              <div className="flex gap-3 mt-2.5">
                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 flex items-center gap-1 no-underline"><ExternalLink className="w-3 h-3" /> live</a>}
                {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 flex items-center gap-1 no-underline"><Github className="w-3 h-3" /> code</a>}
              </div>
            )}
          </div>
          <div className="flex gap-1 shrink-0">
            <button type="button" onClick={() => startEdit(p)} aria-label="Edit project" className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors bg-transparent border-0 cursor-pointer">
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button type="button" onClick={() => remove(p.id)} aria-label="Delete project" className="p-1.5 rounded-md text-stone-400 hover:text-red-500 transition-colors bg-transparent border-0 cursor-pointer">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ))}

      {editing && (
        <div className="px-4 py-4 border border-lime-300 dark:border-lime-700/40 bg-lime-50/40 dark:bg-lime-900/5 rounded-md space-y-3">
          <div>
            <label className={labelClass}>Title</label>
            <input type="text" value={draft.title} onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))} className={inputClass} placeholder="Project title" maxLength={100} />
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea value={draft.description} onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))} className={`${inputClass} resize-none`} rows={2} placeholder="Brief description..." maxLength={500} />
          </div>
          <div>
            <label className={labelClass}>Tech stack</label>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {draft.techStack.map((t, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-md border border-stone-200 dark:border-white/10">
                  {t}
                  <button
                    type="button"
                    onClick={() => setDraft((d) => ({ ...d, techStack: d.techStack.filter((_, j) => j !== i) }))}
                    aria-label={`Remove ${t}`}
                    className="opacity-60 hover:opacity-100 bg-transparent border-0 cursor-pointer p-0"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input type="text" value={techInput} onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTech(); } }}
                className={`${inputClass} flex-1`} placeholder="Add technology" />
              <button
                type="button"
                onClick={addTech}
                aria-label="Add technology"
                className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-stone-300 dark:border-white/10 rounded-md text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-900 dark:hover:border-stone-50 transition-colors bg-transparent cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className={labelClass}><ExternalLink className="w-3 h-3" /> Live URL</label>
              <input type="url" value={draft.liveUrl ?? ""} onChange={(e) => setDraft((d) => ({ ...d, liveUrl: e.target.value }))} className={inputClass} placeholder="https://..." />
            </div>
            <div>
              <label className={labelClass}><Github className="w-3 h-3" /> Repo URL</label>
              <input type="url" value={draft.repoUrl ?? ""} onChange={(e) => setDraft((d) => ({ ...d, repoUrl: e.target.value }))} className={inputClass} placeholder="https://github.com/..." />
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={save}
              disabled={!draft.title.trim()}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-lime-400 text-stone-950 rounded-md text-xs font-bold hover:bg-lime-300 transition-colors border-0 cursor-pointer disabled:opacity-50"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditing(null)}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-stone-300 dark:border-white/10 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 hover:border-stone-500 dark:hover:border-white/30 transition-colors bg-transparent cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {projects.length < 10 && !editing && (
        <button
          type="button"
          onClick={startAdd}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-stone-300 dark:border-white/15 rounded-md text-sm text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 transition-colors bg-transparent cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add project
        </button>
      )}
    </div>
  );
}

/* ─── Achievements Sub-Component ──────────────────────── */
function AchievementsSection({ achievements, onChange, errors }: {
  achievements: AchievementItem[];
  onChange: (a: AchievementItem[]) => void;
  errors?: string[];
}) {
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState<AchievementItem>({ id: "", title: "", description: "", date: "" });

  const startAdd = () => {
    if (achievements.length >= 10) return;
    const id = crypto.randomUUID();
    setDraft({ id, title: "", description: "", date: "" });
    setEditing(id);
  };

  const startEdit = (a: AchievementItem) => {
    setDraft({ ...a });
    setEditing(a.id);
  };

  const save = () => {
    if (!draft.title.trim()) return;
    const exists = achievements.find((a) => a.id === draft.id);
    if (exists) {
      onChange(achievements.map((a) => (a.id === draft.id ? draft : a)));
    } else {
      onChange([...achievements, draft]);
    }
    setEditing(null);
  };

  const remove = (id: string) => {
    onChange(achievements.filter((a) => a.id !== id));
    if (editing === id) setEditing(null);
  };

  return (
    <div className="px-5 py-5 space-y-3">
      {errors && errors.length > 0 && (
        <p className="text-xs text-red-500 dark:text-red-400 px-1 font-mono">{errors[0]}</p>
      )}
      {achievements.filter((a) => a.id !== editing).map((a) => (
        <div key={a.id} className="flex items-start gap-3 px-4 py-3 border border-stone-200 dark:border-white/10 rounded-md">
          <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
            <Trophy className="w-4 h-4 text-stone-500" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">{a.title}</h4>
            <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">{a.description}</p>
            {a.date && <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-1.5">{a.date}</p>}
          </div>
          <div className="flex gap-1 shrink-0">
            <button type="button" onClick={() => startEdit(a)} aria-label="Edit achievement" className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors bg-transparent border-0 cursor-pointer">
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button type="button" onClick={() => remove(a.id)} aria-label="Delete achievement" className="p-1.5 rounded-md text-stone-400 hover:text-red-500 transition-colors bg-transparent border-0 cursor-pointer">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ))}

      {editing && (
        <div className="px-4 py-4 border border-lime-300 dark:border-lime-700/40 bg-lime-50/40 dark:bg-lime-900/5 rounded-md space-y-3">
          <div>
            <label className={labelClass}>Title</label>
            <input type="text" value={draft.title} onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))} className={inputClass} placeholder="e.g. Dean's List, Hackathon Winner" maxLength={100} />
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea value={draft.description} onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))} className={`${inputClass} resize-none`} rows={2} placeholder="Brief description..." maxLength={300} />
          </div>
          <div>
            <label className={labelClass}><Calendar className="w-3 h-3" /> Date</label>
            <input type="text" value={draft.date ?? ""} onChange={(e) => setDraft((d) => ({ ...d, date: e.target.value }))} className={inputClass} placeholder="e.g. June 2025 or 2024-2025" maxLength={20} />
          </div>
          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={save}
              disabled={!draft.title.trim()}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-lime-400 text-stone-950 rounded-md text-xs font-bold hover:bg-lime-300 transition-colors border-0 cursor-pointer disabled:opacity-50"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditing(null)}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-stone-300 dark:border-white/10 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 hover:border-stone-500 dark:hover:border-white/30 transition-colors bg-transparent cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {achievements.length < 10 && !editing && (
        <button
          type="button"
          onClick={startAdd}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-stone-300 dark:border-white/15 rounded-md text-sm text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 transition-colors bg-transparent cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add achievement
        </button>
      )}
    </div>
  );
}