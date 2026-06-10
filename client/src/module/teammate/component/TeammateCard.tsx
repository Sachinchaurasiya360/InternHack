import { useState } from "react";
import { User, Code2, Zap, Clock, CheckCircle2, Mail } from "lucide-react";
import type { TeammateProfile } from "../services/Teammate.api";

type Props = {
  profile: TeammateProfile;
  onInvite: (receiverId: number) => Promise<void>;
  alreadyInvited?: boolean;
};

const ROLE_COLORS: Record<string, string> = {
  "Frontend Developer": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Backend Developer": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  "Full Stack": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  "ML Engineer": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  "Designer": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  "DevOps": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
};

const EXP_BADGE: Record<string, string> = {
  BEGINNER: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300",
  INTERMEDIATE: "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300",
  ADVANCED: "bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-300",
};

export default function TeammateCard({ profile, onInvite, alreadyInvited = false }: Props) {
  const [inviting, setInviting] = useState(false);
  const [invited, setInvited] = useState(alreadyInvited);

  const roleColor =
    ROLE_COLORS[profile.preferredRole] ??
    "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300";
  const expColor =
    EXP_BADGE[profile.experienceLevel?.toUpperCase()] ?? EXP_BADGE.BEGINNER;

  const initials = profile.user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleInvite = async () => {
    setInviting(true);
    try {
      await onInvite(profile.user.id);
      setInvited(true);
    } finally {
      setInviting(false);
    }
  };

  return (
    <div className="group relative flex flex-col rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Top accent strip */}
      <div className="h-1 w-full bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400" />

      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Header */}
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className="shrink-0">
            {profile.user.profilePic ? (
              <img
                src={profile.user.profilePic}
                alt={profile.user.name}
                className="w-11 h-11 rounded-xl object-cover border border-stone-200 dark:border-white/10"
              />
            ) : (
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-lime-400 to-emerald-500 flex items-center justify-center">
                <span className="text-sm font-bold text-white">{initials}</span>
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="font-semibold text-stone-900 dark:text-stone-50 truncate leading-tight">
              {profile.user.name}
            </p>
            <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${roleColor}`}>
              {profile.preferredRole}
            </span>
          </div>

          {/* Exp badge */}
          <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${expColor}`}>
            {profile.experienceLevel}
          </span>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-3 text-xs text-stone-500 dark:text-stone-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {profile.availability}
          </span>
          {profile.lookingForTeam && (
            <span className="flex items-center gap-1 text-lime-600 dark:text-lime-400 font-medium">
              <Zap className="w-3.5 h-3.5" />
              Open to team
            </span>
          )}
        </div>

        {/* Skills */}
        {profile.skills.length > 0 && (
          <div>
            <div className="flex items-center gap-1 mb-1.5">
              <User className="w-3 h-3 text-stone-400" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">Skills</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {profile.skills.slice(0, 5).map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
              {profile.skills.length > 5 && (
                <span className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500 text-xs">
                  +{profile.skills.length - 5}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {profile.techStack.length > 0 && (
          <div>
            <div className="flex items-center gap-1 mb-1.5">
              <Code2 className="w-3 h-3 text-stone-400" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {profile.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {profile.techStack.length > 4 && (
                <span className="px-2 py-0.5 rounded-md border border-stone-200 dark:border-white/10 text-stone-500 text-xs">
                  +{profile.techStack.length - 4}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer / CTA */}
      <div className="px-5 pb-5">
        <button
          id={`invite-btn-${profile.user.id}`}
          onClick={handleInvite}
          disabled={invited || inviting}
          className={`w-full flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
            invited
              ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 cursor-default border border-emerald-200 dark:border-emerald-800"
              : "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:opacity-80 active:scale-[0.98]"
          }`}
        >
          {invited ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              Invitation Sent
            </>
          ) : inviting ? (
            <span className="opacity-70">Sending...</span>
          ) : (
            <>
              <Mail className="w-4 h-4" />
              Send Invitation
            </>
          )}
        </button>
      </div>
    </div>
  );
}