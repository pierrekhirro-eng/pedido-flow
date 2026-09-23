import { MotionDemo } from "@/components/motion/motion-demo";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-page)] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-400)]">
            Motion system
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            PedidoFlow
          </h1>

          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
            Da solicitação ao fechamento.
          </p>
        </div>

        <MotionDemo />
      </div>
    </main>
  );
}