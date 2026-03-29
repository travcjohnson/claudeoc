const topicCards = [
  { icon: "📊", label: "AI in Finance" },
  { icon: "🎯", label: "AI in Sales" },
  { icon: "⚖️", label: "AI in Legal" },
  { icon: "📣", label: "AI in Marketing" },
  { icon: "❤️", label: "AI in Healthcare" },
  { icon: "📚", label: "AI in Education" },
  { icon: "⚙️", label: "AI in Operations" },
  { icon: "+", label: "Propose a Topic", custom: true },
];

const developerPoints = [
  "Claude Code workshops and co-working sessions",
  "Technical deep-dives and demos",
  "Dedicated developer community channels",
];

export function GetInvolved() {
  return (
    <section id="get-involved" className="bg-ivory-medium py-24 lg:py-32">
      <div className="max-w-[89.5rem] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-slate-dark mb-4">
            Get Involved
          </h2>
          <p className="font-serif text-lg text-slate-light leading-relaxed">
            There are many ways to contribute and grow with ClaudeOC.
          </p>
        </div>

        <div className="space-y-12">
          {/* --- 1. Lead a Conversation --- */}
          <div className="bg-white rounded-xl border border-slate-dark/10 p-8">
            <div className="mb-6">
              <h3 className="font-sans font-semibold text-2xl text-slate-dark mb-2">
                Lead a Conversation
              </h3>
              <p className="font-serif text-slate-light leading-relaxed max-w-2xl">
                We&apos;re looking for experts who want to lead deep-dive sessions at
                future events. Share your expertise and shape the community&apos;s
                learning.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
              {topicCards.map((card) =>
                card.custom ? (
                  <div
                    key={card.label}
                    className="rounded-lg border border-dashed border-clay p-4 flex items-center gap-3 bg-white"
                  >
                    <span className="text-clay font-sans font-bold text-lg leading-none">
                      +
                    </span>
                    <span className="font-sans font-medium text-sm text-clay">
                      {card.label}
                    </span>
                  </div>
                ) : (
                  <div
                    key={card.label}
                    className="rounded-lg border border-slate-dark/10 p-4 flex items-center gap-3 bg-white"
                  >
                    <span className="text-lg leading-none">{card.icon}</span>
                    <span className="font-sans font-medium text-sm text-slate-dark">
                      {card.label}
                    </span>
                  </div>
                )
              )}
            </div>

            <a
              href="mailto:travis@claudeoc.com?subject=Speaker%20Application%20-%20ClaudeOC"
              className="inline-flex items-center font-sans font-medium text-slate-dark hover:text-clay transition-colors"
            >
              Apply to Lead a Session →
            </a>
          </div>

          {/* --- 2. For Developers --- */}
          <div className="bg-oat/50 rounded-xl p-8">
            <h3 className="font-sans font-semibold text-2xl text-slate-dark mb-3">
              Builders &amp; Developers
            </h3>
            <p className="font-serif text-slate-light leading-relaxed max-w-2xl mb-6">
              Whether you&apos;re building with Claude Code, MCP servers, the Agent
              SDK, or the API — we see you. While our meetups cover AI broadly
              across industries, we&apos;re building dedicated spaces for deep
              technical conversations too.
            </p>

            <ul className="space-y-3 mb-6">
              {developerPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="text-clay font-sans font-bold mt-0.5">✓</span>
                  <span className="font-serif text-slate-dark">{point}</span>
                </li>
              ))}
            </ul>

            <p className="font-serif text-slate-light text-sm mb-6 max-w-xl">
              Our events are for everyone — but if you want to go deeper on the
              technical side, we&apos;ve got you covered.
            </p>

            <a
              href="#connect"
              className="inline-flex items-center bg-slate-dark text-ivory-light rounded-lg px-6 py-3 font-sans font-medium hover:bg-slate-medium transition-colors"
            >
              Join Developer Channel →
            </a>
          </div>

          {/* --- 3. Share Your Feedback --- */}
          <div className="bg-white rounded-xl border border-slate-dark/10 p-8">
            <h3 className="font-sans font-semibold text-2xl text-slate-dark mb-3">
              Share Your Feedback
            </h3>
            <p className="font-serif text-slate-light leading-relaxed max-w-2xl mb-6">
              Help us build the community you want. What topics interest you?
              What would make events better?
            </p>
            <a
              href="mailto:travis@claudeoc.com?subject=Community%20Feedback"
              className="inline-flex items-center font-sans font-medium text-slate-dark hover:text-clay transition-colors"
            >
              Tell Us What You Want to Learn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
