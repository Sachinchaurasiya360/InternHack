import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, MessageCircle, X, CheckCircle2, Sparkles } from "lucide-react";
import { SEO } from "../../../../components/SEO";
import { canonicalUrl } from "../../../../lib/seo.utils";

interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  expertise: string[];
  bio: string;
  yearsOfExperience: number;
  menteesCount: number;
  rating: number;
  available: boolean;
}

const MENTORS: Mentor[] = [
  {
    id: 1,
    name: "Riya Sharma",
    role: "Senior Software Engineer",
    company: "Google",
    location: "Bangalore, India",
    expertise: ["DSA", "System Design", "React", "Python"],
    bio: "Ex-Amazon, Google. Conducted 50+ mock interviews. Passionate about helping students crack top tech companies.",
    yearsOfExperience: 8,
    menteesCount: 47,
    rating: 4.9,
    available: true,
  },
  {
    id: 2,
    name: "Arjun Mehta",
    role: "Staff Engineer",
    company: "Microsoft",
    location: "Hyderabad, India",
    expertise: ["Backend", "Node.js", "System Design", "Databases"],
    bio: "Built distributed systems at scale. Mentored 30+ engineers through Microsoft's internal mentorship program.",
    yearsOfExperience: 12,
    menteesCount: 34,
    rating: 4.8,
    available: true,
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Engineering Manager",
    company: "Amazon",
    location: "Remote, India",
    expertise: ["Frontend", "React", "TypeScript", "Career Strategy"],
    bio: "Led frontend teams at Amazon and Flipkart. Helps students navigate career transitions and build strong portfolios.",
    yearsOfExperience: 10,
    menteesCount: 28,
    rating: 4.7,
    available: false,
  },
  {
    id: 4,
    name: "Vikram Reddy",
    role: "Data Scientist",
    company: "Rubrik",
    location: "Pune, India",
    expertise: ["Data Structures", "Python", "Machine Learning", "SQL"],
    bio: "Data scientist by day, competitive programmer by night. CodeChef 5-star, LeetCode 2500+ rating.",
    yearsOfExperience: 6,
    menteesCount: 19,
    rating: 4.9,
    available: true,
  },
  {
    id: 5,
    name: "Ananya Gupta",
    role: "DevOps Engineer",
    company: "Netflix",
    location: "Remote, India",
    expertise: ["DevOps", "Cloud", "Docker", "System Design"],
    bio: "Infrastructure at Netflix. Loves helping students understand cloud-native architecture and deployment patterns.",
    yearsOfExperience: 9,
    menteesCount: 22,
    rating: 4.6,
    available: true,
  },
  {
    id: 6,
    name: "Rahul Verma",
    role: "Fullstack Developer",
    company: "Stripe",
    location: "Remote",
    expertise: ["Fullstack", "React", "Node", "APIs"],
    bio: "Fullstack engineer at Stripe. Built payment infrastructure used by millions. Mentors on the side for fun.",
    yearsOfExperience: 7,
    menteesCount: 15,
    rating: 4.8,
    available: true,
  },
];

