import { useState } from "react";
import { Share2, Check } from "lucide-react";
import { motion } from "framer-motion";

interface ShareButtonProps {
  title: string;
  url?: string;
}

export default function ShareButton({
  title,
  url,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl =
      url || window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url: shareUrl,
        });

        return;
      }

      await navigator.clipboard.writeText(shareUrl);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to share article:", error);
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={handleShare}
      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200 ${
        copied
          ? "border-emerald-500 bg-emerald-500 text-white"
          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
      }`}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Copied
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" />
          Share
        </>
      )}
    </motion.button>
  );
}