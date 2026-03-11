import { motion } from "framer-motion";
import { Video, Calendar } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/mrsachinchaurasiya/30min";

export default function MockInterviewPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Video className="w-8 h-8 text-gray-500 dark:text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Book a Mock Interview
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Schedule a 30-minute mock interview session. Pick a time that works for you.
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
