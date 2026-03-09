import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import * as cheerio from "cheerio";

const connectionString = process.env["DATABASE_URL"] ?? "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// ============================================================
// IndiaBix Scraper — Aptitude, Logical Reasoning, Verbal Ability
// ============================================================

interface ScrapedQuestion {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  optionE?: string;
  correctAnswer: string;
  explanation?: string;
  sourceUrl: string;
}

interface TopicDef {
  name: string;
  slug: string;
  description?: string;
}

// ── Category definitions ──

const CATEGORIES: { name: string; slug: string; description: string; urlPrefix: string; topics: TopicDef[] }[] = [
  {
    name: "Aptitude",
    slug: "aptitude",
    description: "Quantitative aptitude questions covering arithmetic, algebra, geometry, and data interpretation",
    urlPrefix: "aptitude",
    topics: [
      { name: "Profit and Loss", slug: "profit-and-loss", description: "Problems on cost price, selling price, profit and loss percentage" },
      { name: "Percentage", slug: "percentage", description: "Problems on percentage calculations and conversions" },
      { name: "Ratio and Proportion", slug: "ratio-and-proportion", description: "Problems on ratios, proportions and variations" },
      { name: "Time and Work", slug: "time-and-work", description: "Problems on work done, efficiency and time calculations" },
      { name: "Time and Distance", slug: "time-and-distance", description: "Problems on speed, distance and time" },
      { name: "Simple Interest", slug: "simple-interest", description: "Problems on simple interest calculations" },
      { name: "Compound Interest", slug: "compound-interest", description: "Problems on compound interest and growth" },
      { name: "Problems on Trains", slug: "problems-on-trains", description: "Problems involving train speeds, lengths and crossing times" },
      { name: "Ages", slug: "ages", description: "Problems on ages and age-related calculations" },
      { name: "Average", slug: "average", description: "Problems on average, mean and weighted average" },
      { name: "Area", slug: "area", description: "Problems on area of various geometric shapes" },
      { name: "Volume and Surface Area", slug: "volume-and-surface-area", description: "Problems on volume and surface area of 3D shapes" },
      { name: "Permutation and Combination", slug: "permutation-and-combination", description: "Problems on counting principles, arrangements and selections" },
      { name: "Numbers", slug: "numbers", description: "Problems on number system and properties" },
      { name: "Problems on Numbers", slug: "problems-on-numbers", description: "Word problems involving number relationships" },
      { name: "Problems on HCF and LCM", slug: "problems-on-hcf-and-lcm", description: "Problems on highest common factor and least common multiple" },
      { name: "Surds and Indices", slug: "surds-and-indices", description: "Problems on powers, roots and indices" },
      { name: "Partnership", slug: "partnership", description: "Problems on business partnerships and profit sharing" },
      { name: "Chain Rule", slug: "chain-rule", description: "Problems on direct and inverse proportions" },
      { name: "Pipes and Cistern", slug: "pipes-and-cistern", description: "Problems on pipes filling and emptying tanks" },
      { name: "Boats and Streams", slug: "boats-and-streams", description: "Problems on upstream and downstream speeds" },
      { name: "Alligation or Mixture", slug: "alligation-or-mixture", description: "Problems on mixing quantities at different rates" },
      { name: "Logarithm", slug: "logarithm", description: "Problems on logarithmic calculations" },
      { name: "Probability", slug: "probability", description: "Problems on probability of events" },
      { name: "Height and Distance", slug: "height-and-distance", description: "Problems on heights, distances and trigonometry" },
      { name: "Simplification", slug: "simplification", description: "Problems on simplifying mathematical expressions" },
      { name: "Square Root and Cube Root", slug: "square-root-and-cube-root", description: "Problems on square roots and cube roots" },
      { name: "Decimal Fraction", slug: "decimal-fraction", description: "Problems on decimal and fraction operations" },
      { name: "Calendar", slug: "calendar", description: "Problems on days, dates and calendar calculations" },
      { name: "Clock", slug: "clock", description: "Problems on clock angles and time" },
      { name: "Stocks and Shares", slug: "stocks-and-shares", description: "Problems on stocks, shares and dividends" },
      { name: "Races and Games", slug: "races-and-games", description: "Problems on races, games and competitive scenarios" },
      { name: "Odd Man Out", slug: "odd-man-out", description: "Find the element that doesn't belong in the series" },
      { name: "True Discount", slug: "true-discount", description: "Problems on true discount calculations" },
      { name: "Bankers Discount", slug: "bankers-discount", description: "Problems on banker's discount and bill discounting" },
      { name: "Set Theory", slug: "set-theory", description: "Problems on sets, Venn diagrams and set operations" },
      { name: "Geometry", slug: "geometry", description: "Problems on triangles, circles, quadrilaterals and coordinate geometry" },
      { name: "Trigonometry", slug: "trigonometry", description: "Problems on trigonometric ratios, identities and equations" },
      { name: "Linear Equations", slug: "linear-equations", description: "Problems on solving linear equations and simultaneous equations" },
      { name: "Quadratic Equations", slug: "quadratic-equations", description: "Problems on quadratic equations and their roots" },
      { name: "Progressions", slug: "progressions", description: "Problems on arithmetic, geometric and harmonic progressions" },
      { name: "Inequalities", slug: "inequalities", description: "Problems on linear and quadratic inequalities" },
      { name: "Data Sufficiency", slug: "data-sufficiency", description: "Determine if given data is sufficient to answer a question" },
    ],
  },
  {
    name: "Logical Reasoning",
    slug: "logical-reasoning",
    description: "Logical reasoning questions covering series, analogies, deductions and critical thinking",
    urlPrefix: "logical-reasoning",
    topics: [
      { name: "Number Series", slug: "number-series", description: "Find the pattern and next number in a series" },
      { name: "Letter and Symbol Series", slug: "letter-and-symbol-series", description: "Find the pattern in letter and symbol sequences" },
      { name: "Essential Part", slug: "essential-part", description: "Identify the essential component of a given concept" },
      { name: "Analogies", slug: "analogies", description: "Identify relationship patterns between pairs" },
      { name: "Artificial Language", slug: "artificial-language", description: "Decode words using given language rules" },
      { name: "Matching Definitions", slug: "matching-definitions", description: "Match words with their correct definitions" },
      { name: "Making Judgments", slug: "making-judgments", description: "Draw conclusions from given scenarios" },
      { name: "Logical Deduction", slug: "logical-deduction", description: "Draw logical conclusions from given statements" },
      { name: "Logical Problems", slug: "logical-problems", description: "Solve problems using logical reasoning" },
      { name: "Course of Action", slug: "course-of-action", description: "Determine the appropriate course of action" },
      { name: "Cause and Effect", slug: "cause-and-effect", description: "Identify cause-effect relationships" },
      { name: "Statement and Argument", slug: "statement-and-argument", description: "Evaluate strength of arguments" },
      { name: "Statement and Assumption", slug: "statement-and-assumption", description: "Identify implicit assumptions" },
      { name: "Statement and Conclusion", slug: "statement-and-conclusion", description: "Draw valid conclusions from statements" },
      { name: "Theme Detection", slug: "theme-detection", description: "Identify the central theme of a passage" },
      { name: "Blood Relations", slug: "blood-relations", description: "Determine family relationships from given information" },
      { name: "Coding and Decoding", slug: "coding-and-decoding", description: "Encode and decode words using given rules" },
      { name: "Direction Sense Test", slug: "direction-sense-test", description: "Find direction and distance based on movements" },
      { name: "Seating Arrangement", slug: "seating-arrangement", description: "Determine seating positions from given clues" },
      { name: "Syllogism", slug: "syllogism", description: "Draw conclusions from two or more given statements" },
      { name: "Puzzles", slug: "puzzles", description: "Solve complex arrangement and scheduling puzzles" },
      { name: "Data Arrangement", slug: "data-arrangement", description: "Arrange data based on given conditions and clues" },
      { name: "Input Output", slug: "input-output", description: "Trace the transformation of input through a series of operations" },
      { name: "Ranking and Order", slug: "ranking-and-order", description: "Determine positions and rankings from given data" },
      { name: "Inequality", slug: "inequality-reasoning", description: "Determine relationships using coded inequalities" },
    ],
  },
  {
    name: "Verbal Ability",
    slug: "verbal-ability",
    description: "Verbal ability questions covering grammar, vocabulary, comprehension and sentence skills",
    urlPrefix: "verbal-ability",
    topics: [
      { name: "Spotting Errors", slug: "spotting-errors", description: "Identify grammatical errors in sentences" },
      { name: "Sentence Correction", slug: "sentence-correction", description: "Correct grammatically incorrect sentences" },
      { name: "Sentence Improvement", slug: "sentence-improvement", description: "Improve sentences with better phrasing" },
      { name: "Completing Statements", slug: "completing-statements", description: "Complete statements with appropriate phrases" },
      { name: "Ordering of Sentences", slug: "ordering-of-sentences", description: "Arrange sentences in correct logical order" },
      { name: "Paragraph Formation", slug: "paragraph-formation", description: "Form coherent paragraphs from jumbled sentences" },
      { name: "Closet Test", slug: "closet-test", description: "Fill in blanks in a passage with appropriate words" },
      { name: "One Word Substitution", slug: "one-word-substitution", description: "Replace phrases with a single word" },
      { name: "Idioms and Phrases", slug: "idioms-and-phrases", description: "Understand meanings of idioms and phrases" },
      { name: "Change of Voice", slug: "change-of-voice", description: "Convert between active and passive voice" },
      { name: "Synonyms", slug: "synonyms", description: "Identify words with similar meanings" },
      { name: "Antonyms", slug: "antonyms", description: "Identify words with opposite meanings" },
      { name: "Fill in the Blanks", slug: "fill-in-the-blanks", description: "Fill blanks with the most appropriate word or phrase" },
      { name: "Reading Comprehension", slug: "reading-comprehension", description: "Read passages and answer questions based on them" },
      { name: "Verbal Analogies", slug: "verbal-analogies", description: "Identify word relationships and complete analogies" },
      { name: "Direct and Indirect Speech", slug: "direct-and-indirect-speech", description: "Convert between direct and indirect speech" },
    ],
  },
  {
    name: "Data Interpretation",
    slug: "data-interpretation",
    description: "Data interpretation questions covering tables, charts, graphs and data analysis",
    urlPrefix: "data-interpretation",
    topics: [
      { name: "Table Charts", slug: "table-charts", description: "Analyze and interpret data presented in tabular form" },
      { name: "Bar Charts", slug: "bar-charts", description: "Interpret data from bar charts and histograms" },
      { name: "Pie Charts", slug: "pie-charts", description: "Analyze data presented in pie chart format" },
      { name: "Line Charts", slug: "line-charts", description: "Interpret trends and patterns from line graphs" },
    ],
  },
];

