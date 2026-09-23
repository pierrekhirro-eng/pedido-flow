import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[var(--bg-page)]">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton
              className="size-9 rounded-[var(--radius-md)]"
            />

            <Skeleton
              className="h-5 w-28"
            />
          </div>

          <div className="flex items-center gap-3">
            <Skeleton
              className="hidden h-10 w-40 sm:block"
            />

            <Skeleton
              variant="avatar"
              className="size-9"
            />
          </div>
        </header>

        {/* Main */}
        <section className="py-10 lg:py-14">
          <div className="mb-8 max-w-2xl space-y-3">
            <Skeleton
              variant="title"
              className="h-9 w-64 sm:h-10 sm:w-80"
            />

            <Skeleton
              variant="text"
              className="h-4 w-full max-w-xl"
            />

            <Skeleton
              variant="text"
              className="h-4 w-3/4 max-w-md"
            />
          </div>

          {/* Metrics */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5"
              >
                <Skeleton className="h-3 w-24" />

                <Skeleton
                  className="mt-4 h-8 w-28"
                />

                <Skeleton
                  className="mt-3 h-3 w-20"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.6fr)]">
            {/* Requests */}
            <section className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-5 py-4 sm:px-6">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-36" />
                  <Skeleton className="h-3 w-24" />
                </div>

                <Skeleton
                  variant="button"
                  className="hidden w-28 sm:block"
                />
              </div>

              <div className="space-y-3 p-4 sm:p-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface-raised)] p-4"
                  >
                    <Skeleton
                      variant="avatar"
                      className="size-10 shrink-0"
                    />

                    <div className="min-w-0 flex-1 space-y-2">
                      <Skeleton className="h-4 w-40 max-w-full" />
                      <Skeleton className="h-3 w-28" />
                    </div>

                    <Skeleton
                      variant="badge"
                      className="hidden w-20 sm:block"
                    />

                    <Skeleton className="size-8 rounded-full" />
                  </div>
                ))}
              </div>
            </section>

            {/* Side panel */}
            <aside className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <div className="border-b border-[var(--border-subtle)] px-5 py-4 sm:px-6">
                <Skeleton className="h-5 w-32" />
              </div>

              <div className="space-y-6 p-5 sm:p-6">
                <div className="space-y-3">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton
                    variant="input"
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton
                    variant="input"
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <Skeleton className="h-3 w-28" />
                  <Skeleton
                    className="h-24 w-full rounded-[var(--radius-md)]"
                  />
                </div>

                <Skeleton
                  variant="button"
                  className="h-11 w-full"
                />
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}