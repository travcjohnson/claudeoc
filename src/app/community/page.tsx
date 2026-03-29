import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CommunityHero } from "@/components/community/CommunityHero";
import { WhatsAppJoin } from "@/components/community/WhatsAppJoin";
import { ParticipantForm } from "@/components/community/ParticipantForm";
import { CityExpansion } from "@/components/community/CityExpansion";
import { BecomeLeader } from "@/components/community/BecomeLeader";

export const metadata: Metadata = {
  title: "Community — ClaudeOC",
  description:
    "Join the ClaudeOC community. WhatsApp group, city chapters across Orange County, speaker applications.",
  openGraph: {
    title: "Community — ClaudeOC",
    description:
      "Join the ClaudeOC community. WhatsApp group, city chapters across Orange County, speaker applications.",
    type: "website",
    url: "https://claudeoc.com/community",
  },
};

export default function CommunityPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <CommunityHero />
        <WhatsAppJoin />
        <ParticipantForm />
        <CityExpansion />
        <BecomeLeader />
      </main>
      <Footer />
    </>
  );
}
