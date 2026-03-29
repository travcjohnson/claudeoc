const orgTypes = [
  "Hospitals & Clinics",
  "Schools & Universities",
  "City & County Agencies",
  "Environmental Orgs",
  "Nonprofits & NGOs",
];

export function WhoShouldApply() {
  return (
    <section className="bg-ivory-light py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            Who Should Apply
          </h2>
          <p className="mt-5 font-serif text-xl leading-relaxed text-slate-light dark:text-muted">
            If your organization serves the public and your team spends hours on
            tasks that feel like they should be easier — you are exactly who this
            program is for.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {orgTypes.map((type) => (
            <span
              key={type}
              className="inline-flex items-center gap-2 rounded-full border border-slate-dark/10 bg-white px-5 py-2.5 font-sans text-sm font-medium text-slate-dark transition-colors dark:border-white/10 dark:bg-stone-900 dark:text-cream"
            >
              <span className="h-2 w-2 rounded-full bg-clay" />
              {type}
            </span>
          ))}
        </div>

        <p className="mt-8 font-serif text-base leading-relaxed text-cloud-dark dark:text-muted">
          Past projects have tackled intake form automation, grant reporting
          workflows, public records search, patient triage tools, and
          environmental monitoring dashboards. If you have a process that eats
          your team&apos;s time, we want to hear about it.
        </p>
      </div>
    </section>
  );
}
