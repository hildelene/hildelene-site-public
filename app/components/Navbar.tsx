'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-inner flex h-16 items-center justify-between gap-3">
        {/* Logo + texto com altura igual */}
        <Link
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          style={{ '--navbar-logo-height': '2.5rem', height: 'var(--navbar-logo-height)' } as React.CSSProperties}
        >
          <img
            src="/midia/logo_hildelene_vetor_cmyk.svg"
            style={{ height: '100%', width: 'auto', display: 'block' }}
          />
          <span
            style={{ color: 'var(--gold)', height: '100%', display: 'flex', alignItems: 'center' }}
            className="text-xl font-bold whitespace-nowrap"
          >
            UERJ Hildelene Nautidesign
          </span>
        </Link>
        {/* Botão Intranet */}
        <a href="#" className="navbar-contact-btn">
          Intranet
        </a>
      </div>
    </nav>
  );
}
