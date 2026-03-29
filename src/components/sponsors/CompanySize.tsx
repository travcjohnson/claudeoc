import { SectionHeader } from "@/components/shared/SectionHeader";

const segments = [
  { name: "SMB", range: "1–500", count: 207, pct: "52%" },
  { name: "Mid-Market", range: "501–5,000", count: 53, pct: "13%" },
  { name: "Enterprise", range: "5,000+", count: 71, pct: "18%" },
];

export function CompanySize() {
  return (
    <section className="bg-ivory-medium py-24 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <SectionHeader title="Company Size Distribution" />
        <div className="grid gap-6 sm:grid-cols-3">
          {segments.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-slate-dark/10 bg-white p-6 text-center"
            >
              <h3 className="font-sans text-lg font-semibold text-slate-dark">
                {s.name}
              </h3>
              <p className="mt-1 font-sans text-xs font-medium uppercase tracking-wider text-cloud-dark">
                {s.range} employees
              </p>
              <p className="mt-4 font-sans text-3xl font-bold text-slate-dark">
                {s.count}
              </p>
              <p className="mt-1 font-sans text-sm text-cloud-dark">{s.pct}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 font-serif text-sm text-cloud-dark">
          Balanced mix: startups evaluating tools + enterprises scaling AI adoption
        </p>
      </div>
    </section>
  );
}
