import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAuthStore } from "../../../lib/auth.store";
import {
  ArrowRight,
  CheckCircle,
  GitBranch,
  BookOpen,
  Users,
  Trophy,
  Code2,
  Rocket,
  GraduationCap,
  Flame,
  FileCode2,
  GitPullRequest,
  MessagesSquare,
  Plus,
} from "lucide-react";

// ─── Features ─────────────────────────────────────────────────
const features = [
  {
    icon: <BookOpen className="w-4.5 h-4.5" />,
    title: "Open Source Guidance",
    description: "Step-by-step guides to help you understand open-source contribution workflows - from forking a repo to creating pull requests.",
  },
  {
    icon: <Code2 className="w-4.5 h-4.5" />,
    title: "Curated Repository Discovery",
    description: "Explore hand-picked repositories tagged by difficulty, language, and domain - find beginner-friendly projects in seconds.",
  },
  {
    icon: <Trophy className="w-4.5 h-4.5" />,
    title: "GSoC Selected Repos",
    description: "Browse repositories that have been selected for Google Summer of Code. Start contributing early and build a strong proposal.",
  },
  {
    icon: <GraduationCap className="w-4.5 h-4.5" />,
    title: "Program Tracker",
    description: "Stay on top of deadlines for GSoC, LFX, MLH, Outreachy, Rails Girls, and 20+ other open-source programs.",
  },
  {
    icon: <GitPullRequest className="w-4.5 h-4.5" />,
    title: "First PR Roadmap",
    description: "Follow our guided checklist to land your first pull request - pick an issue, set up locally, submit, and get merged.",
  },
  {
    icon: <MessagesSquare className="w-4.5 h-4.5" />,
    title: "Community & Mentorship",
    description: "Connect with mentors, join contribution sprints, and get code reviews from experienced maintainers in the community.",
  },
];

// ─── Programs ─────────────────────────────────────────────────
const programs = [
  {
    name: "Google Summer of Code",
    short: "GSoC",
    description: "A global program focused on bringing more developers into open-source. Students work on 10-week projects with stipends.",
    color: "text-red-600 bg-red-50 dark:bg-red-900/20",
    items: ["Mentored coding projects", "Open to students worldwide", "Annual summer program", "Stipend-based contribution"],
  },
  {
    name: "LFX Mentorship",
    short: "LFX",
    description: "Linux Foundation's mentorship program connecting developers with cloud-native and open-source projects.",
    color: "text-blue-600 bg-blue-50 dark:bg-blue-900/20",
    items: ["Linux Foundation projects", "Cloud-native focus", "3-month sprints", "Paid mentorship"],
  },
  {
    name: "MLH Fellowship",
    short: "MLH",
    description: "12-week internship alternative where fellows contribute to open-source projects under experienced mentors.",
    color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20",
    items: ["12-week program", "Internship alternative", "Pod-based learning", "Multiple tracks"],
  },
  {
    name: "Outreachy",
    short: "Outreachy",
    description: "Paid internships in open-source for people subject to systemic bias, promoting diversity in tech.",
    color: "text-teal-600 bg-teal-50 dark:bg-teal-900/20",
    items: ["Diversity-focused", "Paid internships", "Remote-friendly", "Multiple FOSS projects"],
  },
  {
    name: "Hacktoberfest",
    short: "Hacktoberfest",
    description: "Annual month-long celebration of open source in October. Contribute 4 quality PRs and earn swag.",
    color: "text-purple-600 bg-purple-50 dark:bg-purple-900/20",
    items: ["Every October", "Beginner-friendly", "Swag rewards", "Community-driven"],
  },
  {
    name: "GirlScript Summer of Code",
    short: "GSSoC",
    description: "India's premier 3-month open-source program for beginners, with leaderboards, points, and mentorship.",
    color: "text-pink-600 bg-pink-50 dark:bg-pink-900/20",
    items: ["India-focused", "3-month program", "Beginner-friendly", "Leaderboard system"],
  },
];

// ─── Steps ────────────────────────────────────────────────────
const steps = [
  {
    icon: <BookOpen className="w-4.5 h-4.5" />,
    title: "Learn the Basics",
    description: "Understand Git, GitHub workflows, pull requests, and open-source licensing through our guided tutorials.",
  },
  {
    icon: <Rocket className="w-4.5 h-4.5" />,
    title: "Find Your Project",
    description: "Browse curated repos by difficulty, language, and domain. Filter for 'good first issues' and projects that match your skills.",
  },
  {
    icon: <GitPullRequest className="w-4.5 h-4.5" />,
    title: "Make Your First PR",
    description: "Fork, clone, branch, commit, and push - follow our step-by-step checklist and submit your first pull request.",
  },
];

