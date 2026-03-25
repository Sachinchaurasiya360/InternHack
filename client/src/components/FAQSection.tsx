import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white tracking-tight text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
          Everything you need to know about InternHack and how it helps students
          land their dream internship.
        </p>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
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
                      <div className="px-5 py-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-200 dark:border-gray-700">
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
    </section>
  );
}
