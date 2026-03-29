import { EyebrowBadge } from "@/components/shared/EyebrowBadge";
import { StatRow } from "@/components/shared/StatRow";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-ivory-light dark:bg-stone-950 flex items-center overflow-hidden">
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[640px] w-[640px] rounded-full bg-oat/50 dark:bg-clay/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-[400px] w-[400px] rounded-full bg-manilla/40 dark:bg-clay/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[900px] w-[900px] rounded-full bg-ivory-medium/60 dark:bg-stone-900/30"
      />

      <div className="relative z-10 mx-auto w-full max-w-[89.5rem] px-6 lg:px-10 pt-24 pb-20">
        <div className="flex flex-col items-start max-w-4xl">
          {/* Eyebrow badge */}
          <div className="mb-8"><EyebrowBadge label="Anthropic Ambassador Community" /></div>

          {/* Main heading */}
          <h1 className="font-sans font-bold leading-[0.95] tracking-tight text-slate-dark dark:text-cream">
            <span className="block text-6xl md:text-7xl lg:text-8xl">
              <span className="text-clay">C</span>laude
            </span>
            <span className="block text-6xl md:text-7xl lg:text-8xl mt-1">
              Orange County
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-8 max-w-2xl font-serif text-xl leading-relaxed text-slate-light dark:text-muted md:text-2xl">
            The official Anthropic Ambassador community bringing AI builders,
            leaders, and curious minds together in Orange County.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#events"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-dark px-7 py-3.5 font-sans text-sm font-medium text-ivory-light transition-colors hover:bg-slate-medium dark:bg-clay dark:hover:bg-accent"
            >
              Next Event
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#get-involved"
              className="inline-flex items-center rounded-lg border border-slate-dark px-7 py-3.5 font-sans text-sm font-medium text-slate-dark transition-colors hover:bg-slate-dark hover:text-ivory-light dark:border-cream/20 dark:text-cream dark:hover:bg-cream/10"
            >
              Get Involved
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16">
            <StatRow
              stats={[
                { value: "10,000+", label: "Attendees Globally" },
                { value: "89", label: "Meetups Worldwide" },
                { value: "50+", label: "Cities" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
