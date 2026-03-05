/**
 * Seed jobs for the browse jobs section.
 * Creates a recruiter user (if needed) and seeds published job listings.
 *
 * Usage: npx tsx seed-jobs.ts
 */

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const connectionString = process.env["DATABASE_URL"] ?? "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const jobs = [
  {
    title: "Frontend Developer Intern",
    description:
      "Join our team to build modern web interfaces using React and TypeScript. You'll work on real features, collaborate with designers, and ship production code. Ideal for students with basic React knowledge looking for hands-on experience.",
    location: "Pune, Maharashtra",
    salary: "₹15,000 - ₹25,000/month",
    company: "Persistent Systems",
    tags: ["React", "TypeScript", "CSS", "Intern", "Frontend"],
    deadline: new Date(Date.now() + 30 * 86400000),
  },
  {
    title: "Backend Developer Intern",
    description:
      "Work on scalable backend services using Node.js and Express. You'll help design APIs, write database queries, and implement business logic. Great opportunity to learn production-grade backend engineering.",
    location: "Pune, Maharashtra",
    salary: "₹15,000 - ₹25,000/month",
    company: "Icertis",
    tags: ["Node.js", "Express", "PostgreSQL", "Intern", "Backend"],
    deadline: new Date(Date.now() + 25 * 86400000),
  },
  {
    title: "Full Stack Developer",
    description:
      "Build end-to-end features for our SaaS platform. You'll work across React frontend and Node.js backend, handling everything from UI components to API endpoints and database design.",
    location: "Bangalore, Karnataka",
    salary: "₹6,00,000 - ₹10,00,000/year",
    company: "PhonePe",
    tags: ["React", "Node.js", "TypeScript", "Full Stack", "SaaS"],
    deadline: new Date(Date.now() + 45 * 86400000),
  },
  {
    title: "Data Science Intern",
    description:
      "Analyze large datasets, build predictive models, and create data visualizations. Work with Python, Pandas, and scikit-learn on real business problems in the fintech domain.",
    location: "Mumbai, Maharashtra",
    salary: "₹20,000 - ₹35,000/month",
    company: "Bajaj Finserv Technology",
    tags: ["Python", "Machine Learning", "Pandas", "Intern", "Data Science"],
    deadline: new Date(Date.now() + 20 * 86400000),
  },
  {
    title: "DevOps Engineer Intern",
    description:
      "Learn CI/CD pipelines, Docker, Kubernetes, and cloud infrastructure (AWS). You'll help automate deployments and improve developer experience for our engineering teams.",
    location: "Hyderabad, Telangana",
    salary: "₹20,000 - ₹30,000/month",
    company: "TCS Pune",
    tags: ["Docker", "Kubernetes", "AWS", "CI/CD", "Intern", "DevOps"],
    deadline: new Date(Date.now() + 35 * 86400000),
  },
  {
    title: "UI/UX Design Intern",
    description:
      "Design intuitive user interfaces and conduct user research. You'll create wireframes, prototypes, and high-fidelity mockups using Figma while working closely with product and engineering teams.",
    location: "Pune, Maharashtra",
    salary: "₹12,000 - ₹20,000/month",
    company: "Harbinger Group",
    tags: ["Figma", "UI/UX", "Prototyping", "Intern", "Design"],
    deadline: new Date(Date.now() + 15 * 86400000),
  },
  {
    title: "Mobile App Developer (React Native)",
    description:
      "Build cross-platform mobile applications using React Native and Expo. You'll implement new features, fix bugs, and optimize performance for our consumer-facing mobile app.",
    location: "Bangalore, Karnataka",
    salary: "₹8,00,000 - ₹14,00,000/year",
    company: "PhonePe",
    tags: ["React Native", "Expo", "TypeScript", "Mobile", "iOS", "Android"],
    deadline: new Date(Date.now() + 40 * 86400000),
  },
  {
    title: "Java Backend Developer",
    description:
      "Design and implement microservices using Java and Spring Boot. Work on high-throughput payment processing systems handling millions of transactions daily.",
    location: "Pune, Maharashtra",
    salary: "₹10,00,000 - ₹18,00,000/year",
    company: "Mastercard Technology",
    tags: ["Java", "Spring Boot", "Microservices", "Kafka", "Backend"],
    deadline: new Date(Date.now() + 30 * 86400000),
  },
  {
    title: "Python Developer Intern",
    description:
      "Write Python scripts and APIs for data processing pipelines. You'll work with FastAPI, PostgreSQL, and AWS services. Perfect for students who love Python and want to build production systems.",
    location: "Remote",
    salary: "₹15,000 - ₹25,000/month",
    company: "Searce",
    tags: ["Python", "FastAPI", "AWS", "Intern", "Backend"],
    deadline: new Date(Date.now() + 22 * 86400000),
  },
  {
    title: "Cloud Engineer Intern",
    description:
      "Get hands-on experience with Google Cloud Platform. You'll help set up infrastructure, write Terraform configs, and support production workloads. GCP certification support provided.",
    location: "Pune, Maharashtra",
    salary: "₹20,000 - ₹30,000/month",
    company: "Searce",
    tags: ["Google Cloud", "Terraform", "Linux", "Intern", "Cloud"],
    deadline: new Date(Date.now() + 28 * 86400000),
  },
  {
    title: "Cybersecurity Analyst Intern",
    description:
      "Join our security operations center to monitor threats, analyze incidents, and assist with vulnerability assessments. Learn SIEM tools, threat hunting, and security best practices.",
    location: "Pune, Maharashtra",
    salary: "₹18,000 - ₹28,000/month",
    company: "Quick Heal Technologies",
    tags: ["Cybersecurity", "SIEM", "SOC", "Intern", "Security"],
    deadline: new Date(Date.now() + 18 * 86400000),
  },
  {
    title: "Software Engineer (Go/Golang)",
    description:
      "Build high-performance distributed systems in Go. You'll work on cloud data protection services processing petabytes of data. Strong CS fundamentals and Go experience required.",
    location: "Pune, Maharashtra",
    salary: "₹12,00,000 - ₹22,00,000/year",
    company: "Druva",
    tags: ["Go", "Golang", "Distributed Systems", "AWS", "Backend"],
    deadline: new Date(Date.now() + 50 * 86400000),
  },
  {
    title: "Frontend Engineer (Angular)",
    description:
      "Build enterprise-grade web applications using Angular and TypeScript. Work on banking and financial platforms serving millions of users with a focus on performance and accessibility.",
    location: "Pune, Maharashtra",
    salary: "₹8,00,000 - ₹15,00,000/year",
    company: "Barclays Technology Centre",
    tags: ["Angular", "TypeScript", "RxJS", "Frontend", "Fintech"],
    deadline: new Date(Date.now() + 35 * 86400000),
  },
  {
    title: "Machine Learning Engineer Intern",
    description:
      "Work on AI/ML models for fraud detection and risk assessment. You'll train models, evaluate performance, and help deploy ML pipelines using Python, TensorFlow, and cloud services.",
    location: "Bangalore, Karnataka",
    salary: "₹25,000 - ₹40,000/month",
    company: "Mastercard Technology",
    tags: ["Python", "TensorFlow", "ML", "AI", "Intern"],
    deadline: new Date(Date.now() + 25 * 86400000),
  },
  {
    title: "QA Automation Engineer Intern",
    description:
      "Write automated tests using Selenium, Cypress, or Playwright. Help build and maintain test suites that ensure software quality. Good opportunity to learn test-driven development.",
    location: "Pune, Maharashtra",
    salary: "₹12,000 - ₹20,000/month",
    company: "Cybage Software",
    tags: ["Selenium", "Cypress", "Testing", "QA", "Intern"],
    deadline: new Date(Date.now() + 20 * 86400000),
  },
  {
    title: "Embedded Systems Intern",
    description:
      "Work on embedded software for automotive systems using C/C++ and AUTOSAR. You'll help develop and test software for next-gen connected and autonomous vehicles.",
    location: "Pune, Maharashtra",
    salary: "₹20,000 - ₹30,000/month",
    company: "KPIT Technologies",
    tags: ["C++", "Embedded C", "AUTOSAR", "Automotive", "Intern"],
    deadline: new Date(Date.now() + 30 * 86400000),
  },
  {
    title: "Technical Content Writer Intern",
    description:
      "Write technical documentation, API guides, and blog posts. You'll turn complex engineering concepts into clear, developer-friendly content. Strong writing skills and basic coding knowledge required.",
    location: "Remote",
    salary: "₹10,000 - ₹18,000/month",
    company: "GlobalLogic",
    tags: ["Technical Writing", "Documentation", "API Docs", "Intern", "Content"],
    deadline: new Date(Date.now() + 15 * 86400000),
  },
  {
    title: "Site Reliability Engineer",
    description:
      "Ensure 99.99% uptime for our critical financial services infrastructure. You'll manage monitoring, alerting, incident response, and capacity planning across multiple cloud environments.",
    location: "Pune, Maharashtra",
    salary: "₹14,00,000 - ₹24,00,000/year",
    company: "HSBC Technology India",
    tags: ["SRE", "Kubernetes", "Prometheus", "Grafana", "Cloud"],
    deadline: new Date(Date.now() + 45 * 86400000),
  },
  {
    title: "Product Manager Intern",
    description:
      "Help define product roadmaps, write user stories, and analyze metrics. You'll work with engineering and design teams to ship features that improve user experience for our event management platform.",
    location: "Pune, Maharashtra",
    salary: "₹18,000 - ₹28,000/month",
    company: "Cvent India",
    tags: ["Product Management", "Analytics", "Agile", "Intern"],
    deadline: new Date(Date.now() + 20 * 86400000),
  },
  {
    title: "IoT Developer Intern",
    description:
      "Build IoT solutions for smart agriculture using sensors, microcontrollers, and cloud services. You'll help develop telematics platforms that connect farming equipment to the cloud.",
    location: "Pune, Maharashtra",
    salary: "₹18,000 - ₹25,000/month",
    company: "John Deere Technology Centre",
    tags: ["IoT", "Python", "AWS", "Embedded", "Intern"],
    deadline: new Date(Date.now() + 25 * 86400000),
  },
];

