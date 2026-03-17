import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  BarChart3,
  Users,
  UserPlus,
  Building2,
  CalendarCheck,
  CalendarDays,
  UserCog,
  Wallet,
  TrendingUp,
  ShieldCheck,
  Network,
  UserCheck,
  CheckCircle,
  ClipboardCheck,
  Target,
} from "lucide-react";
import { Link } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import { canonicalUrl } from "../../lib/seo.utils";

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
  { icon: Users, value: "14", label: "HR Modules" },
  { icon: Building2, value: "End-to-End", label: "Employee Lifecycle" },
  { icon: BarChart3, value: "Real-Time", label: "HR Analytics" },
];

/* ───────────── Features ───────────── */
const features = [
  {
    title: "Hiring & Pipelines",
    description:
      "Post jobs, design multi-round hiring stages, review applications, and move candidates from screening to offer, all in one flow.",
    icon: Briefcase,
    iconColor: "text-indigo-500",
  },
  {
    title: "Interview Scheduling",
    description:
      "Schedule interviews with calendar views, collect structured feedback from panelists, and track every conversation per candidate.",
    icon: CalendarCheck,
    iconColor: "text-violet-500",
  },
  {
    title: "Employee Management",
    description:
      "Manage the full employee lifecycle: onboarding checklists, department assignments, role changes, and offboarding with a complete timeline view.",
    icon: UserCog,
    iconColor: "text-emerald-500",
  },
  {
    title: "Leave & Attendance",
    description:
      "Configure leave policies, track balances, manage holiday calendars, and monitor check-in/check-out with overtime and regularization support.",
    icon: CalendarDays,
    iconColor: "text-sky-500",
  },
  {
    title: "Payroll & Reimbursements",
    description:
      "Run payroll calculations, process contractor payments, handle reimbursement workflows with submit-approve-pay tracking, and generate payslips.",
    icon: Wallet,
    iconColor: "text-amber-500",
  },
  {
    title: "Performance Reviews",
    description:
      "Create review cycles that move from draft to completion, set measurable goals, collect self and manager assessments, and track team progress.",
    icon: TrendingUp,
    iconColor: "text-rose-500",
  },
  {
    title: "Compliance & Workflows",
    description:
      "Manage compliance documents with acknowledgement tracking and expiry alerts. Build configurable approval workflows for any HR process.",
    icon: ShieldCheck,
    iconColor: "text-teal-500",
  },
  {
    title: "HR Analytics",
    description:
      "Real-time dashboards covering headcount by department, attrition rates, leave patterns, attendance trends, and payroll summaries.",
    icon: BarChart3,
    iconColor: "text-purple-500",
  },
];

/* ───────────── HR Spotlights ───────────── */
const hrSpotlights = [
  {
    title: "Organizational Structure",
    description: "Build and visualize your company hierarchy.",
    icon: Network,
    iconColor: "text-indigo-500",
    items: [
      "Department management",
      "Org chart visualization",
      "Role-based access (RBAC)",
      "Custom permissions",
    ],
  },
  {
    title: "Employee Lifecycle",
    description: "From day one to their last day, and everything between.",
    icon: UserCheck,
    iconColor: "text-emerald-500",
    items: [
      "Onboarding checklists",
      "Status & timeline tracking",
      "Leave and attendance policies",
      "Performance review cycles",
    ],
  },
  {
    title: "Finance & Compliance",
    description: "Stay on top of compensation and regulatory requirements.",
    icon: ShieldCheck,
    iconColor: "text-amber-500",
    items: [
      "Automated payroll runs",
      "Contractor payments",
      "Reimbursement workflows",
      "Compliance document tracking",
    ],
  },
];

/* ───────────── How It Works ───────────── */
const steps = [
  {
    icon: UserPlus,
    title: "Set Up Your Org",
    description: "Create your company profile, define departments, and configure roles and permissions.",
  },
  {
    icon: Briefcase,
    title: "Hire Talent",
    description: "Post jobs, design multi-round pipelines, schedule interviews, and extend offers.",
  },
  {
    icon: ClipboardCheck,
    title: "Onboard Employees",
    description: "Assign onboarding checklists, set up attendance policies, and allocate leave balances.",
  },
  {
    icon: Target,
    title: "Manage & Grow",
    description: "Track attendance, run performance reviews, process payroll, and handle reimbursements.",
  },
  {
    icon: BarChart3,
    title: "Analyze & Optimize",
    description: "Monitor headcount, attrition, payroll costs, and team performance from one dashboard.",
  },
];

export default function RecruiterLandingPage() {
  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <SEO
        title="For Recruiters & HR Teams"
        description="Post jobs, manage employees, run payroll, track performance, and automate HR workflows. A complete HR platform built into InternHack."
        keywords="HR platform, recruiter dashboard, post jobs, hire students, employee management, payroll, attendance, performance reviews, HR analytics, hiring pipeline"
        canonicalUrl={canonicalUrl("/for-recruiters")}
      />
      <Navbar />

      {/* ════════ Hero ════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-gray-950">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/30 dark:to-blue-900/30 opacity-60 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full border border-black/3 dark:border-white/3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-250 rounded-full border border-black/2 dark:border-white/2" />
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
            Your complete
            <br />
            <span className="text-gradient-accent">HR platform</span>
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Hire top talent, manage your workforce, run payroll, and track
            performance. One platform for every stage of the employee lifecycle.
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
                Start Free
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
              HR Platform
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-950 dark:text-white tracking-tight mb-4">
              Everything you need
              <br />
              <span className="text-gradient-accent">to run your workforce</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
              From hiring to payroll to performance reviews. One unified platform.
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

      {/* ════════ HR Platform Spotlight ════════ */}
      <section className="relative py-24 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-6 block">
              Beyond Hiring
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 dark:text-white tracking-tight mb-4">
              A complete HR operating system
              <br />
              <span className="text-gradient-accent">built in</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
              Manage your entire workforce from one dashboard.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {hrSpotlights.map((spot, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative bg-gray-50/50 dark:bg-gray-800/30 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all h-full"
                >
                  <div className="mb-4">
                    <spot.icon className={`w-6 h-6 ${spot.iconColor}`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {spot.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed mb-5">
                    {spot.description}
                  </p>
                  <ul className="space-y-2.5">
                    {spot.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ How It Works ════════ */}
      <section
        id="how-it-works"
        className="relative py-24 md:py-32 bg-[#fafafa] dark:bg-gray-950 overflow-hidden scroll-mt-20"
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
              Five steps to a
              <br />
              <span className="text-gradient-accent">smarter HR workflow</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-px bg-linear-to-r from-gray-200 dark:from-gray-700 via-gray-300 dark:via-gray-600 to-gray-200 dark:to-gray-700" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
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
      <section className="relative py-24 md:py-32 bg-white dark:bg-gray-900 overflow-hidden">
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
                Ready to streamline
                <br />
                your entire HR?
              </h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">
                Join recruiters and HR teams already using InternHack to hire,
                onboard, manage, and grow their workforce.
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
