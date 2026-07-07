import { useState, useEffect, useRef, useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../lib/query-keys";
import { motion } from "framer-motion";
import { Save, Loader2, Github } from "lucide-react";
import { ProfilePageHeader } from "./components/ProfilePageHeader";
import type { VerifiedSkill, ProjectItem, SkillTest } from "../../../lib/types";
import api from "../../../lib/axios";
import { uploadDirectToS3 } from "../../../utils/upload";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { Button } from "../../../components/ui/button";
import toast from "@/components/ui/toast";
import ImageCropModal from "../../../components/ImageCropModal";
import GitHubImportModal from "./GitHubImportModal";
import ContributionGraphs from "../../../components/ContributionGraphs";
import { SectionHeader } from "./components/SectionHeader";
import { IdentityCard } from "./components/IdentityCard";
import { ProfileStrengthCard } from "./components/ProfileStrengthCard";
import { BasicInfoSection } from "./components/BasicInfoSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SocialLinksSection } from "./components/SocialLinksSection";
import { ResumesSection } from "./components/ResumesSection";
import { cardCls } from "./components/styles";
import { markLearningPathMilestone } from "../opensource/learning-paths.data";

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
  projects: ProjectItem[];
}

type ProfileUserPayload = Partial<ProfileData> & { createdAt?: string | null };

function toProfileData(u: ProfileUserPayload): ProfileData {
  return {
    name: u.name ?? "",
    email: u.email ?? "",
    contactNo: u.contactNo ?? "",
    company: u.company ?? "",
    designation: u.designation ?? "",
    resumes: u.resumes ?? [],
    profilePic: u.profilePic ?? "",
    coverImage: u.coverImage ?? "",
    bio: u.bio ?? "",
    college: u.college ?? "",
    graduationYear: u.graduationYear ?? null,
    skills: u.skills ?? [],
    location: u.location ?? "",
    linkedinUrl: u.linkedinUrl ?? "",
    githubUrl: u.githubUrl ?? "",
    portfolioUrl: u.portfolioUrl ?? "",
    leetcodeUrl: u.leetcodeUrl ?? "",
    projects: u.projects ?? [],
  };
}

// Display labels for skillName slugs from GET /skill-tests (same source the
// skill-verification page uses). Falls back to a hyphen-to-space title-case
// for any future skill test added before this map is updated.
const SKILL_DISPLAY_NAMES: Record<string, string> = {
  javascript: "JavaScript", python: "Python", react: "React", nodejs: "Node.js",
  sql: "SQL", java: "Java", typescript: "TypeScript", "html-css": "HTML/CSS",
  git: "Git", "data-structures": "Data Structures", express: "Express.js",
  mongodb: "MongoDB", docker: "Docker", redis: "Redis", websocket: "WebSocket",
  graphql: "GraphQL", nextjs: "Next.js", aws: "AWS", "rest-api": "REST API",
  linux: "Linux", cpp: "C++", go: "Go", rust: "Rust", kubernetes: "Kubernetes",
  "system-design": "System Design", cybersecurity: "Cybersecurity",
  "machine-learning": "Machine Learning", devops: "DevOps",
  tailwindcss: "Tailwind CSS", vue: "Vue.js", angular: "Angular",
  csharp: "C#", django: "Django", flutter: "Flutter", kotlin: "Kotlin",
  "spring-boot": "Spring Boot", swift: "Swift", terraform: "Terraform",
};

