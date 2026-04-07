import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TrainingHero } from "@/components/training/TrainingHero";
import { LogoCloudSection } from "@/components/training/LogoCloudSection";
import { TheRoom } from "@/components/training/TheRoom";
import { TrainingMenu } from "@/components/training/TrainingMenu";
import { TrainerBackground } from "@/components/training/TrainerBackground";
import { DarkCTA } from "@/components/shared/DarkCTA";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Training — Travis Johnson | ClaudeOC",
  description:
    "Complimentary AI training for qualified Orange County companies. Limited sessions available from a Claude Ambassador.",
  openGraph: {
    title: "AI Training — Travis Johnson | ClaudeOC",
    description:
      "Complimentary AI training for qualified Orange County companies. Limited sessions available from a Claude Ambassador.",
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
        <TrainerBackground />
        <TrainingMenu />

        <DarkCTA
          headline="Limited sessions available. Apply for yours."
          buttonText="Request a Session"
          buttonHref="#request"
          contactEmail={CONTACT.email}
          contactPhone={CONTACT.phone}
          linkedIn="linkedin.com/in/travcjohnson"
        />
      </main>
      <Footer />
    </>
  );
}
