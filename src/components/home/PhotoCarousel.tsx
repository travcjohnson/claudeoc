"use client";

import { useEffect, useRef } from "react";

const galleryItems = [
  {
    className: "gallery-card-1",
    label: "ClaudeOC Inaugural Meetup",
    sub: "Feb 28, 2026 \u00b7 Tustin, CA",
  },
  {
    className: "gallery-card-2",
    label: "Hands-on Building Session",
    sub: "Live demos & collaboration",
  },
  {
    className: "gallery-card-3",
    label: "Community Networking",
    sub: "Builders connecting after hours",
  },
  {
    className: "gallery-card-4",
    label: "Lightning Talks",
    sub: "Members sharing their projects",
  },
  {
    className: "gallery-card-5",
    label: "OC Kickoff \u00b7 Feb 2026",
    sub: "300+ registrations \u00b7 3\u00d7 oversubscribed",
  },
];

export function PhotoCarousel() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="reveal mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-dark/10 bg-white px-4 py-1.5 dark:border-cream/10 dark:bg-stone-900">
              <span className="h-2 w-2 rounded-full bg-clay" />
              <span className="font-sans text-xs font-medium uppercase tracking-widest text-slate-light dark:text-muted">
                Gallery
              </span>
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            From Our Meetups
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-5 max-w-xl font-serif text-lg leading-relaxed text-slate-light dark:text-muted">
            Real moments from ClaudeOC events across Orange County.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {/* Large featured card */}
          <div
            className="reveal group relative col-span-2 cursor-pointer overflow-hidden rounded-2xl md:col-span-1 md:row-span-2"
            style={{ minHeight: "320px" }}
          >
            <div
              className={`${galleryItems[4].className} absolute inset-0 transition-transform duration-700 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="mb-1 font-sans text-xl font-semibold text-white">
                {galleryItems[4].label}
              </div>
              <div className="font-serif text-xs text-white/60">
                {galleryItems[4].sub}
              </div>
            </div>
            <div className="absolute right-4 top-4">
              <span className="rounded-full bg-clay px-3 py-1 font-sans text-xs font-medium text-white">
                Featured
              </span>
            </div>
          </div>

          {/* Regular cards */}
          {galleryItems.slice(0, 4).map((item, i) => (
            <div
              key={item.label}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative cursor-pointer overflow-hidden rounded-2xl`}
              style={{ minHeight: "200px" }}
            >
              <div
                className={`${item.className} absolute inset-0 transition-transform duration-700 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="mb-0.5 font-sans text-sm font-semibold text-white">
                  {item.label}
                </div>
                <div className="font-serif text-xs text-white/50">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-3 mt-12 text-center">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-dark/20 px-6 py-3 font-sans text-sm font-medium text-slate-dark transition-colors hover:bg-slate-dark hover:text-ivory-light dark:border-cream/20 dark:text-cream dark:hover:bg-cream/10"
          >
            View All Photos
          </a>
        </div>
      </div>
    </section>
  );
}
