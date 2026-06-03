import { jsPDF } from "jspdf";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const COLORS = {
  white: "#ffffff",
  stone400: "#a8a29e",
  stone500: "#78716c",
  stone900: "#1c1917",
  lime400: "#a3e635",
} as const;

// A4 landscape at ~150 DPI for crisp output
const W = 1754;
const H = 1240;

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function drawCenteredText(
  ctx: CanvasRenderingContext2D,
  text: string,
  y: number,
  font: string,
  color: string,
) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, W / 2, y);
}

function drawWrappedName(
  ctx: CanvasRenderingContext2D,
  name: string,
  y: number,
  maxWidth: number,
): number {
  ctx.font = "bold 52px Inter, system-ui, sans-serif";
  ctx.fillStyle = COLORS.stone900;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const words = name.split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);

  const lineHeight = 62;
  const startY = y - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((line, i) => {
    ctx.fillText(line, W / 2, startY + i * lineHeight);
  });

  return startY + (lines.length - 1) * lineHeight;
}

async function renderCertificateCanvas(
  studentName: string,
  guideName: string,
  completionDate: string,
): Promise<HTMLCanvasElement> {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");

  // Background
  ctx.fillStyle = COLORS.white;
  ctx.fillRect(0, 0, W, H);

  const margin = 56;
  const inner = margin + 10;

  // Outer border
  ctx.strokeStyle = COLORS.stone900;
  ctx.lineWidth = 4;
  ctx.strokeRect(margin, margin, W - margin * 2, H - margin * 2);

  // Inner lime border
  ctx.strokeStyle = COLORS.lime400;
  ctx.lineWidth = 2;
  ctx.strokeRect(inner, inner, W - inner * 2, H - inner * 2);

  // Top / bottom accent bars
  ctx.fillStyle = COLORS.lime400;
  ctx.fillRect(W / 2 - 80, inner, 160, 6);
  ctx.fillRect(W / 2 - 80, H - inner - 6, 160, 6);

  // Logo + brand
  const logo = await loadImage("/logo.png");
  const brandY = 160;
  if (logo) {
    ctx.drawImage(logo, W / 2 - 110, brandY - 22, 44, 44);
  }
  ctx.font = "bold 32px Inter, system-ui, sans-serif";
  ctx.fillStyle = COLORS.stone900;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText("InternHack", W / 2 - 56, brandY);

  // Label
  drawCenteredText(
    ctx,
    "CERTIFICATE OF COMPLETION",
    240,
    "600 18px ui-monospace, monospace",
    COLORS.stone500,
  );

  drawCenteredText(ctx, "Presented to", 310, "22px Inter, system-ui, sans-serif", COLORS.stone500);

  const nameBottom = drawWrappedName(ctx, studentName, 400, W - 280);

  // Lime divider
  ctx.fillStyle = COLORS.lime400;
  ctx.fillRect(W / 2 - 48, nameBottom + 36, 96, 5);

  drawCenteredText(
    ctx,
    "for successfully completing the",
    nameBottom + 90,
    "22px Inter, system-ui, sans-serif",
    COLORS.stone500,
  );

  drawCenteredText(
    ctx,
    guideName,
    nameBottom + 140,
    "bold 30px Inter, system-ui, sans-serif",
    COLORS.stone900,
  );

  // Lime underline under guide name
  const guideWidth = ctx.measureText(guideName).width;
  ctx.fillStyle = COLORS.lime400;
  ctx.fillRect(W / 2 - guideWidth / 2, nameBottom + 158, guideWidth, 6);

  drawCenteredText(
    ctx,
    completionDate,
    nameBottom + 210,
    "22px Inter, system-ui, sans-serif",
    COLORS.stone500,
  );

  drawCenteredText(
    ctx,
    "INTERNHACK · OPEN SOURCE LEARNING",
    H - margin - 36,
    "14px ui-monospace, monospace",
    COLORS.stone400,
  );

  return canvas;
}

export interface GuideCertificateData {
  studentName: string;
  guideName: string;
  completionDate: string;
}

export async function downloadGuideCertificate(
  data: GuideCertificateData,
): Promise<void> {
  const { studentName, guideName, completionDate } = data;
  const dateStr = new Date().toISOString().slice(0, 10);
  const filename = `internhack-${slugify(guideName)}-certificate-${dateStr}.pdf`;

  const canvas = await renderCertificateCanvas(
    studentName || "Student",
    guideName,
    completionDate,
  );

  const imgData = canvas.toDataURL("image/jpeg", 0.95);
  const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  pdf.addImage(imgData, "JPEG", 0, 0, 297, 210);
  pdf.save(filename);
}
