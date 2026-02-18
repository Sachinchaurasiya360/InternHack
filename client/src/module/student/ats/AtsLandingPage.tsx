import { Link } from "react-router";
import { motion } from "framer-motion";
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
  FileText,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "ATS Compatibility Score",
    description:
      "Get a comprehensive 0–100 score that reflects exactly how well your resume will perform with Applicant Tracking Systems used by top companies.",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    border: "hover:border-violet-200",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Smart Keyword Analysis",
    description:
      "Discover which industry keywords your resume already contains and pinpoint the missing ones that could be costing you interview callbacks.",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    border: "hover:border-blue-200",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "6-Category Breakdown",
    description:
      "Detailed scoring across Formatting, Keywords, Experience, Skills, Education, and Impact — so you know exactly where to focus your energy.",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    border: "hover:border-emerald-200",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "AI Improvement Tips",
    description:
      "Receive personalized, actionable suggestions powered by AI to help you craft a resume that stands out and gets past the filters.",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    border: "hover:border-amber-200",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Job-Specific Scoring",
    description:
      "Paste a job description to get tailored analysis — see exactly how your resume aligns with the specific role you're targeting.",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
    border: "hover:border-pink-200",
  },
  {
    icon: <History className="w-6 h-6" />,
    title: "Score History & Tracking",
    description:
      "Track your resume improvements over time with a full history of past analyses. Watch your score climb with every revision.",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    border: "hover:border-indigo-200",
  },
];

const steps = [
  {
    step: "01",
    icon: <Upload className="w-5 h-5" />,
    title: "Upload Your Resume",
    description:
      "Upload your PDF resume and optionally provide a job title and description for targeted, role-specific analysis.",
  },
  {
    step: "02",
    icon: <Brain className="w-5 h-5" />,
    title: "AI Analyzes Everything",
    description:
      "Our AI engine scans your resume for ATS compatibility, keyword density, formatting quality, and content impact.",
  },
  {
    step: "03",
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Get Actionable Results",
    description:
      "Receive your score, detailed breakdown, keyword gaps, and specific improvement suggestions — all in seconds.",
  },
];

const categories = [
  {
    category: "Formatting",
    color: "text-violet-600 bg-violet-50",
    items: ["Clean section structure", "Consistent spacing", "Scannable layout", "ATS-safe file format"],
  },
  {
    category: "Keywords",
    color: "text-blue-600 bg-blue-50",
    items: ["Industry terminology", "Technical skill terms", "Action verbs", "Role-specific phrases"],
  },
  {
    category: "Experience",
    color: "text-emerald-600 bg-emerald-50",
    items: ["Work history clarity", "Achievement metrics", "Job relevance", "Career progression"],
  },
  {
    category: "Skills",
    color: "text-amber-600 bg-amber-50",
    items: ["Hard skills match", "Soft skills presence", "Skill categorization", "Proficiency clarity"],
  },
  {
    category: "Education",
    color: "text-pink-600 bg-pink-50",
    items: ["Degree relevance", "Institution clarity", "GPA mention", "Certifications"],
  },
  {
    category: "Impact",
    color: "text-indigo-600 bg-indigo-50",
    items: ["Quantified results", "Achievement focus", "Action-oriented language", "Measurable outcomes"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AtsLandingPage() {
  return (
    <div className="max-w-5xl mx-auto pb-16">
      {/* ── Hero ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 rounded-3xl p-10 mb-10 text-white"
      >
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-gray-200">AI-Powered Resume Intelligence</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
            Make Your Resume{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              ATS-Ready
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8 leading-relaxed">
            Over 98% of Fortune 500 companies use Applicant Tracking Systems to filter resumes. Our AI
            analyzes your resume to ensure it gets past the bots and lands in human hands.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/student/ats/score"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors no-underline shadow-lg shadow-black/20"
            >
              <Sparkles className="w-4 h-4 text-violet-600" />
              Analyze My Resume
            </Link>
            <Link
              to="/student/ats/history"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl hover:bg-white/20 transition-colors no-underline border border-white/10"
            >
              <History className="w-4 h-4" />
              View History
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="relative z-10 grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
          {[
            { value: "6", label: "Score Categories" },
            { value: "AI", label: "Powered Analysis" },
            { value: "100%", label: "Free to Use" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Features Grid ── */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900">Everything You Need</h2>
          <p className="text-gray-500 mt-1 text-sm">Comprehensive resume analysis tools — all in one place</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all cursor-default group ${feature.border}`}
            >
              <div
                className={`w-12 h-12 ${feature.bg} ${feature.iconColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── How It Works ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="bg-gray-50 rounded-3xl p-8 md:p-10 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-1">How It Works</h2>
        <p className="text-gray-500 text-sm mb-8">Get your ATS score in three simple steps</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.step} className="relative flex flex-col">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px border-t-2 border-dashed border-gray-300 z-0" style={{ width: "calc(100% - 3rem)", left: "calc(3rem + 0.5rem)" }} />
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center shrink-0 z-10">
                  {step.icon}
                </div>
                <span className="text-4xl font-extrabold text-gray-100 leading-none">{step.step}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── What We Analyze ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 mb-8 shadow-sm"
      >
        <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">What We Analyze</h2>
            <p className="text-gray-500 text-sm mt-1">20+ criteria across 6 key categories</p>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-violet-50 text-violet-600 rounded-full text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            AI-powered
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.category} className="p-4 bg-gray-50 rounded-2xl">
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold mb-3 ${cat.color}`}>
                <FileText className="w-3 h-3" />
                {cat.category}
              </div>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="relative overflow-hidden text-center bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-10 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none" />
        <div className="relative z-10">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Optimize Your Resume?</h2>
          <p className="text-violet-200 mb-7 max-w-md mx-auto text-sm leading-relaxed">
            Upload your resume now and get your ATS score with personalized improvement tips in seconds.
            It's completely free.
          </p>
          <Link
            to="/student/ats/score"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors no-underline shadow-xl shadow-indigo-900/30"
          >
            Get My ATS Score Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
