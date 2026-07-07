import { useRef } from "react";
import {
  User, Camera, Loader2, GraduationCap, MapPin,
  Linkedin, Github, Globe,
} from "lucide-react";
import { cardCls } from "./styles";

interface IdentityCardProps {
  name: string;
  email: string;
  profilePic: string;
  coverImage: string;
  designation: string;
  company: string;
  college: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  portfolioUrl: string;
  uploadingPic: boolean;
  uploadingCover: boolean;
  isEditing: boolean;
  onProfilePicSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCoverImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function IdentityCard({
  name,
  email,
  profilePic,
  coverImage,
  designation,
  company,
  college,
  location,
  linkedinUrl,
  githubUrl,
  portfolioUrl,
  uploadingPic,
  uploadingCover,
  isEditing,
  onProfilePicSelect,
  onCoverImageSelect,
}: IdentityCardProps) {
  const picInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={cardCls}>
      {/* Cover band */}
      <div className="h-24 bg-stone-900 dark:bg-stone-950 relative group/banner overflow-hidden">
        {coverImage ? (
          <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
        ) : (
          <>
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none opacity-[0.1]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "18px 18px",
              }}
            />
            <span className="absolute top-3 right-3 h-1.5 w-1.5 bg-lime-400" />
          </>
        )}
        {isEditing && (
          <>
            <button
              type="button"
              onClick={() => coverInputRef.current?.click()}
              disabled={uploadingCover}
              className="absolute inset-0 bg-stone-950/50 hover:bg-stone-950/60 text-stone-50 flex items-center justify-center opacity-0 group-hover/banner:opacity-100 transition-opacity border-0 cursor-pointer"
            >
              {uploadingCover ? <Loader2 className="w-5 h-5 animate-spin" /> : <Camera className="w-5 h-5" />}
            </button>
            <input ref={coverInputRef} type="file" accept=".jpg, .jpeg, .png" onChange={onCoverImageSelect} className="hidden" />
          </>
        )}
      </div>

      <div className="px-5 pb-5 -mt-10 relative">
        {/* Avatar */}
        <div className="relative group mb-3 w-20">
          <div className="w-20 h-20 rounded-md bg-white dark:bg-stone-900 border-2 border-white dark:border-stone-900 shadow overflow-hidden">
            {profilePic ? (
              <img src={profilePic} alt={name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
            ) : (
              <div className="w-full h-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                <User className="w-8 h-8 text-stone-400" />
              </div>
            )}
          </div>
          {isEditing && (
            <>
              <button
                type="button"
                onClick={() => picInputRef.current?.click()}
                disabled={uploadingPic}
                className="absolute inset-0 w-20 h-20 bg-stone-950/60 text-stone-50 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border-0 cursor-pointer"
              >
                {uploadingPic ? <Loader2 className="w-4 h-4 animate-spin" /> : <Camera className="w-4 h-4" />}
              </button>
              <input ref={picInputRef} type="file" accept=".jpg, .jpeg, .png" onChange={onProfilePicSelect} className="hidden" />
            </>
          )}
        </div>

        <h2 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate leading-tight">
          {name || "Your name"}
        </h2>
        <p className="text-xs font-mono text-stone-500 truncate mt-0.5">{email}</p>

        {(designation || company) && (
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-2 truncate">
            {designation}
            {designation && company ? " at " : ""}
            <span className="text-stone-900 dark:text-stone-50 font-medium">{company}</span>
          </p>
        )}

        {/* Meta rows */}
        {(college || location) && (
          <div className="mt-3 space-y-1.5 text-xs text-stone-600 dark:text-stone-400">
            {college && (
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 shrink-0 text-stone-500" />
                <span className="truncate">{college}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-stone-500" />
                <span className="truncate">{location}</span>
              </div>
            )}
          </div>
        )}

        {/* Social */}
        {(linkedinUrl || githubUrl || portfolioUrl) && (
          <div className="flex gap-1 mt-4 pt-4 border-t border-stone-200 dark:border-white/10">
            {linkedinUrl && (
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-md border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-400 dark:hover:border-white/30 transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-md border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-400 dark:hover:border-white/30 transition-colors">
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {portfolioUrl && (
              <a href={portfolioUrl} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-md border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-400 dark:hover:border-white/30 transition-colors">
                <Globe className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
