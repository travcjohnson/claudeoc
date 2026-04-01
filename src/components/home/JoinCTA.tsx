"use client";

import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://chat.whatsapp.com/DBipvDRd2oNIcdF6m5CnzK";
const AMBIENT_GLOW_STYLE = { background: "radial-gradient(ellipse, #D4836A, transparent 70%)" };

export function JoinCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const reveals = el.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    reveals.forEach((reveal) => observer.observe(reveal));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showEmail && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showEmail]);

  const handleJoin = () => {
    if (!showEmail) {
      setShowEmail(true);
      return;
    }
    if (!email || !email.includes("@")) return;
    setSubmitting(true);
    // Store email locally for now — can be replaced with API call later
    try {
      const emails = JSON.parse(localStorage.getItem("claudeoc_emails") || "[]");
      emails.push({ email, date: new Date().toISOString() });
      localStorage.setItem("claudeoc_emails", JSON.stringify(emails));
    } catch {
      // silent fail
    }
    window.open(WHATSAPP_URL, "_blank");
    setSubmitting(false);
    setShowEmail(false);
    setEmail("");
  };

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
          style={AMBIENT_GLOW_STYLE}
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
          <div className="reveal reveal-delay-3 flex flex-col items-center justify-center gap-4">
            {showEmail ? (
              <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <label htmlFor="join-email" className="sr-only">Email address</label>
                <input
                  id="join-email"
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleJoin()}
                  placeholder="your@email.com"
                  className="min-w-0 flex-1 rounded-lg border border-ivory-light/20 bg-ivory-light/5 px-4 py-4 font-serif text-base text-ivory-light placeholder:text-cloud-dark focus:outline-none focus:ring-2 focus:ring-clay/50"
                />
                <button
                  onClick={handleJoin}
                  disabled={submitting || !email.includes("@")}
                  className="shrink-0 rounded-lg bg-clay px-8 py-4 font-sans text-base font-medium text-white transition-colors hover:bg-accent disabled:opacity-50"
                >
                  {submitting ? "..." : "Join →"}
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={handleJoin}
                  className="rounded-lg bg-clay px-10 py-4 font-sans text-base font-medium text-white transition-colors hover:bg-accent"
                >
                  Join the Community
                </button>
                <a
                  href="https://lu.ma/claudeoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-ivory-light/20 px-10 py-4 font-sans text-base font-medium text-ivory-light transition-colors hover:bg-ivory-light/10"
                >
                  View Events
                </a>
              </div>
            )}
          </div>

          <p className="reveal reveal-delay-4 mt-6 font-serif text-xs text-cloud-dark dark:text-muted">
            Free to join. Events are community-led.
          </p>
        </div>
      </div>
    </section>
  );
}
