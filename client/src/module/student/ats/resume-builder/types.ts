export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  portfolio: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string;
  link: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: WorkExperience[];
  education: Education[];
  skills: string[];
  projects: Project[];
  certifications: Certification[];
}

export type TemplateId = "classic" | "modern" | "minimal" | "professional" | "creative" | "compact";

export interface TemplateConfig {
  id: TemplateId;
  name: string;
  description: string;
  accent: string;
  component: React.ComponentType<{ data: ResumeData }>;
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    fullName: "Arjun Mehta",
    email: "arjun.mehta@email.com",
    phone: "+91 98765 43210",
    location: "Pune, Maharashtra",
    linkedIn: "linkedin.com/in/arjunmehta",
    portfolio: "arjunmehta.dev",
  },
  summary:
    "Final-year Computer Science student with hands-on experience building full-stack web applications. Proficient in React, Node.js, and Python. Passionate about solving real-world problems through clean, scalable code.",
  experience: [
    {
      id: "exp-1",
      company: "TechNova Solutions",
      title: "Software Engineering Intern",
      startDate: "May 2025",
      endDate: "",
      current: true,
      description:
        "- Built a real-time analytics dashboard using React and D3.js serving 5K+ daily users\n- Optimized REST APIs with Redis caching, reducing average response time by 35%\n- Collaborated with a 6-person agile team across two-week sprint cycles",
    },
    {
      id: "exp-2",
      company: "CodeCraft Labs",
      title: "Frontend Developer Intern",
      startDate: "Jun 2024",
      endDate: "Aug 2024",
      current: false,
      description:
        "- Developed reusable component library adopted by 3 product teams\n- Migrated legacy jQuery codebase to React, improving load time by 50%\n- Wrote unit tests with Jest achieving 90% code coverage",
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "Pune Institute of Technology",
      degree: "B.Tech",
      field: "Computer Science & Engineering",
      startDate: "Aug 2022",
      endDate: "May 2026",
      gpa: "8.7/10",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Git",
    "Docker",
    "Tailwind CSS",
    "REST APIs",
  ],
  projects: [
    {
      id: "proj-1",
      name: "StudySync",
      description:
        "A collaborative study platform with real-time document editing, video calls, and AI-powered flashcard generation. Serves 200+ active student users.",
      techStack: "React, Node.js, Socket.io, PostgreSQL, OpenAI API",
      link: "github.com/arjunmehta/studysync",
    },
    {
      id: "proj-2",
      name: "ExpenseTracker CLI",
      description:
        "A command-line expense tracker with budget alerts, CSV export, and monthly spending visualizations. Published on npm with 300+ downloads.",
      techStack: "Node.js, TypeScript, SQLite, Chart.js",
      link: "github.com/arjunmehta/expense-cli",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Jan 2025",
    },
    {
      id: "cert-2",
      name: "Meta Front-End Developer",
      issuer: "Coursera / Meta",
      date: "Sep 2024",
    },
  ],
};
