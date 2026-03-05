import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Search,
  ArrowRight,
  MapPin,
  TrendingUp,
  Star,
  BookOpen,
  Scale,
  Building2,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { SEO } from "../../../components/SEO";

const EXAMS = [
  { label: "JEE Main", slug: "jee-main" },
  { label: "JEE Advanced", slug: "jee-advanced" },
  { label: "NEET UG", slug: "neet-ug" },
  { label: "CAT", slug: "cat" },
  { label: "GATE", slug: "gate" },
  { label: "MHT-CET", slug: "mht-cet" },
  { label: "CUET UG", slug: "cuet-ug" },
  { label: "CLAT", slug: "clat" },
];

const STREAMS = [
  { label: "Engineering", icon: "cogs", color: "from-blue-500 to-blue-600" },
  { label: "Medical", icon: "heart", color: "from-red-500 to-red-600" },
  { label: "Management", icon: "chart", color: "from-amber-500 to-amber-600" },
  { label: "Law", icon: "scale", color: "from-violet-500 to-violet-600" },
  { label: "Design", icon: "palette", color: "from-pink-500 to-pink-600" },
  { label: "Science", icon: "flask", color: "from-emerald-500 to-emerald-600" },
  { label: "Arts", icon: "book", color: "from-orange-500 to-orange-600" },
  { label: "Commerce", icon: "building", color: "from-cyan-500 to-cyan-600" },
];

const TOP_STATES = [
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Delhi",
  "Uttar Pradesh",
  "Telangana",
  "Gujarat",
  "Rajasthan",
];

const FEATURES = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Filter by stream, exam, state, NAAC grade, fees, and NIRF ranking.",
  },
  {
    icon: Scale,
    title: "Compare Colleges",
    description: "Side-by-side comparison of placements, fees, rankings, and facilities.",
  },
  {
    icon: TrendingUp,
    title: "Placement Data",
    description: "Year-wise placement stats including average & highest packages.",
  },
  {
    icon: Star,
    title: "Student Reviews",
    description: "Real reviews covering academics, faculty, infrastructure, and campus life.",
  },
  {
    icon: BookOpen,
    title: "Course Catalog",
    description: "Browse courses with fees, duration, eligibility, and seat availability.",
  },
  {
    icon: MapPin,
    title: "Cutoff Tracker",
    description: "Exam-wise cutoffs by category to gauge your admission chances.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function CollegeLandingPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/colleges/explore?search=${encodeURIComponent(query.trim())}`);
    } else {
      navigate("/colleges/explore");
    }
  };

  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <SEO
        title="College Discovery"
        description="Explore 39,000+ colleges across India. Compare placements, fees, rankings, courses, and read student reviews. Find your dream college."
        keywords="college search, Indian colleges, NIRF ranking, placements, admissions, JEE colleges, NEET colleges, engineering colleges, MBA colleges"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-gray-950">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 opacity-60 blur-3xl" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800 shadow-sm text-sm text-blue-600 dark:text-blue-400 mb-8"
          >
            <GraduationCap className="w-4 h-4" />
            <span>39,000+ Colleges Across India</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-display text-5xl sm:text-7xl font-bold leading-[1.05] tracking-tight text-gray-950 dark:text-white mb-6"
          >
            Find your
            <br />
            <span className="text-gradient-accent">dream college</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Compare placements, fees, rankings, courses, and reviews.
            Make an informed decision about your future.
          </motion.p>

          {/* Search bar */}
          <motion.form
            onSubmit={handleSearch}
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl mx-auto mb-6"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by college name, city, or state..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-32 py-4 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Search
              </button>
            </div>
          </motion.form>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <Link
              to="/colleges/explore"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors no-underline"
            >
              or browse all colleges
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Browse by Exam */}
      <section className="py-20 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white mb-3">
              Browse by Entrance Exam
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              Find colleges that accept your entrance exam score.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {EXAMS.map((exam, i) => (
              <motion.div
                key={exam.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/colleges/exam/${exam.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all no-underline"
                >
                  <BookOpen className="w-4 h-4" />
                  {exam.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Stream */}
      <section className="py-20 md:py-24 bg-[#fafafa] dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white mb-3">
              Browse by Stream
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              Explore colleges across different academic streams.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STREAMS.map((stream, i) => (
              <motion.div
                key={stream.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={`/colleges/explore?stream=${encodeURIComponent(stream.label)}`}
                  className="no-underline block"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg transition-all text-center group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stream.color} flex items-center justify-center mx-auto mb-3`}
                    >
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                      {stream.label}
                    </h3>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by State */}
      <section className="py-20 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white mb-3">
              Top States
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              Find colleges in India's top education hubs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TOP_STATES.map((state, i) => (
              <motion.div
                key={state}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/colleges/explore?state=${encodeURIComponent(state)}`}
                  className="no-underline flex items-center gap-3 px-4 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all group"
                >
                  <MapPin className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {state}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              to="/colleges/explore"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline group"
            >
              View all states
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-24 bg-[#fafafa] dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white mb-3">
              Everything to decide right
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              All the tools you need to make an informed college decision.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-white dark:text-gray-950" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Building2 className="w-10 h-10 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white mb-4">
              Ready to explore?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Browse 39,000+ colleges, compare them side by side, and find the perfect match for your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/colleges/explore" className="no-underline">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg shadow-black/10 flex items-center gap-2"
                >
                  Browse All Colleges
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/colleges/compare" className="no-underline">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-sm font-semibold rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all"
                >
                  Compare Colleges
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
