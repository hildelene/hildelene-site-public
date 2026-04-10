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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 font-bold text-xl text-gold hover:text-cream transition-colors"
          >
            Hildelene Nautidesign
          </Link>

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
            className="hidden md:block px-6 py-2 bg-gold text-navy-dark font-semibold rounded-lg hover:bg-cream transition-all duration-200 transform hover:scale-105"
          >
            Area da Equipe
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gold hover:bg-navy-dark focus:outline-none"
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
