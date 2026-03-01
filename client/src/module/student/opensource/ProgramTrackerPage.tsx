import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ExternalLink, GraduationCap, ChevronDown, ChevronUp,
  ArrowLeft, Globe, DollarSign, Calendar, Users, CheckCircle2, X, Filter,
} from "lucide-react";
import { Link } from "react-router";

// ─── Data ──────────────────────────────────────────────────────
interface Program {
  id: number;
  name: string;
  short: string;
  description: string;
  fullDescription: string;
  eligibility: string;
  eligibilityType: "Students" | "Open to All" | "Diversity-focused";
  stipend: string;
  stipendPaid: boolean;
  stipendRange: "High" | "Medium" | "Low/None";
  window: string;
  status: "Annual" | "Ongoing" | "Batch";
  region: string;
  website: string;
  applyUrl: string;
  color: string;
  bgColor: string;
  tags: string[];
  requirements: string[];
  timeline: { phase: string; dates: string }[];
  howToApply: string[];
}

const PROGRAMS: Program[] = [
  {
    id: 1,
    name: "Google Summer of Code",
    short: "GSoC",
    description: "The world's largest open source mentorship program. Students work 12–22 weeks on a coding project for an accepted organization, guided by expert mentors.",
    fullDescription: "Google Summer of Code (GSoC) is a global, online mentoring program focused on introducing new contributors to open source software development. GSoC contributors work with an open source organization on a 12+ week programming project under the guidance of mentors. Since 2005, more than 20,000 contributors have participated.",
    eligibility: "18+ years old, enrolled in an accredited institution or recently graduated within 1 year",
    eligibilityType: "Students",
    stipend: "$1,500 – $6,600",
    stipendPaid: true,
    stipendRange: "High",
    window: "Jan – Mar (applications)",
    status: "Annual",
    region: "Global",
    website: "https://summerofcode.withgoogle.com",
    applyUrl: "https://summerofcode.withgoogle.com/how-it-works",
    color: "text-red-700",
    bgColor: "bg-red-50 border-red-200",
    tags: ["google", "coding", "mentorship", "paid"],
    requirements: [
      "Must be 18 years or older",
      "Enrolled in an accredited institution (or graduated within 1 year)",
      "Write a detailed project proposal",
      "Demonstrate prior contributions to the org (highly recommended)",
      "Pass Google's eligibility check",
    ],
    timeline: [
      { phase: "Organization Applications", dates: "Oct – Nov" },
      { phase: "Organizations Announced", dates: "Dec" },
      { phase: "Contributor Applications", dates: "Jan – Feb" },
      { phase: "Application Review", dates: "Mar" },
      { phase: "Coding Period (Medium)", dates: "May – Aug (12 weeks)" },
      { phase: "Final Evaluations", dates: "Aug – Sep" },
      { phase: "Results Announced", dates: "Sep" },
    ],
    howToApply: [
      "Browse accepted organizations at summerofcode.withgoogle.com",
      "Join the org's communication channel (Discord, IRC, mailing list)",
      "Make a small contribution to demonstrate your ability",
      "Find or propose a project idea in the org's idea list",
      "Write a detailed proposal (problem statement, timeline, milestones)",
      "Submit via the GSoC portal before the deadline",
    ],
  },
  {
    id: 2,
    name: "LFX Mentorship",
    short: "LFX",
    description: "Linux Foundation's mentorship program connecting contributors to CNCF, Hyperledger, and other LF projects. Three cohorts per year with competitive stipends.",
    fullDescription: "LFX Mentorship (formerly Community Bridge) is a platform that connects aspiring open source developers with mentors in 100+ Linux Foundation projects. It runs three cohorts annually (Spring, Summer, Fall) across CNCF, Hyperledger, OpenMainframe, and more.",
    eligibility: "Open to anyone 18+ years old globally",
    eligibilityType: "Students",
    stipend: "$3,000 – $6,600 per term",
    stipendPaid: true,
    stipendRange: "High",
    window: "3 cohorts/year: Jan, May, Sep",
    status: "Ongoing",
    region: "Global",
    website: "https://mentorship.lfx.linuxfoundation.org",
    applyUrl: "https://mentorship.lfx.linuxfoundation.org",
    color: "text-blue-700",
    bgColor: "bg-blue-50 border-blue-200",
    tags: ["linux-foundation", "cncf", "paid", "go", "cloud"],
    requirements: [
      "18+ years old",
      "Intermediate programming skills in Go, Python, or relevant stack",
      "Understanding of Linux/cloud concepts (for CNCF projects)",
      "Resume and short statement of interest",
      "Available to commit ~20 hours/week",
    ],
    timeline: [
      { phase: "Spring Cohort Applications", dates: "Jan – Feb" },
      { phase: "Spring Cohort", dates: "Mar – May" },
      { phase: "Summer Cohort Applications", dates: "May – Jun" },
      { phase: "Summer Cohort", dates: "Jun – Aug" },
      { phase: "Fall Cohort Applications", dates: "Sep – Oct" },
      { phase: "Fall Cohort", dates: "Oct – Dec" },
    ],
    howToApply: [
      "Visit mentorship.lfx.linuxfoundation.org and create an account",
      "Browse open mentorship opportunities by project",
      "Review required skills for each project",
      "Submit your application with resume and cover letter",
      "Complete any take-home tasks if requested",
      "Wait for mentor selection notification",
    ],
  },
  {
    id: 3,
    name: "MLH Fellowship",
    short: "MLH Fellowship",
    description: "A 12-week remote internship alternative where participants contribute to open source projects used by real companies, earning a stipend and career coaching.",
    fullDescription: "The MLH Fellowship is a remote internship alternative for software engineers. Fellows contribute to open source projects that are used by companies around the world, guided by mentors from top tech companies. It runs in Spring, Summer, and Fall batches.",
    eligibility: "University students and recent graduates globally",
    eligibilityType: "Students",
    stipend: "$5,000 – $6,000",
    stipendPaid: true,
    stipendRange: "High",
    window: "Spring / Summer / Fall batches",
    status: "Batch",
    region: "Global",
    website: "https://fellowship.mlh.io",
    applyUrl: "https://fellowship.mlh.io/apply",
    color: "text-indigo-700",
    bgColor: "bg-indigo-50 border-indigo-200",
    tags: ["mlh", "fellowship", "paid", "internship-alternative"],
    requirements: [
      "Currently enrolled in a university or recently graduated",
      "Able to work 30 hrs/week for 12 weeks",
      "Strong coding fundamentals (data structures, algorithms)",
      "Familiarity with Git and open source workflows",
      "Willingness to contribute to assigned projects",
    ],
    timeline: [
      { phase: "Applications Open", dates: "2–3 months before batch start" },
      { phase: "Technical Interview", dates: "Rolling after submission" },
      { phase: "Fellowship Start", dates: "Jan (Spring) / Jun (Summer) / Sep (Fall)" },
      { phase: "Open Source Contributions", dates: "Weeks 1–12" },
      { phase: "Graduation & Demo Day", dates: "End of batch" },
    ],
    howToApply: [
      "Apply at fellowship.mlh.io — fill out the application form",
      "Submit a personal statement about your coding journey",
      "Complete a short coding challenge",
      "Attend a technical interview with an MLH reviewer",
      "If accepted, onboard and join your pod (group of 5-6 fellows)",
    ],
  },
  {
    id: 4,
    name: "Outreachy",
    short: "Outreachy",
    description: "Paid, remote internships in open source and open science for people subject to systemic bias in the tech industry. One of the highest stipends available.",
    fullDescription: "Outreachy provides internships in open source and open science for people who face under-representation, systemic bias, or discrimination in the technology industry. Two cohorts run per year (May–Aug and Dec–Mar). Participants must be in an eligible country and meet demographic requirements.",
    eligibility: "People subject to discrimination in tech — women, non-binary, LGBTQ+, racial/ethnic minorities, and others in eligible countries",
    eligibilityType: "Diversity-focused",
    stipend: "$7,000",
    stipendPaid: true,
    stipendRange: "High",
    window: "May–Aug & Dec–Mar cohorts",
    status: "Batch",
    region: "Global (eligible countries)",
    website: "https://outreachy.org",
    applyUrl: "https://www.outreachy.org/apply",
    color: "text-teal-700",
    bgColor: "bg-teal-50 border-teal-200",
    tags: ["diversity", "inclusion", "paid", "remote"],
    requirements: [
      "Be in an eligible country (check outreachy.org for the list)",
      "Meet diversity requirements (women, non-binary, LGBTQ+, racial minorities, etc.)",
      "Not currently employed full-time",
      "Available to intern for 3 months (~40 hours/week)",
      "No previous Outreachy internship",
    ],
    timeline: [
      { phase: "Initial Application", dates: "Jan (for May cohort) / Aug (for Dec cohort)" },
      { phase: "Contribution Period", dates: "Feb–Mar (for May) / Sep–Oct (for Dec)" },
      { phase: "Intern Selections Announced", dates: "Mar (for May) / Oct (for Dec)" },
      { phase: "Internship", dates: "May–Aug or Dec–Mar" },
    ],
    howToApply: [
      "Check your eligibility on outreachy.org/eligibility",
      "Fill in the initial application during the open window",
      "Get accepted for the contribution period",
      "Make contributions to 1–2 projects during the contribution period",
      "Record your contributions in the Outreachy portal",
      "Submit a final application with your contribution summary",
    ],
  },
  {
    id: 5,
    name: "Hacktoberfest",
    short: "Hacktoberfest",
    description: "DigitalOcean's annual October celebration of open source. Complete 4 PRs/MRs during October to earn a digital badge and swag from sponsors.",
    fullDescription: "Hacktoberfest is a month-long celebration of open source software run by DigitalOcean every October. Participants who submit 4 qualifying pull requests to any participating GitHub or GitLab repositories earn a digital badge and may qualify for limited-edition physical swag.",
    eligibility: "Anyone globally, 18+ or with parental consent",
    eligibilityType: "Open to All",
    stipend: "Digital badge + limited swag",
    stipendPaid: false,
    stipendRange: "Low/None",
    window: "October (every year)",
    status: "Annual",
    region: "Global",
    website: "https://hacktoberfest.com",
    applyUrl: "https://hacktoberfest.com",
    color: "text-orange-700",
    bgColor: "bg-orange-50 border-orange-200",
    tags: ["beginner-friendly", "open-source", "october", "swag"],
    requirements: [
      "Register at hacktoberfest.com in October",
      "Submit 4 pull requests to participating repos",
      "PRs must be accepted/approved (not spam or trivial)",
      "GitHub or GitLab account required",
    ],
    timeline: [
      { phase: "Registration Opens", dates: "September / early October" },
      { phase: "Contribution Period", dates: "October 1–31" },
      { phase: "Review Period", dates: "November (14 days after Oct 31)" },
      { phase: "Swag Orders", dates: "November–January" },
    ],
    howToApply: [
      "Create an account on hacktoberfest.com during October",
      "Link your GitHub or GitLab account",
      "Find repos with the 'hacktoberfest' topic label",
      "Submit 4 quality pull requests during October",
      "Wait for your PRs to be reviewed and accepted",
    ],
  },
  {
    id: 6,
    name: "GirlScript Summer of Code",
    short: "GSSoC",
    description: "India's largest open source program, inspired by GSoC. Runs March–May connecting Indian students with mentors from 100+ open source projects.",
    fullDescription: "GirlScript Summer of Code (GSSoC) is a 3-month open source program conducted by the GirlScript Foundation. It is primarily focused on Indian students and aims to help them get started with contributing to open source. Top contributors receive certificates, swag, and job referrals.",
    eligibility: "Open to all — primarily Indian students but anyone can join",
    eligibilityType: "Open to All",
    stipend: "Certificates + swag + job referrals for top contributors",
    stipendPaid: false,
    stipendRange: "Low/None",
    window: "March – May",
    status: "Annual",
    region: "India (open globally)",
    website: "https://gssoc.girlscript.tech",
    applyUrl: "https://gssoc.girlscript.tech",
    color: "text-pink-700",
    bgColor: "bg-pink-50 border-pink-200",
    tags: ["india", "beginner-friendly", "certificates", "gssoc"],
    requirements: [
      "No strict eligibility — students and beginners welcome",
      "GitHub account required",
      "Commit to contributing throughout March–May",
      "Register on the GSSoC portal before the deadline",
    ],
    timeline: [
      { phase: "Registrations (Contributors)", dates: "February" },
      { phase: "Project Registrations (Orgs)", dates: "January–February" },
      { phase: "Coding Period Begins", dates: "March 1" },
      { phase: "Coding Period Ends", dates: "May 31" },
      { phase: "Results & Certificates", dates: "June" },
    ],
    howToApply: [
      "Register at gssoc.girlscript.tech as a contributor",
      "Browse listed projects and choose 2–3 to contribute to",
      "Introduce yourself in the project's communication channel",
      "Start picking up issues labeled 'gssoc' or 'good first issue'",
      "Submit PRs and earn points based on issue difficulty",
    ],
  },
  {
    id: 7,
    name: "Season of Docs",
    short: "GSoD",
    description: "Google's program pairing technical writers with open source orgs to improve documentation. Organizations receive funds to pay writers directly.",
    fullDescription: "Google Season of Docs gives technical writers an opportunity to gain experience in open source, while giving open source projects improved documentation and the resources to improve processes. Organizations apply for grant money to pay technical writers.",
    eligibility: "Experienced technical writers (freelance or otherwise)",
    eligibilityType: "Open to All",
    stipend: "$5,000 – $15,000 (org-dependent)",
    stipendPaid: true,
    stipendRange: "High",
    window: "Feb – Apr (organization applications)",
    status: "Annual",
    region: "Global",
    website: "https://developers.google.com/season-of-docs",
    applyUrl: "https://developers.google.com/season-of-docs/docs/tech-writer-guide",
    color: "text-amber-700",
    bgColor: "bg-amber-50 border-amber-200",
    tags: ["documentation", "technical-writing", "google", "paid"],
    requirements: [
      "Technical writing experience or portfolio",
      "Familiarity with Markdown, RST, or similar",
      "Ability to understand and explain technical concepts",
      "Availability to work 3–5 months on documentation project",
    ],
    timeline: [
      { phase: "Organization Applications", dates: "Feb – Mar" },
      { phase: "Accepted Organizations Announced", dates: "Apr" },
      { phase: "Writer–Org Exploration", dates: "Apr – May" },
      { phase: "Technical Writing Period", dates: "May – Nov" },
      { phase: "Project Case Studies Published", dates: "Dec" },
    ],
    howToApply: [
      "Review accepted organizations at developers.google.com/season-of-docs",
      "Read each org's documentation project proposal",
      "Contact organizations directly to express interest",
      "Submit a statement of interest to the org",
      "Orgs select and contract their writers directly",
    ],
  },
  {
    id: 8,
    name: "Hyperledger Mentorship",
    short: "Hyperledger",
    description: "Linux Foundation's blockchain project offers mentorships for contributors to Hyperledger Fabric, Besu, Aries, and other enterprise blockchain frameworks.",
    fullDescription: "Hyperledger Mentorship is part of LFX Mentorship focused specifically on Hyperledger projects. Mentees contribute to enterprise blockchain projects like Fabric, Besu, Aries, and Firefly while earning a stipend and gaining deep expertise in distributed ledger technology.",
    eligibility: "Students and developers 18+ with some programming experience",
    eligibilityType: "Students",
    stipend: "$3,000 – $6,600",
    stipendPaid: true,
    stipendRange: "High",
    window: "3 cohorts/year via LFX Mentorship",
    status: "Ongoing",
    region: "Global",
    website: "https://wiki.hyperledger.org/display/INTERN",
    applyUrl: "https://mentorship.lfx.linuxfoundation.org",
    color: "text-gray-700",
    bgColor: "bg-gray-50 border-gray-200",
    tags: ["blockchain", "hyperledger", "go", "enterprise", "lfx"],
    requirements: [
      "Basic Go, Java, or TypeScript skills",
      "Interest in blockchain and distributed systems",
      "Ability to commit 20+ hours/week for 3 months",
    ],
    timeline: [
      { phase: "Applications via LFX", dates: "Jan, May, Sep" },
      { phase: "Selection", dates: "2–4 weeks after deadline" },
      { phase: "Mentorship Term", dates: "3 months" },
    ],
    howToApply: [
      "Search Hyperledger projects on mentorship.lfx.linuxfoundation.org",
      "Apply to a specific Hyperledger project listing",
      "Demonstrate familiarity with the project via a contribution",
    ],
  },
  {
    id: 9,
    name: "MLH Localhost",
    short: "MLH Localhost",
    description: "Hands-on technical workshops by Major League Hacking helping students learn new technologies through building. Free to attend, no stipend.",
    fullDescription: "MLH Localhost is a series of free technical workshops focused on helping students learn new technologies by building projects. Topics span Git, APIs, ML, security, and more. Hosted in partnership with GitHub, Google, and other tech companies.",
    eligibility: "Students globally",
    eligibilityType: "Students",
    stipend: "Free learning + digital certificates",
    stipendPaid: false,
    stipendRange: "Low/None",
    window: "Year-round, multiple events",
    status: "Ongoing",
    region: "Global (virtual)",
    website: "https://mlh.io",
    applyUrl: "https://mlh.io/events",
    color: "text-violet-700",
    bgColor: "bg-violet-50 border-violet-200",
    tags: ["workshops", "learning", "free", "beginner"],
    requirements: ["Student or recent graduate", "Register for individual events"],
    timeline: [{ phase: "Events Run", dates: "Year-round" }],
    howToApply: ["Browse upcoming events at mlh.io/events", "Register for free", "Attend and build along"],
  },
  {
    id: 10,
    name: "Rails Girls Summer of Code",
    short: "RGSoC",
    description: "A fellowship program for women and non-binary coders contributing to open source Ruby on Rails projects with coaching support and a monthly stipend.",
    fullDescription: "Rails Girls Summer of Code is a fellowship program that awards teams of two students a monthly stipend to work on open source Ruby on Rails projects. Participants also receive coaching from local tech companies. The program aims to increase diversity in open source.",
    eligibility: "Women, non-binary people, and transgender individuals who can code",
    eligibilityType: "Diversity-focused",
    stipend: "$1,500/month (3 months)",
    stipendPaid: true,
    stipendRange: "Medium",
    window: "Mar – Jul (applications), Jul – Sep (program)",
    status: "Annual",
    region: "Global",
    website: "https://railsgirlssummerofcode.org",
    applyUrl: "https://railsgirlssummerofcode.org/students/application",
    color: "text-rose-700",
    bgColor: "bg-rose-50 border-rose-200",
    tags: ["ruby", "rails", "diversity", "women", "paid"],
    requirements: [
      "Identify as a woman, non-binary, or transgender",
      "Team of 2 students",
      "At least 3 months of learning to code",
      "Access to a local coach",
    ],
    timeline: [
      { phase: "Project Submissions", dates: "Mar" },
      { phase: "Team Applications", dates: "Apr – May" },
      { phase: "Selections Announced", dates: "Jun" },
      { phase: "Program Runs", dates: "Jul – Sep" },
    ],
    howToApply: [
      "Find a partner to form a team of two",
      "Recruit a coach from your local tech community",
      "Apply at railsgirlssummerofcode.org with your team details",
      "Submit a project proposal for a chosen open source project",
    ],
  },
  {
    id: 11,
    name: "Open Mainframe Project Mentorship",
    short: "OMP",
    description: "LFX-hosted mentorship for mainframe and enterprise-scale computing. Projects use z/OS, COBOL, Java on IBM Z systems.",
    fullDescription: "The Open Mainframe Project Mentorship is hosted via LFX Mentorship and focuses on bringing new contributors to mainframe technologies including z/OS, Linux on Z, Zowe, and COBOL modernization projects.",
    eligibility: "Students 18+ interested in enterprise/mainframe computing",
    eligibilityType: "Students",
    stipend: "$3,000 – $6,600",
    stipendPaid: true,
    stipendRange: "High",
    window: "3 cohorts/year via LFX",
    status: "Ongoing",
    region: "Global",
    website: "https://www.openmainframeproject.org/projects/mentorship-program",
    applyUrl: "https://mentorship.lfx.linuxfoundation.org",
    color: "text-slate-700",
    bgColor: "bg-slate-50 border-slate-200",
    tags: ["mainframe", "enterprise", "cobol", "java", "lfx"],
    requirements: ["Basic Java or Python", "Curiosity about enterprise computing"],
    timeline: [{ phase: "Via LFX Mentorship cycles", dates: "Jan, May, Sep" }],
    howToApply: ["Search Open Mainframe on LFX Mentorship", "Apply to a listed project"],
  },
  {
    id: 12,
    name: "Kubernetes Release Team Shadow",
    short: "K8s Shadow",
    description: "Shadow members in the Kubernetes release team, contributing to one of the most critical CI/CD cycles in cloud native software. Unpaid but extremely prestigious.",
    fullDescription: "The Kubernetes Release Team Shadow Program allows contributors to shadow members of the Kubernetes release team. Shadows assist with documentation, communication, CI signal, and release notes across each 3-month Kubernetes release cycle.",
    eligibility: "Kubernetes contributors with some prior contribution history",
    eligibilityType: "Open to All",
    stipend: "Unpaid — strong resume credential",
    stipendPaid: false,
    stipendRange: "Low/None",
    window: "3 times/year (aligned with K8s releases)",
    status: "Ongoing",
    region: "Global (remote)",
    website: "https://github.com/kubernetes/sig-release",
    applyUrl: "https://github.com/kubernetes/sig-release/tree/master/release-team",
    color: "text-sky-700",
    bgColor: "bg-sky-50 border-sky-200",
    tags: ["kubernetes", "cloud-native", "prestigious", "go", "devops"],
    requirements: [
      "Prior Kubernetes contributions (even small PRs count)",
      "Familiarity with Go and Kubernetes concepts",
      "Ability to attend weekly release team meetings",
      "Available ~5 hours/week for 3 months",
    ],
    timeline: [
      { phase: "Shadow Applications", dates: "Before each K8s release cycle" },
      { phase: "Selection", dates: "Within 2–4 weeks" },
      { phase: "Release Cycle", dates: "~3 months per release" },
    ],
    howToApply: [
      "Join the Kubernetes Slack at slack.k8s.io, specifically #sig-release",
      "Make a few contributions to Kubernetes repos",
      "Apply when shadow applications open (announced in #sig-release)",
      "Fill out the application form linked in the shadow application issue",
    ],
  },
];

