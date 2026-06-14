import PDFDocument from "pdfkit";
import type { CertificateInput } from "./types.js";
import { getColors, DARK_COLORS } from "./utils/colors.js";
import { MARGIN } from "./utils/layout.js";

export async function generateCertificatePdf(input: CertificateInput): Promise<Buffer> {
  const colors = getColors(input.theme);

  return new Promise((resolve, reject) => {
    const W = 841.89; // A4 landscape width
    const H = 595.28; // A4 landscape height
    const cx = W / 2;

    const doc = new PDFDocument({
      size: "A4",
      layout: "landscape",
      margin: MARGIN,
      bufferPages: true,
      info: {
        Title: `Certificate of Completion – ${input.roadmapTitle}`,
        Author: "InternHack",
        Subject: "Roadmap completion certificate",
      },
    });

    if (input.theme === "dark") {
      doc.save();
      doc.rect(0, 0, W, H).fill(DARK_COLORS.pageBg);
      doc.restore();
    }

    const chunks: Buffer[] = [];
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    // Outer border
    doc.rect(24, 24, W - 48, H - 48).lineWidth(3).stroke(colors.accent);
    doc.rect(32, 32, W - 64, H - 64).lineWidth(1).stroke(colors.accentSoft);

    // Top band
    doc.rect(0, 0, W, 90).fill(colors.coverBand);

    // Platform name in band
    doc.fillColor(colors.accentSoft).fontSize(11).font("Helvetica-Bold");
    doc.text("INTERNHACK", MARGIN, 28, {
      characterSpacing: 3,
      width: W - MARGIN * 2,
      align: "center",
    });
    doc.fillColor("#ffffff").fontSize(9).font("Helvetica");
    doc.text("internhack.xyz  ·  Certificate of Completion", MARGIN, 48, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Title
    doc.fillColor(colors.ink).fontSize(34).font("Helvetica-Bold");
    doc.text("Certificate of Completion", MARGIN, 120, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Accent rule
    doc.rect(cx - 60, 166, 120, 2).fill(colors.accent);

    // "This certifies that"
    doc.fillColor(colors.mute).fontSize(12).font("Helvetica");
    doc.text("This certifies that", MARGIN, 185, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // User name
    doc.fillColor(colors.ink).fontSize(30).font("Helvetica-Bold");
    doc.text(input.userName, MARGIN, 210, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Underline the name
    const nameWidth = Math.min(
      doc.widthOfString(input.userName),
      380,
    );
    doc.rect(cx - nameWidth / 2, 250, nameWidth, 1).fill(colors.accent);

    // Body
    doc.fillColor(colors.mute).fontSize(12).font("Helvetica");
    doc.text("has successfully completed all topics in", MARGIN, 265, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Roadmap title
    doc.fillColor(colors.accent).fontSize(20).font("Helvetica-Bold");
    doc.text(input.roadmapTitle, MARGIN, 292, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Completion date
    const dateStr = input.completedAt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    doc.fillColor(colors.faint).fontSize(11).font("Helvetica");
    doc.text(`Completed on ${dateStr}`, MARGIN, 332, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Signature line
    doc.rect(cx - 80, H - 117, 160, 0.5).fill(colors.faintest);
    doc.fillColor(colors.faint).fontSize(9).font("Helvetica");
    doc.text("InternHack Team", MARGIN, H - 110, {
      width: W - MARGIN * 2,
      align: "center",
    });

    // Bottom footer rule
    doc.rect(MARGIN, H - 90, W - MARGIN * 2, 0.5).fill(colors.faintest);
    doc.fillColor(colors.faint).fontSize(7).font("Helvetica");
    doc.text(
      `INTERNHACK · CERTIFICATE OF COMPLETION · ${input.roadmapTitle.toUpperCase()}`,
      MARGIN,
      H - 80,
      { width: W - MARGIN * 2, align: "center", characterSpacing: 1 },
    );

    doc.end();
  });
}
