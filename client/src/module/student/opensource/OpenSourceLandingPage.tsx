import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAuthStore } from "../../../lib/auth.store";
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  GitBranch,
  BookOpen,
  Users,
  Trophy,
  Globe,
  Code2,
  Rocket,
  GraduationCap,
  Heart,
  Flame,
  FileCode2,
  Star,
  GitPullRequest,
  MessagesSquare,
} from "lucide-react";

// ─── Features ─────────────────────────────────────────────────
const features = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Open Source Guidance",
    description: "Step-by-step guides to help you understand open-source contribution workflows — from forking a repo to creating pull requests.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Curated Repository Discovery",
    description: "Explore hand-picked repositories tagged by difficulty, language, and domain — find beginner-friendly projects in seconds.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "GSoC Selected Repos",
    description: "Browse repositories that have been selected for Google Summer of Code. Start contributing early and build a strong proposal.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Program Tracker",
    description: "Stay on top of deadlines for GSoC, LFX, MLH, Outreachy, Rails Girls, and 20+ other open-source programs.",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: <GitPullRequest className="w-5 h-5" />,
    title: "First PR Roadmap",
    description: "Follow our guided checklist to land your first pull request — pick an issue, set up locally, submit, and get merged.",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    icon: <MessagesSquare className="w-5 h-5" />,
    title: "Community & Mentorship",
    description: "Connect with mentors, join contribution sprints, and get code reviews from experienced maintainers in the community.",
    gradient: "from-indigo-500 to-indigo-600",
  },
];

// ─── Programs ─────────────────────────────────────────────────
const programs = [
  {
    name: "Google Summer of Code",
    short: "GSoC",
    description: "A global program focused on bringing more developers into open-source. Students work on 10-week projects with stipends.",
    color: "text-red-600 bg-red-50",
    items: ["Mentored coding projects", "Open to students worldwide", "Annual summer program", "Stipend-based contribution"],
  },
  {
    name: "LFX Mentorship",
    short: "LFX",
    description: "Linux Foundation's mentorship program connecting developers with cloud-native and open-source projects.",
    color: "text-blue-600 bg-blue-50",
    items: ["Linux Foundation projects", "Cloud-native focus", "3-month sprints", "Paid mentorship"],
  },
  {
    name: "MLH Fellowship",
    short: "MLH",
    description: "12-week internship alternative where fellows contribute to open-source projects under experienced mentors.",
    color: "text-indigo-600 bg-indigo-50",
    items: ["12-week program", "Internship alternative", "Pod-based learning", "Multiple tracks"],
  },
  {
    name: "Outreachy",
    short: "Outreachy",
    description: "Paid internships in open-source for people subject to systemic bias, promoting diversity in tech.",
    color: "text-teal-600 bg-teal-50",
    items: ["Diversity-focused", "Paid internships", "Remote-friendly", "Multiple FOSS projects"],
  },
  {
    name: "Hacktoberfest",
    short: "Hacktoberfest",
    description: "Annual month-long celebration of open source in October. Contribute 4 quality PRs and earn swag.",
    color: "text-purple-600 bg-purple-50",
    items: ["Every October", "Beginner-friendly", "Swag rewards", "Community-driven"],
  },
  {
    name: "GirlScript Summer of Code",
    short: "GSSoC",
    description: "India's premier 3-month open-source program for beginners, with leaderboards, points, and mentorship.",
    color: "text-pink-600 bg-pink-50",
    items: ["India-focused", "3-month program", "Beginner-friendly", "Leaderboard system"],
  },
];

// ─── Steps ────────────────────────────────────────────────────
const steps = [
  {
    step: "01",
    icon: <BookOpen className="w-5 h-5" />,
    title: "Learn the Basics",
    description: "Understand Git, GitHub workflows, pull requests, and open-source licensing through our guided tutorials.",
  },
  {
    step: "02",
    icon: <Rocket className="w-5 h-5" />,
    title: "Find Your Project",
    description: "Browse curated repos by difficulty, language, and domain. Filter for 'good first issues' and projects that match your skills.",
  },
  {
    step: "03",
    icon: <GitPullRequest className="w-5 h-5" />,
    title: "Make Your First PR",
    description: "Fork, clone, branch, commit, and push — follow our step-by-step checklist and submit your first pull request.",
  },
];

// ─── GSoC Orgs (sample) ──────────────────────────────────────
const gsocOrgs = [
  { name: "TensorFlow", lang: "Python/C++", domain: "AI / ML" },
  { name: "CNCF", lang: "Go", domain: "Cloud Native" },
  { name: "Apache", lang: "Java", domain: "Big Data" },
  { name: "Mozilla", lang: "Rust/JS", domain: "Web / Browser" },
  { name: "Kubernetes", lang: "Go", domain: "Infrastructure" },
  { name: "OpenCV", lang: "C++/Python", domain: "Computer Vision" },
  { name: "FOSSASIA", lang: "Python/JS", domain: "Community" },
  { name: "NumFOCUS", lang: "Python", domain: "Data Science" },
  { name: "Django", lang: "Python", domain: "Web Framework" },
  { name: "Git", lang: "C", domain: "Developer Tools" },
  { name: "PostgreSQL", lang: "C/SQL", domain: "Database" },
  { name: "Jenkins", lang: "Java", domain: "CI/CD" },
];


