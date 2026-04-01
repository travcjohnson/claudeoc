const companies = [
  "Google",
  "Amazon",
  "Meta",
  "Microsoft",
  "Salesforce",
  "Blizzard",
  "Capital Group",
  "Virgin Music Group",
  "Siemens",
  "PwC",
  "Shopify",
  "AbbVie",
  "Labcorp",
  "HubSpot",
  "Skool",
];

const universities =
  "+ UCLA, Caltech, UCI, Berkeley, Chapman, Cal Poly, Georgia Tech...";

export function LogoCloudSection() {
  return (
    <section className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
            Who Shows Up
          </h2>
          <p className="mt-5 font-serif text-xl leading-relaxed text-slate-light dark:text-stone-300">
            My events attract 400+ registrations from leaders at:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {companies.map((name) => (
            <div
              key={name}
              className="rounded-lg border border-slate-dark/5 bg-white px-4 py-3 text-center font-sans text-sm font-semibold text-slate-medium dark:border-white/5 dark:bg-stone-800 dark:text-stone-300"
            >
              {name}
            </div>
          ))}
        </div>

        <p className="mt-4 font-serif text-sm text-cloud-dark dark:text-cloud-light">
          {universities}
        </p>
      </div>
    </section>
  );
}
