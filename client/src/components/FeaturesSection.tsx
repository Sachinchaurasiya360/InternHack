import { motion } from "framer-motion";
import { Briefcase, Map, FileCheck, Building2, GitBranch, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";

const features: { title: string; desc: string; icon: LucideIcon; href: string }[] = [
  {
    title: "Smart Job Board",
    desc: "Curated roles from verified recruiters with real-time tracking and one-click apply.",
    icon: Briefcase,
    href: "/jobs",
  },
  {
    title: "AI Resume Scorer",
    desc: "Instant ATS scores with actionable tips to beat automated filters.",
    icon: FileCheck,
    href: "/ats-score",
  },
  {
    title: "Career Roadmaps",
    desc: "Guided learning paths across 8+ tracks with skill checkpoints.",
    icon: Map,
    href: "/learn",
  },
  {
    title: "Company Explorer",
    desc: "Research tech stacks, culture, and open roles at 4,000+ companies.",
    icon: Building2,
    href: "/companies",
  },
  {
    title: "Open Source & GSoC",
    desc: "Discover beginner-friendly repos and 520+ GSoC organizations.",
    icon: GitBranch,
    href: "/opensource",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function FeaturesSection() {
  const [hero, ...rest] = features;

  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-rose-500/5 blur-3xl dark:block hidden" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-gray-900 to-gray-900/80 dark:from-white dark:to-white/80">
              Your career toolkit,
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 via-gray-900 to-rose-600 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300">
              all in one place
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-white/40 max-w-xl mx-auto">
            Every tool you need to go from resume to offer letter.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Hero card - full width */}
          <motion.div variants={cardVariants} className="md:col-span-2">
            <Link to={hero.href} className="no-underline block group">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/3 p-6 md:p-8 transition-all duration-300 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-white/5 overflow-hidden"
              >
                {/* Subtle dot texture */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="relative flex flex-col md:flex-row md:items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0">
                    <hero.icon className="w-6 h-6 text-white dark:text-gray-950" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {hero.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed max-w-lg">
                      {hero.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-400 dark:text-white/40 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors shrink-0">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Feature cards - 2×2 */}
          {rest.map((f) => (
            <motion.div key={f.title} variants={cardVariants}>
              <Link to={f.href} className="no-underline block group h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="relative h-full rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/3 p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-white/5"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-white dark:text-gray-950" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed mb-4">
                    {f.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-400 dark:text-white/40 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
