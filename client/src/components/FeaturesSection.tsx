import { motion } from "framer-motion";
import {
  Briefcase,
  Map,
  FileCheck,
  Building2,
  Globe,
  Users,
  ArrowUpRight,
  GitBranch,
} from "lucide-react";
import { Link } from "react-router";

const features = [
  {
    title: "Smart Job Board",
    description:
      "Curated internships and full-time roles posted by verified recruiters. One-click apply, real-time tracking, and personalized recommendations.",
    icon: Briefcase,
    href: "/jobs",
    span: "md:col-span-2",
    iconColor: "text-indigo-500",
  },
  {
    title: "Career Roadmaps",
    description:
      "Step-by-step learning paths across 8+ career tracks — from frontend to data science. Track your progress and never feel lost.",
    icon: Map,
    href: "/careers",
    span: "",
    iconColor: "text-violet-500",
  },
  {
    title: "AI Resume Scorer",
    description:
      "Paste any job description, upload your resume, and get an instant ATS compatibility score with actionable improvement tips.",
    icon: FileCheck,
    href: "/ats-score",
    span: "",
    iconColor: "text-emerald-500",
  },
  {
    title: "Open Source & GSoC",
    description:
      "Find beginner-friendly repos, explore GSoC organizations, and get guidance to land your first meaningful open-source contribution.",
    icon: GitBranch,
    href: "/opensource",
    span: "lg:col-span-2",
    iconColor: "text-teal-500",
  },
  {
    title: "Company Explorer",
    description:
      "Research companies before you apply. Browse tech stacks, funding stages, team sizes, and open roles — including 4,000+ Y Combinator startups.",
    icon: Building2,
    href: "/companies",
    span: "lg:col-span-2",
    iconColor: "text-sky-500",
  },
  {
    title: "Recruiter Dashboard",
    description:
      "Post jobs, design multi-round hiring pipelines, review applications, and shortlist candidates — all from one clean dashboard.",
    icon: Users,
    href: "/register?role=RECRUITER",
    span: "lg:col-span-2",
    iconColor: "text-rose-500",
  },
  {
    title: "Web3 Grants & Funding",
    description:
      "Browse 50+ blockchain grants, hackathon prizes, and fellowship programs. Filter by ecosystem, category, and funding amount.",
    icon: Globe,
    href: "/grants",
    span: "lg:col-span-2",
    iconColor: "text-purple-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#fafafa] dark:bg-gray-950">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-6 block">
            Platform Features
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-950 dark:text-white tracking-tight mb-4">
            One platform,
            <br />
            <span className="text-gradient-accent">zero guesswork</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
            Every tool a student or recruiter needs to go from searching to
            hired — built into a single, fast platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`${feature.span}`}
            >
              <Link to={feature.href} className="no-underline block h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all h-full group overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-4">
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                    <ArrowUpRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
