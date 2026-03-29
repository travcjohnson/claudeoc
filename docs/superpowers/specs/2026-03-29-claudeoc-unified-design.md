# ClaudeOC Unified Site — Design Spec

**Date:** 2026-03-29
**Author:** Travis Johnson + Claude
**Status:** Review
**Repo:** `travcjohnson/claudeoc` (build on top of claudeoc-site codebase)
**Domain:** claudeoc.com
**Stack:** Next.js 16, React 19, Tailwind CSS v4, static export

---

## Overview

Merge the best of two existing repos (`claudeoc` and `claudeoc-site`) into a single unified site at claudeoc.com. 7 pages. Anthropic-aligned warm cream aesthetic with selective dark-mode polish from the OG repo (mouse tracking, ambient glows, glass morphism). Light/dark mode toggle.

### Brand

- **Name:** ClaudeOC (one word)
- **Tagline:** Orange County's Claude Community
- **Contact:** travis@aurapathai.com · (734) 476-3021
- **WhatsApp:** https://chat.whatsapp.com/DBipvDRd2oNIcdF6m5CnzK
- **Luma (upcoming):** lu.ma/claudeoc
- **Luma (first event):** luma.com/kjwrri63

### Key Integrations

| Integration | URL / ID | Usage |
|-------------|----------|-------|
| WhatsApp group | `https://chat.whatsapp.com/DBipvDRd2oNIcdF6m5CnzK` | Primary community CTA |
| Tally — Community Participant | `tally.so/r/rjl0MN` | /community page embed |
| Tally — Nonprofit Interest | `tally.so/r/Y5ZolB` | /impact-labs page embed |
| Tally — Sponsor Interest | PLACEHOLDER — use dashed border + "Coming soon" badge until Travis creates form | /sponsors page embed |
| Luma — Upcoming events | `lu.ma/claudeoc` | /events + home |
| Luma — First event | `luma.com/kjwrri63` | /events past section |

---

## Design System

### Approach: Hybrid

Light mode base from `claudeoc-site` (Anthropic warm cream palette) enhanced with interaction design from `claudeoc` OG repo (mouse-tracking ambient glow, scroll-triggered reveals, subtle glass morphism). Full dark mode as a toggle.

### Color Tokens

**Light mode (default):**

| Token | Hex | Usage |
|-------|-----|-------|
| `slate-dark` | `#141413` | Primary text, dark buttons |
| `slate-medium` | `#3d3d3a` | Secondary headings |
| `slate-light` | `#5e5d59` | Body text |
| `cloud-dark` | `#87867f` | Muted labels |
| `cloud-medium` | `#b0aea5` | Borders, subtle text |
| `ivory-light` | `#faf9f5` | Page background |
| `ivory-medium` | `#f0eee6` | Alternating section bg |
| `ivory-dark` | `#e8e6dc` | Card fills on ivory-medium |
| `clay` | `#d97757` | Primary accent, CTAs |
| `accent` | `#c6613f` | Hover/active state |
| `sky` | `#6a9bcc` | Secondary accent |
| `olive` | `#788c5d` | Success/positive |

**Dark mode:**

| Token | Maps to |
|-------|---------|
| Page bg | `#1C1917` (stone-950 from OG) |
| Card bg | `#2D2926` (stone-900) |
| Card border | `rgba(250, 249, 246, 0.06)` |
| Primary text | `#FAF9F6` (cream) |
| Muted text | `#A8A29E` |
| `clay` | Same `#d97757` (works on both) |
| Glass cards | `rgba(45, 41, 38, 0.5)` + `backdrop-filter: blur(12px)` |
| Glow effects | Enabled (coral + blue glows from OG) |

Dark mode activated via toggle in nav. Store preference in `localStorage`. Respect `prefers-color-scheme` as default.

### Typography

| Role | Font | CSS Class |
|------|------|-----------|
| Headings | Poppins 400-700 | `font-sans` |
| Body | Lora 400-600 | `font-serif` |
| Mono | JetBrains Mono 400-500 | `font-mono` |

