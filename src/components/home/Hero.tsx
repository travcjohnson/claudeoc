"use client";

import { useEffect, useRef, useState } from "react";
import { EyebrowBadge } from "@/components/shared/EyebrowBadge";
import { StatRow } from "@/components/shared/StatRow";
import { CONTACT } from "@/lib/constants";
import { captureEmail } from "@/lib/capture-email";

const MOUSE_STYLE_INITIAL = { "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties;
const GLOW_CORAL_STYLE = { background: "radial-gradient(circle, rgba(212,131,106,0.4), transparent 70%)" };
const GLOW_BLUE_STYLE = { background: "radial-gradient(circle, rgba(96,165,250,0.4), transparent 70%)", animationDelay: "2s" };
const MOUSE_GLOW_STYLE = { background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(212,131,106,0.06), transparent 70%)" };

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [showJoinEmail, setShowJoinEmail] = useState(false);
  const [joinEmail, setJoinEmail] = useState("");
  const joinInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showJoinEmail && joinInputRef.current) {
      joinInputRef.current.focus();
    }
  }, [showJoinEmail]);

  const handleJoinClick = () => {
    if (!showJoinEmail) {
      setShowJoinEmail(true);
      return;
    }
    if (!joinEmail || !joinEmail.includes("@")) return;
    captureEmail(joinEmail, "hero-join");
    window.open(CONTACT.whatsapp, "_blank");
    setShowJoinEmail(false);
    setJoinEmail("");
  };

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
        <div
          className="mb-8 animate-fade-in anim-delay-1"
        >
          <EyebrowBadge label="Anthropic Ambassador Community" />
        </div>

        {/* Headline */}
        <h1
          className="mb-6 animate-fade-up anim-delay-2 font-sans text-5xl font-bold leading-[1.05] tracking-tight text-slate-dark dark:text-cream md:text-7xl lg:text-8xl"
        >
          Orange County&apos;s
          <br />
          <span className="text-clay font-serif italic">Claude</span>{" "}
          Community
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-2 max-w-2xl animate-fade-up anim-delay-3 font-serif text-xl leading-relaxed text-slate-light dark:text-cloud-light md:text-2xl"
        >
          Claude is moving fast. So are we.
        </p>
        <p
          className="mx-auto mb-4 max-w-2xl animate-fade-up anim-delay-4 font-serif text-lg leading-relaxed text-cloud-dark dark:text-cloud-light"
        >
          Founders, engineers, operators, and the AI-curious&nbsp;&mdash;
          learning together, building together, shipping real things
          in Orange County.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex animate-fade-up anim-delay-5 flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={CONTACT.luma}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent sm:w-auto"
          >
            View Upcoming Events
          </a>
          {showJoinEmail ? (
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <label htmlFor="hero-join-email" className="sr-only">Email address</label>
              <input
                ref={joinInputRef}
                id="hero-join-email"
                type="email"
                value={joinEmail}
                onChange={(e) => setJoinEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleJoinClick()}
                placeholder="your@email.com"
                className="min-w-0 flex-1 rounded-lg border border-slate-dark/20 bg-white px-4 py-3.5 font-serif text-sm text-slate-dark placeholder:text-cloud-dark focus:outline-none focus:ring-2 focus:ring-clay/40 dark:border-cream/20 dark:bg-stone-800 dark:text-cream dark:placeholder:text-muted"
              />
              <button
                onClick={handleJoinClick}
                disabled={!joinEmail.includes("@")}
                className="shrink-0 rounded-lg bg-clay px-5 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent disabled:opacity-50"
              >
                Join →
              </button>
            </div>
          ) : (
            <button
              onClick={handleJoinClick}
              className="w-full rounded-lg border border-slate-dark/20 bg-transparent px-7 py-3.5 font-sans text-sm font-medium text-slate-dark transition-colors hover:bg-slate-dark hover:text-ivory-light dark:border-cream/20 dark:text-cream dark:hover:bg-cream/10 sm:w-auto"
            >
              Join the Community
            </button>
          )}
        </div>

        {/* Stats */}
        <div
          className="mt-16 flex animate-fade-up anim-delay-6 justify-center"
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
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-fade-in anim-delay-7 flex-col items-center gap-2"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-cloud-dark dark:text-muted">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-clay/30 to-transparent" />
      </div>
    </section>
  );
}
