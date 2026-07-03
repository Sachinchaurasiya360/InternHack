import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className = "" }: CopyButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <button
      onClick={() => copy(text)}
      aria-label={copied ? "Copied!" : "Copy to clipboard"}
      className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md transition-all duration-200
        ${copied
          ? "bg-green-500/10 text-green-400 border border-green-500/20"
          : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
        } ${className}`}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      <span>{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
}
