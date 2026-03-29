'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--mouse-x', `${x}%`)
      el.style.setProperty('--mouse-y', `${y}%`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
    >
      {/* Ambient glow that follows mouse */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(212,131,106,0.06), transparent 70%)`,
        }}
      />

      {/* Static ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(212,131,106,0.4), transparent 70%)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.4), transparent 70%)', animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <span className="pill" style={{ background: 'rgba(212,131,106,0.12)', border: '1px solid rgba(212,131,106,0.25)', color: '#D4836A' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse inline-block" />
            Orange County, California
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight mb-6 animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}>
          Orange County&apos;s
          <br />
          <span className="gradient-text">Claude Code Community</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted font-body font-light max-w-2xl mx-auto mb-4 animate-fade-up"
          style={{ animationDelay: '0.35s', opacity: 0 }}>
          Where OC builders learn, ship, and grow together
        </p>

        <p className="text-base md:text-lg text-muted/70 font-body max-w-xl mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: '0.45s', opacity: 0 }}>
          Join OC&apos;s growing Claude AI community. Attend meetups, learn from peers, and build amazing things with Claude Code.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: '0.55s', opacity: 0 }}>
          <a href="#events"
            className="btn-coral px-8 py-4 rounded-xl text-base font-medium font-body w-full sm:w-auto">
            View Upcoming Events
          </a>
          <a href="#join"
            className="btn-ghost px-8 py-4 rounded-xl text-base font-medium font-body w-full sm:w-auto">
            Join the Community
          </a>
        </div>

        {/* First event badge */}
        <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
          <span className="pill font-body text-sm"
            style={{ background: 'rgba(212,131,106,0.08)', border: '1px solid rgba(212,131,106,0.2)', color: '#D4836A/80' }}>
            Our first event &middot; February 2025 &middot; 300+ registrations
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: '1.2s', opacity: 0 }}>
        <span className="text-xs text-muted/50 font-body uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-coral/30 to-transparent" />
      </div>
    </section>
  )
}
