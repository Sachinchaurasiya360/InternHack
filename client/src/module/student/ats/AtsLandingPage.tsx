import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useAuthStore } from "../../../lib/auth.store";
import {
  Sparkles,
  Target,
  Search,
  BarChart2,
  Lightbulb,
  History,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Upload,
  Brain,
  TrendingUp,
  Zap,
  Layout,
  PenLine,
  AlignLeft,
  Award,
  Code2,
} from "lucide-react";

const features = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "ATS Compatibility Score",
    description: "Get a comprehensive 0-100 score reflecting how well your resume performs with Applicant Tracking Systems.",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Smart Keyword Analysis",
    description: "Discover which industry keywords your resume contains and the missing ones costing you interviews.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "6-Category Breakdown",
    description: "Detailed scoring across Formatting, Keywords, Experience, Skills, Education, and Impact.",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "AI Improvement Tips",
    description: "Receive personalized, actionable suggestions to craft a resume that stands out and gets past filters.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Job-Specific Scoring",
    description: "Paste a job description to get tailored analysis - see exactly how your resume aligns with the role.",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    icon: <History className="w-5 h-5" />,
    title: "Score History & Tracking",
    description: "Track your improvements over time with full history. Watch your score climb with every revision.",
    gradient: "from-indigo-500 to-indigo-600",
  },
];

const steps = [
  { step: "01", icon: <Upload className="w-5 h-5" />, title: "Upload Your Resume", description: "Upload your PDF resume and optionally provide a job title and description for targeted analysis." },
  { step: "02", icon: <Brain className="w-5 h-5" />, title: "AI Analyzes Everything", description: "Our AI engine scans your resume for ATS compatibility, keyword density, formatting quality, and content impact." },
  { step: "03", icon: <TrendingUp className="w-5 h-5" />, title: "Get Actionable Results", description: "Receive your score, detailed breakdown, keyword gaps, and specific improvement suggestions - all in seconds." },
];

