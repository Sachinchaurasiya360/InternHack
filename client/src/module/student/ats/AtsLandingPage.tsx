import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useAuthStore } from "../../../lib/auth.store";
import {
  Target,
  Search,
  BarChart2,
  Lightbulb,
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
    icon: <Target className="w-4.5 h-4.5" />,
    title: "ATS Compatibility Score",
    description: "Get a comprehensive 0-100 score reflecting how well your resume performs with Applicant Tracking Systems.",
  },
  {
    icon: <Search className="w-4.5 h-4.5" />,
    title: "Smart Keyword Analysis",
    description: "Discover which industry keywords your resume contains and the missing ones costing you interviews.",
  },
  {
    icon: <BarChart2 className="w-4.5 h-4.5" />,
    title: "6-Category Breakdown",
    description: "Detailed scoring across Formatting, Keywords, Experience, Skills, Education, and Impact.",
  },
  {
    icon: <Lightbulb className="w-4.5 h-4.5" />,
    title: "AI Improvement Tips",
    description: "Receive personalized, actionable suggestions to craft a resume that stands out and gets past filters.",
  },
  {
    icon: <Briefcase className="w-4.5 h-4.5" />,
    title: "Job-Specific Scoring",
    description: "Paste a job description to get tailored analysis - see exactly how your resume aligns with the role.",
  },
];

const steps = [
  { icon: <Upload className="w-4.5 h-4.5" />, title: "Upload Your Resume", description: "Upload your PDF resume and optionally provide a job title and description for targeted analysis." },
  { icon: <Brain className="w-4.5 h-4.5" />, title: "AI Analyzes Everything", description: "Our AI engine scans your resume for ATS compatibility, keyword density, formatting quality, and content impact." },
  { icon: <TrendingUp className="w-4.5 h-4.5" />, title: "Get Actionable Results", description: "Receive your score, detailed breakdown, keyword gaps, and specific improvement suggestions - all in seconds." },
];

