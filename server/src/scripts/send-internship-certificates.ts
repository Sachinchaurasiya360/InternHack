/**
 * One-off script: generate Certificate of Internship + Letter of Recommendation PDFs
 * for two interns and send them via the existing Resend email infrastructure.
 *
 * Run from the server/ directory:
 *   npx tsx src/scripts/send-internship-certificates.ts
 */
import "dotenv/config";
import PDFDocument from "pdfkit";
import path from "path";
import { fileURLToPath } from "url";
import { sendEmail } from "../utils/email.utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Assets are at <repo-root>/client/public/; script is 3 dirs up from repo root
const ROOT = path.resolve(__dirname, "../../..");
const LOGO = path.join(ROOT, "client/public/logo.png");
const SIG = path.join(ROOT, "client/public/sachin_signature.png");

// ── Shared palette ─────────────────────────────────────────────────────────
const C = {
  white: "#ffffff",
  ink: "#0f0f0f",
  body: "#27272a",
  mute: "#52525b",
  faint: "#a1a1aa",
  faintest: "#d4d4d8",
  accent: "#4d7c0f",
  accentSoft: "#84cc16",
  band: "#0a0a0a",
};

// ── Helpers ────────────────────────────────────────────────────────────────
type Doc = InstanceType<typeof PDFDocument>;

function tryImage(doc: Doc, p: string, x: number, y: number, opts: object) {
  try { doc.image(p, x, y, opts); } catch { /* asset missing */ }
}

/** L-shaped corner tick at each corner of the given rect. */
function corners(doc: Doc, x: number, y: number, w: number, h: number, sz = 16) {
  doc.save().strokeColor(C.accent).lineWidth(1.8);
  doc.moveTo(x, y + sz).lineTo(x, y).lineTo(x + sz, y).stroke();
  doc.moveTo(x + w - sz, y).lineTo(x + w, y).lineTo(x + w, y + sz).stroke();
  doc.moveTo(x, y + h - sz).lineTo(x, y + h).lineTo(x + sz, y + h).stroke();
  doc.moveTo(x + w - sz, y + h).lineTo(x + w, y + h).lineTo(x + w, y + h - sz).stroke();
  doc.restore();
}

