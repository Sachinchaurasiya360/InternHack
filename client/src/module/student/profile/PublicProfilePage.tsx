import React from "react";
import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowLeft, MapPin, GraduationCap, Linkedin, Github, Globe,
  ExternalLink, FileText, ShieldCheck, Trophy, FolderGit2, Briefcase, Calendar,
  Phone, Mail, Clock, User, Lock, Award,
} from "lucide-react";
import api from "../../../lib/axios";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { BadgesSection } from "../badges/BadgesSection";
import ContributionGraphs from "../../../components/ContributionGraphs";
import GitHubStatsCard from "./GitHubStatsCard";
import type { ProjectItem, AchievementItem, VerifiedSkill } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";

interface PublicProfile {
  id: number;
  name: string;
  email: string;
  profilePic?: string;
  coverImage?: string;
  bio?: string;
  college?: string;
  graduationYear?: number;
  skills: string[];
  location?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  contactNo?: string;
  company?: string;
  designation?: string;
  jobStatus?: string | null;
  projects: ProjectItem[];
  achievements: AchievementItem[];
  resumes: string[];
  bestAtsScore: number | null;
  verifiedSkills: VerifiedSkill[];
  createdAt: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function getJobStatusInfo(status: string | null | undefined) {
  const map: Record<string, { label: string; cls: string }> = {
    LOOKING: { label: "Looking for job", cls: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20" },
    OPEN_TO_OFFER: { label: "Open to offer", cls: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20" },
    NO_OFFER: { label: "No offer", cls: "bg-stone-500/10 text-stone-500 dark:text-stone-400 border border-stone-500/20" },
  };
  return status ? map[status] ?? null : null;
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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

// Memoized Stat Card Component
const StatCard = React.memo(function StatCard({ value, label, colorClass }: { value: string | number; label: string; colorClass?: string }) {
  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-2xl p-4 text-center hover:scale-[1.02] hover:shadow-sm transition-all duration-300">
      <p className={`text-2xl font-bold font-display ${colorClass || "text-stone-700 dark:text-stone-300"}`}>{value}</p>
      <p className="text-[10px] font-bold text-stone-500 dark:text-stone-400 mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
});

// Memoized Project Card Component
export const ProjectCard = React.memo(function ProjectCard({ p }: { p: ProjectItem }) {
  return (
    <div className="px-4 py-3.5 bg-stone-50 dark:bg-stone-800/30 rounded-xl border border-stone-100 dark:border-stone-800/80 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 hover:shadow-xs group">
      <div className="flex items-center gap-2 mb-1 justify-between">
        <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors truncate max-w-[70%]">{p.title}</h4>
        {p.builtAt && (
          <span className="text-[10px] text-stone-500 dark:text-stone-400 font-mono flex items-center gap-1 shrink-0 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-sm">
            <Calendar className="w-3 h-3" /> {p.builtAt}
          </span>
        )}
      </div>
      <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">{p.description}</p>
      {p.techStack.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2.5">
          {p.techStack.map((t, i) => (
            <span key={i} className="px-2 py-0.5 text-[10px] font-medium bg-stone-100 dark:bg-stone-800 text-stone-650 dark:text-stone-300 rounded-md border border-stone-200/30 dark:border-stone-700/30">{t}</span>
          ))}
        </div>
      )}
      {(p.liveUrl || p.repoUrl) && (
        <div className="flex gap-3 mt-3 pt-3 border-t border-stone-250/30 dark:border-stone-800/30">
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
              <ExternalLink className="w-3 h-3" /> Live
            </a>
          )}
          {p.repoUrl && (
            <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-stone-600 dark:text-stone-400 hover:underline flex items-center gap-1">
              <Github className="w-3 h-3" /> Code
            </a>
          )}
        </div>
      )}
    </div>
  );
});

// Memoized Achievement Card Component
export const AchievementCard = React.memo(function AchievementCard({ a }: { a: AchievementItem }) {
  return (
    <div className="flex items-start gap-3.5 px-4 py-3.5 bg-stone-50 dark:bg-stone-800/30 rounded-xl border border-stone-100 dark:border-stone-800/80 hover:border-rose-500 dark:hover:border-rose-450 transition-all duration-300 shadow-xs">
      <div className="w-9 h-9 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-900/30 flex items-center justify-center shrink-0">
        <Trophy className="w-4.5 h-4.5 text-rose-500 dark:text-rose-400" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">{a.title}</h4>
          {a.date && (
            <span className="text-[10px] text-stone-500 dark:text-stone-400 font-mono flex items-center gap-1 shrink-0 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-sm">
              <Calendar className="w-3 h-3" /> {a.date}
            </span>
          )}
        </div>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">{a.description}</p>
      </div>
    </div>
  );
});

export default function PublicProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const { data: profile, isLoading, error } = useQuery({
    queryKey: ["public-profile", id],
    queryFn: () => api.get(`/auth/profile/${id}`).then((res) => res.data.profile as PublicProfile),
    enabled: !!id,
    retry: false,
  });