function skillDisplayName(skillName: string): string {
  return SKILL_DISPLAY_NAMES[skillName] ?? skillName
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

interface CollegeSuggestion {
  name: string;
  country: string;
  stateProvince: string | null;
}

const MAX_RESUMES = 2;

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
    projects: [],
  });
  const [memberSince, setMemberSince] = useState<string | null>(null);
  const [skillInput, setSkillInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploadingPic, setUploadingPic] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingResume, setUploadingResume] = useState(false);
  const [deletingResume, setDeletingResume] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    basic: true, education: true, skills: true, projects: true, links: true, resumes: true,
  });
  const [cropSrc, setCropSrc] = useState<string | null>(null);
  const [cropType, setCropType] = useState<"profile" | "cover" | null>(null);
  const [showGitHubImport, setShowGitHubImport] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const queryClient = useQueryClient();
  const formInitialized = useRef(false);

  const [collegeSuggestions, setCollegeSuggestions] = useState<CollegeSuggestion[]>([]);
  const [collegeLoading, setCollegeLoading] = useState(false);
  const [showCollegeSuggestions, setShowCollegeSuggestions] = useState(false);
  const [showSkillSuggestions, setShowSkillSuggestions] = useState(false);

  const collegeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const collegeInputRef = useRef<HTMLInputElement>(null);
  const collegeDropdownRef = useRef<HTMLDivElement>(null);
  const skillInputRef = useRef<HTMLInputElement>(null);
  const skillDropdownRef = useRef<HTMLDivElement>(null);
  const isPremium = user?.subscriptionStatus === "ACTIVE" && user.subscriptionPlan !== "FREE";

  // ── React Query: profile, verified skills, job prefs ─────────────────
  useEffect(() => {
    if (form.githubUrl.trim()) {
      markLearningPathMilestone("github-oauth");
    }
  }, [form.githubUrl]);

  const { data: profileUser, isLoading } = useQuery({
    queryKey: queryKeys.profile.me(),
    queryFn: () => api.get("/auth/me").then((r) => r.data.user),
    staleTime: 5 * 60 * 1000,
  });

  const { data: verifiedData } = useQuery({
    queryKey: queryKeys.skillTests.myVerified(),
    queryFn: () => api.get("/skill-tests/my-verified").then((r) => r.data),
    staleTime: 60 * 60 * 1000,
  });

  // Same source (and query key) as /student/skill-verification, so the
  // suggestion dropdown always matches the skills that are actually verifiable.
  const { data: skillTests } = useQuery({
    queryKey: queryKeys.skillTests.list(),
    queryFn: () => api.get("/skill-tests").then((r) => r.data.tests as SkillTest[]),
    staleTime: 60 * 60 * 1000,
  });

  const verifiableSkillNames = (skillTests ?? []).map((t) => skillDisplayName(t.skillName));

  const filteredSkillSuggestions = skillInput.trim().length > 0
    ? verifiableSkillNames.filter((s) => {
        const q = skillInput.trim().toLowerCase();
        const alreadyAdded = form.skills.some((fs) => fs.toLowerCase() === s.toLowerCase());
        return !alreadyAdded && s.toLowerCase().includes(q);
      })
    : [];

  // Initialise form once when profile data first arrives
  useEffect(() => {
    if (!profileUser || formInitialized.current) return;
    formInitialized.current = true;
    setForm(toProfileData(profileUser));
    setMemberSince(profileUser.createdAt ?? null);
  }, [profileUser]);

  const verifiedSkills: VerifiedSkill[] = verifiedData?.verified ?? [];
  const verifiedMap = new Map(verifiedSkills.map((v: VerifiedSkill) => [v.skillName.toLowerCase(), v]));

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
    return () => { if (collegeTimerRef.current) clearTimeout(collegeTimerRef.current); };
  }, []);

  const handleChange = (field: keyof ProfileData, value: string | number | null) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) setFieldErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
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
      projects: updated.projects,
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

  const handleSave = async (): Promise<boolean> => {
    if (!form.name.trim() || form.name.trim().length < 2) {
      toast.error("Name must be at least 2 characters"); return false;
    }
    if (form.contactNo && form.contactNo.trim()) {
      const normalizedPhone = form.contactNo.replace(/[\s-]/g, "");
      if (!/^\+\d{11,13}$/.test(normalizedPhone)) {
        toast.error("Phone must include country code (e.g. +91 9876543210)");
        setFieldErrors((prev) => ({ ...prev, contactNo: ["Phone must include country code (e.g. +91 9876543210)"] }));
        setOpenSections((prev) => ({ ...prev, basic: true }));
        return false;
      }
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
        projects: form.projects,
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
        projects: u.projects ?? [],
      };
      setForm(updated);
      syncUser(updated);
      void queryClient.invalidateQueries({ queryKey: queryKeys.profile.me() });
      toast.success("Profile updated!");
      setIsEditing(false);
      return true;
    } catch (err: unknown) {
      const errData = (err as { response?: { data?: { errors?: { fieldErrors?: Record<string, string[]> } } } })?.response?.data;
      if (errData?.errors?.fieldErrors) {
        const fe = errData.errors.fieldErrors;
        setFieldErrors(fe);
        const sectionMap: Record<string, string> = {
          name: "basic", contactNo: "basic", bio: "basic", location: "basic",
          college: "education", graduationYear: "education", company: "education", designation: "education",
          skills: "skills",
          linkedinUrl: "links", githubUrl: "links", portfolioUrl: "links",
          projects: "projects",
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
      return false;
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    if (profileUser) setForm(toProfileData(profileUser));
    setFieldErrors({});
    setSkillInput("");
    setShowSkillSuggestions(false);
    setShowCollegeSuggestions(false);
    setIsEditing(false);
  };

  const MAX_IMAGE_SIZE = 2 * 1024 * 1024;

  const handleProfilePicSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMAGE_SIZE) { toast.error("Image must be under 2 MB"); return; }
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.type)) { toast.error("Only JPG and PNG formats are allowed"); return; }
    const reader = new FileReader();
    reader.onload = () => { setCropSrc(reader.result as string); setCropType("profile"); };
    reader.readAsDataURL(file);
  };

  const handleCoverImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMAGE_SIZE) { toast.error("Image must be under 2 MB"); return; }
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.type)) { toast.error("Only JPG and PNG formats are allowed"); return; }
    const reader = new FileReader();
    reader.onload = () => { setCropSrc(reader.result as string); setCropType("cover"); };
    reader.readAsDataURL(file);
  };

  const handleCropComplete = async (blob: Blob) => {
    const isProfile = cropType === "profile";
    const setUploading = isProfile ? setUploadingPic : setUploadingCover;
    const field = isProfile ? "profilePic" : "coverImage";
    setCropSrc(null);
    setCropType(null);
    setUploading(true);
    try {
      const file = new File([blob], "cropped.jpg", { type: blob.type || "image/jpeg" });
      const res = await uploadDirectToS3({
        file,
        folder: isProfile ? "profile-pics" : "cover-images",
        endpoint: isProfile ? "/profile-pic" : "/cover-image",
      });
      const u = res.user || res;
      let imagePath = u[field] || u.fileUrl || u.url || "";
      if (imagePath && !imagePath.startsWith("http")) {
        imagePath = `${api.defaults.baseURL?.replace("/api", "") || "http://localhost:3000"}/${imagePath.replace(/^\//, "")}`;
      }
      setForm((prev) => { const next = { ...prev, [field]: imagePath }; syncUser(next); return next; });
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
      const res = await uploadDirectToS3({ file, folder: "resumes", endpoint: "/profile-resume" });
      const u = res.user || res;
      const resumes = u.resumes ?? [];
      setForm((prev) => { const next = { ...prev, resumes }; syncUser(next); return next; });
      toast.success("Resume uploaded!");
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || "Failed to upload resume";
      toast.error(msg);
    } finally {
      setUploadingResume(false);
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

  const displayDate = memberSince || user?.createdAt;

  const profileCompletion = (() => {
    const fields = [form.name, form.bio, form.contactNo, form.location, form.college, form.company, form.linkedinUrl, form.githubUrl];
    const filled = fields.filter(Boolean).length;
    const hasSkills = form.skills.length > 0 ? 1 : 0;
    const hasResume = form.resumes.length > 0 ? 1 : 0;
    return Math.round(((filled + hasSkills + hasResume) / (fields.length + 2)) * 100);
  })();

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="relative pb-16">
      <SEO title="My Profile" description="Update your InternHack student profile details." noIndex />

      <ProfilePageHeader
        profileCompletion={profileCompletion}
        saving={saving}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onCancel={handleCancelEdit}
        onSave={handleSave}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Identity sidebar */}
        <aside className="lg:col-span-4 xl:col-span-3 space-y-4 lg:sticky lg:top-24 lg:self-start">
          <motion.div custom={0} variants={fadeInUp} initial="hidden" animate="visible">
            <IdentityCard
              name={form.name}
              email={form.email}
              profilePic={form.profilePic}
              coverImage={form.coverImage}
              designation={form.designation}
              company={form.company}
              college={form.college}
              location={form.location}
              linkedinUrl={form.linkedinUrl}
              githubUrl={form.githubUrl}
              portfolioUrl={form.portfolioUrl}
              uploadingPic={uploadingPic}
              uploadingCover={uploadingCover}
              isEditing={isEditing}
              onProfilePicSelect={handleProfilePicSelect}
              onCoverImageSelect={handleCoverImageSelect}
            />
          </motion.div>

          <motion.div custom={1} variants={fadeInUp} initial="hidden" animate="visible">
            <ProfileStrengthCard
              profileCompletion={profileCompletion}
              resumeCount={form.resumes.length}
              displayDate={displayDate}
              isPremium={isPremium}
            />
          </motion.div>
        </aside>

        {/* Right: Editable sections */}
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
              <BasicInfoSection
                name={form.name}
                email={form.email}
                bio={form.bio}
                contactNo={form.contactNo}
                location={form.location}
                fieldErrors={fieldErrors}
                isEditing={isEditing}
                onChange={(field, value) => handleChange(field as keyof ProfileData, value)}
              />
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
              <EducationSection
                college={form.college}
                graduationYear={form.graduationYear}
                company={form.company}
                designation={form.designation}
                fieldErrors={fieldErrors}
                collegeSuggestions={collegeSuggestions}
                collegeLoading={collegeLoading}
                showCollegeSuggestions={showCollegeSuggestions}
                collegeInputRef={collegeInputRef}
                collegeDropdownRef={collegeDropdownRef}
                isEditing={isEditing}
                onCollegeChange={(value) => { handleChange("college", value); searchColleges(value); }}
                onCollegeFocus={() => { if (collegeSuggestions.length > 0) setShowCollegeSuggestions(true); }}
                onSelectCollege={(name) => { handleChange("college", name); setShowCollegeSuggestions(false); setCollegeSuggestions([]); }}
                onChange={(field, value) => handleChange(field as keyof ProfileData, value)}
              />
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
              <SkillsSection
                skills={form.skills}
                skillInput={skillInput}
                showSkillSuggestions={showSkillSuggestions}
                filteredSkillSuggestions={filteredSkillSuggestions}
                verifiedMap={verifiedMap}
                skillInputRef={skillInputRef}
                skillDropdownRef={skillDropdownRef}
                isEditing={isEditing}
                onSkillInputChange={(value) => { setSkillInput(value); setShowSkillSuggestions(value.trim().length > 0); }}
                onSkillInputFocus={() => { if (skillInput.trim().length > 0) setShowSkillSuggestions(true); }}
                onAddSkill={handleAddSkill}
                onRemoveSkill={handleRemoveSkill}
              />
            )}
          </motion.div>

          {/* Projects */}
          <motion.div custom={3} variants={fadeInUp} initial="hidden" animate="visible" className={cardCls}>
            <SectionHeader
              kicker="section / 04"
              title="Featured Projects"
              meta={`${form.projects.length}/4`}
              open={openSections.projects}
              onToggle={() => toggleSection("projects")}
              right={
                isEditing ? (
                  <Button
                    type="button"
                    onClick={() => setShowGitHubImport(true)}
                    variant="outline"
                    size="sm"
                    className="gap-1.5 font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                  >
                    <Github className="w-3.5 h-3.5" /> import
                  </Button>
                ) : null
              }
            />
            {openSections.projects && (
              <ProjectsSection
                projects={form.projects}
                isEditing={isEditing}
                onChange={(projects) => {
                  setForm((prev) => ({ ...prev, projects }));
                  if (fieldErrors.projects) setFieldErrors((prev) => { const next = { ...prev }; delete next.projects; return next; });
                }}
                errors={fieldErrors.projects}
              />
            )}
          </motion.div>

          {/* Social links */}
          <motion.div custom={4} variants={fadeInUp} initial="hidden" animate="visible" className={cardCls}>
            <SectionHeader
              kicker="section / 05"
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
              <SocialLinksSection
                linkedinUrl={form.linkedinUrl}
                githubUrl={form.githubUrl}
                portfolioUrl={form.portfolioUrl}
                leetcodeUrl={form.leetcodeUrl}
                fieldErrors={fieldErrors}
                isEditing={isEditing}
                onChange={(field, value) => handleChange(field as keyof ProfileData, value)}
              />
            )}
          </motion.div>

          {/* Resumes */}
          <motion.div custom={5} variants={fadeInUp} initial="hidden" animate="visible" className={cardCls}>
            <SectionHeader
              kicker="section / 06"
              title="Resumes"
              meta={`${form.resumes.length}/${MAX_RESUMES}`}
              open={openSections.resumes}
              onToggle={() => toggleSection("resumes")}
            />
            {openSections.resumes && (
              <ResumesSection
                resumes={form.resumes}
                uploadingResume={uploadingResume}
                deletingResume={deletingResume}
                isEditing={isEditing}
                onUpload={handleResumeUpload}
                onDelete={handleResumeDelete}
              />
            )}
          </motion.div>

          {/* Coding activity */}
          <motion.div custom={9} variants={fadeInUp} initial="hidden" animate="visible">
            <ContributionGraphs
              githubUsername={form.githubUrl ? form.githubUrl.split("/").filter(Boolean).pop() : undefined}
              leetcodeUsername={form.leetcodeUrl ? form.leetcodeUrl.split("/").filter(Boolean).pop() : undefined}
              showPrompts
            />
          </motion.div>

          {/* Save (bottom) */}
          {isEditing && (
            <motion.div custom={10} variants={fadeInUp} initial="hidden" animate="visible" className="pt-2">
              <Button
                type="button"
                onClick={handleSave}
                disabled={saving}
                autoHeight
                className="w-full gap-2 px-6 py-3.5 bg-lime-400 text-stone-950 text-sm font-bold hover:bg-lime-300"
              >
                {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : <><Save className="w-4 h-4" /> Save all changes</>}
              </Button>
            </motion.div>
          )}
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
