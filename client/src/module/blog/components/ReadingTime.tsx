import { Clock } from "lucide-react";

interface ReadingTimeProps {
  minutes: number;
  className?: string;
}

export default function ReadingTime({
  minutes,
  className = "",
}: ReadingTimeProps) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 ${className}`}
    >
      <Clock className="h-4 w-4" />
      <span>
        {minutes} min read
      </span>
    </div>
  );
}