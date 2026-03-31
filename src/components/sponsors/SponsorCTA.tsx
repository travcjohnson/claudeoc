"use client";

import { TallyEmbed } from "@/components/shared/TallyEmbed";

export function SponsorCTA() {
  return (
    <section id="sponsor-interest" className="bg-slate-dark py-24 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10 text-center">
        <h2 className="font-sans text-3xl font-bold text-ivory-light md:text-4xl">
          Interested in reaching this audience?
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-serif text-base text-cloud-medium">
          Express your interest below and we will follow up with partnership
          details.
        </p>
        <div className="mx-auto mt-8 max-w-lg">
          <TallyEmbed
            formId=""
            placeholder
            placeholderText="Sponsor interest form coming soon — email travis@aurapathai.com"
            title="Sponsor interest form"
          />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-serif text-sm text-cloud-medium">
          <span>travis@aurapathai.com</span>
          <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
          <span>(734) 476-3021</span>
        </div>
      </div>
    </section>
  );
}
