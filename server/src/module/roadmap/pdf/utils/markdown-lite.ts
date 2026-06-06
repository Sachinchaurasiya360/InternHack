import type PDFDocument from "pdfkit";
import type { ColorsType } from "./colors.js";
import { pageBreakIfNeeded, MARGIN, A4_WIDTH } from "./layout.js";

/**
 * Lightweight markdown handling: paragraphs split on blank lines, bullet
 * lines starting with "- " become bulleted text. Headings and code blocks
 * are not rendered (the seed content uses neither in the body).
 */
export function drawMarkdownLite(doc: PDFKit.PDFDocument, md: string, colors: ColorsType) {
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
        doc.fillColor(colors.body).fontSize(9).font("Helvetica");
        doc.text(`•  ${text}`, MARGIN + 4, doc.y, {
          width: A4_WIDTH - MARGIN * 2 - 4,
          lineGap: 1.5,
        });
        doc.moveDown(0.05);
      }
    } else {
      const para = lines.join(" ");
      pageBreakIfNeeded(doc, 20);
      doc.fillColor(colors.body).fontSize(9).font("Helvetica");
      doc.text(para, MARGIN, doc.y, { width: A4_WIDTH - MARGIN * 2, lineGap: 1.8 });
      doc.moveDown(0.2);
    }
  }
}
