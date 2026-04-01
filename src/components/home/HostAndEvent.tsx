import { CONTACT } from "@/lib/constants";

export function HostAndEvent() {
  return (
    <section className="py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Travis */}
          <div>
            <div className="mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-clay/20 to-ivory-dark dark:from-clay/30 dark:to-stone-800">
              <span className="font-sans text-5xl font-bold text-clay">TJ</span>
            </div>
            <h2 className="font-sans text-3xl font-bold text-slate-dark dark:text-cream">Travis Johnson</h2>
            <p className="mt-3 max-w-md font-serif text-base leading-relaxed text-slate-light dark:text-cloud-light">
              Claude Ambassador, co-founder of AuraPath AI, and the person behind ClaudeOC. Teaching 500+ professionals hands-on AI skills across Orange County.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Claude Ambassador", "AuraPath AI", "Duke AI Certificate", "500+ Trained"].map((c) => (
                <span key={c} className="rounded-full border border-slate-dark/8 bg-white px-3 py-1.5 font-sans text-xs font-medium text-slate-light dark:border-white/10 dark:bg-stone-800 dark:text-cloud-light">{c}</span>
              ))}
            </div>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-medium text-clay hover:text-accent">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>

          {/* Next Event */}
          <div className="relative overflow-hidden rounded-2xl">
            <img src="/images/events/claudeoc-upcoming.jpg" alt="ClaudeOC upcoming event" loading="lazy" className="h-64 w-full object-cover lg:h-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="mb-2 inline-block rounded-full bg-clay px-3 py-1 font-sans text-xs font-medium text-white">Next Meetup</span>
              <h3 className="font-sans text-xl font-bold text-white">Orange County</h3>
              <p className="mt-1 font-serif text-sm text-white/80">In-person meetup for builders, founders, and the AI-curious.</p>
              <a href={CONTACT.luma} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/20 px-5 py-2.5 font-sans text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30">
                Register on Luma <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
