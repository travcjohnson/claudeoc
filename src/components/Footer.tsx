import { CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-dark/10 bg-ivory-medium py-16 dark:border-white/5 dark:bg-stone-900">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <span className="font-sans text-lg font-semibold text-slate-dark dark:text-cream">
              Claude<span className="text-clay">OC</span>
            </span>
            <p className="mt-3 font-serif text-sm leading-relaxed text-slate-light dark:text-cloud-light">
              Orange County&apos;s Claude community. Part of Anthropic&apos;s global Ambassador network.
            </p>
            <div className="mt-4 flex gap-3">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-cloud-dark transition-colors hover:text-clay dark:text-cloud-light">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-slate-dark dark:text-cream">Community</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="/events" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-cloud-light dark:hover:text-clay">Events</a></li>
              <li><a href="/impact-labs" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-cloud-light dark:hover:text-clay">Impact Labs</a></li>
              <li><a href="/community" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-cloud-light dark:hover:text-clay">Join Community</a></li>
              <li><a href="/gallery" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-cloud-light dark:hover:text-clay">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-slate-dark dark:text-cream">Programs</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="/training" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-cloud-light dark:hover:text-clay">Training</a></li>
              <li><a href="/sponsors" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-cloud-light dark:hover:text-clay">Sponsors</a></li>
              <li><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-cloud-light dark:hover:text-clay">WhatsApp Group</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-slate-dark dark:text-cream">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-cloud-light dark:hover:text-clay">Claude</a></li>
              <li><a href="https://docs.anthropic.com" target="_blank" rel="noopener noreferrer" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-cloud-light dark:hover:text-clay">Documentation</a></li>
              <li><a href="https://anthropic.com" target="_blank" rel="noopener noreferrer" className="font-serif text-sm text-slate-light transition-colors hover:text-clay dark:text-cloud-light dark:hover:text-clay">Anthropic</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-dark/10 pt-8 text-center dark:border-white/5">
          <p className="font-serif text-xs text-cloud-dark dark:text-muted">
            &copy; {new Date().getFullYear()}{" "}ClaudeOC. Part of Anthropic&apos;s global Ambassador network.
          </p>
          <p className="mt-2 font-serif text-xs text-cloud-dark dark:text-muted">
            {CONTACT.email} &middot; {CONTACT.phone}
          </p>
        </div>
      </div>
    </footer>
  );
}
