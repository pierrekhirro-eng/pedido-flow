import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-1.5",
    "whitespace-nowrap",
    "rounded-full",
    "border",
    "px-2.5",
    "py-1",
    "text-xs",
    "font-semibold",
    "leading-none",
    "transition-colors",
    "duration-[var(--duration-fast)]",
  ],
  {
    variants: {
      variant: {
        neutral: [
          "border-[var(--border-default)]",
          "bg-[var(--bg-surface-raised)]",
          "text-[var(--text-secondary)]",
        ],

        success: [
          "border-emerald-400/20",
          "bg-emerald-400/10",
          "text-emerald-300",
        ],

        warning: [
          "border-amber-400/20",
          "bg-amber-400/10",
          "text-amber-300",
        ],

        danger: [
          "border-red-400/20",
          "bg-red-400/10",
          "text-red-300",
        ],

        info: [
          "border-sky-400/20",
          "bg-sky-400/10",
          "text-sky-300",
        ],

        brand: [
          "border-[var(--brand-400)]/20",
          "bg-[var(--brand-400)]/10",
          "text-[var(--brand-300)]",
        ],
      },

      size: {
        sm: "px-2 py-0.5 text-[11px]",
        md: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm",
      },
    },

    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant,
  size,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        badgeVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };