import { useRef } from 'react';

export default function HeroCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // TODO: Substituir por dados dinâmicos se necessário
  const slides = [
    {
      image: "/images/hero-ocean-dark.jpg",
      text: "Do zero ao mar, nosso time projeta, desenvolve e constrói rebocadores inovadores para atender as demandas da indústria naval."
    },
    // Adicione mais slides se desejar
  ];

  // TODO: Lógica de navegação por sidebar

  return (
    <div className="carouselWrapper">
      <div className="carouselSidebar">
        <button className="carouselMenuBtn">A Equipe</button>
        <button className="carouselMenuBtn">Projetos</button>
        <button className="carouselMenuBtn">Desenvolvimento Profissional</button>
      </div>
      <div className="carouselMain">
        <div className="carousel" ref={carouselRef}>
          <div className="card">
            <div className="carouselImage" style={{backgroundImage: `url('${slides[0].image}')`}} />
            <div className="carouselText">
              <p>{slides[0].text}</p>
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
  );
}