Carry over from claudeoc-site. Responsive sizing via Tailwind classes, not clamp() (stay consistent with existing patterns).

### Animation Layer (from OG repo)

Port selectively from `claudeoc` OG:

| Effect | Where | Implementation |
|--------|-------|----------------|
| Mouse-tracking ambient glow | Hero section | `onMouseMove` tracks cursor, radial gradient follows |
| Scroll-triggered reveals | All sections | IntersectionObserver + CSS `.reveal` / `.visible` classes |
| Glass morphism cards | Dark mode cards | `backdrop-filter: blur(12px)` + semi-transparent bg |
| Glow pulse | Background orbs | CSS `@keyframes glowPulse` 4s infinite |
| Float | Decorative elements | CSS `@keyframes float` 6s infinite |
| Hover lift | Cards | `transform: translateY(-2px)` on hover |
| Sticky nav blur | Navigation | Background blur on scroll |

All animations respect `prefers-reduced-motion: reduce`.

### Component Patterns (from claudeoc-site)

| Pattern | Classes |
|---------|---------|
| Section padding | `py-24 lg:py-32` |
| Container | `mx-auto max-w-[89.5rem] px-6 lg:px-10` |
| Eyebrow badge | `inline-flex items-center gap-2 rounded-full border border-slate-dark/10 bg-white px-4 py-1.5` with clay dot |
| Card | `rounded-xl border border-slate-dark/10 bg-white p-6` (light) / glass card (dark) |
| Primary CTA | `rounded-lg bg-slate-dark px-7 py-3.5 font-sans text-sm font-medium text-ivory-light` |
| Clay CTA | `rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-medium text-white` |
| Section divider | `border-t border-slate-dark/10` |
| Pull quote | `rounded-xl border-l-4 border-clay bg-white px-6 py-5` |

### Dark Mode Toggle

Sun/moon icon button in the navigation. Adds `class="dark"` to `<html>`. All color tokens swap via Tailwind dark: prefix.

---

## Page 1: `/` (Home)

### Sections

| # | Section | Component | Purpose |
|---|---------|-----------|---------|
| 1 | Hero | `Hero` | Headline, urgency stat, dual CTAs, mouse-tracking glow |
| 2 | About | `About` | What is ClaudeOC, 4 value prop cards |
| 3 | Community | `CommunitySegments` | Professional Developers vs Vibe Coders split |
| 4 | Next Event | `UpcomingEvent` | Featured event card → lu.ma/claudeoc |
| 5 | Impact Labs | `ImpactLabsTeaser` | 1-section teaser → /impact-labs |
| 6 | Gallery | `PhotoCarousel` | Placeholder photo grid from events |
| 7 | Get Involved | `GetInvolved` | Speak, build, give feedback CTAs |
| 8 | Stay Connected | `StayConnected` | WhatsApp join + newsletter email signup |
| 9 | Join CTA | `JoinCTA` | Bottom conversion section |
| 10 | Footer | `Footer` | Links, socials, contact |

### Hero

- Eyebrow: `● Anthropic Ambassador Community`
- Headline: "Orange County's Claude Community" (display size, serif accent on "Claude")
- Urgency line: "Anthropic shipped 73 product updates in the last 60 days. Your team is already behind."
- Primary CTA: "View Upcoming Events" → `#events`
- Secondary CTA: "Join the Community" → `#join`
- Stats row: `400+ Registrants` · `3× Oversubscribed` · `62 Founders & CEOs`
- Mouse-tracking ambient glow (ported from OG Hero.tsx)
- Background: subtle dot grid pattern in dark mode, clean in light

### About — "How the Community Works"

4 cards ported from OG `WhyJoin.tsx`:
1. **Show Up** — Come to a meetup, bring your curiosity
2. **Learn Together** — Live demos, hands-on time, all levels welcome
3. **Keep Building** — The community lives between events (WhatsApp)
4. **Go Deeper** — Lead city groups, mentor, shape future events

### Community Segments

Two cards side by side (from OG `Community.tsx`):

