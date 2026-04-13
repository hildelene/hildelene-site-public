'use client';

import Background from './Background';
import { useRef, useState } from 'react';

export default function Hero() {

  // Conteúdos do carrossel
  const carouselContents = [
    {
      image: "/images/hero-ocean-dark.jpg",
      text: "Do zero ao mar, nosso time projeta, desenvolve e constrói rebocadores inovadores para atender as demandas da indústria naval."
    },
    {
      image: "/images/hero-projetos.jpg",
      text: "Projetos desafiadores unem teoria e prática, promovendo inovação e crescimento profissional para todos os membros."
    },
    {
      image: "/images/hero-desenvolvimento.jpg",
      text: "Desenvolvimento profissional contínuo: aprendizados técnicos, liderança e trabalho em equipe para o futuro da indústria naval."
    }
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

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
            <button
              className={`carouselMenuBtn${carouselIndex === 0 ? ' active' : ''}`}
              onClick={() => setCarouselIndex(0)}
              aria-label="A Equipe"
            >
              <span style={{fontSize: '0.95rem'}}>A Equipe</span>
            </button>
            <button
              className={`carouselMenuBtn${carouselIndex === 1 ? ' active' : ''}`}
              onClick={() => setCarouselIndex(1)}
              aria-label="Projetos"
            >
              <span style={{fontSize: '0.95rem'}}>Projetos</span>
            </button>
            <button
              className={`carouselMenuBtn${carouselIndex === 2 ? ' active' : ''}`}
              onClick={() => setCarouselIndex(2)}
              aria-label="Desenvolvimento Profissional"
            >
              <span style={{fontSize: '0.85rem'}}>Desenvolvimento Profissional</span>
            </button>
          </div>
          <div className="carouselMain">
            <div className="carousel">
              <div className="card">
                <div
                  className="carouselImage"
                  style={{backgroundImage: `url('${carouselContents[carouselIndex].image}')`}}
                />
                <div className="carouselText">
                  <p>{carouselContents[carouselIndex].text}</p>
                </div>
                <div className="carouselIndicators">
                  {carouselContents.map((_, idx) => (
                    <span
                      key={idx}
                      className={`carouselDot${carouselIndex === idx ? ' active' : ''}`}
                      aria-label={`Slide ${idx+1}`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
