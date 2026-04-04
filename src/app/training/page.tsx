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
    "Free AI training for OC companies from a Claude Ambassador. 10 complimentary sessions this quarter. Apply to reserve yours.",
  openGraph: {
    title: "AI Training — Travis Johnson | ClaudeOC",
    description:
      "Free AI training for OC companies from a Claude Ambassador. 10 complimentary sessions this quarter. Apply to reserve yours.",
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
          headline="10 sessions this quarter. Apply for yours."
          buttonText="Apply for Free Training"
          buttonHref={`mailto:${CONTACT.email}?subject=Free Training Application`}
          contactEmail={CONTACT.email}
          contactPhone={CONTACT.phone}
          linkedIn="linkedin.com/in/travcjohnson"
        />
      </main>
      <Footer />
    </>
  );
}
