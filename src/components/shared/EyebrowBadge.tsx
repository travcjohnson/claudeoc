export function EyebrowBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-dark/10 bg-white px-4 py-1.5 dark:border-white/10 dark:bg-stone-900">
      <span className="h-2 w-2 rounded-full bg-clay" />
      <span className="font-sans text-xs font-medium uppercase tracking-widest text-slate-light dark:text-muted">
        {label}
      </span>
    </div>
  );
}
