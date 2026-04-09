import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, CheckCircle2, XCircle, Gift } from "lucide-react";
import { useLearnStore } from "../../lib/learn-gamification";

type Challenge = {
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

const CHALLENGES: Challenge[] = [
  {
    topic: "JavaScript",
    question: "What is the output of: typeof null",
    options: ['"null"', '"object"', '"undefined"', '"boolean"'],
    correctIndex: 1,
    explanation: "This is a famous JavaScript quirk. typeof null returns 'object' due to a bug in the original implementation that was never fixed for backward compatibility.",
  },
  {
    topic: "HTML",
    question: "Which tag is used for the most important heading on a page?",
    options: ["<h6>", "<header>", "<h1>", "<title>"],
    correctIndex: 2,
    explanation: "<h1> is the top-level heading. You should typically have only one <h1> per page for SEO and accessibility.",
  },
  {
    topic: "CSS",
    question: "Which property creates space INSIDE an element's border?",
    options: ["margin", "padding", "spacing", "gap"],
    correctIndex: 1,
    explanation: "Padding is space inside the border, margin is space outside it.",
  },
  {
    topic: "React",
    question: "What hook runs side effects after render?",
    options: ["useState", "useMemo", "useEffect", "useContext"],
    correctIndex: 2,
    explanation: "useEffect runs after the DOM has been updated, making it ideal for side effects like data fetching, subscriptions, or manual DOM manipulation.",
  },
  {
    topic: "SQL",
    question: "Which clause filters rows AFTER aggregation?",
    options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    correctIndex: 1,
    explanation: "HAVING filters groups after GROUP BY and aggregation. WHERE filters rows before aggregation.",
  },
  {
    topic: "Python",
    question: "What does list comprehension [x*2 for x in range(3)] produce?",
    options: ["[0, 1, 2]", "[0, 2, 4]", "[2, 4, 6]", "[1, 2, 3]"],
    correctIndex: 1,
    explanation: "range(3) is 0,1,2; multiplying each by 2 gives [0, 2, 4].",
  },
  {
    topic: "DSA",
    question: "What is the time complexity of binary search on a sorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctIndex: 1,
    explanation: "Binary search halves the search space each iteration, giving O(log n).",
  },
  {
    topic: "Git",
    question: "Which command creates a new branch and switches to it?",
    options: ["git branch new", "git checkout new", "git switch -c new", "git merge new"],
    correctIndex: 2,
    explanation: "git switch -c new creates and switches. git checkout -b new also works but switch is preferred in modern Git.",
  },
  {
    topic: "Node.js",
    question: "What is the non-blocking I/O model based on?",
    options: ["Threads", "Event loop", "Fork", "Cron"],
    correctIndex: 1,
    explanation: "Node.js uses a single-threaded event loop with libuv to handle I/O asynchronously.",
  },
  {
    topic: "TypeScript",
    question: "Which type means 'any value, but typed'?",
    options: ["any", "unknown", "never", "void"],
    correctIndex: 1,
    explanation: "unknown is the type-safe counterpart of any. You must narrow unknown before using it, while any bypasses type checking.",
  },
];

function todayIndex() {
  const d = new Date();
  const seed = d.getFullYear() * 1000 + (d.getMonth() + 1) * 50 + d.getDate();
  return seed % CHALLENGES.length;
}

export function DailyChallenge() {
  const idx = useMemo(() => todayIndex(), []);
  const challenge = CHALLENGES[idx];
  const dailyDone = useLearnStore((s) => s.dailyChallengeDone);
  const markDone = useLearnStore((s) => s.markDailyChallengeDone);
  const todayKey = new Date().toISOString().slice(0, 10);
  const alreadyDone = !!dailyDone[todayKey];
  const [selected, setSelected] = useState<number | null>(null);

  function handleSelect(i: number) {
    if (selected !== null || alreadyDone) return;
    setSelected(i);
    if (i === challenge.correctIndex) {
      setTimeout(() => markDone(), 800);
    }
  }

  const isCorrect = selected === challenge.correctIndex;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/60 dark:bg-indigo-950/20 p-6 mb-6"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-950 dark:text-white">Daily Challenge</h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">
                {challenge.topic} · Worth 25 XP
              </p>
            </div>
          </div>
          {alreadyDone && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2.5 py-1 rounded-full">
              <CheckCircle2 className="w-3 h-3" />
              Done
            </span>
          )}
        </div>

        <p className="text-base font-semibold text-gray-950 dark:text-white mb-4">{challenge.question}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {challenge.options.map((opt, i) => {
            const showResult = selected !== null || alreadyDone;
            const isSel = selected === i;
            const isRight = i === challenge.correctIndex;
            const cls = showResult
              ? isRight
                ? "border-green-500 bg-green-50 dark:bg-green-950/30 text-green-900 dark:text-green-200"
                : isSel
                  ? "border-red-500 bg-red-50 dark:bg-red-950/30 text-red-900 dark:text-red-200"
                  : "border-gray-200 dark:border-gray-700 text-gray-500"
              : "border-gray-200 dark:border-gray-700 hover:border-indigo-400 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 cursor-pointer bg-white dark:bg-gray-900";
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={showResult}
                className={`text-left px-4 py-3 text-sm rounded-xl border-2 transition-all flex items-center justify-between ${cls}`}
              >
                <span>{opt}</span>
                {showResult && isRight && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                {showResult && isSel && !isRight && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className={`mt-4 p-4 rounded-xl text-sm ${
                isCorrect
                  ? "bg-green-50 dark:bg-green-950/20 text-green-900 dark:text-green-200"
                  : "bg-amber-50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200"
              }`}
            >
              <span className="font-semibold flex items-center gap-1.5">
                {isCorrect ? (
                  <>
                    <Gift className="w-4 h-4" />
                    +25 XP earned!
                  </>
                ) : (
                  "Not quite"
                )}
              </span>
              <p className="mt-1">{challenge.explanation}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
