'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileToggleClasses =
    'inline-flex items-center justify-center rounded-md p-2 text-gold hover:bg-white/5 focus:outline-none md:hidden';

  const contactButtonClasses =
    'shrink-0 rounded-lg border border-gold/70 bg-gold/10 px-3 py-1.5 text-sm font-semibold text-gold transition-all duration-200 hover:scale-105 hover:bg-gold/20 sm:px-5 sm:py-2 sm:text-base';

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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo */}
          <Link 
            href="/" 
            className="hidden flex-shrink-0 text-xl font-bold text-gold transition-colors hover:text-cream md:block"
          >
            Hildelene Nautidesign
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={mobileToggleClasses}
            aria-label="Abrir menu"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#home" 
              className="text-cream hover:text-gold transition-colors"
            >
              Inicio
            </Link>
            <Link 
              href="#about" 
              className="text-cream hover:text-gold transition-colors"
            >
              Sobre
            </Link>
            <Link 
              href="#projects" 
              className="text-cream hover:text-gold transition-colors"
            >
              Projetos
            </Link>
            <Link 
              href="#news" 
              className="text-cream hover:text-gold transition-colors"
            >
              Noticias
            </Link>
            <Link 
              href="#contact" 
              className="text-cream hover:text-gold transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* Team Area Button */}
          <a 
            href="#" 
            className={contactButtonClasses}
          >
            Contato
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            <Link 
              href="#home" 
              className="block px-3 py-2 text-cream hover:text-gold hover:bg-navy-dark/50 rounded-md transition-colors"
            >
              Inicio
            </Link>
            <Link 
              href="#about" 
              className="block px-3 py-2 text-cream hover:text-gold hover:bg-navy-dark/50 rounded-md transition-colors"
            >
              Sobre
            </Link>
            <Link 
              href="#projects" 
              className="block px-3 py-2 text-cream hover:text-gold hover:bg-navy-dark/50 rounded-md transition-colors"
            >
              Projetos
            </Link>
            <Link 
              href="#news" 
              className="block px-3 py-2 text-cream hover:text-gold hover:bg-navy-dark/50 rounded-md transition-colors"
            >
              Noticias
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 text-cream hover:text-gold hover:bg-navy-dark/50 rounded-md transition-colors"
            >
              Contato
            </Link>
            <a 
              href="#"
              className="block px-3 py-2 bg-gold text-navy-dark font-semibold rounded-md hover:bg-cream transition-all duration-200 text-center"
            >
              Area da Equipe
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
