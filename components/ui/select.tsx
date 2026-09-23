import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils/cn";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      error,
      id,
      children,
      placeholder,
      ...props
    },
    ref,
  ) => {
    const errorId = error && id ? `${id}-error` : undefined;

    return (
      <div className="w-full">
        <div className="relative">
          <select
            ref={ref}
            id={id}
            aria-invalid={error ? true : undefined}
            aria-describedby={errorId}
            className={cn(
              [
                "h-11",
                "w-full",
                "appearance-none",
                "rounded-[var(--radius-md)]",
                "border",
                "border-[var(--border-default)]",
                "bg-[var(--bg-surface)]",
                "px-3.5",
                "pr-10",
                "text-sm",
                "text-[var(--text-primary)]",
                "shadow-[var(--shadow-sm)]",
                "outline-none",
                "transition-all",
                "duration-[var(--duration-fast)]",
                "ease-[var(--ease-standard)]",

                "hover:border-[var(--border-strong)]",

                "focus:border-[var(--brand-400)]",
                "focus:ring-2",
                "focus:ring-[var(--brand-400)]/15",

                "disabled:cursor-not-allowed",
                "disabled:opacity-50",
                "disabled:bg-[var(--bg-surface-raised)]",

                "[&>option]:bg-[var(--bg-surface)]",
                "[&>option]:text-[var(--text-primary)]",
              ],
              error && [
                "border-[var(--danger)]",
                "focus:border-[var(--danger)]",
                "focus:ring-[var(--danger)]/15",
              ],
              className,
            )}
            {...props}
          >
            {placeholder ? (
              <option value="" disabled>
                {placeholder}
              </option>
            ) : null}

            {children}
          </select>

          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-[var(--text-muted)]"
          />
        </div>

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

Select.displayName = "Select";

export { Select };