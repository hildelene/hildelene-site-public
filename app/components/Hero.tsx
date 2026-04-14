'use client';

import Background from './Background';

import HeroCarousel from './HeroCarousel';

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

        <p>Conheça os universitários que superam desafios com projetos inovadores por meio da metodologia acadêmica somado à alta performance. Abrangendo toda a comunidade acadêmica, servimos como berço do desenvolvimento de excelentes profissionais, criativos e capacitados na resolução de problemas, que serão cruciais para o futuro da indústria naval. </p>

        <div className="buttons">
          <button className="secondary">Faça parte</button>
          <button className="secondary">Apoie</button>
        </div>

        {/* CAROUSEL COM MENU LATERAL */}
        <HeroCarousel />
      </div>
    </section>
  );
}
