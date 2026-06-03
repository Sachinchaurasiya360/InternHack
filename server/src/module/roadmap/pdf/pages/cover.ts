import type PDFDocument from "pdfkit";
import type { RoadmapPdfInput } from "../types.js";
import type { ColorsType } from "../utils/colors.js";
import {
  A4_WIDTH,
  MARGIN,
  drawStatStrip,
  bulletLine,
  drawSubheading,
  goalLabel,
  expLabel,
  fmtDate,
} from "../utils/layout.js";

export function drawCover(doc: PDFKit.PDFDocument, input: RoadmapPdfInput, colors: ColorsType) {
  const w = A4_WIDTH;
  const contentW = w - MARGIN * 2;

  // Top band
  doc.rect(0, 0, w, 160).fill(colors.coverBand);

  doc.fillColor("#ffffff").fontSize(10).font("Helvetica-Bold");
  doc.text("INTERNHACK", MARGIN, 40, { characterSpacing: 2.5, width: contentW });

  doc.fillColor(colors.accentSoft).fontSize(9).font("Helvetica-Bold");
  doc.text("PERSONALIZED ROADMAP", MARGIN, 56, { characterSpacing: 2, width: contentW });

  doc.fillColor("#ffffff").fontSize(28).font("Helvetica-Bold");
  doc.text("Your learning path", MARGIN, 80, { width: contentW, lineBreak: true });

  doc.fontSize(12).font("Helvetica").fillOpacity(0.85);
  doc.text(`Built for ${input.user.name}`, MARGIN, 130, { width: contentW });
  doc.fillOpacity(1);

  // Roadmap title block
  doc.fillColor(colors.ink).fontSize(26).font("Helvetica-Bold");
  doc.text(input.roadmap.title, MARGIN, 200, { width: contentW, lineGap: 2 });

  // Short description
  doc.fillColor(colors.mute).fontSize(11).font("Helvetica");
  doc.text(input.roadmap.shortDescription, MARGIN, doc.y + 8, {
    width: contentW,
    lineGap: 3,
  });

  // Stat strip
  const stripY = doc.y + 18;
  drawStatStrip(
    doc,
    MARGIN,
    stripY,
    contentW,
    [
      { label: "TOTAL", value: `${input.roadmap.estimatedHours}h` },
      { label: "TOPICS", value: String(input.sections.reduce((s, sec) => s + sec.topics.length, 0)) },
      { label: "SECTIONS", value: String(input.sections.length) },
      { label: "WEEKS", value: String(input.weeklyPlan.length || 1) },
    ],
    colors,
  );

  doc.y = stripY + 60;

  // Plan card
  drawPlanCard(doc, input, colors);

  // Outcomes
  if (input.roadmap.outcomes.length > 0) {
    doc.moveDown(0.6);
    drawSubheading(doc, "What you will be able to do", colors);
    doc.fillColor(colors.body).fontSize(10).font("Helvetica");
    for (const o of input.roadmap.outcomes) {
      bulletLine(doc, o, colors);
    }
  }

  // Prerequisites
  if (input.roadmap.prerequisites.length > 0) {
    doc.moveDown(0.6);
    drawSubheading(doc, "Before you start", colors);
    doc.fillColor(colors.body).fontSize(10).font("Helvetica");
    for (const p of input.roadmap.prerequisites) {
      bulletLine(doc, p, colors);
    }
  }
}

function drawPlanCard(doc: PDFKit.PDFDocument, input: RoadmapPdfInput, colors: ColorsType) {
  const w = A4_WIDTH;
  const margin = MARGIN;
  const contentW = w - margin * 2;
  const cardY = doc.y;
  const cardH = 150;

  // Card frame
  doc.rect(margin, cardY, contentW, cardH).fill(colors.bg).stroke(colors.border);

  // Inner padding
  const pad = 18;
  const innerW = contentW - pad * 2;
  const colW = innerW / 2 - 8;

  const labelKV = (label: string, value: string, x: number, y: number) => {
    doc.fillColor(colors.faint).fontSize(8).font("Helvetica-Bold");
    doc.text(label.toUpperCase(), x, y, { characterSpacing: 1.5, width: colW });
    doc.fillColor(colors.ink).fontSize(12).font("Helvetica");
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
