import { SectionHeader } from "@/components/shared/SectionHeader";
import { LogoCloud } from "@/components/shared/LogoCloud";

const roles = [
  { label: "Founders", count: 53, pct: 100 },
  { label: "Enterprise", count: 49, pct: 92 },
  { label: "Students", count: 48, pct: 91 },
  { label: "Software Eng", count: 28, pct: 53 },
  { label: "C-Suite", count: 15, pct: 28 },
  { label: "Directors", count: 8, pct: 15 },
  { label: "VPs", count: 5, pct: 9 },
];

const companies = [
  "Google", "Amazon", "Meta", "Microsoft", "Salesforce",
  "Capital Group", "Blizzard", "Virgin Music Group", "Siemens", "PwC",
  "AbbVie", "Labcorp", "HubSpot", "Shopify", "Toast",
  "CBRE", "Fabletics", "Edmunds", "Providence", "Skool", "Mozilla",
];

const universities = [
  "UCLA", "Caltech", "UCI", "Berkeley", "Chapman", "Cal Poly",
  "Georgia Tech", "CSUF", "Northeastern",
];

export function AudienceProfile() {
  return (
    <section className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <SectionHeader title="Your Audience" />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="mb-6 font-sans text-sm font-semibold uppercase tracking-widest text-cloud-dark dark:text-muted">
              Who Attends
            </h3>
            <div className="flex flex-col gap-3">
              {roles.map((r) => (
                <div key={r.label} className="flex items-center gap-4">
                  <span className="w-28 shrink-0 font-sans text-sm font-medium text-slate-medium dark:text-muted">
                    {r.label}
                  </span>
                  <div className="flex-1 rounded-full bg-clay/20 h-5">
                    <div
                      className="h-5 rounded-full bg-clay"
                      style={{ width: `${r.pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-right font-mono text-sm font-medium text-slate-dark dark:text-cream">
                    {r.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 font-sans text-sm font-semibold uppercase tracking-widest text-cloud-dark dark:text-muted">
              Where They Work
            </h3>
            <LogoCloud companies={companies} universities={universities} />
          </div>
        </div>
      </div>
    </section>
  );
}