// ─── Sticky Horizontal Scroll: Programs ──────────────────────
function StickyProgramsSection() {
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
                <Globe className="w-3 h-3" />
                Programs
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-3">
                Open-Source <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Programs</span>
              </h2>
              <p className="text-lg text-gray-500">Apply to top programs and kickstart your open-source career</p>
            </div>
          </div>

          <motion.div style={{ x }} className="flex gap-5 pl-[10%]">
            {programs.map((prog) => (
              <motion.div
                key={prog.name}
                whileHover={{ y: -4 }}
                className="min-w-75 max-w-75 p-6 md:p-7 bg-white rounded-2xl border border-gray-100 shadow-sm shrink-0 hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all"
              >
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold mb-4 ${prog.color}`}>
                  <Trophy className="w-3 h-3" />
                  {prog.short}
                </div>
                <h3 className="font-display text-base font-bold text-gray-900 mb-2">{prog.name}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{prog.description}</p>
                <ul className="space-y-2.5">
                  {prog.items.map((item) => (
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


// ─── Main Landing Page ────────────────────────────────────────
export default function OpenSourceLandingPage() {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(isAuthenticated ? "/student/opensource" : "/login");
  };

  return (
    <div>
      {/* ── Full-Screen Hero ── */}
      <div className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#fafafa]">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full bg-gradient-to-tr from-emerald-100 to-teal-100 opacity-60 blur-3xl" />
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
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
            <span className="text-gray-600">Open Source Discovery Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-950"
          >
            Discover &amp;{" "}
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Contribute
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Your complete guide to open-source — find beginner-friendly repositories, track GSoC orgs, discover programs like LFX and Outreachy, and make your first pull request with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={handleExplore}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-950 text-white font-semibold rounded-2xl hover:bg-gray-800 transition-colors shadow-lg shadow-black/10 text-base"
            >
              <Rocket className="w-5 h-5" />
              {isAuthenticated ? "Explore Repos" : "Get Started — It's Free"}
            </button>
            <Link
              to={isAuthenticated ? "/student/opensource" : "/register"}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-950 font-medium rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all no-underline text-base"
            >
              <GitBranch className="w-4 h-4" />
              {isAuthenticated ? "My Dashboard" : "Create Account"}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-4 gap-8 mt-16 pt-10 border-t border-gray-200 max-w-lg"
          >
            {[
              { value: "50+", label: "Curated Repos" },
              { value: "20+", label: "Programs" },
              { value: "GSoC", label: "Orgs Tracked" },
              { value: "100%", label: "Free to Use" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gray-950">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Features Grid ── */}
      <section className="relative py-24 md:py-32 bg-[#fafafa]">
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
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">start contributing</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              From zero knowledge to merged pull requests — we've got every step covered.
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
                  className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all h-full group overflow-hidden"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-sm mb-5`}>
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

      {/* ── GSoC Organizations ── */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-medium text-amber-600 uppercase tracking-wider mb-6">
              <Star className="w-3 h-3" />
              GSoC Organizations
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-4">
              Popular <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">GSoC Orgs</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Explore organizations that participate in Google Summer of Code. Start contributing early to build a strong proposal.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {gsocOrgs.map((org, i) => (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 transition-all text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center mx-auto mb-3 border border-amber-100 group-hover:scale-110 transition-transform">
                  <span className="text-lg font-bold text-amber-600">{org.name[0]}</span>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">{org.name}</h4>
                <p className="text-[11px] text-gray-400 mb-2">{org.domain}</p>
                <span className="inline-block px-2 py-0.5 text-[10px] font-medium bg-gray-50 text-gray-500 rounded-full">{org.lang}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden">
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
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">first open-source PR</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-7 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

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
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center justify-center">
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

      {/* ── Sticky Scroll: Programs ── */}
      <StickyProgramsSection />

      {/* ── Why Contribute Section ── */}
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider mb-6">
              <Heart className="w-3 h-3" />
              Why Open Source
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 tracking-tight mb-4">
              Why you should <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">contribute</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { icon: <Flame className="w-5 h-5" />, title: "Build Real-World Skills", desc: "Work on production-level codebases used by millions. Code reviews from top engineers sharpen your skills faster than tutorials.", color: "from-orange-500 to-rose-500" },
              { icon: <Users className="w-5 h-5" />, title: "Grow Your Network", desc: "Collaborate with developers worldwide, get noticed by companies, and build relationships that open doors to jobs and mentorships.", color: "from-blue-500 to-cyan-500" },
              { icon: <FileCode2 className="w-5 h-5" />, title: "Strengthen Your Resume", desc: "Merged PRs to popular repos are the best proof of skill. Recruiters at FAANG and startups actively look for open-source contributors.", color: "from-emerald-500 to-teal-500" },
              { icon: <GraduationCap className="w-5 h-5" />, title: "Land Paid Programs", desc: "GSoC, LFX, Outreachy, and MLH offer stipends of $1,500–$6,600. Prior open-source contributions are the #1 factor in selection.", color: "from-violet-500 to-purple-500" },
            ].map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative bg-white rounded-2xl border border-gray-100 p-6 md:p-8 overflow-hidden hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all h-full"
                >
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-sm mb-5`}>
                      <span className="text-white">{reason.icon}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl" />
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
                Ready to make your
                <br />
                first contribution?
              </h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">
                Browse curated repositories, explore GSoC organizations, and start your open-source journey today. Zero experience required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={handleExplore}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-gray-950 text-base font-semibold rounded-2xl hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2 justify-center"
                >
                  {isAuthenticated ? "Explore Repositories" : "Get Started — It's Free"}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <Link to={isAuthenticated ? "/student/opensource" : "/register"} className="no-underline">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white/10 text-white text-base font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all w-full"
                  >
                    {isAuthenticated ? "My Dashboard" : "Create Account"}
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
