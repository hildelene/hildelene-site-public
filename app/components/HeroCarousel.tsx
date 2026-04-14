import { useRef, useState } from 'react';

export default function HeroCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Slides do carousel
  const slides = [
    {
      image: "/images/hero-ocean-dark.jpg",
      text: "Abrangendo toda a comunidade acadêmica, servimos como berço do desenvolvimento de excelentes profissionais, criativos e capacitados na resolução de problemas, que serão cruciais para o futuro da indústria naval."
    },
    {
      image: "/images/hero-projetos.jpg",
      text: "Projetos inovadores desenvolvidos por nossos membros, impactando a engenharia naval e a comunidade acadêmica."
    },
    {
      image: "/images/hero-frutos.jpg",
      text: "Nossos frutos: profissionais de destaque, pesquisas premiadas e contribuições relevantes para o setor marítimo."
    }
  ];

  // Labels dos botões
  const menuLabels = ["A Equipe", "Projetos", "Frutos"];

  return (
    <div className="carouselWrapper">
      <div className="carouselSidebar">
        {menuLabels.map((label, idx) => (
          <button
            key={label}
            className={`carouselMenuBtn${activeIndex === idx ? " active" : ""}`}
            onClick={() => setActiveIndex(idx)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="carouselMain">
        <div className="carousel" ref={carouselRef}>
          <div className="carouselCard">
            <div className="carouselImage" style={{backgroundImage: `url('${slides[activeIndex].image}')`}} />
            <div className="carouselText">
              <p>{slides[activeIndex].text}</p>
            </div>
            <div className="carouselIndicators">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`carouselDot${activeIndex === idx ? " active" : ""}`}
                  onClick={() => setActiveIndex(idx)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
