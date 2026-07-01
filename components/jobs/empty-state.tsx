import { SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  onClear?: () => void;
}

export function EmptyState({
  title = "No jobs found",
  description = "Try adjusting your search or filters to find what you're looking for.",
  onClear,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-muted/20 px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
        <SearchX className="h-7 w-7 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        {description}
      </p>
      {onClear && (
        <Button variant="outline" className="mt-6" onClick={onClear}>
          Clear filters
        </Button>
      )}
    </div>
  );
}
