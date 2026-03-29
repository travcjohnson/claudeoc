function ChatBubbleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M4 6C4 4.89543 4.89543 4 6 4H26C27.1046 4 28 4.89543 28 6V20C28 21.1046 27.1046 22 26 22H10L4 28V6Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M4 6C4 4.89543 4.89543 4 6 4H26C27.1046 4 28 4.89543 28 6V20C28 21.1046 27.1046 22 26 22H10L4 28V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="7" width="24" height="18" rx="2" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      <path d="M4 10L16 18L28 10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="6" width="24" height="22" rx="2" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      <path d="M4 13H28" stroke="currentColor" strokeWidth="2" />
      <path d="M11 4V9M21 4V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="9" y="17" width="4" height="4" rx="0.5" fill="currentColor" />
      <rect x="15" y="17" width="4" height="4" rx="0.5" fill="currentColor" />
    </svg>
  );
}

export function Connect() {
  return (
    <section id="connect" className="bg-ivory-medium py-24 lg:py-32">
      <div className="max-w-[89.5rem] mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <h2 className="font-sans font-bold text-3xl lg:text-4xl text-slate-dark mb-4">
            Stay Connected
          </h2>
          <p className="font-serif text-lg text-slate-light leading-relaxed">
            The community doesn&apos;t stop between events. Here&apos;s how to stay in the loop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp Community */}
          <div className="bg-white rounded-xl border border-slate-dark/10 p-8 flex flex-col">
            <div className="text-slate-dark mb-6">
              <ChatBubbleIcon />
            </div>
            <h3 className="font-sans font-semibold text-lg text-slate-dark mb-3">
              Join the Group Chat
            </h3>
            <p className="font-serif text-slate-light leading-relaxed mb-8 flex-1">
              Connect with fellow community members between events. Share projects, ask questions, and stay updated.
            </p>
            <a
              href="#"
              className="inline-block bg-slate-dark text-ivory-light rounded-lg px-6 py-3 font-sans font-medium text-sm hover:bg-slate-medium transition-colors text-center"
            >
              Join WhatsApp Group &rarr;
            </a>
          </div>

          {/* Email Updates */}
          <div className="bg-white rounded-xl border border-slate-dark/10 p-8 flex flex-col">
            <div className="text-slate-dark mb-6">
              <EnvelopeIcon />
            </div>
            <h3 className="font-sans font-semibold text-lg text-slate-dark mb-3">
              Get Email Updates
            </h3>
            <p className="font-serif text-slate-light leading-relaxed mb-8 flex-1">
              Hear about upcoming events, Impact Labs, and community news directly in your inbox.
            </p>
            <a
              href="mailto:travis@claudeoc.com?subject=Subscribe%20to%20ClaudeOC%20Updates"
              className="inline-block bg-slate-dark text-ivory-light rounded-lg px-6 py-3 font-sans font-medium text-sm hover:bg-slate-medium transition-colors text-center"
            >
              Subscribe &rarr;
            </a>
          </div>

          {/* Follow on Luma */}
          <div className="bg-white rounded-xl border border-slate-dark/10 p-8 flex flex-col">
            <div className="text-clay mb-6">
              <CalendarIcon />
            </div>
            <h3 className="font-sans font-semibold text-lg text-slate-dark mb-3">
              Follow Our Events
            </h3>
            <p className="font-serif text-slate-light leading-relaxed mb-8 flex-1">
              Never miss an event. Follow us on Luma to get notified when new meetups and hackathons are posted.
            </p>
            <a
              href="https://lu.ma/claude-oc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-clay text-white rounded-lg px-6 py-3 font-sans font-medium text-sm hover:opacity-90 transition-opacity text-center"
            >
              Follow on Luma &rarr;
            </a>
          </div>
        </div>

        <p className="font-serif text-cloud-medium text-center text-sm">
          Have a question? Reach out at{' '}
          <a
            href="mailto:travis@claudeoc.com"
            className="text-slate-light hover:text-slate-dark transition-colors underline underline-offset-2"
          >
            travis@claudeoc.com
          </a>
        </p>
      </div>
    </section>
  );
}
