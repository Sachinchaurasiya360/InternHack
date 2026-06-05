import { ChevronDown } from "lucide-react";
import { sectionHeaderBtn, sectionKickerCls, sectionTitleCls } from "./styles";

export function SectionHeader({
  kicker,
  title,
  open,
  onToggle,
  meta,
  right,
}: {
  kicker: string;
  title: string;
  open: boolean;
  onToggle: () => void;
  meta?: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-center border-b border-stone-200 dark:border-white/10">
      <button type="button" onClick={onToggle} className={`${sectionHeaderBtn} flex-1`}>
        <div className="flex flex-col gap-1 min-w-0">
          <span className={sectionKickerCls}>
            <span className="h-1 w-1 bg-lime-400" />
            {kicker}
          </span>
          <span className={sectionTitleCls}>
            {title}
            {meta && (
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 font-medium">
                {meta}
              </span>
            )}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      {right && <div className="pr-4 shrink-0">{right}</div>}
    </div>
  );
}
