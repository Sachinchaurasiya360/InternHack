import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Search, ExternalLink, GraduationCap, ChevronDown, ChevronUp,
  Globe, DollarSign, Calendar, Users, CheckCircle2, X, Filter, CalendarPlus,
  Bookmark, Download,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { canonicalUrl } from "../../../lib/seo.utils";
import { markLearningPathMilestone } from "./learning-paths.data";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import toast from "../../../components/ui/toast";

function nextDate(month: number, day: number, hour = 23, minute = 59): string {
  const now = new Date();
  const d = new Date(Date.UTC(now.getFullYear(), month - 1, day, hour, minute, 0));
  if (d <= now) d.setUTCFullYear(d.getUTCFullYear() + 1);
  return d.toISOString();
}

// ─── Data ──────────────────────────────────────────────────────
export type FocusArea = "DEVELOPMENT" | "TECHNICAL_WRITING" | "DESIGN" | "RESEARCH";
export type ProgramDifficulty = "Beginner" | "Intermediate" | "Advanced";

const STATUS_STYLE: Record<Program["status"], string> = {
  Annual: "bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300",
  Ongoing: "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300",
  Batch: "bg-stone-200 text-stone-800 dark:bg-stone-700 dark:text-stone-200",
};

const ELIGIBILITY_STYLE: Record<Program["eligibilityType"], string> = {
  Students: "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300",
  "Open to All": "bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300",
  "Diversity-focused": "bg-stone-200 text-stone-800 dark:bg-stone-700 dark:text-stone-200",
};

interface Program {
  id: number;
  slug?: string;
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
  deadline?: string;
  startDate?: string;
  applyUrl: string;
  color: string;
  bgColor: string;
  tags: string[];
  requirements?: string[];
  timeline?: { phase: string; dates: string }[];
  howToApply?: string[];
  applicationStart?: string;
  applicationDeadline?: string;
  difficulty?: ProgramDifficulty;
  focusArea?: FocusArea;
}

