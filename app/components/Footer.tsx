'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">


        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-cream/50 text-sm">
            &copy; {currentYear} Hildelene Nautidesign. Todos os direitos reservados.
          </div>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-cream/50 hover:text-gold transition-colors text-sm"
            >
              Politica de Privacidade
            </Link>
            <Link
              href="#"
              className="text-cream/50 hover:text-gold transition-colors text-sm"
            >
              Termos de Uso
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
            aria-label="Voltar ao topo"
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
