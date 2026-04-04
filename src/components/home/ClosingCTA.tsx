"use client";

import { useReveal } from "@/hooks/useReveal";
import { useState, useEffect, useRef } from "react";
import { CONTACT } from "@/lib/constants";
import { captureEmail } from "@/lib/capture-email";

export function ClosingCTA() {
  const sectionRef = useReveal<HTMLElement>();
  const [showWhatsAppEmail, setShowWhatsAppEmail] = useState(false);
  const [whatsAppEmail, setWhatsAppEmail] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
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
    captureEmail(whatsAppEmail, "whatsapp");
    window.open(CONTACT.whatsapp, "_blank");
    setShowWhatsAppEmail(false);
    setWhatsAppEmail("");
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.includes("@")) return;
    captureEmail(newsletterEmail, "newsletter");
    setNewsletterEmail("");
    setNewsletterSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="bg-slate-dark py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        {/* Top: Explore links */}
        <div className="reveal mb-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-ivory-light/10 pb-12">
          <a href="/events" className="font-sans text-sm font-medium text-ivory-light/70 transition-colors hover:text-clay">Events</a>
          <a href="/training" className="font-sans text-sm font-medium text-ivory-light/70 transition-colors hover:text-clay">Training</a>
          <a href="/impact-labs" className="font-sans text-sm font-medium text-ivory-light/70 transition-colors hover:text-clay">Impact Labs</a>
          <a href="/sponsors" className="font-sans text-sm font-medium text-ivory-light/70 transition-colors hover:text-clay">Sponsors</a>
          <a href="/community" className="font-sans text-sm font-medium text-ivory-light/70 transition-colors hover:text-clay">Community</a>
          <a href="/gallery" className="font-sans text-sm font-medium text-ivory-light/70 transition-colors hover:text-clay">Gallery</a>
        </div>

        {/* Middle: Main CTA + two capture cards */}
        <div className="reveal reveal-delay-1 text-center">
          <h2 className="font-sans text-3xl font-bold text-ivory-light md:text-5xl">
            Join the Community
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-serif text-base leading-relaxed text-cloud-medium">
            Free to join. All levels welcome.
          </p>
        </div>

        <div className="reveal reveal-delay-2 mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* WhatsApp */}
          <div className="rounded-xl border border-ivory-light/10 bg-ivory-light/5 p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-clay/25 bg-clay/10">
              <svg className="h-5 w-5 text-clay" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.564a.5.5 0 00.611.614l4.574-1.485A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.76-6.266-2.048l-.438-.328-2.717.882.89-2.68-.36-.57A9.948 9.948 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
            </div>
            <h3 className="mb-2 font-sans text-lg font-semibold text-ivory-light">WhatsApp</h3>
            <p className="mb-5 font-serif text-sm leading-relaxed text-cloud-medium">
              Event announcements, real conversations, and what members are building.
            </p>
            {showWhatsAppEmail ? (
              <div className="flex gap-2">
                <label htmlFor="cta-whatsapp-email" className="sr-only">Email address</label>
                <input
                  ref={whatsAppInputRef}
                  id="cta-whatsapp-email"
                  type="email"
                  value={whatsAppEmail}
                  onChange={(e) => setWhatsAppEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleWhatsAppJoin()}
                  placeholder="your@email.com"
                  className="min-w-0 flex-1 rounded-lg border border-ivory-light/20 bg-ivory-light/5 px-3 py-2.5 font-serif text-sm text-ivory-light placeholder:text-cloud-dark focus:outline-none focus:ring-2 focus:ring-clay/40"
                />
                <button onClick={handleWhatsAppJoin} disabled={!whatsAppEmail.includes("@")} className="shrink-0 rounded-lg bg-clay px-4 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent disabled:opacity-50">
                  Join →
                </button>
              </div>
            ) : (
              <button onClick={handleWhatsAppJoin} className="rounded-lg bg-clay px-5 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent">
                Join WhatsApp →
              </button>
            )}
          </div>

          {/* Newsletter */}
          <div className="rounded-xl border border-ivory-light/10 bg-ivory-light/5 p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-sky/25 bg-sky/10">
              <svg className="h-5 w-5 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mb-2 font-sans text-lg font-semibold text-ivory-light">Newsletter</h3>
            <p className="mb-5 font-serif text-sm leading-relaxed text-cloud-medium">
              Event recaps, builder spotlights, and what&apos;s new in Claude. Monthly.
            </p>
            {newsletterSubmitted ? (
              <p className="font-sans text-sm font-medium text-olive">You&apos;re in! Check your inbox.</p>
            ) : (
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <label htmlFor="cta-newsletter-email" className="sr-only">Email address</label>
                <input
                  id="cta-newsletter-email"
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="min-w-0 flex-1 rounded-lg border border-ivory-light/20 bg-ivory-light/5 px-3 py-2.5 font-serif text-sm text-ivory-light placeholder:text-cloud-dark focus:outline-none focus:ring-2 focus:ring-clay/40"
                />
                <button type="submit" className="shrink-0 rounded-lg bg-ivory-light/10 px-4 py-2.5 font-sans text-sm font-medium text-ivory-light transition-colors hover:bg-ivory-light/20">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
