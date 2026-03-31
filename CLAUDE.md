# CLAUDE.md — ClaudeOC

## Project

Community website for ClaudeOC (claudeoc.com) — Orange County's Claude community. Part of Anthropic's global Ambassador program. 7-page static site deployed on Vercel.

**Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, static export
**Repo:** `travcjohnson/claudeoc`
**Domain:** claudeoc.com

## Rules

- Never modify ESLint config files (.eslintrc, eslint.config.js, etc.)
- Never add eslint-disable comments (inline, block, or file-level)
- Never add entries to .eslintignore
- If you encounter a lint error you cannot resolve, STOP and ask

## Design Context

### Users

**Primary:** Professionals exploring Claude — founders, PMs, engineers, marketers, operators in Orange County. Mix of technical builders (Claude Code, API) and business users (Cowork, Projects, chat). Many are switching from ChatGPT and discovering the Claude ecosystem for the first time.

**Secondary:** Corporate training buyers (CEOs, VPs, L&D directors) evaluating Travis for team workshops. Nonprofit/gov directors considering Impact Labs partnerships.

**Context:** They arrive via texted links (training page from referrals), event QR codes, LinkedIn posts, or organic search. Mobile-first for event attendees scanning QR codes. Desktop for training/sponsor buyers doing research.

### Brand Personality

**Warm, Practical, Inclusive + Professional, Ambitious, Sharp**

The intersection: a community that's welcoming and accessible but takes itself seriously. Not a casual hangout — a room where real work happens and real people connect. Think "the professional community that doesn't feel corporate."

**Emotional goals:** Confidence ("I belong here"), curiosity ("I want to learn more"), trust ("these people know what they're doing").

### Aesthetic Direction

**Visual tone:** Anthropic-aligned warm cream palette with editorial typography. Clean and restrained in light mode. Elevated with glass morphism, ambient glows, and mouse-tracking effects in dark mode. Feels like a high-quality magazine crossed with a modern tool.

**References:** anthropic.com (warm, editorial, restrained), notion.so (friendly, approachable, tool-for-everyone)

**Anti-references:**
- Generic SaaS landing pages (hero + features + pricing template)
- Crypto/Web3 hype aesthetic (neon, dark-only, "gm" energy)
- Corporate enterprise portals (stiff, stock photos, no personality)

**Theme:** Light mode default, dark mode toggle. Both must feel intentional — dark mode is not an afterthought.

### Color System

**Light mode base:** Warm ivory (#faf9f5) with cream (#f0eee6) alternating sections
**Dark mode base:** Stone (#1C1917) with slightly lighter stone (#2D2926) cards
**Primary accent:** Clay/terracotta (#d97757) — CTAs, highlights, brand mark
**Secondary accents:** Sky (#6a9bcc), Olive (#788c5d), used sparingly for contrast
**Text:** Near-black (#141413) light / Cream (#FAF9F6) dark

### Typography

- **Headings:** Poppins (sans-serif) — clean, modern, professional
- **Body:** Lora (serif) — editorial warmth, readable at length
- **Mono:** JetBrains Mono — technical credibility in data/stats

### Design Principles

1. **Warmth over flash** — Every element should feel approachable, not impressive. Animations serve the experience, never demand attention. If it feels like showing off, remove it.

2. **Substance first** — Real numbers, real names, real links. No placeholder promises. If content isn't ready, show a clear "coming soon" state rather than fake data.

3. **One clear action per screen** — Each section should guide the visitor toward one thing: join, apply, register, learn more. Multiple competing CTAs dilute all of them.

4. **Works on a phone at an event** — QR codes are a primary entry point. Pages must load fast, render clean at 375px, and have tap-friendly targets. If it doesn't work on mobile, it doesn't work.

5. **Dark mode is a feature, not a toggle** — Dark mode should feel like its own considered design, not a CSS inversion. Glass morphism, ambient glows, and subtle depth effects make dark mode the premium experience.
