import * as React from "react";

import { cn } from "@/lib/utils/cn";
import { Label } from "@/components/ui/label";

export interface FieldProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  htmlFor?: string;
  description?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}

function Field({
  className,
  label,
  htmlFor,
  description,
  error,
  required = false,
  optional = false,
  children,
  ...props
}: FieldProps) {
  const descriptionId = htmlFor
    ? `${htmlFor}-description`
    : undefined;

  const errorId = htmlFor
    ? `${htmlFor}-error`
    : undefined;

  const describedBy = [
    description ? descriptionId : null,
    error ? errorId : null,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div
      className={cn("w-full space-y-2", className)}
      {...props}
    >
      {label ? (
        <Label
          htmlFor={htmlFor}
          required={required}
          optional={optional}
        >
          {label}
        </Label>
      ) : null}

      <div
        aria-describedby={describedBy}
        className="w-full"
      >
        {children}
      </div>

      {description ? (
        <p
          id={descriptionId}
          className="text-xs leading-5 text-[var(--text-muted)]"
        >
          {description}
        </p>
      ) : null}

      {error ? (
        <p
          id={errorId}
          role="alert"
          className="text-xs font-medium leading-5 text-red-400"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

export { Field };