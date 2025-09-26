import Link from 'next/link';
import { LINKS } from '@/lib/links';

export default function Header() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Docs', href: LINKS.DOCS, external: true },
    { label: 'Chain', href: LINKS.CHAIN, external: true },
    { label: 'Genesis', href: LINKS.GENESIS, external: true },
    { label: 'Tests', href: LINKS.TESTS, external: true },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-semibold text-slate-900 hover:text-slate-700 transition-colors"
          >
            TreJay
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile menu button - placeholder for future enhancement */}
          <div className="md:hidden">
            <button className="text-slate-600 hover:text-slate-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
