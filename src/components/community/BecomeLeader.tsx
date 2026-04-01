import { GlassCard } from "@/components/shared/GlassCard";

const benefits = [
  "Host events in your city with community support",
  "Access to Anthropic Ambassador resources",
  "Build your local AI network",
  "Shape the future of AI adoption in OC",
];

export function BecomeLeader() {
  return (
    <section className="bg-ivory-light py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <GlassCard hover={false} className="p-8 lg:p-12">
          <h2 className="font-sans text-2xl font-bold text-slate-dark dark:text-cream md:text-3xl">
            Organize Claude Code in Your City
          </h2>
          <p className="mt-4 max-w-xl font-serif text-base leading-relaxed text-slate-light dark:text-cloud-light">
            Want to bring the ClaudeOC experience to your neighborhood? We provide
            the playbook, resources, and community backing.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 font-serif text-sm leading-relaxed text-slate-light dark:text-cloud-light"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="mailto:travis@aurapathai.com?subject=ClaudeOC City Leader Application"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-dark px-7 py-3.5 font-sans text-sm font-medium text-ivory-light transition-colors hover:bg-slate-medium dark:bg-clay dark:hover:bg-accent"
            >
              Apply to Lead
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
