import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  MapPin,
  GraduationCap,
  Linkedin,
  Github,
  Globe,
  FileText,
  CheckCircle,
  Mail,
  Eye,
} from "lucide-react";

export interface TalentResult {
  id: number;
  name: string;
  email: string;
  profilePic: string | null;
  bio: string | null;
  college: string | null;
  graduationYear: number | null;
  skills: string[];
  location: string | null;
  linkedinUrl: string | null;
  githubUrl: string | null;
  portfolioUrl: string | null;
  resumes: string[];
  jobStatus?: string | null;
  bestAtsScore: number | null;
  verifiedSkillCount: number;
  verifiedSkills: string[];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function getAtsScoreColor(score: number): string {
  if (score >= 80) return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
  if (score >= 60) return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
  return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
}

function getJobStatusBadge(status: string | null | undefined) {
  if (!status) return null;
  const map: Record<string, { label: string; cls: string }> = {
    LOOKING: { label: "Looking for job", cls: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400" },
    OPEN_TO_OFFER: { label: "Open to offer", cls: "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400" },
    NO_OFFER: { label: "No offer", cls: "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400" },
  };
  const info = map[status];
  if (!info) return null;
  return <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${info.cls}`}>{info.label}</span>;
}

interface TalentCardProps {
  student: TalentResult;
  index?: number;
}

export default function TalentCard({ student, index = 0 }: TalentCardProps) {
  const hasResume = student.resumes.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:border-gray-200 dark:hover:border-gray-700 p-6 flex flex-col transition-all"
    >
      {/* Header: Avatar + Name + Meta */}
      <div className="flex items-start gap-4 mb-4">
        {student.profilePic ? (
          <img
            src={student.profilePic}
            alt={student.name}
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              {getInitials(student.name)}
            </span>
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <Link to={`/profile/${student.id}`} className="no-underline group/name">
              <h3 className="font-semibold text-gray-900 dark:text-white truncate group-hover/name:text-blue-600 dark:group-hover/name:text-blue-400 transition-colors cursor-pointer">
                {student.name}
              </h3>
            </Link>
            {getJobStatusBadge(student.jobStatus)}
          </div>
          {student.college && (
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 truncate">
              <GraduationCap className="w-3.5 h-3.5 flex-shrink-0" />
              {student.college}
              {student.graduationYear && (
                <span className="text-gray-400 dark:text-gray-500">
                  &middot; {student.graduationYear}
                </span>
              )}
            </p>
          )}
          {student.location && (
            <p className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-1 truncate">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              {student.location}
            </p>
          )}
        </div>

        {/* ATS Score Badge */}
        {student.bestAtsScore !== null && (
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${getAtsScoreColor(student.bestAtsScore)}`}
          >
            ATS {student.bestAtsScore}
          </span>
        )}
      </div>

      {/* Bio */}
      {student.bio && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
          {student.bio}
        </p>
      )}

      {/* Skills */}
      {student.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {student.skills.slice(0, 8).map((skill) => {
            const isVerified = student.verifiedSkills.includes(skill);
            return (
              <span
                key={skill}
                className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md font-medium ${
                  isVerified
                    ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                }`}
              >
                {isVerified && <CheckCircle className="w-3 h-3" />}
                {skill}
              </span>
            );
          })}
          {student.skills.length > 8 && (
            <span className="text-xs text-gray-400 dark:text-gray-500 px-2 py-1">
              +{student.skills.length - 8} more
            </span>
          )}
        </div>
      )}

      {/* Spacer to push bottom content down */}
      <div className="flex-1" />

      {/* Social Links */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${student.email}`}
            className="p-1.5 rounded-lg text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
            title={`Email ${student.name}`}
          >
            <Mail className="w-4 h-4" />
          </a>
          {student.linkedinUrl && (
            <a
              href={student.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {student.githubUrl && (
            <a
              href={student.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {student.portfolioUrl && (
            <a
              href={student.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-gray-400 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              title="Portfolio"
            >
              <Globe className="w-4 h-4" />
            </a>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={`/profile/${student.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:hover:bg-indigo-900/40 transition-colors no-underline"
          >
            <Eye className="w-3.5 h-3.5" />
            Profile
          </Link>
          <a
            href={hasResume ? student.resumes[0] : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
              hasResume
                ? "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer"
                : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600 cursor-not-allowed pointer-events-none"
            }`}
            aria-disabled={!hasResume}
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
}
