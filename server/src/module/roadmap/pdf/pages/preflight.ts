import type PDFDocument from "pdfkit";
import type { RoadmapPdfInput } from "../types.js";
import type { ColorsType } from "../utils/colors.js";
import { A4_WIDTH, MARGIN, drawPageHeading, pageBreakIfNeeded } from "../utils/layout.js";

export function drawPreflight(doc: PDFKit.PDFDocument, _input: RoadmapPdfInput, colors: ColorsType) {
  doc.addPage();
  drawPageHeading(doc, "Pre-flight checklist", colors);

  doc.fillColor(colors.mute).fontSize(10).font("Helvetica");
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
    doc.fillColor(colors.accent).fontSize(11).font("Helvetica-Bold");
    doc.text(group.title.toUpperCase(), { characterSpacing: 1.5 });
    doc.moveDown(0.3);

    for (const item of group.items) {
      pageBreakIfNeeded(doc, 40);
      doc.fillColor(colors.ink).fontSize(11).font("Helvetica-Bold");
      doc.text(`▢  ${item.name}`, MARGIN, doc.y, { width: A4_WIDTH - MARGIN * 2 });
      doc.fillColor(colors.mute).fontSize(9.5).font("Helvetica");
      doc.text(item.why, MARGIN + 16, doc.y, { width: A4_WIDTH - MARGIN * 2 - 16, lineGap: 2 });
      doc.moveDown(0.4);
    }

    doc.moveDown(0.4);
  }
}
