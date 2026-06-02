import { sectionKickerCls, sectionTitleCls } from "./ats-ui";

export function CardHeader({
  kicker,
  title,
  right,
}: {
  kicker: string;
  title: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-stone-200 dark:border-white/10">
      <div className="flex flex-col gap-1 min-w-0">
        <span className={sectionKickerCls}>
          <span className="h-1 w-1 bg-lime-400" />
          {kicker}
        </span>
        <span className={sectionTitleCls}>{title}</span>
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}
