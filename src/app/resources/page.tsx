import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ResourceGate } from "@/components/resources/ResourceGate";

export const metadata: Metadata = {
  title: "Top 3 Claude Code Repos — Free | ClaudeOC",
  description:
    "Get Travis's top 3 Claude Code repos: Impeccable (design quality), Superpowers (dev workflows), and skills.sh (skill directory). Free with email.",
  openGraph: {
    title: "Top 3 Claude Code Repos — Free | ClaudeOC",
    description:
      "Impeccable for design. Superpowers for dev. skills.sh for discovery. Get all three.",
    type: "website",
    url: "https://claudeoc.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-ivory dark:bg-stone-950">
        <section className="mx-auto max-w-2xl px-6 pb-24 pt-32">
          <div className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-clay">
            Free Resources
          </div>
          <h1 className="font-sans text-3xl font-bold tracking-tight text-slate-dark dark:text-cream sm:text-4xl">
            Three repos that changed
            <br />
            <span className="text-clay">how I build.</span>
          </h1>
          <p className="mt-4 font-serif text-base leading-relaxed text-slate-light dark:text-stone-300">
            Drop your email and get instant access to install guides for all
            three.
          </p>

          <div className="mt-10">
            <ResourceGate />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