// ── CERTIFICATE (Landscape A4: 841.89 × 595.28) ─────────────────────────────
function genCertificate(internName: string): Promise<Buffer> {
  const W = 841.89, H = 595.28, cx = W / 2, M = 50;

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", layout: "landscape", margin: 0, bufferPages: true,
      info: { Title: `Certificate of Internship – ${internName}`, Author: "InternHack" },
    });

    const chunks: Buffer[] = [];
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    // ── Background ────────────────────────────────────────────────────────
    doc.rect(0, 0, W, H).fill(C.white);
    doc.rect(0, 88, W, H - 88 - 48).fill("#f9fafb");

    // ── Decorative border (drawn before band so band covers top portion) ──
    doc.save().strokeColor(C.accent).lineWidth(2)
      .rect(16, 16, W - 32, H - 32).stroke().restore();
    doc.save().strokeColor(C.accentSoft).lineWidth(0.5)
      .rect(22, 22, W - 44, H - 44).stroke().restore();
    corners(doc, 28, 28, W - 56, H - 56, 18);

    // ── Header band ───────────────────────────────────────────────────────
    const BAND = 88;
    doc.rect(0, 0, W, BAND).fill(C.band);

    // Logo left in band
    tryImage(doc, LOGO, 38, 18, { height: 50, fit: [50, 50] });

    // "INTERNHACK" — positioned below the border lines (Y=30) so they don't intersect
    doc.save()
      .fillColor(C.accentSoft).font("Helvetica-Bold").fontSize(12)
      .text("INTERNHACK", M, 30, { characterSpacing: 4, width: W - M * 2, align: "center" })
      .restore();

    doc.save()
      .fillColor("#9ca3af").font("Helvetica").fontSize(8)
      .text("internhack.xyz  ·  Empowering the Next Generation of Professionals", M, 50, {
        width: W - M * 2, align: "center",
      }).restore();

    doc.save()
      .fillColor("#6b7280").font("Helvetica").fontSize(7.5)
      .text("CERTIFICATE OF INTERNSHIP", M, 66, {
        characterSpacing: 2.5, width: W - M * 2, align: "center",
      }).restore();

    // ── Certificate title ─────────────────────────────────────────────────
    doc.fillColor(C.ink).font("Helvetica-Bold").fontSize(24)
      .text("Certificate of Internship", M, 102, { width: W - M * 2, align: "center" });

    // Jewel rule
    doc.save().strokeColor(C.faintest).lineWidth(0.7)
      .moveTo(cx - 100, 134).lineTo(cx - 12, 134).stroke()
      .moveTo(cx + 12, 134).lineTo(cx + 100, 134).stroke().restore();
    doc.rect(cx - 9, 131, 18, 6).fill(C.accent);

    // ── Body ──────────────────────────────────────────────────────────────
    doc.fillColor(C.mute).font("Helvetica").fontSize(10.5)
      .text("This is to certify that", M, 148, { width: W - M * 2, align: "center" });

    doc.fillColor(C.ink).font("Times-Bold").fontSize(26)
      .text(internName, M, 165, { width: W - M * 2, align: "center" });

    // Name underline
    const uW = 260;
    doc.save().strokeColor(C.accent).lineWidth(1.2)
      .moveTo(cx - uW / 2, 200).lineTo(cx + uW / 2, 200).stroke().restore();

    doc.fillColor(C.mute).font("Helvetica").fontSize(10)
      .text("has successfully completed a four-month internship as a", M, 210, {
        width: W - M * 2, align: "center",
      });

    doc.fillColor(C.accent).font("Helvetica-Bold").fontSize(18)
      .text("Data Analytics Intern", M, 229, { characterSpacing: 0.8, width: W - M * 2, align: "center" });

    doc.fillColor(C.body).font("Helvetica").fontSize(10)
      .text("at InternHack", M, 257, { width: W - M * 2, align: "center" });

    doc.fillColor(C.faint).font("Helvetica").fontSize(9.5)
      .text("January 5, 2026  –  May 5, 2026", M, 272, { width: W - M * 2, align: "center" });

    // Separator rule
    doc.save().strokeColor(C.faintest).lineWidth(0.6)
      .moveTo(cx - 130, 293).lineTo(cx + 130, 293).stroke().restore();

    // ── Description ───────────────────────────────────────────────────────
    const firstName = internName.split(" ")[0];
    const desc =
      `Throughout this engagement, ${firstName} contributed meaningfully to data pipeline development, ` +
      `business intelligence dashboards, and data-driven reporting initiatives at InternHack. ` +
      `Their analytical acumen, attention to detail, and commitment to excellence consistently ` +
      `added value to our team and helped drive informed decisions across the organization.`;

    doc.fillColor(C.mute).font("Helvetica").fontSize(9)
      .text(desc, M + 50, 302, { width: W - (M + 50) * 2, align: "center", lineGap: 2.5 });

    // ── Signature area ────────────────────────────────────────────────────
    const sigY = 400;

    // Left: Issue date
    doc.fillColor(C.faint).font("Helvetica").fontSize(7.5)
      .text("ISSUED ON", M + 24, sigY, { characterSpacing: 1 });
    doc.fillColor(C.body).font("Helvetica-Bold").fontSize(9)
      .text("May 5, 2026", M + 24, sigY + 13);

    // Right: Signature
    const sigX = W - M - 170;
    tryImage(doc, SIG, sigX + 10, sigY - 36, { width: 140, height: 48, fit: [140, 48] });
    doc.save().strokeColor(C.faintest).lineWidth(0.8)
      .moveTo(sigX, sigY + 16).lineTo(sigX + 160, sigY + 16).stroke().restore();
    doc.fillColor(C.body).font("Helvetica-Bold").fontSize(9)
      .text("Sachin Chaurasiya", sigX, sigY + 22, { width: 160 });
    doc.fillColor(C.faint).font("Helvetica").fontSize(8)
      .text("Founder, InternHack", sigX, sigY + 35, { width: 160 });

    // ── Footer (always on page 0) ─────────────────────────────────────────
    doc.switchToPage(0);
    doc.rect(0, H - 48, W, 48).fill(C.band);
    doc.save().fillColor("#6b7280").font("Helvetica").fontSize(7)
      .text(
        `INTERNHACK  ·  CERTIFICATE OF INTERNSHIP  ·  ${internName.toUpperCase()}`,
        M, H - 30, { characterSpacing: 1, width: W - M * 2, align: "center" },
      ).restore();

    doc.end();
  });
}

