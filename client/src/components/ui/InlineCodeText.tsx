import { Fragment } from "react";
import toast from "./toast";

interface InlineCodeTextProps {
  text: string;
}

export function InlineCodeText({ text }: InlineCodeTextProps) {
  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);

      toast.success("Code copied!");
    } catch (err) {
      console.error("Failed to copy inline code:", err);

      toast.error("Failed to copy code");
    }
  };

  const parts = text.split(/(`[^`]+`)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          const code = part.slice(1, -1);

          return (
            <code
              key={index}
              onClick={() => handleCopy(code)}
              title="Click to copy"
              className="mx-0.5 rounded px-1.5 py-0.5 font-mono text-[0.9em] bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors active:scale-95 inline"
            >
              {code}
            </code>
          );
        }

        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}