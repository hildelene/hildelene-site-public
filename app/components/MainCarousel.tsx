
// Exportação default correta para MainCarousel

// Wrapper que exibe ambos os carrosseis
function MainCarouselWrapper() {
  return (
    <>
      <EquipeCarousel />
      <ConquistasCarousel />
    </>
  );
}

export default MainCarouselWrapper;
"use client";
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import NewsCard from './NewsCard';

// Dados dos slides de Equipe
const equipeSlides = [
  {
    id: 1,
    image: "/midia/herocarousel/hero-eqp1.svg",
    title: "Equipe 1",
    date: "",
    description: "Abrangindo toda a comunidade acadêmica, servimos como berço do desenvolvimento de grandes talentos que serão o futuro da indústria naval.",
    link: ""
  },
  {
    id: 2,
    image: "/midia/herocarousel/hero-eqp2.svg",
    title: "Equipe 2",
    date: "",
    description: "Nosso laboratório é um espaço de aprendizado prático, onde os membros aplicam conhecimentos teóricos em projetos reais, enfrentando desafios e encontrando soluções inovadoras.",
    link: ""
  },
  {
    id: 3,
    image: "/midia/herocarousel/hero-eqp3.svg",
    title: "Equipe 3",
    date: "",
    description: "Atualmente nos dividimos em: Gestão, Projeto, Estrutura, Mecânica, Eletroeletrônica e Comunicação.",
    link: ""
  }
];

// Dados dos slides de Conquistas
const conquistasSlides = [
  {
    id: 1,
    image: "/midia/herocarousel/hero-frt1.svg",
    title: "Premiações",
    date: "",
    description: "Premiações: resultados consistentes com evolução contínua do desempenho ao longo dos anos, com destaque para o 8º lugar no DUNA 2025 e o 16º lugar no DUNA 2024.",
    link: ""
  },
  {
    id: 2,
    image: "/midia/herocarousel/mencoes.svg",
    title: "Menções",
    date: "",
    description: "Menções: destaque em publicação acadêmica na Revista Naval e Oceânica (Rio de Janeiro, v.1, 2025), com artigo científico disponível em: https://www.e-publicacoes.uerj.br/rno/article/view/92021",
    link: ""
  },
  {
    id: 3,
    image: "/midia/herocarousel/eventos1.svg",
    title: "Eventos",
    date: "",
    description: "Eventos: participação em iniciativas relevantes como o Rio Innovation Week, Rio Boat Show, além de presença em amostras integradas, encontros técnicos e palestras, sempre com a UERJ Hildelene como um dos principais pontos de atração, permitindo ao público conhecer o projeto de perto e interagir diretamente com suas soluções.",
    link: ""
  },
  {
    id: 4,
    image: "/midia/herocarousel/visitatecnica1.svg",
    title: "Visitas Técnicas",
    date: "",
    description: "Visitas Técnicas: realização de visitas à Transpetro e ao Sindmar, ampliando o contato com o setor marítimo e proporcionando troca direta de conhecimento com profissionais da área.",
    link: ""
  },
  {
    id: 5,
    image: "/midia/herocarousel/hero-frt4.svg",
    title: "Flaviane",
    date: "",
    description: "Flaviane",
    link: ""
  },
  {
    id: 6,
    image: "/midia/herocarousel/hero-frt5.svg",
    title: "Milena",
    date: "",
    description: "Milena",
    link: ""
  },
  {
    id: 7,
    image: "/midia/herocarousel/hero-frt6.svg",
    title: "Bruno Cunha",
    date: "",
    description: "Bruno Cunha",
    link: ""
  },
  {
    id: 8,
    image: "/midia/herocarousel/hero-frt7.svg",
    title: "Gabriel Maia",
    date: "",
    description: "Gabriel Maia",
    link: ""
  },
  {
    id: 9,
    image: "/midia/herocarousel/hero-frt8.svg",
    title: "Luis",
    date: "",
    description: "Luis",
    link: ""
  },
  {
    id: 10,
    image: "/midia/herocarousel/hero-frt9.svg",
    title: "Gabriel Gama",
    date: "",
    description: "Gabriel Gama",
    link: ""
  },
  {
    id: 11,
    image: "/midia/herocarousel/hero-frt10.svg",
    title: "Melo",
    date: "",
    description: "Melo",
    link: ""
  },
  {
    id: 12,
    image: "/midia/herocarousel/hero-frt11.svg",
    title: "Stancato",
    date: "",
    description: "Stancato",
    link: ""
  },
  {
    id: 13,
    image: "/midia/herocarousel/hero-frt12.svg",
    title: "Ste",
    date: "",
    description: "Ste",
    link: ""
  }
];

export function EquipeCarousel() {
  return <MainCarousel data={equipeSlides} sectionId="equipe" title="A Equipe" />;
}

export function ConquistasCarousel() {
  return <MainCarousel data={conquistasSlides} sectionId="conquistas" title="Conquistas" />;
}

import type { NewsItem } from '../data/newsData';

interface MainCarouselProps {
  data: NewsItem[];
  sectionId: string;
  title: string;
}

function MainCarousel({ data, sectionId, title }: MainCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [parallaxValues, setParallaxValues] = useState<number[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const updateParallax = useCallback(() => {
    if (!emblaApi) return;
    const progress = emblaApi.scrollProgress();
    const snaps = emblaApi.scrollSnapList();
    const nextValues = snaps.map((snap) => {
      const diffToTarget = snap - progress;
      return diffToTarget * -35;
    });
    setParallaxValues(nextValues);
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    updateParallax();
    emblaApi.on('scroll', updateParallax);
    emblaApi.on('select', updateParallax);
    emblaApi.on('reInit', updateParallax);
    return () => {
      emblaApi.off('scroll', updateParallax);
      emblaApi.off('select', updateParallax);
      emblaApi.off('reInit', updateParallax);
    };
  }, [emblaApi, updateParallax]);

  const getParallaxStyle = (index: number) => {
    const fallback = 0;
    const value = parallaxValues[index] ?? fallback;
    return {
      transform: `scale(1.08) translateX(${value}%)`,
    };
  };

  return (
    <section id={sectionId} className="main-carousel-section">
      <div className="news-carousel-header animate-fade-in">
        <div className="news-carousel-title">
          {title}
        </div>
        <div className="news-carousel-divider" />
      </div>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex touch-pan-y">
            {data.map((item, index) => (
              <div
                key={item.id}
                className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <NewsCard news={item} imageStyle={getParallaxStyle(index)} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gold p-2 text-navy-dark transition-all duration-200 hover:scale-110 hover:bg-cream sm:left-0 sm:-translate-x-12"
          aria-label="Anterior"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gold p-2 text-navy-dark transition-all duration-200 hover:scale-110 hover:bg-cream sm:right-0 sm:translate-x-12"
          aria-label="Próximo"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-gold w-8'
                  : 'bg-gold/40 w-2 hover:bg-gold/60'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
