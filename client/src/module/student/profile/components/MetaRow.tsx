export function MetaRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500">
        <span className="text-stone-400">{icon}</span>
        {label}
      </span>
      <span className="text-xs font-medium text-stone-700 dark:text-stone-300">{value}</span>
    </div>
  );
}
