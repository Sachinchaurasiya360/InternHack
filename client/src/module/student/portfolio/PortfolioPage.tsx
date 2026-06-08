import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  MapPin, GraduationCap, Linkedin, Github, Globe, ExternalLink,
  Calendar, User, Sparkles, Star, BookOpen, Folder, Award,
} from "lucide-react";
import api from "../../../lib/axios";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";

interface PortfolioData {
  id: number;
  name: string;
  profileSlug: string | null;
  profilePic: string | null;
  coverImage: string | null;
  bio: string | null;
  college: string | null;
  graduationYear: number | null;
  skills: string[];
  location: string | null;
  linkedinUrl: string | null;
  githubUrl: string | null;
  portfolioUrl: string | null;
  leetcodeUrl: string | null;
  jobStatus: string | null;
  projects: any[];
  achievements: any[];
  company: string | null;
  designation: string | null;
  memberSinceMonths: number;
  badgeCount: number;
  createdAt: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SocialIcon({ url, icon }: { url: string | null; icon: React.ReactNode }) {
  if (!url) return null;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-lime-600 hover:bg-lime-50 dark:hover:bg-lime-900/20 transition-colors">
      {icon}
    </a>
  );
}

function JobStatusBadge({ status }: { status: string | null }) {
  if (!status) return null;
  const map: Record<string, { label: string; cls: string }> = {
    LOOKING: { label: "Looking for job", cls: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400" },
    OPEN_TO_OFFER: { label: "Open to offer", cls: "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400" },
    NO_OFFER: { label: "No offer", cls: "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400" },
  };
  const info = map[status];
  if (!info) return null;
  return <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${info.cls}`}>{info.label}</span>;
}

export default function PortfolioPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data: portfolio, isLoading, error } = useQuery({
    queryKey: ["portfolio", slug],
    queryFn: () => api.get(`/portfolio/${slug}`).then((r) => r.data),
    enabled: !!slug,
  });

  const p = portfolio as PortfolioData | undefined;

  if (isLoading) return <LoadingScreen />;

  if (error || !p) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <User className="w-12 h-12 text-gray-200 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Portfolio not found</h2>
          <p className="text-sm text-gray-500 mb-4">This portfolio does not exist or is not public.</p>
          <Link to="/" className="text-sm text-lime-600 hover:underline">Go home</Link>
        </div>
      </div>
    );
  }

  const initials = p.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2);

  return (
    <>
      <SEO
        title={`${p.name} — Open Source Portfolio`}
        description={p.bio || `${p.name}'s open source contributor portfolio on InternHack`}
        canonicalUrl={canonicalUrl(`/portfolio/${slug}`)}
      />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm"
          initial="hidden" animate="visible" custom={0} variants={fadeInUp}
        >
          {p.coverImage ? (
            <div className="h-32 sm:h-44 bg-cover bg-center" style={{ backgroundImage: `url(${p.coverImage})` }} />
          ) : (
            <div className="h-32 sm:h-44 bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400" />
          )}
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12 sm:-mt-16 mb-4">
              {p.profilePic ? (
                <img src={p.profilePic} alt={p.name} className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl border-4 border-white dark:border-gray-900 object-cover shadow-lg" />
              ) : (
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl border-4 border-white dark:border-gray-900 shadow-lg bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-lime-600 dark:text-lime-400">{initials}</span>
                </div>
              )}
              <div className="flex-1 min-w-0 sm:pb-1">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white truncate">{p.name}</h1>
                {p.designation && <p className="text-sm text-gray-500">{p.designation}{p.company ? ` at ${p.company}` : ""}</p>}
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  {p.location && (
                    <span className="text-xs text-gray-400 flex items-center gap-1"><MapPin className="w-3 h-3" />{p.location}</span>
                  )}
                  {p.college && (
                    <span className="text-xs text-gray-400 flex items-center gap-1"><GraduationCap className="w-3 h-3" />{p.college}{p.graduationYear ? ` (${p.graduationYear})` : ""}</span>
                  )}
                  <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{p.memberSinceMonths} mo</span>
                </div>
              </div>
              {p.jobStatus && (
                <div className="sm:pb-1"><JobStatusBadge status={p.jobStatus} /></div>
              )}
            </div>

            {p.bio && <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 max-w-2xl">{p.bio}</p>}

            <div className="flex flex-wrap items-center gap-1.5">
              <SocialIcon url={p.githubUrl} icon={<Github className="w-4 h-4" />} />
              <SocialIcon url={p.linkedinUrl} icon={<Linkedin className="w-4 h-4" />} />
              <SocialIcon url={p.portfolioUrl} icon={<Globe className="w-4 h-4" />} />
              <SocialIcon url={p.leetcodeUrl} icon={<BookOpen className="w-4 h-4" />} />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="space-y-4">
            <motion.div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-5" initial="hidden" animate="visible" custom={1} variants={fadeInUp}>
              <h2 className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" />Stats</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{p.badgeCount}</p>
                  <p className="text-[10px] text-gray-500">Badges</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{p.projects?.length || 0}</p>
                  <p className="text-[10px] text-gray-500">Projects</p>
                </div>
              </div>
            </motion.div>

            {p.skills && p.skills.length > 0 && (
              <motion.div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-5" initial="hidden" animate="visible" custom={2} variants={fadeInUp}>
                <h2 className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-1.5"><Star className="w-3.5 h-3.5" />Skills</h2>
                <div className="flex flex-wrap gap-1.5">
                  {p.skills.map((skill: string) => (
                    <span key={skill} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-4">
            {p.projects && p.projects.length > 0 && (
              <motion.div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-5" initial="hidden" animate="visible" custom={3} variants={fadeInUp}>
                <h2 className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-1.5"><Folder className="w-3.5 h-3.5" />Featured Projects</h2>
                <div className="space-y-3">
                  {p.projects.map((proj: any, idx: number) => (
                    <div key={idx} className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{proj.title || proj.name}</h3>
                          {proj.description && <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{proj.description}</p>}
                        </div>
                        {proj.link && (
                          <a href={proj.link} target="_blank" rel="noopener noreferrer" className="shrink-0 p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-400 transition-colors">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                      {proj.techStack && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {proj.techStack.map((tech: string) => (
                            <span key={tech} className="text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-gray-900 text-gray-500 border border-gray-200 dark:border-gray-700">{tech}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {p.achievements && p.achievements.length > 0 && (
              <motion.div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-5" initial="hidden" animate="visible" custom={4} variants={fadeInUp}>
                <h2 className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-1.5"><Award className="w-3.5 h-3.5" />Achievements</h2>
                <div className="space-y-2">
                  {p.achievements.map((ach: any, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{ach.title || ach.name}</p>
                        {ach.description && <p className="text-xs text-gray-500 mt-0.5">{ach.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {p.badgeCount > 0 && (
              <motion.div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-5 text-center" initial="hidden" animate="visible" custom={5} variants={fadeInUp}>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-900 dark:text-white">{p.badgeCount}</span> badge{p.badgeCount !== 1 ? "s" : ""} earned
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
