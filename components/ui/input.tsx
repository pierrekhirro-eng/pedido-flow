import * as React from "react";

import { cn } from "@/lib/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      error,
      startAdornment,
      endAdornment,
      id,
      ...props
    },
    ref,
  ) => {
    const errorId = error && id ? `${id}-error` : undefined;

    return (
      <div className="w-full">
        <div className="relative">
          {startAdornment ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[var(--text-muted)]"
            >
              {startAdornment}
            </div>
          ) : null}

          <input
            ref={ref}
            id={id}
            type={type}
            aria-invalid={error ? true : undefined}
            aria-describedby={errorId}
            className={cn(
              [
                "h-11",
                "w-full",
                "rounded-[var(--radius-md)]",
                "border",
                "bg-[var(--bg-surface)]",
                "px-3.5",
                "text-sm",
                "text-[var(--text-primary)]",
                "shadow-[var(--shadow-sm)]",
                "outline-none",
                "transition-all",
                "duration-[var(--duration-fast)]",
                "ease-[var(--ease-standard)]",

                "placeholder:text-[var(--text-disabled)]",

                "border-[var(--border-default)]",

                "hover:border-[var(--border-strong)]",

                "focus:border-[var(--brand-400)]",
                "focus:ring-2",
                "focus:ring-[var(--brand-400)]/15",

                "disabled:cursor-not-allowed",
                "disabled:opacity-50",
                "disabled:bg-[var(--bg-surface-raised)]",

                "read-only:bg-[var(--bg-surface-raised)]",
              ],
              startAdornment && "pl-10",
              endAdornment && "pr-10",
              error && [
                "border-[var(--danger)]",
                "focus:border-[var(--danger)]",
                "focus:ring-[var(--danger)]/15",
              ],
              className,
            )}
            {...props}
          />

          {endAdornment ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-[var(--text-muted)]">
              {endAdornment}
            </div>
          ) : null}
        </div>

        {error ? (
          <p
            id={errorId}
            role="alert"
            className="mt-2 text-xs font-medium text-red-400"
          >
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };