'use client'

import { useEffect, useRef } from 'react'

export default function Community() {
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
    <section ref={sectionRef} id="professionals" className="py-28 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(212,131,106,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="reveal font-display text-4xl md:text-5xl font-semibold text-cream leading-tight">
            Find Your Community
          </h2>
          <p className="reveal reveal-delay-1 mt-4 text-muted font-body text-lg max-w-xl mx-auto">
            Whether you&apos;re a seasoned developer or just getting started with AI tools, there&apos;s a place for you.
          </p>
        </div>

        {/* Two segments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Professional Developers */}
          <div className="reveal reveal-delay-1 glass glass-hover rounded-2xl p-8 relative overflow-hidden group" id="professionals">
            {/* Background shape */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20 pointer-events-none"
              style={{ background: '#60A5FA', transform: 'translate(30%, -30%)' }} />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(96,165,250,0.12)', border: '1px solid rgba(96,165,250,0.25)' }}>
                <svg className="w-6 h-6" fill="none" stroke="#60A5FA" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              {/* Badge */}
              <span className="pill mb-4 inline-block text-xs"
                style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)', color: '#60A5FA' }}>
                Professional Developers
              </span>

              <h3 className="font-display text-2xl font-semibold text-cream mb-3 mt-3">
                Built for Engineers
              </h3>
              <p className="text-muted font-body leading-relaxed mb-8">
                For software engineers, architects, and technical leads integrating Claude Code into production workflows. Deep dives, architecture discussions, and real-world case studies.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Production Workflows', 'Architecture', 'Best Practices', 'Team Integration'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full font-body"
                    style={{ background: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.15)', color: '#93C5FD' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <a href="#join"
                className="inline-flex items-center gap-2 text-sm font-medium font-body transition-colors"
                style={{ color: '#60A5FA' }}>
                Learn More
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Vibe Coders */}
          <div className="reveal reveal-delay-2 glass glass-hover rounded-2xl p-8 relative overflow-hidden group" id="vibecoders">
            {/* Background shape */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20 pointer-events-none"
              style={{ background: '#D4836A', transform: 'translate(30%, -30%)' }} />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(212,131,106,0.12)', border: '1px solid rgba(212,131,106,0.25)' }}>
                <svg className="w-6 h-6" fill="none" stroke="#D4836A" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              {/* Badge */}
              <span className="pill mb-4 inline-block text-xs"
                style={{ background: 'rgba(212,131,106,0.1)', border: '1px solid rgba(212,131,106,0.2)', color: '#D4836A' }}>
                Vibe Coders
              </span>

              <h3 className="font-display text-2xl font-semibold text-cream mb-3 mt-3">
                For the Curious & Creative
              </h3>
              <p className="text-muted font-body leading-relaxed mb-8">
                For creators, entrepreneurs, and curious minds exploring what&apos;s possible with AI-assisted development. No gatekeeping — just people building cool things.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['No-Code Friendly', 'Side Projects', 'Startups', 'Creative Builds'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full font-body"
                    style={{ background: 'rgba(212,131,106,0.08)', border: '1px solid rgba(212,131,106,0.15)', color: '#E09C86' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <a href="#join"
                className="inline-flex items-center gap-2 text-sm font-medium font-body transition-colors group"
                style={{ color: '#D4836A' }}>
                Learn More
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
