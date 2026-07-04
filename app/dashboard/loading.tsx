export default function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-10 w-64 rounded-lg bg-muted" />

      <div className="flex gap-4 overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-80 rounded-xl border bg-card p-4"
          >
            <div className="mb-4 h-6 w-32 rounded bg-muted" />

            <div className="space-y-3">
              {[1, 2, 3].map((j) => (
                <div
                  key={j}
                  className="h-24 rounded-lg bg-muted"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}