**Professional Developers** — For engineers, architects, and technical leads integrating Claude into production. Tags: Production Workflows, Architecture, Best Practices, Team Integration.

**Vibe Coders** — For creators, entrepreneurs, and curious minds exploring what's possible. No gatekeeping. Tags: No-Code Friendly, Side Projects, Startups, Creative Builds.

### Upcoming Event

Featured event card linking to `lu.ma/claudeoc`. Show event name, date, location, registration CTA. Style as a prominent card with clay accent.

### Impact Labs Teaser

Short section: headline, 2-sentence description mirroring Anthropic's framing ("Claude Communities hackathon brand focused on supporting local governments and nonprofits"), CTA → /impact-labs.

### Photo Carousel

Horizontal scroll or grid of placeholder image slots. Gradient placeholders for now (from OG `Gallery.tsx` patterns). Organized by event with caption overlay (event name + date). Real photos dropped in later.

### Get Involved

Three cards (from claudeoc-site `GetInvolved.tsx`):
- **Lead a Conversation** — Speaker/expert application
- **Build With Us** — Join the builders channel
- **Share Feedback** — Community input

### Stay Connected

Two cards:
- **WhatsApp** — Join link: `https://chat.whatsapp.com/DBipvDRd2oNIcdF6m5CnzK`
- **Newsletter** — Email input + subscribe button (Tally form or simple email capture)

### Join CTA (Bottom)

Dark section. "Ready to Join?" headline. Benefits list. Dual CTAs: "Join the Community" (clay) + "View Events" (ghost). "Free to join. Events are community-led."

---

## Page 2: `/events`

### Sections

| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | "Events" headline + next event CTA |
| 2 | Featured Event | Upcoming event card with Luma link |
| 3 | Past Events | Grid of past event cards |

### Featured Event

Large card: event name, date, location, description, "Register on Luma →" CTA linking to `lu.ma/claudeoc`. Tally community participant form (`tally.so/r/rjl0MN`) option for pre-registration capture.

### Past Events

