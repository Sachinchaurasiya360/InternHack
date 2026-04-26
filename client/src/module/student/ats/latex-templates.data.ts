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

  // ── 9. Jake's Resume ──
  {
    id: "jakes-resume",
    name: "Jake's Resume",
    description: "Popular CS resume format, compact, single-column, no frills",
    category: "technical",
    tags: ["ATS-friendly", "compact", "CS"],
    previewLines: [
      "JAKE RYAN",
      "123-456-7890 | jake@su.edu",
      "linkedin.com/in/jake | github.com/jake",
      "────────────────────────────────",
      "Education",
      "Southwestern University",
      "────────────────────────────────",
      "Experience",
    ],
    supportingFiles: [],
    source: `\\documentclass[10pt,letterpaper]{article}
\\usepackage[margin=0.5in]{geometry}
\\usepackage{latexsym}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{titlesec}
\\usepackage{xcolor}

\\titleformat{\\section}{\\large\\bfseries}{}{0em}{}[\\vspace{-6pt}\\rule{\\linewidth}{0.4pt}]
\\titlespacing*{\\section}{0pt}{6pt}{4pt}

\\setlength{\\parindent}{0pt}
\\setlength{\\tabcolsep}{0in}
\\pagestyle{empty}

\\newcommand{\\resumeItem}[1]{\\item\\small{#1}}
\\newcommand{\\resumeSubheading}[4]{
  \\item
  \\begin{tabular*}{\\linewidth}{l@{\\extracolsep{\\fill}}r}
    \\textbf{#1} & \\small #2 \\\\
    \\textit{\\small #3} & \\textit{\\small #4}
  \\end{tabular*}\\vspace{-4pt}
}

\\begin{document}

\\begin{center}
  {\\Huge\\textbf{Jake Ryan}} \\\\[4pt]
  \\small 123-456-7890 $|$
  \\href{mailto:jake@su.edu}{jake@su.edu} $|$
  \\href{https://linkedin.com/in/jake}{linkedin.com/in/jake} $|$
  \\href{https://github.com/jake}{github.com/jake}
\\end{center}

\\section*{Education}
\\begin{itemize}[leftmargin=0pt, label={}, nosep]
  \\resumeSubheading{Southwestern University}{Georgetown, TX}{B.S. Computer Science, Minor in Business}{Aug 2018 -- May 2021}
\\end{itemize}

\\section*{Experience}
\\begin{itemize}[leftmargin=0pt, label={}, nosep]
  \\resumeSubheading{Undergraduate Research Assistant}{Jun 2020 -- Present}{Texas A\\&M University}{College Station, TX}
  \\begin{itemize}[leftmargin=12pt, nosep]
    \\resumeItem{Developed a REST API using FastAPI and PostgreSQL to manage 3000+ journal articles}
    \\resumeItem{Built a full-stack web application using Flask, React, PostgreSQL, and Docker}
    \\resumeItem{Explored methods to generate large synthetic datasets using Python and NumPy}
  \\end{itemize}

  \\resumeSubheading{IT Support Specialist}{Sep 2018 -- Present}{Southwestern University}{Georgetown, TX}
  \\begin{itemize}[leftmargin=12pt, nosep]
    \\resumeItem{Communicate with managers to set up campus computers used by PC Lab students}
    \\resumeItem{Assess and troubleshoot computer problems brought by students and faculty}
  \\end{itemize}
\\end{itemize}

\\section*{Projects}
\\begin{itemize}[leftmargin=0pt, label={}, nosep]
  \\resumeSubheading{Gitlytics}{Python, Flask, React, PostgreSQL, Docker}{\\href{https://github.com/jake/gitlytics}{github.com/jake/gitlytics}}{Jun 2020 -- Present}
  \\begin{itemize}[leftmargin=12pt, nosep]
    \\resumeItem{Developed a full-stack web application for GitHub analytics using Flask REST API and React}
    \\resumeItem{Visualized GitHub data to demonstrate collaboration with interactive contribution graphs}
    \\resumeItem{Configured Nginx load balancer for the web application and target group EC2 instances}
  \\end{itemize}

  \\resumeSubheading{Simple Paintball}{Spigot API, Java, Maven, TravisCI, Git}{\\href{https://github.com/jake/simple-paintball}{github.com/jake/simple-paintball}}{May 2020 -- Jul 2020}
  \\begin{itemize}[leftmargin=12pt, nosep]
    \\resumeItem{Developed a Minecraft server plugin to entertain kids using game development extract design}
    \\resumeItem{Published plugin to websites gaining 2K+ downloads and a 4.5/5-star review}
  \\end{itemize}
\\end{itemize}

\\section*{Technical Skills}
\\begin{itemize}[leftmargin=0pt, label={}, nosep]
  \\item \\textbf{Languages:} Java, Python, C/C++, SQL, JavaScript, HTML/CSS, R \\\\
  \\textbf{Frameworks:} React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI \\\\
  \\textbf{Developer Tools:} Git, Docker, TravisCI, Google Cloud Platform, VS Code, IntelliJ \\\\
  \\textbf{Libraries:} pandas, NumPy, Matplotlib
\\end{itemize}

\\end{document}`,
  },

  // ── 10. Sidebar Infographic ──
  {
    id: "sidebar-infographic",
    name: "Sidebar Infographic",
    description: "Modern two-column with a colored left sidebar panel",
    category: "creative",
    tags: ["modern", "sidebar", "colorful"],
    previewLines: [
      "┌──────────┬───────────────────┐",
      "│ CONTACT  │                   │",
      "│ email    │  LISA MARTINEZ    │",
      "│ phone    │  UX Designer      │",
      "│          │                   │",
      "│ SKILLS   │  Experience       │",
      "│ Figma    │  Airbnb, 2022-now │",
      "└──────────┴───────────────────┘",
    ],
    supportingFiles: [],
    source: `\\documentclass[10pt,a4paper]{article}
\\usepackage[margin=0pt]{geometry}
\\usepackage{xcolor}
\\usepackage{tikz}
\\usepackage{hyperref}
\\usepackage{enumitem}
\\usepackage{fontenc}

\\definecolor{sidebar}{HTML}{1E293B}
\\definecolor{sidetext}{HTML}{CBD5E1}
\\definecolor{sideheading}{HTML}{FFFFFF}
\\definecolor{accent}{HTML}{6366F1}
\\definecolor{mainbg}{HTML}{FFFFFF}
\\definecolor{bodytext}{HTML}{334155}
\\definecolor{heading}{HTML}{0F172A}

\\setlength{\\parindent}{0pt}
\\pagestyle{empty}

\\begin{document}

\\noindent
\\begin{tikzpicture}[remember picture, overlay]
  \\fill[sidebar] (current page.north west) rectangle ([xshift=6.2cm]current page.south west);
\\end{tikzpicture}

\\noindent
\\begin{minipage}[t]{5.6cm}
\\vspace{12pt}
\\hspace{10pt}\\begin{minipage}[t]{4.8cm}
\\raggedright

{\\color{sideheading}\\LARGE\\bfseries Lisa Martinez}

\\vspace{4pt}
{\\color{accent}\\normalsize UX Designer}

\\vspace{16pt}
{\\color{accent}\\small\\bfseries CONTACT}

\\vspace{6pt}
{\\color{sidetext}\\small
lisa.martinez@email.com \\\\[2pt]
+1 (415) 555-3847 \\\\[2pt]
San Francisco, CA \\\\[2pt]
lisadesigns.com
}

\\vspace{16pt}
{\\color{accent}\\small\\bfseries SKILLS}

\\vspace{6pt}
{\\color{sidetext}\\small
Figma \\& Sketch \\\\[2pt]
Adobe Creative Suite \\\\[2pt]
Prototyping \\& Wireframing \\\\[2pt]
User Research \\\\[2pt]
Design Systems \\\\[2pt]
HTML / CSS / JS \\\\[2pt]
React Basics \\\\[2pt]
Accessibility (WCAG)
}

\\vspace{16pt}
{\\color{accent}\\small\\bfseries EDUCATION}

\\vspace{6pt}
{\\color{sideheading}\\small\\bfseries B.F.A. Interaction Design}

\\vspace{2pt}
{\\color{sidetext}\\small
California College of the Arts \\\\
2014 -- 2018
}

\\vspace{16pt}
{\\color{accent}\\small\\bfseries AWARDS}

\\vspace{6pt}
{\\color{sidetext}\\small
Webby Award Honoree, 2023 \\\\[2pt]
InVision Design Forward, 2022
}

\\end{minipage}
\\end{minipage}%
\\hspace{12pt}%
\\begin{minipage}[t]{12.2cm}
\\vspace{14pt}
\\raggedright

{\\color{heading}\\large\\bfseries\\uppercase{About}}

\\vspace{2pt}
{\\color{accent}\\rule{3cm}{2pt}}

\\vspace{6pt}
{\\color{bodytext}\\small
UX designer with 6+ years of experience crafting intuitive digital products. Passionate about accessible design, user research, and building scalable design systems.
}

\\vspace{14pt}
{\\color{heading}\\large\\bfseries\\uppercase{Experience}}

\\vspace{2pt}
{\\color{accent}\\rule{3cm}{2pt}}

\\vspace{8pt}
{\\color{heading}\\bfseries Senior UX Designer} \\hfill {\\color{bodytext}\\small Airbnb}

\\vspace{1pt}
{\\color{bodytext}\\small\\textit{Mar 2022 -- Present \\enspace $\\cdot$ \\enspace San Francisco, CA}}

\\vspace{3pt}
{\\color{bodytext}\\small
\\begin{itemize}[leftmargin=12pt, nosep, topsep=0pt]
  \\item Redesigned guest booking flow increasing conversion by 22\\%
  \\item Built and maintained component library with 120+ components
  \\item Led user research sessions with 50+ participants across 4 countries
  \\item Mentored 3 junior designers through Airbnb's design fellowship
\\end{itemize}
}

\\vspace{10pt}
{\\color{heading}\\bfseries UX Designer} \\hfill {\\color{bodytext}\\small Dropbox}

\\vspace{1pt}
{\\color{bodytext}\\small\\textit{Jun 2019 -- Feb 2022 \\enspace $\\cdot$ \\enspace San Francisco, CA}}

\\vspace{3pt}
{\\color{bodytext}\\small
\\begin{itemize}[leftmargin=12pt, nosep, topsep=0pt]
  \\item Designed collaborative editing features used by 700M+ users
  \\item Created Dropbox Paper design system reducing dev handoff time by 40\\%
  \\item Conducted A/B tests on file sharing workflows increasing engagement by 15\\%
\\end{itemize}
}

\\vspace{10pt}
{\\color{heading}\\bfseries Junior UX Designer} \\hfill {\\color{bodytext}\\small IDEO}

\\vspace{1pt}
{\\color{bodytext}\\small\\textit{Jul 2018 -- May 2019 \\enspace $\\cdot$ \\enspace San Francisco, CA}}

\\vspace{3pt}
{\\color{bodytext}\\small
\\begin{itemize}[leftmargin=12pt, nosep, topsep=0pt]
  \\item Contributed to client projects for Ford, Nike, and the Gates Foundation
  \\item Created wireframes and prototypes for 5+ human-centered design sprints
\\end{itemize}
}

\\end{minipage}

\\end{document}`,
  },

  // ── 11. Classic Serif ──
  {
    id: "classic-serif",
    name: "Classic Serif",
    description: "Traditional Times-style resume, formal, timeless, ATS-safe",
    category: "professional",
    tags: ["traditional", "serif", "ATS-friendly"],
    previewLines: [
      "ROBERT J. WILLIAMS",
      "1234 Main Street, Chicago, IL 60601",
      "(312) 555-9876 | robert.williams@email.com",
      "────────────────────────────────",
      "PROFESSIONAL EXPERIENCE",
      "Senior Accountant, Deloitte",
      "────────────────────────────────",
      "EDUCATION",
    ],
    supportingFiles: [],
    source: `\\documentclass[11pt,letterpaper]{article}
\\usepackage[margin=0.75in]{geometry}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{titlesec}

\\renewcommand{\\familydefault}{\\rmdefault}

\\titleformat{\\section}{\\normalsize\\bfseries\\scshape}{}{0em}{\\MakeUppercase}[\\vspace{1pt}\\hrule]
\\titlespacing*{\\section}{0pt}{10pt}{4pt}

\\setlength{\\parindent}{0pt}
\\pagestyle{empty}

\\begin{document}

\\begin{center}
  {\\Large\\textbf{Robert J. Williams}} \\\\[4pt]
  {\\small 1234 Main Street, Chicago, IL 60601} \\\\[2pt]
  {\\small (312) 555-9876 \\enspace $\\cdot$ \\enspace robert.williams@email.com \\enspace $\\cdot$ \\enspace \\href{https://linkedin.com/in/rjwilliams}{linkedin.com/in/rjwilliams}}
\\end{center}

\\section*{Professional Summary}

Certified Public Accountant with 8+ years of experience in audit, tax compliance, and financial reporting for Fortune 500 clients. Strong analytical skills with expertise in GAAP, SOX compliance, and ERP systems. Proven ability to manage cross-functional teams and deliver high-quality results under tight deadlines.

\\section*{Professional Experience}

\\textbf{Senior Audit Manager} \\hfill Deloitte LLP, Chicago, IL \\\\
\\textit{September 2021 -- Present}
\\begin{itemize}[leftmargin=16pt, nosep, topsep=3pt]
  \\item Manage audit engagements for 8 public company clients with combined revenue exceeding \\$12B
  \\item Supervise team of 12 auditors across multiple concurrent engagements
  \\item Identified material misstatements saving clients \\$3.2M in potential regulatory penalties
  \\item Developed standardized audit procedures adopted firm-wide across 6 regional offices
\\end{itemize}

\\vspace{6pt}
\\textbf{Audit Senior Associate} \\hfill PricewaterhouseCoopers, Chicago, IL \\\\
\\textit{June 2018 -- August 2021}
\\begin{itemize}[leftmargin=16pt, nosep, topsep=3pt]
  \\item Led SOX compliance testing for financial services clients
  \\item Performed substantive testing and analytical procedures for revenue and expense accounts
  \\item Trained and supervised 4 staff associates during busy season engagements
\\end{itemize}

\\vspace{6pt}
\\textbf{Staff Auditor} \\hfill KPMG LLP, Chicago, IL \\\\
\\textit{July 2016 -- May 2018}
\\begin{itemize}[leftmargin=16pt, nosep, topsep=3pt]
  \\item Executed audit fieldwork for manufacturing and retail industry clients
  \\item Prepared financial statement workpapers and audit documentation
\\end{itemize}

\\section*{Education}

\\textbf{Master of Accountancy} \\hfill University of Illinois at Urbana-Champaign \\\\
\\textit{2015 -- 2016} \\hfill GPA: 3.9/4.0

\\vspace{4pt}
\\textbf{B.S. Accounting} \\hfill University of Illinois at Urbana-Champaign \\\\
\\textit{2012 -- 2016} \\hfill Magna Cum Laude

\\section*{Certifications \\& Skills}

\\textbf{Certifications:} CPA (Illinois), CIA \\\\
\\textbf{Software:} SAP, Oracle ERP, Excel (Advanced), Tableau, Alteryx, Bloomberg \\\\
\\textbf{Skills:} GAAP, IFRS, SOX Compliance, Internal Controls, Data Analytics

\\end{document}`,
  },

  // ── 12. Compact Tech ──
  {
    id: "compact-tech",
    name: "Compact Tech",
    description: "Ultra-dense single-page layout, fits maximum content for tech roles",
    category: "technical",
    tags: ["compact", "dense", "single-page"],
    previewLines: [
      "ANANYA KRISHNAN",
      "ananya@dev.io | github.com/ananyak",
      "────────────────────────────────",
      "Skills: Go, Rust, K8s, gRPC, Kafka",
      "────────────────────────────────",
      "Staff Engineer, Cloudflare",
      "Principal Engineer, Vercel",
    ],
    supportingFiles: [],
    source: `\\documentclass[9pt,a4paper]{article}
\\usepackage[left=0.4in,right=0.4in,top=0.35in,bottom=0.35in]{geometry}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{titlesec}
\\usepackage{xcolor}

\\definecolor{rule}{HTML}{3B82F6}
\\definecolor{sub}{HTML}{6B7280}

\\titleformat{\\section}{\\small\\bfseries\\uppercase}{}{0em}{}[\\vspace{0pt}{\\color{rule}\\rule{\\linewidth}{0.8pt}}]
\\titlespacing*{\\section}{0pt}{6pt}{3pt}

\\setlength{\\parindent}{0pt}
\\pagestyle{empty}

\\begin{document}

\\begin{center}
  {\\Large\\textbf{Ananya Krishnan}} \\\\[3pt]
  {\\footnotesize ananya@dev.io \\enspace $\\vert$ \\enspace +1 (206) 555-1199 \\enspace $\\vert$ \\enspace Seattle, WA \\enspace $\\vert$ \\enspace \\href{https://github.com/ananyak}{github.com/ananyak} \\enspace $\\vert$ \\enspace \\href{https://linkedin.com/in/ananyak}{linkedin.com/in/ananyak}}
\\end{center}

\\section*{Technical Skills}
{\\footnotesize
\\textbf{Languages:} Go, Rust, TypeScript, Python, C++ \\quad
\\textbf{Infrastructure:} Kubernetes, Terraform, Helm, Prometheus, Grafana \\\\
\\textbf{Backend:} gRPC, Kafka, Redis, PostgreSQL, DynamoDB, Elasticsearch \\quad
\\textbf{Cloud:} AWS, GCP, Cloudflare Workers
}

\\section*{Experience}

{\\small\\textbf{Staff Software Engineer}} \\hfill {\\footnotesize Cloudflare, Austin TX \\enspace $\\vert$ \\enspace Apr 2023 -- Present}
\\begin{itemize}[leftmargin=10pt, nosep, topsep=1pt]
  \\item[\\textbullet] {\\footnotesize Architected edge computing platform processing 45M requests/sec across 300+ data centers worldwide}
  \\item[\\textbullet] {\\footnotesize Designed zero-downtime deployment system for Workers runtime reducing rollout failures by 94\\%}
  \\item[\\textbullet] {\\footnotesize Led 8-person team building distributed KV store with sub-millisecond P99 read latency globally}
  \\item[\\textbullet] {\\footnotesize Authored 12 RFCs adopted by engineering org; mentored 5 senior engineers to staff-level promotion}
\\end{itemize}

\\vspace{3pt}
{\\small\\textbf{Principal Engineer}} \\hfill {\\footnotesize Vercel, Remote \\enspace $\\vert$ \\enspace Jan 2021 -- Mar 2023}
\\begin{itemize}[leftmargin=10pt, nosep, topsep=1pt]
  \\item[\\textbullet] {\\footnotesize Built serverless function runtime serving 8B+ invocations/month with 99.99\\% uptime SLA}
  \\item[\\textbullet] {\\footnotesize Optimized cold start times by 65\\% through V8 isolate pooling and snapshot preloading}
  \\item[\\textbullet] {\\footnotesize Designed incremental static regeneration (ISR) backend handling 2M+ page rebuilds daily}
\\end{itemize}

\\vspace{3pt}
{\\small\\textbf{Senior Software Engineer}} \\hfill {\\footnotesize Stripe, Seattle WA \\enspace $\\vert$ \\enspace Jun 2018 -- Dec 2020}
\\begin{itemize}[leftmargin=10pt, nosep, topsep=1pt]
  \\item[\\textbullet] {\\footnotesize Developed fraud detection pipeline processing 500K+ transactions/min with 99.97\\% accuracy}
  \\item[\\textbullet] {\\footnotesize Built idempotency layer for Payments API eliminating duplicate charges across retry storms}
  \\item[\\textbullet] {\\footnotesize Migrated monolithic Ruby service to Go microservices reducing P99 latency from 800ms to 45ms}
\\end{itemize}

\\vspace{3pt}
{\\small\\textbf{Software Engineer}} \\hfill {\\footnotesize Amazon, Seattle WA \\enspace $\\vert$ \\enspace Jul 2016 -- May 2018}
\\begin{itemize}[leftmargin=10pt, nosep, topsep=1pt]
  \\item[\\textbullet] {\\footnotesize Built inventory forecasting service processing 100M+ SKU updates daily for Amazon Fulfillment}
  \\item[\\textbullet] {\\footnotesize Reduced warehouse misrouting by 18\\% through ML-based routing optimization}
\\end{itemize}

\\section*{Projects}

{\\footnotesize
\\textbf{EdgeDB} -- Distributed database engine in Rust optimized for edge deployments. 3.2K GitHub stars. Featured in Rust Weekly. \\\\
\\textbf{KubeForge} -- Kubernetes operator for zero-downtime database migrations. Used by 200+ companies in production.
}

\\section*{Education}

{\\small\\textbf{M.S. Computer Science}} \\hfill {\\footnotesize University of Washington, 2014 -- 2016}
\\hfill {\\footnotesize\\color{sub} Focus: Distributed Systems} \\\\
{\\small\\textbf{B.Tech Computer Science}} \\hfill {\\footnotesize IIT Bombay, 2010 -- 2014}
\\hfill {\\footnotesize\\color{sub} Gold Medalist}

\\end{document}`,
  },

  // ── 13. ATS Optimized ──
  {
    id: "ats-optimized",
    name: "ATS Optimized",
    description: "Maximum ATS compatibility, plain, parseable, zero formatting tricks",
    category: "professional",
    tags: ["ATS-friendly", "plain", "safe"],
    previewLines: [
      "MARIA GONZALEZ",
      "maria.gonzalez@email.com | (555) 234-5678",
      "────────────────────────────────",
      "SUMMARY",
      "Marketing professional with 6+ years...",
      "────────────────────────────────",
      "WORK EXPERIENCE",
      "Marketing Manager, HubSpot",
    ],
    supportingFiles: [],
    source: `\\documentclass[11pt,letterpaper]{article}
\\usepackage[margin=0.75in]{geometry}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{titlesec}

\\titleformat{\\section}{\\large\\bfseries}{}{0em}{\\MakeUppercase}[\\vspace{2pt}\\hrule]
\\titlespacing*{\\section}{0pt}{10pt}{4pt}

\\setlength{\\parindent}{0pt}
\\pagestyle{empty}

\\begin{document}

\\begin{center}
  {\\LARGE\\textbf{Maria Gonzalez}} \\\\[6pt]
  {\\small maria.gonzalez@email.com \\enspace $\\cdot$ \\enspace (555) 234-5678 \\enspace $\\cdot$ \\enspace Austin, TX} \\\\[2pt]
  {\\small \\href{https://linkedin.com/in/mariagonzalez}{linkedin.com/in/mariagonzalez}}
\\end{center}

\\section*{Summary}

Results-driven marketing professional with 6+ years of experience in digital marketing, brand strategy, and content management. Proven expertise in SEO/SEM, marketing automation, and data-driven campaign optimization. Track record of driving revenue growth through multi-channel marketing strategies.

\\section*{Work Experience}

\\textbf{Senior Marketing Manager} \\hfill HubSpot, Austin TX \\\\
\\textit{March 2022 -- Present}
\\begin{itemize}[leftmargin=16pt, nosep, topsep=3pt]
  \\item Manage \\$2.4M annual marketing budget across paid, organic, and email channels
  \\item Increased qualified lead generation by 45\\% YoY through SEO and content strategy overhaul
  \\item Built and launched ABM program targeting enterprise accounts, generating \\$8M in pipeline
  \\item Led team of 6 marketers across content, demand gen, and marketing operations
  \\item Implemented marketing attribution model improving campaign ROI measurement accuracy by 60\\%
\\end{itemize}

\\vspace{6pt}
\\textbf{Digital Marketing Manager} \\hfill Mailchimp, Atlanta GA \\\\
\\textit{June 2019 -- February 2022}
\\begin{itemize}[leftmargin=16pt, nosep, topsep=3pt]
  \\item Managed Google Ads and Meta Ads campaigns with combined monthly spend of \\$350K
  \\item Grew organic blog traffic from 200K to 1.2M monthly sessions through SEO strategy
  \\item Launched email nurture sequences increasing trial-to-paid conversion by 28\\%
  \\item Partnered with product team to improve onboarding reducing churn by 15\\%
\\end{itemize}

\\vspace{6pt}
\\textbf{Marketing Coordinator} \\hfill Buffer, Remote \\\\
\\textit{August 2017 -- May 2019}
\\begin{itemize}[leftmargin=16pt, nosep, topsep=3pt]
  \\item Coordinated social media strategy across 5 platforms reaching 2M+ followers
  \\item Created monthly performance reports for leadership using Google Analytics and Tableau
  \\item Managed content calendar and produced 3+ blog posts per week
\\end{itemize}

\\section*{Education}

\\textbf{B.B.A. Marketing} \\hfill University of Texas at Austin \\\\
\\textit{2013 -- 2017} \\hfill GPA: 3.7/4.0

\\section*{Skills}

\\textbf{Marketing:} SEO, SEM, Content Strategy, Email Marketing, ABM, Marketing Automation \\\\
\\textbf{Tools:} HubSpot, Salesforce, Google Analytics, Google Ads, Meta Ads, Tableau, Marketo \\\\
\\textbf{Technical:} HTML/CSS, SQL, A/B Testing, Marketing Attribution, CRM Management

\\section*{Certifications}

Google Analytics Certified \\enspace $\\cdot$ \\enspace HubSpot Inbound Marketing Certified \\enspace $\\cdot$ \\enspace Meta Blueprint Certified

\\end{document}`,
  },

  // ── 14. Bold Header ──
  {
    id: "bold-header",
    name: "Bold Header",
    description: "Eye-catching large name with colored accent bar dividers",
    category: "creative",
    tags: ["modern", "bold", "color-accent"],
    previewLines: [
      "═══════════════════════════",
      "  DANIEL KIM",
      "  Product Manager",
      "═══════════════════════════",
      "",
      "Experience",
      "  Senior PM, Notion",
      "  PM, Slack",
    ],
    supportingFiles: [],
    source: `\\documentclass[10pt,a4paper]{article}
\\usepackage[margin=0.6in]{geometry}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{titlesec}
\\usepackage{xcolor}
\\usepackage{tikz}

\\definecolor{primary}{HTML}{0F172A}
\\definecolor{accent}{HTML}{F59E0B}
\\definecolor{muted}{HTML}{64748B}

\\titleformat{\\section}{\\normalsize\\bfseries\\color{primary}\\uppercase}{}{0em}{}
\\titlespacing*{\\section}{0pt}{12pt}{2pt}

\\setlength{\\parindent}{0pt}
\\pagestyle{empty}

\\newcommand{\\accentbar}{\\vspace{2pt}\\noindent{\\color{accent}\\rule{\\linewidth}{2.5pt}}\\vspace{6pt}}

\\begin{document}

% ─── Header Block ───
\\begin{center}
\\begin{tikzpicture}
  \\fill[primary] (-9.2, -1.4) rectangle (9.2, 1.4);
  \\node[anchor=center] at (0, 0.35) {\\color{white}\\Huge\\bfseries Daniel Kim};
  \\node[anchor=center] at (0, -0.35) {\\color{accent}\\normalsize\\bfseries Senior Product Manager};
  \\node[anchor=center] at (0, -0.9) {\\color{white}\\footnotesize daniel.kim@email.com \\enspace $\\cdot$ \\enspace (415) 555-8821 \\enspace $\\cdot$ \\enspace San Francisco, CA \\enspace $\\cdot$ \\enspace linkedin.com/in/danielkim};
\\end{tikzpicture}
\\end{center}

\\vspace{6pt}

\\section*{Profile}
\\accentbar
Product leader with 7+ years of experience shipping B2B SaaS products from 0-to-1 and scaling to millions of users. Deep expertise in user research, data-driven prioritization, and cross-functional team leadership. Passionate about building tools that make teams more productive.

\\section*{Experience}
\\accentbar

\\textbf{Senior Product Manager} \\hfill Notion, San Francisco \\\\
{\\small\\color{muted}\\textit{Jan 2022 -- Present}}
\\begin{itemize}[leftmargin=12pt, nosep, topsep=3pt]
  \\item Led Notion Projects launch, largest product launch in company history with 2M+ adoptions in first month
  \\item Drove 35\\% increase in enterprise retention through workflow automation features
  \\item Managed roadmap for 15-person engineering team across 3 product areas
  \\item Ran 40+ user interviews and synthesized insights into product strategy presentations for C-suite
\\end{itemize}

\\vspace{6pt}
\\textbf{Product Manager} \\hfill Slack, San Francisco \\\\
{\\small\\color{muted}\\textit{Mar 2019 -- Dec 2021}}
\\begin{itemize}[leftmargin=12pt, nosep, topsep=3pt]
  \\item Shipped Slack Connect, enabling cross-organization messaging for 750K+ companies
  \\item Improved channel discovery reducing time-to-value for new workspace members by 40\\%
  \\item Designed experimentation framework adopted by 8 product teams for feature rollouts
  \\item Collaborated with design and engineering to reduce onboarding drop-off by 25\\%
\\end{itemize}

\\vspace{6pt}
\\textbf{Associate Product Manager} \\hfill Atlassian, San Francisco \\\\
{\\small\\color{muted}\\textit{Jun 2017 -- Feb 2019}}
\\begin{itemize}[leftmargin=12pt, nosep, topsep=3pt]
  \\item Launched Jira Automation rules feature, adopted by 100K+ teams within first quarter
  \\item Analyzed usage data to identify and prioritize top 5 workflow pain points
\\end{itemize}

\\section*{Education}
\\accentbar

\\textbf{M.B.A.} \\hfill Stanford Graduate School of Business, 2017 \\\\
\\textbf{B.S. Computer Science} \\hfill UC Berkeley, 2015

\\section*{Skills}
\\accentbar

{\\small
\\textbf{Product:} Roadmap Strategy, User Research, A/B Testing, OKRs, Agile/Scrum, SQL \\\\
\\textbf{Tools:} Jira, Figma, Amplitude, Mixpanel, Looker, Notion, Linear \\\\
\\textbf{Technical:} Python, SQL, APIs, System Design, Data Modeling
}

\\end{document}`,
  },
];

export function getLatexTemplate(id: string): LatexTemplate | undefined {
  return LATEX_TEMPLATES.find((t) => t.id === id);
}
