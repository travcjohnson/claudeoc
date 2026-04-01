import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FeaturedEvent } from "@/components/events/FeaturedEvent";
import { PastEvents } from "@/components/events/PastEvents";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Events — ClaudeOC",
  description:
    "Upcoming and past ClaudeOC events. Meetups, workshops, and Impact Labs in Orange County.",
  openGraph: {
    title: "Events — ClaudeOC",
    description:
      "Upcoming and past ClaudeOC events. Meetups, workshops, and Impact Labs in Orange County.",
    type: "website",
    url: "https://claudeoc.com/events",
  },
};

export default function EventsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <section className="bg-ivory-light py-24 dark:bg-stone-950 lg:py-32">
          <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
            <h1 className="font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl lg:text-6xl">
              Events
            </h1>
            <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-slate-light dark:text-cloud-light">
              Meetups, workshops, and Impact Labs across Orange County. Come build
              with us.
            </p>
            <div className="mt-8">
              <a
                href={CONTACT.luma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent"
              >
                View Next Event on Luma
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </section>
        <FeaturedEvent />
        <PastEvents />
      </main>
      <Footer />
    </>
  );
}
