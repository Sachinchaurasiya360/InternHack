"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  Video,
  FileText,
  CheckCircle,
  Download,
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

export function InterviewPrep() {
  const materials = [
    {
      title: "Data Structures & Algorithms",
      icon: Code,
      topics: [
        "Arrays & Strings",
        "Trees & Graphs",
        "Dynamic Programming",
        "Sorting & Searching",
      ],
      resources: "150+ Problems",
      type: "Practice",
    },
    {
      title: "System Design Fundamentals",
      icon: BookOpen,
      topics: ["Scalability", "Load Balancing", "Caching", "Database Design"],
      resources: "50+ Case Studies",
      type: "Study Guide",
    },
    {
      title: "Behavioral Interview Guide",
      icon: Video,
      topics: [
        "STAR Method",
        "Leadership",
        "Conflict Resolution",
        "Team Collaboration",
      ],
      resources: "30+ Scenarios",
      type: "Video Course",
    },
    {
      title: "Frontend Deep Dive",
      icon: Code,
      topics: ["React Patterns", "Performance", "State Management", "Testing"],
      resources: "100+ Questions",
      type: "Practice",
    },
    {
      title: "Backend Engineering",
      icon: FileText,
      topics: [
        "REST APIs",
        "Microservices",
        "Authentication",
        "Database Optimization",
      ],
      resources: "80+ Questions",
      type: "Study Guide",
    },
    {
      title: "Mock Interview Sessions",
      icon: Video,
      topics: [
        "Live Coding",
        "Real-time Feedback",
        "Expert Mentors",
        "Resume Review",
      ],
      resources: "Book a Session",
      type: "Live Practice",
    },
  ];

  const stats = [
    { value: "500+", label: "Interview Questions" },
    { value: "100+", label: "Video Tutorials" },
    { value: "50+", label: "System Design Cases" },
    { value: "10K+", label: "Students Helped" },
  ];

  return (
    <motion.section
      id="interview-prep"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-15 px-6 relative bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-black/20 text-sm mb-4">
            <BookOpen className="w-4 h-4 text-black" />
            <span className="text-black">Preparation Resources</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-black">
            Interview{" "}
            <span className="underline decoration-4 underline-offset-8">
              Preparation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive materials to ace your technical interviews
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="border-2 border-black p-6 text-center"
            >
              <div className="text-4xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {materials.map((material, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white border-2 border-gray-200 p-6 hover:border-black hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <material.icon className="w-10 h-10 text-black group-hover:text-white" />
                <div className="px-3 py-1 bg-black text-white group-hover:bg-white group-hover:text-black text-xs font-bold">
                  {material.type}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">{material.title}</h3>

              <ul className="space-y-2 mb-6">
                {material.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-black/20 group-hover:border-white/20">
                <span className="text-sm font-semibold">
                  {material.resources}
                </span>
                <Download className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white text-lg font-semibold hover:bg-gray-800 transition-all"
          >
            Access All Materials
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
