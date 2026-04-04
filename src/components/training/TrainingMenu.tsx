import { CONTACT } from "@/lib/constants";

export function TrainingMenu() {
  return (
    <section className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            Free Lunch &amp; Learn
          </h2>
          <p className="mt-2 font-sans text-xs font-medium uppercase tracking-widest text-clay">
            10 sessions &middot; Spring 2026 &middot; OC companies
          </p>

          {/* The offer card */}
          <div className="mt-10 rounded-xl border border-slate-dark/8 bg-white p-8 dark:border-white/10 dark:bg-stone-950">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-sans text-xl font-semibold text-slate-dark dark:text-cream">
                Complimentary AI Training
              </h3>
              <div className="flex items-center gap-3">
                <span className="font-sans text-lg font-bold text-olive dark:text-emerald-400">
                  FREE
                </span>
                <span className="rounded-full bg-olive/10 px-3 py-1 font-sans text-xs font-medium text-olive dark:bg-emerald-400/10 dark:text-emerald-400">
                  Limited
                </span>
              </div>
            </div>

            <p className="mt-2 font-sans text-xs font-medium uppercase tracking-wider text-cloud-dark dark:text-muted">
              60&ndash;90 min &middot; In-person preferred &middot; Virtual available
            </p>

            <p className="mt-5 max-w-2xl font-serif text-base leading-relaxed text-slate-light dark:text-cloud-light">
              A session tailored to your team &mdash; whether that&apos;s product managers, developers, operations, finance, or the full org. Your team walks away knowing exactly how Claude fits into their day-to-day work.
            </p>

            {/* What your team gets */}
            <div className="mt-6 border-t border-slate-dark/5 pt-6 dark:border-white/5">
              <p className="mb-3 font-sans text-sm font-medium text-slate-dark dark:text-cream">
                What your team gets:
              </p>
              <ul className="space-y-2">
                {[
                  "Live demos tailored to your industry and workflows",
                  "Every attendee builds something real in the session",
                  "Practical AI workflows they can use Monday morning",
                  "Direct Q&A with a Claude Ambassador",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-serif text-sm text-slate-light dark:text-cloud-light">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who qualifies */}
            <div className="mt-6 border-t border-slate-dark/5 pt-6 dark:border-white/5">
              <p className="mb-3 font-sans text-xs font-medium text-slate-light dark:text-cloud-light">
                Who qualifies:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Orange County companies", "20+ team members", "Currently evaluating or using AI tools"].map((q) => (
                  <span key={q} className="rounded-full border border-slate-dark/6 bg-slate-dark/3 px-3 py-1.5 font-sans text-xs text-slate-light dark:border-white/8 dark:bg-white/5 dark:text-cloud-light">
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Beyond free */}
          <p className="mt-8 text-center font-serif text-sm italic text-cloud-dark dark:text-cloud-light">
            Looking for workshops, 1-on-1 coaching, or ongoing enablement?{" "}
            <a
              href={`mailto:${CONTACT.email}?subject=AI Training Inquiry`}
              className="not-italic font-medium text-clay transition-colors hover:text-accent"
            >
              Let&apos;s talk &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