// ── Company → Topic mapping ──

const COMPANY_TOPIC_MAP: Record<string, string[]> = {
  "TCS": ["percentage", "profit-and-loss", "time-and-work", "time-and-distance", "ratio-and-proportion", "ages", "average", "simplification", "number-series", "spotting-errors"],
  "Infosys": ["percentage", "profit-and-loss", "time-and-work", "permutation-and-combination", "probability", "simplification", "number-series", "logical-deduction", "sentence-correction"],
  "Wipro": ["percentage", "profit-and-loss", "time-and-distance", "simple-interest", "compound-interest", "ages", "number-series", "sentence-improvement"],
  "HCL": ["percentage", "ratio-and-proportion", "time-and-work", "pipes-and-cistern", "average", "simplification", "number-series", "spotting-errors"],
  "Cognizant": ["percentage", "profit-and-loss", "time-and-work", "time-and-distance", "permutation-and-combination", "simplification", "number-series", "sentence-correction"],
  "Accenture": ["percentage", "profit-and-loss", "time-and-distance", "ratio-and-proportion", "ages", "simplification", "analogies", "spotting-errors"],
  "Capgemini": ["percentage", "profit-and-loss", "time-and-work", "average", "number-series", "logical-problems", "sentence-improvement"],
  "Tech Mahindra": ["percentage", "time-and-work", "time-and-distance", "boats-and-streams", "pipes-and-cistern", "number-series", "spotting-errors"],
  "L&T Infotech": ["percentage", "profit-and-loss", "ratio-and-proportion", "time-and-work", "simplification", "number-series", "sentence-correction"],
  "Mindtree": ["percentage", "profit-and-loss", "time-and-distance", "permutation-and-combination", "number-series", "logical-deduction"],
  "IBM": ["percentage", "profit-and-loss", "time-and-work", "probability", "permutation-and-combination", "number-series", "analogies", "sentence-correction"],
  "Amazon": ["percentage", "profit-and-loss", "permutation-and-combination", "probability", "logical-problems", "number-series"],
  "Google": ["permutation-and-combination", "probability", "numbers", "logical-problems", "number-series"],
  "Microsoft": ["permutation-and-combination", "probability", "logical-problems", "number-series", "analogies"],
  "Deloitte": ["percentage", "profit-and-loss", "time-and-work", "ratio-and-proportion", "simplification", "number-series", "sentence-correction"],
  "Flipkart": ["percentage", "profit-and-loss", "probability", "permutation-and-combination", "logical-problems", "number-series"],
  "Zoho": ["percentage", "profit-and-loss", "time-and-work", "numbers", "problems-on-numbers", "number-series", "logical-problems"],
  "Paytm": ["percentage", "profit-and-loss", "probability", "number-series", "logical-problems"],
  "Reliance": ["percentage", "profit-and-loss", "time-and-work", "ratio-and-proportion", "simplification", "number-series", "spotting-errors"],
  "Infosys BPM": ["percentage", "profit-and-loss", "simplification", "average", "number-series", "sentence-correction"],
  "Mu Sigma": ["percentage", "probability", "permutation-and-combination", "logical-problems", "number-series"],
  "Goldman Sachs": ["percentage", "probability", "permutation-and-combination", "numbers", "logical-problems"],
  "JP Morgan": ["percentage", "probability", "permutation-and-combination", "logical-deduction", "number-series"],
  "Barclays": ["percentage", "profit-and-loss", "simple-interest", "compound-interest", "number-series", "sentence-correction"],
  "HSBC": ["percentage", "profit-and-loss", "simple-interest", "compound-interest", "number-series", "logical-deduction"],
  "Meta": ["permutation-and-combination", "probability", "logical-problems", "puzzles", "data-sufficiency"],
  "Uber": ["probability", "permutation-and-combination", "logical-problems", "puzzles", "data-sufficiency", "number-series"],
  "Swiggy": ["percentage", "profit-and-loss", "probability", "number-series", "coding-and-decoding", "blood-relations"],
  "Ola": ["percentage", "time-and-distance", "probability", "number-series", "logical-problems", "seating-arrangement"],
  "Oracle": ["percentage", "profit-and-loss", "permutation-and-combination", "probability", "number-series", "logical-deduction", "syllogism"],
  "SAP": ["percentage", "profit-and-loss", "time-and-work", "number-series", "coding-and-decoding", "sentence-correction"],
  "Adobe": ["permutation-and-combination", "probability", "logical-problems", "number-series", "puzzles"],
  "Cisco": ["percentage", "profit-and-loss", "time-and-work", "number-series", "analogies", "syllogism"],
  "Qualcomm": ["percentage", "probability", "permutation-and-combination", "number-series", "logical-problems"],
  "Samsung": ["percentage", "profit-and-loss", "time-and-distance", "permutation-and-combination", "number-series", "coding-and-decoding"],
  "PhonePe": ["percentage", "probability", "profit-and-loss", "number-series", "logical-problems", "data-sufficiency"],
  "Razorpay": ["percentage", "probability", "permutation-and-combination", "logical-problems", "number-series"],
  "CRED": ["probability", "permutation-and-combination", "logical-problems", "puzzles", "number-series"],
  "Freshworks": ["percentage", "profit-and-loss", "time-and-work", "number-series", "coding-and-decoding", "sentence-correction"],
};

