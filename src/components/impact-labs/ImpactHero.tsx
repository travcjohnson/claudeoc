import { EyebrowBadge } from "@/components/shared/EyebrowBadge";

export function ImpactHero() {
  return (
    <section className="bg-ivory-light py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="max-w-3xl">
          <EyebrowBadge label="Claude Impact Labs — A Global Program" />

          <h1 className="mt-8 font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl lg:text-6xl">
            AI that serves the people{" "}
            <span className="text-clay">who serve communities</span>
          </h1>

          <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-slate-light dark:text-cloud-light">
            Impact Labs are one-day build events that pair nonprofit and
            government organizations with volunteer AI builders — producing
            working prototypes that address real operational challenges.
            Part of Anthropic&apos;s global Claude Communities program.
          </p>

          <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-cloud-dark dark:text-cloud-light/80">
            Your team defines the problem. Our builders create the solution.
            You walk away with a tool you can use on Monday morning.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              Nominate an Organization
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#past-lab"
              className="inline-flex items-center rounded-lg border border-slate-dark px-7 py-3.5 font-sans text-sm font-medium text-slate-dark transition-colors hover:bg-slate-dark hover:text-ivory-light dark:border-cream/20 dark:text-cream dark:hover:bg-cream/10"
            >
              See Past Results
            </a>
          </div>
        </div>

        {/* Pull quote */}
        <div className="mt-16 max-w-2xl rounded-xl border-l-4 border-clay bg-white px-6 py-5 dark:bg-stone-900">
          <p className="font-serif text-lg leading-relaxed text-slate-medium italic dark:text-cream/90">
            &ldquo;Technology should amplify human resilience, not replace
            it.&rdquo;
          </p>
          <p className="mt-2 font-sans text-sm font-medium text-cloud-dark dark:text-muted">
            — Travis Johnson
          </p>
        </div>
      </div>
    </section>
  );
}
