import Link from "next/link";

import { cn } from "@/lib/utils/cn";

interface BrandLogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

const sizes = {
  sm: {
    icon: "size-8",
    text: "text-lg",
    tagline: "text-[10px]",
  },
  md: {
    icon: "size-9",
    text: "text-xl",
    tagline: "text-[11px]",
  },
  lg: {
    icon: "size-11",
    text: "text-2xl sm:text-3xl",
    tagline: "text-xs",
  },
};

function BrandIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path
        d="M14 10H30C36.075 10 41 14.925 41 21C41 27.075 36.075 32 30 32H20"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M14 10V17"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M20 32L14 38"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M14 24H27"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <circle
        cx="14"
        cy="42"
        r="2.5"
        fill="currentColor"
      />
    </svg>
  );
}

export function BrandLogo({
  href = "/",
  size = "md",
  showTagline = false,
  className,
}: BrandLogoProps) {
  const sizing = sizes[size];

  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        "select-none",
        className,
      )}
    >
      <span
        className={cn(
          "flex items-center justify-center",
          "text-[var(--brand-400)]",
          sizing.icon,
        )}
      >
        <BrandIcon className="size-full" />
      </span>

      <span className="flex min-w-0 flex-col">
        <span
          className={cn(
            "leading-none font-semibold tracking-tight",
            "text-[var(--text-primary)]",
            sizing.text,
          )}
        >
          Pedido
          <span className="text-[var(--brand-400)]">
            Flow
          </span>
        </span>

        {showTagline ? (
          <span
            className={cn(
              "mt-1 leading-none",
              "text-[var(--text-muted)]",
              sizing.tagline,
            )}
          >
            Da solicitação ao fechamento.
          </span>
        ) : null}
      </span>
    </span>
  );

  return (
    <Link
      href={href}
      aria-label="PedidoFlow"
      className="inline-flex rounded-[var(--radius-md)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-400)]/40"
    >
      {content}
    </Link>
  );
}