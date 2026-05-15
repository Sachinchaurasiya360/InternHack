import PDFDocument from "pdfkit";

export type PdfTheme = "light" | "dark";

export interface RoadmapPdfInput {
  theme?: PdfTheme;
  user: { name: string };
  roadmap: {
    title: string;
    shortDescription: string;
    estimatedHours: number;
    outcomes: string[];
    prerequisites: string[];
  };
  enrollment: {
    hoursPerWeek: number;
    preferredDays: string[];
    startDate: Date;
    targetEndDate: Date;
    experienceLevel: string;
    goal: string;
  };
  weeklyPlan: { week: number; topicSlugs: string[]; totalHours: number }[];
  sections: {
    title: string;
    summary: string;
    orderIndex: number;
    topics: {
      slug: string;
      title: string;
      summary: string;
      contentMd?: string;
      estimatedHours: number;
      difficulty: number;
      miniProject: string | null;
      selfCheck: string | null;
      resources: { kind: string; title: string; url: string; source: string | null }[];
    }[];
  }[];
}

// ── Palettes ───────────────────────────────────────────────────────────────
const LIGHT_COLORS = {
  pageBg: "#ffffff",
  coverBand: "#0a0a0a",
  ink: "#0a0a0a",
  body: "#27272a",
  mute: "#52525b",
  faint: "#a1a1aa",
  faintest: "#d4d4d8",
  accent: "#4d7c0f",
  accentSoft: "#84cc16",
  accentBg: "#f7fee7",
  accentBorder: "#d9f99d",
  amber: "#b45309",
  amberBg: "#fffbeb",
  amberBorder: "#fde68a",
  bg: "#fafafa",
  border: "#e4e4e7",
};

const DARK_COLORS = {
  pageBg: "#111111",
  coverBand: "#000000",
  ink: "#f4f4f5",
  body: "#d4d4d8",
  mute: "#a1a1aa",
  faint: "#71717a",
  faintest: "#3f3f46",
  accent: "#a3e635",
  accentSoft: "#bef264",
  accentBg: "#0f1e02",
  accentBorder: "#1a3a05",
  amber: "#fbbf24",
  amberBg: "#1a1100",
  amberBorder: "#3d2000",
  bg: "#1c1c1e",
  border: "#3f3f46",
};

// Mutable reference swapped per-call inside generateRoadmapPdf.
// All draw helpers reference COLORS so they automatically pick up the theme.
let COLORS: typeof LIGHT_COLORS = LIGHT_COLORS;

const A4_WIDTH = 595.28;
const A4_HEIGHT = 841.89;
const MARGIN = 48;

const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const fmtShortDate = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

/**
 * Generate a personalized roadmap PDF and return it as a Buffer.
 *
 * Layout is hand-laid using PDFKit primitives. We use bufferPages so we can
 * stamp page numbers + footer onto every page after content rendering.
 */
export async function generateRoadmapPdf(input: RoadmapPdfInput): Promise<Buffer> {
  // Swap palette for the duration of this synchronous render pass.
  COLORS = input.theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margin: MARGIN,
      bufferPages: true,
      info: {
        Title: `${input.roadmap.title} - ${input.user.name}`,
        Author: "InternHack",
        Subject: "Personalized learning roadmap",
        Keywords: "roadmap, career, learning, full-stack",
      },
    });

    // Paint full-page background for dark mode on every page (incl. first).
    if (input.theme === "dark") {
      const paintBg = () => {
        doc.save();
        doc.rect(0, 0, A4_WIDTH, A4_HEIGHT).fill(DARK_COLORS.pageBg);
        doc.restore();
      };
      doc.on("pageAdded", paintBg);
      // Also paint the very first page which was created during construction.
      paintBg();
    }

    const chunks: Buffer[] = [];
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    // Slug → topic lookup so we can show titles instead of slugs in the plan
    const slugToTopic = new Map<string, RoadmapPdfInput["sections"][number]["topics"][number] & { sectionTitle: string }>();
    for (const section of input.sections) {
      for (const topic of section.topics) {
        slugToTopic.set(topic.slug, { ...topic, sectionTitle: section.title });
      }
    }

    drawCover(doc, input);
    drawTableOfContents(doc, input);
    drawHowToUse(doc, input);
    drawPreflight(doc, input);
    drawWeeklyPlan(doc, input, slugToTopic);
    drawSections(doc, input);
    drawAfterYouFinish(doc, input);

    stampFooters(doc);

    doc.end();
  });
}

