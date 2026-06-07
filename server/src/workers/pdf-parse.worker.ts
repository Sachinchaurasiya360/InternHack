import { workerData, parentPort } from "worker_threads";
import { PDFParse } from "pdf-parse";

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
