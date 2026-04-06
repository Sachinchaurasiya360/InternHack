import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Plus,
  Trash2,
  User,
  Briefcase,
  GraduationCap,
  Code2,
  FolderOpen,
  Award,
  FileText,
  ChevronDown,
  ChevronUp,
  Eye,
  PenLine,
  Palette,
  ScanSearch,
  CheckCircle,
  UserPlus,
} from "lucide-react";
import toast from "@/components/ui/toast";
import { SEO } from "../../../components/SEO";
import { useAuthStore } from "../../../lib/auth.store";
import type {
  ResumeData,
  TemplateId,
  WorkExperience,
  Education,
  Project,
  Certification,
} from "./resume-builder/types";
import { defaultResumeData } from "./resume-builder/types";
import { TEMPLATES, getTemplate } from "./resume-builder/templates";
import AtsToolsNav from "./AtsToolsNav";
import { inputCls, labelCls } from "./_shared/form-styles";

const STORAGE_KEY = "internhack-resume-data";
const TEMPLATE_KEY = "internhack-resume-template";

function loadSaved(): ResumeData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultResumeData;
    const parsed = JSON.parse(saved) as ResumeData;
    // If saved data is essentially empty, use the prefilled defaults
    const isEmpty =
      !parsed.personalInfo?.fullName &&
      !parsed.summary &&
      parsed.experience?.length === 0 &&
      parsed.education?.length === 0 &&
      parsed.skills?.length === 0;
    return isEmpty ? defaultResumeData : parsed;
  } catch {
    return defaultResumeData;
  }
}

function loadTemplate(): TemplateId {
  return (localStorage.getItem(TEMPLATE_KEY) as TemplateId) || "classic";
}

// ── Section Wrapper ────────────────────────────────────────────────
function FormSection({
  title,
  icon,
  open,
  onToggle,
  children,
  delay = 0,
}: {
  title: string;
  icon: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors"
      >
        <span className="flex items-center gap-2.5 text-sm font-semibold text-gray-800 dark:text-gray-200">
          {icon}
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 space-y-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Small helpers ──────────────────────────────────────────────────
const btnAddCls =
  "flex items-center gap-1.5 text-xs font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 mt-2";
const btnRemoveCls =
  "p-1 text-gray-400 dark:text-gray-500 hover:text-red-500 transition-colors rounded";

function uid() {
  return crypto.randomUUID();
}

const TEMPLATE_COLORS: Record<string, { dot: string; bg: string; border: string }> = {
  classic: { dot: "bg-gray-800 dark:bg-gray-200", bg: "bg-gray-50 dark:bg-gray-800/80", border: "border-gray-800 dark:border-gray-200" },
  modern: { dot: "bg-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-900/20", border: "border-indigo-500" },
  minimal: { dot: "bg-gray-400", bg: "bg-gray-50 dark:bg-gray-800/60", border: "border-gray-400" },
  professional: { dot: "bg-gray-900 dark:bg-white", bg: "bg-gray-50 dark:bg-gray-800/80", border: "border-gray-900 dark:border-white" },
  creative: { dot: "bg-violet-500", bg: "bg-violet-50 dark:bg-violet-900/20", border: "border-violet-500" },
  compact: { dot: "bg-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-500" },
};

// Tool nav handled by shared AtsToolsNav

// ── Memoized list-row components ──────────────────────────────────
// Each row re-renders only when its item data changes because update/remove
// callbacks are stable (useCallback in the parent) and the item itself is
// referentially swapped only when its fields change.

const ExperienceRow = React.memo(function ExperienceRow({
  exp,
  onUpdate,
  onRemove,
}: {
  exp: WorkExperience;
  onUpdate: (id: string, field: keyof WorkExperience, value: unknown) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="border border-gray-100 dark:border-gray-800 rounded-xl p-3 space-y-2 relative"
    >
      <button onClick={() => onRemove(exp.id)} className={`absolute top-2 right-2 ${btnRemoveCls}`}>
        <Trash2 className="w-3.5 h-3.5" />
      </button>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className={labelCls}>Job Title</label>
          <input className={inputCls} placeholder="Software Engineer" value={exp.title} onChange={(e) => onUpdate(exp.id, "title", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Company</label>
          <input className={inputCls} placeholder="Google" value={exp.company} onChange={(e) => onUpdate(exp.id, "company", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Start Date</label>
          <input className={inputCls} placeholder="Jan 2022" value={exp.startDate} onChange={(e) => onUpdate(exp.id, "startDate", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>End Date</label>
          <input
            className={inputCls}
            placeholder="Present"
            value={exp.current ? "Present" : exp.endDate}
            disabled={exp.current}
            onChange={(e) => onUpdate(exp.id, "endDate", e.target.value)}
          />
        </div>
      </div>
      <label className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 cursor-pointer">
        <input
          type="checkbox"
          checked={exp.current}
          onChange={(e) => onUpdate(exp.id, "current", e.target.checked)}
          className="rounded border-gray-300 dark:border-gray-600"
        />
        I currently work here
      </label>
      <div>
        <label className={labelCls}>Description (one bullet per line)</label>
        <textarea
          className={`${inputCls} min-h-15 resize-y`}
          placeholder="- Led development of microservices architecture&#10;- Improved API response time by 40%"
          value={exp.description}
          onChange={(e) => onUpdate(exp.id, "description", e.target.value)}
        />
      </div>
    </motion.div>
  );
});

const EducationRow = React.memo(function EducationRow({
  edu,
  onUpdate,
  onRemove,
}: {
  edu: Education;
  onUpdate: (id: string, field: keyof Education, value: string) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="border border-gray-100 dark:border-gray-800 rounded-xl p-3 space-y-2 relative"
    >
      <button onClick={() => onRemove(edu.id)} className={`absolute top-2 right-2 ${btnRemoveCls}`}>
        <Trash2 className="w-3.5 h-3.5" />
      </button>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2">
          <label className={labelCls}>Institution</label>
          <input className={inputCls} placeholder="Stanford University" value={edu.institution} onChange={(e) => onUpdate(edu.id, "institution", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Degree</label>
          <input className={inputCls} placeholder="B.Tech" value={edu.degree} onChange={(e) => onUpdate(edu.id, "degree", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Field of Study</label>
          <input className={inputCls} placeholder="Computer Science" value={edu.field} onChange={(e) => onUpdate(edu.id, "field", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Start Date</label>
          <input className={inputCls} placeholder="Aug 2019" value={edu.startDate} onChange={(e) => onUpdate(edu.id, "startDate", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>End Date</label>
          <input className={inputCls} placeholder="May 2023" value={edu.endDate} onChange={(e) => onUpdate(edu.id, "endDate", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>GPA (optional)</label>
          <input className={inputCls} placeholder="3.8/4.0" value={edu.gpa} onChange={(e) => onUpdate(edu.id, "gpa", e.target.value)} />
        </div>
      </div>
    </motion.div>
  );
});

const ProjectRow = React.memo(function ProjectRow({
  proj,
  onUpdate,
  onRemove,
}: {
  proj: Project;
  onUpdate: (id: string, field: keyof Project, value: string) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="border border-gray-100 dark:border-gray-800 rounded-xl p-3 space-y-2 relative"
    >
      <button onClick={() => onRemove(proj.id)} className={`absolute top-2 right-2 ${btnRemoveCls}`}>
        <Trash2 className="w-3.5 h-3.5" />
      </button>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className={labelCls}>Project Name</label>
          <input className={inputCls} placeholder="E-Commerce Platform" value={proj.name} onChange={(e) => onUpdate(proj.id, "name", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Link (optional)</label>
          <input className={inputCls} placeholder="github.com/..." value={proj.link} onChange={(e) => onUpdate(proj.id, "link", e.target.value)} />
        </div>
        <div className="col-span-2">
          <label className={labelCls}>Tech Stack</label>
          <input className={inputCls} placeholder="React, Node.js, PostgreSQL" value={proj.techStack} onChange={(e) => onUpdate(proj.id, "techStack", e.target.value)} />
        </div>
        <div className="col-span-2">
          <label className={labelCls}>Description</label>
          <textarea
            className={`${inputCls} min-h-12.5 resize-y`}
            placeholder="Built a full-stack e-commerce platform with..."
            value={proj.description}
            onChange={(e) => onUpdate(proj.id, "description", e.target.value)}
          />
        </div>
      </div>
    </motion.div>
  );
});

const CertificationRow = React.memo(function CertificationRow({
  cert,
  onUpdate,
  onRemove,
}: {
  cert: Certification;
  onUpdate: (id: string, field: keyof Certification, value: string) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="border border-gray-100 dark:border-gray-800 rounded-xl p-3 space-y-2 relative"
    >
      <button onClick={() => onRemove(cert.id)} className={`absolute top-2 right-2 ${btnRemoveCls}`}>
        <Trash2 className="w-3.5 h-3.5" />
      </button>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2">
          <label className={labelCls}>Certification Name</label>
          <input className={inputCls} placeholder="AWS Solutions Architect" value={cert.name} onChange={(e) => onUpdate(cert.id, "name", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Issuer</label>
          <input className={inputCls} placeholder="Amazon Web Services" value={cert.issuer} onChange={(e) => onUpdate(cert.id, "issuer", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Date</label>
          <input className={inputCls} placeholder="Mar 2024" value={cert.date} onChange={(e) => onUpdate(cert.id, "date", e.target.value)} />
        </div>
      </div>
    </motion.div>
  );
});

// ── Main Page ──────────────────────────────────────────────────────
export default function ResumeBuilderPage() {
  const [data, setData] = useState<ResumeData>(loadSaved);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>(loadTemplate);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    personal: true,
    summary: false,
    experience: false,
    education: false,
    skills: false,
    projects: false,
    certifications: false,
  });
  const [mobileView, setMobileView] = useState<"form" | "preview">("form");
  const [skillInput, setSkillInput] = useState("");
  const printRef = useRef<HTMLDivElement>(null);
  const user = useAuthStore((s) => s.user);

  // Persist — debounced so we're not serializing the full resume on every keystroke.
  useEffect(() => {
    const t = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }, 500);
    return () => clearTimeout(t);
  }, [data]);
  useEffect(() => {
    localStorage.setItem(TEMPLATE_KEY, selectedTemplate);
  }, [selectedTemplate]);

  const importFromProfile = () => {
    if (!user) {
      toast.error("You must be signed in to import your profile.");
      return;
    }
    const hasAny =
      !!user.name ||
      !!user.email ||
      (user.skills?.length ?? 0) > 0 ||
      (user.projects?.length ?? 0) > 0 ||
      !!user.college ||
      !!user.company;
    if (!hasAny) {
      toast.error("Your profile is empty. Complete it first, then import.");
      return;
    }

    const confirmed = confirm(
      "Import your InternHack profile into the builder? This will overwrite current fields that have a profile equivalent."
    );
    if (!confirmed) return;

    setData((d) => ({
      ...d,
      personalInfo: {
        ...d.personalInfo,
        fullName: user.name || d.personalInfo.fullName,
        email: user.email || d.personalInfo.email,
        phone: user.contactNo || d.personalInfo.phone,
        location: user.location || d.personalInfo.location,
        linkedIn: user.linkedinUrl || d.personalInfo.linkedIn,
        portfolio: user.portfolioUrl || user.githubUrl || d.personalInfo.portfolio,
      },
      summary: user.bio || d.summary,
      experience: user.company
        ? [
            {
              id: uid(),
              company: user.company,
              title: user.designation || "",
              startDate: "",
              endDate: "",
              current: true,
              description: "",
            },
            ...d.experience,
          ]
        : d.experience,
      education: user.college
        ? [
            {
              id: uid(),
              institution: user.college,
              degree: "",
              field: "",
              startDate: "",
              endDate: user.graduationYear ? String(user.graduationYear) : "",
              gpa: "",
            },
            ...d.education,
          ]
        : d.education,
      skills: user.skills && user.skills.length > 0
        ? Array.from(new Set([...d.skills, ...user.skills]))
        : d.skills,
      projects: [
        ...(user.projects ?? []).map<Project>((p) => ({
          id: uid(),
          name: p.title,
          description: p.description,
          techStack: p.techStack.join(", "),
          link: p.liveUrl || p.repoUrl || "",
        })),
        ...d.projects,
      ],
    }));
    toast.success("Profile imported into the builder.");
  };

  const toggle = (key: string) =>
    setOpenSections((s) => ({ ...s, [key]: !s[key] }));

  // Update helpers
  const updatePersonal = (field: string, value: string) =>
    setData((d) => ({ ...d, personalInfo: { ...d.personalInfo, [field]: value } }));

  const updateSummary = (value: string) =>
    setData((d) => ({ ...d, summary: value }));

  // Experience
  const addExperience = useCallback(() =>
    setData((d) => ({
      ...d,
      experience: [
        ...d.experience,
        { id: uid(), company: "", title: "", startDate: "", endDate: "", current: false, description: "" },
      ],
    })), []);
  const updateExperience = useCallback((id: string, field: keyof WorkExperience, value: unknown) =>
    setData((d) => ({
      ...d,
      experience: d.experience.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    })), []);
  const removeExperience = useCallback((id: string) =>
    setData((d) => ({ ...d, experience: d.experience.filter((e) => e.id !== id) })), []);

  // Education
  const addEducation = useCallback(() =>
    setData((d) => ({
      ...d,
      education: [
        ...d.education,
        { id: uid(), institution: "", degree: "", field: "", startDate: "", endDate: "", gpa: "" },
      ],
    })), []);
  const updateEducation = useCallback((id: string, field: keyof Education, value: string) =>
    setData((d) => ({
      ...d,
      education: d.education.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    })), []);
  const removeEducation = useCallback((id: string) =>
    setData((d) => ({ ...d, education: d.education.filter((e) => e.id !== id) })), []);

  // Skills
  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed || data.skills.includes(trimmed)) return;
    setData((d) => ({ ...d, skills: [...d.skills, trimmed] }));
    setSkillInput("");
  };
  const removeSkill = (skill: string) =>
    setData((d) => ({ ...d, skills: d.skills.filter((s) => s !== skill) }));

  // Projects
  const addProject = useCallback(() =>
    setData((d) => ({
      ...d,
      projects: [
        ...d.projects,
        { id: uid(), name: "", description: "", techStack: "", link: "" },
      ],
    })), []);
  const updateProject = useCallback((id: string, field: keyof Project, value: string) =>
    setData((d) => ({
      ...d,
      projects: d.projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    })), []);
  const removeProject = useCallback((id: string) =>
    setData((d) => ({ ...d, projects: d.projects.filter((p) => p.id !== id) })), []);

  // Certifications
  const addCertification = useCallback(() =>
    setData((d) => ({
      ...d,
      certifications: [
        ...d.certifications,
        { id: uid(), name: "", issuer: "", date: "" },
      ],
    })), []);
  const updateCertification = useCallback((id: string, field: keyof Certification, value: string) =>
    setData((d) => ({
      ...d,
      certifications: d.certifications.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    })), []);
  const removeCertification = useCallback((id: string) =>
    setData((d) => ({ ...d, certifications: d.certifications.filter((c) => c.id !== id) })), []);

  // PDF Download
  const handleDownload = () => {
    if (!printRef.current) return;
    const content = printRef.current.innerHTML;
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`<!DOCTYPE html>
<html><head><title>${data.personalInfo.fullName || "Resume"}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"><\/script>
<style>
  body { margin: 0; font-family: 'Inter', sans-serif; }
  @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
  @page { size: A4; margin: 0; }
</style></head>
<body>${content}</body></html>`);
    win.document.close();
    setTimeout(() => { win.print(); }, 600);
  };

  const TemplateComponent = getTemplate(selectedTemplate).component;

  return (
    <>
      <SEO title="Resume Builder - InternHack" description="Build your ATS-optimized resume with professional templates" noIndex />

      <div className="relative max-w-[1440px] mx-auto pb-12">
        {/* Atmospheric background */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-violet-100 to-indigo-100 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-40" />
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Page Header - landing page style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 px-4"
        >
         
          <h1 className=" mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
            Build Your <span className="text-gradient-accent">Perfect Resume</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
            Fill in your details, pick a template, and download a polished PDF
          </p>
        </motion.div>

        <div className="px-4 sm:px-6 mb-8">
          <AtsToolsNav />
        </div>

        {/* Template Selector */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="px-4 sm:px-6 mb-6"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-4">
            <div className="flex items-center gap-3 mb-3">
              <Palette className="w-4 h-4 text-violet-500" />
              <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Choose Template
              </h2>
              {/* Mobile toggle */}
              <div className="flex md:hidden ml-auto bg-gray-100 dark:bg-gray-800 rounded-xl p-0.5">
                <button
                  onClick={() => setMobileView("form")}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    mobileView === "form" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <PenLine className="w-3.5 h-3.5 inline mr-1" />
                  Edit
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
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {TEMPLATES.map((tpl) => {
                const isActive = selectedTemplate === tpl.id;
                const colors = TEMPLATE_COLORS[tpl.id] ?? TEMPLATE_COLORS.classic;
                return (
                  <button
                    key={tpl.id}
                    onClick={() => setSelectedTemplate(tpl.id)}
                    className={`shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-medium transition-all border-2 ${
                      isActive
                        ? `${colors.border} ${colors.bg} text-gray-900 dark:text-white shadow-sm`
                        : "border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${isActive ? colors.dot : "bg-gray-300 dark:bg-gray-600"}`} />
                    <span>{tpl.name}</span>
                    {isActive && (
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="px-4 sm:px-6">
          <div className="flex gap-6">
            {/* Left - Form */}
            <div
              className={`w-full md:w-[420px] shrink-0 space-y-3 ${
                mobileView === "preview" ? "hidden md:block" : ""
              }`}
            >
              {/* Import from InternHack profile */}
              <motion.button
                type="button"
                onClick={importFromProfile}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.18 }}
                className="w-full flex items-center gap-3 p-3.5 rounded-2xl border-2 border-dashed border-violet-300 dark:border-violet-800/60 bg-violet-50/40 dark:bg-violet-900/10 hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all text-left"
              >
                <div className="w-9 h-9 rounded-lg bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center shrink-0">
                  <UserPlus className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-violet-700 dark:text-violet-300">
                    Import from InternHack profile
                  </p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5">
                    Prefill name, contact, education, skills &amp; projects from your profile
                  </p>
                </div>
              </motion.button>

              {/* Personal Info */}
              <FormSection
                title="Personal Information"
                icon={<User className="w-4 h-4 text-violet-500" />}
                open={openSections.personal!}
                onToggle={() => toggle("personal")}
                delay={0.2}
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <label className={labelCls}>Full Name</label>
                    <input className={inputCls} placeholder="John Doe" value={data.personalInfo.fullName} onChange={(e) => updatePersonal("fullName", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Email</label>
                    <input className={inputCls} type="email" placeholder="john@email.com" value={data.personalInfo.email} onChange={(e) => updatePersonal("email", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Phone</label>
                    <input className={inputCls} placeholder="+1 234 567 890" value={data.personalInfo.phone} onChange={(e) => updatePersonal("phone", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Location</label>
                    <input className={inputCls} placeholder="New York, NY" value={data.personalInfo.location} onChange={(e) => updatePersonal("location", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>LinkedIn</label>
                    <input className={inputCls} placeholder="linkedin.com/in/johndoe" value={data.personalInfo.linkedIn} onChange={(e) => updatePersonal("linkedIn", e.target.value)} />
                  </div>
                  <div className="col-span-2">
                    <label className={labelCls}>Portfolio / Website</label>
                    <input className={inputCls} placeholder="johndoe.dev" value={data.personalInfo.portfolio} onChange={(e) => updatePersonal("portfolio", e.target.value)} />
                  </div>
                </div>
              </FormSection>

              {/* Summary */}
              <FormSection
                title="Professional Summary"
                icon={<FileText className="w-4 h-4 text-blue-500" />}
                open={openSections.summary!}
                onToggle={() => toggle("summary")}
                delay={0.24}
              >
                <textarea
                  className={`${inputCls} min-h-[80px] resize-y`}
                  placeholder="Experienced software engineer with 3+ years of expertise in React and Node.js..."
                  value={data.summary}
                  onChange={(e) => updateSummary(e.target.value)}
                />
              </FormSection>

              {/* Experience */}
              <FormSection
                title={`Work Experience${data.experience.length ? ` (${data.experience.length})` : ""}`}
                icon={<Briefcase className="w-4 h-4 text-emerald-500" />}
                open={openSections.experience!}
                onToggle={() => toggle("experience")}
                delay={0.28}
              >
                <AnimatePresence>
                  {data.experience.map((exp) => (
                    <ExperienceRow key={exp.id} exp={exp} onUpdate={updateExperience} onRemove={removeExperience} />
                  ))}
                </AnimatePresence>
                <button onClick={addExperience} className={btnAddCls}>
                  <Plus className="w-3.5 h-3.5" /> Add Experience
                </button>
              </FormSection>

              {/* Education */}
              <FormSection
                title={`Education${data.education.length ? ` (${data.education.length})` : ""}`}
                icon={<GraduationCap className="w-4 h-4 text-amber-500" />}
                open={openSections.education!}
                onToggle={() => toggle("education")}
                delay={0.32}
              >
                <AnimatePresence>
                  {data.education.map((edu) => (
                    <EducationRow key={edu.id} edu={edu} onUpdate={updateEducation} onRemove={removeEducation} />
                  ))}
                </AnimatePresence>
                <button onClick={addEducation} className={btnAddCls}>
                  <Plus className="w-3.5 h-3.5" /> Add Education
                </button>
              </FormSection>

              {/* Skills */}
              <FormSection
                title={`Skills${data.skills.length ? ` (${data.skills.length})` : ""}`}
                icon={<Code2 className="w-4 h-4 text-pink-500" />}
                open={openSections.skills!}
                onToggle={() => toggle("skills")}
                delay={0.36}
              >
                <div className="flex gap-2">
                  <input
                    className={inputCls}
                    placeholder="Type a skill and press Enter"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addSkill();
                      }
                    }}
                  />
                  <button
                    onClick={addSkill}
                    className="px-3.5 py-2.5 bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-xl text-xs font-medium hover:bg-violet-100 dark:hover:bg-violet-900/50 transition-colors shrink-0"
                  >
                    Add
                  </button>
                </div>
                {data.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {data.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs"
                      >
                        {skill}
                        <button onClick={() => removeSkill(skill)} className="text-gray-400 dark:text-gray-500 hover:text-red-500">
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </FormSection>

              {/* Projects */}
              <FormSection
                title={`Projects${data.projects.length ? ` (${data.projects.length})` : ""}`}
                icon={<FolderOpen className="w-4 h-4 text-indigo-500" />}
                open={openSections.projects!}
                onToggle={() => toggle("projects")}
                delay={0.4}
              >
                <AnimatePresence>
                  {data.projects.map((proj) => (
                    <ProjectRow key={proj.id} proj={proj} onUpdate={updateProject} onRemove={removeProject} />
                  ))}
                </AnimatePresence>
                <button onClick={addProject} className={btnAddCls}>
                  <Plus className="w-3.5 h-3.5" /> Add Project
                </button>
              </FormSection>

              {/* Certifications */}
              <FormSection
                title={`Certifications${data.certifications.length ? ` (${data.certifications.length})` : ""}`}
                icon={<Award className="w-4 h-4 text-teal-500" />}
                open={openSections.certifications!}
                onToggle={() => toggle("certifications")}
                delay={0.44}
              >
                <AnimatePresence>
                  {data.certifications.map((cert) => (
                    <CertificationRow key={cert.id} cert={cert} onUpdate={updateCertification} onRemove={removeCertification} />
                  ))}
                </AnimatePresence>
                <button onClick={addCertification} className={btnAddCls}>
                  <Plus className="w-3.5 h-3.5" /> Add Certification
                </button>
              </FormSection>
            </div>

            {/* Right - Preview */}
            <div
              className={`flex-1 ${
                mobileView === "form" ? "hidden md:block" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sticky top-4"
              >
                {/* Preview header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-violet-500" />
                    <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Live Preview
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to="/student/ats/score"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors no-underline"
                    >
                      <ScanSearch className="w-3.5 h-3.5" />
                      Score It
                    </Link>
                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-xs font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download PDF
                    </button>
                  </div>
                </div>

                <div
                  className="bg-white rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
                  style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}
                >
                  <div ref={printRef}>
                    <TemplateComponent data={data} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
