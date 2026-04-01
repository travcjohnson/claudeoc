import { EyebrowBadge } from "@/components/shared/EyebrowBadge";
import { StatRow } from "@/components/shared/StatRow";

const stats = [
  { value: "400+", label: "Registrants per Event" },
  { value: "3×", label: "Oversubscribed" },
  { value: "62", label: "Founders & CEOs" },
  { value: "Monthly", label: "Event Cadence" },
];

export function SponsorsHero() {
  return (
    <section className="bg-ivory-light pt-32 pb-24 dark:bg-stone-950 lg:pb-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <EyebrowBadge label="Anthropic Ambassador" />
        <h1 className="mt-8 max-w-3xl font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl lg:text-6xl">
          Partner With Orange County&apos;s Fastest-Growing AI Community
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-slate-light dark:text-cloud-light">
          ClaudeOC is part of Anthropic&apos;s global Ambassador network. We
          connect your brand with the builders, leaders, and decision-makers
          shaping AI adoption in Southern California.
        </p>
        <div className="mt-10">
          <a
            href="#sponsor-interest"
            className="inline-flex items-center gap-2 rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            Become a Sponsor
            <span aria-hidden="true">&darr;</span>
          </a>
        </div>
        <div className="mt-16 border-t border-slate-dark/10 pt-8 dark:border-white/10">
          <StatRow stats={stats} />
        </div>
      </div>
    </section>
  );
}
