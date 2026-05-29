import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";

import { motion } from "framer-motion";

import {
  Sparkles,
  ArrowRight,
  Cpu,
  Globe,
  Target,
  FileText,
  Briefcase,
  Mic,
  Search,
  LayoutDashboard,
  Users,
  Star,
  CheckCircle2,
  Shield,
  Rocket,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI Career Intelligence",
    description:
      "Advanced AI workflows helping students prepare smarter and recruiters hire faster.",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    icon: FileText,
    title: "ATS Resume Analysis",
    description:
      "Real-time resume scoring with optimization suggestions.",
    size: "lg:col-span-1",
  },
  {
    icon: Mic,
    title: "Mock Interviews",
    description:
      "AI-generated interviews with instant feedback.",
    size: "lg:col-span-1",
  },
  {
    icon: Search,
    title: "Smart Job Discovery",
    description:
      "Find internships and jobs tailored to your profile.",
    size: "lg:col-span-1",
  },
  {
    icon: Briefcase,
    title: "Recruiter Workflows",
    description:
      "Streamlined hiring with collaborative workflows.",
    size: "lg:col-span-2",
  },
  {
    icon: LayoutDashboard,
    title: "Modern Dashboards",
    description:
      "Beautiful dashboards built for recruiters and students.",
    size: "lg:col-span-1",
  },
];

const stats = [
  { value: "10K+", label: "Students" },
  { value: "500+", label: "Recruiters" },
  { value: "50K+", label: "Applications" },
  { value: "95%", label: "Success Rate" },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa] dark:bg-black text-black dark:text-white">
      <SEO
        title="About Us"
        description="Learn more about InternHack."
      />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-indigo-500/15 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-purple-500/10 blur-[120px] rounded-full" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* HERO */}
        <section className="relative px-6 pt-36 pb-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl mb-8">
                  <Sparkles size={15} className="text-indigo-500" />

                  <span className="text-sm text-black/70 dark:text-white/70">
                    The Future of Hiring
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
                  Building the{" "}
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent">
                    AI-powered
                  </span>{" "}
                  career ecosystem.
                </h1>

                <p className="text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed mb-10 max-w-2xl">
                  InternHack helps students prepare smarter, recruiters hire
                  faster, and companies discover talent using intelligent
                  workflows and modern AI systems.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-all duration-300"
                  >
                    Get Started

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />
                  </a>

                  <a
                    href="/"
                    className="px-7 py-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl hover:bg-white dark:hover:bg-white/10 transition-all duration-300"
                  >
                    Explore Platform
                  </a>
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Floating Cards */}
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full" />

                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full" />

                  <div className="relative rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_60px_rgba(99,102,241,0.15)]">
                    <div className="grid grid-cols-2 gap-5">
                      {[
                        {
                          icon: Rocket,
                          title: "AI Matching",
                        },
                        {
                          icon: Shield,
                          title: "ATS Scoring",
                        },
                        {
                          icon: Users,
                          title: "Recruitment",
                        },
                        {
                          icon: Zap,
                          title: "Automation",
                        },
                      ].map((item, index) => {
                        const Icon = item.icon;

                        return (
                          <motion.div
                            key={index}
                            whileHover={{ y: -6 }}
                            className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 backdrop-blur-xl"
                          >
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4">
                              <Icon size={24} />
                            </div>

                            <h3 className="font-semibold">
                              {item.title}
                            </h3>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 5,
                      }}
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0d0d0d] shadow-2xl backdrop-blur-xl"
                    >
                      <span className="font-semibold">
                        Trusted by 10K+ students
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="px-6 pb-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-8 shadow-sm"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />

                  <div className="relative z-10">
                    <h3 className="text-4xl md:text-5xl font-black mb-2">
                      {stat.value}
                    </h3>

                    <p className="text-black/60 dark:text-white/60">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="px-6 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl mb-6">
                <Star size={14} className="text-indigo-500" />

                <span className="text-sm">
                  Platform Features
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                Designed for the modern hiring era.
              </h2>

              <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
                Powerful AI tools and intelligent workflows built for students
                and recruiters.
              </p>
            </div>

            {/* BENTO GRID */}
            <div className="grid lg:grid-cols-4 auto-rows-[260px] gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    className={`group relative overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-2xl p-8 shadow-sm ${feature.size}`}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10" />

                    <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-6">
                        <Icon size={28} />
                      </div>

                      <h3 className="text-2xl font-bold mb-4">
                        {feature.title}
                      </h3>

                      <p className="text-black/60 dark:text-white/60 leading-relaxed">
                        {feature.description}
                      </p>

                      <div className="mt-auto pt-6">
                        <div className="w-full h-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-60" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-[3rem] border border-black/10 dark:border-white/10 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/10 dark:from-indigo-500/20 dark:via-purple-500/10 dark:to-cyan-500/10 backdrop-blur-3xl p-12 md:p-20">
              <div className="absolute top-0 right-0 w-[25rem] h-[25rem] bg-indigo-500/20 blur-[120px] rounded-full" />

              <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-purple-500/20 blur-[120px] rounded-full" />

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/40 dark:bg-white/10 mb-8 backdrop-blur-xl">
                  <CheckCircle2 size={38} />
                </div>

                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                  Ready to build your future?
                </h2>

                <p className="max-w-3xl mx-auto text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed mb-10">
                  Join InternHack and experience AI-powered hiring,
                  preparation, and recruitment workflows designed for the next
                  generation.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-all duration-300"
                  >
                    Contact Us

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />
                  </a>

                  <a
                    href="/"
                    className="px-8 py-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl hover:bg-white dark:hover:bg-white/10 transition-all duration-300"
                  >
                    Explore Platform
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

