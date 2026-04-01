const photos = [
  { src: "/images/gallery/oc-kickoff-featured.jpg", alt: "ClaudeOC kickoff event", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/gallery/inaugural-meetup.jpg", alt: "Inaugural meetup crowd" },
  { src: "/images/gallery/hands-on-building.jpg", alt: "Hands-on building session" },
  { src: "/images/gallery/lightning-talks.jpg", alt: "Lightning talks" },
  { src: "/images/gallery/community-networking.jpg", alt: "Community networking" },
];

export function PhotoGallery() {
  return (
    <section className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <h2 className="mb-10 font-sans text-3xl font-bold text-slate-dark dark:text-cream">From Our Meetups</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {photos.map((photo) => (
            <div key={photo.src} className={`${photo.span || ""} relative overflow-hidden rounded-xl`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover aspect-[4/3]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
