import { CONTACT } from "@/lib/constants";
import { TrainingForm } from "./TrainingForm";

export function TrainingMenu() {
  return (
    <section
      id="request"
      className="scroll-mt-24 bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32"
    >
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: value prop */}
          <div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-4xl">
              Complimentary Lunch &amp; Learn
            </h2>
            <p className="mt-2 font-sans text-xs font-medium uppercase tracking-widest text-clay">
              By application &middot; Limited availability
            </p>

            <p className="mt-6 max-w-lg font-serif text-base leading-relaxed text-slate-light dark:text-cloud-light">
              A session tailored to your team &mdash; whether that&apos;s
              product managers, developers, operations, finance, or the full
              org. Your team walks away knowing exactly how Claude fits into
              their day-to-day work.
            </p>

            {/* What your team gets */}
            <div className="mt-8">
              <p className="mb-3 font-sans text-sm font-semibold text-slate-dark dark:text-cream">
                What your team gets:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Live demos tailored to your industry and workflows",
                  "Every attendee builds something real in the session",
                  "Practical AI workflows they can use Monday morning",
                  "Direct Q&A with a Claude Ambassador",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-serif text-sm text-slate-light dark:text-cloud-light"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-olive"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who qualifies */}
            <div className="mt-8">
              <p className="mb-3 font-sans text-xs font-medium text-slate-light dark:text-cloud-light">
                Who qualifies:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Orange County companies",
                  "20+ team members",
                  "Currently evaluating or using AI tools",
                ].map((q) => (
                  <span
                    key={q}
                    className="rounded-full border border-slate-dark/6 bg-slate-dark/3 px-3 py-1.5 font-sans text-xs text-slate-light dark:border-white/8 dark:bg-white/5 dark:text-cloud-light"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>

            {/* Beyond free */}
            <p className="mt-8 font-serif text-sm italic text-cloud-dark dark:text-cloud-light">
              Looking for workshops, 1-on-1 coaching, or ongoing enablement?{" "}
              <a
                href={`mailto:${CONTACT.email}?subject=AI Training Inquiry`}
                className="not-italic font-medium text-clay transition-colors hover:text-accent"
              >
                Let&apos;s talk &rarr;
              </a>
            </p>
          </div>

          {/* Right: form */}
          <div>
            <div className="rounded-xl border border-slate-dark/8 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-stone-950">
              <h3 className="mb-1 font-sans text-lg font-semibold text-slate-dark dark:text-cream">
                Request a Session
              </h3>
              <p className="mb-6 font-serif text-sm text-cloud-dark dark:text-muted">
                Tell us about your team and we&apos;ll be in touch within 48
                hours.
              </p>
              <TrainingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