const categories = [
  { category: "Formatting", icon: AlignLeft, color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-900/30", items: ["Clean section structure", "Consistent spacing", "Scannable layout", "ATS-safe format"] },
  { category: "Keywords", icon: Search, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/30", items: ["Industry terminology", "Technical skill terms", "Action verbs", "Role-specific phrases"] },
  { category: "Experience", icon: Briefcase, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/30", items: ["Work history clarity", "Achievement metrics", "Job relevance", "Career progression"] },
  { category: "Skills", icon: Code2, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/30", items: ["Hard skills match", "Soft skills presence", "Skill categorization", "Proficiency clarity"] },
  { category: "Education", icon: Award, color: "text-pink-600 dark:text-pink-400", bg: "bg-pink-50 dark:bg-pink-900/30", items: ["Degree relevance", "Institution clarity", "GPA mention", "Certifications"] },
  { category: "Impact", icon: TrendingUp, color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-900/30", items: ["Quantified results", "Achievement focus", "Action-oriented language", "Measurable outcomes"] },
];

const templatePreviews = [
  {
    name: "Classic",
    accent: "border-t-stone-800 dark:border-t-stone-200",
    layout: (
      <div className="space-y-1.5 px-2 py-2">
        <div className="h-2 w-12 bg-stone-700 rounded-full mx-auto" />
        <div className="h-0.5 bg-stone-300 dark:bg-stone-600 w-full" />
        <div className="space-y-1">
          <div className="h-1 w-full bg-stone-200 dark:bg-stone-600 rounded-full" />
          <div className="h-1 w-10/12 bg-stone-200 dark:bg-stone-600 rounded-full" />
          <div className="h-1 w-8/12 bg-stone-200 dark:bg-stone-600 rounded-full" />
        </div>
        <div className="h-0.5 bg-stone-300 dark:bg-stone-600 w-full" />
        <div className="space-y-1">
          <div className="h-1 w-full bg-stone-200 dark:bg-stone-600 rounded-full" />
          <div className="h-1 w-11/12 bg-stone-200 dark:bg-stone-600 rounded-full" />
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
          <div className="h-1.5 w-12 bg-stone-700 rounded-full" />
          <div className="h-1 w-full bg-stone-200 dark:bg-stone-600 rounded-full" />
          <div className="h-1 w-10/12 bg-stone-200 dark:bg-stone-600 rounded-full" />
          <div className="h-1 w-8/12 bg-stone-200 dark:bg-stone-600 rounded-full" />
          <div className="h-1 w-full bg-stone-200 dark:bg-stone-600 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    name: "Minimal",
    accent: "border-t-stone-400",
    layout: (
      <div className="space-y-1.5 px-2 py-2">
        <div className="h-2.5 w-14 bg-stone-600 rounded-sm" />
        <div className="h-0.5 w-6 bg-stone-400 dark:bg-stone-500 rounded-full" />
        <div className="space-y-1 mt-1">
          <div className="h-1 w-full bg-stone-100 dark:bg-stone-700 rounded-full" />
          <div className="h-1 w-11/12 bg-stone-100 dark:bg-stone-700 rounded-full" />
          <div className="h-1 w-9/12 bg-stone-100 dark:bg-stone-700 rounded-full" />
        </div>
        <div className="space-y-1 mt-1">
          <div className="h-1 w-full bg-stone-100 dark:bg-stone-700 rounded-full" />
          <div className="h-1 w-10/12 bg-stone-100 dark:bg-stone-700 rounded-full" />
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
            <div className="h-1 w-full bg-stone-200 dark:bg-stone-600 rounded-full" />
          </div>
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-violet-400 dark:bg-violet-600 mt-0.5 shrink-0" />
            <div className="h-1 w-10/12 bg-stone-200 dark:bg-stone-600 rounded-full" />
          </div>
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-violet-400 dark:bg-violet-600 mt-0.5 shrink-0" />
            <div className="h-1 w-9/12 bg-stone-200 dark:bg-stone-600 rounded-full" />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Professional",
    accent: "border-t-stone-900 dark:border-t-white",
    layout: (
      <div className="space-y-1.5">
        <div className="bg-stone-900 dark:bg-stone-100 px-2 py-1.5">
          <div className="h-1.5 w-12 bg-white dark:bg-stone-800 rounded-full" />
          <div className="h-0.5 w-16 bg-stone-500 dark:bg-stone-500 rounded-full mt-0.5" />
        </div>
        <div className="px-2 space-y-1">
          <div className="h-1 w-full bg-stone-200 dark:bg-stone-600 rounded-full" />
          <div className="h-1 w-10/12 bg-stone-200 dark:bg-stone-600 rounded-full" />
          <div className="h-1 w-8/12 bg-stone-200 dark:bg-stone-600 rounded-full" />
          <div className="h-1 w-full bg-stone-200 dark:bg-stone-600 rounded-full" />
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
          <div className="h-0.5 flex-1 bg-stone-200 dark:bg-stone-600 rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-x-1 gap-y-0.5">
          <div className="h-1 bg-stone-200 dark:bg-stone-600 rounded-full" />
          <div className="h-1 bg-stone-200 dark:bg-stone-600 rounded-full" />
          <div className="h-1 bg-stone-200 dark:bg-stone-600 rounded-full" />
          <div className="h-1 bg-stone-200 dark:bg-stone-600 rounded-full" />
        </div>
        <div className="h-0.5 bg-emerald-200 dark:bg-emerald-800 w-full" />
        <div className="space-y-0.5">
          <div className="h-1 w-full bg-stone-200 dark:bg-stone-600 rounded-full" />
          <div className="h-1 w-10/12 bg-stone-200 dark:bg-stone-600 rounded-full" />
        </div>
      </div>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function AtsLandingPage() {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const handleTryNow = () => {
    navigate(isAuthenticated ? "/student/ats/score" : "/login");
  };

  return (
    <div className="font-sans bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-white/10">
        {/* Vertical grid lines — light */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none dark:hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(23,23,23,0.04) 1px, transparent 1px)",
            backgroundSize: "140px 100%",
          }}
        />
        {/* Vertical grid lines — dark */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "140px 100%",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-8"
          >
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 bg-lime-400"
            />
            AI-Powered Resume Analysis
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none text-stone-900 dark:text-stone-50"
          >
            Make your resume
            <br />
            <span className="relative inline-block align-baseline">
              <span className="relative z-10">ATS-ready.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed"
          >
            Over 98% of Fortune 500 companies use Applicant Tracking Systems to filter resumes. Our AI
            analyzes your resume to ensure it gets past the bots and lands in human hands.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={handleTryNow}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-lime-400 text-stone-950 rounded-lg text-sm font-bold hover:bg-lime-300 transition-colors cursor-pointer border-0"
            >
              {isAuthenticated ? "Analyze My Resume" : "Try free — no signup"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <Link to="/register" className="no-underline">
              <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-stone-900 dark:text-stone-100 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer">
                Create free account
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-stone-200 dark:border-white/10 max-w-sm"
          >
            {[
              { value: "54", suffix: "k+", label: "Resumes scored" },
              { value: "6", suffix: "", label: "Score categories" },
              { value: "100", suffix: "%", label: "Free to use" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-stone-900 dark:text-stone-50 tabular-nums">
                  {stat.value}<span className="text-lime-500">{stat.suffix}</span>
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 md:py-32 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              core features
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Everything you need{" "}
              <span className="text-stone-400 dark:text-stone-600">to ace the ATS.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
              Comprehensive AI-powered resume analysis tools — all in one place, completely free.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-2xl overflow-hidden"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={cardVariants}>
                <div className="relative h-full flex flex-col p-8 bg-white dark:bg-stone-950 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400 mb-8">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">{feature.title}</h3>
                  <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── More Career Tools ── */}
      <section className="py-24 md:py-32 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              more tools
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Level up{" "}
              <span className="text-stone-400 dark:text-stone-600">your application.</span>
            </h2>
            <p className="mt-6 text-base text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
              Powerful tools to take your job applications even further.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {/* Resume Builder */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to={isAuthenticated ? "/student/ats/templates" : "/login"} className="no-underline block h-full">
                <div className="relative h-full flex flex-col p-8 bg-stone-50 dark:bg-stone-950 rounded-2xl border border-stone-200 dark:border-white/10 hover:bg-white dark:hover:bg-stone-800 hover:border-stone-300 dark:hover:border-white/20 transition-all group cursor-pointer">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400 mb-8">
                    <Layout className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">Resume Builder</h3>
                  <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex-1">
                    Build your resume with ATS-optimized templates. Pick a design and download as PDF.
                  </p>
                  {/* Template Previews */}
                  <div className="grid grid-cols-3 gap-2 my-6">
                    {templatePreviews.slice(0, 6).map((tpl) => (
                      <div
                        key={tpl.name}
                        className={`rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 overflow-hidden h-16 border-t-2 ${tpl.accent}`}
                      >
                        {tpl.layout}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs font-mono uppercase tracking-widest text-stone-500">6 templates</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 group-hover:gap-2.5 transition-all">
                      Build resume
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Cover Letter Builder */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.5 }}
            >
              <Link to={isAuthenticated ? "/student/ats/cover-letter" : "/login"} className="no-underline block h-full">
                <div className="relative h-full flex flex-col p-8 bg-stone-50 dark:bg-stone-950 rounded-2xl border border-stone-200 dark:border-white/10 hover:bg-white dark:hover:bg-stone-800 hover:border-stone-300 dark:hover:border-white/20 transition-all group cursor-pointer">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400 mb-8">
                    <PenLine className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">Cover Letter Builder</h3>
                  <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    Generate tailored, professional cover letters in seconds using AI. Paste a job description and get a personalized letter.
                  </p>
                  <ul className="mt-6 space-y-2 flex-1">
                    {["AI-generated in seconds", "Job description matching", "Professional tone options", "Copy or download as PDF"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                        <CheckCircle className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 group-hover:gap-2.5 transition-all">
                    Generate letter
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 md:py-32 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6">
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
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Three steps to your{" "}
              <span className="text-stone-400 dark:text-stone-600">perfect ATS score.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative max-w-4xl">
            <div className="hidden md:block absolute top-5 left-[16.5%] right-[16.5%] h-px bg-stone-200 dark:bg-white/10" />
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="relative z-10 w-10 h-10 rounded-lg bg-stone-900 dark:bg-stone-800 flex items-center justify-center mb-6">
                  <span className="text-stone-50">{step.icon}</span>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-lime-400 text-stone-950 text-[10px] font-bold flex items-center justify-center rounded">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-50 mb-2">{step.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Analyze ── */}
      <section className="py-24 md:py-32 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              deep analysis
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              What we analyze.{" "}
              <span className="text-stone-400 dark:text-stone-600">20+ criteria, 6 categories.</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-2xl overflow-hidden max-w-4xl"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.div key={cat.category} variants={cardVariants}>
                  <div className="h-full flex flex-col p-6 bg-white dark:bg-stone-950 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors">
                    <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${cat.bg} mb-5`}>
                      <Icon className={`w-4 h-4 ${cat.color}`} />
                    </div>
                    <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-3">{cat.category}</h3>
                    <ul className="space-y-2 flex-1">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-stone-500">
                          <Zap className="w-3 h-3 text-lime-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-stone-900 dark:border-white/10 bg-stone-900 dark:bg-stone-900 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 p-10 md:p-16 border-b md:border-b-0 md:border-r border-white/10">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400 mb-6">
                  <motion.span
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    className="h-1.5 w-1.5 bg-lime-400"
                  />
                  free to start / no card
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none">
                  Ready to optimize{" "}
                  <span className="text-stone-500">your resume?</span>
                </h2>
                <p className="mt-6 text-base text-stone-400 max-w-lg leading-relaxed">
                  Upload your resume and get your ATS score with personalized improvement tips in seconds. Completely free.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleTryNow}
                    className="group inline-flex items-center gap-2 px-6 py-3.5 bg-lime-400 text-stone-950 rounded-lg text-sm font-bold hover:bg-lime-300 transition-colors cursor-pointer border-0"
                  >
                    {isAuthenticated ? "Get My ATS Score" : "Get started — it's free"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <Link to="/register" className="no-underline">
                    <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-transparent border border-white/20 hover:bg-white/5 transition-colors cursor-pointer">
                      Create free account
                    </button>
                  </Link>
                </div>
              </div>
              <div className="md:col-span-2 p-10 md:p-16 flex flex-col justify-center gap-8">
                {[
                  { value: "54", suffix: "k+", label: "resumes scored" },
                  { value: "6", suffix: "", label: "score categories" },
                  { value: "100", suffix: "%", label: "free forever" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-4xl md:text-5xl font-bold tracking-tight text-white tabular-nums">
                      {s.value}<span className="text-lime-400">{s.suffix}</span>
                    </div>
                    <div className="mt-1 text-xs font-mono uppercase tracking-widest text-stone-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
