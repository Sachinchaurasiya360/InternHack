import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Building2, Briefcase, FileText, Save, Loader2, CheckCircle, Upload, Trash2, Camera, ExternalLink } from "lucide-react";
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
}

function getFileNameFromUrl(url: string): string {
  try {
    const pathname = new URL(url).pathname;
    const parts = pathname.split("/");
    const full = decodeURIComponent(parts[parts.length - 1] ?? "resume.pdf");
    // Strip the timestamp suffix: "name-1234567890-1234567.pdf" → "name.pdf"
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
    name: "",
    email: "",
    contactNo: "",
    company: "",
    designation: "",
    resumes: [],
    profilePic: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingPic, setUploadingPic] = useState(false);
  const [uploadingResume, setUploadingResume] = useState(false);
  const [deletingResume, setDeletingResume] = useState<string | null>(null);
  const picInputRef = useRef<HTMLInputElement>(null);
  const resumeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    api.get("/auth/me")
      .then((res) => {
        const u = res.data.user;
        setForm({
          name: u.name ?? "",
          email: u.email ?? "",
          contactNo: u.contactNo ?? "",
          company: u.company ?? "",
          designation: u.designation ?? "",
          resumes: u.resumes ?? [],
          profilePic: u.profilePic ?? "",
        });
      })
      .catch(() => toast.error("Failed to load profile"))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (field: "name" | "contactNo" | "company" | "designation", value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const syncUser = (updated: ProfileData) => {
    setUser({ ...user!, name: updated.name, contactNo: updated.contactNo, company: updated.company, designation: updated.designation, resumes: updated.resumes, profilePic: updated.profilePic });
  };

  const handleSave = async () => {
    if (!form.name.trim() || form.name.trim().length < 2) {
      toast.error("Name must be at least 2 characters");
      return;
    }
    setSaving(true);
    try {
      const res = await api.put("/auth/me", {
        name: form.name.trim(),
        contactNo: form.contactNo.trim(),
        company: form.company.trim(),
        designation: form.designation.trim(),
      });
      const u = res.data.user;
      setForm((prev) => ({ ...prev, name: u.name, contactNo: u.contactNo ?? "", company: u.company ?? "", designation: u.designation ?? "" }));
      syncUser({ ...form, name: u.name, contactNo: u.contactNo ?? "", company: u.company ?? "", designation: u.designation ?? "" });
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
    if (form.resumes.length >= MAX_RESUMES) {
      toast.error(`Maximum ${MAX_RESUMES} resumes allowed`);
      return;
    }
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

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3" />
          <div className="h-64 bg-gray-200 rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <SEO title="My Profile" description="Update your InternHack student profile details." noIndex />

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">My Profile</h1>
        <p className="text-sm text-gray-500 mb-6">Update your personal information</p>

        {/* Avatar with upload */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative group">
            <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl font-bold shrink-0 overflow-hidden">
              {form.profilePic ? (
                <img src={form.profilePic} alt={form.name} className="w-16 h-16 rounded-full object-cover" />
              ) : (
                form.name.charAt(0).toUpperCase()
              )}
            </div>
            <button
              type="button"
              onClick={() => picInputRef.current?.click()}
              disabled={uploadingPic}
              className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
              {uploadingPic ? (
                <Loader2 className="w-5 h-5 text-white animate-spin" />
              ) : (
                <Camera className="w-5 h-5 text-white" />
              )}
            </button>
            <input ref={picInputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={handleProfilePicUpload} className="hidden" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{form.name}</h2>
            <p className="text-sm text-gray-500">{form.email}</p>
            <button
              type="button"
              onClick={() => picInputRef.current?.click()}
              disabled={uploadingPic}
              className="text-xs text-violet-600 hover:text-violet-700 font-medium mt-0.5"
            >
              {uploadingPic ? "Uploading..." : "Change photo"}
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
              <User className="w-4 h-4 text-gray-400" /> Full Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-300 transition-all"
              placeholder="Your full name"
            />
          </div>

          {/* Email (read-only) */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
              <Mail className="w-4 h-4 text-gray-400" /> Email
            </label>
            <input
              type="email"
              value={form.email}
              disabled
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-500 cursor-not-allowed"
            />
            <p className="text-xs text-gray-400 mt-1">Email cannot be changed</p>
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
              <Phone className="w-4 h-4 text-gray-400" /> Phone Number
            </label>
            <input
              type="tel"
              value={form.contactNo}
              onChange={(e) => handleChange("contactNo", e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-300 transition-all"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* Company / College */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
              <Building2 className="w-4 h-4 text-gray-400" /> Company / College
            </label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => handleChange("company", e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-300 transition-all"
              placeholder="e.g. IIT Delhi"
            />
          </div>

          {/* Designation / Role */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
              <Briefcase className="w-4 h-4 text-gray-400" /> Designation / Role
            </label>
            <input
              type="text"
              value={form.designation}
              onChange={(e) => handleChange("designation", e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-300 transition-all"
              placeholder="e.g. Computer Science Student"
            />
          </div>

          {/* Resumes */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
              <FileText className="w-4 h-4 text-gray-400" /> Resumes
              <span className="ml-auto text-xs font-normal text-gray-400">{form.resumes.length}/{MAX_RESUMES}</span>
            </label>

            {form.resumes.length > 0 && (
              <div className="space-y-2 mb-3">
                {form.resumes.map((url) => (
                  <div key={url} className="flex items-center gap-3 px-3.5 py-2.5 bg-gray-50 rounded-xl border border-gray-100">
                    <FileText className="w-4 h-4 text-violet-500 shrink-0" />
                    <span className="text-sm text-gray-700 truncate flex-1">{getFileNameFromUrl(url)}</span>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-600 transition-colors shrink-0">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => handleResumeDelete(url)}
                      disabled={deletingResume === url}
                      className="text-gray-400 hover:text-red-500 transition-colors shrink-0 disabled:opacity-50"
                    >
                      {deletingResume === url ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {form.resumes.length < MAX_RESUMES && (
              <button
                type="button"
                onClick={() => resumeInputRef.current?.click()}
                disabled={uploadingResume}
                className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-500 hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50/30 transition-all disabled:opacity-50"
              >
                {uploadingResume ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Uploading...</>
                ) : (
                  <><Upload className="w-4 h-4" /> Upload Resume (PDF)</>
                )}
              </button>
            )}
            <input ref={resumeInputRef} type="file" accept=".pdf" onChange={handleResumeUpload} className="hidden" />
            <p className="text-xs text-gray-400 mt-1.5">Upload up to {MAX_RESUMES} resumes. PDF only, max 10 MB each.</p>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save Changes
              </>
            )}
          </button>
        </div>

        {/* Account Info */}
        <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Account Information
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Role</span>
              <p className="font-medium text-gray-700 mt-0.5">{user?.role}</p>
            </div>
            <div>
              <span className="text-gray-400">Member since</span>
              <p className="font-medium text-gray-700 mt-0.5">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString("en-IN", { month: "long", year: "numeric" }) : "---"}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
