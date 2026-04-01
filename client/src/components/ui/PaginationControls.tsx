import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
  showingInfo?: { total: number; limit: number };
  className?: string;
}

function getPageRange(
  current: number,
  total: number,
  maxVisible: number
): (number | "ellipsis-start" | "ellipsis-end")[] {
  if (total <= maxVisible + 2) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis-start" | "ellipsis-end")[] = [1];
  const half = Math.floor(maxVisible / 2);
  let start = Math.max(2, current - half);
  let end = Math.min(total - 1, current + half);

  if (end - start + 1 < maxVisible) {
    if (start === 2) end = Math.min(total - 1, start + maxVisible - 1);
    else start = Math.max(2, end - maxVisible + 1);
  }

  if (start > 2) pages.push("ellipsis-start");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push("ellipsis-end");
  if (total > 1) pages.push(total);

  return pages;
}

export function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
  showingInfo,
  className,
}: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  const pages = getPageRange(currentPage, totalPages, maxVisiblePages);

  const showingStart = showingInfo
    ? (currentPage - 1) * showingInfo.limit + 1
    : 0;
  const showingEnd = showingInfo
    ? Math.min(currentPage * showingInfo.limit, showingInfo.total)
    : 0;

  return (
    <div className={cn("flex flex-col items-center gap-2 mt-8", className)}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage <= 1}
            >
              <ChevronLeft className="size-4" />
              Previous
            </Button>
          </PaginationItem>

          {pages.map((page) =>
            page === "ellipsis-start" || page === "ellipsis-end" ? (
              <PaginationItem key={page}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={page}>
                <Button
                  variant={page === currentPage ? "outline" : "ghost"}
                  mode="icon"
                  size="sm"
                  onClick={() => onPageChange(page as number)}
                >
                  {page}
                </Button>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
            >
              Next
              <ChevronRight className="size-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {showingInfo && (
        <p className="text-xs text-muted-foreground">
          Showing {showingStart}–{showingEnd} of {showingInfo.total}
        </p>
      )}
    </div>
  );
}
