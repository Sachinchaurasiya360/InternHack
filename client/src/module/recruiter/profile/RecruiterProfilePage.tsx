import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  Save,
  Loader2,
  Camera,
  MapPin,
  Linkedin,
  Globe,
  AlignLeft,
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

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  return (
    (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")
  ).toUpperCase();
}

export default function RecruiterProfilePage() {
  const { user, setUser } = useAuthStore();
  const [form, setForm] = useState<RecruiterProfile>({
    name: "",
    email: "",
    contactNo: "",
    company: "",
    designation: "",
    bio: "",
    location: "",
    linkedinUrl: "",
    portfolioUrl: "",
    profilePic: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingPic, setUploadingPic] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [cropSrc, setCropSrc] = useState<string | null>(null);
  const picInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    api
      .get("/auth/me")
      .then((res) => {
        const u = res.data.user;
        setForm({
          name: u.name ?? "",
          email: u.email ?? "",
          contactNo: u.contactNo ?? "",
          company: u.company ?? "",
          designation: u.designation ?? "",
          bio: u.bio ?? "",
          location: u.location ?? "",
          linkedinUrl: u.linkedinUrl ?? "",
          portfolioUrl: u.portfolioUrl ?? "",
          profilePic: u.profilePic ?? "",
        });
      })
      .catch(() => toast.error("Failed to load profile"))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (field: keyof RecruiterProfile, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field])
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
  };

  const handleProfilePicSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMAGE_SIZE) {
      toast.error("Image must be under 2 MB");
      if (picInputRef.current) picInputRef.current.value = "";
      return;
    }
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
      const res = await api.post("/upload/profile-pic", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
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
      toast.error("Name must be at least 2 characters");
      return;
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
        name: u.name,
        contactNo: u.contactNo ?? "",
        company: u.company ?? "",
        designation: u.designation ?? "",
        bio: u.bio ?? "",
        location: u.location ?? "",
        linkedinUrl: u.linkedinUrl ?? "",
        portfolioUrl: u.portfolioUrl ?? "",
      };
      setForm(updated);
      setUser({
        ...user!,
        name: updated.name,
        contactNo: updated.contactNo,
        company: updated.company,
        designation: updated.designation,
        bio: updated.bio,
        location: updated.location,
        linkedinUrl: updated.linkedinUrl,
        portfolioUrl: updated.portfolioUrl,
      });
      toast.success("Profile updated!");
    } catch (err: unknown) {
      const errData = (
        err as {
          response?: {
            data?: { errors?: { fieldErrors?: Record<string, string[]> } };
          };
        }
      )?.response?.data;
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

  const completeness = (() => {
    const fields = [
      form.name,
      form.contactNo,
      form.company,
      form.designation,
      form.bio,
      form.location,
      form.linkedinUrl,
      form.portfolioUrl,
      form.profilePic,
    ];
    const filled = fields.filter((v) => v && v.trim().length > 0).length;
    return Math.round((filled / fields.length) * 100);
  })();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <SEO title="Recruiter Profile" noIndex />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap items-end justify-between gap-4"
      >
        <div className="min-w-0">
          <div className="mt-6 flex items-center gap-2">
            <span className="h-1 w-1 bg-lime-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              account / profile
            </span>
          </div>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Edit profile
          </h1>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            How candidates and teammates will see you across InternHack.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-lime-400 hover:bg-lime-300 disabled:opacity-50 disabled:cursor-not-allowed text-stone-950 text-sm font-semibold rounded-md transition-colors border-0 cursor-pointer"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          {saving ? "Saving…" : "Save changes"}
        </motion.button>
      </motion.header>

      {/* Identity card + completeness */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl overflow-hidden"
      >
        <div className="p-5 sm:p-6 flex flex-wrap items-center gap-5">
          <div className="relative group shrink-0">
            <div className="w-20 h-20 rounded-md bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400 flex items-center justify-center text-xl font-bold tracking-tight overflow-hidden">
              {form.profilePic ? (
                <img
                  src={form.profilePic}
                  alt={form.name}
                  className="w-20 h-20 rounded-md object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                initials(form.name || form.email)
              )}
            </div>
            <button
              type="button"
              onClick={() => picInputRef.current?.click()}
              disabled={uploadingPic}
              className="absolute inset-0 w-20 h-20 bg-stone-950/60 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer border-0"
              aria-label="Change profile picture"
            >
              {uploadingPic ? (
                <Loader2 className="w-4 h-4 text-stone-50 animate-spin" />
              ) : (
                <Camera className="w-4 h-4 text-stone-50" />
              )}
            </button>
            <input
              ref={picInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleProfilePicSelect}
              className="hidden"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-50 truncate">
              {form.name || "Your name"}
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 truncate">
              {form.email}
            </p>
            {(form.designation || form.company) && (
              <p className="mt-0.5 text-sm text-stone-600 dark:text-stone-300 truncate">
                {form.designation}
                {form.designation && form.company ? " at " : ""}
                {form.company}
              </p>
            )}
          </div>

          <div className="w-full sm:w-56">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              <span>profile completeness</span>
              <span className="tabular-nums text-stone-900 dark:text-stone-50">
                {completeness}%
              </span>
            </div>
            <div className="h-1.5 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${completeness}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full bg-lime-400"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Basic Info */}
      <Section
        title="Basic information"
        eyebrow="01 / identity"
        icon={User}
        delay={0.1}
      >
        <div className="space-y-4">
          <Field
            label="Full name"
            icon={User}
            value={form.name}
            onChange={(v) => handleChange("name", v)}
            error={fieldErrors.name}
            placeholder="Your full name"
          />
          <Field
            label="Email"
            icon={Mail}
            value={form.email}
            disabled
            placeholder="Email address"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              label="Phone"
              icon={Phone}
              value={form.contactNo}
              onChange={(v) => handleChange("contactNo", v)}
              error={fieldErrors.contactNo}
              placeholder="+91 9876543210"
            />
            <Field
              label="Location"
              icon={MapPin}
              value={form.location}
              onChange={(v) => handleChange("location", v)}
              error={fieldErrors.location}
              placeholder="e.g. Bangalore"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              label="Company"
              icon={Building2}
              value={form.company}
              onChange={(v) => handleChange("company", v)}
              error={fieldErrors.company}
              placeholder="Your company"
            />
            <Field
              label="Designation"
              icon={Briefcase}
              value={form.designation}
              onChange={(v) => handleChange("designation", v)}
              error={fieldErrors.designation}
              placeholder="e.g. HR Manager"
            />
          </div>
        </div>
      </Section>

      {/* About */}
      <Section
        title="About"
        eyebrow="02 / pitch"
        icon={AlignLeft}
        delay={0.15}
      >
        <textarea
          value={form.bio}
          onChange={(e) => handleChange("bio", e.target.value)}
          className="w-full px-3 py-2.5 text-sm bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-lime-400 min-h-32 resize-none"
          placeholder="Tell candidates a bit about yourself and your company…"
          maxLength={500}
        />
        <p className="text-[11px] font-mono tabular-nums text-stone-400 dark:text-stone-500 mt-1.5 text-right">
          {form.bio.length}/500
        </p>
      </Section>

      {/* Links */}
      <Section title="Links" eyebrow="03 / presence" icon={Globe} delay={0.2}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label="LinkedIn"
            icon={Linkedin}
            value={form.linkedinUrl}
            onChange={(v) => handleChange("linkedinUrl", v)}
            error={fieldErrors.linkedinUrl}
            placeholder="https://linkedin.com/in/yourprofile"
          />
          <Field
            label="Website / portfolio"
            icon={Globe}
            value={form.portfolioUrl}
            onChange={(v) => handleChange("portfolioUrl", v)}
            error={fieldErrors.portfolioUrl}
            placeholder="https://yourcompany.com"
          />
        </div>
      </Section>

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

function Section({
  title,
  eyebrow,
  icon: Icon,
  delay = 0,
  children,
}: {
  title: string;
  eyebrow: string;
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl overflow-hidden"
    >
      <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-stone-200 dark:border-white/10">
        <div className="flex items-center gap-2.5">
          <Icon className="w-4 h-4 text-stone-500" />
          <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50">
            {title}
          </h3>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
          {eyebrow}
        </span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </motion.section>
  );
}

function Field({
  label,
  icon: Icon,
  value,
  onChange,
  disabled,
  placeholder,
  error,
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
      <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
        <input
          type="text"
          value={value}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full pl-10 pr-3 py-2.5 text-sm bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50 placeholder:text-stone-400 border rounded-md focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
            error
              ? "border-red-400 dark:border-red-500 focus:border-red-500"
              : "border-stone-200 dark:border-white/10 focus:border-lime-400"
          }`}
        />
      </div>
      {error && (
        <p className="text-[11px] text-red-500 mt-1">{error.join(", ")}</p>
      )}
    </div>
  );
}