// ── Cover page ──────────────────────────────────────────────────────────────
function drawCover(doc: PDFKit.PDFDocument, input: RoadmapPdfInput) {
  const w = A4_WIDTH;
  const contentW = w - MARGIN * 2;

  // Top band
  doc.rect(0, 0, w, 160).fill(COLORS.coverBand);

  doc.fillColor("#ffffff").fontSize(10).font("Helvetica-Bold");
  doc.text("INTERNHACK", MARGIN, 40, { characterSpacing: 2.5, width: contentW });

  doc.fillColor(COLORS.accentSoft).fontSize(9).font("Helvetica-Bold");
  doc.text("PERSONALIZED ROADMAP", MARGIN, 56, { characterSpacing: 2, width: contentW });

  doc.fillColor("#ffffff").fontSize(28).font("Helvetica-Bold");
  doc.text("Your learning path", MARGIN, 80, { width: contentW, lineBreak: true });

  doc.fontSize(12).font("Helvetica").fillOpacity(0.85);
  doc.text(`Built for ${input.user.name}`, MARGIN, 130, { width: contentW });
  doc.fillOpacity(1);

  // Roadmap title block
  doc.fillColor(COLORS.ink).fontSize(26).font("Helvetica-Bold");
  doc.text(input.roadmap.title, MARGIN, 200, { width: contentW, lineGap: 2 });

  // Short description
  doc.fillColor(COLORS.mute).fontSize(11).font("Helvetica");
  doc.text(input.roadmap.shortDescription, MARGIN, doc.y + 8, {
    width: contentW,
    lineGap: 3,
  });

  // Stat strip
  const stripY = doc.y + 18;
  drawStatStrip(doc, MARGIN, stripY, contentW, [
    { label: "TOTAL", value: `${input.roadmap.estimatedHours}h` },
    { label: "TOPICS", value: String(input.sections.reduce((s, sec) => s + sec.topics.length, 0)) },
    { label: "SECTIONS", value: String(input.sections.length) },
    { label: "WEEKS", value: String(input.weeklyPlan.length || 1) },
  ]);

  doc.y = stripY + 60;

  // Plan card
  drawPlanCard(doc, input);

  // Outcomes
  if (input.roadmap.outcomes.length > 0) {
    doc.moveDown(0.6);
    drawSubheading(doc, "What you will be able to do");
    doc.fillColor(COLORS.body).fontSize(10).font("Helvetica");
    for (const o of input.roadmap.outcomes) {
      bulletLine(doc, o);
    }
  }

  // Prerequisites
  if (input.roadmap.prerequisites.length > 0) {
    doc.moveDown(0.6);
    drawSubheading(doc, "Before you start");
    doc.fillColor(COLORS.body).fontSize(10).font("Helvetica");
    for (const p of input.roadmap.prerequisites) {
      bulletLine(doc, p);
    }
  }
}

function drawPlanCard(doc: PDFKit.PDFDocument, input: RoadmapPdfInput) {
  const w = A4_WIDTH;
  const margin = MARGIN;
  const contentW = w - margin * 2;
  const cardY = doc.y;
  const cardH = 150;

  // Card frame
  doc.rect(margin, cardY, contentW, cardH).fill(COLORS.bg).stroke(COLORS.border);

  // Inner padding
  const pad = 18;
  const innerW = contentW - pad * 2;
  const colW = innerW / 2 - 8;

  const labelKV = (label: string, value: string, x: number, y: number) => {
    doc.fillColor(COLORS.faint).fontSize(8).font("Helvetica-Bold");
    doc.text(label.toUpperCase(), x, y, { characterSpacing: 1.5, width: colW });
    doc.fillColor(COLORS.ink).fontSize(12).font("Helvetica");
    doc.text(value, x, y + 12, { width: colW, ellipsis: true, height: 28 });
  };

  const left = margin + pad;
  const right = margin + pad + colW + 16;
  let row = cardY + pad;
  const rowH = (cardH - pad * 2) / 3;

  labelKV("Pace", `${input.enrollment.hoursPerWeek} hrs / week`, left, row);
  labelKV("Goal", goalLabel(input.enrollment.goal), right, row);
  row += rowH;
  labelKV("Start", fmtDate(input.enrollment.startDate), left, row);
  labelKV("Target finish", fmtDate(input.enrollment.targetEndDate), right, row);
  row += rowH;
  labelKV("Experience", expLabel(input.enrollment.experienceLevel), left, row);
  labelKV("Days", input.enrollment.preferredDays.join(", "), right, row);

  doc.y = cardY + cardH + 18;
}

// ── Table of contents ──────────────────────────────────────────────────────
function drawTableOfContents(doc: PDFKit.PDFDocument, input: RoadmapPdfInput) {
  doc.addPage();
  drawPageHeading(doc, "Table of contents");

  const w = A4_WIDTH;
  const margin = MARGIN;
  const contentW = w - margin * 2;

  doc.fillColor(COLORS.mute).fontSize(10).font("Helvetica");
  doc.text(
    "What's inside, in order. Skim first, then come back to anything that catches your eye.",
    { width: contentW, lineGap: 2 },
  );
  doc.moveDown(1);

  const items: { label: string; sub?: string }[] = [
    { label: "Cover", sub: "Your plan at a glance" },
    { label: "How to use this PDF", sub: "Reading order and printing tips" },
    { label: "Pre-flight checklist", sub: "Tools and accounts to set up" },
    { label: "Your weekly plan", sub: `${input.weeklyPlan.length || 1} weeks of paced topics` },
    { label: "The roadmap", sub: `${input.sections.length} sections, ${input.sections.reduce((s, sec) => s + sec.topics.length, 0)} topics` },
  ];
  input.sections.forEach((section, i) => {
    items.push({
      label: `${String(i + 1).padStart(2, "0")} ${section.title}`,
      sub: `${section.topics.length} topic${section.topics.length === 1 ? "" : "s"}`,
    });
  });
  items.push({ label: "After you finish", sub: "Next steps and InternHack tools" });

  doc.fillColor(COLORS.ink).fontSize(11).font("Helvetica");
  for (const item of items) {
    pageBreakIfNeeded(doc, 28);
    const isSection = item.label.startsWith("0") || item.label.startsWith("1");
    doc.font(isSection ? "Helvetica" : "Helvetica-Bold").fillColor(COLORS.ink).fontSize(11);
    doc.text(item.label, margin + (isSection ? 16 : 0), doc.y, {
      width: contentW - 200,
      ellipsis: true,
      continued: false,
    });
    if (item.sub) {
      doc.fillColor(COLORS.faint).fontSize(9).font("Helvetica");
      doc.text(item.sub, margin + (isSection ? 16 : 0), doc.y, {
        width: contentW - 200,
      });
    }
    doc.moveDown(0.4);
  }
}

