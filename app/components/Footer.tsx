'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-gold font-bold text-lg mb-4">
              Hildelene Nautidesign
            </h3>
            <p className="text-cream/70 text-sm">
              Engineering excellence in naval innovation and maritime technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'News', href: '#news' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gold font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { name: 'Team Area', href: '#' },
                { name: 'Documentation', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Careers', href: '#' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-gold font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              {[
                { name: 'LinkedIn', href: '#' },
                { name: 'Twitter', href: '#' },
                { name: 'Instagram', href: '#' },
                { name: 'YouTube', href: '#' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-cream/50 text-sm">
            &copy; {currentYear} Hildelene Nautidesign. All rights reserved.
          </div>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-cream/50 hover:text-gold transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-cream/50 hover:text-gold transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-cream/50 hover:text-gold transition-colors text-sm"
            >
              Sitemap
            </Link>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 bg-gold/10 border border-gold/30 rounded-full text-gold hover:bg-gold hover:text-navy-dark transition-all duration-200"
            aria-label="Scroll to top"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L11 9.586V7a1 1 0 10-2 0v2.586L7.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
