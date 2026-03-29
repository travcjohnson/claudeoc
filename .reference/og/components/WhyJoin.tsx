'use client'

import { useEffect, useRef } from 'react'

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accent: '#D4836A',
    title: 'Show Up',
    description: 'Come to a meetup, bring your laptop, and build something real in a room full of people doing the same.',
    delay: 0,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    accent: '#60A5FA',
    title: 'Learn Together',
    description: 'Sessions mix live demos, hands-on building time, and open sharing. All levels welcome — from first prompt to production deploys.',
    delay: 1,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    accent: '#4ADE80',
    title: 'Keep Building',
    description: 'The community lives between events too. Share what you\'re working on, ask questions, and find collaborators.',
    delay: 2,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    accent: '#D4836A',
    title: 'Go Deeper',
    description: 'Members who want more can lead city groups, mentor newcomers, or help shape future events and hackathons.',
    delay: 3,
  },
]

export default function WhyJoin() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      <div className="divider mb-0" />

      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-coral/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="pill mb-4 inline-block"
              style={{ background: 'rgba(212,131,106,0.1)', border: '1px solid rgba(212,131,106,0.2)', color: '#D4836A' }}>
              Why Join
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl font-semibold text-cream leading-tight">
            How the Community Works
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-muted font-body text-lg max-w-xl mx-auto">
            More than a community — a catalyst for what you&apos;ll build next.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${f.delay} glass glass-hover rounded-2xl p-6 flex flex-col gap-4`}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${f.accent}18`,
                  border: `1px solid ${f.accent}30`,
                  color: f.accent,
                }}
              >
                {f.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display text-lg font-semibold text-cream mb-2">{f.title}</h3>
                <p className="text-muted text-sm font-body leading-relaxed">{f.description}</p>
              </div>

              {/* Accent line */}
              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="w-8 h-0.5 rounded-full" style={{ background: f.accent, opacity: 0.4 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
