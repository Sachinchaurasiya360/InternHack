import PDFDocument from "pdfkit";
import type { RoadmapPdfInput } from "./types.js";
import { getColors, DARK_COLORS, LIGHT_COLORS } from "./utils/colors.js";
import { A4_WIDTH, A4_HEIGHT, MARGIN, stampFooters } from "./utils/layout.js";
import { drawCover } from "./pages/cover.js";
import { drawTableOfContents } from "./pages/toc.js";
import { drawHowToUse } from "./pages/how-to-use.js";
import { drawPreflight } from "./pages/preflight.js";
import { drawWeeklyPlan } from "./pages/weekly-plan.js";
import { drawSections } from "./pages/sections.js";
import { drawAfterYouFinish } from "./pages/after-finish.js";

/**
 * Generate a personalized roadmap PDF and return it as a Buffer.
 *
 * Layout is hand-laid using PDFKit primitives. We use bufferPages so we can
 * stamp page numbers + footer onto every page after content rendering.
 */
export async function generateRoadmapPdf(input: RoadmapPdfInput): Promise<Buffer> {
  // Get the theme color palette (no mutable globals to avoid concurrent render collisions)
  const colors = getColors(input.theme);

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
    const slugToTopic = new Map<
      string,
      RoadmapPdfInput["sections"][number]["topics"][number] & { sectionTitle: string }
    >();
    for (const section of input.sections) {
      for (const topic of section.topics) {
        slugToTopic.set(topic.slug, { ...topic, sectionTitle: section.title });
      }
    }

    drawCover(doc, input, colors);
    drawTableOfContents(doc, input, colors);
    drawHowToUse(doc, input, colors);
    drawPreflight(doc, input, colors);
    drawWeeklyPlan(doc, input, slugToTopic, colors);
    drawSections(doc, input, colors);
    drawAfterYouFinish(doc, input, colors);

    stampFooters(doc, colors);

    doc.end();
  });
}
