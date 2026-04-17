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
      <div className="navbar-inner">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo */}
          <Link 
            href="/" 
            className="hidden flex-shrink-0 text-xl font-bold text-gold transition-colors hover:text-cream md:block"
          >
            Hildelene Nautidesign
          </Link>


          {/* Logo e nome da equipe */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/midia/logo_hildelene_vetor_cmyk.svg"
              alt="Logo Hildelene Nautidesign"
              style={{ height: '2.5rem', width: 'auto', display: 'block' }}
            />
            <span className="text-xl font-bold text-gold whitespace-nowrap">Hildelene Nautidesign</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#home" 
              className="navbar-link"
            >
              Inicio
            </Link>
            <Link 
              href="#about" 
              className="navbar-link"
            >
              Sobre
            </Link>
            <Link 
              href="#projects" 
              className="navbar-link"
            >
              Projetos
            </Link>
            <Link 
              href="#news" 
              className="navbar-link"
            >
              Noticias
            </Link>
            <Link 
              href="#contact" 
              className="navbar-link"
            >
              Contato
            </Link>
          </div>

          {/* Team Area Button */}
          <a 
            href="#" 
            className="navbar-contact-btn"
          >
            Intranet
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="navbar-mobile-menu md:hidden">
            <Link 
              href="#home" 
              className="navbar-mobile-link"
            >
              Inicio
            </Link>
            <Link 
              href="#about" 
              className="navbar-mobile-link"
            >
              Sobre
            </Link>
            <Link 
              href="#projects" 
              className="navbar-mobile-link"
            >
              Projetos
            </Link>
            <Link 
              href="#news" 
              className="navbar-mobile-link"
            >
              Noticias
            </Link>
            <Link 
              href="#contact" 
              className="navbar-mobile-link"
            >
              Contato
            </Link>
            <a 
              href="#"
              className="navbar-mobile-team-btn"
            >
              Area da Equipe
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
