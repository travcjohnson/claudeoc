"use client";

import { useEffect, useRef } from "react";

export function UpcomingEvent() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const reveals = el.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    reveals.forEach((reveal) => observer.observe(reveal));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="events"
      className="border-t border-slate-dark/10 py-24 dark:border-cream/5 lg:py-32"
    >
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="reveal font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            Next Event
          </h2>
          <p className="reveal reveal-delay-1 mt-5 font-serif text-xl leading-relaxed text-slate-light dark:text-cloud-light">
            Every meetup is a room full of builders, not spectators.
          </p>
        </div>

        {/* Featured event card */}
        <div className="reveal reveal-delay-2">
          <a
            href="https://lu.ma/claudeoc"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-xl border border-slate-dark/10 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-cream/6 dark:bg-stone-900/50 dark:backdrop-blur-xl"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left: gradient visual */}
              <div className="relative flex min-h-[200px] items-center justify-center overflow-hidden md:w-1/3">
                <div className="gallery-card-5 absolute inset-0" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 px-6 py-8 text-center">
                  <span className="rounded-full bg-clay px-3 py-1 font-sans text-xs font-medium text-white">
                    Upcoming
                  </span>
                </div>
              </div>

              {/* Right: details */}
              <div className="flex flex-1 flex-col justify-center p-8 md:p-10">
                <h3 className="mb-3 font-sans text-2xl font-bold text-slate-dark dark:text-cream md:text-3xl">
                  ClaudeOC Meetup
                </h3>
                <p className="mb-6 font-serif leading-relaxed text-slate-light dark:text-cloud-light">
                  Live demos, hands-on building, and real conversations with OC&apos;s
                  most active AI community. All levels welcome.
                </p>

                <div className="mb-6 flex flex-wrap gap-4 font-sans text-sm text-cloud-dark dark:text-muted">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Check Luma for date
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Orange County, CA
                  </span>
                </div>

                <div>
                  <span className="inline-flex items-center gap-2 font-sans text-sm font-medium text-clay transition-colors group-hover:text-accent">
                    Register on Luma
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
