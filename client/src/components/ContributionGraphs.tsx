import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ActivityCalendar } from "react-activity-calendar";
import { useQuery } from "@tanstack/react-query";
import { Github, ExternalLink } from "lucide-react";
import api from "../lib/axios";

interface Activity {
  date: string;
  count: number;
  level: number;
}

interface LeetCodeData {
  totalActive: number;
  streak: number;
  calendar: Activity[];
}

function emptyYearCalendar(): Activity[] {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const entries: Activity[] = [];
  for (let d = new Date(start); d <= now; d.setDate(d.getDate() + 1)) {
    entries.push({ date: d.toISOString().split("T")[0]!, count: 0, level: 0 });
  }
  return entries;
}

interface Props {
  githubUsername?: string;
  leetcodeUsername?: string;
  /** Show "link your account" prompts (own profile) vs hide entirely (public) */
  showPrompts?: boolean;
}

const TABS = ["GitHub", "LeetCode"] as const;
type Tab = (typeof TABS)[number];

export default function ContributionGraphs({ githubUsername, leetcodeUsername, showPrompts = false }: Props) {
  const hasGithub = !!githubUsername;
  const hasLeetcode = !!leetcodeUsername;

  const availableTabs = TABS.filter((t) => {
    if (t === "GitHub") return hasGithub || showPrompts;
    if (t === "LeetCode") return hasLeetcode || showPrompts;
    return false;
  });

  const [activeTab, setActiveTab] = useState<Tab>(() => {
    if (hasGithub) return "GitHub";
    if (hasLeetcode) return "LeetCode";
    return "GitHub";
  });

  const { data: leetcodeData, isLoading: leetcodeLoading } = useQuery({
    queryKey: ["leetcode-calendar", leetcodeUsername],
    queryFn: () =>
      api.get(`/leetcode/calendar/${encodeURIComponent(leetcodeUsername!)}`)
        .then((res) => res.data as LeetCodeData),
    enabled: !!leetcodeUsername,
    staleTime: 60 * 60 * 1000,
  });

  if (availableTabs.length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-950 dark:text-white flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center">
            <Github className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          Coding Activity
        </h3>

        {availableTabs.length > 1 && (
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5">
            {availableTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeTab === tab
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>

      {activeTab === "GitHub" && (
        hasGithub ? (
          <div>
            <div className="overflow-x-auto pb-2">
              <GitHubCalendar
                username={githubUsername!}
                colorScheme="light"
                fontSize={11}
                blockSize={10}
                blockMargin={3}
              />
            </div>
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 mt-2 transition-colors no-underline"
            >
              <ExternalLink className="w-3 h-3" /> View on GitHub
            </a>
          </div>
        ) : showPrompts ? (
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Add your GitHub URL in Social Links to see your contribution graph
          </p>
        ) : null
      )}

      {activeTab === "LeetCode" && (
        hasLeetcode ? (
          <div>
            {leetcodeLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 border-t-indigo-500 rounded-full animate-spin" />
              </div>
            ) : leetcodeData ? (
              <>
                <div className="overflow-x-auto pb-2">
                  <ActivityCalendar
                    data={leetcodeData.calendar.length > 0 ? leetcodeData.calendar : emptyYearCalendar()}
                    colorScheme="light"
                    fontSize={11}
                    blockSize={10}
                    blockMargin={3}
                    theme={{
                      light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                      dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                    }}
                  />
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{leetcodeData.totalActive}</span> active days
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{leetcodeData.streak}</span> day streak
                  </span>
                  <a
                    href={`https://leetcode.com/${leetcodeUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 ml-auto transition-colors no-underline"
                  >
                    <ExternalLink className="w-3 h-3" /> View on LeetCode
                  </a>
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Could not load LeetCode data. Check the username.
              </p>
            )}
          </div>
        ) : showPrompts ? (
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Add your LeetCode URL in Social Links to see your submission graph
          </p>
        ) : null
      )}
    </div>
  );
}
