import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Target, BookOpen } from "lucide-react";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { EXAMS, getQuestionsForExam } from "./data/exams";

export default function ExamPrepHubPage() {
  return (
    <div className="relative pb-12">
      <SEO
        title="Company Exam Prep - TCS, Infosys, Wipro, Accenture"
        description="Free practice mocks for TCS NQT, Infosys InfyTQ, Wipro NLTH, Accenture, Capgemini and Cognizant. Timed section-wise tests with explanations."
        keywords="TCS NQT, InfyTQ, Wipro NLTH, Accenture assessment, Capgemini pseudo-code, placement exam"
        canonicalUrl={canonicalUrl("/learn/exam-prep")}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 mb-8"
      >
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white">
          Company Placement Exams
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
          Practice real patterns from TCS NQT, Infosys InfyTQ, Wipro Elite, Accenture, Capgemini and Cognizant.
          Timed section mocks with detailed explanations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {EXAMS.map((exam, i) => {
          const qCount = getQuestionsForExam(exam.id).length;
          return (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <Link
                to={`/learn/exam-prep/${exam.id}`}
                className="group block relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:border-violet-300 dark:hover:border-violet-700 transition-all"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${exam.color} text-white font-bold text-xl flex items-center justify-center mb-4`}>
                    {exam.logo}
                  </div>
                  <h3 className="font-bold text-gray-950 dark:text-white text-lg">{exam.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{exam.tagline}</p>
                  <div className="flex items-center gap-4 mt-4 text-[11px] text-gray-500 dark:text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {exam.totalDuration}m
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {exam.sections.length} sections
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      {qCount} questions
                    </span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-violet-600 dark:text-violet-400">
                    Start practicing
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
