import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import {
  ArrowRight,
  Briefcase,
  BarChart3,
  Users,
  Building2,
  CalendarCheck,
  CalendarDays,
  UserCog,
  Wallet,
  TrendingUp,
  ShieldCheck,
  Play,
  Check,
  X,
} from "lucide-react";
import { Link } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import { canonicalUrl } from "../../lib/seo.utils";

const ROTATING_WORDS = ["hire.", "onboard.", "pay.", "review.", "retain."];

const FEATURES: {
  title: string;
  desc: string;
  icon: typeof Briefcase;
  stat: string;
  span?: "single" | "double" | "full";
}[] = [
  {
    title: "Hiring pipelines",
    desc: "Post jobs, design multi-round stages, move candidates from screening to offer without leaving the tab.",
    icon: Briefcase,
    stat: "500+ jobs posted",
    span: "double",
  },
  {
    title: "Interview scheduling",
    desc: "Calendar views, structured panel feedback, per-candidate conversation history.",
    icon: CalendarCheck,
    stat: "panel feedback",
  },
  {
    title: "Employee lifecycle",
    desc: "Onboarding checklists, role changes, offboarding, full timeline per employee.",
    icon: UserCog,
    stat: "end-to-end",
  },
  {
    title: "Leave and attendance",
    desc: "Policies, balances, holiday calendars, check-in tracking with overtime and regularization.",
    icon: CalendarDays,
    stat: "configurable",
  },
  {
    title: "Payroll and reimbursements",
    desc: "Run payroll, process contractors, submit-approve-pay flows, generate payslips.",
    icon: Wallet,
    stat: "auto payslips",
  },
  {
    title: "Performance reviews",
    desc: "Cycles from draft to completion, measurable goals, self and manager assessments.",
    icon: TrendingUp,
    stat: "review cycles",
    span: "double",
  },
  {
    title: "Compliance and workflows",
    desc: "Document acknowledgement, expiry alerts, configurable approval chains for any HR process.",
    icon: ShieldCheck,
    stat: "audit trail",
  },
  {
    title: "HR analytics",
    desc: "Real-time headcount, attrition, leave patterns, attendance trends, payroll summaries.",
    icon: BarChart3,
    stat: "live dashboard",
    span: "full",
  },
];

const AUDIENCES = [
  {
    num: "01",
    title: "Campus recruiters",
    desc: "Running placement season at an IIT, NIT or tier-2 campus. Shortlist 500 resumes by breakfast, slot interviews before lunch.",
    bullets: [
      "Bulk campus drives",
      "Shared recruiter logins",
      "Resume ATS pre-filter",
    ],
  },
  {
    num: "02",
    title: "Startup founders",
    desc: "First ten hires. You do not need an ATS with 200 seats, you need a single tool that gets a shortlist to you by 6 pm.",
    bullets: [
      "Fast job posting",
      "Candidate scoring",
      "Offer and onboarding",
    ],
  },
  {
    num: "03",
    title: "HR teams",
    desc: "Running the whole employee stack, not just hiring. Payroll, leave, reviews, compliance, without ten separate SaaS logins.",
    bullets: [
      "Full HRMS stack",
      "Approval workflows",
      "Compliance document vault",
    ],
  },
];

const STEPS = [
  {
    num: "01",
    title: "Set up your org",
    desc: "Company profile, departments, roles, permissions. 10 minutes.",
    time: "~10 min",
  },
  {
    num: "02",
    title: "Post a role",
    desc: "JD, pipeline stages, panelists. Live in 3 clicks.",
    time: "~3 min",
  },
  {
    num: "03",
    title: "Shortlist and interview",
    desc: "ATS-scored applications, structured interview feedback per round.",
    time: "ongoing",
  },
  {
    num: "04",
    title: "Onboard and run HR",
    desc: "Onboarding checklist, leave policy, payroll, reimbursements, reviews.",
    time: "ongoing",
  },
];

