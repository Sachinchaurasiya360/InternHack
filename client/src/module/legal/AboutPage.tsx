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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mt-6 mb-14"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-5">
              <Globe size={30} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 dark:text-white mb-4 tracking-tight">
              About InternHack
            </h1>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              InternHack is an AI-powered career and hiring platform that helps students
              prepare for placements, practice interviews, and get placed — while giving
              recruiters the tools to hire smarter.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14"
          >
            <motion.div variants={itemVariants} className="rounded-2xl border border-gray-200/70 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400">
                  <Target size={22} />
                </div>
                <h2 className="text-xl font-semibold text-stone-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm md:text-base">
                To democratize access to career opportunities for students globally —
                regardless of their background, college, or location — by giving them
                world-class tools to compete and succeed.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-2xl border border-gray-200/70 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400">
                  <Globe size={22} />
                </div>
                <h2 className="text-xl font-semibold text-stone-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm md:text-base">
                To become the most trusted early-career ecosystem on the planet —
                connecting millions of students with companies that value their
                potential, not just their pedigree.
              </p>
            </motion.div>
          </motion.div>

          {/* What We Offer */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center md:text-left"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">What We Offer</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                Everything you need to prepare, practice, and get placed — in one platform.
              </p>
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="rounded-2xl border border-gray-200/70 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 p-6"
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
