import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const connectionString = process.env["DATABASE_URL"] ?? "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const companies = [
  {
    name: "TechVista Solutions",
    slug: "techvista-solutions",
    description: "TechVista Solutions is a leading software development company specializing in enterprise solutions, cloud computing, and digital transformation. We help businesses modernize their tech stack and build scalable applications.",
    mission: "To empower businesses with cutting-edge technology solutions that drive growth and innovation.",
    industry: "Technology",
    size: "LARGE" as const,
    city: "Bangalore",
    state: "Karnataka",
    address: "Koramangala, 5th Block",
    website: "https://techvista.example.com",
    technologies: ["React", "Node.js", "AWS", "Python", "Kubernetes", "PostgreSQL"],
    hiringStatus: true,
    foundedYear: 2015,
    avgRating: 4.2,
    reviewCount: 3,
    socialLinks: { linkedin: "https://linkedin.com/company/techvista", twitter: "https://twitter.com/techvista" },
  },
  {
    name: "DataPulse Analytics",
    slug: "datapulse-analytics",
    description: "DataPulse Analytics provides AI-powered data analytics and business intelligence platforms. Our tools help companies make data-driven decisions with real-time insights and predictive modeling.",
    mission: "Making data accessible and actionable for every organization.",
    industry: "Data Analytics",
    size: "MEDIUM" as const,
    city: "Pune",
    state: "Maharashtra",
    address: "Hinjewadi IT Park, Phase 2",
    website: "https://datapulse.example.com",
    technologies: ["Python", "TensorFlow", "Apache Spark", "React", "Docker", "MongoDB"],
    hiringStatus: true,
    foundedYear: 2018,
    avgRating: 4.5,
    reviewCount: 4,
    socialLinks: { linkedin: "https://linkedin.com/company/datapulse" },
  },
  {
    name: "CloudNine Infrastructure",
    slug: "cloudnine-infrastructure",
    description: "CloudNine Infrastructure offers managed cloud services, DevOps consulting, and infrastructure automation. We help startups and enterprises migrate to the cloud seamlessly.",
    mission: "Simplifying cloud infrastructure for the modern enterprise.",
    industry: "Cloud Computing",
    size: "MEDIUM" as const,
    city: "Mumbai",
    state: "Maharashtra",
    address: "BKC, Bandra East",
    website: "https://cloudnine.example.com",
    technologies: ["AWS", "Azure", "Terraform", "Go", "Docker", "Kubernetes"],
    hiringStatus: false,
    foundedYear: 2016,
    avgRating: 3.8,
    reviewCount: 2,
    socialLinks: {},
  },
  {
    name: "FinEdge Technologies",
    slug: "finedge-technologies",
    description: "FinEdge Technologies builds next-generation fintech solutions including payment gateways, digital banking platforms, and blockchain-based financial tools for banks and NBFCs.",
    mission: "Revolutionizing financial services through technology.",
    industry: "Fintech",
    size: "LARGE" as const,
    city: "Mumbai",
    state: "Maharashtra",
    address: "Lower Parel, Mumbai",
    website: "https://finedge.example.com",
    technologies: ["Java", "Spring Boot", "React", "Kafka", "Redis", "PostgreSQL"],
    hiringStatus: true,
    foundedYear: 2014,
    avgRating: 4.0,
    reviewCount: 3,
    socialLinks: { linkedin: "https://linkedin.com/company/finedge" },
  },
  {
    name: "GreenByte Innovations",
    slug: "greenbyte-innovations",
    description: "GreenByte Innovations develops sustainable technology solutions including IoT-based energy management systems, smart city platforms, and environmental monitoring tools.",
    mission: "Technology for a sustainable future.",
    industry: "CleanTech",
    size: "STARTUP" as const,
    city: "Bangalore",
    state: "Karnataka",
    address: "HSR Layout, Sector 1",
    website: "https://greenbyte.example.com",
    technologies: ["IoT", "Python", "React Native", "AWS IoT", "C++", "MQTT"],
    hiringStatus: true,
    foundedYear: 2021,
    avgRating: 4.7,
    reviewCount: 2,
    socialLinks: { linkedin: "https://linkedin.com/company/greenbyte", github: "https://github.com/greenbyte" },
  },
  {
    name: "HealthSync Systems",
    slug: "healthsync-systems",
    description: "HealthSync Systems builds healthcare technology platforms including EHR systems, telemedicine solutions, and patient engagement tools used by hospitals across India.",
    mission: "Improving healthcare through technology innovation.",
    industry: "Healthcare IT",
    size: "MEDIUM" as const,
    city: "Hyderabad",
    state: "Telangana",
    address: "HITEC City, Madhapur",
    website: "https://healthsync.example.com",
    technologies: ["Angular", ".NET", "Azure", "SQL Server", "Flutter", "Python"],
    hiringStatus: true,
    foundedYear: 2017,
    avgRating: 3.9,
    reviewCount: 3,
    socialLinks: { linkedin: "https://linkedin.com/company/healthsync" },
  },
  {
    name: "EduSpark Learning",
    slug: "eduspark-learning",
    description: "EduSpark Learning is an ed-tech company building adaptive learning platforms, virtual classrooms, and skill assessment tools for students and professionals.",
    mission: "Making quality education accessible to everyone.",
    industry: "EdTech",
    size: "SMALL" as const,
    city: "Delhi",
    state: "Delhi NCR",
    address: "Connaught Place, New Delhi",
    website: "https://eduspark.example.com",
    technologies: ["Next.js", "Node.js", "MongoDB", "WebRTC", "Redis", "AWS"],
    hiringStatus: false,
    foundedYear: 2019,
    avgRating: 4.3,
    reviewCount: 3,
    socialLinks: { linkedin: "https://linkedin.com/company/eduspark" },
  },
  {
    name: "LogiTrack Solutions",
    slug: "logitrack-solutions",
    description: "LogiTrack Solutions provides AI-powered logistics and supply chain management software. Our platform helps companies optimize routes, manage warehouses, and track shipments in real-time.",
    mission: "Transforming logistics with intelligent technology.",
    industry: "Logistics Tech",
    size: "MEDIUM" as const,
    city: "Chennai",
    state: "Tamil Nadu",
    address: "OMR, Sholinganallur",
    website: "https://logitrack.example.com",
    technologies: ["Java", "React", "PostgreSQL", "GraphQL", "Docker", "ML"],
    hiringStatus: true,
    foundedYear: 2016,
    avgRating: 3.6,
    reviewCount: 2,
    socialLinks: {},
  },
  {
    name: "CyberShield Security",
    slug: "cybershield-security",
    description: "CyberShield Security provides enterprise cybersecurity solutions including threat detection, vulnerability assessment, and compliance automation for organizations.",
    mission: "Protecting the digital world, one organization at a time.",
    industry: "Cybersecurity",
    size: "SMALL" as const,
    city: "Pune",
    state: "Maharashtra",
    address: "Kharadi IT Park",
    website: "https://cybershield.example.com",
    technologies: ["Python", "Go", "Rust", "Elasticsearch", "Kafka", "React"],
    hiringStatus: true,
    foundedYear: 2020,
    avgRating: 4.6,
    reviewCount: 2,
    socialLinks: { linkedin: "https://linkedin.com/company/cybershield" },
  },
  {
    name: "PixelCraft Studios",
    slug: "pixelcraft-studios",
    description: "PixelCraft Studios is a design and product development studio creating beautiful digital experiences. We specialize in UI/UX design, mobile app development, and brand identity.",
    mission: "Crafting digital experiences that delight users.",
    industry: "Design & Development",
    size: "STARTUP" as const,
    city: "Bangalore",
    state: "Karnataka",
    address: "Indiranagar, 100 Feet Road",
    website: "https://pixelcraft.example.com",
    technologies: ["Figma", "React", "React Native", "TypeScript", "Tailwind CSS", "Framer Motion"],
    hiringStatus: true,
    foundedYear: 2022,
    avgRating: 4.8,
    reviewCount: 2,
    socialLinks: { dribbble: "https://dribbble.com/pixelcraft", linkedin: "https://linkedin.com/company/pixelcraft" },
  },
  {
    name: "AgroTech India",
    slug: "agrotech-india",
    description: "AgroTech India develops precision agriculture technology including drone-based crop monitoring, soil analysis platforms, and AI-driven farming advisory systems.",
    mission: "Empowering Indian farmers with technology.",
    industry: "AgriTech",
    size: "SMALL" as const,
    city: "Ahmedabad",
    state: "Gujarat",
    address: "SG Highway, Satellite",
    website: "https://agrotech.example.com",
    technologies: ["Python", "React", "TensorFlow", "IoT", "Flutter", "AWS"],
    hiringStatus: false,
    foundedYear: 2019,
    avgRating: 4.1,
    reviewCount: 2,
    socialLinks: {},
  },
  {
    name: "PayWave Digital",
    slug: "paywave-digital",
    description: "PayWave Digital builds UPI-based payment solutions, digital wallet platforms, and merchant management systems. We process millions of transactions daily for businesses across India.",
    mission: "Making digital payments seamless for every Indian.",
    industry: "Fintech",
    size: "LARGE" as const,
    city: "Hyderabad",
    state: "Telangana",
    address: "Gachibowli, Financial District",
    website: "https://paywave.example.com",
    technologies: ["Java", "Spring Boot", "Kotlin", "React", "Redis", "Cassandra"],
    hiringStatus: true,
    foundedYear: 2016,
    avgRating: 3.7,
    reviewCount: 3,
    socialLinks: { linkedin: "https://linkedin.com/company/paywave" },
  },
  {
    name: "MediaPlex Entertainment",
    slug: "mediaplex-entertainment",
    description: "MediaPlex Entertainment is a digital media company building OTT streaming platforms, content management systems, and ad-tech solutions for media companies.",
    mission: "Powering the future of digital entertainment.",
    industry: "Media & Entertainment",
    size: "MEDIUM" as const,
    city: "Mumbai",
    state: "Maharashtra",
    address: "Andheri West, Film City Road",
    website: "https://mediaplex.example.com",
    technologies: ["React", "Node.js", "FFmpeg", "AWS", "CDN", "Go"],
    hiringStatus: false,
    foundedYear: 2017,
    avgRating: 3.5,
    reviewCount: 2,
    socialLinks: {},
  },
  {
    name: "UrbanNest PropTech",
    slug: "urbannest-proptech",
    description: "UrbanNest PropTech provides technology solutions for real estate including property listing platforms, virtual tour tools, and CRM systems for builders and agents.",
    mission: "Modernizing the real estate experience through technology.",
    industry: "PropTech",
    size: "STARTUP" as const,
    city: "Delhi",
    state: "Delhi NCR",
    address: "Gurugram, Sector 44",
    website: "https://urbannest.example.com",
    technologies: ["Next.js", "Three.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    hiringStatus: true,
    foundedYear: 2021,
    avgRating: 4.4,
    reviewCount: 2,
    socialLinks: { linkedin: "https://linkedin.com/company/urbannest" },
  },
  {
    name: "Quantum Computing Labs",
    slug: "quantum-computing-labs",
    description: "Quantum Computing Labs is a deep-tech research company working on quantum computing applications, quantum cryptography, and quantum machine learning algorithms.",
    mission: "Pioneering the quantum computing revolution in India.",
    industry: "Deep Tech",
    size: "STARTUP" as const,
    city: "Chennai",
    state: "Tamil Nadu",
    address: "IIT Madras Research Park",
    website: "https://quantumlabs.example.com",
    technologies: ["Qiskit", "Python", "C++", "CUDA", "Julia", "TensorFlow Quantum"],
    hiringStatus: true,
    foundedYear: 2023,
    avgRating: 4.9,
    reviewCount: 1,
    socialLinks: { github: "https://github.com/quantumlabs" },
  },
];

