interface KickerProps {
  children: React.ReactNode;
  className?: string;
}

export function Kicker({ children, className = "" }: KickerProps) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 ${className}`}>
      <span className="h-1.5 w-1.5 bg-lime-400 shrink-0" />
      {children}
    </div>
  );
}