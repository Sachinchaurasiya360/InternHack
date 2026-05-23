import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function DemoVideoSection() {
  return (
    <section
      id="demo"
      className="relative py-24 md:py-32 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-white/10 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            see it in action
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            90 seconds.{" "}
            <span className="text-stone-400 dark:text-stone-600">
              No signup.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto leading-relaxed">
            Watch a full resume go from upload to ATS score to applied — start
            to finish, in a single uninterrupted take.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 overflow-hidden shadow-2xl shadow-stone-900/10 dark:shadow-black/60">
            {/* Mock browser chrome bar */}
            <div className="flex items-center gap-2.5 px-5 py-3 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm bg-stone-300 dark:bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-sm bg-stone-300 dark:bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-sm bg-stone-300 dark:bg-white/20" />
              </div>
              <span className="ml-2 text-xs font-mono text-stone-500">
                internhack.xyz / demo
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-xs font-mono text-stone-500">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
                coming soon
              </span>
            </div>

            {/* Demo placeholder — video not yet available */}
            <div className="relative aspect-video bg-stone-950 flex flex-col items-center justify-center gap-6 px-6 text-center">
              {/* Subtle grid background */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Play button icon */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-lime-400/10 border border-lime-400/30 cursor-default"
              >
                <Play className="w-8 h-8 text-lime-400 fill-lime-400 ml-1" />
              </motion.div>

              {/* Message */}
              <div className="relative z-10 space-y-2">
                <p className="text-lg font-semibold text-stone-200">
                  Demo video coming soon
                </p>
                <p className="text-sm text-stone-500 max-w-sm mx-auto">
                  Our 90-second product walkthrough is being recorded.
                  In the meantime, try the live platform — no signup needed for the ATS scorer.
                </p>
              </div>

              {/* CTA to live feature */}
              <Link to="/ats-score" className="relative z-10 no-underline">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime-400 text-stone-950 rounded-lg text-sm font-bold hover:bg-lime-300 transition-colors"
                >
                  Try ATS scorer live
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Caption below player */}
          <p className="mt-4 text-center text-xs font-mono text-stone-500">
            Full demo video drops soon · live product available at{" "}
            <a
              href="https://www.internhack.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-600 dark:text-lime-400 hover:underline"
            >
              internhack.xyz
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
