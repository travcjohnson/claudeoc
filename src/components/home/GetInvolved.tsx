"use client";

import { GlassCard } from "@/components/shared/GlassCard";
import { ACCENT_COLORS, CONTACT } from "@/lib/constants";
import { useReveal } from "@/hooks/useReveal";

const cards = [
  {
    title: "Lead a Conversation",
    description:
      "Have deep experience with Claude, AI agents, or a specific use case? Share it with the community. We're always looking for speakers and workshop leaders.",
    cta: "Apply to Speak",
    href: `mailto:${CONTACT.email}?subject=ClaudeOC%20Speaker%20Interest`,
    accent: "clay",
  },
  {
    title: "Build With Us",
    description:
      "Join the builders channel on WhatsApp. Share projects, get feedback, find collaborators. The best ideas come from people working on real problems together.",
    cta: "Join Builders Channel",
    href: CONTACT.whatsapp,
    accent: "sky",
  },
  {
    title: "Share Feedback",
    description:
      "This community is shaped by its members. Tell us what topics you want covered, what format works best, and how we can make events even better.",
    cta: "Send Feedback",
    href: `mailto:${CONTACT.email}?subject=ClaudeOC%20Feedback`,
    accent: "olive",
  },
];

const accentStyles = ACCENT_COLORS;

export function GetInvolved() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="border-t border-slate-dark/10 py-24 dark:border-cream/5 lg:py-32"
    >
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="reveal font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            Get Involved
          </h2>
          <p className="reveal reveal-delay-1 mt-5 font-serif text-xl leading-relaxed text-slate-light dark:text-cloud-light">
            The best communities are built by the people in them.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, i) => {
            const styles = accentStyles[card.accent];
            return (
              <div key={card.title} className={`reveal reveal-delay-${i + 1}`}>
                <GlassCard className="flex h-full flex-col p-8">
                  <div
                    className={`mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-dark/10 bg-white dark:border-cream/10 dark:bg-stone-800`}
                  >
                    <span className={`h-3 w-3 rounded-full ${styles.dot}`} />
                  </div>

                  <h3 className="mb-3 font-sans text-xl font-semibold text-slate-dark dark:text-cream">
                    {card.title}
                  </h3>
                  <p className="mb-8 font-serif text-sm leading-relaxed text-slate-light dark:text-cloud-light">
                    {card.description}
                  </p>

                  <div className="mt-auto">
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center gap-2 font-sans text-sm font-medium transition-colors ${styles.text}`}
                    >
                      {card.cta}
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
