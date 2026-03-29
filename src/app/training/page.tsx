import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TrainingHero } from "@/components/training/TrainingHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { LogoCloud } from "@/components/shared/LogoCloud";
import { StatRow } from "@/components/shared/StatRow";
import { TrainingFormats } from "@/components/training/TrainingFormats";
import { TrainerBackground } from "@/components/training/TrainerBackground";
import { DarkCTA } from "@/components/shared/DarkCTA";

export const metadata: Metadata = {
  title: "AI Training \u2014 Travis Johnson | ClaudeOC",
  description:
    "Book hands-on AI training with Travis Johnson, 1 of 50 Anthropic AI Ambassadors worldwide. 500+ people trained. Customized to your team.",
  openGraph: {
    title: "AI Training \u2014 Travis Johnson | ClaudeOC",
    description:
      "1 of 50 Anthropic AI Ambassadors. 500+ trained. Book a session for your team.",
    type: "website",
    url: "https://claudeoc.com/training",
  },
};

const logoCompanies = [
  "Google", "Amazon", "Meta", "Microsoft", "Salesforce",
  "Blizzard", "Capital Group", "Virgin Music Group", "Siemens", "PwC",
  "Shopify", "AbbVie", "Labcorp", "HubSpot", "Skool",
];

const logoUniversities = [
  "UCLA", "Caltech", "UCI", "Berkeley", "Chapman", "Cal Poly", "Georgia Tech",
];

const roomStats = [
  { value: "62", label: "Founders & CEOs" },
  { value: "49", label: "Enterprise Employees" },
  { value: "48", label: "Students & Researchers" },
];

export default function TrainingPage() {
  return (
    <>
      <Navigation />
      <main>
        <TrainingHero />

        {/* Who Shows Up */}
        <section className="bg-ivory-medium py-24 lg:py-32">
          <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
            <SectionHeader
              title="Who Shows Up"
              subtitle="My events attract 400+ registrations from leaders at:"
            />
            <LogoCloud companies={logoCompanies} universities={logoUniversities} />
          </div>
        </section>

        {/* The Room */}
        <section className="bg-ivory-light py-24 lg:py-32">
          <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
            <SectionHeader
              title="The Room"
              subtitle="From the last event alone (402 registrations):"
            />
            <StatRow stats={roomStats} />
            <p className="mt-6 font-serif text-sm text-cloud-dark">
              9 CEOs · 8 Directors · 5 VPs · 3 CTOs · 3 COOs
              <br />
              26 Founders · 28 Software Engineers · 5 Data Scientists
            </p>
            <div className="mt-8 rounded-xl border border-slate-dark/10 bg-white p-6">
              <div className="flex flex-col gap-2 font-serif text-sm text-slate-light">
                <p>Top Interest: AI Agents (101 mentions)</p>
                <p>48% opted into Anthropic Developer Newsletter</p>
                <p>Events consistently 3× oversubscribed</p>
              </div>
            </div>
          </div>
        </section>

        <TrainingFormats />
        <TrainerBackground />

        <DarkCTA
          headline="Ready to bring AI training to your team?"
          buttonText="Book a Training Session"
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
