const benefits = [
  "Anthropic's official community hackathon program",
  "Ambassadors choose the cause and partner with local institutions",
  "Participants receive $50 in API credits",
  "Winners receive $500 in API credits",
  "Up to $5,000 sponsorship per hackathon",
  "Limited edition merch — exclusively available at hackathons",
  "Completed projects featured on Anthropic's community page",
];

const partnerFits = [
  "Nonprofits with data or operational challenges",
  "Universities and research institutions",
  "Local government agencies",
  "Community organizations",
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-clay"
    >
      <path
        d="M3 8l3.5 3.5L13 4.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DotIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-clay/60"
    />
  );
}

export function ImpactLabs() {
  return (
    <section id="impact-labs" className="bg-slate-dark py-24 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 font-sans text-4xl font-bold text-ivory-light lg:text-5xl">
            Claude Impact Labs
          </h2>
          <p className="font-serif text-lg text-cloud-light">
            Community-driven hackathons solving real problems with AI.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Description */}
          <div className="flex flex-col gap-6">
            <p className="font-serif text-base leading-relaxed text-cloud-light">
              Impact Labs are Anthropic's official community hackathon program —
              where local ambassadors partner with institutions to tackle
              real-world challenges using AI. Each lab is focused, funded, and
              open to the community.
            </p>
            <ul className="flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="font-serif text-sm text-cloud-light">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Partner card */}
          <div className="rounded-xl border border-ivory-light/10 bg-ivory-light/10 p-8 backdrop-blur-sm">
            <h3 className="mb-3 font-sans text-2xl font-semibold text-ivory-light">
              Bring an Impact Lab to Your Organization
            </h3>
            <p className="mb-6 font-serif text-sm leading-relaxed text-cloud-light">
              Are you a nonprofit, university, or institution with a challenge
              that AI could help solve? We're looking for partners.
            </p>

            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-cloud-medium">
              Who's a good fit
            </p>
            <ul className="mb-8 flex flex-col gap-3">
              {partnerFits.map((fit) => (
                <li key={fit} className="flex items-start gap-3">
                  <DotIcon />
                  <span className="font-serif text-sm text-cloud-light">
                    {fit}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:travis@claudeoc.com?subject=Impact%20Lab%20Partnership%20Inquiry"
              className="inline-block rounded-lg bg-clay px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              Inquire About Partnership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
