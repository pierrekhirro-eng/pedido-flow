import * as React from "react";

import { cn } from "@/lib/utils/cn";

export interface RadioOption {
  value: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps
  extends Omit<
    React.HTMLAttributes<HTMLFieldSetElement>,
    "onChange"
  > {
  name: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  error?: string;
}

function RadioGroup({
  className,
  name,
  options,
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  error,
  ...props
}: RadioGroupProps) {
  const errorId = `${name}-error`;

  return (
    <fieldset
      className={cn("w-full space-y-2.5", className)}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? errorId : undefined}
      {...props}
    >
      {options.map((option) => {
        const optionId = `${name}-${option.value}`;
        const isDisabled = disabled || option.disabled;

        return (
          <label
            key={option.value}
            htmlFor={optionId}
            className={cn(
              "group flex items-start gap-3 rounded-[var(--radius-lg)]",
              "border border-[var(--border-default)]",
              "bg-[var(--bg-surface)]",
              "p-4",
              "transition-all",
              "duration-[var(--duration-fast)]",
              "ease-[var(--ease-standard)]",
              isDisabled
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-raised)]",
            )}
          >
            <span className="relative mt-0.5 shrink-0">
              <input
                id={optionId}
                name={name}
                type="radio"
                value={option.value}
                checked={
                  value !== undefined
                    ? value === option.value
                    : undefined
                }
                defaultChecked={
                  value === undefined &&
                  defaultValue === option.value
                }
                disabled={isDisabled}
                className="peer sr-only"
                onChange={() => {
                  onValueChange?.(option.value);
                }}
              />

              <span
                aria-hidden="true"
                className={cn(
                  "flex size-5 items-center justify-center",
                  "rounded-full",
                  "border border-[var(--border-default)]",
                  "bg-[var(--bg-surface)]",
                  "transition-all",
                  "duration-[var(--duration-fast)]",
                  "peer-focus-visible:ring-2",
                  "peer-focus-visible:ring-[var(--brand-400)]/20",
                  "peer-focus-visible:border-[var(--brand-400)]",
                  "peer-checked:border-[var(--brand-500)]",
                  "peer-checked:bg-[var(--brand-500)]",

                  "after:size-2",
                  "after:rounded-full",
                  "after:bg-[var(--bg-page)]",
                  "after:opacity-0",
                  "after:transition-opacity",
                  "after:duration-[var(--duration-fast)]",

                  "peer-checked:after:opacity-100",

                  error && [
                    "border-[var(--danger)]",
                    "peer-focus-visible:border-[var(--danger)]",
                    "peer-focus-visible:ring-[var(--danger)]/20",
                  ],
                )}
              />
            </span>

            <span className="min-w-0">
              <span className="block text-sm font-medium text-[var(--text-primary)]">
                {option.label}
              </span>

              {option.description ? (
                <span className="mt-1 block text-xs leading-5 text-[var(--text-muted)]">
                  {option.description}
                </span>
              ) : null}
            </span>
          </label>
        );
      })}

      {error ? (
        <p
          id={errorId}
          role="alert"
          className="text-xs font-medium leading-5 text-red-400"
        >
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

export { RadioGroup };