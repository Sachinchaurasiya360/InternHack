import { workerData, parentPort } from "worker_threads";
// NOTE: pdfjs-dist and pdf-parse are loaded via dynamic import() inside run()
// so the DOMMatrix polyfill below is registered before pdfjs-dist's module-level
// code runs. Static ESM imports are hoisted and execute before any module body,
// so a static import here would cause "DOMMatrix is not defined" even with the
// polyfill class defined in this file.
// Dynamic imports are still statically analyzable string literals, so Vercel's
// build-time file tracer will still bundle pdf.worker.mjs into the deployment.

type MatrixLike = { a: number; b: number; c: number; d: number; e: number; f: number };

/**
 * Minimal pure-JS 2D affine DOMMatrix polyfill. pdfjs-dist's Node/legacy build
 * references DOMMatrix unconditionally at module load (a module-level scratch
 * constant) and, in its canvas-rendering/image-decoding paths only (never
 * plain text extraction), calls a handful of WHATWG DOMMatrix 2D methods.
 * A native canvas package (e.g. @napi-rs/canvas) can supply a spec-complete
 * DOMMatrix, but its native addon segfaults the whole process when loaded and
 * then unloaded inside a worker_thread — this worker runs per PDF and exits
 * after each parse, so that crash would take down every request sharing the
 * container. This polyfill covers exactly the 2D operations pdfjs-dist uses.
 */
class DOMMatrixPolyfill implements MatrixLike {
  a = 1;
  b = 0;
  c = 0;
  d = 1;
  e = 0;
  f = 0;

  constructor(init?: number[] | MatrixLike) {
    if (Array.isArray(init)) {
      [this.a, this.b, this.c, this.d, this.e, this.f] = init as [number, number, number, number, number, number];
    } else if (init) {
      ({ a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f } = init);
    }
  }

  multiplySelf(other: MatrixLike): this {
    const { a, b, c, d, e, f } = this;
    this.a = a * other.a + c * other.b;
    this.b = b * other.a + d * other.b;
    this.c = a * other.c + c * other.d;
    this.d = b * other.c + d * other.d;
    this.e = a * other.e + c * other.f + e;
    this.f = b * other.e + d * other.f + f;
    return this;
  }

  preMultiplySelf(other: MatrixLike): this {
    const merged = new DOMMatrixPolyfill(other).multiplySelf(this);
    ({ a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f } = merged);
    return this;
  }

  invertSelf(): this {
    const { a, b, c, d, e, f } = this;
    const det = a * d - b * c;
    if (!det) {
      this.a = this.d = 1;
      this.b = this.c = this.e = this.f = 0;
      return this;
    }
    this.a = d / det;
    this.b = -b / det;
    this.c = -c / det;
    this.d = a / det;
    this.e = -(e * this.a + f * this.c);
    this.f = -(e * this.b + f * this.d);
    return this;
  }

  translateSelf(tx: number, ty = 0): this {
    return this.multiplySelf({ a: 1, b: 0, c: 0, d: 1, e: tx, f: ty });
  }

  scaleSelf(sx: number, sy = sx): this {
    return this.multiplySelf({ a: sx, b: 0, c: 0, d: sy, e: 0, f: 0 });
  }

  // pdfjs-dist also calls the non-mutating spec variants; nothing in its code
  // reuses the pre-call matrix afterwards, so mutating-and-returning `this`
  // here is behaviorally equivalent to allocating a new matrix.
  translate(tx: number, ty = 0): this {
    return this.translateSelf(tx, ty);
  }

  scale(sx: number, sy = sx): this {
    return this.scaleSelf(sx, sy);
  }
}

if (typeof globalThis.DOMMatrix === "undefined") {
  Object.assign(globalThis, { DOMMatrix: DOMMatrixPolyfill });
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

  // Dynamic imports: load pdfjs-dist and pdf-parse only after the DOMMatrix
  // polyfill above has been registered in globalThis.
  await import("pdfjs-dist/legacy/build/pdf.worker.mjs");
  const { PDFParse } = await import("pdf-parse");

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
