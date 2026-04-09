import { useParams, Link, Navigate } from "react-router";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Target, ChevronLeft, Play } from "lucide-react";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { getExam, getQuestionsForExam, getQuestionsForSection } from "./data/exams";

export default function ExamDetailPage() {
  const { examId } = useParams();
  const exam = getExam(examId ?? "");
  if (!exam) return <Navigate to="/learn/exam-prep" replace />;

  const totalQuestions = getQuestionsForExam(exam.id).length;

  return (
    <div className="relative pb-12">
      <SEO
        title={`${exam.name} Mock Test`}
        description={`Practice ${exam.name} with timed mocks and detailed explanations. ${exam.sections.length} sections covering ${exam.tagline}.`}
        canonicalUrl={canonicalUrl(`/learn/exam-prep/${exam.id}`)}
      />

      <Link to="/learn/exam-prep" className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mt-6 mb-4">
        <ChevronLeft className="w-3.5 h-3.5" />
        All exams
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-2xl ${exam.color} p-8 mb-6`}
      >
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur text-white font-bold text-2xl flex items-center justify-center">
                {exam.logo}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{exam.name}</h1>
                <p className="text-sm text-white/80">{exam.tagline}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white text-sm">
            <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur">
              <div className="text-[10px] uppercase tracking-wide opacity-80">Duration</div>
              <div className="font-bold flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{exam.totalDuration}m</div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur">
              <div className="text-[10px] uppercase tracking-wide opacity-80">Questions</div>
              <div className="font-bold flex items-center gap-1"><Target className="w-3.5 h-3.5" />{totalQuestions}</div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur">
              <div className="text-[10px] uppercase tracking-wide opacity-80">Cutoff</div>
              <div className="font-bold">{exam.passCutoff}%</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Link
          to={`/learn/exam-prep/${exam.id}/mock`}
          className="group rounded-2xl border-2 border-indigo-300 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/30 p-5 hover:border-indigo-500 transition-colors"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center">
              <Play className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-gray-950 dark:text-white">Full Mock Test</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">{exam.totalDuration} minutes, all sections</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1 text-xs font-medium text-violet-600 dark:text-violet-400 group-hover:gap-2 transition-all">
            Start timed mock
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>
        <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
          <h3 className="font-bold text-gray-950 dark:text-white mb-1">Topic-wise Practice</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Pick a section to practice untimed with instant feedback.</p>
        </div>
      </div>

      <h2 className="text-sm font-bold text-gray-950 dark:text-white mb-3">Sections</h2>
      <div className="space-y-3">
        {exam.sections.map((s, i) => {
          const count = getQuestionsForSection(exam.id, s.id).length;
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i }}
            >
              <Link
                to={`/learn/exam-prep/${exam.id}/section/${s.id}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-950 dark:text-white">{s.name}</h3>
                    <div className="flex items-center gap-3 text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{s.durationMin}m</span>
                      <span>{count} questions</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-violet-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