const ELIGIBILITY_OPTIONS = ["All", "Students", "Open to All", "Diversity-focused"];
const STATUS_OPTIONS = ["All", "Annual", "Ongoing", "Batch"];
const STIPEND_OPTIONS = ["All", "Paid", "High ($5k+)", "Medium ($1k–5k)", "Low/None"];

const STATUS_STYLE: Record<string, string> = {
  Annual: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Ongoing: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Batch: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

const ELIGIBILITY_STYLE: Record<string, string> = {
  "Students": "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "Open to All": "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  "Diversity-focused": "bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
};

// ─── Program Card ─────────────────────────────────────────────
function ProgramCard({ program }: { program: Program }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-white dark:bg-gray-900 rounded-2xl border shadow-sm overflow-hidden transition-shadow hover:shadow-md ${program.bgColor}`}>
      {/* Header */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 ${program.bgColor} ${program.color} border`}>
              {program.short}
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight">{program.name}</h3>
              <div className="flex flex-wrap items-center gap-1.5 mt-1">
                <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${STATUS_STYLE[program.status]}`}>
                  {program.status}
                </span>
                <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${ELIGIBILITY_STYLE[program.eligibilityType]}`}>
                  {program.eligibilityType}
                </span>
              </div>
            </div>
          </div>
          <div className="text-right shrink-0">
            {program.stipendPaid ? (
              <div className="flex items-center gap-1 text-emerald-700">
                <DollarSign className="w-3.5 h-3.5" />
                <span className="text-sm font-bold">{program.stipend.split(" ")[0]}</span>
              </div>
            ) : (
              <span className="text-xs text-gray-400 font-medium">No stipend</span>
            )}
            {program.stipendPaid && (
              <p className="text-[10px] text-gray-400 mt-0.5">{program.stipend}</p>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-3">{program.description}</p>

        {/* Key info row */}
        <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
            {program.window}
          </span>
          <span className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-gray-400" />
            {program.region}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-gray-400" />
            {program.eligibility.length > 50 ? program.eligibility.slice(0, 50) + "…" : program.eligibility}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {program.tags.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-500 text-[10px] rounded-full border border-gray-100 dark:border-gray-700">#{t}</span>
          ))}
        </div>

        {/* Expand / CTA row */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            {expanded ? "Less details" : "Full details"}
          </button>
          <div className="flex gap-2">
            <a href={program.website} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 no-underline transition-colors">
              <Globe className="w-3 h-3" /> Website <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <a href={program.applyUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white dark:text-gray-950 bg-gray-950 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 rounded-lg no-underline transition-colors">
              Apply <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gray-100 dark:border-gray-800"
          >
            <div className="p-5 bg-gray-50 dark:bg-gray-950 grid md:grid-cols-3 gap-6">
              {/* Requirements */}
              <div>
                <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3">Requirements</h4>
                <ul className="space-y-2">
                  {program.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3">Timeline</h4>
                <div className="space-y-2">
                  {program.timeline.map((t, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-gray-900 dark:text-white">{t.phase}</p>
                        <p className="text-[10px] text-gray-500">{t.dates}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Apply */}
              <div>
                <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3">How to Apply</h4>
                <ol className="space-y-2">
                  {program.howToApply.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <span className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────
export default function ProgramTrackerPage() {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedEligibility, setSelectedEligibility] = useState("All");
  const [selectedStipend, setSelectedStipend] = useState("All");

  const filtered = useMemo(() => {
    let list = [...PROGRAMS];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (selectedStatus !== "All") list = list.filter((p) => p.status === selectedStatus);
    if (selectedEligibility !== "All") list = list.filter((p) => p.eligibilityType === selectedEligibility);
    if (selectedStipend === "Paid") list = list.filter((p) => p.stipendPaid);
    if (selectedStipend === "High ($5k+)") list = list.filter((p) => p.stipendRange === "High");
    if (selectedStipend === "Medium ($1k–5k)") list = list.filter((p) => p.stipendRange === "Medium");
    if (selectedStipend === "Low/None") list = list.filter((p) => p.stipendRange === "Low/None");
    return list;
  }, [search, selectedStatus, selectedEligibility, selectedStipend]);

  const totalStipend = PROGRAMS.filter((p) => p.stipendPaid).length;
  const highStipend = PROGRAMS.filter((p) => p.stipendRange === "High").length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Link to="/student/opensource" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-6 no-underline transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Open Source
      </Link>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-100 mb-8 p-8">
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-bl-full pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Open Source Program Tracker</h1>
              <p className="text-sm text-emerald-700">Track deadlines, stipends, and how to apply for every major program</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mb-6 leading-relaxed">
            All major open source programs in one place — with deadlines, stipends, eligibility, and step-by-step application guides. Set reminders and apply before windows close.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Programs Listed", value: PROGRAMS.length },
              { label: "Paid Programs", value: totalStipend },
              { label: "High Stipend ($5k+)", value: highStipend },
              { label: "Diversity Programs", value: PROGRAMS.filter((p) => p.eligibilityType === "Diversity-focused").length },
            ].map((s) => (
              <div key={s.label} className="bg-white/70 dark:bg-gray-900/70 rounded-xl px-4 py-2 border border-emerald-100 dark:border-emerald-800">
                <p className="text-lg font-bold text-gray-900 dark:text-white leading-none">{s.value}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text" value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search programs…"
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-300 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Status", value: selectedStatus, options: STATUS_OPTIONS, set: setSelectedStatus },
            { label: "Eligibility", value: selectedEligibility, options: ELIGIBILITY_OPTIONS, set: setSelectedEligibility },
            { label: "Stipend", value: selectedStipend, options: STIPEND_OPTIONS, set: setSelectedStipend },
          ].map(({ label, value, options, set }) => (
            <div key={label} className="relative group">
              <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 bg-white dark:bg-gray-900">
                <Filter className="w-3 h-3" />
                <span className="text-gray-400">{label}:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{value}</span>
                <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
              <div className="absolute left-0 top-full z-20 mt-1 hidden min-w-[170px] max-h-[200px] overflow-y-auto rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-1 shadow-xl group-hover:block">
                {options.map((opt) => (
                  <button key={opt} onClick={() => set(opt)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-xs transition ${value === opt ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
          {(selectedStatus !== "All" || selectedEligibility !== "All" || selectedStipend !== "All" || search) && (
            <button
              onClick={() => { setSearch(""); setSelectedStatus("All"); setSelectedEligibility("All"); setSelectedStipend("All"); }}
              className="flex items-center gap-1 px-3 py-2 text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-700">
              <X className="w-3.5 h-3.5" /> Clear
            </button>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-5">
        Showing <span className="font-semibold text-gray-900 dark:text-white">{filtered.length}</span> of {PROGRAMS.length} programs
      </p>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 dark:bg-gray-950 rounded-2xl">
          <GraduationCap className="w-10 h-10 text-gray-200 mx-auto mb-3" />
          <p className="text-sm text-gray-500 font-medium">No programs match your filters</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((program) => (
            <motion.div key={program.id} layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <ProgramCard program={program} />
            </motion.div>
          ))}
        </div>
      )}

      {/* Tip */}
      <div className="mt-8 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800">
        <div className="flex items-start gap-3">
          <GraduationCap className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-300">Apply to multiple programs simultaneously</p>
            <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-1 leading-relaxed">
              GSoC and Outreachy application windows often overlap with GSSoC and Hacktoberfest. Diversify your applications — each program has different evaluation criteria and your contributions to one project can strengthen proposals in others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