// ── How to use ──────────────────────────────────────────────────────────────
function drawHowToUse(doc: PDFKit.PDFDocument, input: RoadmapPdfInput) {
  doc.addPage();
  drawPageHeading(doc, "How to use this PDF");

  const tips = [
    {
      title: "Read once, then bookmark",
      body: "Skim the whole thing in one sitting to build a mental map of where you're headed. Don't try to absorb every detail. Then bookmark this PDF and come back week by week.",
    },
    {
      title: "Open the dashboard alongside it",
      body: "Visit internhack.xyz/dashboard/roadmaps to mark topics complete as you finish them. Your progress syncs across devices and feeds the day-10 check-in we email you.",
    },
    {
      title: "Treat the weekly plan as a guide, not a contract",
      body: "If a topic clicks faster than expected, jump ahead. If life gets in the way, slide the plan and recompute pace from the dashboard. The plan adjusts to you.",
    },
    {
      title: "Build the mini project for every topic",
      body: "Reading without building is forgettable. Three small projects beat ten read-throughs. Push every project to GitHub with a short README so you have a portfolio at the end, not a list of topics you read.",
    },
    {
      title: "Stuck? Time-box it",
      body: "If you're stuck for more than thirty minutes, ask in our community. We have all been there. Better to lose 10 minutes on a question than 3 hours on a wall.",
    },
    {
      title: "Print friendly",
      body: "This PDF prints cleanly at A4. The visual diagram lives in the dashboard, the printed copy is the reading companion.",
    },
  ];

  for (const t of tips) {
    pageBreakIfNeeded(doc, 90);
    doc.fillColor(COLORS.accent).fontSize(11).font("Helvetica-Bold");
    doc.text(t.title, { width: A4_WIDTH - MARGIN * 2 });
    doc.moveDown(0.2);
    doc.fillColor(COLORS.body).fontSize(10).font("Helvetica");
    doc.text(t.body, { width: A4_WIDTH - MARGIN * 2, lineGap: 2 });
    doc.moveDown(0.7);
  }

  // Note about pace
  pageBreakIfNeeded(doc, 80);
  doc.moveDown(0.6);
  drawCallout(doc, {
    label: "your pace",
    title: `${input.enrollment.hoursPerWeek} hrs/week, finish ${fmtDate(input.enrollment.targetEndDate)}`,
    body: "If your hours change (and they will), adjust them from the dashboard. We'll recompute the weekly plan and you'll always know what to focus on next.",
    tone: "lime",
  });
}

// ── Pre-flight ──────────────────────────────────────────────────────────────
function drawPreflight(doc: PDFKit.PDFDocument, _input: RoadmapPdfInput) {
  doc.addPage();
  drawPageHeading(doc, "Pre-flight checklist");

  doc.fillColor(COLORS.mute).fontSize(10).font("Helvetica");
  doc.text(
    "Set these up once now and you won't lose half an hour later trying to install something while your motivation is high.",
    { width: A4_WIDTH - MARGIN * 2, lineGap: 2 },
  );
  doc.moveDown(0.8);

  const groups: { title: string; items: { name: string; why: string }[] }[] = [
    {
      title: "Install on your machine",
      items: [
        { name: "Node.js (LTS) via nvm or volta", why: "Runs your JavaScript outside the browser. nvm makes it easy to switch versions later." },
        { name: "Git", why: "Version control for every project you build, ever." },
        { name: "VS Code (or your editor of choice)", why: "Free, fast, huge ecosystem of extensions for web work." },
        { name: "Docker Desktop", why: "Required for the DevOps section. Install now so it's ready when you get there." },
        { name: "PostgreSQL", why: "Local database for the backend section. Postgres.app or via Docker is easiest." },
      ],
    },
    {
      title: "Create accounts",
      items: [
        { name: "GitHub", why: "Where your code, your portfolio, and most of the open-source world lives." },
        { name: "Vercel or Netlify", why: "Free hosting for your frontend projects." },
        { name: "Render, Railway, or Fly.io", why: "Free hosting for your Node backend." },
        { name: "AWS free tier (later)", why: "For the DevOps + storage topics. Sign up only when you reach that section." },
      ],
    },
    {
      title: "Set yourself up to focus",
      items: [
        { name: "A weekly study slot", why: "Same time, same place, every week. Treating learning like a meeting beats willpower." },
        { name: "A notes app", why: "Notion, Obsidian, plain markdown, anything you'll actually open. Capture summaries in your own words." },
        { name: "A 'now' folder for projects", why: "Open one folder for whatever you're learning now. Old projects archive into 'projects/archive'." },
      ],
    },
  ];

  for (const group of groups) {
    pageBreakIfNeeded(doc, 60);
    doc.fillColor(COLORS.accent).fontSize(11).font("Helvetica-Bold");
    doc.text(group.title.toUpperCase(), { characterSpacing: 1.5 });
    doc.moveDown(0.3);

    for (const item of group.items) {
      pageBreakIfNeeded(doc, 40);
      doc.fillColor(COLORS.ink).fontSize(11).font("Helvetica-Bold");
      doc.text(`▢  ${item.name}`, MARGIN, doc.y, { width: A4_WIDTH - MARGIN * 2 });
      doc.fillColor(COLORS.mute).fontSize(9.5).font("Helvetica");
      doc.text(item.why, MARGIN + 16, doc.y, { width: A4_WIDTH - MARGIN * 2 - 16, lineGap: 2 });
      doc.moveDown(0.4);
    }

    doc.moveDown(0.4);
  }
}

