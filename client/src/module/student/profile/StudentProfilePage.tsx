import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  User, Mail, Phone, Building2, Briefcase, FileText, Save, Loader2,
  CheckCircle, Upload, Trash2, Camera, ExternalLink, MapPin, GraduationCap,
  Linkedin, Github, Globe, X, Plus, AlignLeft, Shield, Calendar, Crown,
  ChevronDown, ShieldCheck, FolderGit2, Trophy, Pencil, Search as SearchIcon,
} from "lucide-react";
import { Link } from "react-router";
import type { VerifiedSkill, ProjectItem, AchievementItem } from "../../../lib/types";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { LoadingScreen } from "../../../components/LoadingScreen";
import toast from "react-hot-toast";
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

/** Skills that have proctored verification tests on /student/skill-verification */
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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
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
    basic: true, education: true, skills: true, projects: true, achievements: true, links: false, resumes: true,
  });
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

    // Fetch verified skills
    api.get("/skill-tests/my-verified")
      .then((res) => setVerifiedSkills(res.data.verified ?? []))
      .catch((err) => console.error("Failed to fetch verified skills:", err));
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
        // Deduplicate by name and take first 8
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
        // Auto-open sections that have errors
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

  const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2 MB

  const handleProfilePicSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMAGE_SIZE) { toast.error("Image must be under 2 MB"); if (picInputRef.current) picInputRef.current.value = ""; return; }
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
    if (file.size > MAX_IMAGE_SIZE) { toast.error("Image must be under 2 MB"); if (coverInputRef.current) coverInputRef.current.value = ""; return; }
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
      const u = res.data.user;
      setForm((prev) => ({ ...prev, [field]: u[field] ?? "" }));
      syncUser({ ...form, [field]: u[field] ?? "" });
      toast.success(isProfile ? "Profile picture updated!" : "Cover image updated!");
    } catch {
      toast.error(isProfile ? "Failed to upload profile picture" : "Failed to upload cover image");
    } finally {
      setUploading(false);
    }
  };

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // Server auto-replaces oldest resume if at max
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

  const inputClass = "w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all dark:bg-gray-800 dark:text-white bg-gray-50/50 dark:bg-gray-800/50";
  const inputErrorClass = "w-full px-4 py-2.5 border border-red-300 dark:border-red-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all dark:bg-gray-800 dark:text-white bg-red-50/30 dark:bg-red-900/10";
  const labelClass = "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5";
  const FieldError = ({ field }: { field: string }) => {
    const errs = fieldErrors[field];
    if (!errs?.length) return null;
    return <p className="text-xs text-red-500 dark:text-red-400 mt-1">{errs[0]}</p>;
  };

  const displayDate = memberSince || user?.createdAt;

  const profileCompletion = (() => {
    const fields = [form.name, form.bio, form.contactNo, form.location, form.college, form.company, form.linkedinUrl, form.githubUrl];
    const filled = fields.filter(Boolean).length;
    const hasSkills = form.skills.length > 0 ? 1 : 0;
    const hasResume = form.resumes.length > 0 ? 1 : 0;
    return Math.round(((filled + hasSkills + hasResume) / (fields.length + 2)) * 100);
  })();

  if (loading) return <LoadingScreen />;

  return (
    <div className="relative pb-12">
      <SEO title="My Profile" description="Update your InternHack student profile details." noIndex />

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
        className="text-center mb-10 mt-6"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          My <span className="text-gradient-accent">Profile</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          A complete profile helps recruiters find you faster
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ───── Left Column: Profile Overview ───── */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300"
          >
            {/* Banner */}
            <div className="h-28 bg-gray-950 dark:bg-gray-800 relative group/banner overflow-hidden">
              {form.coverImage ? (
                <img src={form.coverImage} alt="Cover" className="w-full h-full object-cover" />
              ) : (
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              )}
              <button type="button" onClick={() => coverInputRef.current?.click()} disabled={uploadingCover}
                className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/banner:opacity-100 transition-opacity cursor-pointer">
                {uploadingCover ? <Loader2 className="w-5 h-5 text-white animate-spin" /> : <Camera className="w-5 h-5 text-white" />}
              </button>
              <input ref={coverInputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={handleCoverImageSelect} className="hidden" />
            </div>

            <div className="px-5 pb-5 -mt-12 relative">
              {/* Avatar */}
              <div className="relative group mb-3">
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-900 shadow-lg text-gray-900 dark:text-white flex items-center justify-center text-3xl font-bold overflow-hidden">
                  {form.profilePic ? (
                    <img src={form.profilePic} alt={form.name} className="w-24 h-24 rounded-2xl object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                  ) : (
                    <User className="w-10 h-10 text-gray-400 dark:text-gray-500" />
                  )}
                </div>
                <button type="button" onClick={() => picInputRef.current?.click()} disabled={uploadingPic}
                  className="absolute inset-0 w-24 h-24 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  {uploadingPic ? <Loader2 className="w-5 h-5 text-white animate-spin" /> : <Camera className="w-5 h-5 text-white" />}
                </button>
                <input ref={picInputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={handleProfilePicSelect} className="hidden" />
              </div>

              <h2 className="text-lg font-bold text-gray-950 dark:text-white truncate">{form.name || "Your Name"}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{form.email}</p>

              {(form.designation || form.company) && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 truncate">
                  {form.designation}{form.designation && form.company ? " at " : ""}{form.company}
                </p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {form.college && (
                  <span className="inline-flex items-center gap-1 text-xs bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-lg font-medium">
                    <GraduationCap className="w-3 h-3" /> {form.college.length > 25 ? form.college.slice(0, 25) + "..." : form.college}
                  </span>
                )}
                {form.location && (
                  <span className="inline-flex items-center gap-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-lg">
                    <MapPin className="w-3 h-3" /> {form.location}
                  </span>
                )}
              </div>

              {/* Social links */}
              {(form.linkedinUrl || form.githubUrl || form.portfolioUrl) && (
                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {form.linkedinUrl && (
                    <a href={form.linkedinUrl} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {form.githubUrl && (
                    <a href={form.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {form.portfolioUrl && (
                    <a href={form.portfolioUrl} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/20 dark:hover:text-violet-400 transition-colors">
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}

              {/* Visibility Toggle */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Visible to Recruiters</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {form.isProfilePublic
                      ? "Your profile appears in recruiter talent search"
                      : "Your profile is hidden from recruiters"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, isProfilePublic: !prev.isProfilePublic }))}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    form.isProfilePublic ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      form.isProfilePublic ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Profile Completion */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-950 dark:text-white">Profile Strength</span>
              <span className={`text-sm font-bold ${profileCompletion >= 80 ? "text-emerald-600" : profileCompletion >= 50 ? "text-amber-600" : "text-red-500"}`}>
                {profileCompletion}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${profileCompletion}%` }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className={`h-full rounded-full ${profileCompletion >= 80 ? "bg-linear-to-r from-emerald-500 to-teal-500" : profileCompletion >= 50 ? "bg-linear-to-r from-amber-500 to-orange-500" : "bg-linear-to-r from-red-500 to-rose-500"}`}
              />
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              {profileCompletion >= 80 ? "Looking great! Your profile is well filled." : profileCompletion >= 50 ? "Good start. Add more details to stand out." : "Fill in your profile to attract recruiters."}
            </p>
          </motion.div>

          {/* Badges */}
          {user?.id && (
            <motion.div
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <BadgesSection studentId={user.id} />
            </motion.div>
          )}

          {/* Account Info */}
          <motion.div
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300"
          >
            <h3 className="text-sm font-semibold text-gray-950 dark:text-white mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-gray-500 dark:text-gray-400" /> Account
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Role
                </span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{user?.role}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" /> Member since
                </span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {displayDate
                    ? new Date(displayDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })
                    : "---"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500">
                  <FileText className="w-3.5 h-3.5 text-gray-400" /> Resumes
                </span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{form.resumes.length}/{MAX_RESUMES}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500">
                  <Crown className={`w-3.5 h-3.5 ${user?.subscriptionStatus === "ACTIVE" && user.subscriptionPlan !== "FREE" ? "text-amber-500" : "text-gray-400"}`} /> Plan
                </span>
                {user?.subscriptionStatus === "ACTIVE" && user.subscriptionPlan !== "FREE" ? (
                  <span className="text-sm font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                    Pro <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase bg-amber-500 text-white rounded-full">Premium</span>
                  </span>
                ) : (
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Free</span>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ───── Right Column: Editable Sections ───── */}
        <div className="lg:col-span-2 space-y-4">
          {/* Basic Info */}
          <motion.div custom={0} variants={fadeInUp} initial="hidden" animate="visible"
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300">
            <button type="button" onClick={() => toggleSection("basic")}
              className="w-full flex items-center justify-between px-6 py-4 text-left">
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center">
                  <User className="w-4 h-4 text-white dark:text-gray-900" />
                </div>
                Basic Information
              </h3>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openSections.basic ? "rotate-180" : ""}`} />
            </button>
            {openSections.basic && (
              <div className="px-6 pb-6 space-y-4 border-t border-gray-50 dark:border-gray-800 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}><User className="w-4 h-4 text-gray-400" /> Full Name</label>
                    <input type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={fieldErrors.name ? inputErrorClass : inputClass} placeholder="Your full name" />
                    <FieldError field="name" />
                  </div>
                  <div>
                    <label className={labelClass}><Mail className="w-4 h-4 text-gray-400" /> Email</label>
                    <input type="email" value={form.email} disabled className={`${inputClass} bg-gray-100! dark:bg-gray-900! text-gray-500 cursor-not-allowed`} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}><AlignLeft className="w-4 h-4 text-gray-400" /> Bio</label>
                  <textarea value={form.bio} onChange={(e) => handleChange("bio", e.target.value)} rows={3} maxLength={500}
                    className={`${fieldErrors.bio ? inputErrorClass : inputClass} resize-none`} placeholder="A brief introduction about yourself..." />
                  <div className="flex justify-between mt-1">
                    <FieldError field="bio" />
                    <p className="text-xs text-gray-400 text-right">{form.bio.length}/500</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}><Phone className="w-4 h-4 text-gray-400" /> Phone</label>
                    <input type="tel" value={form.contactNo} onChange={(e) => handleChange("contactNo", e.target.value)} className={inputClass} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className={labelClass}><MapPin className="w-4 h-4 text-gray-400" /> Location</label>
                    <input type="text" value={form.location} onChange={(e) => handleChange("location", e.target.value)} className={inputClass} placeholder="e.g. Mumbai, India" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}><SearchIcon className="w-4 h-4 text-gray-400" /> Job Status</label>
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
              </div>
            )}
          </motion.div>

          {/* Education & Work */}
          <motion.div custom={1} variants={fadeInUp} initial="hidden" animate="visible"
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300">
            <button type="button" onClick={() => toggleSection("education")}
              className="w-full flex items-center justify-between px-6 py-4 text-left">
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white dark:text-gray-900" />
                </div>
                Education & Work
              </h3>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openSections.education ? "rotate-180" : ""}`} />
            </button>
            {openSections.education && (
              <div className="px-6 pb-6 space-y-4 border-t border-gray-50 dark:border-gray-800 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className={labelClass}><GraduationCap className="w-4 h-4 text-gray-400" /> College</label>
                    <input
                      ref={collegeInputRef} type="text" value={form.college}
                      onChange={(e) => handleCollegeChange(e.target.value)}
                      onFocus={() => { if (collegeSuggestions.length > 0) setShowCollegeSuggestions(true); }}
                      className={inputClass} placeholder="Start typing college name..." autoComplete="off"
                    />
                    {collegeLoading && <Loader2 className="absolute right-3 top-9 w-4 h-4 text-gray-400 animate-spin" />}
                    {showCollegeSuggestions && collegeSuggestions.length > 0 && (
                      <div ref={collegeDropdownRef}
                        className="absolute z-50 left-0 right-0 top-full mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl max-h-56 overflow-y-auto">
                        {collegeSuggestions.map((c, i) => (
                          <button key={i} type="button" onClick={() => selectCollege(c.name)}
                            className="w-full text-left px-4 py-2.5 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors first:rounded-t-xl last:rounded-b-xl">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{c.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{c.stateProvince ? `${c.stateProvince}, ` : ""}{c.country}</p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}><Calendar className="w-4 h-4 text-gray-400" /> Graduation Year</label>
                    <input type="number" value={form.graduationYear ?? ""} onChange={(e) => handleChange("graduationYear", e.target.value ? Number(e.target.value) : null)}
                      className={fieldErrors.graduationYear ? inputErrorClass : inputClass} placeholder="e.g. 2026" min={1990} max={2040} />
                    <FieldError field="graduationYear" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}><Building2 className="w-4 h-4 text-gray-400" /> Company</label>
                    <input type="text" value={form.company} onChange={(e) => handleChange("company", e.target.value)} className={inputClass} placeholder="e.g. Google" />
                  </div>
                  <div>
                    <label className={labelClass}><Briefcase className="w-4 h-4 text-gray-400" /> Role</label>
                    <input type="text" value={form.designation} onChange={(e) => handleChange("designation", e.target.value)} className={inputClass} placeholder="e.g. CS Student" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Skills */}
          <motion.div custom={2} variants={fadeInUp} initial="hidden" animate="visible"
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300">
            <button type="button" onClick={() => toggleSection("skills")}
              className="w-full flex items-center justify-between px-6 py-4 text-left">
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white dark:text-gray-900" />
                </div>
                Skills
                <span className="text-xs font-normal text-gray-400 ml-1">{form.skills.length}/20</span>
              </h3>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openSections.skills ? "rotate-180" : ""}`} />
            </button>
            {openSections.skills && (
              <div className="px-6 pb-6 space-y-3 border-t border-gray-50 dark:border-gray-800 pt-4">
                {form.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {form.skills.map((skill, i) => {
                      const v = verifiedMap.get(skill.toLowerCase());
                      return (
                        <span key={i} className={`inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg font-medium ${v ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400" : "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400"}`}>
                          {v && <ShieldCheck className="w-3.5 h-3.5" />}
                          {skill}
                          {v && <span className="text-[10px] opacity-70">{v.score}%</span>}
                          <button type="button" onClick={() => handleRemoveSkill(i)} className={`${v ? "text-green-400 dark:text-green-500 hover:text-green-600 dark:hover:text-green-300" : "text-indigo-400 dark:text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-300"} ml-0.5`}><X className="w-3 h-3" /></button>
                        </span>
                      );
                    })}
                  </div>
                )}
                <div className="relative">
                  <div className="flex gap-2">
                    <input ref={skillInputRef} type="text" value={skillInput}
                      onChange={(e) => { setSkillInput(e.target.value); setShowSkillSuggestions(e.target.value.trim().length > 0); }}
                      onFocus={() => { if (skillInput.trim().length > 0) setShowSkillSuggestions(true); }}
                      onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddSkill(); } }}
                      className={`${inputClass} flex-1`} placeholder="Type a skill and press Enter" autoComplete="off" />
                    <button type="button" onClick={() => handleAddSkill()}
                      className="px-4 py-2.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors flex items-center gap-1 shrink-0">
                      <Plus className="w-4 h-4" /> Add
                    </button>
                  </div>
                  {showSkillSuggestions && filteredSkillSuggestions.length > 0 && (
                    <div ref={skillDropdownRef}
                      className="absolute z-50 left-0 right-14 top-full mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl max-h-52 overflow-y-auto">
                      <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800">
                        Verifiable Skills
                      </p>
                      {filteredSkillSuggestions.map((skill) => (
                        <button key={skill} type="button" onClick={() => handleAddSkill(skill)}
                          className="w-full text-left px-3 py-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors flex items-center gap-2 last:rounded-b-xl">
                          <ShieldCheck className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400 shrink-0" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{skill}</span>
                          <span className="text-[10px] text-violet-500 dark:text-violet-400 ml-auto shrink-0">can verify</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {form.skills.length > 0 && (
                  <Link to="/student/skill-verification" className="inline-flex items-center gap-1.5 text-xs text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium no-underline transition-colors">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verify your skills with proctored tests
                  </Link>
                )}
              </div>
            )}
          </motion.div>

          {/* Projects */}
          <motion.div custom={3} variants={fadeInUp} initial="hidden" animate="visible"
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300">
            <div className="flex items-center justify-between px-6 py-4">
              <button type="button" onClick={() => toggleSection("projects")}
                className="flex items-center justify-between flex-1 text-left">
                <h3 className="text-sm font-semibold text-gray-950 dark:text-white flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center">
                    <FolderGit2 className="w-4 h-4 text-white dark:text-gray-900" />
                  </div>
                  Projects
                  <span className="text-xs font-normal text-gray-400 ml-1">{form.projects.length}/10</span>
                </h3>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openSections.projects ? "rotate-180" : ""}`} />
              </button>
              <button
                type="button"
                onClick={() => setShowGitHubImport(true)}
                className="ml-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shrink-0"
              >
                <Github className="w-3.5 h-3.5" /> Import GitHub
              </button>
            </div>
            {openSections.projects && (
              <ProjectsSection projects={form.projects} onChange={(projects) => { setForm((prev) => ({ ...prev, projects })); if (fieldErrors.projects) setFieldErrors((prev) => { const next = { ...prev }; delete next.projects; return next; }); }} inputClass={inputClass} labelClass={labelClass} errors={fieldErrors.projects} />
            )}
          </motion.div>

          {/* Achievements */}
          <motion.div custom={4} variants={fadeInUp} initial="hidden" animate="visible"
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300">
            <button type="button" onClick={() => toggleSection("achievements")}
              className="w-full flex items-center justify-between px-6 py-4 text-left">
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white dark:text-gray-900" />
                </div>
                Achievements & Leadership
                <span className="text-xs font-normal text-gray-400 ml-1">{form.achievements.length}/10</span>
              </h3>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openSections.achievements ? "rotate-180" : ""}`} />
            </button>
            {openSections.achievements && (
              <AchievementsSection achievements={form.achievements} onChange={(achievements) => { setForm((prev) => ({ ...prev, achievements })); if (fieldErrors.achievements) setFieldErrors((prev) => { const next = { ...prev }; delete next.achievements; return next; }); }} inputClass={inputClass} labelClass={labelClass} errors={fieldErrors.achievements} />
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div custom={5} variants={fadeInUp} initial="hidden" animate="visible"
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300">
            <button type="button" onClick={() => toggleSection("links")}
              className="w-full flex items-center justify-between px-6 py-4 text-left">
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white dark:text-gray-900" />
                </div>
                Social Links
                {(form.linkedinUrl || form.githubUrl || form.portfolioUrl || form.leetcodeUrl) && (
                  <span className="text-xs font-normal text-gray-400 ml-1">
                    {[form.linkedinUrl, form.githubUrl, form.portfolioUrl, form.leetcodeUrl].filter(Boolean).length} added
                  </span>
                )}
              </h3>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openSections.links ? "rotate-180" : ""}`} />
            </button>
            {openSections.links && (
              <div className="px-6 pb-6 space-y-4 border-t border-gray-50 dark:border-gray-800 pt-4">
                <div>
                  <label className={labelClass}><Linkedin className="w-4 h-4 text-gray-400" /> LinkedIn</label>
                  <input type="url" value={form.linkedinUrl} onChange={(e) => handleChange("linkedinUrl", e.target.value)} className={fieldErrors.linkedinUrl ? inputErrorClass : inputClass} placeholder="https://linkedin.com/in/yourname" />
                  <FieldError field="linkedinUrl" />
                </div>
                <div>
                  <label className={labelClass}><Github className="w-4 h-4 text-gray-400" /> GitHub</label>
                  <input type="url" value={form.githubUrl} onChange={(e) => handleChange("githubUrl", e.target.value)} className={fieldErrors.githubUrl ? inputErrorClass : inputClass} placeholder="https://github.com/yourname" />
                  <FieldError field="githubUrl" />
                </div>
                <div>
                  <label className={labelClass}><Globe className="w-4 h-4 text-gray-400" /> Portfolio</label>
                  <input type="url" value={form.portfolioUrl} onChange={(e) => handleChange("portfolioUrl", e.target.value)} className={fieldErrors.portfolioUrl ? inputErrorClass : inputClass} placeholder="https://yourportfolio.com" />
                  <FieldError field="portfolioUrl" />
                </div>
                <div>
                  <label className={labelClass}><ExternalLink className="w-4 h-4 text-gray-400" /> LeetCode</label>
                  <input type="url" value={form.leetcodeUrl} onChange={(e) => handleChange("leetcodeUrl", e.target.value)} className={inputClass} placeholder="https://leetcode.com/yourname" />
                </div>
              </div>
            )}
          </motion.div>

          {/* Resumes */}
          <motion.div custom={6} variants={fadeInUp} initial="hidden" animate="visible"
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300">
            <button type="button" onClick={() => toggleSection("resumes")}
              className="w-full flex items-center justify-between px-6 py-4 text-left">
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white dark:text-gray-900" />
                </div>
                Resumes
                <span className="text-xs font-normal text-gray-400 ml-1">{form.resumes.length}/{MAX_RESUMES}</span>
              </h3>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openSections.resumes ? "rotate-180" : ""}`} />
            </button>
            {openSections.resumes && (
              <div className="px-6 pb-6 space-y-3 border-t border-gray-50 dark:border-gray-800 pt-4">
                {form.resumes.length > 0 && (
                  <div className="space-y-2">
                    {form.resumes.map((url) => (
                      <div key={url} className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center shrink-0">
                          <FileText className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300 truncate flex-1">{getFileNameFromUrl(url)}</span>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0"><ExternalLink className="w-3.5 h-3.5" /></a>
                        <button type="button" onClick={() => handleResumeDelete(url)} disabled={deletingResume === url}
                          className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors shrink-0 disabled:opacity-50">
                          {deletingResume === url ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <button type="button" onClick={() => resumeInputRef.current?.click()} disabled={uploadingResume}
                  className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-500 hover:border-gray-400 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all disabled:opacity-50">
                  {uploadingResume ? <><Loader2 className="w-4 h-4 animate-spin" /> Uploading...</> : <><Upload className="w-4 h-4" /> Upload Resume (PDF)</>}
                </button>
                <input ref={resumeInputRef} type="file" accept=".pdf" onChange={handleResumeUpload} className="hidden" />
                <p className="text-xs text-gray-400 mt-1">PDF only, max 10 MB each.</p>
              </div>
            )}
          </motion.div>

          {/* Coding Activity */}
          <motion.div custom={7} variants={fadeInUp} initial="hidden" animate="visible">
            <ContributionGraphs
              githubUsername={form.githubUrl ? form.githubUrl.split("github.com/").pop()?.replace(/\/$/,"") : undefined}
              leetcodeUsername={form.leetcodeUrl ? form.leetcodeUrl.split("leetcode.com/").pop()?.replace(/^\/?u\//, "").replace(/\/$/,"") : undefined}
              showPrompts
            />
          </motion.div>

          {/* Save Button */}
          <motion.div custom={8} variants={fadeInUp} initial="hidden" animate="visible">
            <button onClick={handleSave} disabled={saving}
              className="w-full py-4 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-base font-semibold rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-black/10 cursor-pointer">
              {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : <><Save className="w-4 h-4" /> Save Changes</>}
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

/* ─── Projects Sub-Component ──────────────────────────── */
function ProjectsSection({ projects, onChange, inputClass, labelClass, errors }: {
  projects: ProjectItem[];
  onChange: (p: ProjectItem[]) => void;
  inputClass: string;
  labelClass: string;
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
    <div className="px-6 pb-6 space-y-3 border-t border-gray-50 dark:border-gray-800 pt-4">
      {errors && errors.length > 0 && (
        <p className="text-xs text-red-500 dark:text-red-400 px-1">Project URLs must be valid (e.g. https://...)</p>
      )}
      {projects.filter((p) => p.id !== editing).map((p) => (
        <div key={p.id} className="flex items-start gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-gray-950 dark:text-white truncate">{p.title}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">{p.description}</p>
            {p.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {p.techStack.map((t, i) => (
                  <span key={i} className="px-2 py-0.5 text-[10px] font-medium bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-md">{t}</span>
                ))}
              </div>
            )}
            {(p.liveUrl || p.repoUrl) && (
              <div className="flex gap-3 mt-2">
                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"><ExternalLink className="w-3 h-3" /> Live</a>}
                {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 dark:text-gray-400 hover:underline flex items-center gap-1"><Github className="w-3 h-3" /> Code</a>}
              </div>
            )}
          </div>
          <div className="flex gap-1 shrink-0">
            <button type="button" onClick={() => startEdit(p)} className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Pencil className="w-3.5 h-3.5" /></button>
            <button type="button" onClick={() => remove(p.id)} className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
          </div>
        </div>
      ))}

      {editing && (
        <div className="px-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-indigo-200 dark:border-indigo-800 space-y-3">
          <div>
            <label className={labelClass}>Title</label>
            <input type="text" value={draft.title} onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))} className={inputClass} placeholder="Project title" maxLength={100} />
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea value={draft.description} onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))} className={`${inputClass} resize-none`} rows={2} placeholder="Brief description..." maxLength={500} />
          </div>
          <div>
            <label className={labelClass}>Tech Stack</label>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {draft.techStack.map((t, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-lg font-medium">
                  {t} <button type="button" onClick={() => setDraft((d) => ({ ...d, techStack: d.techStack.filter((_, j) => j !== i) }))} className="text-amber-400 hover:text-amber-600"><X className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input type="text" value={techInput} onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTech(); } }}
                className={`${inputClass} flex-1`} placeholder="Add technology" />
              <button type="button" onClick={addTech}
                className="px-3 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-xl text-xs font-medium hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors shrink-0">
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className={labelClass}><ExternalLink className="w-3.5 h-3.5 text-gray-400" /> Live URL</label>
              <input type="url" value={draft.liveUrl ?? ""} onChange={(e) => setDraft((d) => ({ ...d, liveUrl: e.target.value }))} className={inputClass} placeholder="https://..." />
            </div>
            <div>
              <label className={labelClass}><Github className="w-3.5 h-3.5 text-gray-400" /> Repo URL</label>
              <input type="url" value={draft.repoUrl ?? ""} onChange={(e) => setDraft((d) => ({ ...d, repoUrl: e.target.value }))} className={inputClass} placeholder="https://github.com/..." />
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            <button type="button" onClick={save} disabled={!draft.title.trim()}
              className="px-4 py-2 bg-indigo-600 text-white text-xs font-medium rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50">
              Save
            </button>
            <button type="button" onClick={() => setEditing(null)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      )}

      {projects.length < 10 && !editing && (
        <button type="button" onClick={startAdd}
          className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-500 hover:border-amber-300 dark:hover:border-amber-600 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/30 dark:hover:bg-amber-900/10 transition-all">
          <Plus className="w-4 h-4" /> Add Project
        </button>
      )}
    </div>
  );
}

/* ─── Achievements Sub-Component ──────────────────────── */
function AchievementsSection({ achievements, onChange, inputClass, labelClass, errors }: {
  achievements: AchievementItem[];
  onChange: (a: AchievementItem[]) => void;
  inputClass: string;
  labelClass: string;
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
    <div className="px-6 pb-6 space-y-3 border-t border-gray-50 dark:border-gray-800 pt-4">
      {errors && errors.length > 0 && (
        <p className="text-xs text-red-500 dark:text-red-400 px-1">{errors[0]}</p>
      )}
      {achievements.filter((a) => a.id !== editing).map((a) => (
        <div key={a.id} className="flex items-start gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
          <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center shrink-0">
            <Trophy className="w-4 h-4 text-rose-500 dark:text-rose-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-gray-950 dark:text-white truncate">{a.title}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">{a.description}</p>
            {a.date && <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">{a.date}</p>}
          </div>
          <div className="flex gap-1 shrink-0">
            <button type="button" onClick={() => startEdit(a)} className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Pencil className="w-3.5 h-3.5" /></button>
            <button type="button" onClick={() => remove(a.id)} className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
          </div>
        </div>
      ))}

      {editing && (
        <div className="px-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-rose-200 dark:border-rose-800 space-y-3">
          <div>
            <label className={labelClass}>Title</label>
            <input type="text" value={draft.title} onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))} className={inputClass} placeholder="e.g. Dean's List, Hackathon Winner" maxLength={100} />
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea value={draft.description} onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))} className={`${inputClass} resize-none`} rows={2} placeholder="Brief description..." maxLength={300} />
          </div>
          <div>
            <label className={labelClass}><Calendar className="w-3.5 h-3.5 text-gray-400" /> Date</label>
            <input type="text" value={draft.date ?? ""} onChange={(e) => setDraft((d) => ({ ...d, date: e.target.value }))} className={inputClass} placeholder="e.g. June 2025 or 2024-2025" maxLength={20} />
          </div>
          <div className="flex gap-2 pt-1">
            <button type="button" onClick={save} disabled={!draft.title.trim()}
              className="px-4 py-2 bg-indigo-600 text-white text-xs font-medium rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50">
              Save
            </button>
            <button type="button" onClick={() => setEditing(null)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      )}

      {achievements.length < 10 && !editing && (
        <button type="button" onClick={startAdd}
          className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-500 hover:border-rose-300 dark:hover:border-rose-600 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50/30 dark:hover:bg-rose-900/10 transition-all">
          <Plus className="w-4 h-4" /> Add Achievement
        </button>
      )}
    </div>
  );
}
