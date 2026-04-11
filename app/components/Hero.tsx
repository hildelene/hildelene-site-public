'use client';

import { useScrollPosition } from '@/app/hooks/useScrollPosition';
import Background from './Background';
import { useRef } from 'react';

export default function Hero() {
  const scrollY = useScrollPosition();
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
          Do zero ao <span className="gold">que realmente importa</span>
        </h1>

        <p>Engenharia, tecnologia e comprometimento construindo algo maior.</p>

        <div className="buttons">
          <button className="primary">Acompanhar</button>
          <button className="secondary">Participar</button>
          <button className="secondary">Cooperar</button>
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
