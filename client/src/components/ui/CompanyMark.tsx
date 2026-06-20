import { useState } from "react";
import { SERVER_URL } from "../../lib/axios";

export interface CompanyMarkProps {
  name: string;
  logo?: string | null;
  size?: "sm" | "md" | "lg" | "xl";
}

export function CompanyMark({ name, logo, size = "md" }: CompanyMarkProps) {
  const [imgError, setImgError] = useState(false);

  let dims = "";
  let textDims = "";

  switch (size) {
    case "sm":
      dims = "w-9 h-9";
      textDims = "text-xs";
      break;
    case "lg":
      dims = "w-14 h-14";
      textDims = "text-xl";
      break;
    case "xl":
      dims = "w-16 h-16 sm:w-20 sm:h-20";
      textDims = "text-2xl sm:text-3xl";
      break;
    case "md":
    default:
      dims = "w-10 h-10";
      textDims = "text-sm";
      break;
  }

  const hasLogo = logo && !imgError;

  if (hasLogo) {
    const src = logo.startsWith("http") ? logo : `${SERVER_URL}${logo}`;
    return (
      <img
        src={src}
        alt={name}
        onError={() => setImgError(true)}
        className={`${dims} rounded-md object-cover border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 shrink-0`}
      />
    );
  }

  return (
    <div
      className={`${dims} rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-stone-900 dark:text-stone-50 ${textDims} font-bold`}
    >
      {name?.charAt(0)?.toUpperCase() || "?"}
    </div>
  );
}
