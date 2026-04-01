import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-rose-500/5 blur-3xl dark:block hidden" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-950 dark:bg-white/3 p-6 sm:p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-violet-500/20 blur-3xl" />
            <div
              className="absolute inset-0 opacity-10 dark:opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-white">
                Ready to accelerate
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
                your career?
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">
              Join students and recruiters already using InternHack to find
              opportunities, build skills, and hire talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register" className="no-underline">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-indigo-500 text-white text-base font-semibold rounded-2xl hover:bg-indigo-400 transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2"
                >
                  Create Free Account
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/learn" className="no-underline">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 text-white text-base font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  Explore Roadmaps
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
