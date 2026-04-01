import { GlassCard } from "@/components/shared/GlassCard";

type CityStatus = "active" | "coming-soon" | "open";

interface City {
  name: string;
  status: CityStatus;
}

const cities: City[] = [
  { name: "Irvine", status: "active" },
  { name: "Newport Beach", status: "active" },
  { name: "Huntington Beach", status: "coming-soon" },
  { name: "Anaheim", status: "coming-soon" },
  { name: "Costa Mesa", status: "open" },
  { name: "Fullerton", status: "open" },
  { name: "Santa Ana", status: "open" },
  { name: "Garden Grove", status: "open" },
];

const statusConfig: Record<CityStatus, { label: string; dotClass: string; badgeClass: string }> = {
  active: {
    label: "Active",
    dotClass: "bg-olive",
    badgeClass: "bg-olive/10 text-olive dark:bg-olive/20",
  },
  "coming-soon": {
    label: "Coming Soon",
    dotClass: "bg-clay",
    badgeClass: "bg-clay/10 text-clay dark:bg-clay/20",
  },
  open: {
    label: "Open",
    dotClass: "bg-cloud-medium",
    badgeClass: "bg-cloud-medium/10 text-cloud-dark dark:bg-cloud-medium/20 dark:text-muted",
  },
};

export function CityExpansion() {
  return (
    <section className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <h2 className="font-sans text-2xl font-bold text-slate-dark dark:text-cream md:text-3xl">
          City Chapters
        </h2>
        <p className="mt-4 max-w-xl font-serif text-base leading-relaxed text-slate-light dark:text-cloud-light">
          We are expanding across Orange County. Find a chapter near you or start
          one in your city.
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          {Object.entries(statusConfig).map(([key, config]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${config.dotClass}`} />
              <span className="font-sans text-xs font-medium text-slate-light dark:text-muted">
                {config.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city) => {
            const config = statusConfig[city.status];
            return (
              <GlassCard key={city.name} hover={city.status === "active"}>
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-base font-semibold text-slate-dark dark:text-cream">
                    {city.name}
                  </h3>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${config.badgeClass}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${config.dotClass}`} />
                    {config.label}
                  </span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
