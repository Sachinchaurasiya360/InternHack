import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  BarChart3,
  Users,
  ClipboardList,
  UserPlus,
  FileText,
  Eye,
  Trophy,
} from "lucide-react";
import { Link } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ───────────── Stats ───────────── */
const stats = [
  { icon: Briefcase, value: "500+", label: "Jobs Posted" },
  { icon: FileText, value: "10,000+", label: "Applications" },
  { icon: ClipboardList, value: "Multi-Round", label: "Pipelines" },
  { icon: BarChart3, value: "Real-Time", label: "Analytics" },
];

/* ───────────── Features ───────────── */
const features = [
  {
    title: "Post & Manage Jobs",
    description:
      "Create detailed job listings with tags, salary ranges, and deadlines. Edit or close positions anytime from your dashboard.",
    icon: Briefcase,
    iconColor: "text-indigo-500",
  },
  {
    title: "Multi-Round Hiring Pipeline",
    description:
      "Design custom hiring stages - screening, coding tests, interviews, offers. Each round supports custom fields and instructions.",
    icon: ClipboardList,
    iconColor: "text-violet-500",
  },
  {
    title: "Application Management",
    description:
      "Review resumes, score candidates, shortlist or reject in bulk. Track every applicant through your pipeline with status updates.",
    icon: Users,
    iconColor: "text-emerald-500",
  },
  {
    title: "Analytics Dashboard",
    description:
      "See views, application rates, and pipeline conversion at a glance. Identify bottlenecks and optimize your hiring funnel.",
    icon: BarChart3,
    iconColor: "text-sky-500",
  },
];

/* ───────────── How It Works ───────────── */
const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up as a recruiter in seconds. Add your company details and logo.",
  },
  {
    icon: FileText,
    title: "Post a Job",
    description: "Fill in title, description, salary, tags, and deadline. Design your hiring rounds.",
  },
  {
    icon: Eye,
    title: "Review Applications",
    description: "Candidates apply directly. Review resumes, advance through rounds, or shortlist.",
  },
  {
    icon: Trophy,
    title: "Hire the Best",
    description: "Make offers to top candidates. Track acceptances and close positions when filled.",
  },
];

export default function RecruiterLandingPage() {
  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <SEO
        title="For Recruiters"
        description="Post jobs, design multi-round hiring pipelines, review applications, and hire top student talent - all from one recruiter dashboard on InternHack."
        keywords="recruiter dashboard, post jobs, hire students, hiring pipeline, application management, campus recruitment, talent search"
      />
      <Navbar />

      {/* ════════ Hero ════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-gray-950">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/30 dark:to-blue-900/30 opacity-60 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full border border-black/[0.03] dark:border-white/[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-250 rounded-full border border-black/[0.02] dark:border-white/[0.02]" />
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
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-display text-3xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-gray-950 dark:text-white mb-6"
          >
            Hire smarter,
            <br />
            <span className="text-gradient-accent">faster</span>
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Post jobs, design multi-round hiring pipelines, review applications,
            and connect with top student talent - all from one dashboard.
          </motion.p>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/recruiter/register" className="no-underline">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-base font-semibold rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg shadow-black/10 flex items-center gap-2"
              >
                Start Hiring Free
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <a href="#how-it-works" className="no-underline">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-base font-semibold rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all"
              >
                See How It Works
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════════ Stats ════════ */}
      <section className="relative py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-950 dark:bg-white flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-white dark:text-gray-950" />
                </div>
                <div className="font-display text-3xl font-bold text-gray-950 dark:text-white mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Features ════════ */}
      <section className="relative py-24 md:py-32 bg-[#fafafa] dark:bg-gray-950">
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
              Recruiter Tools
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-950 dark:text-white tracking-tight mb-4">
              Everything you need
              <br />
              <span className="text-gradient-accent">to hire great talent</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
              From job posting to offer letter - one platform, zero friction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all h-full group overflow-hidden"
                >
                  <div className="mb-4">
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ How It Works ════════ */}
      <section
        id="how-it-works"
        className="relative py-24 md:py-32 bg-white dark:bg-gray-900 overflow-hidden scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-6 block">
              How it works
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 dark:text-white tracking-tight mb-4">
              Four steps to your
              <br />
              <span className="text-gradient-accent">next great hire</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-gray-200 dark:from-gray-700 via-gray-300 dark:via-gray-600 to-gray-200 dark:to-gray-700" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative text-center"
              >
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-gray-950 dark:bg-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gray-950/20">
                  <step.icon className="w-6 h-6 text-white dark:text-gray-950" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display text-base font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="relative py-24 md:py-32 bg-[#fafafa] dark:bg-gray-950 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-gray-950 p-10 md:p-16 text-center overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-violet-500/20 blur-3xl" />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Ready to find your
                <br />
                next great hire?
              </h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">
                Join recruiters already using InternHack to post jobs, manage
                pipelines, and hire top student talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/recruiter/register" className="no-underline">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white text-gray-950 text-base font-semibold rounded-2xl hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link to="/jobs" className="no-underline">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white/10 text-white text-base font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                  >
                    Browse as Student
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
