"use client";

import { TallyEmbed } from "@/components/shared/TallyEmbed";
import { CONTACT } from "@/lib/constants";

export function SponsorCTA() {
  return (
    <section id="sponsor-interest" className="bg-slate-dark dark:bg-stone-900 py-24 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10 text-center">
        <h2 className="font-sans text-3xl font-bold text-ivory-light md:text-4xl">
          Interested in reaching this audience?
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-serif text-base text-cloud-medium dark:text-cloud-light">
          Express your interest below and we will follow up with partnership
          details.
        </p>
        <div className="mx-auto mt-8 max-w-lg">
          <TallyEmbed
            formId=""
            placeholder
            placeholderText={`Sponsor interest form coming soon — email ${CONTACT.email}`}
            title="Sponsor interest form"
          />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-serif text-sm text-cloud-medium dark:text-cloud-light">
          <span>{CONTACT.email}</span>
          <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
          <span>{CONTACT.phone}</span>
        </div>
      </div>
    </section>
  );
}
