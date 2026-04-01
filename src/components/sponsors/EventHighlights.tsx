import { SectionHeader } from "@/components/shared/SectionHeader";

const highlights = [
  {
    stat: "350+",
    label: "Attendee flagship event",
    description: "Largest Claude community event in OC",
  },
  {
    stat: "6",
    label: "Events over 3 days",
    description: "Feb/Mar 2026 blitz",
  },
  {
    stat: "Mercury Bank",
    label: "Sponsored showcase",
    description: "First corporate sponsor partnership",
  },
];

export function EventHighlights() {
  return (
    <section className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <SectionHeader title="Past Event Highlights" />
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl border border-slate-dark/10 bg-white p-6 dark:border-white/10 dark:bg-stone-950"
            >
              <p className="font-sans text-2xl font-bold text-slate-dark dark:text-cream">
                {h.stat}
              </p>
              <p className="mt-1 font-sans text-sm font-semibold text-slate-medium dark:text-cloud-light">
                {h.label}
              </p>
              <p className="mt-3 font-serif text-sm text-slate-light dark:text-cloud-light">
                {h.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center font-serif text-lg italic text-slate-light dark:text-cloud-light">
          Vision: 10,000-person SoCal AI hackathon
        </p>
      </div>
    </section>
  );
}