// ── Weekly plan ─────────────────────────────────────────────────────────────
function drawWeeklyPlan(
  doc: PDFKit.PDFDocument,
  input: RoadmapPdfInput,
  slugToTopic: Map<string, RoadmapPdfInput["sections"][number]["topics"][number] & { sectionTitle: string }>,
) {
  doc.addPage();
  drawPageHeading(doc, "Your weekly plan");

  doc.fillColor(COLORS.mute).fontSize(10).font("Helvetica");
  doc.text(
    `Topics packed into weekly batches at ${input.enrollment.hoursPerWeek} hours per week. Your target finish date is ${fmtDate(input.enrollment.targetEndDate)}.`,
    { width: A4_WIDTH - MARGIN * 2, lineGap: 2 },
  );
  doc.moveDown(0.8);

  if (input.weeklyPlan.length === 0) {
    doc.fillColor(COLORS.faint).fontSize(11).font("Helvetica-Oblique");
    doc.text("No weekly plan available.", { width: A4_WIDTH - MARGIN * 2 });
    return;
  }

  const startDate = input.enrollment.startDate;
  const MS_PER_DAY = 24 * 60 * 60 * 1000;

  for (const week of input.weeklyPlan) {
    pageBreakIfNeeded(doc, 100 + week.topicSlugs.length * 22);

    const weekStart = new Date(startDate.getTime() + (week.week - 1) * 7 * MS_PER_DAY);
    const weekEnd = new Date(weekStart.getTime() + 6 * MS_PER_DAY);

    // Week header bar
    const barY = doc.y;
    doc.rect(MARGIN, barY, A4_WIDTH - MARGIN * 2, 28).fill(COLORS.accentBg);
    doc.fillColor(COLORS.accent).fontSize(10).font("Helvetica-Bold");
    doc.text(`WEEK ${week.week}`, MARGIN + 14, barY + 9, { characterSpacing: 1.5, width: 80 });
    doc.fillColor(COLORS.body).fontSize(10).font("Helvetica");
    doc.text(`${fmtShortDate(weekStart)} – ${fmtShortDate(weekEnd)}`, MARGIN + 100, barY + 9, {
      width: 200,
    });
    doc.fillColor(COLORS.mute).fontSize(10).font("Helvetica");
    doc.text(`${week.totalHours} hrs`, MARGIN, barY + 9, {
      width: A4_WIDTH - MARGIN * 2 - 14,
      align: "right",
    });
    doc.y = barY + 36;

    // Topics in the week, with full title + meta
    for (const slug of week.topicSlugs) {
      const topic = slugToTopic.get(slug);
      if (!topic) {
        doc.fillColor(COLORS.faint).fontSize(10).font("Helvetica");
        doc.text(`•  ${slug}`, MARGIN + 8, doc.y, { width: A4_WIDTH - MARGIN * 2 - 8 });
        doc.moveDown(0.2);
        continue;
      }

      pageBreakIfNeeded(doc, 30);
      doc.fillColor(COLORS.ink).fontSize(10.5).font("Helvetica-Bold");
      doc.text(`▸  ${topic.title}`, MARGIN + 8, doc.y, { width: A4_WIDTH - MARGIN * 2 - 80, ellipsis: true });
      const lineY = doc.y;
      doc.fillColor(COLORS.faint).fontSize(8).font("Helvetica");
      doc.text(`${topic.estimatedHours}h · ${stars(topic.difficulty)}`, MARGIN, lineY - 12, {
        width: A4_WIDTH - MARGIN * 2,
        align: "right",
      });
      doc.fillColor(COLORS.mute).fontSize(9).font("Helvetica");
      doc.text(topic.sectionTitle, MARGIN + 24, doc.y, {
        width: A4_WIDTH - MARGIN * 2 - 24,
        ellipsis: true,
      });
      doc.moveDown(0.5);
    }

    doc.moveDown(0.5);
  }
}

