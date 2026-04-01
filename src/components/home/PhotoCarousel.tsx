"use client";

import { useReveal } from "@/hooks/useReveal";

const featuredPhoto = {
  src: "/images/gallery/oc-kickoff-featured.jpg",
  alt: "Travis presenting at the ClaudeOC kickoff event",
  label: "OC Kickoff · Feb 2026",
  sub: "300+ registrations · 3× oversubscribed",
};

const galleryPhotos = [
  {
    src: "/images/gallery/inaugural-meetup.jpg",
    alt: "Packed venue at the ClaudeOC inaugural meetup",
    label: "ClaudeOC Inaugural Meetup",
    sub: "Feb 28, 2026 · Tustin, CA",
  },
  {
    src: "/images/gallery/hands-on-building.jpg",
    alt: "Attendees working on laptops during a hands-on building session",
    label: "Hands-on Building Session",
    sub: "Live demos & collaboration",
  },
  {
    src: "/images/gallery/community-networking.jpg",
    alt: "Community members chatting and networking after the event",
    label: "Community Networking",
    sub: "Builders connecting after hours",
  },
  {
    src: "/images/gallery/lightning-talks.jpg",
    alt: "Speaker presenting to an audience during lightning talks",
    label: "Lightning Talks",
    sub: "Members sharing their projects",
  },
];

export function PhotoCarousel() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="reveal mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-dark/10 bg-white px-4 py-1.5 dark:border-cream/10 dark:bg-stone-800">
              <span className="h-2 w-2 rounded-full bg-clay" />
              <span className="font-sans text-xs font-medium uppercase tracking-widest text-slate-light dark:text-muted">
                Gallery
              </span>
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            From Our Meetups
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-5 max-w-xl font-serif text-lg leading-relaxed text-slate-light dark:text-cloud-light">
            Real moments from ClaudeOC events across Orange County.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Large featured card */}
          <div
            className="reveal group relative sm:col-span-2 cursor-pointer overflow-hidden rounded-2xl md:col-span-1 md:row-span-2 aspect-[16/10]"
          >
            <img
              src={featuredPhoto.src}
              alt={featuredPhoto.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="mb-1 font-sans text-xl font-semibold text-white">
                {featuredPhoto.label}
              </div>
              <div className="font-serif text-xs text-white/60">
                {featuredPhoto.sub}
              </div>
            </div>
            <div className="absolute right-4 top-4">
              <span className="rounded-full bg-clay px-3 py-1 font-sans text-xs font-medium text-white">
                Featured
              </span>
            </div>
          </div>

          {/* Regular cards */}
          {galleryPhotos.map((photo, i) => (
            <div
              key={photo.label}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative cursor-pointer overflow-hidden rounded-2xl aspect-[4/3]`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="mb-0.5 font-sans text-sm font-semibold text-white">
                  {photo.label}
                </div>
                <div className="font-serif text-xs text-white/50">{photo.sub}</div>
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
