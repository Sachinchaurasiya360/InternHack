import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Users,
  CalendarCheck,
  Zap,
  Code2,
  Target,
  MessageSquare,
  Bell,
  ChevronRight,
} from "lucide-react";
import { SEO } from "../../../../components/SEO";
import { canonicalUrl } from "../../../../lib/seo.utils";
import toast from "../../../../components/ui/toast";

const FEATURES = [
  {
    icon: Users,
    title: "1:1 Mentorship",
    desc: "Dedicated sessions with engineers from top product and service companies.",
    stat: "Coming soon",
  },
  {
    icon: Zap,
    title: "Smart Matching",
    desc: "Paired by goal, track, and availability — not just a calendar slot.",
    stat: "AI-powered",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Booking",
    desc: "Sessions that fit your prep schedule, not the other way around.",
    stat: "30 / 60 min",
  },
  {
    icon: Code2,
    title: "DSA & System Design",
    desc: "Live problem-solving walkthroughs, pattern drills, and architecture reviews.",
    stat: "All levels",
  },
  {
    icon: Target,
    title: "Career Strategy",
    desc: "Resume reviews, referral intros, and role-targeting from people inside.",
    stat: "Hands-on",
  },
  {
    icon: MessageSquare,
    title: "Mock Interviews",
    desc: "Realistic loops with feedback calibrated to the exact company you're targeting.",
    stat: "Company-specific",
  },
] as const;

const STEPS = [
  {
    n: "01",
    title: "Join the waitlist",
    desc: "Drop your email. We'll reach out with an invite before general launch.",
  },
  {
    n: "02",
    title: "Get matched",
    desc: "Tell us your goal, target role, and current level. We find the right mentor.",
  },
  {
    n: "03",
    title: "Book a session",
    desc: "Pick a slot, show up, get real feedback. First session is on us.",
  },
] as const;

const COMPANIES = [
  "Google", "Microsoft", "Amazon", "Flipkart", "Swiggy",
  "Zepto", "PhonePe", "Razorpay", "Atlassian", "Adobe",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function MentorMatchingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = () => {
    if (!email.trim()) {
      toast.error("Enter your email to get notified");
      return;
    }
    toast.success("You're on the list. We'll reach out when mentors go live.");
    setEmail("");
    setSubmitted(true);
  };

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title="Mentor Matching — Coming Soon | InternHack"
        description="Connect with experienced mentors from top tech companies for 1:1 guidance on DSA, system design, career strategy, and interview prep."
        canonicalUrl={canonicalUrl("/learn/mentors")}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden border-b border-stone-200 dark:border-white/10">
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

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-0 md:pt-28 text-center">
          {/* Status chip */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-8"
          >
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 bg-lime-400"
            />
            learn / mentors · coming soon
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-stone-900 dark:text-stone-50"
          >
            Learn from
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">engineers</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 md:h-5 bg-lime-400 origin-left z-0"
              />
            </span>
            <span className="text-stone-400 dark:text-stone-600"> who did it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-8 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto leading-relaxed"
          >
            1:1 sessions with engineers from top companies, on DSA, system
            design, career strategy, and interview loops. We're onboarding
            mentors now.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-stone-900 dark:text-stone-100 cursor-pointer group"
            onClick={() =>
              document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Join the waitlist
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="mt-14 grid grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-t-xl overflow-hidden max-w-2xl mx-auto"
          >
            {[
              { value: "30+", label: "mentors onboarding" },
              { value: "6", label: "companies represented" },
              { value: "Free", label: "first session" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-stone-50 dark:bg-stone-950 p-4 sm:p-5 flex flex-col items-center"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 leading-snug text-center">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Company strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-stone-200 dark:border-white/10 bg-stone-100/60 dark:bg-white/[0.02] py-5 mt-0"
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mr-2">
              Mentors from
            </span>
            {COMPANIES.map((c) => (
              <span key={c} className="text-sm font-semibold text-stone-500 dark:text-stone-500">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section className="relative py-24 md:py-28 border-b border-stone-200 dark:border-white/10">
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
              Three steps.{" "}
              <span className="text-stone-400 dark:text-stone-600">
                One free session.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-2xl overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {STEPS.map((step) => (
              <motion.div key={step.n} variants={cardVariants}>
                <div className="relative h-full flex flex-col p-8 bg-white dark:bg-stone-950">
                  <div className="text-4xl font-bold tracking-tight text-lime-400 leading-none mb-8 tabular-nums">
                    {step.n}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Features grid ─────────────────────────────────────── */}
      <section className="relative py-24 md:py-28 border-b border-stone-200 dark:border-white/10">
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
              what you get
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Real guidance.{" "}
              <span className="text-stone-400 dark:text-stone-600">
                Zero fluff.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
              Not generic advice. Sessions built around your resume, your target
              companies, and where you actually are in prep.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-2xl overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {FEATURES.map((f) => (
              <motion.div key={f.title} variants={cardVariants}>
                <div className="relative h-full flex flex-col p-8 bg-white dark:bg-stone-950">
                  <div className="flex items-center justify-between mb-8">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400">
                      <f.icon className="w-4 h-4" strokeWidth={2} />
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
          </motion.div>
        </div>
      </section>

      {/* ── Waitlist CTA ──────────────────────────────────────── */}
      <section id="waitlist" className="relative py-24 md:py-32 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-stone-900 dark:border-white/10 bg-stone-900 dark:bg-stone-900 overflow-hidden"
          >
            {/* Dot grid texture */}
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
              {/* Left: copy */}
              <div className="md:col-span-3 p-10 md:p-16 border-b md:border-b-0 md:border-r border-white/10">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400 mb-6">
                  <motion.span
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    className="h-1.5 w-1.5 bg-lime-400"
                  />
                  join the waitlist · no spam
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
                  Be first when{" "}
                  <span className="text-stone-500">mentors go live.</span>
                </h2>

                <p className="mt-6 text-base text-stone-400 max-w-md leading-relaxed">
                  Drop your email and we'll reach out the moment mentor booking
                  opens. First sessions are free.
                </p>
              </div>

              {/* Right: form */}
              <div className="md:col-span-2 p-10 md:p-16 flex flex-col justify-center gap-6">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 rounded-xl bg-lime-400/15 border border-lime-400/30 flex items-center justify-center mx-auto mb-4">
                        <Bell className="w-5 h-5 text-lime-400" />
                      </div>
                      <p className="text-white font-semibold mb-1">
                        You're on the list.
                      </p>
                      <p className="text-sm text-stone-400">
                        We'll email you when mentor booking opens.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col gap-3"
                    >
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleNotify()}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg focus:outline-none focus:border-lime-400 transition-colors text-sm text-white placeholder-stone-600"
                      />
                      <button
                        onClick={handleNotify}
                        className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-lime-400 text-stone-950 rounded-lg text-sm font-bold hover:bg-lime-300 transition-colors cursor-pointer border-0"
                      >
                        <Bell className="w-4 h-4" />
                        Notify me when live
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform ml-auto" />
                      </button>
                      <p className="text-xs text-stone-600 text-center">
                        First session free · no credit card
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
