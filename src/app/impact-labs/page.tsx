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
  description:
    "Claude Impact Labs: one-day hackathons pairing local organizations with AI builders to solve real community problems.",
  openGraph: {
    title: "Impact Labs — ClaudeOC",
    description:
      "One-day build events pairing nonprofits and government orgs with volunteer AI builders. $0 cost. Working prototypes delivered.",
    type: "website",
    url: "https://claudeoc.com/impact-labs",
  },
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