// ── Sections + topics ───────────────────────────────────────────────────────
function drawSections(doc: PDFKit.PDFDocument, input: RoadmapPdfInput) {
  for (const [sIdx, section] of input.sections.entries()) {
    drawSectionHeader(doc, section, sIdx);

    for (const [tIdx, topic] of section.topics.entries()) {
      drawTopicBlock(doc, topic, tIdx);
    }
  }
}

/**
 * Section header is rendered inline rather than on a dedicated page.
 * We only force a page break if there isn't enough room for the heading
 * plus the start of the first topic.
 */
function drawSectionHeader(doc: PDFKit.PDFDocument, section: RoadmapPdfInput["sections"][number], sIdx: number) {
  const contentW = A4_WIDTH - MARGIN * 2;

  pageBreakIfNeeded(doc, 160);

  doc.moveDown(0.4);
  doc.rect(MARGIN, doc.y, 60, 2).fill(COLORS.accent);
  doc.moveDown(0.2);

  doc.fillColor(COLORS.accent).fontSize(9).font("Helvetica-Bold");
  doc.text(`SECTION ${String(sIdx + 1).padStart(2, "0")}`, MARGIN, doc.y, {
    characterSpacing: 1.8,
    width: contentW,
  });

  doc.fillColor(COLORS.ink).fontSize(18).font("Helvetica-Bold");
  doc.text(section.title, MARGIN, doc.y + 2, { width: contentW, lineGap: 1 });

  doc.fillColor(COLORS.mute).fontSize(10).font("Helvetica");
  doc.text(section.summary, MARGIN, doc.y + 2, { width: contentW, lineGap: 2 });

  doc.moveDown(0.4);
}

function drawTopicBlock(
  doc: PDFKit.PDFDocument,
  topic: RoadmapPdfInput["sections"][number]["topics"][number],
  tIdx: number,
) {
  const contentW = A4_WIDTH - MARGIN * 2;

  // Only break if the topic header (eyebrow + title + summary) won't fit
  pageBreakIfNeeded(doc, 100);

  // Topic header
  doc.fillColor(COLORS.faint).fontSize(7.5).font("Helvetica-Bold");
  doc.text(`TOPIC ${String(tIdx + 1).padStart(2, "0")}`, MARGIN, doc.y, {
    characterSpacing: 1.6,
    width: contentW,
  });

  doc.fillColor(COLORS.ink).fontSize(13).font("Helvetica-Bold");
  doc.text(topic.title, MARGIN, doc.y + 1, { width: contentW, lineGap: 1 });

  // Meta line (compact)
  doc.fillColor(COLORS.faint).fontSize(8).font("Helvetica");
  doc.text(
    `${topic.estimatedHours} hrs   ${stars(topic.difficulty)}   ${difficultyLabel(topic.difficulty)}`,
    MARGIN,
    doc.y + 1,
    { width: contentW },
  );

  // Summary
  doc.fillColor(COLORS.mute).fontSize(9.5).font("Helvetica-Oblique");
  doc.text(topic.summary, MARGIN, doc.y + 3, { width: contentW, lineGap: 2 });
  doc.moveDown(0.3);

  // Long-form content (markdown lite, tighter)
  if (topic.contentMd) {
    drawMarkdownLite(doc, topic.contentMd);
    doc.moveDown(0.15);
  }

  // Resources
  if (topic.resources.length > 0) {
    pageBreakIfNeeded(doc, 50);
    doc.fillColor(COLORS.faint).fontSize(8).font("Helvetica-Bold");
    doc.text("RESOURCES", MARGIN, doc.y, { characterSpacing: 1.6, width: contentW });
    doc.moveDown(0.15);

    for (const r of topic.resources) {
      drawResource(doc, r);
    }
    doc.moveDown(0.15);
  }

  // Mini project callout
  if (topic.miniProject) {
    drawCallout(doc, {
      label: "build",
      title: "Mini project",
      body: topic.miniProject,
      tone: "lime",
    });
    doc.moveDown(0.15);
  }

  // Self-check callout
  if (topic.selfCheck) {
    drawCallout(doc, {
      label: "check",
      title: "Self-check",
      body: topic.selfCheck,
      tone: "amber",
    });
    doc.moveDown(0.2);
  }

  // Topic bottom rule
  doc.rect(MARGIN, doc.y, contentW, 0.5).fill(COLORS.faintest);
  doc.moveDown(0.35);
}

