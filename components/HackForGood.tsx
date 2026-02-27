'use client'
import { useEffect, useRef } from 'react'

const impactAreas = [
  { icon: '🏥', label: 'Healthcare' },
  { icon: '🎓', label: 'Education' },
  { icon: '🏛️', label: 'Local Gov' },
  { icon: '♻️', label: 'Sustainability' },
]

export default function HackForGood() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = sectionRef.current
    if (section) {
      const reveals = section.querySelectorAll('.reveal')
      reveals.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Subtle background overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 60% 40%, rgba(96,165,250,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN */}
          <div>
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-body mb-6"
              style={{
                background: 'rgba(96,165,250,0.1)',
                border: '1px solid rgba(96,165,250,0.25)',
                color: '#60A5FA',
              }}
            >
              OC Claude Impact Lab
            </div>

            {/* Heading */}
            <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl text-cream leading-tight mb-6">
              Build AI for<br className="hidden md:block" /> Orange County
            </h2>

            {/* Body copy */}
            <p className="reveal reveal-delay-2 text-muted font-body text-lg leading-relaxed">
              A hackathon where you partner with a local government or nonprofit to solve real problems
              in your city &mdash; partnering with hospitals, schools, city agencies, and mayor&apos;s offices
              to build tools that matter.
            </p>
            <p className="reveal reveal-delay-3 text-muted font-body text-lg leading-relaxed mt-4">
              You choose the cause, structure the event, and own the judging criteria.
              Got a problem worth solving? Let&apos;s talk.
            </p>

            {/* Impact area pills */}
            <div className="reveal reveal-delay-3 flex flex-wrap gap-2 mt-6">
              {impactAreas.map((a) => (
                <span
                  key={a.label}
                  className="glass rounded-full px-3 py-1.5 text-sm font-body text-muted"
                >
                  {a.icon} {a.label}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Event Card */}
          <div className="reveal reveal-delay-2">
            <div className="glass glass-hover rounded-2xl p-7 relative overflow-hidden">
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-10 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, #60A5FA 0%, transparent 70%)',
                }}
              />

              {/* Impact Lab badge */}
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-body mb-4"
                style={{
                  background: 'rgba(96,165,250,0.1)',
                  border: '1px solid rgba(96,165,250,0.25)',
                  color: '#60A5FA',
                }}
              >
                OC Claude Impact Lab
              </div>

              {/* Card title */}
              <h3 className="font-display text-xl text-cream">
                Orange County | Claude Impact Lab
              </h3>
              <p className="text-muted text-sm mt-1 font-body">
                Partner with a local institution to solve real problems in your city
              </p>

              {/* Status badge */}
              <div className="mt-3">
                <span className="pill bg-[#D4836A]/20 text-[#D4836A] border border-[#D4836A]/30 text-xs font-body px-3 py-1 rounded-full">
                  Coming Spring 2025
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-white/5 mt-4 mb-4" />

              {/* Prize details */}
              <ul className="space-y-2">
                {[
                  'Up to $5,000 in event cost sponsorship',
                  '$50 API credits for all participants',
                  '$500 API credits for winners + limited edition merch',
                  'An Anthropic judge on the panel (best effort)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="8" cy="8" r="8" fill="rgba(74,222,128,0.15)" />
                      <path
                        d="M5 8l2 2 4-4"
                        stroke="#4ADE80"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-muted font-body">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="mailto:hello@claudeoc.com?subject=Claude%20Impact%20Lab%20Idea"
                className="btn-coral px-6 py-3 rounded-xl mt-5 inline-block font-body text-sm"
              >
                Submit Your Idea &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM QUOTE */}
        <div className="mt-20">
          <div className="border-t border-white/5 mb-12" />
          <blockquote className="text-center">
            <p className="font-display text-xl md:text-2xl italic text-muted/80 max-w-2xl mx-auto leading-relaxed">
              &ldquo;Technology should amplify human resilience, not replace it.&rdquo;
            </p>
            <footer className="mt-3 text-sm text-muted/50 font-body">
              &mdash; Travis Johnson, Claude Code OC
            </footer>
          </blockquote>
        </div>

      </div>
    </section>
  )
}
