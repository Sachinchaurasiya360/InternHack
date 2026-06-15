import { useEffect, useMemo, useRef, useState } from "react";

const TILE_COLS = 22;
const TILE_ROWS = 13;
const FADE_DELAY_MIN = 400;
const FADE_DELAY_MAX = 1000;

const BRAND_PALETTE = [
  "#4f46e5", // cobalt blue
  "#b6ff00", // bright lime
  "#030712", // black
  "#6b7280", // gray
  "#60a5fa", // pale blue
];

type TileRecord = {
  color: string;
  activatedAt: number;
  fadeAfter: number;
};

function getTileKey(row: number, col: number): string {
  return `${row}-${col}`;
}

function getRandomColor(): string {
  return BRAND_PALETTE[Math.floor(Math.random() * BRAND_PALETTE.length)];
}

export function CursorReactiveTileGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tilesMapRef = useRef<Map<string, TileRecord>>(new Map());
  const lastTileRef = useRef<string | null>(null);
  const rafRef = useRef<number | null>(null);
  const [, forceRender] = useState(0);

  const getTileFromPosition = (clientX: number, clientY: number): { row: number; col: number } | null => {
    if (!containerRef.current) return null;

    const rect = containerRef.current.getBoundingClientRect();
    const relX = clientX - rect.left;
    const relY = clientY - rect.top;

    const col = Math.floor((relX / rect.width) * TILE_COLS);
    const row = Math.floor((relY / rect.height) * TILE_ROWS);

    if (row >= 0 && row < TILE_ROWS && col >= 0 && col < TILE_COLS) {
      return { row, col };
    }
    return null;
  };

  const activateTile = (row: number, col: number) => {
    const key = getTileKey(row, col);
    const now = performance.now();
    const fadeDelay =
      FADE_DELAY_MIN + Math.random() * (FADE_DELAY_MAX - FADE_DELAY_MIN);

    tilesMapRef.current.set(key, {
      color: getRandomColor(),
      activatedAt: now,
      fadeAfter: fadeDelay,
    });

    if (rafRef.current === null) {
      rafRef.current = window.requestAnimationFrame(tick);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    const tile = getTileFromPosition(e.clientX, e.clientY);
    if (!tile) return;

    const key = getTileKey(tile.row, tile.col);
    if (key !== lastTileRef.current) {
      activateTile(tile.row, tile.col);
      lastTileRef.current = key;
    }
  };

  const tick = () => {
    const now = performance.now();
    let hasVisibleTiles = false;

    tilesMapRef.current.forEach((state, key) => {
      const elem = containerRef.current?.querySelector(
        `[data-tile="${key}"]`,
      ) as HTMLElement | null;
      if (!elem) return;

      const fadeStart = state.activatedAt + state.fadeAfter;
      const fadeDuration = 260;

      if (now < fadeStart) {
        elem.style.backgroundColor = state.color;
        elem.style.opacity = "1";
        hasVisibleTiles = true;
      } else if (now < fadeStart + fadeDuration) {
        const fadeProgress = (now - fadeStart) / fadeDuration;
        elem.style.backgroundColor = state.color;
        elem.style.opacity = String(1 - fadeProgress);
        hasVisibleTiles = true;
      } else {
        elem.style.backgroundColor = "transparent";
        elem.style.opacity = "0";
        tilesMapRef.current.delete(key);
      }
    });

    forceRender((value) => value + 1);

    if (hasVisibleTiles || tilesMapRef.current.size > 0) {
      rafRef.current = window.requestAnimationFrame(tick);
    } else {
      rafRef.current = null;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const tiles = useMemo(() => {
    return Array.from({ length: TILE_COLS * TILE_ROWS }, (_, idx) => {
      const row = Math.floor(idx / TILE_COLS);
      const col = idx % TILE_COLS;
      const key = getTileKey(row, col);
      return { row, col, key, state: tilesMapRef.current.get(key) };
    });
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 z-10 pointer-events-none"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${TILE_COLS}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${TILE_ROWS}, minmax(0, 1fr))`,
      }}
    >
      {tiles.map(({ key }) => (
        <div
          key={key}
          data-tile={key}
          className="border-r border-b border-stone-300/20 dark:border-white/10"
          style={{
            backgroundColor: "transparent",
            opacity: 0,
            transition: "opacity 300ms ease-out, background-color 300ms ease-out",
          }}
        />
      ))}
    </div>
  );
}