function drawResource(
  doc: PDFKit.PDFDocument,
  r: { kind: string; title: string; url: string; source: string | null },
) {
  const contentW = A4_WIDTH - MARGIN * 2;
  const KIND_W = 48;
  const titleX = MARGIN + KIND_W + 6;
  const titleW = contentW - KIND_W - 6;

  // Approximate height: title + source/url line
  doc.fontSize(9).font("Helvetica-Bold");
  const titleH = doc.heightOfString(r.title, { width: titleW });
  const blockH = Math.max(20, titleH + 14);

  pageBreakIfNeeded(doc, blockH + 4);

  const startY = doc.y;

  // Kind chip
  doc.rect(MARGIN, startY + 1, KIND_W, 14).fill(COLORS.accentBg).stroke(COLORS.accentBorder);
  doc.fillColor(COLORS.accent).fontSize(7).font("Helvetica-Bold");
  doc.text(r.kind, MARGIN, startY + 5, {
    width: KIND_W,
    align: "center",
    characterSpacing: 0.8,
  });

  // Title (with hyperlink baked in)
  doc.fillColor(COLORS.ink).fontSize(9).font("Helvetica-Bold");
  doc.text(r.title, titleX, startY, { width: titleW, link: r.url, underline: false });

  // Source line (compact, single line, ellipsis if too long)
  doc.fillColor(COLORS.faint).fontSize(7.5).font("Helvetica");
  const sub = r.source ? `${r.source}  ${shortenUrl(r.url)}` : shortenUrl(r.url);
  doc.text(sub, titleX, doc.y, { width: titleW, ellipsis: true, lineBreak: false });

  doc.fillColor(COLORS.body);
  doc.y = startY + blockH;
}

function shortenUrl(url: string): string {
  try {
    const u = new URL(url);
    return `${u.host}${u.pathname.length > 1 ? u.pathname : ""}`.slice(0, 80);
  } catch {
    return url.slice(0, 80);
  }
}

function drawCallout(
  doc: PDFKit.PDFDocument,
  args: { label: string; title: string; body: string; tone: "lime" | "amber" },
) {
  const contentW = A4_WIDTH - MARGIN * 2;
  const tone = args.tone === "lime"
    ? { bg: COLORS.accentBg, border: COLORS.accentBorder, ink: COLORS.accent }
    : { bg: COLORS.amberBg, border: COLORS.amberBorder, ink: COLORS.amber };

  // One-line label + title, body below. Tighter padding.
  const padX = 12;
  const padTop = 8;
  const padBottom = 10;
  const innerW = contentW - padX * 2;

  doc.fontSize(9).font("Helvetica");
  const bodyH = doc.heightOfString(args.body, { width: innerW, lineGap: 1.5 });
  const headerH = 12; // single-line label + title combined
  const blockH = padTop + headerH + 4 + bodyH + padBottom;

  pageBreakIfNeeded(doc, blockH + 4);

  const startY = doc.y;
  doc.rect(MARGIN, startY, contentW, blockH).fillAndStroke(tone.bg, tone.border);

  // Inline header: "BUILD  Mini project"
  doc.fillColor(tone.ink).fontSize(8).font("Helvetica-Bold");
  doc.text(args.label.toUpperCase(), MARGIN + padX, startY + padTop, {
    characterSpacing: 1.6,
    width: 60,
    continued: true,
  });
  doc.fillColor(COLORS.ink).fontSize(10).font("Helvetica-Bold");
  doc.text(`   ${args.title}`, { width: innerW - 60 });

  doc.fillColor(COLORS.body).fontSize(9).font("Helvetica");
  doc.text(args.body, MARGIN + padX, startY + padTop + headerH + 4, {
    width: innerW,
    lineGap: 1.5,
  });

  doc.y = startY + blockH;
}

// ── After you finish ────────────────────────────────────────────────────────
function drawAfterYouFinish(doc: PDFKit.PDFDocument, _input: RoadmapPdfInput) {
  doc.addPage();
  drawPageHeading(doc, "After you finish");

  doc.fillColor(COLORS.mute).fontSize(10).font("Helvetica");
  doc.text(
    "Finishing the roadmap is the start, not the end. Here is what to do with everything you just built.",
    { width: A4_WIDTH - MARGIN * 2, lineGap: 2 },
  );
  doc.moveDown(0.8);

  const blocks = [
    {
      label: "Polish your portfolio",
      body: "Pin your three best repos on GitHub. Make sure each has a screenshot, a clear README, and a live URL. This is what recruiters actually click on.",
    },
    {
      label: "Score your resume",
      body: "Run your resume through InternHack's free ATS scorer. Fix the keyword gaps it surfaces. Iterate three times. internhack.xyz/ats-score",
    },
    {
      label: "Generate a cover letter",
      body: "Use InternHack's AI cover letter tool to draft tailored letters in seconds. Then edit them in your own voice. internhack.xyz/student/ats/cover-letter",
    },
    {
      label: "Practice mock interviews",
      body: "InternHack's AI mock interview gives you behavioral and technical practice with feedback. Do five sessions before applying.",
    },
    {
      label: "Find real internships",
      body: "InternHack aggregates fresh listings every six hours. Filter to roles that match your stack. internhack.xyz/jobs",
    },
    {
      label: "Contribute to open source",
      body: "InternHack's first-PR guide and curated repo directory help you land your first merged contribution. internhack.xyz/opensource",
    },
    {
      label: "Apply, track, iterate",
      body: "Treat job hunting like a project. Apply more than you think you need to. Track every application and every lesson learned.",
    },
  ];

  for (const b of blocks) {
    pageBreakIfNeeded(doc, 60);
    doc.fillColor(COLORS.accent).fontSize(11).font("Helvetica-Bold");
    doc.text(b.label, { width: A4_WIDTH - MARGIN * 2 });
    doc.moveDown(0.2);
    doc.fillColor(COLORS.body).fontSize(10).font("Helvetica");
    doc.text(b.body, { width: A4_WIDTH - MARGIN * 2, lineGap: 2 });
    doc.moveDown(0.6);
  }

  doc.moveDown(0.4);
  drawCallout(doc, {
    label: "one more thing",
    title: "Reply to the day-10 email",
    body: "Ten days after you enrolled we'll email you a check-in with your real progress. Reply to it. We read every one and improvements ship from your feedback.",
    tone: "lime",
  });
}

