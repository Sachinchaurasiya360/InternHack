import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "../components/SEO";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] as const },
  },
};

const numberVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 40,
    y: 15,
    rotate: direction * 5,
  }),
  visible: {
    opacity: 0.7,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] as const },
  },
};

const ghostVariants = {
  hidden: { scale: 0.8, opacity: 0, y: 15, rotate: -5 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] as const },
  },
  floating: {
    y: [-5, 5],
    transition: {
      y: {
        duration: 2,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  },
};

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found - InternHack"
        description="The page you're looking for doesn't exist."
      />

      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
              <motion.span
                className="text-7xl md:text-9xl font-bold text-gray-900 dark:text-white opacity-70 select-none"
                variants={numberVariants}
                custom={-1}
              >
                4
              </motion.span>
              <motion.div
                variants={ghostVariants}
                animate={["visible", "floating"]}
              >
                <img
                  src="https://xubohuah.github.io/xubohua.top/Group.png"
                  alt="Ghost"
                  width={120}
                  height={120}
                  className="w-20 h-20 md:w-30 md:h-30 object-contain select-none"
                  draggable="false"
                />
              </motion.div>
              <motion.span
                className="text-7xl md:text-9xl font-bold text-gray-900 dark:text-white opacity-70 select-none"
                variants={numberVariants}
                custom={1}
              >
                4
              </motion.span>
            </div>

            <motion.h1
              className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 opacity-70 select-none"
              variants={itemVariants}
            >
              Boo! Page missing!
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-900 dark:text-white mb-8 md:mb-12 opacity-50 select-none"
              variants={itemVariants}
            >
              Whoops! This page must be a ghost &mdash; it&apos;s not here!
            </motion.p>

            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.3,
                  ease: [0.43, 0.13, 0.23, 0.96] as const,
                },
              }}
            >
              <Link
                to="/"
                className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-black dark:hover:bg-gray-100 transition-colors no-underline select-none"
              >
                Find shelter
              </Link>
            </motion.div>

            <motion.div className="mt-10" variants={itemVariants}>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { to: "/jobs", label: "Browse Jobs" },
                  { to: "/learn", label: "Learn" },
                  { to: "/learn/dsa", label: "DSA Practice" },
                  { to: "/ats-score", label: "ATS Score" },
                  { to: "/blog", label: "Blog" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
