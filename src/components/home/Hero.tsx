"use client";

import { useEffect, useRef } from "react";
import { EyebrowBadge } from "@/components/shared/EyebrowBadge";
import { StatRow } from "@/components/shared/StatRow";
import { CONTACT } from "@/lib/constants";

const MOUSE_STYLE_INITIAL = { "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties;
const GLOW_CORAL_STYLE = { background: "radial-gradient(circle, rgba(212,131,106,0.4), transparent 70%)" };
const GLOW_BLUE_STYLE = { background: "radial-gradient(circle, rgba(96,165,250,0.4), transparent 70%)", animationDelay: "2s" };
const MOUSE_GLOW_STYLE = { background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(212,131,106,0.06), transparent 70%)" };

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
      style={MOUSE_STYLE_INITIAL}
    >
      {/* Mouse-tracking ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={MOUSE_GLOW_STYLE}
      />

      {/* Static ambient glows */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full opacity-0 blur-3xl animate-glow-pulse dark:opacity-20"
        style={GLOW_CORAL_STYLE}
      />
      <div
        className="pointer-events-none absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full opacity-0 blur-3xl animate-glow-pulse dark:opacity-10"
        style={GLOW_BLUE_STYLE}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Eyebrow */}
        <div className="mb-8 animate-fade-in">
          <EyebrowBadge label="Anthropic Ambassador Community" />
        </div>

        {/* Headline */}
        <h1 className="entrance-fade-up mb-6 font-sans text-5xl font-bold leading-[1.05] tracking-tight text-slate-dark dark:text-cream md:text-7xl lg:text-8xl">
          Orange County&apos;s
          <br />
          <span className="text-clay font-serif italic">Claude</span>{" "}
          Community
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-4 max-w-2xl font-serif text-xl leading-relaxed text-slate-light dark:text-cloud-light md:text-2xl">
          Founders, engineers, and operators learning and building together in Orange County.
        </p>

        {/* CTA */}
        <div className="entrance-fade-up entrance-delay-2 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={CONTACT.luma}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent sm:w-auto"
          >
            View Upcoming Events
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex justify-center">
          <StatRow
            stats={[
              { value: "400+", label: "Registrants" },
              { value: "3\u00d7", label: "Oversubscribed" },
              { value: "62", label: "Founders & CEOs" },
            ]}
          />
        </div>

        {/* Hero image */}
        <img
          src="/images/events/claudeoc-inaugural.jpg"
          alt="ClaudeOC meetup"
          loading="eager"
          className="mx-auto mt-12 max-w-4xl w-full rounded-2xl object-cover aspect-[21/9]"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-fade-in flex-col items-center gap-2">
        <span className="font-sans text-xs uppercase tracking-widest text-cloud-dark dark:text-muted">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-clay/30 to-transparent" />
      </div>
    </section>
  );
}
