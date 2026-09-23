import * as React from "react";

import { cn } from "@/lib/utils/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  resize?: "none" | "vertical" | "horizontal" | "both";
}

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(
  (
    {
      className,
      error,
      resize = "vertical",
      id,
      rows = 5,
      ...props
    },
    ref,
  ) => {
    const errorId = error && id ? `${id}-error` : undefined;

    return (
      <div className="w-full">
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className={cn(
            [
              "min-h-28",
              "w-full",
              "rounded-[var(--radius-md)]",
              "border",
              "bg-[var(--bg-surface)]",
              "px-3.5",
              "py-3",
              "text-sm",
              "leading-6",
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
            resize === "none" && "resize-none",
            resize === "vertical" && "resize-y",
            resize === "horizontal" && "resize-x",
            resize === "both" && "resize",
            error && [
              "border-[var(--danger)]",
              "focus:border-[var(--danger)]",
              "focus:ring-[var(--danger)]/15",
            ],
            className,
          )}
          {...props}
        />

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

Textarea.displayName = "Textarea";

export { Textarea };