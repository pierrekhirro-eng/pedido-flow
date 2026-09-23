import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils/cn";

export interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type"
  > {
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      id,
      label,
      description,
      error,
      disabled,
      ...props
    },
    ref,
  ) => {
    const descriptionId =
      description && id ? `${id}-description` : undefined;

    const errorId =
      error && id ? `${id}-error` : undefined;

    const describedBy =
      [descriptionId, errorId].filter(Boolean).join(" ") ||
      undefined;

    return (
      <div className="w-full">
        <label
          htmlFor={id}
          className={cn(
            "group flex items-start gap-3",
            disabled
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer",
          )}
        >
          <span className="relative mt-0.5 shrink-0">
            <input
              ref={ref}
              id={id}
              type="checkbox"
              disabled={disabled}
              aria-invalid={error ? true : undefined}
              aria-describedby={describedBy}
              className={cn(
                "peer sr-only",
                className,
              )}
              {...props}
            />

            <span
              aria-hidden="true"
              className={cn(
                "flex size-5 items-center justify-center",
                "rounded-[var(--radius-sm)]",
                "border",
                "border-[var(--border-default)]",
                "bg-[var(--bg-surface)]",
                "text-transparent",
                "shadow-[var(--shadow-sm)]",
                "transition-all",
                "duration-[var(--duration-fast)]",
                "ease-[var(--ease-standard)]",

                "peer-hover:border-[var(--border-strong)]",

                "peer-focus-visible:border-[var(--brand-400)]",
                "peer-focus-visible:ring-2",
                "peer-focus-visible:ring-[var(--brand-400)]/20",

                "peer-checked:border-[var(--brand-500)]",
                "peer-checked:bg-[var(--brand-500)]",
                "peer-checked:text-[var(--bg-page)]",

                "peer-disabled:bg-[var(--bg-surface-raised)]",

                error && [
                  "border-[var(--danger)]",
                  "peer-focus-visible:border-[var(--danger)]",
                  "peer-focus-visible:ring-[var(--danger)]/20",
                ],
              )}
            >
              <Check
                className="size-3.5 stroke-[3]"
                aria-hidden="true"
              />
            </span>
          </span>

          <span className="min-w-0 space-y-1">
            {label ? (
              <span className="block text-sm font-medium leading-5 text-[var(--text-primary)]">
                {label}
              </span>
            ) : null}

            {description ? (
              <span
                id={descriptionId}
                className="block text-xs leading-5 text-[var(--text-muted)]"
              >
                {description}
              </span>
            ) : null}
          </span>
        </label>

        {error ? (
          <p
            id={errorId}
            role="alert"
            className="mt-2 text-xs font-medium leading-5 text-red-400"
          >
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };