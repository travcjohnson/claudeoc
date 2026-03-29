'use client'
import { useEffect, useRef } from 'react'

const cities = [
  { name: 'Irvine', status: 'active' },
  { name: 'Newport Beach', status: 'active' },
  { name: 'Huntington Beach', status: 'soon' },
  { name: 'Anaheim', status: 'soon' },
  { name: 'Costa Mesa', status: 'open' },
  { name: 'Fullerton', status: 'open' },
  { name: 'Santa Ana', status: 'open' },
  { name: 'Garden Grove', status: 'open' },
]

type CityStatus = 'active' | 'soon' | 'open'

const statusConfig: Record<CityStatus, { bg: string; border: string; text: string; label: string }> = {
  active: {
    bg: 'bg-green-400/10',
    border: 'border-green-400/25',
    text: 'text-green-400',
    label: 'Active',
  },
  soon: {
    bg: 'bg-[#D4836A]/10',
    border: 'border-[#D4836A]/25',
    text: 'text-[#D4836A]',
    label: 'Coming Soon',
  },
  open: {
    bg: 'bg-white/5',
    border: 'border-white/10',
    text: 'text-[#A8A29E]',
    label: 'Open',
  },
}

export default function CommunityLeaders() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="pill inline-block mb-4">Community Leaders</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FAF9F6] mb-5">
            Grow OC Together
          </h2>
          <p className="text-[#A8A29E] text-lg max-w-2xl mx-auto">
            Claude Code OC is bigger than one city. We&apos;re building a network of local leaders
            across Orange County &mdash; one neighborhood at a time.
          </p>
        </div>

        {/* City grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16 reveal reveal-delay-1">
          {cities.map((city) => {
            const config = statusConfig[city.status as CityStatus]
            return (
              <div key={city.name} className="glass rounded-xl p-4 flex items-center justify-between">
                <span className="text-[#FAF9F6] text-sm font-body font-medium">{city.name}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border ${config.bg} ${config.border} ${config.text}`}
                >
                  {config.label}
                </span>
              </div>
            )
          })}
        </div>

        {/* Become a Leader CTA card */}
        <div className="glass glow-coral rounded-3xl p-10 md:p-14 text-center relative overflow-hidden reveal reveal-delay-2">
          {/* Coral ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#D4836A] opacity-5 blur-3xl" />
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-[#D4836A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>

            <h3 className="font-display text-3xl font-bold text-[#FAF9F6] mb-4">
              Organize Claude Code in Your City
            </h3>
            <p className="text-[#A8A29E] text-base max-w-2xl mx-auto mb-8">
              Want to bring Claude Code meetups to your corner of OC? We&apos;re connecting with
              motivated people across Orange County who want to grow the community locally.
              No technical background required &mdash; just enthusiasm for what&apos;s possible.
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-2 items-center mb-10">
              {[
                'Direct support and resources from Claude Code OC',
                'Connect with the broader OC builder community',
                'Shape what AI looks like in your neighborhood',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-green-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#FAF9F6] text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:hello@claudeoc.com?subject=I%20want%20to%20organize%20in%20my%20city"
              className="btn-coral px-10 py-4 rounded-xl inline-block"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
