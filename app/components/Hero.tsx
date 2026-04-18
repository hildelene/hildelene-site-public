'use client';


import Link from 'next/link';
import Background from './Background';
import { ProjetosCarousel } from './HeroCarousel';

export default function Hero() {


  return (
    <section id="home" className="hero">
      <Background />

      <div className="heroContent">
        {/* Parallax effect on content */}
        <h1>
          Do <span className="gold">Laboratório</span> à
          <span className="gold"> Indústria</span> Naval
        </h1>

        <div className="hero-divider"></div>

        <p>Conheça os universitários que superam desafios com projetos inovadores por meio da metodologia acadêmica somado à alta performance.</p>

        <div className="buttons">
          <button className="secondary">Faça parte</button>
          <Link href="/apoie" legacyBehavior>
            <a className="secondary">Apoie</a>
          </Link>
        </div>

        {/* Carrossel de Projetos */}
        <ProjetosCarousel />
      </div>
    </section>
  );
}
