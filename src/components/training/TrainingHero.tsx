import { EyebrowBadge } from "@/components/shared/EyebrowBadge";
import { StatRow } from "@/components/shared/StatRow";
import { CONTACT } from "@/lib/constants";

const VIDEO_SRC = "/videos/claude-ambassador.mp4";

const stats = [
  { value: "1,000+", label: "People Trained IRL" },
  { value: "70K", label: "Prompts Completed" },
  { value: "100+", label: "Projects Built" },
  { value: "10yr", label: "Product Management" },
];

export function TrainingHero() {
  return (
    <section className="bg-ivory-light pt-32 pb-24 dark:bg-stone-950 lg:pb-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column — DOM first for mobile, visually right on desktop */}
          <div className="flex flex-col items-start">
            <EyebrowBadge label="Anthropic Ambassador" />
            <h1 className="mt-8 font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
              Free AI Training{" "}
              <span className="text-clay">for Your Team</span>
            </h1>
            <p className="mt-3 font-sans text-lg font-medium text-slate-medium dark:text-stone-300">
              10 sessions this quarter &middot; Apply to reserve yours.
            </p>
            <p className="mt-5 max-w-lg font-serif text-lg leading-relaxed text-slate-light dark:text-stone-300">
              I come to your office and show your team what Claude can actually
              do&nbsp;&mdash; tailored to your industry, your workflows, your
              people. 90 minutes. One afternoon. Real impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${CONTACT.email}?subject=Free Training Application`}
                className="inline-flex items-center gap-2 rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent"
              >
                Apply for a Free Session
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          {/* Video column — DOM second, visually left on desktop */}
          <div id="video" className="lg:order-first">
            <div className="mx-auto w-full max-w-xs overflow-hidden rounded-xl bg-ivory-medium shadow-lg dark:bg-stone-800">
              <video
                src={VIDEO_SRC}
                controls
                playsInline
                preload="metadata"
                poster="/images/travis/headshot.jpg"
                className="h-full w-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-dark/10 pt-8 dark:border-white/10">
          <StatRow stats={stats} />
        </div>
      </div>
    </section>
  );
}
