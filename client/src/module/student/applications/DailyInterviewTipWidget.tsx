import { useState } from "react";
import { RefreshCw, Copy, Check, Lightbulb } from "lucide-react";

const tips = [
  { category: "Resume", tip: "Tailor your resume for each job application by mirroring keywords from the job description." },
  { category: "Resume", tip: "Quantify your achievements — use numbers and percentages to show impact." },
  { category: "Resume", tip: "Keep your resume to one page if you have less than 5 years of experience." },
  { category: "Resume", tip: "Use action verbs like 'built', 'led', 'optimized' to start each bullet point." },
  { category: "Coding", tip: "Always clarify the problem before diving into code — ask about edge cases and constraints." },
  { category: "Coding", tip: "Think out loud during coding interviews; interviewers value your thought process." },
  { category: "Coding", tip: "Start with a brute-force solution, then optimize — never jump to complex solutions first." },
  { category: "Coding", tip: "Practice writing clean, readable code — use meaningful variable names." },
  { category: "Coding", tip: "Know your time and space complexity for every solution you write." },
  { category: "HR Round", tip: "Prepare a concise 2-minute 'tell me about yourself' answer before any interview." },
  { category: "HR Round", tip: "Use the STAR method (Situation, Task, Action, Result) for behavioral questions." },
  { category: "HR Round", tip: "Research the company thoroughly — mission, products, culture, and recent news." },
  { category: "HR Round", tip: "Always have 2-3 thoughtful questions ready to ask your interviewer." },
  { category: "Communication", tip: "Maintain eye contact and nod to show engagement during interviews." },
  { category: "Communication", tip: "Pause and think before answering — it's okay to take a moment to collect your thoughts." },
  { category: "Communication", tip: "Avoid filler words like 'um' and 'like' — practice speaking slowly and clearly." },
  { category: "Productivity", tip: "Do a mock interview with a friend or record yourself to identify areas to improve." },
  { category: "Productivity", tip: "Solve at least one DSA problem daily to stay sharp during your job search." },
  { category: "Productivity", tip: "Track all your applications in one place to follow up at the right time." },
  { category: "Productivity", tip: "Set a daily goal — applications, problems, or networking messages — and stick to it." },
];

const categoryColors: Record<string, string> = {
  Resume: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/60",
  Coding: "text-lime-700 dark:text-lime-400 bg-lime-50 dark:bg-lime-950/40 border-lime-300",
  "HR Round": "text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-900/60",
  Communication: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/60",
  Productivity: "text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-white/10",
};

function getDailyTipIndex(): number {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return dayOfYear % tips.length;
}

export default function DailyInterviewTipWidget() {
  const [tipIndex, setTipIndex] = useState(getDailyTipIndex);
  const [copied, setCopied] = useState(false);

  const tip = tips[tipIndex];

  const handleRefresh = () => {
    setTipIndex((prev) => (prev + 1) % tips.length);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`[${tip.category}] ${tip.tip}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-8 p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
          <Lightbulb className="w-3.5 h-3.5 text-lime-500" />
          Daily Interview Tip
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            title="Copy tip"
            className="p-1.5 rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors bg-transparent border-0 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-lime-500" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={handleRefresh}
            title="New tip"
            className="p-1.5 rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors bg-transparent border-0 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-3">
        {tip.tip}
      </p>

      <span
        className={`inline-flex px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest border rounded-md ${categoryColors[tip.category] ?? categoryColors["Productivity"]}`}
      >
        {tip.category}
      </span>
    </div>
  );
}