// ── LETTER OF RECOMMENDATION (Portrait A4: 595.28 × 841.89) ─────────────────
function genLOR(internName: string): Promise<Buffer> {
  const W = 595.28, H = 841.89, M = 54;
  const TW = W - M * 2;
  const firstName = internName.split(" ")[0];
  const initials = internName.split(" ").map((w: string) => w[0]).join("");

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", layout: "portrait", margin: 0, bufferPages: true,
      info: { Title: `Letter of Recommendation – ${internName}`, Author: "InternHack" },
    });

    const chunks: Buffer[] = [];
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    // ── Background ────────────────────────────────────────────────────────
    doc.rect(0, 0, W, H).fill(C.white);

    // ── Header band ───────────────────────────────────────────────────────
    const BAND = 80;
    doc.rect(0, 0, W, BAND).fill(C.band);
    tryImage(doc, LOGO, 36, 13, { height: 52, fit: [52, 52] });

    doc.save()
      .fillColor(C.accentSoft).font("Helvetica-Bold").fontSize(13)
      .text("INTERNHACK", M, 18, { characterSpacing: 3, width: W - M * 2, align: "center" })
      .restore();
    doc.save()
      .fillColor("#9ca3af").font("Helvetica").fontSize(8)
      .text("internhack.xyz  ·  Empowering the Next Generation of Professionals", M, 40, {
        width: W - M * 2, align: "center",
      }).restore();
    doc.save()
      .fillColor("#6b7280").font("Helvetica").fontSize(7.5)
      .text("LETTER OF RECOMMENDATION", M, 58, {
        characterSpacing: 2, width: W - M * 2, align: "center",
      }).restore();

    // Accent bar below header
    doc.rect(0, BAND, W, 3).fill(C.accent);

    // Left accent stripe
    doc.rect(M - 16, BAND + 3, 3, H - BAND - 3 - 48).fill("#e4e4e7");

    // ── Letter meta ───────────────────────────────────────────────────────
    let y = BAND + 22;

    doc.fillColor(C.faint).font("Helvetica").fontSize(9)
      .text("Date: May 5, 2026", M, y, { width: TW });
    y += 15;
    doc.fillColor(C.faint).font("Helvetica").fontSize(9)
      .text(`Ref: IH/LOR/DA/${initials}/2026`, M, y, { width: TW });
    y += 26;

    doc.fillColor(C.body).font("Helvetica-Bold").fontSize(10.5)
      .text("To Whom It May Concern,", M, y, { width: TW });
    y += 20;

    doc.fillColor(C.accent).font("Helvetica-Bold").fontSize(10)
      .text(`Re: Letter of Recommendation for ${internName}`, M, y, { width: TW });
    y += 22;

    // ── Body paragraphs ───────────────────────────────────────────────────
    const paraStyle = { width: TW, align: "justify" as const, lineGap: 3 };

    const paras = [
      `I am pleased to recommend ${internName}, who served as a Data Analytics Intern at InternHack ` +
      `from January 5, 2026 to May 5, 2026. Having worked closely with ${firstName} throughout this period, ` +
      `I can confidently attest to their exceptional professional capabilities and strong work ethic.`,

      `During the internship, ${firstName} demonstrated outstanding proficiency in data analysis, visualization, ` +
      `and business intelligence. They designed and maintained analytical dashboards that delivered real-time ` +
      `insights to our product and operations teams, and built data pipelines with high accuracy and efficiency. ` +
      `Their analytical contributions directly supported strategic decision-making at InternHack.`,

      `Beyond technical expertise, ${firstName} was a collaborative team player who communicated effectively, ` +
      `consistently met deadlines, and volunteered for responsibilities beyond their assigned scope. ` +
      `Their proactive mindset and eagerness to learn made them a genuinely valued member of our team.`,

      `I wholeheartedly recommend ${internName} for any professional role, academic program, or opportunity ` +
      `in data analytics or a related field. ${firstName}'s dedication and professionalism will be an asset ` +
      `to any organization. Please feel free to reach me at sachin@internhack.xyz for further inquiries.`,
    ];

    for (const para of paras) {
      doc.fillColor(C.body).font("Helvetica").fontSize(10).text(para, M, y, paraStyle);
      y = doc.y + 14;
    }

    // ── Signature ─────────────────────────────────────────────────────────
    y += 6;
    doc.fillColor(C.body).font("Helvetica").fontSize(10)
      .text("Sincerely,", M, y, { width: TW });
    y += 18;

    tryImage(doc, SIG, M, y, { width: 130, height: 50, fit: [130, 50] });
    y += 56;

    doc.save().strokeColor(C.faintest).lineWidth(0.8)
      .moveTo(M, y).lineTo(M + 155, y).stroke().restore();
    y += 8;

    doc.fillColor(C.ink).font("Helvetica-Bold").fontSize(10)
      .text("Sachin Chaurasiya", M, y, { width: TW });
    y += 15;
    doc.fillColor(C.mute).font("Helvetica").fontSize(9.5)
      .text("Founder, InternHack", M, y, { width: TW });
    y += 14;
    doc.fillColor(C.faint).font("Helvetica").fontSize(9)
      .text("sachin@internhack.xyz  ·  internhack.xyz", M, y, { width: TW });

    // ── Footer (always on page 0) ─────────────────────────────────────────
    doc.switchToPage(0);
    doc.rect(0, H - 48, W, 48).fill(C.band);
    doc.rect(0, H - 48, W, 2).fill(C.accent);
    doc.save().fillColor("#6b7280").font("Helvetica").fontSize(7)
      .text(
        `INTERNHACK  ·  LETTER OF RECOMMENDATION  ·  ${internName.toUpperCase()}`,
        M, H - 28, { characterSpacing: 1, width: W - M * 2, align: "center" },
      ).restore();

    doc.end();
  });
}

