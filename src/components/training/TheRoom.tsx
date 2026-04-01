const mainStats = [
  { value: "62", label: "Founders & CEOs" },
  { value: "49", label: "Enterprise Employees" },
  { value: "48", label: "Students & Researchers" },
];

export function TheRoom() {
  return (
    <section className="bg-ivory-light py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            The Room
          </h2>
          <p className="mt-5 font-serif text-xl leading-relaxed text-slate-light dark:text-stone-300">
            From the last event (402 registrations):
          </p>
        </div>

        {/* Large stats */}
        <div className="flex flex-wrap gap-x-16 gap-y-8">
          {mainStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-sans text-5xl font-bold text-slate-dark dark:text-cream md:text-6xl">
                {stat.value}
              </span>
              <span className="font-sans text-sm font-medium uppercase tracking-wider text-cloud-dark dark:text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Sub-roles */}
        <p className="mt-8 font-serif text-sm text-cloud-dark dark:text-cloud-light">
          9 CEOs · 8 Directors · 5 VPs · 3 CTOs · 3 COOs
        </p>

        {/* Callouts */}
        <div className="mt-10 rounded-xl border border-slate-dark/10 bg-white p-6 dark:border-white/5 dark:bg-stone-800/50">
          <div className="flex flex-col gap-2 font-serif text-sm text-slate-light dark:text-stone-300">
            <p>
              <span className="font-semibold text-slate-dark dark:text-cream">
                Top Interest:
              </span>{" "}
              AI Agents (101 mentions)
            </p>
            <p>48% opted into Anthropic Developer Newsletter</p>
            <p>3&times; oversubscribed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
