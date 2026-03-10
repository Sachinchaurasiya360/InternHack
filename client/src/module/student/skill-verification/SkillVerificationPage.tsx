import { useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  HelpCircle,
  ChevronRight,
  CheckCircle2,
  Search,
  Code,
  FileCode,
  Server,
  Database,
  GitBranch,
  Cpu,
  Globe,
  Box,
  Cloud,
  Shield,
  Zap,
  Terminal,
  Palette,
  Network,
  Radio,
  Layers,
  Braces,
  Lock,
  Smartphone,
  Binary,
  Workflow,
  FlaskConical,
  Paintbrush,
  type LucideIcon,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { useAuthStore } from "../../../lib/auth.store";
import type { SkillTest, VerifiedSkill, TestDifficulty } from "../../../lib/types";

/* ------------------------------------------------------------------ */
/*  Skill icon + color mapping                                         */
/* ------------------------------------------------------------------ */
const SKILL_ICONS: Record<string, { icon: LucideIcon; bg: string; fg: string }> = {
  javascript:       { icon: Braces,      bg: "bg-yellow-50 dark:bg-yellow-900/20",  fg: "text-yellow-600 dark:text-yellow-400" },
  python:           { icon: Code,        bg: "bg-blue-50 dark:bg-blue-900/20",      fg: "text-blue-600 dark:text-blue-400" },
  react:            { icon: Zap,         bg: "bg-cyan-50 dark:bg-cyan-900/20",      fg: "text-cyan-600 dark:text-cyan-400" },
  nodejs:           { icon: Server,      bg: "bg-green-50 dark:bg-green-900/20",    fg: "text-green-600 dark:text-green-400" },
  sql:              { icon: Database,    bg: "bg-indigo-50 dark:bg-indigo-900/20",  fg: "text-indigo-600 dark:text-indigo-400" },
  java:             { icon: FileCode,    bg: "bg-orange-50 dark:bg-orange-900/20",  fg: "text-orange-600 dark:text-orange-400" },
  typescript:       { icon: FileCode,    bg: "bg-blue-50 dark:bg-blue-900/20",      fg: "text-blue-600 dark:text-blue-400" },
  "html-css":       { icon: Palette,     bg: "bg-pink-50 dark:bg-pink-900/20",     fg: "text-pink-600 dark:text-pink-400" },
  git:              { icon: GitBranch,   bg: "bg-red-50 dark:bg-red-900/20",       fg: "text-red-600 dark:text-red-400" },
  "data-structures":{ icon: Network,     bg: "bg-violet-50 dark:bg-violet-900/20", fg: "text-violet-600 dark:text-violet-400" },
  express:          { icon: Zap,         bg: "bg-gray-100 dark:bg-gray-800",       fg: "text-gray-700 dark:text-gray-300" },
  mongodb:          { icon: Database,    bg: "bg-emerald-50 dark:bg-emerald-900/20", fg: "text-emerald-600 dark:text-emerald-400" },
  docker:           { icon: Box,         bg: "bg-sky-50 dark:bg-sky-900/20",       fg: "text-sky-600 dark:text-sky-400" },
  aws:              { icon: Cloud,       bg: "bg-orange-50 dark:bg-orange-900/20", fg: "text-orange-600 dark:text-orange-400" },
  graphql:          { icon: Workflow,    bg: "bg-pink-50 dark:bg-pink-900/20",     fg: "text-pink-600 dark:text-pink-400" },
  nextjs:           { icon: Globe,       bg: "bg-gray-100 dark:bg-gray-800",       fg: "text-gray-700 dark:text-gray-300" },
  redis:            { icon: Layers,      bg: "bg-red-50 dark:bg-red-900/20",       fg: "text-red-600 dark:text-red-400" },
  websocket:        { icon: Radio,       bg: "bg-violet-50 dark:bg-violet-900/20", fg: "text-violet-600 dark:text-violet-400" },
  "rest-api":       { icon: Globe,       bg: "bg-teal-50 dark:bg-teal-900/20",    fg: "text-teal-600 dark:text-teal-400" },
  cpp:              { icon: Cpu,         bg: "bg-blue-50 dark:bg-blue-900/20",     fg: "text-blue-600 dark:text-blue-400" },
  go:               { icon: Terminal,    bg: "bg-cyan-50 dark:bg-cyan-900/20",     fg: "text-cyan-600 dark:text-cyan-400" },
  rust:             { icon: Shield,      bg: "bg-orange-50 dark:bg-orange-900/20", fg: "text-orange-600 dark:text-orange-400" },
  django:           { icon: Code,        bg: "bg-green-50 dark:bg-green-900/20",   fg: "text-green-600 dark:text-green-400" },
  kubernetes:       { icon: Box,         bg: "bg-blue-50 dark:bg-blue-900/20",     fg: "text-blue-600 dark:text-blue-400" },
  linux:            { icon: Terminal,    bg: "bg-gray-100 dark:bg-gray-800",       fg: "text-gray-700 dark:text-gray-300" },
  "system-design":  { icon: Workflow,    bg: "bg-indigo-50 dark:bg-indigo-900/20", fg: "text-indigo-600 dark:text-indigo-400" },
  cybersecurity:    { icon: Lock,        bg: "bg-red-50 dark:bg-red-900/20",       fg: "text-red-600 dark:text-red-400" },
  "machine-learning":{ icon: FlaskConical, bg: "bg-purple-50 dark:bg-purple-900/20", fg: "text-purple-600 dark:text-purple-400" },
  devops:           { icon: Workflow,    bg: "bg-teal-50 dark:bg-teal-900/20",    fg: "text-teal-600 dark:text-teal-400" },
  tailwindcss:      { icon: Paintbrush,  bg: "bg-sky-50 dark:bg-sky-900/20",      fg: "text-sky-600 dark:text-sky-400" },
  flutter:          { icon: Smartphone,  bg: "bg-blue-50 dark:bg-blue-900/20",    fg: "text-blue-600 dark:text-blue-400" },
  "react-native":   { icon: Smartphone,  bg: "bg-cyan-50 dark:bg-cyan-900/20",    fg: "text-cyan-600 dark:text-cyan-400" },
  postgres:         { icon: Database,    bg: "bg-blue-50 dark:bg-blue-900/20",    fg: "text-blue-600 dark:text-blue-400" },
  firebase:         { icon: Zap,         bg: "bg-amber-50 dark:bg-amber-900/20",  fg: "text-amber-600 dark:text-amber-400" },
  vue:              { icon: Code,        bg: "bg-emerald-50 dark:bg-emerald-900/20", fg: "text-emerald-600 dark:text-emerald-400" },
  angular:          { icon: Code,        bg: "bg-red-50 dark:bg-red-900/20",      fg: "text-red-600 dark:text-red-400" },
  php:              { icon: Code,        bg: "bg-indigo-50 dark:bg-indigo-900/20", fg: "text-indigo-600 dark:text-indigo-400" },
  csharp:           { icon: FileCode,    bg: "bg-purple-50 dark:bg-purple-900/20", fg: "text-purple-600 dark:text-purple-400" },
  swift:            { icon: Smartphone,  bg: "bg-orange-50 dark:bg-orange-900/20", fg: "text-orange-600 dark:text-orange-400" },
  kotlin:           { icon: Smartphone,  bg: "bg-violet-50 dark:bg-violet-900/20", fg: "text-violet-600 dark:text-violet-400" },
  "web-security":   { icon: Shield,      bg: "bg-red-50 dark:bg-red-900/20",      fg: "text-red-600 dark:text-red-400" },
};

const DEFAULT_ICON = { icon: Binary, bg: "bg-gray-100 dark:bg-gray-800", fg: "text-gray-500 dark:text-gray-400" };

function getSkillIcon(skillName: string) {
  return SKILL_ICONS[skillName.toLowerCase()] ?? DEFAULT_ICON;
}

/* ------------------------------------------------------------------ */
/*  Difficulty colors                                                  */
/* ------------------------------------------------------------------ */
const DIFFICULTY_COLORS: Record<TestDifficulty, string> = {
  BEGINNER: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  INTERMEDIATE: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  ADVANCED: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function SkillVerificationPage() {
  const { user } = useAuthStore();
  const [tab, setTab] = useState<"my-skills" | "browse">("browse");
  const [search, setSearch] = useState("");
  const [diffFilter, setDiffFilter] = useState<TestDifficulty | "ALL">("ALL");

  const { data: tests = [], isLoading: loadingTests } = useQuery({
    queryKey: queryKeys.skillTests.list(),
    queryFn: async () => {
      const res = await api.get("/skill-tests");
      return res.data.tests as SkillTest[];
    },
  });

  const { data: verified = [], isLoading: loadingVerified } = useQuery({
    queryKey: queryKeys.skillTests.myVerified(),
    queryFn: async () => {
      const res = await api.get("/skill-tests/my-verified");
      return res.data.verified as VerifiedSkill[];
    },
  });

  const isLoading = loadingTests || loadingVerified;

  const verifiedMap = new Map(
    verified.map((v) => [v.skillName.toLowerCase(), v])
  );

  const userSkills = user?.skills ?? [];

  const testsBySkill = new Map<string, SkillTest>();
  for (const t of tests) {
    testsBySkill.set(t.skillName.toLowerCase(), t);
  }

  const filteredTests = tests.filter((t) => {
    if (search && !t.title.toLowerCase().includes(search.toLowerCase()) && !t.skillName.toLowerCase().includes(search.toLowerCase())) return false;
    if (diffFilter !== "ALL" && t.difficulty !== diffFilter) return false;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="mt-6 text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-violet-500" />
            Skill Verification
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Verify your skills through proctored tests and earn verified badges for your profile.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm mt-6">
          <span className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg font-semibold">
            {verified.length} Verified
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
        {(["my-skills", "browse"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              tab === t
                ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            {t === "my-skills" ? "My Skills" : "Browse Tests"}
          </button>
        ))}
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 animate-pulse"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-gray-700" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                    <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-1/2" />
                  </div>
                </div>
                <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-full mb-2" />
                <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-2/3 mb-3" />
                <div className="flex gap-2">
                  <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded w-20" />
                  <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded w-14" />
                  <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded w-12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* My Skills Tab */}
      {!isLoading && tab === "my-skills" && (
        <div className="space-y-3">
          {userSkills.length === 0 ? (
            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                No skills added yet.{" "}
                <Link to="/student/profile" className="text-violet-600 dark:text-violet-400 hover:underline">
                  Add skills to your profile
                </Link>{" "}
                to start verifying them.
              </p>
            </div>
          ) : (
            userSkills.map((skill, i) => {
              const v = verifiedMap.get(skill.toLowerCase());
              const test = testsBySkill.get(skill.toLowerCase());
              const si = getSkillIcon(skill);
              const Icon = si.icon;
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${v ? "bg-green-100 dark:bg-green-900/30" : si.bg}`}>
                      {v ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <Icon className={`w-5 h-5 ${si.fg}`} />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                        {skill}
                      </p>
                      {v ? (
                        <p className="text-xs text-green-600 dark:text-green-400">
                          Verified -- Score: {v.score}%
                        </p>
                      ) : test ? (
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Test available -- {test._count?.questions ?? 0} questions in pool
                        </p>
                      ) : (
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                          No test available yet
                        </p>
                      )}
                    </div>
                  </div>
                  {v ? (
                    <span className="px-2.5 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-semibold rounded-lg shrink-0">
                      Verified {v.score}%
                    </span>
                  ) : test ? (
                    <a
                      href={`/test/${test.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold rounded-lg transition-colors shrink-0 no-underline flex items-center gap-1"
                    >
                      Take Test <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </motion.div>
              );
            })
          )}
        </div>
      )}

      {/* Browse Tests Tab */}
      {!isLoading && tab === "browse" && (
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search tests..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              {(["ALL", "BEGINNER", "INTERMEDIATE", "ADVANCED"] as const).map(
                (d) => (
                  <button
                    key={d}
                    onClick={() => setDiffFilter(d)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      diffFilter === d
                        ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {d === "ALL" ? "All" : d.charAt(0) + d.slice(1).toLowerCase()}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Test Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTests.map((test, i) => {
              const v = verifiedMap.get(test.skillName);
              const si = getSkillIcon(test.skillName);
              const Icon = si.icon;
              return (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <a
                    href={`/test/${test.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 hover:shadow-md hover:border-violet-200 dark:hover:border-violet-800 transition-all no-underline group h-full"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${si.bg}`}>
                        <Icon className={`w-5 h-5 ${si.fg}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-tight">
                            {test.title}
                          </h3>
                          {v && (
                            <span className="px-2 py-0.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-[10px] font-semibold rounded-md flex items-center gap-1 shrink-0">
                              <CheckCircle2 className="w-3 h-3" /> {v.score}%
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 capitalize">
                          {test.skillName.replace(/-/g, " ")}
                        </p>
                      </div>
                    </div>

                    {test.description && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                        {test.description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2 text-[11px]">
                      <span className={`px-2 py-0.5 rounded-md font-medium ${DIFFICULTY_COLORS[test.difficulty]}`}>
                        {test.difficulty}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        <HelpCircle className="w-3 h-3" /> {test._count?.questions ?? 0} Qs
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {Math.ceil(test.timeLimitSecs / 60)}m
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                        Pass: {test.passThreshold}%
                      </span>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {filteredTests.length === 0 && (
            <div className="text-center py-10 text-sm text-gray-500 dark:text-gray-400">
              No tests found matching your criteria.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
