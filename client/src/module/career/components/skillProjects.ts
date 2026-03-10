export interface MiniProject {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  githubUrl?: string;
}

export const SKILL_PROJECTS: Record<string, MiniProject[]> = {
  html: [
    { title: "Personal Portfolio Page", description: "Build a semantic HTML page with header, nav, main sections, and footer. Include a contact form with different input types.", difficulty: "Easy", githubUrl: "https://github.com/RilDev/my-portfolio" },
    { title: "Blog Article Layout", description: "Create a blog post page using article, section, aside tags. Add a table of contents with anchor links.", difficulty: "Easy", githubUrl: "https://github.com/zarkoivkovicc/HTML-CSS-Blog-Page" },
    { title: "Accessible Survey Form", description: "Build a multi-step survey form with proper labels, ARIA attributes, and keyboard navigation support.", difficulty: "Medium", githubUrl: "https://github.com/freeCodeCamp/freeCodeCamp" },
  ],
  css: [
    { title: "Responsive Card Grid", description: "Create a responsive card layout that goes from 1 column on mobile to 3 columns on desktop using Flexbox or Grid.", difficulty: "Easy", githubUrl: "https://github.com/zarkoivkovicc/CSS-Responsive-Card-Grid" },
    { title: "Animated Landing Page", description: "Build a hero section with CSS animations, gradient backgrounds, and smooth hover transitions.", difficulty: "Medium", githubUrl: "https://github.com/bedimcode/responsive-landing-page" },
    { title: "Dark Mode Toggle", description: "Implement a complete dark/light theme using CSS custom properties and prefers-color-scheme media query.", difficulty: "Medium", githubUrl: "https://github.com/nicnocquee/dark-mode-toggle" },
  ],
  javascript: [
    { title: "To-Do List App", description: "Build a to-do app with add, delete, toggle complete, and localStorage persistence. No frameworks allowed.", difficulty: "Easy", githubUrl: "https://github.com/parzival-hub/vanillaJS-todo-app" },
    { title: "Weather Dashboard", description: "Fetch weather data from a public API, display current conditions and a 5-day forecast with async/await.", difficulty: "Medium", githubUrl: "https://github.com/developedbyed/vanilla-weather" },
    { title: "Interactive Quiz Game", description: "Create a timed quiz with scoring, randomized questions, and DOM manipulation for dynamic question rendering.", difficulty: "Medium", githubUrl: "https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript" },
  ],
  typescript: [
    { title: "Type-Safe API Client", description: "Build a fetch wrapper with generic types for request/response, error handling with discriminated unions.", difficulty: "Medium", githubUrl: "https://github.com/sindresorhus/ky" },
    { title: "Task Manager with Types", description: "Create a task management module with interfaces, enums for status/priority, and utility types.", difficulty: "Easy", githubUrl: "https://github.com/nicolo-ribaudo/tc39-proposal-record-tuple" },
    { title: "Generic Data Table", description: "Build a generic sortable/filterable table component type that works with any data shape.", difficulty: "Hard", githubUrl: "https://github.com/TanStack/table" },
  ],
  react: [
    { title: "Expense Tracker", description: "Build a React app with useState for managing expenses, form inputs, and a filtered list with totals.", difficulty: "Easy", githubUrl: "https://github.com/bradtraversy/expense-tracker-react" },
    { title: "Movie Search App", description: "Create a movie search app using useEffect for API calls, debounced search, and loading/error states.", difficulty: "Medium", githubUrl: "https://github.com/adrianhajdin/project_movie_app" },
    { title: "Shopping Cart with Context", description: "Build a multi-page shop with React Router, Context API for cart state, and custom hooks.", difficulty: "Hard", githubUrl: "https://github.com/WebDevSimplified/react-shopping-cart" },
  ],
  "node.js": [
    { title: "REST API for Notes", description: "Build a CRUD API with Express, JSON file storage, input validation, and error handling middleware.", difficulty: "Easy", githubUrl: "https://github.com/fhsinchy/express-mongo-api-boilerplate" },
    { title: "URL Shortener", description: "Create a URL shortener service with Express, unique ID generation, redirect logic, and click tracking.", difficulty: "Medium", githubUrl: "https://github.com/phanikumar99/url-shortener" },
    { title: "Authentication System", description: "Build a complete auth system with registration, login, JWT tokens, password hashing, and protected routes.", difficulty: "Hard", githubUrl: "https://github.com/hagopj13/node-express-boilerplate" },
  ],
  node: [
    { title: "REST API for Notes", description: "Build a CRUD API with Express, JSON file storage, input validation, and error handling middleware.", difficulty: "Easy", githubUrl: "https://github.com/fhsinchy/express-mongo-api-boilerplate" },
    { title: "URL Shortener", description: "Create a URL shortener service with Express, unique ID generation, redirect logic, and click tracking.", difficulty: "Medium", githubUrl: "https://github.com/phanikumar99/url-shortener" },
    { title: "Authentication System", description: "Build a complete auth system with registration, login, JWT tokens, password hashing, and protected routes.", difficulty: "Hard", githubUrl: "https://github.com/hagopj13/node-express-boilerplate" },
  ],
  sql: [
    { title: "Student Database Queries", description: "Write queries for a school database: JOINs across students, courses, and grades tables with aggregations.", difficulty: "Easy", githubUrl: "https://github.com/WebDevSimplified/Learn-SQL" },
    { title: "E-Commerce Analytics", description: "Build complex queries for an e-commerce DB: top products, revenue by month, customer retention with CTEs.", difficulty: "Medium", githubUrl: "https://github.com/ifzhang/ecommerce-sql-analysis" },
    { title: "Database Schema Design", description: "Design and normalize a schema for a social media platform with users, posts, comments, likes, and followers.", difficulty: "Hard", githubUrl: "https://github.com/brettchaldecott/db-schema-design" },
  ],
  git: [
    { title: "Collaborative Workflow", description: "Practice branching, making changes on feature branches, creating pull requests, and resolving merge conflicts.", difficulty: "Easy", githubUrl: "https://github.com/firstcontributions/first-contributions" },
    { title: "Git Bisect Bug Hunt", description: "Use git bisect to find a bug introduced across 20+ commits. Practice interactive rebase to clean up history.", difficulty: "Medium", githubUrl: "https://github.com/braydie/HowToBeAProgrammer" },
  ],
  python: [
    { title: "File Organizer Script", description: "Build a script that organizes files in a directory by extension, with logging and command-line arguments.", difficulty: "Easy", githubUrl: "https://github.com/geekyshow1/file-organizer-python" },
    { title: "Web Scraper", description: "Create a web scraper using requests and BeautifulSoup to extract data and save to CSV.", difficulty: "Medium", githubUrl: "https://github.com/realpython/python-web-scraping" },
    { title: "CLI Task Manager", description: "Build a command-line task manager with classes, file persistence, and rich terminal output.", difficulty: "Medium", githubUrl: "https://github.com/NiltonDuarte/task_manager_cli" },
  ],
  docker: [
    { title: "Dockerize a Node App", description: "Write a Dockerfile for a Node.js app with multi-stage builds, proper .dockerignore, and environment variables.", difficulty: "Easy", githubUrl: "https://github.com/nodejs/docker-node" },
    { title: "Multi-Service Compose", description: "Create a docker-compose.yml with a web app, database, and Redis cache with proper networking and volumes.", difficulty: "Medium", githubUrl: "https://github.com/docker/awesome-compose" },
  ],
  kubernetes: [
    { title: "Deploy to Minikube", description: "Deploy a containerized app to Minikube with Deployment, Service, ConfigMap, and Ingress resources.", difficulty: "Medium", githubUrl: "https://github.com/kubernetes/minikube" },
    { title: "Helm Chart Creation", description: "Create a Helm chart for your application with configurable values, templates, and proper resource limits.", difficulty: "Hard", githubUrl: "https://github.com/helm/helm" },
  ],
  mongodb: [
    { title: "Blog API with Mongoose", description: "Build a blog API with Mongoose models, validation, population for comments, and aggregation pipelines.", difficulty: "Medium", githubUrl: "https://github.com/hagopj13/node-express-boilerplate" },
    { title: "Analytics Dashboard Queries", description: "Write aggregation pipelines for user analytics: daily active users, top content, and engagement metrics.", difficulty: "Hard", githubUrl: "https://github.com/mongodb-university/mflix-js" },
  ],
  "machine learning": [
    { title: "House Price Predictor", description: "Build a linear regression model to predict house prices. Include data preprocessing, feature engineering, and evaluation.", difficulty: "Easy", githubUrl: "https://github.com/ageron/handson-ml2" },
    { title: "Spam Email Classifier", description: "Create a spam classifier using logistic regression or Naive Bayes with text preprocessing and model evaluation.", difficulty: "Medium", githubUrl: "https://github.com/amueller/introduction_to_ml_with_python" },
    { title: "Image Classification", description: "Build a CNN-based image classifier using transfer learning on a small dataset with data augmentation.", difficulty: "Hard", githubUrl: "https://github.com/pytorch/examples" },
  ],
  testing: [
    { title: "Unit Test a Calculator", description: "Write comprehensive Jest tests for a calculator module covering edge cases, errors, and achieving 100% coverage.", difficulty: "Easy", githubUrl: "https://github.com/goldbergyoni/javascript-testing-best-practices" },
    { title: "Test a React Form", description: "Write React Testing Library tests for a registration form: rendering, validation, submission, and error states.", difficulty: "Medium", githubUrl: "https://github.com/testing-library/react-testing-library" },
  ],
  security: [
    { title: "Vulnerability Scanner", description: "Build a simple tool that checks for common security headers, open ports, and SSL certificate validity.", difficulty: "Medium", githubUrl: "https://github.com/OWASP/Nettacker" },
    { title: "Secure Auth Implementation", description: "Implement secure authentication with rate limiting, CSRF protection, password policies, and security headers.", difficulty: "Hard", githubUrl: "https://github.com/OWASP/NodeGoat" },
  ],
  "data structures": [
    { title: "Implement a Stack & Queue", description: "Build stack and queue data structures from scratch with push, pop, peek, and size operations.", difficulty: "Easy", githubUrl: "https://github.com/trekhleb/javascript-algorithms" },
    { title: "LRU Cache", description: "Implement an LRU Cache using a HashMap and Doubly Linked List with O(1) get and put operations.", difficulty: "Hard", githubUrl: "https://github.com/trekhleb/javascript-algorithms" },
  ],
  algorithms: [
    { title: "Sorting Visualizer", description: "Build a visual sorting algorithm comparison tool that animates bubble, merge, and quick sort.", difficulty: "Medium", githubUrl: "https://github.com/clementmihailescu/Sorting-Visualizer" },
    { title: "Pathfinding Visualizer", description: "Create a grid-based pathfinding visualizer for BFS, DFS, and Dijkstra's algorithm.", difficulty: "Hard", githubUrl: "https://github.com/clementmihailescu/Pathfinding-Visualizer" },
  ],
  tailwind: [
    { title: "Landing Page Clone", description: "Recreate a popular landing page using only Tailwind CSS utility classes. Include responsive design and dark mode.", difficulty: "Easy", githubUrl: "https://github.com/tailwindlabs/tailwindcss" },
    { title: "Dashboard UI", description: "Build a responsive admin dashboard with sidebar navigation, cards, tables, and charts using Tailwind.", difficulty: "Medium", githubUrl: "https://github.com/cruip/tailwind-dashboard-template" },
  ],
  express: [
    { title: "RESTful API with Middleware", description: "Build a complete REST API with authentication middleware, rate limiting, input validation, and error handling.", difficulty: "Medium", githubUrl: "https://github.com/hagopj13/node-express-boilerplate" },
    { title: "File Upload Service", description: "Create a file upload service with multer, file type validation, size limits, and static file serving.", difficulty: "Medium", githubUrl: "https://github.com/expressjs/multer" },
  ],
  linux: [
    { title: "Backup Script", description: "Write a bash script that backs up specified directories, compresses them, and rotates old backups.", difficulty: "Easy", githubUrl: "https://github.com/jsamr/bootiso" },
    { title: "Server Setup Script", description: "Create an automated server setup script that installs packages, configures firewall, and sets up a web server.", difficulty: "Medium", githubUrl: "https://github.com/jasonheecs/ubuntu-server-setup" },
  ],
  dbms: [
    { title: "Student Database System", description: "Design and implement a normalized database schema for a student management system with courses, grades, and attendance tracking.", difficulty: "Easy", githubUrl: "https://github.com/WebDevSimplified/Learn-SQL" },
    { title: "E-Commerce Database", description: "Build a complete e-commerce database with products, orders, customers, and write complex queries with joins, subqueries, and aggregations.", difficulty: "Medium", githubUrl: "https://github.com/ifzhang/ecommerce-sql-analysis" },
    { title: "Transaction Simulator", description: "Simulate concurrent transactions on a database demonstrating ACID properties, locking mechanisms, and deadlock scenarios.", difficulty: "Hard", githubUrl: "https://github.com/brettchaldecott/db-schema-design" },
  ],
  "computer network": [
    { title: "Packet Analyzer", description: "Build a simple packet sniffer that captures and displays network packets showing headers, protocols, and payload information.", difficulty: "Medium", githubUrl: "https://github.com/the-tcpdump-group/tcpdump" },
    { title: "Chat Application", description: "Create a TCP-based chat application with client-server architecture supporting multiple simultaneous users.", difficulty: "Medium", githubUrl: "https://github.com/nicholasgasior/gochat" },
  ],
  "computer fundamental": [
    { title: "Number System Converter", description: "Build a converter that converts numbers between binary, octal, decimal, and hexadecimal with step-by-step explanation.", difficulty: "Easy", githubUrl: "https://github.com/TheAlgorithms/Python" },
    { title: "Logic Gate Simulator", description: "Create a visual logic gate simulator that lets users connect AND, OR, NOT, NAND, NOR, XOR gates and see outputs.", difficulty: "Medium", githubUrl: "https://github.com/nicholasgasior/logicsim" },
  ],
  "operating system": [
    { title: "CPU Scheduling Simulator", description: "Simulate FCFS, SJF, Round Robin, and Priority scheduling algorithms. Show Gantt charts, waiting time, and turnaround time.", difficulty: "Medium", githubUrl: "https://github.com/AhmadElsaghworthy/CPU-Scheduling-Simulator" },
    { title: "Page Replacement Visualizer", description: "Build a tool that visualizes FIFO, LRU, and Optimal page replacement algorithms with hit/miss rates and comparisons.", difficulty: "Medium", githubUrl: "https://github.com/TheAlgorithms/Python" },
    { title: "Producer-Consumer Problem", description: "Implement the producer-consumer problem using semaphores or mutex, demonstrating synchronization and buffer management.", difficulty: "Hard", githubUrl: "https://github.com/angrave/SystemProgramming" },
  ],
  hld: [
    { title: "System Design Document", description: "Write a complete HLD document for a URL shortener covering architecture diagram, API design, database schema, and scaling strategy.", difficulty: "Medium", githubUrl: "https://github.com/donnemartin/system-design-primer" },
    { title: "Distributed Cache Design", description: "Design a distributed caching system with consistent hashing, eviction policies, and replication strategy documentation.", difficulty: "Hard", githubUrl: "https://github.com/donnemartin/system-design-primer" },
  ],
  lld: [
    { title: "Parking Lot System", description: "Implement a parking lot system with classes for vehicles, spots, tickets, and payments following SOLID principles.", difficulty: "Medium", githubUrl: "https://github.com/tssovi/grokking-the-object-oriented-design-interview" },
    { title: "Design Patterns Showcase", description: "Build a project demonstrating Singleton, Factory, Observer, and Strategy patterns with real-world use cases.", difficulty: "Medium", githubUrl: "https://github.com/kamranahmedse/design-patterns-for-humans" },
    { title: "Library Management System", description: "Implement a complete library management system with book lending, member management, fines, and search functionality.", difficulty: "Hard", githubUrl: "https://github.com/tssovi/grokking-the-object-oriented-design-interview" },
  ],
  aptitude: [
    { title: "Math Quiz Generator", description: "Build an interactive quiz app that generates random aptitude questions on percentages, ratios, time & work with step-by-step solutions.", difficulty: "Easy", githubUrl: "https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript" },
    { title: "Data Interpretation Dashboard", description: "Create a dashboard that displays bar graphs, pie charts, and tables, then asks analytical questions about the data.", difficulty: "Medium", githubUrl: "https://github.com/recharts/recharts" },
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
