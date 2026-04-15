import { useRef, useState } from 'react';

type TopicKey = 'equipe' | 'projetos' | 'frutos';

export default function HeroCarousel() {
  // Swipe state
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragDelta, setDragDelta] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeTopic, setActiveTopic] = useState<TopicKey>('equipe');
  const [activeSlide, setActiveSlide] = useState(0);

  // Estrutura dos slides por tópico
  const slidesByTopic: Record<TopicKey, { image: string; text: string }[]> = {
    equipe: [
      {
        image: "/images/hero-eqp1.jpg",
        text: "Abrangindo toda a comunidade acadêmica, servimos como berço do desenvolvimento de grandes talentos que serão o futuro da indústria naval."
      },
      {
        image: "/images/hero-eqp2.jpg",
        text: "Nosso laboratório é um espaço de aprendizado prático, onde os membros aplicam conhecimentos teóricos em projetos reais, enfrentando desafios e encontrando soluções inovadoras."
      },
      {
        image: "/images/hero-eqp3.jpg",
        text: "Atualmente nos dividimos em: Gestão, Projeto, Estrutura, Mecânica, Eletroeletrônica e Comunicação."
      }
    ],
    projetos: [
      {
        image: "/images/hero-proj1.jpg",
        text: "Nosso principal objetivo é a competição DUNA, além disso oferecemos serviços para arrecadação de verba. Também participamos em outros eventos paralelos como feiras e amostras."
      },
      {
        image: "/images/hero-proj2.jpg",
        text: "A competição DUNA"
      },
      {
        image: "/images/hero-proj3.jpg",
        text: "Maia"
      },
      {
        image: "/images/hero-proj4.jpg",
        text: "BigField V1"
      },
      {
        image: "/images/hero-proj5.jpg",
        text: "BigField V2"
      },
      {
        image: "/images/hero-proj6.jpg",
        text: "Impressão 3D"
      },
      {
        image: "/images/hero-proj7.jpg",
        text: "Modelagem 3D"
      },
      {
        image: "/images/hero-proj8.jpg",
        text: "Consultoria"
      }
    ],
    frutos: [
      {
        image: "/images/hero-frt1.jpg",
        text: "Premiações"
      },
      {
        image: "/images/hero-frt2.jpg",
        text: "Visitas Técnicas"
      },
      {
        image: "/images/hero-frt3.jpg",
        text: "Menções"
      },
      {
        image: "/images/hero-frt4.jpg",
        text: "Flaviane"
      },
      {
        image: "/images/hero-frt5.jpg",
        text: "Milena"
      },
      {
        image: "/images/hero-frt6.jpg",
        text: "Bruno Cunha"
      },
      {
        image: "/images/hero-frt7.jpg",
        text: "Gabriel Maia"
      },
      {
        image: "/images/hero-frt8.jpg",
        text: "Luis"
      },
      {
        image: "/images/hero-frt9.jpg",
        text: "Gabriel Gama"
      },
      {
        image: "/images/hero-frt10.jpg",
        text: "Melo"
      },
      {
        image: "/images/hero-frt11.jpg",
        text: "Stancato"
      },
      {
        image: "/images/hero-frt12.jpg",
        text: "Ste"
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

  // Funções de swipe/touch
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
    setDragDelta(0);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartX !== null) {
      setDragDelta(e.touches[0].clientX - dragStartX);
    }
  };
  const handleTouchEnd = () => {
    if (dragStartX !== null) {
      if (dragDelta > 50 && activeSlide > 0) {
        setActiveSlide(activeSlide - 1);
      } else if (dragDelta < -50 && activeSlide < slides.length - 1) {
        setActiveSlide(activeSlide + 1);
      }
    }
    setDragStartX(null);
    setDragDelta(0);
  };

  // Mouse drag (desktop)
  const [mouseDown, setMouseDown] = useState(false);
  const handleMouseDown = (e: React.MouseEvent) => {
    setMouseDown(true);
    setDragStartX(e.clientX);
    setDragDelta(0);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (mouseDown && dragStartX !== null) {
      setDragDelta(e.clientX - dragStartX);
    }
  };
  const handleMouseUp = () => {
    if (mouseDown && dragStartX !== null) {
      if (dragDelta > 50 && activeSlide > 0) {
        setActiveSlide(activeSlide - 1);
      } else if (dragDelta < -50 && activeSlide < slides.length - 1) {
        setActiveSlide(activeSlide + 1);
      }
    }
    setMouseDown(false);
    setDragStartX(null);
    setDragDelta(0);
  };

  // Para arrastar no desktop, previne seleção de texto
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
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
        <div className="carousel" ref={carouselRef}>
          <div className="carouselCard" style={{position: 'relative', overflow: 'hidden'}}>
            <div
              className="carouselCardTrack"
              style={{
                display: 'flex',
                transition: dragStartX === null ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
                transform: `translateX(calc(-${activeSlide * 100}% + ${dragDelta}px))`,
                width: `${slides.length * 100}%`,
                position: 'relative',
                cursor: dragStartX !== null || mouseDown ? 'grabbing' : 'grab',
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onDragStart={handleDragStart}
            >
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  style={{
                    minWidth: '100%',
                    maxWidth: '100%',
                    width: '100%',
                    flex: '0 0 100%',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div className="carouselImage" style={{backgroundImage: `url('${slide.image}')`}} />
                  <div className="carouselText" style={{whiteSpace: 'normal', wordBreak: 'break-word'}}>
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
    </div>
  );
}
