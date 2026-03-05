import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  User, Mail, Phone, Building2, Briefcase, FileText, Save, Loader2,
  CheckCircle, Upload, Trash2, Camera, ExternalLink, MapPin, GraduationCap,
  Linkedin, Github, Globe, X, Plus, AlignLeft, Shield, Calendar,
} from "lucide-react";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import toast from "react-hot-toast";

interface ProfileData {
  name: string;
  email: string;
  contactNo: string;
  company: string;
  designation: string;
  resumes: string[];
  profilePic: string;
  bio: string;
  college: string;
  graduationYear: number | null;
  skills: string[];
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  portfolioUrl: string;
}

interface CollegeSuggestion {
  id: number;
  name: string;
  city: string;
  state: string;
  type: string;
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

export default function StudentProfilePage() {
  const { user, setUser } = useAuthStore();
  const [form, setForm] = useState<ProfileData>({
    name: "", email: "", contactNo: "", company: "", designation: "",
    resumes: [], profilePic: "", bio: "", college: "",
    graduationYear: null, skills: [], location: "",
    linkedinUrl: "", githubUrl: "", portfolioUrl: "",
  });
  const [memberSince, setMemberSince] = useState<string | null>(null);
  const [skillInput, setSkillInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingPic, setUploadingPic] = useState(false);
  const [uploadingResume, setUploadingResume] = useState(false);
  const [deletingResume, setDeletingResume] = useState<string | null>(null);
  const picInputRef = useRef<HTMLInputElement>(null);
  const resumeInputRef = useRef<HTMLInputElement>(null);

  // College autocomplete state
  const [collegeSuggestions, setCollegeSuggestions] = useState<CollegeSuggestion[]>([]);
  const [collegeLoading, setCollegeLoading] = useState(false);
  const [showCollegeSuggestions, setShowCollegeSuggestions] = useState(false);
  const collegeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const collegeInputRef = useRef<HTMLInputElement>(null);
  const collegeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    api.get("/auth/me")
      .then((res) => {
        const u = res.data.user;
        setForm({
          name: u.name ?? "", email: u.email ?? "", contactNo: u.contactNo ?? "",
          company: u.company ?? "", designation: u.designation ?? "",
          resumes: u.resumes ?? [], profilePic: u.profilePic ?? "",
          bio: u.bio ?? "", college: u.college ?? "",
          graduationYear: u.graduationYear ?? null, skills: u.skills ?? [],
          location: u.location ?? "", linkedinUrl: u.linkedinUrl ?? "",
          githubUrl: u.githubUrl ?? "", portfolioUrl: u.portfolioUrl ?? "",
        });
        setMemberSince(u.createdAt ?? null);
      })
      .catch(() => toast.error("Failed to load profile"))
      .finally(() => setLoading(false));
  }, []);

  // Close college suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        collegeInputRef.current && !collegeInputRef.current.contains(e.target as Node) &&
        collegeDropdownRef.current && !collegeDropdownRef.current.contains(e.target as Node)
      ) {
        setShowCollegeSuggestions(false);
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
        const res = await api.get(`/colleges?search=${encodeURIComponent(query)}&limit=8`);
        setCollegeSuggestions(res.data.colleges ?? []);
        setShowCollegeSuggestions(true);
      } catch {
        setCollegeSuggestions([]);
      } finally {
        setCollegeLoading(false);
      }
    }, 300);
  }, []);

  const handleChange = (field: keyof ProfileData, value: string | number | null) => {
    setForm((prev) => ({ ...prev, [field]: value }));
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
      resumes: updated.resumes, profilePic: updated.profilePic,
      bio: updated.bio, college: updated.college,
      graduationYear: updated.graduationYear, skills: updated.skills,
      location: updated.location, linkedinUrl: updated.linkedinUrl,
      githubUrl: updated.githubUrl, portfolioUrl: updated.portfolioUrl,
    });
  };

  const handleAddSkill = () => {
    const skill = skillInput.trim();
    if (!skill) return;
    if (form.skills.length >= 20) { toast.error("Maximum 20 skills"); return; }
    if (form.skills.some((s) => s.toLowerCase() === skill.toLowerCase())) { toast.error("Skill already added"); return; }
    setForm((prev) => ({ ...prev, skills: [...prev.skills, skill] }));
    setSkillInput("");
  };

  const handleRemoveSkill = (index: number) => {
    setForm((prev) => ({ ...prev, skills: prev.skills.filter((_, i) => i !== index) }));
  };

  const handleSave = async () => {
    if (!form.name.trim() || form.name.trim().length < 2) {
      toast.error("Name must be at least 2 characters"); return;
    }
    setSaving(true);
    try {
      const res = await api.put("/auth/me", {
        name: form.name.trim(), contactNo: form.contactNo.trim(),
        company: form.company.trim(), designation: form.designation.trim(),
        bio: form.bio.trim(), college: form.college.trim(),
        graduationYear: form.graduationYear || null, skills: form.skills,
        location: form.location.trim(), linkedinUrl: form.linkedinUrl.trim(),
        githubUrl: form.githubUrl.trim(), portfolioUrl: form.portfolioUrl.trim(),
      });
      const u = res.data.user;
      const updated: ProfileData = {
        ...form, name: u.name, contactNo: u.contactNo ?? "",
        company: u.company ?? "", designation: u.designation ?? "",
        bio: u.bio ?? "", college: u.college ?? "",
        graduationYear: u.graduationYear ?? null, skills: u.skills ?? [],
        location: u.location ?? "", linkedinUrl: u.linkedinUrl ?? "",
        githubUrl: u.githubUrl ?? "", portfolioUrl: u.portfolioUrl ?? "",
      };
      setForm(updated);
      syncUser(updated);
      toast.success("Profile updated!");
    } catch {
      toast.error("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const handleProfilePicUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingPic(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await api.post("/upload/profile-pic", fd, { headers: { "Content-Type": "multipart/form-data" } });
      const u = res.data.user;
      setForm((prev) => ({ ...prev, profilePic: u.profilePic ?? "" }));
      syncUser({ ...form, profilePic: u.profilePic ?? "" });
      toast.success("Profile picture updated!");
    } catch {
      toast.error("Failed to upload profile picture");
    } finally {
      setUploadingPic(false);
      if (picInputRef.current) picInputRef.current.value = "";
    }
  };

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (form.resumes.length >= MAX_RESUMES) { toast.error(`Maximum ${MAX_RESUMES} resumes allowed`); return; }
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

  const inputClass = "w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all dark:bg-gray-800 dark:text-white bg-gray-50/50 dark:bg-gray-800/50";
  const labelClass = "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5";
  const sectionClass = "bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden";

  const displayDate = memberSince || user?.createdAt;

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pb-12">
      <SEO title="My Profile" description="Update your InternHack student profile details." noIndex />

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        {/* Profile Header Card */}
        <div className={`${sectionClass} mb-6`}>
          {/* Gradient banner */}
          <div className="h-24 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 relative">
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="px-6 pb-6 -mt-10 relative">
            <div className="flex items-end gap-4">
              {/* Avatar */}
              <div className="relative group">
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-900 shadow-lg text-gray-900 dark:text-white flex items-center justify-center text-2xl font-bold shrink-0 overflow-hidden">
                  {form.profilePic ? (
                    <img src={form.profilePic} alt={form.name} className="w-20 h-20 rounded-2xl object-cover" />
                  ) : (form.name.charAt(0).toUpperCase())}
                </div>
                <button type="button" onClick={() => picInputRef.current?.click()} disabled={uploadingPic}
                  className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  {uploadingPic ? <Loader2 className="w-5 h-5 text-white animate-spin" /> : <Camera className="w-5 h-5 text-white" />}
                </button>
                <input ref={picInputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={handleProfilePicUpload} className="hidden" />
              </div>

              <div className="flex-1 min-w-0 pb-1">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white truncate">{form.name || "Your Name"}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{form.email}</p>
              </div>

              <button type="button" onClick={() => picInputRef.current?.click()} disabled={uploadingPic}
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium shrink-0">
                {uploadingPic ? "Uploading..." : "Change photo"}
              </button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3 mt-4">
              {form.college && (
                <span className="inline-flex items-center gap-1.5 text-xs bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 px-3 py-1.5 rounded-lg font-medium">
                  <GraduationCap className="w-3.5 h-3.5" /> {form.college}
                </span>
              )}
              {form.location && (
                <span className="inline-flex items-center gap-1.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1.5 rounded-lg">
                  <MapPin className="w-3.5 h-3.5" /> {form.location}
                </span>
              )}
              {form.skills.length > 0 && (
                <span className="inline-flex items-center gap-1.5 text-xs bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 px-3 py-1.5 rounded-lg">
                  {form.skills.length} skill{form.skills.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">Update your personal information — a complete profile helps recruiters find you</p>

        {/* Basic Info */}
        <div className={`${sectionClass} p-6 space-y-5`}>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-1.5 h-5 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
            Basic Information
          </h3>

          <div>
            <label className={labelClass}><User className="w-4 h-4 text-gray-400 dark:text-gray-500" /> Full Name</label>
            <input type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={inputClass} placeholder="Your full name" />
          </div>

          <div>
            <label className={labelClass}><Mail className="w-4 h-4 text-gray-400 dark:text-gray-500" /> Email</label>
            <input type="email" value={form.email} disabled className={`${inputClass} !bg-gray-100 dark:!bg-gray-900 text-gray-500 dark:text-gray-500 cursor-not-allowed`} />
          </div>

          <div>
            <label className={labelClass}><AlignLeft className="w-4 h-4 text-gray-400 dark:text-gray-500" /> Bio</label>
            <textarea value={form.bio} onChange={(e) => handleChange("bio", e.target.value)} rows={3} maxLength={500}
              className={`${inputClass} resize-none`} placeholder="A brief introduction about yourself..." />
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 text-right">{form.bio.length}/500</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}><Phone className="w-4 h-4 text-gray-400 dark:text-gray-500" /> Phone</label>
              <input type="tel" value={form.contactNo} onChange={(e) => handleChange("contactNo", e.target.value)} className={inputClass} placeholder="+91 98765 43210" />
            </div>
            <div>
              <label className={labelClass}><MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" /> Location</label>
              <input type="text" value={form.location} onChange={(e) => handleChange("location", e.target.value)} className={inputClass} placeholder="e.g. Mumbai, India" />
            </div>
          </div>
        </div>

        {/* Education & Work */}
        <div className={`${sectionClass} p-6 space-y-5 mt-4`}>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-1.5 h-5 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
            Education & Work
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {/* College with autocomplete */}
            <div className="relative">
              <label className={labelClass}><GraduationCap className="w-4 h-4 text-gray-400 dark:text-gray-500" /> College</label>
              <input
                ref={collegeInputRef}
                type="text"
                value={form.college}
                onChange={(e) => handleCollegeChange(e.target.value)}
                onFocus={() => { if (collegeSuggestions.length > 0) setShowCollegeSuggestions(true); }}
                className={inputClass}
                placeholder="Start typing college name..."
                autoComplete="off"
              />
              {collegeLoading && (
                <Loader2 className="absolute right-3 top-9 w-4 h-4 text-gray-400 animate-spin" />
              )}

              {/* Suggestions dropdown */}
              {showCollegeSuggestions && collegeSuggestions.length > 0 && (
                <div
                  ref={collegeDropdownRef}
                  className="absolute z-50 left-0 right-0 top-full mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl max-h-56 overflow-y-auto"
                >
                  {collegeSuggestions.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => selectCollege(c.name)}
                      className="w-full text-left px-4 py-2.5 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors first:rounded-t-xl last:rounded-b-xl"
                    >
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{c.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{c.city}, {c.state} · {c.type}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className={labelClass}><GraduationCap className="w-4 h-4 text-gray-400 dark:text-gray-500" /> Graduation Year</label>
              <input type="number" value={form.graduationYear ?? ""} onChange={(e) => handleChange("graduationYear", e.target.value ? Number(e.target.value) : null)}
                className={inputClass} placeholder="e.g. 2026" min={1990} max={2040} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}><Building2 className="w-4 h-4 text-gray-400 dark:text-gray-500" /> Company</label>
              <input type="text" value={form.company} onChange={(e) => handleChange("company", e.target.value)} className={inputClass} placeholder="e.g. Google" />
            </div>
            <div>
              <label className={labelClass}><Briefcase className="w-4 h-4 text-gray-400 dark:text-gray-500" /> Role</label>
              <input type="text" value={form.designation} onChange={(e) => handleChange("designation", e.target.value)} className={inputClass} placeholder="e.g. CS Student" />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className={`${sectionClass} p-6 space-y-3 mt-4`}>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-1.5 h-5 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
            Skills <span className="text-xs font-normal text-gray-400 dark:text-gray-500 ml-1">{form.skills.length}/20</span>
          </h3>

          {form.skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {form.skills.map((skill, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-sm rounded-lg font-medium">
                  {skill}
                  <button type="button" onClick={() => handleRemoveSkill(i)} className="text-indigo-400 dark:text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-300"><X className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-2">
            <input type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddSkill(); } }}
              className={`${inputClass} flex-1`} placeholder="Type a skill and press Enter" />
            <button type="button" onClick={handleAddSkill}
              className="px-4 py-2.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors flex items-center gap-1">
              <Plus className="w-4 h-4" /> Add
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className={`${sectionClass} p-6 space-y-5 mt-4`}>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-1.5 h-5 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
            Social Links
          </h3>

          <div>
            <label className={labelClass}><Linkedin className="w-4 h-4 text-gray-400 dark:text-gray-500" /> LinkedIn</label>
            <input type="url" value={form.linkedinUrl} onChange={(e) => handleChange("linkedinUrl", e.target.value)} className={inputClass} placeholder="https://linkedin.com/in/yourname" />
          </div>
          <div>
            <label className={labelClass}><Github className="w-4 h-4 text-gray-400 dark:text-gray-500" /> GitHub</label>
            <input type="url" value={form.githubUrl} onChange={(e) => handleChange("githubUrl", e.target.value)} className={inputClass} placeholder="https://github.com/yourname" />
          </div>
          <div>
            <label className={labelClass}><Globe className="w-4 h-4 text-gray-400 dark:text-gray-500" /> Portfolio</label>
            <input type="url" value={form.portfolioUrl} onChange={(e) => handleChange("portfolioUrl", e.target.value)} className={inputClass} placeholder="https://yourportfolio.com" />
          </div>
        </div>

        {/* Resumes */}
        <div className={`${sectionClass} p-6 space-y-3 mt-4`}>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
            <div className="w-1.5 h-5 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
            <FileText className="w-4 h-4 text-gray-400 dark:text-gray-500" /> Resumes
            <span className="ml-auto text-xs font-normal text-gray-400 dark:text-gray-500">{form.resumes.length}/{MAX_RESUMES}</span>
          </label>

          {form.resumes.length > 0 && (
            <div className="space-y-2">
              {form.resumes.map((url) => (
                <div key={url} className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 truncate flex-1">{getFileNameFromUrl(url)}</span>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0"><ExternalLink className="w-3.5 h-3.5" /></a>
                  <button type="button" onClick={() => handleResumeDelete(url)} disabled={deletingResume === url}
                    className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors shrink-0 disabled:opacity-50">
                    {deletingResume === url ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              ))}
            </div>
          )}

          {form.resumes.length < MAX_RESUMES && (
            <button type="button" onClick={() => resumeInputRef.current?.click()} disabled={uploadingResume}
              className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-500 dark:text-gray-500 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-all disabled:opacity-50">
              {uploadingResume ? <><Loader2 className="w-4 h-4 animate-spin" /> Uploading...</> : <><Upload className="w-4 h-4" /> Upload Resume (PDF)</>}
            </button>
          )}
          <input ref={resumeInputRef} type="file" accept=".pdf" onChange={handleResumeUpload} className="hidden" />
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5">Upload up to {MAX_RESUMES} resumes. PDF only, max 10 MB each.</p>
        </div>

        {/* Save Button */}
        <button onClick={handleSave} disabled={saving}
          className="w-full mt-6 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-violet-600 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20">
          {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : <><Save className="w-4 h-4" /> Save Changes</>}
        </button>

        {/* Account Info */}
        <div className={`${sectionClass} p-6 mt-6 mb-8`}>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <div className="w-1.5 h-5 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
            <Shield className="w-4 h-4 text-indigo-500" /> Account Information
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-1">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" /> Role
              </span>
              <p className="font-semibold text-gray-700 dark:text-gray-300 text-sm">{user?.role}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-1">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" /> Member since
              </span>
              <p className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                {displayDate
                  ? new Date(displayDate).toLocaleDateString("en-IN", { month: "long", year: "numeric" })
                  : "---"}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-1">
                <FileText className="w-3.5 h-3.5 text-violet-400" /> Resumes
              </span>
              <p className="font-semibold text-gray-700 dark:text-gray-300 text-sm">{form.resumes.length} / {MAX_RESUMES}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