export default function RecruiterLandingPage() {
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setWordIdx((i) => (i + 1) % ROTATING_WORDS.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="font-sans bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50">
      <SEO
        title="For Recruiters and HR Teams"
        description="Post jobs, manage employees, run payroll, track performance, and automate HR workflows. A complete HR platform built into InternHack."
        keywords="HR platform, recruiter dashboard, post jobs, hire students, employee management, payroll, attendance, performance reviews, HR analytics, hiring pipeline"
        canonicalUrl={canonicalUrl("/for-recruiters")}
      />
      <Navbar />

      <section className="relative w-full overflow-hidden bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-white/10">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(23,23,23,0.04) 1px, transparent 1px)",
            backgroundSize: "140px 100%",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "140px 100%",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-10 md:pt-40 md:pb-14 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500"
          >
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 bg-lime-400"
            />
            for recruiters, founders and hr teams
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
          >
            One stack to
            <br />
            <span className="relative inline-block align-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[wordIdx]}
                  initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 inline-block"
                >
                  {ROTATING_WORDS[wordIdx]}
                </motion.span>
              </AnimatePresence>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed"
          >
            Post roles, screen resumes, schedule panels, run payroll, ship
            performance reviews. One workspace, not fourteen SaaS tabs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Link to="/recruiter/register" className="no-underline">
              <button className="group inline-flex items-center gap-2 px-6 py-3.5 bg-lime-400 text-stone-950 rounded-lg text-sm font-bold hover:bg-lime-300 transition-colors cursor-pointer border-0">
                Start hiring free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
            <a href="#how-it-works" className="no-underline">
              <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-stone-900 dark:text-stone-100 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer">
                <Play className="w-4 h-4 fill-current" />
                See how it works
              </button>
            </a>
          </motion.div>

          <HeroStats />
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-white/10">
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
              who it is for
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Three hiring shapes,{" "}
              <span className="text-stone-400 dark:text-stone-600">
                one stack.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
              From a single founder making the first five hires to a campus
              team running three weeks of placement drives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-2xl overflow-hidden">
            {AUDIENCES.map((a, i) => (
              <motion.div
                key={a.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col p-8 md:p-10 bg-white dark:bg-stone-950 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-8">
                  <span className="h-1.5 w-1.5 bg-lime-400" />
                  {a.num}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                  {a.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed flex-1">
                  {a.desc}
                </p>
                <ul className="mt-8 space-y-3">
                  {a.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-300"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 bg-lime-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-white/10">
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
              the hr stack
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Eight modules.{" "}
              <span className="text-stone-400 dark:text-stone-600">
                One workspace.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
              Everything between the first job post and the annual review.
              Nothing bolted on as a plugin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-2xl overflow-hidden">
            {FEATURES.map((f) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4 }}
                className={f.span === "full" ? "md:col-span-3" : f.span === "double" ? "md:col-span-2" : ""}
              >
                <div className="relative h-full flex flex-col p-8 bg-white dark:bg-stone-950 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors">
                  <div className="flex items-center justify-between mb-8">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400">
                      <f.icon className="w-4.5 h-4.5" strokeWidth={2} />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                      {f.stat}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex-1">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="relative py-24 md:py-32 bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-white/10 scroll-mt-20"
      >
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Four steps.{" "}
              <span className="text-stone-400 dark:text-stone-600">
                First hire this week.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-2xl overflow-hidden">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative flex flex-col p-8 bg-white dark:bg-stone-950"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                    step / {s.num}
                  </span>
                  <span className="text-xs font-mono text-lime-600 dark:text-lime-400">
                    {s.time}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              pricing
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Free to start.{" "}
              <span className="text-stone-400 dark:text-stone-600">
                Paid when you scale.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto leading-relaxed">
              Every paid plan ships with a 7-day free trial. No card needed,
              no auto-renewal surprise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-24">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={
                  plan.highlighted
                    ? "relative rounded-2xl border-2 border-lime-400/50 shadow-2xl shadow-lime-400/10 bg-white dark:bg-stone-900 flex flex-col"
                    : "relative rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 flex flex-col"
                }
              >
                {plan.highlighted && (
                  <>
                    <div className="absolute top-1/2 inset-x-0 mx-auto h-12 w-full bg-lime-400/40 rounded-2xl blur-3xl -z-10" />
                    <div className="absolute -top-3 left-6 inline-flex items-center gap-2 px-3 py-1 bg-lime-400 text-stone-950 rounded-md text-xs font-mono uppercase tracking-widest font-bold">
                      <span className="h-1.5 w-1.5 bg-stone-950" />
                      most popular
                    </div>
                  </>
                )}

                <div className="p-8">
                  <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-3">
                    {plan.name}
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6 min-h-10">
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline gap-1 mb-2">
                    {plan.price === 0 ? (
                      <>
                        <span className="text-sm font-medium text-stone-400 dark:text-stone-600">
                          ₹
                        </span>
                        <span className="text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                          0
                        </span>
                        <span className="text-sm font-medium text-stone-400 dark:text-stone-600 ml-1">
                          {plan.priceLabel}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-sm font-medium text-stone-400 dark:text-stone-600">
                          ₹
                        </span>
                        <span className="text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
                          {plan.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-sm font-medium text-stone-400 dark:text-stone-600 ml-1">
                          {plan.priceLabel}
                        </span>
                      </>
                    )}
                  </div>

                  {plan.trial ? (
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-lime-600 dark:text-lime-400">
                      <span className="h-1 w-1 bg-lime-400" />
                      {plan.trial}
                    </div>
                  ) : (
                    <div className="mt-2 text-xs font-mono text-stone-500">
                      billed forever, no card
                    </div>
                  )}
                </div>

                <div className="px-8">
                  <Link to={plan.cta.href} className="no-underline block">
                    <button
                      className={
                        plan.highlighted
                          ? "group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-lime-400 text-stone-950 rounded-lg text-sm font-bold hover:bg-lime-300 transition-colors cursor-pointer border-0"
                          : "group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-lg text-sm font-bold hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors cursor-pointer border-0"
                      }
                    >
                      {plan.cta.label}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </Link>
                </div>

                <div className="p-8 pt-6 flex-1">
                  <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4">
                    Includes
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5">
                        {f.included ? (
                          <Check
                            className={
                              plan.highlighted
                                ? "w-4 h-4 mt-0.5 shrink-0 text-lime-600 dark:text-lime-400"
                                : "w-4 h-4 mt-0.5 shrink-0 text-stone-500"
                            }
                          />
                        ) : (
                          <X className="w-4 h-4 mt-0.5 shrink-0 text-stone-300 dark:text-white/20" />
                        )}
                        <span
                          className={
                            f.included
                              ? "text-sm text-stone-700 dark:text-stone-300"
                              : "text-sm text-stone-400 dark:text-stone-600 line-through"
                          }
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-stone-900 dark:border-white/10 bg-stone-900 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
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
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
                  Your next hire{" "}
                  <span className="text-stone-500">
                    starts with one post.
                  </span>
                </h2>
                <p className="mt-6 text-base md:text-lg text-stone-400 max-w-lg leading-relaxed">
                  Set up your org, post a role, get ATS-scored shortlists by
                  morning. Free forever for the first two seats.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Link to="/recruiter/register" className="no-underline">
                    <button className="group inline-flex items-center gap-2 px-6 py-3.5 bg-lime-400 text-stone-950 rounded-lg text-sm font-bold hover:bg-lime-300 transition-colors cursor-pointer border-0">
                      Start hiring free
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </Link>
                  <Link to="/jobs" className="no-underline">
                    <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-transparent border border-white/20 hover:bg-white/5 transition-colors cursor-pointer">
                      Browse talent
                    </button>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-2 p-10 md:p-16 flex flex-col justify-center gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold tracking-tight text-white tabular-nums">
                    500<span className="text-lime-400">+</span>
                  </div>
                  <div className="mt-1 text-xs font-mono uppercase tracking-widest text-stone-500">
                    roles posted
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold tracking-tight text-white tabular-nums">
                    14<span className="text-lime-400">/</span>14
                  </div>
                  <div className="mt-1 text-xs font-mono uppercase tracking-widest text-stone-500">
                    hr modules shipped
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold tracking-tight text-white tabular-nums">
                    40<span className="text-lime-400">%</span>
                  </div>
                  <div className="mt-1 text-xs font-mono uppercase tracking-widest text-stone-500">
                    faster time-to-hire
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function HeroStats() {
  const [values, setValues] = useState({ posts: 0, hires: 0, modules: 0 });
  useEffect(() => {
    const t = setTimeout(
      () => setValues({ posts: 512, hires: 2340, modules: 14 }),
      700,
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-16 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-xl overflow-hidden max-w-3xl mx-auto"
    >
      <Cell icon={Briefcase} value={values.posts} label="roles posted" suffix="+" />
      <Cell icon={Users} value={values.hires} label="hires shipped" suffix="+" />
      <Cell icon={Building2} value={values.modules} label="hr modules" />
    </motion.div>
  );
}

function Cell({
  icon: Icon,
  value,
  label,
  suffix,
}: {
  icon: typeof Briefcase;
  value: number;
  label: string;
  suffix?: string;
}) {
  return (
    <div className="bg-stone-50 dark:bg-stone-950 p-5 text-left">
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
        <Icon className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
        {label}
      </div>
      <div className="text-3xl md:text-4xl font-bold tracking-tight tabular-nums text-stone-900 dark:text-stone-50">
        <NumberFlow value={value} />
        {suffix && (
          <span className="text-lime-500 dark:text-lime-400">{suffix}</span>
        )}
      </div>
    </div>
  );
}

type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  priceLabel: string;
  trial: string | null;
  features: { text: string; included: boolean }[];
  cta: { label: string; href: string };
  highlighted?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For a single founder making the first hires.",
    price: 0,
    priceLabel: "/forever",
    trial: null,
    features: [
      { text: "1 recruiter seat", included: true },
      { text: "2 active job posts", included: true },
      { text: "Basic ATS pipeline", included: true },
      { text: "Email-only notifications", included: true },
      { text: "Payroll, leave, reviews", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Priority support", included: false },
    ],
    cta: { label: "Start free", href: "/recruiter/register" },
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Small teams running regular hiring cycles.",
    price: 2999,
    priceLabel: "/mo",
    trial: "7-day free trial, no card",
    features: [
      { text: "5 recruiter seats", included: true },
      { text: "Unlimited job posts", included: true },
      { text: "Multi-round pipelines and panels", included: true },
      { text: "Payroll, leave, attendance", included: true },
      { text: "Performance review cycles", included: true },
      { text: "HR analytics dashboard", included: true },
      { text: "Priority support", included: false },
    ],
    cta: { label: "Start 7-day trial", href: "/recruiter/register?plan=growth" },
    highlighted: true,
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Campus drives and 50+ employee orgs.",
    price: 9999,
    priceLabel: "/mo",
    trial: "7-day free trial, no card",
    features: [
      { text: "Unlimited recruiter seats", included: true },
      { text: "Unlimited job posts", included: true },
      { text: "Campus drives and bulk hiring", included: true },
      { text: "Full HR stack, all 14 modules", included: true },
      { text: "Compliance and approval workflows", included: true },
      { text: "SSO, audit logs, RBAC", included: true },
      { text: "Dedicated success manager", included: true },
    ],
    cta: { label: "Start 7-day trial", href: "/recruiter/register?plan=scale" },
  },
];
