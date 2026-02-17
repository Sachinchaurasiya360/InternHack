import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa]">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-slate-100 to-blue-100 opacity-60 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-black/[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-black/[0.02]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/10 shadow-sm text-sm text-gray-600 mb-8"
        >
          <Sparkles className="w-4 h-4 text-indigo-500" />
          <span>AI-Powered Career Platform</span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="font-display text-5xl sm:text-7xl md:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-gray-950 mb-6"
        >
          Your career starts
          <br />
          <span className="text-gradient-accent">with the right tools</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Browse curated jobs, follow guided career roadmaps, score your resume
          with AI, and connect directly with recruiters — all in one platform.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/register" className="no-underline">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gray-950 text-white text-base font-semibold rounded-2xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10 flex items-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link to="/jobs" className="no-underline">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-gray-950 text-base font-semibold rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
            >
              Browse Jobs
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating cards preview */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: "Jobs", value: "Browse & Apply", color: "from-indigo-500 to-indigo-600" },
            { label: "Careers", value: "8+ Roadmaps", color: "from-violet-500 to-violet-600" },
            { label: "ATS Score", value: "AI Powered", color: "from-slate-700 to-slate-800" },
            { label: "Companies", value: "Explore All", color: "from-gray-700 to-gray-800" },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.04 }}
              className="relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3`}
              >
                <span className="text-white text-sm font-bold">{card.label[0]}</span>
              </div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
                {card.label}
              </div>
              <div className="text-sm font-semibold text-gray-900">{card.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-gray-300 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-1.5 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
