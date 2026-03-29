import { SectionHeader } from "@/components/shared/SectionHeader";

const levels = [
  { label: "New but interested", count: 151, pct: 100 },
  { label: "Daily users", count: 99, pct: 66 },
  { label: "Weekly users", count: 83, pct: 55 },
  { label: "Occasional users", count: 69, pct: 46 },
];

const insights = [
  "38% are new to AI — your product could be their first tool",
  "45% are power users — they influence purchasing decisions",
  "48% opted into Anthropic's Developer Newsletter",
];

export function ExperienceLevels() {
  return (
    <section className="bg-ivory-light py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <SectionHeader title="Experience Levels" />
        <div className="max-w-2xl">
          <div className="flex flex-col gap-3">
            {levels.map((l) => (
              <div key={l.label} className="flex items-center gap-4">
                <span className="w-40 shrink-0 font-sans text-sm font-medium text-slate-medium dark:text-muted">
                  {l.label}
                </span>
                <div className="flex-1 rounded-full bg-clay/20 h-5">
                  <div
                    className="h-5 rounded-full bg-clay"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
                <span className="w-8 text-right font-mono text-sm font-medium text-slate-dark dark:text-cream">
                  {l.count}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {insights.map((text) => (
              <div
                key={text}
                className="rounded-xl border border-slate-dark/10 bg-white p-4 dark:border-white/10 dark:bg-stone-900"
              >
                <p className="font-serif text-sm leading-relaxed text-slate-light dark:text-muted">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
