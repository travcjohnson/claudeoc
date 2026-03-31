interface DarkCTAProps {
  headline: string;
  buttonText: string;
  buttonHref: string;
  contactEmail: string;
  contactPhone: string;
  linkedIn?: string;
}

export function DarkCTA({
  headline,
  buttonText,
  buttonHref,
  contactEmail,
  contactPhone,
  linkedIn,
}: DarkCTAProps) {
  return (
    <section className="bg-slate-dark dark:bg-stone-900 py-24 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10 text-center">
        <h2 className="font-sans text-3xl font-bold text-ivory-light md:text-4xl">
          {headline}
        </h2>
        <div className="mt-8">
          <a
            href={buttonHref}
            className="inline-flex items-center gap-2 rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            {buttonText}
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-serif text-sm text-cloud-medium">
          <span>{contactEmail}</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>{contactPhone}</span>
          {linkedIn && (
            <>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <a
                href={`https://${linkedIn}`}
                className="transition-colors hover:text-ivory-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkedIn}
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
