const benefits = [
  "Cross-post our events to your community",
  "Get first access to event registrations for your members",
  "Co-host specialized workshops with us",
  "Access exclusive Anthropic resources and API credits",
  "Be featured as a partner community on our site",
];

export function CommunityLeaders() {
  return (
    <section className="bg-ivory-light py-24 dark:bg-stone-950 lg:py-32">
      <div className="max-w-[89.5rem] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-slate-dark dark:text-cream mb-4">
            Community Leaders
          </h2>
          <p className="font-serif text-lg text-slate-light dark:text-muted leading-relaxed">
            Run a tech community, AI group, or professional network? Let&apos;s
            amplify each other.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Benefits */}
          <div>
            <ul className="space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4">
                  <span className="text-clay font-sans font-bold text-lg mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span className="font-serif text-slate-dark dark:text-cream leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Partner card */}
          <div className="bg-white dark:bg-stone-900 rounded-xl border border-slate-dark/10 dark:border-white/10 p-8">
            <h3 className="font-sans font-semibold text-2xl text-slate-dark dark:text-cream mb-4">
              Partner With ClaudeOC
            </h3>
            <p className="font-serif text-slate-light dark:text-muted leading-relaxed mb-4">
              If you lead a community and want to give your members early access
              to Claude events, resources, and networking — we&apos;d love to work
              together.
            </p>
            <p className="font-serif text-sm text-cloud-medium dark:text-muted leading-relaxed mb-8">
              All we ask is that you cross-post our events to your community
              channels.
            </p>
            <a
              href="mailto:travis@claudeoc.com?subject=Community%20Leader%20Application"
              className="inline-flex items-center bg-clay text-white rounded-lg px-6 py-3 font-sans font-medium hover:bg-accent transition-colors"
            >
              Apply as Community Leader →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
