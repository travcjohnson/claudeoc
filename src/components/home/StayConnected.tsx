"use client";

import { useEffect, useRef, useState } from "react";
import { GlassCard } from "@/components/shared/GlassCard";

const WHATSAPP_URL = "https://chat.whatsapp.com/DBipvDRd2oNIcdF6m5CnzK";
const GLOW_CLAY_STYLE = { background: "#d97757", transform: "translate(30%, -30%)" };
const GLOW_SKY_STYLE = { background: "#6a9bcc", transform: "translate(30%, -30%)" };

export function StayConnected() {
  const sectionRef = useRef<HTMLElement>(null);

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

  const [showWhatsAppEmail, setShowWhatsAppEmail] = useState(false);
  const [whatsAppEmail, setWhatsAppEmail] = useState("");
  const whatsAppInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showWhatsAppEmail && whatsAppInputRef.current) {
      whatsAppInputRef.current.focus();
    }
  }, [showWhatsAppEmail]);

  const handleWhatsAppJoin = () => {
    if (!showWhatsAppEmail) {
      setShowWhatsAppEmail(true);
      return;
    }
    if (!whatsAppEmail || !whatsAppEmail.includes("@")) return;
    try {
      const emails = JSON.parse(localStorage.getItem("claudeoc_emails") || "[]");
      emails.push({ email: whatsAppEmail, source: "whatsapp", date: new Date().toISOString() });
      localStorage.setItem("claudeoc_emails", JSON.stringify(emails));
    } catch {
      // silent fail
    }
    window.open(WHATSAPP_URL, "_blank");
    setShowWhatsAppEmail(false);
    setWhatsAppEmail("");
  };

  return (
    <section ref={sectionRef} className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="reveal mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-dark/10 bg-white px-4 py-1.5 dark:border-cream/10 dark:bg-stone-800">
              <span className="h-2 w-2 rounded-full bg-clay" />
              <span className="font-sans text-xs font-medium uppercase tracking-widest text-slate-light dark:text-muted">
                Stay Connected
              </span>
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            Stay in the Loop
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-5 max-w-xl font-serif text-lg leading-relaxed text-slate-light dark:text-cloud-light">
            The conversation doesn&apos;t stop when the event does.
          </p>
        </div>

        {/* Two cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* WhatsApp */}
          <div className="reveal reveal-delay-1">
            <GlassCard className="relative overflow-hidden p-8">
              <div
                className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full opacity-10 blur-3xl"
                style={GLOW_CLAY_STYLE}
              />
              <div className="relative z-10">
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-clay/25 bg-clay/10"
                >
                  <svg className="h-6 w-6 text-clay" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.564a.5.5 0 00.611.614l4.574-1.485A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.76-6.266-2.048l-.438-.328-2.717.882.89-2.68-.36-.57A9.948 9.948 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                </div>

                <h3 className="mb-3 font-sans text-xl font-semibold text-slate-dark dark:text-cream">
                  WhatsApp Community
                </h3>
                <p className="mb-8 font-serif text-sm leading-relaxed text-slate-light dark:text-cloud-light">
                  The fastest way to connect. Real conversations, event announcements,
                  and members sharing what they&apos;re building. This is where the community
                  lives between meetups.
                </p>

                {showWhatsAppEmail ? (
                  <div className="flex gap-2">
                    <label htmlFor="whatsapp-email" className="sr-only">Email address</label>
                    <input
                      id="whatsapp-email"
                      ref={whatsAppInputRef}
                      type="email"
                      value={whatsAppEmail}
                      onChange={(e) => setWhatsAppEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleWhatsAppJoin()}
                      placeholder="your@email.com"
                      className="min-w-0 flex-1 rounded-lg border border-slate-dark/10 bg-white px-3 py-2.5 font-serif text-sm text-slate-dark placeholder:text-cloud-medium focus:outline-none focus:ring-2 focus:ring-clay/40 dark:border-cream/10 dark:bg-stone-800 dark:text-cream dark:placeholder:text-muted"
                    />
                    <button
                      onClick={handleWhatsAppJoin}
                      disabled={!whatsAppEmail.includes("@")}
                      className="shrink-0 rounded-lg bg-clay px-4 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent disabled:opacity-50"
                    >
                      Join →
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleWhatsAppJoin}
                    className="inline-flex items-center gap-2 rounded-lg bg-clay px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-accent"
                  >
                    Join WhatsApp
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                )}
              </div>
            </GlassCard>
          </div>

          {/* Newsletter */}
          <div className="reveal reveal-delay-2">
            <GlassCard className="relative overflow-hidden p-8">
              <div
                className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full opacity-10 blur-3xl"
                style={GLOW_SKY_STYLE}
              />
              <div className="relative z-10">
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-sky/25 bg-sky/10"
                >
                  <svg className="h-6 w-6 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3 className="mb-3 font-sans text-xl font-semibold text-slate-dark dark:text-cream">
                  Newsletter
                </h3>
                <p className="mb-6 font-serif text-sm leading-relaxed text-slate-light dark:text-cloud-light">
                  Event recaps, builder spotlights, and what&apos;s new in Claude.
                  Monthly. No spam.
                </p>

                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="your@email.com"
                    className="min-w-0 flex-1 rounded-lg border border-slate-dark/10 bg-white px-3 py-2.5 font-serif text-sm text-slate-dark placeholder:text-cloud-medium focus:outline-none focus:ring-2 focus:ring-clay/40 dark:border-cream/10 dark:bg-stone-800 dark:text-cream dark:placeholder:text-muted"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-slate-dark px-4 py-2.5 font-sans text-sm font-medium text-ivory-light transition-colors hover:bg-slate-medium dark:bg-cream dark:text-stone-950 dark:hover:bg-cream/90"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </GlassCard>
          </div>
        </div>

        <p className="reveal reveal-delay-3 mt-10 text-center font-serif text-xs text-cloud-dark dark:text-muted">
          We don&apos;t spam. Just the good stuff.
        </p>
      </div>
    </section>
  );
}
