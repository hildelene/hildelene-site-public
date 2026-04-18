
"use client";
import { useRef, useState } from 'react';

type Slide = { image: string; text: string };

// Slides para cada carrossel
const projetosSlides: Slide[] = [
  {
    image: "/midia/herocarousel/hero-proj1.svg",
    text: "Nosso principal objetivo é a competição DUNA, além disso oferecemos serviços para arrecadação de verba. Também participamos em outros eventos paralelos como feiras e amostras."
  },
  {
    image: "/midia/herocarousel/hero-proj2.svg",
    text: "O DUNA - Desafio Universitário de Nautidesign é um projeto criado pela Universidade Federal de Santa Catarina - UFSC, Campus Joinville, que consiste numa competição universitária inédita no Brasil e de abrangência internacional. O projeto DUNA, mediante a proposta de uma competição onde universitários são estimulados a desenvolverem e construírem um modelo funcional, em escala reduzida, de uma embarcação do tipo rebocador, tem por objetivo fomentar a geração de inovações na área de Engenharia Naval e estimular a interação entre alunos de engenharia, sobretudo, da área naval. Os modelos concebidos pelas equipes são então submetidos a uma série de provas, que ocorrem em vários dias, a fim de avaliar a qualidade de seu projeto e construção. A primeira edição do evento ocorreu no ano de 2013."
  },
  {
    image: "/midia/herocarousel/hero-proj3.svg",
    text: "O barco Maia, nomeado em homenagem a Gabriel Maia, primeiro projetista da equipe, é um modelo funcional de um rebocador em escala reduzida. O modelo é fruto de meses de trabalho da equipe que que uniram seus conhecimentos para criar uma embarcação tecnicamente robusta e inovadora para disputar a competição DUNA 2024 em Joinville, SC"
  },
  {
    image: "/midia/herocarousel/hero-proj4.svg",
    text: "O Big Field V1 é um rebocador projetado para alto desempenho em tração e estabilidade, com casco em chapa de alumínio de 4 mm que garante robustez, baixo centro de gravidade e durabilidade. Possui sistema direcional com leme Kaplan e skeg, proporcionando controle preciso e estabilidade sob carga, além de uma transmissão mecânica por polias e correias com relação de redução que otimiza o torque nos propulsores. O conjunto é complementado por novos componentes elétricos, resultando em maior eficiência, confiabilidade e resposta operacional."
  },
  {
    image: "/midia/herocarousel/hero-proj5.svg",
    text: "O Big Field V2 é uma evolução em desenvolvimento, voltada a melhorias pontuais para o DUNA 2026, com foco na otimização do sistema mecânico, aprimoramento do berço para melhor fixação e alinhamento dos componentes, e reforço da segurança elétrica, visando maior confiabilidade, organização e robustez operacional sem alterar a base consolidada do projeto anterior."
  },
  {
    image: "/midia/herocarousel/hero-proj6.svg",
    text: "Oferecemos serviço de impressão 3D com foco em peças de alta complexidade e aplicação funcional, incluindo a fabricação de hélices, lemes, suportes estruturais e componentes mecânicos diversos. Possuímos domínio no uso de diferentes materiais, como PLA, ABS, PETG e resina, selecionando cada filamento conforme as exigências de resistência, acabamento e desempenho, garantindo precisão, confiabilidade e ótimo custo-benefício em cada projeto."
  },
  {
    image: "/midia/herocarousel/hero-proj7.svg",
    text: "Oferecemos serviços de modelagem 3D com foco técnico e precisão, utilizando softwares como SolidWorks, Rhino, AutoCAD e PropCad para desenvolvimento de geometrias complexas e aplicações funcionais. Atuamos desde a concepção até o detalhamento, criando modelos otimizados para fabricação, simulação e integração com sistemas reais, sempre priorizando eficiência, organização e fidelidade ao projeto."
  },
  {
    image: "/midia/herocarousel/hero-proj8.svg",
    text: "Oferecemos consultoria técnica especializada nas áreas em que atuamos, integrando diferentes frentes para soluções completas e eficientes. Em gestão, apoiamos no planejamento de cronogramas, controle financeiro e organização de equipes; em projeto, atuamos com modelagem, hidrodinâmica e desenvolvimento de peças mecânicas e navais; na área estrutural, realizamos dimensionamentos, análise de materiais e aplicações industriais; em mecânica, orientamos na escolha e uso de ferramentas e componentes; em eletroeletrônica, auxiliamos na seleção e aplicação de sistemas e materiais; e em comunicação, desenvolvemos estratégias para redes sociais, sites, design e produção audiovisual."
  }
];

