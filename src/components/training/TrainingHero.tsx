import { EyebrowBadge } from "@/components/shared/EyebrowBadge";
import { StatRow } from "@/components/shared/StatRow";

// TODO: Replace with actual YouTube video ID once available
const YOUTUBE_VIDEO_ID: string | null = null;

const stats = [
  { value: "500+", label: "People Trained IRL" },
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
              Travis Johnson
            </h1>
            <p className="mt-3 font-sans text-lg font-medium text-slate-medium dark:text-stone-300">
              1 of 50 Anthropic AI Ambassadors. Worldwide.
            </p>
            <p className="mt-4 font-sans text-base font-semibold text-clay">
              Anthropic shipped 73 product updates in the last 60 days.{" "}
              <span className="text-slate-dark dark:text-cream">
                Your team is already behind.
              </span>
            </p>
            <p className="mt-5 max-w-lg font-serif text-lg leading-relaxed text-slate-light dark:text-stone-300">
              I come to your office and get everyone up to speed&nbsp;&mdash;
              what Claude can do today, what&apos;s coming, and how teams like
              yours are using it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:travis@aurapathai.com?subject=Free Lunch %26 Learn"
                className="inline-flex items-center gap-2 rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent"
              >
                Book a Free Session
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="#video"
                className="inline-flex items-center rounded-lg border border-slate-dark px-7 py-3.5 font-sans text-sm font-medium text-slate-dark transition-colors hover:bg-slate-dark hover:text-ivory-light dark:border-white/20 dark:text-cream dark:hover:bg-white/10"
              >
                Watch My Story ▶
              </a>
            </div>
          </div>
          {/* Video column — DOM second, visually left on desktop */}
          <div id="video" className="lg:order-first">
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-ivory-medium dark:bg-stone-800">
              {YOUTUBE_VIDEO_ID ? (
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="How I became a Claude Community Ambassador"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-dark/20 dark:border-white/15">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-clay/10 dark:bg-clay/20">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-clay">
                      <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="mt-4 font-sans text-sm font-medium text-slate-light dark:text-stone-400">
                    Video coming soon
                  </span>
                </div>
              )}
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