// ── Helpers ─────────────────────────────────────────────────────────────────
function drawPageHeading(doc: PDFKit.PDFDocument, label: string) {
  const w = A4_WIDTH;
  const margin = MARGIN;
  doc.fillColor(COLORS.faint).fontSize(9).font("Helvetica-Bold");
  doc.text(label.toUpperCase(), margin, margin, { characterSpacing: 1.8, width: w - margin * 2 });
  doc.moveDown(0.1);
  doc.fillColor(COLORS.ink).fontSize(22).font("Helvetica-Bold");
  doc.text(label, margin, doc.y, { width: w - margin * 2 });
  doc.rect(margin, doc.y + 4, 40, 2).fill(COLORS.accent);
  doc.fillColor(COLORS.ink);
  doc.moveDown(0.9);
}

function drawSubheading(doc: PDFKit.PDFDocument, label: string) {
  doc.fillColor(COLORS.ink).fontSize(13).font("Helvetica-Bold");
  doc.text(label, MARGIN, doc.y, { width: A4_WIDTH - MARGIN * 2 });
  doc.moveDown(0.3);
}

function drawStatStrip(
  doc: PDFKit.PDFDocument,
  x: number,
  y: number,
  width: number,
  cells: { label: string; value: string }[],
) {
  const cellW = width / cells.length;
  doc.rect(x, y, width, 50).fill(COLORS.bg).stroke(COLORS.border);
  cells.forEach((c, i) => {
    const cx = x + i * cellW;
    if (i > 0) {
      doc.rect(cx, y + 8, 0.5, 34).fill(COLORS.border);
    }
    doc.fillColor(COLORS.faint).fontSize(8).font("Helvetica-Bold");
    doc.text(c.label, cx, y + 12, {
      width: cellW,
      align: "center",
      characterSpacing: 1.5,
    });
    doc.fillColor(COLORS.ink).fontSize(16).font("Helvetica-Bold");
    doc.text(c.value, cx, y + 25, { width: cellW, align: "center" });
  });
}

function bulletLine(doc: PDFKit.PDFDocument, text: string) {
  pageBreakIfNeeded(doc, 18);
  doc.fillColor(COLORS.body).fontSize(10).font("Helvetica");
  doc.text(`•  ${text}`, MARGIN + 4, doc.y, {
    indent: 0,
    width: A4_WIDTH - MARGIN * 2 - 4,
    lineGap: 2,
  });
  doc.moveDown(0.15);
}

/**
 * Lightweight markdown handling: paragraphs split on blank lines, bullet
 * lines starting with "- " become bulleted text. Headings and code blocks
 * are not rendered (the seed content uses neither in the body).
 */
function drawMarkdownLite(doc: PDFKit.PDFDocument, md: string) {
  const blocks = md.split(/\n\s*\n/);

  for (const raw of blocks) {
    const block = raw.trim();
    if (!block) continue;

    const lines = block.split(/\r?\n/);
    const isBulletList = lines.every((l) => l.trim().startsWith("- "));

    if (isBulletList) {
      for (const line of lines) {
        const text = line.replace(/^\s*-\s+/, "").trim();
        if (!text) continue;
        pageBreakIfNeeded(doc, 14);
        doc.fillColor(COLORS.body).fontSize(9).font("Helvetica");
        doc.text(`•  ${text}`, MARGIN + 4, doc.y, {
          width: A4_WIDTH - MARGIN * 2 - 4,
          lineGap: 1.5,
        });
        doc.moveDown(0.05);
      }
    } else {
      const para = lines.join(" ");
      pageBreakIfNeeded(doc, 20);
      doc.fillColor(COLORS.body).fontSize(9).font("Helvetica");
      doc.text(para, MARGIN, doc.y, { width: A4_WIDTH - MARGIN * 2, lineGap: 1.8 });
      doc.moveDown(0.2);
    }
  }
}

function pageBreakIfNeeded(doc: PDFKit.PDFDocument, neededSpace: number) {
  // Footer reserves 36pt at the bottom; use that as the floor for content.
  const bottomFloor = A4_HEIGHT - MARGIN - 24;
  if (doc.y + neededSpace > bottomFloor) {
    doc.addPage();
  }
}

function stampFooters(doc: PDFKit.PDFDocument) {
  const range = doc.bufferedPageRange();
  const total = range.start + range.count;

  for (let i = range.start; i < total; i++) {
    doc.switchToPage(i);

    // Footer line
    const y = A4_HEIGHT - MARGIN + 4;
    doc.rect(MARGIN, y, A4_WIDTH - MARGIN * 2, 0.5).fill(COLORS.faintest);

    doc.fillColor(COLORS.faint).fontSize(8).font("Helvetica");
    doc.text("INTERNHACK · ROADMAP", MARGIN, y + 8, {
      characterSpacing: 1.5,
      width: A4_WIDTH - MARGIN * 2,
    });
    doc.text(
      `Page ${i + 1} of ${total}`,
      MARGIN,
      y + 8,
      { width: A4_WIDTH - MARGIN * 2, align: "right" },
    );
  }
}