const categories = [
  { category: "Formatting", icon: AlignLeft, color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-900/30", items: ["Clean section structure", "Consistent spacing", "Scannable layout", "ATS-safe format"] },
  { category: "Keywords", icon: Search, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/30", items: ["Industry terminology", "Technical skill terms", "Action verbs", "Role-specific phrases"] },
  { category: "Experience", icon: Briefcase, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/30", items: ["Work history clarity", "Achievement metrics", "Job relevance", "Career progression"] },
  { category: "Skills", icon: Code2, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/30", items: ["Hard skills match", "Soft skills presence", "Skill categorization", "Proficiency clarity"] },
  { category: "Education", icon: Award, color: "text-pink-600 dark:text-pink-400", bg: "bg-pink-50 dark:bg-pink-900/30", items: ["Degree relevance", "Institution clarity", "GPA mention", "Certifications"] },
  { category: "Impact", icon: TrendingUp, color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-900/30", items: ["Quantified results", "Achievement focus", "Action-oriented language", "Measurable outcomes"] },
];

// Mini resume template thumbnails for the Resume Builder section
const templatePreviews = [
  {
    name: "Classic",
    accent: "border-t-gray-800 dark:border-t-gray-200",
    layout: (
      <div className="space-y-1.5 px-2 py-2">
        <div className="h-2 w-12 bg-gray-700 rounded-full mx-auto" />
        <div className="h-0.5 bg-gray-300 dark:bg-gray-600 w-full" />
        <div className="space-y-1">
          <div className="h-1 w-full bg-gray-200 dark:bg-gray-600 rounded-full" />
          <div className="h-1 w-10/12 bg-gray-200 dark:bg-gray-600 rounded-full" />
          <div className="h-1 w-8/12 bg-gray-200 dark:bg-gray-600 rounded-full" />
        </div>
        <div className="h-0.5 bg-gray-300 dark:bg-gray-600 w-full" />
        <div className="space-y-1">
          <div className="h-1 w-full bg-gray-200 dark:bg-gray-600 rounded-full" />
          <div className="h-1 w-11/12 bg-gray-200 dark:bg-gray-600 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    name: "Modern",
    accent: "border-t-indigo-500",
    layout: (
      <div className="flex h-full">
        <div className="w-1/3 bg-indigo-50 dark:bg-indigo-900/30 p-1.5 space-y-1.5">
          <div className="w-5 h-5 rounded-full bg-indigo-200 dark:bg-indigo-700 mx-auto" />
          <div className="h-1 w-full bg-indigo-200 dark:bg-indigo-700 rounded-full" />
          <div className="h-1 w-8/12 bg-indigo-100 dark:bg-indigo-800 rounded-full" />
          <div className="h-1 w-10/12 bg-indigo-100 dark:bg-indigo-800 rounded-full" />
        </div>
        <div className="flex-1 p-1.5 space-y-1">
          <div className="h-1.5 w-12 bg-gray-700 rounded-full" />
          <div className="h-1 w-full bg-gray-200 dark:bg-gray-600 rounded-full" />
          <div className="h-1 w-10/12 bg-gray-200 dark:bg-gray-600 rounded-full" />
          <div className="h-1 w-8/12 bg-gray-200 dark:bg-gray-600 rounded-full" />
          <div className="h-1 w-full bg-gray-200 dark:bg-gray-600 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    name: "Minimal",
    accent: "border-t-gray-400",
    layout: (
      <div className="space-y-1.5 px-2 py-2">
        <div className="h-2.5 w-14 bg-gray-600 rounded-sm" />
        <div className="h-0.5 w-6 bg-gray-400 dark:bg-gray-500 rounded-full" />
        <div className="space-y-1 mt-1">
          <div className="h-1 w-full bg-gray-100 dark:bg-gray-700 rounded-full" />
          <div className="h-1 w-11/12 bg-gray-100 dark:bg-gray-700 rounded-full" />
          <div className="h-1 w-9/12 bg-gray-100 dark:bg-gray-700 rounded-full" />
        </div>
        <div className="space-y-1 mt-1">
          <div className="h-1 w-full bg-gray-100 dark:bg-gray-700 rounded-full" />
          <div className="h-1 w-10/12 bg-gray-100 dark:bg-gray-700 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    name: "Creative",
    accent: "border-t-violet-500",
    layout: (
      <div className="flex h-full">
        <div className="w-1 bg-violet-400 dark:bg-violet-600" />
        <div className="flex-1 p-1.5 space-y-1">
          <div className="h-2 w-14 bg-violet-600 dark:bg-violet-400 rounded-sm" />
          <div className="flex gap-1 mt-1">
            <div className="w-1 h-1 rounded-full bg-violet-400 dark:bg-violet-600 mt-0.5 shrink-0" />
            <div className="h-1 w-full bg-gray-200 dark:bg-gray-600 rounded-full" />
          </div>
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-violet-400 dark:bg-violet-600 mt-0.5 shrink-0" />
            <div className="h-1 w-10/12 bg-gray-200 dark:bg-gray-600 rounded-full" />
          </div>
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-violet-400 dark:bg-violet-600 mt-0.5 shrink-0" />
            <div className="h-1 w-9/12 bg-gray-200 dark:bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Professional",
    accent: "border-t-gray-900 dark:border-t-white",
    layout: (
      <div className="space-y-1.5">
        <div className="bg-gray-900 dark:bg-gray-100 px-2 py-1.5">
          <div className="h-1.5 w-12 bg-white dark:bg-gray-800 rounded-full" />
          <div className="h-0.5 w-16 bg-gray-500 dark:bg-gray-500 rounded-full mt-0.5" />
        </div>
        <div className="px-2 space-y-1">
          <div className="h-1 w-full bg-gray-200 dark:bg-gray-600 rounded-full" />
          <div className="h-1 w-10/12 bg-gray-200 dark:bg-gray-600 rounded-full" />
          <div className="h-1 w-8/12 bg-gray-200 dark:bg-gray-600 rounded-full" />
          <div className="h-1 w-full bg-gray-200 dark:bg-gray-600 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    name: "Compact",
    accent: "border-t-emerald-500",
    layout: (
      <div className="px-1.5 py-1.5 space-y-1">
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-10 bg-emerald-600 dark:bg-emerald-400 rounded-sm" />
          <div className="h-0.5 flex-1 bg-gray-200 dark:bg-gray-600 rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-x-1 gap-y-0.5">
          <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded-full" />
          <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded-full" />
          <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded-full" />
          <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded-full" />
        </div>
        <div className="h-0.5 bg-emerald-200 dark:bg-emerald-800 w-full" />
        <div className="space-y-0.5">
          <div className="h-1 w-full bg-gray-200 dark:bg-gray-600 rounded-full" />
          <div className="h-1 w-10/12 bg-gray-200 dark:bg-gray-600 rounded-full" />
        </div>
      </div>
    ),
  },
];

// ── Main Landing Page ──────────────────────────────────────────────────────
export default function AtsLandingPage() {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const historyHref = isAuthenticated ? "/student/ats/history" : "/login";

  const handleTryNow = () => {
    navigate(isAuthenticated ? "/student/ats/score" : "/login");
  };

  return (
    <div>
      {/* ── Full-Screen Hero ── */}
      <div className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#fafafa] dark:bg-gray-950">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/30 dark:to-blue-900/30 opacity-60 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full border border-black/3 dark:border-white/5" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16 w-full">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-950 dark:text-white"
          >
            Make Your Resume{" "}
            <span className="bg-linear-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              ATS-Ready
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 dark:text-gray-500 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Over 98% of Fortune 500 companies use Applicant Tracking Systems to filter resumes. Our AI
            analyzes your resume to ensure it gets past the bots and lands in human hands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={handleTryNow}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-950 text-white font-semibold rounded-2xl hover:bg-gray-800 transition-colors shadow-lg shadow-black/10 text-base dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              <Sparkles className="w-5 h-5" />
              {isAuthenticated ? "Analyze My Resume" : "Try Now - It's Free"}
            </button>
            <Link
              to={historyHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-900 text-gray-950 dark:text-white font-medium rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all no-underline text-base"
            >
              <History className="w-4 h-4" />
              {isAuthenticated ? "View History" : "Sign In"}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-gray-200 dark:border-gray-700 max-w-lg"
          >
            {[
              { value: "6", label: "Score Categories" },
              { value: "AI", label: "Powered Analysis" },
              { value: "100%", label: "Free to Use" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gray-950 dark:text-white">{stat.value}</div>
                <div className="text-gray-400 dark:text-gray-500 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Features Grid ── */}
      <section className="relative py-24 md:py-32 bg-[#fafafa] dark:bg-gray-950">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-6">
              Core Features
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 dark:text-white tracking-tight mb-4">
              Everything you need to
              <br />
              <span className="text-gradient-accent">ace the ATS</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
              Comprehensive AI-powered resume analysis tools - all in one place, completely free.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all h-full group overflow-hidden"
                >
                  <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center shadow-sm mb-5`}>
                    <span className="text-white">{feature.icon}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── More Career Tools ── */}
      <section className="relative py-24 md:py-32 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-6">
              Available Now
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 dark:text-white tracking-tight mb-4">
              More tools to
              <br />
              <span className="text-gradient-accent">level up your career</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
              Powerful tools to take your job applications even further.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* Resume Templates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to={isAuthenticated ? "/student/ats/templates" : "/login"} className="no-underline block h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 md:p-8 overflow-hidden hover:border-sky-200 dark:hover:border-sky-800 hover:shadow-xl hover:shadow-sky-100/50 dark:hover:shadow-sky-900/20 transition-all group h-full cursor-pointer"
                >
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-50 dark:bg-sky-900/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-linear-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-sm mb-5">
                      <Layout className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">Resume Builder</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed mb-5">
                      Build your resume with ATS-optimized templates. Pick a design and download as PDF.
                    </p>

                    {/* Template Previews Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {templatePreviews.slice(0, 6).map((tpl) => (
                        <div
                          key={tpl.name}
                          className={`rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden h-16 border-t-2 ${tpl.accent}`}
                        >
                          {tpl.layout}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">6 professional templates</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400 group-hover:gap-2.5 transition-all">
                        Build Resume
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Cover Letter Builder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.5 }}
            >
              <Link to={isAuthenticated ? "/student/ats/cover-letter" : "/login"} className="no-underline block h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 md:p-8 overflow-hidden hover:border-rose-200 dark:hover:border-rose-800 hover:shadow-xl hover:shadow-rose-100/50 dark:hover:shadow-rose-900/20 transition-all group h-full cursor-pointer"
                >
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-50 dark:bg-rose-900/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-linear-to-br from-rose-500 to-rose-600 flex items-center justify-center shadow-sm mb-5">
                      <PenLine className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">Cover Letter Builder</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed mb-5">
                      Generate tailored, professional cover letters in seconds using AI. Paste a job description and get a personalized letter.
                    </p>
                    <ul className="space-y-2.5 mb-5">
                      {["AI-generated in seconds", "Job description matching", "Professional tone options", "Copy or download as PDF"].map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-rose-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-600 dark:text-rose-400 group-hover:gap-2.5 transition-all">
                      Generate Cover Letter
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative py-24 md:py-32 bg-[#fafafa] dark:bg-gray-950 overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-6">
              How it works
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 dark:text-white tracking-tight mb-4">
              Three steps to your
              <br />
              <span className="text-gradient-accent">perfect ATS score</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-7 left-[16.5%] right-[16.5%] h-px bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />

            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative text-center"
              >
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-gray-950 dark:bg-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gray-950/20 dark:shadow-white/10">
                  <span className="text-white dark:text-gray-950">{step.icon}</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display text-base font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Analyze - Compact Grid ── */}
      <section className="relative py-24 md:py-32 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-6">
              <Zap className="w-3 h-3" />
              Deep Analysis
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 dark:text-white tracking-tight mb-3">
              What we <span className="text-gradient-accent">analyze</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-500">20+ criteria across 6 key categories</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:border-gray-200 dark:hover:border-gray-700 transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl ${cat.bg} mb-3`}>
                    <Icon className={`w-4.5 h-4.5 ${cat.color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{cat.category}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 md:py-32 bg-[#fafafa] dark:bg-gray-950 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-gray-950 dark:bg-gray-800 p-10 md:p-16 text-center overflow-hidden"
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
                Ready to optimize
                <br />
                your resume?
              </h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">
                Upload your resume now and get your ATS score with personalized improvement tips in seconds. It's completely free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={handleTryNow}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-gray-950 text-base font-semibold rounded-2xl hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2 justify-center"
                >
                  {isAuthenticated ? "Get My ATS Score" : "Get Started - It's Free"}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <Link to={historyHref} className="no-underline">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white/10 text-white text-base font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all w-full"
                  >
                    {isAuthenticated ? "View History" : "Sign In"}
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
