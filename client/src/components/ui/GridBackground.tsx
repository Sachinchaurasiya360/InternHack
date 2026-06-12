interface GridBackgroundProps { columnWidth?: number; }

export function GridBackground({ columnWidth = 120 }: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05] z-0"
      style={{ backgroundImage: 'linear-gradient(to right, rgba(120,113,108,0.25) 1px, transparent 1px)', backgroundSize: `${columnWidth}px 100%` }}
    />
  );
}
