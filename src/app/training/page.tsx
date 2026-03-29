import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TrainingHero } from "@/components/training/TrainingHero";
import { LogoCloudSection } from "@/components/training/LogoCloudSection";
import { TheRoom } from "@/components/training/TheRoom";
import { TrainingMenu } from "@/components/training/TrainingMenu";
import { TrainerBackground } from "@/components/training/TrainerBackground";
import { DarkCTA } from "@/components/shared/DarkCTA";

export const metadata: Metadata = {
  title: "AI Training — Travis Johnson | ClaudeOC",
  description:
    "Hands-on AI training from 1 of 50 Anthropic AI Ambassadors. Free Lunch & Learn, 1:1 coaching, team workshops. Orange County.",
  openGraph: {
    title: "AI Training — Travis Johnson | ClaudeOC",
    description:
      "Hands-on AI training from 1 of 50 Anthropic AI Ambassadors. Free Lunch & Learn, 1:1 coaching, team workshops.",
    type: "website",
    url: "https://claudeoc.com/training",
  },
};

export default function TrainingPage() {
  return (
    <>
      <Navigation />
      <main>
        <TrainingHero />
        <LogoCloudSection />
        <TheRoom />
        <TrainingMenu />
        <TrainerBackground />

        <DarkCTA
          headline="Ready to bring AI training to your team?"
          buttonText="Book a Free Session"
          buttonHref="mailto:travis@aurapathai.com?subject=AI Training Session"
          contactEmail="travis@aurapathai.com"
          contactPhone="(734) 476-3021"
          linkedIn="linkedin.com/in/travcjohnson"
        />
      </main>
      <Footer />
    </>
  );
}
