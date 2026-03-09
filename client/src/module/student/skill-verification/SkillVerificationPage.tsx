import { useState, useEffect } from "react";
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
  Filter,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { useAuthStore } from "../../../lib/auth.store";
import type { SkillTest, VerifiedSkill, TestDifficulty } from "../../../lib/types";

const DIFFICULTY_COLORS: Record<TestDifficulty, string> = {
  BEGINNER: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  INTERMEDIATE: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  ADVANCED: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

export default function SkillVerificationPage() {
  const { user } = useAuthStore();
  const [tab, setTab] = useState<"my-skills" | "browse">("my-skills");
  const [search, setSearch] = useState("");
  const [diffFilter, setDiffFilter] = useState<TestDifficulty | "ALL">("ALL");

  const { data: tests = [] } = useQuery({
    queryKey: queryKeys.skillTests.list(),
    queryFn: async () => {
      const res = await api.get("/skill-tests");
      return res.data.tests as SkillTest[];
    },
  });

  const { data: verified = [] } = useQuery({
    queryKey: queryKeys.skillTests.myVerified(),
    queryFn: async () => {
      const res = await api.get("/skill-tests/my-verified");
      return res.data.verified as VerifiedSkill[];
    },
  });

  const verifiedMap = new Map(
    verified.map((v) => [v.skillName.toLowerCase(), v])
  );

  const userSkills = user?.skills ?? [];

  // Tests matching user skills
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-violet-500" />
            Skill Verification
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Verify your skills through proctored tests. Verified skills are visible to recruiters.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
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

      {/* My Skills Tab */}
      {tab === "my-skills" && (
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
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        v
                          ? "bg-green-100 dark:bg-green-900/30"
                          : "bg-gray-100 dark:bg-gray-800"
                      }`}
                    >
                      {v ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <ShieldCheck className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                        {skill}
                      </p>
                      {v ? (
                        <p className="text-xs text-green-600 dark:text-green-400">
                          Verified — Score: {v.score}%
                        </p>
                      ) : test ? (
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Test available — {test._count?.questions ?? 0} questions
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
                    <Link
                      to={`/student/skill-verification/${test.id}`}
                      className="px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold rounded-lg transition-colors shrink-0 no-underline flex items-center gap-1"
                    >
                      Take Test <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : null}
                </motion.div>
              );
            })
          )}
        </div>
      )}

      {/* Browse Tests Tab */}
      {tab === "browse" && (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTests.map((test, i) => {
              const v = verifiedMap.get(test.skillName);
              return (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={`/student/skill-verification/${test.id}`}
                    className="block bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 hover:shadow-md hover:border-violet-200 dark:hover:border-violet-800 transition-all no-underline group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {test.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 capitalize">
                          {test.skillName.replace("-", " ")}
                        </p>
                      </div>
                      {v && (
                        <span className="px-2 py-0.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-[10px] font-semibold rounded-md flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> {v.score}%
                        </span>
                      )}
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
                        <HelpCircle className="w-3 h-3" /> {test._count?.questions ?? 0} questions
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {Math.ceil(test.timeLimitSecs / 60)} min
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                        Pass: {test.passThreshold}%
                      </span>
                    </div>
                  </Link>
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
