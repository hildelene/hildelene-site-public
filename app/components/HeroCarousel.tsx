
"use client";
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import NewsCard from './NewsCard';

// Dados dos slides de Projetos
const projetosSlides = [
  {
    id: 1,
    image: "/midia/herocarousel/hero-proj1.svg",
    title: "Projetos DUNA",
    date: "",
    description: "Nosso principal objetivo é a competição DUNA, além disso oferecemos serviços para arrecadação de verba. Também participamos em outros eventos paralelos como feiras e amostras.",
    link: ""
  },
  {
    id: 2,
    image: "/midia/herocarousel/hero-proj2.svg",
    title: "O que é o DUNA?",
    date: "",
    description: "O DUNA - Desafio Universitário de Nautidesign é um projeto criado pela UFSC, que consiste numa competição universitária inédita no Brasil e de abrangência internacional. O objetivo é fomentar a geração de inovações na área de Engenharia Naval e estimular a interação entre alunos de engenharia, sobretudo, da área naval.",
    link: ""
  },
  {
    id: 3,
    image: "/midia/herocarousel/hero-proj3.svg",
    title: "Barco Maia",
    date: "",
    description: "O barco Maia, nomeado em homenagem a Gabriel Maia, primeiro projetista da equipe, é um modelo funcional de um rebocador em escala reduzida, criado para disputar a competição DUNA 2024 em Joinville, SC.",
    link: ""
  },
  {
    id: 4,
    image: "/midia/herocarousel/hero-proj4.svg",
    title: "Big Field V1",
    date: "",
    description: "O Big Field V1 é um rebocador projetado para alto desempenho em tração e estabilidade, com casco em chapa de alumínio de 4 mm, sistema direcional com leme Kaplan e skeg, transmissão mecânica otimizada e novos componentes elétricos.",
    link: ""
  },
  {
    id: 5,
    image: "/midia/herocarousel/hero-proj5.svg",
    title: "Big Field V2",
    date: "",
    description: "O Big Field V2 é uma evolução em desenvolvimento, com foco na otimização do sistema mecânico, aprimoramento do berço e reforço da segurança elétrica para o DUNA 2026.",
    link: ""
  },
  {
    id: 6,
    image: "/midia/herocarousel/hero-proj6.svg",
    title: "Impressão 3D",
    date: "",
    description: "Oferecemos serviço de impressão 3D com foco em peças de alta complexidade e aplicação funcional, utilizando diferentes materiais como PLA, ABS, PETG e resina.",
    link: ""
  },
  {
    id: 7,
    image: "/midia/herocarousel/hero-proj7.svg",
    title: "Modelagem 3D",
    date: "",
    description: "Oferecemos serviços de modelagem 3D com foco técnico e precisão, utilizando softwares como SolidWorks, Rhino, AutoCAD e PropCad para desenvolvimento de geometrias complexas.",
    link: ""
  },
  {
    id: 8,
    image: "/midia/herocarousel/hero-proj8.svg",
    title: "Consultoria Técnica",
    date: "",
    description: "Oferecemos consultoria técnica especializada em gestão, projeto, estrutura, mecânica, eletroeletrônica e comunicação, integrando diferentes frentes para soluções completas.",
    link: ""
  }
];

// Componente padronizado de carousel (igual MainCarousel/NewsCarousel)
export function ProjetosCarousel() {
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
    <section id="projetos" className="main-carousel-section">
      <div className="news-carousel-header animate-fade-in">
        <div className="news-carousel-title">Nossos Projetos</div>
        <div className="news-carousel-divider" />
      </div>
      <div className="relative max-w-xl lg:max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex touch-pan-y">
            {projetosSlides.map((item, index) => (
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

// Wrapper para exibir todos os carrosseis
export default function HeroCarouselsWrapper() {
  return (
    <>
      <ProjetosCarousel />
    </>
  );
}
