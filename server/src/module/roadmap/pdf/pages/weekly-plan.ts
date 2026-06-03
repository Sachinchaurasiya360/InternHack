import type PDFDocument from "pdfkit";
import type { RoadmapPdfInput } from "../types.js";
import type { ColorsType } from "../utils/colors.js";
import {
  A4_WIDTH,
  MARGIN,
  drawPageHeading,
  pageBreakIfNeeded,
  fmtDate,
  fmtShortDate,
  stars,
} from "../utils/layout.js";

export function drawWeeklyPlan(
  doc: PDFKit.PDFDocument,
  input: RoadmapPdfInput,
  slugToTopic: Map<string, RoadmapPdfInput["sections"][number]["topics"][number] & { sectionTitle: string }>,
  colors: ColorsType,
) {
  doc.addPage();
  drawPageHeading(doc, "Your weekly plan", colors);

  doc.fillColor(colors.mute).fontSize(10).font("Helvetica");
  doc.text(
    `Topics packed into weekly batches at ${input.enrollment.hoursPerWeek} hours per week. Your target finish date is ${fmtDate(input.enrollment.targetEndDate)}.`,
    { width: A4_WIDTH - MARGIN * 2, lineGap: 2 },
  );
  doc.moveDown(0.8);

  if (input.weeklyPlan.length === 0) {
    doc.fillColor(colors.faint).fontSize(11).font("Helvetica-Oblique");
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
    doc.rect(MARGIN, barY, A4_WIDTH - MARGIN * 2, 28).fill(colors.accentBg);
    doc.fillColor(colors.accent).fontSize(10).font("Helvetica-Bold");
    doc.text(`WEEK ${week.week}`, MARGIN + 14, barY + 9, { characterSpacing: 1.5, width: 80 });
    doc.fillColor(colors.body).fontSize(10).font("Helvetica");
    doc.text(`${fmtShortDate(weekStart)} – ${fmtShortDate(weekEnd)}`, MARGIN + 100, barY + 9, {
      width: 200,
    });
    doc.fillColor(colors.mute).fontSize(10).font("Helvetica");
    doc.text(`${week.totalHours} hrs`, MARGIN, barY + 9, {
      width: A4_WIDTH - MARGIN * 2 - 14,
      align: "right",
    });
    doc.y = barY + 36;

    // Topics in the week, with full title + meta
    for (const slug of week.topicSlugs) {
      const topic = slugToTopic.get(slug);
      if (!topic) {
        doc.fillColor(colors.faint).fontSize(10).font("Helvetica");
        doc.text(`•  ${slug}`, MARGIN + 8, doc.y, { width: A4_WIDTH - MARGIN * 2 - 8 });
        doc.moveDown(0.2);
        continue;
      }

      pageBreakIfNeeded(doc, 30);
      doc.fillColor(colors.ink).fontSize(10.5).font("Helvetica-Bold");
      doc.text(`▸  ${topic.title}`, MARGIN + 8, doc.y, { width: A4_WIDTH - MARGIN * 2 - 80, ellipsis: true });
      const lineY = doc.y;
      doc.fillColor(colors.faint).fontSize(8).font("Helvetica");
      doc.text(`${topic.estimatedHours}h · ${stars(topic.difficulty)}`, MARGIN, lineY - 12, {
        width: A4_WIDTH - MARGIN * 2,
        align: "right",
      });
      doc.fillColor(colors.mute).fontSize(9).font("Helvetica");
      doc.text(topic.sectionTitle, MARGIN + 24, doc.y, {
        width: A4_WIDTH - MARGIN * 2 - 24,
        ellipsis: true,
      });
      doc.moveDown(0.5);
    }

    doc.moveDown(0.5);
  }
}
