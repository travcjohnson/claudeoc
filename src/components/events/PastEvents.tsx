import { GlassCard } from "@/components/shared/GlassCard";
import { CONTACT } from "@/lib/constants";

const pastEvents = [
  {
    name: "ClaudeOC Inaugural Meetup",
    date: "Feb 28, 2026",
    location: "Tustin, CA",
    attendees: "300+",
    link: CONTACT.lumaFirstEvent,
    photoSlots: 4,
  },
];

export function PastEvents() {
  return (
    <section className="bg-ivory-medium py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-cloud-dark dark:text-muted">
          Past Events
        </h2>

        <div className="mt-8 grid gap-8">
          {pastEvents.map((event) => (
            <GlassCard key={event.name} hover={false} className="p-0 overflow-hidden">
              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-sans text-xl font-bold text-slate-dark dark:text-cream">
                      {event.name}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-3 text-sm">
                      <span className="font-sans font-medium text-slate-light dark:text-muted">
                        {event.date}
                      </span>
                      <span className="text-cloud-medium" aria-hidden="true">&middot;</span>
                      <span className="font-sans font-medium text-slate-light dark:text-muted">
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-olive/10 px-3 py-1 font-sans text-xs font-semibold text-olive dark:bg-olive/20">
                      {event.attendees} attendees
                    </span>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-dark/10 px-4 py-2 font-sans text-xs font-medium text-slate-dark transition-colors hover:bg-slate-dark hover:text-ivory-light dark:border-white/10 dark:text-cream dark:hover:bg-cream/10"
                    >
                      View on Luma
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {Array.from({ length: event.photoSlots }, (_, i) => (
                    <div
                      key={i}
                      className={`gallery-card-${(i % 5) + 1} aspect-[4/3] rounded-lg`}
                    >
                      <div className="flex h-full items-end p-3">
                        <span className="rounded-md bg-black/30 px-2 py-1 font-sans text-[10px] font-medium text-white/80 backdrop-blur-sm">
                          Photo {i + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
