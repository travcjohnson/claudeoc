"use client";

import { GlassCard } from "@/components/shared/GlassCard";
import { ACCENT_COLORS } from "@/lib/constants";
import { useReveal } from "@/hooks/useReveal";

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

const accentColors = ACCENT_COLORS;

export function About() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="border-t border-slate-dark/10 py-24 dark:border-cream/5 lg:py-32"
    >
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="reveal">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-dark/10 bg-white px-4 py-1.5 dark:border-cream/10 dark:bg-stone-800">
              <span className="h-2 w-2 rounded-full bg-clay" />
              <span className="font-sans text-xs font-medium uppercase tracking-widest text-slate-light dark:text-muted">
                Why Join
              </span>
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 mt-4 font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            How the Community Works
          </h2>
          <p className="reveal reveal-delay-2 mt-5 font-serif text-xl leading-relaxed text-slate-light dark:text-cloud-light">
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
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${colors.border} bg-white dark:bg-stone-800`}
                  >
                    <span className={`h-3 w-3 rounded-full ${colors.dot}`} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-sans text-lg font-semibold text-slate-dark dark:text-cream">
                      {f.title}
                    </h3>
                    <p className="font-serif text-sm leading-relaxed text-slate-light dark:text-cloud-light">
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

        {/* Join CTA Banner */}
        <div className="reveal reveal-delay-4 mt-12 flex items-center justify-between rounded-xl border border-clay/20 bg-clay/5 px-8 py-5 dark:border-clay/15 dark:bg-clay/5">
          <p className="font-sans text-base font-medium text-slate-dark dark:text-cream">
            Ready to join?{" "}
            <span className="text-slate-light dark:text-cloud-light">
              Free to join. All levels welcome.
            </span>
          </p>
          <a
            href="/community"
            className="shrink-0 rounded-lg bg-clay px-6 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            Join the Community
          </a>
        </div>
      </div>
    </section>
  );
}