// ─── Hidden-Gem Repos ────────────────────────────────────────
const hiddenGemRepos = [
  { name: "Cal.com", lang: "TypeScript", domain: "Scheduling", yc: "W21" },
  { name: "Infisical", lang: "TypeScript", domain: "Secret Management", yc: "W23" },
  { name: "Trigger.dev", lang: "TypeScript", domain: "Background Jobs", yc: "W23" },
  { name: "Novu", lang: "TypeScript", domain: "Notifications", yc: "W22" },
  { name: "Hatchet", lang: "Go", domain: "Task Orchestration", yc: "W24" },
  { name: "Hanko", lang: "Go", domain: "Passkey Auth", yc: "W23" },
  { name: "Twenty", lang: "TypeScript", domain: "CRM" },
  { name: "Pocketbase", lang: "Go", domain: "Backend-in-a-File" },
  { name: "Hoppscotch", lang: "TypeScript", domain: "API Testing" },
  { name: "Flagsmith", lang: "Python", domain: "Feature Flags" },
  { name: "Plane", lang: "TypeScript", domain: "Project Mgmt" },
  { name: "Khoj", lang: "Python", domain: "AI Assistant" },
];

// ─── Shared card animation variant ───────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

// ─── Sticky Horizontal Scroll: Programs ──────────────────────
function StickyProgramsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["15%", "-65%"]);

  return (
    <section className="relative bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-white/10">
      <div ref={containerRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="max-w-6xl mx-auto w-full px-6 mb-8">
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
                <span className="h-1.5 w-1.5 bg-lime-400" />
                programs
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
                Apply to top open-source{" "}
                <span className="text-stone-400 dark:text-stone-600">programs.</span>
              </h2>
              <p className="mt-3 text-base text-stone-500">
                Kickstart your open-source career with paid stipends and mentorship.
              </p>
            </div>
          </div>

          <motion.div style={{ x }} className="flex gap-4 pl-[10%]">
            {programs.map((prog) => (
              <motion.div
                key={prog.name}
                whileHover={{ y: -4 }}
                className="min-w-72 max-w-72 p-6 bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-white/10 shrink-0 hover:bg-white dark:hover:bg-stone-800 hover:border-stone-300 dark:hover:border-white/20 transition-all"
              >
                <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-semibold mb-4 ${prog.color}`}>
                  <Trophy className="w-3 h-3" />
                  {prog.short}
                </div>
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-50 mb-2">{prog.name}</h3>
                <p className="text-sm text-stone-500 mb-4 leading-relaxed">{prog.description}</p>
                <ul className="space-y-2">
                  {prog.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                      <CheckCircle className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400 shrink-0" />
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
            Open Source Discovery Platform
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none text-stone-900 dark:text-stone-50"
          >
            Discover &amp;
            <br />
            <span className="relative inline-block align-baseline">
              <span className="relative z-10">Contribute.</span>
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
            Your complete guide to open-source — find beginner-friendly repositories, track GSoC orgs,
            discover programs like LFX and Outreachy, and make your first pull request with confidence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={handleExplore}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-lime-400 text-stone-950 rounded-lg text-sm font-bold hover:bg-lime-300 transition-colors cursor-pointer border-0"
            >
              {isAuthenticated ? "Explore Repos" : "Start free"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <Link to={isAuthenticated ? "/student/opensource" : "/register"} className="no-underline">
              <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-stone-900 dark:text-stone-100 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer">
                <GitBranch className="w-4 h-4" />
                {isAuthenticated ? "My Dashboard" : "Create Account"}
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-10 border-t border-stone-200 dark:border-white/10 max-w-lg"
          >
            {[
              { value: "520", suffix: "+", label: "GSoC Orgs" },
              { value: "20", suffix: "+", label: "Programs" },
              { value: "30", suffix: "+", label: "Hidden Gems" },
              { value: "100", suffix: "%", label: "Free to Use" },
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

      {/* ── Features Grid ── */}
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
              what's inside
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Everything you need.{" "}
              <span className="text-stone-400 dark:text-stone-600">
                Start contributing.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
              From zero knowledge to merged pull requests — every step covered.
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
                  <h3 className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Hidden Gem Repos ── */}
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
              hidden gems
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Underrated repos{" "}
              <span className="text-stone-400 dark:text-stone-600">worth contributing to.</span>
            </h2>
            <p className="mt-6 text-base text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
              Skip the mega-repos. These YC-backed startups and indie projects welcome first-time contributors and move fast.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl">
            {hiddenGemRepos.map((repo, i) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i, 12) * 0.04, duration: 0.4 }}
                className="rounded-xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 p-4 hover:bg-white dark:hover:bg-stone-800 hover:border-stone-300 dark:hover:border-white/20 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-stone-900 dark:bg-stone-700 flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-stone-50">{repo.name[0]}</span>
                </div>
                <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-0.5 truncate">{repo.name}</h4>
                <p className="text-xs text-stone-500 mb-2">{repo.domain}</p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="inline-block px-1.5 py-0.5 text-[10px] font-mono bg-stone-100 dark:bg-stone-800 text-stone-500 rounded">{repo.lang}</span>
                  {repo.yc && (
                    <span className="inline-block px-1.5 py-0.5 text-[10px] font-bold bg-lime-400/20 text-lime-700 dark:text-lime-400 rounded">
                      YC {repo.yc}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Add Your Repo */}
            <motion.a
              href="mailto:mrsachinchaurasiya@gmail.com?subject=Add%20My%20Repo%20to%20InternHack%20Open%20Source&body=Hi%20InternHack%20Team%2C%0A%0AI%27d%20like%20to%20submit%20my%20open-source%20repo%20for%20listing%20on%20the%20platform.%0A%0ARepo%20Name%3A%20%0AGitHub%20URL%3A%20%0ALanguage%3A%20%0AShort%20Description%3A%20%0AWhy%20it%27s%20great%20for%20contributors%3A%20%0A%0AThanks!"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="rounded-xl border border-dashed border-stone-300 dark:border-white/15 p-4 hover:border-lime-400 dark:hover:border-lime-400 transition-all flex flex-col items-center justify-center gap-2 no-underline cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center group-hover:bg-lime-400/20 transition-colors">
                <Plus className="w-4 h-4 text-stone-400 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors" />
              </div>
              <h4 className="text-xs font-semibold text-stone-500 group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors text-center">Add Your Repo</h4>
              <p className="text-[10px] text-stone-400 text-center">Request to list your project</p>
            </motion.a>
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
              <span className="text-stone-400 dark:text-stone-600">first open-source PR.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative max-w-4xl">
            {/* Connecting line */}
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

      {/* ── Sticky Scroll: Programs ── */}
      <StickyProgramsSection />

      {/* ── Why Contribute ── */}
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
              why it matters
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Why you should{" "}
              <span className="text-stone-400 dark:text-stone-600">contribute to open source.</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-2xl overflow-hidden max-w-4xl"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <Flame className="w-4.5 h-4.5" />, title: "Build Real-World Skills", desc: "Work on production-level codebases used by millions. Code reviews from top engineers sharpen your skills faster than tutorials." },
              { icon: <Users className="w-4.5 h-4.5" />, title: "Grow Your Network", desc: "Collaborate with developers worldwide, get noticed by companies, and build relationships that open doors to jobs and mentorships." },
              { icon: <FileCode2 className="w-4.5 h-4.5" />, title: "Strengthen Your Resume", desc: "Merged PRs to popular repos are the best proof of skill. Recruiters at FAANG and startups actively look for open-source contributors." },
              { icon: <GraduationCap className="w-4.5 h-4.5" />, title: "Land Paid Programs", desc: "GSoC, LFX, Outreachy, and MLH offer stipends of $1,500–$6,600. Prior open-source contributions are the #1 factor in selection." },
            ].map((reason) => (
              <motion.div key={reason.title} variants={cardVariants}>
                <div className="h-full flex flex-col p-8 bg-white dark:bg-stone-950 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400 mb-8">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">{reason.title}</h3>
                  <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex-1">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
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
                  Ready to make your{" "}
                  <span className="text-stone-500">first contribution?</span>
                </h2>
                <p className="mt-6 text-base text-stone-400 max-w-lg leading-relaxed">
                  Browse curated repositories, explore GSoC organizations, and start your open-source journey today. Zero experience required.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleExplore}
                    className="group inline-flex items-center gap-2 px-6 py-3.5 bg-lime-400 text-stone-950 rounded-lg text-sm font-bold hover:bg-lime-300 transition-colors cursor-pointer border-0"
                  >
                    {isAuthenticated ? "Explore Repositories" : "Get Started — It's Free"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <Link to={isAuthenticated ? "/student/opensource" : "/register"} className="no-underline">
                    <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-transparent border border-white/20 hover:bg-white/5 transition-colors cursor-pointer">
                      {isAuthenticated ? "My Dashboard" : "Create Account"}
                    </button>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-2 p-10 md:p-16 flex flex-col justify-center gap-8">
                {[
                  { value: "520", suffix: "+", label: "GSoC orgs indexed" },
                  { value: "20", suffix: "+", label: "programs tracked" },
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
