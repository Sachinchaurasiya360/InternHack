import type PDFDocument from "pdfkit";
import type { RoadmapPdfInput } from "../types.js";
import type { ColorsType } from "../utils/colors.js";
import {
  A4_WIDTH,
  MARGIN,
  drawPageHeading,
  pageBreakIfNeeded,
  drawCallout,
  fmtDate,
} from "../utils/layout.js";

export function drawHowToUse(doc: PDFKit.PDFDocument, input: RoadmapPdfInput, colors: ColorsType) {
  doc.addPage();
  drawPageHeading(doc, "How to use this PDF", colors);

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
    doc.fillColor(colors.accent).fontSize(11).font("Helvetica-Bold");
    doc.text(t.title, { width: A4_WIDTH - MARGIN * 2 });
    doc.moveDown(0.2);
    doc.fillColor(colors.body).fontSize(10).font("Helvetica");
    doc.text(t.body, { width: A4_WIDTH - MARGIN * 2, lineGap: 2 });
    doc.moveDown(0.7);
  }

  // Note about pace
  pageBreakIfNeeded(doc, 80);
  doc.moveDown(0.6);
  drawCallout(
    doc,
    {
      label: "your pace",
      title: `${input.enrollment.hoursPerWeek} hrs/week, finish ${fmtDate(input.enrollment.targetEndDate)}`,
      body: "If your hours change (and they will), adjust them from the dashboard. We'll recompute the weekly plan and you'll always know what to focus on next.",
      tone: "lime",
    },
    colors,
  );
}
