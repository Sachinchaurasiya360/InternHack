import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";

const hand = { fontFamily: "'Caveat', cursive" };

const features = [
  { title: "AI-powered platform", description: "Career and hiring decisions backed by smart AI, not guesswork." },
  { title: "Placement prep", description: "Helps students prepare for placements and internships from day one." },
  { title: "Resume scoring", description: "ATS-friendly resume scoring and job matching so your profile gets seen." },
  { title: "Mock interviews", description: "Practice with AI mock interviews and get real feedback before the real thing." },
  { title: "Job discovery", description: "Find opportunities and track every application in one place." },
  { title: "Recruiter tools", description: "Recruiters can post jobs, manage candidates, and streamline their workflow." },
  { title: "Hiring workflows", description: "Streamlined interview processes that save time for both sides." },
  { title: "Smart dashboards", description: "Dedicated dashboards for students, recruiters, and admins." },
  { title: "Accessible and data-driven", description: "Built to make hiring more accessible, efficient, and informed." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070707]">
      <SEO title="About Us" description="Learn more about InternHack and our mission to help students kickstart their careers." />
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap" rel="stylesheet" />
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 pt-28 pb-16">

        <div className="mb-16 text-center">
          <p style={hand} className="text-lime-500 dark:text-lime-400 text-xl mb-2">a little about us</p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Prepare. <span style={hand} className="text-lime-500 dark:text-lime-400 text-5xl">Practice.</span> Placed.
          </motion.h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            InternHack bridges the gap between academia and industry — giving every student the tools, confidence, and connections to land their dream role.
          </p>
        </div>

        <div className="mb-8 text-center">
          <p style={hand} className="text-lime-500 dark:text-lime-400 text-xl mb-1">here is what we do</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Everything you need, in one place</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * i }} whileHover={{ y: -3 }}
              className="p-6 rounded-2xl border border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-gray-900/30 hover:border-lime-300 dark:hover:border-lime-700 transition-all">
              <h3 style={hand} className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}