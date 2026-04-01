import { GlassCard } from "@/components/shared/GlassCard";

export function FeaturedEvent() {
  return (
    <section className="bg-ivory-light py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-cloud-dark dark:text-muted">
          Next Event
        </h2>
        <GlassCard className="mt-8 p-0 overflow-hidden" hover={false}>
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-1 text-xs font-medium text-olive dark:bg-olive/20">
                <span className="h-1.5 w-1.5 rounded-full bg-olive" />
                Upcoming
              </div>
              <h3 className="mt-6 font-sans text-2xl font-bold text-slate-dark dark:text-cream md:text-3xl">
                ClaudeOC Meetup
              </h3>
              <p className="mt-4 font-serif text-base leading-relaxed text-slate-light dark:text-cloud-light">
                Join us for the next ClaudeOC meetup. Live demos, hands-on building
                time, and conversations with the builders shaping AI adoption in Orange
                County. All experience levels welcome.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <span className="inline-flex items-center gap-2 font-sans font-medium text-slate-medium dark:text-cloud-light">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Check Luma for date
                </span>
                <span className="inline-flex items-center gap-2 font-sans font-medium text-slate-medium dark:text-cloud-light">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Orange County, CA
                </span>
              </div>
              <div className="mt-8">
                <a
                  href="https://lu.ma/claudeoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent"
                >
                  Register on Luma
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-clay/10 via-sky/10 to-olive/10 dark:from-clay/20 dark:via-sky/15 dark:to-olive/15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-clay/10 dark:bg-clay/20">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-clay">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <p className="mt-4 font-sans text-sm font-medium text-cloud-dark dark:text-muted">
                    Event details on Luma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
