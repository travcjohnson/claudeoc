# ClaudeOC Unified Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a unified 7-page ClaudeOC site with Anthropic-aligned design, light/dark mode, and all integrations (Tally, WhatsApp, Luma) live at claudeoc.com.

**Architecture:** Start from claudeoc-site codebase (Next.js 16, React 19, Tailwind v4), copy into the claudeoc repo (which owns the Vercel domain). Add dark mode system, port OG animations, build all pages. Static export, no backend.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, Vercel (static export)

**Spec:** `docs/superpowers/specs/2026-03-29-claudeoc-unified-design.md`

---

## File Map

### New files to create:
```
src/app/events/page.tsx
src/app/impact-labs/page.tsx
src/app/community/page.tsx
src/app/gallery/page.tsx
src/components/home/Hero.tsx
src/components/home/About.tsx
src/components/home/CommunitySegments.tsx
src/components/home/UpcomingEvent.tsx
src/components/home/ImpactLabsTeaser.tsx
src/components/home/PhotoCarousel.tsx
src/components/home/GetInvolved.tsx
src/components/home/StayConnected.tsx
src/components/home/JoinCTA.tsx
src/components/events/FeaturedEvent.tsx
src/components/events/PastEvents.tsx
src/components/impact-labs/ImpactHero.tsx
src/components/impact-labs/HowItWorks.tsx
src/components/impact-labs/WhoShouldApply.tsx
src/components/impact-labs/PastLab.tsx
src/components/impact-labs/ApplyForm.tsx
src/components/training/TrainingMenu.tsx
src/components/training/LogoCloudSection.tsx
src/components/training/TheRoom.tsx
src/components/community/CommunityHero.tsx
src/components/community/WhatsAppJoin.tsx
src/components/community/ParticipantForm.tsx
src/components/community/CityExpansion.tsx
src/components/community/BecomeLeader.tsx
src/components/gallery/GalleryHero.tsx
src/components/gallery/PhotoGrid.tsx
src/components/shared/ThemeToggle.tsx
src/components/shared/GlassCard.tsx
src/components/shared/TallyEmbed.tsx
src/providers/ThemeProvider.tsx
src/lib/theme.ts
```

### Files to modify:
```
src/app/layout.tsx
src/app/globals.css
src/app/page.tsx
src/app/training/page.tsx
src/app/sponsors/page.tsx
src/components/Navigation.tsx
src/components/Footer.tsx
src/components/shared/EyebrowBadge.tsx
src/components/shared/StatRow.tsx
src/components/shared/SectionHeader.tsx
src/components/shared/LogoCloud.tsx
src/components/shared/DarkCTA.tsx
```

---

### Task 1: Copy claudeoc-site into claudeoc repo

**Files:**
- Modify: all files in `claudeoc` repo root

- [ ] **Step 1: Back up OG repo's key files for reference**

```bash
cd /Users/travisj/Projects/active/personal/claudeoc
mkdir -p .reference/og
cp -r components .reference/og/
cp -r app .reference/og/
cp tailwind.config.ts .reference/og/ 2>/dev/null || true
```

- [ ] **Step 2: Remove OG src files, keep .git and docs**

```bash
cd /Users/travisj/Projects/active/personal/claudeoc
# Remove OG source files but keep .git, docs, .reference, .superpowers
rm -rf components app lib public tailwind.config.ts next.config.ts postcss.config.mjs tsconfig.json package.json package-lock.json node_modules .next
```

- [ ] **Step 3: Copy claudeoc-site files into claudeoc**

```bash
cd /Users/travisj/Projects/active/personal/claudeoc-site
cp -r src package.json package-lock.json tsconfig.json next.config.ts postcss.config.mjs .gitignore /Users/travisj/Projects/active/personal/claudeoc/
cp -r public /Users/travisj/Projects/active/personal/claudeoc/ 2>/dev/null || true
```

- [ ] **Step 4: Install dependencies and verify build**

```bash
cd /Users/travisj/Projects/active/personal/claudeoc
npm install
npm run build
```

Expected: Build succeeds with the claudeoc-site codebase.

