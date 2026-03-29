const upcomingEvents = [
  {
    title: "Claude OC Meetup #2",
    date: "March 2026",
    location: "Orange County, CA",
    status: "Coming Soon",
    description:
      "Our next community gathering. Details announced soon.",
    link: "https://lu.ma/claude-oc",
    linkLabel: "Register →",
  },
  {
    title: "Claude Impact Lab: OC",
    date: "Spring 2026",
    location: "Orange County, CA",
    status: "Planning",
    description:
      "Build AI solutions for local causes. $5,000 in sponsorship, API credits, and prizes.",
    link: "https://lu.ma/claude-oc",
    linkLabel: "Learn More →",
  },
];

const pastEvents = [
  {
    title: "Claude OC Inaugural Meetup",
    date: "February 28, 2026",
    location: "Orange County, CA",
    attendees: "300+",
    description:
      "Our first community event — 300 builders, professionals, and AI enthusiasts came together.",
    link: "https://lu.ma/claude-oc",
    linkLabel: "View Details →",
  },
];

function UpcomingEventCard({
  title,
  date,
  location,
  status,
  description,
  link,
  linkLabel,
}: (typeof upcomingEvents)[number]) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-dark/10 bg-white">
      <div className="h-1 w-full bg-clay" />
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-block rounded-full bg-ivory-dark px-3 py-1 font-sans text-xs font-medium uppercase tracking-wider text-slate-light">
            {date}
          </span>
          <span className="inline-block rounded-full bg-clay/10 px-3 py-1 font-sans text-xs font-medium text-clay">
            {status}
          </span>
        </div>
        <h3 className="font-sans text-xl font-semibold text-slate-dark">
          {title}
        </h3>
        <p className="font-serif text-slate-light">{description}</p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-2">
          <span className="font-serif text-sm text-cloud-medium">{location}</span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium text-clay transition-colors hover:text-accent"
          >
            {linkLabel}
          </a>
        </div>
      </div>
    </article>
  );
}

function PastEventCard({
  title,
  date,
  location,
  attendees,
  description,
  link,
  linkLabel,
}: (typeof pastEvents)[number]) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-dark/10 bg-white">
      <div className="h-1 w-full bg-cloud-light" />
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-block rounded-full bg-ivory-dark px-3 py-1 font-sans text-xs font-medium uppercase tracking-wider text-slate-light">
            {date}
          </span>
          {attendees && (
            <span className="inline-block rounded-full bg-ivory-medium px-3 py-1 font-sans text-xs font-medium text-slate-light">
              {attendees} Attendees
            </span>
          )}
        </div>
        <h3 className="font-sans text-xl font-semibold text-slate-dark">
          {title}
        </h3>
        <p className="font-serif text-slate-light">{description}</p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-2">
          <span className="font-serif text-sm text-cloud-medium">{location}</span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium text-clay transition-colors hover:text-accent"
          >
            {linkLabel}
          </a>
        </div>
      </div>
    </article>
  );
}

export function Events() {
  return (
    <section id="events" className="bg-ivory-light py-24 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 font-sans text-4xl font-bold text-slate-dark lg:text-5xl">
            Events
          </h2>
          <p className="font-serif text-lg text-slate-light">
            Join us for meetups, workshops, and hackathons in Orange County and
            beyond.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="mb-8 font-sans text-xl font-semibold text-slate-dark">
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <UpcomingEventCard key={event.title} {...event} />
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h3 className="mb-8 font-sans text-xl font-semibold text-slate-dark">
            Past Events
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <PastEventCard key={event.title} {...event} />
            ))}
          </div>
        </div>

        {/* Luma footer note */}
        <p className="border-t border-slate-dark/10 pt-8 font-serif text-sm text-cloud-medium">
          Events are posted on our official Luma page. Follow us for updates.{" "}
          <a
            href="https://lu.ma/claude-oc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-clay underline underline-offset-2 transition-colors hover:text-accent"
          >
            lu.ma/claude-oc
          </a>
        </p>
      </div>
    </section>
  );
}
