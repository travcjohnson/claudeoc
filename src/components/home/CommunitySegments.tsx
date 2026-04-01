"use client";

import { CONTACT } from "@/lib/constants";
import { useReveal } from "@/hooks/useReveal";

export function CommunitySegments() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32"
    >
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Photo / Visual */}
          <div className="reveal">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-clay/20 via-ivory-dark to-sky/10 dark:from-clay/10 dark:via-stone-800 dark:to-sky/5">
              <div className="aspect-[4/3] flex items-center justify-center p-12">
                {/* Placeholder for Travis photo — replace with real image */}
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-clay/30 bg-white dark:bg-stone-800">
                    <span className="font-sans text-3xl font-bold text-clay">TJ</span>
                  </div>
                  <p className="font-sans text-xs uppercase tracking-widest text-cloud-dark dark:text-muted">
                    Photo coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Bio */}
          <div>
            <div className="reveal">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-dark/10 bg-white px-4 py-1.5 dark:border-cream/10 dark:bg-stone-800">
                <span className="h-2 w-2 rounded-full bg-clay" />
                <span className="font-sans text-xs font-medium uppercase tracking-widest text-slate-light dark:text-muted">
                  Your Host
                </span>
              </span>
            </div>

            <h2 className="reveal reveal-delay-1 mt-4 font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
              Travis Johnson
            </h2>

            <p className="reveal reveal-delay-2 mt-5 font-serif text-lg leading-relaxed text-slate-light dark:text-cloud-light">
              Claude Ambassador — one of a select group recognized by Anthropic
              for advancing practical AI adoption in professional workflows — and
              co-founder of{" "}
              <span className="font-medium text-slate-dark dark:text-cream">
                AuraPath AI
              </span>
              . Director of Professional Development for the Orange County chapter
              of Product Managers, where he&apos;s taught 500+ people hands-on AI
              skills through workshops, hackathons, and meetups.
            </p>

            <p className="reveal reveal-delay-2 mt-4 font-serif text-lg leading-relaxed text-slate-light dark:text-cloud-light">
              With 10+ years of product management spanning e-commerce, CPG,
              healthcare, and HR tech — Travis brings a rare combination: deep
              product roots, daily hands-on work building with AI, and a
              founder&apos;s perspective on what it actually looks like to make
              these tools part of how you think, build, and ship.
            </p>

            {/* Credentials */}
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
              {[
                "Claude Ambassador",
                "Co-founder, AuraPath AI",
                "Dir. of PD, OC Product Managers",
                "500+ People Trained",
              ].map((cred) => (
                <span
                  key={cred}
                  className="rounded-full border border-slate-dark/8 bg-white px-4 py-2.5 font-sans text-xs font-medium text-slate-light dark:border-cream/10 dark:bg-stone-800 dark:text-muted"
                >
                  {cred}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="reveal reveal-delay-4 mt-8 flex items-center gap-4">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-clay transition-colors hover:text-accent"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="/training"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-slate-light transition-colors hover:text-slate-dark dark:text-muted dark:hover:text-cream"
              >
                Book a Training →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
