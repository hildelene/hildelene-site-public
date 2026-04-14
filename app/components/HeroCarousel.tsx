import { useRef, useState } from 'react';

type TopicKey = 'equipe' | 'projetos' | 'frutos';

export default function HeroCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeTopic, setActiveTopic] = useState<TopicKey>('equipe');
  const [activeSlide, setActiveSlide] = useState(0);

  // Estrutura dos slides por tópico
  const slidesByTopic: Record<TopicKey, { image: string; text: string }[]> = {
    equipe: [
      {
        image: "/images/hero-eqp1.jpg",
        text: "Equipe: Slide 1 - Liderança e integração de talentos multidisciplinares."
      },
      {
        image: "/images/hero-eqp2.jpg",
        text: "Equipe: Slide 2 - Experiência em projetos reais e formação contínua."
      },
      {
        image: "/images/hero-eqp3.jpg",
        text: "Equipe: Slide 3 - Compromisso com a excelência e inovação."
      }
    ],
    projetos: [
      {
        image: "/images/hero-proj1.jpg",
        text: "Projetos: Slide 1 - Desenvolvimento de embarcações sustentáveis."
      },
      {
        image: "/images/hero-proj2.jpg",
        text: "Projetos: Slide 2 - Parcerias com a indústria naval e acadêmica."
      }
    ],
    frutos: [
      {
        image: "/images/hero-frt1.jpg",
        text: "Frutos: Slide 1 - Ex-membros em posições de destaque no setor."
      },
      {
        image: "/images/hero-frt2.jpg",
        text: "Frutos: Slide 2 - Pesquisas premiadas em congressos nacionais e internacionais."
      },
      {
        image: "/images/hero-frt3.jpg",
        text: "Frutos: Slide 3 - Iniciativas de impacto social e ambiental."
      },
      {
        image: "/images/hero-frt4.jpg",
        text: "Frutos: Slide 4 - Contribuições relevantes para o setor marítimo brasileiro."
      }
    ]
  };

  const menuLabels: { key: TopicKey; label: string }[] = [
    { key: 'equipe', label: 'Equipe' },
    { key: 'projetos', label: 'Projetos' },
    { key: 'frutos', label: 'Frutos' }
  ];

  // Slides do tópico ativo
  const slides = slidesByTopic[activeTopic];

  // Troca de tópico: reseta slide para 0
  const handleTopicChange = (topicKey: TopicKey) => {
    setActiveTopic(topicKey);
    setActiveSlide(0);
  };

  return (
    <div className="carouselWrapper">
      <div className="carouselSidebar">
        {menuLabels.map(({ key, label }) => (
          <button
            key={key}
            className={`carouselMenuBtn${activeTopic === key ? " active" : ""}`}
            onClick={() => handleTopicChange(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="carouselMain">
        <div className="carousel overflow-hidden" ref={carouselRef} style={{position: 'relative', width: '100%'}}>
          <div
            className="carouselTrack"
            style={{
              display: 'flex',
              transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
              transform: `translateX(-${activeSlide * 100}%)`,
              width: `${slides.length * 100}%`
            }}
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="carouselCard"
                style={{
                  minWidth: '100%',
                  maxWidth: '100%',
                  flex: '0 0 100%',
                  transition: 'box-shadow 0.3s',
                }}
              >
                <div className="carouselImage" style={{backgroundImage: `url('${slide.image}')`}} />
                <div className="carouselText">
                  <p>{slide.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="carouselIndicators">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`carouselDot${activeSlide === idx ? " active" : ""}`}
                onClick={() => setActiveSlide(idx)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
// Removida chave extra
}
