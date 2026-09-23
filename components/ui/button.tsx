import * as React from "react";
import { LoaderCircle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",
    "rounded-[var(--radius-md)]",
    "text-sm",
    "font-semibold",
    "transition-all",
    "duration-[var(--duration-normal)]",
    "ease-[var(--ease-standard)]",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[var(--brand-400)]",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-[var(--bg-page)]",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "select-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--brand-500)]",
          "text-[var(--bg-page)]",
          "shadow-[var(--shadow-brand)]",
          "hover:bg-[var(--brand-400)]",
          "hover:-translate-y-0.5",
          "active:translate-y-0",
          "active:scale-[0.98]",
        ],

        secondary: [
          "bg-[var(--bg-surface-raised)]",
          "text-[var(--text-primary)]",
          "border",
          "border-[var(--border-default)]",
          "hover:bg-[var(--bg-surface-soft)]",
          "hover:border-[var(--border-strong)]",
        ],

        outline: [
          "bg-transparent",
          "text-[var(--text-primary)]",
          "border",
          "border-[var(--border-default)]",
          "hover:bg-white/[0.04]",
          "hover:border-[var(--brand-400)]",
          "hover:text-[var(--brand-300)]",
        ],

        ghost: [
          "bg-transparent",
          "text-[var(--text-secondary)]",
          "hover:bg-white/[0.05]",
          "hover:text-[var(--text-primary)]",
        ],

        danger: [
          "bg-[var(--danger)]",
          "text-white",
          "hover:bg-red-500",
          "active:scale-[0.98]",
        ],
      },

      size: {
        sm: [
          "h-9",
          "px-3.5",
          "text-xs",
          "rounded-[var(--radius-sm)]",
        ],

        md: [
          "h-10",
          "px-4",
        ],

        lg: [
          "h-12",
          "px-5",
          "text-base",
        ],

        xl: [
          "h-14",
          "px-6",
          "text-base",
          "rounded-[var(--radius-lg)]",
        ],

        icon: [
          "size-10",
          "p-0",
        ],
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className,
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <LoaderCircle
              className="size-4 animate-spin"
              aria-hidden="true"
            />
            <span>Carregando...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };