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

const STORAGE_KEY = "internhack-resume-data";
const TEMPLATE_KEY = "internhack-resume-template";

function loadSaved(): ResumeData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultResumeData;
    const parsed = JSON.parse(saved) as ResumeData;
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

const cardCls =
  "bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md";
const sectionKickerCls =
  "inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500";
const inputCls =
  "w-full px-3 py-2 border border-stone-300 dark:border-white/10 rounded-md text-sm focus:outline-none focus:border-lime-400 transition-colors bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600";
const labelCls =
  "block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5";

// ── Collapsible form section ────────────────────────────────────
function FormSection({
  kicker,
  title,
  icon,
  open,
  onToggle,
  children,
  delay = 0,
}: {
  kicker: string;
  title: string;
  icon: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className={`${cardCls} overflow-hidden`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-5 py-3.5 hover:bg-stone-50 dark:hover:bg-stone-950/60 transition-colors border-0 bg-transparent cursor-pointer text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10">
            {icon}
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className={sectionKickerCls}>
              <span className="h-1 w-1 bg-lime-400" />
              {kicker}
            </span>
            <span className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
              {title}
            </span>
          </div>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-stone-200 dark:border-white/10"
          >
            <div className="px-5 py-4 space-y-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const btnAddCls =
  "inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300 hover:text-lime-600 dark:hover:text-lime-400 transition-colors mt-2 border-0 bg-transparent cursor-pointer";
const btnRemoveCls =
  "p-1 text-stone-400 dark:text-stone-600 hover:text-red-500 transition-colors rounded border-0 bg-transparent cursor-pointer";
const itemRowCls =
  "border border-stone-200 dark:border-white/10 rounded-md p-3 space-y-2 relative bg-stone-50/40 dark:bg-stone-950/40";

function uid() {
  return crypto.randomUUID();
}

// ── Memoized row components ──────────────────────────────────
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
      className={itemRowCls}
    >
      <button onClick={() => onRemove(exp.id)} className={`absolute top-2 right-2 ${btnRemoveCls}`}>
        <Trash2 className="w-3.5 h-3.5" />
      </button>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className={labelCls}>job title</label>
          <input className={inputCls} placeholder="Software Engineer" value={exp.title} onChange={(e) => onUpdate(exp.id, "title", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>company</label>
          <input className={inputCls} placeholder="Google" value={exp.company} onChange={(e) => onUpdate(exp.id, "company", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>start date</label>
          <input className={inputCls} placeholder="Jan 2022" value={exp.startDate} onChange={(e) => onUpdate(exp.id, "startDate", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>end date</label>
          <input
            className={inputCls}
            placeholder="Present"
            value={exp.current ? "Present" : exp.endDate}
            disabled={exp.current}
            onChange={(e) => onUpdate(exp.id, "endDate", e.target.value)}
          />
        </div>
      </div>
      <label className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-stone-500 cursor-pointer">
        <input
          type="checkbox"
          checked={exp.current}
          onChange={(e) => onUpdate(exp.id, "current", e.target.checked)}
          className="border-stone-300 dark:border-white/10 accent-lime-400"
        />
        currently work here
      </label>
      <div>
        <label className={labelCls}>description (one bullet per line)</label>
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
      className={itemRowCls}
    >
      <button onClick={() => onRemove(edu.id)} className={`absolute top-2 right-2 ${btnRemoveCls}`}>
        <Trash2 className="w-3.5 h-3.5" />
      </button>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2">
          <label className={labelCls}>institution</label>
          <input className={inputCls} placeholder="Stanford University" value={edu.institution} onChange={(e) => onUpdate(edu.id, "institution", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>degree</label>
          <input className={inputCls} placeholder="B.Tech" value={edu.degree} onChange={(e) => onUpdate(edu.id, "degree", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>field of study</label>
          <input className={inputCls} placeholder="Computer Science" value={edu.field} onChange={(e) => onUpdate(edu.id, "field", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>start date</label>
          <input className={inputCls} placeholder="Aug 2019" value={edu.startDate} onChange={(e) => onUpdate(edu.id, "startDate", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>end date</label>
          <input className={inputCls} placeholder="May 2023" value={edu.endDate} onChange={(e) => onUpdate(edu.id, "endDate", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>gpa (optional)</label>
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
      className={itemRowCls}
    >
      <button onClick={() => onRemove(proj.id)} className={`absolute top-2 right-2 ${btnRemoveCls}`}>
        <Trash2 className="w-3.5 h-3.5" />
      </button>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className={labelCls}>project name</label>
          <input className={inputCls} placeholder="E-Commerce Platform" value={proj.name} onChange={(e) => onUpdate(proj.id, "name", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>link (optional)</label>
          <input className={inputCls} placeholder="github.com/..." value={proj.link} onChange={(e) => onUpdate(proj.id, "link", e.target.value)} />
        </div>
        <div className="col-span-2">
          <label className={labelCls}>tech stack</label>
          <input className={inputCls} placeholder="React, Node.js, PostgreSQL" value={proj.techStack} onChange={(e) => onUpdate(proj.id, "techStack", e.target.value)} />
        </div>
        <div className="col-span-2">
          <label className={labelCls}>description</label>
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
      className={itemRowCls}
    >
      <button onClick={() => onRemove(cert.id)} className={`absolute top-2 right-2 ${btnRemoveCls}`}>
        <Trash2 className="w-3.5 h-3.5" />
      </button>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2">
          <label className={labelCls}>certification name</label>
          <input className={inputCls} placeholder="AWS Solutions Architect" value={cert.name} onChange={(e) => onUpdate(cert.id, "name", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>issuer</label>
          <input className={inputCls} placeholder="Amazon Web Services" value={cert.issuer} onChange={(e) => onUpdate(cert.id, "issuer", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>date</label>
          <input className={inputCls} placeholder="Mar 2024" value={cert.date} onChange={(e) => onUpdate(cert.id, "date", e.target.value)} />
        </div>
      </div>
    </motion.div>
  );
});

// ── Main ──────────────────────────────────────────────────────
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

  const updatePersonal = (field: string, value: string) =>
    setData((d) => ({ ...d, personalInfo: { ...d.personalInfo, [field]: value } }));

  const updateSummary = (value: string) =>
    setData((d) => ({ ...d, summary: value }));

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

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed || data.skills.includes(trimmed)) return;
    setData((d) => ({ ...d, skills: [...d.skills, trimmed] }));
    setSkillInput("");
  };
  const removeSkill = (skill: string) =>
    setData((d) => ({ ...d, skills: d.skills.filter((s) => s !== skill) }));

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

      <div className="relative pb-16">
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
              resume / builder
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Build your resume.
            </h1>
            <p className="mt-3 text-sm text-stone-500 max-w-md">
              Fill in your details, pick a template, and export a polished PDF. Everything saves locally as you type.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/student/ats/score"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors no-underline"
            >
              <ScanSearch className="w-3.5 h-3.5" /> Score it
            </Link>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors border-0 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </button>
          </div>
        </motion.div>

        <AtsToolsNav />

        {/* ─── Template picker ─── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className={`${cardCls} mb-6`}
        >
          <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-stone-200 dark:border-white/10">
            <div className="flex flex-col gap-1 min-w-0">
              <span className={sectionKickerCls}>
                <span className="h-1 w-1 bg-lime-400" />
                step 01
              </span>
              <span className="text-sm font-bold text-stone-900 dark:text-stone-50">
                Choose a template
              </span>
            </div>
            <div className="flex md:hidden gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileView("form")}
                className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest transition-colors cursor-pointer border-0 ${
                  mobileView === "form"
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                    : "bg-white dark:bg-stone-900 text-stone-500"
                }`}
              >
                <PenLine className="w-3 h-3 inline mr-1" /> edit
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
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-stone-200 dark:bg-white/10">
            {TEMPLATES.map((tpl, i) => {
              const isActive = selectedTemplate === tpl.id;
              return (
                <button
                  key={tpl.id}
                  type="button"
                  onClick={() => setSelectedTemplate(tpl.id)}
                  className={`group relative flex flex-col gap-2 p-4 text-left transition-colors border-0 cursor-pointer ${
                    isActive
                      ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                      : "bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 hover:bg-stone-50 dark:hover:bg-stone-950/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest ${
                        isActive ? "text-lime-400" : "text-stone-500"
                      }`}
                    >
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                    {isActive && <CheckCircle className="w-3.5 h-3.5 text-lime-400 shrink-0" />}
                  </div>
                  <p className="text-sm font-bold truncate">{tpl.name}</p>
                  <p
                    className={`text-[11px] truncate ${
                      isActive
                        ? "text-stone-300 dark:text-stone-600"
                        : "text-stone-500"
                    }`}
                  >
                    {tpl.id}
                  </p>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ─── Main grid ─── */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: form */}
          <div
            className={`w-full md:w-100 lg:w-110 shrink-0 space-y-3 ${
              mobileView === "preview" ? "hidden md:block" : ""
            }`}
          >
            {/* Import-from-profile card */}
            <motion.button
              type="button"
              onClick={importFromProfile}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="group w-full flex items-center gap-3 p-4 rounded-md border border-dashed border-stone-300 dark:border-white/15 bg-stone-50/60 dark:bg-stone-950/40 hover:border-lime-400 hover:bg-lime-50/40 dark:hover:bg-lime-400/5 transition-colors text-left cursor-pointer"
            >
              <div className="w-9 h-9 rounded-md bg-lime-400 text-stone-950 flex items-center justify-center shrink-0">
                <UserPlus className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                  Import from profile
                </p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-1">
                  prefill name, contact, education, skills & projects
                </p>
              </div>
            </motion.button>

            <FormSection
              kicker="section 01"
              title="Personal information"
              icon={<User className="w-4 h-4 text-stone-600 dark:text-stone-400" />}
              open={openSections.personal!}
              onToggle={() => toggle("personal")}
              delay={0.2}
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className={labelCls}>full name</label>
                  <input className={inputCls} placeholder="John Doe" value={data.personalInfo.fullName} onChange={(e) => updatePersonal("fullName", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>email</label>
                  <input className={inputCls} type="email" placeholder="john@email.com" value={data.personalInfo.email} onChange={(e) => updatePersonal("email", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>phone</label>
                  <input className={inputCls} placeholder="+1 234 567 890" value={data.personalInfo.phone} onChange={(e) => updatePersonal("phone", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>location</label>
                  <input className={inputCls} placeholder="New York, NY" value={data.personalInfo.location} onChange={(e) => updatePersonal("location", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>linkedin</label>
                  <input className={inputCls} placeholder="linkedin.com/in/johndoe" value={data.personalInfo.linkedIn} onChange={(e) => updatePersonal("linkedIn", e.target.value)} />
                </div>
                <div className="col-span-2">
                  <label className={labelCls}>portfolio / website</label>
                  <input className={inputCls} placeholder="johndoe.dev" value={data.personalInfo.portfolio} onChange={(e) => updatePersonal("portfolio", e.target.value)} />
                </div>
              </div>
            </FormSection>

            <FormSection
              kicker="section 02"
              title="Professional summary"
              icon={<FileText className="w-4 h-4 text-stone-600 dark:text-stone-400" />}
              open={openSections.summary!}
              onToggle={() => toggle("summary")}
              delay={0.22}
            >
              <textarea
                className={`${inputCls} min-h-20 resize-y`}
                placeholder="Experienced software engineer with 3+ years of expertise in React and Node.js..."
                value={data.summary}
                onChange={(e) => updateSummary(e.target.value)}
              />
            </FormSection>

            <FormSection
              kicker={`section 03${data.experience.length ? ` · ${String(data.experience.length)}` : ""}`}
              title="Work experience"
              icon={<Briefcase className="w-4 h-4 text-stone-600 dark:text-stone-400" />}
              open={openSections.experience!}
              onToggle={() => toggle("experience")}
              delay={0.24}
            >
              <AnimatePresence>
                {data.experience.map((exp) => (
                  <ExperienceRow key={exp.id} exp={exp} onUpdate={updateExperience} onRemove={removeExperience} />
                ))}
              </AnimatePresence>
              <button type="button" onClick={addExperience} className={btnAddCls}>
                <Plus className="w-3.5 h-3.5" /> add experience
              </button>
            </FormSection>

            <FormSection
              kicker={`section 04${data.education.length ? ` · ${String(data.education.length)}` : ""}`}
              title="Education"
              icon={<GraduationCap className="w-4 h-4 text-stone-600 dark:text-stone-400" />}
              open={openSections.education!}
              onToggle={() => toggle("education")}
              delay={0.26}
            >
              <AnimatePresence>
                {data.education.map((edu) => (
                  <EducationRow key={edu.id} edu={edu} onUpdate={updateEducation} onRemove={removeEducation} />
                ))}
              </AnimatePresence>
              <button type="button" onClick={addEducation} className={btnAddCls}>
                <Plus className="w-3.5 h-3.5" /> add education
              </button>
            </FormSection>

            <FormSection
              kicker={`section 05${data.skills.length ? ` · ${String(data.skills.length)}` : ""}`}
              title="Skills"
              icon={<Code2 className="w-4 h-4 text-stone-600 dark:text-stone-400" />}
              open={openSections.skills!}
              onToggle={() => toggle("skills")}
              delay={0.28}
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
                  type="button"
                  onClick={addSkill}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors border-0 cursor-pointer"
                >
                  Add
                </button>
              </div>
              {data.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {data.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 rounded-md text-xs font-medium"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="text-stone-400 dark:text-stone-600 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </FormSection>

            <FormSection
              kicker={`section 06${data.projects.length ? ` · ${String(data.projects.length)}` : ""}`}
              title="Projects"
              icon={<FolderOpen className="w-4 h-4 text-stone-600 dark:text-stone-400" />}
              open={openSections.projects!}
              onToggle={() => toggle("projects")}
              delay={0.3}
            >
              <AnimatePresence>
                {data.projects.map((proj) => (
                  <ProjectRow key={proj.id} proj={proj} onUpdate={updateProject} onRemove={removeProject} />
                ))}
              </AnimatePresence>
              <button type="button" onClick={addProject} className={btnAddCls}>
                <Plus className="w-3.5 h-3.5" /> add project
              </button>
            </FormSection>

            <FormSection
              kicker={`section 07${data.certifications.length ? ` · ${String(data.certifications.length)}` : ""}`}
              title="Certifications"
              icon={<Award className="w-4 h-4 text-stone-600 dark:text-stone-400" />}
              open={openSections.certifications!}
              onToggle={() => toggle("certifications")}
              delay={0.32}
            >
              <AnimatePresence>
                {data.certifications.map((cert) => (
                  <CertificationRow key={cert.id} cert={cert} onUpdate={updateCertification} onRemove={removeCertification} />
                ))}
              </AnimatePresence>
              <button type="button" onClick={addCertification} className={btnAddCls}>
                <Plus className="w-3.5 h-3.5" /> add certification
              </button>
            </FormSection>
          </div>

          {/* Right: live preview */}
          <div
            className={`flex-1 min-w-0 ${
              mobileView === "form" ? "hidden md:block" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.18 }}
              className="sticky top-4"
            >
              <div className={`${cardCls} overflow-hidden`}>
                <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-stone-200 dark:border-white/10">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className={sectionKickerCls}>
                      <span className="h-1 w-1 bg-lime-400" />
                      live preview
                    </span>
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-50">
                      {getTemplate(selectedTemplate).name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 shrink-0">
                    / auto-saved
                  </span>
                </div>
                <div
                  className="bg-white overflow-auto"
                  style={{ maxHeight: "calc(100vh - 180px)" }}
                >
                  <div ref={printRef}>
                    <TemplateComponent data={data} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
