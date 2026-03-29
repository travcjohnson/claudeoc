import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SponsorsHero } from "@/components/sponsors/SponsorsHero";
import { AudienceProfile } from "@/components/sponsors/AudienceProfile";
import { ExperienceLevels } from "@/components/sponsors/ExperienceLevels";
import { CompanySize } from "@/components/sponsors/CompanySize";
import { SponsorTiers } from "@/components/sponsors/SponsorTiers";
import { EventHighlights } from "@/components/sponsors/EventHighlights";
import { SponsorCTA } from "@/components/sponsors/SponsorCTA";

export const metadata: Metadata = {
  title: "Sponsor ClaudeOC — Orange County AI Community",
  description:
    "Partner with OC's fastest-growing AI community. 400+ registrants per event. Founders, engineers, and enterprise leaders.",
  openGraph: {
    title: "Sponsor ClaudeOC — Orange County AI Community",
    description:
      "400+ registrants per event. 62 founders/CEOs. 49 enterprise employees. Reach the builders shaping AI.",
    type: "website",
    url: "https://claudeoc.com/sponsors",
  },
};

export default function SponsorsPage() {
  return (
    <>
      <Navigation />
      <main>
        <SponsorsHero />
        <AudienceProfile />
        <ExperienceLevels />
        <CompanySize />
        <SponsorTiers />
        <EventHighlights />
        <SponsorCTA />
      </main>
      <Footer />
    </>
  );
}
