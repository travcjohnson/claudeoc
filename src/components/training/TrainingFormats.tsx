import { SectionHeader } from "@/components/shared/SectionHeader";

const formats = [
  {
    name: "Lunch & Learn",
    duration: "1 hour",
    capacity: "Up to 30",
    description:
      "Perfect for exec teams who want the \u201cwhat & why\u201d of AI \u2014 high-level, strategic, no laptops required.",
  },
  {
    name: "Half-Day Workshop",
    duration: "2\u20133 hours",
    capacity: "Up to 50",
    description:
      "Hands-on with Claude Code, agents, and real workflows. Participants leave with working prototypes.",
  },
  {
    name: "Full Workshop",
    duration: "Full day",
    capacity: "Custom",
    description:
      "Deep dive with custom use cases for your org. We build real solutions to your specific problems.",
  },
];

export function TrainingFormats() {
  return (
    <section className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <SectionHeader title="What You Get" />
        <div className="grid gap-6 md:grid-cols-3">
          {formats.map((f) => (
            <div
              key={f.name}
              className="rounded-xl border border-slate-dark/10 bg-white p-6 dark:border-white/10 dark:bg-stone-800"
            >
              <h3 className="font-sans text-lg font-semibold text-slate-dark dark:text-cream">
                {f.name}
              </h3>
              <div className="mt-3 flex gap-4">
                <span className="font-sans text-xs font-medium uppercase tracking-wider text-cloud-dark dark:text-muted">
                  {f.duration}
                </span>
                <span className="font-sans text-xs font-medium uppercase tracking-wider text-cloud-dark dark:text-muted">
                  {f.capacity}
                </span>
              </div>
              <p className="mt-4 font-serif text-sm leading-relaxed text-slate-light dark:text-muted">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
