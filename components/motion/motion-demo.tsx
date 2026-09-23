"use client";

import { useEffect, useRef } from "react";
import { animate, createScope, stagger } from "animejs";

import { Card } from "@/components/ui/card";

const requests = [
  {
    title: "Nova solicitação",
    description:
      "O cliente enviou uma nova solicitação.",
    status: "Novo",
  },
  {
    title: "Em análise",
    description:
      "A equipe está analisando os detalhes.",
    status: "Analisando",
  },
  {
    title: "Orçamento enviado",
    description:
      "O orçamento foi enviado ao cliente.",
    status: "Orçamento",
  },
  {
    title: "Concluído",
    description:
      "A solicitação foi finalizada.",
    status: "Concluído",
  },
];

export function MotionDemo() {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    if (!root.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    scope.current = createScope({ root }).add(() => {
      if (prefersReducedMotion) {
        animate(".motion-card", {
          opacity: 1,
          translateY: 0,
          duration: 0,
        });

        return;
      }

      animate(".motion-card", {
        opacity: [0, 1],
        translateY: [28, 0],
        duration: 700,
        delay: stagger(110),
        ease: "out(4)",
      });
    });

    return () => {
      scope.current?.revert();
      scope.current = null;
    };
  }, []);

  return (
    <section ref={root} className="grid gap-4 md:grid-cols-2">
      {requests.map((request) => (
        <Card
          key={request.title}
          className="motion-card border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 opacity-0"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--brand-400)]">
              PedidoFlow
            </span>

            <span className="rounded-full border border-[var(--border-default)] bg-[var(--bg-surface-raised)] px-2.5 py-1 text-xs text-[var(--text-muted)]">
              {request.status}
            </span>
          </div>

          <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
            {request.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
            {request.description}
          </p>
        </Card>
      ))}
    </section>
  );
}