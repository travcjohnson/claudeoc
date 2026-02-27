'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #D4836A, #C07055)' }}>
            <span className="text-white font-display font-bold text-sm">C</span>
          </div>
          <span className="font-display font-semibold text-cream text-lg tracking-tight">
            Claude Code <span className="gradient-text">OC</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', href: '#' },
            { label: 'Professionals', href: '#professionals' },
            { label: 'Vibe Coders', href: '#vibecoders' },
            { label: 'Community', href: '#join' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted hover:text-cream transition-colors text-sm font-body font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 glass rounded-lg flex items-center justify-center text-muted hover:text-cream hover:border-coral/30 transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          <a
            href="#join"
            className="btn-coral px-4 py-2 rounded-lg text-sm font-medium font-body"
          >
            Join Community
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted hover:text-cream transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/5 mt-2">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {[
              { label: 'Home', href: '#' },
              { label: 'Professionals', href: '#professionals' },
              { label: 'Vibe Coders', href: '#vibecoders' },
              { label: 'Community', href: '#join' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-muted hover:text-cream transition-colors text-sm font-body font-medium py-1"
              >
                {link.label}
              </a>
            ))}
            <a href="#join" className="btn-coral px-4 py-2 rounded-lg text-sm font-medium font-body text-center mt-2">
              Join Community
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
