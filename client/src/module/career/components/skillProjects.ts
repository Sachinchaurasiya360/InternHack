export interface MiniProject {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export const SKILL_PROJECTS: Record<string, MiniProject[]> = {
  html: [
    { title: "Personal Portfolio Page", description: "Build a semantic HTML page with header, nav, main sections, and footer. Include a contact form with different input types.", difficulty: "Easy" },
    { title: "Blog Article Layout", description: "Create a blog post page using article, section, aside tags. Add a table of contents with anchor links.", difficulty: "Easy" },
    { title: "Accessible Survey Form", description: "Build a multi-step survey form with proper labels, ARIA attributes, and keyboard navigation support.", difficulty: "Medium" },
  ],
  css: [
    { title: "Responsive Card Grid", description: "Create a responsive card layout that goes from 1 column on mobile to 3 columns on desktop using Flexbox or Grid.", difficulty: "Easy" },
    { title: "Animated Landing Page", description: "Build a hero section with CSS animations, gradient backgrounds, and smooth hover transitions.", difficulty: "Medium" },
    { title: "Dark Mode Toggle", description: "Implement a complete dark/light theme using CSS custom properties and prefers-color-scheme media query.", difficulty: "Medium" },
  ],
  javascript: [
    { title: "To-Do List App", description: "Build a to-do app with add, delete, toggle complete, and localStorage persistence. No frameworks allowed.", difficulty: "Easy" },
    { title: "Weather Dashboard", description: "Fetch weather data from a public API, display current conditions and a 5-day forecast with async/await.", difficulty: "Medium" },
    { title: "Interactive Quiz Game", description: "Create a timed quiz with scoring, randomized questions, and DOM manipulation for dynamic question rendering.", difficulty: "Medium" },
  ],
  typescript: [
    { title: "Type-Safe API Client", description: "Build a fetch wrapper with generic types for request/response, error handling with discriminated unions.", difficulty: "Medium" },
    { title: "Task Manager with Types", description: "Create a task management module with interfaces, enums for status/priority, and utility types.", difficulty: "Easy" },
    { title: "Generic Data Table", description: "Build a generic sortable/filterable table component type that works with any data shape.", difficulty: "Hard" },
  ],
  react: [
    { title: "Expense Tracker", description: "Build a React app with useState for managing expenses, form inputs, and a filtered list with totals.", difficulty: "Easy" },
    { title: "Movie Search App", description: "Create a movie search app using useEffect for API calls, debounced search, and loading/error states.", difficulty: "Medium" },
    { title: "Shopping Cart with Context", description: "Build a multi-page shop with React Router, Context API for cart state, and custom hooks.", difficulty: "Hard" },
  ],
  "node.js": [
    { title: "REST API for Notes", description: "Build a CRUD API with Express, JSON file storage, input validation, and error handling middleware.", difficulty: "Easy" },
    { title: "URL Shortener", description: "Create a URL shortener service with Express, unique ID generation, redirect logic, and click tracking.", difficulty: "Medium" },
    { title: "Authentication System", description: "Build a complete auth system with registration, login, JWT tokens, password hashing, and protected routes.", difficulty: "Hard" },
  ],
  node: [
    { title: "REST API for Notes", description: "Build a CRUD API with Express, JSON file storage, input validation, and error handling middleware.", difficulty: "Easy" },
    { title: "URL Shortener", description: "Create a URL shortener service with Express, unique ID generation, redirect logic, and click tracking.", difficulty: "Medium" },
    { title: "Authentication System", description: "Build a complete auth system with registration, login, JWT tokens, password hashing, and protected routes.", difficulty: "Hard" },
  ],
  sql: [
    { title: "Student Database Queries", description: "Write queries for a school database: JOINs across students, courses, and grades tables with aggregations.", difficulty: "Easy" },
    { title: "E-Commerce Analytics", description: "Build complex queries for an e-commerce DB: top products, revenue by month, customer retention with CTEs.", difficulty: "Medium" },
    { title: "Database Schema Design", description: "Design and normalize a schema for a social media platform with users, posts, comments, likes, and followers.", difficulty: "Hard" },
  ],
  git: [
    { title: "Collaborative Workflow", description: "Practice branching, making changes on feature branches, creating pull requests, and resolving merge conflicts.", difficulty: "Easy" },
    { title: "Git Bisect Bug Hunt", description: "Use git bisect to find a bug introduced across 20+ commits. Practice interactive rebase to clean up history.", difficulty: "Medium" },
  ],
  python: [
    { title: "File Organizer Script", description: "Build a script that organizes files in a directory by extension, with logging and command-line arguments.", difficulty: "Easy" },
    { title: "Web Scraper", description: "Create a web scraper using requests and BeautifulSoup to extract data and save to CSV.", difficulty: "Medium" },
    { title: "CLI Task Manager", description: "Build a command-line task manager with classes, file persistence, and rich terminal output.", difficulty: "Medium" },
  ],
  docker: [
    { title: "Dockerize a Node App", description: "Write a Dockerfile for a Node.js app with multi-stage builds, proper .dockerignore, and environment variables.", difficulty: "Easy" },
    { title: "Multi-Service Compose", description: "Create a docker-compose.yml with a web app, database, and Redis cache with proper networking and volumes.", difficulty: "Medium" },
  ],
  kubernetes: [
    { title: "Deploy to Minikube", description: "Deploy a containerized app to Minikube with Deployment, Service, ConfigMap, and Ingress resources.", difficulty: "Medium" },
    { title: "Helm Chart Creation", description: "Create a Helm chart for your application with configurable values, templates, and proper resource limits.", difficulty: "Hard" },
  ],
  mongodb: [
    { title: "Blog API with Mongoose", description: "Build a blog API with Mongoose models, validation, population for comments, and aggregation pipelines.", difficulty: "Medium" },
    { title: "Analytics Dashboard Queries", description: "Write aggregation pipelines for user analytics: daily active users, top content, and engagement metrics.", difficulty: "Hard" },
  ],
  "machine learning": [
    { title: "House Price Predictor", description: "Build a linear regression model to predict house prices. Include data preprocessing, feature engineering, and evaluation.", difficulty: "Easy" },
    { title: "Spam Email Classifier", description: "Create a spam classifier using logistic regression or Naive Bayes with text preprocessing and model evaluation.", difficulty: "Medium" },
    { title: "Image Classification", description: "Build a CNN-based image classifier using transfer learning on a small dataset with data augmentation.", difficulty: "Hard" },
  ],
  testing: [
    { title: "Unit Test a Calculator", description: "Write comprehensive Jest tests for a calculator module covering edge cases, errors, and achieving 100% coverage.", difficulty: "Easy" },
    { title: "Test a React Form", description: "Write React Testing Library tests for a registration form: rendering, validation, submission, and error states.", difficulty: "Medium" },
  ],
  security: [
    { title: "Vulnerability Scanner", description: "Build a simple tool that checks for common security headers, open ports, and SSL certificate validity.", difficulty: "Medium" },
    { title: "Secure Auth Implementation", description: "Implement secure authentication with rate limiting, CSRF protection, password policies, and security headers.", difficulty: "Hard" },
  ],
  "data structures": [
    { title: "Implement a Stack & Queue", description: "Build stack and queue data structures from scratch with push, pop, peek, and size operations.", difficulty: "Easy" },
    { title: "LRU Cache", description: "Implement an LRU Cache using a HashMap and Doubly Linked List with O(1) get and put operations.", difficulty: "Hard" },
  ],
  algorithms: [
    { title: "Sorting Visualizer", description: "Build a visual sorting algorithm comparison tool that animates bubble, merge, and quick sort.", difficulty: "Medium" },
    { title: "Pathfinding Visualizer", description: "Create a grid-based pathfinding visualizer for BFS, DFS, and Dijkstra's algorithm.", difficulty: "Hard" },
  ],
  tailwind: [
    { title: "Landing Page Clone", description: "Recreate a popular landing page using only Tailwind CSS utility classes. Include responsive design and dark mode.", difficulty: "Easy" },
    { title: "Dashboard UI", description: "Build a responsive admin dashboard with sidebar navigation, cards, tables, and charts using Tailwind.", difficulty: "Medium" },
  ],
  express: [
    { title: "RESTful API with Middleware", description: "Build a complete REST API with authentication middleware, rate limiting, input validation, and error handling.", difficulty: "Medium" },
    { title: "File Upload Service", description: "Create a file upload service with multer, file type validation, size limits, and static file serving.", difficulty: "Medium" },
  ],
  linux: [
    { title: "Backup Script", description: "Write a bash script that backs up specified directories, compresses them, and rotates old backups.", difficulty: "Easy" },
    { title: "Server Setup Script", description: "Create an automated server setup script that installs packages, configures firewall, and sets up a web server.", difficulty: "Medium" },
  ],
  dbms: [
    { title: "Student Database System", description: "Design and implement a normalized database schema for a student management system with courses, grades, and attendance tracking.", difficulty: "Easy" },
    { title: "E-Commerce Database", description: "Build a complete e-commerce database with products, orders, customers, and write complex queries with joins, subqueries, and aggregations.", difficulty: "Medium" },
    { title: "Transaction Simulator", description: "Simulate concurrent transactions on a database demonstrating ACID properties, locking mechanisms, and deadlock scenarios.", difficulty: "Hard" },
  ],
  "computer network": [
    { title: "Packet Analyzer", description: "Build a simple packet sniffer that captures and displays network packets showing headers, protocols, and payload information.", difficulty: "Medium" },
    { title: "Chat Application", description: "Create a TCP-based chat application with client-server architecture supporting multiple simultaneous users.", difficulty: "Medium" },
  ],
  "computer fundamental": [
    { title: "Number System Converter", description: "Build a converter that converts numbers between binary, octal, decimal, and hexadecimal with step-by-step explanation.", difficulty: "Easy" },
    { title: "Logic Gate Simulator", description: "Create a visual logic gate simulator that lets users connect AND, OR, NOT, NAND, NOR, XOR gates and see outputs.", difficulty: "Medium" },
  ],
  "operating system": [
    { title: "CPU Scheduling Simulator", description: "Simulate FCFS, SJF, Round Robin, and Priority scheduling algorithms. Show Gantt charts, waiting time, and turnaround time.", difficulty: "Medium" },
    { title: "Page Replacement Visualizer", description: "Build a tool that visualizes FIFO, LRU, and Optimal page replacement algorithms with hit/miss rates and comparisons.", difficulty: "Medium" },
    { title: "Producer-Consumer Problem", description: "Implement the producer-consumer problem using semaphores or mutex, demonstrating synchronization and buffer management.", difficulty: "Hard" },
  ],
  hld: [
    { title: "System Design Document", description: "Write a complete HLD document for a URL shortener covering architecture diagram, API design, database schema, and scaling strategy.", difficulty: "Medium" },
    { title: "Distributed Cache Design", description: "Design a distributed caching system with consistent hashing, eviction policies, and replication strategy documentation.", difficulty: "Hard" },
  ],
  lld: [
    { title: "Parking Lot System", description: "Implement a parking lot system with classes for vehicles, spots, tickets, and payments following SOLID principles.", difficulty: "Medium" },
    { title: "Design Patterns Showcase", description: "Build a project demonstrating Singleton, Factory, Observer, and Strategy patterns with real-world use cases.", difficulty: "Medium" },
    { title: "Library Management System", description: "Implement a complete library management system with book lending, member management, fines, and search functionality.", difficulty: "Hard" },
  ],
  aptitude: [
    { title: "Math Quiz Generator", description: "Build an interactive quiz app that generates random aptitude questions on percentages, ratios, time & work with step-by-step solutions.", difficulty: "Easy" },
    { title: "Data Interpretation Dashboard", description: "Create a dashboard that displays bar graphs, pie charts, and tables, then asks analytical questions about the data.", difficulty: "Medium" },
  ],
};

export function getProjectsForSkill(skillName: string): MiniProject[] {
  const lower = skillName.toLowerCase().trim();
  if (SKILL_PROJECTS[lower]) return SKILL_PROJECTS[lower];
  for (const [key, projects] of Object.entries(SKILL_PROJECTS)) {
    if (lower.includes(key) || key.includes(lower)) return projects;
  }
  const words = lower.split(/[\s./\\-]+/);
  for (const word of words) {
    if (word.length > 2 && SKILL_PROJECTS[word]) return SKILL_PROJECTS[word];
  }
  return [];
}