- [ ] **Step 5: Commit**

```bash
cd /Users/travisj/Projects/active/personal/claudeoc
git add -A
git commit -m "feat: replace OG codebase with claudeoc-site (Next.js 16, React 19, TW4)

Keep OG components in .reference/og/ for porting animations.
Docs and specs preserved."
```

---

### Task 2: Dark mode system + animation layer

**Files:**
- Create: `src/lib/theme.ts`
- Create: `src/providers/ThemeProvider.tsx`
- Create: `src/components/shared/ThemeToggle.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Create theme utility**

Create `src/lib/theme.ts`:

```typescript
export function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function setTheme(theme: "light" | "dark") {
  localStorage.setItem("theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
}
```

- [ ] **Step 2: Create ThemeProvider**

Create `src/providers/ThemeProvider.tsx`:

```tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getInitialTheme, setTheme as applyTheme } from "@/lib/theme";

type Theme = "light" | "dark";
const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

- [ ] **Step 3: Create ThemeToggle button**

Create `src/components/shared/ThemeToggle.tsx`:

```tsx
"use client";

import { useTheme } from "@/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-dark/10 bg-white text-slate-dark transition-colors hover:bg-ivory-medium dark:border-white/10 dark:bg-white/5 dark:text-ivory-light dark:hover:bg-white/10"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  );
}
```

- [ ] **Step 4: Add dark mode tokens and OG animations to globals.css**

Replace `src/app/globals.css` entirely:

```css
@import "tailwindcss";

@theme {
  /* ─── Anthropic Color Palette (Light) ─── */
  --color-slate-dark: #141413;
  --color-slate-medium: #3d3d3a;
  --color-slate-light: #5e5d59;
  --color-cloud-dark: #87867f;
  --color-cloud-medium: #b0aea5;
  --color-cloud-light: #d1cfc5;
  --color-ivory-light: #faf9f5;
  --color-ivory-medium: #f0eee6;
  --color-ivory-dark: #e8e6dc;
  --color-oat: #e3dacc;
  --color-manilla: #ebdbbc;
  --color-kraft: #d4a27f;
  --color-clay: #d97757;
  --color-accent: #c6613f;
  --color-sky: #6a9bcc;
  --color-olive: #788c5d;
  --color-cactus: #bcd1ca;
  --color-heather: #cbcadb;
  --color-coral: #ebcece;
  --color-fig: #c46686;

  /* ─── Dark Mode Surface Colors ─── */
  --color-stone-950: #1C1917;
  --color-stone-900: #2D2926;
  --color-stone-800: #3D3530;
  --color-cream: #FAF9F6;
  --color-muted: #A8A29E;

  /* ─── Typography ─── */
  --font-sans: "Poppins", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Lora", ui-serif, Georgia, serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* ─── Spacing ─── */
  --spacing-18: 4.5rem;
  --spacing-22: 5.5rem;
  --spacing-30: 7.5rem;
  --spacing-34: 8.5rem;
  --spacing-38: 9.5rem;

  /* ─── Border Radius ─── */
  --radius-pill: 100vw;

  /* ─── Animations ─── */
  --animate-fade-up: fadeUp 0.7s ease-out forwards;
  --animate-fade-in: fadeIn 0.5s ease-out forwards;
  --animate-glow-pulse: glowPulse 4s ease-in-out infinite;
  --animate-float: float 6s ease-in-out infinite;

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes glowPulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }
}

/* ─── Base Styles (Light) ─── */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-serif);
  background-color: var(--color-ivory-light);
  color: var(--color-slate-dark);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-sans);
}

/* ─── Dark Mode ─── */
html.dark body {
  background-color: var(--color-stone-950);
  color: var(--color-cream);
}

html.dark ::selection {
  background-color: var(--color-clay);
  color: white;
}

/* ─── Selection ─── */
::selection {
  background-color: var(--color-clay);
  color: white;
}

/* ─── Scrollbar ─── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--color-ivory-medium); }
::-webkit-scrollbar-thumb { background: var(--color-cloud-medium); border-radius: 3px; }
html.dark ::-webkit-scrollbar-track { background: var(--color-stone-950); }
html.dark ::-webkit-scrollbar-thumb { background: var(--color-clay); }

/* ─── Focus Ring ─── */
*:focus-visible {
  outline: 2px solid var(--color-clay);
  outline-offset: 2px;
}

/* ─── Scroll-triggered Reveals (from OG) ─── */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }

/* ─── Glass Card (dark mode only) ─── */
.glass {
  background: rgba(45, 41, 38, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(250, 249, 246, 0.06);
}
.glass-hover {
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}
.glass-hover:hover {
  background: rgba(45, 41, 38, 0.7);
  border-color: rgba(212, 131, 106, 0.2);
  transform: translateY(-2px);
}

/* ─── Glow Effects (dark mode) ─── */
.glow-coral {
  box-shadow: 0 0 60px rgba(212, 131, 106, 0.15), 0 0 120px rgba(212, 131, 106, 0.05);
}
.glow-blue {
  box-shadow: 0 0 60px rgba(96, 165, 250, 0.15), 0 0 120px rgba(96, 165, 250, 0.05);
}

/* ─── Gradient Text ─── */
.gradient-text {
  background: linear-gradient(135deg, #D4836A 0%, #E8A88E 40%, #D4836A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ─── Dot Grid (dark mode hero) ─── */
.dot-grid {
  background-image: radial-gradient(circle, rgba(212, 131, 106, 0.12) 1px, transparent 1px);
  background-size: 28px 28px;
}

/* ─── Divider ─── */
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212, 131, 106, 0.3), transparent);
}

/* ─── Reduced Motion ─── */
@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none; opacity: 1; transform: none; }
  .glass-hover:hover { transform: none; }
}
```

