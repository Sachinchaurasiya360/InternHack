import { Star } from "lucide-react";
import { Button } from "../../../components/ui/button";

interface StarRatingProps {
  rating: number;
  onRate?: (rating: number) => void;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ rating, onRate, size = "md" }: StarRatingProps) {
  const sizeClass = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5";

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Button
          key={star}
          type="button"
          onClick={() => onRate?.(star)}
          disabled={!onRate}
          variant="ghost"
          mode="icon"
          size="sm"
          className={`bg-transparent hover:bg-transparent h-auto w-auto p-0 ${onRate ? "hover:scale-110" : "cursor-default"} transition-transform disabled:opacity-100`}
        >
          <Star
            className={`${sizeClass} ${
              star <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
          />
        </Button>
      ))}
    </div>
  );
}
