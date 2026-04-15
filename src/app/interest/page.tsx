import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { InterestForm } from "@/components/interest/InterestForm";

export const metadata: Metadata = {
  title: "Work With Us — AuraPath AI | ClaudeOC",
  description:
    "AI training for engineering, product, and cross-org teams. Become one of 3 case study partners. Show interest.",
  openGraph: {
    title: "Work With Us — AuraPath AI | ClaudeOC",
    description:
      "AI training for engineering, product, and cross-org teams. Become one of 3 case study partners.",
    type: "website",
    url: "https://claudeoc.com/interest",
  },
};

export default function InterestPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-ivory dark:bg-stone-950">
        <section className="mx-auto max-w-2xl px-6 pb-24 pt-32">
          <div className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-clay">
            Work With AuraPath AI
          </div>
          <h1 className="font-sans text-3xl font-bold tracking-tight text-slate-dark dark:text-cream sm:text-4xl">
            Get your team trained.
            <br />
            <span className="text-clay">Become a case study.</span>
          </h1>
          <p className="mt-4 font-serif text-base leading-relaxed text-slate-light dark:text-stone-300">
            Hands-on Claude training tailored to your team&apos;s stack,
            workflows, and pain points. We&apos;re selecting{" "}
            <strong className="text-slate-dark dark:text-cream">
              3 organizations across different verticals
            </strong>{" "}
            to become high-impact case studies — preferred pricing, documented
            results.
          </p>

          <div className="mt-10">
            <InterestForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
