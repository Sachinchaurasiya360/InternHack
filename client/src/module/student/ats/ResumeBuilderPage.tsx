import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
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
} from "lucide-react";
import { SEO } from "../../../components/SEO";
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

const STORAGE_KEY = "internhack-resume-data";
const TEMPLATE_KEY = "internhack-resume-template";

function loadSaved(): ResumeData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultResumeData;
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
}: {
  title: string;
  icon: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
          {icon}
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
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
    </div>
  );
}

// ── Small helpers ──────────────────────────────────────────────────
const inputCls =
  "w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-colors bg-white";
const labelCls = "block text-xs font-medium text-gray-500 mb-1";
const btnAddCls =
  "flex items-center gap-1.5 text-xs font-medium text-violet-600 hover:text-violet-700 mt-2";
const btnRemoveCls =
  "p-1 text-gray-400 hover:text-red-500 transition-colors rounded";

function uid() {
  return crypto.randomUUID();
}

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

  // Persist
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);
  useEffect(() => {
    localStorage.setItem(TEMPLATE_KEY, selectedTemplate);
  }, [selectedTemplate]);

  const toggle = (key: string) =>
    setOpenSections((s) => ({ ...s, [key]: !s[key] }));

  // Update helpers
  const updatePersonal = (field: string, value: string) =>
    setData((d) => ({ ...d, personalInfo: { ...d.personalInfo, [field]: value } }));

  const updateSummary = (value: string) =>
    setData((d) => ({ ...d, summary: value }));

  // Experience
  const addExperience = () =>
    setData((d) => ({
      ...d,
      experience: [
        ...d.experience,
        { id: uid(), company: "", title: "", startDate: "", endDate: "", current: false, description: "" },
      ],
    }));
  const updateExperience = (id: string, field: keyof WorkExperience, value: unknown) =>
    setData((d) => ({
      ...d,
      experience: d.experience.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    }));
  const removeExperience = (id: string) =>
    setData((d) => ({ ...d, experience: d.experience.filter((e) => e.id !== id) }));

  // Education
  const addEducation = () =>
    setData((d) => ({
      ...d,
      education: [
        ...d.education,
        { id: uid(), institution: "", degree: "", field: "", startDate: "", endDate: "", gpa: "" },
      ],
    }));
  const updateEducation = (id: string, field: keyof Education, value: string) =>
    setData((d) => ({
      ...d,
      education: d.education.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    }));
  const removeEducation = (id: string) =>
    setData((d) => ({ ...d, education: d.education.filter((e) => e.id !== id) }));

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
  const addProject = () =>
    setData((d) => ({
      ...d,
      projects: [
        ...d.projects,
        { id: uid(), name: "", description: "", techStack: "", link: "" },
      ],
    }));
  const updateProject = (id: string, field: keyof Project, value: string) =>
    setData((d) => ({
      ...d,
      projects: d.projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    }));
  const removeProject = (id: string) =>
    setData((d) => ({ ...d, projects: d.projects.filter((p) => p.id !== id) }));

  // Certifications
  const addCertification = () =>
    setData((d) => ({
      ...d,
      certifications: [
        ...d.certifications,
        { id: uid(), name: "", issuer: "", date: "" },
      ],
    }));
  const updateCertification = (id: string, field: keyof Certification, value: string) =>
    setData((d) => ({
      ...d,
      certifications: d.certifications.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    }));
  const removeCertification = (id: string) =>
    setData((d) => ({ ...d, certifications: d.certifications.filter((c) => c.id !== id) }));

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
      <SEO title="Resume Builder — InternHack" description="Build your ATS-optimized resume with professional templates" />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/student/ats" className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500">
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <div>
                <h1 className="text-sm font-bold text-gray-900">Resume Builder</h1>
                <p className="text-[11px] text-gray-400">Fill in your details, pick a template, download PDF</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Mobile toggle */}
              <div className="flex md:hidden bg-gray-100 rounded-lg p-0.5">
                <button
                  onClick={() => setMobileView("form")}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    mobileView === "form" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                  }`}
                >
                  <PenLine className="w-3.5 h-3.5 inline mr-1" />
                  Edit
                </button>
                <button
                  onClick={() => setMobileView("preview")}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    mobileView === "preview" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 inline mr-1" />
                  Preview
                </button>
              </div>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-950 text-white text-xs font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Template Selector */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3">
            <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[11px] text-gray-400 font-medium shrink-0">Template:</span>
              {TEMPLATES.map((tpl) => (
                <button
                  key={tpl.id}
                  onClick={() => setSelectedTemplate(tpl.id)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all border-2 ${
                    selectedTemplate === tpl.id
                      ? `${tpl.accent} bg-gray-50 text-gray-900`
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  {tpl.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
          <div className="flex gap-6">
            {/* Left - Form */}
            <div
              className={`w-full md:w-[420px] shrink-0 space-y-3 ${
                mobileView === "preview" ? "hidden md:block" : ""
              }`}
            >
              {/* Personal Info */}
              <FormSection
                title="Personal Information"
                icon={<User className="w-4 h-4 text-violet-500" />}
                open={openSections.personal!}
                onToggle={() => toggle("personal")}
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
              >
                <AnimatePresence>
                  {data.experience.map((exp) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border border-gray-100 rounded-lg p-3 space-y-2 relative"
                    >
                      <button onClick={() => removeExperience(exp.id)} className={`absolute top-2 right-2 ${btnRemoveCls}`}>
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className={labelCls}>Job Title</label>
                          <input className={inputCls} placeholder="Software Engineer" value={exp.title} onChange={(e) => updateExperience(exp.id, "title", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelCls}>Company</label>
                          <input className={inputCls} placeholder="Google" value={exp.company} onChange={(e) => updateExperience(exp.id, "company", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelCls}>Start Date</label>
                          <input className={inputCls} placeholder="Jan 2022" value={exp.startDate} onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelCls}>End Date</label>
                          <input
                            className={inputCls}
                            placeholder="Present"
                            value={exp.current ? "Present" : exp.endDate}
                            disabled={exp.current}
                            onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                          />
                        </div>
                      </div>
                      <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={exp.current}
                          onChange={(e) => updateExperience(exp.id, "current", e.target.checked)}
                          className="rounded border-gray-300"
                        />
                        I currently work here
                      </label>
                      <div>
                        <label className={labelCls}>Description (one bullet per line)</label>
                        <textarea
                          className={`${inputCls} min-h-[60px] resize-y`}
                          placeholder="- Led development of microservices architecture&#10;- Improved API response time by 40%"
                          value={exp.description}
                          onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                        />
                      </div>
                    </motion.div>
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
              >
                <AnimatePresence>
                  {data.education.map((edu) => (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border border-gray-100 rounded-lg p-3 space-y-2 relative"
                    >
                      <button onClick={() => removeEducation(edu.id)} className={`absolute top-2 right-2 ${btnRemoveCls}`}>
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="col-span-2">
                          <label className={labelCls}>Institution</label>
                          <input className={inputCls} placeholder="Stanford University" value={edu.institution} onChange={(e) => updateEducation(edu.id, "institution", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelCls}>Degree</label>
                          <input className={inputCls} placeholder="B.Tech" value={edu.degree} onChange={(e) => updateEducation(edu.id, "degree", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelCls}>Field of Study</label>
                          <input className={inputCls} placeholder="Computer Science" value={edu.field} onChange={(e) => updateEducation(edu.id, "field", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelCls}>Start Date</label>
                          <input className={inputCls} placeholder="Aug 2019" value={edu.startDate} onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelCls}>End Date</label>
                          <input className={inputCls} placeholder="May 2023" value={edu.endDate} onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelCls}>GPA (optional)</label>
                          <input className={inputCls} placeholder="3.8/4.0" value={edu.gpa} onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)} />
                        </div>
                      </div>
                    </motion.div>
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
                    className="px-3 py-2 bg-violet-50 text-violet-600 rounded-lg text-xs font-medium hover:bg-violet-100 transition-colors shrink-0"
                  >
                    Add
                  </button>
                </div>
                {data.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {data.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
                      >
                        {skill}
                        <button onClick={() => removeSkill(skill)} className="text-gray-400 hover:text-red-500">
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
              >
                <AnimatePresence>
                  {data.projects.map((proj) => (
                    <motion.div
                      key={proj.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border border-gray-100 rounded-lg p-3 space-y-2 relative"
                    >
                      <button onClick={() => removeProject(proj.id)} className={`absolute top-2 right-2 ${btnRemoveCls}`}>
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className={labelCls}>Project Name</label>
                          <input className={inputCls} placeholder="E-Commerce Platform" value={proj.name} onChange={(e) => updateProject(proj.id, "name", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelCls}>Link (optional)</label>
                          <input className={inputCls} placeholder="github.com/..." value={proj.link} onChange={(e) => updateProject(proj.id, "link", e.target.value)} />
                        </div>
                        <div className="col-span-2">
                          <label className={labelCls}>Tech Stack</label>
                          <input className={inputCls} placeholder="React, Node.js, PostgreSQL" value={proj.techStack} onChange={(e) => updateProject(proj.id, "techStack", e.target.value)} />
                        </div>
                        <div className="col-span-2">
                          <label className={labelCls}>Description</label>
                          <textarea
                            className={`${inputCls} min-h-[50px] resize-y`}
                            placeholder="Built a full-stack e-commerce platform with..."
                            value={proj.description}
                            onChange={(e) => updateProject(proj.id, "description", e.target.value)}
                          />
                        </div>
                      </div>
                    </motion.div>
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
              >
                <AnimatePresence>
                  {data.certifications.map((cert) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border border-gray-100 rounded-lg p-3 space-y-2 relative"
                    >
                      <button onClick={() => removeCertification(cert.id)} className={`absolute top-2 right-2 ${btnRemoveCls}`}>
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="col-span-2">
                          <label className={labelCls}>Certification Name</label>
                          <input className={inputCls} placeholder="AWS Solutions Architect" value={cert.name} onChange={(e) => updateCertification(cert.id, "name", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelCls}>Issuer</label>
                          <input className={inputCls} placeholder="Amazon Web Services" value={cert.issuer} onChange={(e) => updateCertification(cert.id, "issuer", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelCls}>Date</label>
                          <input className={inputCls} placeholder="Mar 2024" value={cert.date} onChange={(e) => updateCertification(cert.id, "date", e.target.value)} />
                        </div>
                      </div>
                    </motion.div>
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
              <div className="sticky top-[105px]">
                <div
                  className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                  style={{ maxHeight: "calc(100vh - 130px)", overflowY: "auto" }}
                >
                  <div ref={printRef}>
                    <TemplateComponent data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
