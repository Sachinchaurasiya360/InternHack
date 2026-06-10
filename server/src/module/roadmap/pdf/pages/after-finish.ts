import type PDFDocument from "pdfkit";
import type { RoadmapPdfInput } from "../types.js";
import type { ColorsType } from "../utils/colors.js";
import {
  A4_WIDTH,
  MARGIN,
  drawPageHeading,
  pageBreakIfNeeded,
  drawCallout,
} from "../utils/layout.js";

export function drawAfterYouFinish(doc: PDFKit.PDFDocument, _input: RoadmapPdfInput, colors: ColorsType) {
  doc.addPage();
  drawPageHeading(doc, "After you finish", colors);

  doc.fillColor(colors.mute).fontSize(10).font("Helvetica");
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
    doc.fillColor(colors.accent).fontSize(11).font("Helvetica-Bold");
    doc.text(b.label, { width: A4_WIDTH - MARGIN * 2 });
    doc.moveDown(0.2);
    doc.fillColor(colors.body).fontSize(10).font("Helvetica");
    doc.text(b.body, { width: A4_WIDTH - MARGIN * 2, lineGap: 2 });
    doc.moveDown(0.6);
  }

  doc.moveDown(0.4);
  drawCallout(
    doc,
    {
      label: "one more thing",
      title: "Reply to the day-10 email",
      body: "Ten days after you enrolled we'll email you a check-in with your real progress. Reply to it. We read every one and improvements ship from your feedback.",
      tone: "lime",
    },
    colors,
  );
}