Card grid with:
- **ClaudeOC Inaugural Meetup** — Feb 28, 2026 · Tustin, CA · 300+ attendees · [luma.com/kjwrri63](https://luma.com/kjwrri63)
- Photo placeholder slots per event
- Attendance stat badge on each card

---

## Page 3: `/impact-labs`

### Purpose

Solicit organizations to apply as Impact Labs partners. Primary audience: nonprofit directors, hospital admins, school administrators, city agency staff.

### Sections

| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | What Impact Labs is — Anthropic's framing |
| 2 | How It Works | Build day mechanics: 1 day, $0, working prototype |
| 3 | Who Should Apply | Org types with pills |
| 4 | Past Lab | SD event proof (link to luma.com/6ok9h92y) |
| 5 | Apply Form | Tally embed (tally.so/r/Y5ZolB) |

### Hero

- Eyebrow: `Claude Impact Labs — A Global Program`
- Headline: Clear, Anthropic-aligned framing of what Impact Labs is
- Description: One-day hackathon pairing local organizations with AI builders to solve real community problems. Part of Anthropic's global Ambassador program.

### How It Works

Three stats: `1 day` build event · `$0` cost to org · `1 tool` working prototype delivered.
Brief description of the format. Emphasis on long-term partnership, not one-off.

### Who Should Apply

Pill badges: Hospitals & Clinics · Schools & Universities · City & County Agencies · Environmental Orgs · Nonprofits & NGOs

### Past Lab — San Diego

Reference card: San Diego, March 7, 2026. 27 teams. City open data. Now expanding globally. Link to `luma.com/6ok9h92y`. Not claiming credit — showing the format works.

### Apply Form

Tally embed inline: `tally.so/r/Y5ZolB` (Org name, Type, Description, Website). CTA: "Know an org with a real problem? Tell us about it."

---

## Page 4: `/training`

### Purpose

Training landing page that serves dual duty: lead gen for the free Lunch & Learn (Trojan Horse campaign) AND credibility piece for referrals (Jason Singh texts a CEO this link).

### Sections

| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | Travis intro, video, Ambassador credentials, free offer CTA |
| 2 | Logo Cloud | Companies/universities whose employees attend |
| 3 | The Room | Demographics from 402-person dataset |
| 4 | The Menu | 3 tiers: Free L&L, 1:1, Workshop |
| 5 | Background | Credentials, career, philosophy |
| 6 | CTA | Dark section closer |

### Hero

Two-column: text right, video left (YouTube embed, placeholder until video ready).

- Eyebrow: `● Anthropic Ambassador`
- Name: `TRAVIS JOHNSON`
- Subtitle: "1 of 50 Anthropic AI Ambassadors. Worldwide."
- Urgency: "Anthropic shipped 73 product updates in the last 60 days. Your team is already behind."
- Description: "I come to your office and get everyone up to speed — what Claude can do today, what's coming, and how teams like yours are using it."
- Primary CTA: "Book a Free Session →" (clay)

Stats row: `500+` People Trained · `70K` Prompts Completed · `100+` Projects Built · `10yr` Product Management

### Logo Cloud

"Who Shows Up" — text-only company names in card grid.

**Enterprise:** Google, Amazon, Meta, Microsoft, Salesforce
**Industry:** Blizzard, Capital Group, Virgin Music Group, Siemens, PwC
**Tech/Health:** Shopify, AbbVie, Labcorp, HubSpot, Skool

Below: "+ UCLA, Caltech, UCI, Berkeley, Chapman, Cal Poly, Georgia Tech..."

### The Room

"From the last event (402 registrations):"
- 62 Founders & CEOs
- 49 Enterprise Employees
- 48 Students & Researchers
- Sub-roles: 9 CEOs · 8 Directors · 5 VPs · 3 CTOs · 3 COOs

Callout: Top Interest: AI Agents (101 mentions) · 48% opted into Anthropic Developer Newsletter · 3× oversubscribed

### The Menu — Training Tiers

Clean stacked list, like a restaurant menu:

**Free Lunch & Learn** — `FREE` (Limited time)
60–90 min · In-person or virtual
"Anthropic shipped 73 product updates in the last 60 days. Your team is already behind. I come to your office and get everyone up to speed — what Claude can do today, what's coming, and how teams like yours are using it. No laptops required, just show up."
→ Tally form or CTA

**1-on-1 Coaching** — `$250/hr`
Flexible scheduling · Virtual or in-person
For the founder, VP, or team lead who wants to go deep before rolling AI out to the org. Learn to think in prompts, build agents, and evaluate what's real vs. hype.

**Team Workshop** — `$5,000–$15,000`
Half-day or full-day · Up to 20 people · +$100/seat after 20
Your whole team, building real things in one room. Curriculum tailored to your stack — devs shipping with Claude Code, PMs automating workflows, ops teams cutting manual work in half.

Footer text: "Larger programs and ongoing engagements available — let's talk"

### Background

Credentials list:
- Anthropic AI Ambassador (1 of 50 globally)
- Duke University AI Certificate
- Co-founder, AuraPath AI
- 10 years product management (e-commerce, CPG, HR tech)
- 70,000 prompts · 100+ projects · daily Claude power user

Pull quote: "When something unlocks you, you overflow with joy and can't keep it to yourself."

### CTA

Dark section: "Ready to bring AI training to your team?"
CTA: "Book a Session →" · travis@aurapathai.com · (734) 476-3021

---

## Page 5: `/sponsors`

### Purpose

Sponsorship page for companies to understand ClaudeOC audience and express interest.

### Sections

Port from claudeoc-site with these changes:
- Replace all `mailto:` CTAs with inline Tally form for sponsor interest
- Tally fields: Name, Company, Email, Interest type (dropdown: Event Sponsor, Training Partner, API Credits, Other)
- QR-code friendly URL for scanning at events

Content carries over from existing claudeoc-site `/sponsors`:
1. SponsorsHero — headline + stats
2. AudienceProfile — role breakdown bar chart + company logos
3. ExperienceLevels — Claude usage bars
4. CompanySize — SMB/Mid-Market/Enterprise
5. SponsorTiers — Community Partner + Event Sponsor
6. EventHighlights — past event stats
7. SponsorCTA — dark section with Tally form

Disclaimer: "Anthropic co-branding is not permitted per program guidelines. Sponsors partner with ClaudeOC, the community."

---

## Page 6: `/community`

### Purpose

Community hub: join channels, apply to participate, see city expansion.

### Sections

| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | "Get Involved" |
| 2 | WhatsApp | Primary community channel CTA |
| 3 | Apply | Tally community participant form embed |
| 4 | City Expansion | 8 OC cities with status badges |
| 5 | Become a Leader | CTA for city organizers |

### WhatsApp

Prominent card with join link: `https://chat.whatsapp.com/DBipvDRd2oNIcdF6m5CnzK`

### Apply — Community Participant

Tally embed: `tally.so/r/rjl0MN` (Name, LinkedIn, Area of Expertise, Short bio)

### City Expansion

Grid from OG `CommunityLeaders.tsx`: 8 OC cities with status badges:
- **Active:** Irvine, Newport Beach (green)
- **Coming Soon:** Huntington Beach, Anaheim (clay)
- **Open:** Costa Mesa, Fullerton, Santa Ana, Garden Grove (muted)

### Become a Leader

"Organize Claude Code in Your City" — benefits list + CTA to apply via email.

---

## Page 7: `/gallery`

### Purpose

Event photo gallery for social proof. Placeholder grid for now, real photos later.

### Sections

| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | "From Our Events" |
| 2 | Photo Grid | Masonry layout, organized by event |

### Photo Grid

Masonry grid with placeholder image slots. Each event gets a group:
- **ClaudeOC Inaugural Meetup** — Feb 28, 2026, Tustin, CA
- Gradient placeholders (from OG gallery-card patterns)
- Caption overlay: event name + date
- Designed to easily swap placeholders for real images via simple file replacement

---

## Navigation

```
ClaudeOC    Events    Impact Labs    Training    Community    Gallery    Sponsors    [☀/🌙]
```

- Mobile: hamburger menu with slide-out overlay
- Dark mode toggle: sun/moon icon, rightmost position
- All anchor links from sub-pages prefix with `/` (e.g., `/#events`)
- Sticky on scroll with backdrop blur

---

## Shared Components

Extract and reuse across pages:

| Component | Used In |
|-----------|---------|
| `EyebrowBadge` | Home, Training, Sponsors, Impact Labs |
| `StatRow` | Home, Training, Sponsors |
| `SectionHeader` | All pages |
| `LogoCloud` | Training, Sponsors |
| `DarkCTA` | Training, Sponsors, Impact Labs |
| `GlassCard` | All pages (dark mode variant) |
| `ThemeToggle` | Navigation |

---

## File Structure

```
src/
├── app/
│   ├── page.tsx                    (home)
│   ├── layout.tsx                  (root layout, fonts, theme)
│   ├── globals.css                 (tokens, animations, dark mode)
│   ├── events/page.tsx
│   ├── impact-labs/page.tsx
│   ├── training/page.tsx
│   ├── sponsors/page.tsx
│   ├── community/page.tsx
│   └── gallery/page.tsx
├── components/
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── CommunitySegments.tsx
│   │   ├── UpcomingEvent.tsx
│   │   ├── ImpactLabsTeaser.tsx
│   │   ├── PhotoCarousel.tsx
│   │   ├── GetInvolved.tsx
│   │   ├── StayConnected.tsx
│   │   └── JoinCTA.tsx
│   ├── events/
│   │   ├── FeaturedEvent.tsx
│   │   └── PastEvents.tsx
│   ├── impact-labs/
│   │   ├── ImpactHero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhoShouldApply.tsx
│   │   ├── PastLab.tsx
│   │   └── ApplyForm.tsx
│   ├── training/
│   │   ├── TrainingHero.tsx
│   │   ├── LogoCloudSection.tsx
│   │   ├── TheRoom.tsx
│   │   ├── TrainingMenu.tsx
│   │   ├── TrainerBackground.tsx
│   │   └── TrainingCTA.tsx
│   ├── sponsors/
│   │   ├── SponsorsHero.tsx
│   │   ├── AudienceProfile.tsx
│   │   ├── ExperienceLevels.tsx
│   │   ├── CompanySize.tsx
│   │   ├── SponsorTiers.tsx
│   │   ├── EventHighlights.tsx
│   │   └── SponsorCTA.tsx
│   ├── community/
│   │   ├── CommunityHero.tsx
│   │   ├── WhatsAppJoin.tsx
│   │   ├── ParticipantForm.tsx
│   │   ├── CityExpansion.tsx
│   │   └── BecomeLeader.tsx
│   ├── gallery/
│   │   ├── GalleryHero.tsx
│   │   └── PhotoGrid.tsx
│   ├── shared/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── EyebrowBadge.tsx
│   │   ├── StatRow.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── LogoCloud.tsx
│   │   ├── DarkCTA.tsx
│   │   └── GlassCard.tsx
│   └── providers/
│       └── ThemeProvider.tsx
└── lib/
    └── theme.ts                    (theme utilities, localStorage)
```

---

## Metadata

### Home
```
title: "ClaudeOC — Orange County's Claude Community"
description: "Join Orange County's Claude community. 400+ attendees per event. Meetups, hackathons, training, and more. Free to join."
```

### Events
```
title: "Events — ClaudeOC"
description: "Upcoming and past ClaudeOC events. Meetups, workshops, and Impact Labs in Orange County."
```

### Impact Labs
```
title: "Impact Labs — ClaudeOC"
description: "Claude Impact Labs: one-day hackathons pairing local organizations with AI builders to solve real community problems."
```

### Training
```
title: "AI Training — Travis Johnson | ClaudeOC"
description: "Hands-on AI training from 1 of 50 Anthropic AI Ambassadors. Free Lunch & Learn, 1:1 coaching, team workshops. Orange County."
```

### Sponsors
```
title: "Sponsor ClaudeOC — Orange County AI Community"
description: "Partner with OC's fastest-growing AI community. 400+ registrants per event. Founders, engineers, and enterprise leaders."
```

### Community
```
title: "Community — ClaudeOC"
description: "Join the ClaudeOC community. WhatsApp group, city chapters across Orange County, speaker applications."
```

### Gallery
```
title: "Gallery — ClaudeOC"
description: "Photos from ClaudeOC events across Orange County."
```

---

## Build Approach

1. Start from `claudeoc-site` codebase (newer stack, cleaner base)
2. Copy into the `claudeoc` repo (which owns the claudeoc.com Vercel domain)
3. Add dark mode system (ThemeProvider, ThemeToggle, dark: variants)
4. Port animations from OG repo (mouse tracking, scroll reveals, glass cards)
5. Build pages in priority order: Home → Training → Impact Labs → Events → Sponsors → Community → Gallery
6. Wire up all Tally embeds, WhatsApp link, Luma links
7. Deploy to Vercel on claudeoc.com

---

## What This Spec Does NOT Cover

- Actual marketing copy (will be written during implementation with proper craft)
- CMS or dynamic data (all content hardcoded for V1)
- Analytics (add Vercel Analytics post-launch)
- Email service integration for newsletter (V2 — use Tally or simple capture for V1)
- Custom domain email setup for claudeoc.com (separate task)
- Lottie animations (V2 if needed)

---

## Success Criteria

1. claudeoc.com loads fast with all 7 pages working
2. Light/dark mode toggle works with system preference detection
3. All Tally forms embedded and functional
4. WhatsApp link works
5. Luma event links work
6. Mobile responsive across all pages
7. QR codes scannable to key pages (training, sponsors, impact-labs, community)
8. A CEO clicking a texted training link understands the value in 10 seconds
9. A nonprofit director on /impact-labs knows what to do and applies
10. The site feels like it belongs in the Anthropic ecosystem
