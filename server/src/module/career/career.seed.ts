import "dotenv/config";
import { prisma } from "../../database/db.js";

interface SkillDef {
  name: string;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
}

interface ResourceDef {
  title: string;
  url: string;
  type: "ARTICLE" | "VIDEO" | "COURSE" | "BOOK" | "DOCUMENTATION" | "TUTORIAL";
  free: boolean;
}

interface ToolDef {
  name: string;
  url?: string;
  category?: string;
}

interface PhaseDef {
  title: string;
  description: string;
  orderIndex: number;
  durationWeeks: number;
  skills: SkillDef[];
  resources: ResourceDef[];
  tools: ToolDef[];
}

interface CareerDef {
  title: string;
  slug: string;
  description: string;
  category: "ENGINEERING" | "DESIGN" | "DATA" | "PRODUCT" | "MARKETING" | "DEVOPS" | "SECURITY" | "OTHER";
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  avgSalary: string;
  demandLevel: string;
  phases: PhaseDef[];
}

const careers: CareerDef[] = [
  // ──────────────────────────────────────────────────────────────
  // 1. Full-Stack Web Developer
  // ──────────────────────────────────────────────────────────────
  {
    title: "Full-Stack Web Developer",
    slug: "full-stack-web-developer",
    description:
      "Master both frontend and backend development to build complete web applications from scratch. This path covers HTML, CSS, JavaScript, React, Node.js, databases, and deployment.",
    category: "ENGINEERING",
    difficulty: "BEGINNER",
    avgSalary: "$70k-$130k",
    demandLevel: "High",
    phases: [
      {
        title: "Web Fundamentals",
        description:
          "Learn the core building blocks of the web: HTML for structure, CSS for styling, and JavaScript for interactivity.",
        orderIndex: 0,
        durationWeeks: 4,
        skills: [
          { name: "HTML5", level: "BEGINNER" },
          { name: "CSS3", level: "BEGINNER" },
          { name: "JavaScript Basics", level: "BEGINNER" },
          { name: "Responsive Design", level: "BEGINNER" },
          { name: "Git Basics", level: "BEGINNER" },
        ],
        resources: [
          {
            title: "MDN Web Docs",
            url: "https://developer.mozilla.org",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "freeCodeCamp",
            url: "https://www.freecodecamp.org",
            type: "COURSE",
            free: true,
          },
          {
            title: "The Odin Project",
            url: "https://www.theodinproject.com",
            type: "COURSE",
            free: true,
          },
        ],
        tools: [
          { name: "VS Code", category: "Editor" },
          { name: "Chrome DevTools", category: "Browser Tools" },
          { name: "Git", category: "Version Control" },
        ],
      },
      {
        title: "Frontend Frameworks",
        description:
          "Dive into modern frontend development with React and TypeScript for building dynamic user interfaces.",
        orderIndex: 1,
        durationWeeks: 6,
        skills: [
          { name: "React", level: "BEGINNER" },
          { name: "TypeScript", level: "BEGINNER" },
          { name: "State Management", level: "INTERMEDIATE" },
          { name: "CSS Frameworks", level: "BEGINNER" },
          { name: "API Integration", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "React Official Docs",
            url: "https://react.dev",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Scrimba React Course",
            url: "https://scrimba.com/learn/learnreact",
            type: "COURSE",
            free: true,
          },
          {
            title: "TypeScript Handbook",
            url: "https://www.typescriptlang.org/docs/handbook",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Vite", category: "Build Tool" },
          { name: "npm", category: "Package Manager" },
          { name: "React DevTools", category: "Browser Tools" },
        ],
      },
      {
        title: "Backend Development",
        description:
          "Build robust server-side applications with Node.js and Express, connecting to databases and implementing authentication.",
        orderIndex: 2,
        durationWeeks: 6,
        skills: [
          { name: "Node.js", level: "INTERMEDIATE" },
          { name: "Express.js", level: "INTERMEDIATE" },
          { name: "REST API Design", level: "INTERMEDIATE" },
          { name: "Database Design", level: "INTERMEDIATE" },
          { name: "Authentication", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "Node.js Docs",
            url: "https://nodejs.org/en/docs",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Express.js Guide",
            url: "https://expressjs.com/en/guide/routing.html",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Prisma Documentation",
            url: "https://www.prisma.io/docs",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Postman", category: "API Testing" },
          { name: "PostgreSQL", category: "Database" },
          { name: "Prisma", category: "ORM" },
        ],
      },
      {
        title: "Full-Stack Integration",
        description:
          "Bring everything together by deploying full-stack applications with CI/CD, testing, and performance optimization.",
        orderIndex: 3,
        durationWeeks: 4,
        skills: [
          { name: "Deployment", level: "INTERMEDIATE" },
          { name: "CI/CD", level: "INTERMEDIATE" },
          { name: "Testing", level: "INTERMEDIATE" },
          { name: "Performance Optimization", level: "INTERMEDIATE" },
          { name: "Security Basics", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "Vercel Docs",
            url: "https://vercel.com/docs",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "GitHub Actions Guide",
            url: "https://docs.github.com/en/actions",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Docker", category: "Containerization" },
          { name: "Vercel", category: "Deployment" },
          { name: "GitHub Actions", category: "CI/CD" },
        ],
      },
      {
        title: "Portfolio & Job Prep",
        description:
          "Build a compelling portfolio, prepare for technical interviews, and contribute to open source projects.",
        orderIndex: 4,
        durationWeeks: 3,
        skills: [
          { name: "Portfolio Projects", level: "INTERMEDIATE" },
          { name: "Resume Building", level: "INTERMEDIATE" },
          { name: "Interview Preparation", level: "INTERMEDIATE" },
          { name: "Open Source Contribution", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "interviewing.io",
            url: "https://interviewing.io",
            type: "ARTICLE",
            free: true,
          },
          {
            title: "GitHub Portfolio Guide",
            url: "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile",
            type: "ARTICLE",
            free: true,
          },
        ],
        tools: [
          { name: "GitHub", category: "Version Control" },
          { name: "LinkedIn", category: "Networking" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // 2. Frontend Developer
  // ──────────────────────────────────────────────────────────────
  {
    title: "Frontend Developer",
    slug: "frontend-developer",
    description:
      "Specialize in crafting beautiful, performant, and accessible user interfaces. Master HTML, CSS, JavaScript, React, and Next.js.",
    category: "ENGINEERING",
    difficulty: "BEGINNER",
    avgSalary: "$65k-$120k",
    demandLevel: "High",
    phases: [
      {
        title: "HTML & CSS Mastery",
        description:
          "Build a rock-solid foundation in semantic HTML and modern CSS layout techniques including Flexbox and Grid.",
        orderIndex: 0,
        durationWeeks: 4,
        skills: [
          { name: "Semantic HTML", level: "BEGINNER" },
          { name: "CSS Flexbox", level: "BEGINNER" },
          { name: "CSS Grid", level: "BEGINNER" },
          { name: "CSS Animations", level: "BEGINNER" },
          { name: "Accessibility", level: "BEGINNER" },
        ],
        resources: [
          {
            title: "CSS-Tricks",
            url: "https://css-tricks.com",
            type: "ARTICLE",
            free: true,
          },
          {
            title: "A11y Project",
            url: "https://www.a11yproject.com",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "VS Code", category: "Editor" },
          { name: "Figma", category: "Design" },
          { name: "Chrome DevTools", category: "Browser Tools" },
        ],
      },
      {
        title: "JavaScript Deep Dive",
        description:
          "Master modern JavaScript including ES6+ features, asynchronous programming, and module systems.",
        orderIndex: 1,
        durationWeeks: 5,
        skills: [
          { name: "ES6+", level: "BEGINNER" },
          { name: "DOM Manipulation", level: "INTERMEDIATE" },
          { name: "Async Programming", level: "INTERMEDIATE" },
          { name: "Error Handling", level: "BEGINNER" },
          { name: "Module Systems", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "JavaScript.info",
            url: "https://javascript.info",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Eloquent JavaScript",
            url: "https://eloquentjavascript.net",
            type: "BOOK",
            free: true,
          },
        ],
        tools: [
          { name: "Node.js", category: "Runtime" },
          { name: "ESLint", category: "Linter" },
          { name: "Prettier", category: "Formatter" },
        ],
      },
      {
        title: "React Ecosystem",
        description:
          "Build modern component-based UIs with React, hooks, routing, state management, and testing.",
        orderIndex: 2,
        durationWeeks: 6,
        skills: [
          { name: "React Components", level: "INTERMEDIATE" },
          { name: "Hooks", level: "INTERMEDIATE" },
          { name: "React Router", level: "INTERMEDIATE" },
          { name: "State Management", level: "INTERMEDIATE" },
          { name: "Testing with Vitest", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "React Docs",
            url: "https://react.dev",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Testing Library Docs",
            url: "https://testing-library.com/docs",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Vite", category: "Build Tool" },
          { name: "React DevTools", category: "Browser Tools" },
          { name: "Vitest", category: "Testing" },
        ],
      },
      {
        title: "Advanced Frontend",
        description:
          "Level up with Next.js, performance optimization, SEO, progressive web apps, and design systems.",
        orderIndex: 3,
        durationWeeks: 5,
        skills: [
          { name: "Next.js", level: "ADVANCED" },
          { name: "Performance Optimization", level: "ADVANCED" },
          { name: "SEO", level: "ADVANCED" },
          { name: "PWA", level: "ADVANCED" },
          { name: "Design Systems", level: "ADVANCED" },
        ],
        resources: [
          {
            title: "Next.js Docs",
            url: "https://nextjs.org/docs",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "web.dev",
            url: "https://web.dev",
            type: "ARTICLE",
            free: true,
          },
        ],
        tools: [
          { name: "Next.js", category: "Framework" },
          { name: "Lighthouse", category: "Performance" },
          { name: "Storybook", category: "Component Library" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // 3. Backend Developer
  // ──────────────────────────────────────────────────────────────
  {
    title: "Backend Developer",
    slug: "backend-developer",
    description:
      "Build scalable server-side systems, APIs, and microservices. Master Node.js, databases, API design, and cloud deployment.",
    category: "ENGINEERING",
    difficulty: "INTERMEDIATE",
    avgSalary: "$75k-$140k",
    demandLevel: "High",
    phases: [
      {
        title: "Programming Foundations",
        description:
          "Solidify your programming fundamentals with TypeScript, data structures, algorithms, and design patterns.",
        orderIndex: 0,
        durationWeeks: 4,
        skills: [
          { name: "TypeScript", level: "BEGINNER" },
          { name: "Data Structures", level: "INTERMEDIATE" },
          { name: "Algorithms", level: "INTERMEDIATE" },
          { name: "OOP Patterns", level: "BEGINNER" },
        ],
        resources: [
          {
            title: "TypeScript Handbook",
            url: "https://www.typescriptlang.org/docs/handbook",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "LeetCode",
            url: "https://leetcode.com",
            type: "COURSE",
            free: true,
          },
        ],
        tools: [
          { name: "VS Code", category: "Editor" },
          { name: "TypeScript Compiler", category: "Compiler" },
        ],
      },
      {
        title: "Server-Side Development",
        description:
          "Build production-grade servers with Node.js and Express, including middleware, error handling, and logging.",
        orderIndex: 1,
        durationWeeks: 6,
        skills: [
          { name: "Node.js Runtime", level: "INTERMEDIATE" },
          { name: "Express.js", level: "INTERMEDIATE" },
          { name: "Middleware", level: "INTERMEDIATE" },
          { name: "Error Handling", level: "INTERMEDIATE" },
          { name: "Logging", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "Node.js Best Practices",
            url: "https://github.com/goldbergyoni/nodebestpractices",
            type: "ARTICLE",
            free: true,
          },
          {
            title: "Express.js Docs",
            url: "https://expressjs.com",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Postman", category: "API Testing" },
          { name: "nodemon", category: "Development" },
          { name: "Winston", category: "Logging" },
        ],
      },
      {
        title: "Databases & ORMs",
        description:
          "Master relational and key-value databases, Prisma ORM, optimization techniques, and migrations.",
        orderIndex: 2,
        durationWeeks: 5,
        skills: [
          { name: "PostgreSQL", level: "INTERMEDIATE" },
          { name: "Redis", level: "INTERMEDIATE" },
          { name: "Prisma ORM", level: "INTERMEDIATE" },
          { name: "Database Optimization", level: "INTERMEDIATE" },
          { name: "Migrations", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "PostgreSQL Tutorial",
            url: "https://www.postgresql.org/docs/current/tutorial.html",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Prisma Docs",
            url: "https://www.prisma.io/docs",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Redis University",
            url: "https://university.redis.com",
            type: "COURSE",
            free: true,
          },
        ],
        tools: [
          { name: "PostgreSQL", category: "Database" },
          { name: "pgAdmin", category: "Database GUI" },
          { name: "Redis CLI", category: "Database" },
        ],
      },
      {
        title: "API Design & Architecture",
        description:
          "Design and build scalable APIs with REST, GraphQL, microservices, and message queues.",
        orderIndex: 3,
        durationWeeks: 5,
        skills: [
          { name: "REST Best Practices", level: "ADVANCED" },
          { name: "GraphQL", level: "ADVANCED" },
          { name: "Microservices", level: "ADVANCED" },
          { name: "Message Queues", level: "ADVANCED" },
          { name: "API Documentation", level: "ADVANCED" },
        ],
        resources: [
          {
            title: "RESTful API Design",
            url: "https://restfulapi.net",
            type: "ARTICLE",
            free: true,
          },
          {
            title: "GraphQL Docs",
            url: "https://graphql.org/learn",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Swagger", category: "API Documentation" },
          { name: "Apollo Server", category: "GraphQL" },
          { name: "RabbitMQ", category: "Message Queue" },
        ],
      },
      {
        title: "DevOps for Backend",
        description:
          "Learn containerization, CI/CD pipelines, monitoring, cloud deployment, and load testing for backend systems.",
        orderIndex: 4,
        durationWeeks: 4,
        skills: [
          { name: "Docker", level: "ADVANCED" },
          { name: "CI/CD", level: "ADVANCED" },
          { name: "Monitoring", level: "ADVANCED" },
          { name: "Cloud Deployment", level: "ADVANCED" },
          { name: "Load Testing", level: "ADVANCED" },
        ],
        resources: [
          {
            title: "Docker Docs",
            url: "https://docs.docker.com",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "AWS Free Tier Guide",
            url: "https://aws.amazon.com/free",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Docker", category: "Containerization" },
          { name: "GitHub Actions", category: "CI/CD" },
          { name: "AWS", category: "Cloud" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // 4. Data Scientist
  // ──────────────────────────────────────────────────────────────
  {
    title: "Data Scientist",
    slug: "data-scientist",
    description:
      "Analyze data, build machine learning models, and extract actionable insights. Covers Python, statistics, ML, deep learning, and production deployment.",
    category: "DATA",
    difficulty: "INTERMEDIATE",
    avgSalary: "$80k-$150k",
    demandLevel: "High",
    phases: [
      {
        title: "Python & Math Foundations",
        description:
          "Build a strong foundation in Python programming, statistics, linear algebra, and probability for data science.",
        orderIndex: 0,
        durationWeeks: 5,
        skills: [
          { name: "Python Programming", level: "BEGINNER" },
          { name: "Statistics", level: "BEGINNER" },
          { name: "Linear Algebra", level: "BEGINNER" },
          { name: "Probability", level: "BEGINNER" },
          { name: "Data Wrangling", level: "BEGINNER" },
        ],
        resources: [
          {
            title: "Python.org Tutorial",
            url: "https://docs.python.org/3/tutorial",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Khan Academy Statistics",
            url: "https://www.khanacademy.org/math/statistics-probability",
            type: "COURSE",
            free: true,
          },
        ],
        tools: [
          { name: "Python", category: "Language" },
          { name: "Jupyter Notebook", category: "IDE" },
          { name: "Anaconda", category: "Distribution" },
        ],
      },
      {
        title: "Data Analysis & Visualization",
        description:
          "Master data manipulation with Pandas and NumPy, and create compelling visualizations with Matplotlib and Seaborn.",
        orderIndex: 1,
        durationWeeks: 5,
        skills: [
          { name: "Pandas", level: "INTERMEDIATE" },
          { name: "NumPy", level: "INTERMEDIATE" },
          { name: "Matplotlib", level: "INTERMEDIATE" },
          { name: "Seaborn", level: "INTERMEDIATE" },
          { name: "Exploratory Data Analysis", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "Pandas Documentation",
            url: "https://pandas.pydata.org/docs",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Kaggle Learn",
            url: "https://www.kaggle.com/learn",
            type: "COURSE",
            free: true,
          },
        ],
        tools: [
          { name: "Jupyter", category: "IDE" },
          { name: "Pandas", category: "Library" },
          { name: "Matplotlib", category: "Visualization" },
        ],
      },
      {
        title: "Machine Learning",
        description:
          "Learn supervised and unsupervised learning algorithms, model evaluation, and feature engineering with Scikit-learn.",
        orderIndex: 2,
        durationWeeks: 7,
        skills: [
          { name: "Scikit-learn", level: "INTERMEDIATE" },
          { name: "Supervised Learning", level: "INTERMEDIATE" },
          { name: "Unsupervised Learning", level: "INTERMEDIATE" },
          { name: "Model Evaluation", level: "INTERMEDIATE" },
          { name: "Feature Engineering", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "Scikit-learn Docs",
            url: "https://scikit-learn.org/stable/documentation.html",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Andrew Ng ML Course",
            url: "https://www.coursera.org/learn/machine-learning",
            type: "COURSE",
            free: true,
          },
        ],
        tools: [
          { name: "Scikit-learn", category: "ML Library" },
          { name: "Google Colab", category: "IDE" },
          { name: "MLflow", category: "ML Ops" },
        ],
      },
      {
        title: "Deep Learning & NLP",
        description:
          "Explore neural networks, deep learning frameworks, natural language processing, and computer vision.",
        orderIndex: 3,
        durationWeeks: 6,
        skills: [
          { name: "Neural Networks", level: "ADVANCED" },
          { name: "TensorFlow", level: "ADVANCED" },
          { name: "PyTorch", level: "ADVANCED" },
          { name: "NLP Basics", level: "ADVANCED" },
          { name: "Computer Vision", level: "ADVANCED" },
        ],
        resources: [
          {
            title: "TensorFlow Tutorials",
            url: "https://www.tensorflow.org/tutorials",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "fast.ai Course",
            url: "https://www.fast.ai",
            type: "COURSE",
            free: true,
          },
        ],
        tools: [
          { name: "TensorFlow", category: "Deep Learning" },
          { name: "PyTorch", category: "Deep Learning" },
          { name: "Hugging Face", category: "NLP" },
        ],
      },
      {
        title: "Production & Deployment",
        description:
          "Deploy machine learning models to production with MLOps practices, A/B testing, and data pipelines.",
        orderIndex: 4,
        durationWeeks: 4,
        skills: [
          { name: "Model Deployment", level: "ADVANCED" },
          { name: "MLOps", level: "ADVANCED" },
          { name: "A/B Testing", level: "ADVANCED" },
          { name: "Data Pipelines", level: "ADVANCED" },
        ],
        resources: [
          {
            title: "MLOps Guide",
            url: "https://ml-ops.org",
            type: "ARTICLE",
            free: true,
          },
          {
            title: "Streamlit Docs",
            url: "https://docs.streamlit.io",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Docker", category: "Containerization" },
          { name: "Streamlit", category: "App Framework" },
          { name: "Airflow", category: "Orchestration" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // 5. DevOps Engineer
  // ──────────────────────────────────────────────────────────────
  {
    title: "DevOps Engineer",
    slug: "devops-engineer",
    description:
      "Bridge development and operations by mastering containers, CI/CD, cloud platforms, infrastructure as code, and site reliability engineering.",
    category: "DEVOPS",
    difficulty: "INTERMEDIATE",
    avgSalary: "$85k-$155k",
    demandLevel: "High",
    phases: [
      {
        title: "Linux & Networking",
        description:
          "Build a solid foundation in Linux command line, networking fundamentals, shell scripting, and system administration.",
        orderIndex: 0,
        durationWeeks: 4,
        skills: [
          { name: "Linux CLI", level: "BEGINNER" },
          { name: "Networking Fundamentals", level: "BEGINNER" },
          { name: "Shell Scripting", level: "BEGINNER" },
          { name: "SSH", level: "BEGINNER" },
          { name: "File Systems", level: "BEGINNER" },
        ],
        resources: [
          {
            title: "Linux Journey",
            url: "https://linuxjourney.com",
            type: "COURSE",
            free: true,
          },
          {
            title: "Networking Basics",
            url: "https://www.cloudflare.com/learning",
            type: "ARTICLE",
            free: true,
          },
        ],
        tools: [
          { name: "Ubuntu", category: "Operating System" },
          { name: "Bash", category: "Shell" },
          { name: "VirtualBox", category: "Virtualization" },
        ],
      },
      {
        title: "Containers & Orchestration",
        description:
          "Master Docker containerization and Kubernetes orchestration for scalable application deployment.",
        orderIndex: 1,
        durationWeeks: 5,
        skills: [
          { name: "Docker", level: "INTERMEDIATE" },
          { name: "Docker Compose", level: "INTERMEDIATE" },
          { name: "Kubernetes Basics", level: "INTERMEDIATE" },
          { name: "Container Security", level: "INTERMEDIATE" },
          { name: "Image Optimization", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "Docker Docs",
            url: "https://docs.docker.com",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Kubernetes Docs",
            url: "https://kubernetes.io/docs",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Docker", category: "Containerization" },
          { name: "Kubernetes", category: "Orchestration" },
          { name: "Helm", category: "Package Manager" },
        ],
      },
      {
        title: "CI/CD & Automation",
        description:
          "Automate build, test, and deployment pipelines with GitHub Actions, Terraform, and configuration management tools.",
        orderIndex: 2,
        durationWeeks: 5,
        skills: [
          { name: "GitHub Actions", level: "INTERMEDIATE" },
          { name: "Jenkins", level: "INTERMEDIATE" },
          { name: "Terraform", level: "INTERMEDIATE" },
          { name: "Ansible", level: "INTERMEDIATE" },
          { name: "GitOps", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "GitHub Actions Docs",
            url: "https://docs.github.com/en/actions",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Terraform Tutorials",
            url: "https://developer.hashicorp.com/terraform/tutorials",
            type: "COURSE",
            free: true,
          },
        ],
        tools: [
          { name: "GitHub Actions", category: "CI/CD" },
          { name: "Terraform", category: "IaC" },
          { name: "Ansible", category: "Configuration Management" },
        ],
      },
      {
        title: "Cloud Platforms",
        description:
          "Gain expertise in major cloud platforms including AWS, Azure, and GCP, focusing on architecture and cost optimization.",
        orderIndex: 3,
        durationWeeks: 6,
        skills: [
          { name: "AWS Core Services", level: "ADVANCED" },
          { name: "Azure Basics", level: "ADVANCED" },
          { name: "GCP Overview", level: "ADVANCED" },
          { name: "Cloud Architecture", level: "ADVANCED" },
          { name: "Cost Optimization", level: "ADVANCED" },
        ],
        resources: [
          {
            title: "AWS Well-Architected",
            url: "https://aws.amazon.com/architecture/well-architected",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Cloud Academy",
            url: "https://cloudacademy.com",
            type: "COURSE",
            free: true,
          },
        ],
        tools: [
          { name: "AWS CLI", category: "Cloud CLI" },
          { name: "Azure CLI", category: "Cloud CLI" },
          { name: "Terraform", category: "IaC" },
        ],
      },
      {
        title: "Monitoring & SRE",
        description:
          "Implement observability, monitoring, incident response, and site reliability engineering practices.",
        orderIndex: 4,
        durationWeeks: 4,
        skills: [
          { name: "Prometheus", level: "ADVANCED" },
          { name: "Grafana", level: "ADVANCED" },
          { name: "ELK Stack", level: "ADVANCED" },
          { name: "Incident Response", level: "ADVANCED" },
          { name: "SLOs/SLIs", level: "ADVANCED" },
        ],
        resources: [
          {
            title: "SRE Book by Google",
            url: "https://sre.google/sre-book/table-of-contents",
            type: "BOOK",
            free: true,
          },
          {
            title: "Prometheus Docs",
            url: "https://prometheus.io/docs",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Prometheus", category: "Monitoring" },
          { name: "Grafana", category: "Visualization" },
          { name: "PagerDuty", category: "Incident Management" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // 6. UI/UX Designer
  // ──────────────────────────────────────────────────────────────
  {
    title: "UI/UX Designer",
    slug: "ui-ux-designer",
    description:
      "Design intuitive and beautiful user experiences. Master design principles, UX research, prototyping, and portfolio development.",
    category: "DESIGN",
    difficulty: "BEGINNER",
    avgSalary: "$60k-$120k",
    demandLevel: "Medium",
    phases: [
      {
        title: "Design Fundamentals",
        description:
          "Learn the core principles of visual design including color theory, typography, layout, and design thinking methodology.",
        orderIndex: 0,
        durationWeeks: 4,
        skills: [
          { name: "Color Theory", level: "BEGINNER" },
          { name: "Typography", level: "BEGINNER" },
          { name: "Layout Principles", level: "BEGINNER" },
          { name: "Visual Hierarchy", level: "BEGINNER" },
          { name: "Design Thinking", level: "BEGINNER" },
        ],
        resources: [
          {
            title: "Interaction Design Foundation",
            url: "https://www.interaction-design.org",
            type: "COURSE",
            free: true,
          },
          {
            title: "Laws of UX",
            url: "https://lawsofux.com",
            type: "ARTICLE",
            free: true,
          },
        ],
        tools: [
          { name: "Figma", category: "Design" },
          { name: "Adobe Color", category: "Color Tool" },
        ],
      },
      {
        title: "UX Research",
        description:
          "Conduct user research through interviews, personas, journey mapping, usability testing, and information architecture.",
        orderIndex: 1,
        durationWeeks: 5,
        skills: [
          { name: "User Interviews", level: "INTERMEDIATE" },
          { name: "Personas", level: "INTERMEDIATE" },
          { name: "Journey Mapping", level: "INTERMEDIATE" },
          { name: "Usability Testing", level: "INTERMEDIATE" },
          { name: "Information Architecture", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "NN Group Articles",
            url: "https://www.nngroup.com/articles",
            type: "ARTICLE",
            free: true,
          },
          {
            title: "UX Research Handbook",
            url: "https://www.uxresearchhandbook.com",
            type: "BOOK",
            free: true,
          },
        ],
        tools: [
          { name: "Maze", category: "User Testing" },
          { name: "Miro", category: "Collaboration" },
          { name: "Google Forms", category: "Surveys" },
        ],
      },
      {
        title: "UI Design & Prototyping",
        description:
          "Create wireframes, high-fidelity mockups, interactive prototypes, and design systems for responsive interfaces.",
        orderIndex: 2,
        durationWeeks: 6,
        skills: [
          { name: "Wireframing", level: "INTERMEDIATE" },
          { name: "High-Fidelity Mockups", level: "INTERMEDIATE" },
          { name: "Interactive Prototypes", level: "INTERMEDIATE" },
          { name: "Design Systems", level: "INTERMEDIATE" },
          { name: "Responsive Design", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "Figma Tutorials",
            url: "https://www.youtube.com/figma",
            type: "VIDEO",
            free: true,
          },
          {
            title: "Material Design Guide",
            url: "https://m3.material.io",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Figma", category: "Design" },
          { name: "Framer", category: "Prototyping" },
          { name: "Zeplin", category: "Handoff" },
        ],
      },
      {
        title: "Portfolio & Specialization",
        description:
          "Build a compelling design portfolio with case studies, presentations, and explore industry specializations.",
        orderIndex: 3,
        durationWeeks: 4,
        skills: [
          { name: "Case Studies", level: "ADVANCED" },
          { name: "Portfolio Website", level: "ADVANCED" },
          { name: "Design Presentations", level: "ADVANCED" },
          { name: "Industry Specialization", level: "ADVANCED" },
        ],
        resources: [
          {
            title: "Dribbble Inspiration",
            url: "https://dribbble.com",
            type: "ARTICLE",
            free: true,
          },
          {
            title: "Behance Portfolio Guide",
            url: "https://www.behance.net",
            type: "ARTICLE",
            free: true,
          },
        ],
        tools: [
          { name: "Webflow", category: "Website Builder" },
          { name: "Notion", category: "Documentation" },
          { name: "Behance", category: "Portfolio" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // 7. Mobile App Developer
  // ──────────────────────────────────────────────────────────────
  {
    title: "Mobile App Developer",
    slug: "mobile-app-developer",
    description:
      "Build cross-platform mobile applications with React Native. Master mobile UI patterns, navigation, native APIs, and app store deployment.",
    category: "ENGINEERING",
    difficulty: "INTERMEDIATE",
    avgSalary: "$75k-$140k",
    demandLevel: "High",
    phases: [
      {
        title: "Mobile Fundamentals",
        description:
          "Understand mobile UI patterns, JavaScript/TypeScript fundamentals, React basics, and mobile UX principles.",
        orderIndex: 0,
        durationWeeks: 4,
        skills: [
          { name: "Mobile UI Patterns", level: "BEGINNER" },
          { name: "JavaScript/TypeScript", level: "BEGINNER" },
          { name: "React Basics", level: "BEGINNER" },
          { name: "Mobile UX Principles", level: "BEGINNER" },
        ],
        resources: [
          {
            title: "React Native Docs",
            url: "https://reactnative.dev/docs/getting-started",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Mobile Design Guidelines",
            url: "https://developer.apple.com/design/human-interface-guidelines",
            type: "ARTICLE",
            free: true,
          },
        ],
        tools: [
          { name: "VS Code", category: "Editor" },
          { name: "Expo", category: "Development Platform" },
          { name: "Android Studio", category: "IDE" },
        ],
      },
      {
        title: "React Native Core",
        description:
          "Master React Native components, navigation, state management, platform APIs, and styling techniques.",
        orderIndex: 1,
        durationWeeks: 6,
        skills: [
          { name: "React Native Components", level: "INTERMEDIATE" },
          { name: "Navigation", level: "INTERMEDIATE" },
          { name: "State Management", level: "INTERMEDIATE" },
          { name: "Platform APIs", level: "INTERMEDIATE" },
          { name: "Styling", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "React Native Docs",
            url: "https://reactnative.dev/docs/components-and-apis",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "Expo Docs",
            url: "https://docs.expo.dev",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Expo", category: "Development Platform" },
          { name: "React Navigation", category: "Navigation" },
          { name: "Redux Toolkit", category: "State Management" },
        ],
      },
      {
        title: "Advanced Mobile",
        description:
          "Explore native modules, animations, offline storage, push notifications, and location services.",
        orderIndex: 2,
        durationWeeks: 5,
        skills: [
          { name: "Native Modules", level: "INTERMEDIATE" },
          { name: "Animations", level: "INTERMEDIATE" },
          { name: "Offline Storage", level: "INTERMEDIATE" },
          { name: "Push Notifications", level: "INTERMEDIATE" },
          { name: "Maps & Location", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "Reanimated Docs",
            url: "https://docs.swmansion.com/react-native-reanimated",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "AsyncStorage Guide",
            url: "https://react-native-async-storage.github.io/async-storage",
            type: "ARTICLE",
            free: true,
          },
        ],
        tools: [
          { name: "React Native Reanimated", category: "Animations" },
          { name: "SQLite", category: "Database" },
          { name: "Firebase", category: "Backend" },
        ],
      },
      {
        title: "Testing & Deployment",
        description:
          "Test mobile applications with unit and E2E tests, submit to app stores, set up CI/CD, and optimize performance.",
        orderIndex: 3,
        durationWeeks: 4,
        skills: [
          { name: "Unit Testing", level: "ADVANCED" },
          { name: "E2E Testing", level: "ADVANCED" },
          { name: "App Store Submission", level: "ADVANCED" },
          { name: "CI/CD for Mobile", level: "ADVANCED" },
          { name: "Performance Profiling", level: "ADVANCED" },
        ],
        resources: [
          {
            title: "Detox Testing Docs",
            url: "https://wix.github.io/Detox",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "App Store Review Guidelines",
            url: "https://developer.apple.com/app-store/review/guidelines",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Jest", category: "Testing" },
          { name: "Detox", category: "E2E Testing" },
          { name: "Fastlane", category: "Deployment" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // 8. Cybersecurity Analyst
  // ──────────────────────────────────────────────────────────────
  {
    title: "Cybersecurity Analyst",
    slug: "cybersecurity-analyst",
    description:
      "Protect organizations from cyber threats. Master network security, penetration testing, incident response, and compliance frameworks.",
    category: "SECURITY",
    difficulty: "ADVANCED",
    avgSalary: "$80k-$150k",
    demandLevel: "High",
    phases: [
      {
        title: "Security Fundamentals",
        description:
          "Build a foundation in network security, cryptography, security protocols, the CIA triad, and risk assessment.",
        orderIndex: 0,
        durationWeeks: 5,
        skills: [
          { name: "Network Security", level: "BEGINNER" },
          { name: "Cryptography Basics", level: "BEGINNER" },
          { name: "Security Protocols", level: "BEGINNER" },
          { name: "CIA Triad", level: "BEGINNER" },
          { name: "Risk Assessment", level: "BEGINNER" },
        ],
        resources: [
          {
            title: "Cybrary Free Courses",
            url: "https://www.cybrary.it",
            type: "COURSE",
            free: true,
          },
          {
            title: "OWASP Top 10",
            url: "https://owasp.org/www-project-top-ten",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "Wireshark", category: "Network Analysis" },
          { name: "Nmap", category: "Network Scanning" },
        ],
      },
      {
        title: "Offensive Security",
        description:
          "Learn penetration testing, vulnerability scanning, web application security, and capture-the-flag challenges.",
        orderIndex: 1,
        durationWeeks: 6,
        skills: [
          { name: "Penetration Testing", level: "INTERMEDIATE" },
          { name: "Vulnerability Scanning", level: "INTERMEDIATE" },
          { name: "Web App Security", level: "INTERMEDIATE" },
          { name: "Social Engineering Awareness", level: "INTERMEDIATE" },
          { name: "CTF Challenges", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "TryHackMe",
            url: "https://tryhackme.com",
            type: "COURSE",
            free: true,
          },
          {
            title: "PortSwigger Web Academy",
            url: "https://portswigger.net/web-security",
            type: "COURSE",
            free: true,
          },
        ],
        tools: [
          { name: "Burp Suite", category: "Web Security" },
          { name: "Metasploit", category: "Penetration Testing" },
          { name: "Kali Linux", category: "Operating System" },
        ],
      },
      {
        title: "Defensive Security",
        description:
          "Master SIEM systems, incident response, malware analysis, firewall configuration, and log analysis.",
        orderIndex: 2,
        durationWeeks: 6,
        skills: [
          { name: "SIEM", level: "INTERMEDIATE" },
          { name: "Incident Response", level: "INTERMEDIATE" },
          { name: "Malware Analysis", level: "INTERMEDIATE" },
          { name: "Firewall Configuration", level: "INTERMEDIATE" },
          { name: "Log Analysis", level: "INTERMEDIATE" },
        ],
        resources: [
          {
            title: "SANS Reading Room",
            url: "https://www.sans.org/reading-room",
            type: "ARTICLE",
            free: true,
          },
          {
            title: "Splunk Free Training",
            url: "https://www.splunk.com/en_us/training/free-courses.html",
            type: "COURSE",
            free: true,
          },
        ],
        tools: [
          { name: "Splunk", category: "SIEM" },
          { name: "Snort", category: "IDS" },
          { name: "YARA", category: "Malware Detection" },
        ],
      },
      {
        title: "Compliance & Cloud Security",
        description:
          "Understand compliance frameworks, GDPR, cloud security architecture, zero trust, and security auditing.",
        orderIndex: 3,
        durationWeeks: 5,
        skills: [
          { name: "ISO 27001", level: "ADVANCED" },
          { name: "GDPR", level: "ADVANCED" },
          { name: "Cloud Security", level: "ADVANCED" },
          { name: "Zero Trust Architecture", level: "ADVANCED" },
          { name: "Security Auditing", level: "ADVANCED" },
        ],
        resources: [
          {
            title: "NIST Framework",
            url: "https://www.nist.gov/cyberframework",
            type: "DOCUMENTATION",
            free: true,
          },
          {
            title: "AWS Security Best Practices",
            url: "https://docs.aws.amazon.com/security",
            type: "DOCUMENTATION",
            free: true,
          },
        ],
        tools: [
          { name: "AWS Security Hub", category: "Cloud Security" },
          { name: "Terraform", category: "IaC" },
          { name: "OpenSCAP", category: "Compliance" },
        ],
      },
    ],
  },
];

export async function seedCareers(): Promise<void> {
  console.log("--- Starting career seed ---");

  for (const career of careers) {
    const { phases, ...careerData } = career;

    // Delete existing phases to avoid duplicates on re-run.
    // Cascading deletes on the phase will also remove skills, resources, and tools.
    await prisma.careerPhase.deleteMany({
      where: { career: { slug: careerData.slug } },
    });

    const upserted = await prisma.career.upsert({
      where: { slug: careerData.slug },
      update: {
        title: careerData.title,
        description: careerData.description,
        category: careerData.category,
        difficulty: careerData.difficulty,
        avgSalary: careerData.avgSalary,
        demandLevel: careerData.demandLevel,
        phases: {
          create: phases.map((phase) => ({
            title: phase.title,
            description: phase.description,
            orderIndex: phase.orderIndex,
            durationWeeks: phase.durationWeeks,
            skills: {
              create: phase.skills.map((skill) => ({
                name: skill.name,
                level: skill.level,
              })),
            },
            resources: {
              create: phase.resources.map((resource) => ({
                title: resource.title,
                url: resource.url,
                type: resource.type,
                free: resource.free,
              })),
            },
            tools: {
              create: phase.tools.map((tool) => ({
                name: tool.name,
                url: tool.url ?? null,
                category: tool.category ?? null,
              })),
            },
          })),
        },
      },
      create: {
        title: careerData.title,
        slug: careerData.slug,
        description: careerData.description,
        category: careerData.category,
        difficulty: careerData.difficulty,
        avgSalary: careerData.avgSalary,
        demandLevel: careerData.demandLevel,
        phases: {
          create: phases.map((phase) => ({
            title: phase.title,
            description: phase.description,
            orderIndex: phase.orderIndex,
            durationWeeks: phase.durationWeeks,
            skills: {
              create: phase.skills.map((skill) => ({
                name: skill.name,
                level: skill.level,
              })),
            },
            resources: {
              create: phase.resources.map((resource) => ({
                title: resource.title,
                url: resource.url,
                type: resource.type,
                free: resource.free,
              })),
            },
            tools: {
              create: phase.tools.map((tool) => ({
                name: tool.name,
                url: tool.url ?? null,
                category: tool.category ?? null,
              })),
            },
          })),
        },
      },
    });

    console.log(`  Seeded career: ${upserted.title} (${upserted.slug})`);
  }

  console.log("--- Career seed complete ---");
}

(async () => {
  try {
    await seedCareers();
  } catch (error) {
    console.error("Career seed failed:", error);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();
