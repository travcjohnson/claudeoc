"use client";

import { TallyEmbed } from "@/components/shared/TallyEmbed";

export function ApplyForm() {
  return (
    <section id="apply" className="bg-ivory-light py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            Know an org with a real problem?
          </h2>
          <p className="mt-5 font-serif text-xl leading-relaxed text-slate-light dark:text-cloud-light">
            Tell us about it. We review every submission and reach out directly
            to organizations that are a strong fit.
          </p>
        </div>

        <div className="max-w-2xl">
          <TallyEmbed formId="Y5ZolB" title="Organization nomination form" />
        </div>
      </div>
    </section>
  );
}