function stars(n: number): string {
  const filled = "★".repeat(Math.max(0, Math.min(5, n)));
  const empty = "☆".repeat(5 - Math.max(0, Math.min(5, n)));
  return filled + empty;
}

function difficultyLabel(n: number): string {
  if (n <= 1) return "Easy";
  if (n === 2) return "Approachable";
  if (n === 3) return "Intermediate";
  if (n === 4) return "Challenging";
  return "Advanced";
}

function goalLabel(g: string): string {
  switch (g) {
    case "JOB_READY": return "Get job ready";
    case "SIDE_PROJECT": return "Build a side project";
    case "SCHOOL": return "School / coursework";
    case "CURIOUS": return "Curious learner";
    default: return g;
  }
}
function expLabel(e: string): string {
  switch (e) {
    case "NEW": return "Brand new";
    case "SOME": return "Some experience";
    case "EXPERIENCED": return "Experienced";
    default: return e;
  }
}




// ── Completion Certificate ────────────────────────────────────────────────────
export interface CertificateInput {
  theme?: PdfTheme;
  userName: string;
  roadmapTitle: string;
  completedAt: Date;
}

export async function generateCertificatePdf(input: CertificateInput): Promise<Buffer> {
  COLORS = input.theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  return new Promise((resolve, reject) => {
    const W = 841.89; // A4 landscape width
    const H = 595.28; // A4 landscape height
    const cx = W / 2;

    const doc = new PDFDocument({
      size: "A4",
      layout: "landscape",
      margin: MARGIN,
      bufferPages: true,
      info: {
        Title: `Certificate of Completion – ${input.roadmapTitle}`,
        Author: "InternHack",
        Subject: "Roadmap completion certificate",
      },
    });

    if (input.theme === "dark") {
      doc.save();
      doc.rect(0, 0, W, H).fill(DARK_COLORS.pageBg);
      doc.restore();
    }

    const chunks: Buffer[] = [];
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    // Outer border
    doc.rect(24, 24, W - 48, H - 48).lineWidth(3).stroke(COLORS.accent);
    doc.rect(32, 32, W - 64, H - 64).lineWidth(1).stroke(COLORS.accentSoft);

    // Top band
    doc.rect(0, 0, W, 90).fill(COLORS.coverBand);

    // Platform name in band
    doc.fillColor(COLORS.accentSoft).fontSize(11).font("Helvetica-Bold");
    doc.text("INTERNHACK", MARGIN, 28, {
      characterSpacing: 3,
      width: W - MARGIN * 2,
      align: "center",
    });
    doc.fillColor("#ffffff").fontSize(9).font("Helvetica");
    doc.text("internhack.xyz  ·  Certificate of Completion", MARGIN, 48, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Title
    doc.fillColor(COLORS.ink).fontSize(34).font("Helvetica-Bold");
    doc.text("Certificate of Completion", MARGIN, 120, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Accent rule
    doc.rect(cx - 60, 166, 120, 2).fill(COLORS.accent);

    // "This certifies that"
    doc.fillColor(COLORS.mute).fontSize(12).font("Helvetica");
    doc.text("This certifies that", MARGIN, 185, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // User name
    doc.fillColor(COLORS.ink).fontSize(30).font("Helvetica-Bold");
    doc.text(input.userName, MARGIN, 210, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Underline the name
    const nameWidth = Math.min(
      doc.widthOfString(input.userName, { fontSize: 30 }),
      380,
    );
    doc.rect(cx - nameWidth / 2, 250, nameWidth, 1).fill(COLORS.accent);

    // Body
    doc.fillColor(COLORS.mute).fontSize(12).font("Helvetica");
    doc.text("has successfully completed all topics in", MARGIN, 265, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Roadmap title
    doc.fillColor(COLORS.accent).fontSize(20).font("Helvetica-Bold");
    doc.text(input.roadmapTitle, MARGIN, 292, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Completion date
    const dateStr = input.completedAt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    doc.fillColor(COLORS.faint).fontSize(11).font("Helvetica");
    doc.text(`Completed on ${dateStr}`, MARGIN, 332, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Signature line
    doc.rect(cx - 80, H - 115, 160, 0.5).fill(COLORS.faintest);
    doc.fillColor(COLORS.faint).fontSize(9).font("Helvetica");
    doc.text("InternHack Team", MARGIN, H - 100, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Bottom footer rule
    doc.rect(MARGIN, H - 60, W - MARGIN * 2, 0.5).fill(COLORS.faintest);
    doc.fillColor(COLORS.faint).fontSize(7.5).font("Helvetica");
    doc.text(
      `INTERNHACK · CERTIFICATE OF COMPLETION · ${input.roadmapTitle.toUpperCase()}`,
      MARGIN,
      H - 46,
      { width: W - MARGIN * 2, align: "center", characterSpacing: 1 },
    );

    doc.end();
  });
}