const contacts = [
  { designation: "CEO", names: ["Rajesh Kumar", "Priya Sharma", "Amit Patel", "Neha Gupta", "Vikram Singh", "Ananya Rao", "Suresh Menon", "Deepak Joshi", "Kavita Nair", "Rohit Kapoor", "Meera Iyer", "Arjun Reddy", "Sanjay Mishra", "Pooja Desai", "Arun Bhat"] },
  { designation: "CTO", names: ["Siddharth Iyer", "Ritu Verma", "Karthik Nair", "Sneha Kulkarni", "Manish Agarwal", "Lakshmi Raman", "Hari Prasad", "Divya Menon", "Rahul Sharma", "Nandini Rao", "Gaurav Singh", "Aditi Patel", "Venkat Subramanian", "Maya Krishnan", "Sachin Tendulkar"] },
  { designation: "HR Manager", names: ["Meena Deshmukh", "Aditya Saxena", "Pooja Rajan", "Nikhil Choudhary", "Swati Patil", "Ramya Krishna", "Ajay Thakur", "Priyanka Singh", "Varun Malhotra", "Sunita Devi", "Kunal Jain", "Anita Sharma", "Manoj Kumar", "Rekha Pillai", "Saurabh Gupta"] },
];

const reviewTemplates = [
  { title: "Great work culture", content: "The work environment is fantastic. The team is collaborative and management is supportive. Great learning opportunities for freshers.", rating: 5, pros: "Good work-life balance, supportive team, modern tech stack", cons: "Salary could be higher for the market" },
  { title: "Good place to start career", content: "Joined as a fresher and learned a lot in my first year. The mentorship program is excellent and seniors are helpful.", rating: 4, pros: "Learning opportunities, mentorship, interesting projects", cons: "Limited WFH options" },
  { title: "Average experience", content: "The company is okay for gaining experience but there are better options. Management needs improvement in communication.", rating: 3, pros: "Decent salary, stable company", cons: "Slow growth, bureaucratic processes" },
  { title: "Innovative and fast-paced", content: "Working on cutting-edge technology with a brilliant team. The pace is fast but rewarding. Good exposure to latest tech trends.", rating: 5, pros: "Latest technology, smart colleagues, good perks", cons: "Can be stressful during deadlines" },
  { title: "Decent workplace", content: "The company provides good infrastructure and benefits. Interview process was smooth and transparent.", rating: 4, pros: "Good infrastructure, transparent culture", cons: "Limited team outings, average hikes" },
  { title: "Good for mid-level engineers", content: "Good projects and exposure. Work-life balance is maintained. The tech team is strong.", rating: 4, pros: "Strong engineering culture, work-life balance", cons: "Politics in upper management" },
  { title: "Excellent leadership", content: "The leadership team genuinely cares about employee growth. Regular feedback sessions and clear career progression paths.", rating: 5, pros: "Transparent leadership, career growth, equity options", cons: "Office location could be better" },
  { title: "Needs improvement", content: "The product is interesting but internal processes are slow. Engineering team is good but HR needs to improve.", rating: 3, pros: "Interesting product, flexible timing", cons: "Slow decision making, limited benefits" },
];