- [ ] **Step 5: Update layout.tsx with ThemeProvider and inline theme script**

Replace `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClaudeOC — Orange County's Claude Community",
  description:
    "Join Orange County's Claude community. 400+ attendees per event. Meetups, hackathons, training, and more. Free to join.",
  openGraph: {
    title: "ClaudeOC — Orange County's Claude Community",
    description:
      "The official Anthropic Ambassador community in Orange County. Meetups, Impact Labs, and more.",
    type: "website",
    url: "https://claudeoc.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Poppins:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Create TallyEmbed shared component**

Create `src/components/shared/TallyEmbed.tsx`:

```tsx
"use client";

import { useEffect, useRef } from "react";

interface TallyEmbedProps {
  formId: string;
  placeholder?: boolean;
  placeholderText?: string;
}

export function TallyEmbed({ formId, placeholder, placeholderText }: TallyEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (placeholder) return;
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [placeholder]);

  if (placeholder) {
    return (
      <div className="rounded-xl border-2 border-dashed border-clay/30 bg-clay/5 p-8 text-center dark:border-clay/20 dark:bg-clay/5">
        <div className="inline-flex items-center gap-2 rounded-full bg-clay/10 px-3 py-1 text-xs font-medium text-clay">
          Coming soon
        </div>
        <p className="mt-3 font-serif text-sm text-cloud-dark dark:text-muted">
          {placeholderText || "Form coming soon"}
        </p>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <iframe
        data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1`}
        loading="lazy"
        width="100%"
        height="400"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Form"
        className="rounded-xl"
      />
    </div>
  );
}
```

- [ ] **Step 7: Create GlassCard shared component**

Create `src/components/shared/GlassCard.tsx`:

```tsx
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-dark/10 bg-white p-6 dark:glass ${
        hover ? "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:glass-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 8: Verify build passes**

```bash
cd /Users/travisj/Projects/active/personal/claudeoc
npm run build
```

Expected: Build succeeds.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: add dark mode system, animation layer, shared components

- ThemeProvider with localStorage + prefers-color-scheme
- ThemeToggle sun/moon button
- Dark mode CSS tokens (stone-950, glass, glows)
- OG animation classes (reveal, glow, glass-hover)
- TallyEmbed component with placeholder support
- GlassCard with light/dark variants"
```

---

### Task 3: Update Navigation with all pages + dark mode

**Files:**
- Modify: `src/components/Navigation.tsx`

- [ ] **Step 1: Replace Navigation.tsx**

Replace `src/components/Navigation.tsx`:

```tsx
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
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-clay">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z"
                fill="currentColor" opacity="0.9"
              />
            </svg>
          </div>
          <span className="font-sans text-lg font-semibold tracking-tight text-slate-dark dark:text-cream">
            Claude<span className="text-clay">OC</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-[0.85rem] font-medium text-slate-light transition-colors hover:text-slate-dark dark:text-muted dark:hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="/community"
            className="rounded-lg bg-slate-dark px-5 py-2.5 font-sans text-sm font-medium text-ivory-light transition-colors hover:bg-slate-medium dark:bg-clay dark:hover:bg-accent"
          >
            Join Community
          </a>
        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle navigation"
          >
            <span className={`block h-0.5 w-5 bg-slate-dark transition-all duration-300 dark:bg-cream ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-dark transition-all duration-300 dark:bg-cream ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-dark transition-all duration-300 dark:bg-cream ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-ivory-light transition-all duration-300 dark:bg-stone-950 lg:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-sans text-2xl font-medium text-slate-dark transition-colors hover:text-clay dark:text-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/community"
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-lg bg-slate-dark px-8 py-3 font-sans text-base font-medium text-ivory-light dark:bg-clay"
          >
            Join Community
          </a>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Navigation.tsx
git commit -m "feat: update nav with all 7 pages, dark mode support, theme toggle"
```

---

### Task 4: Update Footer with dark mode + correct links

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Replace Footer.tsx**

Replace `src/components/Footer.tsx`:

```tsx
export function Footer() {
  return (
    <footer className="border-t border-slate-dark/10 bg-ivory-medium py-16 dark:border-white/5 dark:bg-stone-900">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-sans text-lg font-semibold text-slate-dark dark:text-cream">
              Claude<span className="text-clay">OC</span>
            </span>
            <p className="mt-3 font-serif text-sm leading-relaxed text-slate-light dark:text-muted">
              Orange County&apos;s Claude community. Part of Anthropic&apos;s global Ambassador network.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://linkedin.com/in/travcjohnson" target="_blank" rel="noopener noreferrer" className="text-cloud-dark transition-colors hover:text-clay dark:text-muted">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-slate-dark dark:text-cream">Community</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="/events" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-muted dark:hover:text-clay">Events</a></li>
              <li><a href="/impact-labs" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-muted dark:hover:text-clay">Impact Labs</a></li>
              <li><a href="/community" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-muted dark:hover:text-clay">Join Community</a></li>
              <li><a href="/gallery" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-muted dark:hover:text-clay">Gallery</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-slate-dark dark:text-cream">Programs</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="/training" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-muted dark:hover:text-clay">Training</a></li>
              <li><a href="/sponsors" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-muted dark:hover:text-clay">Sponsors</a></li>
              <li><a href="https://chat.whatsapp.com/DBipvDRd2oNIcdF6m5CnzK" target="_blank" rel="noopener noreferrer" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-muted dark:hover:text-clay">WhatsApp Group</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-slate-dark dark:text-cream">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-muted dark:hover:text-clay">Claude</a></li>
              <li><a href="https://docs.anthropic.com" target="_blank" rel="noopener noreferrer" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-muted dark:hover:text-clay">Documentation</a></li>
              <li><a href="https://anthropic.com" target="_blank" rel="noopener noreferrer" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-muted dark:hover:text-clay">Anthropic</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-dark/10 pt-8 text-center dark:border-white/5">
          <p className="font-serif text-xs text-cloud-dark dark:text-muted">
            &copy; {new Date().getFullYear()} ClaudeOC. Part of Anthropic&apos;s global Ambassador network.
          </p>
          <p className="mt-2 font-serif text-xs text-cloud-dark dark:text-muted">
            travis@aurapathai.com &middot; (734) 476-3021
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: update footer with all page links, dark mode, correct contact info"
```

---

### Task 5: Home page (all 10 sections)

**Files:**
- Create: `src/components/home/Hero.tsx`
- Create: `src/components/home/About.tsx`
- Create: `src/components/home/CommunitySegments.tsx`
- Create: `src/components/home/UpcomingEvent.tsx`
- Create: `src/components/home/ImpactLabsTeaser.tsx`
- Create: `src/components/home/PhotoCarousel.tsx`
- Create: `src/components/home/GetInvolved.tsx`
- Create: `src/components/home/StayConnected.tsx`
- Create: `src/components/home/JoinCTA.tsx`
- Modify: `src/app/page.tsx`

**Note:** This is the largest task. Each component is a separate file. The implementing agent should read the spec at `docs/superpowers/specs/2026-03-29-claudeoc-unified-design.md` for full content details and the OG repo components at `.reference/og/components/` for animation patterns to port.

- [ ] **Step 1: Create all home components**

Create each component file following the spec's "Page 1: `/` (Home)" section. Key requirements per component:

**Hero.tsx** — Must include:
- Mouse-tracking ambient glow (port from `.reference/og/components/Hero.tsx`)
- Eyebrow badge: "● Anthropic Ambassador Community"
- Headline: "Orange County's Claude Community" with gradient-text on "Claude"
- Urgency line about 73 product updates
- Dual CTAs: "View Upcoming Events" → `/events`, "Join the Community" → `/community`
- Stats row: 400+ Registrants, 3× Oversubscribed, 62 Founders & CEOs
- Dark mode: dot-grid background, glow orbs visible
- Light mode: clean, subtle

**About.tsx** — 4 cards: Show Up, Learn Together, Keep Building, Go Deeper. Use GlassCard component in dark mode.

**CommunitySegments.tsx** — Two side-by-side cards: Professional Developers (sky accent) and Vibe Coders (clay accent) with tag pills.

**UpcomingEvent.tsx** — Featured event card linking to `https://lu.ma/claudeoc`. Clay accent border.

**ImpactLabsTeaser.tsx** — Short section, headline + 2 sentences + CTA → `/impact-labs`.

**PhotoCarousel.tsx** — Grid of gradient placeholder cards (port gallery-card-N classes from `.reference/og/`). Caption overlays with event name + date.

**GetInvolved.tsx** — 3 cards: Lead a Conversation, Build With Us, Share Feedback.

**StayConnected.tsx** — WhatsApp card (link: `https://chat.whatsapp.com/DBipvDRd2oNIcdF6m5CnzK`) + Newsletter email signup.

**JoinCTA.tsx** — Dark section (bg-slate-dark). "Ready to Join?" headline. Benefits. Dual CTAs.

- [ ] **Step 2: Wire up page.tsx**

Replace `src/app/page.tsx`:

```tsx
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { CommunitySegments } from "@/components/home/CommunitySegments";
import { UpcomingEvent } from "@/components/home/UpcomingEvent";
import { ImpactLabsTeaser } from "@/components/home/ImpactLabsTeaser";
import { PhotoCarousel } from "@/components/home/PhotoCarousel";
import { GetInvolved } from "@/components/home/GetInvolved";
import { StayConnected } from "@/components/home/StayConnected";
import { JoinCTA } from "@/components/home/JoinCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <CommunitySegments />
        <UpcomingEvent />
        <ImpactLabsTeaser />
        <PhotoCarousel />
        <GetInvolved />
        <StayConnected />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Run dev server and visually verify**

```bash
npm run dev
```

Open http://localhost:3000 and verify: hero renders with mouse glow, all sections visible, dark mode toggle works, responsive on mobile.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: build complete home page with 10 sections

Hero with mouse-tracking glow, about, community segments,
upcoming event, Impact Labs teaser, photo carousel, get involved,
WhatsApp + newsletter, join CTA, and footer."
```

---

### Task 6: Training page

**Files:**
- Create: `src/components/training/TrainingMenu.tsx`
- Create: `src/components/training/LogoCloudSection.tsx`
- Create: `src/components/training/TheRoom.tsx`
- Modify: `src/components/training/TrainingHero.tsx`
- Modify: `src/components/training/TrainerBackground.tsx`
- Modify: `src/app/training/page.tsx`

**Note:** The existing training page from claudeoc-site has TrainingHero, TrainingFormats, and TrainerBackground. We need to modify TrainingHero (add urgency line, fix YouTube placeholder), replace TrainingFormats with TrainingMenu (the 3-tier restaurant menu), and add LogoCloudSection + TheRoom sections.

- [ ] **Step 1: Build TrainingMenu component**

Create `src/components/training/TrainingMenu.tsx` — the clean 3-tier stacked menu:
- Free Lunch & Learn (FREE, Limited time, green accent)
- 1-on-1 Coaching ($250/hr)
- Team Workshop ($5,000–$15,000, +$100/seat after 20)
- Footer: "Larger programs and ongoing engagements available — let's talk"

See spec section "The Menu — Training Tiers" for exact copy. Use dark: variants for all elements.

- [ ] **Step 2: Build LogoCloudSection and TheRoom**

Create `src/components/training/LogoCloudSection.tsx` — "Who Shows Up" section with text-only company name grid. Reuse shared LogoCloud if possible, otherwise build inline.

Create `src/components/training/TheRoom.tsx` — Demographics section: 3 large stats (62 Founders & CEOs, 49 Enterprise, 48 Students), sub-roles, callout metrics.

- [ ] **Step 3: Update TrainingHero**

Modify `src/components/training/TrainingHero.tsx`:
- Add urgency line: "Anthropic shipped 73 product updates in the last 60 days."
- Fix YouTube embed URL (keep PLACEHOLDER, mark with a TODO comment)
- Update CTA text to "Book a Free Session →"
- Add dark mode classes

- [ ] **Step 4: Update training/page.tsx**

Wire up all sections in order: TrainingHero → LogoCloudSection → TheRoom → TrainingMenu → TrainerBackground → DarkCTA.

Add metadata:
```typescript
export const metadata: Metadata = {
  title: "AI Training — Travis Johnson | ClaudeOC",
  description: "Hands-on AI training from 1 of 50 Anthropic AI Ambassadors. Free Lunch & Learn, 1:1 coaching, team workshops. Orange County.",
};
```

- [ ] **Step 5: Verify build, commit**

```bash
npm run build
git add -A
git commit -m "feat: build training page with menu pricing, logo cloud, demographics"
```

---

### Task 7: Impact Labs page

**Files:**
- Create: `src/app/impact-labs/page.tsx`
- Create: `src/components/impact-labs/ImpactHero.tsx`
- Create: `src/components/impact-labs/HowItWorks.tsx`
- Create: `src/components/impact-labs/WhoShouldApply.tsx`
- Create: `src/components/impact-labs/PastLab.tsx`
- Create: `src/components/impact-labs/ApplyForm.tsx`

- [ ] **Step 1: Build all Impact Labs components**

**ImpactHero.tsx** — Eyebrow: "Claude Impact Labs — A Global Program". Headline using Anthropic's framing. Description of the hackathon format. The implementing agent should write compelling copy (not just repeat the spec verbatim — the spec notes that actual marketing copy is written during implementation).

**HowItWorks.tsx** — 3 stats: "1 day" build event, "$0" cost to org, "1 tool" working prototype. Brief format description. Emphasis on long-term partnership.

**WhoShouldApply.tsx** — Pill badges: Hospitals & Clinics, Schools & Universities, City & County Agencies, Environmental Orgs, Nonprofits & NGOs.

**PastLab.tsx** — Card: San Diego, March 7, 2026. 27 teams. City open data. Expanding globally. Link to `https://luma.com/6ok9h92y`.

**ApplyForm.tsx** — TallyEmbed with formId `Y5ZolB`. CTA: "Know an org with a real problem? Tell us about it."

- [ ] **Step 2: Wire up page**

Create `src/app/impact-labs/page.tsx`:

```tsx
import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { ImpactHero } from "@/components/impact-labs/ImpactHero";
import { HowItWorks } from "@/components/impact-labs/HowItWorks";
import { WhoShouldApply } from "@/components/impact-labs/WhoShouldApply";
import { PastLab } from "@/components/impact-labs/PastLab";
import { ApplyForm } from "@/components/impact-labs/ApplyForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impact Labs — ClaudeOC",
  description: "Claude Impact Labs: one-day hackathons pairing local organizations with AI builders to solve real community problems.",
};

export default function ImpactLabsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <ImpactHero />
        <HowItWorks />
        <WhoShouldApply />
        <PastLab />
        <ApplyForm />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Verify build, commit**

```bash
npm run build
git add -A
git commit -m "feat: build Impact Labs page with org application flow"
```

---

### Task 8: Events page

**Files:**
- Create: `src/app/events/page.tsx`
- Create: `src/components/events/FeaturedEvent.tsx`
- Create: `src/components/events/PastEvents.tsx`

- [ ] **Step 1: Build event components**

**FeaturedEvent.tsx** — Large card: upcoming event name, date, location, "Register on Luma →" CTA linking to `https://lu.ma/claudeoc`. Clay accent border. Dark mode glass variant.

**PastEvents.tsx** — Card grid. First event: "ClaudeOC Inaugural Meetup", Feb 28, 2026, Tustin CA, 300+ attendees, link to `https://luma.com/kjwrri63`. Photo placeholder slots. Attendance badge on each card.

- [ ] **Step 2: Wire up page with metadata**

Metadata: `title: "Events — ClaudeOC"`, `description: "Upcoming and past ClaudeOC events. Meetups, workshops, and Impact Labs in Orange County."`

- [ ] **Step 3: Verify build, commit**

```bash
npm run build
git add -A
git commit -m "feat: build events page with featured event and past events grid"
```

---

### Task 9: Sponsors page update

**Files:**
- Modify: `src/app/sponsors/page.tsx`
- Modify: `src/components/sponsors/SponsorCTA.tsx` (or create SponsorCTA with Tally placeholder)
- Modify: all sponsor components for dark mode

- [ ] **Step 1: Add dark mode classes to all existing sponsor components**

Go through each file in `src/components/sponsors/` and add `dark:` variants matching the design system. Key changes:
- `bg-ivory-light` → add `dark:bg-stone-950`
- `bg-ivory-medium` → add `dark:bg-stone-900`
- `bg-white` → add `dark:bg-stone-900 dark:border-white/5`
- `text-slate-dark` → add `dark:text-cream`
- `text-slate-light` → add `dark:text-muted`
- `border-slate-dark/10` → add `dark:border-white/10`

- [ ] **Step 2: Replace SponsorCTA mailto with Tally placeholder**

Replace the mailto CTA in the sponsors page with:
```tsx
<TallyEmbed placeholder placeholderText="Sponsor interest form coming soon — email travis@aurapathai.com" />
```

This shows the dashed border + "Coming soon" badge per spec.

- [ ] **Step 3: Add disclaimer**

Add below sponsor tiers: "Anthropic co-branding is not permitted per program guidelines. Sponsors partner with ClaudeOC, the community."

- [ ] **Step 4: Verify build, commit**

```bash
npm run build
git add -A
git commit -m "feat: update sponsors page with dark mode and Tally placeholder"
```

---

### Task 10: Community page

**Files:**
- Create: `src/app/community/page.tsx`
- Create: `src/components/community/CommunityHero.tsx`
- Create: `src/components/community/WhatsAppJoin.tsx`
- Create: `src/components/community/ParticipantForm.tsx`
- Create: `src/components/community/CityExpansion.tsx`
- Create: `src/components/community/BecomeLeader.tsx`

- [ ] **Step 1: Build community components**

**CommunityHero.tsx** — "Get Involved" headline. Brief description of the community.

**WhatsAppJoin.tsx** — Prominent card with WhatsApp icon and join link: `https://chat.whatsapp.com/DBipvDRd2oNIcdF6m5CnzK`. "Join the conversation" CTA.

**ParticipantForm.tsx** — TallyEmbed with formId `rjl0MN`. Header: "Apply to Join".

**CityExpansion.tsx** — Grid of 8 OC cities with status badges:
- Active (olive bg): Irvine, Newport Beach
- Coming Soon (clay bg): Huntington Beach, Anaheim
- Open (cloud-medium bg): Costa Mesa, Fullerton, Santa Ana, Garden Grove

Port layout from `.reference/og/components/CommunityLeaders.tsx`.

**BecomeLeader.tsx** — "Organize Claude Code in Your City" card with benefits list and email CTA to `travis@aurapathai.com`.

- [ ] **Step 2: Wire up page with metadata**

Metadata: `title: "Community — ClaudeOC"`, `description: "Join the ClaudeOC community. WhatsApp group, city chapters across Orange County, speaker applications."`

- [ ] **Step 3: Verify build, commit**

```bash
npm run build
git add -A
git commit -m "feat: build community page with WhatsApp, Tally form, city expansion"
```

---

### Task 11: Gallery page

**Files:**
- Create: `src/app/gallery/page.tsx`
- Create: `src/components/gallery/GalleryHero.tsx`
- Create: `src/components/gallery/PhotoGrid.tsx`

- [ ] **Step 1: Build gallery components**

**GalleryHero.tsx** — "From Our Events" headline.

**PhotoGrid.tsx** — Masonry grid with gradient placeholder cards. Group by event:
- "ClaudeOC Inaugural Meetup" — Feb 28, 2026, Tustin, CA
- Use gallery-card-1 through gallery-card-5 gradient classes from globals.css
- Caption overlay: event name + date
- Noise texture overlay on each card for depth

Port masonry layout from `.reference/og/components/Gallery.tsx`.

- [ ] **Step 2: Wire up page with metadata**

Metadata: `title: "Gallery — ClaudeOC"`, `description: "Photos from ClaudeOC events across Orange County."`

- [ ] **Step 3: Verify build, commit**

```bash
npm run build
git add -A
git commit -m "feat: build gallery page with placeholder photo grid"
```

---

### Task 12: Final verification and deploy

**Files:**
- Modify: various (fixes only)

- [ ] **Step 1: Full build check**

```bash
cd /Users/travisj/Projects/active/personal/claudeoc
npm run build
```

Expected: Clean build, no errors.

- [ ] **Step 2: Run dev server and verify all pages**

```bash
npm run dev
```

Check each page at:
- http://localhost:3000 (home)
- http://localhost:3000/events
- http://localhost:3000/impact-labs
- http://localhost:3000/training
- http://localhost:3000/sponsors
- http://localhost:3000/community
- http://localhost:3000/gallery

Verify for each:
- Light mode renders correctly
- Dark mode toggle works
- Mobile responsive (resize browser to 375px width)
- All links work (WhatsApp, Luma, internal nav)
- Tally forms load (community participant, nonprofit interest)
- Sponsor Tally shows placeholder with "Coming soon" badge

- [ ] **Step 3: Fix any issues found**

Address build errors, broken layouts, missing dark mode tokens, etc.

- [ ] **Step 4: Commit any fixes**

```bash
git add -A
git commit -m "fix: address final review issues across all pages"
```

- [ ] **Step 5: Deploy to Vercel**

```bash
git push origin main
```

The claudeoc repo is already connected to Vercel at claudeoc.com. Push triggers auto-deploy.

- [ ] **Step 6: Verify live site**

```bash
vercel --prod
```

Or check the Vercel dashboard. Verify claudeoc.com loads with all 7 pages.

---

## Task Dependencies

```
Task 1 (copy codebase)
  └→ Task 2 (dark mode + animations)
       └→ Task 3 (navigation)
            └→ Task 4 (footer)
                 ├→ Task 5  (home)        ─┐
                 ├→ Task 6  (training)     │
                 ├→ Task 7  (impact labs)  │ All parallelizable
                 ├→ Task 8  (events)       │
                 ├→ Task 9  (sponsors)     │
                 ├→ Task 10 (community)    │
                 └→ Task 11 (gallery)      ─┘
                      └→ Task 12 (verify + deploy)
```

Tasks 5–11 are independent and can be dispatched to parallel subagents.
