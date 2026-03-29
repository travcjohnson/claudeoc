"use client";

import { useEffect, useRef } from "react";
import { GlassCard } from "@/components/shared/GlassCard";

const features = [
  {
    title: "Show Up",
    description:
      "Come to a meetup, bring your curiosity. No prep required — just show up and build alongside people who are figuring it out too.",
    accent: "clay",
  },
  {
    title: "Learn Together",
    description:
      "Live demos, hands-on building time, and open sharing. All levels welcome — from first prompt to production deploys.",
    accent: "sky",
  },
  {
    title: "Keep Building",
    description:
      "The community lives between events. Share what you're working on in WhatsApp, ask questions, find collaborators.",
    accent: "olive",
  },
  {
    title: "Go Deeper",
    description:
      "Lead city groups, mentor newcomers, or help shape future events and hackathons. The community grows when you do.",
    accent: "clay",
  },
];

const accentColors: Record<string, { dot: string; border: string }> = {
  clay: { dot: "bg-clay", border: "border-clay/30" },
  sky: { dot: "bg-sky", border: "border-sky/30" },
  olive: { dot: "bg-olive", border: "border-olive/30" },
};

export function About() {
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
    <section
      ref={sectionRef}
      className="border-t border-slate-dark/10 py-24 dark:border-cream/5 lg:py-32"
    >
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="reveal">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-dark/10 bg-white px-4 py-1.5 dark:border-cream/10 dark:bg-stone-900">
              <span className="h-2 w-2 rounded-full bg-clay" />
              <span className="font-sans text-xs font-medium uppercase tracking-widest text-slate-light dark:text-muted">
                Why Join
              </span>
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 mt-4 font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            How the Community Works
          </h2>
          <p className="reveal reveal-delay-2 mt-5 font-serif text-xl leading-relaxed text-slate-light dark:text-muted">
            More than a community — a catalyst for what you&apos;ll build next.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const colors = accentColors[f.accent];
            return (
              <div
                key={f.title}
                className={`reveal reveal-delay-${i}`}
              >
                <GlassCard className="flex h-full flex-col gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${colors.border} bg-white dark:bg-stone-900`}
                  >
                    <span className={`h-3 w-3 rounded-full ${colors.dot}`} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-sans text-lg font-semibold text-slate-dark dark:text-cream">
                      {f.title}
                    </h3>
                    <p className="font-serif text-sm leading-relaxed text-slate-light dark:text-muted">
                      {f.description}
                    </p>
                  </div>
                  <div className="mt-auto border-t border-slate-dark/5 pt-4 dark:border-cream/5">
                    <div className={`h-0.5 w-8 rounded-full ${colors.dot} opacity-40`} />
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
