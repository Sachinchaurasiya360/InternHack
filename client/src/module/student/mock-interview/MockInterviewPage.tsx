import { useState } from "react";
import { motion } from "framer-motion";
import { Video, Calendar, Bot, Wand2, Users, Clock, MessageSquare, ExternalLink } from "lucide-react";
import { SEO } from "../../../components/SEO";

const CALENDLY_URL = "https://calendly.com/mrsachinchaurasiya/30min";

type InterviewMode = null | "ai" | "expert";

const OPTIONS = [
  {
    id: "ai" as const,
    kicker: "option 01",
    title: "AI Interview",
    description: "Practice anytime with our AI interviewer. Instant feedback on your answers, communication, and problem-solving approach.",
    icon: Bot,
    tags: ["24 / 7", "instant feedback"],
  },
  {
    id: "expert" as const,
    kicker: "option 02",
    title: "Expert Interview",
    description: "Book a thirty-minute live session with an industry expert via Calendly for personalised, real-world feedback.",
    icon: Users,
    tags: ["1 on 1", "real feedback"],
  },
];

const ghostBtnCls =
  "inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer";
const limeBtnCls =
  "inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors border-0 cursor-pointer no-underline";

export default function MockInterviewPage() {
  const [mode, setMode] = useState<InterviewMode>(null);

  // Expert mode
  if (mode === "expert") {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
        <SEO title="Expert Mock Interview" noIndex />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {/* Editorial header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  interview / expert
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
                Book an expert mock interview.
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                Schedule a thirty-minute session with an industry expert. Pick a time that works for you below.
              </p>
            </div>

            {/* Calendly iframe card */}
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/40">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 bg-lime-400"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    calendly / 30 min slot
                  </span>
                </div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ghostBtnCls}
                >
                  <ExternalLink className="w-3 h-3" />
                  open in new tab
                </a>
              </div>
              <iframe
                src={CALENDLY_URL}
                className="w-full border-0 block bg-white"
                style={{ minHeight: "660px" }}
                title="Schedule Mock Interview"
              />
            </div>

            <div className="flex justify-center mt-6">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={limeBtnCls}>
                <Calendar className="w-4 h-4" />
                Open full calendar
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // AI mode (coming soon)
  if (mode === "ai") {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
        <SEO title="AI Mock Interview" noIndex />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  interview / ai
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
                AI mock interview.
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                Practice with our AI interviewer. Get instant feedback on your answers, communication, and problem-solving approach.
              </p>
            </div>

            {/* Coming soon card */}
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/40">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  status / in development
                </span>
              </div>
              <div className="p-10 sm:p-14 text-center">
                <div className="relative inline-block mb-5">
                  <div className="w-16 h-16 rounded-md bg-stone-900 dark:bg-stone-50 flex items-center justify-center">
                    <Wand2 className="w-8 h-8 text-stone-50 dark:text-stone-900" />
                  </div>
                  <div className="absolute -top-1 -right-1 h-2 w-2 bg-lime-400"></div>
                </div>
                <h2 className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
                  Coming soon.
                </h2>
                <p className="text-sm text-stone-600 dark:text-stone-400 max-w-md mx-auto mb-6">
                  AI-powered mock interviews are currently under development. In the meantime, book a live session with an expert.
                </p>
                <button type="button" onClick={() => setMode("expert")} className={limeBtnCls}>
                  <Users className="w-4 h-4" />
                  Book an expert instead
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Landing (choose mode)
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
      <SEO title="Mock Interview" noIndex />
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          {/* Editorial header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-1 bg-lime-400"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                practice / mock interview
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
              Practice your next interview.
            </h1>
            <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
              Pick your interview style and start practicing. AI for anytime reps, an expert for real feedback.
            </p>
          </div>

          {/* Hero tile */}
          <div className="mb-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
              <Video className="w-5 h-5 text-stone-700 dark:text-stone-300" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-0.5">
                how it works
              </p>
              <p className="text-sm text-stone-700 dark:text-stone-300">
                Choose a mode, run the session, walk away with specific feedback you can act on.
              </p>
            </div>
          </div>

          {/* Options grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-stone-200 dark:border-white/10">
            {OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setMode(opt.id)}
                className="group relative flex flex-col gap-3 p-6 text-left transition-colors border-r border-b border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 hover:bg-stone-900 dark:hover:bg-stone-50 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 group-hover:text-lime-400">
                    / {opt.kicker}
                  </span>
                  <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 group-hover:bg-stone-50 dark:group-hover:bg-white/10 flex items-center justify-center transition-colors">
                    <opt.icon className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-lime-600 dark:group-hover:text-lime-400" />
                  </div>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900">
                  {opt.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-700 line-clamp-3">
                  {opt.description}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 mt-auto pt-2">
                  {opt.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-widest bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 group-hover:bg-white/10 dark:group-hover:bg-stone-900/10 group-hover:text-stone-50 dark:group-hover:text-stone-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* Footer hint strip */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10">
            {[
              { icon: Clock, label: "30 min", sub: "typical session length" },
              { icon: MessageSquare, label: "feedback", sub: "what to improve, clearly" },
              { icon: Calendar, label: "flexible", sub: "ai now, expert on your schedule" },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-start gap-3 p-4 border-r border-b border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900"
              >
                <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                  <f.icon className="w-4 h-4 text-stone-700 dark:text-stone-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">
                    {f.label}
                  </span>
                  <span className="text-xs text-stone-600 dark:text-stone-400">{f.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