const PROGRAMS: Program[] = [
  {
    id: 1,
    slug: "google-summer-of-code",
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
    applyUrl: "https://summerofcode.withgoogle.com",
    deadline: "2026-04-08",
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
    applicationDeadline: nextDate(4, 19),
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT",
  },
  {
    id: 2,
    slug: "lfx-mentorship",
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
    applicationDeadline: nextDate(5, 15),
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT",
  },
  {
    id: 3,
    slug: "mlh-fellowship",
    name: "MLH Fellowship",
    short: "MLH",
    description: "A 12-week remote internship alternative where participants contribute to open source projects used by real companies, earning a stipend and career coaching.",
    fullDescription: "The MLH Fellowship is a remote internship alternative for software engineers. Fellows contribute to open source projects that are used by companies around the world, guided by mentors from top tech companies. It runs in Spring, Summer, and Fall batches.",
    eligibility: "University students and recent graduates globally",
    eligibilityType: "Students",
    stipend: "$5,000 – $6,000",
    stipendPaid: true,
    stipendRange: "High",
    window: "Spring / Summer / Fall",
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
      "Apply at fellowship.mlh.io - fill out the application form",
      "Submit a personal statement about your coding journey",
      "Complete a short coding challenge",
      "Attend a technical interview with an MLH reviewer",
      "If accepted, onboard and join your pod (group of 5-6 fellows)",
    ],
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT",
  },
  {
    id: 4,
    slug: "outreachy",
    name: "Outreachy",
    short: "Outreachy",
    description: "Paid, remote internships in open source and open science for people subject to systemic bias in the tech industry. One of the highest stipends available.",
    fullDescription: "Outreachy provides internships in open source and open science for people who face under-representation, systemic bias, or discrimination in the technology industry. Two cohorts run per year (May–Aug and Dec–Mar). Participants must be in an eligible country and meet demographic requirements.",
    eligibility: "People subject to discrimination in tech - women, non-binary, LGBTQ+, racial/ethnic minorities, and others in eligible countries",
    eligibilityType: "Diversity-focused",
    stipend: "$7,000",
    stipendPaid: true,
    stipendRange: "High",
    window: "May-Aug & Dec-Mar",
    status: "Batch",
    region: "Global",
    website: "https://outreachy.org",
    applyUrl: "https://outreachy.org/apply",
    deadline: "2026-08-22",
    startDate: "2026-05-20",
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
      "Submit a final application with your contribution summary",
    ],
    applicationStart: nextDate(2, 6, 16, 0),
    applicationDeadline: nextDate(2, 13, 16, 0),
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT",
  },
  {
    id: 5,
    slug: "hacktoberfest",
    name: "Hacktoberfest",
    short: "Hacktoberfest",
    description:
      "DigitalOcean's annual October celebration of open source. Complete 4 PRs/MRs during October to earn a digital badge and swag from sponsors.",
    fullDescription:
      "Hacktoberfest is a month-long celebration of open source software run by DigitalOcean every October. Participants who submit 4 qualifying pull requests to any participating GitHub or GitLab repositories earn a digital badge and may qualify for limited-edition physical swag.",
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
    startDate: "2026-10-01",
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
    slug: "girlscript-summer-of-code",
    name: "GirlScript Summer of Code",
    short: "GSSoC",
    description:
      "India's largest open source program, inspired by GSoC. Runs March–May connecting Indian students with mentors from 100+ open source projects.",
    fullDescription:
      "GirlScript Summer of Code (GSSoC) is a 3-month open source program conducted by the GirlScript Foundation. It is primarily focused on Indian students and aims to help them get started with contributing to open source. Top contributors receive certificates, swag, and job referrals.",
    eligibility: "Open to all - primarily Indian students but anyone can join",
    eligibilityType: "Open to All",
    stipend: "Certificates + swag + job referrals for top contributors",
    stipendPaid: false,
    stipendRange: "Low/None",
    window: "March – May",
    status: "Annual",
    region: "India (open globally)",
    website: "https://gssoc.girlscript.tech",
    applyUrl: "https://gssoc.girlscript.tech",
    deadline: "2026-05-31",
    color: "text-pink-700",
    bgColor: "bg-pink-50 border-pink-200",
    tags: ["india", "beginner-friendly", "certificates", "gssoc"],
    requirements: [
      "No strict eligibility - students and beginners welcome",
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
    slug: "season-of-docs",
    name: "Season of Docs",
    short: "GSoD",
    description: "Google's program pairing technical writers with open source orgs to improve documentation. Organizations receive funds to pay writers directly.",
    fullDescription: "Google Season of Docs gives technical writers an opportunity to gain experience in open source, while giving open source projects improved documentation and the resources to improve processes. Organizations apply for grant money to pay technical writers.",
    eligibility: "Experienced technical writers (freelance or otherwise)",
    eligibilityType: "Open to All",
    stipend: "$5,000 – $15,000",
    stipendPaid: true,
    stipendRange: "High",
    window: "Feb – April",
    status: "Annual",
    region: "Global",
    website: "https://developers.google.com/season-of-docs",
    applyUrl: "https://developers.google.com/season-of-docs",
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
    difficulty: "Intermediate",
    focusArea: "TECHNICAL_WRITING",
  },
  {
    id: 6,
    name: "Rails Girls Summer of Code",
    short: "RGSoC",
    description: "A fellowship program for women and non-binary coders contributing to Rails projects.",
    fullDescription: "Awards teams of two students a monthly stipend to work on Ruby on Rails projects.",
    eligibility: "Women and non-binary individuals.",
    eligibilityType: "Diversity-focused",
    stipend: "$1,500/month",
    stipendPaid: true,
    stipendRange: "Medium",
    window: "Mar – July",
    status: "Annual",
    region: "Global",
    website: "https://railsgirlssummerofcode.org",
    applyUrl: "https://railsgirlssummerofcode.org",
    color: "text-rose-700",
    bgColor: "bg-rose-50 border-rose-200",
    tags: ["ruby", "diversity", "paid"],
    requirements: [
      "Identify as a woman or non-binary individual",
      "Formation of a team of two students applying together",
      "Appointment of a local coach to support your learning",
      "Basic proficiency in Ruby, Rails, or the project's primary language",
      "Ability to commit full-time (40h/week) for the 3-month duration",
      "Verified enrollment in a university or bootcamp at the time of application",
    ],
    timeline: [
      { phase: "Team Formation & Application", dates: "January – February" },
      { phase: "Selection & Project Matching", dates: "March – April" },
      { phase: "Program Launch & Kick-off", dates: "June" },
      { phase: "Coding & Community Building", dates: "July – September" },
      { phase: "Final Reports & Performance Review", dates: "October" },
    ],
    howToApply: [
      "Find a coding partner and form a team of two",
      "Locate a local coach or mentor to supervise your work",
      "Browse the project list on the RGSoC website",
      "Write a joint proposal detailing your interest and project choice",
      "Submit the application via the official RGSoC platform",
      "Participate in an interview process if your proposal is shortlisted",
    ],
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT",
  },
  {
    id: 7,
    name: "KDE Season of Kode",
    short: "SoK",
    description: "KDE's mentorship program for students to work on open source projects.",
    fullDescription: "KDE project-focused mentorship for students to learn software development.",
    eligibility: "Students globally.",
    eligibilityType: "Students",
    stipend: "Swag and Certificate",
    stipendPaid: false,
    stipendRange: "Low/None",
    window: "December – February",
    status: "Annual",
    region: "Global",
    website: "https://sok.kde.org",
    applyUrl: "https://sok.kde.org",
    color: "text-blue-700",
    bgColor: "bg-blue-50 border-blue-200",
    tags: ["kde", "cpp", "mentorship"],
    requirements: [
      "Status as an active student (high school, college, or university)",
      "Fundamental knowledge of C++ and the Qt framework",
      "Familiarity with development tools like Git and CMake",
      "Ability to communicate effectively in English on mailing lists/IRC",
      "Contribution of at least 15-20 hours per week during the program",
      "Proof of student eligibility and age verification (18+)",
    ],
    timeline: [
      { phase: "Project Listing & Mentor Sign-up", dates: "October" },
      { phase: "Student Application Window", dates: "November" },
      { phase: "Mentorship & Selection Period", dates: "December" },
      { phase: "Active Development Period", dates: "January – February" },
      { phase: "Final Evaluation & Certification", dates: "March" },
    ],
    howToApply: [
      "Browse the SOK projects on the KDE wiki or sok.kde.org",
      "Join the KDE developer mailing lists and IRC channels",
      "Discuss potential project ideas with designated mentors",
      "Prepare a detailed project plan and timeline for your work",
      "Submit your application through the KDE SoK portal",
      "Start making small contributions to prove your skills before selection",
    ],
    difficulty: "Beginner",
    focusArea: "DEVELOPMENT",
  },
  {
    id: 8,
    slug: "hyperledger-mentorship",
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
    color: "text-stone-700",
    bgColor: "bg-stone-50 border-stone-200",
    tags: ["blockchain", "hyperledger", "go", "enterprise", "lfx"],
    requirements: [
      "Students and developers 18+ with some programming experience",
      "Interest in blockchain and distributed ledger technologies",
      "C++, Go, Java, or JavaScript knowledge depending on the project",
      "Strong understanding of distributed systems or blockchain concepts",
      "Commitment to specific cohort dates (Spring, Summer, or Fall)",
      "Ability to provide a resume and professional references if requested",
    ],
    timeline: [
      { phase: "Project Proposal Submission (Mentors)", dates: "2 mo prior" },
      { phase: "Mentee Application Window", dates: "1 mo prior" },
      { phase: "Interview & Selection Round", dates: "2 weeks prior" },
      { phase: "12-Week Mentorship Execution", dates: "Cohort Start" },
      { phase: "Mid-term & Final Evaluations", dates: "Week 6 & 12" },
      { phase: "Presentation & Graduation", dates: "Finale" },
    ],
    howToApply: [
      "Create an account on the LFX Mentorship platform",
      "Browse opportunities tagged with 'Hyperledger' or blockchain",
      "Research specific projects (Fabric, Besu, Sawtooth, etc.)",
      "Tailor your resume to highlight relevant distributed systems work",
      "Submit a detailed statement of interest for up to 3 projects",
      "Prepare for technical interviews and coding challenges with mentors",
    ],
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT",
  },
  {
    id: 9,
    slug: "mlh-localhost",
    name: "MLH Localhost",
    short: "MLH Localhost",
    description:
      "Hands-on technical workshops by Major League Hacking helping students learn new technologies through building. Free to attend, no stipend.",
    fullDescription:
      "MLH Localhost is a series of free technical workshops focused on helping students learn new technologies by building projects. Topics span Git, APIs, ML, security, and more. Hosted in partnership with GitHub, Google, and other tech companies.",
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
  },
  {
    id: 13,
    slug: "gnome-internship",
    name: "GNOME Internship",
    short: "GNOME",
    description: "Internship program for GNOME project development and UX.",
    fullDescription: "GNOME internships focus on improving the Linux desktop ecosystem.",
    eligibility: "Open to students and newcomers.",
    eligibilityType: "Open to All",
    stipend: "$6,000",
    stipendPaid: true,
    stipendRange: "High",
    window: "May - August",
    status: "Annual",
    region: "Global",
    website: "https://www.gnome.org",
    applyUrl: "https://www.gnome.org",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 border-indigo-200",
    tags: ["gnome", "linux", "desktop"],
    requirements: [
      "Open to students and newcomers to open source development",
      "Proficiency in C, Rust, or Python (primary GNOME languages)",
      "Familiarity with the GTK toolkit and GNOME desktop environment",
      "Valid residence and permission to work (if applicable for stipend)",
      "Commitment to contribute 20-30 hours per week during the summer",
      "Willingness to participate in daily stand-ups and blog updates",
    ],
    timeline: [
      { phase: "Project Application (Mentors)", dates: "January – February" },
      { phase: "Mentee Application Period", dates: "March – April" },
      { phase: "Community Bonding & Setup", dates: "May" },
      { phase: "Active Internship Duration", dates: "June – August" },
      { phase: "Final Project Demos & GUADEC Presentation", dates: "September" },
    ],
    howToApply: [
      "Browse projects on GNOME's GitLab and identify areas of interest",
      "Join the GNOME Matrix/IRC channels to introduce yourself",
      "Make a small 'Good First Issue' contribution to a GNOME sub-project",
      "Draft a project proposal using the official GNOME template",
      "Submit your formal application to the GNOME Foundation",
      "Interview with potential mentors to discuss technical implementation",
    ],
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT"
  },
  {
    id: 10,
    slug: "rails-girls-summer-of-code",
    name: "Rails Girls Summer of Code",
    short: "RGSoC",
    description:
      "A fellowship program for women and non-binary coders contributing to open source Ruby on Rails projects with coaching support and a monthly stipend.",
    fullDescription:
      "Rails Girls Summer of Code is a fellowship program that awards teams of two students a monthly stipend to work on open source Ruby on Rails projects. Participants also receive coaching from local tech companies. The program aims to increase diversity in open source.",
    eligibility:
      "Women, non-binary people, and transgender individuals who can code",
    eligibilityType: "Diversity-focused",
    stipend: "$1,500/month (3 months)",
    stipendPaid: true,
    stipendRange: "Medium",
    window: "Mar – July",
    status: "Annual",
    region: "Global",
    website: "https://railsgirlssummerofcode.org",
    applyUrl: "https://railsgirlssummerofcode.org",
    color: "text-rose-700",
    bgColor: "bg-rose-50 border-rose-200",
    tags: ["ruby", "diversity", "paid"],
    requirements: [
      "Identify as a woman or non-binary individual",
      "Formation of a team of two students applying together",
      "Appointment of a local coach to support your learning",
      "Basic proficiency in Ruby, Rails, or the project's primary language",
      "Ability to commit full-time (40h/week) for the 3-month duration",
      "Verified enrollment in a university or bootcamp at the time of application",
    ],
    timeline: [
      { phase: "Team Formation & Application", dates: "January – February" },
      { phase: "Selection & Project Matching", dates: "March – April" },
      { phase: "Program Launch & Kick-off", dates: "June" },
      { phase: "Coding & Community Building", dates: "July – September" },
      { phase: "Final Reports & Performance Review", dates: "October" },
    ],
    howToApply: [
      "Find a coding partner and form a team of two",
      "Locate a local coach or mentor to supervise your work",
      "Browse the project list on the RGSoC website",
      "Write a joint proposal detailing your interest and project choice",
      "Submit the application via the official RGSoC platform",
      "Participate in an interview process if your proposal is shortlisted",
    ],
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT",
  },
  {
    id: 14,
    slug: "xorg-foundation-mentorship",
    name: "X.Org Foundation Mentorship",
    short: "X.Org",
    description: "Mentorship for graphics stack development and infrastructure.",
    fullDescription: "Focuses on lower-level graphics drivers and core Linux graphics infrastructure.",
    eligibility: "Advanced developers/students.",
    eligibilityType: "Students",
    stipend: "$5,000",
    stipendPaid: true,
    stipendRange: "High",
    window: "Flexible",
    status: "Ongoing",
    region: "Global",
    website: "https://www.x.org",
    applyUrl: "https://www.x.org",
    color: "text-slate-700",
    bgColor: "bg-slate-50 border-slate-200",
    tags: ["graphics", "linux", "drivers"],
    requirements: [
      "Strong proficiency in C/C++ and low-level system programming",
      "Understanding of Linux kernel architectures and graphics stacks",
      "Prior experience with X11, Wayland, Mesa, or DRM drivers",
      "Ability to work independently with minimal daily supervision",
      "Enrollment in a technical degree program (CS, EE, or related)",
      "Availability for 12 weeks of full-time focused development work",
    ],
    timeline: [
      { phase: "Initial Project Pitch & Feedback", dates: "Year-round" },
      { phase: "Formal Proposal Submission", dates: "4 weeks prior" },
      { phase: "Evaluation & Financial Setup", dates: "2 weeks prior" },
      { phase: "12-Week Implementation Window", dates: "Variable" },
      { phase: "Peer Code Review & Upstreaming", dates: "Ongoing" },
      { phase: "Final Report & Payment Disbursement", dates: "Conclusion" },
    ],
    howToApply: [
      "Identify a critical issue or feature in the Linux graphics stack",
      "Contact the X.Org developer mailing list with your idea",
      "Find an X.Org developer willing to act as your primary mentor",
      "Create a comprehensive project roadmap with weekly milestones",
      "Submit your EVoC proposal to the X.Org Board of Directors",
      "Set up your development environment and upstream tracking repo",
    ],
    difficulty: "Advanced",
    focusArea: "DEVELOPMENT"
  },
  {
    id: 11,
    name: "FreeBSD Foundation Internships",
    short: "FreeBSD",
    description: "Working on one of the oldest and most mature open source OS projects.",
    fullDescription: "Internships focused on the FreeBSD kernel and documentation.",
    eligibility: "CS/EE students.",
    eligibilityType: "Students",
    stipend: "$5,000 - $6,000",
    stipendPaid: true,
    stipendRange: "High",
    window: "Summer",
    status: "Annual",
    region: "Global",
    website: "https://freebsdfoundation.org",
    applyUrl: "https://freebsdfoundation.org",
    color: "text-red-600",
    bgColor: "bg-red-50 border-red-200",
    tags: ["os", "kernel", "unix"],
    requirements: [
      "Enrolled student in Computer Science, Engineering, or IT",
      "Strong understanding of Operating Systems theory and C",
      "Comfort working with Unix-like command-line environments",
      "Basic knowledge of kernel internals, networking, or file systems",
      "Legal eligibility to receive stipends (US or international status)",
      "Ability to work remotely and coordinate according to UTC timezones",
    ],
    timeline: [
      { phase: "Project Idea Posting", dates: "February – March" },
      { phase: "Application & Interview Round", dates: "April" },
      { phase: "Internship Start & Tools Training", dates: "May" },
      { phase: "Summer Research & Development", dates: "June – August" },
      { phase: "Final Documentation & Porting", dates: "September" },
    ],
    howToApply: [
      "Review the FreeBSD Project Ideas page at freebsdfoundation.org",
      "Reach out to the Foundation with your resume and interests",
      "Participate in technical interviews focusing on OS concepts",
      "Draft a specific scope of work for the summer internship",
      "Complete any pre-internship screening tasks (compiling kernel, etc.)",
      "Formalize the internship agreement and start your project",
    ],
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT"
  },
  {
    id: 12,
    name: "Open Mainframe Project",
    slug: "open-mainframe-project",
    short: "OMP",
    description: "Bringing newcomers to mainframe and enterprise computing.",
    fullDescription: "Mentorship focused on enterprise Linux, Zowe, and mainframe projects.",
    eligibility: "Enrolled students.",
    eligibilityType: "Students",
    stipend: "$3,000 – $6,600",
    stipendPaid: true,
    stipendRange: "High",
    window: "3 cohorts/year",
    status: "Ongoing",
    region: "Global",
    website: "https://www.openmainframeproject.org",
    applyUrl: "https://mentorship.lfx.linuxfoundation.org",
    color: "text-slate-800",
    bgColor: "bg-slate-50 border-slate-200",
    tags: ["mainframe", "enterprise", "cobol"],
    requirements: [
      "Student enrollment or recent graduation within the last year",
      "Interest in enterprise computing, COBOL, Zowe, or Linux on Z",
      "Proficiency in Python, Java, or C depending on project choice",
      "Ability to work in a diverse, global team across timezones",
      "Commitment to the 12-week program duration (Spring or Summer)",
      "Completion of the 'Mainframe 101' basics or equivalent training",
    ],
    timeline: [
      { phase: "LFX Mentorship Cycle Opening", dates: "Quarterly" },
      { phase: "Project Choice & Application", dates: "Month 1" },
      { phase: "Admissions & Onboarding", dates: "Month 2" },
      { phase: "Active Mainframe Mentorship", dates: "Month 3 – 5" },
      { phase: "Final Evaluation & Demo Day", dates: "Month 6" },
    ],
    howToApply: [
      "Create a profile on the LFX Mentorship platform",
      "Filter projects using the 'Open Mainframe Project' tag",
      "Choose 1-3 specific projects (Zowe, COBOL Check, etc.)",
      "Submit a resume and statement on enterprise computing interest",
      "Attend Open Mainframe community meetings for visibility",
      "Complete technical tests or screening interviews with OMP mentors",
    ],
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT"
  },
  {
    id: 15,
    slug: "open-mainframe-project-mentorship",
    name: "Open Mainframe Project Mentorship",
    short: "OMP",
    description: "Bringing newcomers to mainframe and enterprise computing.",
    fullDescription: "Mentorship focused on enterprise Linux, Zowe, and mainframe projects.",
    eligibility: "Enrolled students.",
    eligibilityType: "Students",
    stipend: "$3,000 – $6,600",
    stipendPaid: true,
    stipendRange: "High",
    window: "3 cohorts/year",
    status: "Ongoing",
    region: "Global",
    website: "https://www.openmainframeproject.org",
    applyUrl: "https://mentorship.lfx.linuxfoundation.org",
    color: "text-slate-800",
    bgColor: "bg-slate-50 border-slate-200",
    tags: ["mainframe", "enterprise", "cobol"],
    requirements: [
      "Basic Java or Python",
      "Curiosity about enterprise computing",
    ],
    timeline: [{ phase: "Via LFX Mentorship cycles", dates: "Jan, May, Sep" }],
    howToApply: [
      "Search Open Mainframe on LFX Mentorship",
      "Apply to a listed project",
    ],
  },
  {
    id: 16,
    slug: "kubernetes-release-team-shadow",
    name: "Kubernetes Release Team Shadow",
    short: "K8s Shadow",
    description:
      "Shadow members in the Kubernetes release team, contributing to one of the most critical CI/CD cycles in cloud native software. Unpaid but extremely prestigious.",
    fullDescription:
      "The Kubernetes Release Team Shadow Program allows contributors to shadow members of the Kubernetes release team. Shadows assist with documentation, communication, CI signal, and release notes across each 3-month Kubernetes release cycle.",
    eligibility: "Kubernetes contributors with some prior contribution history",
    eligibilityType: "Open to All",
    stipend: "Unpaid - strong resume credential",
    stipendPaid: false,
    stipendRange: "Low/None",
    window: "3 times/year (aligned with K8s releases)",
    status: "Ongoing",
    region: "Global (remote)",
    website: "https://github.com/kubernetes/sig-release",
    applyUrl:
      "https://github.com/kubernetes/sig-release/tree/master/release-team",
    color: "text-sky-700",
    bgColor: "bg-sky-50 border-sky-200",
    tags: ["kubernetes", "cloud-native", "prestigious", "go", "devops"],
    requirements: [
      "Prior Kubernetes contributions (even small PRs count)",
      "Familiarity with Go and Kubernetes concepts",
      "Ability to attend weekly release team meetings",
      "Available ~5 hours/week for 3 months",
    ],
  },
  {
    id: 12,
    slug: "kubernetes-release-team-shadow",
    name: "Kubernetes Release Team Shadow",
    short: "K8s Shadow",
    description:
      "Shadow members in the Kubernetes release team, contributing to one of the most critical CI/CD cycles in cloud native software. Unpaid but extremely prestigious.",
    fullDescription:
      "The Kubernetes Release Team Shadow Program allows contributors to shadow members of the Kubernetes release team. Shadows assist with documentation, communication, CI signal, and release notes across each 3-month Kubernetes release cycle.",
    eligibility: "Kubernetes contributors with some prior contribution history",
    eligibilityType: "Open to All",
    stipend: "Unpaid - strong resume credential",
    stipendPaid: false,
    stipendRange: "Low/None",
    window: "3 times/year (aligned with K8s releases)",
    status: "Ongoing",
    region: "Global (remote)",
    website: "https://github.com/kubernetes/sig-release",
    applyUrl:
      "https://github.com/kubernetes/sig-release/tree/master/release-team",
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
      { phase: "LFX Mentorship Cycle Opening", dates: "Quarterly" },
      { phase: "Project Choice & Application", dates: "Month 1" },
      { phase: "Admissions & Onboarding", dates: "Month 2" },
      { phase: "Active Mainframe Mentorship", dates: "Month 3 – 5" },
      { phase: "Final Evaluation & Demo Day", dates: "Month 6" },
    ],
    howToApply: [
      "Create a profile on the LFX Mentorship platform",
      "Filter projects using the 'Open Mainframe Project' tag",
      "Choose 1-3 specific projects (Zowe, COBOL Check, etc.)",
      "Submit a resume and statement on enterprise computing interest",
      "Attend Open Mainframe community meetings for visibility",
      "Complete technical tests or screening interviews with OMP mentors",
    ],
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT"
  },
  {
    id: 13,
    name: "Julia Summer of Code",
    short: "JSoC",
    description: "Mentorship for the Julia programming language ecosystem.",
    fullDescription: "Working on the Julia language and related scientific libraries.",
    eligibility: "Students and researchers.",
    eligibilityType: "Students",
    stipend: "$1,500 - $3,000",
    stipendPaid: true,
    stipendRange: "Medium",
    window: "Summer",
    status: "Annual",
    region: "Global",
    website: "https://julialang.org",
    applyUrl: "https://julialang.org",
    color: "text-purple-600",
    bgColor: "bg-purple-50 border-purple-200",
    tags: ["julia", "research", "math"],
    requirements: [
      "Proficiency in the Julia programming language",
      "Enrollment in a university or research institution program",
      "Background in mathematics, physics, or scientific computation",
      "Familiarity with Git, GitHub, and Julia's package manager (Pkg)",
      "Clear project goal (adding features or a new library)",
      "Ability to blog about progress and participate in forums",
    ],
    timeline: [
      { phase: "Scientific Organization Sign-up", dates: "January" },
      { phase: "Student Proposal Preparation", dates: "February – March" },
      { phase: "Application Review & Interviews", dates: "April" },
      { phase: "Intensive Julia Development", dates: "May – August" },
      { phase: "Project Merging & Documentation", dates: "September" },
    ],
    howToApply: [
      "Browse official Julia project ideas or propose your own",
      "Engage with the community on Julia's Discourse or Slack",
      "Find a Julia package maintainer to support your proposal",
      "Write a detailed proposal including Julia code samples",
      "Submit application through the NumFOCUS or GSoC portal",
      "Fix bugs in the core Julia repo to demonstrate proficiency",
    ],
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT"
  },
  {
    id: 14,
    name: "Python Summer of Code",
    short: "PSoC",
    description: "Developing core Python and scientific libraries.",
    fullDescription: "Working on projects within the Python Software Foundation umbrella.",
    eligibility: "Anyone globally.",
    eligibilityType: "Open to All",
    stipend: "$1,500 - $6,000",
    stipendPaid: true,
    stipendRange: "Medium",
    window: "via GSoC or PSF direct",
    status: "Annual",
    region: "Global",
    website: "https://www.python.org",
    applyUrl: "https://www.python.org",
    color: "text-blue-900",
    bgColor: "bg-blue-50 border-blue-200",
    tags: ["python", "software", "development"],
    requirements: [
      "Advanced proficiency in Python (3.x) and PEP standards",
      "Knowledge of C (if applying for CPython core) or spec. libs",
      "Strong understanding of open source licensing and Git",
      "Participation in Python community forums or local user groups",
      "Availability of 30+ hours per week for full-time tracks",
      "Proven track record of 2-3 previous open source PRs",
    ],
    timeline: [
      { phase: "Project Proposal (Sub-orgs)", dates: "January" },
      { phase: "Developer Application Period", dates: "March" },
      { phase: "Community Bonding & Prep", dates: "April – May" },
      { phase: "First Coding Milestone", dates: "June" },
      { phase: "Final Release & Review", dates: "August" },
    ],
    howToApply: [
      "Identify a sub-org under the Python Software Foundation (PSF)",
      "Join the mailing list or chat for your chosen library",
      "Submit a high-quality PR to demonstrate technical competence",
      "Draft a proposal following PSF student application guidelines",
      "Record a short video introduction if required by the sub-org",
      "Submit final proposal via the Google Summer of Code portal",
    ],
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT"
  },
  {
    id: 15,
    name: "R Project GSoC",
    short: "R-GSoC",
    description: "Developing for the R ecosystem and statistical tools.",
    fullDescription: "Mentorship for R packages and core statistical libraries.",
    eligibility: "Students and graduates.",
    eligibilityType: "Students",
    stipend: "$1,500 - $6,000",
    stipendPaid: true,
    stipendRange: "Medium",
    window: "Summer",
    status: "Annual",
    region: "Global",
    website: "https://www.r-project.org",
    applyUrl: "https://www.r-project.org",
    color: "text-blue-800",
    bgColor: "bg-blue-50 border-blue-200",
    tags: ["stats", "R", "data-science"],
    requirements: [
      "Proficiency in R and RStudio for statistical programming",
      "Understanding of R package structure (DESCRIPTION, NAMESPACE)",
      "Background in statistics, data science, or bioinformatics",
      "Ability to write high-quality documentation using roxygen2",
      "Git and GitHub knowledge for version control and PRs",
      "Student status at an accredited university (for GSoC)",
    ],
    timeline: [
      { phase: "R Organization Selection", dates: "February" },
      { phase: "Project Browsing & Mentoring", dates: "March" },
      { phase: "Portal Application Window", dates: "April" },
      { phase: "Primary Statistical Coding", dates: "June – August" },
      { phase: "CRAN Preparation & Submission", dates: "September" },
    ],
    howToApply: [
      "Browse the R Project ideas list on the R-GSoC wiki",
      "Contribute small patches to existing R packages or 'r-devel'",
      "Discuss proposals with R mentors via R-help mailing list",
      "Detailed proposal submission including statistical methodology",
      "Complete screening tasks like creating a minimal R package",
      "Finalize application on GSoC portal under R Project umbrella",
    ],
    difficulty: "Intermediate",
    focusArea: "DEVELOPMENT"
  },
  {
    id: 16,
    name: "AOSSIE (Design focused)",
    short: "AOSSIE",
    description: "Australian Open Source Software Innovation and Education design projects.",
    fullDescription: "Contribute to UI/UX and visual design for scientific software tools.",
    eligibility: "Designers and developers.",
    eligibilityType: "Open to All",
    stipend: "$1,500 - $3,000",
    stipendPaid: true,
    stipendRange: "Medium",
    window: "via GSoC",
    status: "Annual",
    region: "Australia/Global",
    website: "https://aossie.org",
    applyUrl: "https://aossie.org",
    color: "text-teal-800",
    bgColor: "bg-teal-50 border-teal-200",
    tags: ["design", "uiux", "australia"],
    requirements: [
      "Proficiency in UI/UX design and prototyping (Figma, Sketch)",
      "Understanding of UCD principles for scientific software",
      "Basic knowledge of HTML/CSS or frontend frameworks",
      "Portfolio showcasing previous design work or case studies",
      "Ability to create accessible designs (WCAG standards)",
      "Excellent communication skills for presenting design decisions",
    ],
    timeline: [
      { phase: "AOSSIE Design Project Reveal", dates: "February" },
      { phase: "Mentee Selection & Portfolio Review", dates: "March – April" },
      { phase: "Requirement Gathering & UX Research", dates: "May" },
      { phase: "Iterative Prototyping & Testing", dates: "June – July" },
      { phase: "Final Hand-off & Developer Liaison", dates: "August" },
    ],
    howToApply: [
      "Review AOSSIE project list for design-centric opportunities",
      "Prepare a portfolio PDF or link highlighting UI/UX expertise",
      "Propose a specific UI overhaul or a new feature's language",
      "Join AOSSIE communication channels (Gitter or Slack)",
      "Submit formal proposal on GSoC portal (AOSSIE umbrella)",
      "Participate in interview focusing on design process & tools",
    ],
    difficulty: "Intermediate",
    focusArea: "DESIGN"
  },
  {
    id: 17,
    name: "DrivenData Research",
    short: "DrivenData",
    description: "Social impact research through data science and open competitions.",
    fullDescription: "Apply machine learning and data science to high-impact social challenges.",
    eligibility: "Data scientists and researchers.",
    eligibilityType: "Open to All",
    stipend: "Competition Prizes ($1,000 - $50,000)",
    stipendPaid: true,
    stipendRange: "High",
    window: "Ongoing Competitions",
    status: "Ongoing",
    region: "Global",
    website: "https://www.drivendata.org",
    applyUrl: "https://www.drivendata.org",
    color: "text-emerald-900",
    bgColor: "bg-emerald-50 border-emerald-200",
    tags: ["research", "data-science", "social-impact"],
    requirements: [
      "Strong background in Machine Learning and Data Science",
      "Proficiency in Python (scikit-learn, PyTorch) or R",
      "Ability to clean and process massive structured datasets",
      "Focus on social impact and open research methodologies",
      "Commitment to competing and publishing findings as OS",
      "Verification of identity and eligibility for prize payouts",
    ],
    timeline: [
      { phase: "Competition Launch & Documentation", dates: "Varies" },
      { phase: "Exploratory Data Analysis Phase", dates: "Month 1" },
      { phase: "Modeling & Optimization Sprint", dates: "Month 2" },
      { phase: "Final Leaderboard Submission", dates: "Conclusion" },
      { phase: "Winner Code Verification & Interview", dates: "Post-Event" },
    ],
    howToApply: [
      "Create a researcher profile on DrivenData.org",
      "Browse active competitions for social good",
      "Download the competition datasets and starter notebooks",
      "Form a team or compete individually following rules",
      "Submit your predictive models to the public leaderboard",
      "Document approach and prepare code for final verification",
    ],
    difficulty: "Advanced",
    focusArea: "RESEARCH"
  },
  {
    id: 18,
    name: "Hacktoberfest",
    short: "Hacktober",
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
    startDate: "2026-10-01",
    color: "text-orange-700",
    bgColor: "bg-orange-50 border-orange-200",
    tags: ["beginner-friendly", "open-source", "october", "swag"],
    requirements: [
      "Register at hacktoberfest.com during the month of October",
      "Linking of valid GitHub or GitLab account to registration",
      "Proper tagging of Pull/Merge Requests for the current year",
      "Contributions must be to repos with 'hacktoberfest' topic",
      "PRs must pass 'spam' check by maintainers",
      "Adherence to Hacktoberfest Values (Quantity < Quality)",
    ],
    timeline: [
      { phase: "Early Bird Registration", dates: "Late September" },
      { phase: "Official Kick-off Event", dates: "October 1" },
      { phase: "The 4-PR Contribution Sprint", dates: "October 1 – 31" },
      { phase: "7-Day Review & Holding Period", dates: "Ongoing" },
      { phase: "Validation & Swag Logistics", dates: "Nov – Jan" },
    ],
    howToApply: [
      "Visit hacktoberfest.com and sign up with your Dev account",
      "Use 'hacktoberfest' search filter on GitHub/GitLab",
      "Submit 4 quality contributions (bug fixes, docs, or features)",
      "Ensure PR is not marked as 'invalid' or 'spam' by maintainer",
      "Track progress on official Hacktoberfest dashboard",
      "Claim digital badge and rewards once requirements are met",
    ],
    difficulty: "Beginner",
    focusArea: "DEVELOPMENT",
  },
  {
    id: 19,
    name: "GirlScript Summer of Code",
    short: "GSSoC",
    description: "India's largest open source program, inspired by GSoC. Runs March–May connecting Indian students with mentors from 100+ open source projects.",
    fullDescription: "GirlScript Summer of Code (GSSoC) is a 3-month open source program conducted by the GirlScript Foundation. It is primarily focused on Indian students and aims to help them get started with contributing to open source. Top contributors receive certificates, swag, and job referrals.",
    eligibility: "Open to all - primarily Indian students but anyone can join",
    eligibilityType: "Open to All",
    stipend: "Certificates + swag + job referrals for top contributors",
    stipendPaid: false,
    stipendRange: "Low/None",
    window: "March – May",
    status: "Annual",
    region: "India (open globally)",
    website: "https://gssoc.girlscript.tech",
    applyUrl: "https://gssoc.girlscript.tech",
    deadline: "2026-05-31",
    color: "text-pink-700",
    bgColor: "bg-pink-50 border-pink-200",
    tags: ["india", "beginner-friendly", "certificates", "gssoc"],
    requirements: [
      "Active registration on the GSSoC participant portal",
      "Basic knowledge of Git and GitHub (Fork, Clone, PR)",
      "Willingness to participate in point-based leaderboard",
      "Engage with mentors and contributors via Discord",
      "No age or educational barrier - open to all learners",
      "Commitment to professional conduct and guidelines",
    ],
    timeline: [
      { phase: "Project & Mentor Onboarding", dates: "January" },
      { phase: "Contributor Registration Sprint", dates: "February" },
      { phase: "Coding Period Launch", dates: "March 1" },
      { phase: "Leaderboard Mid-term Evaluation", dates: "April 15" },
      { phase: "Final Contribution Wrap-up", dates: "May 31" },
      { phase: "Results & Job Referral Drive", dates: "June – July" },
    ],
    howToApply: [
      "Complete the registration form at gssoc.girlscript.tech",
      "Join the official GSSoC Discord server for announcements",
      "Explore project repo and find issues labeled 'GSSoC'",
      "Comment on an issue to get it assigned by a mentor",
      "Solve issue, submit PR, and link it to GSSoC dashboard",
      "Repeat process to earn points and climb the leaderboard",
    ],
    difficulty: "Beginner",
    focusArea: "DEVELOPMENT",
  },
  {
    id: 20,
    name: "MLH Localhost Workshops",
    short: "Localhost",
    description: "Free technical workshops and learning resources.",
    fullDescription: "Learn from industry experts through hands-on workshops.",
    eligibility: "Students.",
    eligibilityType: "Students",
    stipend: "Learning resources",
    stipendPaid: false,
    stipendRange: "Low/None",
    window: "Year-round",
    status: "Ongoing",
    region: "Global",
    website: "https://mlh.io",
    applyUrl: "https://mlh.io",
    color: "text-violet-700",
    bgColor: "bg-violet-50 border-violet-200",
    tags: ["learning", "workshop"],
    requirements: [
      "Status as a student or lifelong learner interested in tech",
      "Access to a computer with a stable internet connection",
      "Willingness to participate in instructor-led sessions",
      "Basic environmental setup (VS Code, Git) per workshop",
      "No prior experience required for 'Intro' level modules",
      "Commitment to complete the workshop project in 60-90 min",
    ],
    timeline: [
      { phase: "Workshop Calendar Release", dates: "Weekly" },
      { phase: "Individual Event Registration", dates: "Ongoing" },
      { phase: "Live Workshop Session", dates: "Scheduled Time" },
      { phase: "Hands-on Project Lab", dates: "Post-Lecture" },
      { phase: "Achievement Badge Issuance", dates: "Conclusion" },
    ],
    howToApply: [
      "Visit mlh.io/localhost to browse upcoming workshop list",
      "Filter events by topic (Web, AI, Cloud) or timezone",
      "Register for a specific live session or on-demand module",
      "Follow the 'Pre-requisites' guide sent to your email",
      "Join the live stream or room at the scheduled time",
      "Participate in builds and claim MLH digital rewards",
    ],
    difficulty: "Beginner",
    focusArea: "DEVELOPMENT"
  }
];

const STORAGE_KEY = "program_tracker_filters";

const ELIGIBILITY_OPTIONS = ["All", "Students", "Open to All", "Diversity-focused"];
const STATUS_OPTIONS = ["All", "Annual", "Ongoing", "Batch"];
const FOCUS_AREA_OPTIONS = ["All", "DEVELOPMENT", "TECHNICAL_WRITING", "DESIGN", "RESEARCH"];
const STIPEND_OPTIONS = [
  "All",
  "Paid",
  "High ($5k+)",
  "Medium ($1k–5k)",
  "Low/None",
];
const SORT_OPTIONS = [
  { value: "default", label: "Default order" },
  { value: "deadline-asc", label: "Deadline: Soonest First" },
  { value: "deadline-desc", label: "Deadline: Latest First" },
  { value: "stipend-desc", label: "Stipend: Highest First" },
  { value: "name-asc", label: "Alphabetical" },
];

function computeNextDeadline() {
  const now = Date.now();
  const withDeadlines = PROGRAMS.filter(
    (p) => p.applicationDeadline && new Date(p.applicationDeadline).getTime() > now,
  );
  if (withDeadlines.length === 0) return null;
  const earliest = withDeadlines.reduce(
    (acc, p) => {
      const d = new Date(p.applicationDeadline!).getTime();
      return d < acc.time ? { program: p, time: d } : acc;
    },
    { program: withDeadlines[0], time: Infinity },
  );
  if (!earliest.program) return null;
  return { program: earliest.program, days: Math.ceil((earliest.time - now) / 86400000) };
}

const NEXT_DEADLINE = computeNextDeadline();

type LocalCurrencyConfig = {
  currency: string;
  rate: number;
  locale: string;
};

const LOCAL_CURRENCY_BY_REGION: Record<string, LocalCurrencyConfig> = {
  IN: { currency: "INR", rate: 83.5, locale: "en-IN" },
  NG: { currency: "NGN", rate: 1500, locale: "en-NG" },
  ID: { currency: "IDR", rate: 16200, locale: "id-ID" },
  BR: { currency: "BRL", rate: 5.2, locale: "pt-BR" },
};

const TIME_ZONE_REGION_HINTS: Record<string, keyof typeof LOCAL_CURRENCY_BY_REGION> = {
  "Asia/Kolkata": "IN",
  "Asia/Calcutta": "IN",
  "Africa/Lagos": "NG",
  "Asia/Jakarta": "ID",
  "Asia/Makassar": "ID",
  "Asia/Jayapura": "ID",
  "America/Sao_Paulo": "BR",
};


function getCountdown(
  program: Program,
): { text: string; className: string } | null {
  const now = Date.now();
  if (program.deadline) {
    const days = Math.ceil(
      (new Date(program.deadline + "T23:59:59").getTime() - now) / 86400000,
    );
    if (days < 0) return null;
    if (days < 3)
      return {
        text: `${days} days left!`,
        className: "text-red-500 font-semibold",
      };
    if (days < 7)
      return {
        text: `${days} days left`,
        className: "text-amber-500 font-semibold",
      };
    if (days < 30)
      return {
        text: `${days} days remaining`,
        className: "text-blue-500 font-medium",
      };
    return {
      text: `Closes in ${days} days`,
      className: "text-lime-600 font-medium",
    };
  }
  if (program.startDate) {
    const days = Math.ceil(
      (new Date(program.startDate + "T23:59:59").getTime() - now) / 86400000,
    );
    if (days < 0) return null;
    return {
      text: `Opens in ${days} days`,
      className: "text-amber-500 font-medium",
    };
  }
  return null;
}