// Build reverse map: topic slug → companies
const TOPIC_COMPANIES: Record<string, string[]> = {};
for (const [company, topics] of Object.entries(COMPANY_TOPIC_MAP)) {
  for (const topicSlug of topics) {
    if (!TOPIC_COMPANIES[topicSlug]) TOPIC_COMPANIES[topicSlug] = [];
    TOPIC_COMPANIES[topicSlug].push(company);
  }
}

// ── Scraping functions ──

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchPage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

function parseQuestions(html: string, sourceUrl: string): ScrapedQuestion[] {
  const $ = cheerio.load(html);
  const questions: ScrapedQuestion[] = [];

  $(".bix-div-container").each((_, container) => {
    const $c = $(container);

    // Question text
    const questionHtml = $c.find(".bix-td-qtxt").html()?.trim();
    if (!questionHtml) return;
    // Clean HTML: remove scripts, keep basic formatting
    const question = questionHtml
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, "$1")
      .trim();

    // Options
    const options: string[] = [];
    $c.find(".bix-td-option-val").each((_, opt) => {
      const text = $(opt).text().trim();
      options.push(text);
    });

    if (options.length < 4) return;

    // Correct answer
    const correctAnswer = $c.find(".jq-hdnakq").attr("value")?.trim() || "";
    if (!correctAnswer) return;

    // Explanation
    const explanation = $c.find(".bix-ans-description").html()?.trim() || undefined;

    questions.push({
      question,
      optionA: options[0],
      optionB: options[1],
      optionC: options[2],
      optionD: options[3],
      optionE: options[4] || undefined,
      correctAnswer,
      explanation: explanation
        ? explanation
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
            .trim()
        : undefined,
      sourceUrl,
    });
  });

  return questions;
}

