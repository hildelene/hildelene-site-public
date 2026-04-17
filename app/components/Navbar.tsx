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
        {/* Apenas logo, clicável */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <img
            src="/midia/herocarousel/logo_hildelene_vetor_cmyk.svg"
            alt="Logo Hildelene Nautidesign"
            style={{ height: '2.5rem', width: 'auto', display: 'block' }}
          />
        </Link>
        {/* Botão Intranet */}
        <a href="#" className="navbar-contact-btn">
          Intranet
        </a>
      </div>
    </nav>
  );
}
