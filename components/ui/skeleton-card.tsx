import * as React from "react";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils/cn";

export interface SkeletonCardProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function SkeletonCard({
  className,
  ...props
}: SkeletonCardProps) {
  return (
    <Card
      aria-hidden="true"
      className={cn(
        "overflow-hidden",
        "border-[var(--border-subtle)]",
        "bg-[var(--bg-surface)]",
        className,
      )}
      {...props}
    >
      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3.5">
            <Skeleton
              variant="avatar"
              className="size-11 shrink-0"
            />

            <div className="min-w-0 space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>

          <Skeleton
            variant="badge"
            className="w-20 shrink-0"
          />
        </div>

        {/* Main content */}
        <div className="mt-6 space-y-3">
          <Skeleton
            variant="title"
            className="h-5 w-3/4"
          />

          <Skeleton
            variant="text"
            className="h-3 w-full"
          />

          <Skeleton
            variant="text"
            className="h-3 w-[88%]"
          />

          <Skeleton
            variant="text"
            className="h-3 w-[62%]"
          />
        </div>

        {/* Details */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="space-y-2">
            <Skeleton className="h-2.5 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-2.5 w-14" />
            <Skeleton className="h-4 w-24" />
          </div>

          <div className="hidden space-y-2 sm:block">
            <Skeleton className="h-2.5 w-12" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[var(--border-subtle)] px-5 py-4 sm:px-6">
        <Skeleton className="h-3 w-24" />

        <Skeleton
          variant="button"
          className="h-9 w-24"
        />
      </div>
    </Card>
  );
}