async function scrapeTopicQuestions(
  urlPrefix: string,
  topicSlug: string,
  maxPages: number = 5
): Promise<ScrapedQuestion[]> {
  const allQuestions: ScrapedQuestion[] = [];
  const baseUrl = `https://www.indiabix.com/${urlPrefix}/${topicSlug}`;

  // Page 1
  console.log(`    Fetching ${baseUrl}/`);
  const page1Html = await fetchPage(`${baseUrl}/`);
  if (!page1Html) {
    console.log(`    ⚠ Failed to fetch page 1`);
    return allQuestions;
  }
  const page1Qs = parseQuestions(page1Html, `${baseUrl}/`);
  allQuestions.push(...page1Qs);
  console.log(`    Page 1: ${page1Qs.length} questions`);

  // Find pagination links to discover page URLs
  const $ = cheerio.load(page1Html);
  const pageLinks: string[] = [];
  $(".pagination .page-link").each((_, link) => {
    const href = $(link).attr("href");
    if (href && href !== `${baseUrl}/` && !href.includes("discussion") && !href.includes("formulas")) {
      if (!pageLinks.includes(href)) pageLinks.push(href);
    }
  });

  // Scrape subsequent pages (up to maxPages - 1 more)
  const pagesToScrape = pageLinks.slice(0, maxPages - 1);
  for (const pageUrl of pagesToScrape) {
    await delay(800);
    console.log(`    Fetching ${pageUrl}`);
    const html = await fetchPage(pageUrl);
    if (!html) continue;
    const qs = parseQuestions(html, pageUrl);
    allQuestions.push(...qs);
    console.log(`    Got ${qs.length} questions`);
  }

  return allQuestions;
}

