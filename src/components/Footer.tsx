const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Impact Labs', href: '#impact-labs' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'Connect', href: '#connect' },
];

const RESOURCE_LINKS = [
  { label: 'Claude.ai', href: 'https://claude.ai' },
  { label: 'Anthropic', href: 'https://anthropic.com' },
  { label: 'Claude Code', href: 'https://docs.anthropic.com/en/docs/claude-code' },
  { label: 'Luma Events', href: 'https://lu.ma/claude-oc' },
];

export function Footer() {
  return (
    <footer className="bg-slate-dark text-ivory-light py-16 lg:py-20">
      <div className="max-w-[89.5rem] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-sans font-bold text-2xl mb-4">
              Claude<span className="text-clay">OC</span>
            </div>
            <p className="font-serif text-sm text-cloud-medium leading-relaxed mb-3">
              The official Anthropic Ambassador community in Orange County.
            </p>
            <p className="text-xs text-cloud-medium/60">
              Part of the global Claude Community program
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <p className="font-sans text-xs uppercase tracking-wider text-cloud-medium/60 mb-4">
              Explore
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-serif text-sm text-cloud-medium hover:text-ivory-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Resources */}
          <div>
            <p className="font-sans text-xs uppercase tracking-wider text-cloud-medium/60 mb-4">
              Resources
            </p>
            <ul className="space-y-2">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-sm text-cloud-medium hover:text-ivory-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <p className="font-sans text-xs uppercase tracking-wider text-cloud-medium/60 mb-4">
              Get in Touch
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:travis@claudeoc.com"
                  className="font-serif text-sm text-cloud-medium hover:text-ivory-light transition-colors"
                >
                  travis@claudeoc.com
                </a>
              </li>
              <li className="font-serif text-sm text-cloud-medium">
                Orange County, California
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory-light/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cloud-medium/60 text-center sm:text-left">
            &copy; 2026 ClaudeOC. An official Anthropic Ambassador community.
          </p>
          <p className="text-xs text-cloud-medium/60">
            Built with Claude
          </p>
        </div>
      </div>
    </footer>
  );
}
