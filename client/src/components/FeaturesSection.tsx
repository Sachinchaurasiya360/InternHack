import { motion } from "framer-motion";
import {
  Briefcase,
  Map,
  FileCheck,
  Building2,
  Globe,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router";

const features = [
  {
    title: "Job Board",
    description:
      "Browse curated listings posted directly by recruiters. Apply in one click and track every application in real time.",
    icon: Briefcase,
    href: "/jobs",
    span: "md:col-span-2",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Career Roadmaps",
    description:
      "Follow step-by-step paths from beginner to expert. Track progress with skill checklists across 8+ career tracks.",
    icon: Map,
    href: "/careers",
    span: "",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    title: "ATS Resume Scoring",
    description:
      "Upload your resume and a job description — AI scores it, highlights gaps, and suggests improvements.",
    icon: FileCheck,
    href: "/register",
    span: "",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    title: "External Jobs",
    description:
      "Aggregated listings from top platforms, automatically refreshed every 6 hours so you never miss an opportunity.",
    icon: Globe,
    href: "/external-jobs",
    span: "md:col-span-2",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Company Explorer",
    description:
      "Discover companies hiring on InternHack. See open positions, details, and find your ideal workplace.",
    icon: Building2,
    href: "/companies",
    span: "",
    gradient: "from-sky-500 to-sky-600",
  },
  {
    title: "Recruiter Dashboard",
    description:
      "Post jobs, manage multi-round hiring, review applications, and screen resumes from one powerful dashboard.",
    icon: Users,
    href: "/register",
    span: "md:col-span-2",
    gradient: "from-rose-500 to-rose-600",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#fafafa]">
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider mb-6">
            Platform Features
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-950 tracking-tight mb-4">
            Everything you need,
            <br />
            <span className="text-gradient-accent">nothing you don't</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Tools built for students and recruiters to simplify every step of
            the career journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
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
                  className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all h-full group overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-sm`}
                    >
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
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
