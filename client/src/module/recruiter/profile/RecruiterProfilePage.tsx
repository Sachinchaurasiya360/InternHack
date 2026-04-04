import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  User, Mail, Phone, Building2, Briefcase, Save, Loader2,
  Camera, MapPin, Linkedin, Globe, AlignLeft,
} from "lucide-react";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import { LoadingScreen } from "../../../components/LoadingScreen";
import toast from "@/components/ui/toast";
import ImageCropModal from "../../../components/ImageCropModal";
import { SEO } from "../../../components/SEO";

interface RecruiterProfile {
  name: string;
  email: string;
  contactNo: string;
  company: string;
  designation: string;
  bio: string;
  location: string;
  linkedinUrl: string;
  portfolioUrl: string;
  profilePic: string;
}

const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2 MB

export default function RecruiterProfilePage() {
  const { user, setUser } = useAuthStore();
  const [form, setForm] = useState<RecruiterProfile>({
    name: "", email: "", contactNo: "", company: "", designation: "",
    bio: "", location: "", linkedinUrl: "", portfolioUrl: "", profilePic: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingPic, setUploadingPic] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [cropSrc, setCropSrc] = useState<string | null>(null);
  const picInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    api.get("/auth/me")
      .then((res) => {
        const u = res.data.user;
        setForm({
          name: u.name ?? "", email: u.email ?? "", contactNo: u.contactNo ?? "",
          company: u.company ?? "", designation: u.designation ?? "",
          bio: u.bio ?? "", location: u.location ?? "",
          linkedinUrl: u.linkedinUrl ?? "", portfolioUrl: u.portfolioUrl ?? "",
          profilePic: u.profilePic ?? "",
        });
      })
      .catch(() => toast.error("Failed to load profile"))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (field: keyof RecruiterProfile, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) setFieldErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
  };

  const handleProfilePicSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMAGE_SIZE) { toast.error("Image must be under 2 MB"); if (picInputRef.current) picInputRef.current.value = ""; return; }
    const reader = new FileReader();
    reader.onload = () => setCropSrc(reader.result as string);
    reader.readAsDataURL(file);
    if (picInputRef.current) picInputRef.current.value = "";
  };

  const handleCropComplete = async (blob: Blob) => {
    setCropSrc(null);
    setUploadingPic(true);
    try {
      const fd = new FormData();
      fd.append("file", blob, "cropped.jpg");
      const res = await api.post("/upload/profile-pic", fd, { headers: { "Content-Type": "multipart/form-data" } });
      const u = res.data.user;
      setForm((prev) => ({ ...prev, profilePic: u.profilePic ?? "" }));
      setUser({ ...user!, profilePic: u.profilePic ?? "" });
      toast.success("Profile picture updated!");
    } catch {
      toast.error("Failed to upload profile picture");
    } finally {
      setUploadingPic(false);
    }
  };

  const handleSave = async () => {
    if (!form.name.trim() || form.name.trim().length < 2) {
      toast.error("Name must be at least 2 characters"); return;
    }
    setFieldErrors({});
    setSaving(true);
    try {
      const res = await api.put("/auth/me", {
        name: form.name.trim(),
        contactNo: form.contactNo.trim(),
        company: form.company.trim(),
        designation: form.designation.trim(),
        bio: form.bio.trim(),
        location: form.location.trim(),
        linkedinUrl: form.linkedinUrl.trim(),
        portfolioUrl: form.portfolioUrl.trim(),
      });
      const u = res.data.user;
      const updated: RecruiterProfile = {
        ...form,
        name: u.name, contactNo: u.contactNo ?? "",
        company: u.company ?? "", designation: u.designation ?? "",
        bio: u.bio ?? "", location: u.location ?? "",
        linkedinUrl: u.linkedinUrl ?? "", portfolioUrl: u.portfolioUrl ?? "",
      };
      setForm(updated);
      setUser({
        ...user!, name: updated.name, contactNo: updated.contactNo,
        company: updated.company, designation: updated.designation,
        bio: updated.bio, location: updated.location,
        linkedinUrl: updated.linkedinUrl, portfolioUrl: updated.portfolioUrl,
      });
      toast.success("Profile updated!");
    } catch (err: unknown) {
      const errData = (err as { response?: { data?: { errors?: { fieldErrors?: Record<string, string[]> } } } })?.response?.data;
      if (errData?.errors?.fieldErrors) {
        setFieldErrors(errData.errors.fieldErrors);
        toast.error("Please fix the highlighted fields");
      } else {
        toast.error("Failed to save profile");
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <div className="max-w-2xl mx-auto">
      <SEO title="Recruiter Profile" noIndex />
      <div className="flex items-center justify-between mb-6 mt-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Profile</h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saving ? "Saving..." : "Save Changes"}
        </motion.button>
      </div>

      {/* Profile Picture */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 mb-4"
      >
        <div className="flex items-center gap-5">
          <div className="relative group">
            <div className="w-20 h-20 rounded-2xl bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white flex items-center justify-center text-2xl font-bold overflow-hidden">
              {form.profilePic ? (
                <img src={form.profilePic} alt={form.name} className="w-20 h-20 rounded-2xl object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              ) : (
                <User className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              )}
            </div>
            <button type="button" onClick={() => picInputRef.current?.click()} disabled={uploadingPic}
              className="absolute inset-0 w-20 h-20 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              {uploadingPic ? <Loader2 className="w-4 h-4 text-white animate-spin" /> : <Camera className="w-4 h-4 text-white" />}
            </button>
            <input ref={picInputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={handleProfilePicSelect} className="hidden" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">{form.name || "Your Name"}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{form.email}</p>
            {(form.designation || form.company) && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                {form.designation}{form.designation && form.company ? " at " : ""}{form.company}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Basic Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 mb-4"
      >
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-gray-400" /> Basic Information
        </h3>
        <div className="space-y-4">
          <Field label="Full Name" icon={User} value={form.name} onChange={(v) => handleChange("name", v)} error={fieldErrors.name} placeholder="Your full name" />
          <Field label="Email" icon={Mail} value={form.email} disabled placeholder="Email address" />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Phone" icon={Phone} value={form.contactNo} onChange={(v) => handleChange("contactNo", v)} error={fieldErrors.contactNo} placeholder="+91 9876543210" />
            <Field label="Location" icon={MapPin} value={form.location} onChange={(v) => handleChange("location", v)} error={fieldErrors.location} placeholder="e.g. Bangalore" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Company" icon={Building2} value={form.company} onChange={(v) => handleChange("company", v)} error={fieldErrors.company} placeholder="Your company" />
            <Field label="Designation" icon={Briefcase} value={form.designation} onChange={(v) => handleChange("designation", v)} error={fieldErrors.designation} placeholder="e.g. HR Manager" />
          </div>
        </div>
      </motion.div>

      {/* About */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 mb-4"
      >
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <AlignLeft className="w-4 h-4 text-gray-400" /> About
        </h3>
        <div>
          <textarea
            value={form.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black dark:focus:border-white min-h-28 dark:bg-gray-800 dark:text-white text-sm resize-none"
            placeholder="Tell candidates a bit about yourself and your company..."
            maxLength={500}
          />
          <p className="text-xs text-gray-400 mt-1 text-right">{form.bio.length}/500</p>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 mb-8"
      >
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-400" /> Links
        </h3>
        <div className="space-y-4">
          <Field label="LinkedIn" icon={Linkedin} value={form.linkedinUrl} onChange={(v) => handleChange("linkedinUrl", v)} error={fieldErrors.linkedinUrl} placeholder="https://linkedin.com/in/yourprofile" />
          <Field label="Website / Portfolio" icon={Globe} value={form.portfolioUrl} onChange={(v) => handleChange("portfolioUrl", v)} error={fieldErrors.portfolioUrl} placeholder="https://yourcompany.com" />
        </div>
      </motion.div>

      {/* Image Crop Modal */}
      {cropSrc && (
        <ImageCropModal
          imageSrc={cropSrc}
          aspect={1}
          onCrop={handleCropComplete}
          onClose={() => setCropSrc(null)}
        />
      )}
    </div>
  );
}

function Field({
  label, icon: Icon, value, onChange, disabled, placeholder, error,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange?: (v: string) => void;
  disabled?: boolean;
  placeholder?: string;
  error?: string[];
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black dark:focus:border-white text-sm transition-colors dark:bg-gray-800 dark:text-white disabled:opacity-60 disabled:cursor-not-allowed ${
            error ? "border-red-400 dark:border-red-500" : "border-gray-300 dark:border-gray-600"
          }`}
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error.join(", ")}</p>}
    </div>
  );
}
