import { Link } from "react-router"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Zap, ShieldCheck, Clock, Lock } from "lucide-react"
import { SEO } from "../../../../components/SEO"
import { canonicalUrl } from "../../../../lib/seo.utils"
import { CN_MODULES } from "./curriculum"

const HIGHLIGHTS = [
  { icon: BookOpen, value: CN_MODULES.length, label: "modules" },
  { icon: Zap, value: "20+", label: "animations" },
  { icon: ShieldCheck, value: "0", label: "prerequisites" },
]

export default function ComputerNetworksHubPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
      <SEO
        title="Computer Networks - Interactive, Animated Course"
        description="Learn computer networking from the first packet to global BGP routing. Every layer demystified with interactive animations, quick checks, and module quizzes."
        keywords="computer networks course, OSI model, TCP/IP, subnetting, DNS, HTTP, networking tutorial, interview prep"
        canonicalUrl={canonicalUrl("/learn/computer-networks")}
      />

      <div className="mx-auto max-w-6xl px-3 py-8 sm:px-8">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 mt-6 border-b border-stone-200 pb-8 dark:border-white/10"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            learn / computer networks
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-none tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl">
            Networks, one{" "}
            <span className="relative inline-block">
              <span className="relative z-10">packet</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 z-0 h-3 origin-left bg-lime-400 md:h-4"
              />
            </span>{" "}
            at a time.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-stone-600 dark:text-stone-400">
            From the first packet crossing a cable to BGP routing traffic across continents. Every
            layer demystified with interactive animations, quick checks, and a quiz at the end of
            each module.
          </p>

          <Link
            to="/learn/computer-networks/module-1"
            className="group mt-8 flex items-center justify-between gap-6 rounded-md border border-stone-900 bg-stone-900 px-6 py-6 no-underline transition-colors hover:border-lime-400 hover:bg-lime-400 dark:border-stone-50 dark:bg-stone-50 dark:hover:border-lime-400 dark:hover:bg-lime-400 sm:px-8 sm:py-7"
          >
            <div className="flex min-w-0 items-center gap-4">
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/10 transition-colors group-hover:bg-stone-900/10 dark:bg-stone-900/10 sm:flex">
                <BookOpen className="h-6 w-6 text-stone-50 transition-colors group-hover:text-stone-900 dark:text-stone-900" />
              </span>
              <div className="min-w-0">
                <div className="text-lg font-bold tracking-tight text-stone-50 transition-colors group-hover:text-stone-900 dark:text-stone-900 sm:text-2xl">
                  Begin Module 1
                </div>
                <p className="mt-1 text-xs text-stone-400 transition-colors group-hover:text-stone-800 dark:text-stone-600 sm:text-sm">
                  Introduction to Networks · no account needed
                </p>
              </div>
            </div>
            <ArrowRight className="h-6 w-6 shrink-0 text-stone-50 transition-all group-hover:translate-x-1 group-hover:text-stone-900 dark:text-stone-900" />
          </Link>
        </motion.div>

        {/* Highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-10 grid grid-cols-1 gap-0 border-l border-t border-stone-200 dark:border-white/10 sm:grid-cols-3"
        >
          {HIGHLIGHTS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-start gap-3 border-b border-r border-stone-200 bg-white p-3 dark:border-white/10 dark:bg-stone-900 sm:p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-stone-100 dark:bg-white/5">
                <stat.icon className="h-4 w-4 text-lime-600 dark:text-lime-400" />
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="text-xl font-bold tracking-tight tabular-nums text-stone-900 dark:text-stone-50">
                  {stat.value}
                </span>
                <span className="truncate text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  / {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Section header */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            modules / {CN_MODULES.length}
          </span>
        </div>

        {/* Module list */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {CN_MODULES.map((m, i) => {
            const Inner = (
              <>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-stone-200 bg-stone-100 dark:border-white/10 dark:bg-white/5">
                      <span className="font-mono text-xs font-bold tabular-nums text-lime-700 dark:text-lime-400">
                        M{String(m.num).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3
                        className={`truncate text-base font-bold leading-tight tracking-tight ${
                          m.available
                            ? "text-stone-900 transition-colors group-hover:text-lime-700 dark:text-stone-50 dark:group-hover:text-lime-400"
                            : "text-stone-400 dark:text-stone-600"
                        }`}
                      >
                        {m.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                        <Clock className="h-3 w-3" aria-hidden /> {m.dur}
                      </span>
                    </div>
                  </div>
                  {!m.available && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-md border border-stone-200 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:border-white/10 dark:text-stone-600">
                      <Lock className="h-3 w-3" aria-hidden /> soon
                    </span>
                  )}
                </div>

                <p
                  className={`mb-4 line-clamp-2 text-sm leading-relaxed ${
                    m.available ? "text-stone-600 dark:text-stone-400" : "text-stone-400 dark:text-stone-600"
                  }`}
                >
                  {m.desc}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {m.topics.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-stone-200 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:border-white/10 dark:text-stone-400"
                    >
                      / {t}
                    </span>
                  ))}
                </div>

                {m.available && (
                  <div className="mt-auto flex items-center justify-between border-t border-stone-100 pt-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:border-white/5">
                    <span>free</span>
                    <span className="inline-flex items-center gap-1 transition-colors group-hover:text-lime-700 dark:group-hover:text-lime-400">
                      open module
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                )}
              </>
            )

            return (
              <motion.div
                key={m.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + Math.min(i, 6) * 0.04 }}
              >
                {m.available ? (
                  <Link
                    to={`/learn/computer-networks/${m.slug}`}
                    className="group flex h-full flex-col rounded-md border border-stone-200 bg-white p-5 no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:bg-stone-900 dark:hover:border-white/30"
                  >
                    {Inner}
                  </Link>
                ) : (
                  <div className="flex h-full flex-col rounded-md border border-dashed border-stone-200 bg-white/60 p-5 dark:border-white/10 dark:bg-stone-900/40">
                    {Inner}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 rounded-md border border-dashed border-stone-300 p-5 text-center dark:border-white/10">
          <p className="text-xs font-mono uppercase tracking-widest text-stone-500">
            6 modules live · modules 7-8 coming soon
          </p>
        </div>
      </div>
    </div>
  )
}
