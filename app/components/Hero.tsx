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
          <span className="gold">Indústria Naval</span>
        </h1>

        <p>Conheça os universitários que superam desafios com projetos inovadores, comprometimento e alta performance</p>

        <div className="buttons">
          <button className="secondary">Participe</button>
          <button className="secondary">Seja parceiro</button>
        </div>

        {/* CAROUSEL */}
        <div className="carouselWrapper">
          <button onClick={() => scrollCarousel(-1)} className="carouselBtn">
            ←
          </button>

          <div className="carousel" ref={carouselRef}>
            <div className="card">
              <h3>Design Hidrodinâmico</h3>
              <p>Simulações CFD avancadas e testes de propulsão para otimizar desempenho</p>
            </div>
            <div className="card">
              <h3>Engenharia de Estruturas</h3>
              <p>Projetos estruturais de precisão com os melhores materiais</p>
            </div>
            <div className="card">
              <h3>Sistema de Propulsão</h3>
              <p>Desenvolvimento de sistemas inovadores com tecnologia de ponta</p>
            </div>
            <div className="card">
              <h3>Prototipagem Rápida</h3>
              <p>Criação de protótipos avançados para validação de conceitos</p>
            </div>
          </div>

          <button onClick={() => scrollCarousel(1)} className="carouselBtn">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
