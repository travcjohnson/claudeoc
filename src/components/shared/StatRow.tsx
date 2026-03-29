interface Stat {
  value: string;
  label: string;
}

export function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-0.5">
          <span className="font-sans text-2xl font-bold text-slate-dark dark:text-cream">
            {stat.value}
          </span>
          <span className="font-sans text-xs font-medium uppercase tracking-wider text-cloud-dark dark:text-muted">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
