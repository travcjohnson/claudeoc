"use client";

import { useEffect, useRef } from "react";
import { EyebrowBadge } from "@/components/shared/EyebrowBadge";
import { StatRow } from "@/components/shared/StatRow";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mouse-x", `${x}%`);
      el.style.setProperty("--mouse-y", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden dark:dot-grid"
      style={
        { "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties
      }
    >
      {/* Mouse-tracking ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(212,131,106,0.06), transparent 70%)",
        }}
      />

      {/* Static ambient glows */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full opacity-0 blur-3xl animate-glow-pulse dark:opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(212,131,106,0.4), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full opacity-0 blur-3xl animate-glow-pulse dark:opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.4), transparent 70%)",
          animationDelay: "2s",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Eyebrow */}
        <div
          className="mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <EyebrowBadge label="Anthropic Ambassador Community" />
        </div>

        {/* Headline */}
        <h1
          className="mb-6 animate-fade-up font-sans text-5xl font-bold leading-[1.05] tracking-tight text-slate-dark dark:text-cream md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Orange County&apos;s
          <br />
          <span className="gradient-text font-serif italic">Claude</span>{" "}
          Community
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-2 max-w-2xl animate-fade-up font-serif text-xl leading-relaxed text-slate-light dark:text-muted md:text-2xl"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Claude is moving fast. So are we.
        </p>
        <p
          className="mx-auto mb-4 max-w-2xl animate-fade-up font-serif text-lg leading-relaxed text-cloud-dark dark:text-muted"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Founders, engineers, operators, and the AI-curious&nbsp;&mdash;
          learning together, building together, shipping real things
          in Orange County.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.55s", opacity: 0 }}
        >
          <a
            href="https://lu.ma/claudeoc"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent sm:w-auto"
          >
            View Upcoming Events
          </a>
          <a
            href="https://chat.whatsapp.com/DBipvDRd2oNIcdF6m5CnzK"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg border border-slate-dark/20 bg-transparent px-7 py-3.5 font-sans text-sm font-medium text-slate-dark transition-colors hover:bg-slate-dark hover:text-ivory-light dark:border-cream/20 dark:text-cream dark:hover:bg-cream/10 sm:w-auto"
          >
            Join the Community
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-16 flex animate-fade-up justify-center"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          <StatRow
            stats={[
              { value: "400+", label: "Registrants" },
              { value: "3\u00d7", label: "Oversubscribed" },
              { value: "62", label: "Founders & CEOs" },
            ]}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-fade-in flex-col items-center gap-2"
        style={{ animationDelay: "1.2s", opacity: 0 }}
      >
        <span className="font-sans text-xs uppercase tracking-widest text-cloud-dark dark:text-muted">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-clay/30 to-transparent" />
      </div>
    </section>
  );
}
