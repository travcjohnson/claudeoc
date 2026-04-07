import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
  span: string;
}

const photos: Photo[] = [
  { src: "/images/gallery/oc-kickoff-featured.jpg", alt: "OC Kickoff — Travis presenting to a packed room", span: "col-span-2 row-span-2" },
  { src: "/images/gallery/flux-inaugural-meetup.jpg", alt: "Inaugural meetup — golden hour networking", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/hands-on-building.jpg", alt: "Hands-on building — attendees coding on laptops", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/lightning-talks.jpg", alt: "Lightning talks — Travis with mic", span: "col-span-1 row-span-2" },
  { src: "/images/gallery/flux-hands-on-building.jpg", alt: "Workshop collaboration around a laptop", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/community-networking.jpg", alt: "Community networking — attendees in conversation", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/inaugural-meetup.jpg", alt: "Inaugural meetup — projector and packed venue", span: "col-span-2 row-span-1" },
  { src: "/images/gallery/flux-lightning-talks.jpg", alt: "Speaker presenting to engaged audience", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/flux-oc-kickoff.jpg", alt: "Packed kickoff event — cinematic wide shot", span: "col-span-1 row-span-1" },
  { src: "/images/community/travis-presenting.jpg", alt: "Travis presenting The Code Tab", span: "col-span-2 row-span-1" },
  { src: "/images/community/crowd-laptops.jpg", alt: "Packed room — laptops open, ready to build", span: "col-span-1 row-span-1" },
  { src: "/images/community/travis-crowd.jpg", alt: "Travis engaging with attendees", span: "col-span-1 row-span-1" },
  { src: "/images/community/attendee-focused.jpg", alt: "Attendee deep in focus", span: "col-span-1 row-span-1" },
];

export function PhotoGrid() {
  return (
    <section className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="mb-8">
          <h2 className="font-sans text-xl font-bold text-slate-dark dark:text-cream">
            ClaudeOC Inaugural Meetup
          </h2>
          <p className="mt-1 font-sans text-sm font-medium text-slate-light dark:text-cloud-light">
            Feb 28, 2026 &middot; Tustin, CA
          </p>
        </div>

        <div className="grid auto-rows-[140px] md:auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.span} group relative overflow-hidden rounded-xl`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-md bg-black/30 px-3 py-1.5 backdrop-blur-sm">
                  <p className="font-sans text-xs font-medium text-white/90">
                    ClaudeOC Inaugural Meetup
                  </p>
                  <p className="font-sans text-xs text-white/70">
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