  const isPrivateError = error && (error as any).response?.status === 403;

  if (isLoading) return <LoadingScreen />;

  if (isPrivateError) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4 py-24 sm:py-32">
          <SEO title="Private Profile" noIndex />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md w-full text-center p-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-2xl shadow-sm relative overflow-hidden"
          >
            <div className="relative flex flex-col items-center">
              {/* Lock Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/20 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-amber-500 dark:text-amber-400" />
              </div>

              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3 tracking-tight font-sans">
                This Profile is Private
              </h2>

              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-8">
                The student has configured their profile to be visible only to authorized recruiters and administrators.
                {user ? (
                  " Since you are logged in as a student, you do not have permission to view other students' private profiles."
                ) : (
                  " If you are a recruiter or administrator, please sign in to view this profile."
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                {!user && (
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/login?redirectTo=${encodeURIComponent(window.location.pathname)}`)}
                    className="w-full sm:w-auto px-6 py-2.5 font-medium transition-all hover:scale-[1.02]"
                  >
                    Sign In
                  </Button>
                )}
                <Button
                  variant="secondary"
                  onClick={() => navigate(-1)}
                  className="w-full sm:w-auto px-6 py-2.5 font-medium border border-stone-200 dark:border-stone-800 transition-all hover:scale-[1.02]"
                >
                  Go Back
                </Button>
              </div>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-32 px-4">
          <div className="text-center max-w-md w-full">
            <h2 className="text-xl font-bold text-stone-900 dark:text-white mb-2">Profile not found</h2>
            <p className="text-stone-500 mb-6">This student profile doesn't exist or you don't have permission to view it.</p>
            <Button variant="primary" onClick={() => navigate(-1)}>Go Back</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const verifiedMap = new Map(profile.verifiedSkills.map((v) => [v.skillName.toLowerCase(), v]));
  const jobStatusInfo = getJobStatusInfo(profile.jobStatus);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex flex-col font-sans">
      <SEO
        title={`${profile.name} — InternHack Profile`}
        description={`${profile.name}'s skills: ${profile.skills.slice(0, 5).join(", ")}${profile.skills.length > 5 ? " and more" : ""}. ${profile.bio ? profile.bio.slice(0, 100) : "View their projects, achievements, and verified skills on InternHack."}`}
        ogImage={profile.profilePic || undefined}
        ogType="profile"
        canonicalUrl={`https://internhack.xyz/student/profile/${profile.id}`}
      />
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-28 md:pb-24">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white mb-6 transition-colors font-semibold border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 px-3.5 py-1.5 rounded-xl shadow-xs hover:scale-[1.01]"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </motion.button>

        {/* ── Hero Card with Cover Image ── */}
        <motion.div custom={0} variants={fadeInUp} initial="hidden" animate="visible"
          className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 shadow-sm rounded-2xl overflow-hidden mb-6 transition-all duration-300">
          {/* Cover / Banner */}
          <div className="h-36 sm:h-44 md:h-48 relative">
            {profile.coverImage ? (
              <img src={profile.coverImage} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-stone-950 dark:bg-black relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.1]"
                  style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <span className="absolute top-4 right-4 h-2 w-2 bg-lime-400" />
              </div>
            )}
          </div>

          {/* Profile Info Layout (Responsive Flex/Grid) */}
          <div className="px-6 pb-6 -mt-14 sm:-mt-16 relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6 text-center sm:text-left">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-stone-100 dark:bg-stone-800 shadow-md text-stone-900 dark:text-white flex items-center justify-center text-3xl font-bold overflow-hidden shrink-0">
                {profile.profilePic ? (
                  <img src={profile.profilePic} alt={profile.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                ) : (
                  <User className="w-12 h-12 text-stone-500 dark:text-stone-400" />
                )}
              </div>
              <div className="pb-1 min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                  <h1 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white tracking-tight">{profile.name}</h1>
                  {jobStatusInfo && (
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-lg inline-block uppercase tracking-wider max-w-fit mx-auto sm:mx-0 ${jobStatusInfo.cls}`}>
                      {jobStatusInfo.label}
                    </span>
                  )}
                </div>
                {(profile.designation || profile.company) && (
                  <p className="text-sm font-medium text-stone-600 dark:text-stone-400 mt-1">
                    {profile.designation}{profile.designation && profile.company ? " at " : ""}{profile.company}
                  </p>
                )}
              </div>
            </div>

            {profile.bio && <p className="text-sm text-stone-600 dark:text-stone-300 mt-5 leading-relaxed font-sans">{profile.bio}</p>}

            {/* Contact & Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2.5 gap-x-6 mt-5 pt-4 border-t border-stone-100 dark:border-stone-800/80 text-xs text-stone-500 dark:text-stone-400">
              <span className="inline-flex items-center justify-center sm:justify-start gap-1.5"><Mail className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" /> {profile.email}</span>
              {profile.contactNo && <span className="inline-flex items-center justify-center sm:justify-start gap-1.5"><Phone className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" /> {profile.contactNo}</span>}
              {profile.college && (
                <span className="inline-flex items-center justify-center sm:justify-start gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" /> {profile.college}
                  {profile.graduationYear && <span className="opacity-70"> ({profile.graduationYear})</span>}
                </span>
              )}
              {profile.location && <span className="inline-flex items-center justify-center sm:justify-start gap-1.5"><MapPin className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" /> {profile.location}</span>}
              {profile.createdAt && <span className="inline-flex items-center justify-center sm:justify-start gap-1.5"><Clock className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" /> Joined {formatDate(profile.createdAt)}</span>}
            </div>

            {/* Social Links */}
            {(profile.linkedinUrl || profile.githubUrl || profile.portfolioUrl) && (
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-5 pt-4 border-t border-stone-100 dark:border-stone-800/80">
                {profile.linkedinUrl && (
                  <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-650 dark:text-blue-400 hover:scale-[1.02] transition-transform">
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                )}
                {profile.githubUrl && (
                  <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:scale-[1.02] transition-transform">
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                )}
                {profile.portfolioUrl && (
                  <a href={profile.portfolioUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-violet-50 dark:bg-violet-900/20 text-violet-650 dark:text-violet-400 hover:scale-[1.02] transition-transform">
                    <Globe className="w-3.5 h-3.5" /> Portfolio
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* ── Stats Cards Row ── */}
        <motion.div custom={1} variants={fadeInUp} initial="hidden" animate="visible"
          className={`grid grid-cols-2 gap-3 mb-6 ${profile.bestAtsScore !== null ? "sm:grid-cols-4" : "sm:grid-cols-3"}`}>
          {profile.bestAtsScore !== null && (
            <StatCard
              value={profile.bestAtsScore}
              label="Best ATS Score"
              colorClass={profile.bestAtsScore >= 80 ? "text-emerald-600 dark:text-emerald-400" : profile.bestAtsScore >= 60 ? "text-amber-600 dark:text-amber-400" : "text-red-500 dark:text-red-400"}
            />
          )}
          <StatCard value={profile.verifiedSkills.length} label="Verified Skills" colorClass="text-stone-700 dark:text-stone-300" />
          <StatCard value={profile.projects.length} label="Projects" colorClass="text-stone-700 dark:text-stone-300" />
          <StatCard value={profile.resumes.length} label="Resumes" colorClass="text-stone-700 dark:text-stone-300" />
        </motion.div>

        {/* ── Content Grid (Responsive Layout) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Skills */}
            <motion.div custom={2} variants={fadeInUp} initial="hidden" animate="visible"
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 p-5 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-stone-900 dark:text-white mb-3.5 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-stone-400 dark:text-stone-500" /> Skills
              </h3>
              {profile.skills.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {profile.skills.map((skill) => {
                    const v = verifiedMap.get(skill.toLowerCase());
                    return (
                      <span key={skill} className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${v ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200/30 dark:border-green-800/35" : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"}`}>
                        {v && <ShieldCheck className="w-3 h-3 text-green-600 dark:text-green-450" />}
                        {skill}
                        {v && <span className="text-[9px] opacity-80 font-mono">({v.score}%)</span>}
                      </span>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-6 border border-dashed border-stone-200 dark:border-stone-800 rounded-xl bg-stone-50/50 dark:bg-stone-900/10">
                  <Briefcase className="w-8 h-8 text-stone-400 dark:text-stone-600 mx-auto mb-2" />
                  <p className="text-xs text-stone-500 font-medium">No skills listed yet</p>
                </div>
              )}
            </motion.div>

            {/* Resumes */}
            <motion.div custom={3} variants={fadeInUp} initial="hidden" animate="visible"
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 p-5 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-stone-900 dark:text-white mb-3.5 flex items-center gap-2">
                <FileText className="w-4 h-4 text-stone-400 dark:text-stone-500" /> Resumes
              </h3>
              {profile.resumes.length > 0 ? (
                <div className="space-y-2">
                  {profile.resumes.map((url) => (
                    <a key={url} href={url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800/30 rounded-xl border border-stone-105 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-white dark:hover:bg-stone-850 transition-all duration-300 no-underline shadow-xs group">
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center shrink-0">
                        <FileText className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-455" />
                      </div>
                      <span className="text-xs font-medium text-stone-700 dark:text-stone-300 truncate flex-1">{getFileNameFromUrl(url)}</span>
                      <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-indigo-500 transition-colors shrink-0" />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 border border-dashed border-stone-200 dark:border-stone-800 rounded-xl bg-stone-50/50 dark:bg-stone-900/10">
                  <FileText className="w-8 h-8 text-stone-400 dark:text-stone-600 mx-auto mb-2" />
                  <p className="text-xs text-stone-500 font-medium">No resumes uploaded yet</p>
                </div>
              )}
            </motion.div>

            {/* Badges */}
            <motion.div custom={4} variants={fadeInUp} initial="hidden" animate="visible"
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 p-5 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-stone-900 dark:text-white mb-3.5 flex items-center gap-2">
                <Award className="w-4 h-4 text-stone-400 dark:text-stone-500" /> Badges
              </h3>
              <BadgesSection studentId={profile.id} showTitle={false} />
            </motion.div>

            <motion.div custom={5} variants={fadeInUp} initial="hidden" animate="visible">
              <GitHubStatsCard githubUrl={profile.githubUrl} compact />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Coding Activity */}
            {profile.githubUrl ? (
              <motion.div custom={2} variants={fadeInUp} initial="hidden" animate="visible">
                <ContributionGraphs
                  githubUsername={profile.githubUrl.split("github.com/").pop()?.replace(/\/$/, "")}
                />
              </motion.div>
            ) : (
              <motion.div custom={2} variants={fadeInUp} initial="hidden" animate="visible"
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 p-6 rounded-2xl shadow-sm">
                <h3 className="text-sm font-bold text-stone-900 dark:text-white mb-4 flex items-center gap-2">
                  <Github className="w-4 h-4 text-stone-400 dark:text-stone-500" /> Coding Activity
                </h3>
                <div className="text-center py-8 border border-dashed border-stone-200 dark:border-stone-800 rounded-xl bg-stone-50/50 dark:bg-stone-900/10">
                  <Github className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                  <p className="text-xs text-stone-500 font-medium">Link a GitHub profile to display repositories and contributions</p>
                </div>
              </motion.div>
            )}

            {/* Projects */}
            <motion.div custom={3} variants={fadeInUp} initial="hidden" animate="visible"
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-stone-900 dark:text-white mb-4 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-stone-400 dark:text-stone-500" /> Featured Projects
              </h3>
              {profile.projects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profile.projects.map((p) => (
                    <ProjectCard key={p.id} p={p} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 border border-dashed border-stone-200 dark:border-stone-800 rounded-xl bg-stone-50/50 dark:bg-stone-900/10">
                  <FolderGit2 className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                  <p className="text-xs text-stone-500 font-medium">No featured projects uploaded yet</p>
                </div>
              )}
            </motion.div>

            {/* Achievements */}
            <motion.div custom={4} variants={fadeInUp} initial="hidden" animate="visible"
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-stone-900 dark:text-white mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-stone-400 dark:text-stone-500" /> Achievements & Leadership
              </h3>
              {profile.achievements.length > 0 ? (
                <div className="space-y-3">
                  {profile.achievements.map((a) => (
                    <AchievementCard key={a.id} a={a} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 border border-dashed border-stone-200 dark:border-stone-800 rounded-xl bg-stone-50/50 dark:bg-stone-900/10">
                  <Trophy className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                  <p className="text-xs text-stone-500 font-medium">No achievements or leadership roles listed yet</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
