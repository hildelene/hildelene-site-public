'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
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
      {/* Navegação removida conforme solicitado */}
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
