import { useState } from "react";
import { motion } from "framer-motion";
import { Video, Calendar, Bot, ArrowLeft, Wand2, Users } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/mrsachinchaurasiya/30min";

type InterviewMode = null | "ai" | "expert";

export default function MockInterviewPage() {
  const [mode, setMode] = useState<InterviewMode>(null);

  if (mode === "expert") {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <button
          onClick={() => setMode(null)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Users className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Expert Mock Interview
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Schedule a 30-minute mock interview session with an industry expert.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
            <iframe
              src={CALENDLY_URL}
              className="w-full border-0"
              style={{ minHeight: "660px" }}
              title="Schedule Mock Interview"
            />
          </div>

          <div className="text-center mt-6">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline text-sm"
            >
              <Calendar className="w-4 h-4" />
              Open in Calendly
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  if (mode === "ai") {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <button
          onClick={() => setMode(null)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center">
            <div className="w-20 h-20 bg-violet-100 dark:bg-violet-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bot className="w-10 h-10 text-violet-600 dark:text-violet-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              AI Mock Interview
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
              Practice with our AI interviewer. Get instant feedback on your answers, communication, and problem-solving approach.
            </p>

            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-10 max-w-lg mx-auto">
              <Wand2 className="w-12 h-12 text-violet-400 mx-auto mb-4" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Coming Soon</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                AI-powered mock interviews are currently under development. We&apos;ll notify you when it&apos;s ready.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Video className="w-8 h-8 text-gray-500 dark:text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Mock Interview
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Choose your interview style and start practicing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* AI Interview */}
          <button
            onClick={() => setMode("ai")}
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-left hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-xl hover:shadow-violet-100/50 dark:hover:shadow-violet-900/20 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-xl flex items-center justify-center mb-4">
              <Bot className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              AI Interview
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Practice anytime with our AI interviewer. Instant feedback on your answers.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Available 24/7</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Instant Feedback</span>
            </div>
          </button>

          {/* Expert Interview */}
          <button
            onClick={() => setMode("expert")}
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-left hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Expert Interview
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Book a 30-minute live session with an industry expert via Calendly.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">1-on-1 Session</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Real Feedback</span>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
