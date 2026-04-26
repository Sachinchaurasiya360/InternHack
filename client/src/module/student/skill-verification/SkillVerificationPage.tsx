import { useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  HelpCircle,
  ArrowUpRight,
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
  X,
  type LucideIcon,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { useAuthStore } from "../../../lib/auth.store";
import type { SkillTest, VerifiedSkill, TestDifficulty } from "../../../lib/types";

/* ------------------------------------------------------------------ */
/*  Skill icon + color mapping                                         */
/* ------------------------------------------------------------------ */
const SKILL_ICONS: Record<string, { icon: LucideIcon; fg: string }> = {
  javascript:        { icon: Braces,       fg: "text-yellow-600 dark:text-yellow-400" },
  python:            { icon: Code,         fg: "text-blue-600 dark:text-blue-400" },
  react:             { icon: Zap,          fg: "text-cyan-600 dark:text-cyan-400" },
  nodejs:            { icon: Server,       fg: "text-green-600 dark:text-green-400" },
  sql:               { icon: Database,     fg: "text-indigo-600 dark:text-indigo-400" },
  java:              { icon: FileCode,     fg: "text-orange-600 dark:text-orange-400" },
  typescript:        { icon: FileCode,     fg: "text-blue-600 dark:text-blue-400" },
  "html-css":        { icon: Palette,      fg: "text-pink-600 dark:text-pink-400" },
  git:               { icon: GitBranch,    fg: "text-red-600 dark:text-red-400" },
  "data-structures": { icon: Network,      fg: "text-violet-600 dark:text-violet-400" },
  express:           { icon: Zap,          fg: "text-stone-700 dark:text-stone-300" },
  mongodb:           { icon: Database,     fg: "text-emerald-600 dark:text-emerald-400" },
  docker:            { icon: Box,          fg: "text-sky-600 dark:text-sky-400" },
  aws:               { icon: Cloud,        fg: "text-orange-600 dark:text-orange-400" },
  graphql:           { icon: Workflow,     fg: "text-pink-600 dark:text-pink-400" },
  nextjs:            { icon: Globe,        fg: "text-stone-700 dark:text-stone-300" },
  redis:             { icon: Layers,       fg: "text-red-600 dark:text-red-400" },
  websocket:         { icon: Radio,        fg: "text-violet-600 dark:text-violet-400" },
  "rest-api":        { icon: Globe,        fg: "text-teal-600 dark:text-teal-400" },
  cpp:               { icon: Cpu,          fg: "text-blue-600 dark:text-blue-400" },
  go:                { icon: Terminal,     fg: "text-cyan-600 dark:text-cyan-400" },
  rust:              { icon: Shield,       fg: "text-orange-600 dark:text-orange-400" },
  django:            { icon: Code,         fg: "text-green-600 dark:text-green-400" },
  kubernetes:        { icon: Box,          fg: "text-blue-600 dark:text-blue-400" },
  linux:             { icon: Terminal,     fg: "text-stone-700 dark:text-stone-300" },
  "system-design":   { icon: Workflow,     fg: "text-indigo-600 dark:text-indigo-400" },
  cybersecurity:     { icon: Lock,         fg: "text-red-600 dark:text-red-400" },
  "machine-learning":{ icon: FlaskConical, fg: "text-purple-600 dark:text-purple-400" },
  devops:            { icon: Workflow,     fg: "text-teal-600 dark:text-teal-400" },
  tailwindcss:       { icon: Paintbrush,   fg: "text-sky-600 dark:text-sky-400" },
  flutter:           { icon: Smartphone,   fg: "text-blue-600 dark:text-blue-400" },
  "react-native":    { icon: Smartphone,   fg: "text-cyan-600 dark:text-cyan-400" },
  postgres:          { icon: Database,     fg: "text-blue-600 dark:text-blue-400" },
  firebase:          { icon: Zap,          fg: "text-amber-600 dark:text-amber-400" },
  vue:               { icon: Code,         fg: "text-emerald-600 dark:text-emerald-400" },
  angular:           { icon: Code,         fg: "text-red-600 dark:text-red-400" },
  php:               { icon: Code,         fg: "text-indigo-600 dark:text-indigo-400" },
  csharp:            { icon: FileCode,     fg: "text-purple-600 dark:text-purple-400" },
  swift:             { icon: Smartphone,   fg: "text-orange-600 dark:text-orange-400" },
  kotlin:            { icon: Smartphone,   fg: "text-violet-600 dark:text-violet-400" },
  "web-security":    { icon: Shield,       fg: "text-red-600 dark:text-red-400" },
};

const DEFAULT_ICON = { icon: Binary, fg: "text-stone-500 dark:text-stone-400" };

function getSkillIcon(skillName: string) {
  return SKILL_ICONS[skillName.toLowerCase()] ?? DEFAULT_ICON;
}

const DIFFICULTY_STYLE: Record<TestDifficulty, string> = {
  BEGINNER:     "text-green-700 dark:text-green-400 border-green-300 dark:border-green-900/60",
  INTERMEDIATE: "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-900/60",
  ADVANCED:     "text-red-700 dark:text-red-400 border-red-300 dark:border-red-900/60",
};

function SkillMark({ skill, verified }: { skill: string; verified?: boolean }) {
  const si = getSkillIcon(skill);
  const Icon = verified ? CheckCircle2 : si.icon;
  return (
    <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
      <Icon className={`w-5 h-5 ${verified ? "text-lime-600 dark:text-lime-400" : si.fg}`} />
    </div>
  );
}

function MetaChip({ icon, children, className = "" }: { icon?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border rounded-md ${className || "text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10"}`}>
      {icon && <span className="text-stone-400">{icon}</span>}
      {children}
    </span>
  );
}

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

  const verifiedMap = new Map(verified.map((v) => [v.skillName.toLowerCase(), v]));
  const userSkills = user?.skills ?? [];

  const testsBySkill = new Map<string, SkillTest>();
  for (const t of tests) testsBySkill.set(t.skillName.toLowerCase(), t);

  const filteredTests = tests.filter((t) => {
    if (
      search &&
      !t.title.toLowerCase().includes(search.toLowerCase()) &&
      !t.skillName.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    if (diffFilter !== "ALL" && t.difficulty !== diffFilter) return false;
    return true;
  });

  const hasFilters = search !== "" || diffFilter !== "ALL";
  const clearAll = () => {
    setSearch("");
    setDiffFilter("ALL");
  };

  return (
    <div className="relative text-stone-900 dark:text-stone-50">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05] z-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(120,113,108,0.25) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              student / skill verification
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Prove your{" "}
              <span className="relative inline-block">
                <span className="relative z-10">skills.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  aria-hidden
                  className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
                />
              </span>
            </h1>
            <p className="mt-3 text-sm text-stone-500 max-w-md">
              Timed, proctored tests that convert into verified badges on your profile, visible to every recruiter who opens your application.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span>
              verified
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {verified.length}
              </span>
            </span>
            <span>
              available
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {tests.length}
              </span>
            </span>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8 flex items-center gap-6 border-b border-stone-200 dark:border-white/10"
        >
          {(["browse", "my-skills"] as const).map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative pb-3 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-0 ${
                  active
                    ? "text-stone-900 dark:text-stone-50"
                    : "text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
                }`}
              >
                {t === "my-skills" ? "my skills" : "browse tests"}
                {active && (
                  <motion.span
                    layoutId="skill-tab-underline"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-lime-400"
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Loading */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 animate-pulse"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-md bg-stone-200 dark:bg-stone-800" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-stone-200 dark:bg-stone-800 rounded w-3/4" />
                    <div className="h-3 bg-stone-100 dark:bg-stone-800/60 rounded w-1/2" />
                  </div>
                </div>
                <div className="h-3 bg-stone-100 dark:bg-stone-800/60 rounded w-full mb-2" />
                <div className="h-3 bg-stone-100 dark:bg-stone-800/60 rounded w-2/3 mb-3" />
                <div className="flex gap-2">
                  <div className="h-5 bg-stone-100 dark:bg-stone-800/60 rounded w-20" />
                  <div className="h-5 bg-stone-100 dark:bg-stone-800/60 rounded w-14" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* My Skills Tab */}
        {!isLoading && tab === "my-skills" && (
          <div>
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  <span className="h-1 w-1 bg-lime-400" />
                  profile / skills
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  Your skill ledger
                </h2>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hidden sm:block">
                {userSkills.length} on file
              </span>
            </div>

            {userSkills.length === 0 ? (
              <div className="py-16 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
                <ShieldCheck className="w-8 h-8 text-stone-400 mx-auto mb-3" />
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  No skills on your profile yet.
                </p>
                <Link
                  to="/student/profile"
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                >
                  add skills <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userSkills.map((skill, i) => {
                  const v = verifiedMap.get(skill.toLowerCase());
                  const test = testsBySkill.get(skill.toLowerCase());
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="group relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 hover:border-stone-400 dark:hover:border-white/30 transition-colors flex items-center justify-between gap-3"
                    >
                      {v && (
                        <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
                          <span className="h-1 w-1 bg-lime-400" />
                          verified
                        </span>
                      )}
                      <div className="flex items-center gap-3 min-w-0 pr-20">
                        <SkillMark skill={skill} verified={!!v} />
                        <div className="min-w-0">
                          <p className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate capitalize">
                            {skill.replace(/-/g, " ")}
                          </p>
                          {v ? (
                            <p className="text-xs font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 mt-0.5">
                              score {v.score}%
                            </p>
                          ) : test ? (
                            <p className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5">
                              {test._count?.questions ?? 0} questions ready
                            </p>
                          ) : (
                            <p className="text-xs font-mono uppercase tracking-widest text-stone-400 mt-0.5">
                              no test yet
                            </p>
                          )}
                        </div>
                      </div>
                      {!v && test && (
                        <a
                          href={`/test/${test.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors no-underline shrink-0"
                        >
                          take test <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Browse Tests Tab */}
        {!isLoading && tab === "browse" && (
          <div>
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by title or skill..."
                    className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mr-1">
                  difficulty /
                </span>
                {(["ALL", "BEGINNER", "INTERMEDIATE", "ADVANCED"] as const).map((d, i) => {
                  const active = diffFilter === d;
                  return (
                    <motion.button
                      key={d}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.2 }}
                      onClick={() => setDiffFilter(d)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                        active
                          ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                          : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
                      }`}
                    >
                      {d === "ALL" ? "All" : d.charAt(0) + d.slice(1).toLowerCase()}
                    </motion.button>
                  );
                })}
                <AnimatePresence>
                  {hasFilters && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      onClick={clearAll}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                    >
                      <X className="w-3 h-3" /> clear
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Section header */}
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  <span className="h-1 w-1 bg-lime-400" />
                  proctored / timed
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  Available tests
                </h2>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hidden sm:block">
                {filteredTests.length} results
              </span>
            </div>

            {/* Grid */}
            {filteredTests.length === 0 ? (
              <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
                <p className="text-sm text-stone-600 dark:text-stone-400">No tests match your filters.</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-2">
                  try different search criteria
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTests.map((test, i) => {
                  const v = verifiedMap.get(test.skillName.toLowerCase());
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
                        className="group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full no-underline"
                      >
                        {v && (
                          <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 inline-flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3" /> {v.score}%
                          </span>
                        )}
                        <div className="flex items-start gap-3 mb-3 pr-16">
                          <SkillMark skill={test.skillName} />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight">
                              {test.title}
                            </h3>
                            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
                              {test.skillName.replace(/-/g, " ")}
                            </span>
                          </div>
                        </div>

                        {test.description && (
                          <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
                            {test.description}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          <MetaChip className={DIFFICULTY_STYLE[test.difficulty]}>
                            {test.difficulty}
                          </MetaChip>
                          <MetaChip icon={<HelpCircle className="w-3 h-3" />}>
                            {test._count?.questions ?? 0} Qs
                          </MetaChip>
                          <MetaChip icon={<Clock className="w-3 h-3" />}>
                            {Math.ceil(test.timeLimitSecs / 60)}m
                          </MetaChip>
                          <MetaChip>pass {test.passThreshold}%</MetaChip>
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
                          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                            {v ? "retake test" : "take test"}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
