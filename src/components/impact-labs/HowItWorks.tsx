import { GlassCard } from "@/components/shared/GlassCard";

const stats = [
  {
    value: "1 day",
    label: "Build Event",
    description:
      "A focused, single-day session. Your staff invests one day — our builders handle the rest.",
  },
  {
    value: "$0",
    label: "Cost to Your Org",
    description:
      "No consulting fees, no contracts. Volunteer builders donate their time and expertise.",
  },
  {
    value: "1 tool",
    label: "Working Prototype",
    description:
      "You leave with a functional AI tool built around your specific workflow — not a slide deck.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            How It Works
          </h2>
          <p className="mt-5 font-serif text-xl leading-relaxed text-slate-light dark:text-cloud-light">
            Impact Labs are designed for organizations that are stretched thin
            but sitting on problems AI can help solve. We handle the
            technology — you bring the domain knowledge.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <GlassCard key={stat.label}>
              <p className="font-sans text-5xl font-bold tracking-tight text-clay">
                {stat.value}
              </p>
              <p className="mt-2 font-sans text-lg font-semibold text-slate-dark dark:text-cream">
                {stat.label}
              </p>
              <p className="mt-3 font-serif text-base leading-relaxed text-slate-light dark:text-cloud-light">
                {stat.description}
              </p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-slate-dark/10 bg-white p-6 dark:border-white/5 dark:bg-stone-950">
          <p className="font-sans text-sm font-semibold uppercase tracking-wider text-clay">
            Not a one-off
          </p>
          <p className="mt-2 font-serif text-base leading-relaxed text-slate-light dark:text-cloud-light">
            Impact Labs are the start of a long-term partnership. After build
            day, our community stays connected with your team to iterate, train
            staff, and ensure the tool actually gets used. We measure success in
            adoption, not applause.
          </p>
        </div>
      </div>
    </section>
  );
}
