"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin, DollarSign, Clock } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export function RecentJobs() {
  const jobs = [
    
    {
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "San Francisco",
      salary: "$140k - $200k",
      type: "Full-time",
      posted: "3 days ago",
      tags: ["Node.js", "Python", "AWS"],
    },
    {
      title: "ML Engineer",
      company: "AI Innovations",
      location: "Hybrid",
      salary: "$150k - $220k",
      type: "Full-time",
      posted: "5 days ago",
      tags: ["Python", "TensorFlow", "PyTorch"],
    },
    {
      title: "DevOps Engineer",
      company: "CloudScale",
      location: "Remote",
      salary: "$130k - $190k",
      type: "Full-time",
      posted: "1 week ago",
      tags: ["Kubernetes", "Docker", "AWS"],
    }
   
  ];

  return (
    <motion.section
      id="jobs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-32 px-6 relative bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Recent{" "}
            <span className="underline decoration-4 underline-offset-8">
              Job Openings
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Land your perfect role with top companies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-50 border-2 border-gray-200 p-6 hover:border-black hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-black" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-600">
                    {job.company}
                  </span>
                </div>
                <div className="px-3 py-1 bg-white text-black group-hover:bg-black group-hover:text-white text-xs font-bold">
                  {job.type}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-black group-hover:text-black">
                {job.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 border border-black/20 group-hover:border-black/20 text-xs text-black group-hover:text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-4 text-sm text-gray-700 group-hover:text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-black group-hover:text-black font-semibold">
                    {job.salary}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Posted {job.posted}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-black text-white group-hover:bg-black group-hover:text-white font-semibold transition-all border-2 border-white"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all"
          >
            View All Jobs →
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
