import { SectionHeader } from "@/components/shared/SectionHeader";

const tiers = [
  {
    name: "Community Partner",
    perks: [
      "Logo on claudeoc.com",
      "Mention at events",
      "Newsletter inclusion",
      "Social media shoutout",
    ],
  },
  {
    name: "Event Sponsor",
    perks: [
      "Everything in Community, plus:",
      "5-minute speaking slot at event",
      "Demo table at venue",
      "Warm introductions to attendees",
      "Co-branded recap content",
      "Direct access to community Slack/WhatsApp",
    ],
  },
];

export function SponsorTiers() {
  return (
    <section className="bg-ivory-light py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <SectionHeader title="What Sponsors Get" />
        <div className="grid gap-6 md:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-xl border border-slate-dark/10 bg-white p-6 dark:border-white/10 dark:bg-stone-900"
            >
              <h3 className="font-sans text-lg font-semibold text-slate-dark dark:text-cream">
                {tier.name}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {tier.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-3 font-serif text-sm leading-relaxed text-slate-light dark:text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 font-serif text-xs text-cloud-dark dark:text-muted">
          Anthropic co-branding is not permitted per program guidelines. Sponsors
          partner with ClaudeOC, the community.
        </p>
      </div>
    </section>
  );
}
