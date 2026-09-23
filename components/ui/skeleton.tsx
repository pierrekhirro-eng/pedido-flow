import * as React from "react";

import { cn } from "@/lib/utils/cn";

type SkeletonVariant =
  | "default"
  | "text"
  | "title"
  | "avatar"
  | "button"
  | "card"
  | "input"
  | "badge";

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
}

const variantClasses: Record<SkeletonVariant, string> = {
  default: "rounded-[var(--radius-md)]",

  text: [
    "h-4",
    "w-full",
    "rounded-[var(--radius-sm)]",
  ].join(" "),

  title: [
    "h-7",
    "w-2/3",
    "rounded-[var(--radius-sm)]",
  ].join(" "),

  avatar: [
    "aspect-square",
    "rounded-full",
  ].join(" "),

  button: [
    "h-10",
    "rounded-[var(--radius-md)]",
  ].join(" "),

  card: [
    "min-h-32",
    "rounded-[var(--radius-lg)]",
  ].join(" "),

  input: [
    "h-11",
    "rounded-[var(--radius-md)]",
  ].join(" "),

  badge: [
    "h-6",
    "rounded-full",
  ].join(" "),
};

function Skeleton({
  className,
  variant = "default",
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "skeleton-shimmer",
        "relative",
        "overflow-hidden",
        "bg-[var(--bg-surface-raised)]",
        "border",
        "border-[var(--border-subtle)]",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };