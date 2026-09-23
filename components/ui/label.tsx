import * as React from "react";

import { cn } from "@/lib/utils/cn";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  optional?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      className,
      children,
      required = false,
      optional = false,
      ...props
    },
    ref,
  ) => {
    return (
      <label
        ref={ref}
        className={cn(
          [
            "inline-flex",
            "items-center",
            "gap-1.5",
            "text-sm",
            "font-medium",
            "leading-5",
            "text-[var(--text-primary)]",
            "select-none",
          ],
          className,
        )}
        {...props}
      >
        <span>{children}</span>

        {required ? (
          <span
            aria-hidden="true"
            className="text-[var(--brand-400)]"
          >
            *
          </span>
        ) : optional ? (
          <span className="text-xs font-normal text-[var(--text-muted)]">
            opcional
          </span>
        ) : null}
      </label>
    );
  },
);

Label.displayName = "Label";

export { Label };