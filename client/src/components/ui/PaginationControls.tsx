import { useState, type FormEvent } from "react";
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
  pageSize?: number;
  onPageSizeChange?: (size: number) => void;
  pageSizeOptions?: number[];
  className?: string;
}

const DEFAULT_PAGE_SIZES = [10, 20, 50, 100];

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
  pageSize,
  onPageSizeChange,
  pageSizeOptions = DEFAULT_PAGE_SIZES,
  className,
}: PaginationControlsProps) {
  const [jumpInput, setJumpInput] = useState("");

  if (totalPages <= 1) return null;

  const pages = getPageRange(currentPage, totalPages, maxVisiblePages);

  const showingStart = showingInfo
    ? (currentPage - 1) * showingInfo.limit + 1
    : 0;
  const showingEnd = showingInfo
    ? Math.min(currentPage * showingInfo.limit, showingInfo.total)
    : 0;

  const hasSizeSelect = typeof onPageSizeChange === "function" && typeof pageSize === "number";

  const handleJumpSubmit = (e: FormEvent) => {
    e.preventDefault();
    const page = Number.parseInt(jumpInput, 10);
    if (Number.isNaN(page) || page < 1 || page > totalPages) {
      setJumpInput("");
      return;
    }
    onPageChange(page);
    setJumpInput("");
  };

  return (
    <div className={cn("flex flex-col items-center gap-3 mt-8", className)}>
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
                  mode="icon" aria-label={`Page ${page}`}
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

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        {showingInfo && (
          <span>
            Showing {showingStart}–{showingEnd} of {showingInfo.total}
          </span>
        )}

        {hasSizeSelect && (
          <label className="flex items-center gap-1.5">
            <span>Rows per page</span>
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="h-7 rounded-md border border-input bg-background px-2 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Rows per page"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
        )}

        <form onSubmit={handleJumpSubmit} className="flex items-center gap-1.5">
          <span>Go to</span>
          <input
            type="number"
            min={1}
            max={totalPages}
            value={jumpInput}
            onChange={(e) => setJumpInput(e.target.value)}
            className="h-7 w-12 rounded-md border border-input bg-background px-1 text-center text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Go to page"
          />
          <button
            type="submit"
            className="h-7 rounded-md border border-input bg-background px-2 text-xs text-foreground hover:bg-muted transition-colors"
          >
            Go
          </button>
        </form>
      </div>
    </div>
  );
}
