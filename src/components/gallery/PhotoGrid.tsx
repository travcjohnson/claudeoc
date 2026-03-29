interface PhotoPlaceholder {
  cardClass: string;
  span: string;
}

const photos: PhotoPlaceholder[] = [
  { cardClass: "gallery-card-1", span: "col-span-2 row-span-2" },
  { cardClass: "gallery-card-2", span: "col-span-1 row-span-1" },
  { cardClass: "gallery-card-3", span: "col-span-1 row-span-1" },
  { cardClass: "gallery-card-4", span: "col-span-1 row-span-2" },
  { cardClass: "gallery-card-5", span: "col-span-1 row-span-1" },
  { cardClass: "gallery-card-1", span: "col-span-1 row-span-1" },
  { cardClass: "gallery-card-2", span: "col-span-2 row-span-1" },
  { cardClass: "gallery-card-3", span: "col-span-1 row-span-1" },
];

export function PhotoGrid() {
  return (
    <section className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="mb-8">
          <h2 className="font-sans text-xl font-bold text-slate-dark dark:text-cream">
            ClaudeOC Inaugural Meetup
          </h2>
          <p className="mt-1 font-sans text-sm font-medium text-slate-light dark:text-muted">
            Feb 28, 2026 &middot; Tustin, CA
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.cardClass} ${photo.span} relative overflow-hidden rounded-xl`}
            >
              <div className="absolute inset-0 flex items-end p-4">
                <div className="rounded-md bg-black/30 px-3 py-1.5 backdrop-blur-sm">
                  <p className="font-sans text-xs font-medium text-white/90">
                    ClaudeOC Inaugural Meetup
                  </p>
                  <p className="font-sans text-[10px] text-white/70">
                    Feb 28, 2026
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