// ── Email HTML ─────────────────────────────────────────────────────────────
function emailHtml(internName: string): string {
  const first = internName.split(" ")[0];
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0"
             style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08);">
        <tr>
          <td style="background:#0a0a0a;padding:26px 40px;text-align:center;">
            <p style="margin:0;color:#84cc16;font-size:13px;letter-spacing:3px;font-weight:700;">INTERNHACK</p>
            <p style="margin:5px 0 0;color:#a1a1aa;font-size:11px;">internhack.xyz</p>
          </td>
        </tr>
        <tr>
          <td style="padding:34px 46px;">
            <h1 style="margin:0 0 6px;font-size:20px;color:#0f0f0f;">Congratulations, ${first}!</h1>
            <p style="margin:0 0 20px;font-size:13px;color:#a1a1aa;border-bottom:1px solid #f4f4f5;padding-bottom:18px;">
              Your internship documents are attached below.
            </p>
            <p style="margin:0 0 14px;font-size:14px;color:#3f3f46;line-height:1.7;">
              On behalf of the InternHack team, I am delighted to share your official internship documents.
              Please find attached:
            </p>
            <ul style="margin:0 0 20px;padding-left:20px;font-size:14px;color:#3f3f46;line-height:2;">
              <li><strong>Certificate of Internship</strong> (PDF)</li>
              <li><strong>Letter of Recommendation</strong> (PDF)</li>
            </ul>
            <table cellpadding="0" cellspacing="0"
                   style="background:#f7fee7;border:1px solid #d9f99d;border-radius:6px;padding:16px 20px;margin-bottom:20px;width:100%;">
              <tr><td>
                <p style="margin:0 0 8px;font-size:11px;color:#4d7c0f;font-weight:700;letter-spacing:1px;text-transform:uppercase;">
                  Internship Summary
                </p>
                <p style="margin:0 0 4px;font-size:13px;color:#27272a;"><strong>Intern:</strong> ${internName}</p>
                <p style="margin:0 0 4px;font-size:13px;color:#27272a;"><strong>Role:</strong> Data Analytics Intern</p>
                <p style="margin:0 0 4px;font-size:13px;color:#27272a;"><strong>Organization:</strong> InternHack</p>
                <p style="margin:0;font-size:13px;color:#27272a;"><strong>Duration:</strong> January 5, 2026 – May 5, 2026</p>
              </td></tr>
            </table>
            <p style="margin:0 0 14px;font-size:14px;color:#3f3f46;line-height:1.7;">
              Your contributions during this internship have been truly impressive. We are proud
              to have had you as part of the InternHack family and wish you great success ahead.
            </p>
            <p style="margin:22px 0 0;font-size:14px;color:#52525b;">
              Warm regards,<br/>
              <strong>Sachin Chaurasiya</strong><br/>
              Founder, InternHack<br/>
              <span style="font-size:12px;color:#a1a1aa;">sachin@internhack.xyz</span>
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#fafafa;border-top:1px solid #e4e4e7;padding:16px 46px;text-align:center;">
            <p style="margin:0;font-size:11px;color:#a1a1aa;">InternHack &nbsp;·&nbsp; internhack.xyz</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Main ───────────────────────────────────────────────────────────────────
const RECIPIENT = "mrsachinchaurasiya@gmail.com";
const INTERNS = ["Aayush Naik", "Mehul Pawde"];

async function main() {
  console.log("Generating and sending internship documents...\n");

  for (const name of INTERNS) {
    const slug = name.replace(/\s+/g, "_");
    console.log(`[${name}] Generating Certificate...`);
    const cert = await genCertificate(name);
    console.log(`[${name}] Generating LOR...`);
    const lor = await genLOR(name);

    console.log(`[${name}] Sending to ${RECIPIENT}...`);
    await sendEmail({
      to: RECIPIENT,
      subject: `Internship Certificate & LOR – ${name}`,
      html: emailHtml(name),
      attachments: [
        { filename: `${slug}_Certificate_of_Internship.pdf`, content: cert, contentType: "application/pdf" },
        { filename: `${slug}_Letter_of_Recommendation.pdf`, content: lor, contentType: "application/pdf" },
      ],
    });
    console.log(`[${name}] Sent.\n`);
  }

  console.log("Done. All documents sent.");
}

main().catch((err) => { console.error("Failed:", err); process.exit(1); });
