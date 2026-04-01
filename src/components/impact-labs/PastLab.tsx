import { GlassCard } from "@/components/shared/GlassCard";

export function PastLab() {
  return (
    <section id="past-lab" className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            Proof It Works
          </h2>
          <p className="mt-5 font-serif text-xl leading-relaxed text-slate-light dark:text-cloud-light">
            The first Claude Impact Lab launched in San Diego. The format is now
            expanding to cities globally.
          </p>
        </div>

        <GlassCard className="max-w-2xl">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-clay/10 dark:bg-clay/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-clay"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div>
              <p className="font-sans text-sm font-semibold uppercase tracking-wider text-clay">
                San Diego &middot; March 7, 2026
              </p>
              <h3 className="mt-2 font-sans text-xl font-bold text-slate-dark dark:text-cream">
                27 teams built AI tools using City open data
              </h3>
              <p className="mt-3 font-serif text-base leading-relaxed text-slate-light dark:text-cloud-light">
                Builders paired with city staff and nonprofit leaders to create
                working prototypes in a single day — from public transit
                accessibility tools to permit search assistants. The event proved
                that volunteer-driven AI builds can produce real, usable
                software for the organizations that need it most.
              </p>
              <a
                href="https://luma.com/6ok9h92y"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-clay transition-colors hover:text-accent"
              >
                View the original event
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
