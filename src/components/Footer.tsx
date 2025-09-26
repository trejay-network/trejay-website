import { LINKS } from '@/lib/links';

export default function Footer() {
  const resourceLinks = [
    { label: 'Docs', href: LINKS.DOCS },
    { label: 'Chain', href: LINKS.CHAIN },
    { label: 'Genesis', href: LINKS.GENESIS },
    { label: 'Tests', href: LINKS.TESTS },
  ];

  const policyLinks = [
    { label: 'Security', href: LINKS.SECURITY },
    { label: 'Contributing', href: LINKS.CONTRIBUTING },
  ];

  const socialLinks = [
    { label: 'X', href: LINKS.TWITTER },
    { label: 'LinkedIn', href: LINKS.LINKEDIN },
    { label: 'Telegram', href: LINKS.TELEGRAM_GROUP },
  ];

  return (
    <footer id="community" className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">TreJay</h3>
            <p className="text-slate-600 text-sm">
              The blockchain network with 3JAY as its native cryptocurrency.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Policies</h4>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Community</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm text-center">
            © 2025 TreJay Network. Open source blockchain protocol.
          </p>
        </div>
      </div>
    </footer>
  );
}
