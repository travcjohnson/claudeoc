"use client";

import { useReveal } from "@/hooks/useReveal";

export function ImpactLabsTeaser() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="reveal mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-dark/10 bg-white px-4 py-1.5 dark:border-cream/10 dark:bg-stone-800">
              <span className="h-2 w-2 rounded-full bg-olive" />
              <span className="font-sans text-xs font-medium uppercase tracking-widest text-slate-light dark:text-muted">
                Claude Impact Labs
              </span>
            </span>
          </div>

          <h2 className="reveal reveal-delay-1 font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            AI for the Organizations
            <br />
            That Need It Most
          </h2>

          <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-2xl font-serif text-lg leading-relaxed text-slate-light dark:text-cloud-light">
            Impact Labs are one-day hackathons pairing local nonprofits and government
            agencies with volunteer AI builders to solve real community problems.
            Part of Anthropic&apos;s global Ambassador program.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/impact-labs"
              className="rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              Learn About Impact Labs
            </a>
            <a
              href="/impact-labs#apply"
              className="rounded-lg border border-slate-dark/20 px-7 py-3.5 font-sans text-sm font-medium text-slate-dark transition-colors hover:bg-slate-dark hover:text-ivory-light dark:border-cream/20 dark:text-cream dark:hover:bg-cream/10"
            >
              Submit an Organization
            </a>
          </div>

          {/* Proof point */}
          <p className="reveal reveal-delay-4 mt-8 font-sans text-sm text-cloud-dark dark:text-muted">
            San Diego pilot: 27 teams, city open data, working prototypes delivered in one day.
          </p>
        </div>
      </div>
    </section>
  );
}