async function seed() {
  console.log("Starting seed...");

  // Create admin user
  const admin = await prisma.user.upsert({
    where: { email: "admin@internhack.com" },
    update: {},
    create: {
      name: "Admin User",
      email: "admin@internhack.com",
      password: "$2a$10$EqHuL3qAJkLk6qvXkZzGxeJ5N5k7f7/Z2k3a5w1Q9Hj7KjzXMRWHi", // "admin123"
      role: "ADMIN",
    },
  });

  // Create a student for reviews
  const student = await prisma.user.upsert({
    where: { email: "student@internhack.com" },
    update: {},
    create: {
      name: "Test Student",
      email: "student@internhack.com",
      password: "$2a$10$EqHuL3qAJkLk6qvXkZzGxeJ5N5k7f7/Z2k3a5w1Q9Hj7KjzXMRWHi", // "admin123"
      role: "STUDENT",
    },
  });

  console.log(`Admin user: ${admin.email}`);
  console.log(`Student user: ${student.email}`);

  // Seed companies
  for (let i = 0; i < companies.length; i++) {
    const companyData = companies[i]!;

    const created = await prisma.company.upsert({
      where: { slug: companyData.slug },
      update: {},
      create: {
        name: companyData.name,
        slug: companyData.slug,
        description: companyData.description,
        mission: companyData.mission,
        industry: companyData.industry,
        size: companyData.size,
        city: companyData.city,
        state: companyData.state,
        address: companyData.address,
        website: companyData.website,
        technologies: companyData.technologies,
        hiringStatus: companyData.hiringStatus,
        foundedYear: companyData.foundedYear,
        avgRating: companyData.avgRating,
        reviewCount: companyData.reviewCount,
        socialLinks: companyData.socialLinks,
        isApproved: true,
        createdById: admin.id,
      },
    });

    // Add contacts
    const ceoName = contacts[0]!.names[i] ?? "Unknown CEO";
    const ctoName = contacts[1]!.names[i] ?? "Unknown CTO";
    const hrName = contacts[2]!.names[i] ?? "Unknown HR";

    await prisma.companyContact.createMany({
      data: [
        {
          companyId: created.id,
          name: ceoName,
          designation: "CEO",
          email: `ceo@${companyData.slug.replace(/-/g, "")}.com`,
          linkedinUrl: `https://linkedin.com/in/${ceoName.toLowerCase().replace(/\s/g, "-")}`,
          addedById: admin.id,
        },
        {
          companyId: created.id,
          name: ctoName,
          designation: "CTO",
          email: `cto@${companyData.slug.replace(/-/g, "")}.com`,
          linkedinUrl: `https://linkedin.com/in/${ctoName.toLowerCase().replace(/\s/g, "-")}`,
          addedById: admin.id,
        },
        {
          companyId: created.id,
          name: hrName,
          designation: "HR Manager",
          email: `hr@${companyData.slug.replace(/-/g, "")}.com`,
          phone: `+91 98${String(Math.floor(10000000 + Math.random() * 90000000))}`,
          addedById: admin.id,
        },
      ],
      skipDuplicates: true,
    });

    // Add reviews
    const numReviews = companyData.reviewCount;
    for (let r = 0; r < numReviews; r++) {
      const template = reviewTemplates[((i * 3) + r) % reviewTemplates.length]!;
      await prisma.companyReview.create({
        data: {
          companyId: created.id,
          userId: student.id,
          rating: template.rating,
          title: template.title,
          content: template.content,
          pros: template.pros,
          cons: template.cons,
          status: "APPROVED",
        },
      }).catch(() => {
        // Skip if duplicate
      });
    }

    console.log(`Seeded: ${companyData.name} (${companyData.city})`);
  }

  console.log("\nSeed completed!");
  console.log(`Total companies: ${companies.length}`);
  console.log("Cities covered: Bangalore, Pune, Mumbai, Delhi, Hyderabad, Chennai, Ahmedabad");
  console.log("\nAdmin login: admin@internhack.com / admin123");
  console.log("Student login: student@internhack.com / admin123");
}

seed()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
