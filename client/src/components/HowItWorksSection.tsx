import { motion } from "framer-motion";
import { Upload, Scan, Dumbbell, Send } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: Upload,
    title: "Upload your resume",
    desc: "Drop a PDF or paste LaTeX. We extract roles, stack, and dates in under 3 seconds.",
    time: "~3 sec",
  },
  {
    num: "02",
    icon: Scan,
    title: "Score against the JD",
    desc: "Line-by-line ATS match, missing keywords, and rewrite suggestions tuned to the role.",
    time: "~8 sec",
  },
  {
    num: "03",
    icon: Dumbbell,
    title: "Drill the gaps",
    desc: "DSA, SQL, aptitude and mock interviews queued around what that JD actually needs.",
    time: "daily",
  },
  {
    num: "04",
    icon: Send,
    title: "Apply and track",
    desc: "One-click apply to verified roles. Every application, follow-up and round in one view.",
    time: "ongoing",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-white/10">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            how it works
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Four steps.{" "}
            <span className="text-stone-400 dark:text-stone-600">
              No fluff.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
            From a blank resume to a tracked application in a single sitting,
            without switching tabs ten times.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-2xl overflow-hidden">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative flex flex-col p-8 bg-white dark:bg-stone-950"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                  step / {s.num}
                </span>
                <span className="text-xs font-mono text-lime-600 dark:text-lime-400">
                  {s.time}
                </span>
              </div>

              <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-stone-900 dark:bg-white text-white dark:text-stone-900 mb-6">
                <s.icon className="w-5 h-5" strokeWidth={2} />
              </div>

              <h3 className="text-lg md:text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
