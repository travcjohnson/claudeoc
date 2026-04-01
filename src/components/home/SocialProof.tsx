const companies = ["Google", "Amazon", "Meta", "Microsoft", "Salesforce", "Blizzard", "Capital Group", "Siemens", "PwC", "Shopify"];

export function SocialProof() {
  return (
    <section className="border-t border-slate-dark/5 bg-ivory-medium py-12 dark:border-white/5 dark:bg-stone-900">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <p className="mb-6 font-sans text-xs font-medium uppercase tracking-widest text-cloud-dark dark:text-cloud-light">
          Our members work at
        </p>
        <div className="flex flex-wrap gap-2">
          {companies.map((co) => (
            <span key={co} className="rounded-full border border-slate-dark/5 bg-white px-4 py-2 font-sans text-sm font-medium text-slate-medium dark:border-white/5 dark:bg-stone-800 dark:text-cloud-light">
              {co}
            </span>
          ))}
        </div>
        <p className="mt-4 font-serif text-xs text-cloud-dark dark:text-cloud-light">
          + UCLA, Caltech, UCI, Berkeley, Chapman, Cal Poly, Georgia Tech
        </p>
      </div>
    </section>
  );
}
