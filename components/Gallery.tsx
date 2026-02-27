'use client'

import { useEffect, useRef } from 'react'

const galleryItems = [
  {
    className: 'gallery-card-1',
    label: 'Irvine Kickoff',
    date: 'Jan 2025',
    attendees: 42,
  },
  {
    className: 'gallery-card-2',
    label: 'Newport Beach Hack Night',
    date: 'Feb 2025',
    attendees: 28,
  },
  {
    className: 'gallery-card-3',
    label: 'Anaheim Workshop',
    date: 'Mar 2025',
    attendees: 35,
  },
  {
    className: 'gallery-card-4',
    label: 'Costa Mesa Sprint',
    date: 'Apr 2025',
    attendees: 51,
  },
  {
    className: 'gallery-card-5',
    label: 'OC Summit',
    date: 'May 2025',
    attendees: 89,
  },
]

export default function Gallery() {
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
    <section ref={sectionRef} id="events" className="py-28 px-6 relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(212,131,106,0.03) 50%, transparent)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal pill mb-4 inline-block"
            style={{ background: 'rgba(212,131,106,0.1)', border: '1px solid rgba(212,131,106,0.2)', color: '#D4836A' }}>
            Gallery
          </span>
          <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl font-semibold text-cream leading-tight mt-4">
            From Our Claude Code Meetups
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-muted font-body text-lg max-w-xl mx-auto">
            Real moments from Claude Code meetups across Orange County
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Large card - spans 2 cols */}
          <div className="reveal col-span-2 md:col-span-1 md:row-span-2 group cursor-pointer rounded-2xl overflow-hidden relative"
            style={{ minHeight: '320px' }}>
            <div className={`${galleryItems[4].className} absolute inset-0 transition-transform duration-700 group-hover:scale-105`} />
            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-30"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E")' }} />
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="font-display text-cream font-semibold text-xl mb-1">{galleryItems[4].label}</div>
              <div className="flex items-center gap-3 text-xs text-cream/60 font-body">
                <span>{galleryItems[4].date}</span>
                <span>·</span>
                <span>{galleryItems[4].attendees} attendees</span>
              </div>
            </div>
            {/* Corner badge */}
            <div className="absolute top-4 right-4">
              <span className="pill text-xs" style={{ background: 'rgba(212,131,106,0.8)', color: 'white' }}>Featured</span>
            </div>
          </div>

          {/* Regular cards */}
          {galleryItems.slice(0, 4).map((item, i) => (
            <div key={item.label}
              className={`reveal reveal-delay-${i % 3 + 1} group cursor-pointer rounded-2xl overflow-hidden relative`}
              style={{ minHeight: '200px' }}>
              <div className={`${item.className} absolute inset-0 transition-transform duration-700 group-hover:scale-105`} />
              {/* Noise */}
              <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E")' }} />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-display text-cream font-semibold text-sm mb-0.5">{item.label}</div>
                <div className="flex items-center gap-2 text-xs text-cream/50 font-body">
                  <span>{item.date}</span>
                  <span>·</span>
                  <span>{item.attendees} attendees</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA under gallery */}
        <div className="reveal reveal-delay-3 text-center mt-12">
          <a href="#join"
            className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium font-body">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            View All Events
          </a>
        </div>
      </div>
    </section>
  )
}