// ── Main seed function ──

async function main() {
  console.log("🔄 Starting aptitude seed...\n");

  // Clear existing data
  console.log("Clearing old aptitude data...");
  await prisma.studentAptitudeProgress.deleteMany();
  await prisma.aptitudeQuestion.deleteMany();
  await prisma.aptitudeTopic.deleteMany();
  await prisma.aptitudeCategory.deleteMany();
  console.log("Done.\n");

  let totalQuestions = 0;

  for (let ci = 0; ci < CATEGORIES.length; ci++) {
    const catDef = CATEGORIES[ci];
    console.log(`\n📂 Category: ${catDef.name} (${catDef.topics.length} topics)`);

    const category = await prisma.aptitudeCategory.create({
      data: {
        name: catDef.name,
        slug: catDef.slug,
        description: catDef.description,
        orderIndex: ci,
      },
    });

    for (let ti = 0; ti < catDef.topics.length; ti++) {
      const topicDef = catDef.topics[ti];
      console.log(`\n  📝 Topic ${ti + 1}/${catDef.topics.length}: ${topicDef.name}`);

      const topic = await prisma.aptitudeTopic.create({
        data: {
          categoryId: category.id,
          name: topicDef.name,
          slug: topicDef.slug,
          description: topicDef.description,
          orderIndex: ti,
          sourceUrl: `https://www.indiabix.com/${catDef.urlPrefix}/${topicDef.slug}/`,
        },
      });

      // Scrape questions
      const questions = await scrapeTopicQuestions(catDef.urlPrefix, topicDef.slug, 5);

      if (questions.length === 0) {
        console.log(`  ⚠ No questions found for ${topicDef.name}`);
        continue;
      }

      // Get companies for this topic
      const companies = TOPIC_COMPANIES[topicDef.slug] || [];

      // Insert questions in batch
      await prisma.aptitudeQuestion.createMany({
        data: questions.map((q) => ({
          topicId: topic.id,
          question: q.question,
          optionA: q.optionA,
          optionB: q.optionB,
          optionC: q.optionC,
          optionD: q.optionD,
          optionE: q.optionE ?? null,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation ?? null,
          difficulty: "MEDIUM",
          companies,
          sourceUrl: q.sourceUrl,
        })),
      });

      totalQuestions += questions.length;
      console.log(`  ✅ Inserted ${questions.length} questions (companies: ${companies.length})`);

      // Rate limiting between topics
      await delay(1000);
    }
  }

  console.log(`\n\n✅ Seed complete! Total questions: ${totalQuestions}`);

  // Print summary
  const cats = await prisma.aptitudeCategory.findMany({
    include: { topics: { include: { _count: { select: { questions: true } } } } },
  });

  console.log("\n📊 Summary:");
  for (const cat of cats) {
    const qCount = cat.topics.reduce((sum, t) => sum + t._count.questions, 0);
    console.log(`  ${cat.name}: ${cat.topics.length} topics, ${qCount} questions`);
  }
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
