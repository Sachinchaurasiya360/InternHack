import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const connectionString = process.env["DATABASE_URL"] ?? "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const exams = [
  // ── National Engineering ──
  { name: "JEE Main", slug: "jee-main", fullName: "Joint Entrance Examination Main", type: "NATIONAL" as const, conductingBody: "NTA", applicableStreams: ["Engineering", "Architecture"], frequency: "Twice a year", website: "https://jeemain.nta.nic.in", description: "National level entrance exam for admission to NITs, IIITs, and other centrally funded technical institutions." },
  { name: "JEE Advanced", slug: "jee-advanced", fullName: "Joint Entrance Examination Advanced", type: "NATIONAL" as const, conductingBody: "IITs (rotating)", applicableStreams: ["Engineering"], frequency: "Once a year", website: "https://jeeadv.ac.in", description: "Entrance exam for admission to IITs. Only JEE Main top 2.5 lakh qualifiers are eligible." },
  { name: "BITSAT", slug: "bitsat", fullName: "Birla Institute of Technology and Science Admission Test", type: "PRIVATE" as const, conductingBody: "BITS Pilani", applicableStreams: ["Engineering", "Science", "Pharmacy"], frequency: "Once a year", website: "https://www.bitsadmission.com", description: "Online entrance exam for admission to BITS Pilani, Goa, and Hyderabad campuses." },
  { name: "VITEEE", slug: "viteee", fullName: "VIT Engineering Entrance Examination", type: "PRIVATE" as const, conductingBody: "VIT University", applicableStreams: ["Engineering"], frequency: "Once a year", website: "https://viteee.vit.ac.in", description: "Entrance exam for B.Tech admission at VIT Vellore, Chennai, AP, and Bhopal." },
  { name: "SRMJEEE", slug: "srmjeee", fullName: "SRM Joint Engineering Entrance Examination", type: "PRIVATE" as const, conductingBody: "SRM University", applicableStreams: ["Engineering"], frequency: "Once a year", website: "https://www.srmist.edu.in", description: "Entrance exam for B.Tech admission at SRM Institute of Science and Technology." },
  { name: "COMEDK UGET", slug: "comedk-uget", fullName: "Consortium of Medical Engineering and Dental Colleges of Karnataka", type: "STATE" as const, conductingBody: "COMEDK", applicableStreams: ["Engineering"], frequency: "Once a year", website: "https://www.comedk.org", description: "Entrance exam for engineering colleges in Karnataka." },

  // ── State Engineering ──
  { name: "MHT-CET", slug: "mht-cet", fullName: "Maharashtra Common Entrance Test", type: "STATE" as const, conductingBody: "Maharashtra State CET Cell", applicableStreams: ["Engineering", "Pharmacy", "Agriculture"], frequency: "Once a year", website: "https://cetcell.mahacet.org", description: "State-level entrance exam for engineering and pharmacy admissions in Maharashtra." },
  { name: "WBJEE", slug: "wbjee", fullName: "West Bengal Joint Entrance Examination", type: "STATE" as const, conductingBody: "WBJEE Board", applicableStreams: ["Engineering", "Architecture", "Pharmacy"], frequency: "Once a year", website: "https://wbjeeb.nic.in", description: "State-level exam for engineering admissions in West Bengal." },
  { name: "KCET", slug: "kcet", fullName: "Karnataka Common Entrance Test", type: "STATE" as const, conductingBody: "KEA", applicableStreams: ["Engineering", "Medical", "Agriculture"], frequency: "Once a year", website: "https://cetonline.karnataka.gov.in", description: "State-level exam for professional course admissions in Karnataka." },
  { name: "TS EAMCET", slug: "ts-eamcet", fullName: "Telangana State Engineering Agriculture Medical Common Entrance Test", type: "STATE" as const, conductingBody: "JNTUH (for TS Govt)", applicableStreams: ["Engineering", "Agriculture", "Medical"], frequency: "Once a year", website: "https://eamcet.tsche.ac.in", description: "State-level entrance exam for Telangana state admissions." },
  { name: "AP EAPCET", slug: "ap-eapcet", fullName: "Andhra Pradesh Engineering Agriculture Pharmacy Common Entrance Test", type: "STATE" as const, conductingBody: "JNTUK (for AP Govt)", applicableStreams: ["Engineering", "Agriculture", "Pharmacy"], frequency: "Once a year", website: "https://cets.apsche.ap.gov.in", description: "State-level entrance exam for Andhra Pradesh admissions." },
  { name: "KEAM", slug: "keam", fullName: "Kerala Engineering Architecture Medical", type: "STATE" as const, conductingBody: "CEE Kerala", applicableStreams: ["Engineering", "Architecture", "Medical"], frequency: "Once a year", website: "https://cee.kerala.gov.in", description: "State-level entrance exam for Kerala professional course admissions." },
  { name: "GUJCET", slug: "gujcet", fullName: "Gujarat Common Entrance Test", type: "STATE" as const, conductingBody: "GSEB", applicableStreams: ["Engineering", "Pharmacy"], frequency: "Once a year", website: "https://gujcet.gseb.org", description: "State-level entrance exam for Gujarat engineering and pharmacy admissions." },
  { name: "UPSEE/AKTU", slug: "upsee", fullName: "Uttar Pradesh State Entrance Examination", type: "STATE" as const, conductingBody: "AKTU", applicableStreams: ["Engineering", "Management", "Pharmacy"], frequency: "Once a year", website: "https://aktu.ac.in", description: "State-level entrance exam for UP engineering and management admissions." },

  // ── Medical ──
  { name: "NEET UG", slug: "neet-ug", fullName: "National Eligibility cum Entrance Test (Undergraduate)", type: "NATIONAL" as const, conductingBody: "NTA", applicableStreams: ["Medical", "Dental", "AYUSH"], frequency: "Once a year", website: "https://neet.nta.nic.in", description: "National entrance exam for MBBS, BDS, BAMS, BHMS, and other medical courses." },
  { name: "NEET PG", slug: "neet-pg", fullName: "National Eligibility cum Entrance Test (Postgraduate)", type: "NATIONAL" as const, conductingBody: "NBEMS", applicableStreams: ["Medical"], frequency: "Once a year", website: "https://natboard.edu.in", description: "National entrance exam for MD/MS/PG Diploma courses in medical colleges." },

  // ── Management ──
  { name: "CAT", slug: "cat", fullName: "Common Admission Test", type: "NATIONAL" as const, conductingBody: "IIMs (rotating)", applicableStreams: ["Management"], frequency: "Once a year", website: "https://iimcat.ac.in", description: "National entrance exam for MBA/PGDM admissions at IIMs and top B-schools." },
  { name: "XAT", slug: "xat", fullName: "Xavier Aptitude Test", type: "PRIVATE" as const, conductingBody: "XLRI Jamshedpur", applicableStreams: ["Management"], frequency: "Once a year", website: "https://xatonline.in", description: "Entrance exam for MBA admission at XLRI and 160+ XAT associated institutes." },
  { name: "SNAP", slug: "snap", fullName: "Symbiosis National Aptitude Test", type: "PRIVATE" as const, conductingBody: "Symbiosis International", applicableStreams: ["Management"], frequency: "Once a year", website: "https://www.snaptest.org", description: "Entrance exam for MBA at Symbiosis institutes including SIBM Pune." },
  { name: "NMAT", slug: "nmat", fullName: "NMIMS Management Aptitude Test", type: "PRIVATE" as const, conductingBody: "NMIMS/GMAC", applicableStreams: ["Management"], frequency: "Once a year", website: "https://www.nmat.org", description: "Entrance exam for MBA at NMIMS and other partner institutes." },
  { name: "MAT", slug: "mat", fullName: "Management Aptitude Test", type: "NATIONAL" as const, conductingBody: "AIMA", applicableStreams: ["Management"], frequency: "Four times a year", website: "https://mat.aima.in", description: "National level entrance exam accepted by 600+ B-schools across India." },

  // ── GATE (PG Engineering) ──
  { name: "GATE", slug: "gate", fullName: "Graduate Aptitude Test in Engineering", type: "NATIONAL" as const, conductingBody: "IITs/IISc (rotating)", applicableStreams: ["Engineering", "Science"], frequency: "Once a year", website: "https://gate2025.iitr.ac.in", description: "National exam for M.Tech/ME admissions and PSU recruitment. Tests engineering fundamentals." },

  // ── Common University ──
  { name: "CUET UG", slug: "cuet-ug", fullName: "Common University Entrance Test (Undergraduate)", type: "NATIONAL" as const, conductingBody: "NTA", applicableStreams: ["Engineering", "Science", "Arts", "Commerce", "Management"], frequency: "Once a year", website: "https://cuet.nta.nic.in", description: "National entrance exam for UG admissions at central and participating universities." },
  { name: "CUET PG", slug: "cuet-pg", fullName: "Common University Entrance Test (Postgraduate)", type: "NATIONAL" as const, conductingBody: "NTA", applicableStreams: ["Science", "Arts", "Commerce", "Management"], frequency: "Once a year", website: "https://cuet.nta.nic.in", description: "National entrance exam for PG admissions at central and participating universities." },

  // ── Law ──
  { name: "CLAT", slug: "clat", fullName: "Common Law Admission Test", type: "NATIONAL" as const, conductingBody: "Consortium of NLUs", applicableStreams: ["Law"], frequency: "Once a year", website: "https://consortiumofnlus.ac.in", description: "National entrance exam for 5-year integrated law and LLM programs at NLUs." },
  { name: "AILET", slug: "ailet", fullName: "All India Law Entrance Test", type: "UNIVERSITY" as const, conductingBody: "NLU Delhi", applicableStreams: ["Law"], frequency: "Once a year", website: "https://nludelhi.ac.in", description: "Entrance exam for BA LLB, LLM, and PhD programs at NLU Delhi." },
  { name: "LSAT India", slug: "lsat-india", fullName: "Law School Admission Test India", type: "PRIVATE" as const, conductingBody: "LSAC", applicableStreams: ["Law"], frequency: "Once a year", website: "https://www.lsac.org", description: "Entrance exam accepted by 100+ law schools in India for LLB and LLM programs." },

  // ── Design ──
  { name: "UCEED", slug: "uceed", fullName: "Undergraduate Common Entrance Exam for Design", type: "NATIONAL" as const, conductingBody: "IIT Bombay", applicableStreams: ["Design"], frequency: "Once a year", website: "https://www.uceed.iitb.ac.in", description: "Entrance exam for B.Des admissions at IITs, IIITDM, and other institutes." },
  { name: "NID DAT", slug: "nid-dat", fullName: "National Institute of Design Admission Test", type: "NATIONAL" as const, conductingBody: "NID Ahmedabad", applicableStreams: ["Design"], frequency: "Once a year", website: "https://admissions.nid.edu", description: "Entrance exam for B.Des and M.Des at NID campuses across India." },
  { name: "NIFT", slug: "nift", fullName: "National Institute of Fashion Technology Entrance Exam", type: "NATIONAL" as const, conductingBody: "NIFT", applicableStreams: ["Design", "Fashion"], frequency: "Once a year", website: "https://nift.ac.in", description: "Entrance exam for B.Des/B.FTech and M.Des/M.FTech at NIFT campuses." },

  // ── Architecture ──
  { name: "NATA", slug: "nata", fullName: "National Aptitude Test in Architecture", type: "NATIONAL" as const, conductingBody: "COA", applicableStreams: ["Architecture"], frequency: "Twice a year", website: "https://nata.in", description: "National entrance exam for B.Arch admissions across India." },
];

async function seedExams() {
  console.log("Seeding entrance exams...\n");

  let created = 0;
  let skipped = 0;

  for (const exam of exams) {
    const existing = await prisma.entranceExam.findUnique({ where: { slug: exam.slug } });
    if (existing) {
      console.log(`  SKIP: ${exam.name}`);
      skipped++;
      continue;
    }

    await prisma.entranceExam.create({ data: exam });
    console.log(`  ADDED: ${exam.name}`);
    created++;
  }

  console.log(`\nDone! Created: ${created}, Skipped: ${skipped}, Total: ${exams.length}`);
}

seedExams()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
