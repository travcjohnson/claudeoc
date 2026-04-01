export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-16 max-w-2xl">
      <h2 className="font-sans text-4xl font-bold tracking-tight text-slate-dark dark:text-cream md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 font-serif text-xl leading-relaxed text-slate-light dark:text-cloud-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
