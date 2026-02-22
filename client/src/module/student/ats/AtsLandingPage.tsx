import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
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
  FileText,
  Zap,
  Layout,
  PenLine,
} from "lucide-react";

const features = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "ATS Compatibility Score",
    description: "Get a comprehensive 0–100 score reflecting how well your resume performs with Applicant Tracking Systems.",
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
    description: "Paste a job description to get tailored analysis — see exactly how your resume aligns with the role.",
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
  { step: "03", icon: <TrendingUp className="w-5 h-5" />, title: "Get Actionable Results", description: "Receive your score, detailed breakdown, keyword gaps, and specific improvement suggestions — all in seconds." },
];

const categories = [
  { category: "Formatting", color: "text-violet-600 bg-violet-50", items: ["Clean section structure", "Consistent spacing", "Scannable layout", "ATS-safe file format"] },
  { category: "Keywords", color: "text-blue-600 bg-blue-50", items: ["Industry terminology", "Technical skill terms", "Action verbs", "Role-specific phrases"] },
  { category: "Experience", color: "text-emerald-600 bg-emerald-50", items: ["Work history clarity", "Achievement metrics", "Job relevance", "Career progression"] },
  { category: "Skills", color: "text-amber-600 bg-amber-50", items: ["Hard skills match", "Soft skills presence", "Skill categorization", "Proficiency clarity"] },
  { category: "Education", color: "text-pink-600 bg-pink-50", items: ["Degree relevance", "Institution clarity", "GPA mention", "Certifications"] },
  { category: "Impact", color: "text-indigo-600 bg-indigo-50", items: ["Quantified results", "Achievement focus", "Action-oriented language", "Measurable outcomes"] },
];


// ── Sticky Horizontal Scroll Section ──────────────────────────────────────
function StickyAnalyzeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["15%", "-65%"]);

  return (
    <section className="relative bg-white">
      <div ref={containerRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="max-w-6xl mx-auto w-full px-6 mb-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider mb-6">
                <Zap className="w-3 h-3" />
                Deep Analysis
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-3">
                What we <span className="text-gradient-accent">analyze</span>
              </h2>
              <p className="text-lg text-gray-500">20+ criteria across 6 key categories</p>
            </div>
          </div>

          <motion.div style={{ x }} className="flex gap-5 pl-[10%]">
            {categories.map((cat) => (
              <motion.div
                key={cat.category}
                whileHover={{ y: -4 }}
                className="min-w-75 max-w-75 p-6 md:p-7 bg-white rounded-2xl border border-gray-100 shadow-sm shrink-0 hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all"
              >
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold mb-5 ${cat.color}`}>
                  <FileText className="w-3 h-3" />
                  {cat.category}
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
      <div className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#fafafa]">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-linear-to-br from-indigo-100 to-violet-100 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full bg-linear-to-tr from-slate-100 to-blue-100 opacity-60 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full border border-black/3" />
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16 w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/10 shadow-sm rounded-full text-xs font-medium mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span className="text-gray-600">AI-Powered Resume Intelligence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-950"
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
            className="text-gray-500 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-950 text-white font-semibold rounded-2xl hover:bg-gray-800 transition-colors shadow-lg shadow-black/10 text-base"
            >
              <Sparkles className="w-5 h-5" />
              {isAuthenticated ? "Analyze My Resume" : "Try Now — It's Free"}
            </button>
            <Link
              to={historyHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-950 font-medium rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all no-underline text-base"
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
            className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-gray-200 max-w-lg"
          >
            {[
              { value: "6", label: "Score Categories" },
              { value: "AI", label: "Powered Analysis" },
              { value: "100%", label: "Free to Use" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gray-950">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-gray-300 rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1 h-1.5 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* ── Features Grid ── */}
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
              Core Features
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-4">
              Everything you need to
              <br />
              <span className="text-gradient-accent">ace the ATS</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Comprehensive AI-powered resume analysis tools — all in one place, completely free.
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
                  className={`relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all h-full group overflow-hidden`}
                >
                  <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center shadow-sm mb-5`}>
                    <span className="text-white">{feature.icon}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── More Career Tools ── */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider mb-6">
              Coming Soon
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-4">
              More tools to
              <br />
              <span className="text-gradient-accent">level up your career</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
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
              <motion.div
                whileHover={{ y: -4 }}
                className="relative bg-white rounded-2xl border border-gray-100 p-6 md:p-8 overflow-hidden hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all group h-full"
              >
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-50 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-linear-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-sm mb-5">
                    <Layout className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2">Resume Templates</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    Choose from ATS-optimized resume templates crafted by career experts. Instantly download in PDF or DOCX.
                  </p>
                  <ul className="space-y-2.5">
                    {["20+ ATS-friendly templates", "Industry-specific designs", "PDF & DOCX download", "Real-time live preview"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-sky-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* Cover Letter Builder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="relative bg-white rounded-2xl border border-gray-100 p-6 md:p-8 overflow-hidden hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all group h-full"
              >
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-50 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-linear-to-br from-rose-500 to-rose-600 flex items-center justify-center shadow-sm mb-5">
                    <PenLine className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2">Cover Letter Builder</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    Generate tailored, professional cover letters in seconds using AI. Paste a job description and get a personalized letter.
                  </p>
                  <ul className="space-y-2.5">
                    {["AI-generated in seconds", "Job description matching", "Professional tone options", "Multiple format export"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden">
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
              How it works
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-4">
              Three steps to your
              <br />
              <span className="text-gradient-accent">perfect ATS score</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-7 left-[16.5%] right-[16.5%] h-px bg-linear-to-r from-gray-200 via-gray-300 to-gray-200" />

            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative text-center"
              >
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-gray-950 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gray-950/20">
                  <span className="text-white">{step.icon}</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky Scroll: What We Analyze ── */}
      <StickyAnalyzeSection />

      {/* ── CTA ── */}
      <section className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden">
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
                  {isAuthenticated ? "Get My ATS Score" : "Get Started — It's Free"}
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
