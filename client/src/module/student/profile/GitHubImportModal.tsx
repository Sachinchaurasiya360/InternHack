import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Loader2, Check, AlertCircle } from "lucide-react";
import api from "../../../lib/axios";
import toast from "react-hot-toast";
import type { ProjectItem } from "../../../lib/types";

interface GitHubImportData {
  name: string;
  bio: string | null;
  location: string | null;
  avatar: string;
  languages: string[];
  repos: {
    title: string;
    description: string;
    techStack: string[];
    repoUrl: string;
    liveUrl: string;
  }[];
}

interface GitHubImportModalProps {
  open: boolean;
  onClose: () => void;
  currentSkills: string[];
  currentProjects: ProjectItem[];
  onImport: (data: {
    skills: string[];
    projects: ProjectItem[];
    bio?: string;
    location?: string;
    githubUrl?: string;
  }) => void;
}

export default function GitHubImportModal({
  open,
  onClose,
  currentSkills,
  currentProjects,
  onImport,
}: GitHubImportModalProps) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GitHubImportData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Selection state
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());
  const [selectedRepos, setSelectedRepos] = useState<Set<number>>(new Set());
  const [importBio, setImportBio] = useState(false);
  const [importLocation, setImportLocation] = useState(false);

  const handleFetch = async () => {
    if (!username.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await api.post("/auth/import-github", { username: username.trim() });
      const data = res.data as GitHubImportData;
      setResult(data);
      // Pre-select new skills (not already in profile)
      const existingLower = new Set(currentSkills.map((s) => s.toLowerCase()));
      const newSkills = data.languages.filter((l) => !existingLower.has(l.toLowerCase()));
      setSelectedSkills(new Set(newSkills));
      // Pre-select first 5 repos
      setSelectedRepos(new Set(data.repos.slice(0, 5).map((_, i) => i)));
      setImportBio(!!data.bio);
      setImportLocation(!!data.location);
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || "Failed to fetch GitHub data";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleImport = () => {
    if (!result) return;

    const existingLower = new Set(currentSkills.map((s) => s.toLowerCase()));
    const newSkills = [...selectedSkills].filter((s) => !existingLower.has(s.toLowerCase()));
    const mergedSkills = [...currentSkills, ...newSkills].slice(0, 20);

    const existingTitles = new Set(currentProjects.map((p) => p.title.toLowerCase()));
    const newProjects: ProjectItem[] = result.repos
      .filter((_, i) => selectedRepos.has(i))
      .filter((r) => !existingTitles.has(r.title.toLowerCase()))
      .map((r) => ({
        id: crypto.randomUUID(),
        title: r.title,
        description: r.description,
        techStack: r.techStack,
        repoUrl: r.repoUrl,
        liveUrl: r.liveUrl,
      }));
    const mergedProjects = [...currentProjects, ...newProjects].slice(0, 10);

    onImport({
      skills: mergedSkills,
      projects: mergedProjects,
      ...(importBio && result.bio ? { bio: result.bio } : {}),
      ...(importLocation && result.location ? { location: result.location } : {}),
      githubUrl: `https://github.com/${username.trim()}`,
    });

    toast.success(`Imported ${newSkills.length} skills and ${newProjects.length} projects`);
    handleClose();
  };

  const handleClose = () => {
    setUsername("");
    setResult(null);
    setError(null);
    setSelectedSkills(new Set());
    setSelectedRepos(new Set());
    onClose();
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => {
      const next = new Set(prev);
      if (next.has(skill)) next.delete(skill);
      else next.add(skill);
      return next;
    });
  };

  const toggleRepo = (index: number) => {
    setSelectedRepos((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl w-full max-w-lg max-h-[85vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 shrink-0">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  Import from GitHub
                </h2>
                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-5">
                {/* Username Input */}
                {!result && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Enter your GitHub username to import languages, repos, and profile data.
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") handleFetch(); }}
                        placeholder="github-username"
                        className="flex-1 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                        autoFocus
                      />
                      <button
                        onClick={handleFetch}
                        disabled={loading || !username.trim()}
                        className="px-5 py-2.5 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 flex items-center gap-2"
                      >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Github className="w-4 h-4" />}
                        Fetch
                      </button>
                    </div>
                    {error && (
                      <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                      </div>
                    )}
                  </div>
                )}

                {/* Results */}
                {result && (
                  <>
                    {/* Profile info */}
                    {(result.bio || result.location) && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Profile Info</h3>
                        {result.bio && (
                          <label className="flex items-start gap-2 text-sm cursor-pointer">
                            <input
                              type="checkbox"
                              checked={importBio}
                              onChange={() => setImportBio(!importBio)}
                              className="mt-0.5 rounded"
                            />
                            <span className="text-gray-600 dark:text-gray-400">
                              Bio: <span className="text-gray-900 dark:text-white">{result.bio}</span>
                            </span>
                          </label>
                        )}
                        {result.location && (
                          <label className="flex items-start gap-2 text-sm cursor-pointer">
                            <input
                              type="checkbox"
                              checked={importLocation}
                              onChange={() => setImportLocation(!importLocation)}
                              className="mt-0.5 rounded"
                            />
                            <span className="text-gray-600 dark:text-gray-400">
                              Location: <span className="text-gray-900 dark:text-white">{result.location}</span>
                            </span>
                          </label>
                        )}
                      </div>
                    )}

                    {/* Languages as skills */}
                    {result.languages.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Languages ({selectedSkills.size} selected)
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {result.languages.map((lang) => {
                            const isExisting = currentSkills.some((s) => s.toLowerCase() === lang.toLowerCase());
                            const isSelected = selectedSkills.has(lang);
                            return (
                              <button
                                key={lang}
                                onClick={() => !isExisting && toggleSkill(lang)}
                                disabled={isExisting}
                                className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-colors ${
                                  isExisting
                                    ? "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                                    : isSelected
                                    ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 ring-1 ring-indigo-300 dark:ring-indigo-700"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                              >
                                {isExisting && <Check className="w-3 h-3 inline mr-1" />}
                                {lang}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Repos as projects */}
                    {result.repos.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Repositories ({selectedRepos.size} selected)
                        </h3>
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                          {result.repos.map((repo, i) => {
                            const isSelected = selectedRepos.has(i);
                            return (
                              <button
                                key={i}
                                onClick={() => toggleRepo(i)}
                                className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                                  isSelected
                                    ? "border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-900/20"
                                    : "border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 hover:border-gray-200 dark:hover:border-gray-700"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-900 dark:text-white truncate">{repo.title}</span>
                                  {isSelected && <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />}
                                </div>
                                {repo.description && (
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">{repo.description}</p>
                                )}
                                {repo.techStack.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mt-1.5">
                                    {repo.techStack.map((t, j) => (
                                      <span key={j} className="px-1.5 py-0.5 text-[10px] bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded">{t}</span>
                                    ))}
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Footer */}
              {result && (
                <div className="flex justify-between items-center p-6 border-t border-gray-100 dark:border-gray-800 shrink-0">
                  <button
                    onClick={() => { setResult(null); setError(null); }}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleImport}
                    disabled={selectedSkills.size === 0 && selectedRepos.size === 0 && !importBio && !importLocation}
                    className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
                  >
                    Import Selected
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
