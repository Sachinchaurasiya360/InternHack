import { motion } from "framer-motion";
import {
  Briefcase,
  Map,
  FileCheck,
  Building2,
  GitBranch,
  Code2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  icon: LucideIcon;
  href: string;
  stat: string;
  span?: "single" | "double";
};

const FEATURES: Feature[] = [
  {
    title: "ATS Resume Scorer",
    desc: "Instant scores and line-by-line fixes tuned to recruiter ATS filters. LaTeX editor built in.",
    icon: FileCheck,
    href: "/ats-score",
    stat: "54k resumes scored",
    span: "double",
  },
  {
    title: "Smart Job Board",
    desc: "Curated roles from verified recruiters, one-click apply, saved filters.",
    icon: Briefcase,
    href: "/jobs",
    stat: "1.2k+ roles",
  },
  {
    title: "Career Roadmaps",
    desc: "Eight tracks from frontend to ML, checkpoints the recruiter will actually ask about.",
    icon: Map,
    href: "/learn",
    stat: "8 tracks",
  },
  {
    title: "DSA, SQL, Aptitude",
    desc: "Daily drills, curated sheets, timed mock rounds. No endless LeetCode scroll.",
    icon: Code2,
    href: "/student/dsa",
    stat: "2k+ problems",
  },
  {
    title: "Company Explorer",
    desc: "Real stacks, real salaries, real interview loops from 4k+ companies.",
    icon: Building2,
    href: "/companies",
    stat: "4k+ companies",
  },
  {
    title: "Open Source & GSoC",
    desc: "Beginner repos, mentor-approved issues, 520+ GSoC orgs indexed.",
    icon: GitBranch,
    href: "/opensource",
    stat: "520+ orgs",
    span: "full",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function FeaturesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-white/10">
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
            the stack
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Six tools.{" "}
            <span className="text-stone-400 dark:text-stone-600">
              One workspace.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
            Everything you need between uploading a resume and signing an
            offer. Nothing you do not.
          </p>
        </motion.div>

         <div
         className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-2xl overflow-hidden"
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-60px" }}
         >
          {FEATURES.map((f) => (
          <motion.div
           key={f.title}
           variants={cardVariants}
           className={
             f.span === "double"
              ? "md:col-span-2"
              : f.span === "full"
              ? "md:col-span-3"
              : ""
           }
          >
        <Link to={f.href} className="no-underline block group h-full">
            <div className="relative h-full flex flex-col p-8 bg-white dark:bg-stone-950 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors">
          
             {/* Top Row */}
             <div className="flex items-center justify-between mb-8">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400">
                <f.icon className="w-4.5 h-4.5" strokeWidth={2} />
              </div>

               <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                {f.stat}
               </span>
              </div>

             {/* Title */}
             <h3 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
              {f.title}
             </h3>

             {/* Description */}
             <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex-1">
              {f.desc}
             </p>

             {/* CTA */}
             <span className="mt-8 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 group-hover:gap-2.5 transition-all">
               open
               <ArrowRight className="w-3.5 h-3.5" />
             </span>
           </div>
         </Link>
       </motion.div>
       ))}
        </motion.div>
      </div>
    </section>
  );
}
