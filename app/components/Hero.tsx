'use client';

import Background from './Background';
import { useRef } from 'react';

export default function Hero() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: dir * 280,
      behavior: 'smooth',
    });
  };

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
        <div className="carouselWrapper">
          <div className="carouselSidebar">
            <button className="carouselMenuBtn">A Equipe</button>
            <button className="carouselMenuBtn">Projetos</button>
            <button className="carouselMenuBtn">Desenvolvimento Profissional</button>
          </div>
          <div className="carouselMain">
            <div className="carousel" ref={carouselRef}>
              <div className="card">
                <div className="carouselImage" style={{backgroundImage: "url('/images/hero-ocean-dark.jpg')"}} />
                <div className="carouselText">
                  <p>Do zero ao mar, nosso time projeta, desenvolve e constrói rebocadores inovadores para atender as demandas da indústria naval.</p>
                </div>
                <div className="carouselIndicators">
                  <span className="carouselDot active"></span>
                  <span className="carouselDot"></span>
                  <span className="carouselDot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
