import { motion } from "framer-motion";
import { UserPlus, Search, FileCheck, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create your account",
    description: "Sign up with email or Google in seconds. Choose your role - student or recruiter.",
  },
  {
    icon: Search,
    title: "Explore opportunities",
    description: "Browse recruiter-posted jobs, external listings, career roadmaps, and companies.",
  },
  {
    icon: FileCheck,
    title: "Score your resume",
    description: "Upload your resume against any job description. AI identifies gaps and suggests fixes.",
  },
  {
    icon: Trophy,
    title: "Land your dream role",
    description: "Apply directly, track applications, and follow guided career paths to level up.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-rose-500/5 blur-3xl dark:block hidden" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-xs font-medium text-gray-500 dark:text-white/50 uppercase tracking-wider mb-6">
            How it works
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-gray-900 to-gray-900/80 dark:from-white dark:to-white/80">
              Four steps to your
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 via-gray-900 to-rose-600 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300">
              next opportunity
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-gray-200 dark:from-white/10 via-gray-300 dark:via-white/20 to-gray-200 dark:to-white/10" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-gray-950 dark:bg-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gray-950/10 dark:shadow-white/10">
                <step.icon className="w-6 h-6 text-white dark:text-gray-950" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-display text-base font-bold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-white/40 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
