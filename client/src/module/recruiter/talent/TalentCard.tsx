import { useState } from "react";
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
  Bookmark,
  ShieldCheck,
} from "lucide-react";
import { SERVER_URL } from "../../../lib/axios";
import SaveToPoolModal from "./SaveToPoolModal";

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
  if (score >= 80) return "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20";
  if (score >= 60) return "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20";
  return "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20";
}

function getJobStatusBadge(status: string | null | undefined) {
  if (!status) return null;
  const map: Record<string, { label: string; cls: string }> = {
    LOOKING: { label: "Actively looking", cls: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20" },
    OPEN_TO_OFFER: { label: "Open to offers", cls: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20" },
    NO_OFFER: { label: "Not looking", cls: "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800" },
  };
  const info = map[status];
  if (!info) return null;
  return <span className={`text-xs font-medium px-2 py-0.5 rounded-lg ${info.cls}`}>{info.label}</span>;
}

function getResumeUrl(url: string): string {
  return url.startsWith("http") ? url : `${SERVER_URL}${url}`;
}

interface TalentCardProps {
  student: TalentResult;
  index?: number;
}

export default function TalentCard({ student, index = 0 }: TalentCardProps) {
  const hasResume = student.resumes.length > 0;
  const [showPoolModal, setShowPoolModal] = useState(false);

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 p-6 flex flex-col transition-all duration-200 hover:shadow-lg hover:shadow-gray-100/80 dark:hover:shadow-gray-950/50"
    >
      {/* Header: Avatar + Name + Meta */}
      <div className="flex items-start gap-3.5 mb-4">
        {student.profilePic ? (
          <img
            src={student.profilePic}
            alt={student.name}
            className="w-11 h-11 rounded-xl object-cover shrink-0"
          />
        ) : (
          <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
            <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
              {getInitials(student.name)}
            </span>
          </div>
        )}

        <div className="min-w-0 flex-1">
          <Link to={`/recruiters/profile/${student.id}`} className="no-underline group/name">
            <h3 className="font-semibold text-gray-900 dark:text-white truncate group-hover/name:text-gray-600 dark:group-hover/name:text-gray-300 transition-colors text-sm">
              {student.name}
            </h3>
          </Link>
          {student.college && (
            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 truncate mt-0.5">
              <GraduationCap className="w-3 h-3 shrink-0" />
              <span className="truncate">{student.college}</span>
              {student.graduationYear && (
                <span className="text-gray-400 dark:text-gray-500 shrink-0">
                  &middot; {student.graduationYear}
                </span>
              )}
            </p>
          )}
          {student.location && (
            <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1 truncate mt-0.5">
              <MapPin className="w-3 h-3 shrink-0" />
              {student.location}
            </p>
          )}
        </div>

        {/* Save to Pool */}
        <button
          onClick={() => setShowPoolModal(true)}
          className="p-2 rounded-lg text-gray-300 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors opacity-0 group-hover:opacity-100"
          title="Save to Pool"
        >
          <Bookmark className="w-4 h-4" />
        </button>
      </div>

      {/* Status + ATS row */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {getJobStatusBadge(student.jobStatus)}
        {student.bestAtsScore !== null && (
          <span className={`text-xs font-bold px-2 py-0.5 rounded-lg tabular-nums ${getAtsScoreColor(student.bestAtsScore)}`}>
            ATS {student.bestAtsScore}
          </span>
        )}
        {student.verifiedSkillCount > 0 && (
          <span className="text-xs font-medium px-2 py-0.5 rounded-lg text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            {student.verifiedSkillCount} verified
          </span>
        )}
      </div>

      {/* Bio */}
      {student.bio && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
          {student.bio}
        </p>
      )}

      {/* Skills */}
      {student.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {student.skills.slice(0, 6).map((skill) => {
            const isVerified = student.verifiedSkills.includes(skill);
            return (
              <span
                key={skill}
                className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg font-medium ${
                  isVerified
                    ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                    : "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                }`}
              >
                {isVerified && <CheckCircle className="w-3 h-3" />}
                {skill}
              </span>
            );
          })}
          {student.skills.length > 6 && (
            <span className="text-xs text-gray-400 dark:text-gray-500 px-2 py-1 font-medium">
              +{student.skills.length - 6}
            </span>
          )}
        </div>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-1">
          <a
            href={`mailto:${student.email}`}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-800 transition-colors"
            title={`Email ${student.name}`}
          >
            <Mail className="w-4 h-4" />
          </a>
          {student.linkedinUrl && (
            <a
              href={student.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
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
              className="p-2 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-800 transition-colors"
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
              className="p-2 rounded-lg text-gray-400 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              title="Portfolio"
            >
              <Globe className="w-4 h-4" />
            </a>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={`/recruiters/profile/${student.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors no-underline"
          >
            <Eye className="w-3.5 h-3.5" />
            View
          </Link>
          <a
            href={hasResume ? getResumeUrl(student.resumes[0]!) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors no-underline ${
              hasResume
                ? "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 cursor-pointer"
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
    <SaveToPoolModal
      studentId={student.id}
      studentName={student.name}
      isOpen={showPoolModal}
      onClose={() => setShowPoolModal(false)}
    />
    </>
  );
}
