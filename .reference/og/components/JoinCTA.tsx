'use client'

import { useEffect, useRef } from 'react'

export default function JoinCTA() {
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="join" className="py-28 px-6 relative overflow-hidden">
      <div className="divider mb-0" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[400px] rounded-full blur-3xl opacity-10 animate-glow-pulse"
          style={{ background: 'radial-gradient(ellipse, #D4836A, transparent 70%)' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden glow-coral">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
            style={{ background: 'radial-gradient(circle at top left, rgba(212,131,106,0.1), transparent 70%)' }} />
          <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
            style={{ background: 'radial-gradient(circle at bottom right, rgba(96,165,250,0.08), transparent 70%)' }} />

          {/* Badge */}
          <div className="reveal mb-6 flex justify-center">
            <span className="pill"
              style={{ background: 'rgba(212,131,106,0.12)', border: '1px solid rgba(212,131,106,0.25)', color: '#D4836A' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse inline-block" />
              Now Accepting Members
            </span>
          </div>

          <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-6xl font-semibold text-cream leading-tight mb-6">
            Ready to Join?
          </h2>

          <p className="reveal reveal-delay-2 text-muted font-body text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Connect with the Orange County Claude Code community. Get access to exclusive events, resources, and a network of like-minded builders across SoCal.
          </p>

          {/* Benefits list */}
          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center items-start sm:items-center mb-10 text-left">
            {[
              'Exclusive event invites',
              'Member directory access',
              'Resource library',
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm font-body text-muted">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#4ADE80" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {benefit}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@claudeoc.com"
              className="btn-coral px-10 py-4 rounded-xl text-base font-medium font-body">
              Join the Community
            </a>
            <a href="#events"
              className="btn-ghost px-10 py-4 rounded-xl text-base font-medium font-body">
              View Events
            </a>
          </div>

          <p className="reveal reveal-delay-4 mt-6 text-muted/40 text-xs font-body">
            Free to join. Events are community-led and low-key.
          </p>
        </div>
      </div>
    </section>
  )
}
