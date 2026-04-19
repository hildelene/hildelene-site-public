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
        </div>
      </div>
    </footer>
  );
}