async function seedJobs() {
  console.log("Seeding jobs...\n");

  // Find or create a recruiter user
  let recruiter = await prisma.user.findFirst({ where: { role: "RECRUITER" } });
  if (!recruiter) {
    recruiter = await prisma.user.upsert({
      where: { email: "recruiter@internhack.com" },
      update: {},
      create: {
        name: "InternHack Recruiter",
        email: "recruiter@internhack.com",
        password: "$2a$10$EqHuL3qAJkLk6qvXkZzGxeJ5N5k7f7/Z2k3a5w1Q9Hj7KjzXMRWHi",
        role: "RECRUITER",
        company: "InternHack",
        designation: "Talent Acquisition",
      },
    });
    console.log(`  Created recruiter: ${recruiter.email}`);
  }

  let created = 0;
  let skipped = 0;

  for (const jobData of jobs) {
    // Skip if a job with the same title + company already exists
    const existing = await prisma.job.findFirst({
      where: { title: jobData.title, company: jobData.company },
    });
    if (existing) {
      console.log(`  SKIP: ${jobData.title} at ${jobData.company}`);
      skipped++;
      continue;
    }

    await prisma.job.create({
      data: {
        title: jobData.title,
        description: jobData.description,
        location: jobData.location,
        salary: jobData.salary,
        company: jobData.company,
        status: "PUBLISHED",
        tags: jobData.tags,
        deadline: jobData.deadline,
        customFields: [],
        recruiterId: recruiter.id,
      },
    });

    console.log(`  ADDED: ${jobData.title} at ${jobData.company}`);
    created++;
  }

  console.log(`\nDone! Created: ${created}, Skipped: ${skipped}, Total: ${jobs.length}`);
}

seedJobs()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
