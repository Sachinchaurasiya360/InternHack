import type PDFDocument from "pdfkit";
import type { RoadmapPdfInput } from "../types.js";
import type { ColorsType } from "../utils/colors.js";
import { A4_WIDTH, MARGIN, drawPageHeading, pageBreakIfNeeded } from "../utils/layout.js";

export function drawTableOfContents(doc: PDFKit.PDFDocument, input: RoadmapPdfInput, colors: ColorsType) {
  doc.addPage();
  drawPageHeading(doc, "Table of contents", colors);

  const w = A4_WIDTH;
  const margin = MARGIN;
  const contentW = w - margin * 2;

  doc.fillColor(colors.mute).fontSize(10).font("Helvetica");
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

  doc.fillColor(colors.ink).fontSize(11).font("Helvetica");
  for (const item of items) {
    pageBreakIfNeeded(doc, 28);
    const isSection = item.label.startsWith("0") || item.label.startsWith("1");
    doc.font(isSection ? "Helvetica" : "Helvetica-Bold").fillColor(colors.ink).fontSize(11);
    doc.text(item.label, margin + (isSection ? 16 : 0), doc.y, {
      width: contentW - 200,
      ellipsis: true,
      continued: false,
    });
    if (item.sub) {
      doc.fillColor(colors.faint).fontSize(9).font("Helvetica");
      doc.text(item.sub, margin + (isSection ? 16 : 0), doc.y, {
        width: contentW - 200,
      });
    }
    doc.moveDown(0.4);
  }
}