const equipeSlides: Slide[] = [
  {
    image: "/midia/herocarousel/hero-eqp1.svg",
    text: "Abrangindo toda a comunidade acadêmica, servimos como berço do desenvolvimento de grandes talentos que serão o futuro da indústria naval."
  },
  {
    image: "/midia/herocarousel/hero-eqp2.svg",
    text: "Nosso laboratório é um espaço de aprendizado prático, onde os membros aplicam conhecimentos teóricos em projetos reais, enfrentando desafios e encontrando soluções inovadoras."
  },
  {
    image: "/midia/herocarousel/hero-eqp3.svg",
    text: "Atualmente nos dividimos em: Gestão, Projeto, Estrutura, Mecânica, Eletroeletrônica e Comunicação."
  }
];

const conquistasSlides: Slide[] = [
  {
    image: "/midia/herocarousel/hero-frt1.svg",
    text: "Premiações: resultados consistentes com evolução contínua do desempenho ao longo dos anos, com destaque para o 8º lugar no DUNA 2025 e o 16º lugar no DUNA 2024."
  },
  {
    image: "/midia/herocarousel/mencoes.svg",
    text: "Menções: destaque em publicação acadêmica na Revista Naval e Oceânica (Rio de Janeiro, v.1, 2025), com artigo científico disponível em: https://www.e-publicacoes.uerj.br/rno/article/view/92021"
  },
  {
    image: "/midia/herocarousel/eventos1.svg",
    text: "Eventos: participação em iniciativas relevantes como o Rio Innovation Week, Rio Boat Show, além de presença em amostras integradas, encontros técnicos e palestras, sempre com a UERJ Hildelene como um dos principais pontos de atração, permitindo ao público conhecer o projeto de perto e interagir diretamente com suas soluções."
  },
  {
    image: "/midia/herocarousel/visitatecnica1.svg",
    text: "Visitas Técnicas: realização de visitas à Transpetro e ao Sindmar, ampliando o contato com o setor marítimo e proporcionando troca direta de conhecimento com profissionais da área."
  },
  {
    image: "/midia/herocarousel/hero-frt4.svg",
    text: "Flaviane"
  },
  {
    image: "/midia/herocarousel/hero-frt5.svg",
    text: "Milena"
  },
  {
    image: "/midia/herocarousel/hero-frt6.svg",
    text: "Bruno Cunha"
  },
  {
    image: "/midia/herocarousel/hero-frt7.svg",
    text: "Gabriel Maia"
  },
  {
    image: "/midia/herocarousel/hero-frt8.svg",
    text: "Luis"
  },
  {
    image: "/midia/herocarousel/hero-frt9.svg",
    text: "Gabriel Gama"
  },
  {
    image: "/midia/herocarousel/hero-frt10.svg",
    text: "Melo"
  },
  {
    image: "/midia/herocarousel/hero-frt11.svg",
    text: "Stancato"
  },
  {
    image: "/midia/herocarousel/hero-frt12.svg",
    text: "Ste"
  }
];

// Componente base para carrossel reutilizável
function CarouselBase({ slides }: { slides: Slide[] }) {
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragDelta, setDragDelta] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Swipe/touch
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

  // Previne seleção de texto ao arrastar
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carouselCard" style={{ position: 'relative', overflow: 'hidden' }}>
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
                height: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className="carouselImage" style={{ backgroundImage: `url('${slide.image}')` }} />
              <div className="carouselText" style={{ whiteSpace: 'normal', wordBreak: 'break-word', flex: 1 }}>
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
  );
}

// Exporta os três carrosseis separados
export function ProjetosCarousel() {
  return <CarouselBase slides={projetosSlides} />;
}

export function EquipeCarousel() {
  return <CarouselBase slides={equipeSlides} />;
}

export function ConquistasCarousel() {
  return <CarouselBase slides={conquistasSlides} />;
}

// Para compatibilidade, exporta um wrapper com os três carrosseis na ordem correta
export default function HeroCarouselsWrapper() {
  return (
    <div className="carouselWrapper">
      <div className="carouselMain">
        <h2 style={{marginBottom: 16}}>Projetos</h2>
        <ProjetosCarousel />
        <h2 style={{margin: '32px 0 16px'}}>Equipe</h2>
        <EquipeCarousel />
        <h2 style={{margin: '32px 0 16px'}}>Conquistas</h2>
        <ConquistasCarousel />
      </div>
    </div>
  );
}
"use client";
