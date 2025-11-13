"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Code,
  Award,
  Users,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";

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

export function RecentHackathons() {
  const hackathons = [
    
    {
      title: "Web3 Builder Fest",
      organizer: "BlockChain Inc",
      prize: "$35,000",
      participants: 890,
      deadline: "22 Days",
      location: "San Francisco",
      tags: ["Web3", "Blockchain", "DeFi"],
      status: "Live",
    },
    {
      title: "HealthTech Hackathon",
      organizer: "MediCare Solutions",
      prize: "$40,000",
      participants: 670,
      deadline: "30 Days",
      location: "Hybrid",
      tags: ["Healthcare", "IoT", "Mobile"],
      status: "Live",
    },
    {
      title: "Cybersecurity Challenge",
      organizer: "SecureNet",
      prize: "$45,000",
      participants: 520,
      deadline: "Ended",
      location: "Remote",
      tags: ["Security", "Encryption", "Network"],
      status: "Completed",
    }
   
    
  ];

  return (
    <motion.section
      id="hackathons"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-32 px-6 relative bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-black">
            Recent{" "}
            <span className="underline decoration-4 underline-offset-8">
              Hackathons
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of developers building the future
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {hackathons.map((hackathon, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white border-2 border-gray-200 p-6 hover:border-black hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 " />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800">
                    {hackathon.organizer}
                  </span>
                </div>
                <div
                  className={`px-3 py-1 text-xs font-bold ${
                    hackathon.status === "Live"
                      ? "bg-black text-white group-hover:bg-white group-hover:text-black"
                      : "bg-gray-200 text-gray-600 "
                  }`}
                >
                  {hackathon.status}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover: transition-colors">
                {hackathon.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {hackathon.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 border border-black/20 group-hover:border-white/20 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-4 text-sm text-gray-600 group-hover:text-gray-800">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>
                    Prize:{" "}
                    <strong className="text-black ">
                      {hackathon.prize}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{hackathon.participants} participants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Deadline: {hackathon.deadline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{hackathon.location}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-black text-white group-hover:bg-white group-hover:text-black font-semibold transition-all flex items-center justify-center gap-2 border-2 border-black"
              >
                {hackathon.status === "Live" ? "Register Now" : "View Details"}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all"
          >
            View All Hackathons →
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
