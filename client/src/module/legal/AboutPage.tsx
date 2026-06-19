import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import { Link } from "react-router";
import { motion, type Variants } from "framer-motion";
import {
  Cpu,
  FileText,
  Mic,
  Search,
  Briefcase,
  LayoutDashboard,
  GitMerge,
  BarChart2,
  Users,
  Mail,
  Target,
  Globe,
} from "lucide-react";

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  { icon: Cpu, title: "AI-Powered Platform", description: "Career and hiring decisions backed by smart AI, not guesswork." },
  { icon: FileText, title: "Resume Scoring", description: "ATS-friendly resume scoring and job matching so your profile actually gets seen." },
  { icon: Mic, title: "Mock Interviews", description: "Practice with AI-driven interview simulations and get real feedback before the real thing." },
  { icon: Search, title: "Job Discovery", description: "Find opportunities and track every application in one place — no more lost tabs." },
  { icon: Briefcase, title: "Recruiter Tools", description: "Post jobs, manage candidates, and streamline entire hiring workflows with ease." },
  { icon: LayoutDashboard, title: "Smart Dashboards", description: "Dedicated dashboards for students, recruiters, and admins — each built for their needs." },
  { icon: GitMerge, title: "Hiring Workflows", description: "Streamlined multi-round interview processes that save time for both sides of the table." },
  { icon: BarChart2, title: "Data-Driven Hiring", description: "Built to make hiring more accessible, efficient, and informed by real data." },
  { icon: Users, title: "For Everyone", description: "Whether you are a student, recruiter, or admin — InternHack has a space built just for you." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const MISSIONS = [
  {
    id: "mission",
    kicker: "01 / Mission",
    icon: Target,
    title: "Our Mission",
    desc: "To democratize access to career opportunities for students globally — regardless of their background, college, or location — by giving them world-class tools to compete and succeed.",
  },
  {
    id: "vision",
    kicker: "02 / vision",
    icon: Briefcase,
    title: "Our Vision.",
    desc: "To become the most trusted early-career ecosystem on the planet — connecting millions of students with companies that value their potential, not just their pedigree.",
  },
];


export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50">
      <SEO
        title="About Us"
        description="Learn more about InternHack — the AI-powered career and hiring platform built for students and recruiters."
      />
      <Navbar />

      <main className="flex-1 px-4 pt-28 pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
          >
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
                <span className="h-1.5 w-1.5 bg-lime-400" />
                About InterHack
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
                People behind the {" "}
                <span className="relative inline-block">
                  <span className="relative z-10">mission.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    aria-hidden
                    className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
                  />
                </span>
              </h1>
              <p className="mt-3 text-sm text-stone-500 max-w-xl">
                InternHack is an AI-powered career and hiring platform that helps students
                prepare for placements, practice interviews, and get placed — while giving
                recruiters the tools to hire smarter.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-2xl overflow-hidden mb-14"
          >
            {MISSIONS.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25, delay: i * 0.08 }}
                className="group relative flex flex-col p-8 md:p-10 bg-white dark:bg-stone-950 hover:bg-stone-50 dark:hover:bg-stone-900 transition-all duration-300 hover:shadow-2xl border border-transparent hover:border-lime-400/30"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-8">
                  <span className="h-1.5 w-1.5 bg-lime-400" />
                  {a.kicker}
                </div>

                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400 mb-6 transition-transform duration-300 group-hover:scale-110">
                  <a.icon className="w-5 h-5" strokeWidth={2} />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                  {a.title}
                </h3>

                <p className="mt-4 text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* What We Offer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center md:text-left"
          >
            <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              what we offer
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Everything you need,{" "}
              <span className="text-stone-400 dark:text-stone-600">
                 one platform.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
              Everything you need to build skills, practice interviews, optimize resumes, discover opportunities, and confidently take the next step in your career journey.
            </p>
          </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-left gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-2xl overflow-hidden"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-stone-950 hover:bg-stone-50 dark:hover:bg-stone-900 backdrop-blur-lg shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 p-6"
                  >
                    <div className="p-3 rounded-xl bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400 w-fit mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden border border-stone-200 dark:border-white/10 bg-stone-100 dark:bg-stone-900 shadow-sm"
          >
            <div className="p-8 md:p-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400 mb-5">
                <Mail size={26} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-white mb-3">Want to get in touch?</h2>
              <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                Have questions, feedback, or partnership ideas? We would love to hear from you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-lime-400 text-stone-950 hover:bg-lime-300 transition px-6 py-3 rounded-xl font-semibold shadow-lg no-underline"
              >
                <Mail size={18} />
                Contact Us
              </Link>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
