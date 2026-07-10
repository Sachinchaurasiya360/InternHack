import { Link } from "react-router";
import { motion } from "framer-motion";
import { Calendar, Bot, Users, Clock, MessageSquare, ArrowRight, CalendarClock, Lock } from "lucide-react";
import { SEO } from "../../../components/SEO";

const OPTIONS = [
  {
    id: "expert",
    number: "01",
    title: "Expert Interview",
    description:
      "Book a 30-minute live session with an industry expert for ₹49. Pick a slot, tell us what to focus on, get real feedback.",
    icon: CalendarClock,
    tags: ["1 on 1", "₹49 / session"],
  },
  {
    id: "peer",
    number: "02",
    title: "Peer Mock Interview",
    description:
      "Practice 1-on-1 with fellow students on your roadmap. Coordinate sessions, solve assigned problems, and review each other's performance.",
    icon: Users,
    tags: ["Instant matches", "Collaborative"],
  },
] as const;

export default function MockInterviewLandingPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
      <SEO title="Mock Interview" noIndex />
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Editorial header */}
          <div className="mt-2 mb-10 border-b border-stone-200 dark:border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              practice / mock interview
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Practice your{" "}
              <span className="relative inline-block">
                <span className="relative z-10">interview.</span>
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
              Book a live session with an industry expert, or match with a peer on your roadmap.
              Walk away with feedback you can act on.
            </p>
          </div>

          {/* Primary option tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
            {OPTIONS.map((opt) => {
              const Icon = opt.icon;
              return (
                <Link
                  key={opt.id}
                  to={opt.id}
                  className="group relative flex flex-col gap-5 p-7 text-left no-underline transition-all duration-200 bg-white dark:bg-stone-900 hover:bg-stone-900 dark:hover:bg-stone-50"
                >
                  {/* Number + icon */}
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600 group-hover:text-lime-400 dark:group-hover:text-lime-500">
                      / {opt.number}
                    </span>
                    <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center transition-colors group-hover:bg-lime-400">
                      <Icon className="w-5 h-5 text-stone-600 dark:text-stone-400 group-hover:text-stone-950" />
                    </div>
                  </div>

                  {/* Title + description */}
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900">
                      {opt.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-500 dark:text-stone-400 group-hover:text-stone-400 dark:group-hover:text-stone-600 leading-relaxed">
                      {opt.description}
                    </p>
                  </div>

                  {/* Tags + arrow */}
                  <div className="flex items-center justify-between gap-3 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {opt.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-md text-xs font-mono uppercase tracking-widest bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 group-hover:bg-white/10 dark:group-hover:bg-black/10 group-hover:text-stone-200 dark:group-hover:text-stone-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-600 group-hover:text-lime-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* AI interview: locked, coming soon */}
          <div
            aria-disabled
            className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 rounded-md border border-dashed border-stone-300 dark:border-white/15 bg-stone-100/60 dark:bg-white/3 p-6 cursor-not-allowed"
          >
            <div className="w-11 h-11 rounded-md bg-stone-200 dark:bg-white/5 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 text-stone-400 dark:text-stone-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold tracking-tight text-stone-500 dark:text-stone-400">
                AI Interview
              </h3>
              <p className="mt-1 text-sm text-stone-400 dark:text-stone-500 leading-relaxed">
                Practice anytime with an AI interviewer that gives instant feedback. We are rebuilding this
                so it is worth your time, it is not ready yet.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 shrink-0">
              <Lock className="w-3.5 h-3.5" />
              Coming soon
            </span>
          </div>

          {/* Stats strip */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
            {[
              {
                icon: Clock,
                label: "30 min",
                sub: "typical session length",
              },
              {
                icon: MessageSquare,
                label: "structured feedback",
                sub: "communication, accuracy, rating",
              },
              {
                icon: Calendar,
                label: "flexible timing",
                sub: "expert on your schedule, peers instantly",
              },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 p-4 bg-white dark:bg-stone-900"
              >
                <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                  <f.icon className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 dark:text-stone-50">
                    {f.label}
                  </p>
                  <p className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    {f.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
