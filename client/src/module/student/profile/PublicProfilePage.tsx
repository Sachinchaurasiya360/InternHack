import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowLeft, MapPin, GraduationCap, Linkedin, Github, Globe,
  ExternalLink, FileText, ShieldCheck, Trophy, FolderGit2, Briefcase, Calendar,
} from "lucide-react";
import api from "../../../lib/axios";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { SEO } from "../../../components/SEO";
import type { ProjectItem, AchievementItem, VerifiedSkill } from "../../../lib/types";

interface PublicProfile {
  id: number;
  name: string;
  email: string;
  profilePic?: string;
  bio?: string;
  college?: string;
  graduationYear?: number;
  skills: string[];
  location?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  company?: string;
  designation?: string;
  jobStatus?: string | null;
  projects: ProjectItem[];
  achievements: AchievementItem[];
  resumes: string[];
  bestAtsScore: number | null;
  verifiedSkills: VerifiedSkill[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

function getJobStatusInfo(status: string | null | undefined) {
  const map: Record<string, { label: string; cls: string }> = {
    LOOKING: { label: "Looking for job", cls: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400" },
    OPEN_TO_OFFER: { label: "Open to offer", cls: "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400" },
    NO_OFFER: { label: "No offer", cls: "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400" },
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

export default function PublicProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: profile, isLoading, error } = useQuery({
    queryKey: ["public-profile", id],
    queryFn: () => api.get(`/auth/profile/${id}`).then((res) => res.data.profile as PublicProfile),
    enabled: !!id,
  });

  if (isLoading) return <LoadingScreen />;
  if (error || !profile) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-gray-950 dark:text-white mb-2">Profile not found</h2>
        <p className="text-gray-500 mb-4">This student profile doesn't exist or you don't have permission to view it.</p>
        <button onClick={() => navigate(-1)} className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">Go back</button>
      </div>
    );
  }

  const verifiedMap = new Map(profile.verifiedSkills.map((v) => [v.skillName.toLowerCase(), v]));
  const jobStatusInfo = getJobStatusInfo(profile.jobStatus);

  return (
    <div className="relative pb-12 max-w-5xl mx-auto">
      <SEO title={`${profile.name} - Profile`} noIndex />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Left Column: Profile Card ── */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div custom={0} variants={fadeInUp} initial="hidden" animate="visible"
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="h-28 bg-linear-to-br from-indigo-500 via-violet-500 to-purple-500 relative">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            </div>
            <div className="px-5 pb-5 -mt-12 relative">
              <div className="w-24 h-24 rounded-2xl bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-900 shadow-lg text-gray-900 dark:text-white flex items-center justify-center text-3xl font-bold overflow-hidden mb-3">
                {profile.profilePic ? (
                  <img src={profile.profilePic} alt={profile.name} className="w-24 h-24 rounded-2xl object-cover" />
                ) : (profile.name.charAt(0).toUpperCase())}
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg font-bold text-gray-950 dark:text-white">{profile.name}</h2>
                {jobStatusInfo && (
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${jobStatusInfo.cls}`}>{jobStatusInfo.label}</span>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{profile.email}</p>

              {(profile.designation || profile.company) && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {profile.designation}{profile.designation && profile.company ? " at " : ""}{profile.company}
                </p>
              )}

              {profile.bio && <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">{profile.bio}</p>}

              <div className="flex flex-wrap gap-1.5 mt-3">
                {profile.college && (
                  <span className="inline-flex items-center gap-1 text-xs bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-lg font-medium">
                    <GraduationCap className="w-3 h-3" /> {profile.college}
                    {profile.graduationYear && <span className="opacity-70"> · {profile.graduationYear}</span>}
                  </span>
                )}
                {profile.location && (
                  <span className="inline-flex items-center gap-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-lg">
                    <MapPin className="w-3 h-3" /> {profile.location}
                  </span>
                )}
              </div>

              {(profile.linkedinUrl || profile.githubUrl || profile.portfolioUrl) && (
                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {profile.linkedinUrl && (
                    <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {profile.githubUrl && (
                    <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {profile.portfolioUrl && (
                    <a href={profile.portfolioUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/20 dark:hover:text-violet-400 transition-colors">
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div custom={1} variants={fadeInUp} initial="hidden" animate="visible"
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 space-y-3">
            {profile.bestAtsScore !== null && (
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-500">Best ATS Score</span>
                <span className={`text-sm font-bold ${profile.bestAtsScore >= 80 ? "text-emerald-600" : profile.bestAtsScore >= 60 ? "text-amber-600" : "text-red-500"}`}>{profile.bestAtsScore}/100</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-500">Verified Skills</span>
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{profile.verifiedSkills.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-500">Projects</span>
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{profile.projects.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-500">Resumes</span>
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{profile.resumes.length}</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right Column ── */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills */}
          {profile.skills.length > 0 && (
            <motion.div custom={0} variants={fadeInUp} initial="hidden" animate="visible"
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-indigo-500" /> Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => {
                  const v = verifiedMap.get(skill.toLowerCase());
                  return (
                    <span key={skill} className={`inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg font-medium ${v ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400" : "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400"}`}>
                      {v && <ShieldCheck className="w-3.5 h-3.5" />}
                      {skill}
                      {v && <span className="text-[10px] opacity-70">{v.score}%</span>}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Projects */}
          {profile.projects.length > 0 && (
            <motion.div custom={1} variants={fadeInUp} initial="hidden" animate="visible"
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white mb-4 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-amber-500" /> Projects
              </h3>
              <div className="space-y-3">
                {profile.projects.map((p) => (
                  <div key={p.id} className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-950 dark:text-white">{p.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{p.description}</p>
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
                ))}
              </div>
            </motion.div>
          )}

          {/* Achievements */}
          {profile.achievements.length > 0 && (
            <motion.div custom={2} variants={fadeInUp} initial="hidden" animate="visible"
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-rose-500" /> Achievements & Leadership
              </h3>
              <div className="space-y-3">
                {profile.achievements.map((a) => (
                  <div key={a.id} className="flex items-start gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center shrink-0">
                      <Trophy className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-gray-950 dark:text-white">{a.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{a.description}</p>
                      {a.date && <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> {a.date}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Resumes */}
          {profile.resumes.length > 0 && (
            <motion.div custom={3} variants={fadeInUp} initial="hidden" animate="visible"
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-violet-500" /> Resumes
              </h3>
              <div className="space-y-2">
                {profile.resumes.map((url) => (
                  <a key={url} href={url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors no-underline">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 truncate flex-1">{getFileNameFromUrl(url)}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
