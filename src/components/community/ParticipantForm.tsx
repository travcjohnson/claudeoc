"use client";

import { TallyEmbed } from "@/components/shared/TallyEmbed";

export function ParticipantForm() {
  return (
    <section className="bg-ivory-light py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <h2 className="font-sans text-2xl font-bold text-slate-dark dark:text-cream md:text-3xl">
          Apply to Join
        </h2>
        <p className="mt-4 max-w-xl font-serif text-base leading-relaxed text-slate-light dark:text-cloud-light">
          Tell us a bit about yourself — your background, what you are working on,
          and what you hope to get from the community.
        </p>
        <div className="mt-8 max-w-2xl">
          <TallyEmbed formId="rjl0MN" title="Community participant application" />
        </div>
      </div>
    </section>
  );
}