export default function MentorMatchingPage() {
  const [search, setSearch] = useState("");
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [requestSent, setRequestSent] = useState(false);

  const filtered = search.trim()
    ? MENTORS.filter(
        (m) =>
          m.name.toLowerCase().includes(search.toLowerCase()) ||
          m.expertise.some((e) => e.toLowerCase().includes(search.toLowerCase())) ||
          m.company.toLowerCase().includes(search.toLowerCase()),
      )
    : MENTORS;

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO
        title="Mentor Matching - Find Your Guide"
        description="Connect with experienced mentors from top tech companies. Get 1:1 guidance on DSA, system design, career strategy, and more."
        canonicalUrl={canonicalUrl("/learn/mentors")}
      />

      <div className="max-w-5xl mx-auto px-3 sm:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            learn / mentor matching
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Find your{" "}
            <span className="text-lime-500">guide.</span>
          </h1>
          <p className="mt-4 text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
            Connect with experienced engineers from top tech companies for 1:1 guidance on DSA, system design,
            career strategy, and interview prep.
          </p>

          <div className="relative mt-6 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search by name, skill, or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((mentor, i) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + Math.min(i, 5) * 0.05 }}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 hover:border-stone-400 dark:hover:border-white/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-full bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-sm font-bold text-stone-500 dark:text-stone-400">
                    {mentor.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight truncate">
                      {mentor.name}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 truncate">
                      {mentor.role} at {mentor.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-amber-500 text-xs">&#9733;</span>
                  <span className="text-[10px] font-mono tabular-nums text-stone-600 dark:text-stone-400">
                    {mentor.rating}
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-400 mb-3 leading-relaxed">
                {mentor.bio}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {mentor.expertise.map((e) => (
                  <span
                    key={e}
                    className="text-[9px] font-mono uppercase tracking-widest text-stone-500 border border-stone-200 dark:border-white/10 px-2 py-0.5 rounded-md"
                  >
                    / {e}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-4">
                <span className="inline-flex items-center gap-1">
                  <Briefcase className="w-3 h-3" />
                  {mentor.yearsOfExperience} yrs
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {mentor.location}
                </span>
                <span>{mentor.menteesCount} mentees</span>
              </div>

              <button
                onClick={() => {
                  setSelectedMentor(mentor);
                  setRequestSent(false);
                }}
                disabled={!mentor.available}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-[10px] font-mono uppercase tracking-widest border border-stone-300 dark:border-white/15 rounded-md text-stone-900 dark:text-stone-50 hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {mentor.available ? (
                  <>
                    <MessageCircle className="w-3 h-3" />
                    request mentorship
                  </>
                ) : (
                  "currently unavailable"
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
            <p className="text-sm text-stone-600 dark:text-stone-400">No mentors match your search.</p>
            <p className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-2">try a different keyword</p>
          </div>
        )}
      </div>

      {/* Request Modal */}
      {selectedMentor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedMentor(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {requestSent ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 mx-auto text-lime-500 mb-3" />
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-50 mb-2">Request Sent!</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">
                  Your mentorship request has been sent to {selectedMentor.name}. They will respond within 48 hours.
                </p>
                <button
                  onClick={() => setSelectedMentor(null)}
                  className="px-4 py-2 text-xs font-mono uppercase bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-md hover:bg-lime-400 hover:text-stone-900 transition-colors border-0 cursor-pointer"
                >
                  done
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 dark:text-stone-50">
                    Request Mentorship
                  </h3>
                  <button
                    onClick={() => setSelectedMentor(null)}
                    className="p-1 rounded-md text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 border-0 bg-transparent cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="bg-stone-50 dark:bg-stone-800 rounded-md p-3 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-xs font-bold text-stone-600 dark:text-stone-300">
                    {selectedMentor.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-900 dark:text-stone-50">{selectedMentor.name}</p>
                    <p className="text-xs text-stone-500">{selectedMentor.role}, {selectedMentor.company}</p>
                  </div>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-4">
                  Introduce yourself and share what you'd like to work on together. Your profile and
                  progress data will be shared with {selectedMentor.name.split(" ")[0]}.
                </p>
                <textarea
                  className="w-full h-28 px-3 py-2 border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-950 text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 resize-none focus:outline-none focus:border-lime-400 transition-colors"
                  placeholder={`Hi ${selectedMentor.name.split(" ")[0]}, I'm working on improving my ${selectedMentor.expertise[0]} skills and would love your guidance...`}
                />
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={() => setSelectedMentor(null)}
                    className="px-3 py-2 text-xs font-mono uppercase border border-stone-300 dark:border-white/10 rounded-md text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors bg-transparent cursor-pointer"
                  >
                    cancel
                  </button>
                  <button
                    onClick={() => setRequestSent(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono uppercase bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-md hover:bg-lime-400 hover:text-stone-900 transition-colors border-0 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3" />
                    send request
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
