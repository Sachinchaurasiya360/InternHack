import { workerData, parentPort } from "worker_threads";
import { DOMMatrix } from "@napi-rs/canvas";
import { PDFParse } from "pdf-parse";

// pdfjs-dist (used internally by pdf-parse) reads DOMMatrix off the global scope
// even for plain text extraction. Node has no such global, so provide one here
// before pdf-parse touches pdfjs-dist internals (see: ReferenceError: DOMMatrix
// is not defined, thrown from pdfjs-dist/legacy/build/pdf.mjs on Vercel).
if (typeof globalThis.DOMMatrix === "undefined") {
  Object.assign(globalThis, { DOMMatrix });
}

interface WorkerData {
  buffer: ArrayBuffer;
  byteOffset: number;
  byteLength: number;
}

async function run() {
  const { buffer, byteOffset, byteLength } = workerData as WorkerData;
  // Reconstruct Buffer from the transferred ArrayBuffer (preserves offset/length).
  const buf = Buffer.from(buffer, byteOffset, byteLength);

  const parser = new PDFParse({ data: buf });
  try {
    const result = await parser.getText();
    parentPort?.postMessage({ text: result.text });
  } catch (err) {
    parentPort?.postMessage({ error: (err as Error).message });
  } finally {
    await parser.destroy();
  }
}

run();
