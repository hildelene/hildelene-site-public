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
      <div className="navbar-inner flex h-16 items-center justify-between gap-3 relative">
        {/* Logo + texto com altura igual, estilos no CSS */}
        <Link href="/" className="navbar-logo-link flex-shrink-0">
          <img
            src="/midia/logo_hildelene_vetor_cmyk.svg"
            className="navbar-logo-img"
          />
        </Link>
        <div className="navbar-title-container navbar-title-absolute">
          <span className="navbar-title">Hildelene Nautidesign</span>
          <span className="navbar-subtitle">UERJ</span>
        </div>
        {/* Botão Intranet */}
        <a href="#" className="navbar-contact-btn">
          Intranet
        </a>
      </div>
    </nav>
  );
}
