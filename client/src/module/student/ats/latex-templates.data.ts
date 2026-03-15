export interface LatexTemplate {
  id: string;
  name: string;
  description: string;
  category: "professional" | "academic" | "minimal" | "creative" | "technical" | "executive";
  tags: string[];
  previewLines: string[];
  source: string;
  supportingFiles: { filename: string; content: string }[];
}

export const LATEX_TEMPLATES: LatexTemplate[] = [
  // ── 1. Professional ──
  {
    id: "professional",
    name: "Professional",
    description: "Clean single-column layout with ruled section headers",
    category: "professional",
    tags: ["ATS-friendly", "single-column"],
    previewLines: [
      "JOHN DOE",
      "john.doe@email.com | +1 (555) 123-4567",
      "────────────────────────────────",
      "Summary",
      "Experienced software engineer with 5+ years...",
      "────────────────────────────────",
      "Experience",
      "Senior Software Engineer - TechCorp Inc.",
    ],
    supportingFiles: [],
    source: `\\documentclass[11pt,a4paper]{article}
\\usepackage[margin=0.75in]{geometry}
\\usepackage{enumitem}
\\usepackage{hyperref}
\\usepackage{titlesec}

\\titleformat{\\section}{\\large\\bfseries}{}{0em}{}[\\titlerule]
\\titlespacing*{\\section}{0pt}{8pt}{4pt}

\\setlength{\\parindent}{0pt}
\\pagestyle{empty}

\\begin{document}

\\begin{center}
  {\\LARGE \\textbf{John Doe}} \\\\[4pt]
  john.doe@email.com \\enspace $\\cdot$ \\enspace +1 (555) 123-4567 \\enspace $\\cdot$ \\enspace San Francisco, CA \\\\
  \\href{https://linkedin.com/in/johndoe}{linkedin.com/in/johndoe} \\enspace $\\cdot$ \\enspace \\href{https://github.com/johndoe}{github.com/johndoe}
\\end{center}

\\section*{Summary}
Experienced software engineer with 5+ years building scalable web applications. Proficient in React, Node.js, and cloud infrastructure. Passionate about clean code and user-centric design.

\\section*{Experience}

\\textbf{Senior Software Engineer} \\hfill TechCorp Inc., San Francisco, CA \\\\
\\textit{Jan 2022 -- Present}
\\begin{itemize}[leftmargin=*, nosep]
  \\item Led development of a real-time analytics dashboard serving 50K+ daily users
  \\item Reduced API response times by 40\\% through query optimization and caching
  \\item Mentored 3 junior developers and conducted code reviews
\\end{itemize}

\\vspace{4pt}
\\textbf{Software Engineer} \\hfill StartupXYZ, Remote \\\\
\\textit{Jun 2019 -- Dec 2021}
\\begin{itemize}[leftmargin=*, nosep]
  \\item Built React component library used across 4 product teams
  \\item Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes
  \\item Designed RESTful APIs handling 10M+ requests per day
\\end{itemize}

\\section*{Education}

\\textbf{B.S. Computer Science} \\hfill University of California, Berkeley \\\\
\\textit{2015 -- 2019} \\hfill GPA: 3.8/4.0

\\section*{Skills}

\\textbf{Languages:} JavaScript, TypeScript, Python, SQL \\\\
\\textbf{Frameworks:} React, Node.js, Express, Next.js \\\\
\\textbf{Tools:} Git, Docker, AWS, PostgreSQL, Redis

\\section*{Projects}

\\textbf{Open Source CLI Tool} -- A command-line tool for automating code reviews. 500+ GitHub stars. Built with Node.js and TypeScript.

\\end{document}`,
  },

  // ── 2. Academic ──
  {
    id: "academic",
    name: "Academic CV",
    description: "Multi-page CV with publications and research sections",
    category: "academic",
    tags: ["academic", "multi-page"],
    previewLines: [
      "DR. SARAH CHEN",
      "Assistant Professor of Computer Science",
      "MIT, Cambridge, MA",
      "────────────────────────────────",
      "Research Interests",
      "Machine Learning, NLP, Computer Vision",
      "────────────────────────────────",
      "Publications",
    ],
    supportingFiles: [],
    source: `\\documentclass[11pt,a4paper]{article}
\\usepackage[margin=1in]{geometry}
\\usepackage{enumitem}
\\usepackage{hyperref}
\\usepackage{titlesec}

\\titleformat{\\section}{\\Large\\bfseries\\scshape}{}{0em}{}[\\vspace{2pt}\\titlerule]
\\titlespacing*{\\section}{0pt}{12pt}{6pt}

\\setlength{\\parindent}{0pt}
\\pagestyle{plain}

\\begin{document}

\\begin{center}
  {\\LARGE \\textbf{Dr. Sarah Chen}} \\\\[6pt]
  {\\large Assistant Professor of Computer Science} \\\\[4pt]
  Massachusetts Institute of Technology \\\\[2pt]
  schen@mit.edu \\enspace $\\cdot$ \\enspace +1 (617) 555-0192 \\enspace $\\cdot$ \\enspace Cambridge, MA \\\\
  \\href{https://sarahchen.cs.mit.edu}{sarahchen.cs.mit.edu}
\\end{center}

\\section*{Research Interests}
Machine learning, natural language processing, computer vision, and their applications in healthcare and scientific discovery.

\\section*{Education}

\\textbf{Ph.D. in Computer Science} \\hfill Stanford University \\\\
\\textit{2015 -- 2020} \\hfill Advisor: Prof. Andrew Ng \\\\
Dissertation: \\textit{Scalable Methods for Multi-Modal Representation Learning}

\\vspace{4pt}
\\textbf{B.S. in Computer Science and Mathematics} \\hfill Caltech \\\\
\\textit{2011 -- 2015} \\hfill GPA: 3.95/4.0, Summa Cum Laude

\\section*{Academic Appointments}

\\textbf{Assistant Professor} \\hfill MIT, CSAIL \\\\
\\textit{Sep 2022 -- Present}

\\vspace{4pt}
\\textbf{Postdoctoral Researcher} \\hfill Google DeepMind \\\\
\\textit{Sep 2020 -- Aug 2022}

\\section*{Selected Publications}

\\begin{enumerate}[leftmargin=*, label={[\\arabic*]}]
  \\item \\textbf{Chen, S.}, Kumar, A., \\& Ng, A. (2023). "Multi-Modal Fusion for Clinical NLP." \\textit{Nature Machine Intelligence}, 5(3), 245--258.
  \\item \\textbf{Chen, S.} \\& Li, W. (2022). "Self-Supervised Visual Representations at Scale." \\textit{Proceedings of NeurIPS 2022}.
  \\item Zhang, R., \\textbf{Chen, S.}, \\& Patel, D. (2021). "Efficient Transformer Architectures for Long Documents." \\textit{Proceedings of ICML 2021}.
\\end{enumerate}

\\section*{Teaching}

\\textbf{6.867 Machine Learning} \\hfill MIT, Fall 2023, Fall 2024 \\\\
\\textbf{6.864 Advanced NLP} \\hfill MIT, Spring 2024

\\section*{Awards \\& Honors}

\\begin{itemize}[leftmargin=*, nosep]
  \\item NSF CAREER Award, 2024
  \\item Best Paper Award, NeurIPS 2022
  \\item Stanford CS Distinguished Dissertation Award, 2020
\\end{itemize}

\\section*{Service}

Area Chair: NeurIPS 2023, ICML 2024 \\\\
Reviewer: JMLR, TPAMI, ACL, EMNLP

\\end{document}`,
  },

  // ── 3. Minimal ──
  {
    id: "minimal",
    name: "Minimal",
    description: "Ultra-clean design with generous whitespace",
    category: "minimal",
    tags: ["clean", "single-page"],
    previewLines: [
      "Jane Smith",
      "",
      "jane@smith.io  |  New York, NY",
      "",
      "─────────────",
      "Experience",
      "",
      "Product Designer at Figma, 2021-Present",
    ],
    supportingFiles: [],
    source: `\\documentclass[11pt,letterpaper]{article}
\\usepackage[margin=1.2in]{geometry}
\\usepackage{hyperref}
\\usepackage{xcolor}

\\definecolor{accent}{HTML}{666666}

\\setlength{\\parindent}{0pt}
\\pagestyle{empty}

\\newcommand{\\rsection}[1]{%
  \\vspace{16pt}
  {\\color{accent}\\hrule height 0.4pt}
  \\vspace{6pt}
  {\\small\\textbf{\\uppercase{#1}}}
  \\vspace{8pt}
}

\\begin{document}

{\\Large\\textbf{Jane Smith}}

\\vspace{6pt}
{\\small jane@smith.io \\quad New York, NY \\quad \\href{https://janesmith.design}{janesmith.design}}

\\rsection{Experience}

\\textbf{Senior Product Designer} \\hfill Figma \\\\
{\\small\\textit{Mar 2021 -- Present}}
\\vspace{4pt}

Lead designer for FigJam collaboration features. Shipped real-time cursors, stamps, and sticky notes used by 2M+ users monthly.

\\vspace{10pt}
\\textbf{Product Designer} \\hfill Stripe \\\\
{\\small\\textit{Jun 2018 -- Feb 2021}}
\\vspace{4pt}

Designed the Stripe Dashboard checkout flow. Reduced merchant onboarding drop-off by 28\\%.

\\rsection{Education}

\\textbf{B.F.A. Graphic Design} \\hfill Rhode Island School of Design \\\\
{\\small\\textit{2014 -- 2018}}

\\rsection{Skills}

Figma, Sketch, Adobe Creative Suite, HTML/CSS, Prototyping, User Research, Design Systems

\\end{document}`,
  },

  // ── 4. Two-Column ──
  {
    id: "two-column",
    name: "Two-Column",
    description: "Sidebar for contact and skills, main body for experience",
    category: "creative",
    tags: ["modern", "two-column"],
    previewLines: [
      "ALEX RIVERA          |  Experience",
      "                     |",
      "Contact              |  Full Stack Developer",
      "alex@rivera.dev      |  Spotify, 2022-Present",
      "                     |",
      "Skills               |  Education",
      "React, Python, AWS   |  B.S. Computer Science",
    ],
    supportingFiles: [],
    source: `\\documentclass[10pt,a4paper]{article}
\\usepackage[left=0.5in,right=0.6in,top=0.6in,bottom=0.6in]{geometry}
\\usepackage{hyperref}
\\usepackage{xcolor}
\\usepackage{multicol}
\\usepackage{enumitem}
\\usepackage{titlesec}

\\definecolor{sidebar}{HTML}{2D3748}
\\definecolor{accent}{HTML}{4F46E5}

\\titleformat{\\section}{\\normalsize\\bfseries\\color{sidebar}}{}{0em}{}[\\vspace{1pt}{\\color{accent}\\hrule height 1.5pt}]
\\titlespacing*{\\section}{0pt}{10pt}{4pt}

\\setlength{\\parindent}{0pt}
\\setlength{\\columnsep}{24pt}
\\pagestyle{empty}

\\begin{document}

\\begin{center}
  {\\LARGE\\textbf{\\color{sidebar}Alex Rivera}} \\\\[6pt]
  {\\small alex@rivera.dev \\enspace $\\cdot$ \\enspace +1 (415) 555-7890 \\enspace $\\cdot$ \\enspace San Francisco, CA} \\\\[2pt]
  {\\small \\href{https://github.com/arivera}{github.com/arivera} \\enspace $\\cdot$ \\enspace \\href{https://linkedin.com/in/arivera}{linkedin.com/in/arivera}}
\\end{center}

\\vspace{4pt}

\\begin{multicols}{2}

\\section*{Skills}

\\textbf{Languages:} JavaScript, TypeScript, Python, Go \\\\
\\textbf{Frontend:} React, Next.js, Tailwind CSS \\\\
\\textbf{Backend:} Node.js, FastAPI, PostgreSQL \\\\
\\textbf{Cloud:} AWS, Docker, Kubernetes, Terraform \\\\
\\textbf{Tools:} Git, CI/CD, Datadog, Grafana

\\section*{Certifications}

AWS Solutions Architect -- Associate \\\\
{\\small\\textit{Amazon Web Services, 2023}}

\\vspace{4pt}
Google Cloud Professional Data Engineer \\\\
{\\small\\textit{Google, 2022}}

\\section*{Languages}

English (Native), Spanish (Fluent), Portuguese (Conversational)

\\columnbreak

\\section*{Experience}

\\textbf{Full Stack Developer} \\hfill Spotify \\\\
{\\small\\textit{Aug 2022 -- Present}}
\\begin{itemize}[leftmargin=*, nosep, topsep=2pt]
  \\item Built recommendation engine serving 50M+ listeners
  \\item Designed GraphQL APIs reducing payload sizes by 60\\%
  \\item Led migration from monolith to microservices architecture
\\end{itemize}

\\vspace{6pt}
\\textbf{Software Engineer} \\hfill Airbnb \\\\
{\\small\\textit{Jun 2020 -- Jul 2022}}
\\begin{itemize}[leftmargin=*, nosep, topsep=2pt]
  \\item Developed real-time pricing engine for dynamic listings
  \\item Improved search relevance increasing bookings by 12\\%
  \\item Mentored 2 interns through full project lifecycle
\\end{itemize}

\\section*{Education}

\\textbf{B.S. Computer Science} \\\\
Stanford University \\\\
{\\small\\textit{2016 -- 2020} \\hfill GPA: 3.9/4.0}

\\section*{Projects}

\\textbf{DevMetrics} -- Open-source developer productivity dashboard. 1.2K GitHub stars. Built with React and Go.

\\end{multicols}

\\end{document}`,
  },

  // ── 5. Deedy-Style ──
  {
    id: "deedy",
    name: "Deedy-Style",
    description: "Dense two-column technical resume inspired by Deedy CV",
    category: "technical",
    tags: ["technical", "dense", "two-column"],
    previewLines: [
      "PRIYA SHARMA",
      "priya.sharma@gatech.edu | github.com/priyash",
      "",
      "Education          |  Experience",
      "Georgia Tech       |  Google, SWE Intern",
      "B.S. CS, 3.92 GPA  |  Meta, ML Intern",
      "                   |",
      "Skills: C++, Python, TensorFlow, CUDA",
    ],
    supportingFiles: [],
    source: `\\documentclass[10pt,a4paper]{article}
\\usepackage[left=0.5in,right=0.5in,top=0.5in,bottom=0.5in]{geometry}
\\usepackage{hyperref}
\\usepackage{xcolor}
\\usepackage{multicol}
\\usepackage{enumitem}
\\usepackage{titlesec}

\\definecolor{primary}{HTML}{1A1A2E}
\\definecolor{accent}{HTML}{E94560}
\\definecolor{subtext}{HTML}{555555}

\\titleformat{\\section}{\\normalsize\\bfseries\\color{primary}\\uppercase}{}{0em}{}[\\vspace{1pt}{\\color{accent}\\hrule height 1.5pt}]
\\titlespacing*{\\section}{0pt}{8pt}{4pt}

\\setlength{\\parindent}{0pt}
\\setlength{\\columnsep}{20pt}
\\pagestyle{empty}

\\begin{document}

\\begin{center}
  {\\LARGE\\textbf{\\color{primary}Priya Sharma}} \\\\[4pt]
  {\\small\\color{subtext} priya.sharma@gatech.edu \\enspace $\\vert$ \\enspace +1 (404) 555-3210 \\enspace $\\vert$ \\enspace Atlanta, GA} \\\\[2pt]
  {\\small\\color{subtext} \\href{https://github.com/priyash}{github.com/priyash} \\enspace $\\vert$ \\enspace \\href{https://linkedin.com/in/priyasharma}{linkedin.com/in/priyasharma}}
\\end{center}

\\vspace{2pt}

\\begin{multicols}{2}

\\section*{Education}

\\textbf{Georgia Institute of Technology} \\\\
{\\small B.S. Computer Science, Concentration in AI} \\\\
{\\small\\textit{Aug 2021 -- May 2025} \\hfill GPA: 3.92/4.0} \\\\
{\\small\\color{subtext} Dean's List all semesters. TA for CS 4641 Machine Learning.}

\\section*{Skills}

{\\small
\\textbf{Languages:} C++, Python, Java, Rust, SQL \\\\
\\textbf{ML/AI:} PyTorch, TensorFlow, scikit-learn, CUDA \\\\
\\textbf{Systems:} Linux, Docker, gRPC, Redis \\\\
\\textbf{Web:} React, TypeScript, Node.js, GraphQL
}

\\section*{Awards}

{\\small
\\textbf{1st Place} -- HackGT 2023 (AI Track) \\\\
\\textbf{Google CSRMP Scholar} -- 2022 \\\\
\\textbf{ICPC Regionals} -- Southeast, 2023
}

\\columnbreak

\\section*{Experience}

\\textbf{Software Engineering Intern} \\hfill {\\small Google} \\\\
{\\small\\textit{May 2024 -- Aug 2024}}
\\begin{itemize}[leftmargin=*, nosep, topsep=2pt]
  \\item[\\color{accent}\\textbullet] Built distributed training pipeline for LLM fine-tuning on TPU v5
  \\item[\\color{accent}\\textbullet] Reduced training convergence time by 35\\% via custom data loader
  \\item[\\color{accent}\\textbullet] Contributed to internal ML framework used by 200+ researchers
\\end{itemize}

\\vspace{4pt}
\\textbf{ML Engineering Intern} \\hfill {\\small Meta} \\\\
{\\small\\textit{May 2023 -- Aug 2023}}
\\begin{itemize}[leftmargin=*, nosep, topsep=2pt]
  \\item[\\color{accent}\\textbullet] Implemented content recommendation model serving 100M+ users
  \\item[\\color{accent}\\textbullet] A/B tested engagement features increasing session time by 8\\%
\\end{itemize}

\\section*{Projects}

\\textbf{NeuralDB} -- Vector database engine built in Rust with HNSW indexing. 800+ GitHub stars. Benchmarked 3x faster than FAISS on 1M vectors.

\\vspace{4pt}
\\textbf{CodeBuddy} -- AI pair programmer VS Code extension using fine-tuned CodeLlama. 2K+ installs on VS Code Marketplace.

\\end{multicols}

\\end{document}`,
  },

  // ── 6. Executive ──
  {
    id: "executive",
    name: "Executive",
    description: "Formal serif layout for senior and leadership roles",
    category: "executive",
    tags: ["executive", "serif", "formal"],
    previewLines: [
      "MICHAEL THOMPSON",
      "Chief Technology Officer",
      "",
      "────────────────────────────────",
      "Executive Summary",
      "Seasoned technology leader with 15+ years...",
      "────────────────────────────────",
      "Leadership Experience",
    ],
    supportingFiles: [],
    source: `\\documentclass[11pt,letterpaper]{article}
\\usepackage[margin=1in]{geometry}
\\usepackage{hyperref}
\\usepackage{enumitem}
\\usepackage{titlesec}

\\renewcommand{\\familydefault}{\\rmdefault}

\\titleformat{\\section}{\\large\\bfseries}{}{0em}{\\MakeUppercase}[\\vspace{2pt}\\hrule height 0.5pt]
\\titlespacing*{\\section}{0pt}{14pt}{6pt}

\\setlength{\\parindent}{0pt}
\\pagestyle{empty}

\\begin{document}

\\begin{center}
  {\\LARGE\\textbf{Michael Thompson}} \\\\[6pt]
  {\\large Chief Technology Officer} \\\\[8pt]
  {\\small michael.thompson@email.com \\enspace $\\cdot$ \\enspace +1 (212) 555-8900 \\enspace $\\cdot$ \\enspace New York, NY} \\\\[2pt]
  {\\small \\href{https://linkedin.com/in/mthompson}{linkedin.com/in/mthompson}}
\\end{center}

\\vspace{8pt}

\\section*{Executive Summary}

Seasoned technology leader with 15+ years of experience driving digital transformation at scale. Proven track record of building and leading engineering organizations of 200+ engineers, delivering platforms serving millions of users, and aligning technology strategy with business objectives. Deep expertise in cloud architecture, data infrastructure, and AI/ML systems.

\\section*{Leadership Experience}

\\textbf{Chief Technology Officer} \\hfill FinanceHub Inc. \\\\
{\\textit{Jan 2021 -- Present}} \\hfill {\\small New York, NY}
\\begin{itemize}[leftmargin=*, nosep, topsep=4pt]
  \\item Oversee engineering organization of 220 engineers across 18 teams
  \\item Led cloud migration reducing infrastructure costs by \\$4.2M annually
  \\item Launched AI-powered fraud detection system preventing \\$120M+ in losses
  \\item Established engineering culture resulting in 92\\% retention rate
\\end{itemize}

\\vspace{8pt}
\\textbf{VP of Engineering} \\hfill DataScale Corp. \\\\
{\\textit{Mar 2017 -- Dec 2020}} \\hfill {\\small San Francisco, CA}
\\begin{itemize}[leftmargin=*, nosep, topsep=4pt]
  \\item Grew engineering team from 40 to 150 engineers in 3 years
  \\item Architected real-time data pipeline processing 2B+ events daily
  \\item Drove SOC 2 Type II and GDPR compliance across all systems
\\end{itemize}

\\vspace{8pt}
\\textbf{Senior Engineering Manager} \\hfill Amazon Web Services \\\\
{\\textit{Jun 2012 -- Feb 2017}} \\hfill {\\small Seattle, WA}
\\begin{itemize}[leftmargin=*, nosep, topsep=4pt]
  \\item Managed 6 teams building core AWS Lambda infrastructure
  \\item Delivered features contributing to 40\\% YoY revenue growth
\\end{itemize}

\\section*{Education}

\\textbf{M.S. Computer Science} \\hfill Carnegie Mellon University \\\\
{\\small\\textit{2010 -- 2012}}

\\vspace{4pt}
\\textbf{B.S. Computer Engineering} \\hfill University of Michigan \\\\
{\\small\\textit{2006 -- 2010}} \\hfill {\\small Summa Cum Laude}

\\section*{Board \\& Advisory}

\\begin{itemize}[leftmargin=*, nosep]
  \\item Technical Advisory Board, TechStars NYC (2022 -- Present)
  \\item Board Member, Code.org Education Initiative (2020 -- Present)
\\end{itemize}

\\end{document}`,
  },

  // ── 7. Software Engineer ──
  {
    id: "software-engineer",
    name: "Software Engineer",
    description: "Optimized for tech roles with skills matrix and projects",
    category: "technical",
    tags: ["technical", "ATS-friendly"],
    previewLines: [
      "RAVI PATEL",
      "Full Stack Engineer",
      "────────────────────────────────",
      "Technical Skills",
      "React | Node.js | Python | AWS | Docker",
      "────────────────────────────────",
      "Experience",
      "Backend Engineer - Stripe",
    ],
    supportingFiles: [],
    source: `\\documentclass[10pt,a4paper]{article}
\\usepackage[margin=0.6in]{geometry}
\\usepackage{hyperref}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\usepackage{xcolor}

\\definecolor{heading}{HTML}{1E293B}
\\definecolor{accent}{HTML}{3B82F6}

\\titleformat{\\section}{\\normalsize\\bfseries\\color{heading}\\uppercase}{}{0em}{}[\\vspace{1pt}{\\color{accent}\\hrule height 1pt}]
\\titlespacing*{\\section}{0pt}{10pt}{4pt}

\\setlength{\\parindent}{0pt}
\\pagestyle{empty}

\\begin{document}

\\begin{center}
  {\\LARGE\\textbf{\\color{heading}Ravi Patel}} \\\\[4pt]
  {\\small ravi.patel@email.com \\enspace $\\cdot$ \\enspace +1 (650) 555-2468 \\enspace $\\cdot$ \\enspace Austin, TX} \\\\[2pt]
  {\\small \\href{https://github.com/ravipatel}{github.com/ravipatel} \\enspace $\\cdot$ \\enspace \\href{https://linkedin.com/in/ravipatel}{linkedin.com/in/ravipatel} \\enspace $\\cdot$ \\enspace \\href{https://ravipatel.dev}{ravipatel.dev}}
\\end{center}

\\section*{Technical Skills}

\\textbf{Languages:} JavaScript, TypeScript, Python, Go, SQL, Rust \\\\
\\textbf{Frontend:} React, Next.js, Vue.js, Tailwind CSS, Webpack \\\\
\\textbf{Backend:} Node.js, Express, FastAPI, Django, GraphQL, gRPC \\\\
\\textbf{Data:} PostgreSQL, MongoDB, Redis, Elasticsearch, Kafka \\\\
\\textbf{DevOps:} AWS (EC2, Lambda, S3, RDS), Docker, Kubernetes, Terraform, GitHub Actions

\\section*{Experience}

\\textbf{Senior Backend Engineer} \\hfill Stripe, Austin TX \\\\
{\\small\\textit{Mar 2022 -- Present}}
\\begin{itemize}[leftmargin=*, nosep, topsep=2pt]
  \\item Architected payment processing pipeline handling \\$2B+ in daily transactions
  \\item Built idempotency framework reducing duplicate charges by 99.7\\%
  \\item Designed rate-limiting service processing 500K requests/sec with sub-ms latency
  \\item Led team of 5 engineers delivering PCI DSS compliant tokenization system
\\end{itemize}

\\vspace{4pt}
\\textbf{Full Stack Engineer} \\hfill Shopify, Remote \\\\
{\\small\\textit{Jul 2019 -- Feb 2022}}
\\begin{itemize}[leftmargin=*, nosep, topsep=2pt]
  \\item Developed storefront rendering engine improving page load by 45\\%
  \\item Built real-time inventory sync handling 10K+ concurrent store updates
  \\item Created internal CLI tool adopted by 80+ engineers for local development
\\end{itemize}

\\section*{Projects}

\\textbf{FastQueue} -- High-performance message queue in Rust with NATS protocol compatibility. 1.5K GitHub stars, benchmarked at 2M msgs/sec.

\\vspace{4pt}
\\textbf{APIForge} -- Open-source API mocking and testing framework for Node.js. Used by 500+ companies. Featured in Node Weekly.

\\section*{Education}

\\textbf{B.S. Computer Science} \\hfill University of Texas at Austin \\\\
{\\small\\textit{2015 -- 2019}} \\hfill {\\small GPA: 3.85/4.0}

\\end{document}`,
  },

  // ── 8. Modern Clean ──
  {
    id: "modern-clean",
    name: "Modern Clean",
    description: "Contemporary design with colored accent section headers",
    category: "creative",
    tags: ["modern", "color-accent"],
    previewLines: [
      "EMMA NAKAMURA",
      "Data Scientist",
      "",
      "  About",
      "  Data scientist specializing in ML pipelines...",
      "",
      "  Experience",
      "  Data Scientist - Netflix, 2022-Present",
    ],
    supportingFiles: [],
    source: `\\documentclass[10pt,a4paper]{article}
\\usepackage[margin=0.7in]{geometry}
\\usepackage{hyperref}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\usepackage{xcolor}

\\definecolor{primary}{HTML}{6366F1}
\\definecolor{dark}{HTML}{1E1B4B}
\\definecolor{muted}{HTML}{64748B}

\\titleformat{\\section}{\\normalsize\\bfseries\\color{primary}}{}{0em}{\\hspace{0pt}}[\\vspace{0pt}]
\\titlespacing*{\\section}{0pt}{12pt}{4pt}

\\setlength{\\parindent}{0pt}
\\pagestyle{empty}

\\newcommand{\\accentline}{\\vspace{2pt}{\\color{primary}\\hrule height 2pt}\\vspace{6pt}}

\\begin{document}

\\begin{center}
  {\\LARGE\\textbf{\\color{dark}Emma Nakamura}} \\\\[4pt]
  {\\normalsize\\color{muted} Data Scientist} \\\\[6pt]
  {\\small\\color{muted} emma.nakamura@email.com \\enspace $\\cdot$ \\enspace +1 (310) 555-7412 \\enspace $\\cdot$ \\enspace Los Angeles, CA} \\\\[2pt]
  {\\small\\color{muted} \\href{https://github.com/enakamura}{github.com/enakamura} \\enspace $\\cdot$ \\enspace \\href{https://linkedin.com/in/enakamura}{linkedin.com/in/enakamura}}
\\end{center}

\\vspace{4pt}

\\section*{About}
\\accentline
Data scientist specializing in building production ML pipelines and turning complex datasets into actionable business insights. 4+ years of experience in recommendation systems, NLP, and experimentation platforms.

\\section*{Experience}
\\accentline

\\textbf{Senior Data Scientist} \\hfill {\\color{muted}Netflix, Los Angeles} \\\\
{\\small\\color{muted}\\textit{Apr 2022 -- Present}}
\\begin{itemize}[leftmargin=*, nosep, topsep=3pt]
  \\item Built personalization model improving content discovery CTR by 18\\%
  \\item Designed A/B testing framework used by 30+ data scientists
  \\item Developed real-time feature store serving 200M+ member profiles
  \\item Published internal research on causal inference for content recommendations
\\end{itemize}

\\vspace{6pt}
\\textbf{Data Scientist} \\hfill {\\color{muted}Spotify, New York} \\\\
{\\small\\color{muted}\\textit{Jun 2020 -- Mar 2022}}
\\begin{itemize}[leftmargin=*, nosep, topsep=3pt]
  \\item Developed playlist recommendation algorithm for Discover Weekly
  \\item Built NLP pipeline for podcast transcript analysis and topic modeling
  \\item Created dashboards tracking 15+ KPIs for content strategy team
\\end{itemize}

\\section*{Skills}
\\accentline

\\textbf{Languages:} Python, R, SQL, Scala \\\\
\\textbf{ML/AI:} PyTorch, TensorFlow, scikit-learn, XGBoost, Hugging Face \\\\
\\textbf{Data:} Spark, Airflow, dbt, BigQuery, Snowflake, Kafka \\\\
\\textbf{Visualization:} Matplotlib, Plotly, Tableau, Streamlit

\\section*{Education}
\\accentline

\\textbf{M.S. Statistics} \\hfill UCLA \\\\
{\\small\\color{muted}\\textit{2018 -- 2020}} \\hfill {\\small Focus: Statistical Learning}

\\vspace{4pt}
\\textbf{B.S. Mathematics} \\hfill UC Berkeley \\\\
{\\small\\color{muted}\\textit{2014 -- 2018}} \\hfill {\\small GPA: 3.88/4.0}

\\section*{Publications}
\\accentline

{\\small Nakamura, E. \\& Lee, J. (2023). "Causal Bandits for Content Recommendations." \\textit{RecSys 2023}.}

\\end{document}`,
  },
];

export function getLatexTemplate(id: string): LatexTemplate | undefined {
  return LATEX_TEMPLATES.find((t) => t.id === id);
}
