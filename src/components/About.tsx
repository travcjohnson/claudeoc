import { SectionHeader } from "@/components/shared/SectionHeader";

const expectCards = [
  {
    icon: "🛠️",
    title: "Hands-on Workshops",
    description:
      "Learn Claude Code, build MCP servers, and sharpen your prompt engineering skills with fellow practitioners.",
  },
  {
    icon: "💬",
    title: "Industry Conversations",
    description:
      "Explore AI applications across finance, legal, marketing, sales, and more with professionals doing real work.",
  },
  {
    icon: "🤝",
    title: "Networking",
    description:
      "Connect with builders, founders, and professionals who are shaping the way AI gets used in the real world.",
  },
  {
    icon: "⚡",
    title: "Hackathons",
    description:
      "Compete in Claude Impact Labs events for prizes, API credits, and the chance to ship something that matters.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-ivory-medium py-24 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        {/* Section header */}
        <SectionHeader
          title="What is ClaudeOC?"
          subtitle="A community rooted in curiosity, built for people who want to understand — and shape — how AI changes the way we work and live."
        />

        {/* Two-column grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: narrative */}
          <div className="flex flex-col gap-6 font-serif text-lg leading-relaxed text-slate-light">
            <p>
              ClaudeOC is part of Anthropic&apos;s global{" "}
              <strong className="font-semibold text-slate-dark">
                Claude Ambassador program
              </strong>{" "}
              — a network of community-led chapters connecting builders,
              professionals, and curious minds exploring what AI can do.
            </p>
            <p>
              We gather monthly for meetups, workshops, and hackathons across
              Orange County. Topics range from hands-on technical deep-dives to
              broad conversations about how AI is reshaping industries,
              workflows, and decisions.
            </p>
            <p>
              Whether you&apos;re using Claude to transform your business or just
              getting started with AI, there&apos;s a place for you here.
            </p>

            {/* Highlighted pull quote */}
            <blockquote className="mt-2 rounded-xl border-l-4 border-clay bg-white px-6 py-5">
              <p className="font-serif text-base italic text-slate-medium leading-relaxed">
                &ldquo;We believe the most important conversations about AI happen
                in rooms where builders and practitioners share what&apos;s
                actually working — and what isn&apos;t.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right: What to Expect cards */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-cloud-dark mb-2">
              What to Expect
            </h3>
            {expectCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-slate-dark/10 bg-white p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-xl" aria-hidden="true">
                    {card.icon}
                  </span>
                  <h4 className="font-sans text-base font-semibold text-slate-dark">
                    {card.title}
                  </h4>
                </div>
                <p className="font-serif text-sm leading-relaxed text-slate-light">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Powered by Anthropic */}
        <div className="mt-16 flex items-center gap-3 border-t border-slate-dark/10 pt-8">
          <span className="font-sans text-xs uppercase tracking-widest text-cloud-medium">
            Powered by
          </span>
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-cloud-medium">
            Anthropic
          </span>
          <span className="h-px flex-1 bg-slate-dark/5" />
        </div>
      </div>
    </section>
  );
}
