import type PDFDocument from "pdfkit";
import type { RoadmapPdfInput } from "../types.js";
import type { ColorsType } from "../utils/colors.js";
import {
  A4_WIDTH,
  MARGIN,
  pageBreakIfNeeded,
  stars,
  difficultyLabel,
  drawCallout,
} from "../utils/layout.js";
import { drawMarkdownLite } from "../utils/markdown-lite.js";

export function drawSections(doc: PDFKit.PDFDocument, input: RoadmapPdfInput, colors: ColorsType) {
  for (const [sIdx, section] of input.sections.entries()) {
    drawSectionHeader(doc, section, sIdx, colors);

    for (const [tIdx, topic] of section.topics.entries()) {
      drawTopicBlock(doc, topic, tIdx, colors);
    }
  }
}

/**
 * Section header is rendered inline rather than on a dedicated page.
 * We only force a page break if there isn't enough room for the heading
 * plus the start of the first topic.
 */
function drawSectionHeader(
  doc: PDFKit.PDFDocument,
  section: RoadmapPdfInput["sections"][number],
  sIdx: number,
  colors: ColorsType,
) {
  const contentW = A4_WIDTH - MARGIN * 2;

  pageBreakIfNeeded(doc, 160);

  doc.moveDown(0.4);
  doc.rect(MARGIN, doc.y, 60, 2).fill(colors.accent);
  doc.moveDown(0.2);

  doc.fillColor(colors.accent).fontSize(9).font("Helvetica-Bold");
  doc.text(`SECTION ${String(sIdx + 1).padStart(2, "0")}`, MARGIN, doc.y, {
    characterSpacing: 1.8,
    width: contentW,
  });

  doc.fillColor(colors.ink).fontSize(18).font("Helvetica-Bold");
  doc.text(section.title, MARGIN, doc.y + 2, { width: contentW, lineGap: 1 });

  doc.fillColor(colors.mute).fontSize(10).font("Helvetica");
  doc.text(section.summary, MARGIN, doc.y + 2, { width: contentW, lineGap: 2 });

  doc.moveDown(0.4);
}

export function drawTopicBlock(
  doc: PDFKit.PDFDocument,
  topic: RoadmapPdfInput["sections"][number]["topics"][number],
  tIdx: number,
  colors: ColorsType,
) {
  const contentW = A4_WIDTH - MARGIN * 2;

  // Only break if the topic header (eyebrow + title + summary) won't fit
  pageBreakIfNeeded(doc, 100);

  // Topic header
  doc.fillColor(colors.faint).fontSize(7.5).font("Helvetica-Bold");
  doc.text(`TOPIC ${String(tIdx + 1).padStart(2, "0")}`, MARGIN, doc.y, {
    characterSpacing: 1.6,
    width: contentW,
  });

  doc.fillColor(colors.ink).fontSize(13).font("Helvetica-Bold");
  doc.text(topic.title, MARGIN, doc.y + 1, { width: contentW, lineGap: 1 });

  // Meta line (compact)
  doc.fillColor(colors.faint).fontSize(8).font("Helvetica");
  doc.text(
    `${topic.estimatedHours} hrs   ${stars(topic.difficulty)}   ${difficultyLabel(topic.difficulty)}`,
    MARGIN,
    doc.y + 1,
    { width: contentW },
  );

  // Summary
  doc.fillColor(colors.mute).fontSize(9.5).font("Helvetica-Oblique");
  doc.text(topic.summary, MARGIN, doc.y + 3, { width: contentW, lineGap: 2 });
  doc.moveDown(0.3);

  // Long-form content (markdown lite, tighter)
  if (topic.contentMd) {
    drawMarkdownLite(doc, topic.contentMd, colors);
    doc.moveDown(0.15);
  }

  // Resources
  if (topic.resources.length > 0) {
    pageBreakIfNeeded(doc, 50);
    doc.fillColor(colors.faint).fontSize(8).font("Helvetica-Bold");
    doc.text("RESOURCES", MARGIN, doc.y, { characterSpacing: 1.6, width: contentW });
    doc.moveDown(0.15);

    for (const r of topic.resources) {
      drawResource(doc, r, colors);
    }
    doc.moveDown(0.15);
  }

  // Mini project callout
  if (topic.miniProject) {
    drawCallout(
      doc,
      {
        label: "build",
        title: "Mini project",
        body: topic.miniProject,
        tone: "lime",
      },
      colors,
    );
    doc.moveDown(0.15);
  }

  // Self-check callout
  if (topic.selfCheck) {
    drawCallout(
      doc,
      {
        label: "check",
        title: "Self-check",
        body: topic.selfCheck,
        tone: "amber",
      },
      colors,
    );
    doc.moveDown(0.2);
  }

  // Topic bottom rule
  doc.rect(MARGIN, doc.y, contentW, 0.5).fill(colors.faintest);
  doc.moveDown(0.35);
}

export function drawResource(
  doc: PDFKit.PDFDocument,
  r: { kind: string; title: string; url: string; source: string | null },
  colors: ColorsType,
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
  doc.rect(MARGIN, startY + 1, KIND_W, 14).fill(colors.accentBg).stroke(colors.accentBorder);
  doc.fillColor(colors.accent).fontSize(7).font("Helvetica-Bold");
  doc.text(r.kind, MARGIN, startY + 5, {
    width: KIND_W,
    align: "center",
    characterSpacing: 0.8,
  });

  // Title (with hyperlink baked in)
  doc.fillColor(colors.ink).fontSize(9).font("Helvetica-Bold");
  doc.text(r.title, titleX, startY, { width: titleW, link: r.url, underline: false });

  // Source line (compact, single line, ellipsis if too long)
  doc.fillColor(colors.faint).fontSize(7.5).font("Helvetica");
  const sub = r.source ? `${r.source}  ${shortenUrl(r.url)}` : shortenUrl(r.url);
  doc.text(sub, titleX, doc.y, { width: titleW, ellipsis: true, lineBreak: false });

  doc.fillColor(colors.body);
  doc.y = startY + blockH;
}

export function shortenUrl(url: string): string {
  try {
    const u = new URL(url);
    return `${u.host}${u.pathname.length > 1 ? u.pathname : ""}`.slice(0, 80);
  } catch {
    return url.slice(0, 80);
  }
}