function getUrgency(
  program: Program,
): { level: "closed" | "critical" | "urgent" | "normal" | "none"; days: number } | null {
  if (!program.deadline) return null;
  const days = Math.ceil(
    (new Date(program.deadline + "T23:59:59").getTime() - Date.now()) / 86400000,
  );
  if (days < 0) return { level: "closed", days };
  if (days < 3) return { level: "critical", days };
  if (days < 7) return { level: "urgent", days };
  if (days < 30) return { level: "normal", days };
  return { level: "none", days };
}

const getBrowserCurrencyConfig = (): LocalCurrencyConfig | null => {
  if (typeof Intl === "undefined") return null;

  const locale = typeof navigator !== "undefined" ? navigator.language : "";
  const localeRegion = locale.match(/-([A-Z]{2})\b/i)?.[1]?.toUpperCase();
  if (localeRegion && LOCAL_CURRENCY_BY_REGION[localeRegion]) {
    return LOCAL_CURRENCY_BY_REGION[localeRegion];
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeZoneRegion = TIME_ZONE_REGION_HINTS[timeZone];
  return timeZoneRegion ? LOCAL_CURRENCY_BY_REGION[timeZoneRegion] : null;
};

const formatCompactCurrency = (amount: number, config: LocalCurrencyConfig) =>
  new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currency,
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(amount);

const getLocalStipendEstimate = (stipend: string): string | null => {
  const config = getBrowserCurrencyConfig();
  if (!config) return null;

  const amounts = [...stipend.matchAll(/\$([\d,]+(?:\.\d+)?)/g)]
    .map((match) => Number(match[1].replace(/,/g, "")))
    .filter((amount) => Number.isFinite(amount));

  if (amounts.length === 0) return null;

  const converted = amounts.map((amount) => formatCompactCurrency(amount * config.rate, config));
  const suffix = stipend.match(/\/month|per term/i)?.[0] ?? "";
  const spacedSuffix = suffix.startsWith("/") || !suffix ? suffix : ` ${suffix}`;

  return `~${converted.join(" - ")}${spacedSuffix}`;
};

const getGoogleCalendarUrl = (program: Program) => {
  if (!program.applicationDeadline) return "";

  const endDateObj = new Date(program.applicationDeadline);
  if (isNaN(endDateObj.getTime())) return "";

  let startDateObj = program.applicationStart ? new Date(program.applicationStart) : null;
  if (!startDateObj || isNaN(startDateObj.getTime())) {
    startDateObj = new Date(endDateObj.getTime() - 60 * 60 * 1000); // Default to 1 hour before deadline
  }

  const pad = (n: number) => (n < 10 ? "0" + n : n);
  const formatUTC = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;

  const startDate = formatUTC(startDateObj);
  const endDate = formatUTC(endDateObj);

  const text = encodeURIComponent(`${program.name} Application`);
  const details = encodeURIComponent(`Apply here: ${program.website}`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${startDate}/${endDate}&details=${details}`;
};

const BROWSER_ROUTES: Record<string, string> = {
  "Outreachy": "/student/opensource/outreachy-orgs",
  "LFX Mentorship": "/student/opensource/lfx-projects",
  "Season of Docs": "/student/opensource/season-of-docs",
  "MLH Fellowship": "/student/opensource/mlh",
};

const getProgramBrowserRoute = (program: Program) => {
  return BROWSER_ROUTES[program.name];
};

// ─── Program Card ─────────────────────────────────────────────
function ProgramCard({ program, tracked, onToggleTrack }: { program: Program; tracked: boolean; onToggleTrack: (slug: string, track: boolean) => void }) {
  const [expanded, setExpanded] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const localStipendEstimate = program.stipendPaid ? getLocalStipendEstimate(program.stipend) : null;
  const urgency = getUrgency(program);

  const handleDownloadIcs = async () => {
    setDownloading(true);
    try {
      const res = await api.get(`/opensource/programs/${program.slug}/ics`);
      const data = res.data;
      if (data.events) {
        for (const event of data.events) {
          const blob = new Blob([event.content], { type: "text/calendar;charset=utf-8" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = event.filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
      }
    } catch {
      toast.error("Could not download calendar file");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div
      className={`bg-white dark:bg-stone-900 rounded-2xl border shadow-sm overflow-hidden transition-shadow hover:shadow-md ${program.bgColor}`}
    >
      {urgency?.level === "critical" && (
        <div className="flex items-center gap-2 px-5 py-2 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-900">
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 bg-lime-400 shrink-0"
          />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            closing soon · {urgency.days} days left
          </span>
        </div>
      )}

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {urgency?.level === "closed" && (
              <span className="px-2.5 py-1 rounded-md text-xs font-bold shrink-0 bg-stone-500 text-white">
                Closed
              </span>
            )}
            <div
              className={`px-2.5 py-1 rounded-md text-xs font-bold shrink-0 ${program.bgColor} ${program.color} border`}
            >
              {program.short}
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-stone-900 dark:text-white leading-tight">
                {program.name}
              </h3>
              <div className="flex flex-wrap items-center gap-1.5 mt-1">
                <span
                  className={`px-2 py-0.5 text-[10px] font-medium rounded-md ${STATUS_STYLE[program.status]}`}
                >
                  {program.status}
                </span>
                <span
                  className={`px-2 py-0.5 text-[10px] font-medium rounded-md ${ELIGIBILITY_STYLE[program.eligibilityType]}`}
                >
                  {program.eligibilityType}
                </span>
                {urgency?.level === "closed" && (
                  <>
                    <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700 shrink-0" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">closed</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Stipend */}
          <div className="text-right shrink-0">
            {program.stipendPaid ? (
              <div className="flex items-center justify-end gap-1 text-emerald-700">
                <DollarSign className="w-3.5 h-3.5" />
                <span className="text-sm font-bold">
                  {program.stipend.split(" ")[0]}
                </span>
              </div>
            ) : (
              <span className="text-xs text-stone-400 font-medium">
                No stipend
              </span>
            )}
            {program.stipendPaid && (
              <>
                <p className="text-xs text-stone-400 mt-0.5">USD {program.stipend}</p>
                {localStipendEstimate && (
                  <p
                    className="text-xs font-mono text-lime-600 dark:text-lime-400 mt-0.5"
                    title="Approximate local value based on current exchange rates."
                  >
                    {localStipendEstimate}
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mt-3">
          {program.description}
        </p>

        {/* Key info row */}
        <div className="flex flex-wrap gap-4 mt-3 text-xs text-stone-500">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-stone-400" />
            {program.window}
          </span>
          <span className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-stone-400" />
            {program.region}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-stone-400" />
            {program.eligibility.length > 50
              ? program.eligibility.slice(0, 50) + "…"
              : program.eligibility}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
          {program.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 bg-stone-50 dark:bg-stone-800 text-stone-500 text-[10px] rounded-md border border-stone-100 dark:border-stone-700"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Countdown */}
        {(() => {
          const cd = getCountdown(program);
          return cd ? (
            <div
              className={`flex items-center gap-1 mt-2 text-xs ${cd.className}`}
            >
              <Calendar className="w-3.5 h-3.5" />
              {cd.text}
            </div>
          ) : null;
        })()}
        {/* Expand / CTA row */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-stone-100 dark:border-stone-800">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
          >
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            {expanded ? "less" : "full details"}
          </Button>

          <div className="flex gap-2">
            {program.applicationDeadline ? (
              <a
                href={getGoogleCalendarUrl(program)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-md border border-stone-200 dark:border-stone-700 transition-colors cursor-pointer no-underline"
              >
                <CalendarPlus className="w-3 h-3" /> Calendar
              </a>
            ) : (
              <div className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-stone-500 dark:text-stone-400 bg-stone-50 dark:bg-stone-800/50 rounded-md border border-stone-200 dark:border-stone-800">
                <Calendar className="w-3 h-3" /> Deadline: TBA
              </div>
            )}
            <button
              type="button"
              onClick={handleDownloadIcs}
              disabled={downloading}
              className="flex items-center gap-1 px-3 py-1.5 min-h-[44px] text-xs font-semibold text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-md border border-stone-200 dark:border-stone-700 transition-colors cursor-pointer disabled:opacity-50"
              title="Download .ics calendar file"
            >
              <Download className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => program.slug && onToggleTrack(program.slug, !tracked)}
              className={`flex items-center gap-1 px-3 py-1.5 min-h-[44px] text-xs font-semibold rounded-md border transition-colors cursor-pointer ${
                tracked
                  ? "text-lime-700 dark:text-lime-400 bg-lime-50 dark:bg-lime-900/20 border-lime-200 dark:border-lime-800/30"
                  : "text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-700"
              }`}
              title={tracked ? "Stop tracking" : "Track this program"}
            >
              <Bookmark className={`w-3 h-3 ${tracked ? "fill-current" : ""}`} />
            </button>
            <a href={program.website} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 min-h-[44px] text-xs font-semibold text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-md border border-stone-200 dark:border-stone-700 no-underline transition-colors">

              <Globe className="w-3 h-3" /> Website <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <a
              href={program.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 min-h-[44px] text-xs font-semibold text-white dark:text-stone-950 bg-stone-950 dark:bg-white hover:bg-stone-800 dark:hover:bg-stone-200 rounded-md no-underline transition-colors"
            >
              Apply <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
            {getProgramBrowserRoute(program) ? (
              <Link
                to={getProgramBrowserRoute(program)!}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-50 hover:bg-stone-100 dark:bg-white/5 dark:hover:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md no-underline transition-colors"
              >
                Browse Organizations
              </Link>
            ) : null}
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
            className="overflow-hidden border-t border-stone-100 dark:border-stone-800"
          >
            <div className="p-5 bg-stone-50 dark:bg-stone-950 grid md:grid-cols-3 gap-6">
              {/* Requirements */}
              <div>
                <h4 className="text-xs font-bold text-stone-900 dark:text-white uppercase tracking-wide mb-3">
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {(program.requirements ?? []).map((r, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-900 dark:text-white uppercase tracking-wide mb-3">
                  Timeline
                </h4>
                <div className="space-y-2">
                  {(program.timeline ?? []).map((t, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-md bg-stone-400 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-stone-900 dark:text-white">
                          {t.phase}
                        </p>
                        <p className="text-[10px] text-stone-500">{t.dates}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-900 dark:text-white uppercase tracking-wide mb-3">
                  How to Apply
                </h4>
                <ol className="space-y-2">
                  {(program.howToApply ?? []).map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400"
                    >
                      <span className="w-4 h-4 rounded-md bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
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
  useEffect(() => {
    markLearningPathMilestone("mentor-program");
  }, []);

  // Load saved filters from localStorage on mount, fall back to defaults
  const getSavedFilters = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          return {
            status: STATUS_OPTIONS.includes(parsed.status) ? parsed.status : "All",
            eligibility: ELIGIBILITY_OPTIONS.includes(parsed.eligibility) ? parsed.eligibility : "All",
            stipend: STIPEND_OPTIONS.includes(parsed.stipend) ? parsed.stipend : "All",
            sortBy: SORT_OPTIONS.some((o) => o.value === parsed.sortBy) ? parsed.sortBy : "default",
          };
        }
      }
    } catch {
      // ignore errors
    }
    return { status: "All", eligibility: "All", stipend: "All", sortBy: "default" };
  };

  const savedFilters = getSavedFilters();

  const { user } = useAuthStore();
  const queryClient = useQueryClient();

  const { data: serverPrograms } = useQuery({
    queryKey: ["opensource-programs"],
    queryFn: () => api.get("/opensource/programs").then((r) => r.data.programs),
    staleTime: 600000,
  });

  const { data: trackedData } = useQuery({
    queryKey: ["opensource-programs-tracked"],
    queryFn: () => api.get("/opensource/programs/tracked/mine").then((r) => r.data.programs),
    staleTime: 60000,
    enabled: !!user,
  });

  const trackMutation = useMutation({
    mutationFn: (body: { slug: string; tracked: boolean }) =>
      api.post("/opensource/programs/track", body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["opensource-programs-tracked"] });
    },
    onError: () => {
      toast.error("Failed to update tracking");
    },
  });

  const trackedSlugs = useMemo(() => {
    if (!trackedData) return new Set<string>();
    return new Set(trackedData.map((p: any) => p.slug));
  }, [trackedData]);

  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>(savedFilters.status);
  const [selectedEligibility, setSelectedEligibility] = useState<string>(savedFilters.eligibility);
  const [activeFocus, setActiveFocus] = useState<string>("All");
  const [selectedStipend, setSelectedStipend] = useState<string>(savedFilters.stipend);
  const [sortBy, setSortBy] = useState<string>(savedFilters.sortBy);
  const [showTrackedOnly, setShowTrackedOnly] = useState(false);

  // Save filters to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          status: selectedStatus,
          eligibility: selectedEligibility,
          stipend: selectedStipend,
          sortBy: sortBy,
        })
      );
    } catch {
      // ignore storage errors
    }
  }, [selectedStatus, selectedEligibility, selectedStipend, sortBy]);

  const programsSource = useMemo(() => {
    if (serverPrograms && serverPrograms.length > 0) {
      return serverPrograms.map((p: any) => ({
        ...p,
        status: p.window === "Ongoing" ? "Ongoing" : "Annual",
        eligibilityType: p.eligibilityType || "Open to All",
        stipendPaid: !!p.stipend,
        stipendRange: p.stipendRange || "Medium",
        startDate: p.applicationStart,
        website: p.website || "",
        applyUrl: p.applyUrl || "",
        timeline: p.timeline || [],
        howToApply: p.howToApply || "",
      }));
    }
    return PROGRAMS;
  }, [serverPrograms]);

  const filtered = useMemo(() => {
    let list = [...programsSource];
    if (showTrackedOnly) {
      list = list.filter((p) => trackedSlugs.has(p.slug));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.tags && p.tags.some((t: string) => t.toLowerCase().includes(q))),
      );
    }
    if (selectedStatus !== "All")
      list = list.filter((p) => p.status === selectedStatus);
    if (selectedEligibility !== "All")
      list = list.filter((p) => p.eligibilityType === selectedEligibility);
    if (activeFocus !== "All")
      list = list.filter((p) => p.focusArea === activeFocus);
    if (selectedStipend === "Paid") list = list.filter((p) => p.stipendPaid);
    if (selectedStipend === "High ($5k+)") list = list.filter((p) => p.stipendRange === "High");
    if (selectedStipend === "Medium ($1k–5k)") list = list.filter((p) => p.stipendRange === "Medium");
    if (selectedStipend === "Low/None") list = list.filter((p) => p.stipendRange === "Low/None");

    if (sortBy === "deadline-asc") {
      list.sort((a, b) => {
        const dateA = a.applicationDeadline ? new Date(a.applicationDeadline).getTime() : Infinity;
        const dateB = b.applicationDeadline ? new Date(b.applicationDeadline).getTime() : Infinity;
        return dateA - dateB;
      });
    } else if (sortBy === "deadline-desc") {
      list.sort((a, b) => {
        const dateA = a.applicationDeadline ? new Date(a.applicationDeadline).getTime() : -Infinity;
        const dateB = b.applicationDeadline ? new Date(b.applicationDeadline).getTime() : -Infinity;
        return dateB - dateA;
      });
    } else if (sortBy === "stipend-desc") {
      const rank: Record<string, number> = { High: 3, Medium: 2, "Low/None": 1 };
      list.sort((a, b) => {
        const aVal = rank[a.stipendRange] || 0;
        const bVal = rank[b.stipendRange] || 0;
        if (bVal !== aVal) return bVal - aVal;
        return Number(b.stipendPaid) - Number(a.stipendPaid);
      });
    } else if (sortBy === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [search, selectedStatus, selectedEligibility, selectedStipend, sortBy, activeFocus, showTrackedOnly, programsSource, trackedSlugs]);

  const totalStipend = programsSource.filter((p: Program) => p.stipendPaid).length;
  const highStipend = programsSource.filter((p: Program) => p.stipendRange === "High").length;

  const programEventsSchema = PROGRAMS.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": `${p.name} 2026 Cohort Application Timeline`,
    "description": `Deadlines and tracking rules for the ${p.name} program application window.`,
    "startDate": p.startDate ?? p.applicationStart ?? "2026-01-15T00:00:00Z",
    "endDate": p.deadline ? `${p.deadline}T23:59:59Z` : p.applicationDeadline ?? "2026-11-30T23:59:59Z",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": { "@type": "VirtualLocation", "url": "https://internhack.io/student/opensource" },
    "organizer": { "@type": "Organization", "name": p.name }
  }));

  return (
    <div className="relative pb-12">
      <SEO
        title="Open Source Program Tracker - Deadlines & Stipends"
        description="Track deadlines, eligibility, and stipends for GSoC, LFX, MLH Fellowship, Outreachy, and 20+ other open source programs."
        keywords="GSoC tracker, LFX mentorship, open source internships, Outreachy deadline, paid open source"
        canonicalUrl={canonicalUrl("/student/opensource/programs")}
        ogImage="/og/og-programs.png"
        structuredData={programEventsSchema}
      />
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="relative border-b border-stone-200 dark:border-white/10 pb-10 mb-8 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none dark:hidden"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(23,23,23,0.04) 1px, transparent 1px)",
            backgroundSize: "140px 100%",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "140px 100%",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 bg-lime-400"
            />
            opensource / programs
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none text-stone-900 dark:text-stone-50 mb-4">
            Open source{" "}
            <span className="relative inline-block">
              <span className="relative z-10">programs.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
              />
            </span>
          </h1>

          <p className="text-base text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
            Every major program in one place: deadlines, stipends, eligibility, and step-by-step application guides.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="relative z-10 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-xl overflow-hidden"
        >
          {[
            { value: PROGRAMS.length, label: "programs listed" },
            { value: totalStipend, label: "paid programs" },
            { value: highStipend, label: "high stipend ($5k+)" },
            { value: PROGRAMS.filter((p) => p.eligibilityType === "Diversity-focused").length, label: "diversity programs" },
          ].map((s) => (
            <div key={s.label} className="bg-stone-50 dark:bg-stone-950 p-4 sm:p-5 flex flex-col items-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
                {s.value}
              </div>
              <div className="mt-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 leading-snug text-center">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Next deadline sticky bar ───────────────────────── */}
      {NEXT_DEADLINE && (
        <div className="sticky top-0 z-10 mb-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 rounded-md px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <p className="text-xs font-medium text-stone-700 dark:text-stone-300">
              Next deadline:{" "}
              <span className="font-bold text-stone-900 dark:text-stone-50">{NEXT_DEADLINE.program.name}</span>
              {" "}closes in{" "}
              <span className="font-bold text-lime-600 dark:text-lime-400">{NEXT_DEADLINE.days} days</span>
            </p>
          </div>
          <a
            href={NEXT_DEADLINE.program.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 px-3 py-1.5 rounded-md transition-colors no-underline"
          >
            View <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* ── Filter bar ────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search programs..."
            className="w-full pl-9 pr-4 py-2.5 border border-stone-200 dark:border-stone-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-300 bg-white dark:bg-stone-800 dark:text-white dark:placeholder-stone-500"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {[
            { label: "Status", value: selectedStatus, options: STATUS_OPTIONS, set: setSelectedStatus },
            { label: "Eligibility", value: selectedEligibility, options: ELIGIBILITY_OPTIONS, set: setSelectedEligibility },
            { label: "Focus", value: activeFocus, options: FOCUS_AREA_OPTIONS, set: setActiveFocus },
            { label: "Stipend", value: selectedStipend, options: STIPEND_OPTIONS, set: setSelectedStipend },
          ].map(({ label, value, options, set }) => (
            <div key={label} className="relative group">
              <Button variant="secondary" size="sm">
                <Filter className="w-3 h-3" />
                <span className="text-stone-400">{label}:</span>
                <span className="font-semibold text-stone-900 dark:text-white">
                  {value}
                </span>
                <ChevronDown className="w-3 h-3 opacity-50" />
              </Button>
              <div className="absolute left-0 top-full z-20 mt-1 hidden min-w-[170px] max-h-[200px] overflow-y-auto rounded-md border border-stone-100 dark:border-stone-700 bg-white dark:bg-stone-800 p-1 shadow-xl group-hover:block">
                {options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => set(opt)}
                    className={`w-full justify-start ${value === opt ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium" : "text-stone-600 dark:text-stone-300"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
          {!!user && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowTrackedOnly((prev) => !prev)}
              className={showTrackedOnly ? "bg-lime-50 dark:bg-lime-900/20 border-lime-200 dark:border-lime-800 text-lime-700 dark:text-lime-400 font-medium" : "text-stone-600 dark:text-stone-300"}
            >
              <Bookmark className={`w-3.5 h-3.5 mr-1.5 ${showTrackedOnly ? "fill-current" : ""}`} />
              Tracked only
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSortBy((prev) => (prev === "deadline" ? "default" : "deadline"))}
            className={sortBy === "deadline" ? "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 font-medium" : "text-stone-600 dark:text-stone-300"}
          >
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            Sort by deadline
          </Button>
          {(selectedStatus !== "All" || selectedEligibility !== "All" || selectedStipend !== "All" || search || sortBy !== "default" || showTrackedOnly) && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => { setSearch(""); setSelectedStatus("All"); setSelectedEligibility("All"); setSelectedStipend("All"); setSortBy("default"); setShowTrackedOnly(false); }}
              className="text-stone-500"
            >
              <X className="w-3.5 h-3.5" /> Clear
            </Button>
          )}
        </div>
      </div>

      <p className="text-sm text-stone-400 mb-5">
        Showing{" "}
        <span className="font-semibold text-stone-900 dark:text-white">
          {filtered.length}
        </span>{" "}
        of {programsSource.length} programs
      </p>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-stone-50 dark:bg-stone-950 rounded-2xl">
          <GraduationCap className="w-10 h-10 text-stone-200 mx-auto mb-3" />
          <p className="text-sm text-stone-500 font-medium">
            No programs match your filters
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((program) => (
            <motion.div
              key={program.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ProgramCard
                program={program}
                tracked={trackedSlugs.has(program.slug)}
                onToggleTrack={(slug, track) => trackMutation.mutate({ slug, tracked: track })}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Tip */}
      <div className="mt-8 p-5 border border-stone-200 dark:border-white/10 rounded-md bg-stone-50 dark:bg-stone-900/50">
        <div className="flex items-start gap-3">
          <span className="h-1.5 w-1.5 bg-lime-400 shrink-0 mt-2" />
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 mb-1">
              Apply to multiple programs simultaneously
            </p>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              GSoC and Outreachy application windows often overlap with GSSoC and Hacktoberfest. Diversify your applications: each program has different evaluation criteria and your contributions to one project can strengthen proposals in others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}