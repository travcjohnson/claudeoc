"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const navLinks = [
  { label: "Events", href: "/events" },
  { label: "Impact Labs", href: "/impact-labs" },
  { label: "Training", href: "/training" },
  { label: "Community", href: "/community" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory-light/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(20,20,19,0.08)] dark:bg-stone-950/95 dark:shadow-[0_1px_0_0_rgba(250,249,246,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[89.5rem] items-center justify-between px-6 py-4 lg:px-10">
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-clay">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor" opacity="0.9" />
            </svg>
          </div>
          <span className="font-sans text-lg font-semibold tracking-tight text-slate-dark dark:text-cream">
            Claude<span className="text-clay">OC</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="font-sans text-[0.85rem] font-medium text-slate-light transition-colors hover:text-slate-dark dark:text-muted dark:hover:text-cream">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href="/community" className="rounded-lg bg-slate-dark px-5 py-2.5 font-sans text-sm font-medium text-ivory-light transition-colors hover:bg-slate-medium dark:bg-clay dark:hover:bg-accent">
            Join Community
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5" aria-label="Toggle navigation" aria-expanded={mobileOpen}>
            <span className={`block h-0.5 w-5 bg-slate-dark transition-all duration-300 dark:bg-cream ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-dark transition-all duration-300 dark:bg-cream ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-dark transition-all duration-300 dark:bg-cream ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-ivory-light transition-all duration-300 dark:bg-stone-950 lg:hidden ${mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="font-sans text-2xl font-medium text-slate-dark transition-colors hover:text-clay dark:text-cream">
              {link.label}
            </a>
          ))}
          <a href="/community" onClick={() => setMobileOpen(false)} className="mt-4 rounded-lg bg-slate-dark px-8 py-3 font-sans text-base font-medium text-ivory-light dark:bg-clay">
            Join Community
          </a>
        </div>
      </div>
    </header>
  );
}
