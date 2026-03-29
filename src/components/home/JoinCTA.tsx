"use client";

import { useEffect, useRef } from "react";

export function JoinCTA() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="join"
      className="bg-slate-dark py-24 dark:bg-stone-900 lg:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="h-[400px] w-[600px] rounded-full opacity-10 blur-3xl animate-glow-pulse"
          style={{
            background: "radial-gradient(ellipse, #D4836A, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          {/* Badge */}
          <div className="reveal mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ivory-light/10 bg-ivory-light/5 px-4 py-1.5">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-clay" />
              <span className="font-sans text-xs font-medium uppercase tracking-widest text-ivory-light/70">
                Now Accepting Members
              </span>
            </span>
          </div>

          <h2 className="reveal reveal-delay-1 font-sans text-4xl font-bold text-ivory-light md:text-6xl">
            Ready to Join?
          </h2>

          <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-xl font-serif text-lg leading-relaxed text-cloud-medium">
            Connect with Orange County&apos;s most active AI community. Get access
            to exclusive events, resources, and a network of builders shipping real
            things with Claude.
          </p>

          {/* Benefits */}
          <div className="reveal reveal-delay-2 mx-auto mb-10 mt-8 flex flex-col items-start justify-center gap-4 text-left sm:flex-row sm:items-center">
            {[
              "Exclusive event invites",
              "Builders WhatsApp channel",
              "Speaker & project opportunities",
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 font-serif text-sm text-cloud-medium"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-olive"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {benefit}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="reveal reveal-delay-3 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://chat.whatsapp.com/DBipvDRd2oNIcdF6m5CnzK"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-clay px-10 py-4 font-sans text-base font-medium text-white transition-colors hover:bg-accent"
            >
              Join the Community
            </a>
            <a
              href="https://lu.ma/claudeoc"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-ivory-light/20 px-10 py-4 font-sans text-base font-medium text-ivory-light transition-colors hover:bg-ivory-light/10"
            >
              View Events
            </a>
          </div>

          <p className="reveal reveal-delay-4 mt-6 font-serif text-xs text-cloud-dark">
            Free to join. Events are community-led.
          </p>
        </div>
      </div>
    </section>
  );
}
