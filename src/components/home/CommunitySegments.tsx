"use client";

import { useEffect, useRef } from "react";
import { GlassCard } from "@/components/shared/GlassCard";

const segments = [
  {
    badge: "Professional Developers",
    heading: "Built for Engineers",
    description:
      "For software engineers, architects, and technical leads integrating Claude into production workflows. Deep dives, architecture discussions, and real-world case studies.",
    tags: ["Production Workflows", "Architecture", "Best Practices", "Team Integration"],
    accentHex: "#6a9bcc",
    bgClass: "bg-sky/10 dark:bg-sky/10",
    borderClass: "border-sky/20",
    textClass: "text-sky",
    tagBg: "bg-sky/8 dark:bg-sky/10",
    tagBorder: "border-sky/15",
    tagText: "text-sky",
  },
  {
    badge: "Vibe Coders",
    heading: "For the Curious & Creative",
    description:
      "For creators, entrepreneurs, and curious minds exploring what's possible with AI-assisted development. No gatekeeping — just people building cool things.",
    tags: ["No-Code Friendly", "Side Projects", "Startups", "Creative Builds"],
    accentHex: "#d97757",
    bgClass: "bg-clay/10 dark:bg-clay/10",
    borderClass: "border-clay/20",
    textClass: "text-clay",
    tagBg: "bg-clay/8 dark:bg-clay/10",
    tagBorder: "border-clay/15",
    tagText: "text-clay",
  },
];

export function CommunitySegments() {
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
          <h2 className="reveal font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            Find Your Community
          </h2>
          <p className="reveal reveal-delay-1 mx-auto mt-5 max-w-xl font-serif text-xl leading-relaxed text-slate-light dark:text-muted">
            Whether you&apos;re a seasoned developer or just getting started with AI
            tools, there&apos;s a place for you.
          </p>
        </div>

        {/* Two segment cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {segments.map((seg, i) => (
            <div key={seg.badge} className={`reveal reveal-delay-${i + 1}`}>
              <GlassCard className="relative overflow-hidden p-8">
                {/* Background glow */}
                <div
                  className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full opacity-10 blur-3xl"
                  style={{
                    background: seg.accentHex,
                    transform: "translate(30%, -30%)",
                  }}
                />

                <div className="relative z-10">
                  {/* Badge */}
                  <span
                    className={`mb-4 inline-block rounded-full border px-3 py-1 font-sans text-xs font-medium ${seg.borderClass} ${seg.bgClass} ${seg.textClass}`}
                  >
                    {seg.badge}
                  </span>

                  <h3 className="mb-3 mt-3 font-sans text-2xl font-semibold text-slate-dark dark:text-cream">
                    {seg.heading}
                  </h3>
                  <p className="mb-8 font-serif leading-relaxed text-slate-light dark:text-muted">
                    {seg.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {seg.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1 font-sans text-xs ${seg.tagBorder} ${seg.tagBg} ${seg.tagText}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://chat.whatsapp.com/DBipvDRd2oNIcdF6m5CnzK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-sans text-sm font-medium transition-colors ${seg.textClass}`}
                  >
                    Join Now
                    <svg
                      className="h-4 w-4"
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
                  </a>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
