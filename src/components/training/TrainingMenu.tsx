const tiers = [
  {
    name: "Free Lunch & Learn",
    price: "FREE",
    priceBadge: "Limited time",
    details: "60–90 min · In-person or virtual",
    description:
      "Anthropic shipped 73 product updates in the last 60 days. Your team is already behind. I come to your office and get everyone up to speed — what Claude can do today, what's coming, and how teams like yours are using it. No laptops required, just show up.",
    accentGreen: true,
  },
  {
    name: "1-on-1 Coaching",
    price: "$250/hr",
    priceBadge: null,
    details: "Flexible scheduling · Virtual or in-person",
    description:
      "For the founder, VP, or team lead who wants to go deep before rolling AI out to the org. Learn to think in prompts, build agents, and evaluate what's real vs. hype.",
    accentGreen: false,
  },
  {
    name: "Team Workshop",
    price: "$5,000–$15,000",
    priceBadge: null,
    details: "Half-day or full-day · Up to 20 people · +$100/seat after 20",
    description:
      "Your whole team, building real things in one room. Curriculum tailored to your stack — devs shipping with Claude Code, PMs automating workflows, ops teams cutting manual work in half.",
    accentGreen: false,
  },
];

export function TrainingMenu() {
  return (
    <section className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            The Menu
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="divide-y divide-slate-dark/10 dark:divide-white/10">
            {tiers.map((tier) => (
              <div key={tier.name} className="py-10 first:pt-0 last:pb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="font-sans text-xl font-semibold text-slate-dark dark:text-cream">
                    {tier.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-sans text-lg font-bold ${
                        tier.accentGreen
                          ? "text-olive dark:text-emerald-400"
                          : "text-slate-dark dark:text-cream"
                      }`}
                    >
                      {tier.price}
                    </span>
                    {tier.priceBadge && (
                      <span className="rounded-full bg-olive/10 px-3 py-0.5 font-sans text-xs font-medium text-olive dark:bg-emerald-400/10 dark:text-emerald-400">
                        {tier.priceBadge}
                      </span>
                    )}
                  </div>
                </div>
                <p className="mt-2 font-sans text-xs font-medium uppercase tracking-wider text-cloud-dark dark:text-stone-400">
                  {tier.details}
                </p>
                <p className="mt-4 max-w-2xl font-serif text-base leading-relaxed text-slate-light dark:text-stone-300">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 border-t border-slate-dark/10 pt-8 text-center font-serif text-sm italic text-cloud-dark dark:border-white/10 dark:text-stone-400">
            Larger programs and ongoing engagements available&nbsp;&mdash;&nbsp;
            <a
              href="mailto:travis@aurapathai.com?subject=Custom Training Program"
              className="not-italic text-clay transition-colors hover:text-accent"
            >
              let&apos;s talk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
