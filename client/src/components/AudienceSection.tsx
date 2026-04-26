import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, GraduationCap, Briefcase, Target } from "lucide-react";

const AUDIENCES = [
  {
    id: "students",
    kicker: "01 / students",
    icon: GraduationCap,
    title: "Campus to company.",
    desc: "From first internship to final placement, we sit next to you through every resume pass and every interview round.",
    bullets: [
      "ATS resume scoring with fix suggestions",
      "DSA, SQL and aptitude practice tracks",
      "Curated internship and FTE roles",
      "GSoC and open source on-ramps",
    ],
    cta: { label: "Start free", href: "/register" },
  },
  {
    id: "pros",
    kicker: "02 / industry pros",
    icon: Briefcase,
    title: "Switch roles, faster.",
    desc: "Refresh your resume, rehearse system design and land the next jump without wasting six months on applications that go nowhere.",
    bullets: [
      "LaTeX resume editor with recruiter formatting",
      "AI cover letters tuned to the JD",
      "Mock interviews with structured feedback",
      "Referrals from 200+ hiring companies",
    ],
    cta: { label: "Upgrade my resume", href: "/register" },
  },
  {
    id: "seekers",
    kicker: "03 / active job seekers",
    icon: Target,
    title: "Stop guessing.",
    desc: "A single workspace that tracks every application, every follow-up and every interview so nothing slips while you are shipping 40 apps a week.",
    bullets: [
      "Unified applications tracker",
      "Job alerts matched to your profile",
      "One-click apply with saved resumes",
      "Skill verification badges for recruiters",
    ],
    cta: { label: "Track my search", href: "/register" },
  },
];

export function AudienceSection() {
  return (
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
            built for three kinds of people
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Whichever lane{" "}
            <span className="text-stone-400 dark:text-stone-600">
              you are in.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
            Students, working engineers, or full-time job hunters, the stack
            bends to your goal without turning into another dashboard you stop
            opening.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-2xl overflow-hidden">
          {AUDIENCES.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col p-8 md:p-10 bg-white dark:bg-stone-950 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-8">
                <span className="h-1.5 w-1.5 bg-lime-400" />
                {a.kicker}
              </div>

              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400 mb-6">
                <a.icon className="w-5 h-5" strokeWidth={2} />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                {a.title}
              </h3>
              <p className="mt-4 text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                {a.desc}
              </p>

              <ul className="mt-8 space-y-3 flex-1">
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

              <Link to={a.cta.href} className="no-underline mt-10">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-stone-900 dark:text-stone-50 border-b border-stone-900 dark:border-stone-50 pb-0.5 group-hover:gap-3 transition-all">
                  {a.cta.label}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
