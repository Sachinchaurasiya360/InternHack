import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export const FAQ_ITEMS = [
  {
    question: "What is InternHack?",
    answer:
      "InternHack is an AI-powered career platform built for students. It combines curated internship listings, an AI resume scorer (ATS checker), a LaTeX resume builder, cover letter generator, coding tutorials, DSA practice, aptitude tests, and direct recruiter connections  - all in one place.",
  },
  {
    question: "Is InternHack free for students?",
    answer:
      "Yes  - the core platform is completely free. You can browse jobs, score your resume with our AI ATS checker, access coding tutorials (JavaScript, Python, React, SQL, and more), practice DSA problems, and apply to internships at no cost. A Pro plan unlocks advanced AI features like the LaTeX AI chat and unlimited resume generations.",
  },
  {
    question: "What is an ATS resume score and why does it matter?",
    answer:
      "ATS (Applicant Tracking System) is software that companies use to filter resumes before a human ever sees them. Our AI-powered ATS scorer analyzes your resume against real ATS criteria  - formatting, keyword matching, section structure, and readability  - and gives you an actionable score so you can fix issues before applying.",
  },
  {
    question: "How does InternHack's AI resume checker work?",
    answer:
      "Upload your resume (PDF or DOCX) and optionally paste the job description. Our AI analyzes formatting, keyword relevance, section completeness, and ATS compatibility. You get a detailed score breakdown with specific suggestions to improve each section  - all in under 10 seconds.",
  },
  {
    question: "What coding tutorials and learning resources are available?",
    answer:
      "InternHack offers interactive tutorials for JavaScript, TypeScript, Python, React, Node.js, HTML, CSS, SQL, Django, Flask, and FastAPI. Each course includes in-browser code editors, exercises, and quizzes. We also have 300+ interview preparation questions, DSA problem tracking, and aptitude practice sets.",
  },
  {
    question: "Can recruiters post jobs on InternHack?",
    answer:
      "Absolutely. Recruiters can create a free account (company email required), post internships and entry-level jobs, manage applications with a built-in ATS dashboard, configure custom interview rounds, search our talent pool, and run campus placement drives.",
  },
  {
    question: "How do I build a resume on InternHack?",
    answer:
      "InternHack offers two paths: a drag-and-drop Resume Builder with 6 professional templates, and a LaTeX Resume Editor with 14 templates and AI-powered editing assistance. Both produce ATS-optimized, downloadable PDF resumes you can use immediately.",
  },
  {
    question: "Does InternHack help with interview preparation?",
    answer:
      "Yes. We provide 300+ curated interview questions across 10 categories  - JavaScript, React, Node.js, TypeScript, Python, SQL, System Design, Behavioral, HTML/CSS, and Git/DevOps. Each question includes detailed answers, code examples, follow-up questions, and interviewer tips.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-white/10">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              faq
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Questions,{" "}
              <span className="text-stone-400 dark:text-stone-600">
                answered.
              </span>
            </h2>
            <p className="mt-6 text-base text-stone-600 dark:text-stone-400 leading-relaxed">
              Anything not here, email{" "}
              <a
                href="mailto:sachin@internhack.xyz"
                className="text-stone-900 dark:text-stone-50 border-b border-stone-900 dark:border-stone-50 pb-0.5"
              >
                sachin@internhack.xyz
              </a>
              .
            </p>
          </motion.div>

          <div className="md:col-span-8 space-y-0 border-t border-stone-200 dark:border-white/10">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border-b border-stone-200 dark:border-white/10"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left bg-transparent hover:opacity-80 transition-opacity"
                  >
                    <span className="font-bold text-stone-900 dark:text-stone-50 text-base sm:text-lg">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-stone-500"
                    >
                      <Plus className="w-5 h-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="pb-5 pr-8 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
