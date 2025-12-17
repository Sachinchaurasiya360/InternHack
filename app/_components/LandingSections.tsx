// "use client";

// import { motion } from "framer-motion";
// import {
//   Briefcase,
//   Users,
//   Award,
//   Code,
//   Zap,
//   Sparkles,
//   CheckCircle,
//   Building2,
//   GraduationCap,
//   Brain,
//   Quote,
//   Rocket,
// } from "lucide-react";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0 },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.3,
//     },
//   },
// };

// export function JobsSection() {
//   const jobs = [
//     {
//       title: "Senior Frontend Developer",
//       company: "TechCorp",
//       location: "Remote",
//       salary: "$120k - $180k",
//       tags: ["React", "TypeScript", "Next.js"],
//     },
//     {
//       title: "Full Stack Engineer",
//       company: "StartupXYZ",
//       location: "San Francisco",
//       salary: "$140k - $200k",
//       tags: ["Node.js", "Python", "AWS"],
//     },
//     {
//       title: "ML Engineer",
//       company: "AI Innovations",
//       location: "Hybrid",
//       salary: "$150k - $220k",
//       tags: ["Python", "TensorFlow", "PyTorch"],
//     },
//   ];

//   return (
//     <motion.section
//       id="jobs"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={staggerContainer}
//       className="py-32 px-6 relative bg-slate-900/50"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div variants={fadeInUp} className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm mb-4">
//             <Briefcase className="w-4 h-4 text-violet-400" />
//             <span>Career Opportunities</span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold mb-4">
//             Dream{" "}
//             <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
//               Jobs
//             </span>
//           </h2>
//           <p className="text-xl text-slate-400 max-w-2xl mx-auto">
//             Land your perfect role with top companies
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {jobs.map((job, idx) => (
//             <motion.div
//               key={idx}
//               variants={fadeInUp}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="glass-strong p-6 rounded-2xl hover:shadow-2xl hover:shadow-violet-500/20 transition-all"
//             >
//               <h3 className="text-xl font-bold mb-2">{job.title}</h3>
//               <div className="flex items-center gap-2 text-slate-400 mb-4">
//                 <Building2 className="w-4 h-4" />
//                 <span>{job.company}</span>
//               </div>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {job.tags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className="px-2 py-1 bg-slate-800 rounded-full text-xs"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <div className="text-sm text-slate-400 mb-4">
//                 <div>{job.location}</div>
//                 <div className="text-violet-400 font-semibold">
//                   {job.salary}
//                 </div>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all"
//               >
//                 Apply Now
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// export function HowItWorksSection() {
//   const steps = [
//     {
//       icon: Users,
//       title: "Create Profile",
//       description: "Sign up and showcase your skills and projects",
//     },
//     {
//       icon: Code,
//       title: "Join Hackathons",
//       description:
//         "Participate in exciting challenges and build innovative solutions",
//     },
//     {
//       icon: Award,
//       title: "Get Noticed",
//       description: "Top performers get direct access to job opportunities",
//     },
//     {
//       icon: Briefcase,
//       title: "Land Your Dream Job",
//       description: "Connect with recruiters from leading tech companies",
//     },
//   ];

//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={staggerContainer}
//       className="py-32 px-6"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div variants={fadeInUp} className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold mb-4">
//             How It{" "}
//             <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
//               Works
//             </span>
//           </h2>
//         </motion.div>

//         <div className="grid md:grid-cols-4 gap-8">
//           {steps.map((step, idx) => (
//             <motion.div key={idx} variants={fadeInUp} className="text-center">
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 className="w-20 h-20 mx-auto mb-4 glass rounded-2xl flex items-center justify-center"
//               >
//                 <step.icon className="w-10 h-10 text-violet-400" />
//               </motion.div>
//               <h3 className="text-xl font-bold mb-2">{step.title}</h3>
//               <p className="text-slate-400">{step.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// export function RecruiterSection() {
//   return (
//     <motion.section
//       id="recruiters"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={staggerContainer}
//       className="py-32 px-6 bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div variants={fadeInUp}>
//             <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm mb-4">
//               <Building2 className="w-4 h-4 text-violet-400" />
//               <span>For Recruiters</span>
//             </div>
//             <h2 className="text-5xl font-bold mb-6">
//               Find Top{" "}
//               <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
//                 Talent
//               </span>
//             </h2>
//             <p className="text-xl text-slate-400 mb-8">
//               Connect with pre-vetted developers who have proven their skills in
//               real hackathons
//             </p>
//             <ul className="space-y-4 mb-8">
//               {[
//                 "Access to skilled developers",
//                 "Performance-based filtering",
//                 "Direct messaging",
//                 "Post unlimited jobs",
//               ].map((item, idx) => (
//                 <motion.li
//                   key={idx}
//                   variants={fadeInUp}
//                   className="flex items-center gap-3"
//                 >
//                   <CheckCircle className="w-6 h-6 text-violet-400" />
//                   <span className="text-lg">{item}</span>
//                 </motion.li>
//               ))}
//             </ul>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all"
//             >
//               Start Hiring
//             </motion.button>
//           </motion.div>

//           <motion.div
//             variants={fadeInUp}
//             className="glass-strong p-8 rounded-3xl"
//           >
//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center">
//                   <Users className="w-6 h-6 text-violet-400" />
//                 </div>
//                 <div>
//                   <div className="font-semibold">100,000+</div>
//                   <div className="text-sm text-slate-400">
//                     Verified Developers
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-fuchsia-500/20 rounded-full flex items-center justify-center">
//                   <Award className="w-6 h-6 text-fuchsia-400" />
//                 </div>
//                 <div>
//                   <div className="font-semibold">5,000+</div>
//                   <div className="text-sm text-slate-400">Successful Hires</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
//                   <Zap className="w-6 h-6 text-pink-400" />
//                 </div>
//                 <div>
//                   <div className="font-semibold">48 Hours</div>
//                   <div className="text-sm text-slate-400">
//                     Average Time to Hire
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// export function MentorsSection() {
//   const mentors = [
//     {
//       name: "Sarah Chen",
//       role: "Senior Engineer @ Google",
//       expertise: "System Design",
//     },
//     { name: "Alex Kumar", role: "CTO @ StartupX", expertise: "Full Stack" },
//     {
//       name: "Maria Garcia",
//       role: "AI Lead @ OpenAI",
//       expertise: "Machine Learning",
//     },
//   ];

//   return (
//     <motion.section
//       id="mentors"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={staggerContainer}
//       className="py-32 px-6"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div variants={fadeInUp} className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm mb-4">
//             <GraduationCap className="w-4 h-4 text-violet-400" />
//             <span>Expert Guidance</span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold mb-4">
//             Learn from the{" "}
//             <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
//               Best
//             </span>
//           </h2>
//           <p className="text-xl text-slate-400 max-w-2xl mx-auto">
//             Get mentored by industry experts and level up your skills
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {mentors.map((mentor, idx) => (
//             <motion.div
//               key={idx}
//               variants={fadeInUp}
//               whileHover={{ y: -10 }}
//               className="glass-strong p-6 rounded-2xl text-center"
//             >
//               <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full" />
//               <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
//               <p className="text-slate-400 mb-2">{mentor.role}</p>
//               <div className="px-3 py-1 bg-violet-500/20 rounded-full text-sm text-violet-300 inline-block">
//                 {mentor.expertise}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// export function AIMatchingSection() {
//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={staggerContainer}
//       className="py-32 px-6 bg-gradient-to-br from-slate-900 to-violet-900/20"
//     >
//       <div className="max-w-7xl mx-auto text-center">
//         <motion.div variants={fadeInUp}>
//           <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm mb-4">
//             <Brain className="w-4 h-4 text-violet-400" />
//             <span>AI Powered</span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold mb-6">
//             Smart Job{" "}
//             <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
//               Matching
//             </span>
//           </h2>
//           <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
//             Our AI analyzes your hackathon performance, skills, and preferences
//             to match you with the perfect opportunities
//           </p>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="glass-strong p-12 rounded-3xl max-w-4xl mx-auto"
//           >
//             <div className="grid md:grid-cols-3 gap-8">
//               <div>
//                 <Sparkles className="w-12 h-12 text-violet-400 mx-auto mb-4" />
//                 <h3 className="text-xl font-bold mb-2">Skill Analysis</h3>
//                 <p className="text-slate-400">
//                   Deep learning algorithms evaluate your technical abilities
//                 </p>
//               </div>
//               <div>
//                 <Brain className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
//                 <h3 className="text-xl font-bold mb-2">
//                   Smart Recommendations
//                 </h3>
//                 <p className="text-slate-400">
//                   Get personalized job suggestions that fit your profile
//                 </p>
//               </div>
//               <div>
//                 <Zap className="w-12 h-12 text-pink-400 mx-auto mb-4" />
//                 <h3 className="text-xl font-bold mb-2">Instant Matches</h3>
//                 <p className="text-slate-400">
//                   Connect with recruiters looking for your exact skills
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

// export function TestimonialsSection() {
//   const testimonials = [
//     {
//       name: "John Doe",
//       role: "Software Engineer @ Meta",
//       text: "InternHack changed my career. I won a hackathon and got hired within a week!",
//       avatar: "👨‍💻",
//     },
//     {
//       name: "Emily Zhang",
//       role: "ML Engineer @ Tesla",
//       text: "The best platform to showcase your skills and connect with amazing companies.",
//       avatar: "👩‍💼",
//     },
//     {
//       name: "Carlos Rodriguez",
//       role: "Full Stack Dev @ Amazon",
//       text: "Mentorship program helped me level up faster than I ever imagined.",
//       avatar: "👨‍🎓",
//     },
//   ];

//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={staggerContainer}
//       className="py-32 px-6"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div variants={fadeInUp} className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm mb-4">
//             <Quote className="w-4 h-4 text-violet-400" />
//             <span>Success Stories</span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold mb-4">
//             What Our{" "}
//             <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
//               Users Say
//             </span>
//           </h2>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {testimonials.map((testimonial, idx) => (
//             <motion.div
//               key={idx}
//               variants={fadeInUp}
//               whileHover={{ y: -10 }}
//               className="glass-strong p-6 rounded-2xl"
//             >
//               <Quote className="w-8 h-8 text-violet-400 mb-4" />
//               <p className="text-slate-300 mb-6">{testimonial.text}</p>
//               <div className="flex items-center gap-3">
//                 <div className="text-4xl">{testimonial.avatar}</div>
//                 <div>
//                   <div className="font-bold">{testimonial.name}</div>
//                   <div className="text-sm text-slate-400">
//                     {testimonial.role}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// export function CTASection() {
//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={staggerContainer}
//       className="py-32 px-6 bg-gradient-to-br from-violet-900/30 to-fuchsia-900/30"
//     >
//       <div className="max-w-4xl mx-auto text-center">
//         <motion.div variants={fadeInUp}>
//           <h2 className="text-5xl md:text-6xl font-bold mb-6">
//             Ready to Start Your{" "}
//             <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
//               Journey?
//             </span>
//           </h2>
//           <p className="text-xl text-slate-400 mb-12">
//             Join thousands of developers building their future with InternHack
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all flex items-center justify-center gap-2"
//             >
//               Get Started Free
//               <Rocket className="w-5 h-5" />
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 glass-strong rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
//             >
//               View Demo
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

// export function Footer() {
//   return (
//     <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <Zap className="w-6 h-6 text-violet-400" />
//               <span className="text-xl font-bold">InternHack</span>
//             </div>
//             <p className="text-slate-400">Build. Compete. Get Hired.</p>
//           </div>
//           <div>
//             <h3 className="font-bold mb-4">Platform</h3>
//             <ul className="space-y-2 text-slate-400">
//               <li>
//                 <a href="#" className="hover:text-violet-400 transition-colors">
//                   Hackathons
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-violet-400 transition-colors">
//                   Jobs
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-violet-400 transition-colors">
//                   Mentors
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-violet-400 transition-colors">
//                   About
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-bold mb-4">For Recruiters</h3>
//             <ul className="space-y-2 text-slate-400">
//               <li>
//                 <a href="#" className="hover:text-violet-400 transition-colors">
//                   Post a Job
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-violet-400 transition-colors">
//                   Find Talent
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-violet-400 transition-colors">
//                   Pricing
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-bold mb-4">Company</h3>
//             <ul className="space-y-2 text-slate-400">
//               <li>
//                 <a href="#" className="hover:text-violet-400 transition-colors">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-violet-400 transition-colors">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-violet-400 transition-colors">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
//           <p>© 2025 InternHack. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
