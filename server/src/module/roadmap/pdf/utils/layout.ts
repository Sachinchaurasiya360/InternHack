import type PDFDocument from "pdfkit";
import type { ColorsType } from "./colors.js";

export const A4_WIDTH = 595.28;
export const A4_HEIGHT = 841.89;
export const MARGIN = 48;

export const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export const fmtShortDate = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

export function pageBreakIfNeeded(doc: PDFKit.PDFDocument, neededSpace: number) {
  // Footer reserves 36pt at the bottom; use that as the floor for content.
  const bottomFloor = A4_HEIGHT - MARGIN - 24;
  if (doc.y + neededSpace > bottomFloor) {
    doc.addPage();
  }
}

export function drawPageHeading(doc: PDFKit.PDFDocument, label: string, colors: ColorsType) {
  const w = A4_WIDTH;
  const margin = MARGIN;
  doc.fillColor(colors.faint).fontSize(9).font("Helvetica-Bold");
  doc.text(label.toUpperCase(), margin, margin, { characterSpacing: 1.8, width: w - margin * 2 });
  doc.moveDown(0.1);
  doc.fillColor(colors.ink).fontSize(22).font("Helvetica-Bold");
  doc.text(label, margin, doc.y, { width: w - margin * 2 });
  doc.rect(margin, doc.y + 4, 40, 2).fill(colors.accent);
  doc.fillColor(colors.ink);
  doc.moveDown(0.9);
}

export function drawSubheading(doc: PDFKit.PDFDocument, label: string, colors: ColorsType) {
  doc.fillColor(colors.ink).fontSize(13).font("Helvetica-Bold");
  doc.text(label, MARGIN, doc.y, { width: A4_WIDTH - MARGIN * 2 });
  doc.moveDown(0.3);
}

export function drawStatStrip(
  doc: PDFKit.PDFDocument,
  x: number,
  y: number,
  width: number,
  cells: { label: string; value: string }[],
  colors: ColorsType,
) {
  const cellW = width / cells.length;
  doc.rect(x, y, width, 50).fill(colors.bg).stroke(colors.border);
  cells.forEach((c, i) => {
    const cx = x + i * cellW;
    if (i > 0) {
      doc.rect(cx, y + 8, 0.5, 34).fill(colors.border);
    }
    doc.fillColor(colors.faint).fontSize(8).font("Helvetica-Bold");
    doc.text(c.label, cx, y + 12, {
      width: cellW,
      align: "center",
      characterSpacing: 1.5,
    });
    doc.fillColor(colors.ink).fontSize(16).font("Helvetica-Bold");
    doc.text(c.value, cx, y + 25, { width: cellW, align: "center" });
  });
}

export function bulletLine(doc: PDFKit.PDFDocument, text: string, colors: ColorsType) {
  pageBreakIfNeeded(doc, 18);
  doc.fillColor(colors.body).fontSize(10).font("Helvetica");
  doc.text(`•  ${text}`, MARGIN + 4, doc.y, {
    indent: 0,
    width: A4_WIDTH - MARGIN * 2 - 4,
    lineGap: 2,
  });
  doc.moveDown(0.15);
}

export function drawCallout(
  doc: PDFKit.PDFDocument,
  args: { label: string; title: string; body: string; tone: "lime" | "amber" },
  colors: ColorsType,
) {
  const contentW = A4_WIDTH - MARGIN * 2;
  const tone = args.tone === "lime"
    ? { bg: colors.accentBg, border: colors.accentBorder, ink: colors.accent }
    : { bg: colors.amberBg, border: colors.amberBorder, ink: colors.amber };

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
  doc.fillColor(colors.ink).fontSize(10).font("Helvetica-Bold");
  doc.text(`   ${args.title}`, { width: innerW - 60 });

  doc.fillColor(colors.body).fontSize(9).font("Helvetica");
  doc.text(args.body, MARGIN + padX, startY + padTop + headerH + 4, {
    width: innerW,
    lineGap: 1.5,
  });

  doc.y = startY + blockH;
}

export function stampFooters(doc: PDFKit.PDFDocument, colors: ColorsType) {
  const range = doc.bufferedPageRange();
  const total = range.count;

  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);

    const y = A4_HEIGHT - MARGIN + 4;
    doc.y = y - 2;

    doc.rect(MARGIN, y, A4_WIDTH - MARGIN * 2, 0.5).fill(colors.faintest);

    doc.fillColor(colors.faint).fontSize(8).font("Helvetica");
    doc.text("INTERNHACK · ROADMAP", MARGIN, y + 8, {
      characterSpacing: 1.5,
      width: (A4_WIDTH - MARGIN * 2) / 2,
      lineBreak: false,
    });
    doc.text(
      `Page ${i - range.start + 1} of ${total}`,
      MARGIN,
      y + 8,
      { width: A4_WIDTH - MARGIN * 2, align: "right", lineBreak: false },
    );
  }
}

export function stars(n: number): string {
  const filled = "★".repeat(Math.max(0, Math.min(5, n)));
  const empty = "☆".repeat(5 - Math.max(0, Math.min(5, n)));
  return filled + empty;
}

export function difficultyLabel(n: number): string {
  if (n <= 1) return "Easy";
  if (n === 2) return "Approachable";
  if (n === 3) return "Intermediate";
  if (n === 4) return "Challenging";
  return "Advanced";
}

export function goalLabel(g: string): string {
  switch (g) {
    case "JOB_READY": return "Get job ready";
    case "SIDE_PROJECT": return "Build a side project";
    case "SCHOOL": return "School / coursework";
    case "CURIOUS": return "Curious learner";
    default: return g;
  }
}

export function expLabel(e: string): string {
  switch (e) {
    case "NEW": return "Brand new";
    case "SOME": return "Some experience";
    case "EXPERIENCED": return "Experienced";
    default: return e;
  }
}
