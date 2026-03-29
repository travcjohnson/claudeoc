'use client'

import { useEffect, useRef } from 'react'

export default function StayConnected() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="join-whatsapp" ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(212,131,106,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal mb-4 flex justify-center">
            <span
              className="pill text-xs"
              style={{ background: 'rgba(212,131,106,0.12)', border: '1px solid rgba(212,131,106,0.25)', color: '#D4836A' }}
            >
              Stay Connected
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl font-semibold text-cream leading-tight">
            Stay in the Loop
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-muted font-body text-lg max-w-xl mx-auto">
            The conversation doesn&apos;t stop when the event does.
          </p>
        </div>

        {/* Three channel cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: WhatsApp */}
          <div className="reveal reveal-delay-1 glass glass-hover rounded-2xl p-8 relative overflow-hidden group">
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20 pointer-events-none"
              style={{ background: '#D4836A', transform: 'translate(30%, -30%)' }}
            />
            <div className="relative z-10">
              {/* WhatsApp icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(212,131,106,0.12)', border: '1px solid rgba(212,131,106,0.25)' }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.58A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52z"
                    fill="#D4836A"
                    opacity="0.2"
                  />
                  <path
                    d="M17.47 14.38c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.18-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.46-.62-.47H9.1c-.18 0-.46.07-.7.33-.24.26-.9.88-.9 2.15s.92 2.49 1.05 2.66c.13.18 1.81 2.76 4.38 3.87.61.26 1.09.42 1.46.54.61.2 1.17.17 1.61.1.49-.07 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"
                    fill="#D4836A"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.07-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
                    stroke="#D4836A"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>

              <h3 className="font-display text-xl font-semibold text-cream mb-3">
                WhatsApp Community
              </h3>
              <p className="text-muted font-body leading-relaxed mb-8 text-sm">
                Fastest way to connect. Real conversations, event announcements, and members sharing what they&apos;re building.
              </p>

              <a
                href="#join-whatsapp"
                className="btn-coral px-6 py-3 rounded-xl text-sm font-medium font-body inline-block"
              >
                Join WhatsApp &rarr;
              </a>
            </div>
          </div>

          {/* Card 2: Newsletter */}
          <div className="reveal reveal-delay-2 glass glass-hover rounded-2xl p-8 relative overflow-hidden group">
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20 pointer-events-none"
              style={{ background: '#60A5FA', transform: 'translate(30%, -30%)' }}
            />
            <div className="relative z-10">
              {/* Envelope icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(96,165,250,0.12)', border: '1px solid rgba(96,165,250,0.25)' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="#60A5FA" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h3 className="font-display text-xl font-semibold text-cream mb-3">
                Monthly Newsletter
              </h3>
              <p className="text-muted font-body leading-relaxed mb-6 text-sm">
                Event recaps, OC builder spotlights, and what&apos;s new in Claude Code.
              </p>

              <form
                action="mailto:hello@claudeoc.com"
                method="get"
                encType="text/plain"
                className="flex gap-2"
              >
                <input
                  type="email"
                  name="body"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-3 py-2.5 rounded-xl text-sm font-body text-cream placeholder-muted/50 outline-none focus:ring-1 focus:ring-coral/40"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <button
                  type="submit"
                  className="btn-coral px-4 py-2.5 rounded-xl text-sm font-medium font-body flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Card 3: LinkedIn */}
          <div className="reveal reveal-delay-3 glass glass-hover rounded-2xl p-8 relative overflow-hidden group">
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20 pointer-events-none"
              style={{ background: '#A8A29E', transform: 'translate(30%, -30%)' }}
            />
            <div className="relative z-10">
              {/* LinkedIn icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(168,162,158,0.12)', border: '1px solid rgba(168,162,158,0.25)' }}
              >
                <svg className="w-6 h-6" fill="#A8A29E" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>

              <h3 className="font-display text-xl font-semibold text-cream mb-3">
                LinkedIn
              </h3>
              <p className="text-muted font-body leading-relaxed mb-8 text-sm">
                Follow for event announcements and community highlights.
              </p>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-6 py-3 rounded-xl text-sm font-medium font-body inline-block"
              >
                Follow &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="reveal reveal-delay-4 text-center mt-10 text-xs font-body" style={{ color: 'rgba(168,162,158,0.5)' }}>
          We don&apos;t spam. Just the good stuff.
        </p>
      </div>
    </section>
  )
}
